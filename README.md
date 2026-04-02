# Emanuele Rimoldi — Personal Website

A minimal, elegant personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Clean, editorial design with warm off-white background
- Responsive layout for desktop, tablet, and mobile
- Multiple sections: Homepage, About, Research, Writing, Photography, Music, Contact
- Type-safe components and content management
- Accessibility-focused navigation

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (serif), Inter (sans-serif)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
website/
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage
│   ├── about/
│   ├── research/
│   ├── writing/
│   ├── photography/
│   ├── music/
│   └── contact/
├── components/            # Reusable React components
├── content/              # Data files for content
├── lib/                  # Utilities and constants
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## Customization

### Content

Edit the files in the `content/` directory to update:
- Blog posts (`blog-posts.ts`)
- Research items (`research-items.ts`)
- Photo gallery (`photo-items.ts`)
- Music albums (`music-items.ts`)
- Contact links (`contact-links.ts`)

### Design

- **Colors**: Update `tailwind.config.ts` and `lib/constants.ts`
- **Fonts**: Modify `app/globals.css` and `tailwind.config.ts`
- **Spacing**: Adjust Tailwind classes in components

## Design Philosophy

The website follows a calm, editorial aesthetic:

- Generous whitespace over visual density
- Restrained typography hierarchy
- Minimal decoration and animation
- Focus on content and readability
- Consistent color palette (#F5EEE9, #262424, #6E6763)

## Pages

- **Home** (`/`) — Name, subtitle, quote, and social links
- **About** (`/about`) — Biographical introduction
- **Research** (`/research`) — Academic and research projects
- **Writing** (`/writing`) — Blog posts in a 3-column grid
- **Photography** (`/photography`) — Image gallery
- **Music** (`/music`) — Album links to Spotify
- **Contact** (`/contact`) — Contact information and social profiles

## Navigation

The site includes persistent top navigation with the following links:
About, Research, Writing, Photography, Music, Contact

## License

MIT
