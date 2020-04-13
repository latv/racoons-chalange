function draw() {

  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    for(var x=0.5;x<500;x+=10) {
      ctx.moveTo(x,0);
      ctx.lineTo(x,500);
    }

    for(var y=0.5; y<500; y+=10) {
      ctx.moveTo(0,y);
      ctx.lineTo(500,y);

  }

  ctx.strokeStyle='grey';
  initialState(ctx);
  ctx.stroke();

}
}

function showCoords(event) {


    var x = parseInt(event.clientX/10);
    var y =parseInt(event.clientY/10);
    var ctx = initialctx();
    if (x===25 && y===25){
      isGameStarted(ctx,x,y);

    }
    console.log('x: ',x,"y: ",y);

    ctx.rect((x-1)*10, (y-1)*10, 10, 10);

    ctx.fill();


}
function isGameStarted(ctx,x,y){
  var items= [[25,25]];
  var randX=randomX(x);
  var randY=randomY(y);


  for (let index = 0; index < 5; index++) {
    ctx.rect(randomY(y)*10 ,randomX(x)*10,10,10 );
    ctx.fill();
    console.log(index);
    if(index == 4){
      ctx.fillStyle = "#FF0000";
      ctx.fill(randomY(y)*10 ,randomX(x)*10,10,10 );
      // ctx.fill();
      ctx.fillStyle = "black";
    }
  }



}

function initialState(ctx){
  ctx.rect(240, 240, 10, 10);
  ctx.fill();
}

function randomY(y){
  if (y-5<0){
    y=0;
  }else{
    y=y-5;
  }
  return y + Math.floor(Math.random() * 10)
}
function randomX(x){
  if (x-5<0){
    x=0;
  }else{
    x=x-5;
  }
  return x + Math.floor(Math.random() * 10)
}

function initialctx(){
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    return canvas.getContext('2d');
  }

}