//const products = ["product1", "product2", "product3"];
const products = [
  { id: 1, name: "Product 1", desc: "This is description", price: 100 },
  { id: 2, name: "Product 2", desc: "This is description", price: 120 },
  { id: 3, name: "Product 3", desc: "This is description", price: 150 },
];
let cart = [];
// products.forEach((product) => console.log(product));
products.forEach((product) => {
  // product.quantity = 1
  // product.total = product.price * product.quantity
  // cart.push(product)
  const obj = {
    ...product,
    quantity: 1,
    total: product.price * product.quantity,
  };
  cart = [...cart,product]
});
console.log(cart);
