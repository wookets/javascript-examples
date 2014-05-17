(function() {
  notGlobal = "Wongy";

  console.log(notGlobal + " is not global, because we wrapped our code in a closure like coffeescript does.");

})(); // declare and then immediately call the function to avoid global scope leak

// if you put code out here and aren't careful the global monster will eat you