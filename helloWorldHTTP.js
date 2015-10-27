// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  console.log(request);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<h1>Hello World</h1>");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(9069);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:9069/");
