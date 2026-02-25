// const student = {
//     name:"John",
//     age:21
// }
// const {name,age} = student
// console.log(name)
// console.log(age)

// const {name:userName} = student
// console.log(userName)


// const student = {
//     name:"John",
//     age:21,
//     city:"Jalandhar"
// }
// const {city="Amritsar"} = student
// console.log(city)

const student = {
    name:"John",
    age:21,
    marks:{
        math:60,
        science:90
    }
}
const {marks} = student
console.log(marks)
const {marks:{math}} = student
console.log(math)








