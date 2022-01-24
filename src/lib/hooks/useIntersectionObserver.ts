// import "intersection-observer";

// import { RefObject, useEffect, useRef, useState } from "react";

// // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// type IntersectionObserverOptions = {
//   root?: Element | Document;
//   rootMargin?: string;
//   threshold?: number;
// };

// const useIntersectionObserver = (
//   ref: RefObject<HTMLElement>,
//   intersectionObserverOptions?: IntersectionObserverOptions
// ) => {
//   const observerRef = useRef<IntersectionObserver | null>(null);
//   const [isOnScreen, setIsOnScreen] = useState(false);

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(([entry]) => {
//       setIsOnScreen(entry.isIntersecting);
//     }, intersectionObserverOptions);
//   }, []);

//   useEffect(() => {
//     console.log("intersection observer called");
//     observerRef.current.observe(ref.current);

//     return () => {
//       observerRef.current.disconnect();
//     };
//   }, [ref]);

//   return isOnScreen;
// };

// export default useIntersectionObserver;

import { RefObject, useEffect, useState } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: Args
): IntersectionObserverEntry | undefined => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen]);

  return entry;
};

export default useIntersectionObserver;
