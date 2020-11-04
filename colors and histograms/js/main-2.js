function preload() 
{
  img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
}

function setup() 
{
  createCanvas(512, 512);
  pixelDensity(1);
  image(img, 0, 0);

  let img_h = createImage(256, 256);
  let img_s = createImage(256, 256);
  let img_v = createImage(256, 256);
  img.resize(256,256);
  
  img.loadPixels();
  img_h.loadPixels();
  img_s.loadPixels();
  img_v.loadPixels();

  for(x=0;x<img.width;x++) 
  {
    for(y=0; y<img.height; y++) 
    {      
      pos=4*(y*img.width+x);

      let r = img.pixels[pos] / 255; // R value
      let g = img.pixels[pos+1] / 255; // G value
      let b = img.pixels[pos+2] / 255; // B value
      
      let v = cmax = Math.max(r, g, b);
      cmin = Math.min(r, g, b);
      
      let c = cmax - cmin;
      let s = c / cmax;

      if(c==0)
        h=0;
      else if(v==r)
        h=((g-b)/c)%6;
      else if(v==g)
        h=((b-r)/c)+2;
      else /*v==b*/
        h=((r-g)/c)+4;

      h/=6;

      if(h < 0) h+=1;

      img_h.set(x, y, 255*h);
      img_v.set(x, y, 255*cmax);
      img_s.set(x, y, 255*s)

      
      img_h.pixels[pos+3] = img.pixels[pos+3]; // A value
      img_s.pixels[pos+3] = img.pixels[pos+3]; // A value
      img_v.pixels[pos+3] = img.pixels[pos+3]; // A value
    }   
  }

  img_h.updatePixels();
  img_s.updatePixels();
  img_v.updatePixels();
  img.updatePixels();

  image(img_h, 0, 0);
  image(img_s, 256, 0);
  image(img_v, 0, 256);
  image(img, 256, 256);
}