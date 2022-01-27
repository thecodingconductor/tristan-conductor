/** @jsx jsx */
import { jsx } from "theme-ui";
import { defaultFullWidthGridChild } from "../../../lib/utils/mixins";

const MobileAboutSpacer = () => {
  return (
    <div
      sx={{
        ...defaultFullWidthGridChild,
        height: "400px",
      }}
    ></div>
  );
};

export default MobileAboutSpacer;
