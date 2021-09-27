export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    let selected = null;

    if (!product) {
      return;
    }

    for (let item of this.cartItems) {
      if (item.product.id === product.id) {
        selected = item;
        item.count += 1;
      }
    }

    if (selected) {
      this.onProductUpdate(selected);
    } else {
      let obj = { product: product, count: 1 };
      this.cartItems.push(obj);
      this.onProductUpdate(obj);
    }
  }

  updateProductCount(productId, amount) {
    for (let item of this.cartItems) {
      if (item.product.id === productId) {
        item.count += amount;
        this.onProductUpdate(item);
      }
    }
    this.cartItems = this.cartItems.filter((item) => {
      if (item.count > 0) return item;
    });
  }

  isEmpty() {
    return !this.cartItems.length;
  }

  getTotalCount() {
    let quantity = 0;
    for (let item of this.cartItems) {
      quantity += item.count;
    }
    return quantity;
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let item of this.cartItems) {
      totalPrice += item.product.price * item.count;
    }
    return totalPrice;
  }

  onProductUpdate(cartItem) {
    this.cartIcon.update(this);
  }
}