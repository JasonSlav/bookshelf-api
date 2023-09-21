import Hapi from "@hapi/hapi";
import { db } from "./app/db.js";
const init = async () => {
  const port = 5000;
  const server = Hapi.server({
    port: port,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: async (request, h) => {
      await db.push("books", "meme");
      const a = await db.getData("books")
      return h.response({
        name: a,
        descripttion: "API Book Description",
        version: "1.0.0",
        author: "Author",
        page: 1,
        limit: 10,
        finished: true,
        created: new Date(),
      });
    },
  });

  await server.start();
  console.log(`Server start on http://localhost:${port}`);
};

init();
