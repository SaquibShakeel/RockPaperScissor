document.querySelector("button").addEventListener("click", clickToPlay);

function clickToPlay(){
    var player1 = document.getElementsByTagName("input")[0].value;
    var player2 = document.getElementsByTagName("input")[1].value;
    var random1 = Math.floor(Math.random()*3)+1;
    var random2 = Math.floor(Math.random()*3)+1;
    document.getElementsByClassName("image")[0].src="images/image"+random1+".png";
    document.getElementsByClassName("image")[1].src="images/image"+random2+".png";
    var winner;
    var draw;
    if (random1==random2){
        winner=draw;
    }
    else if (random1==1 && random2==2){
        winner=player2;
    }
    else if (random1==2 && random2==1){
        winner=player1;
    }
    else if (random1==1 && random2==3){
        winner=player1;
    }
    else if (random1==3 && random2==1){
        winner=player2;
    }
    else if (random1==3 && random2==2){
        winner=player1;
    }
    else {
        winner=player2;
    }
    if (winner==draw){
        document.getElementsByTagName("h1")[0].innerText="It's a draw!!";
    }
    else{
        document.getElementsByTagName("h1")[0].innerText=winner+" wins🥳🥳";
    }
}
