import "intersection-observer";

import { RefObject, useEffect, useRef, useState } from "react";

type IntersectionObserverOptions = {
  root?: Element | Document;
  rootMargin?: string;
  threshold?: number;
};

const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  intersectionObserverOptions?: IntersectionObserverOptions
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry.isIntersecting);
    }, intersectionObserverOptions);
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
};

export default useIntersectionObserver;
