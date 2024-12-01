function reverse(str){
    let result = ''
    // return str.toString().split('').reverse().join('')
for(let i = str.length-1; i >=0; i--){
    result += str[i]
}
return result

}
console.log(reverse('Aravinth Raj'))
// reverse('Aravinth Raj')