//Q-33
// created Array
let numbers = [1,2,3,4,5,6,7,8,9];
//using fro-loop 
//save numbers vales one by one in numbers
//this variable will only works under the loop
for(let oneNumbers of numbers) {
    let ordinalEnding: string;
    if(oneNumbers === 1){
       ordinalEnding = "st"
    }
    else if (oneNumbers === 2){
        ordinalEnding= "nd"
    }
    else if (oneNumbers === 3){
        ordinalEnding = "rd"
    }
    else {
        ordinalEnding = "th"
    }      
    console.log(`${oneNumbers}${ordinalEnding}`);
    
}