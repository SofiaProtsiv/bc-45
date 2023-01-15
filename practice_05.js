// /*
// To define the “Basket” class. The “Basket” should have the following attributes:

// - Product list
// - Total price

// And the Basket should have methods:

// - addProduct
// - removeProduct
// - removeItemOfProduct
// - showBasket
// - checkIfProductExists

// Then, define the “Product” class with the following attributes:

// - Product ID
// - Product Name
// - Product Quantity in stock
// - Product Quantity in basket
// - Product Item Price (for the one item)
// - Product Total Price (Product Item Price\*quantity in basket)

// Once both classes were defined, you should do the following actions inside your
// script:

// - Create 1 entity of “Basket”
// - Create 3 different entities of “Product”
// - Add each of the new entities of “Product” to the “Basket” product list

// The Basket “calculate” method should be called to update the “Basket” total
// price once the product list is updated. Take a look that in case the product
// already exists in the Basket, just the quantity and product total price of the
// product should be updated. The Basket “calculate” method should be called to
// update the basket total price.

// “Basket” entity should be a global variable and be available via console.
// */
class Product {
  constructor({
    productID,
    productName,
    productQuantityInStock,
    productItemPrice,
  }) {
    this.productID = productID;
    this.productName = productName;
    this.productQuantityInBasket = 0;
    this.productQuantityInStock = productQuantityInStock;
    this.productItemPrice = productItemPrice;

    // this.increaseProductQuantity.bind(this);
    // this.decreaseProductQuantity.bind(this);
  }
  increaseProductQuantity() {
    if (this.productQuantityInStock === 0) {
      return alert(`${this.productName} немає більше в наявності🥲`);
    }
    this.productQuantityInBasket += 1;
    this.productQuantityInStock -= 1;
  }
  decreaseProductQuantity() {
    this.productQuantityInBasket -= 1;
    this.productQuantityInStock += 1;
  }
}

class Basket {
  constructor() {
    this.productList = [];
    this.totalPrice = 0;
    // this.addProduct.bind(this);
    // this.removeProduct.bind(this);
    // this.removeItemOfProduct.bind(this);
    // this.showBasket.bind(this);
    // this.checkIfProductExists.bind(this);
  }
  addProduct(product) {
    const alreadyInBasket = myBasket.checkIfProductExists(product.productName);

    if (alreadyInBasket) {
      return product.increaseProductQuantity();
    }

    this.productList.push(product);
    product.increaseProductQuantity();
  }

  checkIfProductExists(productName) {
    return (
      this.productList.filter(
        (product) => product.productName == productName
      )[0] !== undefined
    );
  }

  removeProduct(productName) {
    this.productList = [...this.productList].filter(
      (product) => product.productName !== productName
    );
  }

  removeItemOfProduct(productName) {
    const product = this.productList.find(
      (product) => product.productName === productName
    );

    if (!product) {
      return;
    }

    product.decreaseProductQuantity();

    if (product.productQuantityInBasket < 1) {
      this.removeProduct(productName);
      return;
    }
  }

  showBasket() {
    this.totalPrice = this.productList.reduce(
      (total, { productItemPrice, productQuantityInBasket }) =>
        (total += productQuantityInBasket * productItemPrice),
      0
    );

    console.table(this.productList);
    console.log(`В вашій корзині товарів на суму ${this.totalPrice}грн`);
  }
}

const myBasket = new Basket();

const apple = new Product({
  productID: 156848,
  productName: "Apple",
  productQuantityInStock: 10,
  productItemPrice: 20,
});
const mango = new Product({
  productID: 266757,
  productName: "Mango",
  productQuantityInStock: 5,
  productItemPrice: 90,
});
const orange = new Product({
  productID: 296757,
  productName: "Orange",
  productQuantityInStock: 8,
  productItemPrice: 70,
});

myBasket.addProduct(apple);
myBasket.addProduct(apple);
myBasket.addProduct(apple);
myBasket.addProduct(apple);
myBasket.addProduct(apple);

myBasket.addProduct(orange);
myBasket.addProduct(orange);

myBasket.addProduct(mango);
myBasket.addProduct(mango);
myBasket.addProduct(mango);

// myBasket.removeItemOfProduct("Apple");
// myBasket.removeItemOfProduct("Apple");
// myBasket.removeItemOfProduct("Apple");
// myBasket.removeItemOfProduct("Apple");
// myBasket.removeItemOfProduct("Apple");
// myBasket.removeItemOfProduct("Apple");

// myBasket.removeItemOfProduct("Mango");
// myBasket.removeItemOfProduct("Mango");
// myBasket.removeItemOfProduct("Mango");

// myBasket.removeProduct("Apple");

myBasket.showBasket();
console.log(myBasket);
