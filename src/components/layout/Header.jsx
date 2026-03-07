import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Container from '@components/common/Container';
import Button from '@components/common/Button';
import { siteConfig } from '../../../site.config';
import { clsx } from 'clsx';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={clsx(
      'fixed w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    )}>
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={siteConfig.theme.logo.image} alt={`${siteConfig.clinic.name} Logo`} className="w-12 h-12 rounded-lg object-cover" />
          <div className="hidden sm:block">
            <span className={clsx(
              'font-display font-bold text-lg block leading-none',
              scrolled ? 'text-gray-900' : 'text-primary-900'
            )}>{siteConfig.theme.logo.text}</span>
            <span className="text-[10px] uppercase tracking-wider text-primary-600 font-semibold">Orthodontic Centre</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className={clsx(
                'text-sm font-medium transition-colors hover:text-primary-600',
                scrolled ? 'text-gray-600' : 'text-gray-800'
              )}
            >
              {item.name}
            </a>
          ))}
          <Button href="#contact" size="sm">Book Appointment</Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div className={clsx(
        'lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 transform',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <Container className="pt-24 pb-12 flex flex-col items-center gap-8 text-center">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-xl font-semibold text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button href="#contact" className="w-full max-w-xs mt-4">Book Appointment</Button>
          <div className="mt-8 pt-8 border-t border-gray-100 w-full">
            <p className="text-gray-500 mb-2">Call us today</p>
            <a href={`tel:${siteConfig.clinic.contact.phone.replace(/\s/g, '')}`} className="text-2xl font-bold text-primary-600">
              {siteConfig.clinic.contact.phone}
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
