// question no # 16 

// add something in array beginning 

// method used unshift()

let guestLists : string []=["emaan","hammad","anzila","fatima"]; 

console.log("Great News ! we found a bigger table");

//unshift 

guestLists.unshift("hira"); 

// to add in the middle of the array 
//splice method used 
guestLists.splice(Math.floor(guestLists.length/2),0,"mom"); 

//push(); to add in the last 

guestLists.push("tabassum"); 

console.log(guestLists); 

//for each 

guestLists.forEach(guest => {
    console.log(`dear ${guest} you all are cordially invited to dinner`)
});
//infrom that only two guests can be invited for dinner 
console.log("unfortunately , the new dinner table wont arrive on time , so i can only invite two guests to dinner with me");

//while-loop to remove guests from the array untill only two names remain
while (guestLists.length > 2 ){
     let removeGuest = guestLists.pop(); 
     console.log(`Sorry, ${removeGuest} I cant invite you to dinner`);
     
}
console.log("Invitation to the last 2 guests");

//sending invitation to the last two guests
guestLists.forEach(lasttwo => console.log(`luckly ${lasttwo} , you are still invited to dinner`));
//removing last two guest from the list 
guestLists.pop();
guestLists.pop();
console.log("Empty List:",guestLists);






