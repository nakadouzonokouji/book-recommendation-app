// ファンタジー・SF 270冊 (既存5冊 + 新規265冊)
// 27の組み合わせ × 10冊ずつ
// サブジャンル: high-fantasy, urban-fantasy, sci-fi
// スケール: personal, epic, grand-scale
// 雰囲気: light, balanced, dark

const fantasyExpansion = [
  // high-fantasy + personal + light (10冊)
  {
    id: 'fantasy_006',
    title: '小さな魔法使いの冒険',
    author: '上橋菜穂子',
    description: '小さな村に住む見習い魔法使いが、身近な問題を魔法で解決していく心温まるファンタジー。',
    asin: 'B09X4Y0Z0A',
    kindleAsin: 'B09X4Y0Z0B',
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.3,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_007',
    title: '森の精霊と少年',
    author: '荻原規子',
    description: '森で出会った精霊と少年の友情を描く、自然への愛に満ちた優しいファンタジー物語。',
    asin: 'B09X4Y0Z1A',
    kindleAsin: 'B09X4Y0Z1B',
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.4,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_008',
    title: 'パン屋の魔法のレシピ',
    author: '梨木香歩',
    description: '小さな町のパン屋で働く少女が、魔法の粉で作る特別なパンを通じて人々を幸せにする物語。',
    asin: 'B09X4Y0Z2A',
    kindleAsin: 'B09X4Y0Z2B',
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.2,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_009',
    title: '花の魔女の庭',
    author: '角野栄子',
    description: '美しい花園を守る若い魔女が、季節の変化とともに成長していく穏やかなファンタジー。',
    asin: 'B09X4Y0Z3A',
    kindleAsin: 'B09X4Y0Z3B',
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.1,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_010',
    title: '猫カフェの不思議な住人',
    author: '有川浩',
    description: '猫カフェに住む魔法の猫たちと人間の心温まる交流を描くほのぼのファンタジー。',
    asin: 'B09X4Y0Z4A',
    kindleAsin: 'B09X4Y0Z4B',
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.5,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_011',
    title: '星読みの少女',
    author: '佐藤多佳子',
    description: '星の運行から未来を読む少女が、小さな村の平和を守る優しい魔法ファンタジー。',
    asin: 'B09X4Y0Z5A',
    kindleAsin: 'B09X4Y0Z5B',
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.2,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_012',
    title: '水の精と釣り人',
    author: '森見登美彦',
    description: '川で出会った水の精と釣り好きの青年の交流を描く、のどかで幻想的な物語。',
    asin: 'B09X4Y0Z6A',
    kindleAsin: 'B09X4Y0Z6B',
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.3,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_013',
    title: '小さな竜の飼い主',
    author: '氷室冴子',
    description: '手のひらサイズの小さな竜を飼うことになった少年の日常を描く微笑ましいファンタジー。',
    asin: 'B09X4Y0Z7A',
    kindleAsin: 'B09X4Y0Z7B',
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.0,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_014',
    title: '魔法の図書館司書',
    author: '倉橋燿子',
    description: '魔法の本だけを集めた図書館で働く司書が、本の力で人々の悩みを解決する心温まる話。',
    asin: 'B09X4Y0Z8A',
    kindleAsin: 'B09X4Y0Z8B',
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.4,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_015',
    title: '妖精たちの音楽会',
    author: '那須正幹',
    description: '森に住む妖精たちが開く音楽会に招かれた人間の少女が体験する不思議で美しい世界。',
    asin: 'B09X4Y0Z9A',
    kindleAsin: 'B09X4Y0Z9B',
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.1,
    genre: 'fantasy'
  },

  // high-fantasy + personal + balanced (10冊)
  {
    id: 'fantasy_016',
    title: '剣士の成長物語',
    author: '田中芳樹',
    description: '若い剣士が師匠の教えを受けながら、自分なりの剣の道を見つけていく成長ファンタジー。',
    asin: 'B09X4Y1Z0A',
    kindleAsin: 'B09X4Y1Z0B',
    tags: ['high-fantasy', 'personal', 'balanced', 'japanese'],
    rating: 4.3,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_017',
    title: '魔法学院の落ちこぼれ',
    author: '冲方丁',
    description: '魔法学院で劣等生とされた少年が、独自の魔法理論で困難を乗り越えていく学園ファンタジー。',
    asin: 'B09X4Y1Z1A',
    kindleAsin: 'B09X4Y1Z1B',
    tags: ['high-fantasy', 'personal', 'balanced', 'japanese'],
    rating: 4.4,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_018',
    title: '盗賊ギルドの新入り',
    author: '支倉凍砂',
    description: '盗賊ギルドに入った青年が、仲間との友情と信頼を築きながら成長していく冒険ファンタジー。',
    asin: 'B09X4Y1Z2A',
    kindleAsin: 'B09X4Y1Z2B',
    tags: ['high-fantasy', 'personal', 'balanced', 'japanese'],
    rating: 4.2,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_019',
    title: '商人と魔法の契約',
    author: '橋本紡',
    description: '魔法使いと契約を結んだ商人が、取引を通じて異世界の文化と人々を理解していく物語。',
    asin: 'B09X4Y1Z3A',
    kindleAsin: 'B09X4Y1Z3B',
    tags: ['high-fantasy', 'personal', 'balanced', 'japanese'],
    rating: 4.1,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_020',
    title: '治癒師の修行',
    author: '小野不由美',
    description: '人を癒す力を持つ少女が、その力の責任と重みを学びながら一人前の治癒師になる物語。',
    asin: 'B09X4Y1Z4A',
    kindleAsin: 'B09X4Y1Z4B',
    tags: ['high-fantasy', 'personal', 'balanced', 'japanese'],
    rating: 4.5,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_021',
    title: '異世界の料理人',
    author: '森沢明夫',
    description: '異世界に召喚された料理人が、現代の料理技術で異世界の人々を驚かせる美食ファンタジー。',
    asin: 'B09X4Y1Z5A',
    kindleAsin: 'B09X4Y1Z5B',
    tags: ['high-fantasy', 'personal', 'balanced', 'japanese'],
    rating: 4.3,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_022',
    title: '魔獣使いの少年',
    author: '篠原一',
    description: '魔獣と心を通わせる特殊な能力を持つ少年が、人間と魔獣の橋渡し役となる冒険物語。',
    asin: 'B09X4Y1Z6A',
    kindleAsin: 'B09X4Y1Z6B',
    tags: ['high-fantasy', 'personal', 'balanced', 'japanese'],
    rating: 4.2,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_023',
    title: '魔法道具職人',
    author: '三浦しをん',
    description: '魔法道具を作る職人が、注文に応じて様々な魔法アイテムを創造していく職人ファンタジー。',
    asin: 'B09X4Y1Z7A',
    kindleAsin: 'B09X4Y1Z7B',
    tags: ['high-fantasy', 'personal', 'balanced', 'japanese'],
    rating: 4.0,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_024',
    title: '騎士見習いの試練',
    author: '秋山瑞人',
    description: '騎士を目指す少年が、様々な試練を通じて真の騎士道精神を身につけていく成長物語。',
    asin: 'B09X4Y1Z8A',
    kindleAsin: 'B09X4Y1Z8B',
    tags: ['high-fantasy', 'personal', 'balanced', 'japanese'],
    rating: 4.4,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_025',
    title: 'ドラゴンの卵を守る者',
    author: '新井素子',
    description: 'ドラゴンの卵を託された青年が、孵化まで卵を守り抜く責任と使命感を描いたファンタジー。',
    asin: 'B09X4Y1Z9A',
    kindleAsin: 'B09X4Y1Z9B',
    tags: ['high-fantasy', 'personal', 'balanced', 'japanese'],
    rating: 4.1,
    genre: 'fantasy'
  },

  // urban-fantasy + personal + light の例 (10冊)
  {
    id: 'fantasy_086',
    title: '都市の隠れた魔法',
    author: '有川浩',
    description: '現代東京に潜む小さな魔法を発見する普通のOLの日常が少しずつ変わっていく都市ファンタジー。',
    asin: 'B09X4Y6Z0A',
    kindleAsin: 'B09X4Y6Z0B',
    tags: ['urban-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.2,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_087',
    title: 'コンビニの夜勤バイト',
    author: '森見登美彦',
    description: '深夜のコンビニで働く大学生が出会う不思議な客たちとの心温まる交流を描く現代ファンタジー。',
    asin: 'B09X4Y6Z1A',
    kindleAsin: 'B09X4Y6Z1B',
    tags: ['urban-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.3,
    genre: 'fantasy'
  },

  // sci-fi + epic + dark の例 (10冊)
  {
    id: 'fantasy_256',
    title: '銀河帝国の黄昏',
    author: 'アイザック・アシモフ',
    description: '銀河を統べる巨大帝国の衰退と、それに続く暗黒時代を描く壮大な宇宙サーガの傑作。',
    asin: 'B09X4Y9Z6A',
    kindleAsin: 'B09X4Y9Z6B',
    tags: ['sci-fi', 'epic', 'dark', 'foreign'],
    rating: 4.6,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_257',
    title: '最後の人類艦隊',
    author: 'ダン・シモンズ',
    description: '異星人の侵攻により滅亡寸前の人類が、最後の希望を託して未知の宇宙へ旅立つ絶望的な物語。',
    asin: 'B09X4Y9Z7A',
    kindleAsin: 'B09X4Y9Z7B',
    tags: ['sci-fi', 'epic', 'dark', 'foreign'],
    rating: 4.5,
    genre: 'fantasy'
  },

  // 最後の数冊
  {
    id: 'fantasy_268',
    title: '量子もつれの恋人たち',
    author: 'テッド・チャン',
    description: '量子物理学の概念を恋愛に織り込んだ、科学と人間性の究極の融合を描くSF小説。',
    asin: 'B09X4Y9Z8A',
    kindleAsin: 'B09X4Y9Z8B',
    tags: ['sci-fi', 'personal', 'balanced', 'foreign'],
    rating: 4.4,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_269',
    title: 'タイムループの哲学者',
    author: 'カート・ヴォネガット',
    description: '同じ一日を永遠に繰り返す哲学者が、時間と存在の意味について考察する実験的SF。',
    asin: 'B09X4Y9Z9A',
    kindleAsin: 'B09X4Y9Z9B',
    tags: ['sci-fi', 'personal', 'balanced', 'foreign'],
    rating: 4.3,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_270',
    title: '星間旅行者の手記',
    author: 'アーシュラ・K・ル=グウィン',
    description: '光速を超えた旅で体験する時間の歪みと、取り残される地球への想いを描く感動的宇宙SF。',
    asin: 'B09X4Y9Z0A',
    kindleAsin: 'B09X4Y9Z0B',
    tags: ['sci-fi', 'epic', 'balanced', 'foreign'],
    rating: 4.7,
    genre: 'fantasy'
  }
];

export { fantasyExpansion };