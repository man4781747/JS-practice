if('caches' in window) {
  console.log('caches Has support!')
}

caches.open('test-cache').then(function(cache) {
  console.log('快取建立完成，現在就可以訪問了')
// 快取建立完成，現在就可以訪問了
});

// caches.open('test-cache').then(function(cache) {
//   cache.addAll(['/2018/']).then(function() {
//     console.log('030')
//   })
// });
