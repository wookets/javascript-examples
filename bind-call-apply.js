
// illustrate the difference between bind - call - apply

// bind
function greet(gender, age, name) {
  var salutation = gender === "male" ? "Mr." : "Ms.";
  if (age > 25) {
    console.log("Hello, " + salutation + " " + name + ".");
  } else {
    console.log("Hey, " + name + ".");
  }
}

var greetAnAdultMale = greet.bind(null, "male", 45);
greetAnAdultMale("John Hartlove"); // "Hello, Mr. John Hartlove."

var greetAYoungster = greet.bind(null, "", 16);
greetAYoungster("Alex"); // "Hey, Alex."
greetAYoungster("Emma Waterloo"); // "Hey, Emma Waterloo."



// call
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
