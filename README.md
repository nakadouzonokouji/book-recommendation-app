# 📚 本のレコメンデーションアプリ

「今日はなんとなく〇〇な本が読みたい」という曖昧な気分から、具体的な本の推薦まで導くWebアプリケーションです。

## ✨ 主要機能

### 🎯 3ステップの簡単な本探し
1. **気分・ジャンル選択** - 8つのジャンルから選択
2. **詳細絞り込み** - ジャンル別の3つの質問に答える
3. **おすすめ表示** - あなたにぴったりの本を3-5冊提案

### 📖 対応ジャンル
- 💕 恋愛もの
- ⚔️ 冒険・アクション
- 🔍 ミステリー・サスペンス
- 🚀 ファンタジー・SF
- 📈 ビジネス・自己啓発
- 📝 エッセイ・ノンフィクション
- 👻 ホラー・スリラー
- 🏛️ 歴史・時代小説

### 🛒 便利な購入機能
- Amazon購入リンク
- Kindle版リンク（対応書籍のみ）
- 評価とおすすめ理由の表示

## 🚀 使い方

### 開発環境の起動

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリを確認できます。

### アプリの使い方

1. **ジャンル選択**: トップページで読みたい本のジャンルを選択
2. **詳細設定**: ジャンルに応じた質問（時代設定、雰囲気、読みやすさなど）に答える
3. **本の発見**: あなたの好みに合った本が表示されます
4. **購入**: 気になった本はAmazonやKindleで直接購入可能

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 15
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **状態管理**: React Hooks
- **デプロイ**: Vercel（推奨）

## 📁 プロジェクト構造

```
src/
├── app/
│   ├── components/          # Reactコンポーネント
│   │   ├── QuestionFlow.tsx      # 質問フローコンポーネント
│   │   └── BookRecommendations.tsx # 推薦結果表示
│   ├── data/               # データファイル
│   │   ├── books.ts             # 本のデータベース
│   │   └── questions.ts         # ジャンル別質問データ
│   ├── utils/              # ユーティリティ関数
│   │   └── recommendation.ts    # 推薦ロジック
│   ├── types.ts            # TypeScript型定義
│   ├── page.tsx            # メインページ
│   ├── layout.tsx          # レイアウト
│   └── globals.css         # グローバルスタイル
```

## 🔧 カスタマイズ

### 本のデータを追加する

`src/app/data/books.ts` ファイルで本のデータを追加・編集できます：

```typescript
{
  id: 'unique_id',
  title: '本のタイトル',
  author: '著者名',
  description: '本の説明',
  amazonUrl: 'AmazonのURL',
  kindleUrl: 'KindleのURL（オプション）',
  tags: ['tag1', 'tag2'], // 推薦ロジック用のタグ
  rating: 4.5,
  genre: 'ジャンルID'
}
```

### 質問を追加・編集する

`src/app/data/questions.ts` ファイルでジャンル別の質問を編集できます。

### 推薦ロジックの調整

`src/app/utils/recommendation.ts` ファイルで推薦アルゴリズムを調整できます。

## 🌐 デプロイ

### Vercelでのデプロイ（推奨）

1. [Vercel](https://vercel.com) にサインアップ
2. GitHubリポジトリを接続
3. 自動デプロイが開始されます

### 他のプラットフォーム

```bash
# 本番ビルド
npm run build

# 本番サーバー起動
npm start
```

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します！

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📞 サポート

質問や提案がある場合は、GitHubのIssueを作成してください。

---

**Made with ❤️ and Next.js**
