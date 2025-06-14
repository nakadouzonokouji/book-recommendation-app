'use client';

import { UserPreferences } from '../types';
import { recommendBooks, getRecommendationExplanation, RecommendationResult } from '../utils/recommendation';

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
  console.log('Recommendations:', recommendations);

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
  const explanation = getRecommendationExplanation(result, preferences);

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

          {/* 本の情報 */}
          <div className="flex-grow">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {book.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">
                著者: {book.author}
              </p>
            </div>

            {/* あらすじセクション */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                📖 あらすじ
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border-l-4 border-blue-400">
                {book.description}
              </p>
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