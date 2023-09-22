import Fastify from "fastify";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fastify = Fastify({
  logger: true,
  rewriteUrl(req) {
    // if (req.url === "/") return "/index.html";
    if (req.url === "/about-me") return "/?page=about-me";
    // if (req.url === "/portfolio") return "/?page=portfolio";
    return req.url;
  },
});
fastify.addHook("preHandler", (request, reply, done) => {
  if (request.url === "/portfolio") {
    // Rewrite the URL to include the 'page' query parameter
    request.query.page = "portfolio";
  }
  done();
});

fastify.register(import("@fastify/static"), {
  root: path.join(__dirname, "/"),
  prefix: "/",
});

fastify.get("/", (request, reply) => {
  reply.sendFile("index.html");
});

fastify.get("/sitemap.xml", function (request, reply) {
  reply.send({ hello: "world" });
});

fastify.get("/article/*", function (request, reply) {
  const filePath = path.join(__dirname, "index.html");
  fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
    if (!err) {
      reply.header("Content-Type", "text/html").send(data);
    } else {
      console.log(err);
    }
  });
});

// Run the server!
fastify.listen({ port: 3022 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
