const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route(routes);

  // Custom 404 response
  server.ext('onPreResponse', (request, h) => {
    const response = request.response;

    if (response.isBoom && response.output.statusCode === 404) {
      return h
        .response('Halaman tidak ditemukan')
        .code(404);
    }

    return h.continue;
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();