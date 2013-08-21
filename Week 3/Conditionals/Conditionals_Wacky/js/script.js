//Jeff Namenye 8/21/2013 Conditionals_Wacky

//Enough air to reach lander
//Caculate enough air to go from rover to the space capsule 150 miles away on moon
//or die

var speed = prompt ("Please enter how fast rover is going"); // this is the speed in mph
var air = prompt ("How much air the tank holds"); // air the tank hold in cubic feet
var amountAir = 10; //this is the amount you breath per hour

var distance = 150; // distance to lander from rover

//calculations
var hoursRover = distance / speed; //this how many hours it take to reach space capsule
var timeReturn = air / amountAir;// this how long before you run out of air

 
 (hoursRover > timeReturn) ? prompt  ("You die") : prompt ("You live") ; 
