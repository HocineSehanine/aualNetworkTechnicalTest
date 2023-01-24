const express = require('express');
const productsRouter = require('./routers/articalEditor.router');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());

app.use('/api', productsRouter);

module.exports = app;