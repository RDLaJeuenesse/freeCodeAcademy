// Pig Latin
function translatePigLatin(str){
  var regex = /[aeiouy]/;
  var count = 0;
  // prep the string
  str = strPrep(str);
  //create an array from the string
  let strArr = Array.from(str);
  // the first character is a vowel
  // return the str with 'way'
  if(strArr[0].match(regex)){
    strArr.push('way');
    return strArr.join('');
  }
  // rearrange the array until you hit a vowel or you run out of letters
  for(let i = 0; i < strArr.length; i++){
    if(strArr[i].match(regex) && count < strArr.length){
      strArr.push(strArr.shift());
      i--;
      count++;
      console.log(count);
    // return the pig latin translation
    }else{
      i = strArr.length;
      strArr.push('ay');
      return strArr.join('');
    }
  }
}
function beginsWith(str){
  let shiftMe = str.slice(0,1);
  return str.substring(1).concat(shiftMe);
}
function strPrep(str){
  // let all characters to lower case
  str = str.toLowerCase();
  // check if the sting begins with y
  str = str[0] === 'y' ? beginsWith(str) : str;
  return str;
}

console.log(translatePigLatin('yellow'));