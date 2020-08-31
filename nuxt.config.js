export default {

  server: {
    port: process.env.PORT || 1337, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },

  plugins: [
    '~/plugins/api.js',
    //mixins
    '~/plugins/mixins/date.js'
  ],

  serverMiddleware: [
    {path: '/api', handler: '~/api/index.js'}
  ]
}