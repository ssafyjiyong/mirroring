import React, { useState, useEffect, useRef } from "react";

const Map: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      // Google Maps API가 이미 로드되었는지 확인
      if (window.google && window.google.maps) {
        initializeMap();
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDzNB6R3AND8ueFJfpBPVazvi6X-RWrPq4&libraries=places`;
        script.async = true;
        script.onload = initializeMap;
        document.body.appendChild(script);
      }
    };

    const initializeMap = () => {
      if (ref.current) {
        const newMap = new google.maps.Map(ref.current, {
          center: { lat: 37.569227, lng: 126.9777256 },
          zoom: 16,
        });

        setMap(newMap);
      }
    };

    loadGoogleMapsScript();
  }, []);

  return <div ref={ref} id="map" style={{ maxWidth: "576px", height: "100vh" }}></div>;
};

export default Map;
