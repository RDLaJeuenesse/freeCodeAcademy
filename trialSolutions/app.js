//smallest common multiple
function smallestCommons(arr){
  arr.sort(sortDescending);
  var highEnd = arr[0];
  var lowEnd = arr[1];
  var rangeArr = [];
  for(let i = highEnd; i >= lowEnd && i > 0; i--){
    rangeArr.push(i);
  }
  var initial = Math.pow(rangeArr[0],4);
  var lcm = findLCM(rangeArr, initial);

  return lcm;
}

function sortDescending(a,b){
  return b-a;
}
//noprotect
function findLCM(arr, num) {
  var lcm = 0;
  var multsArr = [];
  var count = 0;

  for (let i = 1; i < num; i++) {
    multsArr.push(arr[0] * i);
  }
  console.log(multsArr);
  for(let i = 0; i < multsArr.length; i++){
    for(let j = 1; j < arr.length; j++){
      if(multsArr[i] % arr[j] === 0){
        count++;
        if(count === arr.length - 1){
          lcm = multsArr[i];
          return lcm;
        }
      }else{
        count = 0;
        break;
      }
    }
  }
  return lcm;
}
//console.log(smallestCommons([18,23]));

function dropElements(arr, func) {
  // Drop them elements.
  var keepUs = [];
  for(let i = 0; i < arr.length; i++){
    console.log(`func(arr[i] ${arr[i]}: ${func(arr[i])})`);
    let pickle = func(arr[i]);
    if(!pickle){
    }else{
      keepUs.push(arr[i])
    }
  }
  arr = keepUs;
  return arr;
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));