//Q-45
//Define a function to create a car object with optional options 
function create_car(manufacturer, model, ...options){
//creating object initialize a car object with manufacturer and model 
    let car = {
        manufacturer: manufacturer ,
        model:model,
    };
    //Additional options to the car object 
    options.forEach(option => {
        let [key , value] = option.split(":");
        car [key.trim()]=value.trim();

    });
    return car ;
}
//call the function to create a car object 
let my_car = create_car("toyota","corolla","color:black" , "sunroof:True");
//print the variable in insure the information is stored correctly in the car object 
console.log(my_car); 


