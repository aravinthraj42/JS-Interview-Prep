function findEvenNumbers(arr){
    let res = []
    for( let num of arr){
        if(num % 2 === 0){
            res.push(num)
        }
    
    }
    console.log(res)
}
findEvenNumbers([1,2,3,4,5,6,7,8,9,10,11,13,14,15,17,19,21,16])