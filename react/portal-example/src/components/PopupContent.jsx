import React from "react";
import { createPortal } from "react-dom";

const PopupContent = ({ copied, content }) => {
  return createPortal(
    <div>
      {copied && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "white",
            padding: "8px 16px",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
            transition: "opacity 0.3s ease",
          }}
        >
          已复制：{content}
        </div>
      )}
    </div>,
    document.getElementById("popup")
  );
};

export default PopupContent;
