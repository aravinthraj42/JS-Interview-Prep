Obejct is Collection of related data or funationality
In Javascript everything is Object
it can be Created by 
let obj = {
    key: values
}

### 1. How can you access, modify and delete properties of an object?

let user ={
    name: 'Aravinth',
    age : 23
}
console.log(user.name, user.age)
user.name = 'Raj'
console.log(user.name, user.age)
delete user.age 
console.log(user)

### 2. 
let user ={
    name: 'Aravinth',
    age : 23,
    "like this video": true
}
// how to access
console.log(user["like this video"])
console.log(user.age)

## 3
const fun = (function(a){
    delete a
    return  a
})(5)
console.log(fun)
// delete Will delet Property of Object not Local Variable


4.
const property = 'firstName'
const value = 'Aravinth'

let user = {
    property: value // { property: 'Aravinth' }
}
console.log(user)

let user1 = {
    [property]: value
}
console.log(user1) // { firstName: 'Aravinth' }

// Note: that square bracket notation can be used for unknown 
// and complex key names and dot notation is used for known and simple keys.

5.
let user ={
    name: 'Aravinth',
    age: 23,
    isTotallyFine: true
}

for(let key in user){
    console.log(key)// Print key
    console.log(user[key]) // Print Values
}


6.
const obj ={
    a: 10,
    b: 20,
    a: 30
}
console.log(obj) // { a: 30, b: 20 }
// Two Key with same name 1st key will be replaace with last in same Poistion


7.
// create a function mutilpy by two obj that nultiple alll numeric property

let obj ={
    a:10,
    b:20,
    tite:'IBM Interview'
}
multiplebytwo(obj)
function multiplebytwo(obj){
    for( let key in obj){
        if(typeof(obj[key]) == "number"){
            obj[key] *=2
        }
    }
}
console.log(obj)


###
const a = {}
const b = {key: 'b'}
const c = {key: 'c'}

a[b] = 123 // { '[object Object]': 123 }
a[c] = 456 // { '[object Object]': 456 }

console.log(a[b] ) // we can index[] only Str , indexing[] will become '[object Object]'

####
// Json.String Json.parse
let user = {
    a: 'Aravinth',
    b: 2,
    c: true
}
let userJson = JSON.stringify(user)
console.log(userJson)
let userParse = JSON.parse(userJson)

console.log(userParse)

###
console.log([...'Aravinth'])
//Op
// [
//     'A', 'r', 'a',
//     'v', 'i', 'n',
//     't', 'h'
//   ]

###
const user = {name: 'Aravinth', age: 21}
const admin = {admin: true, ...user}
user.name ='Raj'
console.log(admin) // ...user - DeepCopy No refernce will be Copied.
//OP: { admin: true, name: 'Aravinth', age: 21 }


##
const setting ={
    userName: 'Aravinth',
    level: 20,
    health: 90,
}
let data = JSON.stringify(setting)
let data1 = JSON.stringify(setting["level", "health"])

console.log(data)
console.log(data1)

##
const shape  ={
    radius: 10,
    diameter(){
        return this.radius*2
    },
    perimeter: () =>{
        console.log(this.radius) // undefined
      return 3*Math.PI * this.radius
    }
}
console.log(shape.diameter()) // 20
console.log(shape.perimeter()) //NaN


//Arrow Function don't have their own this it will refer to global object which is undefined.

###

let user ={
    name: 'Aravinth',
    age: 20,
    fullName:{
        firstName: 'Raj',
        lastName: 'Aravi'
    }
}
// const {name,age} = user;

// console.log(name,age) // Aravintn 20

// let name = 'Aravinth'
// const {name:myName,age} = user; // Rename the user propety to Since we Duplicate with local var 

// console.log( myName,age) // Aravintn 20
const {name,age,fullName} = user
// const {name,age,fullName:{firstName,lastName}} = user // Destructing Nested Function
console.log(fullName)


function getItems(friutList,favouriteFruit, ...args){// rest operator shouble as Last paramter
return [...friutList, ...args, favouriteFruit] // spread paramter can be in 1st,middle last
}

console.log(getItems(['banna','orange'],'pear','orange','aple'))



###
// Reference

let c = {
    greeting:'Hey!'
}
let d;
d = c //Copy by Reference // OP:Hello
// d = c.greeting // Copied by value = op //  Hello

c.greeting ='Hello'
console.log(d)
 // Object have same Refernece

 ###
 console.log({a:1}=={a:1}) // false
console.log({a:1}==={a:1}) // false


###

let person = {name: 'Aravinth'}
const members = [person] // This Store the Object in O Index of the array
person = null // Will not affect
// person.name = null // will affect since we are change value directly
console.log(members) // [ { name: 'Aravinth' } ]
console.log(person) // null


###


const value = {number: 10}

const multipy = (x ={...value}) =>{
    console.log((x.number*=2))

}
multipy() // 20
multipy() // 20 {...value} --> Clone not sameReference
// We invoke the multiply function the first two times without passing a value: 
// x has the default value of { number: 10 }.
// We then log the multiplied value of that number, which is 20.
multipy(value) // 20
// The third time we invoke multiply, we do pass an argument: 
// the object called value. The *= operator is actually shorthand for 
// x.number = x.number * 2:
//  we modify the value of x.number, and log the multiplied value 20.
multipy(value) //40


###

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: 'John',
      age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?
// { name: 'Alex', age: 25 }
// { name: 'John', age: 50 }


**Shallow copy ** --> ... spreadOperator,  Object.assign

A shallow copy means that certain (sub-)values are still connected to the original variable.
A Shallow Copy in Arrays
Re-assigning top-level properties of the copy does not affect the source object.
Re-assigning nested object properties of the copy does affect the source object.

1
const originalComplexObject = {
    name: "sandeep",
    jobdetails: {
      profession: "private",
      company: "IBM"
    }
  };
  const shallowCopyComplexObject = { ...originalComplexObject };
  shallowCopyComplexObject.name = 'Aravinth'
  shallowCopyComplexObject.jobdetails.profession = "public";
  console.log(originalComplexObject); // Output: { name: "sandeep", jobdetails: { profession: "public", company: "IBM" } }
  console.log(shallowCopyComplexObject); // Output: { name: "sandeep", jobdetails: { profession: "public", company: "IBM" } }

2.
const originalSimpleObject = { name: "sandeep", age: 30 };
const shallowCopySimpleObject = { ...originalSimpleObject };
shallowCopySimpleObject.name = "john";
console.log(originalSimpleObject); // Output: { name: "sandeep", age: 30 }
console.log(shallowCopySimpleObject); // Output: { name: "john", age: 30 }

3.
8)Normal assignment (=):

Usage: Normal assignment operator (=) is used to copy primitive values or references to objects and arrays, creating shallow copies.
Limitation: Like spread syntax and Object.assign(), it creates a shallow copy, so modifications to nested objects in the original object will affect the copied object.

const user={
    name: 'Jen',
    age: 26
};

const copyOfUser =user;
console.log(user, 'user'); //{ name: 'Jen', age: 26 } user

console.log('------------After Modification-----------');
copyOfUser.age = 24;
/*
Here you would expect user object wouldn't change, but copyOfUser 
and user object both share same memory address
*/
console.log(user, 'user');
// ------------After Modification-----------
// { name: 'Jen', age: 24 } user


*Deep copy ** --> JSON.Parse(Json.stringify())

A deep copy means that all of the values of the new variable are copied and disconnected from the original variable



const user = {
    name: "Jen",
    age: 26
}
console.log("=========Deep Copy========");
const copyOfUser = JSON.parse(JSON.stringify(user));
console.log("User=> ",user);
console.log("copyOfUser=> ", copyOfUser);
/*
=========Deep Copy========
User=>  { name: 'Jen', age: 26 }
copyOfUser=>  { name: 'Jen', age: 26 }
*/
console.log("---------After modification---------");
copyOfUser.name = "Piyush";
copyOfUser.age = 24;
/*
Here user object will not change
*/
console.log("User=> ",user);
console.log("copyOfUser=> ",copyOfUser);
/*
---------After modification---------
user=>  { name: 'Jen', age: 26 }
copyOfUser=>  { name: 'Piyush', age: 24 }
*/



**Q - How to clone an object without referencing its keys to original object? **


const obj = {a: 1 ,b: 2}
const objclone = Object.assign({},obj);
const objclone = JSON.parse(JSON.stringify(employee));
const objclone = { ...obj }




















A Shallow Copy in Arrays

Re-assigning top-level properties of the copy does not affect the source object.


const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
ingredientsListCopy[0] = "rice noodles";
console.log(ingredientsList[0]); // noodles
console.log(JSON.stringify(ingredientsListCopy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredientsList));
// ["noodles",{"list":["rice flour","water"]}]


Re-assigning nested object properties of the copy does affect the source object.

ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array [ "rice flour", "water" ]
