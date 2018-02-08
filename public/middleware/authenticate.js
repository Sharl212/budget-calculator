const {User} = require('.././models/users-Model');
const cookieParser = require('cookie-parser');
const express = require('express');
const requestCookies = require('request-cookies');

var app = express();

app.use(cookieParser());

var authenticate = function(req, res, next){
  // var token = req.cookie.auth;
  // var token = req.header('x-auth');
  var token = req.header('set-cookie');
  // var token = Cookie('auth');
  console.log('authenticate.js',token);
  User.findByToken(token).then(function(user){
    if(!user){
      return Promise.reject();
    }
    req.user = user;
    req.token = token;
    next();
  }).catch(function(e){
    res.status(401).send();
  });
}

module.exports = {authenticate};
