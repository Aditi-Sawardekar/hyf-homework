import React, { useState, useEffect } from "react";

function TimeOnWebsiteCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="watch-count">
      You have used {count} seconds on this website
    </div>
  );
}

export default TimeOnWebsiteCount;
