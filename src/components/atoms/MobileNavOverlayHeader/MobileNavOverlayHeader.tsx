/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { resetButton } from "../../../lib/utils/mixins";

type Props = {
  closeMenu: Function;
};

const MobileNavOverlayHeader = ({ closeMenu }: Props) => {
  return (
    <button
      sx={{
        ...resetButton,
        height: "47px",
        width: "227px",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
        marginBottom: "30px",
      }}
      onClick={() => closeMenu()}
    >
      <Themed.h2
        sx={{
          color: "white",
        }}
      >
        Tristan Rais-Sherman
      </Themed.h2>
    </button>
  );
};

export default MobileNavOverlayHeader;
