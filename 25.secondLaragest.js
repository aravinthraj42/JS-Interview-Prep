function secondLargestFunction(arr){
    if(arr.length< 2) return new Error('Array must contains two values')
    let largest = arr[0] // -Infinity
    let secondLargest = 0 // -Infinity
    for(let a of arr){
        if(a > largest){
            secondLargest = largest
            largest = a
        }else if(a>secondLargest && a < largest){
            console.log('inside else')
                 secondLargest = a
        } 
    }
    if(secondLargest === -Infinity) return new Error('No Second Largest in Array')
    return secondLargest
}

console.log(secondLargestFunction([1,2,3,4,20,15,12,5,3]))