let count = 0;

(function immdiate(){
    if(count == 0){
        let count = 1
        console.log('Inse IF block', count)  // 1
    }
    console.log(count); // 0
})()