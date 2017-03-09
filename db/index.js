// setting up the node-postgres driver
var pg = require('pg');
var postgresURL = 'postgres://localhost/twitterdb';
var client = new pg.Client(postgresURL);
var express = require('express');

// connecting to the `postgres` server
client.connect();

// make the client available as a Node module
module.exports = client;
