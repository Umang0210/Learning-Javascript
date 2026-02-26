function f1(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x % 2 === 0) {
        resolve(`${x} is an Even Number`);
      } else {
        reject("Odd Numbers not allowed");
      }
    }, 3000);
  });
}
async function main() {
  let num = Math.round(Math.random() * 10);
  try {
    const result = await f1(num);
    console.log(result)
    console.log("Program Completed Successfully");
  } catch (err) {
    console.log(err);
  }
}
main();
