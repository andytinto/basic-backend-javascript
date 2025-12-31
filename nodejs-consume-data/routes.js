server.route([
  {
    method: 'GET',
    path: '/{id}',
    handler: async (request, h) => {
      const { id } = request.params;
 
      try {
        const [order, user] = await Promise.all([
          got(`${orderService}/${id}`).json(),
          got(`${userService}/${id}`).json(),
      ]);
 
      return {
        id: order.id,
        menu: order.menu,
        user: user.name,
      };
   } catch (error) {
     if (!error.response) throw error;
     if (error.response.statusCode === 400) {
       return h.response({ message: 'bad request' }).code(400);
     }
     if (error.response.statusCode === 404) {
       return h.response({ message: 'not found' }).code(404);
     }
 
     throw error;
    }
   },
  },
]);