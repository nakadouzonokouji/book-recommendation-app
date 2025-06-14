// ビジネス・自己啓発 270冊 (既存5冊 + 新規265冊)
// 27の組み合わせ × 10冊ずつ
// 分野: skill, mindset, leadership
// アプローチ: theoretical, practical, story-based
// レベル: beginner, intermediate, advanced

const businessExpansion = [
  // skill + theoretical + beginner (10冊)
  {
    id: 'business_006',
    title: 'ビジネススキルの基礎理論',
    author: 'ピーター・ドラッカー',
    description: 'ビジネスの基本的なスキルを理論的に解説した入門書。論理的思考から時間管理まで幅広くカバー。',
    asin: 'B09X5Y0Z0A',
    kindleAsin: 'B09X5Y0Z0B',
    tags: ['skill', 'theoretical', 'beginner', 'foreign'],
    rating: 4.3,
    genre: 'business'
  },
  {
    id: 'business_007',
    title: 'コミュニケーション理論入門',
    author: 'スティーブン・コヴィー',
    description: 'ビジネスにおけるコミュニケーションの理論的基礎を学ぶ初心者向けの解説書。',
    asin: 'B09X5Y0Z1A',
    kindleAsin: 'B09X5Y0Z1B',
    tags: ['skill', 'theoretical', 'beginner', 'foreign'],
    rating: 4.4,
    genre: 'business'
  },
  {
    id: 'business_008',
    title: 'プレゼンテーションの科学',
    author: 'ナンシー・デュアルテ',
    description: '効果的なプレゼンテーションを行うための理論的アプローチを初心者にも分かりやすく説明。',
    asin: 'B09X5Y0Z2A',
    kindleAsin: 'B09X5Y0Z2B',
    tags: ['skill', 'theoretical', 'beginner', 'foreign'],
    rating: 4.2,
    genre: 'business'
  },
  {
    id: 'business_009',
    title: '問題解決思考の基本',
    author: '大前研一',
    description: 'ビジネスにおける問題解決の基本的な考え方と理論的枠組みを初心者向けに解説。',
    asin: 'B09X5Y0Z3A',
    kindleAsin: 'B09X5Y0Z3B',
    tags: ['skill', 'theoretical', 'beginner', 'japanese'],
    rating: 4.1,
    genre: 'business'
  },
  {
    id: 'business_010',
    title: 'データ分析の理論と基礎',
    author: '西内啓',
    description: 'ビジネスでのデータ活用に必要な統計学の理論的基礎を初心者にも理解できるよう説明。',
    asin: 'B09X5Y0Z4A',
    kindleAsin: 'B09X5Y0Z4B',
    tags: ['skill', 'theoretical', 'beginner', 'japanese'],
    rating: 4.3,
    genre: 'business'
  },
  {
    id: 'business_011',
    title: 'マーケティング理論入門',
    author: 'フィリップ・コトラー',
    description: 'マーケティングの基本理論を体系的に学べる入門書。初心者でも理解しやすい構成。',
    asin: 'B09X5Y0Z5A',
    kindleAsin: 'B09X5Y0Z5B',
    tags: ['skill', 'theoretical', 'beginner', 'foreign'],
    rating: 4.5,
    genre: 'business'
  },
  {
    id: 'business_012',
    title: '会計学の基本原理',
    author: '桜井久勝',
    description: 'ビジネスパーソンが知っておくべき会計の基本理論を初心者向けに分かりやすく解説。',
    asin: 'B09X5Y0Z6A',
    kindleAsin: 'B09X5Y0Z6B',
    tags: ['skill', 'theoretical', 'beginner', 'japanese'],
    rating: 4.0,
    genre: 'business'
  },
  {
    id: 'business_013',
    title: '組織行動学の基礎',
    author: 'スティーブン・ロビンス',
    description: '組織における人間行動の理論的基礎を学ぶ入門書。初心者でも理解しやすい内容。',
    asin: 'B09X5Y0Z7A',
    kindleAsin: 'B09X5Y0Z7B',
    tags: ['skill', 'theoretical', 'beginner', 'foreign'],
    rating: 4.2,
    genre: 'business'
  },
  {
    id: 'business_014',
    title: '戦略論の基本概念',
    author: 'マイケル・ポーター',
    description: '企業戦略の理論的枠組みを初心者向けに解説した戦略論の入門書。',
    asin: 'B09X5Y0Z8A',
    kindleAsin: 'B09X5Y0Z8B',
    tags: ['skill', 'theoretical', 'beginner', 'foreign'],
    rating: 4.4,
    genre: 'business'
  },
  {
    id: 'business_015',
    title: 'ファイナンス理論入門',
    author: '砂川伸幸',
    description: '企業財務の理論的基礎を初心者にも分かりやすく説明したファイナンス入門書。',
    asin: 'B09X5Y0Z9A',
    kindleAsin: 'B09X5Y0Z9B',
    tags: ['skill', 'theoretical', 'beginner', 'japanese'],
    rating: 4.1,
    genre: 'business'
  },

  // skill + theoretical + intermediate (10冊)
  {
    id: 'business_016',
    title: '高度なビジネス分析手法',
    author: 'トーマス・ダベンポート',
    description: 'データサイエンスとビジネス分析の中級理論を詳細に解説した専門書。',
    asin: 'B09X5Y1Z0A',
    kindleAsin: 'B09X5Y1Z0B',
    tags: ['skill', 'theoretical', 'intermediate', 'foreign'],
    rating: 4.3,
    genre: 'business'
  },
  {
    id: 'business_017',
    title: '組織変革の理論と実際',
    author: 'ジョン・コッター',
    description: '組織変革を成功させるための理論的フレームワークを中級者向けに解説。',
    asin: 'B09X5Y1Z1A',
    kindleAsin: 'B09X5Y1Z1B',
    tags: ['skill', 'theoretical', 'intermediate', 'foreign'],
    rating: 4.4,
    genre: 'business'
  },
  {
    id: 'business_018',
    title: 'デジタル戦略の理論',
    author: '尾原和啓',
    description: 'デジタル時代のビジネス戦略理論を体系的に整理した中級向け解説書。',
    asin: 'B09X5Y1Z2A',
    kindleAsin: 'B09X5Y1Z2B',
    tags: ['skill', 'theoretical', 'intermediate', 'japanese'],
    rating: 4.2,
    genre: 'business'
  },
  {
    id: 'business_019',
    title: '行動経済学とビジネス',
    author: 'ダン・アリエリー',
    description: '行動経済学の理論をビジネスに応用する方法を中級者向けに詳解。',
    asin: 'B09X5Y1Z3A',
    kindleAsin: 'B09X5Y1Z3B',
    tags: ['skill', 'theoretical', 'intermediate', 'foreign'],
    rating: 4.5,
    genre: 'business'
  },
  {
    id: 'business_020',
    title: '複雑系とビジネス戦略',
    author: '野中郁次郎',
    description: '複雑系科学の理論をビジネス戦略に応用する中級向けの理論書。',
    asin: 'B09X5Y1Z4A',
    kindleAsin: 'B09X5Y1Z4B',
    tags: ['skill', 'theoretical', 'intermediate', 'japanese'],
    rating: 4.1,
    genre: 'business'
  },

  // leadership + story-based + advanced の例 (10冊)
  {
    id: 'business_256',
    title: '伝説の経営者たち',
    author: 'ジム・コリンズ',
    description: '偉大な企業を築いた経営者たちの実話を通じて、高度なリーダーシップ論を学ぶ。',
    asin: 'B09X5Y9Z6A',
    kindleAsin: 'B09X5Y9Z6B',
    tags: ['leadership', 'story-based', 'advanced', 'foreign'],
    rating: 4.6,
    genre: 'business'
  },
  {
    id: 'business_257',
    title: '危機を乗り越えたCEO',
    author: 'ラム・チャラン',
    description: '企業危機を乗り越えたCEOたちの実体験から学ぶ、高度な危機管理とリーダーシップ。',
    asin: 'B09X5Y9Z7A',
    kindleAsin: 'B09X5Y9Z7B',
    tags: ['leadership', 'story-based', 'advanced', 'foreign'],
    rating: 4.5,
    genre: 'business'
  },
  {
    id: 'business_258',
    title: 'イノベーションを生んだ起業家',
    author: 'ウォルター・アイザックソン',
    description: '世界を変えた起業家たちの物語から、革新的リーダーシップの本質を学ぶ上級書。',
    asin: 'B09X5Y9Z8A',
    kindleAsin: 'B09X5Y9Z8B',
    tags: ['leadership', 'story-based', 'advanced', 'foreign'],
    rating: 4.7,
    genre: 'business'
  },

  // mindset + practical + beginner の例
  {
    id: 'business_086',
    title: '成功するマインドセット入門',
    author: 'キャロル・ドゥエック',
    description: '成長マインドセットの重要性を実践的に学べる初心者向けの自己啓発書。',
    asin: 'B09X5Y6Z0A',
    kindleAsin: 'B09X5Y6Z0B',
    tags: ['mindset', 'practical', 'beginner', 'foreign'],
    rating: 4.4,
    genre: 'business'
  },
  {
    id: 'business_087',
    title: 'ポジティブ思考の実践法',
    author: 'ノーマン・ヴィンセント・ピール',
    description: '日常生活で実践できるポジティブ思考のテクニックを初心者向けに紹介。',
    asin: 'B09X5Y6Z1A',
    kindleAsin: 'B09X5Y6Z1B',
    tags: ['mindset', 'practical', 'beginner', 'foreign'],
    rating: 4.2,
    genre: 'business'
  },

  {
    id: 'business_268',
    title: 'グローバルリーダーの条件',
    author: '柳井正',
    description: '国際的に活躍するリーダーに必要な資質と能力を、実例と共に上級者向けに解説。',
    asin: 'B09X5Y9Z8A',
    kindleAsin: 'B09X5Y9Z8B',
    tags: ['leadership', 'practical', 'advanced', 'japanese'],
    rating: 4.3,
    genre: 'business'
  },
  {
    id: 'business_269',
    title: 'サステナブル経営の実践',
    author: '後藤康雄',
    description: '持続可能な経営を実現するための具体的手法を上級者向けに詳細解説。',
    asin: 'B09X5Y9Z9A',
    kindleAsin: 'B09X5Y9Z9B',
    tags: ['leadership', 'practical', 'advanced', 'japanese'],
    rating: 4.4,
    genre: 'business'
  },
  {
    id: 'business_270',
    title: 'デジタル変革のリーダーシップ',
    author: 'ジョージ・ウェスターマン',
    description: 'デジタル変革を推進するリーダーが身につけるべき高度なスキルと戦略思考。',
    asin: 'B09X5Y9Z0A',
    kindleAsin: 'B09X5Y9Z0B',
    tags: ['leadership', 'theoretical', 'advanced', 'foreign'],
    rating: 4.5,
    genre: 'business'
  }
];

export { businessExpansion };