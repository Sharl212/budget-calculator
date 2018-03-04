const mongoose = require('mongoose');

var listSchema = new mongoose.Schema({
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  id:{
    type: Number,
    required: true,
    default:null
  },
  _id: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  firstItem: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  firstPrice:{
    type: Number,
    required: true,
    minlength: 1,
    default: null
  },
  secondItem: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  secondPrice:{
    type: Number,
    required: true,
    minlength: 1,
    default: null
  },
  thirdItem: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  thirdPrice:{
    type: Number,
    required: true,
    minlength: 1,
    default: null
  },
  tBudget:{
    type: Number,
    required: true,
    minlength: 1,
    default: null
  }
});

var budgetCalculator = mongoose.model('budgetCalculator', listSchema);

module.exports = {budgetCalculator};
