function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(0);
}
var x = 700;
var y = 300;
var xr1 = 200;
var yr1 = 300;
var xr2 = 1200;
var yr2 = 300;
var vx = 5;
var vy = 5;
var radius = 40;
var punkte1 = 0;
var punkte2 = 0;

function draw() {
  background("lightgrey");
  x=x+vx;
  y=y+vy;
  if (x>=width-radius) {
    vx=-vx;
  }
  if (x<=radius) {
    vx=-vx;
  }
  if (y>=height) {
    vy=-vy;
  }
  if (y<=0) {
    vy=-vy;
  }
  if ((x - radius == xr1) && (y >= yr1 && y <= yr1 + 250)) {
    vx = -vx;

  }
  if ((x + radius == xr2) && (y >= yr2 && y <= yr2 + 250)) {
    vx = -vx;

  }
  if (x - radius == 0) {
    punkte2 = punkte2+1;
    x = 700;
    y = 300;
    vx = -vx;
    vy = -vy;
  }
  if (x + radius == window.innerWidth) {
    punkte1 = punkte1+1;
    x = 700;
    y = 300;
    vx = -vx;
    vy = -vy;
  }
  textSize(36);
  text(punkte1, 630, 50);
  text(punkte2, 750, 50);
line(700, 0, 700, window.innerHeight);
ellipse(x, y, 80, 80);
rect(xr1, yr1, 30, 200);
rect(xr2, yr2, 30, 200);
}
function keyPressed() {
  if (keyCode==40){
  yr2=yr2+30;
}
  if (keyCode==38){
  yr2=yr2-30;
}
if (keyCode==83){
  yr1=yr1+30;
}
if (keyCode==87){
  yr1=yr1-30;
}
if (keyCode==32){
  punkte1=0;
  punkte2=0;
}
}
