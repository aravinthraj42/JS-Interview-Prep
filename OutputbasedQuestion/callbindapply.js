const numbers = [5, 6, 2, 3, 7];

console.log(Math.max.apply(null,numbers))
console.log(Math.min.apply(null,numbers))

max = -Infinity, min = +Infinity;
for(let i = 0; i <= numbers.length; i++){
    if(numbers[i]>max){
        max = numbers[i]
    }

}

for(let i = 0; i <= numbers.length; i++){
    if(numbers[i]<min){
        min = numbers[i]
    }

}

console.log(min,max)