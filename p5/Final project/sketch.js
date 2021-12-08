//videos that were helpful to my project
//https://www.youtube.com/watch?v=ccYLb7cLB1I&list=WL&index=4&t=186s(shiffman)
//https://youtu.be/nMUMZ5YRxHI

//for the Disco class
//let r =40;
let bob;
let discos = [];

function setup() {
createCanvas(600, 600);
	//colorMode(HSB);
	pixelDensity(1);
	for (let i =0; i< 5; i++){
	discos[i]  = new Disco(random(width), random(height));
	}
	
	bob = new Disco(100,100);
}

function preload(){
	//add images
	//add animations
	//add rnb background sound
}
function draw() {
  background(255,150,50); 
loadPixels();//my attempt at making a cool background i need to have a record of all the pixels on the screen
for (let x = 0; x< width; x++) {
    for (let y = 0; y < height; y= y+ 2) {
			let index = (x + y * width)*4;//formula for the number of the exact pixel
     let sum = 0;
			for (let i =0; i< 5; i++){
	let d = dist(x,y, discos[i].pos.x, discos[i].pos.y);
			sum += 150 * discos[i].r /d ;
			
	}
		pixels[index+0] = 255;//to set a color to every pixel
			pixels[index+1] = sum % 255;
			pixels[index+2] = 10;
			pixels[index+3] = 255;	
			//pixels[index+0] = x;//to set a color to every pixel
			//pixels[index+1] = 150;
			//pixels[index+2] = y;
			//pixels[index+3] = 255;
    }
}
    
updatePixels();
	for (let i =0; i< 5; i++){
	discos[i].update();
	//discos[i].display();
	}	
	//bob.update();
	//bob.display();
//console.log(frameRate());
}

class Disco {//making am= moving blob to affect the color	
	constructor(x,y){
		this.pos = createVector(x, y);
		this.r =40;
		this.vel = p5.Vector.random2D();
		this.vel.mult(random(2,5)); 
	}
	
	update(){
		this.pos.add(this.vel);
		if(this.pos.x > width || this.pos.x < 0){
			 this.vel.x *= -1
			 }
		if(this.pos.y > height || this.pos.y < 0){
			 this.vel.y *= -1
	}
	}
	display(){
		noFill();
		stroke(0);
		strokeWeight(4); 
		ellipse(this.pos.x, this.pos.y, this.r *2, this.r *2);  
	}
}