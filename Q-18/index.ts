//question no # 18 
//store some loactions in a array , make sure array is not in alphabetical order
let placeToVisit : string[]=["makka","madina","turkey","qatar"]
//print your array in its original order 
console.log("original order:",placeToVisit);
//print array in alphabetical order without modifying the actual list 
console.log("Alphabetical Order:", placeToVisit.slice().sort());
//array is still in its original order by printing it 
console.log("original order:",placeToVisit);
//print array in reverse alphabetical order without changing the order of the original list 
console.log("reverse order:" , placeToVisit.slice().sort().reverse());
//show that your array is still in its original order by printing it again 
console.log("original order:",placeToVisit);
//reverse the order of your list .print the array to show that its order has changed 
console.log("reverse order changed");
placeToVisit.reverse(); 
console.log(placeToVisit);
//reverse the order of list again.print the list to show its back to its original order 
console.log("original order:",placeToVisit.sort());
console.log(placeToVisit);
//sort array so its stored in alpahbetical order . print the array list to show that its order has been changed 
console.log("reverse alphabetical order changed:", placeToVisit.sort().reverse());
console.log(placeToVisit);







