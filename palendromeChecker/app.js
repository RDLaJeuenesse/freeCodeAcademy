function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var orbitalArr = arr.map(obj =>{
    var a = obj.avgAlt + earthRadius;
    var periodObject = {};
    periodObject.name = obj.name;
    periodObject.orbitalPeriod = Math.round((2 * Math.PI) * Math.sqrt((Math.pow(a,3))/GM));
    return periodObject;
  })
  
  return orbitalArr;
}
  /* FORMULA 
    a = lavgAlt + earthRadius
    T = Math.ceil(2*Math.PI * Math.squrt(Math.pow(a,3)/GM)),0);
  */

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);