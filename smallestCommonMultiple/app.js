//smallest common multiple
function smallestCommons(arr){
  arr.sort(sortAscending);
  //console.log(arr);
  var rangeArr = findRange(arr);
  //console.log(rangeArr);
  return arr;
}

function greatestCommonDivisor(arr){
  var a = arr[0];
  var b = arr[1];
  if(a === 0 || b === 0){
    return 'no zeros allowed!';
  }
  
  console.log(`Recieved a: ${a} b: ${b}: (a/b).toFixed(0): ${(a/b).toFixed(0)}`);

  if(a > b){
    return greatestCommonDivisor([(a-b),b]);
  }
  else{
    console.log(`b%a after else: ${b%a}`);
    a1 = b;
    b1 = b%a;
    console.log(`Assigned in else: a1: ${a1} b1: ${b1}`);
    return greatestCommonDivisor([b, (b%a)]);
  }
  return arr;
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