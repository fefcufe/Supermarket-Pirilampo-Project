const stockProducts = require('./data.json');


const searchProductsByBrand = (brandName) => {
  const brandProducts = stockProducts.filter(product => product.brand === brandName);

  for (let i = 0; i < brandProducts.length ; i += 1) {
    
    const newObject = {
      description: brandProducts[i].description,
      formattedPrice: `R$ ${brandProducts[i].price}`
    }
    brandProducts[i] = newObject
  }
  return brandProducts;
};

searchProductsByBrand('Hortifruti')

module.exports = { searchProductsByBrand };
