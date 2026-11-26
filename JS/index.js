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

const cartProducts = cart.map((id) => {
  return products.find((product) => product.id === id);
});

// {} - Элементы и объекты, [] - массивы

console.log(cartProducts);

const missingProducts = cartProducts.some((el) => el === undefined);

console.log(missingProducts);

// missingProducts === false ;

if (missingProducts) {
  // missingProducts === true
  console.log("Некоторые товары отстутствуют");
}

const productInStock = cartProducts.every((el) => el.inStock === true);

console.log(productInStock);

const isCategory = cartProducts.some((el) => el.category === "tech");

console.log(isCategory);

const discounProducts = cartProducts.map((el) => {
  let finalPrice = el.price;
  if (el.category === "tech") {
    finalPrice = el.price * 0.85;
  }

  return { ...el, finalPrice: finalPrice }; // возвращаю свой объект и добавляю к нему новый элемент
});

console.log(discounProducts);

const sumPrice = cartProducts.reduce((sum, product) => {
  //первое, что идёт в скобке в редьюс - начальное значение, которое идёт после фигурной скобки через запятую
  //второе, элемент массива
  //третье - индекс (0, 1, 2)

  return sum + product.price;
}, 0);

console.log(`Общая сумма заказа ${sumPrice}`);

const sumDiscount = discounProducts.reduce((sum, product) => {
  return sum + product.finalPrice;
}, 0);

console.log(sumDiscount);

const maxPrice = cartProducts.reduce((acc, product) => {
  if (product.price > acc.price) {
    return product;
  }
  return acc;
}, cartProducts[0]);

console.log(maxPrice);
