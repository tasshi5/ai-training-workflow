# TBM AI研修事業 業務マニュアル

生成AI研修の設計・ワークフロー・デモ・資料管理用リポジトリ

## 概要

このプロジェクトは、TBM社のAI研修事業における業務フローを可視化・管理するためのWebアプリケーションです。営業から研修実施、アフターフォローまでの全工程を一元管理できます。

## 機能

### 業務マニュアル（メインタブ）
- **5フェーズのワークフロー管理**
  - Phase 1: 提案・内示（S10-S12）
  - Phase 2: 受注（S20-S26）
  - Phase 3: 助成金申請（S30-S33）
  - Phase 4: 研修実施（S40-S42）
  - Phase 5: 研修後（S50-S55）
- 各フェーズのDone条件・チェックリスト
- アコーディオン形式での詳細表示

### ツール・リンク集
- Salesforce、Google Docs、Google Formsなど外部ツールへのクイックアクセス
- フェーズ別にリンクを整理

### 研修概要
- 研修プラン（助成金プラン/カスタマイズプラン）の説明
- 研修効果の数値実績
- 部門別AI活用事例

## ファイル構成

```
ai-training-workflow/
├── README.md                      # このファイル
├── ai-training-workflow-v3.html   # メインHTML
├── css/
│   └── styles.css                 # カスタムスタイル
└── js/
    └── main.js                    # アプリケーションロジック
```

## 使い方

### ローカルで開く
1. リポジトリをクローン
   ```bash
   git clone <repository-url>
   cd ai-training-workflow
   ```
2. `ai-training-workflow-v3.html` をブラウザで開く

### Webサーバーで配信
```bash
# Python 3の場合
python -m http.server 8000

# Node.jsの場合
npx serve .
```
ブラウザで `http://localhost:8000/ai-training-workflow-v3.html` にアクセス

## 技術スタック

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) (CDN)
- Vanilla JavaScript
- [Noto Sans JP](https://fonts.google.com/specimen/Noto+Sans+JP) (Google Fonts)

## 運用ルール

### 商談フロー
1. 商談前：商談準備フォーマットで準備
2. 商談後：同ドキュメントに結果を記録
3. 保存先：クライエント一覧フォルダに格納

### 助成金の期限
| 項目 | 期限 |
|------|------|
| 計画提出 | 研修開始 **1ヶ月前** まで |
| 支給申請 | 研修終了後 **2ヶ月以内** |

## ライセンス

Copyright (c) TBM Inc. All rights reserved.
