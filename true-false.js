/* 
 Falsy:
 => false
 => 0
 => empty string
 => undifined
 => null
 => NaN
---------------
 Truthy:
 => true
 => any number (positive or negative)
 => any string (including single white space)
 => empty array or []
 => empty object or {}
 => anything else that is not falsy will be truthy.
*/
// check truthy and falsy --
let x = ["wsd", "sd", "sd"];
console.log('value of x is -- ', x)
if (x) {
    console.log('variable is truthy')
}
else {
    console.log('variable is falsy')
}