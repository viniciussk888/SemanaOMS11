const express = require('express');
const cors = require('cors')
const routes = require('./routes')

const app = express();
app.use(cors({}))//esta liberado todos, para limitar: origin:'http://meusite.com'
app.use(express.json());//obriga express a reconhecer json

app.use(routes);



app.listen(3333);