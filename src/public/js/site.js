//バインドするデータ
let vueObj = {
  articles:[],
  title:"",
  content:"",
  modal:false
};

//vueオブジェクト作成
var app = new Vue({
  el:'#main',
  data:vueObj,
  methods:{
    detail: async function(title, filename){
      //記事の内容を取得
      const res = await fetch('/detail/' + filename);
      this.title = title;
      this.content = await res.text();
      //モーダルウインドウの表示
      this.modal = true;
    },
    close:function(){
      this.modal = false;
    }
  },
  mounted:function(){
    //ページ読み込み時に全記事一覧取得
    this.$nextTick(async function(){
      var res = await fetch('/all');
      this.articles = await res.json();
    });
  }
});