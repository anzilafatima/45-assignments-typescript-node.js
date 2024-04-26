//Q-30 

let userName = ["emaan","fatima","anzila","shazia","Admin"] ;

//using for each loop on array 

userName.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello  ${oneUser}, would you like to see your status repost?`);
        
    }
    else {
          console.log(`hello ${oneUser}, thank you for loggin again`);
          
    }
});  


   
 