require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes');
const appDataSource = require('./models/appDataSource');
const { globalErrorHandler } = require('./utils/error');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use(routes);

app.get('/ping', function (req, res, next) {
  res.status(200).json({ message: 'pong' });
});

app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.statusCode = 404;
  next(err);
});

app.use(globalErrorHandler);

appDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
