const mongoose = require('mongoose');
const express = require('express');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

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

// DELETE token
  UserSchema.methods.removeToken = function(token){
    var user = this;

    return user.update({
      $pull:{
        tokens:{token}
      }
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


  // LOG IN {find By Credentials}
  UserSchema.statics.findByCredentials = function(email , password){
    var User = this;

    return User.findOne({email}).then(function(user){
      if(!user){
        return Promise.reject();
      }

      return new Promise((resolve, reject) => {
        // Use bcrypt.compare to compare password and user.password
        bcrypt.compare(password, user.password, (err, res) => {
          if (res) {
            resolve(user);
          } else {
            reject();
          }
        });
      });
    });
  };

 // hash user password
 UserSchema.pre('save', function(next){
   var user = this;
   if(user.isModified('password')){
     bcrypt.genSalt(10, function(err, salt){
       bcrypt.hash(user.password, salt, function(err, hash){
        user.password = hash;
         next();
       });
     });
   }else{
     next();
   }
 });
var User = mongoose.model('User', UserSchema);

module.exports = {User};
