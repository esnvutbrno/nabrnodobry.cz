import {createClient} from "./plugins/contentful";
import slug from 'slug'
import _ from 'lodash'

export default {
  target: 'static',

  head: {
    title: 'NA Brno dobrý 2022',
    titleTemplate: '%s · NA Brno dobrý 2022',
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
      {rel: 'icon', type: 'image/x-icon', href: '/icon.png'}
    ]
  },

  css: [
    '@/assets/css/main.css',
  ],

  plugins: [
    {src: '~/plugins/pwa-update.js', mode: 'client'},
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
    '@nuxtjs/color-mode',
    '@nuxtjs/gtm',
    '@nuxtjs/markdownit'
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  build: {
    extend(config, {isDev, isClient}) {
      // config.module.rules.push(
      //   {
      //     enforce: 'pre',
      //     test: /\.gpx/i,
      //     use: 'raw-loader',
      //   }
      // )
    }
  },

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
    },
    icon: {
      purpose: 'any',
    }
  },

  generate: {
    async routes() {

      const client = createClient();
      const events = await client.getEntries({
        content_type: 'event',
      });
      const questions = await client.getEntries({
        content_type: 'faq',
      });
      return [
        ...events.items.map(i => `/event/${i.sys.id}`),
        ..._.uniq(questions.items.map(i => `/faq/${slug(i.fields.category)}`)),
      ]
    }
  },
  colorMode: {
    classSuffix: ''
  },
  gtm: {
    id: 'GTM-595F8QZ',
    pageTracking: true,
  },
  tailwind: {
    cssPath: '~/assets/css/main.css'
  },
  markdownit: {
    runtime: true,
    preset: 'default',
    linkify: true,
    breaks: true,
  }
}
