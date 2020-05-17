$(function(){
	//登陆选项卡切换
	$(".login-title li").off("mouseover").on("click",function(){
    	var index = $(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$(".login-main div").eq(index).addClass("active").siblings().removeClass("active");
    });


    //提示扫码

    $('.codeimg').mouseover(function(){
		$(".codeimg").animate({"left":"20px"},300);
		$(".codeimg-tip").fadeIn(400);
	}).mouseout(function(){
		$(".codeimg").animate({"left":"84px"},300);
		$(".codeimg-tip").fadeOut(200);
	})

	//登陆验证
  	var username=document.getElementById('username')
    var login_n=document.getElementById('login_n');
    username.onblur=function(){
    	var uname=this.value;
      	Ajax().post('login.php','value='+uname,function(msg){
        	if (msg=='y') {
	        	login_n.innerHTML='恭喜!用户名存在,可以登录!'
	        	login_n.style.color='green';
        	}else{
          		login_n.innerHTML='对不起,此用户名不存在!'
          		login_n.style.color='red';
        	}
      	});
	}
	//密码验证
    var pwd = document.getElementById('pwd');
    var login_p = document.getElementById('login_p');

    pwd.onblur = function(){
    	var val = this.value.trim();
    	var reg =/^[\w\-]{6,15}$/;
    	if(reg.test(val)){
        	login_p.innerHTML = '密码正确!';
        	login_p.style.color='green';
        }else{
        	login_p.innerHTML = '密码不正确!';
        	login_p.style.color='red';
        }
    }

})