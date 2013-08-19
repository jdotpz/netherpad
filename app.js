#!/usr/bin/env node

var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/public'));


var server = app.listen(process.env.PORT, function (err) {
  console.log('Running on', server.address());
});
