"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//define variables 
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "mango", "banana"];
//test for equality  and inequality with strings// 
console.log("is apple is equal to apple");
console.log(apple == "apple");
console.log("\n is apple not equal to apple?");
console.log(apple != "apple");
//test using the lowercase function// 
console.log("\n is APPLE is equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() == 'apple');
console.log("\nis APPLE is not equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");
//numariacl tests
//equal to
console.log("\n is ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\nis ten is not equal to twenty ?");
console.log(ten != twenty);
//greater than 
console.log("\n is ten is greater then zero ?");
console.log(ten > 0);
//less than 
console.log("\n is twenty is less than ten ");
console.log(twenty < ten);
// greater than and equal to 
console.log("\n is ten is greater than or equal to 5?");
console.log(ten >= 5);
//less than or equal to ten 
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);
//test using and & or operators 
//using  (AND) &&
console.log("\n twenty is not equal to ten and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
//using || (OR) ||
console.log("\n 20 is greater than 50 or twenty is equal to 20");
console.log(twenty > 50 || twenty == twenty);
//not equal !=
console.log("\n 20 is greater than 50 or twenty is not  equal to 20");
console.log(twenty > 50 || twenty != twenty);
//test wheather the item is incude in array 
console.log("\nis banana is include in my fruits array");
console.log(fruits.includes("banana"));
console.log("\n is not include in my array");
console.log(!fruits.includes("banana"));
