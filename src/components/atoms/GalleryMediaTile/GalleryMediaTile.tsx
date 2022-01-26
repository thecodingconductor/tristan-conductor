/** @jsx jsx */
import { jsx } from "theme-ui";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

type Props = {
  image: IGatsbyImageData;
  alt: string;
};

const GalleryMediaTile = ({ image, alt }: Props) => {
  return <GatsbyImage image={image} alt={alt} />;
};

export default GalleryMediaTile;
