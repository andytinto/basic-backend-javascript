const http = require('http');
const { resolve } = require('path');
const { isGeneratorFunction } = require('util/types');

/*
// Previous simple response example

const requestListener = (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end('<h1>Hello, HTTP Server!</h1>');
}
*/

/*
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
*/

/*
// Handling POST request data

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.statusCode = 200;

  const { method } = request;

  if (method === 'GET') {
    response.end('<h1>Hello!</h1>');
  }

  if (method === 'POST') {
    let body = [];

    request.on('data', (chunk) => {
      body.push(chunk);
    });

    request.on('end', () => {
      body = Buffer.concat(body).toString();
      const name = JSON.parse(body).name;
      response.end(`<h1>Hai, ${name}!</h1>`);
    });
  }
};

// output: <h1>Hai, Dimas!</h1>
*/

/*

// Routing based on URL and HTTP methods
const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.statusCode = 200;

  const { method, url } = request;

  if(url === '/'){
    if(method === 'GET') {
      response.end('<h1>Ini adalah halaman utama</h1>');
    }else{
      response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
    }

  } 
  else if(url === '/about') 
  {
    if(method === 'GET') 
    {
      response.end('<h1>Halo! Ini adalah halaman about</h1>');
    } 
    else if(method === 'POST') 
    {
      let body = [];

      request.on('data', (chunk) => {
        body.push(chunk);
      });
  
      request.on('end', () => {
        body = Buffer.concat(body).toString();
        const name = JSON.parse(body).name;
        response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
      });
    } 
    else 
    {
      response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
    }
  }
};
*/

/*
// Version with proper status codes
const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'text/html');

  const { method, url } = request;

  if(url === '/'){
    if(method === 'GET') {
      response.statusCode = 200;
      response.end('<h1>Ini adalah halaman utama</h1>');
    }else{
      response.statusCode = 400;
      response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
    }

  } 
  else if(url === '/about') 
  {
    if(method === 'GET') 
    {
      response.statusCode = 200;
      response.end('<h1>Halo! Ini adalah halaman about</h1>');
    } 
    else if(method === 'POST') 
    {
      let body = [];

      request.on('data', (chunk) => {
        body.push(chunk);
      });
  
      request.on('end', () => {
        body = Buffer.concat(body).toString();
        const name = JSON.parse(body).name;
        response.statusCode = 200;
        response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
      });
    } 
    else 
    {
      response.statusCode = 400;
      response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
    }
  }
  else
  {
    response.statusCode = 404;
    response.end('<h1>Halaman tidak ditemukan!</h1>');
  }
};
*/

const server = http.createServer(requestListener);

const port = 5001;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});