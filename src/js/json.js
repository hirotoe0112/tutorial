const fs = require('fs');
const join = require('path').join;
var datafile = './src/data.json';
var data = JSON.parse(fs.readFileSync(datafile));

class DealJsonClass{

  //全データ読み込み
  readalldata(){
    return data;
  }

  //ファイル名を指定して内容を読み込み
  readfilecontent(filename){
    console.log(filename);
    var datapath = data.path;
    var content = fs.readFileSync(join(datapath, filename));
    return content.toString();
  }

}

module.exports = DealJsonClass;