//Jeff Namenye 8/14/13 Expressions_Personal
//Doning my personal on my dog, Sammy



//This is where the user decides  how many  packs of balls Sammy gets 

var ballsPack = prompt("This is for the number of balls per pack, \nPlease enter a number between 1-4");// balls per pack
var ballsWeek = prompt("This is how many balls Sammy gets in a week. \nPlease enter a number from 1-7");// how many balls does he get in a week
var weekYear = prompt("This is how many weeks during the year Sammy gets a ball. \nPlease enter a number between 1-52");// how many weeks does he get them

//This is where it calculates the data

var totalBalls = ballsWeek * weekYear;// taking balls per week and multiply it by weeks in the year.
var packTotal = totalBalls / ballsPack;// taking the total balls and dividing it by the number of balls in a pack
var totalPrice = packTotal * .99;

// This where it prints out the number of packs

var packTotal = "This how many packs Sammy gets," +" "+ packTotal + " "+ "packs of balls. Sammy gets these balls";//answer to calculations

alert(packTotal);// print out
var colorBall = new Array ();// types of balls
colorBall [0] = "soccer";// types of balls
colorBall [1] = "baseball";// types of balls
alert(colorBall);// print out

var averagePrice = "his is the average cost per year $"+ " "+ totalPrice + "at 99 cents a ball";
alert (averagePrice)
