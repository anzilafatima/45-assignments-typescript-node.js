"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Define a function with a rest parameter that accept items arugments represtinng our sandwich 
function makeSandwich(...items) {
    console.log("\nmaking a sandwich with the following items: \n");
    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("\nnow enjoy the sandwich");
}
//call the functions 3 times with 3 items different number of arguments
makeSandwich("chicken", "cheeze", "mayo", "egg");
makeSandwich("bread", "butter");
makeSandwich("chicken", "bread", "egg", "cheeze", "tomato", "onion");
