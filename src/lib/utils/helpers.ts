export const removeQuotes = (inputString) => {
  return inputString.replace(/^"(.*)"$/, "$1");
};
