$(function(){

	//遮罩层弹出层
	var timer=setTimeout(function(){
		$(".bar").show();
		$(".bar").css({
			"width":$(document).width(),
			"height":$(document).height()
		})
		// 让拖拽元素显示
		$('.show').show();
	},2000)
	$(".close").click(function(){
		$(".bar").fadeOut();
		$(".show").fadeOut();
	})
	$(".quxiao").click(function(){
		$(".bar").fadeOut();
		$(".show").fadeOut();
	})
	$(".tongyi").click(function(){
		$(".bar").fadeOut();
		$(".show").fadeOut();
	})
	$(".show").mousedown(function(e){
		$(this).css("cursor","move")
		var offset=$(this).offset();
		var x=e.pageX-offset.left;
		var y=e.pageY-offset.top;
		$(document).mousemove(function(e){
			var ll=e.pageX-x;
			var tt=e.pageY-y;
			if(ll<=0){
				ll=0
			}else if(ll>=$(document).width()-$(".show").width()){
				ll=$(document).width()-$(".show").width()
			}
			if (tt<=0) {
				tt=0
			}else if(tt>=$(document).height()-$(".show").height()){
				tt=$(document).height()-$(".show").height()
			}
			$(".show").css({left:ll+'px',top:tt+'px'});
		})

	})
	$(document).mouseup(function(){
		$(this).off("mousemove");
		$(".show").css("cursor","")
	})

	//注册手机号下拉菜单
	$("#tetselect").click(function(){
		$(".telhide").slideToggle(200);
	})

	$("#tel").focus(function(){
		$(".tiptext1").css({
			"display":"block",
		})
	})

	//验证手机号
	function login(){
		var frm = document.getElementById('frm'),
        	tel = document.getElementById('tel'),
        	uMsg = document.getElementById('uMsg');
       
        var uBool=false;
            pBool=false;
        tel.onfocus = function(){
          uMsg.innerHTML ='请输入11位的手机号'
        }
        tel.onblur = function(){
        	var val = this.value.trim();
          	var reg = /^1[3456789]\d{9}$/;// 4-20位字母数字 下划线，- 中文
          	if(val.length==0){
                uMsg.innerHTML = '手机号不能为空';
                uMsg.style.color ='red';
                uBool = false;
          	}else if(reg.test(val)){
               uMsg.innerHTML = '手机号正确';
               uMsg.style.color ='green';
               uBool = true;
          	}else{
               uMsg.innerHTML ='手机号不正确';
               uMsg.style.color ='red';
               uBool = false;
          	}
        }
        frm.onsubmit = function(){
         if(!uBool){
               return false;
          }
        }
	}
	login();
})