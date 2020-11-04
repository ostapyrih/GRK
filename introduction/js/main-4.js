function setup() 
{
  createCanvas(800, 600);
  noLoop();
}

function draw() 
{  
  class point
  {
    constructor(x, y)
    {
      this.x = x;
      this.y = y;
    }
  }

  points = [new point(0, 600), new point(800, 600), new point(400, 0)];

  background(100);

  points.forEach(point => {
    set(point.x, point.y, color(255));
  });

  let c = new point(points[0].x, points[0].y);

  for(i = 0; i < 30000; i++) 
  {
    let num = floor(random(0, 3));
    if (num === 0) {
      c.x = (c.x + points[0].x)/2;
      c.y = (c.y + points[0].y)/2;
      set(c.x, c.y, color(255));
    } else if (num === 1) {
      c.x = (c.x + points[1].x)/2;
      c.y = (c.y + points[1].y)/2;
      set(c.x, c.y, color(255));
    } else {
      c.x = (c.x + points[2].x)/2;
      c.y = (c.y + points[2].y)/2;
      set(c.x, c.y, color(255));
    }
  }
  
  updatePixels();
}