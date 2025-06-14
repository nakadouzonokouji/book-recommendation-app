// 修正が必要な本のデータ更新案

// 1. ハリー・ポッター 賢者の石のASIN更新
{
  id: 'fantasy_001',
  title: 'ハリー・ポッター 賢者の石',
  author: 'J.K.ローリング',
  description: '魔法学校ホグワーツでの少年の成長と友情を描く現代ファンタジーの金字塔。',
  asin: '4863892330', // 文庫版の新しいASINに更新
  kindleAsin: 'B00Y9F6CZ4', // Kindle版を追加
  amazonUrl: generateAmazonLink({ asin: '4863892330' }),
  kindleUrl: generateKindleLink({ asin: 'B00Y9F6CZ4' }),
  tags: ['high-fantasy', 'magic', 'personal', 'coming-of-age', 'light', 'comedy', 'series'],
  rating: 4.7,
  genre: 'fantasy'
},

// 2. 鋼の錬金術師を十二国記に差し替え
{
  id: 'fantasy_005',
  title: '十二国記 月の影 影の海',
  author: '小野不由美',
  description: '現代の女子高生が異世界に召喚され、自らの運命と向き合う壮大なファンタジー。',
  asin: '4101240515',
  kindleAsin: 'B009GPMHGI',
  amazonUrl: generateAmazonLink({ asin: '4101240515' }),
  kindleUrl: generateKindleLink({ asin: 'B009GPMHGI' }),
  tags: ['high-fantasy', 'magic', 'personal', 'coming-of-age', 'dark', 'serious'],
  rating: 4.8,
  genre: 'fantasy'
},

// 3. 向田邦子のエッセイ集をより具体的なタイトルに
{
  id: 'essay_003',
  title: '父の詫び状',
  author: '向田邦子',
  description: '日常の些細な出来事を温かく鋭い視点で描いた、向田邦子の代表的エッセイ集。',
  asin: '4167101017',
  kindleAsin: 'B009DEKJQ8',
  amazonUrl: generateAmazonLink({ asin: '4167101017' }),
  kindleUrl: generateKindleLink({ asin: 'B009DEKJQ8' }),
  tags: ['experience', 'light', 'humorous', 'witty', 'writer', 'literary'],
  rating: 4.4,
  genre: 'essay'
},

// その他の推奨される代替作品（必要に応じて追加）

// 代替案1: 精霊の守り人（鋼の錬金術師の代わりとして）
{
  id: 'fantasy_005_alt1',
  title: '精霊の守り人',
  author: '上橋菜穂子',
  description: '女用心棒バルサが新ヨゴ皇国の皇子チャグムを守りながら、運命に立ち向かう冒険ファンタジー。',
  asin: '4101302723',
  kindleAsin: 'B00AZSHYKE',
  amazonUrl: generateAmazonLink({ asin: '4101302723' }),
  kindleUrl: generateKindleLink({ asin: 'B00AZSHYKE' }),
  tags: ['high-fantasy', 'magic', 'personal', 'coming-of-age', 'balanced', 'mixed-tone'],
  rating: 4.7,
  genre: 'fantasy'
},

// 代替案2: ゲド戦記（鋼の錬金術師の代わりとして）
{
  id: 'fantasy_005_alt2',
  title: 'ゲド戦記 影との戦い',
  author: 'アーシュラ・K・ル＝グウィン',
  description: '魔法使いゲドの若き日の冒険と成長を描く、ファンタジー文学の古典的名作。',
  asin: '4001155613',
  kindleAsin: 'B00I8AT1CM',
  amazonUrl: generateAmazonLink({ asin: '4001155613' }),
  kindleUrl: generateKindleLink({ asin: 'B00I8AT1CM' }),
  tags: ['high-fantasy', 'magic', 'personal', 'coming-of-age', 'dark', 'serious'],
  rating: 4.6,
  genre: 'fantasy'
}