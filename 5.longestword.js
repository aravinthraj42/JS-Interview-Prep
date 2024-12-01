function longest(str){
    let words = str.split(' ')
    let result = words[0]
    for(let s of words){
     if(s.length > result.length){
         result = s
     }
    }
    return result 
}
console.log(longest("I am Aravinth Raj I Love Javascript and React"))