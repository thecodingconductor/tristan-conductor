// /** @jsx jsx */
// import { jsx } from "theme-ui";
// import React, { useRef, useState, forwardRef } from "react";
// import styled from "@emotion/styled";
// import * as PropTypes from "prop-types";
// import { useLazyImage } from "./Image.hooks";
// import { percentageFromNumber } from "../../../lib/utils/numbers";

// const propTypesShape = {
//   /**
//    * Specifies an alternate text for an image
//    */
//   alt: PropTypes.string,
//   /**
//    * Specifies the height of an image (in pixels) and can also reference the aspect ratio if isResponsive is true
//    */
//   height: PropTypes.number,
//   /**
//    * Specifies if a browser should defer loading of image until some conditions are met
//    */
//   isLazy: PropTypes.bool,
//   /**
//    * Specifies if the image image size should change based on browser size (while retaining original aspect ratio)
//    */
//   isResponsive: PropTypes.bool,
//   /**
//    * Specifies the path to the image
//    */
//   src: PropTypes.string.isRequired,
//   /**
//    * Specifies the width of an image (in pixels) and can also reference the aspect ratio if isResponsive is true
//    */
//   width: PropTypes.number,
//   /**
//    * If true, image is contained by the wrapper, instead of covering it. This is used on the Product Card to prevent flatlay images from overflowing the edges of the card.
//    */
//   shouldContain: PropTypes.bool,
// };

// type Props = PropTypes.InferProps<typeof propTypesShape>;

// // type WrapperDimensionProps = {
// //   cssHeight: number;
// //   cssWidth: number;
// // };

// const ImageWrapper = forwardRef<HTMLDivElement>((props, ref) => {
//   return <div ref={ref}>{props.children}</div>;
// });

// const ImageElement = (props) => {
//   return (
//     <img
//       sx={{
//         display: "block",
//         ...(props.isResponsive && {
//           objectFit: props.shouldContain ? "contain" : "cover",
//           height: "100%",
//           left: 0,
//           position: "absolute",
//           top: 0,
//           width: "100%",
//           opacity: props.opacity,
//         }),
//       }}
//     />
//   );
// };

// const Image = ({
//   alt,
//   height,
//   isLazy,
//   isResponsive,
//   src,
//   width,
//   shouldContain,
//   ...props
// }: Props) => {
//   const imgRef = useRef<HTMLDivElement>(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const { finalSrc } = useLazyImage({ src, imgRef });

//   const aspectRatio =
//     width && height && isResponsive ? percentageFromNumber(height, width) : 0;
//   const isisResponsive = isResponsive && !!aspectRatio;

//   function handleImageLoad() {
//     setIsLoaded(true);
//   }

//   return (
//     <ImageWrapper
//       {...props}
//       cssHeight={height}
//       cssWidth={width}
//       isResponsive={isResponsive}
//       ref={imgRef}
//       paddingBottom={isisResponsive && `${aspectRatio}%`}
//     >
//       <ImageElement
//         alt={alt || ""}
//         height={height}
//         width={width}
//         onLoad={handleImageLoad}
//         opacity={isLoaded ? 1 : 0}
//         src={isLazy ? finalSrc : src}
//         isResponsive={isResponsive}
//         shouldContain={shouldContain}
//       />
//     </ImageWrapper>
//   );
// };

// Image.propTypes = propTypesShape;

// Image.defaultProps = {
//   isLazy: false,
//   isResponsive: true,
// };

// export default Image;
