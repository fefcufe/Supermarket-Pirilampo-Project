const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let productsAmount = 0
  for (let i = 0; i < stockProducts.length ; i +=1) {
    productsAmount += stockProducts[i].quantityInStock
    console.log(stockProducts[i].quantityInStock)
    console.log(productsAmount)
  }
  return productsAmount
};

module.exports = { getProductsAmount };
