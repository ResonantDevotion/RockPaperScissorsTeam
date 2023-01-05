

let choices = ["r","p","s"];

let numberLength = (choices.length);

let userInput = prompt("Enter r p or s");
// console.log(userInput);

let randomIndex = Math.floor(Math.random() * numberLength);
// console.log(random);

let computerChoice = choices[randomIndex];

if (userInput === computerChoice) {
    alert("you have tied");} else {
        if (userInput === "r" && computerChoice === "s" || userInput === "s" && computerChoice === "p" || userInput === "p" && computerChoice === "r") 
        {
            alert("You have won!")
        } else {
            if (userInput === "r" && computerChoice === "p" || userInput === "s" && computerChoice === "r" || userInput === "p" && computerChoice === "s") {
                alert("You have lost!")
            }
        }
    }

