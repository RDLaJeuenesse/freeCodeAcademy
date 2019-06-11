function rot13(str) { // LBH QVQ VG!
  var regex = /[A-Z0-9\s]/
  var decoded = '';
  str = str.split('').map(function(cv,ind){
    if(cv.match(regex)){
      return (str.charCodeAt(ind) - 13);
    }
  })
  console.log(`
  str: ${str}
  decoded: ${decoded}
  `)
    return str;
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");