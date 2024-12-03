function conCurreny(str){
const charCount = {}
const n = str.length

for(let i =0; i<n; i++){
    const char = str[i]
    charCount[char] = (charCount[char] || 0)  + 1

}
return charCount
}
console.log(conCurreny('abcaabbce'))