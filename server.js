const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

const LARAVEL_API_URL = 'http://51.20.51.144:8080';

app.use('/api/*', async (req, res) => {
  const endpoint = req.originalUrl  
  try {
    const response = await axios.get(`${LARAVEL_API_URL}${endpoint}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
