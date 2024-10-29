'use client'; // Ensure this component runs on the client-side in Next.js

// Import necessary components
import { GoogleMap } from '@react-google-maps/api';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

// Map styling
export const defaultMapContainerStyle = {
  width: '100%',
  height: '100%',
};

// Center of the map
const center = {
  lat: -37.917980, // Replace with your desired latitude
  lng: 145.036190, // Replace with your desired longitude
};

// Locations with coordinates
const locations = [
  { key: 'itechCare', location: { lat: -37.917980, lng: 145.036190 } },
];

// Component to render markers with custom pins
const PoiMarkers = ({ pois, theme }) => {
  // Define colors based on theme
  const pinColors = theme === 'dark'
    ? { background: '#fff', glyphColor: '#fff', borderColor: '#fff' } // Dark theme colors
    : { background: '#F24241', glyphColor: '#F24241', borderColor: '#F24241' }; // Light theme colors

      const logo = theme === 'dark'
      ?"/static-images/location-pin.png":"/static-images/location-pin-light.png"
      
  return (
    <>
      {pois.map((poi) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
          <Pin
            background={pinColors.background}
            glyphColor={pinColors.glyphColor}
            borderColor={pinColors.borderColor}
            scale={1.8}
          >
            <img
              src={logo} // Ensure the logo image is in /public/static-images
              alt="Pin Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transform: 'scale(1.3)',
              }}
            />
          </Pin>
        </AdvancedMarker>
      ))}
    </>
  );
};


// Main MapComponent
export function MapComponent({ theme ,zoom=19}) {
  // Choose the map ID based on the theme
  const mapId =
    theme === 'dark'
      ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID_DARK
      : process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID_LIGHT;

  return (
    <div className="w-full h-full">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map
          style={defaultMapContainerStyle}
          defaultCenter={center}
          defaultZoom={zoom}
          mapId={mapId} // Use dynamic mapId
          disableDefaultUI={false}
        >
          {/* Render the markers with logos */}
          <PoiMarkers pois={locations} theme={theme} />
        </Map>
      </APIProvider>
    </div>
  );
}
