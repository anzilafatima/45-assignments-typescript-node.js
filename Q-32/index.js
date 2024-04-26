//Q-32 
//Array of current User's
var curentUsers = ["fatima", "Javed", "shazia", "emaan", "anzila"];
//Array of new User's
var newUsers = ["anzila", "emaan", "hira", "hassan", "hamzah"];
//loop through new-user's to check for userName's 
//some function use to check when comparing values of two Array's with each other by giving condition's , it also works as one by one it chck value , so create variable with name 
newUsers.forEach(function (new_one_user) {
    var our_condition = curentUsers.some(function (curentUsers) { return curentUsers.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " anzila is already taken"));
    }
    else {
        console.log("this is usename ".concat(new_one_user, " is available"));
    }
});
