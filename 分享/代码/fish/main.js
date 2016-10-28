/**
 * Created by fang on 16/10/28.
 */
var can1;  //背景 海葵

var ctx1;

var canWidth;
var canHeight;

var bgPic = new Image();
var ane;

var lastTime ;
var deltaTime;


document.body.onload = game;
function game(){
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init() {
    can1 = document.getElementById("canvas1");
    ctx1 = can1.getContext("2d");

    canHeight = can1.height;
    canWidth = can1.width;

    bgPic.src = "background.jpg";

    ane = new aneObj();
    ane.init();
}
function gameloop(){
    window.requestAnimationFrame(gameloop);
    // console.log("hihao");

    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    // console.log(deltaTime);

    drawBackground();
    ane.draw();

    // ctx2.clearRect(0,0,canWidth,canHeight);
}










