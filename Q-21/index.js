//question no # 21 
//in object what we learned
//default typed object 
//update property 
//define custom type property 
//use any with object 
// they think of something yo could store in a typescript object , write a program that create conatining these items 
//name 
//roll number 
//grade 
/**
 * syntax of object
 * let objectname = {
 * key1:'value1',
 * key2:'value2',
 *
//  */
//1)
// let student = {
//     name: "anzila",
//     rollnumber: 23,
//     grades:[85,90,75],
// }; 
// console.log(student.grades[1]); 
// //2)
// let products = {
//     name:"laptop",
//     price:8000,
//     description:"hight performance laptop with fast processor",
// }
// console.log(products.price);
// //3)
// //type interface 
// interface person {
//     name : string ;
//     age : number;
//     city: string ;
// }
// let person1 : person = {
//     name: "ali",
//     age : 30 ,
//     city: 'lahore', 
// }
// let person2 : person = {
//     name: "ali1",
//     age:22,
//     city:"karachi", 
// }  
// console.log(person2.name); 
// // type annotation 
// // let myVariable : string = "hello"; 
// // //type infers 
// //  let anotherVariable = 'world'; 
//  //initial object 
//  let person = {
//     name:"ali",
//     age: 30 ,
//     city:"lahore"
//  }
//  //updated property 
//  person.age = 35 ; 
//  person.city = "london"; 
//  console.log(person); 
//define custom type roperty 
// any property 
//  let myVariable : any ;
//  myVariable = 10; 
//  myVariable = "hello";
//  myVariable = true ; 
// question no # 21  
let objectContainItems = {
    "laptop": {
        name: "laptop",
        price: "8000",
        description: "high performance laptop with fast processor"
    },
    "mouse": {
        name: "mouse",
        price: "10000",
        description: "high performance laptop with fast processor"
    },
    "keyboard": {
        name: "keyboard",
        price: "5000",
        description: "high performance laptop with fast processor"
    }
};
console.log(objectContainItems);
export {};
