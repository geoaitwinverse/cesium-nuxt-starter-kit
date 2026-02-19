# Cesium + Nuxt 4

A modern starter template for building 3D geospatial applications with Cesium and Nuxt 4

## Features

- **OSM 3D Buildings** - Optional OpenStreetMap 3D buildings layer
- **Dark/Light Theme** - System-aware theme switching with nuxt ui themes
- **Modern Stack** - Nuxt 4, vue-cesium
- **TypeScript** - Full type safety throughout the codebase

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- [Cesium Ion](https://cesium.com/ion/) account (free tier available)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/cesium-nuxt-starter-kit.git
   cd cesium-nuxt-starter-kit
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure environment variables**

   Copy `.env.example` to `.env.local` and add your Cesium Ion token:

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local`:

   ```
   NUXT_PUBLIC_CESIUM_ION_TOKEN=your_cesium_ion_token_here
   ```

   Get your token from [Cesium Ion](https://cesium.com/ion/tokens).

4. **Start the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Tech Stack

- [Nuxt 4](https://nuxt.com/) - Vue-based fullstack framework (SSR, SSG, hybrid rendering)
- [Vue-Cesium](https://zouyaoji.top/vue-cesium/#/en-US) - Vue integration layer for Cesium
- [TailwindCSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Cesium](https://cesium.com/) - 3D geospatial visualization
- [Nuxt UI](https://ui.nuxt.com/) - Modern UI components & color mode system
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## License

GNU GPL
