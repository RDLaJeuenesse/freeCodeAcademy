function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var tinder = {};
  var totalCID = cid.map(function(value, index){
    return value[1];
  }).reduce(function(a,b){
    return a + b;
  }).toFixed(2);
  console.log(totalCID);
  // Here is your change, ma'am.
  //THREE STATUS RETURNS
  //IF THE DRAWER DOES NOT CONTAIN ENOUGH MONEY
    //STATUS: "INSUFFICIENT_FUNDS", CHANGE[]
  //IF THE CHANGE AND DRAWER ARE ===
    //STATUS: "CLOSED", CHANGE[...]
  //IF DRAWER > CHANGE
    //STATUS: "OPEN", CHANGE[...]
  change > 0 ? (tinder.change = change, tinder.status = "THE CHANGE DUE") : (tinder.change = change, tinder.status = "YOU OWE ME MONEY");
  if(change === 0){
    tinder.status = "WE ARE EVEN";
  }
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

console.log(checkCashRegister(19.5, 32.5, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));