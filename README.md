# graphql-platzi
Platzi - Curso Básico de GraphQL

### Listado de comandos

`npm i -g npx`  _Instalar npx de manera global._
<br>`npx gitignore node`  _Crea el archivo gitignore para proyectos node._
<br>`npm init -y`  _Inicia el package.json en el proyecto._
<br>`npm install`  _Generar la carpeta node_modules (necesario para ejecutar el proyecto)._
<br>`npm i graphql`  _Agrega e instala la dependencia de GraphQL en el proyecto._
<br>`npm i express express-graphql`  _Agrega e instala la dependencia de GraphQL en el proyecto._
<br>`npm i nodemon -D`  _Agrega e instala la dependencia nodemon (como desarrollo). Al hacer cambios en archivos específicos reinicia el servidor automáticamente._
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

## Bases de Datos - MongoDB
1. Ingresar al [Cluster](https://cloud.mongodb.com/v2/608f451ac3335838e67c6659#clusters) de MongoDB Cloud. _(Correo de Gmail - Acceso)_
<br>![](/docs/mongo-cloud/img/01_Cluster_MongoDB_Cloud.png)
2. Conectarse al Cluster Primario en Robo 3T.
<br>![](/docs/mongo-cloud/img/02_Robo3T_Connection.png)
<br>![](/docs/mongo-cloud/img/03_Robo3T_Authentication.png)
3. Realizar una consulta a una colección.
<br>![](/docs/mongo-cloud/img/04_Robo3T_Consulta.png)
5. Ejecutar un Query en el PlayGround de GraphQL.
<br>![](/docs/mongo-cloud/img/05_PlayGround_GraphQL.png)

## Postman
> Se pueden ejecutar los servicios también a través de [**Postman**](https://www.postman.com/) por lo cuál se dejan a continuación la colección para su ejecución:
- [Collection](https://github.com/cesardramirez/graphql-platzi/blob/main/docs/postman/Platzi%20-%20GraphQL.postman_collection.json)

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
- Obtiene un único curso (por medio de variables y fragmentos).
  Query
  ```graphql
  query infoCourse($course: ID!) {
    course(id: $course) {
      ...courseFields
    }
  }

  fragment courseFields on Course {
    _id
    title
    description
    people {
      _id
      name
    }
  }
  ```

  Query Variables
  ```json
  {
    "course" : "60983d5455d9b427067200bb"
  }
  ```

  Response
  ```json
  {
    "data": {
      "course": {
        "_id": "60983d5455d9b427067200bb",
        "title": "Mi titulo 4",
        "description": "una descripcion",
        "people": [
          {
            "_id": "60983f4961f3eb28d34942df",
            "name": "Andrea"
          }
        ]
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
- Crear un curso (por medio de variables).
  Mutation
  ```graphql
  mutation createCourse($input: CourseInput!) {
    createCourse(input: $input) {
      _id
      title
      description
    }
  }

  ```
  Query Variables
  ```json
  {
    "input": {
      "title": "Curso de ejemplo 5",
      "description": "Descripcion 5",
      "topic": "cultura",
      "level": "principiante"
    }
  }
  ```

  Response
  ```json
  {
    "data": {
      "createCourse": {
        "_id": "6150f5e2942ceb1b5ce811f9",
        "title": "Curso de ejemplo 5",
        "description": "Descripcion 5"
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
- Elimina un curso.
  ```graphql
  mutation {
    deleteCourse(id: "6098321adaa09d1dd999d1f6")
  }
  ```

  ```json
  {
    "data": {
      "deleteCourse": true
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
    student(id: "60983293daa09d1dd999d1f7") {
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
- Obtiene un estudiante (por medio de variables).
  Query
  ```graphql
  query infoStudent($student: ID!) {
    student(id: $student) {
      name
      email
    }
  }
  ```

  Query Variables
  ```json
  {
    "student": "60983293daa09d1dd999d1f7"
  }
  ```

  Response
  ```json
  {
    "data": {
      "student": {
        "name": "Cesar",
        "email": "cesardavid@gmail.com"
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
- Editar un estudiante.
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
- Elimina un estudiante.
  ```graphql
  mutation {
    deleteStudent(id: "6098321adaa09d1dd999d1f6")
  }
  ```

  ```json
  {
    "data": {
      "deleteStudent": true
    }
  }
  ```
- Asigna o agrega un estudiante a un curso.
  ```graphql
  mutation {
    addPeople(
      courseID: "60ee342200a30f84ee38faaf"
      personID: "60983293daa09d1dd999d1f7"
    ) {
      _id
      title
    }
  }
  ```

  ```json
  {
    "data": {
      "addPeople": {
        "_id": "60ee342200a30f84ee38faaf",
        "title": "Curso de ejemplo 1"
      }
    }
  }
  ```
- Asigna o agrega un estudiante a un curso (por medio de variables).
  Mutation
  ```graphql
  mutation addStudentToCurse($course: ID!, $person: ID!) {
    addPeople(courseID: $course, personID: $person) {
      _id
      title
    }
  }
  ```

  Query Variables
  ```json
  {
    "course": "60983d5455d9b427067200bb",
    "person": "60983f4961f3eb28d34942df"
  }
    ```

  Response
  ```json
  {
    "data": {
      "addPeople": {
        "_id": "60983d5455d9b427067200bb",
        "title": "Mi titulo 4"
      }
    }
  }
  ```
- Obtener todos los cursos con los estudiantes asociados.
  ```graphql
  {
    courses {
      _id
      title
      topic
      level
      people {
        _id
        name
        email
      }
    }
  }
  ```

  ```json
  {
    "data": {
      "courses": [
        { ... },
        { ... },
        { ... },
        {
          "_id": "60ee342200a30f84ee38faaf",
          "title": "Curso de ejemplo 1",
          "topic": "programación",
          "level": "principiante",
          "people": [
            {
              "_id": "60983293daa09d1dd999d1f7",
              "name": "Cesar",
              "email": "cesardavid@gmail.com"
            },
            {
              "_id": "60983f4961f3eb28d34942df",
              "name": "Andrea",
              "email": "andrea90@gmail.com"
            }
          ]
        }
      ]
    }
  }
  ```
- Realizar diferentes queries en una misma sentencia (por medio de los alias).
  ```graphql
  {
    AllCourses: courses {
      _id
      title
    }
    aliasCourse1: course(id: "60983d5455d9b427067200bb") {
      _id
      title
      description
    }
    aliasCourse2: course(id: "60983d5455d9b427067200bb") {
      _id
      description
      topic
    }
  }
  ```

  ```json
  {
    "data": {
      "AllCourses": [
        {
          "_id": "608f89930d04fb1305dbe300",
          "title": "Mi titulo 2"
        },
        {
          "_id": "608f89930d04fb1305dbe301",
          "title": "Mi titulo 3"
        },
        {
          "_id": "60983d5455d9b427067200bb",
          "title": "Mi titulo 4"
        },
        {
          "_id": "60ee342200a30f84ee38faaf",
          "title": "Mi titulo 1"
        }
      ],
      "course1": {
        "_id": "60983d5455d9b427067200bb",
        "title": "Mi titulo 4",
        "description": "una descripcion"
      },
      "course2": {
        "_id": "60983d5455d9b427067200bb",
        "description": "una descripcion",
        "topic": "diseño"
      }
    }
  }
  ```
- Realizar diferentes queries en una misma sentencia (por medio de los alias y fragmentos).
  ```graphql
  {
    allCourses: courses {
      ...courseFields
    }
    aliasCourse1: course(id: "60983d5455d9b427067200bb") {
      ...courseFields
      teacher
    }
    aliasCourse2: course(id: "60983d5455d9b427067200bb") {
      ...courseFields
      topic
    }
  }

  fragment courseFields on Course {
    _id
    title
    description
    people {
      _id
      name
    }
  }
  ```

  ```json
  {
    "data": {
      "allCourses": [
        {
          "_id": "608f89930d04fb1305dbe300",
          "title": "Mi titulo 2",
          "description": "una descripcion",
          "people": []
        },
        {
          "_id": "608f89930d04fb1305dbe301",
          "title": "Mi titulo 3",
          "description": "una descripcion",
          "people": []
        },
        {
          "_id": "60983d5455d9b427067200bb",
          "title": "Mi titulo 4",
          "description": "una descripcion",
          "people": []
        },
        {
          "_id": "60ee342200a30f84ee38faaf",
          "title": "Mi titulo 1",
          "description": "una descripcion",
          "people": [
            {
              "_id": "60983293daa09d1dd999d1f7",
              "name": "Cesar"
            },
            {
              "_id": "60983f4961f3eb28d34942df",
              "name": "Andrea"
            }
          ]
        }
      ],
      "aliasCourse1": {
        "_id": "60983d5455d9b427067200bb",
        "title": "Mi titulo 4",
        "description": "una descripcion",
        "people": [],
        "teacher": ""
      },
      "aliasCourse2": {
        "_id": "60983d5455d9b427067200bb",
        "title": "Mi titulo 4",
        "description": "una descripcion",
        "people": [],
        "topic": "diseño"
      }
    }
  }
  ```
