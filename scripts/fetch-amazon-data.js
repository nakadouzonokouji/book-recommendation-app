const fs = require('fs');
const path = require('path');

// ビルド時にAmazon商品情報を事前取得するスクリプト
async function fetchAmazonData() {
  console.log('🔍 Amazon商品情報の事前取得を開始...');

  // 環境変数の確認（GitHub Actionsでの実際の変数名に対応）
  const accessKey = process.env.AMAZON_ACCESS_KEY;
  const secretKey = process.env.AMAZON_SECRET_KEY;
  const partnerTag = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'asdfghj12-22';

  console.log('🔑 環境変数確認:');
  console.log('- AMAZON_ACCESS_KEY:', accessKey ? '✅ 設定済み' : '❌ 未設定');
  console.log('- AMAZON_SECRET_KEY:', secretKey ? '✅ 設定済み' : '❌ 未設定');
  console.log('- NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG:', partnerTag);

  if (!accessKey || !secretKey) {
    console.log('⚠️  Amazon APIキーが設定されていません。基本情報のみで動作します。');
    return generateFallbackData();
  }

  try {
    // amazon-paapiライブラリを使用
    const amazonPaapi = require('amazon-paapi');
    
    // 本のデータベースからASINリストを取得
    const booksPath = path.join(__dirname, '../src/app/data/books.ts');
    const newBooksPath = path.join(__dirname, '../src/app/data/newBooks.ts');
    
    // ASINを抽出（簡単な正規表現で）
    const booksContent = fs.readFileSync(booksPath, 'utf8');
    const newBooksContent = fs.readFileSync(newBooksPath, 'utf8');
    
    const asinMatches = [...booksContent.matchAll(/asin:\s*['"`]([^'"`]+)['"`]/g)];
    const newAsinMatches = [...newBooksContent.matchAll(/asin:\s*['"`]([^'"`]+)['"`]/g)];
    
    const allAsins = [
      ...asinMatches.map(match => match[1]),
      ...newAsinMatches.map(match => match[1])
    ];

    console.log(`📚 ${allAsins.length}冊の商品情報を取得中...`);

    const commonParameters = {
      AccessKey: accessKey,
      SecretKey: secretKey,
      PartnerTag: partnerTag,
      PartnerType: 'Associates',
      Marketplace: 'www.amazon.co.jp'
    };

    const amazonData = {};
    
    // バッチで処理（1回に最大10件）
    for (let i = 0; i < allAsins.length; i += 10) {
      const batch = allAsins.slice(i, i + 10);
      
      try {
        const requestParameters = {
          ItemIds: batch,
          Resources: [
            'ItemInfo.Title',
            'Offers.Listings.Price',
            'Offers.Listings.Availability.Message',
            'Images.Primary.Medium',
            'CustomerReviews.StarRating',
            'CustomerReviews.Count'
          ]
        };

        const response = await amazonPaapi.GetItems(commonParameters, requestParameters);
        
        if (response.ItemsResult && response.ItemsResult.Items) {
          response.ItemsResult.Items.forEach(item => {
            const asin = item.ASIN;
            
            // 価格情報
            let price = '価格未設定';
            if (item.Offers && item.Offers.Listings && item.Offers.Listings.length > 0) {
              const listing = item.Offers.Listings[0];
              if (listing.Price && listing.Price.DisplayAmount) {
                price = listing.Price.DisplayAmount;
              }
            }

            // 在庫情報
            let availability = '在庫確認中';
            if (item.Offers && item.Offers.Listings && item.Offers.Listings.length > 0) {
              const listing = item.Offers.Listings[0];
              if (listing.Availability && listing.Availability.Message) {
                availability = listing.Availability.Message;
              }
            }

            // 評価情報
            let rating = null;
            let reviewCount = null;
            if (item.CustomerReviews) {
              if (item.CustomerReviews.StarRating && item.CustomerReviews.StarRating.Value) {
                rating = parseFloat(item.CustomerReviews.StarRating.Value);
              }
              if (item.CustomerReviews.Count) {
                reviewCount = item.CustomerReviews.Count;
              }
            }

            // 著者情報（改善版）
            let author = null;
            if (item.ItemInfo) {
              if (item.ItemInfo.ByLineInfo && item.ItemInfo.ByLineInfo.Contributors) {
                const contributors = item.ItemInfo.ByLineInfo.Contributors;
                
                // より広範囲な役割を検索
                const authorRoles = ['Author', '著者', 'Creator', '作者', 'Writer', '執筆者'];
                const authorContributor = contributors.find(contributor => 
                  authorRoles.includes(contributor.Role)
                );
                
                if (authorContributor && authorContributor.Name) {
                  author = authorContributor.Name;
                } else if (contributors.length > 0 && contributors[0].Name) {
                  author = contributors[0].Name;
                }
              }
              
              // 代替：タイトル内から著者抽出を試行
              if (!author && item.ItemInfo.Title && item.ItemInfo.Title.DisplayValue) {
                const titleMatch = item.ItemInfo.Title.DisplayValue.match(/[（(]([^）)]+)[）)]/);
                if (titleMatch && titleMatch[1] && !titleMatch[1].match(/文庫|新書|単行本|ハードカバー/)) {
                  author = titleMatch[1];
                }
              }
            }

            // 画像URL
            let imageUrl = '/placeholder-book.svg';
            if (item.Images && item.Images.Primary && item.Images.Primary.Medium && item.Images.Primary.Medium.URL) {
              imageUrl = item.Images.Primary.Medium.URL;
            }

            amazonData[asin] = {
              asin,
              title: item.ItemInfo.Title.DisplayValue || '商品名未取得',
              author,
              price,
              availability,
              imageUrl,
              rating,
              reviewCount,
              lastUpdated: new Date().toISOString(),
              isRealData: true
            };
          });
        }

        // API制限を考慮して少し待機
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        console.warn(`⚠️  バッチ ${i}-${i+batch.length-1} の取得でエラー:`, error.message);
        
        // エラー時は基本データを設定
        batch.forEach(asin => {
          amazonData[asin] = {
            asin,
            title: '商品情報取得エラー',
            author: null,
            price: 'Amazon で確認',
            availability: 'Amazon で確認',
            imageUrl: '/placeholder-book.svg',
            rating: null,
            reviewCount: null,
            lastUpdated: new Date().toISOString(),
            isBasicData: true,
            error: 'API接続エラー'
          };
        });
      }
    }

    // データを JSON ファイルに保存
    const outputPath = path.join(__dirname, '../public/amazon-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(amazonData, null, 2));

    console.log(`✅ Amazon商品情報の取得完了！ ${Object.keys(amazonData).length}件のデータを保存しました。`);
    
  } catch (error) {
    console.error('❌ Amazon API取得でエラーが発生:', error);
    return generateFallbackData();
  }
}

function generateFallbackData() {
  console.log('📝 基本データを生成中...');
  
  // ASINリストを取得（books.tsとnewBooks.tsから）
  const booksPath = path.join(__dirname, '../src/app/data/books.ts');
  const newBooksPath = path.join(__dirname, '../src/app/data/newBooks.ts');
  
  const booksContent = fs.readFileSync(booksPath, 'utf8');
  const newBooksContent = fs.readFileSync(newBooksPath, 'utf8');
  
  const asinMatches = [...booksContent.matchAll(/asin:\s*['"`]([^'"`]+)['"`]/g)];
  const newAsinMatches = [...newBooksContent.matchAll(/asin:\s*['"`]([^'"`]+)['"`]/g)];
  
  const allAsins = [
    ...asinMatches.map(match => match[1]),
    ...newAsinMatches.map(match => match[1])
  ];

  const fallbackData = {};
  
  allAsins.forEach(asin => {
    fallbackData[asin] = {
      asin,
      title: '商品情報を確認中',
      price: 'Amazon で確認',
      availability: 'Amazon で確認',
      imageUrl: '/placeholder-book.svg',
      rating: null,
      reviewCount: null,
      lastUpdated: new Date().toISOString(),
      isBasicData: true
    };
  });

  const outputPath = path.join(__dirname, '../public/amazon-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(fallbackData, null, 2));
  
  console.log(`📦 基本データを生成しました（${allAsins.length}件）`);
}

// スクリプト実行
fetchAmazonData().catch(console.error);