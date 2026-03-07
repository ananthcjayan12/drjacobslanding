import Container from '@components/common/Container';
import SectionHeading from '@components/common/SectionHeading';
import Card from '@components/common/Card';
import { siteConfig } from '../../../site.config';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <Container>
        <SectionHeading subtitle={siteConfig.about.subtitle} title={siteConfig.about.title} centered />

        <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-4 mb-12">
          {siteConfig.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteConfig.about.doctors.map((doctor) => (
            <Card className="h-full" hover={false} key={doctor.name}>
              <img
                src={doctor.image}
                alt={doctor.imageAlt || doctor.name}
                className="w-full h-64 rounded-xl object-cover mb-5"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
              <p className="text-primary-600 font-semibold mb-4">{doctor.role}</p>
              <div className="space-y-4 text-gray-600">
                {doctor.bio.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
