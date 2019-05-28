function dropElements(arr, func) {
  // Drop them elements.
  for(let i = 0; i < arr.length; i++){
    if(!func(arr[i])){
      arr.shift();
      i--;
    }else{
      break;
    }
  }
  return arr;
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));