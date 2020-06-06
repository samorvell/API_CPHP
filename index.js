
//carregar a biblioteca do express
var express = require('express');

const dbMysql = require('mysql');

//inicializando o express
var app = express();


//Criar a conexão com a base
 var db = dbMysql.createConnection({

   host: "127.0.0.1",
   user: "root",
   password: "Leroy123",
   database: "kazuken",
   port: 3306,
   ssl: true


 });

//Criar a conexão com a base
// var db = dbMysql.createConnection({

//   host: "samorvell.mysql.database.azure.com",
//   user: "samorvell@samorvell",
//   password: "R@faella2812",
//   database: "faculdade",
//   port: 3306,
//   ssl: true


// });

//iniciar conexão
db.connect(function (error) {
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

//função para excutar queries
function execSQLQuery(sqlQry, res) {
  conectar();
  db.query(sqlQry, function (error, results, fields) {
    if (error)
      res.json(error);
    else
      res.json(results);
    console.log('executou!');
    db.end();
  });
}

//incluir a requisação do json parse
const bodyParser = require('body-parser');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//cria o select
app.get('/produto', function (req, res) {
  const sql = "select * from produto";
  execSQLQuery(sql, res);
});

//cria select por id(GET)
app.get('/produto/:PK', function (req, res) {
  const sql = `select pk, cod_produto, descricao_prod, preco_prod_venda, codigo_fabricante
                 from produto where PK = ${req.params.PK}`;
  execSQLQuery(sql, res);
});

//cria select por id(GET) notnull
// app.get('/produtos:PK', function (req, res) {
//   const sql = `select pk, cod_produto, descricao_prod, preco_prod_venda, codigo_fabricante
//                  from produto where PK = ${req.params.PK}`;
//   execSQLQuery(sql, res);
// });

//inserir na tabela (POST)
app.post('/produto', function (req, res) {
  const { COD_PRODUTO, DESCRICAO_PROD, PRECO_PROD_VENDA, CODIGO_FABRICANTE } = req.body;
  const sql = `insert into produto (COD_PRODUTO, DESCRICAO_PROD, PRECO_PROD_VENDA, CODIGO_FABRICANTE) 
                values ('${COD_PRODUTO}', '${DESCRICAO_PROD}', '${PRECO_PROD_VENDA}','${CODIGO_FABRICANTE}');`;
  execSQLQuery(sql, res);
});

//Atualizar tabela (PUT)
app.post('/produto', function (req, res) {
  const { COD_PRODUTO, DESCRICAO_PROD, PRECO_PROD_VENDA, CODIGO_FABRICANTE } = req.body;
  const sql = `insert into produto (COD_PRODUTO, DESCRICAO_PROD, PRECO_PROD_VENDA, CODIGO_FABRICANTE) 
                            values ('${COD_PRODUTO}', '${DESCRICAO_PROD}', '${PRECO_PROD_VENDA}','${CODIGO_FABRICANTE}');`;
  execSQLQuery(sql, res);
});



//metodo excluir (DELETE)
app.delete('/produto/:pk', function(request, response){
  const id = request.params.id;
  const sql = `dele from produto where pk = '${PK}';`
  execSQLQuery(sql, response0);
});

//Configurar o CORs
var cors = require('cors')
//configuração cors
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Hraders", "origin X-Requested-With, Contet-Type, Accept");
  next();
});


