/** @jsx jsx */
import { jsx } from "theme-ui";

const defaultCircleStyles = {
  width: ["806px", "1000px", "1200px"],
  height: ["806px", "1000px", "1200px"],
};

type Props = {
  isAboutPage?: boolean;
};

const Background = ({ isAboutPage }: Props) => {
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
        display: isAboutPage ? "none" : "block",
        background: (theme) => theme!.colors!.siteBackgroundLight,
        // filter: "blur(524px)",
      }}
    >
      <div
        className="purple"
        sx={{
          ...defaultCircleStyles,
          position: "absolute",
          left: ["-286px", "-275px", "-300px"],
          top: "-200px",
          boxShadow: [
            "0 0 160px 160px #0A1C2C inset",
            "0 0 260px 260px #0A1C2C inset",
          ],
          clipPath: "circle(40%)",
          background:
            "radial-gradient(circle, rgba(173,0,126, 0.3) 0%, rgba(10,28,44,1) 100%)",
          // box-shadow: '0 0 8px 8px white inset'
        }}
      ></div>
      <div
        className="blue"
        sx={{
          ...defaultCircleStyles,
          position: "absolute",
          right: ["-200px", null, "-250px"],
          top: "375px",
          boxShadow: [
            "0 0 160px 160px #0A1C2C inset",
            "0 0 260px 260px #0A1C2C inset",
          ],
          clipPath: "circle(40%)",
          background:
            "radial-gradient(circle, rgba(1,7,150,0.3) 0%, rgba(10,28,44,1) 100%)",
          width: ["606px", "800px", "1000px"],
          height: ["606px", "800px", "1000px"],
        }}
      ></div>
      <div
        className="green"
        sx={{
          ...defaultCircleStyles,
          position: "absolute",
          left: "-223px",
          top: "800px",
          background:
            "radial-gradient(circle, rgba(0,128,13,0.4) 0%, rgba(10,28,44,1) 100%)",
          boxShadow: [
            "0 0 180px 180px #0A1C2C inset",
            "0 0 260px 260px #0A1C2C inset",
            "0 0 300px 300px #0A1C2C inset",
          ],
          clipPath: "circle(40%)",
          width: ["706px", "800px", "1000px"],
          height: ["706px", "800px", "1000px"],
        }}
      ></div>
      <div
        className="gold"
        sx={{
          ...defaultCircleStyles,
          position: "absolute",
          left: ["114px", null, "600px"],
          top: "1430px",
          background:
            "radial-gradient(circle, rgba(177, 85, 0, 0.5) 0%, rgba(10,28,44,1) 100%)",
          boxShadow: [
            "0 0 190px 190px #0A1C2C inset",
            "0 0 260px 260px #0A1C2C inset",
          ],
          clipPath: "circle(40%)",
          height: ["700px", "900px", "1100px"],
          width: ["700px", "900px", "1100px"],
        }}
      ></div>
      {/* <div
        className="darkPurple"
        sx={{
          ...defaultCircleStyles,
          position: "absolute",
          left: "-249px",
          // top: "2258px",
          bottom: 0,
          background:
            "radial-gradient(circle, rgba(173, 0, 125, 0.7) 0%, rgba(10,28,44,1) 100%)",
          boxShadow: "0 0 160px 160px #0A1C2C inset",
          clipPath: "circle(40%)",
        }}
      ></div> */}
    </div>
  );
};

export default Background;
