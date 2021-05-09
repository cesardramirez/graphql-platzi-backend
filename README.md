# graphql-platzi
Platzi - Curso Básico de GraphQL

### Listado de comandos

`npm i -g npx`  _Instalar npx de manera global._
<br>`npx gitignore node`  _Crea el archivo gitignore para proyectos node._
<br>`npm init -y`  _Inicia el package.json en el proyecto._
<br>`npm i graphql`  _Añade e instala la dependencia de GraphQL en el proyecto._
<br>`npm i express express-graphql`  _Añade e instala la dependencia de GraphQL en el proyecto._
<br>`npm i nodemon -D`  _Añade e instala la dependencia nodemon (como desarrollo). Al hacer cambios en archivos específicos reinicia el servidor automáticamente._
<br>`npm i graphql-playground-middleware-express`  _Dependencia que maneja una interfaz más amigable para GraphQL._
<br>`npm i standard`  _Dependencia que revisa el código fuente y realiza correcciones (lint)._
<br>`npm i graphql-tools`  _Dependencia para utilidades adicionales de GraphQL._
<br>`npm i dotenv`  _Dependencia para manejar las variables de entorno._
<br>`npm i mongodb`  _Dependencia para el cliente de mongodb._

Ejecutando el proyecto:

`node index.js`  _Ejecutar la app._
<br>`npm run dev`  _Ejecuta el servidor web con el script definido en el package.json_
<br>`npm run lint-fix`  _Ejecuta y soluciona problemas de código._

URLs de acceso:
- GET (Playground) - http://localhost:3000/
- POST - [http://localhost:3000/graphql](http://localhost:3000/)

### Queries

- Obtiene todos los cursos.
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
          "_id": "608f89930d04fb1305dbe2ff",
          "title": "Mi titulo 1",
          "topic": "programacion"
        },
        {
          "_id": "608f89930d04fb1305dbe300",
          "title": "Mi titulo 2",
          "topic": "programacion"
        },
        {
          "_id": "608f89930d04fb1305dbe301",
          "title": "Mi titulo 3",
          "topic": "programacion"
        }
      ]
    }
  }
  ```
- Obtiene un único curso.
  ```graphql
  {
    course(id: "608f89930d04fb1305dbe300") {
      title
      description
    }
  }
  ```

  ```json
  {
    "data": {
      "course": {
        "title": "Mi titulo 2",
        "description": "una descripcion"
      }
    }
  }
  ```
- Crear un curso.
  ```graphql
  mutation {
    createCourse(
      input: {
        title: "Curso de ejemplo 4"
        description: "Descripcion 4"
        topic: "diseño"
      }
    ) {
      _id
      title
      description
    }
  }
  ```

  ```json
  {
    "data": {
      "course": {
        "_id": "6098049757a12e0f8f6ab201",
        "title": "Curso de ejemplo 4",
        "description": "Descripcion 4"
      }
    }
  }
  ```
- Editar un curso.
  ```graphql
  mutation {
    editCourse(id: "6098321adaa09d1dd999d1f6", input: { title: "Mi titulo 4" }) {
      _id
      title
    }
  }
  ```

  ```json
  {
    "data": {
      "editCourse": {
        "_id": "6098321adaa09d1dd999d1f6",
        "title": "Mi titulo 4"
      }
    }
  }
  ```

- Obtiene todos los estudiantes.
  ```graphql
  {
    students {
      _id
      name
      email
    }
  }
  ```

  ```json
  {
    "data": {
      "students": [
        {
          "_id": "60983293daa09d1dd999d1f7",
          "name": "Cesar",
          "email": "cesardavid@gmail.com"
        },
        {
          "_id": "60983336daa09d1dd999d1f8",
          "name": "Andrea",
          "email": "andreita90@gmail.com"
        }
      ]
    }
  }
  ```
- Obtiene un único estudiante.
  ```graphql
  {
    student(id: "60983336daa09d1dd999d1f8") {
      name
      email
    }
  }
  ```

  ```json
  {
    "data": {
      "student": {
        "name": "Andrea",
        "email": "andreita90@gmail.com"
      }
    }
  }
  ```
- Crear un estudiante.
  ```graphql
  mutation {
    createStudent(input: { name: "Cesar", email: "cesardavid@gmail.com" }) {
      _id
      name
      email
    }
  }
  ```

  ```json
  {
    "data": {
      "createStudent": {
        "_id": "60983293daa09d1dd999d1f7",
        "name": "Cesar",
        "email": "cesardavid@gmail.com"
      }
    }
  }
  ```
- Editar un curso.
  ```graphql
  mutation {
    editStudent(
      id: "60983336daa09d1dd999d1f8"
      input: { email: "prueba@gmail.com" }
    ) {
      _id
      name
      email
    }
  }
  ```

  ```json
  {
    "data": {
      "editStudent": {
        "_id": "60983336daa09d1dd999d1f8",
        "name": "Andrea",
        "email": "prueba@gmail.com"
      }
    }
  }
  ```