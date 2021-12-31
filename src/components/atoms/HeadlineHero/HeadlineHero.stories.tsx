import React from "react";
import HeadlineHero from "./HeadlineHero";
import { dummyHeadline } from "./HeadlineHero.mocks";

export default {
  title: "HeadlineHero",
  component: HeadlineHero,
};

const Template = (args) => <HeadlineHero {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: dummyHeadline,
};
