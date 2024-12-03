function sumofThirdNumbers(number){
    let sum =0
    for(let i = 2; i<number.length; i+=3){
        console.log(number[i])
        sum +=number[i]
    }
    return sum
}

console.log(sumofThirdNumbers([1,2,3,4,5,6,7,8,9,10,11,12]))