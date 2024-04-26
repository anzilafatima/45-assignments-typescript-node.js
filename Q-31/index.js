//Q-31 
// create an array 
var userName = ["fatima", "anzila", "shazia", "javed", "emaan"];
//now the array is empty
userName = [];
// using length function : it check's the length of an array , how many names in the array
//check if the value of array is 0 
//message will pe printed when the value will be zero , Right Now ! we have values in array
if (userName.length === 0) {
    console.log("your array is Empty we need to find some user's!");
}
//if array is not empty than run else condition , if not than run if condition 
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello  ".concat(oneUser, ", would you like to see your status repost?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for loggin again"));
    }
});
