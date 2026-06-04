import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | OneNess",
  description: "This is Contact Page for OneNess",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description=""Have questions about compliance, fundraising compliance, or financial strategy? Fill out the form below or reach out via WhatsApp for a priority consultation with our advisory team."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
