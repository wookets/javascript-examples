
// let's create an alien object
var alien = {
  kind: 'alien'
}

// and a person object
var person = {
  kind: 'person'
}

// and an object called 'zack'
var zack = {};

// assign alien as the prototype of zack
zack.__proto__ = alien

// zack is now linked to alien
// it 'inherits' the properties of alien
console.log(zack.kind); //=> ‘alien’

// assign person as the prototype of zack
zack.__proto__ = person

// and now zack is linked to person
console.log(zack.kind); //=> ‘person’

console.log(alien.isPrototypeOf(zack))