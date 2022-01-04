import useWindowSize from "./useWindowSize";
import breakpoints from "../../theme/breakpoints";

type UseBreakpointsProps = {
  isBelowLarge: boolean;
  isLarge: boolean;
  isMediumAndBelow: boolean;
  isSmall: boolean;
};

const useBreakpoints = (): UseBreakpointsProps => {
  const windowSize = useWindowSize();

  return {
    isBelowLarge: windowSize.width < parseInt(breakpoints.lg, 10),
    isLarge: windowSize.width >= parseInt(breakpoints.lg, 10),
    isMediumAndBelow: windowSize.width <= parseInt(breakpoints.md, 10),
    isSmall: windowSize.width < parseInt(breakpoints.md, 10),
  };
};

export default useBreakpoints;
