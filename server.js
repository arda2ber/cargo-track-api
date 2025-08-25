const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basit test route
app.get('/', (req, res) => {
  res.send('Cargo Track API Çalışıyor 🚀');
});

// Route bağlama
const cargoRoutes = require('./src/routes/cargoRoutes');
app.use('/api/cargo', cargoRoutes);

// Sunucu
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});