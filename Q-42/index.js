///Q-42
//define the function to sho magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    //usin map function 
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magicians names
var magicians_name = ["Anzila", "Fatima", "Emaan", "Mom"];
var great_magicians = make_great(magicians_name);
show_magicians(great_magicians);
