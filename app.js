function destroyer(arr) {
  // Remove all the values
  var findUs = Array.from(arguments).slice(1);
  return arr.filter(function(val){
    return !findUs.includes(val);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function whatIsInAName(collection, source){
  var sourceKeys = Object.keys(source);

  return collection.filter(function(obj){
    return sourceKeys.map(function(key){
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    })
    .reduce(function(a,b){
      return a && b;
    })
  })
}
//console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

//Spinal Tap Case
function spinalCase(str){
  var regex = /[^A-Za-z]|([a-z{1}])([A-Z{2}])/gm;
  var retStr = str.replace(regex,'$1 $2');
  var lowerStr = retStr.toLowerCase();
  var strArr = lowerStr.split(' ');
  retStr = strArr.join('-');
  return retStr;
}
spinalCase("The_Andy_Griffith_Show");

// Pig Latin
function translatePigLatin(str){
  var firstLets = [];
  var regex = /[^aeiouy]/;
  var strArr = str.split('');
  //console.log(strArr);
  for(let i = 0; i < strArr.length; i++){
    if(strArr[i].match(regex)){
      strArr.push(strArr.shift());
      i--;
    }else{
      i = strArr.length;
      strArr.push('ay');
    }
  }
  str = strArr.join('');
  console.log(str);
  return str;
}
translatePigLatin('algorithm');