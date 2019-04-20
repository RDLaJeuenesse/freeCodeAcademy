//Search and Replace
function myReplace(str, before, after) {
    str = str.replace(before,after);
    console.log(str);
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");