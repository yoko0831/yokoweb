/**
 * Created by aijing on 2016/8/17.
 */
$(window).load(function () {
    var hbody=$("body").height();
    $(".wrap").css({height:hbody+"px"});
    var theight=$(".top").height();
    var wheight=$(".wrap").height();
   $(".bottom").css({height:(wheight-theight)+"px"})
    var bheight=$(".bottom").height();
    var fheight=$(".bfooter").height();
    $(".bottom_tab").css({height:(bheight-fheight)+"px"})
    $(".tab tbody tr:even").css({background:"#F2F2F2"})

    $(".scrll").css({height:($(".bottom_tab").height()- $(".sele").height()-40)+"px"})
})

function zOpenInner(){
	var diag = new Dialog("Diag3");
	diag.Width = 300;
	diag.Height = 100;
	diag.Title = "弹出窗口示例";
	diag.innerHTML='<div style="text-align:center">直接输出html，使用dialog.<b>innerHTML</b>。</div>'
	diag.OKEvent = function(){diag.close();};//点击确定后调用的方法
	diag.show();
}

function removeElement(id)
{
document.getElementById(id).style.display="none";
}