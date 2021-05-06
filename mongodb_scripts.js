use platzi-cursos
db.createCollection("courses")
db.courses.insertMany([{"title":"Mi titulo 1","teacher":"Mi profesor","description":"una descripcion","topic":"programacion"},{"title":"Mi titulo 2","teacher":"Mi profesor","description":"una descripcion","topic":"programacion"},{"title":"Mi titulo 3","teacher":"Mi profesor","description":"una descripcion","topic":"programacion"}])
db.courses.find()
db.courses.find({"_id":ObjectId("608f89930d04fb1305dbe300")})