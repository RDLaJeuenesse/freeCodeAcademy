function rot13(str) { // LBH QVQ VG!
  var regex= /[A-Z0-9]/
  var decoded = '';
  str = str.split('').map(function(cv,ind){
    if(cv.match(regex)){
      return (str.charCodeAt(ind) - 13);
    }
  })
  for(let i = 0; i < str.length; i++){
    decoded = decoded.concat((String.fromCharCode(str[i])));
  }
  return decoded;
}
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));