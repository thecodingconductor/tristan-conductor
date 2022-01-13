/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import RelativeTime from "@yaireo/relative-time";

const propTypesShape = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired,
    thumbnail_url: PropTypes.string.isRequired,
    localImage: PropTypes.shape({
      absolutePath: PropTypes.string.isRequired,
    }),
    media_url: PropTypes.string.isRequired,
  }),
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const TileContainer = (props) => (
  <div
    {...props}
    sx={{
      height: "650px",
      gridColumn: ["1 / span 5", null, "1 / span 12"],
    }}
  />
);

const PreviewImage = (props) => (
  <img src={props.src} sx={{ height: "290px", width: "inherit" }} />
);

const HomePageInstaTile = ({ node }: Props) => {
  const {
    id,
    username,
    caption,
    timestamp,
    localImage,
    permalink,
    thumbnail_url,
    media_url,
  } = node;

  const relativeTime = new RelativeTime();
  const dateSince = relativeTime.from(new Date(timestamp));

  return (
    <TileContainer>
      {/* ToDO fix img dimensions. Maybe create an atom Component */}

      <img
        src={thumbnail_url || media_url}
        sx={{
          height: "205px",
          width: "100%",
        }}
      />
      <div
        sx={{
          background: "rgba(255, 255, 255, 0.04)",
          height: "50%",
          position: "relative",
        }}
      >
        <Themed.p
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "27px",
            margin: "10px",
          }}
        >
          {username}
        </Themed.p>
        <Themed.p
          sx={{
            fontSize: "12px",
            margin: "10px",
          }}
        >
          {`${caption.substring(0, 100)}...`}
        </Themed.p>
        <Themed.p
          sx={{
            fontSize: "12px",
            margin: "10px",
            color: "rgba(252, 253, 255, 0.41)",
            position: "absolute",
            bottom: 0,
          }}
        >
          {dateSince}
        </Themed.p>
      </div>
    </TileContainer>
  );
};

export default HomePageInstaTile;
