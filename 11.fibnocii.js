function fib(num){ 
    if(num <=0) return []
     else if (num == 1) return [0]
     let res = [0,1]

    for(let i = 2; i<num; i++){
        const next = res[i-1] + res[i-2]
        res.push(next)
    }
return res
}
console.log(fib(3))

// 1 1 ,2,3,5,8,12