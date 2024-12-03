function findsmallestWords(arr){
   let words = arr.trim().split(/\s+/);
   console.log(words)
   let smallestWords = words[0]

   for(let small of words){
       if(small.length < smallestWords.length)
       smallestWords = small
   }
   return smallestWords
}

console.log(findsmallestWords('My    a name is Aravith Rah Love JS'))