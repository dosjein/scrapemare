var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/v1/demand_scrape', function(req, res, next) {

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ status: 1 }));

});

module.exports = router;
