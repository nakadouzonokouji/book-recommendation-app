'use client';

import { useState } from 'react';
import { Genre, UserPreferences } from '../types';
import { questionsByGenre } from '../data/questions';

interface QuestionFlowProps {
  selectedGenre: Genre;
  onComplete: (preferences: UserPreferences) => void;
  onBack: () => void;
}

export default function QuestionFlow({ selectedGenre, onComplete, onBack }: QuestionFlowProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const questions = questionsByGenre[selectedGenre.id] || [];
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswer = (questionId: string, optionId: string) => {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (!currentQuestion || !answers[currentQuestion.id]) {
      return;
    }

    if (isLastQuestion) {
      // 回答完了 - タグを集計してpreferencesを作成
      const selectedOptions = Object.values(answers);
      const tags: string[] = [];
      
      questions.forEach((question) => {
        const selectedOptionId = answers[question.id];
        if (selectedOptionId) {
          const option = question.options.find(opt => opt.id === selectedOptionId);
          if (option) {
            tags.push(...option.tags);
          }
        }
      });

      const preferences: UserPreferences = {
        genreId: selectedGenre.id,
        selectedOptions,
        tags
      };

      onComplete(preferences);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      onBack();
    }
  };

  if (!currentQuestion) {
    return (
      <div className="text-center">
        <p className="text-red-500">質問データが見つかりません。</p>
        <button 
          onClick={onBack}
          className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
        >
          戻る
        </button>
      </div>
    );
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-8">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {selectedGenre.name} の詳細設定
          </h2>
        </div>
        
        {/* プログレスバー */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          質問 {currentQuestionIndex + 1} / {questions.length}
        </p>
      </div>

      {/* 質問 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
          {currentQuestion.text}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswer(currentQuestion.id, option.id)}
              className={`
                w-full p-4 text-left rounded-lg border-2 transition-all duration-300
                ${answers[currentQuestion.id] === option.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800 dark:text-white">
                  {option.text}
                </span>
                {answers[currentQuestion.id] === option.id && (
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ナビゲーションボタン */}
      <div className="flex justify-between items-center mt-8">
        {/* 戻るボタン */}
        <button
          onClick={currentQuestionIndex > 0 ? handlePrevious : onBack}
          className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          ← {currentQuestionIndex > 0 ? '前の質問' : 'ジャンル選択'}
        </button>

        {/* 進行状況 */}
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {currentQuestionIndex + 1} / {questions.length}
        </span>

        {/* 次へボタン */}
        <button
          onClick={handleNext}
          disabled={!answers[currentQuestion.id]}
          className={`
            flex items-center gap-2 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md
            ${answers[currentQuestion.id]
              ? 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }
          `}
        >
          {isLastQuestion ? '本を探す 🔍' : '次の質問へ →'}
        </button>
      </div>
    </div>
  );
}