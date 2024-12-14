const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation (simulated with setTimeout)
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a 5-second delay
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});