//console.log('Javascript');

//Syntax, Declaring Variables, Data Types

//var, let, const

var variableName;
var a;
var b;

let test;
const cd = 1;

//Data Types
// 1. Number: 1,2,3,4,5,6

let num = 2;
console.log(typeof num, num);

//2. String
let str = "pasang";
console.log(str);

const str1 = "2";
console.log(typeof str1, str1);

//3. Boolean
let bool = true;
const bool2 = false;
console.log(bool, bool2);

const numer = -1;
console.log(typeof numer);

//4. Undefined
let undef;
console.log(undef);

//5.Null
const abc = null;
console.log(typeof abc);

//6. BigInt 7.Symbol

//8 Object
//Key: Value pair

let student = {
  name: "Pasang",
  age: 21,
  rollNo: 1,
  isPresent: false,
};

console.log(typeof student, student);
console.log(student.name, typeof student.name);

console.log(student.isPresent, typeof student.isPresent);

//Array
let newArr = [1, 2, 3, 4, 5];
console.log(typeof newArr);
let students = ["Ram", "Hari", "Chandrama", "June"];
console.log(students);
let data = [1, "str", false, -99];
let newArrObj = [
  student,
  {
    test: "124",
  },
  true,
  false,
  {
    data: 123,
  },
];
console.log(typeof newArrObj, newArrObj);

//Operators 1.Arithemaic Operators

let num1 = 10;
let num2 = 30;

const sum = num1 + num2;
console.log("sum", sum);

const sub = num1 - num2;
console.log("sub", sub);

const mul = num1 * num2;
console.log("mul", mul);

const div = num1 / num2;
console.log("div", div);

const rem = num2 % num1;
console.log("rem", rem);

const exponential = 2 ** 5;
console.log("exponential", exponential);

num1++;
console.log(num1);

num2--;
console.log(num2);

//Assignment Operator
let y = 10;
let z = 30;
//z = z + 30;
z += 30;
console.log("z", z);

z -= 10;
console.log("z", z);
