//Sum all odd fibonacci numbers
function sumFibs(num) {
  var sum = 0;
  var fibsArr = [1,1];
  for(let i = 0; i <= num; i++){
    fibsArr.push(fibsArr[i] + fibsArr[i+1]);
  }
  for(let i = 0; i < fibsArr.length; i++){
    while(fibsArr[i] <= num && fibsArr[i] % 2 !== 0){
      sum += fibsArr[i];
      i++;
    }
  }
  num = sum;
  return num;
}

sumFibs(75025);