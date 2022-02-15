var router = require('express').Router();
const json = require('../js/json');
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
  res.header('Content-Type', 'text/plain;charset=utf-8');
  res.end(data);
});

module.exports = router;