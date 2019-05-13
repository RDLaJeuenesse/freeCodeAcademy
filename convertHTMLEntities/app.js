//Convert HTML Entities
function convertHTML(str) {
  // &colon;&rpar;
  var regex = /&|<|>|'|"/;
  var changeMe;
  var strArr = Array.from(str);
  for(let i = 0; i < strArr.length; i++){
    if(strArr[i].match(regex)){
      changeMe = strArr[i];
      switch (changeMe){
        case '&':
        strArr[i] = '&amp;';
        break;
        case '<':
        strArr[i] = '&lt;';
        break;
        case '>':
        strArr[i] = '&gt;';
        break;
        case '\'':
        strArr[i] = '&apos;';
        break;
        case '"':
        strArr[i] = '&quot;';
        break;
      }
    }
  }
  str = strArr.join('');
  return str;
}

convertHTML("5 < '2");