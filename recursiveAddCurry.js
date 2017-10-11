function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
    //  fn.length (3) arity
        return function curriedFn(...args){
                    if(fn.length === args.length){
                        return fn.apply(null, args);
                    }
                    else{
                        return function(...nextArgs){
                            return curriedFn.apply(null, [...args,...nextArgs]);
                        }
                    }
        }
}

const curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)) // 6
console.log(curriedSum(1)(2)(3)) // 6
console.log(curriedSum(1, 2)(3)) // 6





























