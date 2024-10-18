'use client'; // For Next.js app router to ensure this is client-side only

import { useEffect, useRef } from 'react';

const GoogleMap = ({ theme='light',zoomValue=19.3 }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = async () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
        script.async = true;
        script.onload = () => initMap();
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      const myBusinessLocation = { lat: -37.917980, lng: 145.036190 }; // Replace with your coordinates

      const mapId = theme === 'dark'
        ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID_DARK
        : process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID_LIGHT; // Use the appropriate map ID based on the theme

      const map = new google.maps.Map(mapRef.current, {
        center: myBusinessLocation,
        zoom: zoomValue,
        mapId, // Use the selected mapId
        disableDefaultUI: true, // Disable all default UI controls
      });

      // Setting styles directly on the map
      const styles = [
        {
          featureType: 'poi.business',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }], // Hide business labels
        },
        {
          featureType: 'poi.business',
          elementType: 'geometry',
          stylers: [{ visibility: 'off' }], // Hide business icons/markers
        },
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }], // Hide all POI labels
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ visibility: 'off' }], // Hide all POI markers/icons
        },
        {
          featureType: 'transit',
          stylers: [{ visibility: 'off' }], // Hide transit routes/stations
        },
      ];

      map.setOptions({ styles }); // Apply styles to the map

      // Custom icon for the business logo
      const businessLogo = {
        url: theme === 'dark'
        ? '/static-images/location-pin.png':'/static-images/location-pin-light.png', // Replace with the path to your logo
        scaledSize: new google.maps.Size(80, 80), // Adjust size as needed
      };

      new google.maps.Marker({
        position: myBusinessLocation,
        map,
        title: 'Our Business',
        icon: businessLogo, // Set the custom icon here
      });
    };

    loadMap();
  }, [theme]); // Add theme as a dependency

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default GoogleMap;
