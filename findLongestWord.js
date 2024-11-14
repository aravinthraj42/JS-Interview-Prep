function longestword(arr){
    let str = arr.split(' ')
    console.log(str)
    let longestword = str[0]

   //  for(let i =0; i = str.length; i++){
       // if(str[i].length> longestword.length)
       // longestword =str[i]
    for(let s of str){
        if(s.length > longestword.length){
            longestword = s
        }
    }
return longestword
}

console.log(longestword('My Name is Aravinth I Love Javascript'))