export function percentageFromNumber(number: number, total: number) {
  if (!total) {
    console.warn("total can not be 0");
  }

  return (number / total) * 100;
}

export function percentageFromAspectRatio(aspectRatio: string) {
  const widthAndHeight = aspectRatio.split("/");

  if (widthAndHeight.length === 1) {
    console.warn("incorrect aspect ratio format provided");
    return;
  }

  const width = parseInt(widthAndHeight[0], 10);
  const height = parseInt(widthAndHeight[1], 10);

  return percentageFromNumber(height, width);
}

export function formatToFixedDecimalPlace(number: number, places: number = 1) {
  return (Math.round(number * (10 * places)) / (10 * places)).toFixed(places);
}
