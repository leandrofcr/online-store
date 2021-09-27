# Welcome to the Front-End Online Store project repository!


## What was developed

In this project, a simplified version was created, without persistence in the database, of an **online store**, developed in group its functionalities according to the demands defined in a _Kanban_ framework, in a scenario closer to the labor market. Based on these demands, we have an application where users can:

  - Search products by terms and categories from the _Mercado Livre API_;
  - Interact with the searched products in order to add and remove them from a shopping cart in different quantities;
  - View details and previous reviews of a product, as well as create new reviews;
  - And finally, finalize the purchase (simulated) of the selected items.


![Online Store Preview](https://github.com/leandrofcr/online-store/blob/main/preview.gif)

# Skills

In this project, the following skills were developed:

* Understand what Agile Methods are
* Understand what Kanban is
* Understand what Scrum is
* Work effectively in teams using Kanban or Scrum
* Practice all activities developed so far in the Front-End module of Trybe's web development course.

---

### How to clone the project

1. Clone the repository
  * `git clone git@github.com:leandrofcr/online-store.git`.
  * Enter the repository folder you just cloned:
    * `cd online-store`

2. Install dependencies and start the project
  * Install dependencies:
    * `npm install`
  * Start the project:
    * `npm start` (a new page should open in your browser with the project's home screen)


---

## Running unit tests

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro) was used to perform the unit tests. This test _framework_ uses some markup in the code to verify the proposed solution. One of these tags is the `data-testid` attribute and we will make use of it here, as in the examples below:

```html
<button data-testid="my-action" ></button>
```

or

```html
<a data-testid="my-action"><a/>
```

In other words, the attribute `data-testid =" my-action "` will serve for the React Testing Library (RTL) to identify the element and, thus, we will be able to perform unit tests focused on the application's behavior. In order to verify the proposed solution, you can run all unit tests locally with the command below:

```bash
npm test
```

You can run the tests for a single requirement, as a parameter for the command, the name of the target test file:

```bash
npm test src/__tests__/requirement1.test.js
```

## Mercado Livre API Documentation
The web application will consume the data from the _Mercado Livre_ API to search for items from the online store. To perform these searches, it is necessary to consult the following endpoints:

- To list as available:
  - Type of request: `GET`
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- To search for items by term:
  - Type of request: `GET`
  - Search parameter $QUERY (this parameter must be replaced by the search field value)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
- To search for items by category:
  - Type of request: `GET`
  - $CATEGORY_ID search parameter (this parameter must be replaced by the correct category ID)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
- To search for items from a category by term:
  - Type of request: `GET`
  - Search parameter $QUERY (this parameter must be replaced by the search field value)
  - $CATEGORY_ID search parameter (this parameter must be replaced by the correct category ID)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

If you want to learn more about the _Mercado Livre_ API, see [documents] (https://developers.mercadolivre.com.br/pt_br/itens-e-buscas).

### Example request to list categories

```
"https://api.mercadolibre.com/sites/MLB/categories"
```

The return from this endpoint will be something like this:

```json
[
    {
        "id": "MLB5672",
        "name": "Acessórios para Veículos"
    },
    ...
]
```

### Example Search Request

```
"https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola"
```

 Search request example. The return from this endpoint will be similar to the example we have [in this file] (example-motorola.json). 

⚠ **ATTENTION! If you get CORS error press `ctrl + shift + r` in your browser** ⚠

### Linter

To ensure the quality of the code in order to make it more readable, easier to maintain and following good development practices, we used the `ESLint` and `Stylelint` linters in this project. To run the linters locally in the project, run the commands below:

```bash
npm run lint
npm run lint:styles
```

LET'S GO!
