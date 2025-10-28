const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  const lowStock = stockProducts.filter(product => product.quantityInStock <= 10 && product.quantityInStock > 0);
  for (let i = 0; i < lowStock.length; i += 1) {
    lowStock[i] = `${lowStock[i].productName}: ${lowStock[i].quantityInStock} unidades`;
  }
  return lowStock;
};

console.log(getLowStockProducts(stockProducts));

module.exports = { getLowStockProducts };
