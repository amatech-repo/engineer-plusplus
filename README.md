# engineer-plusplus

## 技術スタック
- node -v v18.13.0
- next.js 13.3.1
- storybook v7
- typescript
- styled-component
- firebase
  - firestore
  - fireauth

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