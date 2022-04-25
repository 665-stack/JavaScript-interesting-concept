/* 
Double equal ---
=> non primitive data type e use kora hoy. 
=> eta comparison korte gele jamela pakay fele. value gulo ke dhore convert korte then compare kore.
=> property er man take check kore. but type take check kore na. 

Triple equal --- 
=> most of time check korte gele ba comparison korte gele primitive data type gulo ke triple equal diye check korte hobe;
=> eta onk straight forward. eta kono value ke convert kore then comparison kore na.
=> property er man abong data type duitakei check kore.
=> automatically data type convert kore fele ( implicit conversion)

*/


const first = 0;
const second = false;
if (first == second) {
    console.log('condition is true')
}
else {
    console.log('condition is false')
}
// more comparison
const a = { name: 'ali' }
const b = { name: 'ali' }
if (a == b) {
    console.log('both are same')
}
else {
    console.log('they are not same')
}