var dog, dog_img;
var dogHappy;
var foodS, foodStock;
var database;


function preload()
{
 dog_img =loadImage("images/doglmg.png");
 dogHappy =loadImage("images/doglmg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500, 500);
  dog = createSprites(250,250,20,20);
  dog.addImage(dog_img);

  foodStock=database.ref('Food');
    foodStock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }
  textSize(10);
  fill(white);
  text("press UP_ARROW key to feed drago milk!",50,400);
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })

}


