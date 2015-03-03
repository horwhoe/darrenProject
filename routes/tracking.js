/**
 * tracking.js
 * This module will call tracking Api to get tracking details
 */

function queryById(req, res) {
	var trackingId = req.params.id;
	var response = {};
	if (trackingId) {
		response.id = trackingId;
		response.status = getStatus();
		response.shippedDate = getShippedDate();
		response.deliveredDate = getDeliveredDate(response.status);
		response.location = getCurrentLocation();
	} else {
		response.error = "Please enter a Tracking Number";
	}
	makeResponse(req, res, response);
}

function formatDate(now) {
	// return now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
	return now.toDateString();
}

function getCurrentLocation() {
	var loc = ['SFO', 'LAX', 'SIN', 'MAL', 'CHI'];
	return loc[getRandomInt(0, loc.length)];
}
function getDeliveredDate(status) {
	if (status != 'delivered') {
		return "";
	} else {
		var backDate = getRandomInt(2, 7);
		var now = new Date();
		now.setDate(now.getDate() - backDate);
		return formatDate(now);
	}
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getShippedDate() {
	var backDate = getRandomInt(5, 30);
	var now = new Date();
	now.setDate(now.getDate() - backDate);
	return formatDate(now);
}
function getStatus() {
	return getRandom()>0.5?'delivered':'in transit';
}
function getRandom() {
	return Math.random();
}

function makeResponse(req, res, items) {
	res.jsonp(items);
}

function getDateTime(now) {
		if (typeof now == 'undefined' || typeof now != 'Date' || now == '') {
			now = new Date();
		}
    var year    = now.getFullYear();
    var month   = now.getMonth()+1;
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }
    var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;
     return dateTime;
}

exports.queryById = function(req, res) {
	queryById(req, res);
};
