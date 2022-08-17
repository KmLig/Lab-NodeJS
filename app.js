const http = require("http");
const fs = require("fs");
const { writeFile } = require("fs/promises");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body><form action='/message' method='POST' name='message'><input type='text'><button type='submit'>Send</button></form></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', "Dummy");
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hi from my Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
