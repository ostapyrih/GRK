function setup() 
{
  createCanvas(800, 600);
  noLoop();
}

function draw() 
{  
  background(200);

  for(y=400; y<height; y++)
  {
    for(x=0; x<width; x++)
    {
        set(x, y, color(0, 255, 0));
    }
  }

  for (i=0; i<1000;i++) 
  {
    let r = floor(random(0,255));
    let g = floor(random(0,255));
    let b = floor(random(0,255));

    let x = floor(random(0, 800));
    let y = floor(random(600, 400))
    set(x, y, color(r, g, b));
  }
  

  for(y=200; y<height-200; y++)
  {
    for(x=200; x<width-200; x++)
    {
      set(x, y, color(210, 105, 30));
    }
  }

  for(y=200,w=0; y>50; y--,w+=2)
  {
    for(x=100+w; x<width-100-w; x++) {
      set(x, y, color(210, 100, 100))
    }
  }

  updatePixels();
}