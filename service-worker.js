/* Service Worker */
let cacheVersion = 1;
let staticCacheName = 'mws-static-' + cacheVersion;
let imagesCacheName = 'mws-images-' + cacheVersion;
let mapCacheName = 'mws-api-static-' + cacheVersion;
let apiCacheName = 'mws-api-key' + cacheVersion;
let cacheFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/404.html',
    '/offline.html',
    '/favicon.png',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
    'manifest.json',
    'pub/js/main.bundle.js',
    'pub/js/restaurant.bundle.js',
    'pub/css/styles.bundle.css'

];

let  allCaches = [staticCacheName, imagesCacheName, mapCacheName, apiCacheName];



self.addEventListener('install', function(e){
    console.log('[serviceWorker] installed');

    let offlineRequest = new Request('/offline.html');
    e.waitUntil(
        caches.open(staticCacheName).then(function(cache){
            //console.log('[ServiceWorker] caching files')
            return cache.addAll(cacheFiles).catch((error) => console.log(`Service Worker Open Erro = ${error}`));
        })
    )

});

self.addEventListener('activate', function(e){
    console.log('[serviceWorker] activated');

    e.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(
                cacheNames.filter(function(cacheName){
                    return cacheName.startsWith('mws-') && !allCaches.includes(cacheName)
                }).map(function(cacheName){
                    return caches.delete(cacheName);
                })
            );
        })
    );

});

self.addEventListener('fetch', function(e){

    let requestUrl = new URL(e.request.url);
    
    if(requestUrl.origin === location.origin){
        if(requestUrl.pathname === '/'){
            e.respondWith(caches.match('/'));
            return;
        }
        if(requestUrl.pathname.startsWith('/images/')){        
            e.respondWith(servePhoto(e.request));
            return;
        }             
    
    }else{
        
        if ((e.request.url.indexOf('https://maps.gstatic.com/mapfiles/') == 0) || 
            (e.request.url.indexOf('https://fonts.gstatic.com/') == 0) || 
            (e.request.url.indexOf('https://api.tiles.mapbox.com/') == 0)) {
            e.respondWith(serveMapStatic(e.request));
            return;
        }
        if ((e.request.url.indexOf('https://maps.googleapis.com/') == 0) && (e.request.method === 'GET')) {                
            e.respondWith(serveAPI(e.request));
            return;
        }
    }
    
    e.respondWith(
        caches.open(staticCacheName).then(function(cache){
            return cache.match(e.request).then(function(res){
                //console.log('[ServiceWorker] found url in cache', e.request.url);
                if(res) return res;
    
                return fetch(e.request).then(function(networkResponse){
                    if(networkResponse.status === 404){
                        return caches.match('/404.html');
                    }
                    //console.log('[ServiceWorker] adding url to cache', e.request.url);            
                    cache.put(e.request, networkResponse.clone());
                    return networkResponse;
                });
    
            }).catch(function(err){
                //console.log('[ServiceWorker] error in fetching and caching new data.')
                return caches.match('/offline.html');
            })
        })
    );
    return;

});

function serveSite(e){
    return caches.open(staticCacheName).then(function(cache){
        return cache.match(e.request).then(function(res){
            //console.log('[ServiceWorker] found url in cache', e.request.url);
            if(res) return res;

            return fetch(e.request).then(function(networkResponse){
                if(networkResponse.status === 404){
                    return caches.match('/404.html');
                }
                //console.log('[ServiceWorker] adding url to cache', e.request.url);            
                cache.put(e.request, networkResponse.clone());
                return networkResponse;
            });

        }).catch(function(err){
            //console.log('[ServiceWorker] error in fetching and caching new data.')
            return caches.match('/offline.html');
        });
    });
}


function servePhoto(request){
    let storageUrl = request.url.replace(/_\d{2,4}px\.jpg$/, '');
    return caches.open(imagesCacheName).then(function(cache){
        return cache.match(storageUrl).then(function(res){
            //console.log('[ServiceWorker] found images in cache', storageUrl);
            if(res) return res;

            return fetch(request).then(function(networkResponse){
                //console.log('[ServiceWorker] adding images to cache', storageUrl);            
                cache.put(storageUrl, networkResponse.clone());
                return networkResponse;
            });
        });
    });
}

function serveMapStatic(request){
    
    return caches.open(mapCacheName).then(function(cache){
        return cache.match(request.url).then(function(res){            
            if(res){
                //console.log('[ServiceWorker] found GoogleStatic data in cache', request.url);
                return res;
            }
            //console.log('[ServiceWorker] adding GoogleStatic data to cache', request.url);
            return fetch(request).then(function(networkResponse){
                cache.put(request, networkResponse.clone());
                return networkResponse;
            });
        });
    });
}

function serveGoogleStatic(request){
    
    return caches.open(mapCacheName).then(function(cache){
        return cache.match(request.url).then(function(res){            
            if(res){
                //console.log('[ServiceWorker] found GoogleStatic data in cache', request.url);
                return res;
            }
            //console.log('[ServiceWorker] adding GoogleStatic data to cache', request.url);
            return fetch(request).then(function(networkResponse){
                cache.put(request, networkResponse.clone());
                return networkResponse;
            });
        });
    });
}

function serveAPI(request){
    
    return caches.open(apiCacheName).then(function(cache){
        return cache.match(request.url).then(function(res){            
            if(res){
                //console.log('[ServiceWorker] found GoogleAPI data in cache', request.url);
                return res;
            }
            //console.log('[ServiceWorker] adding GoogleAPI data to cache', request.url);
            return fetch(request).then(function(networkResponse){
                cache.put(request, networkResponse.clone());
                return networkResponse;
            });
        }).catch(function(err){
            //console.log('API is offline');
            return new Response('api offline');
        })
    });
}


