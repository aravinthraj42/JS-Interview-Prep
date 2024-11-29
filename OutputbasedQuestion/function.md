1.
What is function Declaration 
function sqaure(num){
    return num*num
}

2. What is Function Expression

const square = function(num){
    return num* num
}

3.First Class Function?

A function that can be treated like any other data type in programining language
This means
Fun can Be Assigned to Variables
Fun can Be Passed as araguments to other function (Callbacks)
Func be returned as value from other function ()

function square(num){
    return num*num
}

function displaySquare(fn){
    console.log(fn(5))
}
displaySquare(square) // 25

4.IIFE? 

Immdediaely Invoke Function Expression

(function(num){
    console.log(num*num)
})(4) // 16

5. Output based Question

(function(x){
    return (function(y){
        console.log(x)
    })(2)
})(1)

6.for(var i=0; i<5; i++){
    setTimeout(function(){
    console.log(i)
    },i*1000)
} // 5 5 5 5 5

for(let i=0; i<5; i++){
    setTimeout(function(){
    console.log(i)
    },i*1000)
} // 0 1 2 3 4


7. 
name()
function name(){
    console.log('Name')
}
name() // Function Expression are fully Hoisted 


name()
const name  = () =>{
    console.log('name Arrow Fucntion')
} // ReferenceError: Cannot access 'name' before initialization

// Arrow Function are not Hoisted on 


7.

var c = 21

var fun = function(){
    console.log(c) // undefeined
    var c = 20
}; // Undefined - Here var  is block Scope 

console.log(c) // 21
fun()



var c = 21

var fun = function(){
    console.log(c) // 20
    
}; 
var c = 20 // Var will Hoisted on top and Shadow the First Declaration
console.log(c) // 20
fun()


8. 
function square (nums){ //params or Parameters
console.log(nums*nums)
}

square(5) // Arugments


function multiply(...nums){ // rest Operator
    console.log(nums)
}
let arr = [5,10,2]
multiply(...arr) // Spread Operators

12.
// Rest Operators

const fn = (a, ...nums, x, y) =>{ // Rest parameter must be last formal parameter
    console.log(x,y)
}

fn(1,2,3,4,5)


const fn = (a, x, y, ...nums) =>{ 
    console.log(x,y)
}

fn(1,2,3,4,5)


13.

// Aruguments

function fn(){
    console.log(arguments) // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
}

fn(1,2,3,4)


14.

const arrowfn = () =>{ 
    console.log(arugments) //arugments is not defined
}

arrowfn(1,2,3,4,5) //No Keywords arugments in Arrow Function(Limitations of Arrow Function)


15.

this Keyword

let user = {
    userName: 'RoadSide Coder',

    rc1: () =>{
        console.log(this.userName) // undefined
        // Arrows Fucntion don't have it Own this, It willl refer to Global Object

    },
    rc2(){
        console.log(this.userName) // RoadSide Coder
    }
}

user.rc1()
user.rc2() 