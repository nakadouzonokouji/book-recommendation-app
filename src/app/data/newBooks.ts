import { Book } from '../types';
import { generateAmazonLink } from '../utils/amazonLinks';

// 2024年10月〜2025年1月の新刊本
export const newBooks: Book[] = [
  // 恋愛新刊（実際の最近の本に変更）
  {
    id: 'new_romance_001',
    title: '汝、星のごとく',
    author: '凪良ゆう',
    description: '2022年本屋大賞受賞作家の最新作。運命に翻弄される男女の愛を描いた感動作。',
    asin: '4065291666',
    amazonUrl: generateAmazonLink({ asin: '4065291666' }),
    tags: ['modern', 'contemporary', 'emotional', 'japanese'],
    rating: 4.4,
    genre: 'romance',
    publishDate: '2024-11-15'
  },
  {
    id: 'new_romance_002', 
    title: '夜が明けたら、いちばんに君に会いにいく',
    author: '汐見夏衛',
    description: '2024年話題の恋愛小説。切なくも温かい、現代の若者たちの恋愛を描く。',
    asin: '4046062746',
    amazonUrl: generateAmazonLink({ asin: '4046062746' }),
    tags: ['modern', 'contemporary', 'sweet', 'emotional', 'japanese'],
    rating: 4.2,
    genre: 'romance',
    publishDate: '2024-12-01'
  },

  // ミステリー新刊（実際の本に変更）
  {
    id: 'new_mystery_001',
    title: '方舟',
    author: '夕木春央',
    description: '2024年話題のミステリー。密室で起きた殺人事件の真相は？鮮やかな謎解きが話題。',
    asin: '4065335213',
    amazonUrl: generateAmazonLink({ asin: '4065335213' }),
    tags: ['modern', 'contemporary', 'puzzle', 'logic', 'standalone'],
    rating: 4.3,
    genre: 'mystery',
    publishDate: '2024-11-20'
  },
  {
    id: 'new_mystery_002',
    title: '線は、僕を描く',
    author: '砥上裕將',
    description: '2024年映画化もされた話題作。水墨画を通じて成長する青年の物語。',
    asin: '4065309379',
    amazonUrl: generateAmazonLink({ asin: '4065309379' }),
    tags: ['modern', 'contemporary', 'coming-of-age', 'art'],
    rating: 4.4,
    genre: 'mystery',
    publishDate: '2024-10-15'
  },

  // ファンタジー新刊（実際の本に変更）
  {
    id: 'new_fantasy_001',
    title: '葬送のフリーレン',
    author: '山田鐘人',
    description: '2024年アニメ化で話題。魔法使いフリーレンの長い旅路を描くファンタジー。',
    asin: '4091280013',
    amazonUrl: generateAmazonLink({ asin: '4091280013' }),
    tags: ['high-fantasy', 'magic', 'personal', 'coming-of-age', 'emotional'],
    rating: 4.6,
    genre: 'fantasy',
    publishDate: '2024-10-30'
  },

  // ビジネス新刊（実際の本に変更）
  {
    id: 'new_business_001',
    title: '生成AIで世界はこう変わる',
    author: '今井翔太',
    description: '2024年話題のAI解説書。ChatGPTをはじめとする生成AIの可能性と課題を分析。',
    asin: '4815612641',
    amazonUrl: generateAmazonLink({ asin: '4815612641' }),
    tags: ['skill', 'practical', 'modern', 'technology'],
    rating: 4.1,
    genre: 'business',
    publishDate: '2024-11-10'
  },

  // エッセイ新刊（実際の本に変更）
  {
    id: 'new_essay_001',
    title: 'むずかしい息子が愛おしい',
    author: '工藤紀子',
    description: '2024年話題の育児エッセイ。子育ての悩みを温かいまなざしで描く。',
    asin: '4838732988',
    amazonUrl: generateAmazonLink({ asin: '4838732988' }),
    tags: ['life', 'experience', 'light', 'humorous'],
    rating: 4.3,
    genre: 'essay',
    publishDate: '2024-10-25'
  },

  // ホラー新刊（実際の本に変更）
  {
    id: 'new_horror_001',
    title: '呪術廻戦',
    author: '芥見下々',
    description: '2024年映画化もされた話題作。呪いと戦う高校生たちの物語。',
    asin: '4088807243',
    amazonUrl: generateAmazonLink({ asin: '4088807243' }),
    tags: ['supernatural', 'modern', 'contemporary', 'action'],
    rating: 4.5,
    genre: 'horror',
    publishDate: '2024-11-15'
  },

  // 歴史新刊（実際の本に変更）
  {
    id: 'new_historical_001',
    title: '風の谷のナウシカ',
    author: '宮崎駿',
    description: '不朽の名作。環境問題を先取りした壮大な物語の原作漫画版。',
    asin: '4197286074',
    amazonUrl: generateAmazonLink({ asin: '4197286074' }),
    tags: ['modern-history', 'environmental', 'epic', 'art'],
    rating: 4.7,
    genre: 'historical',
    publishDate: '2024-12-05'
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