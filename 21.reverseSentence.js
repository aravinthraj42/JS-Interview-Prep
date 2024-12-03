function reverseSentence(str){
    if(str.length === 0) return undefined

    let words = '';
    let reverseSent = ''
    for(let i =0; i<str.length; i++){
      if(str[i] !== ' '){
       words = words + str[i];
    //    console.log(words)
      }else{
          reverseSent = words + ' ' + reverseSent
        //   console.log(reverseSent)
          words = '';
      }
      
    }
    reverseSent = words + ' ' + reverseSent
    console.log(reverseSent)
}
reverseSentence('CharGPT is Awesome')


function reversewordshift(str){
    let words =[]
    let wordStart = 0

    for(let i =0; i< str.length; i++){
    if(str[i] === ' '){
        words.unshift(str.substring(wordStart , i))
        wordStart = i +1
    }else if(i === str.length-1){
       words.unshift(str.substring(wordStart, i+1 ))
    }
}
console.log( words.join(' ') );
}

reversewordshift('Chat is Awesome')