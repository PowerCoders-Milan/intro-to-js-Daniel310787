// Example


var phrase = prompt("Can you write a word or a sentence")

window.alert(phrase+ " is " +phrase.length+ " characters long.")


// Extra.... did not put it on html but I tried it on console and it worked

window.alert("Can I have 2 different phrases one after the other so we can compare")
var phraseone = prompt("Provide 1st phrase")
var phrasetwo = prompt("Provide 2nd phrase")

if(phraseone.length > phrasetwo.length){
    window.alert(phraseone+ " phrase was the longest with " +phraseone.length+ " number of characters." )
} else if(phrasetwo.length > phraseone.length){
    window.alert(phrasetwo+ " phrase was the longest with " +phrasetwo.length+ " number of characters." )
} else {
    window.alert("Both phrases have an equal number of characters")
}
