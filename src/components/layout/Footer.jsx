import { Link } from 'react-router-dom';
import Container from '@components/common/Container';
import { siteConfig } from '../../../site.config';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={siteConfig.theme.logo.image} alt={`${siteConfig.clinic.name} Logo`} className="w-10 h-10 rounded-lg object-cover" />
              <span className="font-display font-bold text-xl">{siteConfig.theme.logo.text}</span>
            </div>
            <p className="text-gray-400 mb-6">
              {siteConfig.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {siteConfig.footer.quickLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.link} className="text-gray-400 hover:text-primary-500 transition-colors">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPinIcon className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-gray-400 text-sm">
                  {siteConfig.clinic.address.street}, {siteConfig.clinic.address.city}, {siteConfig.clinic.address.state}
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="w-5 h-5 text-primary-500 shrink-0" />
                <a href={`tel:${siteConfig.clinic.contact.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-primary-500 transition-colors">
                  {siteConfig.clinic.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="w-5 h-5 text-primary-500 shrink-0" />
                <div className="text-gray-400 text-sm">
                  {siteConfig.clinic.hours.map((h, i) => (
                    <p key={i}>{h.days}: {h.time}</p>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Compliance & Social */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              <a href={siteConfig.clinic.social.facebook} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                F
              </a>
              <a href={siteConfig.clinic.social.instagram} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                I
              </a>
              <a href={`https://wa.me/${siteConfig.clinic.contact.whatsapp}`} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                W
              </a>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Legal</p>
            <div className="flex flex-col gap-2">
              {siteConfig.footer.legalLinks.map((link) => (
                <Link key={link.text} to={link.link} className="text-gray-400 text-sm hover:text-primary-500 transition-colors">{link.text}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12 text-center text-sm text-gray-500">
          <p>{siteConfig.footer.copyright}</p>
          <p className="mt-2 text-xs">
            Results may vary from person to person. Consult our doctors for a personalized plan.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
