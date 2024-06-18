import React from "react";
import Hearder from "../components/Hearder";
import BlogHearder from "../components/BlogHearder";
import ContactContent from "../components/ContactContent";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div>
      <Hearder></Hearder>
      <BlogHearder title={"Liên hệ"}></BlogHearder>
      <ContactContent></ContactContent>
      <Footer></Footer>
    </div>
  );
};

export default ContactPage;
