const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  route(req, res);
});

server.listen(port, () => {
  console.log('Node Start');
});

function route(req, res){
  var url = req.url;

  switch (url){
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World');
      break;

    default:
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('No Page...');
      break;

  }
}