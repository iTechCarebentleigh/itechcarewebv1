'use client'; // For Next.js app router to ensure this is client-side only

// Import necessary modules and functions from external libraries
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

// Define a list of libraries to load from the Google Maps API
const libraries = ['places', 'drawing', 'geometry'];

// Define a functional component called MapProvider
export function MapProvider({ children }) {
  // Load the Google Maps JavaScript API asynchronously
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // Handle load error
  if (loadError) {
    return <p>Encountered error while loading Google Maps.</p>;
  }

  // Handle loading state
  if (!scriptLoaded) {
    return <p>Map script is loading...</p>;
  }

  // Return the children prop wrapped by this MapProvider component
  return <>{children}</>;
}
