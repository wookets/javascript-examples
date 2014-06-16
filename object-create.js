
var person = {
  kind: 'person'
}

// creates a new object which prototype is person
var zack = Object.create(person);

console.log(zack.kind); // => ‘person’

var zack = Object.create(person, {age: {value:  13} });
console.log(zack.age); // => ‘13’