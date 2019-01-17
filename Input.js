var register = {};

function updateRegister() {
  for (let k in register) {
    if (register[k] == 2) {register[k] = 1;}
  }
}

function mousePressed() {
  if (register["mouse" + mouseButton] == 0) {
    register["mouse" + mouseButton] = 2;
  }
}

function mouseReleased() {
  register["mouse" + mouseButton] = 0;
}
