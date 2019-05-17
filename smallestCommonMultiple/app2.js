function rangeLCM(arr, gcd, count){
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
      if(gcd % arr[i] === 0){
        console.log(`
        if executes for mod = 0
        gcd: ${gcd} evenly divisible by arr[i]: ${arr[i]}
        count: ${count}`);
      }else{
        console.log(`
        else exicutes to rerun rangeLCM when mod = 0 is not possible
        gcd: ${gcd} is not evenly div by ${arr[i]}
        i: ${i}
        count: ${count}
        `);
        count++;
        gcd = count * arr[0];
        //noprotect
        return rangeLCM(arr,gcd,count);
      }
    }
    return gcd;
  }

  function greatestCommonDivisor(arr, refinedGCD){ 
    var a = arr[0];
    var b = arr[1];
    var gcd = a%b; 
  
    console.log(`
    Recieved greatestCommonDivisor
    a: ${a}
    b: ${b}
    (a/b).toFixed(0): ${(a/b).toFixed(0)}
    gcd: ${a%b}
    refinedGCD: ${refinedGCD}
    `); 
    if(gcd > 0){
      var refinedGCD = gcd;
      return greatestCommonDivisor([b,gcd], refinedGCD);
    }else{
      return refinedGCD;
    } 
  }

  console.log(rangeLCM([5,4,3,2,1],1,5));
  //console.log(greatestCommonDivisor([5,4,3,2,1]));