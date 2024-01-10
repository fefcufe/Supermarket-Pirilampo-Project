# Boas-vindas ao repositório do projeto Supermercado Pirilampo

<p align="center">
  <img src="./assets/images/pirilampo-logo.png" width="40%"/>
</p>

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver **qualquer dúvida**, nos envie no _Slack_ da turma! #vqv 🚀

Aqui, você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

<br />

## Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/learn/student-manual/codigo-de-conduta-da-pessoa-estudante).

<br />

## Entregáveis

<details>
<summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/876a615b-f578-4d65-a820-de9f3e5e57db/lesson/be8632bf-7bb7-4c01-a5d9-7aadac3a58f0) sempre que precisar!
</details>
  
<details>
<summary><strong>🧑‍💻 O que deverá ser desenvolvido</strong></summary><br />

Filomena Esmeraldina Santos, mais conhecida como **Dona Filó**, é uma empreendedora da cidade de Quixeramobim. O seu supermercado, Pirilampo, precisa passar por um processo de transformação digital, e é aqui que você entra, como uma pessoa desenvolvedora de software.

Mas muita calma nessa hora! O desenvolvimento de sites é um processo complexo, e por isso, dividiremos as responsabilidades com várias pessoas.

Você será responsável por desenvolver **funções** que serão utilizadas para implementar as regras de negócio do site de Dona Filó. As funcionalidades entregues por você envolvem **manipulação e busca de produtos em estoque**.

Como sua responsabilidade é pela parte lógica, nenhuma tela será desenvolvida (HTML e CSS). Isso fica por conta do time de front-end. Posteriormente, quando o time de front finalizar toda parte gráfica, irão utilizar as funções desenvolvidas por você para dar vida ao site. Legal, né?

<br />
</details>
  
<details>
  <summary><strong>📝 Habilidades a serem trabalhadas </strong></summary><br />

Neste projeto, verificaremos se você é capaz de:

- Usar `variáveis` e `tipos de dados` para representar e armazenar informações;
- Usar `array` para manipular uma lista de elementos;
- Usar `objetos` para representar informações de forma estruturada;
- Usar `for` para percorrer uma lista de dados;
- Usar `if...else` para inserir condições lógicas nas regras de negócio;
- Aplicar `lógica de programação` para resolução de problemas.

</details>

<details>
<summary><strong>🗓 Data de Entrega</strong></summary><br />

- Este projeto é individual;

- São 2 dias de projeto;

- Data para entrega final do projeto: `30/01/2024 23:59`.

</details>

<br />

## Orientações

<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br /> 

### 1. Clone o repositório e entre nele

### 2. Instale as dependências

- Execute o comando `npm install` no terminal

🚨 Pode ser que a saída do `npm install` sugira utilizar o comando `npm audit`. **NÃO** execute esse comando.

### 3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`. Use o comando `git branch` para isso

- Se você não estiver, mude para a branch `main`. Use `git checkout main`

- Agora, crie uma branch à qual você vai submeter os `commits` do seu projeto.
  
  - Você deve criar uma branch no formato `{seu-nome-e-sobrenome}-{nome-do-projeto}`. Exemplo: `maria-soares-supermercado-pirilampo`
  
  - Exemplo: `git checkout -b maria-soares-supermercado-pirilampo`

### 4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_. O comando `git status` irá mostrar essa informação para você, mostrando os arquivos em vermelho

- Adicione o novo arquivo ao _stage_ do Git. Use `git add .` para adicionar **todos** os arquivos ao _stage_ ou `git add nome-do-arquivo` para adicionar um arquivo específico

- Verifique com o comando `git status` que os arquivos adicionados ao _stage_ agora estão verde

- Faça o `commit` inicial com o comando `git commit -m "Iniciando o projeto. VAMOS COM TUDO"`
  
- Verifique com `git status` que você não possui mais alterações para serem commitadas. A mensagem _nothing to commit_ ou similar deve aparecer

- Adicione a sua branch com o novo `commit` ao repositório remoto com o comando `git push`. Exemplo: `git push -u origin maria-soares-supermercado-pirilampo`

### 5. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-040-supermercado-pirilampo/pulls)

- Clique no botão verde _"New pull request"_

- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**

- Coloque um título para o seu _Pull Request_

- Exemplo: _"[Maria Soares] Supermercado Pirilampo"_

- Clique no botão verde _"Create pull request"_

- Adicione uma descrição para o _Pull Request_, um título nítido que o identifique, e clique no botão verde _"Create pull request"_

- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-040-supermercado-pirilampo/pulls) e confira se o seu _Pull Request_ está criado

</details>

<details>
<summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

Faça `commits` das alterações que você fizer no código regularmente, pois assim você garante visibilidade para o time da Trybe e treina essa prática para o mercado de trabalho 😀;

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;
- Os comandos que você utilizará com mais frequência são:

  - `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;
  - `git add` _(para adicionar arquivos ao stage do Git)_;
  - `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;
  - `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;
  - `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

</details>
  
<details>
<summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu projeto está pronto para o _'Code Review'_ das outras pessoas estudantes, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _'code-review'_ e marque as outras pessoas estudantes:

- No menu à direita, clique no _link_ **'Labels'** e escolha a _label_ **code-review**;

- No menu à direita, clique no _link_ **'Assignees'** e escolha **o seu usuário**;

- No menu à direita, clique no _link_ **'Reviewers'** e digite `students`, selecione o time `tryber/students-sd-040`.

Caso tenha alguma dúvida, [aqui tem um vídeo explicativo](https://vimeo.com/362189205).
</details>
  
<details>
<summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.
</details>

<details>
<summary><strong>🎛 Linter</strong></summary><br />

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivo `package.json`.

Para poder rodar o `ESLint` lembre-se de executar o `npm install` dentro do projeto e depois rode o comando:

```bash
npm run lint
```

Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

Em caso de dúvidas, confira o material na plataforma sobre ESLint. Você vai encontrar esse conteúdo em nossa [Plataforma de Aprendizagem](https://app.betrybe.com/learn), na seção **Desenvolvimento Web - Vida Real**. O conteúdo sobre ESLint está na seção 34.

⚠️ **NESTE PROJETO O ESLINT NÃO SERÁ AVALIADO. VOCÊ PODE RODAR O TESTE LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** ⚠️
</details>
  
<details>
<summary><strong>🛠 Testes</strong></summary><br />

Todos os requisitos do projeto serão testados automaticamente por meio do `Jest`, uma ferramenta que testa seu código e confere se está conforme o esperado. Para rodar o avaliador automático localmente no seu projeto, execute um dos comandos abaixo:

_Para executar todos os testes, utilize:_

```bash
npm test
```

_Para executar testes de um arquivo específico, utilize `npm test nomeDoArquivoDeTeste`:_

```bash
npm test 6-search-product-by-name
```

Os requisitos do seu projeto são avaliados automaticamente. Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**:

- Na página do seu _Pull Request_, acima do "botão de merge", procure por `Evaluator job` e clique no link `Details`;

- Na página que se abrirá, procure pela linha `Evaluator step` e clique nela;

- Caso tenha dúvidas, peça ajuda no _Slack_.

⚠️ **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no README. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.
</details>

<details>
<summary><strong>🏗 Estrutura do projeto</strong></summary> <br />

- Cada requisito será desenvolvido em um arquivo específico;

- Cada requisito será desenvolvido em uma função específica;

- As informações de qual arquivo e qual função deverá ser trabalhada estão descritas no enunciado de cada requisito;

- A base de dados que deve ser considerada para alguns dos requisitos se encontra no arquivo `data.json`, dentro do diretório `src`;

- **Invista um tempo de qualidade para entender a estrutura do JSON!**;

- O JSON já está importado em todos os arquivos dos requisitos como um array de objetos javascript, na primeira linha. **Não remova essa linha.**;

- Você irá notar que no final de cada arquivo dos requisitos existe um código `module.exports`. **Não remova essa linha**;

- **Não delete** nenhum arquivo do projeto;

- Para verificar se a sua função foi criada corretamente você pode instalar a extensão `code runner` no _VSCode_;

- Caso queira testar sua função sem executar o teste local, você pode chamar a função e apresentar as informações retornadas com o `console.log()`. Mas remova antes de fazer o `push`.

</details>

<br />

## Requisitos do projeto

## `1 - Crie uma função que retorne a quantidade de produtos únicos em estoque`

O site do Supermercado Pirilampo possui uma área de Gestão de Estoque. Essa área precisa mostrar a quantidade de produtos únicos em estoque, um recurso muito útil para a Dona Filó conseguir gerenciar a variedade de mercadorias do seu estabelecimento. Você irá construir a função responsável por gerar essa informação, e para que você consiga visualizar onde sua função será utilizada, o time de front-end até desenvolveu um esboço!

<details>

<summary><strong>🏞️ Esboço</strong></summary>
<br />

| ![Contador de produtos únicos](./assets/images/unique-products-amount.png) |
| :------------------------------------------------------------------------: |
| Clique na imagem para ampliar                                              |

</details>

<details>

<summary><strong>💻 Desenvolva uma função que retorne o número de produtos únicos em estoque</strong></summary>

### Onde desenvolver seu código

- O arquivo que você implementará a solução se chama `1-unique-products-amount.js` e está dentro do diretório `src`;
- Sua implementação deve estar dentro da função `getUniqueProductsAmount`. Você **não deve** alterar o nome dela, mas caso haja necessidade, pode criar parâmetros para ela. Você também pode criar outras funções dentro do arquivo caso sinta a necessidade de organizar melhor o seu código.

### O que sua função deve fazer

- Sua função deve encontrar e retornar o tamanho o array `stockProducts` — que contém objetos de produtos do estoque.

<details>
<summary>📐 Exemplo</summary> <br />

| ![](./assets/images/req1-mapping.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

### Regras de negócio

- Sua função deve, obrigatoriamente, retornar um `number`;
- Produto único é um conceito utilizado para identificar exclusivamente um produto em estoque. Exemplo: o _Arroz Tio João_ tem 50 unidades em estoque, porém conta apenas como 1 produto;
- Considere que cada objeto do array `stockProducts` é um produto único.

### O que será testado

- O valor retornado pela função deve do tipo `number`;
- Ao utilizarmos o _data.json_ como fonte do estoque, a função deve retornar o número `29`;
- Em um cenário onde o estoque tenha 5 produtos únicos, a função deve retornar o número `5`;
- Em um cenário onde o estoque esteja vazio, a função deve retornar o número `0`.

</details>

<br/>

## `2 - Crie uma função que retorne os nomes dos produtos únicos em estoque`

Além da quantidade de produtos únicos, a área de Gestão de Estoque deve apresentar a lista com o nome dos produtos, funcionalidade muito útil para a Dona Filó visualizar todos os produtos que possui em estoque. Seria algo parecido com o esboço a seguir, segundo o time de front-end.

<details>

<summary><strong>🏞️ Esboço</strong></summary>
<br />

| ![Contador de produtos únicos](./assets/images/unique-products-name.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

<details>

<summary><strong>💻 Desenvolva uma função que retorne um array com os nomes dos produtos únicos em estoque</strong></summary>

### Onde desenvolver seu código

- O arquivo que você implementará a solução se chama `2-unique-products-name.js` e está dentro do diretório `src`;
- Sua implementação deve estar dentro da função `getUniqueProductsName`. Você **não deve** alterar o nome dela, mas caso haja necessidade, pode criar parâmetros para ela. Você também pode criar outras funções dentro do arquivo caso sinta a necessidade de organizar melhor o seu código.

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca do **nome** de cada produto. Ao final, a função deverá retornar um nova lista que armazene o nome dos produtos.

<details>
<summary>📐 Exemplo</summary> <br />

| ![](./assets/images/req2-mapping.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

### Regras de negócio

- Sua função deve, obrigatoriamente, retornar um `array` de `string`;
- O `array` retornado pela função deve ter o nome de **todos** os produtos do `array` de objetos em estoque.

<details>
<summary>🔡 Exemplo do formato esperado para o array de retorno</summary> <br />

```js
[
  'Arroz',
  'Feijão',
  'Macarrão',
  'Açúcar',
  ...
]
```

</details>

### O que será testado

- O valor retornado pela função deve ser um `array`;
- Todos os elementos do array retornado pela função devem ser do tipo `string`;
- Ao utilizarmos o _data.json_ como fonte do estoque, o índice `0` do array retornado pela função deve conter o valor `Arroz`;
- Ao utilizarmos o _data.json_ como fonte do estoque, o índice `24` do array retornado pela função deve conter o valor `Rúcula`;
- Em um cenário onde o estoque tenha 29 produtos, a função deve retornar um array com `29` elementos;
- Em um cenário onde o estoque esteja vazio, a função deve retornar um array com `0` elementos.

</details>

<br/>

## `3 - Crie uma função que retorne os nomes dos produtos indisponíveis do estoque`

Para conseguir se planejar melhor com a compra de produtos que estão em falta, nossa idolatrada Dona Filó precisa ter conhecimento de quais produtos são esses. Para isso, dentro da seção de Gerenciamento de Estoque, vamos ter uma subseção que mostra os produtos indisponíveis.

<details>

<summary><strong>🏞️ Esboço</strong></summary>
<br />

| ![Contador de produtos únicos](./assets/images/out-of-stock.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

<details>

<summary><strong>💻 Desenvolva uma função que retorne um array com os nomes dos produtos indisponíveis</strong></summary>

### Onde desenvolver seu código

- O arquivo que você implementará a solução se chama `3-out-of-stock-products.js` e está dentro do diretório `src`;
- Sua implementação deve estar dentro da função `getOutOfStockProducts`. Você **não deve** alterar o nome dela, mas caso haja necessidade, pode criar parâmetros para ela. Você também pode criar outras funções dentro do arquivo caso sinta a necessidade de organizar melhor o seu código.

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca do **nome** de cada produto que esteja indisponível no estoque. Ao final, a função deverá retornar uma nova lista que armazene o nome dos produtos.

<details>
<summary>📐 Exemplo</summary> <br />

| ![](./assets/images/req3-mapping.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

### Regras de negócio

- Sua função deve, obrigatoriamente, retornar um `array` de `string`;
- Um produto será considerado fora de estoque quando a propriedade `quantityInStock` dele for **igual a `0`**.

<details>
<summary>🔡 Exemplo do formato esperado para o array de retorno</summary> <br />

```js
[
  'Lentilha',
  'Suco de uva',
  'Nozes',
  ...
]
```

</details>

### O que será testado

- O valor retornado pela função deve ser um `array`;
- Todos os elementos do array retornado pela função devem ser do tipo `string`;
- Ao utilizarmos o _data.json_ como fonte do estoque, a função retorna um array com `4` elementos;
- Em um cenário onde o estoque tenha 20 produtos indisponíveis, a função retorna um array com `20` elementos.

</details>

<br/>

## `4 - Crie uma função que retorne os produtos com baixo estoque em um formato específico`

Boa gestora que é, Dona Filó busca manter seu supermercado sempre bem abastecido de mercadorias. Ela precisa ter visibilidade não só dos produtos que estão em falta, mas também dos produtos que estão prestes a se esgotar. Por conta disso, precisamos desenvolver uma área que apresente qual produto está com estoque baixo e quantos deste produto estão no estoque.

<details>

<summary><strong>🏞️ Esboço</strong></summary>
<br />

| ![Estoque baixo](./assets/images/low-stock.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

<details>

<summary><strong>💻 Desenvolva uma função que retorne um array com os produtos com baixo estoque, em um formato específico</strong></summary>

### Onde desenvolver seu código

- O arquivo que você implementará a solução se chama `4-low-stock-products.js` e está dentro do diretório `src`;
- Sua implementação deve estar dentro da função `getLowStockProducts`. Você **não deve** alterar o nome dela, mas caso haja necessidade, pode criar parâmetros para ela. Você também pode criar outras funções dentro do arquivo caso sinta a necessidade de organizar melhor o seu código.

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca do **nome** e da **quantidade em estoque** de cada produto que esteja com baixo estoque. Ao final, a função deverá retornar uma nova lista que armazene uma mensagem personalizada informando o **nome** e a **quantidade do produto**.

<details>
<summary>📐 Exemplo</summary> <br />

| ![](./assets/images/req4-mapping.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

### Regras de negócio

- Sua função deve, obrigatoriamente, retornar um `array` de `string`;
- Um produto será considerado com baixo estoque quando a propriedade `quantityInStock` dele for **maior que `0`** e **menor ou igual a `10`**;
- O formato dos elementos do array deve ser: `{nome do produto}: {quantidade em estoque} unidades`;
- Você não deve se preocupar com a flexão de números dos substantivos nesse momento. Se o produto tiver 1 unidade em estoque, a mensagem deverá ser apresentar a palavra _unidades_ no plural. Exemplo: _"Pipoca: 1 unidades"_.

<details>
<summary>🔡 Exemplo do formato esperado para o array de retorno</summary> <br />

```js
[
  'Nutella: 10 unidades',
  'Salmão: 5 unidades',
  'Pipoca: 1 unidades',
  ...
]
```

</details>

### O que será testado

- O valor retornado pela função deve ser um `array`;
- Todos os elementos do array retornado pela função devem ser do tipo `string`;
- Os elementos do array retornados devem estar no formato `{nome do produto}: {quantidade em estoque} unidades`;
- Ao utilizarmos o _data.json_ como fonte do estoque, a função retorna um array com `7` elementos;
- Em um cenário onde 20 produtos estão com baixo estoque, a função retorna um array com `20` elementos.

</details>

<br/>

## `5 - Crie uma função que retorne o total de produtos em estoque`

A quantidade única de produtos não consegue representar o tamanho do estoque. Um grande exemplo disso é que podemos ter 1 produto (_Farinha_) cadastrado no sistema, mas com centenas de pacotes no estoque. É importante para a mestra do empreendedorismo, Dona Filó, ter noção do tamanho do seu estoque, pois dependendo do movimento do seu supermercado, expandir o galpão que armazena todos os produtos pode ser uma opção. O time de front-end, já prevenindo tal funcionalidade, deixou um esboço para entendimento.

<details>

<summary><strong>🏞️ Esboço</strong></summary>
<br />

| ![Total de produtos](./assets/images/products-amount.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

<details>

<summary><strong>💻 Desenvolva uma função que retorne o número de produtos em estoque</strong></summary>

### Onde desenvolver seu código

- O arquivo que você implementará a solução se chama `5-products-amount.js` e está dentro do diretório `src`;
- Sua implementação deve estar dentro da função `getProductsAmount`. Você **não deve** alterar o nome dela, mas caso haja necessidade, pode criar parâmetros para ela. Você também pode criar outras funções dentro do arquivo caso sinta a necessidade de organizar melhor o seu código.

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca da **quantidade em estoque** de cada produto. Ao final, a função deverá retornar o somatório da quantidade de todos os produtos em estoque.

<details>
<summary>📐 Exemplo</summary> <br />

| ![](./assets/images/req5-mapping.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

### Regras de negócio

- Sua função deve, obrigatoriamente, retornar um `number`;
- Utilize a propriedade `quantityInStock`, do objeto de produto do estoque, para acumular os totais de todos os produtos do estoque.

### O que será testado

- O valor retornado pela função deve ser do tipo `number`;
- Ao utilizarmos o _data.json_ como fonte do estoque, a função deve retornar o número `633`;
- Em um cenário onde o estoque tenha 4857 produtos, a função deve retornar o número `4857`.

</details>

<br/>

## `6 - Crie uma função que busque um produto pelo nome`

Agora que terminamos de criar as funções que entregam a lógica da área de Gestão de Estoque, podemos partir para a criação das funções que vão ajudar a construir a Página Inicial do Supermercado Pirilampo. Iniciaremos a construção lógica da Página Inicial fornecendo a funcionalidade de buscar um produto pelo seu nome. A ideia é que essa função seja utilizada para desenvolver uma página parecida com o exemplo do esboço a seguir.

<details>

<summary><strong>🏞️ Esboço</strong></summary>
<br />

| ![Pesquisar produto por nome](./assets/images/search-product-by-name.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

<details>

<summary><strong>💻 Desenvolva uma função que permita buscar um produto pelo seu nome</strong></summary>

### Onde desenvolver seu código

- O arquivo que você implementará a solução se chama `6-search-product-by-name.js` e está dentro do diretório `src`;
- Sua implementação deve estar dentro da função `searchProductByName`. Você **não deve** alterar o nome dela, mas caso haja necessidade, pode criar parâmetros para ela. Você também pode criar outras funções dentro do arquivo caso sinta a necessidade de organizar melhor o seu código.

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca do **nome** de um produto específico. Caso o produto seja encontrado, a função irá retornar um novo objeto com as propriedades de **descrição** e **valor formatado do produto**. Caso contrário, sua função irá retornar **um valor nulo**.

<details>
<summary>📐 Exemplo: cenário onde um produto é encontrado</summary> <br />

| ![](./assets/images/req6-mapping.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

<details>
<summary>📐 Exemplo: cenário onde um produto não é encontrado</summary> <br />

| ![](./assets/images/req6-not-found-mapping.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

### Regras de negócio

- Sua função deverá receber o nome do produto por parâmetro;
- Considere que o nome do produto é único. Portanto essa função **não retorna** um `array` de produtos e sim um `object` com as informações dele;
- Se o produto for encontrado, sua função irá retornar um novo objeto com as seguintes chaves:
    - **`description`:** descrição do produto, sem nenhuma modificação

    - **`formattedPrice`:** prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`

- Se o produto não for encontrado, sua função irá retornar `null`;
- A função deve retornar `null` caso seja chamada **sem parâmetro**.

<details>
<summary>🔡 Exemplo do formato esperado caso a função encontre um produto</summary> <br />

```js
{
  description: 'Creme de avelã com cacau Nutella, pote de 350g, ideal para passar no pão ou comer com frutas.',
  formattedPrice: 'R$ 19.99'
}
```

</details>

### O que será testado

- Ao buscar por um produto existente, o valor retornado pela função **não** deve ser `null`;
- Ao buscar por um produto existente, a função deve retornar um objeto com as 2 chaves: `description` e `formattedPrice`;
- Ao buscar por um produto existente, a função deve retornar um objeto cuja chave `description` seja a mesma do objeto original e a chave `formattedPrice` esteja dentro do formato `R$ XX.YY` ou `R$ X.YY`;
- Ao buscar por um produto inexistente, o valor retornado pela função deve ser `null`;
- Ao chamar a função sem passar parâmetro, o valor retornado deve ser `null`.

</details>

<br/>

## `7 - Crie uma função que busque por produtos de uma marca específica`

Outra funcionalidade crucial para a Página Inicial é a busca por produtos através da marca. Segundo a inoxidável Dona Filó, existem algumas marcas que são as "queridinhas" da sua clientela. Sua lógica será desenvolvida em uma função separada, mas o time de front-end irá aproveitar a mesma área de pesquisa utilizada anteriormente. Para ter ideia de como será o layout dessa funcionalidade, o time também disponibilizou um esboço.

<details>

<summary><strong>🏞️ Esboço</strong></summary>
<br />

| ![Pesquisar produto por marca](./assets/images/search-products-by-brand.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

<details>

<summary><strong>💻 Desenvolva uma função que permita buscar produtos pela marca</strong></summary>

### Onde desenvolver seu código

- O arquivo que você implementará a solução se chama `7-search-products-by-brand.js` e está dentro do diretório `src`;
- Sua implementação deve estar dentro da função `searchProductsByBrand`. Você **não deve** alterar o nome dela, mas caso haja necessidade, pode criar parâmetros para ela. Você também pode criar outras funções dentro do arquivo caso sinta a necessidade de organizar melhor o seu código.

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca de produtos de uma **marca** específica. Caso produtos sejam encontrados, a função deverá retornar uma nova lista de objetos com as propriedades de **descrição** e **valor formatado do produto**. Caso contrário, sua função irá retornar **uma lista vazia**.

<details>
<summary>📐 Exemplo: cenário onde produtos são encontrados</summary> <br />

| ![](./assets/images/req7-mapping.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

<details>
<summary>📐 Exemplo: cenário onde produtos não são encontrados</summary> <br />

| ![](./assets/images/req7-not-found-mapping.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

### Regras de negócio

- Sua função deverá receber a marca por parâmetro;
- Se produtos forem encontrados, sua função irá retornar um novo `array` de objetos. Cada objeto deve ter as seguintes chaves:
    - **`description`:** descrição do produto, sem nenhuma modificação

    - **`formattedPrice`:** prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`

- Se nenhum produto for encontrado, sua função irá retornar um `array` vazio;
- A função deve retornar um `array` vazio caso seja chamada **sem parâmetro**.

<details>
<summary>🔡 Exemplo do formato esperado caso a função encontre produtos de uma marca</summary> <br />

```js
[
  {
    description: 'Batata Doce Hortifruti, pacote de 1kg, batatas doces frescas e saborosas.',
    formattedPrice: 'R$ 6.99'
  },
  {
    description: "Cenoura Hortifruti, pacote de 500g, cenouras frescas e crocantes.",
    formattedPrice: 'R$ 3.99'
  }
  ...
]
```

</details>

### O que será testado

- Ao buscar por uma marca existente, o valor retornado pela função deve ser um `array` de elementos do tipo `object`;
- Ao buscar por uma marca inexistente, o valor retornado pela função deve ser um array `vazio`;
- Ao chamar a função sem passar parâmetro, o valor retornado pela função deve ser um array `vazio`;
- Ao buscar pela marca "Hortifruti", utilizando o _data.json_ como fonte do estoque, a função deve retornar um array com `6` elementos;
- Ao buscar produtos pela marca, o array retornado deve ter objetos cuja chave `description` seja a mesma do objeto original e a chave `formattedPrice` esteja dentro do formato `R$ XX.YY` ou `R$ X.YY`.

</details>

<br/>

## `8 - Crie uma função que busque por produtos na promoção`

Toda clientela gosta de uma boa promoção, não é mesmo? Pensando nisso, uma área com os produtos em oferta é altamente estratégico para nossa apreciada Dona Filó. Seu desafio aqui será desenvolver a função que recuperará os produtos em promoção, para serem adicionados em uma nova seção.

<details>

<summary><strong>🏞️ Esboço</strong></summary>
<br />

| ![Produtos na promoção](./assets/images/products-on-sale.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

<details>

<summary><strong>💻 Desenvolva uma função que retorne os produtos em promoção</strong></summary>

### Onde desenvolver seu código

- O arquivo que você implementará a solução se chama `8-products-on-sale.js` e está dentro do diretório `src`;
- Sua implementação deve estar dentro da função `getProductsOnSale`. Você **não deve** alterar o nome dela, mas caso haja necessidade, pode criar parâmetros para ela. Você também pode criar outras funções dentro do arquivo caso sinta a necessidade de organizar melhor o seu código.

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca de produtos **em promoção**. Caso produtos sejam encontrados, a função irá retornar uma nova lista de objetos com as propriedades de **descrição**, o **valor formatado do produto** e a **informação booleana de oferta**.

<details>
<summary>📐 Exemplo</summary> <br />

| ![](./assets/images/req8-mapping.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

### Regras de negócio

- Um produto é considerado em promoção quando a chave `onSale` tiver o valor `true`;
- Se produtos forem encontrados, sua função irá retornar um novo `array` de objetos. Cada objeto deve ter as seguintes chaves:
    - **`description`:** descrição do produto, sem nenhuma modificação

    - **`formattedPrice`:** prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`

    - **`onSale`:** informação booleana identificando que o produto está em promoção

<details>
<summary>🔡 Exemplo do formato esperado caso a função encontre produtos em promoção</summary> <br />

```js
[
  {
    description: "Biscoito recheado Nestlé, pacote de 130g, sabor chocolate.",
    formattedPrice: 'R$ 1.99',
    onSale: true
  },
  {
    description: "Filé de salmão Seara, embalagem de 500g, fonte de proteínas e ômega-3.",
    formattedPrice: 'R$ 39.99',
    onSale: true
  },
  ...
]
```

</details>

### O que será testado

- Ao buscar por produtos em promoção, o valor retornado pela função deve ser um `array` de elementos do tipo `object`;
- Os objetos do array devem ter 3 chaves: `description`, `formattedPrice` e `onSale`;
- O array retornado deve ter objetos cuja chave `description` seja a mesma do objeto original, a chave `formattedPrice` esteja dentro do formato `R$ XX.YY` ou `R$ X.YY` e a chave `onSale` seja `true`.

</details>

<br/>

## `9 - Crie uma função que retorne todos os produtos com informações sobre alergia ou intolerância`

Com o aumento da demanda de produtos para pessoas com algum tipo de alergia ou intolerância alimentar, é importante que o site do supermercado mostre essas informações para ter mais assertividade nas vendas. O time de front-end ainda está conversando com a condecorada Dona Filó para entender onde colocar as informações e até nos entregou um esboço. Porém, já temos a demanda de criar uma função que retorne todos os produtos do estoque que podem gerar alergia ou intolerância em um formato específico.

<details>

<summary><strong>🏞️ Esboço</strong></summary>
<br />

| ![Informações de intolerância a alimentos](./assets/images/products-with-intolerance-info.png) |
|:----------------------------------------------------------------------------------------------:|
|                                  Clique na imagem para ampliar                                 |

</details>

<details>

<summary><strong>💻 Desenvolva uma função que retorne os produtos em estoque com informações de alergia ou intolerância alimentar</strong></summary>

### Onde desenvolver seu código

- O arquivo que você implementará a solução se chama `9-products-with-allergy-or-intolerance-info.js` e está dentro do diretório `src`;
- Sua implementação deve estar dentro da função `getProductsWithAllergyOrIntoleranceInfo`. Você **não deve** alterar o nome dela, mas caso haja necessidade, pode criar parâmetros para ela. Você também pode criar outras funções dentro do arquivo caso sinta a necessidade de organizar melhor o seu código.

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca de produtos **com informações de alergia e intolerância alimentar**. Caso produtos sejam encontrados, a função irá retornar uma nova lista de objetos com as propriedades de **descrição**, o **valor formatado do produto** e a **informação formatada de alergia e intolerância**.

<details>
<summary>📐 Exemplo</summary> <br />

| ![](./assets/images/req9-mapping.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

### Regras de negócio

- Sua função deve, obrigatoriamente, retornar um `array` de objetos com as seguintes chaves:
    - **`description`:** descrição do produto, sem nenhuma modificação

    - **`formattedPrice`:** prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`

    - **`allergyOrIntoleranceMessage`:** deve ser do tipo `string` e só será adicionada ao novo objeto quando houver informações de alergia ou intolerância no objeto do produto. Deve seguir o seguinte formato: `Pode conter: {item 1} {item 2} {item N}`. A quantidade de itens varia de acordo com o tamanho do array `allergyOrIntolerance` do produto em estoque

<details>
<summary>🔡 Exemplo do formato esperado para o array de retorno</summary> <br />

```js
[
  {
    description: 'Arroz integral Tio João, pacote de 1kg, rico em fibras e vitaminas.',
    formattedPrice: "R$ 10.99",
    allergyOrIntoleranceMessage: 'Pode conter: glúten soja castanhas'
  },
  {
    description: 'Lentilha cozida Vapza, lata de 200g, fonte de proteínas e fibras.',
    formattedPrice: "R$ 3.99"
  },
  ...
]
```

</details>

### O que será testado

- Ao buscar por produtos com informação de alergia ou intolerância, o valor retornado pela função deve ser um `array` cujo os elementos sejam do tipo `object`;
- Os objetos do array devem possuir, obrigatoriamente, as chaves `description` e `formattedPrice`;
- O valor da chave `description` deve ser o mesmo do objeto original, a chave `formattedPrice` deve estar no formato `R$ XX.YY` ou `R$ X.YY` e, quando o produto possuir informações de alergia ou intolerância, o valor da chave `allergyOrIntoleranceMessage` deve seguir o formato `Pode conter: {item 1} {item 2} {item N}`.

</details>

<br/>

## `10 - Crie uma função que retorne todos os produtos que possuam alguma vitamina em seu valor nutricional`

Pensando na saúde das pessoas, a incomensurável Dona Filó teve uma ideia: criar uma seção na Página Inicial para listar alimentos ricos em vitaminas. Você será responsável por desenvolver a função que retorna esses produtos, enquanto o time de front finaliza o layout.

<details>

<summary><strong>🏞️ Esboço</strong></summary>
<br />

| ![Produtos ricos em vitamina](./assets/images/products-rich-in-vitamin.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

<details>

<summary><strong>💻 Desenvolva uma função que retorne produtos ricos em vitaminas</strong></summary>

### Onde desenvolver seu código

- O arquivo que você implementará a solução se chama `10-products-rich-in-vitamin.js` e está dentro do diretório `src`;
- Sua implementação deve estar dentro da função `getProductsRichInVitamin`. Você **não deve** alterar o nome dela, mas caso haja necessidade, pode criar parâmetros para ela. Você também pode criar outras funções dentro do arquivo caso sinta a necessidade de organizar melhor o seu código.

### O que sua função deve fazer

- Sua função deve percorrer o array `stockProducts` — que contém objetos de produto do estoque — em busca de produtos **com informações de vitaminas**. Caso produtos sejam encontrados, a função irá retornar uma nova lista de objetos com as propriedades de **descrição**, o **valor formatado do produto** e a **lista de vitaminas disponíveis no produto**.

<details>
<summary>📐 Exemplo</summary> <br />

| ![](./assets/images/req10-mapping.png) |
|:-----:|
| Clique na imagem para ampliar |

</details>

### Regras de negócio

- Sua função deve, obrigatoriamente, retornar um `array` de objetos com as seguintes chaves:
    - **`description`:** descrição do produto, sem nenhuma modificação

    - **`formattedPrice`:** prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`

    - **`vitaminsInformation`:** deve ser um `array` de `string`. O texto dos elementos desse array deve seguir o formato `{nome da vitamina} - {quantidade de vitamina presente}`. A informação do nome da vitamina é encontrada nas **chaves do objeto `nutritionalInfo.vitamins`** do produto em estoque, já a informação de quantidade de vitamina presente é encontrada nos valores do mesmo objeto

<details>
<summary>🔡 Exemplo do formato esperado para o array de retorno</summary> <br />

```js
[
  {
    description: 'Nozes sem casca Fazenda São Francisco, pacote de 200g, fonte de gorduras boas e minerais.',
    formattedPrice: 'R$ 19.99',
    vitaminsInformation: [ 'vitaminB6 - 5' ]
  },
  {
    description: 'Filé de salmão Seara, embalagem de 500g, fonte de proteínas e ômega-3.',
    formattedPrice: 'R$ 39.99',
    vitaminsInformation: ['vitaminA - 1', 'vitaminD - 50', 'vitaminB6 - 25', 'vitaminB12 - 80']
  },
  {
    description: 'Carne bovina moída Swift, pacote de 500g, ideal para preparar diversas receitas.',
    formattedPrice: 'R$ 14.99',
    vitaminsInformation: [ 'vitaminB6 - 15', 'vitaminB12 - 50' ]
  },
  ...
]
```

</details>

### O que será testado

- A função `getProductsRichInVitamin` não deve retornar um array vazio;
- O valor retornado pela função deve ser um `array` cujo os elementos sejam do tipo `object`;
- Os objetos do array devem ter 3 chaves: `description`, `formattedPrice` e `vitaminsInformation`;
- O valor da chave `description` deve ser o mesmo do objeto origina, a chave `formattedPrice` dos objetos deve estar dentro do formato `R$ XX.YY` ou `R$ X.YY` e a chave `vitaminsInformation` dos objetos deve estar dentro do formato `{nome da vitamina} - {quantidade de vitamina presente}`;
- A chave `vitaminsInformation` dos objetos deve ser um `array`;

</details>

<br/>

---

<details>
<summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.
**Leva menos de 3 minutos!**

[Formulário de avaliação do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH40&template=betrybe/sd-0x-supermercado-pirilampo)

</details>
  
<details>
<summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

<br />
