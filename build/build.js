var m;
var v;
function setup() {
    createCanvas(windowWidth, windowHeight);
    m = createVector(windowWidth / 2, windowHeight / 2);
    v = createVector(5, 5);
}
function draw() {
    background(200);
    fill(0);
    ellipse(m.x, m.y, 20);
    move();
}
function move() {
    if (m.x > width || m.x < 0) {
        v.mult([-1, 1]);
    }
    if (m.y > height || m.y < 0) {
        v.mult([1, -1]);
    }
    m.add(v);
}
//# sourceMappingURL=build.js.map