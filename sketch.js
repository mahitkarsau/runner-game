
var girl, girl_running; 
function preload(){
girl_running = loadAnimation("girl.png,","girl2.png")

}

function setup(){
createCanvas(600,400)

//create a girl sprite
girl = createSprite(50,160,30,50)
girl.addAnimation("running",girl_running)

edges=createEdgeSprites()

}

function draw(){
    backround("white")



if(keyDown("space")){
    girl.velocity = -10
}



girl.velocityY=girl.velocityY=0.5


girl.collide(edges(3))
    drawSprites();

}