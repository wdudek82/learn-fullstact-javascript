import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

// Setting EJS as a templating language - express will look for ./views/index.ejs
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
   // res.send('Hello World!');
   res.render('index', {
      content: 'Hello Express and <em>EJS</em>!'
   });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
   console.info('Express listening on port ', config.port);
});


// import fs from 'fs';
// server.get('/about.html', (req, res) => {
//    fs.readFile('./about.html', (err, data) => {
//       res.send(data.toString());
//    });
// });