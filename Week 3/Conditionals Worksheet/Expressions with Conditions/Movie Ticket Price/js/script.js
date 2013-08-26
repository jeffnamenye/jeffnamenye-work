//Conditional logic-Multiple conditions


//Ticket price
// if your a senior or under 10 you pay, and if its 3 and 5 pm you pay $7
//If your over 10 but below 55 and after 5 pm you pay $12

var howOld = 12;
var time= 6;




//if your a senior or under 10 you pay, and if its 3 and 5 pm print"You pay $7"
//If your over 10 but below 55 and after 5 pm print "You pay &12"
 
 if (howOld < 10 || howOld <= 55); {
 	console.log (" You pay $ 7");
 }
 if (time < 5 || time > 3 ); {
	console.log ("you pay $7");
} else { 
	console.log("ticket price is $12")	
}
