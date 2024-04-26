//Q-32 

//Array of current User's
let curentUsers = ["fatima","Javed","shazia","emaan","anzila"] ;
//Array of new User's
let newUsers = ["anzila","emaan","hira","hassan","hamzah"] ;
//loop through new-user's to check for userName's 
//some function use to check when comparing values of two Array's with each other by giving condition's , it also works as one by one it chck value , so create variable with name 
newUsers.forEach(new_one_user => {
    //making a condition for username already exist and save in our_condition variaable 
    let our_condition = curentUsers.some(curentUsers => curentUsers.toLowerCase()=== new_one_user.toLowerCase());
    //print Different message using if-else statement 
    if(our_condition){
      console.log(`Sorry ${new_one_user} anzila is already taken`);
      
    } 
    else {
        console.log(`this is usename ${new_one_user} is available`);
        
    }
});


