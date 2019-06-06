function pairElement(str) {
  var givenArr = str.toUpperCase().split('');
  var pairedArr = [];
  for(let i = 0; i < givenArr.length; i++){
    switch(givenArr[i]){
      case 'C':
        pairedArr.push(['C','G'])
        break;
      case 'G':
        pairedArr.push(['G','C']);
        break;
      case 'T':
        pairedArr.push(['T','A']);
        break;
      case 'A':
        pairedArr.push(['A','T']);
        break;
    }
  }
  return pairedArr;
}

pairElement("TTGAG");