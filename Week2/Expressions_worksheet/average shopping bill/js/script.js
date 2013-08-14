//Jeff Namenye 8/12/13 Expression Worksheet 
//An array with five weekly grocery totals.

var averageBill = [135.23, 156.34, 165.23, 154.23, 167.32];

//Total amount spent on groceries.

var total = averageBill[0] + averageBill[1] + averageBill[2] + averageBill[3] + averageBill[4];
var average = (averageBill[0] + averageBill[1] + averageBill[2] + averageBill[3] + averageBill[4]) / 5;
console.log ("You have spent a total of $"+ total + " "+"on groceries over 5 weeks. That is an average of $"+ average +" per week");
