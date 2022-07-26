const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server request");

  res.setHeader("Content-Type", "text/plain");
});

server.listen(3000, "localhost", (error) => {
  error
    ? console.log(error)
    : console.log(`listening port ${process.env.PORT}`);
});
