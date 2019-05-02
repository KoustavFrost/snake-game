let s;
let scl = 30;
let food;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(8);

    pickLocation();
}

function pickLocation() {
    let col = floor(width / scl);
    let row = floor(height / scl);

    food = createVector(floor(random(col)), floor(random(row)));
    food.mult(scl);

}

function draw() {
    background(50);
    s.update();
    s.show();

    if (s.eat(food)) {
        pickLocation();
    }

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);

    if (s.death()) {
        background(58, 168, 38);
        noLoop();
        console.log('endgame');
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}