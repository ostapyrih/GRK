function setup() {
  createCanvas(512,512);
  background(255);
}

var last_x=-1;
var last_y=-1;

function mouseDragged() {  
  if(mouseButton != LEFT) return;
  if(last_x>0) {
    line(last_x,last_y,mouseX,mouseY);
  }
  last_x=mouseX;
  last_y=mouseY;
}
function mouseReleased() {
  last_x=last_y=-1;
  if(mouseButton == RIGHT) {
    loadPixels();
    flood_fill(mouseX,mouseY);
    updatePixels();
  }
}

function set_pixel(x,y,c) {
  idx=(y*512+x)*4;
  pixels[idx]=c;
  pixels[idx+1]=c;
  pixels[idx+2]=c;
  pixels[idx+3]=255;
}
 
function get_pixel(x,y) {
  idx=(y*512+x)*4;
  return pixels[idx];
}


function flood_fill(x,y) {
  var stack = [];
  cnx = 100000;
  stack.push([Math.round(x), Math.round(y)]);
  while(stack.length > 0 && cnx > 0) {
    // cnx -= 1;
    pos = stack.pop();
    if ((pos[0] >= 512) || (pos[1] >= 512) || (pos[0] < 0) || (pos[1] < 0)) {
      continue;
    }
    color = get_pixel(pos[0], pos[1]);
    if (color < 255){
      continue;
    }
    set_pixel(pos[0], pos[1], 200);
    stack.push([pos[0], (pos[1] - 1)]);
    stack.push([pos[0], (pos[1] + 1)]);
    stack.push([(pos[0] - 1), pos[1]]);
    stack.push([(pos[0] + 1), pos[1]]);
  }
}