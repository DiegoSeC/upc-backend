require('dotenv').load();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/authentication');
const reservationRouter = require('./routes/reservation');
const barberRouter = require('./routes/barbers');
const creditRouter = require('./routes/credit_card');
const hairCutRouter = require('./routes/hair_cuts');

var app = express();

const jwt = require('express-jwt');

const jwtMiddleWare = jwt({
  secret: process.env.SECURITY_TOKEN
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', jwtMiddleWare, usersRouter);

app.use('/auth', authRouter);
app.use('/reservations', jwtMiddleWare, reservationRouter);
app.use('/barbers', jwtMiddleWare, barberRouter);
app.use('/credit_cards', jwtMiddleWare, creditRouter);
app.use('/hair_cuts', jwtMiddleWare, hairCutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
