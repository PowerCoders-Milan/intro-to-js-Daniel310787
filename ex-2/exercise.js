// Example
var birthday = prompt("Can I have your birth year", "0");  
var futYear = prompt("Can I have the future year you want me to calculate", "0")

var newAge = futYear - birthday;

window.alert("You will be either " +newAge+ " or " +(newAge-1)+ " in " +futYear+ ".")


// Extra.... did not put it on html but I tried it on console and it worked
var byear = prompt("Can i have your birth Year", "0");
var bmonth = prompt("can i have the number of the birth month", "0");
var bday = prompt("Can I have the number of the day your were born", "0");
var actyear = 2021;
var actmonth = 12;
var actday = 25;

window.alert("You are " +(actyear-byear)+ " years " +(actmonth-bmonth)+ " months and " +(actday-bday)+ " days old.")