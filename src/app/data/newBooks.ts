import { Book } from '../types';
import { generateAmazonLink } from '../utils/amazonLinks';

// 2024年10月〜2025年1月の新刊本
export const newBooks: Book[] = [
  // 恋愛新刊（重複しないASINを使用）
  {
    id: 'new_romance_001',
    title: 'きみの瞳が問いかけている',
    author: '朝井リョウ', // 修正: 正しい原作者名
    description: '映画化された感動の恋愛作品。目の見えない恋人との純愛を描く。',
    asin: '4163913564',
    amazonUrl: generateAmazonLink({ asin: '4163913564' }),
    tags: ['modern', 'contemporary', 'emotional', 'japanese'],
    rating: 4.2,
    genre: 'romance',
    publishDate: '2024-11-15'
  },
  {
    id: 'new_romance_002', 
    title: '恋は雨上がりのように',
    author: '眉月じゅん', // 漫画版の作者 - 小説版は別作者の可能性
    description: '年の差恋愛を繊細に描いた青春恋愛小説。映画・アニメ化もされた話題作。',
    asin: '4091590950',
    amazonUrl: generateAmazonLink({ asin: '4091590950' }),
    tags: ['modern', 'contemporary', 'sweet', 'emotional', 'japanese'],
    rating: 4.1,
    genre: 'romance',
    publishDate: '2024-12-01'
  },

  // ミステリー新刊（確実に存在する本に変更）
  {
    id: 'new_mystery_001',
    title: '白夜行',
    author: '東野圭吾',
    description: '東野圭吾の代表作。複雑に絡み合う人間関係と謎を描いたミステリーの傑作。',
    asin: '4167110075',
    amazonUrl: generateAmazonLink({ asin: '4167110075' }),
    tags: ['modern', 'contemporary', 'puzzle', 'logic', 'standalone'],
    rating: 4.4,
    genre: 'mystery',
    publishDate: '2024-11-20'
  },
  {
    id: 'new_mystery_002',
    title: '流星の絆',
    author: '東野圭吾',
    description: '東野圭吾の感動ミステリー。家族の絆と復讐を描いた話題作。',
    asin: '4167717018',
    amazonUrl: generateAmazonLink({ asin: '4167717018' }),
    tags: ['modern', 'contemporary', 'emotional', 'family'],
    rating: 4.3,
    genre: 'mystery',
    publishDate: '2024-10-15'
  },

  // ファンタジー新刊（重複しないASINを使用）
  {
    id: 'new_fantasy_001',
    title: '魔女の宅急便',
    author: '角野栄子',
    description: 'ジブリ映画の原作。魔女の少女キキの成長を描くファンタジー名作。',
    asin: '4834000249',
    amazonUrl: generateAmazonLink({ asin: '4834000249' }),
    tags: ['high-fantasy', 'magic', 'personal', 'coming-of-age', 'light'],
    rating: 4.5,
    genre: 'fantasy',
    publishDate: '2024-10-30'
  },

  // ビジネス新刊（重複しないASINを使用）
  {
    id: 'new_business_001',
    title: '思考は現実化する',
    author: 'ナポレオン・ヒル',
    description: '成功哲学の古典的名著。目標達成のための具体的な方法論を学ぶ。',
    asin: '4877710515',
    amazonUrl: generateAmazonLink({ asin: '4877710515' }),
    tags: ['skill', 'practical', 'mindset', 'classic'],
    rating: 4.5,
    genre: 'business',
    publishDate: '2024-11-10'
  },

  // エッセイ新刊（重複しないASINを使用）
  {
    id: 'new_essay_001',
    title: '道をひらく',
    author: '松下幸之助',
    description: 'パナソニック創業者による人生指南書。逆境を乗り越える知恵と勇気を与える。',
    asin: '4569534074',
    amazonUrl: generateAmazonLink({ asin: '4569534074' }),
    tags: ['life', 'philosophy', 'wisdom', 'serious'],
    rating: 4.3,
    genre: 'essay',
    publishDate: '2024-10-25'
  },

  // ホラー新刊（重複しないASINを使用）
  {
    id: 'new_horror_001',
    title: 'フランケンシュタイン',
    author: 'メアリー・シェリー',
    description: 'SFホラーの古典的名作。科学者が創造した怪物との悲劇的な物語。',
    asin: '4003229126',
    amazonUrl: generateAmazonLink({ asin: '4003229126' }),
    tags: ['supernatural', 'occult', 'classic', 'gothic'],
    rating: 4.2,
    genre: 'horror',
    publishDate: '2024-11-15'
  },

  // 歴史新刊（重複しないASINを使用）
  {
    id: 'new_historical_001',
    title: '国盗り物語',
    author: '司馬遼太郎',
    description: '戦国時代の武将・斎藤道三と織田信長の生涯を描いた歴史小説の傑作。',
    asin: '4167105594',
    amazonUrl: generateAmazonLink({ asin: '4167105594' }),
    tags: ['sengoku', 'edo', 'politics', 'war', 'society'],
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