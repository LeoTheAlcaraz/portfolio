# Portfolio Website

A high-end personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for micro-interactions and page transitions
- **Dark Mode First**: Carefully crafted dark theme with subtle gradients and effects
- **Responsive Design**: Mobile-first approach with flawless responsiveness
- **Performance Optimized**: Fast load times and smooth scrolling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Fixed navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills & Stack section
│   ├── Work.tsx        # Projects/Work section
│   ├── Community.tsx   # Community & Leadership section
│   ├── Contact.tsx     # Contact/Social links section
│   └── Footer.tsx      # Footer component
└── public/             # Static assets
```

## Customization

### Updating Content

- Edit component files in `components/` to update content
- Modify `app/page.tsx` to rearrange sections
- Update metadata in `app/layout.tsx` for SEO

### Styling

- Global styles are in `app/globals.css`
- Tailwind configuration is in `tailwind.config.ts`
- Component-specific styles use Tailwind classes

### Social Links

Social links are configured in `components/Contact.tsx`. Update the `socialLinks` array to add or modify links.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy

The site will be automatically optimized and deployed.

## License

Private project - All rights reserved


