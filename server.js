const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'dist', 'employees', 'browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'employees', 'browser', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});