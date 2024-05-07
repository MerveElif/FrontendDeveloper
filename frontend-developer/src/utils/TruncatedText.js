import React from "react";

function TruncatedText({ text, maxLength }) {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return <>{truncateText(text, maxLength)}</>;
}

export default TruncatedText;
