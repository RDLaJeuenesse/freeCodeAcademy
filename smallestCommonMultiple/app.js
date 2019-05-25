//smallest common multiple
function smallestCommons(arr){
  let gcd = greatestCommonDivisor(arr);
  arr.sort(sortDescending);
  //console.log(arr);
  //var count = arr[1];
  let rangeArr = findRange(arr);
  console.log(rangeArr);
  var count = Math.pow(arr[0],findCountStart(rangeArr[0]));
  console.log(`count: ${count}`);
  //console.log(rangeArr);
  let gcd = greatestCommonDivisor(arr);
  //console.log(gcd);
  let lcm = lowestCommonMulitple(arr, gcd);
  let overallLCM = rangeLCM(rangeArr, gcd, count);
/*   console.log(`
  arr: ${arr}
  rangeArr: ${rangeArr}
  count: ${count}
  gcd: ${gcd}
  lcm: ${lcm}
  overallLCM: ${overallLCM}
  `) */
  return overallLCM;
}
//noprotect
function rangeLCM(arr, gcd, count){
  for(let i = 0; i < arr.length; i++){
    if(gcd % arr[i] === 0){
      console.log(`
      if executes for mod = 0
      gcd: ${gcd} evenly divisible by arr[i]: ${arr[i]}
      count: ${count}`);
    }else{
     console.log(`
      else exicutes to rerun rangeLCM when mod = 0 is not possible
      gcd: ${gcd} is not evenly div by ${arr[i]}
      i: ${i}
      count: ${count}
      `);
      count = count + arr[0];
      gcd = count + arr[0];
      //noprotect
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
  //console.log(gcd);
/*   console.log(`
  Recieved greatestCommonDivisor
  a: ${a}
  b: ${b}
  (a/b).toFixed(0): ${(a/b).toFixed(0)}
  rem: ${a%b}
  innerCount: ${innerCount}
  `);  */
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
  return primeCount - 2;
}

function findRange(arr){
  var finalNum = arr[0];
  var arr2 = [];
  for(let i = finalNum; i <= finalNum && i > 0; i--){
  arr2.push(i);
  }
  return arr2;
}

function sortDescending(a,b){
  return b-a;
}

//console.log(findCountStart([13]));
console.log(smallestCommons([1,13]));
//console.log(greatestCommonDivisor([1,13]));
//console.log(rangeLCM([5,4,3,2,1],1,5));
