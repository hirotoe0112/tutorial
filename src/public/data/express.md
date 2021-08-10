## Expressを使う

### Expressとは？

- Webサーバーの基本的な機能を備えているフレームワーク。
- NodeでWebアプリを作るなら定番のライブラリ。

### Expressを使う

- ExpressはNodeの標準ライブラリではないため、追加で導入する必要がある。
- ライブラリを追加で導入するために使うのがnpm（Node Package Manager）というもの。

### npmを使ってExpressをインストール

ターミナルでプロジェクトフォルダ直下に移動し、以下を実行する。

```jsx
npm init
```

package nameなど色々質問されるが、とりあえず全部空欄でOK。

最後にIs this OK?でエンターを押すと質問は終了し、プロジェクトフォルダ直下にpackage.jsonが作成される。

### package.jsonとは？

- プロジェクトの情報を指定したり、アプリケーションの管理を行うファイル。
- 追加のライブラリをインストールするとこのファイルに追記されていく。
- このファイルさえ見れば、プロジェクトが何のライブラリに依存しているか分かる。
- 別の環境にプロジェクトを移したときに、このファイルを使って必要なライブラリをインストールすることができる。

### Expressをインストール

```jsx
npm install express
```

インストールが終わると、package.jsonにexpressのバージョン情報が追加される。

### Expressでルーティング

新たにindex.jsというファイルを作成し、以下のようなコードを記述する。

```jsx
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/test1', (req, res) => {
  res.send('This is test1 page');
});

app.get('/test2', (req, res) => {
  res.send('This is test2 page');
});

app.listen(3000);
```

- 素のNodeのルーティングとやっていること自体は同じ。
- 素のNodeよりも少しコード量が少なくて済む。
- このように、Webサーバーの作成を簡単にしてくれる