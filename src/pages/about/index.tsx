import React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/atoms/Button/Button";
import AboutQuoteBlock from "../../components/atoms/AboutQuoteBlock/AboutQuoteBlock";

const About = () => {
  return (
    <Layout>
      <div>This is the about page</div>
      <AboutQuoteBlock quoteText={"This is a quote"} />
      <Button
        onClick={() => console.log("This is the button")}
        label={"Learn More"}
      />
    </Layout>
  );
};

export default About;
