class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock = (quantity) => {
    this.inStock += quantity;
  };
  calculateDiscount = (discount) => {
    let price = parseFloat(this.price);
    price = price * (discount / 100);
    return this.price - price;
  };
}

const tenis = new Product("Nike Air Jordan One", "Nike Air Jordan", "500");
tenis.addToStock(10);
console.log(tenis);
const priceAfterDiscount = tenis.calculateDiscount(30);
console.log(priceAfterDiscount);
