var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1image,car2image,track,car1,car2;
var cars;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1image=loadImage("./assets/car1.png");
  car2image=loadImage("./assets/car2.png");
  track=loadImage("./assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getstate()

}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
    game.update(1)
  }
  if(gameState===1){
    game.play()
  }}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
