//test
var express = require('express');
var app = express();

//domain/public/ファイルパスで静的ファイルにアクセスできるようになる
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', require('./routes/index'));

app.listen(3000, ()=> {
  console.log('Node Start');
});