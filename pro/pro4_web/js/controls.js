/**
 * Created by aijing on 2018/2/1.
 */
//下拉列表可输入1
function selectList1(a, name, itemid) {
    $(a).append("<li id='" + itemid + "'><span class='fontorange span-text '>" + name + "</span> <input type='hidden' value='" + itemid + "' class='xm'><div class='select-dl'> " +
        "<div>" +
        "<input type='text' value='无' class='select-input'> " +
        "<i class='click-select'> " +
        "<img src='images/icon_sanjiao.png'></i> </div> <dl class='down-menu-hide'> </dl></div>")
}
//下拉列表5
function selectList5(e, name, itemid) {
    $(e).append("<li id='" + itemid + "'><span class='fontorange span-text '>" + name + "</span>  <input type='hidden' value='" + itemid + "' class='xm'><div class='select-dl'> " +
        "<div>" +
        "<input type='text' value='无' class='select-input'  disabled> " +
        "<i class='click-select'> " +
        "<img src='images/icon_sanjiao.png'></i> </div> <dl class='down-menu-hide'> </dl></div>")

}
//视力2
function sl(b, itemid) {
    $(b).append(" <li id='" + itemid + "'><p class='separate'><span class='fontorange span-text'>裸眼视力</span> " +
        "<b class='unit'>左</b><input type='text' class='small-input' > " +
        "<b class='unit'>右</b><input type='text' class='small-input'></p> " +
        "<p class='separate'><span class='fontorange span-text'>矫正视力</span> " +
        "<b class='unit'>左</b><input type='text' class='small-input' > " +
        "<b class='unit'>右</b><input type='text' class='small-input'></p>" +
        "<p class='separate'><span class='fontorange span-text'>矫正视力</span> " +
        "<b class='unit'>左</b><input type='text' class='small-input' > " +
        "<b class='unit'>右</b><input type='text' class='small-input'></p>")
}
//色觉检查图 色觉 单色识别能力检查3
function sjsb(c, itemid) {
    $(c).append(" <li id='" + itemid + "'>" +
        "<span class='fontorange span-text '>色觉检查图名称</span>   <input type='hidden'' value=''' class='xm'> <div class='select-dl'>" +
        "<div> <input type='text' value='无' class='select-input'> <i class='click-select' > <img src='images/icon_sanjiao.png'></i></div>" +
        "<dl class='down-menu-hide'  ></dl></div>" +
        "</li><li>" +
        "<span class='fontorange span-text '>色觉</span>检查<abbr>（彩色图案及彩色数码检查）</abbr> " +
        "<input type='hidden' value='" + itemid + "' class='xm' ><div class='select-dl'> <div> " +
        "<input type='text' value='无' class='select-input' disabled> " +
        "<i class='click-select'>  <img src='images/icon_sanjiao.png'></i></div> <dl class=down-menu-hide></dl> </div> </li><li>" +
        "<span class='fontorange span-text'>单色识别能力检查</span><abbr>（色觉异常者查此项只勾选能识别的）</abbr>" +
        "<div class='select-button'> <p>红</p> <p>黄</p> <p>绿</p> <p>蓝</p> <p>紫</p></div></li>")
}
//血压4
function xueya(d, itemid) {
    $(d).append("<li id='" + itemid + "'><p class='separate'><span class='fontorange span-text'>血压</span><input type='text'' class='small-input'> " +
        "<bclass='unit'>/</b><input type='text'class='small-input'> <b class='unit'>mmHg</b> </p></li>")
}
//身高、体重 6
function shengao(f, name, itemid) {

    if (itemid == "sg") {
        $(f).append("<li id='" + itemid + "'><span class=\'fontorange span-text\'>" + name + "</span><input type=\'text\' class=\'small-input\'> <bclass=\'unit\'>厘米</b></li>");
    }
    else if (itemid == "tz") {
        $(f).append("<li id='" + itemid + "'><span class=\'fontorange span-text\'>" + name + "</span><input type=\'text\' class=\'small-input\'> <bclass=\'unit\'>千克</b></li>");
    }

}
//听力 7
function tl(g, itemid) {
    $(g).append("<li id='" + itemid + "'><span class='fontorange span-text'>听力</span> <p class='separate'><b class='unit'>左耳</b><input type='text' class='small-input'> <b class='unit'>米</b> " +
        "<b class='unit'>右耳</b><input type='text' class='small-input'> <b class='unit'>米</b></p>")
}
//医师意见
function ysyj(y) {
    $(y).append(" <li>" +
        "<div class='ysyj-div'>" +
        "<span class='fontorange span-text'>医师意见</span><p class='addtab'><b>＋</b> <span>添加</span></p><p class='closetab'><b>×</b> <span>关闭</span></p>" +
        "<div class='ysyj'><table></table> </div>" +
        "<div class='ysyjadd'><div></div><table></table></div></div> </li>")
}
