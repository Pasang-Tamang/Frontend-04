//Conditional Statement

// let age = 17;

// if (age >= 18) {
//   alert("Eligible to drink");
// } else {
//   alert("Not eligible to drink");
// }

// let email = "ab@gmail.com";
// let password = "pa";

// if (!email) {
//   console.log("Please enter an email to login");
// } else if (!password) {
//   console.log("Please Enter password to continue");
// } else {
//   console.log("Valid email password");
// }

// const mark = prompt("Enter your mark");
// const marks = Number(mark);

// let message;

// if (marks % 2 === 0) {
//   message = "even";
// } else {
//   message = "odd";
// }

// if (marks >= 80 && marks <= 100) {
//   console.log("Marks", marks, "is", message, "and it is Distinctiomn");
// } else if (marks >= 70 && marks < 80) {
//   console.log("Marks", marks, "is", message, "and it is First Div");
// } else if (marks >= 65 && marks < 70) {
//   console.log("Marks", marks, "is", message, "and it is Second Div");
// } else if (marks >= 40 && marks < 65) {
//   console.log("Marks", marks, "is", message, "and it is Third Div");
// } else if (marks >= 0 && marks < 40) {
//   console.log("Marks", marks, "is", message, "and It is failed");
// } else {
//   console.log("not a valid marks");
// }

//Functions -> Block of code which solved specific problem

//camel case
let firstName;
let lastName;

//pascal case
let FirstName;
let LastName;

// function functionName(){
//     block of code
// }

//functionName()

function sum() {
  let x = 10;
  let y = 20;
  let z = 30;
  console.log(x + y + z);
}

sum();

function data(a, b, c) {
  console.log(a + b + c);
}

data("abc", "def", "gh");
data(1, 2, 3);
data(5, 6, 7);
data(9, 23, 0);
data(58, 96, 47);
