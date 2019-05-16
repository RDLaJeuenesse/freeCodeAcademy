//Sum all primes
// noprotect
function sumPrimes(num) {
  var nums = [];
  primeNums = [];
  var sum = 0;
  const addPrimes = (acc, cv) => acc + cv;
  for(let i = 2; i <= num; i++){
    nums.push(i);
  }
  console.log(nums);
  num = primeNums.reduce(addPrimes);
  console.log(num);
  return num;
}

sumPrimes(25);