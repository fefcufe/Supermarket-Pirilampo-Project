const stockProducts = require('./data.json');

const formatVitamins = (objetoVitaminas) => {
    const result = Object.entries(objetoVitaminas).map(([key, value])=> `${key} - ${value}`);
    return result;
}

const getProductsRichInVitamin = () => {
  let productsWithVitamins = [];
  for (let i = 0; i < stockProducts.length; i +=1) {
    if (stockProducts[i].nutritionalInfo.vitamins) {
        formattedObject = {
            description: stockProducts[i].description,
            formattedPrice: `R$ ${stockProducts[i].price}`,
            vitaminsInformation: formatVitamins(stockProducts[i].nutritionalInfo.vitamins)
        }
        productsWithVitamins.push(formattedObject);
    }
  }
  return productsWithVitamins;
};

module.exports = { getProductsRichInVitamin };
