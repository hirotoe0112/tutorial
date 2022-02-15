var router = require('express').Router();
const json = require('../js/json');
const md = require('markdown-it')();
let dealjsonClass = new json();

//index
router.get('/', (req, res) => {
  res.render('index');
});

//全記事取得
router.get('/all', (req, res) => {
  let data = dealjsonClass.readalldata();
  console.log(data.list);
  res.header('Content-Type', 'application/json');
  res.end(JSON.stringify(data.list));
});

//記事内容取得
router.get('/detail/:filename', (req, res) => {
  //パラメータの取得
  var filename = req.params.filename;
  let data = dealjsonClass.readfilecontent(filename);
  let html = md.render(data);
  console.log(html);
  res.header('Content-Type', 'text/plain;charset=utf-8');
  res.end(html);
});

module.exports = router;