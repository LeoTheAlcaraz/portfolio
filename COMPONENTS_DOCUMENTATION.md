# Premium Portfolio Components - Documentation

## Component Overview

This document provides detailed information about each new component in the premium redesign.

---

## 1. NavigationV2.tsx

**Purpose:** Sticky header navigation with smooth scroll effects and resume download

### Key Features
- Fixed positioning with scroll-triggered backdrop blur
- Responsive mobile hamburger menu
- Smooth link underline animations
- Resume download button with icon
- Active nav item detection ready

### Customization Points
```typescript
// Update navigation items
const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

// Update logo text
<Link href="/">LA</Link>  // Change to your initials

// Update resume link
href="/Resume - Leo Alcaraz Jr.pdf"  // Change to your file
```

### Styling Classes Used
- `fixed`, `z-50` - Sticky positioning
- `bg-white/80 backdrop-blur-md` - Glass morphism
- `transition-all duration-300` - Smooth blur transition

---

## 2. HeroV2.tsx

**Purpose:** Premium split-layout hero section with profile image and CTAs

### Key Features
- Left side: Typography, stats, CTAs
- Right side: Profile image with floating tech labels
- Responsive: Stacks on mobile
- Animated floating elements around image
- Availability badge and professional stats

### Customization Points
```typescript
// Update headline and intro
<h1>Crafting thoughtful digital experiences</h1>
<p>Full-stack developer with passion...</p>

// Update stats
{ label: '50+', value: 'Projects' }
{ label: '3+', value: 'Years Exp' }
{ label: '100%', value: 'Satisfaction' }

// Update tech stack labels (floating)
const stackLabels = [
  'React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'AI/ML'
]

// Update CTA buttons
View Projects | Download Resume | Contact Me
```

### Image Requirements
- File: `public/Profile - Leo.png`
- Recommended size: 800x900px or square
- Format: PNG, JPG recommended
- Will be cropped to fit rounded container

### Animations
- Container stagger: 0.1s delay between items
- Item reveal: 0.6s fade + slide up
- Image hover: 1.02x scale on hover
- Tech labels: Continuous floating motion (6-10s each)

---

## 3. BentoInfoSection.tsx

**Purpose:** Modular Bento-grid layout with multiple information cards

### Sections

#### About Me (Large Card - 2 cols)
- Professional bio (2-3 sentences)
- Personal mission statement
- Encourages customization

#### Interests (Single Card)
- 6 Interest icons: Gaming, Traveling, Cycling, Music, Coffee, Photography
- Hover scale animation
- Easy to add/remove interests

#### Tech Stack (Large Card - 3 cols)
- 12 tech icons with official colors
- Includes: React, Next.js, TypeScript, Tailwind, Node.js, PostgreSQL, MongoDB, Python, Docker, Git, Vercel, Figma
- Easy to add/remove technologies
- Color-coded by brand

#### Experience (Single Card)
- Two experience entries with timeline lines
- Company, role, date, description
- Highlights key accomplishments

#### Social Links (Single Card)
- GitHub, LinkedIn, Email links
- Hover animations with scale effect
- Icons with accent color change

### Icon Libraries Used
```typescript
import { FaReact, FaNodeJs, FaPython, FaGit, FaGithub, FaFigma, FaDocker } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiVercel } from 'react-icons/si'
import { Gamepad2, Plane, Bike, Music, Coffee, Camera, Github, Linkedin, Mail } from 'lucide-react'
```

### Customization
```typescript
// Update interests
const interests = [
  { Icon: Gamepad2, label: 'Gaming' },
  // Add or remove as needed
]

// Update tech stack
const techStack = [
  { Icon: FaReact, name: 'React', color: '#61dafb' },
  // Modify or add more
]

// Update social links
const socialLinks = [
  { icon: Github, href: 'https://github.com/your-username', label: 'GitHub' },
  // Update URLs
]
```

### Grid Layout
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- About & Tech Stack span multiple columns

---

## 4. ExperienceTimeline.tsx

**Purpose:** Modern vertical timeline showcasing work experience

### Features
- Vertical timeline with animated dots and connecting lines
- Company, role, period, description per entry
- Key achievements as bullet points
- Tech stack badges with icons
- Staggered animations on scroll

### Structure Per Entry
```typescript
{
  company: 'Company Name',
  role: 'Job Title',
  period: '2024 - Present',
  description: 'Brief description of role',
  achievements: [
    'Achievement 1',
    'Achievement 2',
    'Achievement 3',
  ],
  techs: ['React', 'Next.js', 'TypeScript'],
}
```

### Timeline Elements
- Left dot: Current entry marker
- Left line: Timeline connector to next entry
- Color coded: First entry indigo, second teal, third warm
- Grid layout: Company info (1 col), description + achievements (2 cols) on desktop

### Customization
```typescript
// Add more experiences
const experiences = [
  {
    company: 'Your Company',
    role: 'Your Role',
    period: '2024 - Present',
    description: 'What you did',
    achievements: ['Achievement 1', 'Achievement 2'],
    techs: ['React', 'Next.js'],
  },
  // Add more...
]

// Update tech icon map if using different techs
const techIconMap = {
  'React': <FaReact />,
  // Map other techs to icons
}
```

### Animations
- Items slide in from left: 0.5s easing
- Stagger: 0.2s between items
- No heavy animations - subtle and professional

---

## 5. ProjectsV2.tsx

**Purpose:** Premium project showcase with featured and regular sections

### Sections

#### Featured Projects (2-column layout)
- Larger cards: 264px height
- Image with hover zoom
- GitHub and demo buttons on hover overlay
- Full project description
- All tech tags visible

#### Other Projects (3-column layout)
- Smaller cards: 192px image height
- Compact description
- First 2 tech tags shown
- Code and demo buttons in footer

### Project Structure
```typescript
{
  title: 'Project Name',
  description: 'Short description (2-3 sentences)',
  tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
  image: 'https://image-url.jpg',
  demo: 'https://live-demo-url.com',
  github: 'https://github.com/link',
  featured: true, // Set to true for featured section
}
```

### Image Requirements
- Recommended: 800x600px (landscape)
- Format: JPG or PNG
- Can use Unsplash/Pexels for placeholder images
- MUST be publicly accessible URLs

### Interactive Elements
- Hover image zoom: 1.05x scale
- Hover tech tags: 1.05x scale
- Hover buttons: Color change and scale
- Smooth 0.3-0.4s transitions

### Customization
```typescript
// Replace projects array with your projects
const projects = [
  {
    title: 'Your Project',
    description: 'Your project description',
    tags: ['Your', 'Tech', 'Stack'],
    image: 'your-image-url',
    demo: 'your-demo-url',
    github: 'your-github-url',
    featured: true/false,
  },
]

// Add or remove featured projects
// Currently: 2 featured + 4 regular = 6 total
```

---

## 6. ContactV2.tsx

**Purpose:** Modern contact section with multiple connection methods

### Contact Methods
- Email
- LinkedIn
- GitHub

### Main CTA Card
- Message square icon
- Headline: "Have a project in mind?"
- Subheading: Call-to-action text
- Primary button: "Start a conversation"

### Features
- Card hover animations with lift effect
- Icon background gradient on hover
- Responsive contact grid
- 24-hour response time note

### Customization
```typescript
// Update contact links
const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your-email@example.com',
    href: 'mailto:your-email@example.com',
  },
  // Update LinkedIn and GitHub URLs
]

// Update CTA text
<h3>Have a project in mind?</h3>
<p>Let's discuss your ideas...</p>
```

### Email Forms
For functional contact forms, integrate:
- **Formspree** (simple, free tier available)
- **SendGrid** (reliable, scalable)
- **Resend** (modern alternative)

---

## 7. BackToTop.tsx

**Purpose:** Floating button to smoothly scroll back to top

### Features
- Only appears after scrolling 500px down
- Smooth fade in/out animation
- Smooth scroll behavior (duration varies by scroll distance)
- Positioned: bottom-right corner (32px padding)
- Hover elevation effect

### Styling
- Background: Accent color (#6b5b95)
- Hover: Darker accent + lift effect
- Responsive: Works on all screen sizes
- Z-index: 40 (high but not top)

### No Customization Needed
This component is universal and doesn't require updates.

---

## 8. SectionDividerV2.tsx

**Purpose:** Elegant section separator with subtle animation

### Features
- Gradient horizontal line (indigo → teal → warm)
- Scale-in animation on scroll
- Minimal spacing: 48-64px padding

### Styling
- Width: 48px (always centered)
- Height: 4px
- Border-radius: rounded ends
- Colors: gradient from multiple accent colors

### Usage
Place between major sections:
```typescript
<Hero />
<SectionDividerV2 />
<Experience />
<SectionDividerV2 />
<Projects />
```

---

## 9. Footer.tsx

**Purpose:** Modern footer with social links and info

### Sections
- **Left:** Name and professional description
- **Right:** Social media links (GitHub, LinkedIn, Email)
- **Bottom:** Copyright, tech stack mention, back-to-top link

### Features
- Social icons with hover color effect
- Gradient divider line
- Responsive grid layout
- Premium minimal design

### Customization
```typescript
// Update social links
const socialLinks = [
  { icon: Github, href: 'https://github.com/your-username', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/your-profile', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:your-email@example.com', label: 'Email' },
]

// Update footer text
<h3>Leo Alcaraz</h3>
<p>Your professional tagline</p>

// Update copyright
© {currentYear} Your Name. Your message.
```

---

## Global Styles (globals.css)

### CSS Variables
```css
:root {
  /* Backgrounds */
  --bg-primary: #f5f5f0;
  --card-bg: #ffffff;
  
  /* Borders */
  --border-primary: #d6d3cd;
  
  /* Text */
  --text-primary: #111111;
  --text-muted: #5f5f5f;
  
  /* Accents */
  --accent: #6b5b95;
}
```

### Utility Classes
```css
.card-premium       /* Card with soft shadow and border */
.hover-lift         /* Hover elevation effect */
.shadow-soft        /* Soft shadow (0 2px 8px) */
.btn-premium        /* Primary button */
.text-gradient      /* Gradient text effect */
.section-padding    /* py-16 md:py-24 lg:py-32 */
```

### Custom Animations
```css
@keyframes fadeIn    /* Opacity 0 → 1 */
@keyframes slideUp   /* Y -20px → 0 + opacity */
```

---

## Design Tokens

### Color Palette
```
Primary Background:    #f5f5f0
Secondary BG:          #f1f0ea
Card Background:       #ffffff
Primary Text:          #111111
Muted Text:            #5f5f5f
Accent Indigo:         #6b5b95
Accent Teal:           #4a9b8e
Accent Warm:           #8b7355
```

### Typography
```
Font Stack:    -apple-system, BlinkMacSystemFont, 'Segoe UI'
Heading Font:  Bold
Body Font:     Regular (400)
Letter Space:  Normal
```

### Spacing Scale
```
xs: 8px
sm: 12px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
```

### Border Radius
```
Small:   8px
Medium:  12px-16px
Large:   24px-32px
```

---

## Performance Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Specify width/height
   - Use responsive sizes

2. **Animation Performance**
   - Prefer CSS animations over JS when possible
   - Disable animations on mobile if needed
   - Use `will-change` sparingly

3. **Component Splitting**
   - Keep components focused and small
   - Use code splitting for heavy sections
   - Lazy load images

4. **SEO Optimization**
   - Use semantic HTML
   - Add meta descriptions
   - Include structured data
   - Optimize images with alt text

---

## Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Color contrast compliance (WCAG AA)
- ✅ Focus states on all buttons
- ✅ Descriptive link text
- ✅ Image alt attributes

---

## Common Customizations

### Change Primary Accent Color
1. Update `--accent` in `globals.css`
2. Update all accent references in components
3. Rebuild and test

### Adjust Animation Timing
1. Change `duration` values in `motion.div`
2. Modify `transition` objects
3. Test on different devices

### Modify Grid Layouts
1. Update `grid-cols-X` Tailwind classes
2. Adjust `gap-` spacing
3. Test responsiveness

### Add New Sections
1. Create new component file
2. Add to `page.tsx`
3. Include `SectionDividerV2` between sections

---

**All components are production-ready and can be deployed immediately. Customize content and styling as needed!**
