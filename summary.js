/* 
Data type 2 rokom
1. Primitive
2. Non primitive 
# primitive type bade baki shob kicui motamoti ak doroner object.
==================
string
number
bolean
null
undefined
object
*/
const nums = [223, 122, 4, 55];
// console.log(typeof nums) // object
//===========
function triple(x, y, z) {

}
// console.log(typeof triple)
// console.log(triple.length)
// console.log(typeof null) // object
//======= pass by reference/value =======
// function er baire deya parameter er value change hove na.
function triple2(a, b, c) {
    a = 111;
    b = 222;
    c = 333;
}
const num1 = 3;
const num2 = 5;
const num3 = 7;
triple2(num1, num2, num3)
// console.log(num1, num2, num3)

// pass by reference
function triple3(a, b, c) {
    a.age = 888;
}
const nums1 = 3;
const nums2 = 5;
const nums3 = 7;
// triple2(nums1, nums2, nums3)
const myObj = { name: 'kuddus', age: 17 };
triple3(myObj)
console.log(myObj)
// console.log(nums1, nums2, nums3)


