# Premium Portfolio Redesign - Setup Checklist

## ✅ Installation Steps

### 1. Install New Dependencies
```bash
npm install react-icons simple-icons
```

**Why:** To display tech stack logos and social media icons properly.

### 2. Verify Files Structure
Ensure you have:
```
portfolio/
├── app/
│   ├── globals.css (UPDATED)
│   ├── layout.tsx
│   └── page.tsx (UPDATED)
├── components/
│   ├── NavigationV2.tsx (NEW)
│   ├── HeroV2.tsx (NEW)
│   ├── BentoInfoSection.tsx (NEW)
│   ├── ExperienceTimeline.tsx (NEW)
│   ├── ProjectsV2.tsx (NEW)
│   ├── ContactV2.tsx (NEW)
│   ├── SectionDividerV2.tsx (NEW)
│   ├── BackToTop.tsx (NEW)
│   ├── Footer.tsx (UPDATED)
│   └── [old components can stay or be removed]
├── public/
│   ├── Profile - Leo.png (REQUIRED - ADD THIS)
│   └── Resume - Leo Alcaraz Jr.pdf (REQUIRED - ADD THIS)
├── package.json (UPDATED)
└── tailwind.config.ts (UPDATED)
```

### 3. Add Your Assets to `public/` folder
**CRITICAL STEP:**
- [ ] Add your profile photo as `Profile - Leo.png`
- [ ] Add your resume as `Resume - Leo Alcaraz Jr.pdf`

Without these files, the hero section will show broken image references.

### 4. Run Development Server
```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## 📝 Content Updates (IMPORTANT)

### HeroV2 Component - Update These:
- [ ] Line 68-69: Update professional introduction text
- [ ] Line 89-91: Update 3 stat values (50+, 3+, 100%)
- [ ] Line 108: Download link should point to your resume

### BentoInfoSection Component - Update These:
- [ ] About Me card text (professional bio)
- [ ] Tech stack - verify all technologies are listed correctly
- [ ] Social links - update GitHub, LinkedIn, Email URLs
- [ ] Experience details (company, role, duration)

### ExperienceTimeline Component - Update These:
- [ ] Line 12-40: Replace with your actual work experiences
- [ ] Update company names
- [ ] Update role titles
- [ ] Update dates and achievements
- [ ] Update technologies used

### ProjectsV2 Component - Update These:
- [ ] Line 5-38: Replace project objects with your actual projects
- [ ] Update project titles
- [ ] Update project descriptions
- [ ] Add your project images
- [ ] Add GitHub repository links
- [ ] Add live demo links
- [ ] Mark your 2 best projects as `featured: true`

### ContactV2 Component - Update These:
- [ ] Line 9: Update email address
- [ ] Line 13: Update LinkedIn URL
- [ ] Line 17: Update GitHub URL
- [ ] Line 21: Update contact intro text

### Footer Component - Verify:
- [ ] Social links point to correct profiles
- [ ] Email address is correct
- [ ] Copyright year is correct

## 🎨 Optional Customizations

### Change Color Palette
Edit `app/globals.css` lines 8-33 (`:root` section) to update colors:
```css
:root {
  --bg-primary: #f5f5f0;           /* Main background */
  --accent: #6b5b95;               /* Primary accent color */
  --accent-indigo: #6b5b95;        /* Button & link color */
  /* ... update all colors as needed ... */
}
```

### Change Font Family
Edit `tailwind.config.ts` or `globals.css` to use different fonts.

### Adjust Spacing
Modify section padding in component files - look for:
- `py-16 md:py-24 lg:py-32` (section padding)
- `gap-12 lg:gap-20` (grid gaps)
- `px-6 md:px-12` (horizontal padding)

### Disable Animations
If animations feel too much, reduce them by:
1. Lowering duration values (currently 0.5-0.8 seconds)
2. Changing `ease` functions in components
3. Removing `motion` components and using CSS alternatives

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
1. Build: `npm run build`
2. Start: `npm start`
3. Serve the `.next` folder

**Important:** Ensure your `public/` assets are included in deployment!

## 🧪 Testing Checklist

### Desktop (1920px+)
- [ ] Hero section displays correctly
- [ ] Profile image loads
- [ ] All navigation links work
- [ ] Cards align properly in Bento grid
- [ ] Buttons are clickable
- [ ] No horizontal scrolling

### Tablet (768px-1024px)
- [ ] Layout adapts to tablet size
- [ ] Images scale appropriately
- [ ] Text is readable
- [ ] Cards stack in 2 columns
- [ ] Navigation is accessible

### Mobile (320px-768px)
- [ ] Hamburger menu works
- [ ] Stack layout is vertical
- [ ] Text is readable (no small fonts)
- [ ] Images fit screen width
- [ ] Buttons are touch-friendly
- [ ] No horizontal overflow

### Functionality
- [ ] Resume downloads correctly
- [ ] Social links open in new tabs
- [ ] Smooth scroll works
- [ ] Back-to-top button appears after scroll
- [ ] Form interactions work (if form added)
- [ ] All links point to correct URLs

## 🐛 Common Issues & Solutions

### Issue: Profile image not showing
**Solution:** 
1. Ensure `Profile - Leo.png` is in `public/` folder
2. Check filename matches exactly (case-sensitive)
3. Rebuild: `npm run build`

### Issue: Icons not displaying
**Solution:**
1. Run `npm install react-icons simple-icons`
2. Restart dev server: Stop and run `npm run dev` again

### Issue: Resume not downloading
**Solution:**
1. Verify `Resume - Leo Alcaraz Jr.pdf` is in `public/` folder
2. Check filename matches exactly
3. Update download link in HeroV2.tsx if needed

### Issue: Colors look different than expected
**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Check CSS variables in `globals.css`

### Issue: Animations are choppy/laggy
**Solution:**
1. Reduce animation complexity
2. Disable animations: Remove `motion` components
3. Use CSS animations instead of Framer Motion

## 📊 Design System Overview

### Typography Hierarchy
- **Hero Headline:** 56px-112px bold
- **Section Titles:** 36px-48px bold
- **Card Titles:** 18px-24px bold
- **Body Text:** 16px regular
- **Small Text:** 12px-14px

### Spacing Scale
- Small: 8px, 12px, 16px
- Medium: 24px, 32px
- Large: 48px, 64px
- XL: 96px, 128px

### Shadows
- Soft: `0 2px 8px rgba(0,0,0,0.04)`
- Soft-lg: `0 4px 16px rgba(0,0,0,0.06)`
- No heavy shadows (premium minimal)

### Border Radius
- Small elements: 8px
- Medium elements: 12px-16px
- Large cards: 16px
- Images: 24px-32px

## 📞 Getting Help

If something isn't working:

1. **Check the error message** - most issues are in console
2. **Verify file names** - filenames are case-sensitive
3. **Clear cache** - browser, npm, Next.js cache
4. **Rebuild** - `npm run build` to check for build errors
5. **Restart server** - stop and restart `npm run dev`

## ✨ Final Notes

- This redesign prioritizes **elegance over flashiness**
- All animations are **subtle and professional**
- The design is **intentional and breathable**
- Content is **easy to maintain and customize**
- Performance is **optimized and fast**

**Your portfolio is now a premium, modern showcase of your skills. Good luck! 🚀**
