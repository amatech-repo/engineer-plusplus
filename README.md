# engineer-plusplus

## URL一覧
```md
http://localhost:8080/ディレクトリ名/ファイル名
()の中はURLを表しています
ログイン：http://localhost:8080/auth/login
新規登録：http://localhost:8080/auth/register
.
├── auth
│   ├── Header.js
│   ├── forgot_password.js  # リセットパスワード(/auth/forget_password)
│   ├── login.js            # ログイン(/auth/login)
│   └── register.js         # 新規登録(/auth/register)
├── dashboard               # ホーム(/ or /dashboard)
├── materialDetail          # 教材詳細(/materialDetail/[id])
│   └── [id].tsx              # id: 現時点(2023/04/27)なんでもいい
├── questions               # 質問一覧(/questions)
│   └── index.tsx           # 質問登録(/questions/post)
├── register                # 教材登録(/register)
├── timeline                # タイムライン(/timeline)
└─── profile               # プロフィール(/profile)

```

## ディレクトリ構成
```md
./frontend/src
├── components        # 各コンポーネント（汎用性の高いもの、ボタンやナビゲーションなど）
│   ├── Layouts       # レイアウトコンポーネント（ナビゲーションをimportしている）
│   └── Navigataion
├── pages             # 各ページ
├── store             # recoilの状態管理を行う（ログイン中かの有無など）
│   └── Auth
```

## ページ構成
```md
./frontend/src/pages
├── _app.tsx
├── auth        # loginやregister画面（ログインと新規登録画面を切り替えたい、デフォルトはログイン）
├── bookslist   # 教材一覧
├── dashboard   # ホーム画面（教材やタイマーなど）
├── index.tsx   # root
├── questions   # 質問投稿、一覧画面（投稿とかもできる
└── timeline    # タイムライン（教材ごとの質問や他ユーザの質問など）
```

## 技術スタック
### product
- node -v v18.13.0
- next.js 13.3.1
- storybook v7
- typescript
### css
- styled-component
### DB, Auth
- firebase
  - firestore
  - fireauth
### 状態管理
- recoil

## 環境構築
1. `git clone amatech-repo/engineer-plusplus`
2. `cd frontend`
3. `npm i`
4. `npm run dev`

## Branch strategy
* 機能開発: feature/ブランチ名
* バグ修正: hotfix/ブランチ名, bug/ブランチ名

## Commit message
```shell
feat: 新しい機能
fix: バグの修正
docs: ドキュメントのみの変更
style: 空白、フォーマット、セミコロン追加など
refactor: 仕様に影響がないコード改善(リファクタ)
perf: パフォーマンス向上関連
test: テスト関連
chore: ビルド、補助ツール、ライブラリ関連
```
```shell
feat: 〇〇なため、△△を追加
ex) 記事の分類ができないため、タグ機能を追加
```
