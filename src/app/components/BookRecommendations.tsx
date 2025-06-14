'use client';

import { UserPreferences } from '../types';
import { recommendBooks, getRecommendationExplanation, RecommendationResult } from '../utils/recommendation';
import { isNewBook } from '../data/newBooks';
import { useAmazonProduct } from '../hooks/useAmazonProduct';

interface BookRecommendationsProps {
  preferences: UserPreferences;
  onBack: () => void;
  onRestart: () => void;
}

export default function BookRecommendations({ preferences, onBack, onRestart }: BookRecommendationsProps) {
  const recommendations = recommendBooks(preferences, 5);
  
  // デバッグ情報をコンソールに出力
  console.log('Genre:', preferences.genreId);
  console.log('User preferences tags:', preferences.tags);
  console.log('Recommendations found:', recommendations.length);
  console.log('Recommendations:', recommendations.map(r => ({ 
    title: r.book.title, 
    genre: r.book.genre, 
    score: r.score, 
    matchedTags: r.matchedTags 
  })));
  
  // 推薦された本のタイトルを明確に表示
  console.log('🎯 推薦された本のタイトル:', recommendations.map(r => r.book.title));

  return (
    <div className="max-w-4xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          📚 あなたにおすすめの本
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          あなたの好みに合わせて厳選した{recommendations.length}冊をご紹介します
        </p>
        
        <div className="flex justify-center gap-4 mt-6">
          <button 
            onClick={onBack}
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            ← 設定を変更
          </button>
          <button 
            onClick={onRestart}
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg"
          >
            最初からやり直す
          </button>
        </div>
      </div>

      {/* 推薦結果 */}
      {recommendations.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
            申し訳ありませんが、条件に合う本が見つかりませんでした。
          </p>
          <button 
            onClick={onBack}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
          >
            設定を変更してみる
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {recommendations.map((result, index) => (
            <BookCard 
              key={result.book.id}
              result={result}
              preferences={preferences}
              rank={index + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface BookCardProps {
  result: RecommendationResult;
  preferences: UserPreferences;
  rank: number;
}

function BookCard({ result, preferences, rank }: BookCardProps) {
  const { book } = result;
  const explanation = getRecommendationExplanation(result);
  const { data: amazonData, loading: amazonLoading } = useAmazonProduct(book.asin);
  
  // デバッグ: Amazon APIから取得したタイトルを確認
  if (amazonData?.title && amazonData.title !== book.title) {
    console.log(`📚 タイトル相違: DB="${book.title}" vs Amazon="${amazonData.title}"`);
  }

  const handleAmazonClick = () => {
    window.open(book.amazonUrl, '_blank', 'noopener,noreferrer');
  };

  const handleKindleClick = () => {
    if (book.kindleUrl) {
      window.open(book.kindleUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start gap-6">
          {/* ランキング */}
          <div className="flex-shrink-0">
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg
              ${rank === 1 ? 'bg-yellow-500' : rank === 2 ? 'bg-gray-400' : rank === 3 ? 'bg-amber-600' : 'bg-blue-500'}
            `}>
              {rank}
            </div>
          </div>

          {/* Amazon画像 */}
          <div className="flex-shrink-0">
            {amazonData && amazonData.imageUrl && amazonData.imageUrl !== '/placeholder-book.svg' ? (
              <img
                src={amazonData.imageUrl}
                alt={book.title}
                className="w-24 h-32 object-cover rounded-lg shadow-md border"
                onError={(e) => {
                  console.error('Amazon画像読み込みエラー:', amazonData.imageUrl);
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-24 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                <span className="text-xs text-center">📚<br/>画像<br/>取得中</span>
              </div>
            )}
          </div>

          {/* 本の情報 */}
          <div className="flex-grow">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {amazonData?.title || book.title}
                </h3>
                {book.publishDate && isNewBook(book.publishDate) && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                    NEW
                  </span>
                )}
              </div>
            </div>

            {/* 参考情報としてのあらすじ */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                📖 内容紹介（参考）
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border-l-4 border-gray-400 italic">
                {book.description}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                ※ 表示された本と内容が異なる場合があります
              </p>
            </div>

            {/* ジャンル・出版情報 */}
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs px-2 py-1 rounded-full font-medium">
                📚 {book.genre === 'romance' ? '恋愛' : 
                     book.genre === 'adventure' ? '冒険・アクション' : 
                     book.genre === 'mystery' ? 'ミステリー' : 
                     book.genre === 'fantasy' ? 'ファンタジー・SF' : 
                     book.genre === 'business' ? 'ビジネス・自己啓発' : 
                     book.genre === 'essay' ? 'エッセイ・ノンフィクション' : 
                     book.genre === 'horror' ? 'ホラー・スリラー' : 
                     book.genre === 'historical' ? '歴史・時代小説' : book.genre}
              </span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded-full font-medium">
                🔖 ASIN: {book.asin}
              </span>
              {book.publishDate && (
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium">
                  📅 {new Date(book.publishDate).getFullYear()}年
                </span>
              )}
            </div>

            {/* おすすめ理由 */}
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <span className="font-semibold">おすすめ理由:</span> {explanation}
              </p>
            </div>

            {/* 評価 */}
            <div className="mb-4 flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-300">評価:</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i}
                    className={i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-gray-600 dark:text-gray-300">
                  {book.rating.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Amazon リアルタイム情報 */}
            <div className="mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">📦 Amazon 最新情報</span>
                {amazonLoading && (
                  <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                )}
                {/* デバッグ情報 */}
                <span className="text-xs text-gray-500">
                  (ASIN: {book.asin})
                </span>
              </div>
              
              {amazonData ? (
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">価格:</span>
                    <span className="font-medium text-orange-700 dark:text-orange-300">
                      {amazonData.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">在庫:</span>
                    <span className="text-green-600 dark:text-green-400 text-xs">
                      {amazonData.availability}
                    </span>
                  </div>
                  {amazonData.rating && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Amazon評価:</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-yellow-700 dark:text-yellow-300">
                          {amazonData.rating.toFixed(1)}
                        </span>
                        {amazonData.reviewCount && (
                          <span className="text-gray-500 text-xs">
                            ({amazonData.reviewCount}件)
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  {amazonData.isBasicData && (
                    <div className="text-xs text-gray-500 mt-1">
                      ※ API未設定のため基本情報のみ表示
                    </div>
                  )}
                  {amazonData.error && (
                    <div className="text-xs text-red-500 mt-1">
                      ❌ エラー: {amazonData.error}
                    </div>
                  )}
                </div>
              ) : amazonLoading ? (
                <div className="text-sm text-gray-500">価格・在庫情報を取得中...</div>
              ) : (
                <div className="text-sm text-red-500">
                  ❌ 情報取得に失敗しました
                  <div className="text-xs mt-1">
                    JSONファイルまたはネットワークエラー
                  </div>
                </div>
              )}
            </div>

            {/* 購入リンク */}
            <div className="flex gap-3">
              <button
                onClick={handleAmazonClick}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 text-center"
              >
                📚 Amazonで購入
              </button>
              {book.kindleUrl && (
                <button
                  onClick={handleKindleClick}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 text-center"
                >
                  📱 Kindle版
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}