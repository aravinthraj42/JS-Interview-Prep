function sortData(arr1,arr2){
//  let result = [...arr1, ...arr2]
// //  result.toSorted((a,b) => a-b)
//  console.log( result.toSorted((a,b) => a-b))

let i= 1;
let j =1;

let array1 = arr1[0]
let array2 = arr2[0]
let mergeArray = [];

while(array1 || array2){
    if(array2 === undefined || array1 < array2){
        mergeArray.push(array1)
        array1 = arr1[i]
        i++
    } else{
        mergeArray.push(array2)
        array2 = arr2[j]
        j++
    }
}
console.log(mergeArray)
}

sortData([0,3,4,3,1], [4,6,30])