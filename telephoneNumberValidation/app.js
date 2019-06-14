function telephoneCheck(str) {
  // Good luck!
  var regEx = /((^1\s?\-?\(\d{3}\))|(^1\s\d{3})|(^\(\d{3}\)|(^\d{3})))(\-?\s?)(\d{3})(\s?\-?\d{4})$/;
  if(str.match(regEx)){
    return true;
  }else{
    return false;
  }
}

console.log(telephoneCheck("555-555-5555"));