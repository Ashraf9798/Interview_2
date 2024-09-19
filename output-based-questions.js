// Question 1 (Block Scope)
{
  let a = 1
  let b = 2

  console.log(a)
  console.log(b)
}

console.log(a)
console.log(b)

// Question 2 (Hoisting)
console.log(a)
var a = 5
// and
console.log(name)
var name = 'John'

// Question 3 (Shadowing)
var x = 20

function foo() {
  console.log(x)
  var x = 10
}
foo()

// ******* //

foo()
var foo = 20
function foo() {
  console.log('Calling foo')
}
foo()

// Question 4 (Closure)
function outer() {
  function inner() {
    console.log(x)
  }
  const x = 5
  return inner
}
const inner = outer()
inner()

// Question 5 (Event Loop and Callback Queue)
console.log('Start')
setTimeout(() => {
  console.log('Timeout')
}, 0)
console.log('End')

// Question 6 (For loop and Closure)
// print the numbers after a delay of 1s
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}

// Question 7 (Callback Queue and Microtask Queue)
setTimeout(() => {
  console.log('Timeout')
}, 0)
Promise.resolve().then(() => console.log('Promise'))
console.log('End')

// Question 8 (Async Await)
async function foo() {
  return 'Hello World'
}

const result = foo()
console.log(result)

// Question 9 (Array Methods)
const numbers = [10, 20, 30, 40, 50]

// Question 10 (typeof null)
let a = null
console.log(typeof null)

// Question 11 (Why are we able to change the arr when it is declared using const)
const arr = [1,2,3]
arr[4] = 5

console.log(arr.length)


// Question 12 (Deep Copy and Shallow Copy)
const user1 = {
  name: 'John',
  age: 25,
  address: {
    city: 'Mumbai',
    state: 'Maharashtra',
  },
}

const user2 = user1

user2.name = 'Ramesh'
user2.address.city = 'Pune'

console.log(user1)
console.log(user2)

// Question 13 (Destructuring)
const [a, b] = [10, 'Hii']
console.log(a, b)

const { age, address } = user1


// Question 14 (Constructor Function)
function abc() {
  console.log('hii')
}

const value = new abc()

// Question 15
// function foo(a, ...rest, c) {
//   console.log(a, rest, c);
// }

// foo(1, 2, 3, 4, 5)