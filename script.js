
// // // //primitve(value) types:
// // // //string , number , bool , undifined , null

// // // //refrence type: opject , array , function
// // // let name = "fati";
// // // let person ={
// // //     name : "fati" 
// // // }
// // // console.log(person.name);
// // // console.log(person["name"]);

// // // // array
// // // let users = ["ali" ,"fatma"];
// // // users[2]= 2
// // // console.log(users[0]);

// // // //function
// // // function greet(name){
// // //     console.log('Hello  ' + name);
// // // }

// // // greet("ahmad");
// // // // let nameUser = "neon";
// // // console.log("neon");
// // // console.log(2+2);

// // let authenticated = false;
// // let bottonText = authenticated === true ? "dashboard" : "login" ;
// // console.log(bottonText)

// // //logical AND
// // // &&
// // let ProductCount = 3;
// // let ProductPrice = 1000;
// // let credit = 1200;
// // let buy = ProductCount > 0 && credit>ProductPrice;

// // console.log(buy);
// // //logical OR
// // // not

// // // if 
// // let hour = 12;
// //  if (hour>=6 && hour<12) {   
// //         console.log('good morning');
// // }else 
// // console.log('hello');

// // // switch case

// // let role = "guest";

// // switch (role) {
// //     case "guest": 
// //         console.log('wellcome');
// //         break;
// //     case "admin": 
// //         console.log('admin user');
// //         break;

// //     default:
// //         console.log('unknown  user');  
// // }

// let person = { name: "Ali", age: 25, city: "Tehran" };

// console.log("for...in:");//object iterable نیست
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

//object oriented programing
// let circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function(){console.log('draw')}
// };
// circle.draw();

//factory function
function createCircle(radius) {
    return{
        radius ,
        draw(){console.log('draw')}
    }
}
const mycircle = createCircle(4);
console.log(mycircle);

let circle1 = createCircle(1);
console.log(circle1)

let circle2 = createCircle(2);
console.log(circle2)

//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){console.log('draw')}
    
}
// تولید ابجکت
const circle = new Circle(3);
console.log(circle)