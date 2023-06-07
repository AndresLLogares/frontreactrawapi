import { useEffect, useRef, useState } from "react";
import { Result } from "../enums/genres/enum";

const useProgressiveImage = (src: string) => {
  const [sourceLoaded, setSourceLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(true);
  }, [src]);

  return sourceLoaded;
};

export default useProgressiveImage;
