 a =5; // Refer to Global Object.

console.log(this); // window Object


// Normal it call Windows Object
function myFunction(){
    console.log(this) // Point to Owner of the Function Call.
}
myFunction() // Window Object

const myfun = () =>{
    console.log(this)
}
myfun()

######


const user ={
    name: 'Aravinth',
    age:24,
    getDetails(){
        console.log(this.name) // Aravinth
    }
}
user.getDetails()// this Refer Owner of the Function Call

##What happens when we have functions inside a nested object key? 
    name: 'Aravinth',
    age:24,
    childObj:{
        newName: 'Raj',
        getDetails(){
            console.log(this.name, this.newName) 
        }
    }
    }
  
user.childObj.getDetails()// undefined Raj
// childObj is owenr of Function Call so childObj




const user ={
    name: 'Aravinth',
    age:24,
    getDetails:() => {
        console.log(this.name) 
    }
}
user.getDetails()// // Arrow Function will refer to Global so there is no name property in Global or Window




const user ={
    name: 'Aravinth',
    age:24,
    getDetails() {
    const nestedArrow = () => console.log(this.name) // Aravinth
    nestedArrow()
    }
}
user.getDetails() //s the output since it points to the parent's context i.e. the user object.



const user ={
    name: 'Aravinth',
    age:24,
    getDetails() {
    return nestedArrow = () => console.log(this.name) // Aravinth
    
    }
}
user.getDetails()() // Owner of Function Calll , There is User


###

const user ={
    name: 'Aravinth',
    age:24,
    getDetails() {
    const name = 'Raj'
    console.log(this.name) // Aravinth
    console.log(name) // Raj
    // Owner of the Function Call
    }
}
user.getDetails()
// The variable doesn't influence anyhow the value of this.name.



####

function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  alert(user.ref.this)
  console.log( user.ref.this); // What's the result? // Undefined
  console.log(user.ref) // window Object



  ####
  function makeUser() {
    return {
      name: "John",
      ref(){
          return this
      }
    };
  }
  
  let user = makeUser();
//   alert(user.ref.this)
  console.log( user.ref().name); // What's the result? // John
  console.log(user.ref) // function Object


######
  
  const user = { 
      name: 'Piyush Agarwal!', 
      logMessage() { 
      console.log(this.name); // What is logged?  Undefined aftter 1 sec
    } }; 
  setTimeout(user.logMessage, 1000); //`setTimeout()` function uses the `object.logMessage` 


//   While `setTimeout()` function uses the `object.logMessage` 
//   as a callback, still, it invokes `object.logMessage` as a regular function, 
//   rather than a method.

// And during a regular function invocation *this* 
// equals the global object which is `window` in the case of the browser environment.

// That's why `console.log(this.message)` inside `logMessage`
//  method logs `window.message`, which is `undefined`.


#### How to Fix


const user = { 
    name: 'Piyush Agarwal!', 
    logMessage() { 
    console.log(this.name); // What is logged?  Undefined aftter 1 sec
  } }; 
setTimeout(function (){
   user.logMessage() 
},100);



const user = { 
    name: 'Piyush', 
greet() { 
    return `Hello, ${this.name}!`; 
}, 
farewell: () => 
{ 
    return `Goodbye, ${this.name}!`; 
} 
}; 

  console.log(user.greet(), user.farewell())  // Hello, Piyush! Goodbye, undefined!


//   When calling `object.greet()`, inside the method `greet()` 
//   `this` value equals `object`because `greet` is a regular function.
//    Thus `object.greet()` returns `'Hello,Piyush!'`.

// But `farewell()` is an arrow function,
//  so *[this* value inside of an arrow function]*always* equals 
//  `this` of the outer scope.

// The outer scope of `farewell()` is the global scope, 
// where `this` is the global object. Thus `object.farewell()`
//  actually returns `'Goodbye, ${window.name}!'`, which evaluates to 
//  `'Goodbye, undefined!'`.




var length = 4; 
function callback() { 
    console.log(this.length); // What is logged?  4
}
 const object = { 
    length: 5,
     method(callback) {
         callback(); // callback is call as regualr funtion so it will have Global Object winodw
    } }; 
    object.method(callback, 1, 2); |



    ##

    
    var length = 4; 
    function callback() { 
        console.log(this.length); // What is logged? 3 Lenght of the arguments 
    } const object1 = { 
        length: 5, 
        method() { 
            arguments[0]() 
        } };
     object1.method(callback, 1, 2);
     // Because `arguments[0]()` is a method invocation of `callback` on `arguments` object, `this` inside the `callback` equals `arguments`. As result `this.length` 
     //inside `callback()` is same as `arguments.length` — which is `3`.

    //  { 0: callback, 1: 1, 2: 2, length: 3 }
     // As result the `arguments` special variable inside `method()` 
    //  is an array-like object of the following structure:


    // Calculator

    

var calc ={
    total : 0,
    add(a){
        this.total +=a
        return this;
    },
    sub(a){
        this.total -=a
        return this;
    },
    mul(a){
        this.total *=a
        return this;
    }
}

const result = calc.add(10).mul(5).sub(30).add(10) 
console.log(result.total) // ---- What is logged? // 30