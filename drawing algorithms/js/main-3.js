function setup() {
  createCanvas(512,512);
  background(255);
  pixelDensity(1);
  var x0=-1;
  var y0=-1;
  var x1=-1;
  var y1=-1;
}


function mousePressed() {
  x0=mouseX;
  y0=mouseY;
}

function mouseDragged() {  
  x1=mouseX;
  y1=mouseY;  
  background(255);
  noStroke();
  fill('red');
  ellipse(x0-3,y0-3,6);
  fill('green');  
  ellipse(x1-3,y1-3,6);
}

function mouseReleased() {
  background(255);
  loadPixels();
  draw_line();
  updatePixels();
}

function set_pixel(x,y,c) {
  idx=(y*512+x)*4;
  pixels[idx]=c;
  pixels[idx+1]=c;
  pixels[idx+2]=c;
  pixels[idx+3]=255;
}

// function draw_line() {
//   dx = x1 - x0;
//   dy = y1 - y0;
//   Deq = 2*dy;
//   Dp = Deq - dx;
//   Dinc = Deq - 2*dx;
//   D=Dp;
//   y=y0;
//   for (x=x0; x<=x1; x++) {
//     set_pixel(x, y, 0);
//     if (D < 0) {
//       D += Deq;
//     } else {
//       D += Dinc;
//       y+=1;
//     }
//   }
// } 

function draw_line() {
  dx = Math.abs(x1 - x0);
  dy = Math.abs(y1 - y0);

  if (dx < dy) {
    temp = x0;
    x0 = y0;
    y0 = temp;

    temp = dx;
    dx = dy;
    dy = temp;

    temp = x1;
    x1 = y1;
    y1 = temp;
  }

  Deq = 2*dy;
  Dp = Deq - dx;
  Dinc = Deq - 2*dx;
  D=Dp;
  y=y0;
    for (x=x0; x!=x1; x0 < x1 ? x++ : x--) {
      if (dx > dy) {
        set_pixel(y, x, 0);
      } else {
        set_pixel(x, y, 0);
      }
      if (D < 0) {
        D += Deq;
      } else {
        D += Dinc;
        if(y0 < y1)
          y+=1;
        else
          y-=1;
      }
  }
} 