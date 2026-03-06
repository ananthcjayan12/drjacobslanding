import { motion } from 'framer-motion';
import Container from '@components/common/Container';
import Button from '@components/common/Button';
import { siteConfig } from '../../../site.config';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary-50">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-100/50 skew-x-12 translate-x-1/4 -z-10 hidden lg:block" />
      
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            {siteConfig.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-[1.1]">
            {siteConfig.hero.heading} <span className="text-primary-600">{siteConfig.hero.headingHighlight}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            {siteConfig.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={siteConfig.hero.buttons.primary.link} size="lg">{siteConfig.hero.buttons.primary.text}</Button>
            <Button href={siteConfig.hero.buttons.secondary.link} variant="outline" size="lg">{siteConfig.hero.buttons.secondary.text}</Button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Join <span className="text-gray-900 font-bold">{siteConfig.hero.stats.patientsCount} {siteConfig.hero.stats.patientsText}</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl shadow-2xl overflow-hidden border-8 border-white bg-primary-100">
            <img
              src={siteConfig.hero.image}
              alt={`${siteConfig.clinic.name} - Dental Care`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 tracking-tight leading-none mb-1">Expert Dentistry</p>
                <p className="text-xs text-gray-500">Certified Professionals</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
