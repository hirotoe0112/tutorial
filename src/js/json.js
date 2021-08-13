const fs = require('fs');

class DealJsonClass{

  //全データ読み込み
  readalldata(){
    console.log(__dirname);
    let data = JSON.parse(fs.readFileSync('./src/data.json'));
    return data;
  }

  //ファイル名を指定して内容を読み込み
  readfilecontent(filename){
    let data = JSON.parse(fs.readFileSync('./src/data.json'));

  }

}

module.exports = DealJsonClass;