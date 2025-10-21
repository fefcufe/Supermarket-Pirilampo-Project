# Pirilampo Supermarket Project

<p align="center">
  <img src="./assets/images/pirilampo-logo.png" width="40%"/>
</p>

This project was designed by Trybe to help its students develop their programming logic skills. In this project, we were tasked with writing JavaScript code for an imaginary supermarket, creating functions to solve internal problems on the supermarket’s website. 

In the supermarket’s narrative, Dona Filó is a local entrepreneur whose business is undergoing a digital transformation. In this scenario, we were tasked with developing functions that would be used to implement the website’s business features. The features to be delivered involve manipulating and searching the products in the stock.

<br />
<br />
  
<details>
  <summary><strong>📝 Skills developed in this project </strong></summary><br />

In this project, we needed to:

- Use variables and data types to represent and store information.;
- Use arrays to manipulate a list of elements;
- Use `objects` to represent information in a structured way;
- Use `for` to scroll through a list of data;
- Use `if...else` to insert logical conditions into business rules;
- Apply programming logic to problem-solving.

</details>



### 1. Install dependencies

- Execute `npm install` at terminal



<details>
<summary><strong>🎛 Linter</strong></summary><br />

This project used the "Eslint" to perform static analysis of the code. This project already comes with linter-related dependencies configured in the package.json file by Trybe. Before using ESLint, run npm install to install dependencies. Then run the command:

```bash
npm run lint
```

  
<details>
<summary><strong>🛠 Tests</strong></summary><br />

The project requirements were evaluated using Jest installed by Trybe. To run the automatic evaluator, run one of the following commands locally:

_To run all tests, use::_

```bash
npm test
```

_To run specific tests, use`npm test testFileName`:_

```bash
npm test 6-search-product-by-name
```

</details>

<details>
<summary><strong>🏗 Project Structure</strong></summary> <br />

- Each requirement will be developed in a specific file.

- Each requirement will be implemented in a specific function.

- The information about which file and function to work on is provided in the description of each requirement.

- The database to be used for some of the requirements is located in the data.json file inside the src directory.

</details>

<br />

## Project requirements

## `1 - Create a function that returns the number of unique products in stock`

The Supermercado Pirilampo website has a Stock Management section. This section needs to display the number of unique products in stock, a very useful feature that helps Dona Filó manage the variety of goods in her store. You will build the function responsible for generating this information.




<summary><strong>💻 Develop a function that returns the number of unique products in stock</strong></summary>

### Onde desenvolver seu código

- The file where you will implement the solution is called 1-unique-products-amount.js and is located inside the src directory;
- Your implementation must be inside the getUniqueProductsAmount function. You must not change its name, but you can add parameters to it if necessary. You may also create additional functions within the file if you feel it will help organize your code better.

### What your function should do

- Your function should find and return the length of the stockProducts array, which contains objects representing the products in stock.

### Business rules

- Your function must return a `number`;
- A unique product is a concept used to identify a product in stock exclusively. For example, Arroz Tio João has 50 units in stock but counts as only 1 product;
- Consider that each object in the `stockProducts` array represents a unique product.

</details>

<br/>

## `2 - Create a function that returns the names of the unique products in stock`


<summary><strong>💻 Develop a function that returns an array with the names of the unique products in stock</strong></summary>

- The file where you will implement the solution is called `2-unique-products-name.js` and is located inside the `src` directory;
- Your implementation must be inside the `getUniqueProductsName` function.

### What your function should do

- Your function should iterate through the `stockProducts`array — which contains objects representing the products in stock — to find the **name** of each product. At the end, the function should return a new array that stores the names of the products.

### Business Rules

- Your function must return an `array` of `strings`;
- The `array` returned by the function should contain the names of **all** products from the array of stock objects.

<br/>

## `3 - Create a function that returns the names of the products unavailable in stock`

<summary><strong>💻 Develop a function that returns an array with the names of the unavailable products</strong></summary>

### What your function should do

- Your function should iterate through the `stockProducts` array — which contains objects representing the products in stock — to find the name of each product that is unavailable. At the end, the function should return a new array containing the names of these products.

<details>


### Business Rules

- Your function must return an `array` of `strings`;
- A product is considered out of stock when its `quantityInStock` property is equal to 0.


<br/>

## `4 - Create a function that returns products with low stock in a specific format`





- Your function should iterate through the `stockProducts` array — which contains objects representing the products in stock — to find the **name** and **quantity in stock** of each product with low stock. At the end, the function should return a new array containing a personalized message for each product, indicating its name and quantity.

### Business Rules

- Your function must return an `array` of `strings`.

A product is considered to have low stock when its `quantityInStock` property is **greater than** 0 and **less than or equal to** 10.

The format of the array elements should be: `{product name}: {quantity in stock} units`.

You do not need to worry about singular/plural forms at this stage. For example, if a product has 1 unit in stock, the message should still use the plural word units. Example: "Popcorn: 1 units".

<br/>

## `5 - Crie uma função que retorne o total de produtos em estoque`

<summary><strong>💻 Desenvolva uma função que retorne o número de produtos em estoque</strong></summary>

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca da **quantidade em estoque** de cada produto. Ao final, a função deverá retornar o somatório da quantidade de todos os produtos em estoque.

### Regras de negócio

- Sua função deve, obrigatoriamente, retornar um `number`;
- Utilize a propriedade `quantityInStock`, do objeto de produto do estoque, para acumular os totais de todos os produtos do estoque.

<br/>

## `6 - Crie uma função que busque um produto pelo nome`

<summary><strong>💻 Desenvolva uma função que permita buscar um produto pelo seu nome</strong></summary>

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca do **nome** de um produto específico. Caso o produto seja encontrado, a função irá retornar um novo objeto com as propriedades de **descrição** e **valor formatado do produto**. Caso contrário, sua função irá retornar **um valor nulo**.

### Regras de negócio

- Sua função deverá receber o nome do produto por parâmetro;
- Considere que o nome do produto é único. Portanto essa função **não retorna** um `array` de produtos e sim um `object` com as informações dele;
- Se o produto for encontrado, sua função irá retornar um novo objeto com as seguintes chaves:
    - **`description`:** descrição do produto, sem nenhuma modificação

    - **`formattedPrice`:** prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`

- Se o produto não for encontrado, sua função irá retornar `null`;
- A função deve retornar `null` caso seja chamada **sem parâmetro**.

<br/>

## `7 - Crie uma função que busque por produtos de uma marca específica`

Outra funcionalidade crucial para a Página Inicial é a busca por produtos através da marca. Segundo a inoxidável Dona Filó, existem algumas marcas que são as "queridinhas" da sua clientela. Sua lógica será desenvolvida em uma função separada, mas o time de front-end irá aproveitar a mesma área de pesquisa utilizada anteriormente. Para ter ideia de como será o layout dessa funcionalidade, o time também disponibilizou um esboço.

<summary><strong>💻 Desenvolva uma função que permita buscar produtos pela marca</strong></summary>

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca de produtos de uma **marca** específica. Caso produtos sejam encontrados, a função deverá retornar uma nova lista de objetos com as propriedades de **descrição** e **valor formatado do produto**. Caso contrário, sua função irá retornar **uma lista vazia**.

### Regras de negócio

- Sua função deverá receber a marca por parâmetro;
- Se produtos forem encontrados, sua função irá retornar um novo `array` de objetos. Cada objeto deve ter as seguintes chaves:
    - **`description`:** descrição do produto, sem nenhuma modificação

    - **`formattedPrice`:** prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`

- Se nenhum produto for encontrado, sua função irá retornar um `array` vazio;
- A função deve retornar um `array` vazio caso seja chamada **sem parâmetro**.

<br/>

## `8 - Crie uma função que busque por produtos na promoção`

<summary><strong>💻 Desenvolva uma função que retorne os produtos em promoção</strong></summary>

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca de produtos **em promoção**. Caso produtos sejam encontrados, a função irá retornar uma nova lista de objetos com as propriedades de **descrição**, o **valor formatado do produto** e a **informação booleana de oferta**.

### Regras de negócio

- Um produto é considerado em promoção quando a chave `onSale` tiver o valor `true`;
- Se produtos forem encontrados, sua função irá retornar um novo `array` de objetos. Cada objeto deve ter as seguintes chaves:
    - **`description`:** descrição do produto, sem nenhuma modificação

    - **`formattedPrice`:** prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`

    - **`onSale`:** informação booleana identificando que o produto está em promoção

<br/>

## `9 - Crie uma função que retorne todos os produtos com informações sobre alergia ou intolerância`

<summary><strong>💻 Desenvolva uma função que retorne os produtos em estoque com informações de alergia ou intolerância alimentar</strong></summary>

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca de produtos **com informações de alergia e intolerância alimentar**. Caso produtos sejam encontrados, a função irá retornar uma nova lista de objetos com as propriedades de **descrição**, o **valor formatado do produto** e a **informação formatada de alergia e intolerância**.

### Regras de negócio

- Sua função deve, obrigatoriamente, retornar um `array` de objetos com as seguintes chaves:
    - **`description`:** descrição do produto, sem nenhuma modificação

    - **`formattedPrice`:** prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`

    - **`allergyOrIntoleranceMessage`:** deve ser do tipo `string` e só será adicionada ao novo objeto quando houver informações de alergia ou intolerância no objeto do produto. Deve seguir o seguinte formato: `Pode conter: {item 1} {item 2} {item N}`. A quantidade de itens varia de acordo com o tamanho do array `allergyOrIntolerance` do produto em estoque

<br/>

## `10 - Crie uma função que retorne todos os produtos que possuam alguma vitamina em seu valor nutricional`

Pensando na saúde das pessoas, a incomensurável Dona Filó teve uma ideia: criar uma seção na Página Inicial para listar alimentos ricos em vitaminas. Você será responsável por desenvolver a função que retorna esses produtos, enquanto o time de front finaliza o layout.


<summary><strong>💻 Desenvolva uma função que retorne produtos ricos em vitaminas</strong></summary>

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca de produtos **com informações de vitaminas**. Caso produtos sejam encontrados, a função irá retornar uma nova lista de objetos com as propriedades de **descrição**, o **valor formatado do produto** e a **lista de vitaminas disponíveis no produto**.

### Regras de negócio

- Sua função deve, obrigatoriamente, retornar um `array` de objetos com as seguintes chaves:
    - **`description`:** descrição do produto, sem nenhuma modificação

    - **`formattedPrice`:** prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`

    - **`vitaminsInformation`:** deve ser um `array` de `string`. O texto dos elementos desse array deve seguir o formato `{nome da vitamina} - {quantidade de vitamina presente}`. A informação do nome da vitamina é encontrada nas **chaves do objeto `nutritionalInfo.vitamins`** do produto em estoque, já a informação de quantidade de vitamina presente é encontrada nos valores do mesmo objeto

<br/>

---
