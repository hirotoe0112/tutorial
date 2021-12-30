//ページ読み込み時処理
document.addEventListener('DOMContentLoaded', function(){
  //各記事に対するイベント登録
  var items = document.querySelectorAll('.item');
  for(let i = 0; i < items.length; i++){
    items[i].addEventListener('click', OpenDetail, false);
    console.log(i);
  }

  //モーダルウインドウ背景に対するイベント登録
  var modalback = document.querySelector('#detail')
  modalback.addEventListener('click', CloseDetail, false);
}, false);

//モーダルウインドウ表示
OpenDetail = async function(){
  //記事内容取得
  await GetContent();

  //モーダル表示
  console.log('open');
  document.querySelector('#detail').classList.add('open');
}

//記事内容取得
GetContent = async function(){
  const res = await fetch('/test');
  const text = await res.text();
  console.log(text);
}

//モーダルウインドウ非表示
CloseDetail = function(){
  document.querySelector('#detail').classList.remove('open');
}