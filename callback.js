// akta function er modde jhodi parameter hishebe arekta function ke pathano hoy and shei 2number function take jhodi 1st function er bitore call kora hoy taile take Callback function bole.
function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}
// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise']
// const myOj = { name: 'Tom Chinku', age: 11 }
function greetMorning(name) {
    console.log("Good Morning", name)
}
function greetAfternoon(name) {
    console.log("Good Afternoon", name)
}
function greetEvening(name) {
    console.log("Good Evening", name)
}
welcomeMessage("Tom Hanks", greetMorning);
welcomeMessage("Mahmodul Shahin", greetAfternoon);
welcomeMessage("Rayhan", greetEvening);
//====== another example of callback function ===
// document.getElementById('my-btn').addEventListener('click', function () {
//     console.log('Btn is clicked')
// })
