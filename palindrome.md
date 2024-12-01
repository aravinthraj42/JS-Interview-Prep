function palindrome(str){
  const len = str.length

  for(let i =0; i<len/2; i++){
    // console.log(str[i],str[len-i-1])
   if(str[i] !== str[len-i-1]){
       return 'Not Palindrome'
   }
  }
  return 'Palindrome'
    // return str.split('').reverse().join('') === str
}
// console.log(str)
// console.log(str.toString().split('').reverse().join(''))
console.log(palindrome('MADA5M'))