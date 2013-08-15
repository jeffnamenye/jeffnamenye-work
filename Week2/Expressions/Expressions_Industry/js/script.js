//Jeff Namenye 8/14/13 Expressions_Proffesional
// I am doing my proffesional on ohms law which I use almost everyday.


var formulasV = prompt ("To figure out the voltage , current, or resistance of something there are bunch  of  different formulas. Here we will lfigure out current.  Output voltage, Current, and resistance.");//tells what i am going to do        

//This is where I ask for info
var current = prompt ("Please enter a value for current");// Asking for a number for current
var volts = prompt ("Please enter a value for volts") ;//Asking for a number for voltage
var resistance = prompt ("Please enter a value for resistance");//Asking for a number for ressistance

//This is where calculations are done
var outVolts = current * resistance;//Taking current and multiply resistance to get volts
var currentI = volts / resistance;//Taking volts and divide by resistance to get current
var resistanceR = volts / current;//Taking volts and divides by current to get resistance


var outPut = new Array ();

outPut [0] = "The voltage is" + outVolts;
outPut [1] = "The current is" +   currentI;
outPut [2] = "The resistance is" + resistanceR;
alert (outPut);
