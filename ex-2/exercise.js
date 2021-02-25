// Example
var birthday = prompt("Can I have your birth year", "0");  
var futYear = prompt("Can I have the future year you want me to calculate", "0")

var newAge = futYear - birthday;

window.alert("You will be either " +newAge+ " or " +(newAge-1)+ " in " +futYear+ ".")


// Extra.... did not put it on html but I tried it on console and it worked
window.alert("Let's Play to guess your age in the future")

var byear = prompt("Can I have your birth Year", "0");
var bmonth = prompt("can I have the number of the birth month", "0");
var bday = prompt("Can I have the number of the day your were born", "0");

window.alert("Now let me ask you for a future date")

var actyear = prompt("Can I have a future Year", "0");
var actmonth = prompt("can I have the number of a future month", "0");
var actday = prompt("Can I have the number of the future day", "0");

window.alert("You will be " +(actyear-byear)+ " years " +(actmonth-bmonth)+ " months and " +(actday-bday)+ " days old.")