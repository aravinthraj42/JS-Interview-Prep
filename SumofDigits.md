let nums = 100

let str = nums.toString().split('')
// console.log(str)

let sum = str.reduce((acc,curr) => {
let result = Number(acc) + Number(curr)
return result
}
)