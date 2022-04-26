const favNum = 27;
// akhaner favNum var ta hocce GLOBAL SCOPE bole. ata shobjaygay use kora jabe.
function add(first, second) {
    const result = first + second;
    // jokhon akti function er bitore akti variable toiri hoy tokhon shetake LOCAL SCOPE bole. jei var gulo ke funtion er modde access kora jai.
    // ======= block scope ============
    // if, switch, conditions or for and while loops er bitor area take block scope bole. akhne if condition er modde const, let diye var declare korle sheta block scope er modde porbe. But var diye variable declare korle  hosting declaration shetake opure niye jay.
    console.log('mood -- ', mood)
    if (result > 9) {
        var mood = 'happy';
    }
    console.log('mood -- ', mood)
    console.log('result -- ', result)
    return result;
}
const sum = add(11, 3)
console.log('favNum -- ', favNum)
//========
for (let i = 0; i < 10; i++) {

}
console.log(i)
// sammary -----------
// global scope
// local scope
// block scope
// hoisting
