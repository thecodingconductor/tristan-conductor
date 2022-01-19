import React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/atoms/Button/Button";

const About = () => {
  return (
    <Layout>
      <div>This is the about page</div>
      <Button
        onClick={() => console.log("This is the button")}
        label={"Learn More"}
      />
    </Layout>
  );
};

export default About;
