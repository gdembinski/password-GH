let generateBtn = document.getElementById("generate-btn")
let generatePassword = document.getElementById("first-option")
let generateSecondPassword = document.getElementById("second-option")
const randomCharacters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
"(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let passwordsGenerated = false

function generate() {
    for (let i= 0; i< 15; i++) {
        randomPassword = randomCharacters[ Math.floor ( Math.random() * randomCharacters.length ) ]
        generatePassword.textContent += randomPassword
    }
}   

function generate_two() {
    for (let i= 0; i< 15; i++) {
        randomPasswordTwo = randomCharacters[ Math.floor ( Math.random() * randomCharacters.length) ]
        generateSecondPassword.textContent += randomPasswordTwo
    }
}

function change_btn_title() {
    if (passwordsGenerated = false) {
        generateBtn.textContent= "Generate passwords"
    } else {
        generateBtn.textContent= "Refresh page for new options!"
    }
}

// function copyOptionOne() {
//     console.log("button clicked")
//     let copyText = document.getElementById("first-option");
//     copyText.select();
// }

// function copyOptionTwo() {
//     console.log("button clicked")
//     // var copyText = document.getElementById("first-option");
//     // copyText.select() 
//     // password.clipboard.writeText(copyText.value);
//     // alert("Copied the text: " + copyText.value)
// }