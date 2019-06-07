function palindrome(str) {
    // Good luck!
    str = str.toLowerCase();
    var regex = /[a-z0-9]/g;
    var cleanStr = str.match(regex);
    var revStr = str.match(regex).reverse();
    //revStr.reverse();

    if(cleanStr.toString() === revStr.toString()){
        return true;
    }else{
        return false;
    }
}
  console.log(palindrome("Theeht"));