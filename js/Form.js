class Form{
constructor(){}
display(){
    var title=createElement("h2");
    title.html("MULTIPLAYER GAME");
    title.position(200,50);
    var input=createInput("please enter your name if you want to play if not bye bye");
    input.position(250,100);
    var button= createButton("TAP TO PLAY")
    button.position(300,200);
    var greeting=createElement("h3");
    button.mousePressed(function(){
    input.hide();
    button.hide();
    var name=input.value();
    playerCount=playerCount+1;
    player.update(name);
    player.updateCount(playerCount);
    greeting.html("hello"+ name);
    greeting.position(350,250);
})
}
}