$(function() {
  // // const p = $('p').text();
  // $('p').text('JQUERYを勉強しよう');
  // // console.log(p);

  // // 変数の初期化
  // let num = 0;

  // // ID属性appendの要素がクリックされたら要素を追加
  // $('#append').on('click', function(){

  //   // numを１ずつ増やす
  //   num++;
  //   $('ul').append('<li>appendで追加' + num + '</li>');
  // });

  // // id属性がremoveの要素がクリックされたら末尾要素を削除
  // $('#remove').on('click', function() {

  //   num--;
  //   $('li:last').remove();

  //   // 要素がなくなったら変数を０にする
  //   if(num < 0) {
  //     num = 0;
  //   }
  // });


  // id属性がshowの要素がクリックされたら要素を表示
  $('#show').on('click', function() {

    $('ul').show();
  });

  // id属性がhideの要素がクリックされたら要素を非表示
  $('#hide').on('click', function() {

    $('ul').hide();
  });
});