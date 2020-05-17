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
			"background": "#E3E4E5",
			"borderLeft": "1px solid #E3E4E5",
			"borderRight": "1px solid #E3E4E5",
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
			"background": "#E3E4E5",
			"borderLeft": "1px solid #E3E4E5",
			"borderRight": "1px solid #E3E4E5",
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
			"background": "#E3E4E5",
			"borderLeft": "1px solid #E3E4E5",
			"borderRight": "1px solid #E3E4E5",
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
			"background": "#E3E4E5",
			"borderLeft": "1px solid #E3E4E5",
			"borderRight": "1px solid #E3E4E5",
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
			"background": "#E3E4E5",
			"borderLeft": "1px solid #E3E4E5",
			"borderRight": "1px solid #E3E4E5",
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
			"background": "#E3E4E5",
			"borderLeft": "1px solid #E3E4E5",
			"borderRight": "1px solid #E3E4E5",
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
			"background": "#E3E4E5",
			"borderLeft": "1px solid #E3E4E5",
			"borderRight": "1px solid #E3E4E5",
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



	//左侧菜单选项卡
	var lis=document.querySelectorAll('#leftmenulist li');
	var divs=document.querySelectorAll('#leftmenulist-hide div');
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onmouseover=function(){
			// 隐藏之前所有显示的 lis 还是divs
			for (var j= 0; j < divs.length; j++) {
				lis[j].className='';
				divs[j].className='menuitem';
			}
			lis[this.index].className='active';
			divs[this.index].className='menuitem active';
		}
		lis[i].onmouseout=function(){
			this.className='';
			divs[this.index].className='menuitem';
		}
	}
	for (var k = 0; k < divs.length;k++) {
		divs[k].index=k;
		divs[k].onmouseover=function(){
			this.className='menuitem active';
			lis[this.index].className='active';
		}
		divs[k].onmouseout=function(){
			this.className='menuitem';
			lis[this.index].className='';
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
			if(m>8){
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
		if(m>8){
			m=0;
		}
		slideshow(m);
	})

	$('#slideshow-left').click(function(){
		m--;
		if(m<0){
			m=8;
		}
		slideshow(m);
	})

	//促销公告选项卡
    $("#tab-nav a").off("mouseover").on("mouseover",function(){
    	var index = $(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$("#tab-main div").eq(index).addClass("active").siblings().removeClass("active");
    });


  	//广告轮播
  	var n=0;
	function slideshow2(){
		$('.ad-tab1-img div').eq(n).show().siblings('div').hide();
		$('.ad-tab1-num p').eq(n).addClass('active').siblings('p').removeClass('active');
	}
	function autoRun2(){
		timer2=setInterval(function(){
			n++;
			if(n>2){
				n=0;
			}
			slideshow2(n);
		},3000)
	}
	autoRun2();
	$('.ad-tab1').mouseover(function(){
		clearInterval(timer2);
	}).mouseout(function(){
		autoRun2();
	})
	$('.ad-tab1-num p').mouseover(function(){
		n=$(this).index();
		slideshow2(n);
	})


	//菜单挂起
  	$(window).scroll(function(){
        var winHeight = $(window).scrollTop();
        if(winHeight>500){
            $(".topnavwrap").slideDown(200);
        }
        if(winHeight<500){
            $(".topnavwrap").hide();
        }
    })

    //倒计时
  	function toDou(t){
  		if(t<10){
  			return t='0'+t;
  		}else {
  			return t;
  		}
  	}
    var oS1=document.getElementById('s1');
    var oS2=document.getElementById('s2');
    var oS3=document.getElementById('s3');
 	var oDate = new Date();
 	oDate.setFullYear(2020,01,23);
 	oDate.setHours(0,0,0,0);
 	function tick(){
 		var oNow=new Date();
 		var s=parseInt((oDate.getTime()-oNow.getTime())/1000);
 		var h=parseInt(s/3600);
 		s%=3600;
 		var m=parseInt(s/60);
 		s%=60;
 		oS1.innerHTML=toDou(h);
 		oS2.innerHTML=toDou(m);
 		oS3.innerHTML=toDou(s);
 	}
 	var ticktimer=setInterval(tick,1000);
 	tick()


 	//产品左右滚动轮播
 	$("#slide-left").click(function(){
 		if($("#slide-left").css({"left":"0px"})){
 			$("#prolist").animate({
	 			"left":"-800px",
	 		})
 		}
 	})

 	$("#slide-right").click(function(){
 		$("#prolist").animate({
 			"left":"0px",
 		})
 	})


 	//排行榜
    $('.rankingbox-title').find('li').mouseover(function(){
        $('.rankingbox-title').find('li').attr('class', '');
        $('.rankingbox-main').find('.ranking-list').css('display', 'none');
        $(this).attr('class', 'active');
        $('.rankingbox-main').find('.ranking-list').eq($(this).index()).css('display', 'block');
    })


    //特色推荐轮播
	var z=0;
	function slideshow4(){
		$('.recommendslide>div').eq(z).show().siblings('div').hide();
		$('.recommendtab li').eq(z).addClass('active').siblings('li').removeClass('active');
	}

	function autoRun4(){
		timer=setInterval(function(){
			z++;
			if(z>4){
				m=0;
			}
			slideshow4(z);
		},3000)
	}
	autoRun4();

	$('.recommend').mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		autoRun4();
	})

	$('.recommendtab li').mouseover(function(){
		z=$(this).index();
		slideshow4(z);
	})

	$('.recommend .right').click(function(){
		z++;
		if(z>4){
			z=0;
		}
		slideshow4(z);
	})

	$('.recommend .left').click(function(){
		z--;
		if(z<0){
			z=4;
		}
		slideshow4(z);
	})

   	//瀑布流
	var pbl=document.getElementById('pbl');
	window.onscroll=function(){
		var aHeight=document.documentElement.offsetHeight;
		var cHeight=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
		var sHeight=document.documentElement.scrollTop||document.body.scrollTop;
		if(aHeight-cHeight-300<=sHeight){
			Ajax('JSON').get('pbl.php',function(msg){
				var str='';
				for(var i in msg){
					str+='<img src="'+msg[i]["pic"]+'" alt="">';
				}
				if(aHeight>=13000){
					pbl.innerHTML=pbl.innerHTML;

				}else{
					pbl.innerHTML+=str;
				}
			});
		}
	}


	//右侧边栏
	$('.tooltab div').mouseover(function(){
		$(this).css('background','#bb0f0f').siblings('div').css('background','')
		$('.tooltab a').eq($(this).index()).css({
			"left":"-62px",
		})
	}).mouseout(function(){
		$(this).css('background','')
		$('.tooltab a').eq($(this).index()).css({
			"left":"0",
		})
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
