const products = [
  { id: 1, name: "Ноутбук", price: 350000, category: "tech", inStock: true },
  { id: 2, name: "Мышка", price: 5000, category: "tech", inStock: true },
  { id: 3, name: "Футболка", price: 8000, category: "clothes", inStock: false },
  { id: 4, name: "Клавиатура", price: 15000, category: "tech", inStock: true },
  { id: 5, name: "Кроссовки", price: 35000, category: "clothes", inStock: true },
  { id: 6, name: "Наушники", price: 25000, category: "tech", inStock: false },
  { id: 7, name: "Куртка", price: 45000, category: "clothes", inStock: true },
];

const cart = [2, 4, 5, 7];

const cartProducts = cart.map((el) => {
  return products.find((product) => {
    return product.id === el;
  });
});

console.log(cartProducts);
