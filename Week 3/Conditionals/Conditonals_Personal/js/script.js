//Jeff Namenye 8/21/2013 Conditionals_Personal

//food budget
//your having a party and what it catered in, this is to determine if your budget is enough.
 

var guest = prompt ("Please enter the number of guest");//this is the number of guest you have
var budget = prompt ("Please enter your budget");//this id where you enter the aount you want to spend
var pricePlate = 10 ; //this is thew price per plate

var totalPrice = pricePlate * guest ; // this is where it gives you the total price
var finalBudget = budget - totalPrice ;


