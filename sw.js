var CACHE_NAME = 'my-site-cache-v1'
var urlsToCache = [
  '/',
  '/index.html',
  '/static/bundle.js',
  '/public/bundle.js'
]

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', function (event) {
  console.warn('url:', event.request.url)
  var dataUrl = 'http://api.tvmaze.com/search/shows?q='
  if (event.request.url.indexOf(dataUrl) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function (cache) {
        return fetch(event.request).then(function (response) {
          cache.put(event.request.url, response.clone())
          return response
        })
      })
    )
  }
  else {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          // Cache hit - return response
          if (response) {
            return response
          }
          return fetch(event.request)
        }
      )
    )
  }
})

/*
self.onfetch = function (event) {
  var dataUrl = 'http://api.tvmaze.com/search/shows?q='
  console.warn(event.request.url)
  if (event.request.url.indexOf(dataUrl) > -1) {
    console.warn(event)
  }
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response
        }
        return fetch(event.request)
      }
    )
  )
}*/
