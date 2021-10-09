const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

const authRouter = require('./route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);

app.use(express.static('build'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
