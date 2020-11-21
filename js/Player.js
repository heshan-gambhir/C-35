class Player{
constructor(){}
getCount(){
    var playerCountRef=database.ref("playerCount");
    playerCountRef.on("value",function(data){
    playerCount= data.val();})
}
updateCount(state){
    database.ref("/").update({
        playerCount:state
    })
}
update(state){
  var playerIndex="player"+playerCount
    database.ref(playerIndex).set({
        name:state
    })
}
}