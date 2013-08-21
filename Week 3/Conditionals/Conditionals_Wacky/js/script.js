//Jeff Namenye 8/21/2013 Conditionals_Wacky

//Enough air to reach lander
//Caculate enough air to go from rover to the space capsule 50 miles away on moon
//or die


var air = 20; // air the tank hold in cubic feet
var amountAir = 10; //this is the amount you breath per hour
var speed = 15; // this is the speed in mph
var distance = 50; // distance to lander from rover

//calculations
var hoursRover = distance / speed;
var timeReturn = air / amountAir;
 
if (hoursRover > timeReturn)
