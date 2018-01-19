var express = require('express'),
    path    = require('path'),
    favicon = require('serve-favicon'),
    logger  = require('morgan'),
    cookieParser = require('cookie-parser'),
    _          = require('lodash'),
    bodyParser = require('body-parser');

var {mongoose} = require('./public/db/mongoose'),
    {budgetCalculator} = require('./public/models/budgetCalculator-Model'),
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// acquire mongoose model specification
function listPost(req, res){
  var body = _.pick(req.body, ['_id','item1','item2','price1','price2','TotalCost']);
  var listPost = new budgetCalculator(body);
  listPost.save().then(function(doc){
    res.send(doc);
  },function(e){
    res.status(400).send(e);
  });
}

// GET (display) Budget List viewed
function listGet(req, res){
  budgetCalculator.find().then(function(list){
    res.send({
      list
    });
  },function(e){
    res.status(404).send(e);
  });
}
// Display a specific list by ID
function DisplayOneById(req, res){
  var id = req.params.id;
  budgetCalculator.findById(id).then(function(doc){
    console.log('done');
    res.send({doc});
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
  })
}

// POST to database
app.post('/budget',listPost);

// GET all Calculated budgets
app.get('/budget',listGet);

// GET one note by ID

app.get('/budget/:id',DisplayOneById);

// DELETE existing list.
app.delete('/budget/:id', deleteList);

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

app.listen(3000, function(){
  console.log('server up on 3000');
});
