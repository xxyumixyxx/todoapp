var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//ログイン画面でformを使用するため
const bodyParser = require('body-Parser');

//各routerでurlと処理内容を記述していく
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// ログイン認証のミドルウェアであるpassport,passport-localの定義
const session = require('express-session');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));


// secret属性は指定した文字列を使ってクッキーIDを暗号化しクッキーIDが書き換えらているかを判断する。
app.use(session({
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  secret: 'secret_1',
  resave: false,
  saveUninitialized: false
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
