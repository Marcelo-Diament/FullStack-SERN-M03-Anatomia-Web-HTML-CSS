# FullStack-SERN-M03-Anatomia-Web-HTML-CSS

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

1. Crie o arquivo principal, conforme indicado na propriedade `main` do `package.json`, e abra-o no editor.

```sh
touch index.js && code index.js
```
