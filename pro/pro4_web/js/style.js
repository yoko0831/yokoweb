/**
 * Created by aijing on 2018/1/9.
 */

function stopBubble(event){
    var e=arguments.callee.caller.arguments[0]||event;
    if(e&&e.stopPropagation){
        e.stopPropagation()
    }else if(window.event){
        window.event.cancelBubble=true;
    }
}
$(function () {
    //样式
    $(".column1-2 li:nth-child(2n+1)").css({marginRight:"20px"})
    //下拉选项
    $(document).click(function () {
        $(".down-menu-hide").hide();

    })

    $(".click-select").on("click",function () {
        var  dn=$(this).parent().next().css("display")
        if(dn=="none"){　　//如果node是隐藏的则显示node元素，否则隐藏

            $(this).parent().next().show();
        }else{
            $(this).parent().next().hide();

        }
        stopBubble()
    })
    $(".down-menu-hide").delegate("dd","click",function () {
        var prvDiv= $(this).parent().prev();
        var liValue=$(this).text();
        prvDiv.children(".select-input").val(liValue);
        $(this).parent().hide();
        var selectshow=$(this).find("input[type='hidden']").val();
        $(this).closest(".select-dl").next().next().val(selectshow)

    })
    //获得焦点失去焦点
    $(".select-input").focus(function () {

        $(this).parent().next().hide();
        $(this).closest(".select-dl").css({border:"1px solid #7BC3BD"});
    })
    $(".select-input").blur(function() {
        $(this).closest(".select-dl").css({border:"1px solid #b5b5b5"})
    });
    //眼科色觉选择按钮
    $(".select-button p").click(function () {
        var rgb = $(this).css('color');
        //alert(rgb)
        if(rgb=="rgb(153, 153, 153)"){
            $(this).css({background:"#f4cbbe",border:"solid 1px #eb6035",color:"#E96B43"});
        }
        else{
            $(this).css({background:"#fff",border:"solid 1px #999999",color:"rgb(153, 153, 153)"});
        }

    })
    //医师意见
    $(".addtab").on("click",function () {
            $(this).next().css({display:"inline-block"})
            $(this).next().next().next().show()
        $(this).hide()

    })
    $(".closetab").on("click",function () {
            $(this).prev().show()
            $(this).next().next().hide();
        $(this).hide()
    })

    //添加医师意见
    $(".ysyjadd").delegate("b","click",function () {
        addtab($(this))
        $(".ysyj table tr td b").off("click").on("click", function () {
            delerab($(this))
        })
    })
    //删除医师意见
    $(".ysyj").on("click",function () {
        delerab($(this))


    })


})

function addtab(e){
    var spanText=e.prev().text();
    e.closest(".ysyjadd").prev(".ysyj").find("table").append(" <tr><td><span>"+spanText+"</span><b>-</b></td></tr>")

}
function delerab(n){
    n.closest("tr").remove()
}