//smallest common multiple
//noprotect
function smallestCommons(arr){
  arr.sort(sortAscending);
  var count = arr[1];
  let rangeArr = findRange(arr);
  let gcd = greatestCommonDivisor(arr);
  let lcm = lowestCommonMulitple(arr, gcd);
  let overallLCM = rangeLCM(rangeArr, gcd, count);
  console.log(`
  arr: ${arr}
  rangeArr: ${rangeArr}
  count: ${count}
  gcd: ${gcd}
  lcm: ${lcm}
  overallLCM: ${overallLCM}
  `)
  return overallLCM;
}

function rangeLCM(arr, gcd, count){
  for(let i = 0; i < arr.length; i++){
    if(gcd % arr[i] === 0){
      console.log(`gcd: ${gcd} is divisible by ${arr[i]}`);
    }else{
      console.log(`
      gcd: ${gcd} is not evenly div by ${arr[i]}
      i: ${i}
      count: ${count}`);
      count++;
      gcd = count * arr[arr.length - 1];
      console.log(gcd);
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

/* console.log(`
  Recieved 
  a: ${a}
  b: ${b}
  (a/b).toFixed(0): ${(a/b).toFixed(0)}
  gcd: ${a%b}
  refinedGCD: ${refinedGCD}
  `);   
 */
  if(gcd > 0){
    var refinedGCD = gcd;
    return greatestCommonDivisor([b,(gcd)], refinedGCD);
  }else{
    return refinedGCD;
  }
}

function findRange(arr){
  var finalNum = arr[arr.length - 1];
  var arr2 = [];
  for(let i = arr[0]; i <= finalNum; i++){
  arr2.push(i);
  }
  return arr2;
}

function sortAscending(a,b){
  return a-b;
}

console.log(smallestCommons([1,13]));