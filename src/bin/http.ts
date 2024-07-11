import fastify from "fastify";

const env = {
  hrms: {
    hostname: process.env["HRMS_HOSTNAME"],
    port: parseInt(process.env["HRMS_PORT"], 10),
  },
};

const instance = fastify({
  logger: true,
});

instance.get("/hello", () => {
  return {
    name: "John Doe",
  };
});

try {
  await instance.listen({
    host: env.hrms.hostname,
    port: env.hrms.port,
  });
} catch (err) {
  instance.log.error(err);
  process.exit(1);
}
