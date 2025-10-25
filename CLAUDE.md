# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog and portfolio site built with Jekyll and hosted on GitHub Pages. The site showcases blog posts about software development and music projects, as well as links to various projects like Paper Audio, Note Tuning, and other musical applications.

## Technology Stack

- **Static Site Generator**: Jekyll (using the tactile theme)
- **Hosting**: GitHub Pages
- **Ruby Version**: See `.ruby-version`
- **Key Plugins**:
  - jekyll-feed: RSS feed generation
  - jekyll-redirect-from: URL redirects
- **Analytics**: Google Analytics (configured in `_config.yml`)

## Development Commands

### Install Dependencies
```bash
bundle install
```

### Run Local Development Server
```bash
bundle exec jekyll serve
```
The site will be available at `http://localhost:4000`. Note: Changes to `_config.yml` require restarting the server.

### Build the Site
```bash
bundle exec jekyll build
```
Generated files will be in the `_site/` directory (excluded from git).

## Site Structure

### Content Organization
- **`_posts/`**: Blog posts using Jekyll's naming convention: `YYYY-MM-DD-title.{md,markdown}`
- **`_layouts/`**: HTML templates for different page types (default, post, page, home, about)
- **`_includes/`**: Reusable HTML partials (e.g., `head.html` for Google Analytics)
- **`assets/`**: Static files including CSS, JavaScript, and images (logos, social media icons)

### Key Files
- **`_config.yml`**: Site-wide configuration including title, URL, plugins, and Google Analytics
- **`index.md`**: Homepage content (uses `about` layout)
- **`index.html`**: Alternative index file
- **`latest.html`**: Redirects to the most recent blog post
- **`CNAME`**: Custom domain configuration

## Content Guidelines

### Creating Blog Posts
1. Create a new file in `_posts/` with the naming pattern: `YYYY-MM-DD-title-with-dashes.md`
2. Include front matter:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD
   ---
   ```
3. Write content in Markdown below the front matter
4. The post will automatically appear in the "All Posts" list on the homepage

### Front Matter Variables
- `layout`: Template to use (post, page, home, about)
- `title`: Page/post title
- `redirect_from`: Array of URLs to redirect from (requires jekyll-redirect-from plugin)

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `master` branch. No manual deployment steps are needed.

## Site Configuration

- **Base URL**: https://calvinflegal.com
- **Social Links**: Configured for Twitter (@calflegal), GitHub (@calflegal), Spotify, Instagram, LinkedIn, TikTok
- **Markdown Processor**: Kramdown
