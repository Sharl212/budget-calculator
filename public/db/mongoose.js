var mongoose = require('mongoose');
var {MongoClient} = require('mongodb');

var promise = mongoose.createConnection('mongodb://admin:budgetcalculator22@ds237669.mlab.com:37669/budgetcalculator', {
  useMongoClient: true
});

mongoose.connect('mongodb://admin:budgetcalculator22@ds237669.mlab.com:37669/budgetcalculator');

module.exports = {mongoose};
