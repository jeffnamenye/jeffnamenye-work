// Jeff Namenye 8/27/13 Functions_Wacky


//launch a satelite

var satWeight = prompt ("Enter the a number between 1-250 for the weght of satelite");//prompt weight for satelite
var thurstPower = prompt ("Enter a number between 1 and 300, for thust power");//thurst to lift offΩ;
var booster = prompt ("Enter a number 1-100");//extra boost


var thurstUp =   thrustPower - satWeight;
var thrustBoost = thrustup + booster;

if (thurstUp > 0){
	prompt ("You can lift off");

}else if (thrustBoost > 0){
	prompt ("You can lift off");

}else { prompt ("You cant fly");

}


