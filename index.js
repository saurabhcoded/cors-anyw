const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/:url(*)', async (req, res) => {
  try {
    const { url } = req.params;
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error occurred while fetching data.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`CORS Proxy Server listening on port ${PORT}`);
});
