//carregar a biblioteca do express
var express = require('express');

const dbMysql = require('mysql');

//incializando o express
var app = express();



//Criar a conexão com a base
var db = dbMysql.createConnection({

  //host: "db4free.net",
  //user: "samorvell",
  //password: "R@faella2812",
  //database: "kazuken"

  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "Leroy123",
  database: "kazuken"


});


//iniciar conexão
db.connect(function(error) {
  if (error) throw error;
  console.log("Conectado com sucesso!");

});

//endpoints ou endereços da web
app.get('/', function (req, res) {
  res.send('Hello World!');
});


//criar o novo endpoint
app.get('/nomecliente', function(req, res){
    let nome = {
        "Agora foi" : "troxa"
    }
    res.json(nome);
});

//a porta que será exposta
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});