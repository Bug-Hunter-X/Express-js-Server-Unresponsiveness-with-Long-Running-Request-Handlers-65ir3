# Express.js Server Unresponsiveness with Long-Running Request Handlers

This repository demonstrates a common issue in Express.js applications where long-running request handlers can cause the server to become unresponsive.  The problem is that synchronous operations block the event loop, preventing the server from handling other requests.

The `bug.js` file showcases the problematic code.  The solution is shown in `bugSolution.js`.

## Bug

The bug lies in the `app.get('/')` handler.  The `setTimeout` function simulates a long-running task. During this 5-second delay, the server is unable to accept or process new requests; It appears to hang.

## Solution

The solution is to utilize asynchronous programming methods. The `bugSolution.js` file utilizes async/await to handle asynchronous processes correctly without blocking the event loop. 