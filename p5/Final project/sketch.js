//videos that were helpful to my project
//https://www.youtube.com/watch?v=ccYLb7cLB1I&list=WL&index=4&t=186s(shiffman)

function setup() {
createCanvas(600, 600);
}

function draw() {
  background("#B83D61"); 
    
loadPixels();//my attempt at making a cool background i need to have a record of all the pixels on the screen
for(int x = 0; x< width; x= x +1) {
    for (int y = 0; y < height; y= y +1) {
   int index = x + y * width;
        pixels[index] = color()
    }
}
    
updatePixels();
}