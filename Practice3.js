/*Answer1*/
//print all even numbers from 0 to 100
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log ("i =",i);  
//     }
// }


//print all odd numbers from 0 to 100
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log ("i =",i);  
//     }
// }

//*Answer2*
// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let guessingNum = 7;
let userNum = prompt ("Enter Guess the game number (1 to 10) :");
console.log ("userNum =",userNum); 

while (userNum != guessingNum) {
    userNum = prompt ("You entered wrong number. Guess again :");
}
console.log ("Congratulations 🎉, you entered the right number ✅");

/*Answer3*/
//Prompt the user to enter their full name.Generate a username for them based on the input.Start username with @,followed by their full nmae and ending with the fullname length.
//eg: user name = "shradhakhapra", username should be "@shradhakhapra13"

// let userFullname = prompt ("Enter your fullname without spaces :");
// // console.log (userFullname);
// let length = userFullname.length;
// // console.log (length);
// let start = "@";
// console.log (start+userFullname+length);

/*OR*/

// let fullName = prompt ("Enter your fullname without spaces :");

// let userName = "@"+fullName+fullName.length; 
// console.log (userName);
