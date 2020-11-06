import redirectSSL from 'redirect-ssl';

export default {

  head: {
    title: 'Caskli - Brew short URLs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#614BE6' },
      { name: 'theme-color', content: '#614BE6' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},
      { name: 'description', content: 'Brew URLs with Csk.li - Another URL shortner. ' },
      { name: 'application-name', content: 'Caskli' },
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

  pwa: {
    meta: {
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent'
    },
    icon: {
      iconSrc: '~/static/icon.png'
    },
    workbox: {
      //importScripts : '@/plugins/bg-sync.js',
      enabled: true,
      config: {
        //debug: true
      }
    }
  },

  manifest: {
    "theme_color": "#614BE6",
    "background_color": "#614BE6",
    "display": "fullscreen",
    "scope": "/",
    "start_url": "/",
    "app_name": "Caskli",
    "name": "Caskli",
    "short_name": "csk.li",
    "description": "Caskli - Brew Short URLs",
    "icons": [
        {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "lang": "en"
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
    {src: '~/plugins/sweet.js'},
    //mixins
    {src: '~/plugins/mixins/urls.js'},
    {src: '~/plugins/mixins/auth.js'},
  ],

  serverMiddleware: [
    {path: '/api', handler: '~/api/index.js'},
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
    }),
  ],

  buildModules: [
    '@nuxtjs/pwa'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/auth',
    ['nuxt-twa-module', {
      /* module options */
      defaultUrl: 'https://csk.li',
      hostName: 'csk.li',
      applicationId: 'com.csk.li',
      launcherName: 'Caskli',
      versionCode: 1,
      versionName: '1.0',
      statusBarColor:'#614BE6',
      // The sha256Fingerprints by is an array with one SHA-256 key string.
      // But if you have multiple you can add them to the array. More information about the website asociation:
      // https://developer.android.com/training/app-links/verify-site-associations#web-assoc
      sha256Fingerprints: ['6F:52:FB:79:7B:E1:7B:6B:1D:15:91:E6:03:BA:7A:CE:F3:8B:75:D7:C6:1B:09:C0:34:BA:D8:99:5D:B4:4A:F6'],
      /* optional */
      /* overwrite default location for icon */
      iconPath: '/static/icon.png',
      /* Overwrite folder where to put .wellknown */
      distFolder: '.nuxt/dist/client',
    }]
  ]
}