const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const controllers = require('./controllers');
const hiscores = require('osrs-json-hiscores');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.listen(3000, () => console.log('jks-portfolio listening on port 3000!'));
app.use(express.static('dist'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use("/osrs", express.static(__dirname + '/portfolio-files/OSRS-Planner-App/dist'));
app.use("/osrs", express.static(__dirname + '/portfolio-files/OSRS-Planner-App/fonts'));
app.use("/greenfield", express.static(__dirname + '/portfolio-files/Greenfield-Product-Portal/dist'));

app.get('/products/list', (req, res) => {
  controllers.list(req.query.page, req.query.count, result => res.send(result));
});

app.get('/products/:product_id', (req, res) => {
  controllers.info(req.params.product_id, result => res.send(result));
});

app.get('/products/:product_id/styles', (req, res) => {
  controllers.styles(req.params.product_id, result => res.send(result));
});

app.get('/products/:product_id/related', (req, res) => {
  controllers.related(req.params.product_id, result => res.send(result));
});

app.get('/stats/:rsn', (req, res) => {
  console.log(req.params.rsn);
  hiscores.getStats(req.params.rsn).then(response => res.send(response));
});