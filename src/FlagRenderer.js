import React, { useState, useEffect } from "react";

function FlagRenderer({ flag }) {
  const [visibleFlag, setVisibleFlag] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDelay, setAnimationDelay] = useState(500);

  useEffect(() => {
    const flagChars = flag.split(""); // Split the flag into characters

    const interval = setInterval(() => {
      if (currentIndex < flagChars.length) {
        setVisibleFlag((prevFlag) => prevFlag + flagChars[currentIndex] + "\n"); // Add a new line character
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, animationDelay);

    return () => clearInterval(interval); // Cleanup when unmounting
  }, [flag, currentIndex]);

  return <pre>{visibleFlag}</pre>; // Use <pre> to preserve newlines
}

export default FlagRenderer;
