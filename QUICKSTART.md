# TriForge Tech - Quick Start Guide

## 🚀 Quick Setup (3 minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local` (optional - defaults work fine):

```env
NEXT_PUBLIC_SITE_NAME=TriForge Technologies
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Visit: **http://localhost:3000**

### 4. Add Your First Blog Post

Create a new file `content/blog/my-first-post.mdx`:

````mdx
---
title: My First Blog Post
publishedAt: 2024-12-04
excerpt: This is my first post on the new blog!
coverImage: https://images.unsplash.com/photo-1499750310107-5fef28a66643
author: jane-doe
tags:
  - Getting Started
  - Next.js
featured: true
seo:
  metaTitle: My First Blog Post
  metaDescription: Learn how to create blog posts with MDX
---

## Welcome!

This is my first blog post using **MDX**.

### Features

- Write in Markdown
- Add code blocks
- Include images

```typescript
const hello = 'world'
```
````

Easy! 🎉

````

Save and refresh - your post appears automatically!

## 🎯 Key Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Run linter
npm run type-check   # Check TypeScript
````

## 📁 Important Files

- `app/page.tsx` - Homepage
- `app/blog/page.tsx` - Blog listing
- `components/` - All React components
- `content/blog/` - Blog posts (MDX files)
- `content/authors/` - Author profiles (MDX files)
- `lib/blog.ts` - Content queries
- `contentlayer.config.ts` - Content schema

## 🎨 Customize

### Change Colors

Edit `tailwind.config.ts`:

```typescript
primary: {
  500: '#your-color',
  600: '#your-color',
}
```

### Change Company Name

Edit `.env.local`:

```env
NEXT_PUBLIC_SITE_NAME=Your Company
```

### Add Pages

Create file in `app/your-page/page.tsx`

### Add Blog Posts

Create `.mdx` files in `content/blog/` with frontmatter

### Add Authors

Create `.mdx` files in `content/authors/` with profile info

## 🚢 Deploy to Vercel

1. Push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/triforge-tech.git
git push -u origin main
```

2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables (optional)
5. Deploy! (builds in ~2 minutes)

## 🆘 Need Help?

- Check `README.md` for detailed docs
- Open an issue on GitHub
- Contact: hello@triforge.net

---

**Happy building! 🎉**
