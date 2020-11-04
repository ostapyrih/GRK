function preload() 
{
  img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
}

function setup() 
{
  createCanvas(512, 512);
  pixelDensity(1);

  img.filter('gray');

  var histograms = new Array(256);
  histograms.fill(0);

  img.loadPixels();

  for(x=0;x<img.width;x++) 
  {
    for(y=0; y<img.height; y++) 
    {      
      pos=4*(y*img.width+x);

      histograms[img.pixels[pos]]++;

    }
  }

  histograms[0] = 0;

  var max = Math.max(...histograms);

  histograms = histograms.map(h => h/max*256);

  for(i=0; i<histograms.length; i++)
  {
    line(i, 256, i, 256-histograms[i]);
  }
  
  console.table(histograms);

}