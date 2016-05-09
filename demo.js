lucy.empty();

console.log(JSON.parse(localStorage.lucy));

var newPerson = {'uid':'per1','name':'Susan'};
lucy.add(newPerson);
console.log(JSON.parse(localStorage.lucy));

var newPerson = {'uid':'per2','name':'Trev'};
lucy.add(newPerson);
console.log(JSON.parse(localStorage.lucy));

console.log(lucy.find('name','Susan'));

lucy.del('per1');
console.log(JSON.parse(localStorage.lucy));

console.log(lucy.find('name','Susan'));

console.log('done');