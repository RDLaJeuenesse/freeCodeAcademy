function rot13(str) { // LBH QVQ VG!
  var regex= /[A-Z0-9]/
  var decoded = '';
  str = str.split('').map(function(cv,ind){
    if(cv.match(regex)){
      var jumpCheck = str.charCodeAt(ind) - 13 >= 65;
      return (jumpCheck ? str.charCodeAt(ind) - 13 : str.charCodeAt(ind) + 13);
    }else{
      return str.charCodeAt(ind);
    }
  })
  for(let i = 0; i < str.length; i++){
    decoded = decoded.concat((String.fromCharCode(str[i])));
  }
  return decoded;
}
  
  // Change the inputs below to test
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));