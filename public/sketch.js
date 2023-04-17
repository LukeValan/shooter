let factor;

let player;

function setup() {
  createCanvas(800, 600);
  windowResize()

  player = new Player(n(700), n(300), n(30))
}

function draw() {
  background(220);
  player.show()
  player.move()
  player.aim()
  for(let i = 0; i < shots.length; i++) {
    shots[i].show()
  }
}

function windowResize() {
  let x, y
  if (windowHeight > windowWidth) {
    x = windowWidth
    y = 500 * (windowWidth / 800)
    factor = windowWidth / 800
  } else {
    x = 800 * (windowHeight / 600)
    y = windowHeight
    factor = windowHeight / 600
  }
  resizeCanvas(x, y)
}

function n(value) {
  return value * factor
}
