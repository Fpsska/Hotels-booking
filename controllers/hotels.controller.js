const fetch = require("node-fetch");

class hotelsController {
  async getHotelsData(req, res) {
    try {
      const response = await fetch(process.env.API_URL);
      const data = await response.json();

      res.json(data.results.hotels);
    } catch (err) {
      console.error(err.message || err);
    }
  }
}

module.exports = new hotelsController();
