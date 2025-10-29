const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  let resultArray = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].hasOwnProperty('allergyOrIntolerance')) {
      const productWithAllergy = {
        description: stockProducts[i].description,
        formattedPrice: `R$ ${stockProducts[i].price}`,
        allergyOrIntoleranceMessage: `Pode conter: ${stockProducts[i].allergyOrIntolerance.join(' ')}`
      };
      resultArray.push(productWithAllergy)
    } else {
      const productWithoutAllergy = {
        description: stockProducts[i].description,
        formattedPrice: `R$ ${stockProducts[i].price}`
      };
     
      resultArray.push(productWithoutAllergy)
    }
  }
  return resultArray;
};

getProductsWithAllergyOrIntoleranceInfo();

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
