var express = require('express');
var router = express.Router();
/* GET home page. */

router.get('/app', function(req, res, next) {
  res.render('app', { title: 'Express' });
  // res.json([{
  // 	id: 1,
  // 	username: "samsepi0l"
  // }, {
  // 	id: 2,
  // 	username: "D0loresH4ze"
  // }]);
});

module.exports = router;
