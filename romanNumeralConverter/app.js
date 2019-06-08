function convertToRoman(num) {

    var romNum = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    var decNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var deciStart = decNum.map(
        function(cv, i, decNum){
            if(num >= decNum[i]){
                return decNum[i];}
        }).filter(function(el){
            return el !== undefined;
        }).reduce(function(acc,curV){
            return Math.min(num,curV);
        });
    var romStart = romNum[decNum.indexOf(deciStart)];
    var romStr = 'UNUSED';
    var deciConvertArr = ['fill me'];
    pickle(num, deciStart, romStart);
    function pickle(seed, deciStart, romStart){

        console.log(`
        num: ${num}
        deciStart: ${deciStart}
        romStart: ${romStart}
        romStr: ${romStr}
        deciConvertArr = ${deciConvertArr}
        `);
    } 
}

   
   convertToRoman(886);