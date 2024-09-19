// Question 1 
console.log(0.1 + 0.2 === 0.3);

// -----------
//// Question 2
var a = [1, 2, 3];
var b = a;
b.push(4);
console.log(a);

// -----------
//// Question 3

(function(){
  var a = b = 3;
})();
console.log(typeof a === 'undefined');
console.log(typeof b === 'undefined');

// -----------
//// Question 4
function foo(){
  return
  {
     message: "Hello"
  };
}
console.log(foo());

// -----------
//// Question 5
console.log([1, 2, 3] + [4, 5, 6]);


// -----------
//// Question 6
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// -----------
//// Question 7
const [a, , b] = [1, 2, 3];
console.log(a, b);

/// -----------
//// Question 8
let x = { a: 1, b: 2 };
let y = { b: 3, c: 4 };
let z = {...x, ...y};
console.log(z);

// -----------
//// Question 9
const person = {
  name: 'John',
  age: 28
};

const { name: fullName, age } = person;
console.log(fullName, age);

// -----------
//// Question 10
const set = new Set([1, 2, 3, 2, 1]);
console.log(set.size);

// -----------
//// Question 11
console.log('Request started')

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((data) => {
    console.log('Data Received')
    console.log(data)
  })
console.log('Request ended')

// -----------
//// Vs

async function getData() {
  console.log('Request started')
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()
  console.log('Data Received')
  console.log(data)
  console.log('Request ended')
}

getData()
