import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { pizzaList, pizzaSizes } from './data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = fastify();

// GET
server.register(fastifyStatic, {
  root: join(__dirname, '../build'),
});

// server.get('/pizza-list', (_, reply) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(pizzaList), 1000);
//   });
// });
server.get('/pizza-list', (_, reply) => {
  setTimeout(() => reply.send(pizzaList), 1000);
});

// server.get('/pizza-sizes', (_, reply) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(pizzaSizes), 1000);
//   });
// });
server.get('/pizza-sizes', (_, reply) => {
  setTimeout(() => reply.send(pizzaSizes), 1000);
});

// POST
// ...

const port = process.env.PORT || 5000;
const host = process.env.HOST || '127.0.0.1';

server
  .listen({ port, host })
  .then((address) => {
    console.log(`Server was started at ${address}`);
  })
  .catch((err) => {
    console.error(`ATTENTION couldn't start the server: ${err}`);
  });
