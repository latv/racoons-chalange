function draw() {

  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var context = canvas.getContext('2d');

    for(var x=0.5;x<500;x+=10) {
      context.moveTo(x,0);
      context.lineTo(x,500);
    }

    for(var y=0.5; y<500; y+=10) {
      context.moveTo(0,y);
      context.lineTo(500,y);

  }

  context.strokeStyle='grey';
  context.stroke();

}
}

function showCoords(event) {
  var x = parseInt(event.clientX/10);
  var y =parseInt(event.clientY/10);
console.log('x: ',x,"y: ",y);
var canvas = document.getElementById('canvas');
if (canvas.getContext) {
  var context = canvas.getContext('2d');
}

context.rect(x*10, y*10, 10, 10);
context.stroke();
var coords = "X coordinates: " + x + ", Y coordinates: " + y;
document.getElementById('showCoords').innerHTML = coords;

}