function isAnagrams(str1, str2){
    let sortedstr1= str1.split('').sort().join('');
    let sortedstr2= str2.split('').sort().join('');
    return sortedstr1 === sortedstr2

    
}

function areAnagrams(str1, str2){
if(str1.length!== str2.length) return false

function manualsort(str){
    let res = []
    let n = str.length -1
    // Covert string to array
    for(let i =0; i< n.length;i++){
     res.push(str[i])
    }
    for(let i = 0; i<n-1; i++){
        for(let j =0; j< n-i-1; j++){
            if(res[j] > res[j+1]){
            let temp = res[j]
            res[j] = res[j+1]
            res[j+1] = temp
            }
        }
    }
}
let sorted1 = manualsort(str1)
let sorted2 = manualsort(str2)
return sorted1 === sorted2

}

console.log(areAnagrams('slients', 'listen'))