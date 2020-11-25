var imgA;
var imgB; 
function setup() {
    createCanvas(512,512);
    background(255);  
    imgA = createImage(512,512);
    imgB = createImage(512,512);
    imgA.loadPixels();
    imgB.loadPixels();
    var d = pixelDensity();
    for(var i=0; i<512*512*4*d; i+=4) {
      imgA.pixels[i]=240;
      imgA.pixels[i+1]=250;
      imgA.pixels[i+2]=240;
      imgA.pixels[i+3]=255;
      imgB.pixels[i]=240;
      imgB.pixels[i+1]=240;
      imgB.pixels[i+2]=250;
      imgB.pixels[i+3]=255;
    }
    imgA.updatePixels();
    imgB.updatePixels();
}

function makeIdentity() {
  return [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]
}

function makeTranslation(x, y) {
  return [
      [1, 0, x],
      [0, 1, y],
      [0, 0, 1]
    ]
}

function makeScale(x, y) {
  return [
      [x, 0, 0],
      [0, y, 0],
      [0, 0, 1]
    ]
}

function makeRotation(x) {
  return [
      [Math.cos(x/180*Math.PI), -Math.sin(x/180*Math.PI), 0],
      [Math.sin(x/180*Math.PI), Math.cos(x/180*Math.PI), 0],
      [0, 0, 1]
    ]
}

function drawVector(img, pos) {
  img.set(pos[0], pos[1], 0);
  img.updatePixels();
}

function makeVector(x, y) {
  return [x, y, 1];
}

function multiplyMatrix(vector, matrix) {
  console.log(matrix);
  let result = [0, 0, 0];
  for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
      result[i] += vector[i] * matrix[i][j];
    }
  }
  return result;
}

function draw() {
    if (!keyIsDown(32)) {
      image(imgA,0,0);
      text('Image A',10,20);
    } else {
      image(imgB,0,0);
      text('Image B',10,20);
  }
} 

function mouseDragged() {
  let pos = makeVector(mouseX, mouseY);
  let transformed = multiplyMatrix(pos, makeRotation(60));
  console.log(transformed)
  drawVector(imgA, pos);
  drawVector(imgB, transformed);
}