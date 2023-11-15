#!/usr/bin/env node

/**
 * Module dependencies.
 */
import app from "./app";
import http from "http";
import mysql from 'mysql2';

var port = 3002;
app.set('port', port);


var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
  const conn = mysql.createConnection({host:'localhost',port: 3308, user: 'root', password: 'admin', database: 'yatch-project'});
  conn.connect(err => {
    if (err) 
      console.log(err);
    console.log("Connected to db");
  })
}
