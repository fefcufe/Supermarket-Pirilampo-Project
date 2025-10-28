const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  const outOfStock = stockProducts.filter(product => product.quantityInStock === 0);
  for (let i = 0; i < outOfStock.length; i += 1) {
    outOfStock[i] = outOfStock[i].productName;
  }
  return outOfStock; 
};

console.log(getOutOfStockProducts(stockProducts))

module.exports = { getOutOfStockProducts };
