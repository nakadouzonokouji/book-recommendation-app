'use client';

import { useState } from 'react';
import { Genre, UserPreferences } from './types';
import QuestionFlow from './components/QuestionFlow';
import BookRecommendations from './components/BookRecommendations';

const genres: Genre[] = [
  { id: 'romance', name: '恋愛もの', icon: '💕', description: '心温まる恋愛ストーリー' },
  { id: 'adventure', name: '冒険・アクション', icon: '⚔️', description: 'スリル満点の冒険活劇' },
  { id: 'mystery', name: 'ミステリー・サスペンス', icon: '🔍', description: '謎解きとサスペンス' },
  { id: 'fantasy', name: 'ファンタジー・SF', icon: '🚀', description: '想像力豊かな異世界' },
  { id: 'business', name: 'ビジネス・自己啓発', icon: '📈', description: '成長とスキルアップ' },
  { id: 'essay', name: 'エッセイ・ノンフィクション', icon: '📝', description: '人生を豊かにする読み物' },
  { id: 'horror', name: 'ホラー・スリラー', icon: '👻', description: 'ゾクゾクする恐怖体験' },
  { id: 'historical', name: '歴史・時代小説', icon: '🏛️', description: '過去への時間旅行' }
];

type AppState = 'genre-selection' | 'question-flow' | 'recommendations';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('genre-selection');
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);

  const handleGenreSelect = (genreId: string) => {
    const genre = genres.find(g => g.id === genreId);
    if (genre) {
      setSelectedGenre(genre);
      setAppState('question-flow');
    }
  };

  const handleQuestionComplete = (preferences: UserPreferences) => {
    setUserPreferences(preferences);
    setAppState('recommendations');
  };

  const handleBackToGenres = () => {
    setAppState('genre-selection');
    setSelectedGenre(null);
    setUserPreferences(null);
  };

  const handleBackToQuestions = () => {
    setAppState('question-flow');
    setUserPreferences(null);
  };

  const handleRestart = () => {
    setAppState('genre-selection');
    setSelectedGenre(null);
    setUserPreferences(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {appState === 'genre-selection' && (
          <>
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                📚 今日はどんな本が読みたい？
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                あなたの気分に合わせて、ぴったりの本をおすすめします
              </p>
            </header>

            <main className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {genres.map((genre) => (
                  <button
                    key={genre.id}
                    onClick={() => handleGenreSelect(genre.id)}
                    className="group relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-md hover:shadow-lg"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {genre.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {genre.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {genre.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </main>
          </>
        )}

        {appState === 'question-flow' && selectedGenre && (
          <QuestionFlow 
            selectedGenre={selectedGenre}
            onComplete={handleQuestionComplete}
            onBack={handleBackToGenres}
          />
        )}

        {appState === 'recommendations' && userPreferences && (
          <BookRecommendations 
            preferences={userPreferences}
            onBack={handleBackToQuestions}
            onRestart={handleRestart}
          />
        )}

        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">
            本のレコメンデーションアプリ - あなたの読書体験をより豊かに
          </p>
        </footer>
      </div>
    </div>
  );
}
