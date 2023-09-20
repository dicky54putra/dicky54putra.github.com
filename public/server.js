import Fastify from "fastify";

const server = () => {
  const fastify = new Fastify();
  console.log("okok", fastify);
};

server();
