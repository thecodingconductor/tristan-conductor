import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import { useEffect } from 'react';

const useLockBodyScroll = (
  lockBody: boolean,
  targetElement: HTMLElement | null | undefined
): null => {
  useEffect(() => {
    if (targetElement) {
      if (lockBody) {
        disableBodyScroll(targetElement, { allowTouchMove: () => true });
      } else {
        enableBodyScroll(targetElement);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [lockBody, targetElement]);

  return null;
};

export default useLockBodyScroll;
