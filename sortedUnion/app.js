//Sorted union
function uniteUnique(...args) {
  console.log(args);
  var arr = [];
  for(let i = 0; i < args.length; i++){
    for(let j = 0; j < args[i].length; j++){
      if(!arr.includes(args[i][j])){
        arr.push(args[i][j]);
      }
    }
  }
  console.log(arr);
  return arr;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);