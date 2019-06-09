function convertToRoman(num) {
    var romNum = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    var decNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var deciStart = decNum.filter(function(el){return el <= num;}).reduce(function(acc,curV){return Math.min(num,curV);});
    var romStart = romNum[decNum.indexOf(deciStart)];
    var romStr = '';
    createdRomNum(num, deciStart, romStart);
    function createdRomNum(seed, deciStart, romStart){
        while(seed >= deciStart){
            romStr = romStr.concat(romStart);
            seed = seed - deciStart;
        }
        if(seed > 0){
            deciStart = decNum.filter(function(el){return el <= seed;}).reduce(function(acc,curV){return Math.min(seed,curV);});
            romStart = romNum[decNum.indexOf(deciStart)];
            createdRomNum(seed,deciStart,romStart);
        }
    }
    return romStr;
}

console.log(convertToRoman(87));