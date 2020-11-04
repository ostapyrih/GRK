function preload() 
{
  img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
}

function setup() 
{
  createCanvas(512, 512);
  pixelDensity(1);
  image(img, 0, 0);

  let img_r = createImage(256, 256);
  let img_g = createImage(256, 256);
  let img_b = createImage(256, 256);
  let img_sum = createImage(256, 256);
  img.resize(256,256);
  
  img.loadPixels();
  img_r.loadPixels();
  img_g.loadPixels();
  img_b.loadPixels();

  for(x=0;x<img.width;x++) 
  {
    for(y=0; y<img.height; y++) 
    {      
      pos=4*(y*img.width+x);

      img_r.pixels[pos] = img.pixels[pos] // R value
      img_g.pixels[pos+1] = img.pixels[pos+1] // G value
      img_b.pixels[pos+2] = img.pixels[pos+2] // B value
      img_r.pixels[pos+3] = img.pixels[pos+3] // A value
      img_b.pixels[pos+3] = img.pixels[pos+3] // A value
      img_g.pixels[pos+3] = img.pixels[pos+3] // A value
    }   
  }

  img_r.updatePixels();
  img_g.updatePixels();
  img_b.updatePixels();
  img_sum.blend(img_r, 0, 0, 256, 256, 0, 0, 256, 256, ADD);
  img_sum.blend(img_g, 0, 0, 256, 256, 0, 0, 256, 256, ADD);
  img_sum.blend(img_b, 0, 0, 256, 256, 0, 0, 256, 256, ADD);

  image(img_r, 0, 0);
  image(img_g, 256, 0);
  image(img_b, 0, 256);
  image(img_sum, 256, 256);
}