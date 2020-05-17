/**
 * Created by aijing on 2017/4/6.
 */

function abc(a) {
    var partentNode = document.getElementById(a);
    partentNode.addEventListener("touchstart", touchStartL, false);
    partentNode.addEventListener("touchmove", touchMoveL, false);
    partentNode.addEventListener("touchend", touchEndL, false);
    /* 滑动*/
    var startX, endX;
    objs = partentNode.childNodes;
    for (k in objs)
        objs[k].className = "shuffling";
    var imgArr = document.getElementsByClassName("shuffling");
    for (var i = 0; i < imgArr.length; i++) {
        imgArr[i].style.position = "absolute";
        imgArr[i].style.width ="100%";//第一个子节点宽度
    }
    for (var i = 1; i < imgArr.length; i++) {
        imgArr[i].style.left = "100%";

    }
    var childHeight = imgArr[1].clientHeight;//第一个子节点高度
    partentNode.style.position = "relative";
    partentNode.style.height = childHeight + "px";

//圆点
    var pointUl = document.getElementById("ula");
    var pointNum;
    if(pointUl){
    var pointLi = pointUl.getElementsByTagName("li");
    for (var i = 0; i < imgArr.length; i++) {//创建圆点
        var oLi = document.createElement('li');
        pointUl.appendChild(oLi);
    }
    pointLi[0].style.background = "#3492E1";//圆点选中色
    }
    else{pointNum=0;}
    //touch事件
    var imgNum = 0;
    function touchStartL(event) {
        var touch = event.touches[0];
        startY = touch.pageY;
        startX = touch.pageX;
        endX = 0;
    }

    function touchMoveL(event) {
        var touch = event.touches[0];
        endX = touch.pageX;
        clearInterval(timer1);
    }

    function touchEndL(event) {
        var xNum = startX - endX;
        if (xNum < 0 && (startX * endX) != 0) {//右面

            imgNum--;
            if (imgNum >= 0) {
                mathFormula(xNum);
            }
            else {
                imgNum = imgArr.length - 1;
                mathFormula(xNum);
            }
        }
        else if (xNum > 0 && (startX * endX) != 0) {//左面
            imgNum++;
            if (imgNum < imgArr.length) {
                mathFormula(xNum);
            }
            else {
                imgNum = 0;
                mathFormula(xNum);
            }
        }
        else {
            console.log("点击")
        }
        start();
    }

    function mathFormula(n) {
        if (Math.abs(n) > 20) {
            imgArr[imgNum].style.left = "0";
            if(pointNum!=0){
            pointLi[imgNum].style.background = "#3492E1";}
            for (var i = 0; i < imgNum; i++) {//前面
                imgArr[i].style.left = "100%";
                if(pointNum!=0){
                    pointLi[i].style.background = "#ffffff";//圆点未选中色
                }
            }
            for (var i = imgNum + 1; i < imgArr.length; i++) {//后面
                imgArr[i].style.left = "100%";
                if(pointNum!=0){
                pointLi[i].style.background = "#ffffff";}
            }
        }
    }

};

    //自动轮播
    var timer1 = null;
    var imgArr1 = document.getElementsByClassName("shuffling");
    var pointUl = document.getElementById("ula");
    var pointLi = pointUl.getElementsByTagName("li");
    var iNow = 1;//个数
    var imgLab;//位置
    var imgNow=0;//位置
    function start() {

        clearInterval(timer1);
        timer1 = setInterval(function () {

            for (var k = 0; k < imgArr1.length; k++) {
                if (imgArr1[k].offsetLeft == "0") {
                    imgLab = k;
                    imgNow++;
                    break;

                }
            }
            if(imgNow>0){
                if (iNow > imgArr1.length-1) {//判断个数//123
                    bannerImg(imgLab);
                    iNow = 0;
                }
                else {
                    bannerImg(iNow);
                    iNow++;
                }
            }
            else{
                imgNow=0;
                bannerImg(0);
            }
        }, 5000)

    }
    function bannerImg(imgLab){
        imgArr1[imgLab].style.left = 0;
        pointLi[imgLab].style.background = "#3492E1";//圆点选中色
        for (var n = 0; n < imgLab; n++) {
            imgArr1[n].style.left = "100%";
            pointLi[n].style.background = "#ffffff";//圆点未选中色
        }
        for (var m = imgLab + 1; m < imgArr1.length; m++) {
            imgArr1[m].style.left = "100%";
            pointLi[m].style.background = "#ffffff";//圆点未选中色
        }
    }

//左侧菜单
function Menu(b, c,d) {
    var menuButton = document.getElementById(b);//
    var rightDiv = document.getElementById(c);//
    var clickdiv = document.getElementById(d);//
    menuButton.addEventListener("touchstart", clickToch, false);
    clickdiv.addEventListener("touchstart", startTouchM, false);
    clickdiv.addEventListener("touchmove", moveTouchM, false);
    clickdiv.addEventListener("touchend", endTouchM, false);
    //点击事件
    var lefrWidth=document.getElementById("leftNave").clientWidth;
    function clickToch() {
        creatDiv(lefrWidth);
        startMover(lefrWidth);
    }
    var timer = null;
    function startMover(itarget) {
//目标值
        clearInterval(timer);
//执行当前动画同时清除之前的动画
//            var rightDiv = document.getElementById('right');//
        timer = setInterval(function () {
            var speed = 0;
            if (rightDiv.offsetLeft > itarget) {//右>左 收起
                speed = -10;
            } else {
                speed =  10;
            }
            if (rightDiv.offsetLeft == itarget) {
                clearInterval(timer);
            } else {
                rightDiv.style.left = rightDiv.offsetLeft + speed + 'px';
            }
        }, 5);
    }

    //    遮罩层
    function creatDiv(m) {
//            var rightDiv = document.getElementById('right');//
        var hidDiv = document.createElement('div');
        var odiv1;
        if (m == lefrWidth) {
            if (rightDiv.offsetLeft <= 0) {
                rightDiv.appendChild(hidDiv);
                hidDiv.className = "hidden";
                odiv1 = document.getElementsByClassName('hidden');
                if (odiv1.length >= 2) {
                    setTimeout(aa,100)
                }
                odiv1[0].addEventListener("touchstart", function () {

                    startMover(0);
                    setTimeout(aa,100)
                }, false);
                function aa() {
                    for (var i = 0; i < odiv1.length; i++) {
                        odiv1[i].remove();
                    }
                }

            }
            else {
                console.log("left show")
            }

        }
        else if (m == 0) {
            if (rightDiv.offsetLeft != 0) {
                odiv1 = document.getElementsByClassName('hidden');
                odiv1.remove();
            }
            else {
                console.log("left hidden")
            }

        }

    }


    //    左右滑动
    var startX, endX;

    function startTouchM(event) {
        var touch = event.touches[0];
        startY = touch.pageY;
        startX = touch.pageX;
        endX = 0;
    }

    function moveTouchM(event) {
        var touch = event.touches[0];
        endX = touch.pageX;

    }

    function endTouchM(event) {
        var xNum = startX - endX;
        if (xNum < 0 && (startX * endX) != 0) {
            MathMove(lefrWidth);

        }
        else if (xNum > 0 && (startX * endX) != 0) {
            MathMove(0);
        }
        else {
            console.log("点击")
        }

    }

    function MathMove(n) {
        var xNum = startX - endX;
        if (Math.abs(xNum) > 20) {
            startMover(n);
            creatDiv(n);
        }
    }
}
