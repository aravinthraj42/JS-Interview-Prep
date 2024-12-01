function maxNumber(arr){
    if(arr.length == 0) {
     return undefined;
    }
    let max= arr[0]
    // for(let i = 0; i<=arr.length; i++){
    // if(arr[i]>max) max =arr[i]
    //}
    for(let num of arr){
        if(num > max){
            max = num
        }
    }
    return max
}

console.log(maxNumber([10,20,30,405,5343,540,20,12,132]))