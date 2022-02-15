## 実行すると今日の日付をファイルに出力してくれるプログラムを作る

### 仕様

- スクリプトファイル名はtoday.jsとする
- 実行するとスクリプトファイルと同じ場所にtoday.txtを作成し、今日の日付yyyy/mm/ddを出力する

### Nodeでファイル出力

- 元々、JavaScriptはブラウザ上で動いていたので、ローカルファイルを操作するように作られていない。
- Nodeは標準ライブラリとしてファイル入出力用のライブラリが用意されている。
- 標準ライブラリとは、C#でいうと.NET Frameworkに含まれているライブラリと同じような意味合い。
- C#で何かライブラリを使うときにはusingを使うように、Nodeでも使いたいライブラリを読み込んで使う。

### コード

```jsx
//ファイル出力のためのfsというライブラリを読み込む
var fs = require('fs');

var date = new Date();
var year = date.getFullYear();
var month = ('0' + Number(date.getMonth() + 1)).slice(-2);
var day = ('0' + date.getDate()).slice(-2);

var ymd = year + '/' + month + '/' + day;
console.log(ymd);

//ファイル出力
fs.writeFileSync('today.txt', ymd);
```

- 最初の行でfsライブラリを読み込み、変数fsに格納している。
- 最後の行で変数fsに格納されたライブラリのファイル出力関数を使ってテキストファイルを出力している。
- writeFileSyncはその名の通り同期的に書き出す関数。非同期版もある。

### まとめ

このように、従来はブラウザ上でしか動かなかったJavaScriptをPC上で動かして、C#のWindowsアプリのような色々な処理をできるようにしたものがNode.jsである。