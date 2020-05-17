 function toDou(n){
 	return n<10?'0'+n:''+n;
}

window.onload=function(){

	// 轮播图
	var oDiv=document.getElementById('carousel');
	var aBtn=oDiv.getElementsByTagName('li');
	var aDiv=oDiv.getElementsByTagName('div');

	for (var i=0; i<aBtn.length;i++) {
		aBtn[i].index=i
		aBtn[i].onmousemove=function(){
			for (var i=0; i<aBtn.length;i++) {
				aBtn[i].className=''
				aDiv[i].className=''
			};
			this.className='active';
			aDiv[this.index].className='cur'
		};
	};

	// 倒计时
	var oS1=document.getElementById('s1');
    var oS2=document.getElementById('s2');
    var oS3=document.getElementById('s3');

    var oDate=new Date();
    oDate.setFullYear(2019,10,01);
    oDate.setHours(0,0,0,0);

    function tick(){
        var oNow=new Date();
        var s=parseInt((oDate.getTime()-oNow.getTime())/1000);
        var h=parseInt(s/3600);
        s%=3600;
        var m=parseInt(s/60);
        s%=60;
        oS1.innerHTML=toDou(h)
        oS2.innerHTML=toDou(m)
        oS3.innerHTML=toDou(s)
    }
    var timer=setInterval(tick, 1000);
    tick();
};