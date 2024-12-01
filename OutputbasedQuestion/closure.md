clsoure is budled of function together and lexical Envnirnoments

The Lexical Envirnoment is ability of the varaible
 defined outer scope, global scope are accessibale in inner scope of another function

Use of Closure:

> closure make it possible for function to a private variables

Javascript closure is used to control what is and isn't in the scope
along the function which with variables are in between siblings functionson

### What are scope in Closure

Global scope
inner scope
outer scope


Advantage of closure

functional Programming -> solves looping problem
used to simuate private Variables
solving hieararchy problems
closure enables the nested function to access or use to get values


closure /scope

if inner function within another function this inner function is closure

it retains the access to the varaibles created in outer function

scope: whereas scope in js defines what varaibles you have access to 

Global Scope
Local Scope

-------------------------------------------------

//1.
 let count = 0;

(function immdiate(){
    if(count == 0){
        let count = 1
        console.log('Inse IF block', count)  // 1
    }
    console.log(count); // 0
})()

 var count = 0;

(function immdiate(){
    if(count == 0){
        var count = 1
        console.log('Inse IF block', count)  
    }
    console.log(count); // undefined
})()

The if block does not execute because the function-scoped count is initially undefined and does not equal 0.



-----------------------------
//2. create a function name createase to below Function


function createBase(num){
    return function (n){
        console.log( num + n )
    }
}

var addSix = createBase(6)
addSix(13)
addSix(20)
addSix(10)


//3. How to Optmise time using Closure?

function find(index){
    let a =[]
    for (let i = 0; i < 10000; i++) {
        a[i] = i*i
        
    }
    console.log(a[index])
}
console.time("6")
find(6)
console.timeEnd("6")
console.time("12")
find(12)
console.timeEnd("12")
// 36
// 6: 192.946ms
// 144
// 12: 3.083ms



function find() {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
     a[i]= i*i
    }
    
    return function (index) {
        console.log(a[index])
        }
    }
    
    const closure = find()
    console.time("6"); 
    closure(6); 
    console.timeEnd("6");
    console.time("12");
    closure(12) 
    console.timeEnd("12");



    -------------------------------------------------
    what is Module?
    var module = (function(){
    function _private(){
 // do someting
    }
    function public(){
        //call Private function
    }
    return {
        public:public
    }
})()

Design Pattern that keep code organized and independent from other part of the application

Private Methode inaccesable for the function
pblicj access private method



6.

// 6. Rewrite Logic in Closure
let view
function likeTheVideo(){
    view = 'The Codings'
    console.log('Subscribe to', view);
}
likeTheVideo()
likeTheVideo()

likeTheVideo()

let view;
function likeTheVideo(){
    let count = 0
    // console.log(count)
    return function(){
     if(count>0){
    console.log('Already Subscribe')
     }else {
         view = 'The Codings'
         count++
         console.log('Subscribe to', view);
     }
    }
}

// Can't call like below since it was closure
// likeTheVideo()
// likeTheVideo()


let isSubscribe = likeTheVideo()

isSubscribe() // Subscribe to The Codings
isSubscribe() // Already Subscribe
isSubscribe()// Already Subscribe

