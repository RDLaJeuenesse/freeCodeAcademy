//Search and Replace
function myReplace(str, before, after) {
  var caps = /[A-Z]/;
  var capFlag = before[0].match(caps) ? true : false;
  console.log(capFlag);
  capFlag === true ? after = after[0].toUpperCase()+after.substr(1) : console.log('lower');
  console.log(after);
  str = str.replace(before, after);
  console.log(str);
  return str;
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");