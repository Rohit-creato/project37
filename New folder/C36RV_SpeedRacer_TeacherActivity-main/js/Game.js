class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount()
    car1=createSprite(width/2,height)
    car1.addImage("car",car1image)
    car1.scale=0.5
    car2=createSprite(width/2,height)
    car2.addImage("car",car2image)
    car2.scale=0.5
    cars=[car1,car2]
  }
  handlelements(){
    form.hide()
    form.titleimage.position(50,50)
    form.titleimage.class("gametitle")

  }
  play(){
    this.handlelements()
    Player.getplayerinfo()
    if(allplayers!==undifined){
      image(track,0,-height,width,height)
      drawSprites()
    }
  }
  
  getstate(){
    var gamestateref=database.ref ("gameState")
    gamestateref.on("value",function(data){
      gameState=data.val()
    })
  }
}
