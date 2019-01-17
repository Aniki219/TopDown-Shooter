class Player {
  constructor(x,y) {
    this.x = x;
    this.y = y;

    this.angle = 0;
  }

  draw() {
    push();
      translate(this.x, this.y);
      rotate(this.angle);
      image(playerImg, 0, 0, 32, 32);
    pop();
  }

  move() {

  }

  aim() {
    this.angle = atan2(mouseY - this.y, mouseX - this.x);
console.log(register["mouseleft"])
    if (register["mouseleft"] == 2) {
      bullets.push(new Bullet(this.x, this.y, this.angle));
    }
  }

  update() {
    this.move();
    this.aim();
    this.draw();
  }
}
