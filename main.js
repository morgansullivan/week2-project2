// JavaScript Looping Exercise

// 1. Output each item in the following Array to your console:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
console.log("Question 1")
console.log(livingRoom);

// 2. Using a loop, log numbers 22-33 in the console.
console.log("Question 2")
for(i=22; i<34; i++) {   
	console.log(i);
} 

// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.

console.log("Question 2")
for(i=75; i<101; i+=5) { 
  
	console.log(i);
} 

// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.

console.log("Question 4")
var counter = 0;
while (counter < 5) {
	counter++;
	console.log("This is how a professional loops.")
}

// 5. Write a conditional statement to find the largest of the numbers in the array provided.
console.log("Question 5")

var largestNum = [-5, -2, -6, 0, -1]



if (largestNum[3] >= 0) {
  var answer = "The largest number is 0";
} 

console.log(answer);

// 6. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number.
//     The numbers should range from 10 to 100, in increments of 25.

// 7. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];

// 8. Given the following Array, create variable numThrees with the value [13, 23, 33, 43, 53, 63, 73]
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77]
var numThrees = [];

// 9. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######


// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.
// 11. Define an array called "choices" that consists of "paper", "rock", and "scissors".
// 12. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//    For reference:
//    Math.random gives you a random number between 0 and 1, which is different each time you call it.
// 13. Let's start our conditional statement. Start by reassigning the computer variable to "rock" if the random number
//    falls between 0 and .33. Run the code until the console prints out "rock" instead of the number.
//    In English, it will look like this:
//      var computer = my Math.random code here
//       if the number is between 0 and 33
//          computer = "rock"
//       log computer to the console
// 14. Now add the following conditionals to the same statement:
//    If the random number is between .34 and .66, set the computer variable to "paper".
//    If the random number is between .67 and 1, set the computer variable to "scissors". (Who the hell seriously chooses scissors first?)
// 15. Using both "human", begin another conditional statement. At this time, leave the statements blank.
//    In English, it will look like this:
//      if human is "rock"
//        leave this blank
//      if human is "paper"
//        leave this blank
//      else
//        leave this blank
// 16. Now inside of each condition, we need to compare the "human" variable to the "computer" variable,
//    then print to the console who won the game.
// 17. Give yourself a high five for completing your first javascript game!
// 18. Use the game you made above and rework it using a switch statement.
// 19. What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.


// HEDS ER TALES?
// 20. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 21. Use a do/while loop to keep flipping the coin until you get tails.

// 22. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.


// CHESS BOARD
// 23. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.
