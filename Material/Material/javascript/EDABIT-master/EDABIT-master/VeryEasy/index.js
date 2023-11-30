// Challenge No.1
// This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this

function hello() {
  return "hello edabit.com"
}
    hello()
// Challenge No.2
// Return the Sum of Two Numbers
function sum(a, b) {
  return a + b;
}
console.log("Return the sum of Two Numbers = " + sum(15, 32));

// Challenge No.3
// Convert Minutes into Seconds
function minToSec(min) {
  return min * 60;
}
console.log("Minutes in to Seconds = " + minToSec(120));

// Challenge No.4
// Return the Next Number from the Integer Passed
function nextNumber(x) {
  return x + 1;
}
console.log("Next Number is = " + nextNumber(15));

// Challenge No.5
// Area of a Triangle
// (base * height) / 2
function triArea(x, y) {
  return (x * y) / 2;
}
console.log("Area of triAngle = " + triArea(10, 20));

// Challenge No.6
// Convert Age to Days
// year * 365
function ageToDays(year) {
  return year * 365;
}
console.log("Age in Days = " + ageToDays(10));

// Challenge No.7
// Buggy Code (Part 1)
function cubes(a) {
  return a ** 3;
}
console.log("Cubes in = " + cubes(10));

// Challenge No.8
// Return the First Element in an Array
function firstElement(a) {
  return a[0];
}
console.log("First Element of an array = " + firstElement([20, 4, 6, 8, 10,]));

// Challenge No.9
// Power Calculator
function circuitPower(voltage, current) {
  return voltage * current
}
console.log("Circuit Power = " + circuitPower(230, 10));

// Chalenge No.10
// Convert Hours into Seconds
function hoursIntoSeconds(hours) {
  return hours * 3600;
}
console.log("Hours in Seconds = " + hoursIntoSeconds(2));

// Challenge No.11
// Maximum Edge of a Triangle
function edgeOfTriangle(side1, side2) {
  return (side1 + side2) - 1
}
console.log("Third Edge of Triangle = " + edgeOfTriangle(8, 10));

// Challenge No.12
// Return the Remainder from Two Numbers
function remainderOfTwoNumbers(x, y) {
  return x % y;
}
console.log("Remainder of Two Numbers = " + remainderOfTwoNumbers(10, 4));

// Challenge No.13
// Find the Perimeter of a Rectangle
function perimeterOfRectangle(lenght, width) {
  return 2 * (lenght + width);
}
console.log("Perimeter of Rectangle = " + perimeterOfRectangle(6, 7));

// Challenge No.14
// Return Something to Me!
function giveMeSomething(a) {
  return "something " + a;
}
console.log("Return Something to Me = " + giveMeSomething("Hussnain Ali"));

// Challenge No.15
// Correct the Mistakes
function squared(a) {
  return a * a;
}
console.log("Squared Value = " + squared(5));

// Challenge No.16
// Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(x) {
  return x <= 0;
}
console.log("Number is Less Or Equal to Zero = " + lessThanOrEqualToZero(10));

// Challenge No.17
// Sum of Polygon Angles
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
// n will always be greater than 2.
function sumPolygon(n) {
  return (n - 2) * 180;
}
console.log("Sum of Polygon = " + sumPolygon(4));

// Challenge No.18
// Basketball Points
function points(pointer2, pointer3) {
  return (pointer2 * 2) + (pointer3 * 3);
}
console.log("Total Points = " + points(2, 3));

// Challenge No.19
// Basic Variable Assignment
function nameString(name) {
  return name + "Edabit";
}
console.log("Name with Edabit = " + nameString("Hussnain"));

// Challenge No.20
// Less Than 100?
function lessThan100(a, b) {
  return a + b <= 100;
}
console.log("Sum of two Numbers Less than Zero = " + lessThan100(50, 49));

// Challenge No.21
// Buggy Code (Part 5)
function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}
console.log(printArray(10));


// Challange No.22
// Buggy Code (Part 7)
function swap(a, b) {
  let temp;
  temp = a;
  a = b;
  b = temp;
  return [a, b];
}
console.log(swap(10, 20));

// Challenge No.23
// The Farm Problem
function animals(chick, pig, cow) {
  return chick * 2 + pig * 4 + cow * 4;
}
console.log("Total Legs of Animals = " + animals(2, 3, 5));

// Challenge No.24
// Using the "&&" Operator
function and(a, b) {
  return "Answer is = " + (a == true && b == true);
}
console.log(and(true, true));

// Challenge No.25
// Are the Numbers Equal?
function isSameNum(a, b) {
  return a == b;
}
console.log("Number is Same = " + isSameNum(15, 9));

// Challenge No.26
// Football Points
function teamPoints(win, draw, loss) {
  return win * 3 + draw + loss * 0;
}
console.log("Total Point of the Team = " + teamPoints(9, 2, 4));

// Challenge No.27
// Convert Hours and Minutes into Seconds
function hrMinToSec(hr, min) {
  return hr * 3600 + min * 60;
}
console.log("Time in Seconds = " + hrMinToSec(1, 20));

// Challenge No.28
// Fix the Expression
function equalToSeven(num) {
  return num === 7;
}
console.log("Number is equal to seven = " + equalToSeven(7));

// Chalenge No.29
// Equality Check
function checkEquality(a, b) {
  return typeof a === typeof b;
}

console.log(
  "Data Type of Both Parameters are equal = " + checkEquality("Hellow", "0")
);

// Challenge No.30
// Profitable Gamble
function profitableGamble(prob, prize, pay) {
  return prob * prize > pay;
}
console.log("Profitable Gamble  = " + profitableGamble(0.9, 3, 2));

// Challenge No.31
// Boolean to String Conversion
function boolToString(a) {
  return "" + a;
}
console.log(boolToString(true));
console.log(typeof boolToString(false));

//  Challenge No.32
// Using Arrow Functions
arrowFunc = (a) => 3;
console.log("Arrow Function = " + arrowFunc(3));

// Challenge No.33
// Frames Per Second
function frames(certainFps, min) {
  return certainFps * (min * 60);
}
console.log("Frames Per Second = " + frames(10, 25));

// Challenge No.34
// Miserable Parody of a Calculator
function calculator(a) {
  return eval(a);
}
console.log("String Calculation = " + calculator("23+4"));

// Challenge No.35
// Buggy Code (Part 4)
function greeting(name) {
  if (name == "Hussnain") {
    return "Hello, my Love!";
  }
  return "Hello, " + name + "!";
}
console.log(greeting("Hussnain"));

// Challenge No.36
// Two Makes Ten
function twoMakesTen(m, n) {
  return m === 10 || n === 10 || m + n === 10;
}
console.log(twoMakesTen(5, 5));

// Challenge No.37
// Let's Fuel Up!
function calculateFuel(distance) {
  return distance * 10 >= 100 ? distance * 10 : 100;
}
console.log(calculateFuel(3));

// Challenge No.38
// Buggy Code (Part 2)
function maxNum(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}
console.log(maxNum(10, 5));

// Challenge No.39
// Pair Mangement
// return as an Array
function makePair(o, p) {
  return [o, p];
}
console.log(makePair(10, 20));

// Challenge No.40
// Compare Strings by Count of Characters
function comp(b, x) {
  if (typeof b === "string" && typeof x === "string") {
    if (b.length === x.length) {
      return "Both Strings are Equal";
    } else {
      return "Both Strings are not Equal";
    }
  } else {
    return "Please Enter a Valid String";
  }
}
console.log(comp("Helo", "Helo"));

// Challenge No.41
// Is the String Empty?
function isEmpty(x) {
  return x === "";
}
console.log("Empty = " + isEmpty(" "));

// Challenge No.42
// Check if an Integer is Divisible By Five
function divisibleByFive(num) {
  return num / 5 === 0;
}
console.log("This number is Divisible by Five = " + divisibleByFive(99));

// Challenge No.43
// Multiple of 100
function divisibleByHundred(num1) {
  return num1 / 100 === 0;
}
console.log("This Number is Multiple of 100 = " + divisibleByHundred(50000000));

// Challenge No.44
// Recursion: Length of a String
function lenghtt(str) {
  return str.length;
}
console.log("Lenght is = " + lenghtt("apple"));

// Challenge No.45
// Divides Evenly
function dividesEvenly(a, b) {
  let evenly = a / b;
  return evenly % 2 === 0
}
console.log(dividesEvenly(85, 4));

// Challenge No.46
// Return a String as an Integer
function stringInt(a) {
  return +6;
}
console.log(typeof stringInt("6") + " = " + stringInt("6"));

// Challenge No.47
// Area of a Rectangle
function area(height, width) {
  return height * width > 0 ? height * width : -1;
}
console.log(area(3, 4));

// Challenge No.48
// Minimal I: If Boolean Then Boolean
function legalAge(age) {
  return age >= 18;
}
console.log("LegalAge = " + legalAge(18));

// Challenge No.49
// Concatenate First and Last Name into One String
function fullName(a, b) {
  return a + " " + b;
}
console.log("Your FullName is = " + fullName("Hussnian", "Ali"));

// Challenege No.50
// Buggy Code
function has_bugs(buggy_code) {
  if (buggy_code) {
    return "sad days";
  } else {
    return "it's a good day";
  }
}
console.log(has_bugs(true));

// Challenge No.51
// Solve the Equation
function calculator1(m) {
  return eval(m);
}
console.log("Answer of String Expression = " + calculator1("7*4-2"));

// Challenge No.52
// Upvotes vs Downvotes
function getVoteCount(x) {
  return x.upvote - x.downvote;
}
console.log(
  "object passed as parameter and do sum = " +
  getVoteCount({ upvote: 2, downvote: 33 })
);

// Challenge No.53
// Return Negative
function returnNegative(x) {
  return -x;
}
console.log(returnNegative(4));

// Challenge No.54
// Learn Lodash: _.drop, Drop the First Elements of an Array
// Lodash is a library which include via Cdn link
function dropFirstElement(arr, val = 1) {
  return _.drop(arr, val);
}
console.log(
  "Dropped First Element of an array = " +
  dropFirstElement([9, 8, 7, 5, 6, 2, 13, 45, 5, 6, 55, 2])
);

// Drop first Element with Splice
function drop1(arr) {
  return arr.splice(1);
}
console.log(
  "Removing first Element of an Array = " + drop1([100, 2, 3, 5, 4, 9, 8, 11])
);

// Challenge No.55
// Reverse an Array
function reverseArray(n) {
  return n.reverse();
}
console.log(
  "It will return reverse of that Array = " +
  reverseArray([8, 9, 5, 1, 2, 36, 4, 2, 5])
);

// Challenge No.56
// Movie Theatre Admittance
function acceptIntoMovies(age, isSupervised) {
  return age >= 15 && isSupervised == true;
}
console.log("Permission Granted = " + acceptIntoMovies(15, true));

// Challenge No.57
// Fix the Bug: Simple Array Manipulation
function addOneInAllElements(temp) {
  let newArr = [];
  for (let items of temp) {
    newArr.push(items + 1);
  }
  return newArr;
}
console.log(addOneInAllElements([1, 2, 3, 4, 5, 6, 7, 8]));

// Challenge No.58
// Drinks Allowed?
function shouldServeDrinks(a, b) {
  return a >= 18 && b === true;
}
console.log("Drink Served = " + shouldServeDrinks(18, true));

// Challenge No.59
// Format I: Template String
let firstName = "Hussnain";
let lastName = "Ali";
console.log(`My Name ${firstName} ${lastName}.`);

// Challenge No.60
// Arrow Functions
let add2 = (x) => x + 2;
let add3 = (x) => x + 3;
let add5 = (x) => x + 5;
let add7 = (x) => x + 7;
let add11 = (x) => x + 1;
console.log(add2(100));
console.log(add3(140));
console.log(add5(290));
console.log(add7(150));
console.log(add11(90));

// Challenge No.61
// Using Ternary Operators
let marks = 90;
let isNice;
isNice = marks > 50 ? "Nice" : "NotNice";
console.log(isNice);

// Challenge No.62
// Minimal IV: if-else if-else Inferno
function equilbrium(x) {
  if (x > 0) return "positive";
  else if (x < 0) return "negative";
  else return true;
}
console.log(equilbrium(0));

// Challenge No.63
// Is the String Odd or Even?
function oddOrEven(a) {
  let y = a.length;
  return y % 2 === 0;
}
console.log("Even = " + oddOrEven("apples"));

// Challenge No.64
// ES6: Destructuring Arrays I
arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(arr[1]);

// Challenge No.65
// Inches to Feet
function inchesToFeet(y) {
  return y / 12;
}
console.log(inchesToFeet(324));

// Challenge No.66
// Century Crisis
function futurePeople(population, n) {
  return population + (360 * n);
}
console.log("Future People = " + futurePeople(3248, 6));

// Challenge No.67
// I'd Like a New Shade of Blue, Please
function howManyWalls(n, w, h) {
  return Math.floor(n / (w * h));
}
console.log(howManyWalls(100, 4, 5));
console.log(howManyWalls(10, 15, 12));
console.log(howManyWalls(41, 3, 6));

// Challenge No.68
// To the Power of _____
function calculateExponent(num, exp) {
  return Math.pow(num, exp);
}
console.log(calculateExponent(5, 5));
console.log(calculateExponent(10, 10));
console.log(calculateExponent(3, 3));

// Challenge No.69
// Return the Last Element in an Array
function getLastItem(arr) {
  return arr.pop();
}
console.log(getLastItem([10, 20, 30, 40, 50, 60]));

// Challenge No.70
// Leap Year Function
function leapYear(year) {
  return year % 4 === 0 || year % 400 === 0;
}
console.log("1990 Leap Year = " + leapYear(1990));
console.log("1924 Leap Year = " + leapYear(1924));
console.log("2021 Leap Year = " + leapYear(2021));

// Challenge No.71
// String and Number Conversions
// Use of parseInt
let strToNumber = "50";
console.log(
  "TypeOf Variable strToNumber = " + typeof strToNumber + " = " + strToNumber
);
let ab = parseInt(strToNumber);
console.log("TypeOf Variable ab = " + typeof ab + " = " + ab);

// use of toString
let abc = 50;
console.log("Type of the Variable abc = " + typeof abc + " = " + abc);
let xyz = abc.toString();
console.log("Type of the Variable xyz = " + typeof xyz + " = " + xyz);

// Now we Create our own Custom Function parseInt
function parseInt1(x) {
  return "" + x;
}
let mm = parseInt1(50);
console.log("TypeOf the Argument Passed in Num = " + typeof mm + " = " + mm);

//Now we Create our own custom Function toString
function toString1(y) {
  return +y;
}
let nn = toString1("50");
console.log("TypeOf the Argument Passed in String = " + typeof nn + " = " + nn);