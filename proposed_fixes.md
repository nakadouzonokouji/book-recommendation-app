# ASIN修正提案リスト

## 緊急修正が必要な項目

### 1. 恋愛ジャンル - 世界の中心で、愛をさけぶ (romance_004)
**現在の設定:**
```typescript
{
  id: 'romance_004',
  title: '世界の中心で、愛をさけぶ',
  author: '片山恭一',
  description: '高校時代の純愛と別れ、そして大人になってからの再会を描いた感動の恋愛小説。',
  asin: '4094025065', // 問題のASIN
  amazonUrl: generateAmazonLink({ asin: '4094025065' }),
  tags: ['modern', 'contemporary', 'bittersweet', 'emotional', 'deep', 'japanese'],
  rating: 4.2,
  genre: 'romance'
}
```

**修正提案:**
- ASIN変更が必要（現在のASINは「パール判事の日本無罪論」を指している）
- 推奨ASIN: 調査中（小学館文庫版を推奨）

### 2. 新刊恋愛 - きみの瞳が問いかけている (new_romance_001)
**現在の設定:**
```typescript
{
  id: 'new_romance_001',
  title: 'きみの瞳が問いかけている',
  author: '竹内涼真', // 問題の著者
  description: '映画化された感動の恋愛作品。目の見えない恋人との純愛を描く。',
  asin: '4163913564',
  amazonUrl: generateAmazonLink({ asin: '4163913564' }),
  tags: ['modern', 'contemporary', 'emotional', 'japanese'],
  rating: 4.2,
  genre: 'romance',
  publishDate: '2024-11-15'
}
```

**修正提案:**
- 著者名修正が必要（竹内涼真は俳優）
- 正しい原作者を調査中

## 要検証項目

### 3. ファンタジー - ハリー・ポッター 賢者の石 (fantasy_001)
**現在のASIN:** 4863892330
**状況:** 複数の版が存在するため、このASINが適切かどうか要確認

### 4. 恋愛 - 君の名は。 (romance_001)
**現在のASIN:** 4041026245
**状況:** 映画脚本の小説化版かどうか要確認

### 5. 恋愛 - プライドと偏見 (romance_003)
**現在のASIN:** 4344428331
**状況:** 翻訳版の特定が必要

### 6. 冒険 - ロード・オブ・ザ・リング (adventure_001)
**現在のASIN:** 4566023354
**状況:** 複数版存在、版の確認が必要

## 修正作業計画

### フェーズ1: 緊急修正
1. ✅ 問題のASIN特定完了
2. 🔄 正しいASIN検索（進行中）
3. ⏳ 著者情報修正

### フェーズ2: 詳細検証
1. ⏳ 翻訳書の版・訳者確認
2. ⏳ 映画原作の小説版確認
3. ⏳ 複数版が存在する書籍の適切な版選択

### フェーズ3: 最終確認
1. ⏳ 全ASINの再検証
2. ⏳ Amazonリンクのテスト
3. ⏳ 修正版ファイルの作成

## 推奨される即座の対応

### A. books.tsの修正
1. romance_004のASIN修正
2. 必要に応じて他の問題ASINの修正

### B. newBooks.tsの修正
1. new_romance_001の著者情報修正
2. 不正確な新刊情報の削除または修正

### C. データ品質向上
1. ASINバリデーション機能の追加検討
2. 定期的なリンク確認プロセスの確立

---
*作成日: 2025年6月14日*
*更新者: Claude Code Assistant*