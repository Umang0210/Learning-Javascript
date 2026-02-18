const student = {
    name:"John",
    age:21
}
// console.log(student)
// console.log(student.name)
// student.city = "NYC"
// console.log(student)
// student.city = "Miami"
// console.log(student)

//spread operator
const obj = {...student,city:"NYC"}
console.log(obj)

