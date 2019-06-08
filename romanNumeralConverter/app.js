function convertToRoman(num) {

    var romNum = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    var decNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var pickle = decNum.map(function(cv, i, decNum){
        if(num >= decNum[i]){
            return decNum[i];
        }
    })
    for(let i = 0; i < pickle.length; i++){
        if(pickle[i] === undefined){
            pickle.pop();
            i--;
        }
    }
    var start = pickle.reduce(function(acc,curV){
        return Math.min(num,curV);
    })
    var romStr = 'UNUSED';

    console.log(`
    num: ${num}
    decNum: ${decNum}
    start: ${start}
    pickle: ${pickle}
    pickle.length: ${pickle.length}
    romStr: ${romStr}
    `)
}

   
   convertToRoman(886);