//Jeff Namenye 8/21/2013 Conditionals_Industry

//Starting the linac laser
//This what is takes to start the linac laser at work

var amps = prompt ("Please enter the amount of amps being used");// this is where you enter the amps
var volts = prompt ("Please enter the amount of votls being used");//this is where you enter the volts
var doorsClosed = prompt ("Please enter how many doors to vault are closed 1-3");//this is where you enter the number of doors you close


var watts = amps * volts;// this where you multiply amps times volts to get you wattage


 (doorsClosed == 3) ? prompt ("All doors closed to run") : prompt ("You can not run, all doors not closed");//Print out come

 if (watts >= 30000){
	prompt ("You have enough wattage to run") ;
	}//this is where the out come of voltage
 else { prompt ("You do not have enough wattage to run");

}


