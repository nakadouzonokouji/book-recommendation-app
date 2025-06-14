import { Book, UserPreferences } from '../types';
import { booksDatabase } from '../data/books';

export interface RecommendationResult {
  book: Book;
  score: number;
  matchedTags: string[];
}

export const recommendBooks = (preferences: UserPreferences, limit: number = 5): RecommendationResult[] => {
  // ジャンルでフィルタリング
  const genreBooks = booksDatabase.filter(book => book.genre === preferences.genreId);
  
  console.log(`Found ${genreBooks.length} books for genre: ${preferences.genreId}`);
  
  // 各本にスコアを計算
  const scoredBooks: RecommendationResult[] = genreBooks.map(book => {
    const matchedTags = book.tags.filter(tag => preferences.tags.includes(tag));
    const tagMatchScore = matchedTags.length;
    const tagMatchRatio = preferences.tags.length > 0 ? matchedTags.length / preferences.tags.length : 0;
    const ratingBonus = book.rating * 0.2; // 評価をボーナスとして追加
    
    // スコア計算: タグマッチ数 + タグマッチ率 + 評価ボーナス
    // タグマッチがない場合でも評価ボーナスで順位が決まる
    const score = tagMatchScore * 2 + tagMatchRatio + ratingBonus;
    
    return {
      book,
      score,
      matchedTags
    };
  });
  
  // スコア順でソート（降順）
  scoredBooks.sort((a, b) => b.score - a.score);
  
  console.log('Scored books:', scoredBooks.map(b => ({ title: b.book.title, score: b.score, matchedTags: b.matchedTags.length })));
  
  // 上位の本を返す（ジャンル内の全ての本が対象）
  return scoredBooks.slice(0, Math.min(limit, genreBooks.length));
};

export const getRecommendationExplanation = (result: RecommendationResult): string => {
  const { book, matchedTags } = result;
  
  if (matchedTags.length === 0) {
    return `${book.genre}ジャンルの人気作品として選ばれました。`;
  }
  
  const tagExplanations: Record<string, string> = {
    // 恋愛
    'modern': '現代的な設定',
    'contemporary': '現代的',
    'historical': '歴史的背景',
    'period': '時代設定',
    'sweet': '甘い恋愛',
    'happy': '幸せな展開',
    'bittersweet': '切ない恋愛',
    'emotional': '感動的',
    'passionate': '情熱的',
    'dramatic': 'ドラマチック',
    'japanese': '日本の作品',
    'foreign': '海外の作品',
    
    // 冒険
    'fantasy': 'ファンタジー',
    'magic': '魔法',
    'realistic': '現実的',
    'solo': '単独行動',
    'team': '仲間との冒険',
    'friendship': '友情',
    'mentor': '師弟関係',
    'growth': '成長物語',
    'short': '短編',
    'long': '長編',
    'epic': '壮大',
    
    // ミステリー
    'classic': '本格推理',
    'puzzle': 'パズル型',
    'hardboiled': 'ハードボイルド',
    'cozy': 'コージー',
    'series': 'シリーズ',
    'standalone': '単発',
    
    // ファンタジー・SF
    'high-fantasy': 'ハイファンタジー',
    'sci-fi': 'SF',
    'urban-fantasy': 'アーバンファンタジー',
    'personal': '個人的な物語',
    'coming-of-age': '成長物語',
    'light': '明るい雰囲気',
    'comedy': 'コメディ',
    'dark': 'ダークな雰囲気',
    
    // ビジネス
    'skill': 'スキルアップ',
    'mindset': 'マインドセット',
    'career': 'キャリア',
    'practical': '実践的',
    'theoretical': '理論的',
    'story-based': 'ストーリー形式',
    'beginner': '初心者向け',
    'intermediate': '中級者向け',
    
    // エッセイ
    'life': '人生・生き方',
    'philosophy': '哲学的',
    'culture': '文化・社会',
    'experience': '個人的体験',
    'serious': '真面目',
    'humorous': 'ユーモア',
    'touching': '感動的',
    
    // ホラー
    'psychological': '心理的恐怖',
    'supernatural': '超自然',
    'gore': 'ゴア',
    'mild': 'マイルド',
    'intense': '本格的',
    
    // 歴史
    'ancient': '古代',
    'sengoku': '戦国時代',
    'edo': '江戸時代',
    'meiji': '明治時代',
    'politics': '政治・戦争',
    'daily-life': '日常・暮らし',
    'art': '文化・芸術',
    'entertaining': 'エンタメ重視'
  };
  
  const explanations = matchedTags
    .map(tag => tagExplanations[tag])
    .filter(explanation => explanation)
    .slice(0, 3); // 最大3つまで
  
  if (explanations.length > 0) {
    return `あなたの「${explanations.join('、')}」の好みにマッチしています。`;
  }
  
  return 'あなたの好みに合いそうな作品です。';
};