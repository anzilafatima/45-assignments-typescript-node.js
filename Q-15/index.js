let guestList = ["javaid", "shazia", "emaan", "ayman"];
//invite each guest for dinner 
//for each method 
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner`);
});
// question no # 15 part 1
// map method
// map() method 
let invitation = guestList.map(guest => `Dear ${guest}, you are cordially invited to dinner`);
console.log(invitation);
invitation.forEach(invitations => {
    console.log(invitations);
});
// question no # 15 part 2
let guestLists = ["emaan", "fatima", "anzila", "ayman"];
// print the name who cant make dinner 
let unableAttend = guestLists.splice(1, 1)[0];
console.log(`${unableAttend} not invited for dinner`);
//push method
guestLists.push("hira");
console.log(guestLists);
export {};
//print a message  
// guestLists.forEach(guest => {
//     console.log(`Dear ${guest}, you are cordially invited `)
// });
