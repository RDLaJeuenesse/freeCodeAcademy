function convertToRoman(num) {

    var romNum = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    var decNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var start = 0;
    var romLet = '';
    var convertedStr = '';
    while(start === 0){
        for(let i = 0; i < decNum.length; i++){
            if(num > decNum[i] || num === decNum[i]){
                start = decNum[i];
                console.log(start);
                romLet = romNum[i];
                //convertMe(num,start,romLet,convertedStr);
            }
        }
    }
    console.log(`
    num: ${num}
    start: ${start}
    romLet: ${romLet}
    converted: ${convertedStr}
    `)
}
function convertMe(num,start,romLet,convertedStr){
    console.log(`
    coming in:
    num: ${num}
    start ${start}
    romLet: ${romLet}
    convertedStr: ${convertedStr}
    `)
    while(Math.floor(num / start) < num){
        convertedStr.concat(romLet);
        num = num - start;
    }
}

   
   convertToRoman(25);