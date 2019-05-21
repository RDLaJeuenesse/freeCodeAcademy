//smallest common multiple
//noprotect
function smallestCommons(arr){
  arr.sort(sortDescending);
  console.log(arr);
  let rangeArr = findRange(arr);
  console.log(rangeArr);
  var count = Math.pow(arr[0],findCountStart(rangeArr[0]));
  console.log(`count: ${count}`);
  //let gcd = greatestCommonDivisor(arr);
  //let lcm = lowestCommonMulitple(arr, gcd);
  //let overallLCM = rangeLCM(rangeArr, gcd, count);
  //return overallLCM;
}
//noprotect
function rangeLCM(arr, gcd, count){
  for(let i = 0; i < arr.length; i++){
    if(gcd % arr[i] === 0){
    }else{
      count = count + arr[0];
      gcd = count + arr[0];
      return rangeLCM(arr,gcd,count);
    }
  }
  return gcd;
}

function lowestCommonMulitple(arr, gcd){
  var lcm = (arr[0] * arr[1]) / gcd;
  return lcm;
}

function greatestCommonDivisor(arr,innerCount){ 
  var a = arr[0];
  var b = arr[1];
  var rem = a%b; 
  if(rem === 0){
    return b;
  }else{
    innerCount++;
    a = a - b;
    b = rem;
    return greatestCommonDivisor([a,b]);
  }
}
function sumPrimes(num) {
  var primeArray = [2];
  for(let i = 2; i <= num; i++){
    if(isPrime(i)){
      primeArray.push(i);
    }
  };
  console.log(`primeArray: ${primeArray}`);
  console.log(`primeArray.length: ${primeArray.length}`);
  return primeArray.length;
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
function findCountStart(num){
  var primeCount = sumPrimes(num);
  return primeCount - 1.5;
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

//console.log(findCountStart([13]));
console.log(smallestCommons([3,13]));
//console.log(greatestCommonDivisor([1,13]));
//console.log(rangeLCM([5,4,3,2,1],1,5));