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

module.exports = router;