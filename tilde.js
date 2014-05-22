
var items = ['red','green','blue']
console.log(items);

var index = items.indexOf('green');
console.log(index);

console.log(~index);
if (~index) {
  items[index] = 'orange';
}
console.log(items);


index = items.indexOf('purple');
console.log(index);
console.log(~index);
if (~index) { // ~ converts -1 into 0, which also means 'false' in javascript
  items[index] = 'yellow';
}
console.log(items.indexOf('purple') !== -1); // this is the same as the above ~
if (items.indexOf('purple') !== -1) {
  items[index] = 'yellow';
}
console.log(items);