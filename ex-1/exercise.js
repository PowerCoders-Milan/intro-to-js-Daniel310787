// Example

/*
Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.

Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." where the variables contain text of your choosing.

Output the same text to the console. Hint --> console.log

*/

//Extra job done


var nameOfHusband = ["Daniel", "Marco", "Stephan", "Junior", "Joseph"];
var nameOfChildren = ["Muhammad", "Amin", "Ahlam", "Alexandra", "Siar", "Laura", "Bright", "Leymi", "Daniel", "Loveth"];
var numOfChilds = [1, 2, 3, 4]
var geoLocs = ["Italy", "Poland", "USA", "PuertoRico", "Germany"];
var jobTitles = ["Developer", "Teacher", "Driver", "Doctor", "Engineer"];

var numOfChild = numOfChilds[Math.floor(Math.random()*numOfChilds.length)];
var partName = nameOfHusband[Math.floor(Math.random()*nameOfHusband.length)];
var geoLoc = geoLocs[Math.floor(Math.random()*geoLocs.length)];
var jobTitle = jobTitles[Math.floor(Math.random()*jobTitles.length)];
var namChild = nameOfChildren[Math.floor(Math.random()*nameOfChildren.length)];
var namChild1 = nameOfChildren[Math.floor(Math.random()*nameOfChildren.length)];
var namChild2 = nameOfChildren[Math.floor(Math.random()*nameOfChildren.length)];
var namChild3 = nameOfChildren[Math.floor(Math.random()*nameOfChildren.length)];

if(numOfChild === 1){
    window.alert("Jessica Alba will be a " + jobTitle + " in " + geoLoc + ", and married to " + partName + " with 1 kid and his name will be " +namChild)
} else if(numOfChild === 2){
    window.alert("Jessica Alba will be a " + jobTitle + " in " + geoLoc + ", and married to " + partName + " with 2 kids and their names will be " +namChild+ " and " +namChild1)
} else if(numOfChild === 3){
    window.alert("Jessica Alba will be a " + jobTitle + " in " + geoLoc + ", and married to " + partName + " with 3 kids and their names will be " +namChild+ ", " +namChild1+ " and " +namChild2)
} else if(numOfChild === 4){
    window.alert("Jessica Alba will be a " + jobTitle + " in " + geoLoc + ", and married to " + partName + " with 4 kids and their names will be " +namChild+ ", " +namChild1+ ", " +namChild2+ " and " +namChild3)
}

//window.alert("Jessica Alba will be a " + jobTitle + " in " + geoLoc + ", and married to " + partName + " with " +numOfChild+ " kid and his name will be " +namChild)