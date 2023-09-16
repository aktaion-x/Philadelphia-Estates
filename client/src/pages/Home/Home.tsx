import Faq from "./Faq.js";
import Footer from "./Footer.js";
import Landing from "./Landing.jsx";
import SectionOne from "./SectionOne.js";
import SectionThree from "./SectionThree.js";
import SectionTwo from "./SectionTwo.js";
import Testimonials from "./Testimonials.js";

function Home() {
  return (
    <div>
      <Landing />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
