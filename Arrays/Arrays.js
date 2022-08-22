const strings = ['sun', 'sun', 'sun'];

//push 
strings.push('last'); //O(1)
strings.push('fuck'); //O(1)

//pop
strings.pop(); //O(1)
strings.pop();

//unshift 
strings.unshift('x'); //O(n)

//splice
strings.splice(2,0, 'Mayank raj'); //O(n)

console.log(strings);