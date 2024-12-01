Map
const multiplethree = nums.map((num, i)=>{
    return num*3
})

console.log(multiplethree)

Filter

const greaterthantwo = nums.filter((num,i)=>{
// return num*3 // will return [1,2,3,4] not error
return num > 2
})

console.log(greaterthantwo)



Reduce

const sum = nums.reduce((prev,curr)=>{
    return prev + curr
},0)

console.log(sum)


Polyfills for Map

// Array.map(currentValue,index,Array)
Array.prototype.mymap = function(cb){
    let temp = []
    for(let i =0; i<this.length;i++){
     temp.push(cb(this[i],i,this));
    }
    return temp;
}

const multiplethree = nums.mymap((num, i)=>{
    return num*3
})

console.log(multiplethree)


Polyfills for Filter

//Array.filter(currentVale,index,Array => curentvale>2)
Array.prototype.myFilter = function(cb){
    let temp = []
    for(let i =0; i<this.length; i++){
        if(cb(this[i],i,this))temp.push(this[i])
    }
    return temp;
}

const greaterthantwo = nums.myFilter((num,i)=>{
    // return num*3 // will return [1,2,3,4] not error
    return num > 2
    })
    
    console.log(greaterthantwo)


    Polyfills for Reducee

    // Arrau.reduce((acc,curr,i,Array)=> acc +curr)

Array.prototype.myRedue =function(cb,intialValues){
    let accumulator = intialValues

    for(let i =0; i<this.length; i++){
        accumulator =  accumulator ? cb(accumulator,this[i],i,this): this[i]
    }
    return accumulator
}


const sum = nums.reduce((prev,curr)=>{
    return prev + curr
})

console.log(sum)



// Map vs for.Each

//1. Map return new Array
//1. ForEach Modify the existing Array
//2. Chaining is allowing in Map
//2. chaning is not possible since Modify Existing Array


// const mapResult = nums.map(num =>  num*2)
const mapResult = nums.map(num =>  num*1).filter(num => num >2) // --> Chaining
console.log(mapResult) // [ 2, 4, 6, 8 ]

const forEachResult = nums.forEach(num =>  num*2)
console.log(forEachResult) // Undefined

 nums.forEach((num, i)=>{
nums[i] = num +2
})
console.log(nums) // [ 3, 4, 5, 6 ]

-------------------------------------------------------
let students = [
    {name:'Aravinth', rollNumber: 10, marks:  98},
    {name:'Raj', rollNumber: 21, marks:  28},
    {name:'Nandhini', rollNumber: 7, marks:  48},
    {name:'Arav', rollNumber: 45, marks:  88}
]
// Traditional For Loops
let names = []

for(let i =0; i< students.length; i++){
    names.push(students[i].name.toUpperCase())
}
console.log(names)

// Map
const studentsNames = students.map((stud)=> stud.name.toUpperCase())

console.log(studentsNames)



// Filter
let marksgreaterthansixty = students.filter(stud => stud.marks >60) 
console.log(marksgreaterthansixty)

let marksandRollNumber = students.filter(stud => stud.marks >60 && stud.rollNumber >15) 
console.log(marksandRollNumber)

// Reduce -- total number of Marks

const total = students.reduce((acc,curr) => acc + curr.marks, 0)
console.log(total)

// Chanining
let nameofStudents = students.filter(stud => stud.marks > 60).map(st => st.name)

console.log(nameofStudents)



let totalMarks = students.map((stud) =>{
    if(stud.marks < 60){
        stud.marks += 20
    }
    return stud
}).filter(stu => stu.marks > 60).reduce((acc,curr) => acc +curr.marks ,0)



console.log(totalMarks)