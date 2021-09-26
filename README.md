# Boas vindas ao repositório do projeto de Front-End Online Store!


## O que foi desenvolvido

Neste projeto foi criada uma versão simplificada, sem persistência no banco de dados, de uma **loja online**, desenvolvido em grupo suas funcionalidades de acordo com demandas definidas em um quadro _Kanban_, em um cenário mais próximo ao do mercado de trabalho. A partir dessas demandas, temos uma aplicação onde os usuários poderão:
  - Buscar produtos por termos e categorias a partir da _API do Mercado Livre_;
  - Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
  - E por fim, finalizar a compra (simulada) dos itens selecionados.


![Online Store Preview](https://github.com/leandrofcr/online-store/blob/main/preview.gif)

# Habilidades

Nesse projeto, as seguintes habilidades foram desenvolvidas:

* Entender o que são Métodos Ágeis
* Entender o que é Kanban
* Entender o que é Scrum
* Trabalhar em equipes utilizando Kanban ou Scrum de maneira eficaz
* Praticar todas as habilidades desenvolvidas até agora no módulo de Front-End do curso de desenvolvimento web da Trybe.

---


### Como clonar o projeto

1. Clone o repositório
  * `git clone git@github.com:leandrofcr/online-store.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd online-store`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com a tela inicial do projeto)


---

## Execução de testes unitários

Foi utilizado [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes unitários. Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta. Uma dessas marcações é o atributo `data-testid` e faremos uso dele aqui, como nos exemplos abaixo:

```html
<button data-testid="my-action" ></button>
```

ou

```html
<a data-testid="my-action"><a/>
```

Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library(RTL) identificar o elemento e, dessa forma, conseguiremos realizar testes unitários focados no comportamento da aplicação. Afim de verificar a solução proposta, você pode executar todos os testes unitários localmente com o comando abaixo:

```bash
npm test
```

Você pode executar os testes para um único requisito passando, como parâmetro para o comando, o nome do arquivo de teste alvo:

```bash
npm test src/__tests__/requirement1.test.js
```

## Documentação da API do Mercado Livre
A aplicação _web_ irá consumir os dados da API do _Mercado Livre_ para realizar a busca de itens da loja online. Para realizar essas buscas, é necessário consultar os seguintes _endpoints_:

- Para listar as categorias disponíveis:
  - Tipo da requisição: `GET`
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- Para buscar por itens por termo:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
- Para buscar itens por categoria:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
- Para buscar itens de uma categoria por termo:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

Se você quiser aprender mais sobre a API do _Mercado Livre_, veja a [documentação](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas).

### Exemplo de requisição para listar categorias

```
"https://api.mercadolibre.com/sites/MLB/categories"
```

O retorno desse endpoint será algo no formato:

```json
[
    {
        "id": "MLB5672",
        "name": "Acessórios para Veículos"
    },
    ...
]
```

### Exemplo de requisição de busca

```
"https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola"
```

O retorno desse endpoint será algo como o exemplo que temos [neste arquivo](exemplo-motorola.json).

⚠ **ATENÇÃO! Se der erro de CORS aperte `ctrl + shift + r` no seu navegador** ⚠

### Linter

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento nós utilizamos neste projeto os linters `ESLint` e `Stylelint`. Para rodar os linters localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

LET'S GO!