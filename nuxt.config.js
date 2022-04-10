export default {
  target: 'static',

  head: {
    title: 'NA Brno dobrý 2022',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  css: [
    '@/assets/css/main.css',
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
  ],

  modules: [
    '@nuxtjs/axios',
    ['nuxt-leaflet', { /* module options */}],

  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  build: {},

  router: {
    base: process.env.NUXT_ROUTER_BASE_URL || '/'
  },

  pwa: {
    meta: {
      theme_color: '#2e3192',
      name: 'NA Brno dobrý 2022',
    },
    manifest: {
      name: 'NA Brno dobrý 2022',
      short_name: 'NA Brno 2022',
    }
  }
}
