function sortAscending(arr){
    let len = arr.length

    for(let i =0; i <len-1; i++){
        for(let j =0; j < len-i-1; j++){
            if(arr[j] > arr[j+1]){
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
            }
        }

    }
    return arr
}

console.log(sortAscending([50,5,3,2,9,4,5,6]))