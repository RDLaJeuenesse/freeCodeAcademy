//smallest common multiple
function smallestCommons(arr){
  arr.sort(sortAscending);
  console.log(arr);
  var rangeArr = findRange(arr);
  console.log(rangeArr);
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