## とりあえず何か動かしてみる

1. 適当にフォルダを作る
2. フォルダ上で右クリックして「Codeで開く」
「Codeで開く」メニューがない場合はVisual Studio Codeを起動した後でエクスプローラ（Ctrl+Shift+E）から開く
3. フォルダ直下にsample.jsを作成する
4. 何かJavaScriptを書く
※ブラウザではないので、ブラウザでDOMを操作するときのdocument.getElement～等は動かない

    ```jsx
    console.log("test");
    ```

5. ターミナルを表示する（Ctrl+Shift+@）
下記のコマンドを実行する

    ```jsx
    node sample.js
    ```

6. ターミナルにtestと表示される

たまたまVisual Studio Code上で実行したが、もちろんコマンドプロンプトからnode sample.js（パスに気を付ける）と実行すればコマンドプロンプトにtestと表示される。

- ブラウザに上記のスクリプトを渡すと、ChromeやFirefoxがJavaScriptを解釈してブラウザのコンソールにログを出力する。
- それと同じように、Nodeにスクリプトを渡すと、それを実行しているアプリ（powershellやコマンドプロンプト）にログを出力する。