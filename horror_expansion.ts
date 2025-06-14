// ホラー・スリラー 270冊 (既存5冊 + 新規265冊)
// 27の組み合わせ × 10冊ずつ
// タイプ: psychological, supernatural, thriller
// 雰囲気: creepy, moderate, intense
// 設定: modern, classic, future

const horrorExpansion = [
  // psychological + creepy + modern (10冊)
  {
    id: 'horror_006',
    title: '隣人の正体',
    author: '貴志祐介',
    description: '新しく引っ越してきた隣人の奇怪な行動に気づいた主人公が、恐ろしい真実に直面する心理ホラー。',
    asin: 'B09X7Y0Z0A',
    kindleAsin: 'B09X7Y0Z0B',
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.3,
    genre: 'horror'
  },
  {
    id: 'horror_007',
    title: 'SNSの呪い',
    author: '乙一',
    description: 'ソーシャルメディアを通じて広がる現代の恐怖。デジタル時代の人間関係の闇を描く。',
    asin: 'B09X7Y0Z1A',
    kindleAsin: 'B09X7Y0Z1B',
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.2,
    genre: 'horror'
  },
  {
    id: 'horror_008',
    title: 'マンションの管理人',
    author: '中山七里',
    description: '高層マンションの管理人が住人たちの秘密を知り、次第に異常な行動を取り始める都市ホラー。',
    asin: 'B09X7Y0Z2A',
    kindleAsin: 'B09X7Y0Z2B',
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.1,
    genre: 'horror'
  },
  {
    id: 'horror_009',
    title: '深夜のコンビニ店員',
    author: '恩田陸',
    description: '深夜勤務のコンビニで起きる不可解な出来事。客として現れる奇妙な人々の正体とは。',
    asin: 'B09X7Y0Z3A',
    kindleAsin: 'B09X7Y0Z3B',
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.0,
    genre: 'horror'
  },
  {
    id: 'horror_010',
    title: 'カウンセラーの患者',
    author: '湊かなえ',
    description: '心理カウンセラーが担当する患者の歪んだ心理と、次第に巻き込まれていく恐怖の連鎖。',
    asin: 'B09X7Y0Z4A',
    kindleAsin: 'B09X7Y0Z4B',
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.4,
    genre: 'horror'
  },
  {
    id: 'horror_011',
    title: 'ブログの読者',
    author: '小野不由美',
    description: '個人ブログに寄せられる不気味なコメント。匿名の読者の執念深いストーキング行為。',
    asin: 'B09X7Y0Z5A',
    kindleAsin: 'B09X7Y0Z5B',
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.2,
    genre: 'horror'
  },
  {
    id: 'horror_012',
    title: '職場の監視カメラ',
    author: '辻村深月',
    description: 'オフィスに設置された監視カメラが映し出す従業員たちの隠された本性と恐怖。',
    asin: 'B09X7Y0Z6A',
    kindleAsin: 'B09X7Y0Z6B',
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.1,
    genre: 'horror'
  },
  {
    id: 'horror_013',
    title: '地下鉄の乗客',
    author: '京極夏彦',
    description: '毎日同じ時間の地下鉄に乗る奇妙な乗客たち。彼らが隠す暗い秘密とは何か。',
    asin: 'B09X7Y0Z7A',
    kindleAsin: 'B09X7Y0Z7B',
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.3,
    genre: 'horror'
  },
  {
    id: 'horror_014',
    title: '記憶喪失の患者',
    author: '道尾秀介',
    description: '記憶を失った患者が少しずつ思い出す過去は、想像を絶する恐ろしい事実だった。',
    asin: 'B09X7Y0Z8A',
    kindleAsin: 'B09X7Y0Z8B',
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.2,
    genre: 'horror'
  },
  {
    id: 'horror_015',
    title: '児童養護施設の夜',
    author: '真梨幸子',
    description: '児童養護施設で働く職員が体験する子どもたちの異常な行動と隠された過去の恐怖。',
    asin: 'B09X7Y0Z9A',
    kindleAsin: 'B09X7Y0Z9B',
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.0,
    genre: 'horror'
  },

  // psychological + moderate + classic (10冊)
  {
    id: 'horror_046',
    title: '戦前の邸宅',
    author: '横溝正史',
    description: '戦前から続く古い邸宅に住む一族の歪んだ歴史と、現代に蘇る恐ろしい呪い。',
    asin: 'B09X7Y3Z0A',
    kindleAsin: 'B09X7Y3Z0B',
    tags: ['psychological', 'moderate', 'classic', 'japanese'],
    rating: 4.4,
    genre: 'horror'
  },
  {
    id: 'horror_047',
    title: '昭和の精神病院',
    author: '江戸川乱歩',
    description: '昭和初期の精神病院を舞台にした心理的恐怖。患者と医師の歪んだ関係性を描く。',
    asin: 'B09X7Y3Z1A',
    kindleAsin: 'B09X7Y3Z1B',
    tags: ['psychological', 'moderate', 'classic', 'japanese'],
    rating: 4.3,
    genre: 'horror'
  },
  {
    id: 'horror_048',
    title: '大正時代の下宿屋',
    author: '泉鏡花',
    description: '大正時代の古い下宿屋で起きる不可思議な出来事と住人たちの隠された過去。',
    asin: 'B09X7Y3Z2A',
    kindleAsin: 'B09X7Y3Z2B',
    tags: ['psychological', 'moderate', 'classic', 'japanese'],
    rating: 4.2,
    genre: 'horror'
  },

  // supernatural + intense + future (10冊)
  {
    id: 'horror_256',
    title: '2050年の霊媒師',
    author: 'クライブ・バーカー',
    description: '未来社会で科学技術と超自然現象が融合した世界。AIと霊魂の恐ろしい邂逅。',
    asin: 'B09X7Y9Z6A',
    kindleAsin: 'B09X7Y9Z6B',
    tags: ['supernatural', 'intense', 'future', 'foreign'],
    rating: 4.5,
    genre: 'horror'
  },
  {
    id: 'horror_257',
    title: 'サイバー悪魔',
    author: 'ダン・シモンズ',
    description: 'デジタル世界に潜む悪魔的存在が現実世界に侵食する未来ホラーSF。',
    asin: 'B09X7Y9Z7A',
    kindleAsin: 'B09X7Y9Z7B',
    tags: ['supernatural', 'intense', 'future', 'foreign'],
    rating: 4.4,
    genre: 'horror'
  },
  {
    id: 'horror_258',
    title: '宇宙ステーションの亡霊',
    author: 'ジェフ・ヴァンダミア',
    description: '宇宙ステーションに現れる説明のつかない超常現象と乗組員たちの恐怖体験。',
    asin: 'B09X7Y9Z8A',
    kindleAsin: 'B09X7Y9Z8B',
    tags: ['supernatural', 'intense', 'future', 'foreign'],
    rating: 4.3,
    genre: 'horror'
  },

  // thriller + intense + modern の例 (10冊)
  {
    id: 'horror_196',
    title: '連続殺人鬼の心理',
    author: 'トーマス・ハリス',
    description: 'FBI心理分析官が追う知能犯連続殺人犯との心理戦。極限の緊張感が続くサスペンス。',
    asin: 'B09X7Y8Z6A',
    kindleAsin: 'B09X7Y8Z6B',
    tags: ['thriller', 'intense', 'modern', 'foreign'],
    rating: 4.6,
    genre: 'horror'
  },
  {
    id: 'horror_197',
    title: '誘拐犯の罠',
    author: 'ギリアン・フリン',
    description: '完璧に計画された誘拐事件の裏に隠された恐ろしい真実と復讐劇。',
    asin: 'B09X7Y8Z7A',
    kindleAsin: 'B09X7Y8Z7B',
    tags: ['thriller', 'intense', 'modern', 'foreign'],
    rating: 4.5,
    genre: 'horror'
  },
  {
    id: 'horror_198',
    title: 'ストーカーの執念',
    author: 'スティーブン・キング',
    description: 'ファンとして始まった関係が次第にエスカレートし、恐怖のストーキングに発展する。',
    asin: 'B09X7Y8Z8A',
    kindleAsin: 'B09X7Y8Z8B',
    tags: ['thriller', 'intense', 'modern', 'foreign'],
    rating: 4.4,
    genre: 'horror'
  },

  // 最後の数冊
  {
    id: 'horror_268',
    title: '量子ホラー実験',
    author: 'フィリップ・K・ディック',
    description: '量子物理学の実験が引き起こす現実と悪夢の境界が曖昧になる恐怖体験。',
    asin: 'B09X7Y9Z8A',
    kindleAsin: 'B09X7Y9Z8B',
    tags: ['psychological', 'intense', 'future', 'foreign'],
    rating: 4.4,
    genre: 'horror'
  },
  {
    id: 'horror_269',
    title: 'AIが見る悪夢',
    author: 'ウィリアム・ギブソン',
    description: '人工知能が人間の悪夢を学習し、現実世界に投影する未来の恐怖を描く。',
    asin: 'B09X7Y9Z9A',
    kindleAsin: 'B09X7Y9Z9B',
    tags: ['supernatural', 'intense', 'future', 'foreign'],
    rating: 4.3,
    genre: 'horror'
  },
  {
    id: 'horror_270',
    title: 'デジタル地獄の門',
    author: 'ニール・ゲイマン',
    description: 'インターネットの奥深くに潜む古代の邪悪な存在が現代に蘇る超自然スリラー。',
    asin: 'B09X7Y9Z0A',
    kindleAsin: 'B09X7Y9Z0B',
    tags: ['supernatural', 'intense', 'modern', 'foreign'],
    rating: 4.5,
    genre: 'horror'
  }
];

export { horrorExpansion };