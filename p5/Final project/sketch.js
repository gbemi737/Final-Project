//it should work it has worked for me you might have to try 2-3 times and really project
//i have leo as the default
//videos that were helpful to my project
//https://www.youtube.com/watch?v=ccYLb7cLB1I&list=WL&index=4&t=186s(shiffman)
//https://youtu.be/nMUMZ5YRxHI
//https://www.youtube.com/watch?v=i2C1hrJMwz0&list=WL&index=13
//https://www.youtube.com/watch?v=RrjOp2tJ3VE
//https://editor.p5js.org/esztvi/sketches/yuvIkGYR3
//https://www.wellandgood.com/what-tarot-cards-represent-which-zodiac-signs/
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
    
    ariesAni = loadAnimation('zodiacs/Back_card_aries.png', 'zodiacs/aries_emperor.png', 'zodiacs/aries_emperor2.png');
    taurusAni = loadAnimation('zodiacs/Back_card_taurus.png', 'zodiacs/taurus_hierophant.png', 'zodiacs/taurus_hierophant2.png');
    geminiAni = loadAnimation('zodiacs/Gemini_back.png', 'zodiacs/gemini_lovers_1.png', 'zodiacs/gemini_lovers_2.png');
    cancerAni = loadAnimation('zodiacs/Back_card_cancer.png','zodiacs/cancer_chariots.png', 'zodiacs/cancer_chariots2.png');
    leoAni = loadAnimation('zodiacs/Back_card_leo.png','zodiacs/leo_strength.png','zodiacs/leo_strength2.png');
    virgoAni = loadAnimation('zodiacs/Back_card_virgo.png', 'zodiacs/virgo_hermit.png', 'zodiacs/virgo_hermit2.png');
    libraAni = loadAnimation('zodiacs/Back_card_libra.png', 'zodiacs/libra_justice.png', 'zodiacs/libra_justice2.png');
    scorpioAni = loadAnimation('zodiacs/Back_card_scorpio.png', 'zodiacs/scorpio_death.png', 'zodiacs/scorpio_death2.png');
    sagittariusAni = loadAnimation('zodiacs/Back_card_sagittarius.png', 'zodiacs/saggitarius_temp.png', 'zodiacs/saggitarius_temp2.png');
    capricornAni = loadAnimation('zodiacs/Back_card_capricorn.png', 'zodiacs/capricorn_devil.png', 'zodiacs/capricorn_devil2.png');
    aquariusAni = loadAnimation('zodiacs/Back_card_ aquarius.png', 'zodiacs/aquarius_star.png', 'zodiacs/aquarius_star2.png');
    piscesAni = loadAnimation('zodiacs/Back_card_pisces.png', 'zodiacs/pisces_moon.png', 'zodiacs/pisces_moon2.png');
    
    //add rnb background sound & zodiac explanation
    soundFormats('mp3','ogg');
    typeBeat = loadSound('zodiacs/sminotypebeat'); 
    fontType = loadFont('zodiacs/Fragmentcore.otf');
}

function setup() {
    let sound = createCanvas(650, 750);//the only way to load sound is with user input
    sound.mousePressed(canvasPressed);
    recordSign.start();
    console.log(recordSign);//i did not make it continuous on purpose it should only get one word
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
        text('What Is Your Zodiac Sign? (speak)',100,100);
        
       }
     if(millis()> 10000){
         if(recordSign.resultValue == true){
             assignSign();
             //recordSign.onResult = assignSign;
    }
         else{
             animation(leoAni,425,height/2);
             textSize(30);
             text('Your Zodiac sign represents the tarot card Strength. Get into the arena to rumble with vulnerability and get ready to step into the spotlight of influence.', 5,50,200);
         }
     }

	//bob.update();
	//bob.display();
//console.log(frameRate());
}


function canvasPressed(){
    typeBeat.setVolume(0.1);//so that the person using this will be able to speak over music
        typeBeat.play();
        typeBeat.loop();//to play again after music is over
}

function assignSign(){//plays all my scenarios this is like an if,if else statement
    switch(recordSign.resultString){
       case 'Aries':
    animation(ariesAni,425,height/2);
    textSize(25);
    text('Your Zodiac sign represents the tarot card the Emperor. You aren’t afraid of standing in your power and making decisions to impact the greater good. Embody the Emperor by trusting your gut to lead you in the right direction.', 5,50,200);
        break;
            
        case 'Taurus':
    animation(taurusAni,425,height/2);
    textSize(25);
    text('Your Zodiac sign represents the tarot card the Hierophant. The Hierophant acts as our symbolic religious leader, representing the value and educational foundations that we seek and adhere to regularly. Remember your habits form your character. You may need to re-evaluate your beliefs or pursue higher education.', 5,50,200);
        break;
            
        case 'Gemini':
    animation(geminiAni,425,height/2);
    textSize(25);
    text('Your Zodiac sign represents the tarot card the Lovers. You signify the great duality in all of us. Using your skills of empathetic communication, you teach us the significance of integrating all the parts of ourselves to accomplish our highest good. Find a soul-bond connection that will illuminate your self-awareness.', 5,50,200);
        break;
            
        case 'Cancer':
    animation(cancerAni,425,height/2);
    textSize(25);
    text('Your Zodiac sign represents the tarot card the Chariot. You are continually creating (and re-creating) solid structures in a transient world. You need to create the security that you need to get to where you’re going.', 5,50,200);
        break;  
            
        case 'Leo':
    animation(leoAni,425,height/2);
    textSize(30);
    text('Your Zodiac sign represents the tarot card Strength. Get into the arena to rumble with vulnerability and get ready to step into the spotlight of influence.', 5,50,200);
        break; 
            
        case 'Virgo':
    animation(virgoAni,425,height/2);
    textSize(25);
    text('Your Zodiac sign represents the tarot card the Hermit. As a mutable Virgo, you possess the inner discipline needed in order to achieve enlightenment. This tarot nods to a life of zero distractions to perfect a spiritual path. Expect themes of mastery or self-explorative pursuits.', 5,50,200);
        break; 
            
        case 'Libra':
    animation(libraAni,425,height/2);
    textSize(25);
    text('Your Zodiac sign represents the tarot card Justice. Everyone is equal in your eyes, consistently doing your best to find a harmonious balance for what is fair and just. Remember that integrity always wins out in the end.', 5,50,200);
        break; 
              
        case 'Scorpio':
    animation(scorpioAni,425,height/2);
    textSize(25);
    text('Your Zodiac sign represents the tarot card Death. To be clear, the death card is not literally predictive of death. Rather, it means a major transformation is around the corner. As a Scorpio you are not concerned with superficiality; you are a truth-seeker who we can always count on for a root-cause analysis. Expect an in-depth meaning of life conversation.', 5,50,200);
        break; 
              
        case 'Sagittarius':
    animation(sagittariusAni,425,height/2);
    textSize(25);
    text('Your Zodiac sign represents the tarot card Temperance. You are a blend of duality. You are the explorers of the zodiac, consistently striving for an alchemic balance of traveling and staying home, turning up and going to bed early. You can have it all, but not all at once.', 5,50,200);
        break; 
            
        case 'Capricorn':
    animation(capricornAni,425,height/2);
    textSize(25);
    text('Your Zodiac sign represents the tarot card the Devil. You are associated with an earthly, success orientation. Your ambition can sometimes come to your detriment, so the Devil reminds should remind you to stop yourself short of the seven deadly sins when it comes to reaching your goals.', 5,50,200);
        break; 
            
        case 'Aquarius':
    animation(aquariusAni,425,height/2);
    textSize(25);
    text('Your Zodiac sign represents the tarot card the Star. You act as the humanitarians of the zodiac, offering their strategic, inspirational help. Remember to contribute your unique talents.', 5,50,200);
        break; 
            
        case 'Pisces':
    animation(piscesAni,425,height/2);
    textSize(25);
    text('Your Zodiac sign represents the tarot card the Moon. You are charming, creative, and empathetic. Often, you are going with the flow, which can also mean getting caught up in the undertow. Evaluate the undercurrent of your subconscious to tap into your intuitive flow.', 5,50,200);
        break; 
       }
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
	display(){//the actual ball that is moving but cant be seen
		noFill();
		stroke(0);
		strokeWeight(4); 
		ellipse(this.pos.x, this.pos.y, this.r *2, this.r *2);  
	}
}