import React from "react";

function RepairIndicator({ icon, text, size = 44, onClick, variant, isHovered, onHoverChange }) {
    const handleMouseEnter = () => onHoverChange(true);
    const handleMouseLeave = () => onHoverChange(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        justifyContent:variant === "icon" ? "center" : "start",
        width: variant === "icon" ? size : "100%",

        backgroundColor: isHovered ? "var(--colors-brand-primary-500)" : "var(--colors-palette-zinc-800)",
        borderRadius: variant === "icon" ? "999px" : "0px",
        // Conditional padding
        padding: variant === "icon" ? "0" : "2px 12px",
      }}
    >
      {variant === "icon" ? (
        <div
          style={{
            height: `${size}px`,  // Fixed here
            width: `${size}px`,   // Fixed here
            borderRadius: "50%",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "80%", // 80% of parent height
              width: "80%",  // 80% of parent width
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          
          <div dangerouslySetInnerHTML={{ __html: icon }} />
   
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              height: `${size}px`,  // Fixed here
              width: `${size}px`,   // Fixed here
              borderRadius: "50%",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "80%", // 80% of parent height
                width: "80%",  // 80% of parent width
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
          <div dangerouslySetInnerHTML={{ __html: icon }} />
          </div>
          </div>
          <span className="text-lg" style={{ marginLeft: "8px", color: "white" }}>{text}</span>
        </div>
      )}
    </div>
  );
}

export default RepairIndicator;
