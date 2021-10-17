const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

const authRouter = require('./routes/user.router');

//Body Parser Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Passport Session Configuration
app.use(sessionMiddleware);

//Start passport sessions
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRouter);

app.use(express.static('build'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
