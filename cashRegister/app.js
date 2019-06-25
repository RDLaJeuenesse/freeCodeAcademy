function checkCashRegister(price, cash, cid) {
  var change = (cash - price).toFixed(2);
  const denominationsArr = [100,20,10,5,1,.25,.10,.05,.01];
  var denomination = 0;
  var changeArr = [];
  var tinder = {};
  var status = '';
  makeChange(change,denomination);
  function makeChange(a,b){
    denomination = b;
    change = a;
    if(change / denominationsArr[denomination] >= 1){
      changeArr.push(parseInt((change / denominationsArr[denomination])));
      change = (change - (changeArr[denomination] * denominationsArr[denomination])).toFixed(2);
      if(change > 0){
        denomination = denomination + 1;
        makeChange(change, denomination);
      }
    }else{
      changeArr.push(0);
      denomination += 1;
      makeChange(change,denomination);
    }
    return changeArr;
  }
  console.log(changeArr);
  // Here is your change, ma'am.
  //THREE STATUS RETURNS
  //IF THE DRAWER DOES NOT CONTAIN ENOUGH MONEY OR EXACT CHANGE CANNOT BE GIVEN
    //STATUS: "INSUFFICIENT_FUNDS", CHANGE[]
  //IF THE CHANGE AND DRAWER ARE ===
    //STATUS: "CLOSED", CHANGE[...]
  //IF DRAWER > CHANGE
    //STATUS: "OPEN", CHANGE[...]
  cid.reverse();
  tinder.status = status;
  tinder.change = changeArr.map(function(val,index){
    var cashDrawer = [];
    cashDrawer[0] = cid[index][0];
    cashDrawer[1] = changeArr[index] * denominationsArr[index];
    return cashDrawer
  }).filter(function(elem){
    return elem[1]>0;
  });
  return tinder;
}

console.log(checkCashRegister(19.5, 25.72, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
