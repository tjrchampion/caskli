const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('formQueue', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

return workbox.routing.registerRoute('/',
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);