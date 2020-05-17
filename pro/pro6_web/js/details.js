$(function() {
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
			"background": "#FFF",
			"borderLeft": "1px solid #FFF",	
			"borderRight": "1px solid #FFF",		
			"borderBottom": "1px solid #e3e4e5",
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
			"borderLeft": "1px solid #FFF",	
			"borderRight": "1px solid #FFF",		
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
			"borderLeft": "1px solid #FFF",	
			"borderRight": "1px solid #FFF",		
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
			"borderLeft": "1px solid #FFF",	
			"borderRight": "1px solid #FFF",		
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
			"borderLeft": "1px solid #FFF",	
			"borderRight": "1px solid #FFF",		
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
			"borderLeft": "1px solid #FFF",	
			"borderRight": "1px solid #FFF",		
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
			"borderLeft": "1px solid #FFF",	
			"borderRight": "1px solid #FFF",		
			"borderBottom": "none",
		})
		$(".mobilejdlink>a").css({
			"color":"#999",
		})
		$(".mobilejdbox").hide();
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

	//二级导航
	$('.topnavlist li').find('.topnavhid').hide();
	$('.topnavlist li').hover(function() {
		$(this).find('.topnavhid').fadeIn(100);
	}, function() {
		$(this).find('.topnavhid').fadeOut(50);
	});

	//放大镜
	$("#small").mousemove(function(e){
		$("#move,#big").show();
		var x=e.pageX-$(this).offset().left-$("#move").width()/2;
		var y=e.pageY-$(this).offset().top-$("#move").height()/2;
		if(x<=0){
			x=0
		}else if(x>=$(this).width()-$("#move").width()){
			x=$(this).width()-$("#move").width()
		}
		if(y<=0){
			y=0
		}else if(y>=$(this).height()-$("#move").height()){
			y=$(this).height()-$("#move").height()
		}
		$("#move").css({left:x+'px',top:y+'px'});
		var scale=$("#big>img").width()/$("#small>img").width();
		$("#big").scrollTop(y*scale);
		$("#big").scrollLeft(x*scale);
	}).mouseout(function(){
		$("#move,#big").hide();
	})
	$('#dian li img').mouseover(function(){
		$('#small>img,#big>img').attr("src",$(this).attr("src"));
		$(this).css({"border":"2px solid #e53e41"});
	}).mouseout(function(){
		$(this).css({"border":"2px solid #FFF"});
	})
	var dian=document.getElementById('dian');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var ul=dian.getElementsByTagName('ul')[0];
	function off(aa){
		var l=parseInt(ul.style.left)+aa;
		ul.style.left=l+'px';
		if(l<=-116){
            ul.style.left='-116px';
        }
		// 0 的时候 最后
		if (l>0) {
			ul.style.left='0px';
		}
	}
	// 左边点击
	left.onclick=function(){
		off(58);
	}
	// 右击
	right.onclick=function(){
		off(-58);
	}

	//倒计时
  	function toDou(t){
  		if(t<10){
  			return t='0'+t;
  		}else {
  			return t;
  		}
  	}
    var djs = document.getElementById('djs');
	setInterval(getTime,1000);
	function getTime(){
		var d = new Date();
		var ctime = d.getTime();
		var f = new Date('2018-10-01 00:00:00');
		var ftime = f.getTime();
		var sytime = ftime -ctime;
		var day =  Math.floor(sytime /(1000*60*60*24));
		var sytime = sytime % (1000*60*60*24);
		var hours = Math.floor(sytime/(1000*60*60));
		var sytime = sytime %(1000*60*60);
		var minutes = Math.floor(sytime/(1000*60));
		var sytime = sytime %(1000*60);
		var seconds = Math.floor(sytime/1000);
		djs.innerHTML ='还剩' +toDou(day)+'天'+toDou(hours)+'小时'+toDou(minutes)+'分钟'+toDou(seconds)+'秒';
	}

	//购物车加减数字
	$(".addbtn").click(function(){
		var n=$(this).prev().val();
		var num=parseInt(n)+1;
		if(num==0){ return;}
		$(this).prev().val(num);
	});
	
	$(".subbtn").click(function(){

		var n=$(this).next().val();
		var num=parseInt(n)-1;
		if(num==0){ return}
		$(this).next().val(num);

	});
		
	//左侧菜单点击事件
	$('.proleftnav h3').click(function(){
		$(this).toggleClass('open').next('ul').slideToggle();
	})

	//左侧热门商品切换
	$(".lefthottab li").off("mouseover").on("mouseover",function(){
    	var index = $(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$(".lefthotmain>div").eq(index).addClass("active").siblings().removeClass("active");
    });


    //瀑布流2
	var pbl2=document.getElementById('pbl2');	
	window.onscroll=function(){
		var aHeight=document.documentElement.offsetHeight;
		var cHeight=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
		var sHeight=document.documentElement.scrollTop||document.body.scrollTop;
		if(aHeight-cHeight-2300<=sHeight){
			Ajax('JSON').get('details.php',function(msg){
				var str='';
				for(var i in msg){
					str+='<img src="'+msg[i]["pic"]+'" alt="">';
				}
				if(aHeight>=3500){
					pbl2.innerHTML=pbl2.innerHTML;

				}else{
					pbl2.innerHTML+=str;
				}
			});
		}
	}

	//右侧商品内容切换
	$(".prorighttab li").off("click").on("click",function(){
    	var index = $(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$(".prorightmain>div").eq(index).addClass("active").siblings().removeClass("active");
    });

    //菜单挂起
  	$(window).scroll(function(){
        var winHeight = $(window).scrollTop();
        //console.log($(".prorighttop").offset().top)
        if(winHeight>929){
        	$(".prorighttop").css({
        		"position":"fixed",
        		"top":"0px",
        	})
        	$(".xdthid").css({
        		"display":"block"
        	})
        }
        if(winHeight<920){
            $(".prorighttop").css({
        		"position":"relative",
        	})
        	$(".xdthid").css({
        		"display":"none"
        	})
        }
    })
		

});