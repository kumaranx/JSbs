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

const arr = [9, 3, 4]

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

for (let [i, value] of arr.entries()) {
  console.log(i, value)
}