import { Helmet } from 'react-helmet-async';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Services from '@components/sections/Services';
import Testimonials from '@components/sections/Testimonials';
import Contact from '@components/sections/Contact';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Jacobs Orthodontic Centre & Advanced Dental Care | Sulthan Bathery</title>
        <meta
          name="description"
          content="Advanced dental and orthodontic care in Sulthan Bathery. Book appointments for smile design, aligners, root canal treatment, implants, whitening and kids dentistry."
        />
      </Helmet>

      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
