$(function() {

  // // id属性がfadeoutの要素がクリックされたら
  // $('#fadeOut').on('click', function() {

  //   // フェードアウトする
  //   $('.box').fadeOut();
  
  // });

  // // id属性がfadeInの要素がクリックされたら
  // $('#fadeIn').on('click', function() {

  //   // フェードインする
  //   $('#fadeIn').on('click', function() {
  //     // フェードインする
  //     $('.box').fadeIn();
  //   });
  // });

  // // id属性がfadeToggleの要素がクリックされたら
  // $('#fadeToggle').on('click', function() {
  //   // フェードイン or フェードアウトする
  //   $('.box').fadeToggle();
  // });

  // $('#slideUp').on('click', function() {
  //   $('.box').slideUp();
  // });

  // $('#slideDown').on('click', function() {
  //   $('.box').slideDown();
  // });

  // $('#slideToggle').on('click', function() {
  //   $('.box').slideToggle();
  // });

  $('#fadeOut').on('click', function() {
    // 不透明度を０にする（フェードアウトする）
    $('.box').css('opacity', 0);
  });

  $('#fadeIn').on('click', function() {
    // 不透明度を０にする（フェードアウトする）
    $('.box').css('opacity', 1);
  });

  $('#slideUp').on('click', function() {
    // 高さを０にする（スライドアップする）
    $('.box').css('height', 0);
  });

  $('#slideDown').on('click', function() {
    // 高さを200にする（スライドアップする）
    $('.box').css('height', 200);
  });
});