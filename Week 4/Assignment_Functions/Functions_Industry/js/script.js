// Jeff Namenye 8/27/13 Functions_Industry


// getting the electric feild of an eletric charge


function  electricCharge (){

var electricFeild = prompt ("Please enter a number for electric feild");// enter a number for electric feild
var force = prompt ("Please enter a number for force");//enter a number for force
var charge = prompt ("Please enter a number for charge");//enter a number for charge

var ef = force / charge;//calculation for electric feild
var f = charge * electricFeild;//calculation for charge
var q = force / electricFeild;//calculation for force

prompt ("The electric feild is" + " " + ef);//prompt for electric feild
prompt ("The force is " + " " + f );//prompt for force
prompt ("The charge is" + " " + q);//prompt for charge

if (q > f || f < ef){
	prompt ("You can start the Linac laser")//if condition is true
	
}else {
	
	prompt("You can not run the Linac laser");//if condition is not true
}

}
electricCharge()//call function


