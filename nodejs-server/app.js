const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.method);

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body>Hello from my Node.js Server.</body>");
  res.write("/html");
  res.end();
});

server.listen(3000);
