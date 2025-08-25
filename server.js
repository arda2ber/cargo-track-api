const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Statik dosyalar (public klasörü)
app.use(express.static(path.join(__dirname, 'public')));

// Sağlık kontrolü için ayrı endpoint
app.get('/health', (req, res) => {
  res.send('OK');
});

// API rotaları
const cargoRoutes = require('./src/routes/cargoRoutes');
app.use('/api/cargo', cargoRoutes);

// Root'u frontend'e yönlendir
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Sunucu
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
