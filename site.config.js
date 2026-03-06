/**
 * ============================================================================
 * DENTAL CLINIC WEBSITE CONFIGURATION
 * ============================================================================
 * 
 * This is the central configuration file for your dental clinic website.
 * Update this file to customize your website content, branding, and theme.
 * 
 * AI AGENTS: This file is designed to be easily parseable and updatable.
 * See AGENT_INSTRUCTIONS.md for detailed guidance on updating this config.
 * 
 * ============================================================================
 */

export const siteConfig = {
  
  // ============================================================================
  // CLINIC INFORMATION
  // ============================================================================
  clinic: {
    name: "Dr. Pooja's Smile Craft Dental Clinic",
    slogan: "Crafting Healthy Smiles",
    founder: {
      name: "Dr. Pooja",
      title: "Lead Dentist",
      image: "/images/about/dr-pooja.webp", // Path to doctor's image
    },
    
    // Contact Information
    contact: {
      phone: "+91 79070 06842",
      email: "info@smilecraft.in",
      whatsapp: "917907006842", // Without + or spaces
    },
    
    // Physical Address
    address: {
      street: "Sreenarayanapuram, Opposite Family Health Center",
      city: "Ezhupunna",
      state: "Kerala",
      country: "India",
      pincode: "688537"
    },
    
    // Operating Hours
    hours: [
      { days: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
      { days: "Sunday", time: "9:00 AM – 3:00 PM" }
    ],
    
    // Google Maps Embed URL
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.328394468603!2d76.2974643!3d9.8229647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDknMjIuNyJOIDc2wrAxNyc1MC45IkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    
    // Social Media Links (set to "#" to hide)
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    }
  },

  // ============================================================================
  // THEME & BRANDING
  // ============================================================================
  theme: {
    // Logo Configuration
    logo: {
      image: "/images/logo/smile-craft-logo.png", // Path to logo image
      text: "SmileCraft", // Text logo (used if image not available)
      height: "40px" // Logo height
    },
    
    // Color Scheme (Tailwind CSS color values)
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7', // Main primary color
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      secondary: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3', // Main secondary color
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75',
      },
      // Add more custom colors if needed
    },
    
    // Typography
    fonts: {
      heading: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      body: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    }
  },

  // ============================================================================
  // HERO SECTION
  // ============================================================================
  hero: {
    badge: "Crafting Healthy Smiles", // Small text above heading
    heading: "Expert Dental Care for a",
    headingHighlight: "Perfect Smile", // Highlighted part of heading
    description: "Welcome to Dr. Pooja's Smile Craft Dental Clinic, where we combine advanced technology with gentle care to craft your best smile yet.",
    image: "/images/hero/hero-patient.webp",
    
    // Call-to-action buttons
    buttons: {
      primary: {
        text: "Book an Appointment",
        link: "#contact"
      },
      secondary: {
        text: "Our Services",
        link: "#services"
      }
    },
    
    // Stats/Social Proof
    stats: {
      patientsCount: "500+",
      patientsText: "happy patients"
    }
  },

  // ============================================================================
  // ABOUT SECTION
  // ============================================================================
  about: {
    subtitle: "About Us",
    title: "Meet Dr. Pooja: The Heart of Smile Craft",
    badge: {
      line1: "Expert Care",
      line2: "Patient Centered"
    },
    
    paragraphs: [
      "Dr. Pooja is a dedicated dental professional with a vision for providing high-quality, personalized dental care. Her journey with 'Smile Craft' began with a simple goal: to create a clinic where every patient feels heard, cared for, and leaves with a smile they're proud of.",
      
      "At Dr. Pooja's Smile Craft Dental Clinic, we believe that dental health is a cornerstone of overall well-being. Our team uses the latest technology and follow strictly sterile protocols to ensure the safest and most effective treatments for our community in Ezhupunna."
    ],
    
    features: [
      "Patient-Centered Care",
      "Advanced Dental Technology",
      "Strict Hygiene Standards",
      "Gentle & Painless Procedures"
    ]
  },

  // ============================================================================
  // SERVICES
  // ============================================================================
  services: {
    subtitle: "Our Services",
    title: "Comprehensive Dental Care",
    
    items: [
      {
        id: "smile-design",
        title: "Smile Design",
        description: "Comprehensive aesthetic transformations for your perfect smile.",
        icon: "sparkles", // Icon identifier (maps to Heroicons)
        featured: true
      },
      {
        id: "aligners",
        title: "Aligners & Orthodontics",
        description: "Clear aligners and traditional braces for teeth straightening.",
        icon: "adjustments",
        featured: true
      },
      {
        id: "root-canal",
        title: "Root Canal Treatment",
        description: "Advanced endodontic care for saving damaged teeth.",
        icon: "shield",
        featured: true
      },
      {
        id: "implants",
        title: "Dental Implants",
        description: "Permanent solutions for missing teeth.",
        icon: "cube",
        featured: false
      },
      {
        id: "whitening",
        title: "Teeth Whitening",
        description: "Professional brightening services for a radiant smile.",
        icon: "sun",
        featured: false
      },
      {
        id: "kids-dentistry",
        title: "Kids Dentistry",
        description: "Specialized, gentle care for children in a friendly environment.",
        icon: "users",
        featured: false
      }
    ]
  },

  // ============================================================================
  // TESTIMONIALS
  // ============================================================================
  testimonials: {
    subtitle: "Success Stories",
    title: "What Our Patients Say",
    
    items: [
      {
        id: 1,
        name: "Anjali Nair",
        role: "Patient",
        rating: 5,
        review: "Dr. Pooja is incredibly gentle and patient. I was terrified of root canals, but she made the whole process painless and comfortable. Highly recommend!",
        image: "" // Optional: patient image
      },
      {
        id: 2,
        name: "Rahul K.",
        role: "Patient",
        rating: 5,
        review: "The smile design treatment I received here was life-changing. The attention to detail and professional care at Smile Craft is top-notch.",
        image: ""
      },
      {
        id: 3,
        name: "Meera S.",
        role: "Parent",
        rating: 5,
        review: "Best kids dentistry in the area. My daughter actually enjoys going to the dentist now. Dr. Pooja has a magical way with children.",
        image: ""
      }
    ]
  },

  // ============================================================================
  // CONTACT SECTION
  // ============================================================================
  contact: {
    subtitle: "Get in Touch",
    title: "Book Your Appointment Today",
    description: "Have questions or ready to transform your smile? We're here to help!",
    
    // Form fields configuration
    form: {
      fields: [
        { name: "name", label: "Full Name", type: "text", required: true },
        { name: "phone", label: "Phone Number", type: "tel", required: true },
        { name: "email", label: "Email", type: "email", required: false },
        { name: "date", label: "Preferred Date", type: "date", required: false },
        { name: "message", label: "Message", type: "textarea", required: false }
      ],
      submitButton: "Book Appointment"
    }
  },

  // ============================================================================
  // FOOTER
  // ============================================================================
  footer: {
    description: "Your trusted partner for comprehensive dental care in Ezhupunna, Kerala.",
    copyright: `© ${new Date().getFullYear()} Dr. Pooja's Smile Craft Dental Clinic. All rights reserved.`,
    
    // Quick Links
    quickLinks: [
      { text: "Home", link: "#home" },
      { text: "About", link: "#about" },
      { text: "Services", link: "#services" },
      { text: "Testimonials", link: "#testimonials" },
      { text: "Contact", link: "#contact" }
    ],
    
    // Legal Links (required for ad compliance)
    legalLinks: [
      { text: "Privacy Policy", link: "/privacy-policy" },
      { text: "Terms of Service", link: "/terms-of-service" },
      { text: "Disclaimer", link: "/disclaimer" }
    ]
  },

  // ============================================================================
  // SEO & META INFORMATION
  // ============================================================================
  seo: {
    title: "Dr. Pooja's Smile Craft Dental Clinic | Expert Dental Care in Ezhupunna",
    description: "Professional dental care in Ezhupunna, Kerala. Offering smile design, aligners, root canal, implants, teeth whitening & kids dentistry. Book your appointment today!",
    keywords: "dental clinic Ezhupunna, dentist Kerala, smile design, dental implants, root canal, teeth whitening, kids dentistry",
    ogImage: "/images/og-image.jpg" // Open Graph image for social sharing
  }
};

export default siteConfig;
