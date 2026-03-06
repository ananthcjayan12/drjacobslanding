# Guide: Adding Pictures to Your Website

To add your professional photos to the website, follow these simple steps:

## 1. Prepare Your Images
For the best performance, try to:
*   Use **WebP** format if possible (or high-quality JPEG/PNG).
*   Compress images (try to keep them under 300KB).
*   Recommended sizes:
    *   **Hero Image:** 1200x1500px (portrait)
    *   **Dr. Pooja Portrait:** 800x800px (square)
    *   **Clinic Photos:** 1000x800px

## 2. Upload Files
Place your image files in the following folders:
*   **Hero Image:** `public/images/hero/hero-patient.webp`
*   **About Section:** `public/images/about/dr-pooja.webp`
*   **Favicon:** `public/favicon.svg` (or `.ico`)

## 3. Update the Code
Once the files are in the folders, update these specific components:

### For the Hero Section (`src/components/sections/Hero.jsx`):
Find the placeholder `<div>` and replace it with:
```jsx
<img 
  src="/images/hero/hero-patient.webp" 
  alt="Smile Craft Patient" 
  className="w-full h-full object-cover"
/>
```<img 
  src="/images/hero/hero-patient.webp" 
  alt="Smile Craft Patient" 
  className="w-full h-full object-cover"
/>

### For the About Section (`src/components/sections/About.jsx`):
Find the placeholder `<div>` and replace it with:
```jsx
<img 
  src="/images/about/dr-pooja.webp" 
  alt="Dr. Pooja" 
  className="w-full h-full object-cover"
/>
```

### For Services/Testimonials:
You can add specific images in `public/images/services/` and update the `src/data/services.js` file with an `image` property if you'd like to use photos instead of icons.

---

## 4. Automated Deployment (GitHub Actions)
I've added a GitHub Actions workflow in `.github/workflows/deploy.yml`. To make it work:
1.  Go to your GitHub Repository **Settings** > **Secrets and variables** > **Actions**.
2.  Add two **New repository secrets**:
    *   `CLOUDFLARE_API_TOKEN`: Your Cloudflare API Token (with Pages edit permissions).
    *   `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID.
3.  Every time you push to the `main` branch, the site will automatically build and deploy!

---

## 5. Why this way?
By putting images in the `public` folder, you can refer to them using a simple path like `/images/filename.ext`. This is the standard way for static assets in Vite projects.
