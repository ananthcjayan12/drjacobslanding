# 🦷 Dental Clinic Website Template

A modern, customizable website template specifically designed for dental clinics. Built with React, Vite, and Tailwind CSS, this template allows you to quickly launch a professional website for your dental practice.

## ✨ Features

- 🎨 **Fully Customizable** - Change colors, content, and branding from a single config file
- 🤖 **AI-Friendly** - Designed to work seamlessly with AI agents (GitHub Copilot, Claude Code, etc.)
- 📱 **Responsive Design** - Looks great on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎯 **SEO Optimized** - Meta tags and structured content for better search rankings
- 📋 **Ad Compliant** - Includes Privacy Policy, Terms of Service, and Disclaimer pages
- 🔧 **Easy to Deploy** - Ready for Netlify, Vercel, or any static hosting

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Basic knowledge of using terminal/command line

### Installation

1. **Use this template**
   - Click the "Use this template" button on GitHub, or
   - Clone this repository:
   ```bash
   git clone https://github.com/yourusername/dental-clinic-template.git
   cd dental-clinic-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - You should see the template running!

## 🎨 Customization

### Method 1: Using AI Agents (Recommended)

This template is designed to work with AI coding assistants. Simply tell your AI agent about your clinic details:

**Example conversation:**

You: "Hi! I need to update this dental clinic website with my information:
- Clinic Name: Bright Smile Dental
- Doctor: Dr. Sharma
- Location: 123 MG Road, Mumbai, Maharashtra 400001
- Phone: +91 9876543210
- Email: contact@brightsmile.com
- Services: Cosmetic Dentistry, Implants, Orthodontics, Teeth Whitening
- Brand Color: Blue (#1E40AF)"

The AI will parse your information and update the `site.config.js` file automatically!

> **For AI Agents**: See [AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md) for detailed parsing guidelines.

### Method 2: Manual Configuration

Edit the `site.config.js` file in the root directory. This file contains all customizable content:

```javascript
export const siteConfig = {
  clinic: {
    name: "Your Clinic Name",
    slogan: "Your Tagline",
    // ... more settings
  },
  // ... other sections
}
```

#### Key Configuration Sections

1. **Clinic Information** (`siteConfig.clinic`)
   - Name, slogan, founder details
   - Contact information (phone, email, WhatsApp)
   - Physical address
   - Operating hours
   - Social media links

2. **Theme & Branding** (`siteConfig.theme`)
   - Logo image and text
   - Primary and secondary colors
   - Font families

3. **Hero Section** (`siteConfig.hero`)
   - Main heading and tagline
   - Call-to-action buttons
   - Hero image

4. **About Section** (`siteConfig.about`)
   - Doctor introduction
   - Clinic story
   - Key features

5. **Services** (`siteConfig.services`)
   - List of treatments offered
   - Descriptions and icons

6. **Testimonials** (`siteConfig.testimonials`)
   - Patient reviews and ratings

7. **Contact & Footer** (`siteConfig.contact`, `siteConfig.footer`)
   - Contact form configuration
   - Footer links and information

## 🖼️ Adding Images

1. Place your images in the `/public/images/` directory:
   ```
   public/
   └── images/
       ├── logo/
       │   └── your-logo.png
       ├── hero/
       │   └── hero-image.jpg
       └── about/
           └── doctor-photo.jpg
   ```

2. Update image paths in `site.config.js`:
   ```javascript
   logo: {
     image: "/images/logo/your-logo.png"
   },
   hero: {
     image: "/images/hero/hero-image.jpg"
   }
   ```

## 🎨 Customizing Colors

### Option 1: Using Predefined Colors

The template comes with a teal/blue color scheme. To change colors, update in `site.config.js`:

```javascript
theme: {
  colors: {
    primary: {
      50: '#f0f9ff',
      // ... add your color palette
      600: '#0284c7', // Main primary color
      // ...
    }
  }
}
```

### Option 2: Generate Color Palette

Use an online tool like [Tailwind Color Generator](https://uicolors.app/create) to generate a complete palette from your brand color.

## 📝 Updating Content

### Services

Add or modify services in `site.config.js`:

```javascript
services: {
  items: [
    {
      id: "unique-id",
      title: "Service Name",
      description: "Service description",
      icon: "sparkles", // Choose from available icons
      featured: true
    }
  ]
}
```

**Available Icons:**
- `sparkles` - Cosmetic/Smile Design
- `adjustments` - Aligners/Orthodontics
- `shield` - Root Canal/Protection
- `cube` - Implants/3D work
- `sun` - Whitening/Brightening
- `users` - Kids/Family Dentistry
- `beaker` - Surgery/Clinical
- `squares` - General/Multiple

### Testimonials

Update patient reviews:

```javascript
testimonials: {
  items: [
    {
      id: 1,
      name: "Patient Name",
      role: "Patient",
      rating: 5,
      review: "Your review text here..."
    }
  ]
}
```

## 🌐 Deploying Your Website

### Important: Update Deployment Configuration

Before deploying, ensure the project name in `.github/workflows/deploy.yml` matches your clinic:

```yaml
env:
  PROJECT_NAME: your-clinic-name  # Should be lowercase with hyphens
```

If you used an AI agent to customize the site, this should already be updated. If not, change `smilecraft-landing` to match your clinic name (lowercase, hyphens instead of spaces).

### Deploy to Cloudflare Pages (via GitHub Actions)

This template includes automatic deployment to Cloudflare Pages:

1. Push your code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Get your Account ID and create an API token
4. In your GitHub repository, go to Settings → Secrets and variables → Actions
5. Add two secrets:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
6. Push to the `main` branch - deployment happens automatically!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

### Other Hosting Services

The template builds to a static `dist` folder that can be hosted anywhere:

```bash
npm run build
```

Upload the `dist` folder to any static hosting service.

## 📱 Google Maps Integration

To add your clinic's location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your clinic address
3. Click "Share" → "Embed a map"
4. Copy the embed URL
5. Update in `site.config.js`:
   ```javascript
   clinic: {
     googleMapsEmbed: "your-google-maps-embed-url"
   }
   ```

## 🔍 SEO Configuration

Update SEO settings in `site.config.js`:

```javascript
seo: {
  title: "Your Clinic Name | Location",
  description: "Brief description of your services and location",
  keywords: "dentist, dental clinic, your city, services",
  ogImage: "/images/og-image.jpg"
}
```

Also update `index.html`:
```html
<title>Your Clinic Name | Location</title>
<meta name="description" content="Your description" />
```

## 📋 Legal Pages

The template includes required compliance pages:

- **Privacy Policy** (`/privacy-policy`)
- **Terms of Service** (`/terms-of-service`)
- **Disclaimer** (`/disclaimer`)

These are required for running Facebook/Google ads. Update them in:
- `src/pages/PrivacyPolicy.jsx`
- `src/pages/TermsOfService.jsx`
- `src/pages/Disclaimer.jsx`

## 🔧 Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/pages/Home.jsx`
3. Add section data to `site.config.js` if needed

### Changing Layout

Edit components in `src/components/layout/`:
- `Header.jsx` - Navigation bar
- `Footer.jsx` - Footer section

### Styling

The template uses Tailwind CSS. To customize styles:
- Edit existing component classes
- Modify `tailwind.config.js` for global theme changes
- Add custom CSS in `src/styles/index.css`

## 📞 Support

### Common Issues

**Build fails after changing colors:**
- Ensure color palette has all required shades (50-900)
- Check for syntax errors in `site.config.js`

**Images not loading:**
- Verify images are in `/public/images/` directory
- Check file paths in config (should start with `/`)

**Site not updating:**
- Clear browser cache
- Restart dev server (`npm run dev`)

### Getting Help

- Check [AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md) for AI agent guidance
- Review the [FAQ](#faq) section below
- Open an issue on GitHub

## 🎯 FAQ

**Q: Can I use this for other types of businesses?**
A: Yes! While optimized for dental clinics, you can modify it for any service-based business.

**Q: Do I need coding knowledge?**
A: Basic knowledge helps, but using AI agents makes it easy with no coding required.

**Q: Can I add more services?**
A: Yes! Just add new items to the `services.items` array in `site.config.js`.

**Q: How do I change fonts?**
A: Update Google Fonts link in `index.html` and font names in `site.config.js`.

**Q: Is this template free?**
A: Yes! Use it for your clinic or client projects.

## 📄 License

This template is open source and free to use for commercial projects.

## 🙏 Credits

- Built with [React](https://react.dev) and [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Heroicons](https://heroicons.com)
- Animations with [Framer Motion](https://www.framer.com/motion)

---

**Happy Building! 🎉**

Need help? Just ask your AI coding assistant to help customize this template using the information in [AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md).
