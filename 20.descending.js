function descending(arr){
    let n = arr.length;
    for(let i = 0; i< n-1; i++){
        for(let j =0; j< n-i-1; j++){
            if(arr[j]< arr[j+1]){          
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
              }
        }
    }
    return arr
}

console.log(descending([2,1,4,6,84,5,8,90,51]))