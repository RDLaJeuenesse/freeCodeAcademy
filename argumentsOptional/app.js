//argumentsOptional
function addTogether(...args) {
  for(let i = 0; i < args.length; i++){
    console.log(args[i]);
    if(args[i] !== Number()){
      console.log(`not a number: ${args[i]}`)
      return undefined;
    }
  }
  return false;
}

console.log(addTogether("http://bit.ly/IqT6zt"));