const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('tmp', {
    title: 'テンプレートエンジンを使ったページ',
    explain: 'ここはテンプレートエンジンを使ったページのサンプルです。'
  })
});

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

app.listen(3000, () => {
  console.log('Node Start');
  console.log(__dirname);
});
