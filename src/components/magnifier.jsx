import { useState, useRef } from 'react';

const Magnifier = ({ src }) => {
  const [magnifierStyle, setMagnifierStyle] = useState({});
  const imageRef = useRef();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    if (x < 0 || y < 0 || x > width || y > height) {
      setMagnifierStyle({ visibility: 'hidden' });
      return;
    }

    const magnifierSize = 100;
    const zoomLevel = 2;
    const backgroundX = -((x * zoomLevel) - magnifierSize / 2);
    const backgroundY = -((y * zoomLevel) - magnifierSize / 2);

    setMagnifierStyle({
      backgroundPosition: `${backgroundX}px ${backgroundY}px`,
      left: `${x - magnifierSize / 2}px`,
      top: `${y - magnifierSize / 2}px`,
      visibility: 'visible',
      backgroundImage: `url(${src})`,
      backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
      width: `${magnifierSize}px`,
      height: `${magnifierSize}px`,
    });
  };

  return (
    <div
      className="magnifier-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMagnifierStyle({ visibility: 'hidden' })}
    >
      <img ref={imageRef} src={src} alt="Product" className="object-cover" style={{ height: '504px' }} />
      <div className="magnifier hidden xl:block" style={magnifierStyle}></div>
    </div>
  );
};


export default Magnifier;