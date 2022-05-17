# Notas
Este es un RestServer en Node.js

No olvidar reconstruir la carpeta node_modules con el comando:
```
npm install
```

COMANDOS PARA EJECUTAR EN EL CMD:
```
node app.js    o bien     nodemon app.js 
```

VERIFICAR EN CHROME O EN POSTMAN EL LOCALHOST:
```
GET O POST http://localhost:8080/api/usuarios/
PUT O DELETE http://localhost:8080/api/usuarios/XXXX ID XXXX

http://localhost:8080/
http://localhost:8080/api/usuarios?q=hola&nombre=alexander&apikey=123
http://localhost:8080/api/usuarios?q=hola&apikey=123
http://localhost:8080/api/usuarios?q=hola&apikey=123&page=1&limit=10
http://localhost:8080/api/usuarios/10
```