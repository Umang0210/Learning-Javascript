let cart = []
//Click on add to cart button on iphone product
cart = [...cart,{name:"iphone",price:45000,qty:1}]
// console.log(cart)
//Click on add to cart button on speaker product
cart = [...cart,{name:"speaker",price:1000,qty:1}]
console.log(cart)

const order = {
    email:"john@gmail.com",
    items:cart,
    orderValue:46000,
    status:"pending"
}
db.orders.insertOne(order)

//Create flipcart database
//create collection orders > email,items,orderValue,status,orderDate
//create collectin users > name,email,password,role
//Insert seed data
//Write aggregate query to display all the orders
//placed by a particular user


