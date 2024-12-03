// 1,2,3,4,5,6,7,8,9
//input2: 10
//op:[[4,6],[3,7],[2,8],[1,9]]

function findpairs(input1,input2){
    const pairs = [];
    const seen = new Set()

    for(let num of input1){
       const complement = input2 - num
       if(seen.has(complement)){
        pairs.push([complement ,num])
       }
       seen.add(num)
    }
    return pairs
}

console.log(findpairs([1,2,3,4,5,6,7,8,9],10))