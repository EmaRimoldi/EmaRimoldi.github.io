# Website Setup & Customization Guide

This guide explains how to add your own images, update links, and customize the website.

## Overview

The website is fully functional and ready to deploy. It uses a centralized configuration system that makes updates easy and consistent across the entire site.

## Image Setup

### Profile Image (About Page)

To add your profile image to the About page:

1. **Prepare your image**
   - Format: JPEG, PNG, or WebP
   - Recommended size: 512×512 px (will be displayed at 192×224px on mobile, 224×224px on desktop)
   - Suggested format: `profile.jpg` or `profile.png`

2. **Place the image**
   - Save to: `public/images/about/profile.jpg`
   - The component will automatically load and display it
   - If no image exists, a graceful fallback placeholder will display

### Album Cover Images (Music Page)

To add album cover images to the Music page:

1. **Prepare your images**
   - Format: PNG or JPEG
   - Recommended size: 256×256 px or 300×300 px
   - Filenames: `album-1.png`, `album-2.png`, `album-3.png`, etc.

2. **Place the images**
   - Save to: `public/images/music/`
   - Images are referenced by filename in `content/music-items.ts`
   - If an image is missing, the component shows a fallback placeholder

3. **Current Album Mapping**
   - `album-1.png` → Stadium Arcadium (Red Hot Chili Peppers)
   - `album-2.png` → The Dark Side of the Moon (Pink Floyd)
   - `album-3.png` → Nevermind (Nirvana)
   - `album-4.png` → Like a Prayer (Madonna)
   - `album-5.png` → King of the Delta Blues Singers (Robert Johnson)
   - `album-6.png` → Disintegration (The Cure)

## Link Configuration

All social and contact links are centralized in a single configuration file. This means you can update your links in one place and they'll automatically appear everywhere on the site.

### Updating Links

Edit: `lib/site-config.ts`

This file contains the `contactConfig` object with all your links:

```typescript
export const contactConfig = {
  email: {
    label: "Email",
    value: "emanuelerimoldi7@gmail.com",
    href: "mailto:emanuelerimoldi7@gmail.com",
    icon: "mail",
  },
  github: {
    label: "GitHub",
    value: "@emanuelerimoldi",
    href: "https://github.com/emanuelerimoldi",
    icon: "github",
  },
  linkedin: {
    label: "LinkedIn",
    value: "Emanuele Rimoldi",
    href: "https://www.linkedin.com/in/emanuelerimoldi",
    icon: "linkedin",
  },
  instagram: {
    label: "Instagram",
    value: "@emanuelerimoldi",
    href: "https://www.instagram.com/emanuelerimoldi",
    icon: "instagram",
  },
};
```

**Fields:**
- `label`: Display name shown on the Contact page
- `value`: The username or identifier displayed
- `href`: The URL to link to
- `icon`: The icon type (mail, github, linkedin, instagram)

**Where these links appear:**
- Contact page (`/contact`) — displayed with icons
- Homepage footer (`/`) — social icons only (GitHub, LinkedIn, Instagram)
- Navigation — Contact link points to the contact page

### Social vs. Contact Links

- **Social links** (GitHub, LinkedIn, Instagram) appear on the homepage
- **Contact links** (Email + all social) appear on the Contact page
- Both are automatically derived from the same `contactConfig` object

## Content Updates

### Writing Essays

The three philosophical essays are stored as separate pages:

- `/app/writing/learning-through-structure/page.tsx`
- `/app/writing/iteration-matters/page.tsx`
- `/app/writing/biological-computation/page.tsx`

To update essay content, edit the text content in the `content` sections of each file. The structure and styling remain consistent.

### Music Page

To update the music collection, edit `content/music-items.ts`:

- Add/remove albums from the `musicItems` array
- Update titles, artists, Spotify URLs
- Add corresponding album cover images to `public/images/music/`

## Technical Details

### Component Architecture

- **PageShell**: Wraps all pages with header and background
- **ContentContainer**: Manages content width and spacing
- **SectionTitle**: Consistent heading style
- **ProfileImage**: About page image with fallback
- **ContactWithIcon**: Contact info with icons
- **AlbumCard**: Music album cards with images
- **SocialLinks**: Homepage social icons

### Configuration System

All site-wide configuration is centralized in `lib/site-config.ts`:

```typescript
// Used everywhere on the site
export const siteAuthor = "Emanuele Rimoldi";

// Contact and social links (single source of truth)
export const contactConfig = { ... };
export const socialLinksConfig = [ ... ];
export const contactLinksArray = [ ... ];
```

This ensures consistency: update one file, changes appear everywhere automatically.

### Image Fallbacks

- **About page**: Shows "Profile image coming soon" if image is missing
- **Music page**: Shows "Album" placeholder if album cover is missing
All images are optional — the site looks good even before you add them.

## Deployment

The site is a Next.js static export. To build and deploy:

```bash
npm run build
```

This generates a static site in the `.next/out` directory ready for any hosting service.

## Color Palette

The site uses a warm, minimal aesthetic:

- **Background**: `#F5EEE9` (warm off-white)
- **Text**: `#262424` (dark charcoal)
- **Text (soft)**: `#6E6763` (warm gray)
- **Lines**: `#DDD4CE` (subtle divider)

These are defined in `lib/constants.ts` and can be updated globally.

## Typography

- **Serif font**: Cormorant Garamond (headings, quotes)
- **Sans-serif font**: Inter (body, navigation)

Both are loaded from Google Fonts in `app/layout.tsx`.

---

**Questions?** The site is designed to be fully functional with sensible defaults. All updates are optional — the site looks great even before you add custom images.
