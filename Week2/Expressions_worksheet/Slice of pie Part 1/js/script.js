//Jeff Namenye 8/12/13 Expression Worksheet

// Calculate how much pizza each person gets.

var slicePizza = 8;
var peopleParty =23;
var pizzaOrder = 13;

// multiply total slice with how many pizza to get total slices then slice divded by people to figure how many each get 
var totalSlice = slicePizza * pizzaOrder;
var eachPerson =  totalSlice / peopleParty;

//print out of total

console.log ("Each person ate"+" " + eachPerson + " " + " slices of pizza at the party.");