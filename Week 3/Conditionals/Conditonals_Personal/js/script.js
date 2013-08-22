//Jeff Namenye 8/21/2013 Conditionals_Personal

//food budget
//your having a party and what it catered in, this is to determine if your budget is enough.
 

var guest = prompt ("Please enter the number of guest");//this is the number of guest you have
var budget = prompt ("Please enter your budget");//this id where you enter the aount you want to spend
var pricePlate = 10 ; //this is thew price per plate
var discountPrice = 1500;
  
var totalPrice = pricePlate * guest ; // this is where it gives you the total price
var finalBudget = budget - totalPrice ;// this is where you see if you made the budget

if (budget > totalPrice){ // this where you find out if your in your budget
	prompt ("We will be happy to cater your party");//print out 
	
} else if (totalPrice > discountPrice){ //if your total price is over 1500 dollars you recive a 20% discount
	prompt("You recive a discout of 20%, but you may still be over budget.");

}else {
	prompt("Sorry but your over budget");
}


