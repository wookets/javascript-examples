
//
// the .call() function
//

var Dog = function(name) {
  this.name = name;
};
Dog.prototype.bark = function bark(){
  console.log(this.name + " barks!");
};
var fredDog = new Dog("Fred");
fredDog.bark(); // =&gt; "Fred barks!"

// Normally, Cats cannot bark, but Bill is an exception and has learned how to bark like Fred
var Cat = function(name) {
  this.name = name;
};
var billCat = new Cat("Bill");
fredDog.bark.call(billCat); // =&gt; "Bill barks!"
