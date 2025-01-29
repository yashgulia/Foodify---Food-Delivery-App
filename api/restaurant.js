// api/restaurant.js
const fetch = require("node-fetch");

export default async function handler(req, res) {
  const { latitude, longitude } = req.query;

  // Check if both latitude and longitude are provided
  if (!latitude || !longitude) {
    return res
      .status(400)
      .json({ error: "Latitude and longitude are required" });
  }

  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*"); // Set CORS header
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurant data" });
  }
}
