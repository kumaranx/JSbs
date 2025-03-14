// console.error('Oops')
// console.warn('Oh Oh')

// // --- User Input in Node
// const prompt = require('prompt-sync')()

// const i = prompt('type something')

// console.log(i)

// // --- Data Types

// string
// number
// boolean
// undefined
// null

// BigInt  // used to store big integers which cant be stored in number

// --- Variables

// var greetingMsg = 'hola'
// greetingMsg = 'amingo'

// let x = 0
// x += 1

// const RPM = 14000  // arrays int const are mutable(can be changed) but cannot reassign new array to this variable

// // --- Block & Function Scoped

// if (true) {
//   var x = 4  // var is function scoped, so can be accessed anywhere, var are also hoisted on top of the function

//   let y = 0   // let & const are block scoped so won't able to access them outside of the block
//   const z = 1
//   console.log(y)
// }
// console.log(x)
// // console.log(z)

// --- Conversions

// Number()
// parseInt()
// parseFloat()
// String()
// .toString()

// --- Comparison Operators

/*
==
===
!=
!==
<
>
<=
>=

*/

// // -- Logical Operators

// /*
// &&
// ||
// |
// */

// console.log(-1 > 0 && 'hola')

// // --- Conditionals (if, else if, else)

// if (true){

// }
// else if (false){

// }
// else {

// }

// // --- Ternary Condition
// const cond = 19 > 18 ? 'okay cool' : 'naah'
// console.log(cond)

// // --- Switch Statement

// const value = 19

// switch (value) {
//   case 19:
//     console.log("19 is cool")
//     break
//   case 18:
//     console.log("18 is not cool")
//     break
//   default:
//     console.log('okay')
//     break;
// }

// // --- Arrays

// const arr = [1, 2, 3, 2, false]
// const arr2 = new Array(5)
// const arr3 = Array.from('hola')

// arr3[4] = '!'
// // console.log(arr3)

// console.log(arr.unshift(10))
// console.log(arr)

// console.log(arr.indexOf(2))
// console.log(arr.lastIndexOf(2))

// console.log(arr.includes(3))

// const arr4 = arr.concat(arr2)

// console.log(arr4)

// const str = arr.join('|')
// console.log(str)

// const arr5 = arr.slice(1, 3)
// console.log(arr5)

// const arr6 = arr.splice(1, 1)
// console.log(arr6)

// --- Array Destructing

// const [x, x2, ...y] = [1, 2, 3, 4]  // ... is Spread Operator  
// console.log(x, x2, y)

// const z = [2, 4, 5, 6]
// const k = [2, 4, 5, ...z]

// k.push('hola')
// console.log(z, k)

// // --- WHile loops / Do - While
// do {
//   console.log('do')   // code to be executed
//   break
// } while (true)        // condition (if true the loop will start over)

// while (true) {
//   console.log('while')
//   break
// }

// // --- For Loops

// for (let i = 0; i <= 7; i++) {
//   console.log(i)
// }

// const arr = [9, 3, 4]

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// for (let [i, value] of arr.entries()) {
//   console.log(i, value)
// }

// --- Objects
// Objects have properties associated with values - 'Key' 'Value' pairs

// const obj = {
//   name: 'Max',
//   age: 21,
//   sayHello: function () {
//     return 'hello'
//   },
//   career: {

//   }
// }

// obj.age = 20
// obj.from = 'california'

// console.log(obj['name'])
// delete obj.career

// console.log(Object.values(obj))

// for (let key in obj) {      // use 'in' for objects and 'of' for arrays
//   console.log(key)
// }

// const obj2 = {
//   hairColor: 'redhead',
//   hobbies: ['surfing', 'skateboarding'],
//   name: 'Sadie'
// }

// const obj3 = { ...obj, ...obj2 }
// // console.log(obj3)
// const { hairColor, name } = obj3
// console.log(hairColor, name)

// --- Sets

// const mySet = new Set();
// mySet.add(5)
// mySet.add('Sarah')
// mySet.delete(5)

// console.log(mySet.size)
// console.log(mySet.has(5))
// console.log(mySet)

// const arr = [...mySet]
// console.log(arr)

// --- Maps

// const myMap = new Map();
// const numberMap = new Map([[4, 'four'], [10, 'ten']]);

// myMap.set(11, 'eleven')
// numberMap.delete(4)

// console.log(myMap.size)
// console.log(myMap.get(11))
// console.log(myMap.has(11))

// myMap.clear()
// console.log(myMap)

// const arr = Array.from(numberMap)
// console.log(arr)

// // --- Error Handling

// try {
//   // riskyFunction();
//   throw new Error('knock knock')
// } catch (error) {
//   console.log("Oops an error:", error.message);
// } finally {
//   console.log('i dont give a fuck abt error.');  // Always runs
// }

// --- Functions

// function greet(name, age = 20) {
//   console.log(name)
// }

// const greet  = function(name) {

// }

// const greet = (name) => name + '!'

// console.log(greet('sam'))

// function addNums(...numbers) {  // Rest Parameters
//   console.log(numbers)
// }

// addNums(1, 2, 34, 3, 3, 343)

// // --- Map, Filter & Reduce

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled)

// const users = [
//   { name: 'Letty', age: 24 },
//   { name: 'Paul', age: 22 }
// ];

// const names = users.map((user) => user.name)
// console.log(names)

// const numbers2 = [1, 2, 3, 4];
// const sum = numbers2.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// const numbers3 = [1, 2, 3, 4, 5];
// const evenNum = numbers3.filter(num => num % 2 === 0);
// console.log(evenNum)

// // --- 'this' keyword & scope

// const person = {
//   name: 'Bruce',
//   greet() {
//     console.log(`Hello, Mr ${this.name} Wayne`); // this does not work with arrow function here
//   },
// };


// person.greet()

// --- Promises

// const myPromise = new Promise((resolve, reject) => {
//   if (false) {
//     resolve('good');
//   } else {
//     reject('bad');
//   }
// });

// myPromise.then((value) => {
//   console.log(value)
// }).catch((value) => {
//   console.log(value)
// }).finally(() => {
//   console.log('always')
// })

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'hail'));
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'hydra'));

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// --- Arrow Functions (WDS)

function sum(a, b) {
  return a + b
}

let sum2 = (a, b) => a + b

let isPositive = (number) => number >= 0

let randomNumber = () => Math.random

document.addEventListener('click', () => console.log('Click'))