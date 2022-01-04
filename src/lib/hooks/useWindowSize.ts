import { useEffect, useState } from "react";

export interface IWindowSize {
  height: number;
  width: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // triggers a re-render, potentially rendering a new value for element

    return () => window.removeEventListener("resize", handleResize);
  }, []); // if element changes, reset it.

  return windowSize;
};

export default useWindowSize;
