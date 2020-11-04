function setup() 
{
  createCanvas(800, 600);
  noLoop();
}

function draw() 
{  
  background(100);


  let mx = width/2;
  let my = height/2;

  let dx = 0;
  let dy = 0;

  let r = 255;
  let g = 0;
  let b = 0;
  let prev = 0;
  let d = 0;

  for(y=0; y<height; y++)
  {
    for(x=0; x<width; x++)
    {
      dx = x - mx;
      dy = y - my;

      prev = d;
      d = sqrt(dx*dx + dy*dy);

      r -= (d - prev);
      g += (d - prev);
      b = (x + y) / (height + width) * 255;

      set(x, y, color(r, g, b));
    }
  }
  updatePixels();
}