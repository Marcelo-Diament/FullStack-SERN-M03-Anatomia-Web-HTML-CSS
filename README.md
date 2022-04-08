# Full Stack - SERN | Módulo 03 - Anatomia Web: HTML + CSS

Práticas ao vivo do Módulo 03 (Anatomia da Web: HTML + CSS) do curso de programação Full Stack (SERN Stack)

## Aula 01 | Como funciona a Web

Objetivos:

* Criação de repositório git

* Início do projeto Express

* Trabalhando com métodos HTTP

* Testes com Insomnia/Postman

### Atividade 01 | Como podemos iniciar um projeto com git?

1. Criar um repositório no Github.

2. Criar uma pasta local.

3. Conectar ao repositório local.

```sh
git init

git remote add origin <url-repo>
```

### Atividade 02 | Inicializando um projeto Express

1. Inicializar projeto.

```sh
npm init -y
```

_Cria o arquivo package.json com as configurações do projeto._

2. Instalar Express (como dependência).

```sh
npm install express --save
```

_Instala o pacote node express e o salva como "dependency" no package.json, permitindo criarmos um servidor node._

3. Instalar nodemon (como dependência de desenvolvimento).

```sh
npm install nodemon --save -D
```

_Instala o pacote node nodemon e o salva como "devDependency" no package.json, permitindo que o servidor node seja reiniciado a cada atualização salva._

4. Definir os scripts `start` e `dev` no package.json.

```json
{
  // ...
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
  // ...
}
```

_Permite que executemos o arquivo index.js através do comando `npm run start` ou `npm run dev` ._

> **Por que usamos `node` no script `start` e `nodemon` no script `dev` ?** Pois, como sabemos, o `nodemon` reinicia o servidor sempre que há atualizações. Esse comportamento é desejável no ambiente local, mas não em um ambiente de produção (esse comportamento prejudicaria a experiência do usuário).

### Atividade 03 | Você sabe o que é CRUD?

CRUD é um acrônimo para "**C**reate, **R**ead, **U**pdate, **D**elete" (as 4 principais operações quando se trata de consumo e manipulação de dados). Cada uma dessas operações possui um método HTTP (ou verbo) equivalente, conforme ilustrado a seguir.

| Operação | Método    |
| -------- | --------- |
| Create   | POST      |
| Read     | GET       |
| Update   | PUT/PATCH |
| Delete   | DELETE    |

1. Criar o arquivo principal, conforme indicado na propriedade `main` do `package.json`, e abri-lo no editor.

```sh
touch index.js && code index.js
```

2. Inicializar o servidor Express.

```js
const express = require("express")
const app = express()
const port = 3333

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
```

_Importamos o Express, atribuímos à const `app` , definimos uma porta (3333) e indicamos que o servidor "escute" a porta `3333` do nosso servidor local ( `localhost` )._

3. Criar uma rota `GET` para o caminho `/usuario`.

```js
app.get('/usuario', (req, res) => res.send('<h1>Rota GET para "/usuario"</h1>'))
```

_Para verificar se deu tudo certo, execute `npm run dev` no terminal e acesse `http://localhost:3333/usuario` em seu browser. Só é possível visualizarmos o retorno pois estamos usando o método HTTP `GET` - não conseguimos visualizar as respostas (ou response) no navegador quando utilizamos os demais métodos._

4. Criar uma rota `POST` para o caminho `/usuario`, que adicione um novo usuário na lista.

```js
app.post('/usuario', (req, res) => res.send('<h1>Rota POST para "/usuario"</h1>'))
```

_Como mencionado anteriormente, não é possível validarmos essa rota simplesmente acessando `http://localhost:3333/usuario` . Para validarmos essa etapa, vamos utilizar o Postman ou o Insomnia. Para realizarmos essa validação, copie o arquivo `./utils/FullStack-SERN-M03-Anatomia-Web-HTML-CSS.postman_collection.json` , abra o Postman, clique em `Import` ou `Importar` , selecione a opção `Raw Text` , cole o `JSON` e clique em `Continuar` . Confirme a importação e abra a `request` "Adicionar usuário", localizada dentro da pasta `Usuário` . Você também pode usar esse link para realizar a importação - https://www.getpostman.com/collections/0c94808f32666befbae6._

| Vale ressaltar que normalmente as respostas ( `response` ) são enviadas no formato `JSON` , mas por enquanto estamos retornando um `HTML` simples. Posteriormente iremos construir e consultar nossa própria API.

No caso do `POST` , precisamos enviar o conteúdo dentro do `body` da `request` . Por isso, nessa `request` temos o seguinte `JSON` no body:

```json
{
    "id": 1,
    "nome": "Fulano",
    "sobrenome": "da Silva"
}
```

**Notas:**

* O `id` costuma ser gerado automaticamente.

* Confira a documentação que montamos para você, [clique aqui](https://documenter.getpostman.com/view/6340323/UVyxPYZz).

5. Criar uma rota `PUT` para o caminho `/usuario/:id`, que "atualize" um novo usuário na lista.

```js
app.put('/usuario/:id', (req, res) => res.send(`<h1>Rota PUT para "/usuario" de id ${req.params.id}</h1>`))
```

_Repare que indicamos uma variável no endpoint chamada `id` - esse valor pode ser resgatado ao verificarmos o parâmetro da `request` de nome `id` ( `req.params.id` ). Para declararmos variáveis em URLs de requisições, basta adicionarmos `:` antes do nome pelo qual gostaríamos de acessar a variável. Por exemplo: nesse caso, `:id` será o valor enviado após `http://localhost:3333/usuario/` . Como nossa variável `{{ID}}` possui o valor configurado como `1` , nosso `:id` será `1` também. Além do `id` , teríamos de enviar um `body` em nossa request (já estará feito na coleção do Postman); esse `body` representa o conteúdo ( `payload` ) a ser atualizado (para o usuário cujo `id` coincida com o `id` enviado na `request` /URL)._

```json
{
    "nome": "Ciclano",
    "sobrenome": "da Silva"
}
```

6. Criar uma rota `DELETE` para o caminho `/usuario/:id`, que "exclua" um usuário existente na lista.

```js
app.delete('/usuario/:id', (req, res) => res.send(`<h1>Rota DELETE para "/usuario" de id ${req.params.id}</h1>`))
```

_Dessa vez usamos o `:id` , mas não precisamos enviar nenhum `body` , pois o usuário seria simplesmente excluído._
