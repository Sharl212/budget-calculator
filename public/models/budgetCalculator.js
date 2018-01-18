var mongoose = require('mongoose');
var _ = require('lodash');

var budgetCalculator = mongoose.model('budgetCalculator', {
  item1: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  item2: {
    type: String,
    required: false,
    minlength: 1,
    trim: true
  },
  price1:{
    type: Number,
    required: true,
    minlength: 1,
    default: null
  },
  price2:{
    type: Number,
    required: false,
    minlength: 1,
    default: null
  },
  TotalCost:{
    type: Number,
    required: true,
    minlength: 1,
    default: null
  }
});

module.exports = {budgetCalculator};
