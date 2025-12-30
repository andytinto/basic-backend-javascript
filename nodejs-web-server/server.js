const http = require('http');

/*
// Previous simple response example

const requestListener = (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end('<h1>Hello, HTTP Server!</h1>');
}
*/

// Implementing different responses based on HTTP methods
const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.statusCode = 200;

  const { method } = request;

  if (method === 'GET') {
    response.end('<h1>Hello!</h1>');
  }

  if (method === 'POST') {
    response.end('<h1>Hai!</h1>');
  }

  if (method === 'PUT') {
    response.end('<h1>Bonjour!</h1>');
  }

  if (method === 'DELETE') {
    response.end('<h1>Salam!</h1>');
  }
};

const server = http.createServer(requestListener);

const port = 5001;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});