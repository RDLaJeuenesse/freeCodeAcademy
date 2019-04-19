// Pig Latin
function translatePigLatin(str){
  var regex = /[^aeiouy]/;
  var count = 0;

  // convert the string to an array of lower case characters
  let strArr = strPrep(str);
  
  // if a word begins with 'y' move the 'y' to the end of the array
  // in pig latin y is used as a vowel only when it is not the first letter of the word
  if(strArr[0] === 'y'){
    console.log("I start with y...");
    strArr.push(strArr.shift());
    strArr.push('ay')
    return strArr.join('');
  }
  // the first character is a vowel
  // return the str with 'way'
  if(!strArr[0].match(regex)){
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
function strPrep(str){
  str = str.toLowerCase();
  let strArr = str.split('');
  return strArr;
}
console.log(translatePigLatin('yellow'));