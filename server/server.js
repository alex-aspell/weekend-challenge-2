const express = require('express');
const app = express();

app.use(express.static('server/public'));
const bodyParser = require('body-parser');
app.use ( bodyParser.urlencoded({extended:true}));

const calculateRouter = require('./router/calculateRouter');
app.use ('/calculate', calculateRouter);

const port = 12345;
app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
