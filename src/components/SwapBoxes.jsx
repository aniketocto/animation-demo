import React, { useEffect, useState } from "react";

const SwapBoxes = ({ children }) => {
  const [fade, setFade] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % React.Children.count(children)
        );
        setFade(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [children]);

  return (
    <div className="flex justify-around w-full my-12">
      <div className="flex justify-between gap-5">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              fade && currentIndex === index ? "opacity-0" : "opacity-100"
            }`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwapBoxes;
