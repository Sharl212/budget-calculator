var mongoose = require('mongoose');

var promise = mongoose.createConnection('mongodb://localhost:27017/budgetCalculator', {
  useMongoClient: true
});

mongoose.connect('mongodb://localhost:27017/budgetCalculator');

module.exports = {mongoose};
