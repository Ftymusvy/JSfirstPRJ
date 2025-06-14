
// //primitve(value) types:
// //string , number , bool , undifined , null

// //refrence type: opject , array , function
// let name = "fati";
// let person ={
//     name : "fati" 
// }
// console.log(person.name);
// console.log(person["name"]);

// // array
// let users = ["ali" ,"fatma"];
// users[2]= 2
// console.log(users[0]);

// //function
// function greet(name){
//     console.log('Hello  ' + name);
// }

// greet("ahmad");
// // let nameUser = "neon";
// console.log("neon");
// console.log(2+2);

let authenticated = false;
let bottonText = authenticated === true ? "dashboard" : "login" ;
console.log(bottonText)

//logical AND
// &&
let ProductCount = 3;
let ProductPrice = 1000;
let credit = 1200;
let buy = ProductCount > 0 && credit>ProductPrice;

console.log(buy);
//logical OR
// not

// if 
let hour = 12;
 if (hour>=6 && hour<12) {   
        console.log('good morning');
}else 
console.log('hello');

// switch case

let role = "guest";

switch (role) {
    case "guest": 
        console.log('wellcome');
        break;
    case "admin": 
        console.log('admin user');
        break;

    default:
        console.log('unknown  user');  
}