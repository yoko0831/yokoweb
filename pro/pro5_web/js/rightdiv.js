$(document).ready(function () {
	var leftwidth=document.getElementById("LeftDiv").offsetWidth;
	var leftheight=document.getElementById("LeftDiv").offsetHeight;
	var scr_width=document.body.clientWidth-leftwidth;
	var scr_height=document.body.clientHeight;
   	document.getElementById("RightDiv").style.width=(scr_width-30)+"px";
	document.getElementById("LeftDiv").style.height=(scr_height-65)+"px";
	document.getElementById("Contenr1").style.height=(scr_height-65)+"px";
	document.getElementById("RightDiv").style.height=(scr_height-65)+"px";
    document.getElementById("faq").style.height=scr_height-180+"px";
	var rightheight=document.getElementById("text").offsetHeight;
	document.getElementById("scrlltext").style.height=rightheight+"px";
})