
var accounts = [
  {id: '1', name: 'Grandfather', children: [
    {id: '1.1', name: 'Father', children: [
      {id: '1.1.1', name: 'Son'}
    ]},
    {id: '1.2', name: 'Father', children: [
      {id: '1.2.1', name: 'Son', children: [
        {id: '1.2.1.1', name: 'Grandson'}
      ]}
    ]}
  ]},
  {id: '2', name: 'Grandmother', children: [
    {id: '2.1', name: 'Mother', children: [
      {id: '2.1.1', name: 'Daughter', children: [
        {id: '2.1.1.1', name: 'Granddaughter'},
        {id: '2.1.1.2', name: 'Granddaughter'}
      ]},
      {id: '2.1.2', name: 'Daughter'}
    ]}
  ]}
];

function findPath(accounts, account, path) {
  if (!path) path = [];
  for (var i=0; i < accounts.length; i++) {
    console.log('adding ' + accounts[i].id + ' to path');
    path.push(accounts[i]);
    if (accounts[i].id === account.id) {
      console.log('found ' + account.id);
      return path;
    } else {
      if (accounts[i].children) {
        for (var j=0; j < accounts[i].children.length; j++) {
          var result = findPath(accounts[i].children, account, path);
          if (result) return result;
        }
      }
    }
    console.log('removed ' + accounts[i].id + ' to path');
    path.pop();
  }
}

var path = findPath(accounts, {id: '1'}); // [gf]
console.log(path);

console.log(findPath(accounts, {id: '2.1.1'})); // [gm, m, d]

console.log(findPath(accounts, {id: '3.1.1'})); // undefined
