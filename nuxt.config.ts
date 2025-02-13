// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Poppins': [600, 700]
    }
  },
  app: {
    head: {
      title: 'Mirobex - Accompagner votre entreprise à pénétrer le marché béninois',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: ' Accompagner votre entreprise à pénétrer le marché béninois' }
      ]
    }
  },
})