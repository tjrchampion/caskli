export default {

  head: {
    title: 'Geektu.be - Brew URLs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { name:  'apple-mobile-web-app-status-bar-style', content: 'default'},
      {
        hid: process.env.npm_package_description || '',
        name: process.env.npm_package_description || '',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
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
  server: {
    port: process.env.PORT || 1337, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },

  axios: {
    baseURL: process.env.APP_URL
  },

  css: [
    '~/assets/styles/app.scss'
  ],
  
  plugins: [
    {src: '~/plugins/api.js'},
    {src: '~/plugins/scroll.js', ssr: false},
    //mixins
    {src: '~/plugins/mixins/urls.js'}
  ],

  serverMiddleware: [
    {path: '/api', handler: '~/api/index.js'},
    //{path: '/', handler: '~/middleware/redirect.js'},
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ]
}