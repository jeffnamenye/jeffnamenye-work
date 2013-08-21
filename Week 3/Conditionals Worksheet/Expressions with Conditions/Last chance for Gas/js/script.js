//Jeff Namnenye 8/18/2013 Last chance for gas


//Enough Gass
//Do you have a enough gas to make it across desert
var mpg= 30;//this is how many miles to gallon
var gaugeReading = .25;//this is how much gas you have
var tankCapacity = 20;//this is how much gas your car can hold
var desert = 200;//this is how far the desert is across
var mpgDesert = desert / mpg;
var tankGauge = tankCapacity * gaugeReading;
if (mpgDesert <= tankGauge){
	//counsel performed if conditions is true
	console.log("Yes you can make it without stopping for gas! ");
	
}else{
	console.log ("You only have" +" "+ tankGauge + "gallons in your gas tank, better get gas now while you can!"); 
}
