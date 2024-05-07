import React from "react";

function TruncatedTitle({ title, maxLength }) {
  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  return <>{truncateTitle(title, maxLength)}</>;
}

export default TruncatedTitle;
