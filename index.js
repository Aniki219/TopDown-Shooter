var player;
var bullets = [];

function setup() {
  createCanvas(300,300);
  player = new Player(width/2, height/2);
  noCursor();
  imageMode(CENTER);
}

function draw() {
  background(40, 40, 55);

  bullets.filter(b => { return dist(b.x, b.y, width/2, height/2) < width } )
  bullets.forEach(b => b.update());
  player.update();

  drawCursor();
  updateRegister();
}

function drawCursor() {
  let s = sin(frameCount/12);
  push()
    translate(mouseX, mouseY);
    rotate(frameCount/30);
    image(aimerImg, 0, 0, 16 + 2*s, 16 + 2*s);
  pop();
}
