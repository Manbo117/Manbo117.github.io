const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"nutalk"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"2c6f7b146c3f24ac13844d406c14a415",url:"./404.html"},{revision:"1944a58b6ed6f0040ea5c2d7063fd075",url:"./archives/2020/10/index.html"},{revision:"a6dac9e4fc67a54b66f444c27227b47d",url:"./archives/2020/index.html"},{revision:"aed4fc983676fe8f80019e43ba7393c1",url:"./archives/2021/02/index.html"},{revision:"8f0d8a70c32c546ce1bb834988cf0f49",url:"./archives/2021/index.html"},{revision:"cc0eaa34dab8f66a39561ea60478d2c8",url:"./archives/index.html"},{revision:"d502dafb9d5965bcc227bd3fdc6bbf25",url:"./archives/page/2/index.html"},{revision:"6a8adfc82d58bcba79efaadf28c9a7a3",url:"./artitalk/index.html"},{revision:"73b422051afdda7700f4a670a652db7e",url:"./bangumis/index.html"},{revision:"15b153071017dde7b324cfcccfefc6d5",url:"./books/index.html"},{revision:"2b305bfb9c8ec458d8961cb32671447d",url:"./Botui/index.html"},{revision:"9d3f0cdec9f2c31fc42ab39e02efa356",url:"./categories/index.html"},{revision:"d1153f83a3b14be4be1b0a18e487b7e3",url:"./categories/标签外挂/github/index.html"},{revision:"2c70b70be382dcaa920cacbbbef32bfe",url:"./categories/标签外挂/index.html"},{revision:"f5b0e4d92e7085ef6abe18891ec38ec8",url:"./comments/index.html"},{revision:"0714e4101ac4bd6432c9aaa019d570eb",url:"./css/coin.css"},{revision:"67c5bdfa46325e9b702dc266731055cc",url:"./css/commentsbar.css"},{revision:"25e59eb3acc6a2a8e0596f305aaf65e8",url:"./css/cover.css"},{revision:"97c00cb6d34f629fadb57108ed270154",url:"./css/custom.css"},{revision:"1dcc737069dea145733b1c0b14e0aaf5",url:"./css/flipcountdown.css"},{revision:"16fe165465381d7412c29665bd41b09c",url:"./css/iconfont.css"},{revision:"ee9da217b461ec69db477a49f2035430",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"79f0c6feeffe747deebe258721793135",url:"./gallery/index.html"},{revision:"69480bf8ab37756e6b9fa56a9ba74092",url:"./gallery/test/index.html"},{revision:"5a2ddf20dd012f543a64684064a94cbe",url:"./games/index.html"},{revision:"c233ad0661a1fde208fb375249cbacc4",url:"./img/pwa/manifest.json"},{revision:"8b281bb8c4c75d2b84d88cd42df2527a",url:"./index.html"},{revision:"157ed1b1c1eabfef8e8b269d2352e142",url:"./js/botui.js"},{revision:"44302332cc4ecadaa5eb506bc021186b",url:"./js/chocolate.js"},{revision:"3bcd2ed58553bbfd14bd025c42137ba5",url:"./js/classifyclick.js"},{revision:"db0ef6fc56befa79cef5e478f9138324",url:"./js/coin.js"},{revision:"715b38a845d53cbd4fd90f0636360797",url:"./js/crash_cheat.js"},{revision:"e9515a31a16f62bfa65e1b2510f63c2f",url:"./js/custom.js"},{revision:"3696890489ad2d78d93f10dfe5625b0e",url:"./js/custom/card_clock.js"},{revision:"7e9b01c48986c8f0f05c8eb6eb19d5c3",url:"./js/custom/runtime.js"},{revision:"284b95d3ba335fd99e07ea05d0602eb7",url:"./js/main.js"},{revision:"9b7b14e6fa35f0c86585dd8a14839974",url:"./js/randombg.js"},{revision:"517af910a11b06129cf1e708c1495f27",url:"./js/ripples.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"dcf69c07e6595a5fce5121731baf2525",url:"./js/swiper_init.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"daac6f9f27819b87a44a849dbd301ff9",url:"./js/wow_init.js"},{revision:"c0fd4750f3e9bd67cdcfc179786869a3",url:"./link/index.html"},{revision:"84b1c1273255903f6ffdd95b931a800b",url:"./live2d-widget/autoload.js"},{revision:"2596a8630c0801002b3dff127b50518b",url:"./live2d-widget/demo/demo.html"},{revision:"814084edfca521aea7c069da8e0698ad",url:"./live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"5e61153c81680871c6b501997e4df15f",url:"./live2d-widget/README.html"},{revision:"e01c75f70a9465389471f638b1356bf8",url:"./live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./live2d-widget/waifu-tips.json"},{revision:"177b45ee21b22bfd61ac7d06bba35721",url:"./live2d-widget/waifu.css"},{revision:"06c85c6e17572d2e2dcd64f19dd3e7c6",url:"./movies/index.html"},{revision:"f5c9ef77ab082a32ec4d5dd15eb0319b",url:"./music/index.html"},{revision:"1af964840dbace39cc981e3f71f3d488",url:"./page/2/index.html"},{revision:"a6145e212479ff70f64e97162c991320",url:"./posts/12db40b9/index.html"},{revision:"07776d7a20fefa497f04e55ed8bcc728",url:"./posts/174eafa7/index.html"},{revision:"21c967d368ae025268fef63b1a80cc6f",url:"./posts/41048c71/index.html"},{revision:"5e5fd15341a57793fdf0edc4f5a57d84",url:"./posts/4a138a4b/index.html"},{revision:"d97e66c23eafe90a6e9566f0fd5e15a5",url:"./posts/4a17b156/index.html"},{revision:"93b5d0e1cdce54f20a3d6fd05798d559",url:"./posts/68217b3b/index.html"},{revision:"179870c7ada6bfbde2723dac2c6bff5e",url:"./posts/9b96d673/index.html"},{revision:"6d9b7e4ae7bc7a422ba5c1f1cdbf820e",url:"./posts/a19446a6/index.html"},{revision:"b9ecd84b5b0c2ba794eb419ea1b32990",url:"./posts/a9ec963d/index.html"},{revision:"5c8a379d3f57cba27a12527da7d75b0a",url:"./posts/d87f7e0c/index.html"},{revision:"c9b529985e38e228e33f199055e79bd2",url:"./posts/e33eddd3/index.html"},{revision:"8c8b4f12ae394e8289d8ddb1949e7513",url:"./random/index.html"},{revision:"0417dfee782510f3e7d558040f696e9e",url:"./statistics/index.html"},{revision:"d6f9db2ad585f340ac490a196a6d1ff0",url:"./tags/index.html"},{revision:"d439a72babef13e983d8fb2114e39d81",url:"./tags/标签1/index.html"},{revision:"b48e2c8df8c8b53baea4b5267c11566b",url:"./tags/标签2/index.html"},{revision:"229586c9eeb9da81fef71a8e70fc5077",url:"./timeline/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();