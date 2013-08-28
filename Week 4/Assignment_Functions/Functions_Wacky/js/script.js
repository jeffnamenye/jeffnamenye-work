// Jeff Namenye 8/27/13 Functions_Wacky


//launch a satelite

var satWeight = prompt ("Enter the a number between 1-250 for the weght of satelite")//prompt weight for satelite
var thurstPower = prompt ("Enter a number between 1 and 300, for thust power")//thurst to lift off
var time = 180 //time window

var countDown = prompt ("Please tell the number between 1 and 10");//prompt for # for count down

do {
	prompt (countDown + "secs");//count down
	countDown--;
}
while (countDown > 0);

prompt("Blast off");//print blast off

