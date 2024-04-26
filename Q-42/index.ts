///Q-42
//define the function to sho magicians names
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
}
function make_great(magicians:string[]){
//usin map function 
return magicians.map(name => `The Great ${name}`)
}
//Define an array of magicians names
let magicians_name = ["Anzila","Fatima","Emaan","Mom"];

let  great_magicians = make_great(magicians_name)

show_magicians(great_magicians); 




