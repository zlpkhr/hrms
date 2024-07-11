import { createServer } from "http";

createServer((req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        name: "John Doe",
      }),
    );
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen({
  host: process.env.HRMS_HOSTNAME,
  port: process.env.HRMS_PORT,
});
