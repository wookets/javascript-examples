
namedFunction('wally'); // will work, because named funcs are pulled up
//anonymousFunction('peter'); // will not work

function namedFunction(name) {
  console.log(name);
}
var anonymousFunction = function(name) {
  console.log(name);
};

namedFunction('jane'); // will work as well
anonymousFunction('jody'); // will work now

