README.md for Headless WordPress Template

Headless WordPress + Next.js Starter Template

A modern, high-performance, and fully decoupled WordPress starter template built with Next.js (App Router), TypeScript, Tailwind CSS, and GraphQL (Apollo Client).

This repository serves as a professional-grade template designed for fast, type-safe development using WordPress as a headless CMS and Next.js as the frontend.


🚀 Key Features

Next.js App Router & TypeScript: Built on standard Next.js directory practices with strict type-safety.

WPGraphQL Integration: Optimized Apollo Client configuration for fetching menus, pages, and ACF options fields.

Dynamic Routing: Dynamic catch-all routing (app/[...slug]/page.tsx) mapping WordPress URIs to Next.js pages.

Dynamic Gutenberg Block Renderer: Custom block-rendering system mapped to Tailwind components (e.g., Cover, Heading, Paragraph).

Hierarchical Navigation: Dynamic menu parser converting flat WordPress menu nodes into structured nested trees (flatToTree utility).

Tailwind CSS & Design Tokens: Systemized typography and spacing tokens aligned with the Gutenberg editor.

ACF Option Pages support: Decoupled option fetching (e.g., CTA buttons and Global Settings) from WordPress.


🛠️ Tech Stack

Frontend Framework: Next.js (React 19, App Router)

Programming Language: TypeScript

Styling: Tailwind CSS

GraphQL Client: Apollo Client (@apollo/client)

Backend CMS: WordPress + WPGraphQL + Advanced Custom Fields (ACF)


📂 Project Architecture

The directory structure is organized following clean-code principles and separation of concerns:

app/: Dynamic catch-all route, global layouts, and homepage templates.

components/: Modular UI components, including the Gutenberg Block Renderer, Header, and Navigation menus.

config/: Design token mappings for consistent styling.

lib/: Apollo Client configuration and global TypeScript declarations.

services/: Specialized data fetchers for menus, ACF options, and CMS content.

utils/: Helper functions for data transformation (e.g., tree structures and block sanitization).


📈 My Learning Journey

"The best way to predict the future is to create it."

This template was created by RataAsg as a hands-on learning project to master the decoupling of WordPress. Through building this project, I have gained deep expertise in:

Decoupled Architecture: Understanding the boundary between Headless CMS data structures and Next.js static/dynamic rendering.

GraphQL Schema Design: Dealing with WPGraphQL queries, managing ACF custom schemas, and handling naming conflicts.

Advanced React Patterns: Building hierarchical components, dynamic block routing, and solving UX/UI issues like maintaining drop-down bridges to prevent pointer-event gaps.

Code Quality: Enforcing standardized function declarations, avoiding side effects, and structuring modular codebases.


⚙️ Getting Started

1. Clone the repository

git clone https://github.com/RataAsg/headless-wordpress-nextjs-template.git
cd headless-wordpress-nextjs-template

2. Install dependencies

npm install

3. Setup environment variables

Create a .env.local file in the root directory:
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/graphql

4. Run the development server

npm run dev


🤝 Contribution & Contact

I am actively learning, building, and improving. If you have any suggestions, feedback, or would like to collaborate, feel free to reach out or open a pull request!


GitHub: @RataAsg

Developer: RataAsg



Distributed under the MIT License.
