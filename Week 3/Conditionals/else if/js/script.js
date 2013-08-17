//Conditional Logic- else if


var kidHeight = 46;
var miniHeight = 48;
var wParentHeight = 45; //the height of the kid with parent
//if the child is old enough, print counsole "You can ride"
//if the child is over 48 inches in height
if (kidHeight > miniHeight){
	//you can ride
	console.log("You can ride");
	
}else if (kidHeight > wParentHeight){
	//code performed if condition is false
	console.log("Yor can ride, but only with a parent present.");
}else{
	//sorry you got some growing to do
	console.log("Sorry kid, you have some growing to do first");
}
