var express = require('express');
var router = express.Router();

//scraper parts
var fs = require('fs');
var md5 = require('md5');
var Nightmare = require('nightmare');
var screenRoot = __dirname + '/../../screenshots';
var cheerio = require('cheerio');
var moment = require('moment');

var nightMareBussy = false;

var requestHolder = {};

/* GET users listing. */
router.get('/v1/demand_scrape', function(req, res, next) {

	var returnVal = { status: 0 };

	if (nightMareBussy){
		returnVal.error = 'NightMare bussy';

	    setTimeout(function(){ 
			nightMareBussy = false;
	    }, 30000);
	}else if (req.query.scrape_url){
		returnVal.status = 1;

		var day = new Date();
		var thisMomnet = moment(day);

		returnVal.reqid = ''+moment(day , 'x');
		returnVal.webhook = false;

		returnVal.url = req.query.scrape_url;

		returnVal.resultUrl = '/v1/results?reqid=' + returnVal.reqid;

		console.log(req.query);

		if (req.query.web_hook_url){
			returnVal.webhook = req.query.web_hook_url;
		}

		returnVal.waitElement = 'document';

		if (req.query.wait_element){
			returnVal.waitElement = req.query.wait_element;
		}


		returnVal.waitTime = 300;

		if (req.query.wait_time){
			returnVal.waitTime = req.query.wait_time;
		}

		runNightMare(req.query.scrape_url , returnVal.webhook , returnVal.reqid , returnVal.waitElement , returnVal.waitTime);
	}

	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(returnVal));

});

/* GET users listing. */
router.get('/v1/results', function(req, res, next) {

	var returnVal = { status: 0 };

	if (req.query.reqid && requestHolder[req.query.reqid]){
		returnVal.status = 1;

		returnVal.result_html = requestHolder[req.query.reqid];

		//may-be I am an idiot , but I think it should stay
		setTimeout(function(){ 
			delete requestHolder[req.query.reqid];
		}, 60000);

	}else{
		returnVal.vacant = requestHolder;
	}

	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(returnVal));

});



function runNightMare(scrapeUrl , webHook , reqid , waitElement , waitTime){

	nightMareBussy = true;

	if (!fs.existsSync(screenRoot)) {
	    fs.mkdirSync(screenRoot, 0777);
	}

    if (process.env.NIGHT_DEBUG){
      nightmare = new Nightmare({ show: process.env.NIGHT_DEBUG });  
    }else{
      nightmare = new Nightmare({
      	show: true , 
      	//'load_policy': Nightmare.CONTINUE_DOMREADY
      });
      console.log('simple nighmare');
    }

    /**
     * Set nightmare commands.
     */

     console.log(scrapeUrl);

    nightmare
      .viewport(800, 1600)
      .goto(scrapeUrl)
      .wait(waitElement)
      .screenshot(screenRoot + '/' + md5(reqid))
      .evaluate(function(){
		return document.body.innerHTML;
	  }).then(function(body){
	    var $ = cheerio.load(body);
	    requestHolder[reqid] = body;
	    requestHolder[scrapeUrl] = body;

	    //update results for a short period
	    console.log('Got Results !!! ');

	    setTimeout(function(){ 
	    	nightmare.screenshot(screenRoot + '/' + md5(reqid)+'_2').then(function(body){
			    requestHolder[reqid] = body;
			    requestHolder[scrapeUrl] = body;
			    nightMareBussy = false;
		    });
	    }, waitTime);

	  });
}

module.exports = router;
