//Missing letters
function fearNotLetter(str) {
  var alphaArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var checkMe = alphaArray.splice(alphaArray.indexOf(str[0]), str.length);
  for(let i = 0; i < str.length; i++){
    if(str[i] !== checkMe[i]){
      var missingLetter = checkMe[i];
      break;
    }
  }
  return missingLetter;
}

fearNotLetter("abcdefghijklmnoprstuvwxyz");