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

### Where to develop your code

- The file where you will implement the solution is called 1-unique-products-amount.js and is located inside the src directory;
- Your implementation must be inside the getUniqueProductsAmount function. You must not change its name, but you can add parameters to it if necessary. You may also create additional functions within the file if you feel it will help organize your code better.
- This location pattern is repeated for all other requirements.

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

## `5 - Create a function that returns the total number of products in stock`

<summary><strong>💻 Develop a function that returns the number of products in stock</strong></summary>

### What your function must do

- Your function must iterate through the `stockProducts` array — which contains product objects from the stock — to find the **quantity in stock** of each product. In the end, the function must return the sum of the quantities of all products in stock.

### Business Rules

- Your function must return a `number`;
- Use the `quantityInStock` property from each product object to accumulate the totals of all products in stock.

<br/>

## `6 - Create a function that searches for a product by name`

<summary><strong>💻 Develop a function that allows searching for a product by its name</strong></summary>

### What your function must do

- Your function must iterate through the `stockProducts` array — which contains product objects from the stock — to find the name of a specific product. If the product is found, the function must return a new object with the **description** and **formatted price** properties.
Otherwise, your function must return a **null value**.

### Business Rules

- Your function must receive the product name as a parameter;
- Assume that product names are unique. Therefore, this function **does not return** an `array` of products, but a single `object` containing its information;
- If the product is found, your function must return a new object with the following keys:
    - **`description`:** dhe product description, without any modification

    - **`formattedPrice`:** the Brazilian Real currency prefix (`R$`) followed by the product price (e.g., `1.99`), with one space between them.
    The decimal separator must be a period (`.`), since this is the format used in the data.json file.
    Example: `R$ 10.99`

- If the product is not found, your function must return `null`;

- The function must also return null if called **without a parameter**.

<br/>

## `7 - Create a function that searches for products from a specific brand`

<summary><strong>💻 Develop a function that allows searching for products by brand</strong></summary>

### What your function must do

- Your function must iterate through the `stockProducts` array — which contains product objects from the stock — to find products from a specific **brand**.
If products are found, the function must return a new list of objects containing the **description and formatted price properties**.
Otherwise, your function must return **an empty list**.

### Business Rules

- Your function must receive the brand name as a parameter;
- If the product is found, your function must return a new object with the following keys:
    - **`description`:** dhe product description, without any modification

    - **`formattedPrice`:** the Brazilian Real currency prefix (`R$`) followed by the product price (e.g., `1.99`), with one space between them.
    The decimal separator must be a period (`.`), since this is the format used in the data.json file.
    Example: `R$ 10.99`

- If no products are found, your function must return an empty `array`;

- The function must also return an empty `array` if called **without a parameter**.

<br/>

## `8 - Create a function that searches for products on sale`

<summary><strong>💻 Develop a function that returns products on sale<</strong></summary>

### What your function must do

- Your function must iterate through the `stockProducts` array — which contains product objects from the stock — to find products on sale.
If products are found, the function must return a new list of objects with the **description, formatted price**, and **boolean sale information** properties.

### Business rules

- A product is considered on sale when the `onSale` key has the value `true`;

- If the product is found, your function must return a new object with the following keys:
    - **`description`:** dhe product description, without any modification

    - **`formattedPrice`:** the Brazilian Real currency prefix (`R$`) followed by the product price (e.g., `1.99`), with one space between them.
    The decimal separator must be a period (`.`), since this is the format used in the data.json file.
    Example: `R$ 10.99`


    - **`onSale`**: a boolean value indicating that the product is on sale

<br/>

## `9 - Create a function that returns all products with allergy or intolerance information`

<summary><strong>💻 Develop a function that returns products in stock with allergy or food intolerance information</strong></summary>

### What your function must do

- Your function must iterate through the `stockProducts` array — which contains product objects from the stock — to find products **with allergy or intolerance information**.
If products are found, the function must return a new list of objects with the **description, formatted price, and formatted allergy/intolerance message** properties.

### Business Rules

- Your function must return an array of objects with the following keys:
    - **`description`:** the product description, without any modification

    - **`formattedPrice`:** the Brazilian Real currency prefix (`R$`) followed by the product price (e.g., `1.99`), with one space between them.
    The decimal separator must be a period (`.`), since this is the format used in the data.json file.
    Example: `R$ 10.99`

    - **`allergyOrIntoleranceMessage`**: must be a `string` and should only be included in the new object when the product has allergy or intolerance information.
    It must follow this format: `May contain: {item 1} {item 2} {item N}`.
    The number of items varies according to the size of the product’s ``allergyOrIntolerance` array.

<br/>

## `10 - Create a function that returns all products that contain any vitamin in their nutritional value`

<summary><strong>💻 Develop a function that returns vitamin-rich products</strong></summary>

### What your function must do

- Your function must iterate through the `stockProducts` array — which contains product objects from the stock — to find products **with vitamin information**.
If products are found, the function must return a new list of objects containing the **description, formatted price, and list of vitamins available in the product**.

### Business Rules

- Your function must return an array of objects with the following keys:
    - **`description`:** the product description, without any modification

    - **`formattedPrice`:** the Brazilian Real currency prefix (`R$`) followed by the product price (e.g., `1.99`), with one space between them.
    The decimal separator must be a period (`.`), since this is the format used in the data.json file.
    Example: `R$ 10.99`

    - **`vitaminsInformation`:** must be an `array` of `string`.
    Each element must follow the format `{vitamin name} - {amount of vitamin present}`.
    The vitamin name comes from the keys of the `nutritionalInfo.vitamins` **object** in the product, and the amount comes from the corresponding values in that same object.

---
