function rot13(str) { // LBH QVQ VG!
  var regex1 = /[A-Z]/;
  var regex2 = /[0-9]/;
  var decoded = '';
  console.log(str);
  console.log(str.split('').map(function(cv, ind){
    if(cv.match(regex1)){
      return (str.charCodeAt(ind));
    }else{
      return(32);
    }
  }));
  str = str.split('').map(function(cv,ind){
    if(cv.match(regex1)){
      return (str.charCodeAt(ind) - 13);
    }
  })
  console.log(str);
  for(let i = 0; i < str.length; i++){
    decoded = decoded.concat((String.fromCharCode(str[i])));
  }
  console.log(decoded);
  console.log(typeof(decoded));
}
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");