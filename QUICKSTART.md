# 🚀 Quick Start Guide

## For Users (Clinic Owners)

### Option 1: Using AI Assistant (Easiest!)

1. **Open this project** in VS Code or your preferred editor
2. **Open your AI assistant** (GitHub Copilot Chat, Claude Code, etc.)
3. **Tell the AI your clinic details** in natural language:

```
Hi! Please update this dental clinic website with my information:

Clinic: Bright Smile Dental
Doctor: Dr. Amit Sharma  
Location: 123 MG Road, Andheri, Mumbai, Maharashtra 400053
Phone: +91 9876543210
Email: contact@brightsmile.com

We offer:
- Cosmetic Dentistry
- Dental Implants
- Teeth Whitening
- Orthodontics (Braces & Aligners)
- Root Canal Treatment

Hours: Monday-Saturday 10 AM - 8 PM, Sunday 10 AM - 2 PM

Brand Colors: Blue (#2563EB)
```

The AI will automatically update all the configuration for you!

### Option 2: Manual Update

1. Open `site.config.js` in the root folder
2. Edit the values directly:
   - Clinic name, address, contact info
   - Services offered
   - Theme colors
   - Content for each section

3. Save the file

## Next Steps

1. **Add your images**:
   - Logo → `/public/images/logo/`
   - Hero image → `/public/images/hero/`
   - Doctor photo → `/public/images/about/`

2. **Update image paths** in `site.config.js`

3. **Run the site**:
   ```bash
   npm install
   npm run dev
   ```

4. **Preview** at `http://localhost:5173`

5. **Deploy** to Netlify/Vercel (see TEMPLATE_README.md)

## Important Files

- `site.config.js` - **ALL your content and settings**
- `TEMPLATE_README.md` - Complete documentation
- `AGENT_INSTRUCTIONS.md` - Guide for AI agents
- `public/images/` - Your images folder

## Need Help?

- Read [TEMPLATE_README.md](./TEMPLATE_README.md) for detailed instructions
- Ask your AI assistant for help
- Check the example configuration in `site.config.js`

---

**That's it! Your clinic website is ready to customize! 🎉**
