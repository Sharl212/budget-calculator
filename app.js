const express = require('express'),
      path    = require('path'),
      favicon = require('serve-favicon'),
      logger  = require('morgan'),
      cookieParser = require('cookie-parser'),
      _          = require('lodash'),
      bodyParser = require('body-parser');

  var {mongoose} = require('./public/db/mongoose'),
      port       = 4000,
      {budgetCalculator} = require('./public/models/budgetCalculator-Model'),
      {User}     = require('./public/models/users-Model'),
      {authenticate} = require('./public/middleware/authenticate'),
       $         = require('./node_modules/jquery/dist/jquery.js'),
       index     = require('./routes/index'),
       users     = require('./routes/users');

const {MongoDB, ObjectID} = require('mongodb');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// acquire mongoose model specification
function listPost(req, res){
  var body = req.body;
  var Data = new budgetCalculator(body);
  Data.save().then(function(Data){
    res.send(Data);
  }).catch(function(e){
    res.send(e)
  });
}

// GET (display) Budget List viewed
function listGet(req, res){
  budgetCalculator.find().then(function(Data){
    res.send({Data});
  },function(e){
    res.status(404).send(e);
  });
}
// Display a specific list by ID
function DisplayOneById(req, res){
  var id = req.params.id;
  budgetCalculator.findById(id).then(function(doc){
    res.send({
      Title:doc._id,
      item:doc.firstItem,
      price:doc.firstPrice,

    });
  }, function(e){
    res.status(400).send(e);
  })
}
// DELETE a specific list by ID
function deleteList(req, res){
  var id = req.params.id;
  budgetCalculator.findByIdAndRemove(id).then(function(doc){
    if(!doc){
      return res.status(400).send('not found');
    }
    console.log('done');
    res.send({doc});
  }, function(e){
    res.status(400).send(e);
  });
}

// user registration
function userRegistration(req, res){
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);
  user.save().then(function() {
    return user.generateAuthToken();
  }).then(function(token) {
    res.header('x-auth', token).send(user);
  }).catch(function(e) {
    res.status(400).send(e);
  })
}

// POST /users/login {email, password}
function userLogin(req, res){
  var body = _.pick(req.body, ["email", "password"]);

  User.findByCredentials(body.email, body.password).then(function(user){
    return user.generateAuthToken().then(function(token){
      res.header('x-auth', token).send(user);
    });
  }).catch(function(e){
    res.status(400).send();
  });
}

// POST to database
app.post('/',listPost);

// GET all Calculated budgets
app.get('/budget',listGet);

// GET one note by ID
app.get('/budget/:id',DisplayOneById);

// DELETE existing list.
app.delete('/budget/:id', deleteList);

// user registration
app.post('/users', userRegistration);

// user login with email, password
app.post('/users/login', userLogin);

// user log out {DELETE TOKEN}
app.delete('/users/me/token', authenticate ,function(req, res){
  req.user.removeToken(req.token).then(function(){
    res.status(200).send();
  }, function(req , res){
    res.status(400).send();
  });
});

// log in with the same token value
app.get('/users/me', authenticate ,function(req, res){
  res.send(req.user);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(port, function(){
  console.log(`server up on ${port}`);
});
