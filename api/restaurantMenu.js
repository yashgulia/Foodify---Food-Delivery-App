// api/restaurantMenu.js
const fetch = require("node-fetch");

export default async function handler(req, res) {
  const { id, latitude, longitude } = req.query;

  if (!id || !latitude || !longitude) {
    return res
      .status(400)
      .json({ error: "ID, latitude, and longitude are required" });
  }

  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*"); // Set CORS header
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurant menu" });
  }
}
