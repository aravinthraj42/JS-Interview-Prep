function smallestword(arr){
    let words = arr.split('') // Only able to Split String Not Array ->
                             /// If try to Split Array It will throw Error
    let smallest = words[0]
    
    for(let small of words){
        if(small.length < smallest.length)
         smallest = small
    }
    return smallest
}
console.log(smallestword('My Name is a Aravinth Raj'))
