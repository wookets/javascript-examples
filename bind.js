
//
// The bind() function
//

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

