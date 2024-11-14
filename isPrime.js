function isPrime(num){
    if(num<=1){
        return false
    }
    for(let i =2; i<= Math.sqrt(num); i++){
        if(num%i ===0){
            return false // Any Number Divde by 2,3,4 till number is not Prime
        }

    }
     return true
}

console.log(isPrime(13))