//smallest common multiple
function smallestCommons(arr){
  arr.sort(sortDescending);
  let rangeArr = findRange(arr);
  var initial = arrayBase(arr[0]);
  console.log(`initial: ${initial}`);
}

function sumPrimes(num) {
  var primeArray = [2];
  for(let i = 2; i <= num; i++){
    if(isPrime(i)){
      primeArray.push(i);
    }
  };
  var seed = primeArray.reduce(function(accumulator, currentValue){
    return accumulator * currentValue;
  })
  return seed;
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
function arrayBase(num){
  var primeCount = sumPrimes(num);
  return primeCount;
}

function findRange(arr){
  var highEnd = arr[0];
  var lowEnd = arr[arr.length - 1];

  var arr2 = [];
  for(let i = highEnd; i >= lowEnd && i > 0; i--){
  arr2.push(i);
  }
  return arr2;
}

function sortDescending(a,b){
  return b-a;
}

function createArray(arr){
  var num = arr[0];
  var multsArr = [];
  // Bring in an array and filter out those items not divisible by elements using the product of primes as the size for the initial array
  /* for(let i = 1; i < 30; i++){
    if((num * i) % 5 === 0 && (num * i) % 4 === 0 && (num * i) % 3 == 0 && (num * i) % 2 === 0 && (num * i) % 1 === 0){
      multsArr.push(num * i);
    }
  } */
  return multsArr;
}
console.log()
//console.log(createArray([5,4,3,2,1]));
//console.log(`gcd array ${tryThis([5,4,3,2,1])}`);
//console.log(arrayBase([13]));
console.log(smallestCommons([1,5]));
//console.log(greatestCommonDivisor([26,13]));
//console.log(rangeLCM([5,4,3,2,1],1));