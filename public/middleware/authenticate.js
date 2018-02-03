const {User} = require('.././models/users-Model');

var authenticate = function(req, res){
  var token = req.header('x-auth');
  User.findByToken(token).then(function(user){
    if(!user){
      return Promise.reject();
    }
      res.send(user);
  }).catch(function(e){
    res.status(401).send();
  });
}

module.exports = {authenticate};
