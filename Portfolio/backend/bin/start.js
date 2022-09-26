// 'use strict'
// require('@babel/polyfill');
// require('@babel/register');

// const app = require ('../app').default

// const http = require('http');
// const server = http.createServer(app);

// const config = require('../config');
// const configValue = config.get('local')
// const port = configValue.port_no;
// server.listen(port);
// server.on('listening',() =>{
//     console.log('server is created on port no: ' + port);
// })




// ---------------------for smartdata----------------------



'use strict';
require('@babel/register');
require('@babel/polyfill');

const app = require('../app').default;
const http = require("http");

const config = require('../config');
const configValue = config.get(process.env.node_env);
const port= configValue.PORTNO;

const server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
    console.log(`Listening on ${port}`);
});