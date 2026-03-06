import Container from '@components/common/Container';
import SectionHeading from '@components/common/SectionHeading';
import { siteConfig } from '../../../site.config';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden relative shadow-xl">
              <img
                src={siteConfig.clinic.founder.image}
                alt={`${siteConfig.clinic.founder.name} at ${siteConfig.clinic.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -top-6 -right-6 bg-secondary-600 text-white p-6 rounded-2xl shadow-xl text-center">
              <p className="text-xl font-bold leading-tight">{siteConfig.about.badge.line1}</p>
              <p className="text-xs font-medium opacity-90 uppercase tracking-wider">{siteConfig.about.badge.line2}</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading 
              subtitle={siteConfig.about.subtitle}
              title={siteConfig.about.title}
            />
            <div className="space-y-6 text-gray-600 leading-relaxed">
              {siteConfig.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <ul className="space-y-3 pt-4">
                {siteConfig.about.features.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium text-gray-900">
                    <div className="w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
