var express = require('express');
var router = express.Router();

const collection = db.collection('documents');
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
