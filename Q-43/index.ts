//Q-43

function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
}
function make_great(magicians:string[]){
//usin map function 
return magicians.map(name => `The Great ${name}`)
}
//Define an array of magicians names
let magicians_name = ["Anzila","Fatima","Emaan","Mom"];

//making a copy of original array through .slice() function 

let copy_magicians_names = magicians_name.slice() 

//modify the copied array to include "the great with their names"

let copy_great_magicians = make_great(copy_magicians_names);

//show both array original and copies 

//Original
console.log("original array\n");
show_magicians(magicians_name);
//Copied
console.log("copied array\n");
show_magicians(copy_great_magicians);


