
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const BodyParser = require('body-parser');

require('./database');


const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
var porta = process.env.PORT || 3003;
app.listen(porta);
