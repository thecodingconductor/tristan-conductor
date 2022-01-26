/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useEffect, useContext } from "react";
import GlobalContext from "../../context/global/globalContext";
import { useStaticQuery, graphql } from "gatsby";
import HeaderComponent from "../../components/atoms/HeaderComponent/HeaderComponent";
import ContactForm from "../../components/molecules/ContactForm/ContactForm";

const Contact = (props) => {
  const globalContext = useContext(GlobalContext);

  const { isSubmitted, onSubmit } = globalContext.form;
  const {
    isOpen,
    closeMenu,
    hideSideNav,
    openMenu,
    isSideNavVisible,
    showSideNav,
  } = globalContext.menu;

  const data = useStaticQuery(graphql`
    query {
      allContentfulContactPage {
        edges {
          node {
            heading
          }
        }
      }
    }
  `);

  console.log(data);

  useEffect(() => {
    isOpen && closeMenu();

    hideSideNav();
  }, []);

  return (
    <>
      <HeaderComponent
        closeMenu={closeMenu}
        openMenu={openMenu}
        isSideNavVisible={isSideNavVisible}
        isOpen={isOpen}
        showSideNav={showSideNav}
        hideSideNav={hideSideNav}
        margin={50}
      />
      <div
        className="main-contact-page-container"
        sx={{
          gridColumn: ["1 / span 5", null, "1 / span 12"],

          display: "flex",
          flexDirection: "column",
        }}
      >
        <Themed.h1
          sx={{
            mb: "87px",
          }}
        >
          {data.allContentfulContactPage.edges[0].node.heading}
        </Themed.h1>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
