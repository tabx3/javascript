import React, { useState } from "react";
import PopupContent from "./PopupContent";

export const CopyInpit = () => {
  const [inputvalue, setInputValue] = React.useState("");

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(inputvalue).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  return (
    <div>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>

      <PopupContent copied={copied} content={inputvalue} />
    </div>
  );
};
