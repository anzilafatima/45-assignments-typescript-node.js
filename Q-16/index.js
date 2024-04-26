// question no # 16 
// add something in array beginning 
// method used unshift()
let guestLists = ["emaan", "hammad", "anzila", "fatima"];
console.log("Great News ! we found a bigger table");
//unshift 
guestLists.unshift("hira");
// to add in the middle of the array 
//splice method used 
guestLists.splice(Math.floor(guestLists.length / 2), 0, "mom");
//push(); to add in the last 
guestLists.push("tabassum");
console.log(guestLists);
//for each 
guestLists.forEach(guest => {
    console.log(`dear ${guest} you all are cordially invited to dinner`);
});
export {};
