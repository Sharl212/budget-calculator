			
		const   express             = require('express'), // node modules
				path                = require('path'),
				favicon             = require('serve-favicon'),
				logger              = require('morgan'),
				cookieParser        = require('cookie-parser'),
				_                   = require('lodash'),
				cookie              = require('cookie'),
				{MongoDB, ObjectID} = require('mongodb'),
				bodyParser          = require('body-parser'),
				port                = 4000;


		const {mongoose}          = require('./public/db/mongoose'),  // required app files
			  {budgetCalculator}  = require('./public/models/budgetCalculator-Model'),
			  {User}              = require('./public/models/users-Model'),
			  {authenticate}      = require('./public/middleware/authenticate'),
			   $                  = require('./node_modules/jquery/dist/jquery.js'),
			   application        = require('./routes/app'),
			   login              = require('./routes/login'),
			   registration       = require('./routes/registration'),
			   app                = express();

			//    cd C:\Program Files\MongoDB\Server\3.4\bin
			//    mongod.exe --dbpath /Users/sharl/mongo-data
			   
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

app.use('/', login);
app.use('/register', registration);
app.use('/app', application);

// app.use(express.static(path.join(__dirname, '/Client/dist/')));
//
// app.get('/', function(req,res){
// 	res.sendFile(path.join(__dirname + 'Client/dist/index.html'));
// });
//

// acquire mongoose model specification
function listPost(req, res){
	const note = new budgetCalculator({
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
			note.save().then(function(Data){
				return note.generateAuthToken();
			}).then(function(token){
				res.cookie('authorization', token).send(Data);
				console.log('token', token);
			}).catch(function(e){
				res.status(400).send(e);
			});
}
// POST to database
app.post('/post', authenticate, listPost);

// GET (display) Budget List viewed
function listGet(req, res){
		budgetCalculator.find({
			_creator: req.user._id
		}).then(function(Data){
			res.send(Data);
		}).catch(function(e){
			res.status(404).send(e);
		})
}

// GET all Calculated budgets
app.get('/budget', authenticate ,listGet);

// Display a specific list by ID
function DisplayOneById(req, res){
	let id = req.params.id;

		budgetCalculator.findOne({_creator: req.user._id, _id: id}).then(function(Data){
			if(!Data){
				return res.status(404).send();
			}
			res.status(200).send({Data});
		}).catch((err)=>{
			res.status(400).send(err);
		})
}
// administratorModel.findOne({'username': 'mohamed'}, function(err, resad){
// 	console.log('into mongoose findone');
// });
// GET one note by ID
app.get('/budget/:id' ,authenticate, DisplayOneById);


// DELETE a specific list by ID
function deleteList(req, res){
	var id = req.params.id;
	budgetCalculator.findOneAndRemove({
		_id: req.params.id,
		_creator: req.user._id
	}).then(function(doc){
		if(!doc){
			return res.status(404).send('not found');
		}
		console.log('done');
		res.send({doc});
	}, function(e){
		res.status(400).send(e);
	});
}

// DELETE existing list.
app.delete('/budget/:id', authenticate, deleteList);

// user registration
function userRegistration(req, res){
	var body = _.pick(req.body, ['email', 'password']);
	var user = new User(body);
	user.save().then(function() {
		return user.generateAuthToken();
	}).then(function(token) {
		res.cookie('authorization', token).send();
	}).catch(function(e) {
		res.status(400).send(e);
	})
}
	// user registration
	app.post('/registration', userRegistration);


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
	// user login with email, password
	app.post('/login', userLogin);


	// user log out {remove token}
function userLogout(req, res){
	let token = req.cookies.authorization;

	req.user.removeToken(token).then((user)=>{
		res.status(200).send(user);
	}).catch((e)=>{
		res.status(400).send();
	})

}
	// user log out {DELETE TOKEN}
	app.delete('/logout', authenticate, userLogout);




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
