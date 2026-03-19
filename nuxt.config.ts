// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  tailwindcss: {
    configPath: '~/tailwind.config.js',  // Points to the file above
  },
  app: {
    head: {
      title: 'Mini Store',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-2.ico' },
      ],
      meta: [
        { name: 'description', content: 'Nuxt 3 SSR demo' }
      ],
    }
  },
  nitro: {
    routeRules: {
      // SSG: Home (static marketing)
      '/': { prerender: true },
      
      // ISR: Products (60s cache, revalidate)
      '/products': { isr: 60 },
      '/products/**': { isr: 60 },
      
      // Headers for perf
      '/**': { headers: { 'cache-control': 'public, s-maxage=60, stale-while-revalidate=300' } }
  },
}})