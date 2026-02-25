//Promises
// function f1() {
//   setTimeout(() => {
//     console.log("This is F1 function");
//   }, 5000);
// }
// function f2(){
//     console.log("This is F2 function")
// }
// f1()
// f2()

function makePayment() {
  setTimeout(() => {
    console.log("Payment has been processed");
  }, 5000);
}
function sendConfirmation(){
    console.log("Order has been placed successfully")
}
makePayment()
sendConfirmation()
