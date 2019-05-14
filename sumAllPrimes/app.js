//Sum all Primes
function sumPrimes(num) {
  var primeArray = [2];
  for(let i = 2; i <= num; i++){
    if(isPrime(i)){
      primeArray.push(i);
    }
  }
  let sum = primeArray.reduce(function(acc, cv){
    return acc + cv;
  });
  return sum;
}

function isPrime(num){
  var amIPrime;
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return amIPrime = false;
    }else{
      amIPrime = true;
    }
  }
  return amIPrime;
}

console.log(sumPrimes(977));