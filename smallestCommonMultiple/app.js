//smallest common multiple
function smallestCommons(arr){
  arr.sort(sortAscending);
  var rangeArr = findRange(arr);
  return arr;
}

function greatestCommonDivisor(arr, refinedGCD){ 
  var a = arr[0];
  var b = arr[1];
  var gcd = a%b; 

  console.log(`
  Recieved 
  a: ${a}
  b: ${b}
  (a/b).toFixed(0): ${(a/b).toFixed(0)}
  gcd: ${a%b}
  refinedGCD: ${refinedGCD}
  `);  

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

smallestCommons([10, 2]);

console.log(greatestCommonDivisor([1071,462]));