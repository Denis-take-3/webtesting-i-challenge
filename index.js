const express = require('express');
const server = express();

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

server.get('/', (req, res) => {
    res.status(200).json({})
});
