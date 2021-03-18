//Create variables here
var dog, happyDog;
var database, foodStock, FoodS

function preload()
{
	//load images here
  dogImg = loadImage("dog (1).png")
  dog1Img = loadImage("happydog (1).png")
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(250,250,30,30);
  dog.addImage(dogImg);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog1Img);
  }

  drawSprites();
  //add styles here

}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {

  if(x<=0){
    x=0
  } else {
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
  
}



