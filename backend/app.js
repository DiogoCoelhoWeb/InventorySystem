const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const mongoose = require('mongoose');

//Routers
const locationRouter = require('./routes/locations');
const itemRouter = require('./routes/items');
const batchRouter = require('./routes/batches');
const userRouter = require('./routes/users');
const notificationRouter = require('./routes/notifications');
const auditRouter = require('./routes/audit');

//App Init
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

require('dotenv').config()

//Database Connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.locals.db = mongoose.connection;
  console.log('Connected to MongoDB [' + mongoose.connection.name + ']');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

//API Route Manager
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Welcome to the API',
    maintenance: false
  });
});

app.use('/locations', locationRouter);
app.use('/items', itemRouter);
app.use('/batches', batchRouter);
app.use('/users', userRouter);
app.use('/notifications', notificationRouter);
app.use('/audit', auditRouter);

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
    error: 'The requested resource could not be found.'
  });
});

module.exports = app;