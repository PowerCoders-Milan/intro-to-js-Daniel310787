// Example
var birthday = prompt("Can I have your birth year", "0");  
var futYear = prompt("Can I have the future year you want me to calculate", "0")

var newAge = futYear - birthday;

window.alert("You will be either " +newAge+ " or " +(newAge-1)+ " in " +futYear+ ".")
