import React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/atoms/Button/Button";
import AboutQuoteBlock from "../../components/atoms/AboutQuoteBlock/AboutQuoteBlock";
import HeaderComponent from "../../components/atoms/HeaderComponent/HeaderComponent";
import MobileAboutSpacer from "../../components/atoms/MobileAboutSpacer/MobileAboutSpacer";
import useBreakpoints from "../../lib/hooks/useBreakpoints";

const About = () => {
  const { isLarge } = useBreakpoints();
  return (
    <Layout>
      <HeaderComponent />
      {!isLarge && <MobileAboutSpacer />}
      <AboutQuoteBlock quoteText={"This is a quote"} />
      <Button
        onClick={() => console.log("This is the button")}
        label={"Learn More"}
      />
    </Layout>
  );
};

export default About;
