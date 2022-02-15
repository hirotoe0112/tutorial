## NodeでWebサーバーを作る

### Webサーバーとは何か？

- リクエストに対して、サーバー上の特定のファイルをレスポンスとして返す。
- リクエストに対して、サーバー上で処理を行い、処理結果をレスポンスとして返す。

### NodeでWebサーバーを作るとは？

- JavaScriptでリクエストを受け付ける機能を作成し、Nodeで実行することによって、実行しているマシンがリクエストを受け付けられるようになる＝Webサーバーになるということ。

### 一番基本のコード

```jsx
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log('Node Start');
});
```

- httpライブラリを使用。
- httpライブラリ内のcreateServer関数でリクエストを受け取り、レスポンスに適切な結果をセットして返すことができる。
- 上記の例はリクエストに対してHello Worldという文字列を返している。
- このプログラムを実行すると、ポート3000がlisten状態になりリクエストを受け付けられるようになる。
- http://locahost:3000で画面上にHello Worldと表示される。
- どんなリクエストに対しても同じレスポンスを返すので、http://localhost:3000/aaaaでもhttp://localhost:3000/aaa/bb/cccでもhttp://localhost:3000/index.phpでも必ずHello Worldが返される。
- リクエストのURLパスに応じて処理を変える（ルーティング）には、createServer内で定義する必要がある。

### 少しだけルーティングした例

```jsx
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  route(req, res);
});

server.listen(port, () => {
  console.log('Node Start');
});

function route(req, res){
  var url = req.url;

  switch (url){
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World');
      break;

    default:
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('No Page...');
      break;

  }
}
```

- createServerに直接書くのではなく、ルーティング部分をrouteメソッドに外だしした。
- req.urlでリクエストのURL（パスの部分）が取得できる。
- 「/」はルートパスなので、http://localhost:3000にアクセスされたときはHello Worldを表示する。
- それ以外のリクエストの場合はNo Page...を表示する。