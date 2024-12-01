// sum(2,3,4)---> sum(2)(1)(3)

function sum(a){
    return function(b){
        return function (c){
            return a+b+c
        }
    }
}

console.log(sum(2)(1)(3))


// Question -2
// evaluate("sum")(2)(3)
// evaluate("sub")(2)(3)
// evaluate("mul")(2)(3)
// evaluate("divide")(2)(3)

function evaluate(operator){
    return function(a){
        return function(b){
            if(operator === 'sum'){
                return a+b;
            }else if(operator === 'sub') {
                return a-b;
            }else if(operator === 'mul'){
                return a*b;
            }else if(operator === 'divide'){
                return a/b ;
            }else return 'Invaild Operator'
        }
    }
    }
    
    // console.log( evaluate("sum")(2)(2));
    // console.log(evaluate("sub")(4)(3));
    // console.log(evaluate("mul")(2)(3));
    // console.log(evaluate("divide")(10)(2));
    // console.log(evaluate("No")(9)(4))


    const mul = evaluate("mul")
  console.log(mul(3)(4))


  //Infinte Currying
function add(a){
    return (b) =>{
        if(b) return add(a+b)
        else return a;
        
    }
}


console.log(add(1)(2)(5)())


//Partial Currying
function sum (a){
    return function (b,c){
        return a + b + c
    }
}
const add = sum(3)
add(1,2)
console.log(sum(1)(2,3))


// Manipulate DOM

function updateDOM(id){
    return function(content){
        document.querySelector(`#${id}`).textContent= content;
    }

}

const updateName = updateDOM("heading")
updateName("Raj")
// console.log()



------- Currying Implementation

function curry(func){
return function curriedFunction(...args){
    if(args.length >= func.length){
        return func(...args)
    }else{
        return function (...next){
            return curriedFunction(...args, ...next)
        }
    }
}
}

const sum = (a,b,c,d,f) => a + b + c +d +f
const calling = curry(sum)

console.log(calling(1,2,4,6,7))