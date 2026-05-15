import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | OneNess",
  description: "This is About Page for OneNess",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Expert Guidance, Delivered.
Stay ahead of regulatory changes and tax deadlines. Subscribe for simplified updates on Indian tax laws and compliance, or reach out to consult with our experts."
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
