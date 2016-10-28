/**
 * Created by fang on 16/10/28.
 */
var aneObj = function(){
    this.rootx = [];
    this.headx = [];
    this.heady = [];

    this.amp = [];    //zhenfu
    this.alpha = 0;  //sin

}
aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
    for(var i = 0; i < 50; i++){
        this.rootx[i] = i*19 + Math.random()*20 ;
        this.heady[i] = canHeight - 230 + Math.random()*60;
        this.headx[i] = this.rootx[i];
        this.amp[i] = Math.random()*50 + 50;
    }
}
aneObj.prototype.draw = function(){

    this.alpha +=deltaTime*0.0008;
    var l = Math.sin(this.alpha);

    ctx1.save();
    ctx1.globalAlpha=0.6;
    ctx1.lineWidth=20;
    ctx1.lineCap="round";
    ctx1.strokeStyle="#3de";

    for(var i = 0; i<this.num; i++){

        ctx1.beginPath();
        ctx1.moveTo(this.rootx[i],canHeight);
        this.headx[i] = this.rootx[i] + l * this.amp[i];
        ctx1.quadraticCurveTo(this.rootx[i],canHeight - 100,this.headx[i],this.heady[i]);


        // ctx1.lineTo(this.rootx[i],this.heady[i]);
        ctx1.stroke();
    }
    ctx1.restore();

}