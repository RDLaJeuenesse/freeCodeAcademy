function checkCashRegister(price, cash, cid) {
  var change = (cash - price).toFixed(2);
  var tinder = {};
  var status = '';
  change = makeChange(change);
  cid.reverse();
  change = change.map(function(value,index){
    return [cid[index][0],value];
  })

    // Here is your change, ma'am.
  //THREE STATUS RETURNS
  //IF THE DRAWER DOES NOT CONTAIN ENOUGH MONEY OR EXACT CHANGE CANNOT BE GIVEN
    //STATUS: "INSUFFICIENT_FUNDS", CHANGE[]
  //IF THE CHANGE AND DRAWER ARE ===
    //STATUS: "CLOSED", CHANGE[...]
  //IF DRAWER > CHANGE
    //STATUS: "OPEN", CHANGE[...]


  console.log(`
  change: ${change}
  cid: ${cid}
  `);
  tinder.status = status;
  tinder.change = 'change arr here';
  /* tinder.change = changeArr.map(function(val,index){
    var cashDrawer = [];
    cashDrawer[0] = cid[index][0];
    cashDrawer[1] = changeArr[index] * denominationsArr[index];
    return cashDrawer
  }).filter(function(elem){
    return elem[1]>0;
  }); */
  return tinder;
}
function makeChange(...args){
  const denominationsArr = [100,20,10,5,1,.25,.10,.05,.01];
  var change = args[0];
  var denomination = args[1];
  denomination === undefined ? denomination = 0 : denomination = args[1];
  var changeArr = args[2];
  changeArr === undefined ? changeArr = [] : changeArr = args[2];
  if(change / denominationsArr[denomination] >= 1){
    changeArr.push(parseInt((change / denominationsArr[denomination])));
    change = (change - (changeArr[denomination] * denominationsArr[denomination])).toFixed(2);
    if(change > 0){
      denomination = denomination + 1;
      makeChange(change, denomination, changeArr);
    }
  }else{
    changeArr.push(0);
    denomination += 1;
    makeChange(change,denomination, changeArr);
  }
  changeArr = changeArr.map(function(value, index){
    return value * denominationsArr[index];
  })
  return changeArr;
}
console.log(checkCashRegister(19.5, 25.72, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));