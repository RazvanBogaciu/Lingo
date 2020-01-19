// Lingo game Razvan Bogaciu //
// Da Vinci Dordrecht //
var a = 0
var eind = false
var word = words[Math.floor((Math.random() * 479) + 1)]
document.getElementById("Box"+a+"0").innerHTML = word[0]
console.log(word)

function check(){
	// makes sure the word comes in an array //
	window.letter = (document.querySelector('input[class= "checker"]').value).split('')

     // checks if the awnser is right then it becomes green //
     for (i=0;i<word.length;i++) {
        if (letter[i] == word[i]) {
        document.getElementById("Box"+a+i).innerHTML = letter[i];
        document.getElementById("Box"+a+i).style.backgroundColor = "green"
        document.getElementById('Box'+a+i).style.borderRadius = '0px'
    }
     // checks if the letter is anywhere in the word if so it becomes yellow //

             else if (word.includes(letter[i])) {
             	 document.getElementById("Box"+a+i).style.backgroundColor = "yellow"
             	 document.getElementById('Box'+a+i).style.borderRadius = '90px'
             	 document.getElementById("Box"+a+i).innerHTML = letter[i];	
             }
             else{
             	 document.getElementById("Box"+a+i).style.backgroundColor = "white"
             	 document.getElementById('Box'+a+i).style.borderRadius = '0px'
             	 if ( letter[i] == undefined){
             	 	document.getElementById("Box"+a+i).innerHTML = "?"
             	 }
             	 else {
             	 	document.getElementById("Box"+a+i).innerHTML = letter[i];
             	 }
             }                 
}	
a++
if( a == 5){
	eind = true
}
if( eind == true){
	gewonnen()
}
}
function gewonnen(){
    document.getElementById("button1").disabled = true; 
}
function restart(){
	location.reload()
}


