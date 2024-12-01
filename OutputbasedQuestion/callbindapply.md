####
A call method call the functin with given values(object) and arguments Provided Indivdually
const obj ={
    name: 'Aravinth'
}

function myFunc(age){
    return this.name +' '+age;
}

console.log(myFunc.call(obj , 24))


###

const obj ={
    name: 'Aravinth'
};

function myFunc(day, status){
    return this.name + ' '+ day + ' ' + status
}
console.log(myFunc.apply(obj,['Sunday', 'Feels Good'])) //Aravinth Sunday Feels Good


### Bind
const obj ={
    name: 'Aravinth'
};

function myFunc(day, status){
    return this.name + ' '+ day + ' ' + status
}
const fun = myFunc.bind(obj,['Sunday', 'Feels Good'])
console.log(fun()) 


###

const arr = [1,2,3,4]
let elements = [0,2,4]
// arr.push(elements)
// console.log(arr) // [ 1, 2, 3, 4, [ 0, 2, 4 ] ]
arr.push.apply(arr, elements)
console.log(arr)