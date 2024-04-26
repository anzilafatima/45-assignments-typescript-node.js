//Q-30 
var userName = ["emaan", "fatima", "anzila", "shazia", "Admin"];
//using for each loop on array 
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello  ".concat(oneUser, ", would you like to see your status repost?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for loggin again"));
    }
});
