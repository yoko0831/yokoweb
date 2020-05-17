//显示提示框
function alertbox(btnid,boxid){
	var oClickBtn=document.getElementById(btnid);
	var oTipBox=document.getElementById(boxid);
	oClickBtn.onclick=function(){
		oTipBox.style.display='block';
		document.body.style.overflow='hidden';
	};
	oTipBox.onclick=function(){
		oTipBox.style.display='none';
		document.body.style.overflow='auto';
	}
}

