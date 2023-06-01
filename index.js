const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();

// Enable CORS for all routes
app.use(corsAnywhere());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
