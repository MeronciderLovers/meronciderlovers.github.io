# メロンクリームサイダーのお砂糖

メロンクリームサイダーのお砂糖の公式ウェブサイトです。

## サイト URL

https://meronciderlovers.github.io/

## サイト構成

- `index.html` - トップページ
- `lovers.html` - メロンクリームサイダーのお砂糖図鑑
- `style.css` - 共通スタイルシート
- `script.js` - 共通 JavaScript

## 技術仕様

- **フレームワーク**: なし（Vanilla JS）
- **バンドルツール**: なし
- **CSS**: modern-normalize を CDN から読み込み
- **デプロイ**: GitHub Pages

## 画像ファイルの命名規則

画像ファイルは **キャッシュ対策** のため、ファイル名の末尾に最終更新日時を付けてください。

### 命名フォーマット

```
<ファイル名>-<更新日時>.<拡張子>
```

### 例

```
og-image-20250108.jpg
logo-20250108.png
banner-20250115.jpg
```

### 日付フォーマット

- YYYYMMDD 形式（例: 20250108 は 2025年1月8日）
- 画像を更新する際は、新しい日付のファイルを作成してください
- HTML 内の参照も忘れずに更新してください

## 開発方法

このサイトは Node.js やビルドツールを使用していません。
ファイルを直接編集して、ブラウザで開くだけで動作確認ができます。

### ローカルでの確認

ブラウザで `index.html` を直接開くか、簡易的な HTTP サーバーを起動してください。

Python を使う場合:
```bash
python -m http.server 8000
```

その後、ブラウザで `http://localhost:8000` にアクセスしてください。

## データ連携について

将来的に Google Spreadsheet からデータを取得する予定です。
Google Apps Script (GAS) 経由でデータを JSON ファイルとして取得し、
JavaScript で fetch して表示する構成を想定しています。

## デプロイ

GitHub Actions により、`main` ブランチへの push または手動実行で
自動的に GitHub Pages へデプロイされます。

## ライセンス

このプロジェクトのライセンスについては LICENSE ファイルを参照してください。
