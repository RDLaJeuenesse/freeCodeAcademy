//binary agents
function binaryAgent(str) {
    var convertMe = 0;
    var convertArr = [];
    var strArr = str.split(' ');

    for(let i = 0; i < strArr.length; i++){
        for(let j = 0; j < strArr[i].length; j++){
            if(Number(strArr[i][j]) === 1){
                convertMe += Math.pow(2, (strArr[i].length - (j + 1)));
            }
        }
        convertArr.push(convertMe);
        convertMe = 0;
    };
    str = '';
    for(let i = 0; i < convertArr.length; i++){
        str += String.fromCharCode(convertArr[i]);
    }
    return str;
}
  
console.log(binaryAgent("01001000 01100101 01101100 01101100 01101111 00100000 01101101 01111001 00100000 01101110 01100001 01101101 01100101 00100000 01101001 01110011 00100000 01110000 01101001 01100011 01101011 01101100 01100101 00100000 01100001 01101110 01100100 00100000 01001001 00100000 01110111 01100001 01101110 01110100 01100101 01100100 00100000 01110100 01101111 00100000 01110011 01100001 01111001 00100000 01110100 01101000 01100001 01110100 00100000 01111001 01101111 01110101 00100000 01110011 01101101 01100101 01101100 01101100 00100000 01100110 01110101 01101110 01101110 01111001 00101110"));