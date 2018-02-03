const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1,
    validate:{
      isAsync: true,
        validator: validator.isEmail,
        message: `{VALUE} is not a valid email`
      },
    },
    password: {
      type: String,
      minlength: 9,
      required: true
    },
    tokens: [{
       access:{
         type:String,
         required: true
       },
       token:{
         type: String,
         required: true
       }
    }]
  });

// convert the schema to JSON format
  UserSchema.methods.toJSON = function(){
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id','email']);
  };


// generating the token
  UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens.push({access, token});

    return user.save().then(function(){
      return token;
    });
  };

// search by token to authenticate user login
  UserSchema.statics.findByToken = function(token){
    var User = this;
    var decoded;

    try {
    var  decoded = jwt.verify(token, 'abc123');
    } catch(e){
      return Promise.reject();
    }

  return User.findOne({
      '_id': decoded._id,
      'tokens.token': token,
      'tokens.access': 'auth'
    });
}

var User = mongoose.model('User', UserSchema);

module.exports = {User};
