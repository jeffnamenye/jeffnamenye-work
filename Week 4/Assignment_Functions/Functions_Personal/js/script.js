// Jeff Namenye 8/27/13 Functions_Personal

//resturant meal 

var meal = parseInt(prompt ("How much do you want to spend on a meal, enter an amount between 10-20"));//meal cost
var tip = parseInt(prompt (" Please enter a tip amount between 1-5"));//tip amount
var drink = 2;//drink cost

var total = totalPrice (meal, tip, drink);//argument 

function totalPrice(meal, tip, drink){//parameters
	var finalPrice = (meal + tip + drink);//calculation for total price
	return finalPrice;//return to top
}

(prompt ("Your total price is $" + total));//prompt print out


var tipTotal = 14// check to see is your total bill is more than 14 dollars
var finalTotal;

finalTotal = (tipTotal< total)? "Have a nice night": "Your a cheap person";//Print out response
prompt(finalTotal);//prompt of response
