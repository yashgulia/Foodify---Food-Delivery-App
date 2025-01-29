import fetch from "node-fetch";

export default async function handler(req, res) {
  console.log("API Hit: /api/restaurant");
  console.log("Query Params:", req.query);

  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    console.error("Missing Latitude or Longitude");
    return res
      .status(400)
      .json({ error: "Latitude and Longitude are required" });
  }

  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );

    if (!response.ok) {
      throw new Error(`Swiggy API Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response Received", data);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching restaurant data:", error.message);
    return res.status(500).json({ error: "Failed to fetch restaurant data" });
  }
}
