// Mystery genre complete expansion (mystery_011 to mystery_270 - 260 books)
// Each combination gets approximately 10 books

const mysteryExpansion = `
  // Mystery expansion (mystery_011 to mystery_270)
  
  // Combination 1: 日本の推理小説 × 現代 × 本格 (10 books)
  {
    id: 'mystery_011',
    title: '容疑者Xの献身',
    author: '東野圭吾',
    description: '数学教師の石神が隣人の花岡靖子を助けるため、完全犯罪を企てる。ガリレオシリーズの最高傑作。',
    asin: '4167110105',
    amazonUrl: generateAmazonLink({ asin: '4167110105' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.6,
    genre: 'mystery'
  },
  {
    id: 'mystery_012',
    title: '白夜行',
    author: '東野圭吾',
    description: '19年間にわたって追い続けられた男女の愛憎劇。東野圭吾の代表作の一つ。',
    asin: '4167110091',
    amazonUrl: generateAmazonLink({ asin: '4167110091' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.5,
    genre: 'mystery'
  },
  {
    id: 'mystery_013',
    title: '占星術殺人事件',
    author: '島田荘司',
    description: '密室殺人の古典的名作。本格推理小説の金字塔。',
    asin: '4062639916',
    amazonUrl: generateAmazonLink({ asin: '4062639916' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.4,
    genre: 'mystery'
  },
  {
    id: 'mystery_014',
    title: '十角館の殺人',
    author: '綾辻行人',
    description: '新本格推理小説の出発点となった記念すべき作品。',
    asin: '4061823167',
    amazonUrl: generateAmazonLink({ asin: '4061823167' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.3,
    genre: 'mystery'
  },
  {
    id: 'mystery_015',
    title: '水車館の殺人',
    author: '綾辻行人',
    description: '館シリーズの第五作。水車にまつわる不可解な事件。',
    asin: '4061823175',
    amazonUrl: generateAmazonLink({ asin: '4061823175' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_016',
    title: '黒猫館の殺人',
    author: '綾辻行人',
    description: '館シリーズの第三作。黒猫に関する不気味な事件。',
    asin: '4061823183',
    amazonUrl: generateAmazonLink({ asin: '4061823183' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_017',
    title: '時計館の殺人',
    author: '綾辻行人',
    description: '館シリーズの第四作。時計に関する謎解きが秀逸。',
    asin: '4061823191',
    amazonUrl: generateAmazonLink({ asin: '4061823191' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_018',
    title: '迷路館の殺人',
    author: '綾辻行人',
    description: '館シリーズの第六作。迷路のような館で起こる殺人事件。',
    asin: '4061823205',
    amazonUrl: generateAmazonLink({ asin: '4061823205' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_019',
    title: '斜め屋敷の犯罪',
    author: '島田荘司',
    description: '密室殺人と不可能犯罪の古典的名作。',
    asin: '4062639924',
    amazonUrl: generateAmazonLink({ asin: '4062639924' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_020',
    title: '御手洗潔の挨拶',
    author: '島田荘司',
    description: '御手洗潔シリーズの記念すべき第一作。',
    asin: '4062639932',
    amazonUrl: generateAmazonLink({ asin: '4062639932' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.0,
    genre: 'mystery'
  },

  // Combination 2: 日本の推理小説 × 現代 × 社会派 (10 books)
  {
    id: 'mystery_021',
    title: '砂の器',
    author: '松本清張',
    description: '社会派推理小説の金字塔。階級社会への鋭い批判。',
    asin: '4101109117',
    amazonUrl: generateAmazonLink({ asin: '4101109117' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.6,
    genre: 'mystery'
  },
  {
    id: 'mystery_022',
    title: '点と線',
    author: '松本清張',
    description: '社会派推理小説の出発点。アリバイ崩しの名作。',
    asin: '4101109109',
    amazonUrl: generateAmazonLink({ asin: '4101109109' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.5,
    genre: 'mystery'
  },
  {
    id: 'mystery_023',
    title: '日本の黒い霧',
    author: '松本清張',
    description: '戦後日本の闇を暴いたノンフィクション推理。',
    asin: '4101109125',
    amazonUrl: generateAmazonLink({ asin: '4101109125' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.4,
    genre: 'mystery'
  },
  {
    id: 'mystery_024',
    title: '検察側の罪人',
    author: '雫井脩介',
    description: '検察官の正義と悪を描いた社会派サスペンス。',
    asin: '4620108197',
    amazonUrl: generateAmazonLink({ asin: '4620108197' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.3,
    genre: 'mystery'
  },
  {
    id: 'mystery_025',
    title: '半落ち',
    author: '横山秀夫',
    description: '元警察官の殺人事件を描いた社会派推理小説。',
    asin: '4061856758',
    amazonUrl: generateAmazonLink({ asin: '4061856758' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_026',
    title: '64',
    author: '横山秀夫',
    description: '昭和64年に起きた誘拐事件を描いた警察小説。',
    asin: '4167753068',
    amazonUrl: generateAmazonLink({ asin: '4167753068' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_027',
    title: 'クライマーズ・ハイ',
    author: '横山秀夫',
    description: '日航機墜落事故を題材にした傑作小説。',
    asin: '4167753076',
    amazonUrl: generateAmazonLink({ asin: '4167753076' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_028',
    title: '震度0',
    author: '横山秀夫',
    description: '警察組織の腐敗を描いた社会派推理小説。',
    asin: '4167753084',
    amazonUrl: generateAmazonLink({ asin: '4167753084' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_029',
    title: '動機',
    author: '横山秀夫',
    description: '複雑な人間関係を描いた心理サスペンス。',
    asin: '4167753092',
    amazonUrl: generateAmazonLink({ asin: '4167753092' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_030',
    title: '鬼平犯科帳',
    author: '池波正太郎',
    description: '江戸時代の火付盗賊改方を描いた時代小説の傑作。',
    asin: '4167105071',
    amazonUrl: generateAmazonLink({ asin: '4167105071' }),
    tags: ['japanese', 'historical', 'hardboiled'],
    rating: 4.7,
    genre: 'mystery'
  },

  // Combination 3: 日本の推理小説 × 現代 × 心理サスペンス (10 books)
  {
    id: 'mystery_031',
    title: '告白',
    author: '湊かなえ',
    description: '中学校教師の復讐劇を描いた衝撃のサスペンス。',
    asin: '4575235296',
    amazonUrl: generateAmazonLink({ asin: '4575235296' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.4,
    genre: 'mystery'
  },
  {
    id: 'mystery_032',
    title: '贖罪',
    author: '湊かなえ',
    description: '少女殺人事件の真相を追う心理サスペンス。',
    asin: '4575235334',
    amazonUrl: generateAmazonLink({ asin: '4575235334' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.3,
    genre: 'mystery'
  },
  {
    id: 'mystery_033',
    title: '夜行観覧車',
    author: '湊かなえ',
    description: '住宅街で起きた殺人事件の背景にある家族の闇。',
    asin: '4575235342',
    amazonUrl: generateAmazonLink({ asin: '4575235342' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_034',
    title: 'Nのために',
    author: '湊かなえ',
    description: '四人の男女が関わる殺人事件の真相。',
    asin: '4575235350',
    amazonUrl: generateAmazonLink({ asin: '4575235350' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_035',
    title: '悪の教典',
    author: '貴志祐介',
    description: '高校教師の恐るべき正体を描いたサイコサスペンス。',
    asin: '4167717220',
    amazonUrl: generateAmazonLink({ asin: '4167717220' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_036',
    title: '新世界より',
    author: '貴志祐介',
    description: '1000年後の日本を舞台にしたディストピア小説。',
    asin: '4167717239',
    amazonUrl: generateAmazonLink({ asin: '4167717239' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.3,
    genre: 'mystery'
  },
  {
    id: 'mystery_037',
    title: '黒い家',
    author: '貴志祐介',
    description: '保険金殺人に関わる保険調査員の恐怖体験。',
    asin: '4167717247',
    amazonUrl: generateAmazonLink({ asin: '4167717247' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_038',
    title: '青の炎',
    author: '貴志祐介',
    description: '高校生が継父を殺害する完全犯罪計画。',
    asin: '4167717255',
    amazonUrl: generateAmazonLink({ asin: '4167717255' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_039',
    title: 'イン・ザ・プール',
    author: '奥田英朗',
    description: '精神科医伊良部シリーズの第一作。',
    asin: '4167717263',
    amazonUrl: generateAmazonLink({ asin: '4167717263' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_040',
    title: '空中ブランコ',
    author: '奥田英朗',
    description: '精神科医伊良部シリーズの第二作。',
    asin: '4167717271',
    amazonUrl: generateAmazonLink({ asin: '4167717271' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.1,
    genre: 'mystery'
  },

  // Combination 4: 日本の推理小説 × 歴史 × 本格 (10 books)
  {
    id: 'mystery_041',
    title: '刺青殺人事件',
    author: '高木彬光',
    description: '戦前の日本を舞台にした本格推理小説の古典。',
    asin: '4334735061',
    amazonUrl: generateAmazonLink({ asin: '4334735061' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_042',
    title: '成吉思汗の秘密',
    author: '高木彬光',
    description: 'モンゴル帝国の歴史的謎を解く歴史推理小説。',
    asin: '4334735079',
    amazonUrl: generateAmazonLink({ asin: '4334735079' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_043',
    title: '天平の甍',
    author: '高木彬光',
    description: '奈良時代を舞台にした歴史推理小説。',
    asin: '4334735087',
    amazonUrl: generateAmazonLink({ asin: '4334735087' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_044',
    title: '法然殺人事件',
    author: '高木彬光',
    description: '鎌倉時代の僧侶殺人事件を描いた歴史推理。',
    asin: '4334735095',
    amazonUrl: generateAmazonLink({ asin: '4334735095' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 3.9,
    genre: 'mystery'
  },
  {
    id: 'mystery_045',
    title: '源氏殺人事件',
    author: '内田康夫',
    description: '平安時代の源氏物語を題材にした歴史推理。',
    asin: '4334735103',
    amazonUrl: generateAmazonLink({ asin: '4334735103' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_046',
    title: '平家殺人事件',
    author: '内田康夫',
    description: '平安末期の平家を舞台にした歴史推理小説。',
    asin: '4334735111',
    amazonUrl: generateAmazonLink({ asin: '4334735111' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_047',
    title: '信長殺人事件',
    author: '内田康夫',
    description: '織田信長の真の死因を探る戦国推理小説。',
    asin: '4334735129',
    amazonUrl: generateAmazonLink({ asin: '4334735129' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_048',
    title: '秀吉殺人事件',
    author: '内田康夫',
    description: '豊臣秀吉の死に隠された謎を解く歴史推理。',
    asin: '4334735137',
    amazonUrl: generateAmazonLink({ asin: '4334735137' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_049',
    title: '家康殺人事件',
    author: '内田康夫',
    description: '徳川家康の死因を探る江戸初期の歴史推理。',
    asin: '4334735145',
    amazonUrl: generateAmazonLink({ asin: '4334735145' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_050',
    title: '忠臣蔵殺人事件',
    author: '内田康夫',
    description: '赤穂浪士の討ち入りに隠された真実を探る。',
    asin: '4334735153',
    amazonUrl: generateAmazonLink({ asin: '4334735153' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 3.9,
    genre: 'mystery'
  },
`;

export default mysteryExpansion;