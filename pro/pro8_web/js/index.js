// 文字滚动
function autoScroll(obj){
	$(obj).find('.wRoll_ul').animate({
    	marginTop: '-3rem'
    },1000,function(){
         $(this).css({marginTop : "0px"});
         var li  =$(".wRoll_ul").children().first().clone()
         $(".wRoll_ul li:last").after(li );
         $(".wRoll_ul li:first").remove();
	})
}
$(function(){
	setInterval('autoScroll(".nwordRoll")',2000);
})

// var it=0;
// function ssh(it){
// 	$('.news-item').eq(it).show().siblings('.news-item').hide();
// 	$('.news-nav a').eq(it).addClass('red').siblings('.news-nav a').removeClass('red');
// 	var kkk=it*75;
// 	console.log(kkk);
// 	$('.action').css('left',kkk);
// }
// $('.news-nav a').mouseover(function () {
// 	it=$(this).index();
// 	ssh(it);
// });

$(function(){
	//顶部广告显示隐藏
	$('.topAd').mouseover(function(){
		$('.topAdSmall').hide();
		$('.topAdBig').show();
	});
	$('.topAd').mouseout(function(){
		$('.topAdSmall').show();
		$('.topAdBig').hide();
	});

	//顶部菜单显示隐藏
	$('#topNav_tog').mouseover(function(){
		$('.topNav_show').show();
	});
	$('#topNav_tog').mouseout(function(){
		$('.topNav_show').hide();
	});


	//选项卡
	var it=0;
	$(".mainBox2_Silde_wrap_tab>li").click(function(){
		$(".mainBox2_Silde_wrap_tab>li").eq($(this).index()).addClass("active1").siblings().removeClass('active1');
		$(".mainBox2_Silde_wrap_main>li").eq($(this).index()).addClass("active1").siblings().removeClass('active1');
		var kkk=it*75;
		$('.tab_line').css('left',kkk);
	})
	
	//轮播
	$(".mainBox2_Silde_Tab>li").mouseover(function(){
		$(".mainBox2_Silde_Tab>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".mainBox2_Silde_Main>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
	})

	//mainBox2_Tab_Tab选项卡
	$(".mainBox2_Tab_Tab>li").mouseover(function(){
		$(".mainBox2_Tab_Tab>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".mainBox2_Tab_Main>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
	})


	
	//mainBox3_Tab_Main选项卡
	$(".mainBox3_Tab_Tab>li").mouseover(function(){
		$(".mainBox3_Tab_Tab>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".mainBox3_Tab_Main>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
	})

	//mainBox4_Tab_Main选项卡
	$(".mainBox4_Tab_Tab>li").mouseover(function(){
		$(".mainBox4_Tab_Tab>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".mainBox4_Tab_Main>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
	})

	//mainBox5_Tab_Main选项卡
	$(".mainBox5_Tab_Tab>li").mouseover(function(){
		$(".mainBox5_Tab_Tab>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".mainBox5_Tab_Main>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
	})
	//mainBox5_Tab_Main2选项卡
	$(".mainBox5_Tab_Tab2>li").mouseover(function(){
		$(".mainBox5_Tab_Tab2>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".mainBox5_Tab_Main2>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
	})

	//mainBox6_Tab_Main选项卡
	$(".mainBox6_left_Tab>li").mouseover(function(){
		$(".mainBox6_left_Main>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
	})

	//mainBox6_Tab_Tab选项卡
	$(".mainBox6_Tab_Tab>li").mouseover(function(){
		$(".mainBox6_Tab_Tab>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".mainBox6_Tab_Main>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
	})
    
    //轮播
	$(".mainBox6_Silde_Tab>li").mouseover(function(){
		$(".mainBox6_Silde_Tab>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".mainBox6_Silde_Main>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
	})
})


