let playerName = prompt("Quel est votre nom ?");
let robotName = "Robby le robot";
let playerScore = 0;
let robotScore = 0;
let robotPlay;
var gagnant = "0";

while (gagnant == "0") 
{
	let playerChoice = prompt("Pierre, feuille ou ciseau ?");
	let robotChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;


	switch (robotChoice){
		case 1:
			robotPlay = "pierre";
			break;
		case 2:
			robotPlay = "feuille";
			break;
		case 3:
			robotPlay = "ciseaux";
			break;
		}


if (playerChoice == "pierre" && robotPlay == "ciseaux") 
{ 
	playerScore = playerScore + 1; 
	alert(" Bravo " + playerName + " !")
  }
if (playerChoice == "feuille" && robotPlay == "pierre") 
{ 
	playerScore = playerScore + 1; 
	alert(" Bravo " + playerName + " !")
  }
if (playerChoice == "ciseaux" && robotPlay == "feuille") {

	playerScore = playerScore + 1; 
	alert(" Bravo " + playerName + " !")
  }

if (robotPlay == "pierre" && playerChoice == "ciseaux") 
	{ 
	robotScore = robotScore + 1; 
	alert(" Bravo " + robotName + " !")
 }
if (robotPlay == "feuille" && playerChoice == "pierre") 
{ 
	robotScore = robotScore + 1; 
	alert(" Bravo " + robotName + " !")
 }
if (robotPlay == "ciseaux" && playerChoice == "feuille") 
{ 
	robotScore = robotScore + 1; 
	alert(" Bravo " + robotName + " !")
 }

if (playerChoice == robotPlay) { alert ("égalité ! ") }


alert(playerName + "["+playerScore+" points] a choisi " + playerChoice + " et robot["+robotScore+" points] a choisi " + robotPlay);

if (robotScore == 10) 
{
	gagnant = robotName;
}
else if (playerScore == 10)
{
	gagnant = playerName;
}



}


alert("Bravo, " + gagnant + ", vous avez gagné les 10 points");

