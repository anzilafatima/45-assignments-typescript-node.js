"use strict";
//Q-37
Object.defineProperty(exports, "__esModule", { value: true });
//making a function 
function make_shirt(size = "Large", printMessage = "I love Tyescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`);
}
//calling a function with by defualt values 
make_shirt();
// calling afunction with Medium size with default message 
make_shirt("Medium");
//calling a function now with small size an also Different Message 
make_shirt("small", "I love Javascript");
