# Setup Checklist

Use this checklist to ensure your dental clinic website is properly configured and ready to deploy.

## ✅ Initial Setup

- [ ] Cloned/downloaded the template
- [ ] Ran `npm install` successfully
- [ ] Can run `npm run dev` without errors
- [ ] Website loads at `http://localhost:5173`

## ✅ Basic Configuration

### Clinic Information
- [ ] Updated clinic name in `site.config.js`
- [ ] Updated doctor's name and details
- [ ] Added complete address
- [ ] Updated phone number
- [ ] Updated email address
- [ ] Updated WhatsApp number (if different from phone)
- [ ] Set correct operating hours

### Content
- [ ] Updated hero section heading and description
- [ ] Updated about section content
- [ ] Added/modified services list
- [ ] Added patient testimonials
- [ ] Updated contact section

### Branding
- [ ] Added your logo image to `/public/images/logo/`
- [ ] Updated logo path in config
- [ ] Set brand colors (primary & secondary)
- [ ] Customized slogan/tagline

## ✅ Images

- [ ] Added logo image
- [ ] Added hero section image
- [ ] Added doctor/clinic photo for about section
- [ ] All image paths correctly set in config
- [ ] Images are optimized (< 500KB each recommended)

## ✅ Social Media & Maps

- [ ] Updated Facebook link (or set to "#" to hide)
- [ ] Updated Instagram link (or set to "#" to hide)
- [ ] Added Google Maps embed URL
- [ ] Tested map loads correctly

## ✅ Legal Pages (Required for Ads)

- [ ] Updated Privacy Policy with your details
- [ ] Updated Terms of Service with your details  
- [ ] Updated Disclaimer page
- [ ] All legal pages accessible from footer

## ✅ SEO & Meta

- [ ] Updated SEO title in `site.config.js`
- [ ] Updated SEO description
- [ ] Updated keywords
- [ ] Updated title and description in `index.html`
- [ ] Added Open Graph image (for social sharing)

## ✅ Testing

### Visual Testing
- [ ] All sections display correctly
- [ ] Images load properly
- [ ] Colors match your brand
- [ ] Logo displays correctly
- [ ] Responsive on mobile devices
- [ ] Responsive on tablet devices

### Functionality Testing
- [ ] Contact form works
- [ ] Phone links (tel:) work on mobile
- [ ] Email links work
- [ ] WhatsApp link works
- [ ] Google Maps opens correctly
- [ ] All navigation links work
- [ ] Legal page links work

### Cross-Browser Testing
- [ ] Works in Chrome
- [ ] Works in Safari
- [ ] Works in Firefox
- [ ] Works in Edge

## ✅ Performance

- [ ] Build completes without errors (`npm run build`)
- [ ] No console errors in browser
- [ ] Page loads quickly (< 3 seconds)
- [ ] Images are compressed/optimized

## ✅ Pre-Deployment

- [ ] All placeholder content replaced with real content
- [ ] Contact information is correct and tested
- [ ] Services list is accurate
- [ ] Operating hours are current
- [ ] Social media links are correct
- [ ] Google Maps location is accurate
- [ ] **Deployment project name updated** in `.github/workflows/deploy.yml` (should match your clinic name)

## ✅ Deployment

- [ ] Chose hosting platform (Netlify/Vercel/Cloudflare Pages)
- [ ] Connected GitHub repository
- [ ] If using Cloudflare Pages via GitHub Actions:
  - [ ] Added `CLOUDFLARE_API_TOKEN` to repository secrets
  - [ ] Added `CLOUDFLARE_ACCOUNT_ID` to repository secrets
  - [ ] Verified project name in deploy.yml matches your clinic
- [ ] If using Netlify/Vercel:
  - [ ] Build command: `npm run build`
  - [ ] Publish directory: `dist`
- [ ] Site deploys successfully
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (https)

## ✅ Post-Deployment

- [ ] Tested live site on mobile
- [ ] Tested live site on desktop
- [ ] All links work on live site
- [ ] Contact form delivers messages
- [ ] Google Analytics added (if desired)
- [ ] Facebook Pixel added (if running ads)
- [ ] Submitted sitemap to Google Search Console

## 🎯 Optional Enhancements

- [ ] Added patient gallery/before-after photos
- [ ] Integrated online booking system
- [ ] Added blog section
- [ ] Added FAQ section
- [ ] Integrated live chat
- [ ] Added reviews widget
- [ ] Set up automatic redirects for old URLs

## 📝 Notes

Use this space to track any custom changes or pending tasks:

```
- 
- 
- 
```

---

## 🆘 Common Issues

### Issue: Build fails
**Solution**: Check for syntax errors in `site.config.js`, especially unescaped quotes

### Issue: Images don't load
**Solution**: Verify paths start with `/` and files are in `/public/images/`

### Issue: Colors don't apply
**Solution**: Restart dev server after changing colors in config

### Issue: Map doesn't show
**Solution**: Double-check Google Maps embed URL in config

---

**All checked? Your website is ready to go live! 🚀**
