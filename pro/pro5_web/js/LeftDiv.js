/**
 * Created by aijing on 15-11-19.
 */

$(function () {

    var leftwidth=$("#LeftDiv").width()
    var screen_width=$("body").width()-leftwidth
   
 $('.UserId').toggle(function () {
    $('.usernav').animate({
      left: '35px',
      opacity: '1'
    }, 1000)
  }, function () {
    $('.usernav').css({
      opacity: '0',
      left: '225px'
    })
  })
  //左侧菜单栏
    $('.LeftMenu dl').not($('.LeftMenu dl').eq(0)).css({display:"none"})
    $('.LeftMenu span').eq(0).css({
        backgroundColor: '#e8e8e8',
        borderLeft:'3px solid #3fb0f2',
		color:'#3fb0f2',
		fontWeight: 'bold'
		
		
    })
    $('.LeftMenu span').toggle(function () {

            var p_add = $(this).index();
            $(this).addClass('addleftnav').css({
                backgroundColor: '#e8e8e8',
                borderLeft:'3px solid #3fb0f2',
				color:'#3fb0f2',
				fontWeight: 'bold'
            })
            $('.LeftMenu dl').eq(p_add / 2).slideDown(500)
            $('.LeftMenu dl').eq(p_add / 2).siblings().not($('.LeftMenu span')).slideUp(500)
            $(this).siblings().not($('.LeftMenu dl')).removeClass('addleftnav').css({
              backgroundColor: '#ffffff'
                ,borderLeft:'3px solid #ffffff',
				color:'#555',
				fontWeight: 'normal'
            })

  }, function () {
            var p_add = $(this).index();
            $('.LeftMenu dl').eq(p_add / 2).slideUp(500,function(){
                $(this).removeClass("addleftnav").css({backgroundColor:"#e8e8e8"})
            })
  })
  $('.LeftMenu span').mouseover(function () {
      var p_add = $(this).index();
      var dldisplay = $('.LeftMenu dl').eq(p_add / 2).css('display');
      if(dldisplay=="none"){
          $(this).css({
              backgroundColor: '#e8e8e8',
              borderLeft:'3px solid #3fb0f2',
			  color:'#3fb0f2',
			  fontWeight: 'bold'
          })
      }

            var w = $('#LeftDiv').width() //79px
            if (w <= 80) {
              var nu = $(this).index()
              $('.right_nav dl').eq(nu / 2).css({
                display: 'block'
              }).siblings().css({
                display: 'normal'
              })
            }
  }).mouseout(function () {//鼠标移出
            var p_add = $(this).index();
            var dldisplay = $('.LeftMenu dl').eq(p_add / 2).css('display');
            if (dldisplay == 'none')
            {

              $(this).css({
                backgroundColor: '#ffffff'
                    ,borderLeft:'3px solid #ffffff',
					color:'#555',
					fontWeight: 'normal'
					

              })
            }

            var nu = $(this).index()
            $('.right_nav dl').eq(nu / 2).css({
              display: 'none'
            })
  })
  $('.right_nav dl').mousemove(function () {
    $(this).css({
      display: 'block'
    })
  }).mouseout(function () {
    $(this).css({
      display: 'none'
    })
  })
})





