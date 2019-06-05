//Make A Person
var Person = function(firstAndLast) {
  var person = firstAndLast.split(' ');
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return person.join(' ');
  };
  this.getFirstName = function(){
    return person[0];
  }
  this.getLastName = function(){
    return person[1];
  }
  this.setFirstName = function(str){
    person[0] = str;
  }
  this.setLastName = function(str){
    person[1] = str;
  }
  this.setFullName = function(str){
    person = str.split(' ');
  }
  
  return;
};

var bob = new Person('Bob Ross');
console.log(bob);
console.log(`Object.keys(bob).length: ${Object.keys(bob).length}
bob instanceof Person: ${bob instanceof Person}
bob.getFullName(): ${bob.getFullName()}
bob.firstName: ${bob.fistName}
bob.lastName: ${bob.lastName}
bob.getFirstName(): ${bob.getFirstName()}
bob.getLastName(): ${bob.getLastName()}
`)
bob.setFirstName("Haskell");
bob.setLastName("Curry");
console.log(bob);
console.log(`Object.keys(bob).length: ${Object.keys(bob).length}
bob instanceof Person: ${bob instanceof Person}
bob.getFullName(): ${bob.getFullName()}
bob.firstName: ${bob.fistName}
bob.lastName: ${bob.lastName}
bob.getFirstName(): ${bob.getFirstName()}
bob.getLastName(): ${bob.getLastName()}
`)