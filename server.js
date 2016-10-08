var http = require("http");
var app = require("./app.js")

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'application/json'});
   
   var param = request.url.substring(1, request.url.length);
   var jsonResponse = JSON.stringify({binary: param, hex: app.convert(param)});
   response.end(jsonResponse);
   // Send the response body
}).listen(process.env.PORT || 3000);

console.log('Server running');