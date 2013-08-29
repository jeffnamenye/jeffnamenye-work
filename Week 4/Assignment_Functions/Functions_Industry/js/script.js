// Jeff Namenye 8/27/13 Functions_Industry


// getting the electric feild of an eletric charge


function  electricCharge (){

var electricFeild = prompt ("Please enter a number");// enter a number for electric feild
var force = prompt ("Please enter a number");//enter a number for force
var charge = prompt ("Please enter a number");//enter a number for charge

var ef = force / charge;
var f = charge * electricFeild;
var q = force / electricFeild;

prompt ("The electric feild is" + " " + ef);
prompt ("The force is " + " " + f );
prompt ("The charge is" + " " + q);
}
electricCharge()
