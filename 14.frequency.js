function isSameFrequenct(arr1,arr2){


if(arr1.length !== arr2.length){
    return false
}
let arrFrq1 = {}
let arrFrq2 = {}


for(let val of arr1){
arrFrq1[val] = (arrFrq1[val] || 0) +1
}
for(let val of arr2){
arrFrq2[val] = (arrFrq2[val] || 0) +1
}
// console.log(arrFrq1, arrFrq2)

for(let key in arrFrq1){
    if(!key*key in arrFrq2) return false
    if(arrFrq1[key] !== arrFrq2[key*key]) return false
}
return true
}

console.log(isSameFrequenct([1,2,3],[9,4,1]))