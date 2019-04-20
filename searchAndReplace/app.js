//Search and Replace
function myReplace(str, before, after) {
  var caps = /[A-Z]/;
  var capFlag = before[0].match(caps) ? true : false;
  str = str.replace(before, after);
  //console.log(capFlag);
  //capFlag === true ? after = after[0].toUpperCase() : console.log('lower');
  console.log(str);
  return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");