const express = require('express');
const app = express();

app.listen(3000, () => console.log('jks-portfolio listening on port 3000!'));
app.use(express.static('dist'));
app.use(express.static('fonts'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});