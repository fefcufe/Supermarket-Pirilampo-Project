const stockProducts = require('./data.json');

const searchProductByName = (name) => {

  if (!name) {
    return null;
  } 
  const result = stockProducts.find(product => product.productName === name);
  if (!result) {
    return null;
  } else {
    return {
    description: result.description,
    formattedPrice: `R$ ${result.price.toFixed(2)}`
    }; 
  }  
};

module.exports = { searchProductByName };
