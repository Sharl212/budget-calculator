const express = require('express'),
      path    = require('path'),
      favicon = require('serve-favicon'),
      logger  = require('morgan'),
      cookieParser = require('cookie-parser'),
      _          = require('lodash'),
      cookie     = require('cookie'),
      bodyParser = require('body-parser');

  var {mongoose} = require('./public/db/mongoose'),
      port       = 4000,
      {budgetCalculator} = require('./public/models/budgetCalculator-Model'),
      {User}     = require('./public/models/users-Model'),
      {authenticate} = require('./public/middleware/authenticate'),
       $         = require('./node_modules/jquery/dist/jquery.js'),
       application = require('./routes/app'),
       login     = require('./routes/login'),
       registration = require('./routes/registration');

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

app.use(express.static(path.join(__dirname, 'Client')));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + '/Client/src/app/component/app.component.html'));
});


// app.get('/app', function(req,res){
//   res.sendFile(path.join(__dirname + '/Client/dist/views/app.html'));
// });
//
// app.get('/register', function(req,res){
//   res.sendFile(path.join(__dirname + '/Client/dist/views/registration.html'));
// });

// acquire mongoose model specification
function listPost(req, res){
  var Data = new budgetCalculator({
    _creator:req.user._id,
    _id: req.body._id,
    firstItem: req.body.firstItem,
    firstPrice: req.body.firstPrice,
    secondItem: req.body.secondItem,
    secondPrice: req.body.secondPrice,
    thirdItem: req.body.thirdItem,
    thirdPrice: req.body.thirdPrice,
    tBudget: req.body.tBudget
  });
  Data.save().then(function(Data){
     return Data.generateAuthToken();
  }).then(function(token){
      res.cookie('authorization', token).send({Data});
      console.log('token', token);
    }).catch(function(e){
    res.send(e)
  });
}
// POST to database
app.post('/post', authenticate, listPost);

// GET (display) Budget List viewed
function listGet(req, res){
    budgetCalculator.find({
      _creator: req.user._id,
    })
    .then(function(Data){
      return user.generateAuthToken();
    }).then(function(token){
      res.cookie('authorization', token).send(Data);
    }).catch(function(e){
      res.status(404).send(e);
    })
  // });
}
// GET all Calculated budgets
app.get('/budget', authenticate ,listGet);

// Display a specific list by ID
function DisplayOneById(req, res){
  budgetCalculator.findOne({
    _creator: req.user._id,
    _id: req.body._id
  }).then(function(Data){
    return user.generateAuthToken();
  }).then(function(token){
    res.cookie('authorization', token).send(Data);
  }).catch(function(e){
    res.status(404).send(e);
  });
}

// GET one note by ID
app.get('/budget/:id', authenticate , DisplayOneById);


// DELETE a specific list by ID
function deleteList(req, res){
  var id = req.params.id;
  budgetCalculator.findOneAndRemove({
    id: req.params.id,
    _creator: req.user._id
  }).then(function(doc){
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
       res.cookie('authorization', token).send(user);
       // res.header('x-auth',token).send(user);
       // localStorage.setItem('token','MY FUCKING token');
        console.log('APP.JS', token);
    });
  }).catch(function(e){
    res.status(400).send();
  });
}
  // user log out {remove token}
  function userLogout(req, res){
   req.user.removeToken(req.token).then(function(){
     res.status(200).send();
   }, function(req , res){
     res.status(400).send();
   });
  }


// DELETE existing list.
app.delete('/budget/:id', deleteList);

// user registration
app.post('/users', userRegistration);

// user login with email, password
app.post('/users/login', userLogin);

// user log out {DELETE TOKEN}
app.delete('/users/me/token', authenticate, userLogout);

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
