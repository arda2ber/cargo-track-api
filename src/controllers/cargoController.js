const axios = require('axios');

exports.trackCargo = async (req, res) => {
  const trackingNumber = req.params.trackingNumber;

  try {
    // Burada AfterShip API ya da mock veri bağlanacak
    const data = {
      trackingNumber,
      status: "In Transit",
      lastUpdate: new Date().toISOString()
    };

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Takip bilgisi alınamadı" });
  }
};