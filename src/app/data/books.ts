import { Book } from '../types';
import { generateAmazonLink, generateKindleLink } from '../utils/amazonLinks';

export const booksDatabase: Book[] = [
  // 恋愛もの
  {
    id: 'romance_001',
    title: '君の名は。',
    author: '新海誠',
    description: '時空を超えて出会った二人の運命的な恋の物語。現代的な設定でありながら、深い感動を呼ぶ作品。',
    asin: '4046017708',
    kindleAsin: 'B01K7DZLZ8',
    amazonUrl: generateAmazonLink({ asin: '4046017708' }),
    kindleUrl: generateKindleLink({ asin: 'B01K7DZLZ8' }),
    tags: ['modern', 'contemporary', 'sweet', 'emotional', 'japanese', 'fantasy'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_002',
    title: 'ノルウェイの森',
    author: '村上春樹',
    description: '1960年代の東京を舞台に、青春の喪失と愛の複雑さを描いた名作。',
    asin: '4062638312',
    amazonUrl: generateAmazonLink({ asin: '4062638312' }),
    tags: ['historical', 'period', 'bittersweet', 'emotional', 'deep', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_003',
    title: 'プライドと偏見',
    author: 'ジェーン・オースティン',
    description: '19世紀イングランドを舞台にしたエリザベスとダーシーの恋愛小説の古典。',
    asin: '4003230817',
    amazonUrl: generateAmazonLink({ asin: '4003230817' }),
    tags: ['historical', 'period', 'passionate', 'dramatic', 'foreign', 'translated', 'classic'],
    rating: 4.6,
    genre: 'romance'
  },

  // 冒険・アクション
  {
    id: 'adventure_001',
    title: 'ロード・オブ・ザ・リング',
    author: 'J.R.R.トールキン',
    description: '中つ国を舞台にした壮大なファンタジー冒険小説。仲間との絆と成長を描く。',
    asin: '4566023354',
    amazonUrl: generateAmazonLink({ asin: '4566023354' }),
    tags: ['fantasy', 'magic', 'mythical', 'team', 'friendship', 'group', 'long', 'epic', 'detailed'],
    rating: 4.8,
    genre: 'adventure'
  },
  {
    id: 'adventure_002',
    title: '海底二万里',
    author: 'ジュール・ヴェルヌ',
    description: 'ネモ船長の潜水艦ノーチラス号での海底探検冒険記。科学とロマンが融合した古典SF。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4003750918',
    tags: ['realistic', 'historical', 'solo', 'individual', 'medium', 'moderate', 'classic'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_003',
    title: '鬼滅の刃',
    author: '吾峠呼世晴',
    description: '大正時代を舞台に、鬼と戦う少年の成長と仲間との絆を描く。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4088807235',
    tags: ['historical', 'period', 'team', 'friendship', 'mentor', 'growth', 'coming-of-age', 'medium'],
    rating: 4.7,
    genre: 'adventure'
  },

  // ミステリー・サスペンス
  {
    id: 'mystery_001',
    title: 'そして誰もいなくなった',
    author: 'アガサ・クリスティ',
    description: '孤島で起こる連続殺人事件を描いた本格ミステリーの傑作。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4151300716',
    tags: ['classic', 'puzzle', 'logic', 'classic', 'period', 'vintage', 'standalone', 'one-shot'],
    rating: 4.6,
    genre: 'mystery'
  },
  {
    id: 'mystery_002',
    title: '容疑者Xの献身',
    author: '東野圭吾',
    description: '数学教師の完全犯罪トリックに挑む物理学者。現代日本を舞台にした本格推理。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4166603760',
    tags: ['classic', 'puzzle', 'logic', 'modern', 'contemporary', 'standalone', 'one-shot'],
    rating: 4.5,
    genre: 'mystery'
  },
  {
    id: 'mystery_003',
    title: 'ロング・グッドバイ',
    author: 'レイモンド・チャンドラー',
    description: '私立探偵フィリップ・マーロウの代表作。ハードボイルドの最高峰。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4150704066',
    tags: ['hardboiled', 'action', 'noir', 'classic', 'period', 'vintage', 'standalone'],
    rating: 4.4,
    genre: 'mystery'
  },

  // ファンタジー・SF
  {
    id: 'fantasy_001',
    title: 'ハリー・ポッター 賢者の石',
    author: 'J.K.ローリング',
    description: '魔法学校ホグワーツでの少年の成長と友情を描く現代ファンタジーの金字塔。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4915512371',
    tags: ['high-fantasy', 'magic', 'personal', 'coming-of-age', 'light', 'comedy', 'series'],
    rating: 4.7,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_002',
    title: '銀河ヒッチハイク・ガイド',
    author: 'ダグラス・アダムス',
    description: '地球滅亡から始まる宇宙規模のコメディSF。ユーモアに満ちた冒険。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4309462618',
    tags: ['sci-fi', 'space', 'future', 'epic', 'grand-scale', 'light', 'comedy', 'humorous'],
    rating: 4.3,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_003',
    title: '魔法科高校の劣等生',
    author: '佐島勤',
    description: '魔法が科学として体系化された世界での高校生の物語。現代的なファンタジー。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4048686828',
    tags: ['urban-fantasy', 'modern-magic', 'contemporary', 'personal', 'individual', 'balanced'],
    rating: 4.2,
    genre: 'fantasy'
  },

  // ビジネス・自己啓発
  {
    id: 'business_001',
    title: '7つの習慣',
    author: 'スティーブン・R・コヴィー',
    description: '人格主義に基づく成功哲学。効果的な人生を送るための原則を説く。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4906638015',
    tags: ['mindset', 'philosophy', 'thinking', 'theoretical', 'academic', 'intermediate', 'advanced'],
    rating: 4.5,
    genre: 'business'
  },
  {
    id: 'business_002',
    title: 'チーズはどこへ消えた？',
    author: 'スペンサー・ジョンソン',
    description: '変化への対応をテーマにした寓話形式の自己啓発書。短時間で読める名作。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4594030653',
    tags: ['mindset', 'philosophy', 'story-based', 'narrative', 'accessible', 'beginner', 'basic'],
    rating: 4.2,
    genre: 'business'
  },
  {
    id: 'business_003',
    title: 'エッセンシャル思考',
    author: 'グレッグ・マキューン',
    description: '最少の時間で成果を最大にする思考法。本当に重要なことを見極める技術。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4761270438',
    tags: ['skill', 'practical', 'actionable', 'concrete', 'mindset', 'intermediate'],
    rating: 4.4,
    genre: 'business'
  },

  // エッセイ・ノンフィクション
  {
    id: 'essay_001',
    title: '生き方',
    author: '稲盛和夫',
    description: '京セラ創業者による人生哲学。仕事と人生に対する真摯な姿勢を説く。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4763195581',
    tags: ['life', 'philosophy', 'wisdom', 'serious', 'thought-provoking', 'famous', 'celebrity'],
    rating: 4.3,
    genre: 'essay'
  },
  {
    id: 'essay_002',
    title: '夜と霧',
    author: 'ヴィクトール・E・フランクル',
    description: '強制収容所での体験を通して人間の尊厳と生きる意味を問う名著。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4622006014',
    tags: ['life', 'philosophy', 'personal', 'experience', 'serious', 'deep', 'emotional', 'touching'],
    rating: 4.6,
    genre: 'essay'
  },
  {
    id: 'essay_003',
    title: 'エッセイ集',
    author: '向田邦子',
    description: '日常の些細な出来事を温かい視点で描いた名エッセイ集。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4167101017',
    tags: ['personal', 'experience', 'light', 'humorous', 'witty', 'writer', 'literary'],
    rating: 4.4,
    genre: 'essay'
  },

  // ホラー・スリラー
  {
    id: 'horror_001',
    title: 'シャイニング',
    author: 'スティーヴン・キング',
    description: '雪に閉ざされたホテルで起こる恐怖の物語。心理的恐怖の傑作。',
    amazonUrl: 'https://www.amazon.co.jp/dp/416710511X',
    tags: ['psychological', 'creepy', 'unsettling', 'modern', 'contemporary', 'intense', 'terrifying'],
    rating: 4.4,
    genre: 'horror'
  },
  {
    id: 'horror_002',
    title: 'ドラキュラ',
    author: 'ブラム・ストーカー',
    description: 'ヴァンパイア小説の古典。ゴシック・ホラーの金字塔。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4334751083',
    tags: ['supernatural', 'occult', 'paranormal', 'classic', 'period', 'gothic', 'moderate'],
    rating: 4.2,
    genre: 'horror'
  },
  {
    id: 'horror_003',
    title: 'リング',
    author: '鈴木光司',
    description: '呪いのビデオテープをめぐる現代ホラーの名作。じわじわとした恐怖が特徴。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4043520018',
    tags: ['supernatural', 'occult', 'modern', 'contemporary', 'psychological', 'moderate'],
    rating: 4.3,
    genre: 'horror'
  },

  // 歴史・時代小説
  {
    id: 'historical_001',
    title: '竜馬がゆく',
    author: '司馬遼太郎',
    description: '幕末の志士・坂本龍馬の生涯を描いた歴史小説の名作。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4167105667',
    tags: ['sengoku', 'edo', 'politics', 'war', 'power', 'modern-style', 'accessible', 'entertaining'],
    rating: 4.6,
    genre: 'historical'
  },
  {
    id: 'historical_002',
    title: '源氏物語',
    author: '紫式部（現代語訳：瀬戸内寂聴）',
    description: '平安時代の宮廷を舞台にした古典文学の最高峰。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4061593625',
    tags: ['ancient', 'heian', 'culture', 'art', 'daily-life', 'classical', 'formal', 'traditional'],
    rating: 4.5,
    genre: 'historical'
  },
  {
    id: 'historical_003',
    title: '坂の上の雲',
    author: '司馬遼太郎',
    description: '明治時代の日本の近代化を描いた歴史小説。国家の成長と人々の努力を描く。',
    amazonUrl: 'https://www.amazon.co.jp/dp/4167105748',
    tags: ['meiji', 'modern-history', 'politics', 'war', 'society', 'modern-style', 'accessible'],
    rating: 4.7,
    genre: 'historical'
  }
];

export const getBooksByGenre = (genreId: string): Book[] => {
  return booksDatabase.filter(book => book.genre === genreId);
};

export const getBookById = (id: string): Book | undefined => {
  return booksDatabase.find(book => book.id === id);
};

export const searchBooks = (query: string): Book[] => {
  const lowerQuery = query.toLowerCase();
  return booksDatabase.filter(book => 
    book.title.toLowerCase().includes(lowerQuery) ||
    book.author.toLowerCase().includes(lowerQuery) ||
    book.description.toLowerCase().includes(lowerQuery)
  );
};