var cat,catImg1,catAnimation,catImg2;
var mouse,mouseImg1,mouseimg2,mouseImg3,mouseImg4;
var garden,gardenImg;




function preload() {
    catImg1=loadAnimation("images/cat1.png");
    catAnimation=loadAnimation("images/cat2.png","images/cat3.png");
    catImg2=loadAnimation("images/cat4.png");
    
    gardenImg=loadImage("images/garden.png");
    
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg4=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    
    cat=createSprite(800,600,10,50);
    cat.addAnimation("cat sleeping", catImg1);
    cat.addAnimation("cat walking" , catAnimation);
    cat.addAnimation("cat touched mouse" , catImg2);
    cat.scale=0.25;
    cat.debug=true;
    cat.setCollider("rectangle", 0,0,60,80);

    mouse=createSprite(200,600,5,20);
    mouse.addAnimation("eating cheese" , mouseImg1);
    mouse.addAnimation("teasing" , mouseImg2);
    mouse.addAnimation("is touched" , mouseImg4);
    mouse.scale=0.15;
    mouse.debug=true;
    mouse.setCollider("rectangle",0,0,20,50);
}

function draw() {

    background(gardenImg);
    console.log(cat.x-mouse.x);
    if(cat.x-mouse.x<150){
        cat.velocityX=0;

        cat.changeAnimation("cat touched mouse" , catImg2);

        mouse.changeAnimation("is touched" , mouseImg4);


    }



    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
      cat.velocityX=-3;
      cat.changeAnimation("cat walking" , catAnimation);
      cat.setCollider("rectangle",0,0,60,80);
      
      mouse.setCollider("rectangle",0,0,20,50);
      mouse.changeAnimation("teasing" , mouseImg2);                                    
  }


}
