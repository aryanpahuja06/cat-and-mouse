var cat,mouse
var backgroundimg
var catimg
var mouseimg
var catwalking
var mousedancing
var cat1
var mouse1



function preload() {
    //load the images here
    catimg=loadImage("images/cat1.png")
    mouseimg=loadImage("images/mouse1.png")
    backgroundimg=loadImage("images/garden.png")
catwalking=loadAnimation("images/cat2.png","images/cat3.png")
mousedancing=loadAnimation("images/mouse2.png","images/mouse3.png")
cat1=loadAnimation("images/cat4.png")
mouse1=loadAnimation("images/mouse4.png")










}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
mouse=createSprite(200,600,20,40)
mouse.addImage(mouseimg)
mouse.scale=0.15
mouse.debug=true
cat=createSprite(870,600,20,10)
cat.addImage(catimg)
cat.scale=0.2
cat.debug=true
cat.setCollider("circle",0,0,40)

}

function draw() {

    background(backgroundimg);
    //Write condition here to evalute if tom and jerry collide

if(cat.isTouching(mouse)){
    cat.addAnimation("cat4",cat1)
mouse.addAnimation("mouse4",mouse1)


    
cat.changeAnimation("cat4")
mouse.changeAnimation("mouse4")
cat.velocityX=0


}







    drawSprites();
}


function keyPressed(){
    if(keyCode===32){
cat.addAnimation("walking",catwalking)
mouse.addAnimation("dancing",mousedancing)
cat.changeAnimation("walking")
mouse.changeAnimation("dancing")
cat.velocityX=-3

    }




  //For moving and changing animation write code here


}
