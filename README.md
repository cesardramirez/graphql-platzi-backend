# graphql-platzi
Platzi - Curso Básico de GraphQL

### Listado de comandos

`npm i -g npx`  _Instalar npx de manera global._
<br>`npx gitignore node`  _Crea el archivo gitignore para proyectos node._
<br>`npm init -y`  _Inicia el package.json en el proyecto._
<br>`npm i graphql`  _Añade e instala la dependencia de GraphQL en el proyecto._
<br>`npm i express express-graphql`  _Añade e instala la dependencia de GraphQL en el proyecto._
<br>`npm i nodemon -D`  _Añade e instala la dependencia nodemon (como desarrollo). Al hacer cambios en archivos específicos reinicia el servidor automáticamente._
<br>`npm i graphql-playground-middleware-express`  _Añade una dependencia que maneja una interfaz más amigable para GraphQL._
<br>`npm i standard`  _Añade una dependencia que revisa el código fuente y realiza correcciones (lint)._
<br>`npm i graphql-tools`  _Añade una dependencia para utilidades adicionales de GraphQL._

Ejecutando el proyecto:

`node index.js`  _Ejecutar la app._
<br>`npm run dev`  _Ejecuta el servidor web con el script definido en el package.json_

URLs de acceso:
- GET (Playground) - http://localhost:3000/
- POST - [http://localhost:3000/graphql](http://localhost:3000/)

### Queries

- Obtiente todos los cursos.
  ```graphql
  {
    courses {
      _id,
      title,
      topic
    }
  }
  ```

  ```json
  {
    "data": {
      "courses": [
        {
          "_id": "anyid1",
          "title": "Mi titulo 1",
          "topic": "programacion"
        },
        {
          "_id": "anyid2",
          "title": "Mi titulo 2",
          "topic": "programacion"
        },
        {
          "_id": "anyid3",
          "title": "Mi titulo 3",
          "topic": "programacion"
        }
      ]
    }
  }
  ```
- Obtiente un único curso.
  ```graphql
  {
    course(id: "anyid1") {
      title,
      description
    }
  }
  ```

  ```json
  {
    "data": {
      "course": {
        "title": "Mi titulo 1",
        "description": "una descripcion"
      }
    }
  }
  ```
