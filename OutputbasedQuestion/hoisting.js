// Var vs Let vs Const
// 1.
 var a = 5; //-- Global Scope

 {
     var a = 5;
 }
 console.log(a);
// 2.
 {
    let b = 5;
}
console.log(b) 
// ReferenceError: b is not defined

function test(){
    var a = 'Hi'

    if(true){
        var a= 'Hello'
        console.log(a)
    }
    console.log(a)
}
test() // Hello Hello --> Var have Global Replace with Hi to hello


// function test1(){
//     let a = 'Hi'

//     if(true){
//         var a = 'Hello'  // SyntaxError: Identifier 'a' has already been declared
//         console.log(a) // Illegal Shadowing Concepts.
//     }
//     console.log(a)
// }
// test1()

var a;
var a;

// let d;
// let d; // SyntaxError: Identifier 'd' has already been declared

// const x;
// const x; // SyntaxError: Missing initializer in const declaration

var x = 5
x = 12
let y =8
y =10

// const z =3
// z =12 //TypeError:  Assignment to constant variable.


console.log(count)
var count = 1 // undefined


// Temporal Dead Zone
// Varaibles declared using let and const. Any Chance Accessing or logging the values before 
// Initilize Values.
console.log(count1)
let count1 = 1  //ReferenceError: Cannot access 'count1' before initialization

console.log(count2)
const count2 = 1  //ReferenceError: Cannot access 'count2' before initialization


var f  =0;
if(f){
    console.log(f)
}
