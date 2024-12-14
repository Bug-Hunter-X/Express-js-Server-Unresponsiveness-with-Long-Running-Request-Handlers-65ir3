const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 5000));
    res.send('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});