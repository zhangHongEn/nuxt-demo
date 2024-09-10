
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  debug: true,
  devtools: { enabled: true },
  // experimental: {
  //   appManifest: true
  // },
  vite: {
    build: {
      target: 'chrome89',
    },
  },
});
