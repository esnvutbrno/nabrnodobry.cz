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
      {name: 'description', content: 'Folklore themed National Assembly of ESN CZ happening in Brno in May 2022'},
      {name: 'author', content: 'ESN Brno United'},
      {
        name: 'keywords',
        content: 'folklore, national assembly, erasmus, erasmus student network, czech republic, esn vut brno, esn mendelu, esn muni, na may 2022'
      },
      {name: 'format-detection', content: 'telephone=no,date=no,email=no'},
      {name: 'google-site-verification', content: '5J3DG_xFC40IwbDml8YEsQtdSZpKc-FMtJ4CXGmv_nA'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: process.env.NUXT_ROUTER_BASE_URL + 'icon.png'}
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
    '@nuxtjs/markdownit',
    '~/modules/write-version.js',
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.NUXT_ROUTER_BASE_URL ? undefined : '/',
    prefix: process.env.NUXT_ROUTER_BASE_URL || '/',
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
      author: 'ESN Brno United',
      ogHost: process.env.FULL_BASE_URL || 'http://localhost:3000/',
      ogImage: {
        path: 'og.jpg',
        width: 2048,
        height: 1074,
      }
    },
    manifest: {
      name: 'NA Brno dobrý 2022',
      short_name: 'NA Brno 2022',
      display: 'standalone',
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
  },
  workbox: {
    enabled: false,
    offlineStrategy: "StaleWhileRevalidate",
  }
}
