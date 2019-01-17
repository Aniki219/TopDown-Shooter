class Bullet {
  constructor(x,y,angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;

    this.speed = 5;
  }

  move() {
    this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
  }

  draw() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 5, 5);
  }

  update() {
    this.move();
    this.draw();
  }
}
