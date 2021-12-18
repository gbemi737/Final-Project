//videos that were helpful to my project
//https://www.youtube.com/watch?v=ccYLb7cLB1I&list=WL&index=4&t=186s(shiffman)
//https://youtu.be/nMUMZ5YRxHI
//https://www.youtube.com/watch?v=i2C1hrJMwz0&list=WL&index=13
//https://www.youtube.com/watch?v=RrjOp2tJ3VE
//for the Disco class
//let r =40;
let bob;
let discos = [];//my class of blobs for lava lamp
//images of card
let ariesImage;
let taurusImage;
let geminiImage;
let cancerImage;
let leoImage;
let virgoImage;
let libraImage;
let scorpioImage
let sagittariusImage;
let capricornImage;
let aquariusImage;
let piscesImage;
//animations of card fliping
let ariesAni;
let taurusAni;
let geminiAni;
let cancerAni;
let leoAni;
let virgoAni;
let libraAni;
let scorpioAni;
let sagittariusAni;
let capricornAni;
let aquariusAni;
let piscesAni;
//my sounds important to ambiance
let typeBeat;
let fontType;
let recordSign = new p5.SpeechRec();

function preload(){
	//add images
    ariesImage = loadImage('zodiacs/Back_card_aries.png');
    taurusImage = loadImage('zodiacs/Back_card_taurus.png');
    geminiImage = loadImage('zodiacs/Gemini_back.png');
    cancerImage = loadImage('zodiacs/Back_card_cancer.png');
    leoImage = loadImage('zodiacs/Back_card_leo.png');
    virgoImage = loadImage('zodiacs/Back_card_virgo.png');
    libraImage = loadImage('zodiacs/Back_card_libra.png');
    scorpioImage = loadImage('zodiacs/Back_card_scorpio.png');
    sagittariusImage = loadImage('zodiacs/Back_card_sagittarius.png');
    capricornImage = loadImage('zodiacs/Back_card_capricorn.png');
    aquariusImage = loadImage('zodiacs/Back_card_ aquarius.png');
    piscesImage = loadImage('zodiacs/Back_card_pisces.png');
	
    //add animations
    leoAni = loadAnimation('zodiacs/Back_card_leo.png','zodiacs/leo_strength.png','zodiacs/leo_strength2.png');
	
    //add rnb background sound
    soundFormats('mp3','ogg');
    typeBeat = loadSound('zodiacs/sminotypebeat'); 
    fontType = loadFont('zodiacs/Fragmentcore.otf');
}

function setup() {
    let sound = createCanvas(650, 750);//the only way to load osound is with user input
    sound.mousePressed(canvasPressed);
	//colorMode(HSB);
	pixelDensity(1);//so that the retina display doesnt warp how i change the color of the pixels
	for (let i =0; i< 5; i++){
	   discos[i]  = new Disco(random(width), random(height));
	}//so that it starts in a random place
	textFont(fontType);
    textSize(35);
	bob = new Disco(100,100);
}

function draw() {
    background(255,150,50); 
    loadPixels();//my attempt at making a cool background i need to have a record of all the pixels on the screen
for (let x = 0; x< width; x = x+2) {
    for (let y = 0; y < height; y= y+ 2) {
			let index = (x + y * width)*4;//formula for the number of the exact pixel
    let sum = 0;
			for (let i =0; i< 5; i++){
	let d = dist(x,y, discos[i].pos.x, discos[i].pos.y);//so the color changes depending on the proximity to blob
			sum += 150 * discos[i].r /d ;
			
	}
        pixels[index+0] = 255;//to set a color to every pixel
        pixels[index+1] = sum % 150;
        pixels[index+2] = 10;
        pixels[index+3] = 255;	
			//pixels[index+0] = x;//to set a color to every pixel
			//pixels[index+1] = 150;
			//pixels[index+2] = y;
			//pixels[index+3] = 255;
    }
}
    
updatePixels();// have to update everytime
	for (let i =0; i< 5; i++){
	   discos[i].update();
	//discos[i].display();
	}	

    if(millis()< 10000 && millis() >0){
       allzodiacs();
        text('Play',10,50);
        text('What Is Your Zodiac Sign?',110,100);
        
       }
     if(millis()> 10000 && millis() <20000){
        recordSign.onResult = assignSign;
    }
 if(millis()> 20000){
      allzodiacs();
        text('Play',10,50);
        text('What Is Your Zodiac Sign?',110,100);
      //  sound.mousePressed(canvasPressed);
 }
	//bob.update();
	//bob.display();
//console.log(frameRate());
}


function canvasPressed(){
    if(millis()< 10000 && millis() >0){
        typeBeat.play();
        typeBeat.loop();
    }
    if(millis()> 10000 && millis() <20000){
        typeBeat.pause();
    }
    if(millis()> 20000){
        typeBeat.play();
        typeBeat.loop();
    }
}

function assignSign(){
    recordSign.start();
    console.log(recordSign.resultString);
    //switch(signRecord.resultString){
     //   case 'leo':
    animation(leoAni,width/2,height/2);
          //  break
        //play animation
       //}
}

function allzodiacs(){//change size and place in rows
    ariesImage.resize(83,160);
   image(ariesImage, 10,150);
    
     taurusImage.resize(83,160);
   image(taurusImage, 110,150);
    
     geminiImage.resize(83,160);
   image(geminiImage, 210,150);
    
     cancerImage.resize(83,160);
   image(cancerImage, 310,150);
    
     leoImage.resize(83,160);
   image(leoImage, 410,150);
    
     virgoImage.resize(83,160);
   image(virgoImage, 510,150);
    
     libraImage.resize(83,160);
   image(libraImage, 10,400);
    
     scorpioImage.resize(83,160);
   image(scorpioImage, 110,400);
    
     sagittariusImage.resize(83,160);
   image(sagittariusImage, 210,400);
    
     capricornImage.resize(83,160);
   image(capricornImage, 310,400);
    
     aquariusImage.resize(83,160);
   image(aquariusImage, 410,400);
    
     piscesImage.resize(83,160);
   image(piscesImage, 510,400);
    
}
class Disco {//making am= moving blob to affect the color	
	constructor(x,y){
		this.pos = createVector(x, y);
		this.r =40;
		this.vel = p5.Vector.random2D();
		this.vel.mult(random(2,5)); //so it moves a bit irregualar and it doesnst look as robotic
	}
	
	update(){
		this.pos.add(this.vel);//so it bounces from wall to wall
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