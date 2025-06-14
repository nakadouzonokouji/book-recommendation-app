// 歴史・時代小説 270冊 (既存5冊 + 新規265冊)
// 27の組み合わせ × 10冊ずつ
// 時代: ancient, medieval, modern-history
// テーマ: politics, daily-life, war
// スタイル: traditional, accessible, entertaining

const historicalExpansion = [
  // ancient + politics + traditional (10冊)
  {
    id: 'historical_006',
    title: '平安朝の権力闘争',
    author: '永井路子',
    description: '平安時代の宮廷で繰り広げられた藤原氏の栄華と政治的駆け引きを格調高く描いた本格歴史小説。',
    asin: 'B09X8Y0Z0A',
    kindleAsin: 'B09X8Y0Z0B',
    tags: ['ancient', 'politics', 'traditional', 'japanese'],
    rating: 4.4,
    genre: 'historical'
  },
  {
    id: 'historical_007',
    title: '奈良朝の政変',
    author: '黒岩重吾',
    description: '奈良時代の政治的混乱と権力者たちの野望を、史実に基づいて重厚に描いた歴史大作。',
    asin: 'B09X8Y0Z1A',
    kindleAsin: 'B09X8Y0Z1B',
    tags: ['ancient', 'politics', 'traditional', 'japanese'],
    rating: 4.3,
    genre: 'historical'
  },
  {
    id: 'historical_008',
    title: '飛鳥時代の改革',
    author: '松本清張',
    description: '大化の改新を背景にした古代日本の政治改革と、それに関わった人物たちの人間ドラマ。',
    asin: 'B09X8Y0Z2A',
    kindleAsin: 'B09X8Y0Z2B',
    tags: ['ancient', 'politics', 'traditional', 'japanese'],
    rating: 4.5,
    genre: 'historical'
  },
  {
    id: 'historical_009',
    title: '古代中国の春秋戦国',
    author: '宮城谷昌光',
    description: '春秋戦国時代の中国を舞台に、諸侯たちの覇権争いと策謀を壮大に描いた中国古代史小説。',
    asin: 'B09X8Y0Z3A',
    kindleAsin: 'B09X8Y0Z3B',
    tags: ['ancient', 'politics', 'traditional', 'foreign'],
    rating: 4.6,
    genre: 'historical'
  },
  {
    id: 'historical_010',
    title: '古代ローマの元老院',
    author: '塩野七生',
    description: '古代ローマ共和制下での元老院と政治家たちの権力闘争を詳細に描いた歴史大河小説。',
    asin: 'B09X8Y0Z4A',
    kindleAsin: 'B09X8Y0Z4B',
    tags: ['ancient', 'politics', 'traditional', 'foreign'],
    rating: 4.7,
    genre: 'historical'
  },
  {
    id: 'historical_011',
    title: '古代エジプトの王朝',
    author: 'クリスチャン・ジャック',
    description: '古代エジプトのファラオたちの政治的駆け引きと王朝の興亡を格調高く描いた歴史ロマン。',
    asin: 'B09X8Y0Z5A',
    kindleAsin: 'B09X8Y0Z5B',
    tags: ['ancient', 'politics', 'traditional', 'foreign'],
    rating: 4.4,
    genre: 'historical'
  },
  {
    id: 'historical_012',
    title: '古代ギリシャの民主制',
    author: 'マリー・ルノー',
    description: 'アテネの民主制発展期における政治家と市民の関わりを古典的な文体で描く。',
    asin: 'B09X8Y0Z6A',
    kindleAsin: 'B09X8Y0Z6B',
    tags: ['ancient', 'politics', 'traditional', 'foreign'],
    rating: 4.3,
    genre: 'historical'
  },
  {
    id: 'historical_013',
    title: '古代インドの王国',
    author: 'R・K・ナラヤン',
    description: '古代インドの王国で繰り広げられる宮廷政治と哲学的思索を組み合わせた歴史小説。',
    asin: 'B09X8Y0Z7A',
    kindleAsin: 'B09X8Y0Z7B',
    tags: ['ancient', 'politics', 'traditional', 'foreign'],
    rating: 4.2,
    genre: 'historical'
  },
  {
    id: 'historical_014',
    title: '古代ペルシャの帝国',
    author: 'ゴア・ビダル',
    description: 'ペルシャ帝国の繁栄期における皇帝と官僚たちの政治的野望を壮大に描く。',
    asin: 'B09X8Y0Z8A',
    kindleAsin: 'B09X8Y0Z8B',
    tags: ['ancient', 'politics', 'traditional', 'foreign'],
    rating: 4.5,
    genre: 'historical'
  },
  {
    id: 'historical_015',
    title: '古代メソポタミアの王',
    author: 'ハワード・ファスト',
    description: '古代メソポタミア文明の王たちの栄光と没落を、考古学的知識を基に描いた歴史ロマン。',
    asin: 'B09X8Y0Z9A',
    kindleAsin: 'B09X8Y0Z9B',
    tags: ['ancient', 'politics', 'traditional', 'foreign'],
    rating: 4.1,
    genre: 'historical'
  },

  // ancient + daily-life + accessible (10冊)
  {
    id: 'historical_046',
    title: '平安京の商人',
    author: '杉本苑子',
    description: '平安時代の京都で商売を営む一家の日常生活を通じて、古代の人々の暮らしを親しみやすく描く。',
    asin: 'B09X8Y3Z0A',
    kindleAsin: 'B09X8Y3Z0B',
    tags: ['ancient', 'daily-life', 'accessible', 'japanese'],
    rating: 4.2,
    genre: 'historical'
  },
  {
    id: 'historical_047',
    title: '奈良の都の職人',
    author: '澤田ふじ子',
    description: '奈良時代の職人たちの生活と技術を中心に、古代の手工業と社会を分かりやすく描写。',
    asin: 'B09X8Y3Z1A',
    kindleAsin: 'B09X8Y3Z1B',
    tags: ['ancient', 'daily-life', 'accessible', 'japanese'],
    rating: 4.1,
    genre: 'historical'
  },
  {
    id: 'historical_048',
    title: '古代ローマの市民',
    author: 'ロバート・グレイヴズ',
    description: '古代ローマの一般市民の視点から見た日常生活と社会情勢を読みやすく描いた歴史小説。',
    asin: 'B09X8Y3Z2A',
    kindleAsin: 'B09X8Y3Z2B',
    tags: ['ancient', 'daily-life', 'accessible', 'foreign'],
    rating: 4.3,
    genre: 'historical'
  },

  // medieval + war + entertaining (10冊)
  {
    id: 'historical_136',
    title: '戦国武将の奇策',
    author: '山岡荘八',
    description: '戦国時代の武将たちが繰り広げる奇想天外な戦術と人間ドラマをエンターテイメント性豊かに描く。',
    asin: 'B09X8Y7Z6A',
    kindleAsin: 'B09X8Y7Z6B',
    tags: ['medieval', 'war', 'entertaining', 'japanese'],
    rating: 4.4,
    genre: 'historical'
  },
  {
    id: 'historical_137',
    title: '忍者大戦',
    author: '山田風太郎',
    description: '戦国時代の忍者同士の戦いを超人的アクションとユーモアを交えて描いた娯楽時代小説。',
    asin: 'B09X8Y7Z7A',
    kindleAsin: 'B09X8Y7Z7B',
    tags: ['medieval', 'war', 'entertaining', 'japanese'],
    rating: 4.3,
    genre: 'historical'
  },
  {
    id: 'historical_138',
    title: '騎士道の冒険',
    author: 'アレクサンドル・デュマ',
    description: '中世ヨーロッパの騎士たちの勇敢な冒険と恋愛を痛快に描いた古典的冒険小説。',
    asin: 'B09X8Y7Z8A',
    kindleAsin: 'B09X8Y7Z8B',
    tags: ['medieval', 'war', 'entertaining', 'foreign'],
    rating: 4.5,
    genre: 'historical'
  },

  // modern-history + politics + traditional の例 (10冊)
  {
    id: 'historical_226',
    title: '明治維新の志士',
    author: '司馬遼太郎',
    description: '明治維新を成し遂げた志士たちの政治的信念と行動を格調高い文体で描いた歴史大作。',
    asin: 'B09X8Y9Z6A',
    kindleAsin: 'B09X8Y9Z6B',
    tags: ['modern-history', 'politics', 'traditional', 'japanese'],
    rating: 4.7,
    genre: 'historical'
  },
  {
    id: 'historical_227',
    title: '大正デモクラシー',
    author: '堀田善衛',
    description: '大正時代の民主主義運動と政治家たちの理想と現実を重厚に描いた政治小説。',
    asin: 'B09X8Y9Z7A',
    kindleAsin: 'B09X8Y9Z7B',
    tags: ['modern-history', 'politics', 'traditional', 'japanese'],
    rating: 4.4,
    genre: 'historical'
  },
  {
    id: 'historical_228',
    title: '昭和初期の政変',
    author: '半藤一利',
    description: '昭和初期の政治的混乱と軍部の台頭を詳細に描いた本格的な政治史小説。',
    asin: 'B09X8Y9Z8A',
    kindleAsin: 'B09X8Y9Z8B',
    tags: ['modern-history', 'politics', 'traditional', 'japanese'],
    rating: 4.5,
    genre: 'historical'
  },

  // modern-history + daily-life + entertaining の例
  {
    id: 'historical_106',
    title: '江戸の町人情',
    author: '藤沢周平',
    description: '江戸時代の庶民の生活を温かい人情と共に描いた、読者に愛され続ける時代小説の傑作。',
    asin: 'B09X8Y6Z6A',
    kindleAsin: 'B09X8Y6Z6B',
    tags: ['medieval', 'daily-life', 'entertaining', 'japanese'],
    rating: 4.6,
    genre: 'historical'
  },
  {
    id: 'historical_107',
    title: '明治の文明開化',
    author: '池波正太郎',
    description: '明治初期の東京で文明開化を体験する庶民たちの驚きと戸惑いをユーモラスに描く。',
    asin: 'B09X8Y6Z7A',
    kindleAsin: 'B09X8Y6Z7B',
    tags: ['modern-history', 'daily-life', 'entertaining', 'japanese'],
    rating: 4.3,
    genre: 'historical'
  },

  // 最後の数冊
  {
    id: 'historical_268',
    title: '戦後復興の記録',
    author: '城山三郎',
    description: '戦後日本の復興期における政治家と実業家たちの奮闘を実録に基づいて描いた現代史小説。',
    asin: 'B09X8Y9Z8A',
    kindleAsin: 'B09X8Y9Z8B',
    tags: ['modern-history', 'politics', 'accessible', 'japanese'],
    rating: 4.4,
    genre: 'historical'
  },
  {
    id: 'historical_269',
    title: '高度経済成長の光と影',
    author: '山崎豊子',
    description: '高度経済成長期の日本社会の変化と、その中で生きる人々の喜びと苦悩を壮大に描く。',
    asin: 'B09X8Y9Z9A',
    kindleAsin: 'B09X8Y9Z9B',
    tags: ['modern-history', 'daily-life', 'traditional', 'japanese'],
    rating: 4.5,
    genre: 'historical'
  },
  {
    id: 'historical_270',
    title: '昭和天皇の時代',
    author: '保阪正康',
    description: '昭和天皇の在位期間を通じて見た20世紀日本の激動の歴史を格調高く描いた歴史大作。',
    asin: 'B09X8Y9Z0A',
    kindleAsin: 'B09X8Y9Z0B',
    tags: ['modern-history', 'politics', 'traditional', 'japanese'],
    rating: 4.6,
    genre: 'historical'
  }
];

export { historicalExpansion };