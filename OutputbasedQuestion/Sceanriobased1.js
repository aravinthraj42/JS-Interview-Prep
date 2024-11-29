// "use strict";
"use strict";

// 16 . Hoisting

// Hoisting is default behaviour of Javascript where all variable and 
// function declaration are moved on top
//Example: 1
hoistedvar = 3
console.log(hoistedvar) // 3 even varia;be is declared before Initialzed
var hoistedvar

//Example: 2
hoistedFunction() // Hello Universe Calling Function before Declaring
function hoistedFunction(){
  console.log('Hello Universe')
}

////Example: 3

function doSomething(){
  x =33;
  console.log(x)
  var x;
}
doSomething() // 33 Since Local Variable are Hoisted inside local scope


// NOTE:  To avoid hoisting you can run Javascript in strict mode by using
// 'use strict' on top of the code


"use strict";
xq = 23;          // ReferenceError: xq is not defined
console.log(xq);  // This line will not execute because the error occurs in the previous line
var xq;

(function() {
    "use strict";
    xq = 23;          // ReferenceError: xq is not defined
    console.log(xq);
    var xq;
  })();
  // should throw Error Looks Some Default behaviour of the Vs code and Online complier


myFunction();

function myFunction() {
 let y = 3.14; 
//   console.log(y) // Cannot access 'y' before initialization
//   let y;
}
// 17.
let z;
console.log(z*10) // NaN => undefined*10  = NaN
z =10

// 18.
var c =10 
function foo(){
    var c = 5;
    console.log(c) // 5 - block scope Variable
}
foo()
console.log(c) // 10 -Global scope varible


// 19.
console.log('Start')

setTimeout(()=>{
    console.log('Set Time Out') // MacroTask
})
Promise.resolve().then(()=> console.log('promies')) // Micro Task

console.log('End')

// Promises id Logged becaues Promise.resolve.then is micro task and 
// will be executed before next tick of even Loop

// Set Time out is logged last it Macro Task and will executed all Micro Task

// Start End Promises, set Time Out

// Macro Task
// 1. event loop has one or more task queues.(task queue is macrotask queue)
// 2. Each event loop has a microtask queue.
// something to remember:
/* when a task (in macrotask queue) is running,new events 
may be registered.So new tasks may be created.Below are two new created tasks:
promiseA.then()'s callback is a task
promiseA is resolved/rejected:  the task will be 
pushed into microtask queue in current round of event loop.
promiseA is pending:  the task will be pushed into microtask queue in the future round of event loop(may be next round)
// Micro Task:
setTimeout(callback,n)'s callback is a task,and will be pushed into macrotask queue,even n is 0;
task in microtask queue will be run in the current round,while task in macrotask queue has to wait for next round of event loop.
we all know callback of "click","scroll","ajax","setTimeout"... are tasks,however we should also remember js 
codes as a whole in script tag is a task(a macrotask) too. */

//20.

function x(){
    for(var i= 0; i<5; i++){
        //Re-creating (in reality re-assigning) is happening: 
        // var i =0, var i = 1, var i = 2 e.t.c because ‘var’ 
        // is not block scoped we are just re-assigning the same variable;
        setTimeout(()=>{
            console.log(i) // ‘i’ (not value — but reference) and we go
        }, i*1000)
    }
}
x() // Will Print 6 6 6 6 6 6 after 1,2,3,4,5,6 sec Each
// Change var to let

// That happened because ‘let’ variables are block scoped, 
// so every time we are saying ‘’ let a = ‘someValue’ ‘’ inside 
// different blocks, different variables are created, 
// we are not re-assigning existing variable which was initially created like 
// in ‘var’ example, but we are creating new variables. 
// In third if block we encountered error because inthat if block or in global scope we did not have variable ‘a’ available.

// read for More https://medium.com/@jubomdivnishvili/the-mystery-behind-settimeout-in-loop-var-vs-let-behavior-in-depth-b56468d6a3d6

// but in case you missed it I will mention that in var loops incremeneting 
//of ‘i’ is happening in the end of every iteration, 
//whereas in let loops it is happening in the beggining of 
// every iteration (after initializing new ‘i’ variable). 
// That’s why this code snippet:

// To Fix with var 


function y(){
for(var i= 0; i<5; i++){
    (function(index){
//   var index = i
   setTimeout(()=>{
    console.log(index)
}, 1000)
    }(i))
}
}
y()