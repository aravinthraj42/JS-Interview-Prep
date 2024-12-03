function largestNumberinNested(arr){
// let max = Number.NEGATIVE_INFINITY

function traverse(arr){
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            res = res.concat(traverse(arr[i]))
        }else res.push(arr[i])
        
    }
    return res
}
let result = traverse(arr)
// console.log(...result)
return Math.max(...result)
}
console.log(largestNumberinNested([[3,4,58],[709,8,9],[10,11], [111,2]]))


function largestNumberinNest(arr){
    let max = Number.NEGATIVE_INFINITY

function traverse(arr){
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            traverse(arr[i])
        }else if(arr[i] > max){
          max = arr[i]
        }
    }
}
traverse(arr)
return max
}
console.log(largestNumberinNest([[3,4,58],[709,8,9],[10,11], [111,2]]))