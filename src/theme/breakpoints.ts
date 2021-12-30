export interface Breakpoints extends Array<string> {
  md?: string;
  lg?: string;
}

const breakpoints: Breakpoints = ["768px", "1024px"];
breakpoints.md = breakpoints[0];
breakpoints.lg = breakpoints[1];

export default breakpoints;
