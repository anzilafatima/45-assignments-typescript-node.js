"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Q-38 
//describe a function 
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
//calling the function 
describe_city("karachi");
describe_city("lahore");
describe_city("ankara", "tuekey");
