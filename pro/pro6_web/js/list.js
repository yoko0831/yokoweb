$(function(){
	//广告关闭
	$('#topadClose').click(function(){
		 $('.topadwrap').slideUp(200);
	})

	//鼠标滑过显示地区
	$("#place").mouseover(function(){
		$(".place-showbox").css({
			"background": "#fff",
			"borderLeft": "1px solid #CCCCCC",	
			"borderRight": "1px solid #CCCCCC",		
			"borderBottom": "1px solid #FFF",
		})
		$(".place-hidebox").show();
	}).mouseout(function(){
		$(".place-showbox").css({
			"background": "#F0F3EF",
			"borderLeft": "1px solid #F0F3EF",	
			"borderRight": "1px solid #F0F3EF",		
			"borderBottom": "none",
		})
		$(".place-hidebox").hide();
	})
	$(".place-hidebox").mouseover(function(){
		$(".place-showbox").css({
			"background": "#fff",
			"borderLeft": "1px solid #CCCCCC",	
			"borderRight": "1px solid #CCCCCC",		
			"borderBottom": "1px solid #FFF",
		})
		$("this").show();
	}).mouseout(function(){
		$(".place-showbox").css({
			"background": "#F0F3EF",
			"borderLeft": "1px solid #F0F3EF",	
			"borderRight": "1px solid #F0F3EF",		
			"borderBottom": "none",
		})
		$("this").hide();
	})
	$(".place-list1 li").click(function(){
		$('.place-showbox a').text($(this).text());
	})

	//我的京东
	$(".myjdlink").mouseover(function(){
		$(".myjdlink").css({
			"background": "#fff",
			"borderLeft": "1px solid #CCCCCC",	
			"borderRight": "1px solid #CCCCCC",		
			"borderBottom": "1px solid #FFF",
		})
		$(".myjdlink>a").css({
			"color":"#E33333",
		})
		$(".myjdbox").show();
	}).mouseout(function(){
		$(".myjdlink").css({
			"background": "#F0F3EF",
			"borderLeft": "1px solid #F0F3EF",	
			"borderRight": "1px solid #F0F3EF",		
			"borderBottom": "none",
		})
		$(".myjdlink>a").css({
			"color":"#999",
		})
		$(".myjdbox").hide();
	})

	//企业采购
	$(".companylink").mouseover(function(){
		$(".companylink").css({
			"background": "#fff",
			"borderLeft": "1px solid #CCCCCC",	
			"borderRight": "1px solid #CCCCCC",		
			"borderBottom": "1px solid #FFF",
		})
		$(".companylink>a").css({
			"color":"#E33333",
		})
		$(".companybox").show();
	}).mouseout(function(){
		$(".companylink").css({
			"background": "#F0F3EF",
			"borderLeft": "1px solid #F0F3EF",	
			"borderRight": "1px solid #F0F3EF",		
			"borderBottom": "none",
		})
		$(".companylink>a").css({
			"color":"#999",
		})
		$(".companybox").hide();
	})
	//客户服务
	$(".servelink").mouseover(function(){
		$(".servelink").css({
			"background": "#fff",
			"borderLeft": "1px solid #CCCCCC",	
			"borderRight": "1px solid #CCCCCC",		
			"borderBottom": "1px solid #FFF",
		})
		$(".servelink>a").css({
			"color":"#E33333",
		})
		$(".servebox").show();
	}).mouseout(function(){
		$(".servelink").css({
			"background": "#F0F3EF",
			"borderLeft": "1px solid #F0F3EF",	
			"borderRight": "1px solid #F0F3EF",		
			"borderBottom": "none",
		})
		$(".servelink>a").css({
			"color":"#999",
		})
		$(".servebox").hide();
	})
	//网址导航
	$(".webmaplink").mouseover(function(){
		$(".webmaplink").css({
			"background": "#fff",
			"borderLeft": "1px solid #CCCCCC",	
			"borderRight": "1px solid #CCCCCC",		
			"borderBottom": "1px solid #FFF",
		})
		$(".webmaplink>a").css({
			"color":"#E33333",
		})
		$(".webmapbox").show();
	}).mouseout(function(){
		$(".webmaplink").css({
			"background": "#F0F3EF",
			"borderLeft": "1px solid #F0F3EF",	
			"borderRight": "1px solid #F0F3EF",		
			"borderBottom": "none",
		})
		$(".webmaplink>a").css({
			"color":"#999",
		})
		$(".webmapbox").hide();
	})
	//手机京东
	$(".mobilejdlink").mouseover(function(){
		$(".mobilejdlink").css({
			"background": "#fff",
			"borderLeft": "1px solid #CCCCCC",	
			"borderRight": "1px solid #CCCCCC",		
			"borderBottom": "1px solid #FFF",
		})
		$(".mobilejdlink>a").css({
			"color":"#E33333",
		})
		$(".mobilejdbox").show();
	}).mouseout(function(){
		$(".mobilejdlink").css({
			"background": "#F0F3EF",
			"borderLeft": "1px solid #F0F3EF",	
			"borderRight": "1px solid #F0F3EF",		
			"borderBottom": "none",
		})
		$(".mobilejdlink>a").css({
			"color":"#999",
		})
		$(".mobilejdbox").hide();
	})

	//购物车显示隐藏
	$(".cartbox").mouseover(function(){
		$(".cartbox").css({	
			"borderBottom": "1px solid #FFF",
		})
		$(".cartboxhid").show();
	}).mouseout(function(){
		$(".cartbox").css({	
			"borderBottom": "1px solid #E3E4E5",
		})
		$(".cartboxhid").hide();
	})

	//二维码显示隐藏
	$(".codebox").mouseover(function(){
		$(".erweima").show();
	}).mouseout(function(){
		$(".erweima").hide();
	})

	
	//全部分类显示隐藏
	$(".choose-select").mouseover(function(){
		$(".choose-select>p").css({	
			"borderBottom": "1px solid #fff",
		})
		$(".choosehid").show();
	}).mouseout(function(){
		$(".choose-select>p").css({	
			"borderBottom": "1px solid #CCC",
		})
		$(".choosehid").hide();
	})

	
 	//左侧菜单选项卡
	var tabs=document.querySelectorAll('.leftmenutab>div');
	var divs=document.querySelectorAll('.leftmenuhid>div');
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].index=i;
		tabs[i].onmouseover=function(){
			// 隐藏之前所有显示的 lis 还是divs
			for (var j= 0; j < divs.length; j++) {
				tabs[j].className='leftmenu-one clearfix';
				divs[j].className='leftmenuhid-one';
			}
			tabs[this.index].className='leftmenu-one clearfix active';
			divs[this.index].className='leftmenuhid-one active';
		}
		tabs[i].onmouseout=function(){
			this.className='leftmenu-one clearfix';
			divs[this.index].className='leftmenuhid-one';
		}
	}
	for (var k = 0; k < divs.length;k++) {
		divs[k].index=k;
		divs[k].onmouseover=function(){
			this.className='leftmenuhid-one active';
			tabs[this.index].className='leftmenu-one clearfix active';
		}
		divs[k].onmouseout=function(){
			this.className='leftmenuhid-one';
			tabs[this.index].className='leftmenu-one clearfix';
		}
	}


   

	//轮播图
	var m=0;
	function slideshow(){
		$('.slideshow-img li').eq(m).fadeIn(1000).siblings('li').fadeOut();
		$('.slideshowbox-num li').eq(m).addClass('show').siblings('li').removeClass('show');
	}

	function autoRun(){
		timer=setInterval(function(){
			m++;
			if(m>5){
				m=0;
			}
			slideshow(m);
		},3000)
	}
	autoRun();

	$('.slideshowbox').mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		autoRun();
	})
	
	$('.slideshowbox-num li').mouseover(function(){
		m=$(this).index();
		slideshow(m);
	})

	$('#slideshow-right').click(function(){
		m++;
		if(m>5){
			m=0;
		}
		slideshow(m);
	})
	
	$('#slideshow-left').click(function(){
		m--;
		if(m<0){
			m=5;
		}
		slideshow(m);
	})


	//热销商品选项卡
	$(".hotboxnav li").off("mouseover").on("mouseover",function(){
    	var index = $(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$(".hotpro>div").eq(index).addClass("active").siblings().removeClass("active");
    });


    //一楼
	$("#floor1-tab li").off("mouseover").on("mouseover",function(){
    	var index = $(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$("#floor1-main>ul").eq(index).addClass("active").siblings().removeClass("active");
    });
	//楼层热销排行选项卡
    $("#rankbox1-list dd").on("mouseover",function(){
    	var index = $(this).index();
    	$(this).addClass("show").siblings().removeClass("show");
    })
    $("#rankbox1-tab li").off("mouseover").on("mouseover",function(){
    	var index = $(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$("#rankbox1-main>dl").eq(index).addClass("active").siblings().removeClass("active");
    });

    //二楼
	$("#floor2-tab li").off("mouseover").on("mouseover",function(){
    	var index = $(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$("#floor2-main>ul").eq(index).addClass("active").siblings().removeClass("active");
    });
	//楼层热销排行选项卡
    $("#rankbox2-list dd").on("mouseover",function(){
    	var index = $(this).index();
    	$(this).addClass("show").siblings().removeClass("show");
    })
    $("#rankbox2-tab li").off("mouseover").on("mouseover",function(){
    	var index = $(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$("#rankbox2-main>dl").eq(index).addClass("active").siblings().removeClass("active");
    });

    //家电资讯
    var num=0;
	var timer2;
	function scroll(sname){
		num++;
		if(num==6){
			$('#newsboxlist1').css({'top':'0px'});
			num=1;
		}
		$('#newsboxlist1').stop().animate({'top':-26*num+'px'},200)
	}
	timer2 = setInterval(scroll,1000);

	var num3=0;
	var timer3;
	function scroll3(sname){
		num3++;
		if(num3==6){
			$('#newsboxlist2').css({'top':'0px'});
			num3=1;
		}
		$('#newsboxlist2').stop().animate({'top':-26*num3+'px'},200)
	}
	timer3 = setInterval(scroll3,1000);

	var num4=0;
	var timer4;
	function scroll4(sname){
		num4++;
		if(num4==6){
			$('#newsboxlist3').css({'top':'0px'});
			num4=1;
		}
		$('#newsboxlist3').stop().animate({'top':-26*num4+'px'},200)
	}
	timer4 = setInterval(scroll4,1000);

	var num5=0;
	var timer5;
	function scroll5(sname){
		num5++;
		if(num5==6){
			$('#newsboxlist4').css({'top':'0px'});
			num5=1;
		}
		$('#newsboxlist4').stop().animate({'top':-26*num5+'px'},200)
	}
	timer5 = setInterval(scroll5,1000);


	//楼层
	$(window).scroll(function(){
        var winHeight = $(window).scrollTop();
        if(winHeight>1000){
            $(".floorfix").fadeIn(200);
        }
        if(winHeight<1000){
            $(".floorfix").fadeOut(200);
        }
    })
	// 点击楼层li 滚动到指定的位置
	$('.floorfix li').click(function(){
		var index=$(this).index();
		var top=$('.floorscroll').eq(index).offset().top;
		$('html').animate({scrollTop:top},500);
	})
	//根据当前滚动位置 判断处于几楼
	var heights=[];
	$('.floorscroll').each(function () {
		heights.push($(this).offset().top)
	})
	$(window).scroll(function () {
		var top=$(window).scrollTop();
		for (var i = 0; i < heights.length; i++) {
			if (top>=heights[i] && top<heights[i+1]) {
				var index=i;
				// 赋值给1F 背景
				$('.floorfix li').eq(index).css({
					"background":"#BD9B88",
					"color":"#fff"
				}).siblings().css({
					"background":"#FFF",
					"color":"#333"
				})
			
			//7楼没有小于8楼
			}else if (top>=heights[heights.length-1]) {
				//7楼自己的下标
				index=heights.length-1;
				$('.floorfix li').eq(index).css({
					"background":"#BD9B88",
					"color":"#fff"
				}).siblings().css({
					"background":"#FFF",
					"color":"#333"
				})
			}
		}
	})
	//返回顶部
	$(window).scroll(function(){
        var winHeight = $(window).scrollTop();
        if(winHeight>1000){
            $(".backtop").fadeIn(200);
        }
        if(winHeight<1000){
            $(".backtop").fadeOut(200);
        }
    })
	$(".backtop").click(function(){ 
		if ($('html').scrollTop()){
			$('html').animate({ scrollTop: 0 }, 1000);
			return false;
		}
		$('body').animate({ scrollTop: 0 }, 1000);
		 return false;
	});    


})