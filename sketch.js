var dog,sadDog,happyDog;
var button1,button2;
var food;
var database;
var foodCount=10;
var lastfed=2000;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database=firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  button1=createButton("ADD FOOD")
  button1.position(700,95)
  button1.mousePressed(addFoods)

  button2=createButton("FEED THE DOG")
  button2.position(800,95)
  button2.mousePressed(feedDog)

  food=new Food();

}

function draw() {
  background(46,139,87);
  drawSprites();

  food.display();
  fill("black")
  textSize(18)
  text("TIMMY",770,285)
  text("LAST FEED: "+lastfed+"min",80,50)
}

function addFoods(){
        foodCount++
    }

function feedDog(){
        dog.addImage(happyDog)
        foodCount=this.foodCount-1;
        lastfed=0;
  }