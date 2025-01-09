# Node.js Server Unresponsiveness Due to Long-Running Requests

This repository demonstrates a common issue in Node.js where long-running operations within request handlers can cause the server to become unresponsive.  The example uses `setTimeout` to simulate a long task, but this could be any CPU-bound or I/O-bound operation that takes a significant amount of time to complete.  The solution explores using techniques to avoid blocking the event loop.

## Bug
The `bug.js` file showcases the problem.  The server takes 5 seconds to respond to each request. If you send many requests within that 5 seconds, the server will not respond immediately.