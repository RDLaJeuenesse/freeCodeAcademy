//smallest common multiple
//noprotect
function smallestCommons(arr){
  arr.sort(sortDescending);
  //console.log(arr);
  //var count = arr[1];
  let rangeArr = findRange(arr);
  //console.log(rangeArr[rangeArr.length - 1]);
  //console.log(rangeArr[rangeArr.length - 2]);
  var count = arr[0];
  //console.log(rangeArr);
  let gcd = greatestCommonDivisor(arr);
  console.log(gcd);
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
  //console.log(arr);
  for(let i = 0; i < arr.length; i++){
    if(gcd % arr[i] === 0){
      /* console.log(`
      if executes for mod = 0
      gcd: ${gcd} evenly divisible by arr[i]: ${arr[i]}
      count: ${count}`); */
    }else{
     /*  console.log(`
      else exicutes to rerun rangeLCM when mod = 0 is not possible
      gcd: ${gcd} is not evenly div by ${arr[i]}
      i: ${i}
      count: ${count}
      `); */
      count++;
      gcd = count * arr[0];
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

function greatestCommonDivisor(arr, refinedGCD){ 
  var a = arr[0];
  var b = arr[1];
  var gcd = a%b; 

  /*console.log(`
  Recieved greatestCommonDivisor
  a: ${a}
  b: ${b}
  (a/b).toFixed(0): ${(a/b).toFixed(0)}
  gcd: ${a%b}
  refinedGCD: ${refinedGCD}
  `); */
  if(gcd > 0){
    var refinedGCD = gcd;
    return greatestCommonDivisor([b,gcd], refinedGCD);
  }else{
    return refinedGCD;
  }
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
console.log(smallestCommons([6,2]));
//console.log(greatestCommonDivisor([1,13]));
//console.log(rangeLCM([5,4,3,2,1],1,5));