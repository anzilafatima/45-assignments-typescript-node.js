let guestList : string[] = ["javaid","shazia","emaan","ayman"]; 
//invite each guest for dinner 
//for each method 
guestList.forEach(guest => {
     console.log(`Dear ${guest}, you are cordially invited to dinner`)
});

// question no # 15 part 1
// map method
// map() method 

let invitation : string[]= guestList.map(guest =>  `Dear ${guest}, you are cordially invited to dinner`); 

console.log(invitation);

invitation.forEach(invitations => {
    console.log(invitations);
}); 

// question no # 15 part 2

let guestLists : string []=["emaan","fatima","anzila","ayman"]; 

// print the name who cant make dinner 

let unableAttend : string | undefined = guestLists.splice(1,1)[0];

console.log(`${unableAttend} not invited for dinner`); 
//push method

guestLists.push("hira");

console.log(guestLists);

//print a message  

guestLists.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited `)
});