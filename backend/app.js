const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error')
const cookieparser = require('cookie-parser');

app.use(express.json());
app.use(cookieparser());

//Route Imports
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);

//Middleware for Error
app.use(errorMiddleware);


module.exports = app;