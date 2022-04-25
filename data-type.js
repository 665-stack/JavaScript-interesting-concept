
/* how many data type javascript have?
broadly divided => 
1. Primitive data type
2. Non Primitive data type
---
=> Primitive data types
 1. number
 2. string
 3. boolean
 4. undefined
 5. null
 6. symbol
=> Non Primitive data types
 1. object
*/

//========= primitive example ========
let a = 'hello';
let b = a;
// console.log(a, b)
a = 'gello';
// console.log(a, b)

//========= non primitive example ======
const x = { job: 'web developer' }
const y = x;
console.log(x, y)
x.job = 'app developer';
console.log(x, y)