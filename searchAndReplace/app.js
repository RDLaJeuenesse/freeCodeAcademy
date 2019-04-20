//Search and Replace
function myReplace(str, before, after) {
  var caps = /[A-Z]/;
  var capFlag = before[0].match(caps) ? true : false;
  str = str.replace(before, after);
  console.log(capFlag);
  capFlag === true ? after = after[0].toUpperCase() : console.log('lower');
  console.log(after);
  console.log(str);
  return str;
}
myReplace("His name is Tom", "Tom", "john");