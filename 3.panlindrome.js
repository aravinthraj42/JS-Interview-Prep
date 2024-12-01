function palindrome(str){
    return str.toString().split('').reverse().join('') === str
}

console.log(palindrome('pop'))


function palindromeStr(str){
    let len = str.length
    for(let i = 0; i<len/2; i++){
        console.log(str[len-1-i])
        if(str[i] !== str[len-1-i]){
           
            return false
        }
    }
    return true
}
console.log(palindromeStr('pooop'))