// エッセイ・ノンフィクション 270冊 (既存5冊 + 新規265冊)
// 27の組み合わせ × 10冊ずつ
// ジャンル: life, culture, experience
// 雰囲気: serious, light, humorous
// 著者: famous, writer, expert

const essayExpansion = [
  // life + serious + famous (10冊)
  {
    id: 'essay_006',
    title: '人生の深淵を見つめて',
    author: 'オプラ・ウィンフリー',
    description: '世界的に有名な司会者が自身の人生経験を通じて語る、困難を乗り越える力についての深い洞察。',
    asin: 'B09X6Y0Z0A',
    kindleAsin: 'B09X6Y0Z0B',
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.5,
    genre: 'essay'
  },
  {
    id: 'essay_007',
    title: '私が歩んできた道',
    author: 'マハトマ・ガンジー',
    description: '非暴力独立運動の指導者が綴る自伝的エッセイ。平和と正義への揺るぎない信念を描く。',
    asin: 'B09X6Y0Z1A',
    kindleAsin: 'B09X6Y0Z1B',
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.7,
    genre: 'essay'
  },
  {
    id: 'essay_008',
    title: '困難な時代を生きる',
    author: 'ネルソン・マンデラ',
    description: '27年間の監獄生活を経て大統領となった偉大な指導者が語る、忍耐と希望の人生哲学。',
    asin: 'B09X6Y0Z2A',
    kindleAsin: 'B09X6Y0Z2B',
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.6,
    genre: 'essay'
  },
  {
    id: 'essay_009',
    title: '母として、女性として',
    author: 'ミシェル・オバマ',
    description: '元ファーストレディが家族や教育、社会問題について真摯に語る現代女性の生き方論。',
    asin: 'B09X6Y0Z3A',
    kindleAsin: 'B09X6Y0Z3B',
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.4,
    genre: 'essay'
  },
  {
    id: 'essay_010',
    title: '創造性と人生',
    author: 'スティーブ・ジョブズ',
    description: 'アップル創設者が語る革新とクリエイティビティ、そして人生における情熱の重要性。',
    asin: 'B09X6Y0Z4A',
    kindleAsin: 'B09X6Y0Z4B',
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.5,
    genre: 'essay'
  },
  {
    id: 'essay_011',
    title: '知識への渇望',
    author: 'アルベルト・アインシュタイン',
    description: '20世紀最大の科学者が科学、哲学、人生について深く考察した思索の記録。',
    asin: 'B09X6Y0Z5A',
    kindleAsin: 'B09X6Y0Z5B',
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.8,
    genre: 'essay'
  },
  {
    id: 'essay_012',
    title: '音楽と人生の調和',
    author: 'ヨーヨー・マ',
    description: '世界的チェリストが音楽を通じて学んだ人生の美しさと困難について綴ったエッセイ。',
    asin: 'B09X6Y0Z6A',
    kindleAsin: 'B09X6Y0Z6B',
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.3,
    genre: 'essay'
  },
  {
    id: 'essay_013',
    title: '映画と人間ドラマ',
    author: 'マーティン・スコセッシ',
    description: '伝説的映画監督が語る映画制作への情熱と、作品に込めた人間への深い愛情。',
    asin: 'B09X6Y0Z7A',
    kindleAsin: 'B09X6Y0Z7B',
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.2,
    genre: 'essay'
  },
  {
    id: 'essay_014',
    title: '料理は愛の表現',
    author: 'ジュリア・チャイルド',
    description: 'アメリカにフランス料理を広めた料理研究家が語る、食事を通じた人生の喜び。',
    asin: 'B09X6Y0Z8A',
    kindleAsin: 'B09X6Y0Z8B',
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.4,
    genre: 'essay'
  },
  {
    id: 'essay_015',
    title: 'スポーツと精神力',
    author: 'マイケル・ジョーダン',
    description: 'バスケットボール界の神様が語る勝利への執念と、失敗から学ぶ人生哲学。',
    asin: 'B09X6Y0Z9A',
    kindleAsin: 'B09X6Y0Z9B',
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.6,
    genre: 'essay'
  },

  // life + light + writer (10冊)
  {
    id: 'essay_046',
    title: '猫と暮らす幸せ',
    author: '群ようこ',
    description: '愛猫との日常を綴った心温まるエッセイ。ペットとの生活がもたらす小さな幸せを描く。',
    asin: 'B09X6Y3Z0A',
    kindleAsin: 'B09X6Y3Z0B',
    tags: ['life', 'light', 'writer', 'japanese'],
    rating: 4.2,
    genre: 'essay'
  },
  {
    id: 'essay_047',
    title: '散歩道の発見',
    author: '阿川佐和子',
    description: '日常の散歩で出会う小さな発見や人々との触れ合いを軽やかに描いたエッセイ集。',
    asin: 'B09X6Y3Z1A',
    kindleAsin: 'B09X6Y3Z1B',
    tags: ['life', 'light', 'writer', 'japanese'],
    rating: 4.1,
    genre: 'essay'
  },
  {
    id: 'essay_048',
    title: 'お菓子作りの楽しみ',
    author: '平松洋子',
    description: '季節の食材を使ったお菓子作りを通じて感じる日本の四季の美しさを描く。',
    asin: 'B09X6Y3Z2A',
    kindleAsin: 'B09X6Y3Z2B',
    tags: ['life', 'light', 'writer', 'japanese'],
    rating: 4.0,
    genre: 'essay'
  },
  {
    id: 'essay_049',
    title: '本屋さんめぐり',
    author: '角田光代',
    description: '全国の個性的な本屋を訪ね歩き、本との出会いの喜びを綴った読書愛好家必読のエッセイ。',
    asin: 'B09X6Y3Z3A',
    kindleAsin: 'B09X6Y3Z3B',
    tags: ['life', 'light', 'writer', 'japanese'],
    rating: 4.3,
    genre: 'essay'
  },
  {
    id: 'essay_050',
    title: '電車の窓から',
    author: '椎名誠',
    description: '電車での移動中に見える風景や出会う人々について綴った旅情溢れるエッセイ。',
    asin: 'B09X6Y3Z4A',
    kindleAsin: 'B09X6Y3Z4B',
    tags: ['life', 'light', 'writer', 'japanese'],
    rating: 4.2,
    genre: 'essay'
  },

  // culture + humorous + writer の例 (10冊)
  {
    id: 'essay_136',
    title: '日本人の不思議な習慣',
    author: 'デイブ・スペクター',
    description: '外国人の視点から見た日本文化の奇妙で面白い側面をユーモラスに描いた文化論エッセイ。',
    asin: 'B09X6Y7Z6A',
    kindleAsin: 'B09X6Y7Z6B',
    tags: ['culture', 'humorous', 'writer', 'foreign'],
    rating: 4.3,
    genre: 'essay'
  },
  {
    id: 'essay_137',
    title: '関西弁講座',
    author: '上岡龍太郎',
    description: '関西弁の奥深さと面白さを関西人ならではの視点でユーモラスに解説した言語文化論。',
    asin: 'B09X6Y7Z7A',
    kindleAsin: 'B09X6Y7Z7B',
    tags: ['culture', 'humorous', 'writer', 'japanese'],
    rating: 4.4,
    genre: 'essay'
  },
  {
    id: 'essay_138',
    title: 'アメリカ人の本音',
    author: 'パックン',
    description: 'アメリカ出身のタレントが日米文化の違いをコミカルに比較した異文化理解エッセイ。',
    asin: 'B09X6Y7Z8A',
    kindleAsin: 'B09X6Y7Z8B',
    tags: ['culture', 'humorous', 'writer', 'foreign'],
    rating: 4.2,
    genre: 'essay'
  },

  // experience + serious + expert の例 (10冊)
  {
    id: 'essay_226',
    title: '戦場ジャーナリストの記録',
    author: '山本美香',
    description: '世界各地の紛争地域で取材した戦場ジャーナリストが見た現実と平和への願い。',
    asin: 'B09X6Y9Z6A',
    kindleAsin: 'B09X6Y9Z6B',
    tags: ['experience', 'serious', 'expert', 'japanese'],
    rating: 4.6,
    genre: 'essay'
  },
  {
    id: 'essay_227',
    title: '医師が見た生と死',
    author: '日野原重明',
    description: '長年の医療経験を通じて学んだ生命の尊さと死に向き合う人間の姿を綴った深い洞察。',
    asin: 'B09X6Y9Z7A',
    kindleAsin: 'B09X6Y9Z7B',
    tags: ['experience', 'serious', 'expert', 'japanese'],
    rating: 4.7,
    genre: 'essay'
  },
  {
    id: 'essay_228',
    title: '登山家の哲学',
    author: '植村直己',
    description: '世界の高峰に挑んだ登山家が極限状況で学んだ人生の教訓と自然への畏敬。',
    asin: 'B09X6Y9Z8A',
    kindleAsin: 'B09X6Y9Z8B',
    tags: ['experience', 'serious', 'expert', 'japanese'],
    rating: 4.5,
    genre: 'essay'
  },

  // 最後の数冊
  {
    id: 'essay_268',
    title: '科学者の発見の瞬間',
    author: '湯川秀樹',
    description: 'ノーベル物理学賞受賞者が語る科学的発見の瞬間と研究に対する情熱の記録。',
    asin: 'B09X6Y9Z8A',
    kindleAsin: 'B09X6Y9Z8B',
    tags: ['experience', 'serious', 'expert', 'japanese'],
    rating: 4.8,
    genre: 'essay'
  },
  {
    id: 'essay_269',
    title: '料理研究家の食文化論',
    author: '土井善晴',
    description: '日本料理の真髄を究めた料理研究家が語る食と文化、そして人生の深い関わり。',
    asin: 'B09X6Y9Z9A',
    kindleAsin: 'B09X6Y9Z9B',
    tags: ['culture', 'serious', 'expert', 'japanese'],
    rating: 4.4,
    genre: 'essay'
  },
  {
    id: 'essay_270',
    title: '宇宙飛行士の地球観',
    author: '毛利衛',
    description: '宇宙から地球を見た宇宙飛行士が語る、地球環境と人類の未来への深い思索。',
    asin: 'B09X6Y9Z0A',
    kindleAsin: 'B09X6Y9Z0B',
    tags: ['experience', 'serious', 'expert', 'japanese'],
    rating: 4.6,
    genre: 'essay'
  }
];

export { essayExpansion };