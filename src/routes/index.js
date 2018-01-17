var express = require('express');
var router = express.Router();

var fs = require('fs');

var readmeContent = 'Not Yet';
 
fs.readFile(__dirname + '/../../readme.md', 'utf8', function(err, contents) {
	readmeContent = contents;
    console.log('Readme Content Set');
});

/* GET home page. */
router.get('/', function(req, res, next) {

	var showdown  = require('showdown'),
	    converter = new showdown.Converter(),
	    html      = converter.makeHtml(readmeContent);

    res.send(html);
});

router.get('/api', function(req, res, next) {
  res.render('index', { title: 'ScrapeMare API' });
});

module.exports = router;
