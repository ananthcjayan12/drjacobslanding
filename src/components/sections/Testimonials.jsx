import Container from '@components/common/Container';
import SectionHeading from '@components/common/SectionHeading';
import Card from '@components/common/Card';
import { StarIcon } from '@heroicons/react/24/solid';
import { siteConfig } from '../../../site.config';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <Container>
        <SectionHeading 
          subtitle={siteConfig.testimonials.subtitle}
          title={siteConfig.testimonials.title}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.testimonials.items.map((testimonial) => (
            <Card key={testimonial.id} className="relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" />
                </svg>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
