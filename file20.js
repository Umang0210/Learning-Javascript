const products = [
    {
        id: 1,
        name: "product 1",
        desc: "this is description of product 1",
        price: 100,
        category : "laptop"
    },
    {
        id: 2,
        name: "product 2",
        desc: "this is description of product 2",
        price: 120,
        category: "Desktop"
    },
    {
        id: 3,
        name: "product 3",
        desc: "this is description of product 3",
        price: 150,
        category: "mobile"
    }
    {
        id: 4,
        name: "product 4",
        desc: "this is description of product 4",   
        price: 200,
        category: "laptop"
    }
    {
        id: 5,
        name: "product 5",
        desc: "this is description of product 5",   
        price: 250,
        category: "Desktop"
    }
    {
        id: 6,
        name: "product 6",  
        desc: "this is description of product 6",
        price: 300,
        category: "mobile"
        }   
];

let search = "laptop"

const resutArray = products.map(product => {
    if (product.category === search) {
        return product;
    }
});
console.log(resutArray);












function increment(productid){

addtocart(1);
