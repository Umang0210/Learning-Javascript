const products = [
  { id: 1, name: "Product 1", desc: "This is description", price: 100 },
  { id: 2, name: "Product 2", desc: "This is description", price: 120 },
  { id: 3, name: "Product 3", desc: "This is description", price: 150 },
];
const cart = products.map((product) => {
  const obj = {
    ...product,
    quantity: 1,
  };
  return obj
});
console.log(cart);
