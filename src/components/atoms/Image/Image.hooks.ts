import { RefObject, useState } from "react";

import useIntersectionObserver from "../../../lib/hooks/useIntersectionObserver";

interface Props {
  imgRef?: RefObject<HTMLElement>;
  src: string;
}

export function useLazyImage({ src, imgRef }: Props) {
  const [finalSrc, setFinalSrc] = useState("");

  const isOnScreen = useIntersectionObserver(imgRef);

  if (src !== finalSrc) {
    if (isOnScreen) {
      setFinalSrc(src);
    }
  }

  return { finalSrc };
}
