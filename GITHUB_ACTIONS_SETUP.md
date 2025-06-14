# GitHub Actions 自動デプロイ設定手順

## 🔐 GitHub Secrets の設定が必要です

### 1. GitHubリポジトリで Settings > Secrets and variables > Actions に移動

### 2. 以下の3つのシークレットを追加してください：

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

## 🚀 動作の流れ

1. **masterブランチにpush** → 自動デプロイ開始
2. **Node.js環境構築** → 依存関係インストール
3. **Next.jsビルド** → 静的ファイル生成
4. **FTPアップロード** → `/tools/book-recommendation/` に配置

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