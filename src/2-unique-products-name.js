const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  let namesArray = [];

  for (let i=0; i < stockProducts.length; i += 1) {
    const productName = stockProducts[i].productName;
    if (!namesArray.includes(productName)) {
      namesArray.push(productName);
    }
  }

  return namesArray;
};

module.exports = { getUniqueProductsName };
