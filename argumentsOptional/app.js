//argumentsOptional
function addTogether(...args) {
  for(let i = 0; i < args.length; i++){
    if(!checkIt(args[i])){
      return undefined;
    };
  }
  if(args.length === 1){
    var firstNum = args;
    return function(...args){
      for(let i = 0; i < args.length; i++){
        if(!checkIt(args[i])){
          return undefined;
        };
      }
      return parseInt(args) + parseInt(firstNum);
    };
  }else{
    var argsSum = args.reduce(function(acc, cv){
      return acc + cv;
    })
    return argsSum;
  }
}
function checkIt(num){
  if(typeof(num) !== 'number'){
      return undefined;
    }
  return num;
}

console.log(addTogether(2)([3]));