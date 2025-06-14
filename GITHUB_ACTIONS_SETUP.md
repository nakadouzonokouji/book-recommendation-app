# GitHub Actions 自動デプロイ設定手順

## 🔐 GitHub Secrets の設定が必要です

### 1. GitHubリポジトリで Settings > Secrets and variables > Actions に移動

### 2. 以下の5つのシークレットを追加してください：

#### XSERVER_FTP_HOST
```
エックスサーバーのFTPサーバー名
例: sv6095.xserver.jp
```

#### XSERVER_FTP_USER
```
エックスサーバーのFTPユーザー名
例: cxmainte.com
```

#### XSERVER_FTP_PASS
```
エックスサーバーのFTPパスワード
（サーバーパネルで確認できます）
```

#### AMAZON_ACCESS_KEY_ID
```
Amazon Product Advertising API のアクセスキー
PA-API 5.0 の認証情報
```

#### AMAZON_SECRET_ACCESS_KEY
```
Amazon Product Advertising API のシークレットキー
PA-API 5.0 の認証情報
```

## 📁 エックスサーバーでのFTP情報確認方法

### サーバーパネルにログイン
1. https://www.xserver.ne.jp/ → ログイン
2. サーバーパネル → 「FTPアカウント設定」
3. 以下の情報を確認：

```
FTPサーバー（ホスト）名: sv####.xserver.jp
FTPユーザー名: ドメイン名（例：cxmainte.com）
FTPパスワード: 設定したパスワード
```

## 📊 Amazon PA-API 5.0 の設定方法

### アソシエイツアカウントの取得
1. **Amazon アソシエイツプログラム**に参加
2. **PA-API 5.0 へのアクセス申請**（売上実績が必要な場合があります）
3. **アクセスキーとシークレットキー**を取得

### ⚠️ 重要な注意点
- **PA-API設定なし**でも動作します（基本情報のみ表示）
- **APIキー設定済み**の場合：リアルタイム価格・在庫・評価表示
- **API制限**：1秒1リクエスト、1日8640リクエストまで

## 🚀 動作の流れ

1. **masterブランチにpush** → 自動デプロイ開始
2. **Node.js環境構築** → 依存関係インストール
3. **Amazon商品情報取得** → PA-API から価格・在庫・評価情報を事前取得
4. **Next.jsビルド** → 静的ファイル生成
5. **FTPアップロード** → `/cxmainte.com/public_html/tools/book-recommendation/` に配置

## ⚡ 自動デプロイ後のURL

```
https://cxmainte.com/tools/book-recommendation/
```

## 🔍 デプロイ状況の確認

- GitHubリポジトリの「Actions」タブで進行状況を確認
- 成功時：緑のチェックマーク ✅
- 失敗時：赤のXマーク ❌（ログで原因確認可能）

## 🛠️ トラブルシューティング

### よくあるエラー：
- **FTP接続エラー**: Secrets設定を再確認
- **権限エラー**: サーバーパスの権限設定確認
- **ビルドエラー**: コードに構文エラーがないか確認