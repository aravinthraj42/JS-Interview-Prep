function productOfNextTwo(arr){
    let res = []
    let product;
for(let i =0; i< arr.length; i++){
    // console.log(arr[i])
     let next1 = arr[(i+1)%arr.length]
     let next2 = arr[(i+2)%arr.length]
    product = next1 * next2
    res.push(product)
    
}
console.log(res)
}

productOfNextTwo([3,4,5])