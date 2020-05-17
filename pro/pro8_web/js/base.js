// JavaScript Document

$(function(){
	//手风琴效果
	$(".accordionBox>li").each(function(){
		var fold = $(this).find(".fold");
		var unfold = $(this).find(".unfold");
		if(fold.is(":hidden")){
			$(this).width(990);
		}else{
			$(this).width(100);
		}
	})

	$(".accordionBox>li").click(function(){
		var li_index = $(this).index();
		$(this).animate({width:990},200);
		$(this).find(".unfold").show();
		$(this).find(".fold").hide();
		$(this).siblings().animate({width:100},200);
		$(this).siblings().find(".unfold").hide();
		$(this).siblings().find(".fold").show();
	})


	//内部手风琴效果
	$(".accordionBox2>li").each(function(){
		var fold2 = $(this).find(".fold2");
		var unfold2 = $(this).find(".unfold2");
		if(fold2.is(":hidden")){
			$(this).width(498);
		}else{
			$(this).width(76);
		}
	})

	$(".accordionBox2>li").click(function(){
		var li_index2 = $(this).index();
		$(this).animate({width:498},200);
		$(this).find(".unfold2").show();
		$(this).find(".fold2").hide();
		$(this).siblings().animate({width:76},200);
		$(this).siblings().find(".unfold2").hide();
		$(this).siblings().find(".fold2").show();
	})

})
