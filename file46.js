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

function getExamInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Exam Info Resolved");
    }, 3000);
  });
}

function getAttendanceInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Attendance Info Resolved");
    }, 1000);
  });
}
function displayInfo({ name }) {
  console.log(name);
}

async function main() {
  //   const result = await getStudentInfo();
  const result = await Promise.all([
    getStudentInfo(),
    getAttendanceInfo(),
    getExamInfo(),
  ]);
  console.log(result)
//   displayInfo(result);
  console.log("Student has been promoted");
}
main();

//getStudentInfo should return object name,email and age
