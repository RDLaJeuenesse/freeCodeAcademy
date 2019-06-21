function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  console.log(change);
  var tinder = {};
  var totalCID = cid.map(function(value, index){
    return value[1];
  }).reduce(function(a,b){
    return a + b;
  }).toFixed(2);
  console.log(totalCID);
  var caseFlag = change < totalCID;
  console.log(caseFlag);
  switch(caseFlag){
    case (true):
      console.log('we need to give change.');
      break;
    case (false):
      console.log('insuffiecient funds to make change');
      break;
    default:
      console.log('change and till are equal.')
      break;
  }
/*   totalCID > change ? (tinder.change = cid, tinder.status = "OPEN") : (tinder.change = [], tinder.status = "INSUFFIECIENT_FUNDS");
  if(change === totalCID){
    tinder.status = "CLOSED";
    tinder.change = cid;
  } */
  return tinder;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 19.5, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));