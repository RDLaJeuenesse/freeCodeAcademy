function truthCheck(collection, pre) {
  // Is everyone being true?
  for(let i = 0; i < collection.length; i++){
    if(!collection[i][pre]){
      pre = false;
      return pre;
    }
  }
  pre = true;
  return pre;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));