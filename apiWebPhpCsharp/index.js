
//carregar a biblioteca do express
var express = require('express');

const dbMysql = require('mysql');

//inicializando o express
var app = express();


//Criar a conexão com a base

var db = dbMysql.createConnection({

  host: "localhost:3306",
  user: "root",
  password: "Leroy123",
  database: "kazuken"


});

//iniciar conexão
db.connect(function(error) {
  if (error) throw error;
  console.log("Conectado com sucesso!");



});

//endpoints ou endereços web
app.get('/', function (req, res) {
  res.send('Toma troxa!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

