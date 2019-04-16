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
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

//Spinal Tap Case
function spinalCase(str){
  var regex1 = /[^A-Za-z]/gm;
  var regex2 = /[a-z{1}][A-Z{2}]/gm;
  console.log(`From inside function non alphanumeric: ${str.search(regex1)}`);
  console.log(`From inside function lower followed by upper: ${str.search(regex2)}`);
  //str.replace(regex1,'-')
  //str.replace(regex2,'work on this');
  //var lowerStr = str.toLowerCase();
  //var strArr = lowerStr.split(" ");
  //var retStr = strArr.join('-');
  return str;
}
console.log(`after the function is called: ${spinalCase("thisIsSpinalTap")}`);