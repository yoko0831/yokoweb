/**
 * Created by aijing on 2018/1/12.
 */
//1登录
function login() {
    var userid = $("#userId").val();
    var password = $("#userPass").val()
    var passwordMD = hex_md5(password).toUpperCase();
    var params = {"userid": userid, "password": passwordMD};

    if (userid == "" || userid == null) {
        alert("用户名不能为空")
    }
    else if (password == "" || password == null) {
        alert("密码不能为空")
    }
    else {
        var logindata = interfaceUrl("login", params);
        if (logindata.flag == "1") {
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("userid", logindata.userid);
                localStorage.setItem("inserttime", logindata.inserttime);
                localStorage.setItem("token", logindata.token);
                localStorage.setItem("password", passwordMD);
                localStorage.setItem("logindata", JSON.stringify(logindata));
            }
            else {
                alert("不支持 h5")

            }
            window.location = "index.html"
        }
        else {
            alert(logindata.msg)

        }


    }


}

//用户信息查询
function index() {
    var userid, token;
    if (typeof(Storage) !== "undefined") {
        var logindata = JSON.parse(localStorage.getItem("logindata"));
        token = logindata.token;
        userid = logindata.userid;
        password = logindata.password;
    }
    else {

        alert("不支持 h5")

    }
    var params = {"userid": userid, "token": token};
    var indexdata = interfaceUrl("getinfo", params);
    if (indexdata.flag == "1") {

        $("#username").text(indexdata.data.username);
        $("#address").text(indexdata.data.tjdmc);
        $("#userid").val(indexdata.data.userid);
        $("#username").val(indexdata.data.username);
        $("#cardID").val(indexdata.data.idcard);
        $("#tel").val(indexdata.data.phone);
        $("#work").val(indexdata.data.work);
        localStorage.setItem("indexdata", JSON.stringify(indexdata));

    }
    else {
        alert(indexdata.msg)

    }
    //医师权限信息
    var params = {
        "userid": localStorage.getItem("userid"),
        "token": logindata.token
    }
    var data5 = interfaceUrl("updateqx", params);
    var arrone=[];
    var arr2=[]
     if(data5.flag=="1"){

         for(var i in data5.data){//0
             var arr1=[];
             arrone.push(data5.data[i].sectionname)
             for(var j in data5.data[i].items){//0
                 arr1.push(data5.data[i].items[j].itemname)
             }
             arr2.push([arr1])

         }
         console.log(arr2)

         for(var k=0;k<arrone.length;k++){
             $(".forim").append("<li>"+arrone[k]+" ："+arr2[k]+"</li>")
         }
     }
    else{
         alert(data5.msg)
     }
//    人数接口13
    var params = {
        "userid": localStorage.getItem("userid"),
        "token": logindata.token
    }
    var data13 = interfaceUrl("getstatic", params);

    if(data13.flag=="1"){
        $("#getstatic li").eq(0).find("span").text(data13.data.countall)
        $("#getstatic li").eq(1).find("span").text(data13.data.count)
        $("#getstatic li").eq(2).find("span").text(data13.data.countall-data13.data.count-data13.data.countprj)
    }
    else{
        alert(data13.msg)
    }

}
//修改密码
function save() {
    var logindata = JSON.parse(localStorage.getItem("logindata"));
    var userid = $("#userid").val();
    var username = $("#username").val();
    var cardID = $("#cardID").val();
    var tel = $("#tel").val();
    var work = $("#work").val();
    var oldpass = $("#oldpass").val();
    var password;
    if(oldpass==""||oldpass==null){
        password = localStorage.getItem("password")
    }
    else{
        password = hex_md5(oldpass).toUpperCase();
    }
    var params = {
        "userid": userid,
        "password": password,
        "username": username,
        "idcard": cardID,
        "phone": tel,
        "work": work,
        "token": logindata.token
    }
    var data = interfaceUrl("modifyinfo", params);
    if (data.flag == "1") {
        alert(data.msg)


    }
    else {
        alert(data.msg)
    }
}
//查询学生信息 是否体检上传
//

function studentSelect() {
    var indexdata = JSON.parse(localStorage.getItem("indexdata"));
    var logindata = JSON.parse(localStorage.getItem("logindata"));
    var params = {
        "userid": localStorage.getItem("userid"),
        "tjddm": indexdata.data.tjddm,
        "inserttime": "2017-12-07 15:11:11",//"2017-12-07 15:11:11" logindata.inserttime
        "token": logindata.token
    }
    var json = interfaceUrl("studownload", params);
    if (json.flag == "1") {
        $('#table').bootstrapTable({
            data: json.data,
            search: true,
            height: 500,
            pageSize: 10,
            pagination: true

        });


    }
    else {
        alert(json.msg)
    }

}


//查询考生按钮 8接口 （10无数据）
function ksEntry() {
    var ksh = $("#ksh").val();
    var logindata = JSON.parse(localStorage.getItem("logindata"));
    var ksparams = {
        "userid": localStorage.getItem("userid"),
        "ksh": ksh,
        "token": logindata.token
    }
    var ksInfor = interfaceUrl("stuinfo", ksparams)
    if (ksInfor.flag == "1") {
        window.location = "eg2.html";
        localStorage.setItem("ksh", ksh)
    }
    else {
        alert("考生不存在")
    }

}

//meinf.html 显示考生信息 接口8 （10无数据）


function ksShow() {
    var ksh = localStorage.getItem("ksh")
    var logindata = JSON.parse(localStorage.getItem("logindata"));
    var ksparams = {
        "userid": localStorage.getItem("userid"),
        "ksh": ksh,
        "token": logindata.token
    }
    var ksInfor = interfaceUrl("stuinfo", ksparams)
    if (ksInfor.flag == "1") {
        if (ksInfor.data.pic == "" || ksInfor.data.pic == null) {
            $(".wutx").show();
            $("#ksImg").hide()
        }
        else {
            $("#ksImg").attr("src", ksInfor.data.pic);
            $(".wutx").hide();
            $("#ksImg").show();
        }
        $("#ksname").text(ksInfor.data.name);
        $("#ksh").text(ksInfor.data.ksh);
        $("#sex").text(ksInfor.data.xb);
        $("#cityname").text(ksInfor.data.cityid);
        $("#schoolname").text(ksInfor.data.schoolname);
    }
    else {
        alert("考生不存在")
    }

}
//6.本接口提供查询登录用户体检项目中疾病配置的数据，包括体检结果可选择的内容以及对应的医师意见
function updatejbpz() {
    var logindata = JSON.parse(localStorage.getItem("logindata"));
    var params = {
        "userid": localStorage.getItem("userid"),
        "token": logindata.token
    }
    var update = interfaceUrl("updatejbpz", params)

    if (update.flag == "1") {
        return update

    }
    else {
        alert(update.msg)
    }
}


// 5接口
function updateqx() {
    var logindata = JSON.parse(localStorage.getItem("logindata"));
    var params = {
        "userid": localStorage.getItem("userid"),
        "token": logindata.token
    }
    var update = interfaceUrl("updateqx", params)
    for (var i in update.data) {
        $("#ks").append("<h1 class='fontgreen entry-text'>" + update.data[i].sectionname + "</h1><ul class='column1-2' id='" + update.data[i].sectionid + "'></ul>")

        //调取控件
        for (var j in update.data[i].items) {
            var sectionid=update.data[i].sectionid;
            var itemname=update.data[i].items[j].itemname;
            var itemid=update.data[i].items[j].itemid;
            if (update.data[i].items[j].itemtype == "1") {
                selectList1("#" +sectionid,itemname,itemid)
            }
            else if (update.data[i].items[j].itemtype == "2") {

                sl("#" +sectionid,itemid)
            }
            else if (update.data[i].items[j].itemtype == "3") {
                sjsb("#" +sectionid,itemid)
            }
            else if (update.data[i].items[j].itemtype == "4") {
                xueya("#" + sectionid,itemid)
            }
            else if (update.data[i].items[j].itemtype == "5") {
                selectList5("#" +sectionid,itemname,itemid)
            }
            else if (update.data[i].items[j].itemtype == "6") {
                shengao("#" +sectionid,itemname,itemid)
            }
            else if (update.data[i].items[j].itemtype == "7") {
                tl("#" +sectionid,itemid)
            }
        }
        ysyj("#"+update.data[i].sectionid)
    }

    if (update.flag == "1") {
        var ulLength = $("#ks ul");
        for(var j=0;j<ulLength.size();j++){
            for(var i in update.data){
                if(ulLength.eq(j).attr("id")==update.data[i].sectionid){
                    selectdiv(i)
                }
            }
        }


    }
    else {
        alert(update.msg)
    }
}

//下拉选项显示
function selectdiv(indx) {
    var yank = updatejbpz()
    var indxText = [];
    var indxjson=[]

    for (var i in yank.data[indx].items) {
        for (var j = 0; j < $(".xm").size(); j++) {
            if (yank.data[indx].items[i].itemid == $(".xm").eq(j).val()) {
                indxText.push(j);
                indxjson.push(i)
            }
        }

    }
    for (var n = 0,m=0;n < indxText.length,m<indxjson.length; n++,m++) {//7,10
        var a=indxText[n];
        var b=indxjson[m]
        for(var o in yank.data[indx].items[m].kvs){
            $(".down-menu-hide").eq(a).append("<dd>" + yank.data[indx].items[b].kvs[o].jbname + "<input type='hidden' value='"+yank.data[indx].items[b].kvs[o].ysyj+"'></dd>")
        }
    }
}
//14    //医师意见添加
function ysyjadd(){
    var logindata = JSON.parse(localStorage.getItem("logindata"));
    var params = {
        "userid": localStorage.getItem("userid"),
        "token": logindata.token
    }
    var result = interfaceUrl("updateysyj", params);
    for(var i in result.data){
        $(".ysyjadd table").append("<tr><td><span>"+result.data[i].ysyj+"</span><b>+</b></td></tr>")
    }
}
//7 视力
function slpipei(t,n){
    var logindata = JSON.parse(localStorage.getItem("logindata"));
    var params = {
        "userid": localStorage.getItem("userid"),
        "token": logindata.token
    }
    var slpipei = interfaceUrl("updateslpz", params);
    var lsl=t.val()
    for(var i in slpipei.data){
        if(lsl==slpipei.data[i].lysl){
            $("#sl p:nth-child(2) .small-input").eq(n).val(slpipei.data[i].jzsl)
            $("#sl p:nth-child(3) .small-input").eq(n).val(slpipei.data[i].jzds)
        }

    }
}
//视力匹配
$(function () {
    $("#sl p:first-child .small-input").eq(0).blur(function () {
        slpipei($(this),0)
    })
    $("#sl p:first-child .small-input").eq(1).blur(function () {
        slpipei($(this),1)
    })
})
