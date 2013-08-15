// Jeff Namenye 8/14/13 Wacky_Expresions

// Bucky the clown and balloon animals 

// This is where the the user tells how many kids, how much money they want to spend, and how many baloons per kid.

var manykids = prompt("Enter how many kids will attend.");// kids attend
var moneySpent = prompt("How much money do you want to spend.");//money to spend
var balloonKid = prompt("How many balloons per kid");//balloons per kid
var costBallon = .99

var balloonTotal = manykids * balloonKid;// total of ballons needed
var balloonCost = costBalloon * balloonTotal; //total cost of balloons
var moneyLeft = moneySpent - balloonCost; //money left

var balloonMoney = "This is how much for all the balloons"+ baloonCost// this how much it will cost for the balloons
alert(balloonMoney);//print out

var moneyRemain = "This how much you will have left after cost of balloons" +moneyLeft;// this how much you will have left
alert (moneyRemain);
