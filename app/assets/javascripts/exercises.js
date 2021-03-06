// // Exercise #1:

// Do the NASA countdown through the console. That is, the console should say:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!

// Hint: Use a for loop!
// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log("BLASTOFF!");
// // Exercise #2:

var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// Write some code that prints all the numbers in the 'numbers' array to the console.

// Hint: Use a for loop!
// numbers.forEach(function(number) {
//   console.log(number);
// });

// numbers.forEach((number) => {
//   console.log(number);
// });

// numbers.forEach((number) => console.log(number));

// numbers.forEach(number => console.log(number));

// // Exercise #3:

// Write code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log("The average is", sum / numbers.length);

// var sum = numbers.reduce(function(sum, number) {
//   return sum + number;
// }, 0);
// console.log("The average is", sum / numbers.length);

// var sum = numbers.reduce((sum, number) => sum + number, 0);
// console.log("The average is", sum / numbers.length);

// // Exercise #4:

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// Hint: See other hints!
// for (var i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }
// // Exercise #5:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// For example:
// var guess = prompt("Guess a number");

// var answer = 43;
// var message = "Guess a number";
// for (var i = 0; i < 10; i++) {
//   var guess = prompt(message);
//   guess = parseInt(guess);
//   if (guess > answer) {
//     message = "Too high! Guess again!";
//   } else if (guess < answer) {
//     message = "Too low! Guess again!";
//   } else {
//     alert("You a winner! Ha ha ha!");
//     break;
//   }
// }


// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their sum.
// function add(a, b) {
//   return a + b;
// }
// console.log(add(34, 2));
// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)

// // Exercise #8:

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.

// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information 
var book = {
  title: "blah",
  author: "lah",
  isbn: 324234,
  pages: 23,
  printStuff: function() {
    console.log("The title is", this.title);
    console.log("The author is", this.author);
  }
};

book.printStuff();
// // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html 


