var router = require('express').Router();
const json = require('../js/json');
let dealjsonClass = new json();

router.get('/', (req, res) => {
  let data = dealjsonClass.readalldata();
  res.render('index', {
    data: data
  })
});

router.post('/detail', (req, res) => {
  res.render('tmp', {
    title: 'テスト１のページ',
    explain: 'test1です。'
  })
});

//記事内容取得
router.get('/test', (req, res) => {
  console.log("success!!!!!!!!!!!!");
  res.header('Content-Type', 'text/plain;charset=utf-8');
  res.end('結果です！');
});

module.exports = router;