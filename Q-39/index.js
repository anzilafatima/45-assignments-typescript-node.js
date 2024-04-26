"use strict";
//creating a function with parameter which retrun a values in string 
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `${city} , ${country}`;
}
//calling a function and print the retruned value 
console.log(city_country("karacki", "pakistan"));
console.log(city_country("tokyo", "japan"));
city_country("Berlin", "germany");
