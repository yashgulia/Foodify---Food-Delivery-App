import fetch from "node-fetch";

export default async function handler(req, res) {
  console.log("API Hit: /api/restaurantMenu");
  console.log("Query Params:", req.query);

  const { id, latitude, longitude } = req.query;

  if (!id || !latitude || !longitude) {
    console.error("Missing parameters");
    return res
      .status(400)
      .json({ error: "Restaurant ID, Latitude, and Longitude are required" });
  }

  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );

    if (!response.ok) {
      throw new Error(`Swiggy API Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response Received", data);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching restaurant menu:", error.message);
    return res.status(500).json({ error: "Failed to fetch restaurant menu" });
  }
}
