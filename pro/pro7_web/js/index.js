//顶部
window.onload = function() {
    scrollPic();
    scrollPic2();
    scrollPic3();
}

function scrollPic() {
    var scrollPic = new ScrollPic();
    scrollPic.scrollContId = "scrollPic"; //内容容器ID
    scrollPic.arrLeftId = "LeftArr"; //左箭头ID
    scrollPic.arrRightId = "RightArr"; //右箭头ID

    scrollPic.frameWidth = 1368; //显示框宽度
    scrollPic.pageWidth = 171; //翻页宽度

    scrollPic.speed = 10; //移动速度(单位毫秒，越小越快)
    scrollPic.space = 10; //每次移动像素(单位px，越大越快)
    scrollPic.autoPlay = true; //自动播放
    scrollPic.autoPlayTime = 3; //自动播放间隔时间(秒)

    scrollPic.initialize(); //初始化
}
function scrollPic2() {
    var scrollPic = new ScrollPic();
    scrollPic.scrollContId = "hotcon_sild_box"; //内容容器ID
    scrollPic.arrLeftId = "scroll_left_hot"; //左箭头ID
    scrollPic.arrRightId = "scroll_right_hot"; //右箭头ID

    scrollPic.frameWidth = 1200; //显示框宽度
    scrollPic.pageWidth = 200; //翻页宽度

    scrollPic.speed = 10; //移动速度(单位毫秒，越小越快)
    scrollPic.space = 10; //每次移动像素(单位px，越大越快)
    scrollPic.autoPlay = false; //自动播放
    scrollPic.autoPlayTime = 3; //自动播放间隔时间(秒)

    scrollPic.initialize(); //初始化
}

function scrollPic3() {
    var scrollPic = new ScrollPic();
    scrollPic.scrollContId = "yccon_sild_box"; //内容容器ID
    scrollPic.arrLeftId = "scroll_left_yc"; //左箭头ID
    scrollPic.arrRightId = "scroll_right_yc"; //右箭头ID

    scrollPic.frameWidth = 1200; //显示框宽度
    scrollPic.pageWidth = 200; //翻页宽度

    scrollPic.speed = 10; //移动速度(单位毫秒，越小越快)
    scrollPic.space = 10; //每次移动像素(单位px，越大越快)
    scrollPic.autoPlay = false; //自动播放
    scrollPic.autoPlayTime = 3; //自动播放间隔时间(秒)

    scrollPic.initialize(); //初始化
}

$(document).ready(function(){
	//顶部菜单
	$(".topmenu_show_title").click(function(){
		$(".topmenu").animate({"height":"375px"},200);
		$(".topmenu_show").slideUp(200);
		$(".topmenu_pic").slideDown(200);
	})
	$(".arrow_top").click(function(){
		$(".topmenu").animate({"height":"40px"},200);
		$(".topmenu_show").slideDown(200);
		$(".topmenu_pic").slideUp(200);
	})

	//轮播图
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false,
		slideshowSpeed: 3000
	});

	//搜索框
	$("#searchinp1").focus(function(){
		$("#searchhot1").slideDown(200);
	}).blur(function(){
		$("#searchhot1").slideUp(200);
	})

	//菜单选项卡
	$('.tvlist ul').find('li').mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    

    //个人中心
    $('#kgbox1').mouseover(function(){
        $('#kgshow1').css({'display':'block'});
    }).mouseout(function(){
        $('#kgshow1').css({'display':'none'});
    })

    $('#xzbox1').mouseover(function(){
        $('#xzshow1').css({'display':'block'});
    }).mouseout(function(){
        $('#xzshow1').css({'display':'none'});
    })

    $('#photo1').mouseover(function(){
        $('#usershow1').css({'display':'block'});
    }).mouseout(function(){
        $('#usershow1').css({'display':'none'});
    })

    //导航菜单
    $('.navbox_list1>li').mouseover(function(){
    	$('.navbox_list1>li>div').eq($(this).index()).css('display', 'block');
    }).mouseout(function(){
    	$('.navbox_list1>li>div').eq($(this).index()).css('display', 'none');
    })

    $('#scrollConPic').mouseover(function(){
        $('#scroll_left_hot,#scroll_right_hot').css({"display":"block"});
        $('#hotcon_sild_box').css({"marginLeft":"0"});
    }).mouseout(function(){
        $('#scroll_left_hot,#scroll_right_hot').css({"display":"none"});
        $('#hotcon_sild_box').css({"marginLeft":"36px"});
    })

    $('#scrollConPic2').mouseover(function(){
        $('#scroll_left_yc,#scroll_right_yc').css({"display":"block"});
        $('#yccon_sild_box').css({"marginLeft":"0"});
    }).mouseout(function(){
        $('#scroll_left_yc,#scroll_right_yc').css({"display":"none"});
        $('#yccon_sild_box').css({"marginLeft":"36px"});
    })

    // 我的专属频道
    $('.zscon_sild>li').mouseover(function(){
        $('.zscon_pic_show').eq($(this).index()).css('display', 'block');
    }).mouseout(function(){
        $('.zscon_pic_show').eq($(this).index()).css('display', 'none');
    })

    //强势接档
    $('.qscon_sild>li').mouseover(function(){
        $('.qscon_pic_show').eq($(this).index()).css('display', 'block');
    }).mouseout(function(){
        $('.qscon_pic_show').eq($(this).index()).css('display', 'none');
    })

    //广告条1
    $('.modad>a').mouseover(function(){
        $('.modad>a>img:last-child').eq($(this).index()).css('bottom', '-10px');
    }).mouseout(function(){
        $('.modad>a>img:last-child').eq($(this).index()).css('bottom', '-20px');
    })

    //热搜推荐
    $(".tjcon_title>li").off("mouseover").on("mouseover",function(){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".tjcon_tab>ul").eq(index).addClass("active").siblings().removeClass("active");
    });


    // 顶部固定菜单
    $('#kgbox2').mouseover(function(){
        $('#kgshow2').css({'display':'block'});
    }).mouseout(function(){
        $('#kgshow2').css({'display':'none'});
    })

    $('#xzbox2').mouseover(function(){
        $('#xzshow2').css({'display':'block'});
    }).mouseout(function(){
        $('#xzshow2').css({'display':'none'});
    })

    $('#photo2').mouseover(function(){
        $('#usershow2').css({'display':'block'});
    }).mouseout(function(){
        $('#usershow2').css({'display':'none'});
    })

    $("#searchinp2").focus(function(){
        $("#searchhot2").slideDown(200);
    }).blur(function(){
        $("#searchhot2").slideUp(200);
    })

    //菜单挂起
    $(window).scroll(function(){
        var winHeight = $(window).scrollTop();
        if(winHeight>500){
            $(".top_fix").slideDown(200);
        }
        if(winHeight<500){
            $(".top_fix").hide();
        }
    })
});
