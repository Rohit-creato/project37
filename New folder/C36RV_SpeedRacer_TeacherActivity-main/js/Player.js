class Player {
  constructor() {}
  getCount(){
    var playerCountref=database.ref("playerCount")
    playerCountref.on("value",data=>{
    playerCount=data.val()
    })
  }
}
