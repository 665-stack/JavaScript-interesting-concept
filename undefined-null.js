/* 
For undefined ------------
=> variable value not assigned (variable declare kora holeo man set kora hoy nai )
=> function but didn't write return anything (function kicu return kore nai)
=> just wrote return but didn't reture anything (return lekha hoice, but kicu return kore hoy nai)
=> parameter that isn't passed (parameter pass kora hoini )
=> property that doesn't exist in an object (object er bitore property nai)
=> accessing array element out of range (range er baire array er kono upadan ke access kora)
=> accessing deleted array element ( delete kora array er upadan ke access kora)
=> explicitly set value to undefined (kono variable er man shorashori undefinded set kora)

For null ----------------
=> null value hishebe nije nije set korte hoy. ata undefined er moto onno kono babe ashe na. Noramly kono property ace but property er value na thakle null likha hoy.

======= Null vs Undefined =============
=> null mane property ace but ami value ta akhono dei nai, 
=> undefined mane ata kono na kono vabe difine ei kora hoy nai ba code e kono jamelar karone define hoy nai.

*/
//============== undefined example ===========
let first;
// console.log(first)
function second(x, y) {
    const sum = x + y
}
const result = second(3, 23);
// console.log(result)
//======================
function add(a, b) {
    const sum = a + b;
    if (b < 10) {
        return;
    }
    const fun = a * b;
    return sum;
}
const fourth = add(2, 7);
// console.log(fourth)
//=======================
function double(a, b = '2') {
    const result = a * 2;
    // console.log(b)
    return result
}
double(12)
//=================================
const fifth = { name: 'sogir', age: 15, location: 'bandarbon' };
// console.log(fifth.phone)
//=========================
const sixth = [54, 12, 42, 3];
// console.log(sixth[23])
//=======================
delete sixth[2]
// console.log(sixth[2])
//=======================
const seventh = undefined;
// console.log(seventh)
//================ nulls example ==========
const myObject = { name: 'samad', professsion: null, age: 23 };
console.log(myObject)

