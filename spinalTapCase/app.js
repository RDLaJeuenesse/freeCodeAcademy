//Spinal Tap Case
function spinalCase(str){
  var regex = /[^A-Za-z]|([a-z{1}])([A-Z{2}])/gm;
  var retStr = str.replace(regex,'$1 $2');
  var lowerStr = retStr.toLowerCase();
  var strArr = lowerStr.split(' ');
  retStr = strArr.join('-');
  return retStr;
}
console.log(spinalCase("The_Andy_Griffith_Show"));

