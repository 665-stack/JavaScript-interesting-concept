/* 
 What is closure in javascritp?
 => akta function theke jodi arekta function ke return kori taile tara encapsulation bar private reference make kore. ar atakei Closure bole. Video 35-7
*/
function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
let clock1 = stopWatch();
let clock2 = stopWatch()
console.log('clock1 -- ', clock1())
console.log('clock1 -- ', clock1())
console.log('clock1 -- ', clock1())
console.log('clock1 -- ', clock1())

console.log(' clock2 -- ', clock2())
console.log(' clock2 -- ', clock2())
console.log(' clock2 -- ', clock2())
console.log('clock1 -- ', clock1())
console.log(' clock2 -- ', clock2())


