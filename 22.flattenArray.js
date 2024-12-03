// ip: [1,[2, [3,4],[7,5]],6]
// Op: [1,2,3,5,7,5,6]

function flattenArray(arr){
    let res = []
    for(let i =0; i< arr.length; i++){
        // console.log(arr[i])
        if(Array.isArray(arr[i])) {
            res = res.concat(flattenArray(arr[i]))
        }else res.push(arr[i])
    }
    return res
}

console.log(flattenArray([1,[2, [3,4],[7,5]],6]))