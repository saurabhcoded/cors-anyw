const cors_proxy = require('cors-anywhere');

// Configure CORS Anywhere options
const options = {
  originWhitelist: [], // Add whitelisted origins if needed
};

// Start the CORS Anywhere server
const server = cors_proxy.createServer(options).listen(3000, () => {
  console.log('CORS Anywhere server started on port 3000');
});
