import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const position = (loc) => {
      const { latitude, longitude } = loc.coords;
      const newLocation = { latitude, longitude };
      setLocation(newLocation);
      sessionStorage.setItem("userLocation", JSON.stringify(newLocation));
      setLoading(false);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position, () => {
        setLoading(false);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  return { location, loading };
};

export default useGeolocation;
