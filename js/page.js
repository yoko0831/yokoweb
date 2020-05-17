$(".backtop").click(function () {
  if ($('html').scrollTop()) {
    $('html').animate({ scrollTop: 0 }, 1000);
    return false;
  }
  $('body').animate({ scrollTop: 0 }, 1000);
  return false;
});


$(function () {
  //navbar
  // 获取导航栏到屏幕顶部的距离
  var oTop = $(".pagenav").offset().top;
  //获取导航栏的高度，此高度用于保证内容的平滑过渡
  var martop = $('.pagenav').outerHeight();
  var sTop = 0;
  // 监听页面的滚动
  $(window).scroll(function () {
    // 获取页面向上滚动的距离
    sTop = $(this).scrollTop();
    // 当导航栏到达屏幕顶端
    if (sTop >= oTop) {
      // 修改导航栏position属性，使之固定在屏幕顶端
      $(".pagenav").css({ "position": "fixed", "top": "0", "box-shadow": "0px 1px 5px #a6a6a6" });
      // 修改内容的margin-top值，保证平滑过渡
      $(".pagecontent").css({ "margin-top": martop });
    } else {
      // 当导航栏脱离屏幕顶端时，回复原来的属性
      $(".pagenav").css({ "position": "static", "box-shadow": "none" });
      $(".pagecontent").css({ "margin-top": "0" });
    }
  });

})