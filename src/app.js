var express = require('express');
var app = express();
var route = require('./routes/index');

//domain/public/ファイルパスで静的ファイルにアクセスできるようになる
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use('/', route);

app.listen(3000, ()=> {
  console.log('Node Start');
});

//起動方法
//node .\src\app.js