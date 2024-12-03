// function reverse(str){
//     return str.toString().split('').reverse().join('')
//     //return [...str].reverse().join('')
// }

// console.log(reverse('Aravinth'))

function reverse(str){
    let reverse = ''
    for(let i = str.length-1; i>=0; i--){
        reverse+=str[i]
    }
    return reverse
}

console.log(reverse('Aravinth'))