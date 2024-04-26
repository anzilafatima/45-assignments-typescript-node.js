//Q-41 
//Define a function to print each amgician name from an array 
function show_magicians (magicians:string[]){
    magicians.forEach(name => console.log(name));
}
//define an array containing magician names 
let magicians_names = ["Harry Poter", "Anzila" , "Emaan"];
//call the function to print each magician name 
show_magicians(magicians_names);