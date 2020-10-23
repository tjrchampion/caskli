export default {

  server: {
    port: process.env.PORT || 1337, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },

  css: [
    './assets/styles/app.scss'
  ],
  
  plugins: [
    '~/plugins/api.js',
    //mixins
    '~/plugins/mixins/urls.js',
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