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
        <title>Dr. Pooja's Smile Craft Dental Clinic | Best Dentist in Ezhupunna</title>
        <meta name="description" content="Expert dental care in Ezhupunna, Kerala. Smile Craft offers Smile Design, Aligners, Root Canal, Implants and more by Dr. Pooja." />
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
