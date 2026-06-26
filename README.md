# 株式会社星翔 コーポレートサイト

> 地域の信頼を、確かな一歩で届ける。

神奈川県を拠点に Amazon DSP 配送・防犯対策・行政案件を手掛ける  
**株式会社星翔** のコーポレートサイトです。

---

## ファイル構成

```
seisho-website/
├── index.html          ← TOPページ
├── services.html       ← 事業内容（次フェーズ）
├── about.html          ← 会社概要（次フェーズ）
├── recruit.html        ← 採用情報（次フェーズ）
├── news.html           ← お知らせ一覧（次フェーズ）
├── contact.html        ← お問い合わせ（次フェーズ）
├── privacy.html        ← プライバシーポリシー（次フェーズ）
├── css/
│   └── style.css       ← メインスタイルシート
├── js/
│   └── main.js         ← JavaScript（星空・スクロール演出等）
└── images/             ← 画像フォルダ（写真はここに格納）
    ├── ogp.jpg         ← OGP画像（1200×630px 推奨）
    ├── logo.png        ← ロゴ画像
    ├── president.jpg   ← 代表写真
    └── staff.jpg       ← スタッフ写真
```

---

## GitHub Pages での公開方法

1. このリポジトリを GitHub にプッシュ
2. **Settings → Pages** を開く
3. **Source** を `Deploy from a branch` に設定
4. **Branch** を `main` / `/(root)` に設定して Save
5. 数分後に `https://[ユーザー名].github.io/[リポジトリ名]/` で公開される

---

## カスタマイズ箇所

### 写真の差し替え
- `images/president.jpg` → 代表取締役の写真（縦長推奨）
- `images/staff.jpg`     → スタッフの写真（横長推奨）
- HTML内の `.photo-placeholder` / `.recruit-img-placeholder` を `<img>` タグに変更

### 会社情報の更新
- `index.html` 内の住所・電話番号・代表者名を実際の情報に変更
- `<script type="application/ld+json">` の構造化データを更新

### OGP 画像
- `images/ogp.jpg` を 1200×630px で用意
- `<meta property="og:url">` を実際のドメインに変更

---

## カラー仕様

| 役割 | 色コード |
|------|---------|
| 背景 | `#FFFFFF` |
| メイン（濃紺） | `#0A1A3A` |
| アクセント（金） | `#F5C842` |
| テキスト（本文） | `#4A4A6A` |
| フッター背景 | `#070F21` |

---

## SEO キーワード対応済み

- `<title>` `<meta description>` `<meta keywords>`
- `<h1>` `<h2>` にキーワード含有
- Schema.org 構造化データ（Organization）
- OGP / Twitter Card
- `<time datetime>` によるニュース日付マークアップ
- `aria-label` によるアクセシビリティ対応

---

## 動作確認ブラウザ

- Chrome 最新版
- Safari 最新版
- Firefox 最新版
- Edge 最新版
- iOS Safari / Android Chrome（レスポンシブ対応済み）

---

## ライセンス

Copyright © 2024 株式会社星翔. All Rights Reserved.
