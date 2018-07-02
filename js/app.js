
/* Adding Service Worker */
if('serviceWorker' in navigator){

    navigator.serviceWorker    
        .register('/service-worker.js', {scope: '/'})
        .then(function(registration){
            console.log('ServiceWorker Registered');
        })
        .catch(function(err){
            console.log('ServiceWorker Unsupported', err);
        })
  }
