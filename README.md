# Fuwari Demo

Fuwari Demo is a lightweight and fast blog built using [Astro](https://astro.build). This project demonstrates a modern approach to static site generation with an emphasis on performance, simplicity, and ease of use.

## Features

- **Astro-based Architecture**: Leverages Astro for fast, optimized static site generation.
- **Tailwind CSS**: Built-in styling with a utility-first CSS framework.
- **Sample Content**: Includes a range of sample posts, categories, and tags to showcase the blog layout and features.
- **Component-driven Design**: Structured with reusable Astro and React components.
- **Dynamic Filtering**: Category and tag filtering powered by custom events.
- **Firebase Integration**: (Optional) Firebase configuration for extended features (located in `lib/firebase.ts`).

## Project Structure

```text
├── api/                   # API routes
├── astro.config.mjs       # Astro configuration file
├── package.json           # Project metadata and scripts
├── pnpm-lock.yaml         # Dependency lock file
├── public/                # Static assets (images, favicon, etc.)
├── README.md              # This file
├── scripts/               # Utility scripts (e.g., generate-sample-posts.js)
├── src/
│   ├── assets/           # Static assets for components
│   ├── components/       # Reusable UI components (Header, Banner, PostList, Timeline, etc.)
│   ├── config.ts         # Site configuration
│   ├── content/          # Markdown posts and content files
│   ├── layouts/          # Layout components (BaseLayout, BlogPost, TimelineLayout, etc.)
│   ├── pages/            # Page components (home, posts, archive, categories, tags, etc.)
│   ├── lib/              # Library files (Firebase integration, etc.)
│   ├── styles/           # Global styles
│   └── utils/            # Utility functions (e.g., Table of Contents generation)
├── tailwind.config.mjs    # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (version >= 16 recommended)
- pnpm

### Installation

1. Clone the repository:

   ```sh
   git clone https://your-repository-url.git
   cd fuwari_demo
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

### Development

Start the development server:

```sh
pnpm run dev
```

This will run the Astro dev server, and you can view the blog at [http://localhost:3000](http://localhost:3000) (or the port specified by Astro).

### Generating Sample Posts

To generate sample posts for testing the timeline layout and content structure, run:

```sh
pnpm run generate-samples
```

### Build and Preview

To build the project for production:

```sh
pnpm run build
```

To preview the production build locally:

```sh
pnpm run preview
```

## Deployment

Fuwari Demo can be deployed to any static hosting service. Refer to the [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/) for more information.

## Customization

- **Content**: Add or modify posts in `src/content/posts/` using Markdown. The frontmatter schema is defined in `src/content/config.ts`.
- **Layouts and Components**: Customize the look and feel by editing components in `src/components/` and layouts in `src/layouts/`.
- **Styling**: The project uses Tailwind CSS. Update or extend styles in `tailwind.config.mjs` and `src/styles/global.css`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements and bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Astro](https://astro.build) for the amazing static site framework.
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling.

---

_This README was generated to provide an overview and guide for the Fuwari Demo project._
