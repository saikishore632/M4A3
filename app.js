const express = require('express');
const morgan = require('morgan');
// const courseRouter = require('./routes/courseRoutes');
// const userRouter = require('./routes/userRoutes');
const loanRouter = require('./routes/loanRoutes');
const app = express();
// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
// 3) ROUTES
// app.use('/api/v1/courses', courseRouter);
// app.use('/api/v1/users', userRouter);
app.use('/loans', loanRouter);
module.exports = app;