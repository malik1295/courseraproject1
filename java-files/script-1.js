// ***** String concatination
// var string = "Hello";
// string += " World";
// // string = string + " World";
// console.log(string + "!");




// ***** Regular math operators: +, -, *, /
// console.log((5 + 4) / 3);
// // console.log(undefined / 5); //this gives u NAN means not a number
// function test1 (a) {
//   console.log( a / 5);
// }
// test1(); //if u not pass a here this gives u NAN




// ***** Equality regular(==)
// var x = 4, y = 4; //here x =4 is a number
// if (x == y) {
//   console.log("x=4 is equal to y=4");
// }

// x = "4";// butt here x="4" is a string 
// if (x == y) {
//   console.log("x='4' is equal to y=4"); // this console gives u the fact that string can be equal to number this is what we called type coercion means language converts something for u from one type of data to other data type.
// }





// ***** Strict equality(===) *******signifies by tripple equal
//***********this will not compare if numbers are of different type such as string and integer  */
// if (x === y) {
//   console.log("Strict: x='4' is equal to y=4");
// }
// else {
//   console
//   .log("Strict: x='4' is NOT equal to y=4");
// }





// ***** If statement (all false) here || is for logic OR operation which execute when any of the side is true see 0 and null will execute as false 
// if ( false || null || 
//      undefined || "" || 0 || NaN) {
//   console.log("This line won't ever execute"); //becuase all declarations in if are false u can check them by using Boolean(put the  declaration) so in if nothing will execute instead else will execute
// }
// else {
//   console.log ("All false");
// }

// ***** If statement (all true) here && is for logic AND which execute only when both of its sides are true see any non zero number will evaluate to true such as 1 and -1 in this example
// if (true && "hello" && 1 && -1 && "false") {
//   console.log("All true");
// }





// ***** Best practice for {} style lecture43****************************//
//*******Curly brace on the same or next line...
//*********** */ Is it just a style?
//************curly braces on new line */ u will se that this execute to undefined why? because when java reads upto return it gets nothing in front of it so it automatically consider ; in front of it and reads that nothing is written thats why this function gives undefined
// function a() 
// {
//   return
//   { 
//     name: "Yaakov"
//   };
// }
// //*************curly braces in front of function on the same line */
// function b() {
//   return { 
//       name: "Yaakov"
//   };
// }

// console.log(a());
// console.log(b());
//************summary: putting curly braces in the same line is not due to style its actually necessary */


// *********************For loop***********//
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log("sum of 0 through 9 is: " + sum);

// ********************Default values lecture 44********************************//
// function orderChickenWith(sideDish) {
  // if(sideDish=== undefined){
  //   sideDish ="whatever!"
  // } //******but we have a short cut for this written below */
  // sideDish = sideDish || "whatever!";
  // console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith(); //******** in second call this gives u undefined if we dont use if structure or the code sidedish=sidedish||"whatever" */

//**********************lecture 45 ***************************************/
//********** */ Object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company CEO name is: " 
//   + company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;

// console.log("Stock price is: " + 
//   company[stockPropName]);

//*********** */ Better way: object literal another way of doing the above and this is much better way
// var facebook = {
//   name: "Facebook",
//   ceo: {
//     firstName: "Mark",
//     favColor: "blue"
//   },
//   "stock of company": 110
// };

// console.log(facebook.ceo.firstName);
//*************************lecture 46*****************************/

//*************************** */ Functions are First-Class Data Types
//************************** */ Functions ARE objects
// function multiply(x, y) {
//   return x * y;
// }
// multiply.version = "v.1.0.0";
// console.log(multiply.version);


// *****************Function factory
// function makeMultiplier(multiplier) {
//   var myFunc = function (x) {
//     return multiplier * x;
//   };

//   return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));



// ****************************Passing functions as arguments
// function doOperationOn(x, operation) {
//   return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);
//*************************************lecture 47******************************** */

// Copy by Reference vs by Value
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);



var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update:");
console.log(a);
console.log(b);






// Pass by reference vs by value
function changePrimitive(primValue) {
  console.log("in changePrimitive...");
  console.log("before:");
  console.log(primValue);
  
  primValue = 5;
  console.log("after:");
  console.log(primValue);
}

var value = 7;
changePrimitive(value); // primValue = value
console.log("after changePrimitive, orig value:");
console.log(value);



function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);
  
  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x: 7 };
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);