import Container from '@components/common/Container';
import SectionHeading from '@components/common/SectionHeading';
import Card from '@components/common/Card';
import { siteConfig } from '../../../site.config';
import getIcon from '@utils/iconMapper';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <Container>
        <SectionHeading 
          subtitle={siteConfig.services.subtitle}
          title={siteConfig.services.title}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.items.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col group">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <a href="#contact" className="text-primary-600 font-bold text-sm inline-flex items-center gap-2 group/link">
                      Learn More 
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;
