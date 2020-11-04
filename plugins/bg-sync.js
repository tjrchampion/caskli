const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('formQueue', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute('http:\/\/localhost:1337\/api*',
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);

console.log("backsync called")
// workbox.routing.registerRoute(
//     'https:\/\/example.com\/api\/Survey\/post.*',
//     new workbox.strategies.NetworkOnly({
//         plugins: [
//             new workbox.backgroundSync.Plugin('myQueueName', {
//                 maxRetentionTime: 24 * 60
//             })
//         ]
//     }),
//     'POST'
// );