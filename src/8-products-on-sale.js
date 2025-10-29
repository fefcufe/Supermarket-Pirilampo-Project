const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  const productsOnSale = stockProducts.filter(product => product.onSale === true)
  for (let i = 0; i < productsOnSale.length ; i += 1) {
    
    const newObject = {
      description: productsOnSale[i].description,
      formattedPrice: `R$ ${productsOnSale[i].price}`,
      onSale: productsOnSale[i].onSale
    }
    productsOnSale[i] = newObject
  }
  return productsOnSale;
};


module.exports = { getProductsOnSale };
