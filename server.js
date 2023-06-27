const http = require('http');

const Host ='localhost';
const Port = 3000;

const server = http.createServer((request, response) => {
   response.end("Hello, Galvanize!");
    });

server.listen(Port, Host, () => {
  console.log(`Server running on ${Host}:${Port}`);
  
});