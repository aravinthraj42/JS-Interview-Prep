function MaxNumber(arr){
    if(arr.length === 0) return undefined

    let maxNumber = 0
    for(let i =0; i <arr.length; i++){
     if(arr[i]> maxNumber){
         maxNumber = arr[i]
     }
    }
    return maxNumber
}

console.log(MaxNumber([3,4,5,73,533,254]))