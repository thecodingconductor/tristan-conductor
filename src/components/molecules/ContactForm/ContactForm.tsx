/** @jsx jsx */
import { jsx } from "theme-ui";

import FormField from "../../atoms/FormField/FormField";
import Button from "../../atoms/Button/Button";

const ContactForm = () => {
  return (
    <form
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <FormField type={"text"} label="First Name" />
      <FormField type={"text"} label="Last Name" />
      <FormField type={"email"} label="Email" />

      <FormField type={"text"} label="Subject Line" />
      <FormField type={"textarea"} label="Message Body" />
      <Button
        isSubmit={true}
        onClick={() => console.log("form submitted")}
        label={"Submit"}
        isParent={false}
      />
    </form>
  );
};

export default ContactForm;
