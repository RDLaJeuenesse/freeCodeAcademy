//smallest common multiple
//noprotect
function smallestCommons(arr){
  arr.sort(sortDescending);
  //console.log(arr);
  let rangeArr = findRange(arr);
  //console.log(rangeArr);
  var gcd = findCountStart(arr[0]);
  console.log(`count: ${count}`);
  //let gcd = greatestCommonDivisor(arr);
  //console.log(`returned gcd: ${gcd}`);
  let lcm = lowestCommonMulitple(arr, gcd);
  console.log(`returned lcm: ${lcm}`);
  let overallLCM = rangeLCM(rangeArr, gcd, count);
  //return overallLCM;
}
//noprotect
function rangeLCM(arr, gcd){
  for(let i = 0; i < arr.length; i++){
    if(gcd % arr[i] === 0){
      console.log(`
      first run:
      arr : ${arr}
      gcd: ${gcd}`);
    }else{
      console.log('nope');
      gcd = gcd + arr[0];
      return rangeLCM(arr,gcd);
    }
  }
  return gcd;
}

function lowestCommonMulitple(arr, gcd){
  var lcm = (arr[0] * arr[1]) / gcd;
  return lcm;
}

function greatestCommonDivisor(arr){ 
  var a = arr[0];
  var b = arr[1];
  var rem = a%b; 
  if(rem === 0){
    return b;
  }else{
    //a = a - b;
    b = b - rem;
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
  var seed = primeArray.reduce(function(accumulator, currentValue){
    return accumulator * currentValue;
  })
  console.log(`
  num: ${num}
  primeArray.length ${primeArray.length}
  `);
  return seed * (num - primeArray.length);
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

function tryThis(arr){
  var gcdArr = [];
  var lcmArr = [];
  arr.forEach(element => {
    gcdArr.push(greatestCommonDivisor([arr[0],element]))
  });
  var gcd = gcdArr.reduce(function(a,b){
    return Math.min(a,b);
  });
  console.log(`gcdArr length after reduce: ${gcdArr.length}`);
  //var count = 0;
  //while(count < gcdArr.length){
    console.log(`arr: ${arr}`);
  arr.forEach((element,index) => {
    /* console.log(`
    element: ${element}
    index: ${index}
    next element: ${gcdArr[index + 1]}
    `); */
    lcmArr.push(lowestCommonMulitple([element,arr[index + 1]],gcd));
  })
  var pickle = lcmArr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  })
  console.log(`lcmArr: ${lcmArr}`);
  console.log(`pickle: ${pickle}`);
  console.log(`This is the highest common gcd: ${gcd}`);
  return gcdArr;
}13

console.log()
console.log(`gcd array ${tryThis([13,12,11,10,9,8,7,6,5,4,3,2,1])}`);
//console.log(findCountStart([13]));
//console.log(smallestCommons([1,13]));
//console.log(greatestCommonDivisor([26,13]));
//console.log(rangeLCM([13,12,11,10,9,8,7,6,5,4,3,2,1],210210));
//console.log(rangeLCM([13,12,11,10,9,8,7,6,5,4,3,2,1]));