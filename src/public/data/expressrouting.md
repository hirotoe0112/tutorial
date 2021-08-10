## もっとWebページらしくする

このままではただ文字が表示されているだけなので、HTMLを使ってWebページらしくしてみる。

### 普通にhtmlファイルを返す

静的なリソースを使ったWebページの場合、Express側に関数が用意されている。

まず、プロジェクトフォルダの中にpublicフォルダ（名前はなんでもいい）を作成し、sample.htmlとsample2.htmlを作成する。

sample.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>サンプルページ</title>
  </head>
  <body>
    <h1>このページについて</h1>
    これはサンプルページです。<a href="sample2.html">サンプルサブページへ</a>
  </body>
</html>
```

sample2.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>さんぷるぷる</title>
  </head>
  <body>
    <h1>このページについて</h1>
    ここはサンプルサブページです。
  </body>
</html>
```

ルートをsample.htmlにする。

index.js

```jsx
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/sample.html');
});
```

- __dirnameは実行しているファイルが存在するパスを示す。

これで、localhost:3000にアクセスしたらsample.htmlの内容が表示されるようになった。

しかし、リンクをクリックしてもsample2.htmlの内容は表示されない。

それはsample2.htmlというリクエストに対するルーティングが定義されていないからだ。

では、htmlを増やすごとにルーティングの定義をいちいち追加しなければならないのか？100ページあったら100ページ分の定義が必要なのか？

実は、Expressには静的なリソースを一括して読み込んでくれる関数がある。

以下の関数をindex.jsに追加する。（場所はappの定義後ならどこでもいい）

```jsx
app.use(express.static('public'));
```

- これはpublicフォルダ内のファイルをすべて読み込むという関数。
- publicフォルダ内にhtmlファイルやJavaScriptファイル、CSSファイルをまとめておけば、ルーティングの定義をしなくてもそのファイルを使える。
- publicフォルダ以外にも読み込むフォルダを追加する場合は、フォルダ名だけを変えて同じ関数をもう1行書けば良い。

これを追加後、localhost:3000にアクセスすると、リンク先も問題なく表示されるはずだ。

### テンプレートエンジンを使う

普通にhtmlファイルを作成する上記の方法の他、テンプレートエンジンを使って簡単にWebページを作ることができる。

テンプレートエンジンには色々あるが、ここではejsというテンプレートエンジンを使う。

まず、ejsをインストールする。

```jsx
npm install ejs
```

そして、プロジェクトフォルダ直下にviewsフォルダ（名前は固定）を作成し、tmp.ejsを作成する。

viewsという名前にするのは、デフォルトでviewsフォルダ内のファイルが読み込まれるからだ。（変更は可能）

tmp.ejs

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1>このページについて</h1>
    <%= explain %>
  </body>
</html>
```

index.jsでは、まずテンプレートエンジンにejsを使うという設定を行う。（appの定義後ならどこでも可）

この設定を行うことで、拡張子ejsを省略しても認識されるようになる。

```jsx
app.set('view engine', 'ejs');
```

そして、ルートのルーティングを以下のように変更する。

```jsx
app.get('/', (req, res) => {
  res.render('tmp', {
    title: 'テンプレートエンジンを使ったページ',
    explain: 'ここはテンプレートエンジンを使ったページのサンプルです。'
  })
});
```

- tmp.ejsをレンダリングするとともに、JSONでtitleとexplainという2つの変数を渡している。
- ejs側は<%= 変数名 %>という構文で変数を受け取り、値を表示している。

test1とtest2のルーティングも以下のように変更してみる。

```jsx
app.get('/test1', (req, res) => {
  res.render('tmp', {
    title: 'テスト１のページ',
    explain: 'test1です。'
  })
});

app.get('/test2', (req, res) => {
  res.render('tmp', {
    title: 'テスト２のページ',
    explain: 'test2です。'
  })
});
```

localhost:3000/test1やlocalhost:3000/test2を実行すると、同じテンプレートを使って別々の内容が表示できたことがわかる。