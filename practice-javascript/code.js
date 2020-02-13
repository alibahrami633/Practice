var player1;
var player2;
var player_status = ['stone','paper','scissor'];

function generate_radnom_number() {
    return Math.floor(Math.random()*3);
}

for (var i = 0; i<5; i++) {
    player1 = generate_radnom_number();
    player2 = generate_radnom_number();

    if(player1 === player2) {
        console.log("A Draw!!!!" + " Both players chose " + player_status[player1] + "!");
        console.log("");
    }
    else if(player1 == 0 && player2 == 1) {
        console.log("Player2 WINS!" + " Player1 chose " + player_status[0] + " " + "--- Player2 chose " + player_status[1] + "!");
        console.log("");
    }   
    else if(player1 == 0 && player2 == 2) {
        console.log("Player1 WINS!" + " Player1 chose " + player_status[0] + " " + "--- Player2 chose " + player_status[2] + "!");
        console.log("");
    }
    else if(player1 == 1 && player2 == 0) {
        console.log("Player1 WINS!" + " Player1 chose " + player_status[1] + " " + "--- Player2 chose " + player_status[0] + "!");
        console.log("");
    }
    else if(player1 == 1 && player2 == 2) {
        console.log("Player2 WINS!" + " Player1 chose " + player_status[1] + " " + "--- Player2 chose " + player_status[2] + "!");
        console.log("");
    }    
    else if(player1 == 2 && player2 == 0) {
        console.log("Player2 WINS!" + " Player1 chose " + player_status[1] + " " + "--- Player2 chose " + player_status[2] + "!");
        console.log("");
    }
    else if(player1 == 2 && player2 == 1) {
        console.log("Player1 WINS!" + " Player1 chose " + player_status[1] + " " + "--- Player2 chose " + player_status[2] + "!");
        console.log("");
    }
    else {
        console.log("Player1: " + player1 + " - Player2: " + player2 + " - Something is wrong!");
    }
}