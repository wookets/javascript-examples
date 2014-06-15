
var a = 10;
var b = 5;

// add subtract
a = a + b; // a = 15
b = a - b; // b = 10
a = a - b; // a = 5

console.log('a='+a, 'b='+b);

// array
a = [a,b];
b = a[0];
a = a[1];

console.log('a='+a, 'b='+b);


// exclusive XOR
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log('a='+a, 'b='+b);

// shifter
a = 'abc';
b = 'def';
a = [a,b];
b = a.shift();
a = a.shift();

console.log('a='+a, 'b='+b);