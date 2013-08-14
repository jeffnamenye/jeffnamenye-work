// Jeff Namenye 8/13/13 Expression Worksheet

//Calculate the discountd price with and with out tax.

var priceIteam = 157.34;
var discount = .30;
var formattedDisc = + 30;
var salesTax = .07;
var discriptionIteam = "Golf Clubs";
//Multiply priceIteam with discount, subtract priceIteam from totalDiscount. Multiply totalPrice with sales tax, add total price with amount tax.
var totalDiscount = priceIteam * discount;
var totalPrice = priceIteam - totalDiscount;
var amountTax = totalPrice * salesTax;
var finalPrice = totalPrice + amountTax;

//print out of before and after tax

console.log("Your" + " " + discriptionIteam + " " + "was originally $"  + priceIteam + " " + "but after a" + "  " + formattedDisc + " % discount, it is now $" + totalPrice + " " + "without tax, and $" + finalPrice + " " + "with tax.");
