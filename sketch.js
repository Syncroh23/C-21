var canvas;
var music;
var b1
var b2
var b3
var b4
var ball
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   b1 = createSprite(75,580,200,30)
    b1.shapeColor = "blue"
   b2 = createSprite(295,580,200,30)
   b2.shapeColor = "orange"
   b3 = createSprite(515,580,200,30)
   b3.shapeColor = "red"
   b4 = createSprite(740,580,200,30)
   b4.shapeColor = "green"

   ball = createSprite(random(20,750), 100,40,40)
   ball.velocityX = 5
   ball.velocityY = 5
   ball.shapeColor = rgb(255,255,255)
       //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges = createEdgeSprites()
  ball.bounceOff(edges)
   if (b1.isTouching(ball)&& ball.bounceOff(b1)) {
 
ball.shapeColor = "blue"
music.play()
   }
   if (b2.isTouching(ball)) {
 
    ball.shapeColor = "orange"
    music.stop()
    ball.velocityX = 0
    ball.velocityY = 0
       }
       if (b3.isTouching(ball)&& ball.bounceOff(b3)) {
 
        ball.shapeColor = "red"
        music.play()
           }
           if (b4.isTouching(ball)&& ball.bounceOff(b4)) {
 
            ball.shapeColor = "green"
            music.play()
               }
  drawSprites()
    //add condition to check if box touching surface and make it box
}
