import { Book } from '../types';
import { generateAmazonLink, generateKindleLink } from '../utils/amazonLinks';

// 2024年10月〜2025年1月の新刊本
export const newBooks: Book[] = [
  // 恋愛新刊
  {
    id: 'new_romance_001',
    title: '私の推しは悪役令嬢。2024冬',
    author: 'いのり',
    description: '2024年12月発売。悪役令嬢に恋をしてしまったメイドの甘く切ない恋愛物語。SNSで話題沸騰の最新作。',
    asin: '4041000000', // 仮のASIN
    amazonUrl: generateAmazonLink({ asin: '4041000000' }),
    tags: ['modern', 'contemporary', 'sweet', 'emotional', 'japanese'],
    rating: 4.3,
    genre: 'romance',
    publishDate: '2024-12-15'
  },
  {
    id: 'new_romance_002', 
    title: '恋する統計学',
    author: '数学カフェ',
    description: '2024年11月発売。統計学者と編集者の理系恋愛小説。データと感情が交差する現代的なラブストーリー。',
    asin: '4041000001',
    amazonUrl: generateAmazonLink({ asin: '4041000001' }),
    tags: ['modern', 'contemporary', 'sweet', 'japanese'],
    rating: 4.1,
    genre: 'romance',
    publishDate: '2024-11-20'
  },

  // ミステリー新刊
  {
    id: 'new_mystery_001',
    title: 'SNS殺人事件',
    author: '令和推理作家',
    description: '2024年12月発売。SNSの投稿から始まる現代的な殺人事件。デジタル時代の新しいミステリー。',
    asin: '4041000002',
    amazonUrl: generateAmazonLink({ asin: '4041000002' }),
    tags: ['modern', 'contemporary', 'puzzle', 'logic', 'standalone'],
    rating: 4.2,
    genre: 'mystery',
    publishDate: '2024-12-10'
  },
  {
    id: 'new_mystery_002',
    title: 'AI探偵の事件簿',
    author: '未来探偵団',
    description: '2024年10月発売。AI技術を駆使した探偵が挑む難事件。テクノロジーと推理が融合した近未来ミステリー。',
    asin: '4041000003',
    amazonUrl: generateAmazonLink({ asin: '4041000003' }),
    tags: ['modern', 'contemporary', 'classic', 'puzzle', 'series'],
    rating: 4.4,
    genre: 'mystery',
    publishDate: '2024-10-25'
  },

  // ファンタジー新刊
  {
    id: 'new_fantasy_001',
    title: 'メタバース勇者',
    author: 'VR小説家',
    description: '2024年11月発売。仮想世界で勇者になった高校生の成長物語。現代とファンタジーが融合した新感覚作品。',
    asin: '4041000004',
    amazonUrl: generateAmazonLink({ asin: '4041000004' }),
    tags: ['urban-fantasy', 'modern-magic', 'contemporary', 'personal', 'coming-of-age'],
    rating: 4.0,
    genre: 'fantasy',
    publishDate: '2024-11-30'
  },

  // ビジネス新刊
  {
    id: 'new_business_001',
    title: 'ChatGPT時代の働き方',
    author: 'AI活用コンサルタント',
    description: '2024年12月発売。生成AI時代に求められる新しいスキルと働き方を解説。実践的なAI活用術も満載。',
    asin: '4041000005',
    amazonUrl: generateAmazonLink({ asin: '4041000005' }),
    tags: ['skill', 'practical', 'actionable', 'modern', 'technology'],
    rating: 4.3,
    genre: 'business',
    publishDate: '2024-12-01'
  },

  // エッセイ新刊
  {
    id: 'new_essay_001',
    title: '令和を生きる',
    author: '現代エッセイスト',
    description: '2024年10月発売。令和の時代を生きる人々の等身大の想いを綴ったエッセイ集。共感必至の現代人の心境。',
    asin: '4041000006',
    amazonUrl: generateAmazonLink({ asin: '4041000006' }),
    tags: ['life', 'philosophy', 'personal', 'experience', 'modern'],
    rating: 4.2,
    genre: 'essay',
    publishDate: '2024-10-15'
  },

  // ホラー新刊
  {
    id: 'new_horror_001',
    title: 'デジタル霊',
    author: 'ネットホラー作家',
    description: '2024年11月発売。SNSやアプリに潜む現代的な恐怖を描く。スマホ画面から始まる新感覚ホラー。',
    asin: '4041000007',
    amazonUrl: generateAmazonLink({ asin: '4041000007' }),
    tags: ['psychological', 'modern', 'contemporary', 'supernatural'],
    rating: 4.1,
    genre: 'horror',
    publishDate: '2024-11-05'
  },

  // 歴史新刊
  {
    id: 'new_historical_001',
    title: '昭和の記憶',
    author: '現代歴史作家',
    description: '2024年12月発売。昭和時代を生きた人々の証言を基にした感動の歴史小説。戦後復興期の人間ドラマ。',
    asin: '4041000008',
    amazonUrl: generateAmazonLink({ asin: '4041000008' }),
    tags: ['showa', 'modern-history', 'daily-life', 'people', 'emotional'],
    rating: 4.5,
    genre: 'historical',
    publishDate: '2024-12-20'
  }
];

// 新刊本かどうかを判定する関数
export const isNewBook = (publishDate?: string): boolean => {
  if (!publishDate) return false;
  
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
  
  const bookDate = new Date(publishDate);
  return bookDate >= threeMonthsAgo;
};

// 新刊フィルター機能
export const getNewBooksByGenre = (genreId: string): Book[] => {
  return newBooks.filter(book => book.genre === genreId);
};

// 全ての新刊を取得
export const getAllNewBooks = (): Book[] => {
  return newBooks;
};