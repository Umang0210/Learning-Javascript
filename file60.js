const cart = {
    items: [],
    additems(item) {
        this.items.push(item);
    },
    showitems() {
        console.log(this.items);
    }
};

cart.additems("laptop");
cart.additems("desktop");
cart.showitems();
