
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

// //factory function
// function createCircle(radius) {
//     return{
//         radius ,
//         draw(){console.log('draw')}
//     }
// }
// const mycircle = createCircle(4);
// console.log(mycircle);

// let circle1 = createCircle(1);
// console.log(circle1)

// let circle2 = createCircle(2);
// console.log(circle2)

// //constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function(){console.log('draw')}
    
// }
// // تولید ابجکت
// const circle = new Circle(3);
// console.log(circle)

// const circle = {
//   radius : 1
// }

// circle.color= "red";
// delete circle.radius;
// Object.freeze(circle); 
// console.log(circle);


// value types(primitve):{number , string , boolean, symbol , undifined , null}


// refrence types:{object , function , array }


// const circle = {
//    radius : 1 ,
//    draw(){console.log('draw');}
//  }

//  let circlekey = Object.keys(circle);
//  console.log(circlekey);

//  if ('draw' in circle){
//    console.log('yes');
//    console.log('draw' in circle);
//  }

//کلون کردن
// const another = {};
// for(let key in circle){
//    another[key] = circle[key]
// }
// console.log(another);
// const another1 = Object.assign({color : 'red'} , circle)
// console.log(another1);
// const another2 = {...circle}
// console.log(another2 );

// //string primitve
// const message = " neon ";
// //string object
// const another3 = new String("neon");

// // `
// const another4 = `neon
//     coding uis cool`;
// console.log(another4);


// //place holder
// let names = 'fati';
// let messg = `Hi ${names}. wellcome`;
// console.log(messg);


//refrence array

// const courses = [
//    {id: 1, name: "a"},
//    {id: 2, name:  "b"},
// ];

// const result = courses.find((course) => course.id === 1);
// console.log(result);


// const num = [1,2,3,6]

// const maps = num.map(function(value){
//    return value +  2;
// })

// console.log(maps);


// //function declaration
// walk();
// function walk (){
//    console.log('walk');
// }

// //function Expression
// let run = function(){
//    console.log('run');
// };
 
// function sum(...numbers) {
//   return numbers.reduce((acc, val) => acc + val, 0);
// }

// console.log(sum(1, 2, 3, 4, 5));


const person = {
  fname: "ali",
  lname: "mohamadi",

  // Getter برای fullName
  get fullName() {
    return `${this.fname} ${this.lname}`;
  },

  // Setter برای fullName
  set fullName(value) {
    const parts = value.split(' ');
    this.fname = parts[0];
    this.lname = parts[1];
  }
};

// دسترسی به fullName از طریق Getter
console.log(person.fullName);  // "ali mohamadi"

// تغییر دادن fullName از طریق Setter
person.fullName = "rezaa farhadi";

// بعد از تغییر
console.log(person.fullName);  // "rezaa farhadi"
