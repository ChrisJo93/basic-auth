const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

//Route includes
const authRouter = require('./routes/user.router');

//cors proxy
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Passport Session Configuration
app.use(sessionMiddleware);

//Start passport sessions
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/api/auth', authRouter);

//serve static files
app.use(express.static('build'));
const PORT = process.env.PORT || 5000;

//Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
