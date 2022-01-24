/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useEffect, useContext } from "react";
import GlobalContext from "../../context/global/globalContext";

const Contact = (props) => {
  const globalContext = useContext(GlobalContext);

  const { isSubmitted, onSubmit } = globalContext.form;

  return (
    <>
      <div>This is the contact page</div>
    </>
  );
};

export default Contact;
