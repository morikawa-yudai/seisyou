# 株式会社星翔 コーポレートサイト

## GitHubへのアップ＆公開手順

### 1. GitHubでリポジトリを作成
1. https://github.com/new を開く
2. Repository name: `seisho-website`（任意）
3. Public を選択
4. **Create repository** をクリック

### 2. ファイルをアップロード
1. 作成したリポジトリページを開く
2. **uploading an existing file** をクリック
3. ZIPを解凍して中のファイルを**すべて選択**してドラッグ＆ドロップ
4. **Commit changes** をクリック

### 3. GitHub Pagesで公開
1. リポジトリの **Settings** タブを開く
2. 左メニューの **Pages** をクリック
3. Source: **Deploy from a branch**
4. Branch: **main** / **/(root)**
5. **Save** をクリック
6. 数分後に `https://[ユーザー名].github.io/seisho-website/` で公開！

---

## ファイル構成

```
seisho-website/
├── index.html        ← TOPページ
├── services.html     ← 事業内容
├── about.html        ← 会社概要
├── recruit.html      ← 採用情報
├── news.html         ← お知らせ
├── contact.html      ← お問い合わせ
├── privacy.html      ← プライバシーポリシー
├── css/
│   ├── style.css     ← メインスタイル
│   └── inner.css     ← インナーページスタイル
├── js/
│   └── main.js       ← 星空アニメーション・動作
└── images/
    └── logo.jpg      ← ロゴ画像（差し替え可）
```

## カスタマイズ

- **写真追加**: `images/` フォルダに写真を入れ、HTMLの `photo-placeholder` 部分を `<img>` タグに変更
- **GoogleMap**: `about.html` と `contact.html` の `map-placeholder-large` 部分をGoogleMapの埋め込みコードに変更
- **お問い合わせフォーム**: Googleフォームまたはformspreeなどのサービスと連携

---

© 2024 株式会社星翔
