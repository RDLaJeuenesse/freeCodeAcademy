//Sorted union
function uniteUnique(...args) {
  console.log(args);
  let arr = args.join();
  console.log(arr);
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);