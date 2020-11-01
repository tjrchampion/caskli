export default {

  head: {
    title: 'Caskli - Brew short URLs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { name:  'apple-mobile-web-app-status-bar-style', content: 'default'},
      { name: 'description', content: 'Brew URLs with Csk.li - Another URL shortner. ' },
      {
        hid: process.env.npm_package_description || 'Caskli - Brew URLs',
        name: process.env.npm_package_description || 'Caskli - Brew URLs',
        content: process.env.npm_package_description || 'Caskli - Another URL shortner'
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap",
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v2' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#c5442b' }
    ]
  },

  manifest: {
    name: 'Csk.li',
    lang: 'en',
    start_url: '/dashboard',
    useWebmanifestExtension: true
  },

  pwa: {
    icon: {
      iconSrc: '~/static/icon.png'
    },
    workbox: {
      cachingExtensions: '~/plugins/workbox-sync.js',
      enabled: true,
      config: {
        debug: true
      }
    }
  },


  server: {
    port: process.env.PORT || 1337, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },

  axios: {
    baseURL: process.env.APP_URL
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/account/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/api/account/me', method: 'get', propertyName: 'data' }
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
    redirect: {
      login: '/account/login',
      home: '/',
      callback: '/account/login',
      logout: '/account/login'
    },
  },

  css: [
    '~/assets/styles/app.scss'
  ],
  
  plugins: [
    {src: '~/plugins/bus.js'},
    {src: '~/plugins/feather.js'},
    {src: '~/plugins/api.js'},
    {src: '~/plugins/scroll.js', ssr: false},
    //mixins
    {src: '~/plugins/mixins/urls.js'},
    {src: '~/plugins/mixins/auth.js'},
  ],

  serverMiddleware: [
    {path: '/api', handler: '~/api/index.js'},
  ],

  buildModules: [
    '@nuxtjs/pwa'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/auth'
  ]
}