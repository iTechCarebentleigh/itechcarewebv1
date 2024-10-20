import React, { useState, useEffect } from 'react';

const MarkerPreview = ({ value = {}, onChange }) => {
  // Destructure position with default values
  const { position = {} } = value;
  const { top = 0, left = 0 } = position; // Default to 0 if not provided

  // Define state for top and left
  const [markerTop, setMarkerTop] = useState(top);
  const [markerLeft, setMarkerLeft] = useState(left);
  const [markerImage, setMarkerImage] = useState(value.markerImage || null); // Initialize with markerImage

  // Function to handle position change
  const handlePositionChange = (updatedPosition) => {
    setMarkerTop(updatedPosition.top);
    setMarkerLeft(updatedPosition.left);

    // Safeguard the call to onChange
    if (onChange) {
      onChange({ ...value, position: updatedPosition });
    } else {
      console.error("onChange is not defined");
    }
  };

  // Update state when value changes
  useEffect(() => {
    setMarkerTop(top);
    setMarkerLeft(left);
  }, [top, left]);

  // Update marker image if it exists
  useEffect(() => {
    setMarkerImage(value.markerImage || null);
  }, [value.markerImage]);

  // Debugging output
  useEffect(() => {
    console.log("Current value: ", value);
  }, [value]);

  return (
    <div>
      {/* Input fields for top and left */}
      <div>
        <label>
          Top:
          <input
            type="number"
            value={markerTop}
            onChange={(e) => handlePositionChange({ ...position, top: parseInt(e.target.value, 10) })}
          />
        </label>
      </div>
      <div>
        <label>
          Left:
          <input
            type="number"
            value={markerLeft}
            onChange={(e) => handlePositionChange({ ...position, left: parseInt(e.target.value, 10) })}
          />
        </label>
      </div>

      {/* Display marker image if it exists */}
      {markerImage && (
        <div>
          <h4>Marker Position Guide:</h4>
          <img src={markerImage} alt="Marker Position Guide" />
        </div>
      )}
    </div>
  );
};

export default MarkerPreview;
