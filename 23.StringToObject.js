function stringToObject(str, finalVal){

    const key = str.split('.')

    let result = {}
  
    let current = result;

    for(let i =0; i< key.length; i ++){
        const keys = key[i]
        // console.log(keys)
        current[keys] = (i === key.length-1) ? finalVal :{}
        // console.log(current[keys])
        current = current[keys]
        console.log(current)
    }
    return result;

}

console.log(stringToObject("a.b.c", "someValue"))