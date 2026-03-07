import { useForm } from 'react-hook-form';
import Container from '@components/common/Container';
import SectionHeading from '@components/common/SectionHeading';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import { siteConfig } from '../../../site.config';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    alert('Thank you! We have received your request and will contact you shortly.');
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <Container>
        <SectionHeading subtitle={siteConfig.contact.subtitle} title={siteConfig.contact.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card hover={false} className="p-8">
            <p className="text-gray-600 mb-6">{siteConfig.contact.description}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone number is required' })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all`}
                  placeholder="+91 8075059701"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  {...register('date')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">Book Appointment</Button>
            </form>
          </Card>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Call Us</p>
                  <a href={`tel:${siteConfig.clinic.contact.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-primary-600">
                    {siteConfig.clinic.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Location</p>
                  <p className="text-gray-600 text-sm leading-tight">
                    {siteConfig.clinic.address.street},<br />
                    {siteConfig.clinic.address.city}, {siteConfig.clinic.address.state}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-100 h-64 shadow-sm bg-gray-200">
              <iframe
                title="Google Maps"
                src={siteConfig.clinic.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href={siteConfig.clinic.mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-primary-600 font-semibold hover:text-primary-700"
            >
              Open in Google Maps
            </a>

            <div className="p-6 rounded-2xl bg-primary-600 text-white flex items-center gap-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <ClockIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-90 font-medium">Opening Hours</p>
                <div className="flex flex-col sm:flex-row sm:gap-6 text-sm">
                  {siteConfig.clinic.hours.map((h, i) => (
                    <p key={i} className="font-bold">{h.days}: {h.time}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
