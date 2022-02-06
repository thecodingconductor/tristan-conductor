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

// export const sortEvents = () => {
//   // const upcomingEvents = events
//   //   .map((event) =>
//   //     !isDateInPast(new Date(event.node.startDate)) ? event : null
//   //   )
//   //   .filter((n) => n);

//   // const pastEvents = events
//   //   .map((event) =>
//   //     isDateInPast(new Date(event.node.startDate)) ? event : null
//   //   )
//   //   .filter((n) => n)
//   //   .sort(
//   //     (a: any, b: any) =>
//   //       new Date(b.node.startDate).getTime() -
//   //       new Date(a.node.startDate).getTime()
//   //   );

//   // console.log({
//   //   upcomingEvents,
//   //   pastEvents,
//   // });

//   console.log("this is sort events");

//   // return {
//   //   upcomingEvents,
//   //   pastEvents,
//   // };
// };

export const testingFunc = () => {
  console.log("this is a test");
};
