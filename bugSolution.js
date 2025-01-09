const http = require('http');

const server = http.createServer((req, res) => {
  // Use a worker pool or other asynchronous mechanism to handle long tasks
  process.nextTick(() => {
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, world!');
    }, 5000); // The long operation is now off the main thread
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});