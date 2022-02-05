export const removeQuotes = (inputString: string) => {
  return inputString.replace(/^"(.*)"$/, "$1");
};

export const isDateInPast = (eventDate: Date) => {
  const today = new Date();

  if (eventDate.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0)) {
    return true;
  }

  return false;
};
