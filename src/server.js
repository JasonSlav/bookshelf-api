const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            //return json response of book information
            return h.response({
                name: 'API Book',
                descripttion: 'API Book Description',
                version: '1.0.0',
                author: 'Author',
                page: 1,
                limit: 10,
                finished: true,
                created: new Date()
            })
        }
    })

    await server.start();
}

init();