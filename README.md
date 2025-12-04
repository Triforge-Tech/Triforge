# TriForge Technologies - Modern Tech Company Website

A professional, modern tech company website built with Next.js 14+, TypeScript, Tailwind CSS, and MDX. Features a file-based blog with rich text content, code syntax highlighting, dark mode, and optimized for performance and SEO.

## 🚀 Features

### Core Features
- ✅ **Next.js 14+ with App Router** - Modern React framework with server components
- ✅ **TypeScript** - Type-safe code throughout
- ✅ **Tailwind CSS** - Utility-first CSS framework
- ✅ **MDX + Contentlayer** - File-based content with type-safe queries
- ✅ **Dark Mode** - System-aware theme switching
- ✅ **Fully Responsive** - Mobile-first design

### Pages
- 🏠 **Homepage** - Hero section, features, recent blog posts, CTA
- 📖 **About** - Company story, mission, team members with bios
- 🛠️ **Services** - Detailed service offerings
- 📝 **Blog** - Blog listing with search, filters, pagination
- 📄 **Blog Post** - Individual posts with rich text, code highlighting, TOC, related posts
- 📧 **Contact** - Contact form with validation

### Blog Features
- Rich text content with images
- Code syntax highlighting for 10+ languages
- Reading time estimation
- Table of contents for long posts
- Social sharing buttons
- Category filtering
- Search functionality
- Pagination
- Related posts
- Author profiles with social links
- SEO metadata per post

### Performance & SEO
- Static generation with ISR (Incremental Static Regeneration)
- Optimized images with next/image
- Meta tags and Open Graph support
- Structured data for blog posts
- Fast loading times (Lighthouse 90+ score)
- Accessible (WCAG 2.1 AA compliant)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**
- **Git**

## 🛠️ Installation & Setup

### 1. Create a GitHub Repository

First, create a new repository on GitHub:

1. Go to [github.com/new](https://github.com/new)
2. Name your repository (e.g., "triforge-tech")
3. Choose **Public** or **Private**
4. **Don't initialize** with README (we already have one)
5. Click "Create repository"

### 2. Clone or Initialize

If starting from scratch, create a new directory:

```bash
mkdir triforge-tech
cd triforge-tech
git init
```

Or clone this template:

```bash
git clone https://github.com/yourusername/triforge-tech.git
cd triforge-tech
```

### 3. Connect to GitHub

```bash
git remote add origin https://github.com/yourusername/triforge-tech.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 4. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 5. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Update the values in `.env.local`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=TriForge Technologies
NEXT_PUBLIC_SITE_DESCRIPTION=Innovative technology solutions for modern businesses

# Email Service (Optional - for contact form)
EMAIL_API_KEY=your_email_api_key
EMAIL_FROM=contact@triforge.com
EMAIL_TO=hello@triforge.com
```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding Content

### Content Structure

Content is stored in MDX files in the `content/` directory:

```
content/
├── blog/           # Blog posts (.mdx files)
└── authors/        # Author profiles (.mdx files)
```

### Creating a New Blog Post

1. Create a new `.mdx` file in `content/blog/`:

```bash
touch content/blog/my-new-post.mdx
```

2. Add frontmatter and content:

```mdx
---
title: My New Blog Post
publishedAt: 2024-12-04
excerpt: A brief description of your post (used in previews)
coverImage: https://images.unsplash.com/photo-...
author: jane-doe
tags:
  - Next.js
  - React
  - TypeScript
featured: true
seo:
  metaTitle: My New Blog Post - TriForge
  metaDescription: Learn about...
  canonicalUrl: https://triforge.com/blog/my-new-post
---

## Introduction

Your markdown content here with **bold**, *italic*, [links](https://example.com).

## Code Examples

```typescript
const example = "Syntax highlighting works!"
```

## Images

![Alt text](https://images.unsplash.com/...)

And more markdown content...
```

3. Save the file - Contentlayer will automatically generate types

### Creating a New Author

1. Create a new `.mdx` file in `content/authors/`:

```bash
touch content/authors/john-doe.mdx
```

2. Add author information:

```mdx
---
name: John Doe
avatar: https://images.unsplash.com/photo-...
bio: Software engineer passionate about web development
twitter: https://twitter.com/johndoe
linkedin: https://linkedin.com/in/johndoe
github: https://github.com/johndoe
---
```

### MDX Features

MDX supports:
- **Markdown syntax**: headings, lists, links, images, blockquotes
- **Code blocks**: with automatic syntax highlighting
- **Frontmatter**: YAML metadata at the top of files
- **JSX components**: Import and use React components in your content

### Computed Fields

Contentlayer automatically generates:
- **slug**: From filename (e.g., `my-new-post.mdx` → `my-new-post`)
- **readingTime**: Calculated from word count
- **headings**: Extracted for table of contents

## 🎨 Customization

### Branding

Update the following files with your brand:

**Colors** - `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your brand colors
    500: '#your-color',
    600: '#your-color',
    // ...
  },
}
```

**Company Info** - `components/Footer.tsx` and `.env.local`:
- Company name
- Contact information
- Social links

**Logo** - Replace in `components/Header.tsx`:
```typescript
<div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg" />
```

### Adding Pages

Create a new page in the `app` directory:

```typescript
// app/your-page/page.tsx
export default function YourPage() {
  return (
    <div>
      <h1>Your Page</h1>
    </div>
  )
}
```

Add navigation link in `components/Header.tsx`:

```typescript
const navigation = [
  // ... existing items
  { name: 'Your Page', href: '/your-page' },
]
```

## 🚀 Deployment to Vercel

### Step-by-Step Vercel Deployment

1. **Push to GitHub** (if you haven't already):

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Sign up for Vercel**:
   - Go to [vercel.com/signup](https://vercel.com/signup)
   - Sign up with your GitHub account
   - Authorize Vercel to access your repositories

3. **Import Your Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository (`triforge-tech`)
   - Vercel will auto-detect it's a Next.js project

4. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

5. **Add Environment Variables**:
   
   Click "Environment Variables" and add:
   
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_SITE_NAME=TriForge Technologies
   NEXT_PUBLIC_SITE_DESCRIPTION=Innovative technology solutions
   ```
   
   Optional email variables:
   ```
   EMAIL_API_KEY=your_email_api_key
   EMAIL_FROM=contact@triforge.com
   EMAIL_TO=hello@triforge.com
   ```

6. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Automatic Deployments

Vercel automatically:
- ✅ **Deploys on push** - Every push to `main` triggers a production deployment
- ✅ **Preview deployments** - Pull requests get unique preview URLs
- ✅ **Builds Contentlayer** - Generates types and processes MDX on each build
- ✅ **Optimizes images** - Serves images through Vercel's CDN
- ✅ **Enables analytics** - Track performance and usage (free tier available)

### Custom Domain

1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your custom domain (e.g., `triforge.com`)
4. Update DNS records as instructed by Vercel
5. SSL certificate is automatically provisioned

### Build Output

Your deployment includes:
- **Static pages**: Pre-rendered at build time
- **Blog posts**: Statically generated from MDX files
- **API routes**: Serverless functions
- **Assets**: Optimized and cached globally

### Monitoring

Monitor your deployment:
- **Analytics**: Track page views and performance
- **Logs**: View build and runtime logs
- **Performance**: Lighthouse scores and Web Vitals
- **Usage**: Track bandwidth and function invocations

## 📊 Performance Optimization

### Image Optimization

Images are automatically optimized using Next.js Image component:

```typescript
<Image
  src={imageUrl}
  width={1200}
  height={630}
  alt="Description"
  priority // For above-the-fold images
/>
```

### Static Generation

Pages are statically generated at build time:

```typescript
export const revalidate = 3600 // Revalidate every hour
```

### Caching Strategy

- **Static pages**: Generated at build time
- **Blog posts**: ISR with 1-hour revalidation
- **Blog listing**: ISR with 1-hour revalidation
- **Images**: Cached via CDN

## 🧪 Testing

Run type checking:

```bash
npm run type-check
```

Run linting:

```bash
npm run lint
```

## 📁 Project Structure

```
triforge/
├── app/                          # Next.js app directory
│   ├── about/                    # About page
│   ├── api/                      # API routes
│   │   └── contact/              # Contact form API
│   ├── blog/                     # Blog pages
│   │   ├── [slug]/               # Individual blog post
│   │   └── page.tsx              # Blog listing
│   ├── contact/                  # Contact page
│   ├── services/                 # Services page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── sitemap.ts                # Sitemap generation
│   ├── robots.ts                 # Robots.txt
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── blog/                     # Blog-specific components
│   │   ├── BlogSearch.tsx
│   │   ├── Pagination.tsx
│   │   ├── RichTextContent.tsx  # MDX renderer
│   │   ├── ShareButtons.tsx
│   │   └── TableOfContents.tsx
│   ├── CTASection.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── RecentPosts.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── content/                      # MDX content files
│   ├── blog/                     # Blog posts
│   │   ├── getting-started-with-nextjs.mdx
│   │   ├── building-scalable-apis.mdx
│   │   └── ...
│   └── authors/                  # Author profiles
│       ├── jane-doe.mdx
│       └── ...
├── lib/                          # Utility functions
│   ├── blog.ts                   # Content queries
│   └── utils.ts                  # Helper functions
├── public/                       # Static files
├── .contentlayer/                # Generated (gitignored)
├── .env.local.example            # Example environment variables
├── contentlayer.config.ts        # Contentlayer configuration
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🔧 Tech Stack Details

- **Framework**: Next.js 14.2 with App Router
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4 + @tailwindcss/typography
- **Content**: Contentlayer2 0.5 + MDX
- **Syntax Highlighting**: rehype-pretty-code + Shiki
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion 10.16
- **Icons**: Lucide React
- **Date Formatting**: date-fns
- **Deployment**: Vercel

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Contentlayer Documentation](https://contentlayer.dev/)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 🐛 Troubleshooting

### Common Issues

**"Cannot find module" errors:**
```bash
rm -rf node_modules package-lock.json .next .contentlayer
npm install
```

**Contentlayer build errors:**
- Check your MDX frontmatter is valid YAML
- Ensure required fields are present (title, publishedAt, excerpt, author)
- Verify dates are in YYYY-MM-DD format
- Run `npm run build` to see detailed error messages

**Images not loading:**
- Ensure image URLs are absolute (start with `https://`)
- Add image domains to `next.config.js` `images.remotePatterns`
- For Unsplash images, add `images.unsplash.com`

**Build errors on Vercel:**
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify Node.js version is 18.17 or later
- Clear build cache and redeploy

**TypeScript errors:**
```bash
npm run type-check
```

**Content not updating:**
- Delete `.contentlayer` directory and rebuild:
```bash
rm -rf .contentlayer
npm run dev
```

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For questions or support, please open an issue on GitHub or contact us at hello@triforge.com.

---

Built with ❤️ by TriForge Technologies
