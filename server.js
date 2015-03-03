#!/bin/env node
// OpenShift sample Node application
var http = require('http');
var express = require('express');
var	app = express();
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var config = require('./routes/config');
var tracking = require('./routes/tracking');

// Variables
var ipaddr = "127.0.0.1";
var port = 8080;

if (process.env.OPENSHIFT_NODEJS_IP) {
	ipaddr = config.server.openshift.ip;
	port = config.server.openshift.port;
} else {
	ipaddr = config.server.local.ip;
	port = config.server.local.port;
}

app.use(morgan('common')); 				// log every request to the console
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); 			// get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());				// prepare/setup session for request
app.use(session({secret: 'trackingCompanySecretKey', key: 'express.sid', myid: 'coolStuff'}));

app.get('/track/:id', tracking.queryById);

app.setMaxListeners(0);

if (process.env.OPENSHIFT_NODEJS_IP) {
	app.listen(port, ipaddr);
} else {
	app.listen(port);
}

console.log("Server running at http://" + ipaddr + ":" + port + "/");
