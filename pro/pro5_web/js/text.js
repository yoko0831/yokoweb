/**
 * Created by aijing on 2016/8/16.
 */
$(document).ready(function () {
    var hbody=$("body").height()-.00003;
    $(".wrap").css({height:hbody+"px"});
    $(".content").css({height:(hbody-45)+"px"});
    var cheight=$(".content").height();
    var cwidth=$(".content").width();
    //alert(cwidth)
    $(".left_nav").css({height:(cheight-20)+"px"})
    var lwidth=$(".left_nav").width()
    $(".text").css({height:(cheight-20)+"px"})
    $(".text").css({width:(cwidth-lwidth-30)+"px"})
    var htext=$(".text").height();
    var tTop=$(".textTop").height()+5;
    var wbutton=$(".tbutton").height();
    $(".scrlltext").css({height:(htext-tTop-wbutton-10)+"px"});
    var wcont=$(".cont").width()
    $(".ti").css({width:(wcont-30-4-5)+"px"})
    $(".navwrap").css({height:($(".left_nav").height()-$(".leftitle").height()-$(".leftreq").height()-35)+"px"});


//    Ã‚∫≈—°‘Ò
    for(var i=1;i<30;i++){
        $(".topicbutton").append("<li>"+i+"</li>")
    }

})
