// =========================================
// DAY 9: JavaScript Functions
// =========================================

// ----- BASIC FUNCTION -----
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

// ----- FUNCTION WITH ARGUMENTS -----
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);

// ----- RETURNING VALUES -----
function timesFive(num) {
  return num * 5;
}
const answer = timesFive(5);

// ----- GLOBAL SCOPE -----
const myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// ----- LOCAL SCOPE -----
function myLocalScope() {
  const myVar = 10;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// ----- GLOBAL vs LOCAL -----
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "Sweater";
  return outerWear;
}
myOutfit();

// ----- UNDEFINED RETURN -----
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// ----- ASSIGNMENT WITH RETURNED VALUE -----
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

// ----- QUEUE (STAND IN LINE) -----
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

// ----- BOOLEAN VALUES -----
function welcomeToBooleans() {
  return true;
}

// ----- IF STATEMENTS -----
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

// ----- EQUALITY OPERATORS -----
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

// ----- PRACTICE: MY OWN FUNCTIONS -----
function greet(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

function addNumbers(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function isAdult(age) {
  return age >= 18;
}

console.log(greet("Michael"));
console.log("5 + 3 =", addNumbers(5, 3));
console.log("4 × 6 =", multiply(4, 6));
console.log("Am I an adult?", isAdult(27));