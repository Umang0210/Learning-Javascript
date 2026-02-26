function getStudentInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userObj = {
        name: "John",
        email: "john@gmail.com",
        age: 21,
      };
      resolve(userObj);
    }, 2000);
  });
}

function displayInfo({name}){
console.log(name)
}

async function main() {
  const result = await getStudentInfo();
  displayInfo(result)
  console.log("Program Completed Successfully");
}
main()

//getStudentInfo should return object name,email and age
