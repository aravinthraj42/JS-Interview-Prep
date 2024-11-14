//1.
console.log(3+2 +'7') // 57

//When JavaScript encounters a + operation with at least one 
// string operand, it tends to favor string concatenation over arithmetic.
//he + operator is both an arithmetic operator 
// (for numbers) and a concatenation operator (for strings).
// For Example if we have 
console.log('hi'+7) // hi7
console.log(Number('hi') + 7) // NaN ==> false + 7 = NaN


//2.
// console.log(3++) ---> // SyntaxError Invalid left-hand side expression in postfix operation
/* you can't apply these directly to a number, which might seem strange, but we are assigning a 
variable a new updated value, not operating on the value itself. */

//3.
console.log('3' * '2'); // 6
console.log('3' - '2') // 1
//Here, * - only works with numbers, so both '3' and '2' are coerced to numbers.

//4. 
console.log("5"-1) // 4 -- No String Minus Operator So Convert to Number


//5. 
const a = 1<2<3; // true<3 --> 1<3 - true
const b = 1>2>3; // false>3 --> 0>3 - false
console.log(a,b)


//6. 
const p = {k:1, 1:2}
const q = {k:1, 1:2}

let isEqual = p==q
let isStartqual = p ===q

console.log(isEqual, isStartqual) // False , False

// In javascrip when Compare the Object using == or === you are actually 
// compare the memory not their actual Contents Even If they have same value 

//7.

const c = {k:1, 1:2}
const d = c

let isEqualC = c==d
let isStartqualD =  c ===d

console.log(isEqualC, isStartqualD) // true true


//.8
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
  };
  
  const obj2 = obj1;
  
  obj2.b = 5;
  
  console.log(obj1.b, obj2.b) // 5,5
// Both are store in Same refernece/ memory so the 
// Any change the new value will reflect the old one


//9.
const obj3 = {
    a: 1,
    b: 2,
    c: {d:4}
  };
  
  const obj4 = {...obj3}; // USING Spread Operator it will store in different Memory location
  //creates a shallow copy of the object obj3 and assigns it to obj4
  //Each key-value pair from obj3 is copied into obj4.

  // NOTE:: If obj3 contains nested objects or arrays, obj4 will reference the same nested objects
  
  let obj5 = JSON.parse(JSON.stringify(obj3)) // Deep Copy
  obj4.b = 5;
  obj4.c.d = 6

  obj5.c.d = 10
  
  console.log(obj3.b, obj4.b)  // 2 5
  console.log(obj3.c, obj4.c) // { d: 6 } { d: 6 }
  /// If you wants Copied the Nested thing we can use deep copy
//   If you need a deep copy (where nested objects are also copied), 
// you can use methods like JSON.parse(JSON.stringify(obj3)) 
// -->  obj5 = JSON.parse(JSON.stringify(obj3))
console.log(obj3.c, obj4.c, obj5.c) // { d: 6 } { d: 6 } { d: 10 }


//10. Guess the output

console.log(2+2)// 4
console.log('2'+'2') // 22
console.log(2+2-2) //2
console.log('2'+'2'-'2') // 20 // String don't have minus => Js converts to Number 22-2= 20
console.log(4+'2'+2+4+'25'+2+2) // 42242522


//11.
let x = 'jscafe'
x[0] = 'c' // x =cscafe
console.log('x:',x)

// String are Immutable in Js so we cannot Change Individul Values for Index
//If we want we can create new string with desired modifications


///12.

console.log(NaN === NaN) // false
console.log(NaN == NaN) // false


//NaN, use Number.isNaN() or isNaN() to most clearly determine whether a value is NaN
isNaN(NaN); // true
isNaN(Number.NaN); // true
Number.isNaN(NaN); // true

const arr1 = [2, 4, NaN, 12];
arr1.indexOf(NaN); // -1 // IndexOf return -1 in NaN
arr1.includes(NaN); // true

// Methods accepting a properly defined predicate can always find NaN
arr1.findIndex((n) => Number.isNaN(n)); // 2

NaN ** 0 === 1; // true --> NaN ** 0 = 1

isNaN("hello world"); // true
Number.isNaN("hello world"); // false
// the former will return true if the value is currently NaN, 
// or if it is going to be NaN after it is coerced to a number, 
// while the latter will return true only if the value is currently NaN


//13.

console.log(undefined === undefined) // true0 
console.log(undefined == undefined) // true

console.log('Null',null === null)
console.log('Null',null == null)

// typeOf(undefined) ==> undefined

//14. Symbol is new data type Introduced in ES6 to store unqiue and Anonymous Values
// primitive Data type
var symbol = Symbol('symbol')

const sym1 = Symbol();  // Symbol()
const sym2 = Symbol("foo"); //Symbol(foo)
const sym3 = Symbol("foo"); // Symbol(foo)

console.log(sym3)
console.log(Symbol("foo") === Symbol("foo")); // false
//  Different Refernece

// const sym = new Symbol(); // TypeError: Symbol is not a constructor
// console.log(sym)

//primitive data types is generally 
// possible (for example, new Boolean, new String and new Number).

//15. 
let arr = [1,2,3,4]
console.log(typeof(arr)) // Object

//Note: It is Important to remember that any data tupe that is not Primitive data type
// its a Object in Javascript

//Object is use to store the Collection Data 





