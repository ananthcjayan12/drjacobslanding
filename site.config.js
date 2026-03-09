export const siteConfig = {
  clinic: {
    name: 'Dr. Jacobs Orthodontic Centre & Advanced Dental Care',
    slogan: 'Where advanced technology meets compassionate care',
    founder: {
      name: 'Prof Dr. Jacob John & Dr. Maria Jacob',
      title: 'Founder & Lead Dentists',
      image: '/images/optimized/dr-jacob.webp'
    },
    contact: {
      phone: '+91 8075059701',
      email: 'drjacobsortho@gmail.com',
      whatsapp: '918075059701'
    },
    address: {
      street: 'Near KSEB Office, Chungam, Ooty Road',
      city: 'Sulthan Bathery',
      state: 'Kerala',
      country: 'India',
      pincode: '673592'
    },
    hours: [{ days: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' }],
    googleMapsEmbed:
      'https://maps.google.com/maps?q=Near%20KSEB%20Office%2C%20Chungam%2C%20Ooty%20Road%2C%20Sulthan%20Bathery&t=&z=15&ie=UTF8&iwloc=&output=embed',
    mapLink: 'https://maps.app.goo.gl/eigGesTpUFWckDPB7',
    social: {
      facebook: 'https://www.facebook.com/profile.php?id=61586546922972',
      instagram: 'https://www.instagram.com/dr_jacobs_/',
      twitter: '#',
      linkedin: '#'
    }
  },

  theme: {
    logo: {
      image: '/images/optimized/logo.webp',
      text: 'Dr. Jacobs',
      height: '40px'
    },
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e'
      },
      secondary: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75'
      }
    },
    fonts: {
      heading: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      body: "'Inter', 'Helvetica Neue', Arial, sans-serif"
    }
  },

  hero: {
    badge: 'Where advanced technology meets compassionate care',
    heading: 'Advanced Orthodontic & Dental Care for',
    headingHighlight: 'Confident Smiles',
    description:
      'Welcome to Dr. Jacobs Orthodontic Centre & Advanced Dental Care in Sulthan Bathery. We combine modern technology with compassionate, patient-first care for children and adults.',
    image: '/images/optimized/hero-clinic.webp',
    buttons: {
      primary: { text: 'Book Appointment', link: '#contact' },
      secondary: { text: 'Our Services', link: '#services' }
    },
    stats: {
      patientsCount: '20+',
      patientsText: 'years of specialist expertise'
    }
  },

  about: {
    subtitle: 'About Us',
    title: 'Meet Our Doctors',
    paragraphs: [
      'Dr. Jacobs Orthodontic Centre & Advanced Dental Care is led by Prof. Dr. Jacob John and Dr. Maria K. Pullazhi, bringing international specialist orthodontic expertise and compassionate general dentistry under one roof.',
      'Our team is committed to ethical care, accurate diagnosis, patient safety, and clear communication so every treatment plan is personalized and comfortable.'
    ],
    doctors: [
      {
        name: 'Prof. Dr. Jacob John',
        role: 'Consultant Specialist Orthodontist',
        image: '/images/optimized/dr-jacob.webp',
        imageAlt: 'Prof. Dr. Jacob John',
        bio: [
          'Prof. Dr. Jacob John is an internationally recognized Consultant Specialist Orthodontist with over 20 years of experience across Qatar, Oman, the United Kingdom, Ireland, and India.',
          'He completed specialist orthodontic training and fellowships from the Royal College of Surgeons in Ireland, Royal College of Surgeons of Edinburgh (UK), and the Royal College of Physicians and Surgeons of Glasgow.',
          'He has served as a Specialist Orthodontist at Aster Medical Centre, Qatar, and as a Professor and Postgraduate Guide in Orthodontics at Dr. Moopen\'s Medical College, Wayanad. He is also a recognized Ph.D. guide and examiner for the Royal College of Surgeons (UK).',
          'He specializes in advanced orthodontic treatments including Invisalign aligners, self-ligating braces, lingual orthodontics, and growth modulation therapies.'
        ]
      },
      {
        name: 'Dr. Maria K. Pullazhi',
        role: 'Chief Dental Surgeon',
        image: '/images/optimized/dr-maria.webp',
        imageAlt: 'Dr. Maria K. Pullazhi',
        bio: [
          'Dr. Maria K. Pullazhi is a highly experienced Chief Dental Surgeon with over 11 years of clinical experience in general dentistry.',
          'She holds a Bachelor of Dental Surgery (BDS) and an MBA in Hospital Administration, combining strong clinical expertise with professional healthcare management skills.',
          'She is known for her patient-centered approach, focusing on accurate diagnosis, effective treatment, and clear communication to help patients make informed decisions.',
          'She ensures high standards of patient care, safety, and ethical dental practice while delivering modern and compassionate treatment.'
        ]
      }
    ]
  },

  services: {
    subtitle: 'Our Services',
    title: 'Comprehensive Dental Care',
    items: [
      {
        id: 'smile-design',
        title: 'Smile Design',
        description: 'Comprehensive aesthetic transformations.',
        icon: 'sparkles',
        featured: true
      },
      {
        id: 'aligners',
        title: 'Aligners & Orthodontics',
        description: 'Clear aligners and traditional braces for teeth straightening.',
        icon: 'adjustments',
        featured: true
      },
      {
        id: 'root-canal',
        title: 'Root Canal Treatment (RCT)',
        description: 'Advanced endodontic care for saving damaged teeth.',
        icon: 'shield',
        featured: true
      },
      {
        id: 'implants',
        title: 'Dental Implants',
        description: 'Permanent solutions for missing teeth.',
        icon: 'cube',
        featured: false
      },
      {
        id: 'whitening',
        title: 'Teeth Whitening',
        description: 'Professional brightening services.',
        icon: 'sun',
        featured: false
      },
      {
        id: 'kids-dentistry',
        title: 'Kids Dentistry',
        description: 'Specialized, gentle care for children.',
        icon: 'users',
        featured: false
      }
    ]
  },

  testimonials: {
    subtitle: 'Testimonials',
    title: 'What Our Patients Say',
    items: [
      {
        id: 1,
        name: 'Patient Review Placeholder',
        role: 'Orthodontic Care',
        rating: 5,
        review: 'Review will be updated from verified patient feedback shortly.'
      },
      {
        id: 2,
        name: 'Patient Review Placeholder',
        role: 'General Dentistry',
        rating: 5,
        review: 'Review will be updated from verified patient feedback shortly.'
      },
      {
        id: 3,
        name: 'Patient Review Placeholder',
        role: 'Kids Dentistry',
        rating: 5,
        review: 'Review will be updated from verified patient feedback shortly.'
      }
    ]
  },

  contact: {
    subtitle: 'Get in Touch',
    title: 'Book Your Appointment Today',
    description: 'Please share your Name, Phone, and Preferred Date. Our team will call you shortly to confirm.',
    form: {
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true },
        { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
        { name: 'date', label: 'Preferred Date', type: 'date', required: false }
      ],
      submitButton: 'Book Appointment'
    }
  },

  footer: {
    description: 'Trusted orthodontic and advanced dental care in Sulthan Bathery.',
    copyright: `© ${new Date().getFullYear()} Dr. Jacobs Orthodontic Centre & Advanced Dental Care. All rights reserved.`,
    quickLinks: [
      { text: 'Home', link: '#home' },
      { text: 'About', link: '#about' },
      { text: 'Services', link: '#services' },
      { text: 'Testimonials', link: '#testimonials' },
      { text: 'Contact', link: '#contact' }
    ],
    legalLinks: [
      { text: 'Privacy Policy', link: '/privacy-policy' },
      { text: 'Terms of Service', link: '/terms-of-service' },
      { text: 'Disclaimer', link: '/disclaimer' }
    ]
  },

  seo: {
    title: 'Dr. Jacobs Orthodontic Centre & Advanced Dental Care | Sulthan Bathery',
    description:
      'Advanced orthodontics and general dentistry in Sulthan Bathery. Smile design, aligners, RCT, implants, whitening and kids dentistry.',
    keywords:
      'orthodontist Sulthan Bathery, aligners, braces, dental implants, root canal treatment, kids dentistry',
    ogImage: '/images/og-image.jpg'
  }
};

export default siteConfig;
