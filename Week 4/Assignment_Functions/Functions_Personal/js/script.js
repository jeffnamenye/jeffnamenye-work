// Jeff Namenye 8/27/13 Functions_Personal

//resturant meal 

var meal = prompt ("How much do you want to spend on a meal, enter an amount between 10-20");//meal cost
var tip = prompt (" Please enter a tip amount between 1-5");//tip amount
var drink = 1.59;//drink cost

var total = totalPrice(meal, tip, drink);//argument 

function totalPrice(meal, tip, drink){//parameters
	var finalPrice = (meal + tip + drink);//calculation for total price
	prompt("Your total price is $" + finalPrice);//prompt print out
}


