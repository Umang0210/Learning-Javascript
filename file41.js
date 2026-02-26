function makePayment() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Payment has been recieved")
        resolve()
    },5000)
  });
}

function sendConfirmation() {
  console.log("Order has been placed successfully");
}
//call back hell
//makePayment(sendConfirmation);
makePayment()
  .then(() => sendConfirmation())
  .catch((err) => console.log(err));
