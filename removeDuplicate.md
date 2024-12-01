function removeDuplicate(arr){
    let result = []
    // for(let i =0; i<arr.length; i++){
        for(let num of arr){  // .indexOf Method return index of First occurence if Found
        if(result.indexOf(num) === -1){ // .indexOf Method return -1 if value not Found                                          
            result.push(num)
        }
    }
    console.log(result)
}
removeDuplicate([1,4,35,45,4,5,7,6,2,3,2,2,4,5,6,9,])

function removeDuplicateMethod(arr){
    // return Array.from(new Set(arr))
    return [...new Set(arr)]
}

console.log(removeDuplicateMethod([1,4,35,45,4,5,7,6,2,3,2,2,4,5,6,9,]))