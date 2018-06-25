
/*
import idb from '../node_modules/idb/lib/idb.js';
idb.open('test-db', 1, function(upgadeDB){
    let keyValStore = upgradeDB.createObjectStore('keyval');
    keyValStore.put('world', 'hello');
});
*/
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
