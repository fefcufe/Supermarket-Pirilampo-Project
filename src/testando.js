const stockProducts = require('./data.json');

const formatVitamins = (objetoProduto) => {
    const result = Object.entries(objetoProduto).map(([key, value])=> `${key} - ${value}`);
    return result;
}

let productsWithVitamins = [];
for (let i = 0; i < stockProducts.length; i +=1) {
    if (stockProducts[i].nutritionalInfo.vitamins) {
        formattedObject = {
            description: stockProducts[i].description,
            formattedPrice: `R$ ${stockProducts[i].price}`,
            vitaminsInformation: formatVitamins(stockProducts[i].nutritionalInfo.vitamins)
        }
        productsWithVitamins.push(formattedObject);
    } else {
        formattedObject = {
            description: stockProducts[i].description,
            formattedPrice: `R$ ${stockProducts[i].price}`,
            vitaminsInformation: []
        }
        productsWithVitamins.push(formattedObject);
    }
    console.log(productsWithVitamins);
}
