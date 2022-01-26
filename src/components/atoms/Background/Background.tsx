/** @jsx jsx */
import { jsx } from "theme-ui";

const defaultCircleStyles = {
  width: "506px",
  height: "506px",
  filter: "blur(524px)",
};

const Background = () => {
  return (
    <div
      sx={{
        overflowX: "hidden",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
      }}
    >
      <div
        className="purple"
        sx={{
          ...defaultCircleStyles,
          position: "absolute",
          left: "-186px",
          top: "-103px",
          background: "rgba(173, 0, 126, 0.6)",
        }}
      ></div>
      <div
        className="blue"
        sx={{
          ...defaultCircleStyles,
          position: "absolute",
          left: "125px",
          top: "489px",
          background: "rgba(1, 7, 150, 0.6)",
        }}
      ></div>
      <div
        className="green"
        sx={{
          ...defaultCircleStyles,
          position: "absolute",
          left: "-223px",
          top: "908px",
          background: "rgba(0, 128, 13, 0.4)",
        }}
      ></div>
      <div
        className="gold"
        sx={{
          ...defaultCircleStyles,
          position: "absolute",
          left: "114px",
          top: "1530px",
          background: "rgba(177, 85, 0, 0.7)",
        }}
      ></div>
      <div
        className="darkPurple"
        sx={{
          ...defaultCircleStyles,
          position: "absolute",
          left: "-249px",
          top: "2258px",
          background: "rgba(173, 0, 125, 0.7)",
        }}
      ></div>
    </div>
  );
};

export default Background;
