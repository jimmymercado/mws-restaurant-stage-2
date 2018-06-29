/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/app.js":
/*!***********************!*\
  !*** ./js/src/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* Adding Service Worker */\nif ('serviceWorker' in navigator) {\n\n    navigator.serviceWorker.register('/service-worker.js', { scope: '/' }).then(function (registration) {\n        console.log('ServiceWorker Registered');\n    }).catch(function (err) {\n        console.log('ServiceWorker Unsupported', err);\n    });\n}\n\n//# sourceURL=webpack:///./js/src/app.js?");

/***/ }),

/***/ "./js/src/dbhelper.js":
/*!****************************!*\
  !*** ./js/src/dbhelper.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.newMap = exports.DBHelper = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _idb = __webpack_require__(/*! idb */ \"./node_modules/idb/lib/idb.js\");\n\nvar _idb2 = _interopRequireDefault(_idb);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar newMap = void 0;\n\n/**\r\n * Common database helper functions.\r\n */\n\nvar DBHelper = function () {\n  function DBHelper() {\n    _classCallCheck(this, DBHelper);\n  }\n\n  _createClass(DBHelper, null, [{\n    key: 'fetchRestaurants',\n    value: function fetchRestaurants(callback) {\n      DBHelper.idbPromise.then(function (db) {\n        var trans = db.transaction('restaurants');\n        var store = trans.objectStore('restaurants');\n\n        store.getAll().then(function (restaurants) {\n          if (restaurants.length > 1) {\n            console.log('Restaurants getting from indexDB', restaurants);\n            callback(null, restaurants);\n          } else {\n            fetch(DBHelper.DATABASE_URL).then(function (resp) {\n              return resp.json();\n            }).then(function (resp) {\n              var trans = db.transaction('restaurants', 'readwrite');\n              var store = trans.objectStore('restaurants');\n              resp.forEach(function (restaurant) {\n                return store.put(restaurant);\n              });\n\n              console.log('Restaurants from network and saved to indexDB', resp);\n              callback(null, resp);\n            }).catch(function (err) {\n              console.log('[Network fetch error: ' + err);\n              callback(err, null);\n            });\n          }\n        });\n      });\n    }\n  }, {\n    key: 'fetchRestaurants_OLD',\n    value: function fetchRestaurants_OLD(callback) {\n      var xhr = new XMLHttpRequest();\n      xhr.open('GET', DBHelper.DATABASE_URL);\n      xhr.onload = function () {\n        if (xhr.status === 200) {\n          // Got a success response from server!\n          //const json = JSON.parse(xhr.responseText);\n          //const restaurants = json.restaurants;\n          var restaurants = JSON.parse(xhr.responseText);\n          callback(null, restaurants);\n        } else {\n          // Oops!. Got an error from server.\n          var error = 'Request failed. Returned status of ' + xhr.status;\n          callback(error, null);\n        }\n      };\n      xhr.send();\n    }\n\n    /**\r\n     * Fetch a restaurant by its ID.\r\n     */\n\n  }, {\n    key: 'fetchRestaurantById',\n    value: function fetchRestaurantById(id, callback) {\n      // fetch all restaurants with proper error handling.\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          var restaurant = restaurants.find(function (r) {\n            return r.id == id;\n          });\n          if (restaurant) {\n            // Got the restaurant\n            callback(null, restaurant);\n          } else {\n            // Restaurant does not exist in the database\n            callback('Restaurant does not exist', null);\n          }\n        }\n      });\n    }\n\n    /**\r\n     * Fetch restaurants by a cuisine type with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchRestaurantByCuisine',\n    value: function fetchRestaurantByCuisine(cuisine, callback) {\n      // Fetch all restaurants  with proper error handling\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          // Filter restaurants to have only given cuisine type\n          var results = restaurants.filter(function (r) {\n            return r.cuisine_type == cuisine;\n          });\n          callback(null, results);\n        }\n      });\n    }\n\n    /**\r\n     * Fetch restaurants by a neighborhood with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchRestaurantByNeighborhood',\n    value: function fetchRestaurantByNeighborhood(neighborhood, callback) {\n      // Fetch all restaurants\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          // Filter restaurants to have only given neighborhood\n          var results = restaurants.filter(function (r) {\n            return r.neighborhood == neighborhood;\n          });\n          callback(null, results);\n        }\n      });\n    }\n\n    /**\r\n     * Fetch restaurants by a cuisine and a neighborhood with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchRestaurantByCuisineAndNeighborhood',\n    value: function fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, callback) {\n      // Fetch all restaurants\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          var results = restaurants;\n          if (cuisine != 'all') {\n            // filter by cuisine\n            results = results.filter(function (r) {\n              return r.cuisine_type == cuisine;\n            });\n          }\n          if (neighborhood != 'all') {\n            // filter by neighborhood\n            results = results.filter(function (r) {\n              return r.neighborhood == neighborhood;\n            });\n          }\n          callback(null, results);\n        }\n      });\n    }\n\n    /**\r\n     * Fetch all neighborhoods with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchNeighborhoods',\n    value: function fetchNeighborhoods(callback) {\n      // Fetch all restaurants\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          // Get all neighborhoods from all restaurants\n          var neighborhoods = restaurants.map(function (v, i) {\n            return restaurants[i].neighborhood;\n          });\n          // Remove duplicates from neighborhoods\n          var uniqueNeighborhoods = neighborhoods.filter(function (v, i) {\n            return neighborhoods.indexOf(v) == i;\n          });\n          callback(null, uniqueNeighborhoods);\n        }\n      });\n    }\n\n    /**\r\n     * Fetch all cuisines with proper error handling.\r\n     */\n\n  }, {\n    key: 'fetchCuisines',\n    value: function fetchCuisines(callback) {\n      // Fetch all restaurants\n      DBHelper.fetchRestaurants(function (error, restaurants) {\n        if (error) {\n          callback(error, null);\n        } else {\n          // Get all cuisines from all restaurants\n          var cuisines = restaurants.map(function (v, i) {\n            return restaurants[i].cuisine_type;\n          });\n          // Remove duplicates from cuisines\n          var uniqueCuisines = cuisines.filter(function (v, i) {\n            return cuisines.indexOf(v) == i;\n          });\n          callback(null, uniqueCuisines);\n        }\n      });\n    }\n\n    /**\r\n     * Restaurant page URL.\r\n     */\n\n  }, {\n    key: 'urlForRestaurant',\n    value: function urlForRestaurant(restaurant) {\n      return './restaurant.html?id=' + restaurant.id;\n    }\n\n    /**\r\n     * Restaurant image URL.\r\n     */\n\n  }, {\n    key: 'imageUrlForRestaurant',\n    value: function imageUrlForRestaurant(restaurant) {\n      //return (`/img/${restaurant.photograph}`);\n\n      //modified by Jimmy Mercado\n\n      if (restaurant.photograph) {\n        return '/images/' + restaurant.photograph;\n      }\n      //console.log('missing photo = ' + restaurant.id);\n      return '/images/' + restaurant.id;\n    }\n\n    /**\r\n     * Map marker for a restaurant.\r\n     */\n\n  }, {\n    key: 'mapMarkerForRestaurant',\n    value: function mapMarkerForRestaurant(restaurant, map) {\n      // https://leafletjs.com/reference-1.3.0.html#marker  \n      var marker = new L.marker([restaurant.latlng.lat, restaurant.latlng.lng], { title: restaurant.name,\n        alt: restaurant.name,\n        url: DBHelper.urlForRestaurant(restaurant)\n      });\n      marker.addTo(self.newMap);\n      return marker;\n    }\n  }, {\n    key: 'DATABASE_URL',\n\n\n    /**\r\n     * Database URL.\r\n     * Change this to restaurants.json file location on your server.\r\n     */\n    get: function get() {\n      //const port = 8000; // Change this to your server port\n      //return `http://localhost:${port}/data/restaurants.json`;\n      var port = 1337; // Change this to your server port\n      return 'http://localhost:' + port + '/restaurants';\n    }\n  }, {\n    key: 'idbPromise',\n    get: function get() {\n      if (!navigator.serviceWorker) {\n        return Promise.resolve();\n      } else {\n        return _idb2.default.open('restaurants', 1, function (upgradeDb) {\n          upgradeDb.createObjectStore('restaurants', { keyPath: 'id' });\n          upgradeDb.createObjectStore('reviews', { keyPath: 'id' });\n        });\n      }\n    }\n  }, {\n    key: 'dbPromise',\n    get: function get() {\n      return _idb2.default.open('test-db', 1, function (upgradeDB) {\n        var keyValStore = upgradeDB.createObjectStore('keyval');\n        keyValStore.put('world', 'hello');\n      });\n    }\n  }]);\n\n  return DBHelper;\n}();\n\nexports.DBHelper = DBHelper;\nexports.newMap = newMap;\n\n//# sourceURL=webpack:///./js/src/dbhelper.js?");

/***/ }),

/***/ "./js/src/restaurant_info.js":
/*!***********************************!*\
  !*** ./js/src/restaurant_info.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dbhelper = __webpack_require__(/*! ./dbhelper */ \"./js/src/dbhelper.js\");\n\nvar restaurant;\n\n/**\n * Initialize map as soon as the page is loaded.\n */\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  initMap();\n});\n\n/**\n * Initialize leaflet map\n */\nvar initMap = function initMap() {\n  fetchRestaurantFromURL(function (error, restaurant) {\n    if (error) {\n      // Got an error!\n      console.error(error);\n    } else {\n      self.newMap = L.map('map', {\n        center: [restaurant.latlng.lat, restaurant.latlng.lng],\n        zoom: 16,\n        scrollWheelZoom: false\n      });\n      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}', {\n        mapboxToken: 'pk.eyJ1IjoiamltbXltZXJjYWRvIiwiYSI6ImNqaWtzZWZ1czFlamYzcXBmemNreDg2aDQifQ.YQGY_pIwe5x68Q7q8Dvufw',\n        maxZoom: 18,\n        attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, ' + '<a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, ' + 'Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n        id: 'mapbox.streets'\n      }).addTo(self.newMap);\n      fillBreadcrumb();\n      _dbhelper.DBHelper.mapMarkerForRestaurant(self.restaurant, self.newMap);\n    }\n  });\n};\n\n/**\n * Get current restaurant from page URL.\n */\nvar fetchRestaurantFromURL = function fetchRestaurantFromURL(callback) {\n  if (self.restaurant) {\n    // restaurant already fetched!\n    callback(null, self.restaurant);\n    return;\n  }\n  var id = getParameterByName('id');\n  if (!id) {\n    // no id found in URL\n    error = 'No restaurant id in URL';\n    callback(error, null);\n  } else {\n    _dbhelper.DBHelper.fetchRestaurantById(id, function (error, restaurant) {\n      self.restaurant = restaurant;\n      if (!restaurant) {\n        console.error(error);\n        return;\n      }\n      fillRestaurantHTML();\n      callback(null, restaurant);\n    });\n  }\n};\n\n/**\n * Create restaurant HTML and add it to the webpage\n */\nvar fillRestaurantHTML = function fillRestaurantHTML() {\n  var restaurant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.restaurant;\n\n  var name = document.getElementById('restaurant-name');\n  name.innerHTML = restaurant.name;\n\n  var address = document.getElementById('restaurant-address');\n  address.innerHTML = restaurant.address;\n\n  var image = document.getElementById('restaurant-img');\n  image.className = 'restaurant-img';\n  image.src = _dbhelper.DBHelper.imageUrlForRestaurant(restaurant);\n\n  /*\n  * Added by Jimmy Mercado\n  * include srcset and alt attrib\n  */\n  //image.setAttribute('alt', restaurant.photo_description);\n  image.setAttribute('alt', 'Photo of ' + restaurant.name);\n  var imgPath = _dbhelper.DBHelper.imageUrlForRestaurant(restaurant);\n  //const imgPathFileName = imgPath.substring(0, (imgPath.length - 4));\n  //const imgFileExtesion = imgPath.substring((imgPath.length - 4), imgPath.length);\n\n  var imgPathFileName = imgPath;\n  var imgFileExtesion = '.jpg';\n\n  image.setAttribute(\"srcset\", imgPathFileName + imgFileExtesion + ' 1140w, ' + imgPathFileName + '_400px' + imgFileExtesion + ' 900w, ' + imgPathFileName + '_270px' + imgFileExtesion + ' 650w, ' + imgPathFileName + imgFileExtesion + ' 645w ');\n\n  var cuisine = document.getElementById('restaurant-cuisine');\n  cuisine.innerHTML = restaurant.cuisine_type;\n\n  // fill operating hours\n  if (restaurant.operating_hours) {\n    fillRestaurantHoursHTML();\n  }\n  // fill reviews\n  fillReviewsHTML();\n};\n\n/**\n * Create restaurant operating hours HTML table and add it to the webpage.\n */\nvar fillRestaurantHoursHTML = function fillRestaurantHoursHTML() {\n  var operatingHours = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.restaurant.operating_hours;\n\n  var hours = document.getElementById('restaurant-hours');\n  for (var key in operatingHours) {\n    var row = document.createElement('tr');\n\n    var day = document.createElement('td');\n    day.innerHTML = key;\n    row.appendChild(day);\n\n    var time = document.createElement('td');\n    time.innerHTML = operatingHours[key];\n    row.appendChild(time);\n\n    hours.appendChild(row);\n  }\n};\n\n/**\n * Create all reviews HTML and add them to the webpage.\n */\nvar fillReviewsHTML = function fillReviewsHTML() {\n  var reviews = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.restaurant.reviews;\n\n  var container = document.getElementById('reviews-container');\n  var title = document.createElement('h3');\n  title.innerHTML = 'Reviews';\n  title.setAttribute('tabindex', 0);\n  container.appendChild(title);\n\n  if (!reviews) {\n    var noReviews = document.createElement('p');\n    noReviews.innerHTML = 'No reviews yet!';\n    noReviews.setAttribute('tabindex', 0);\n    container.appendChild(noReviews);\n    return;\n  }\n  var ul = document.getElementById('reviews-list');\n  reviews.forEach(function (review) {\n    ul.appendChild(createReviewHTML(review));\n  });\n  container.appendChild(ul);\n};\n\n/**\n * Create review HTML and add it to the webpage.\n */\nvar createReviewHTML_OLD = function createReviewHTML_OLD(review) {\n  var li = document.createElement('li');\n  var name = document.createElement('p');\n  name.innerHTML = review.name;\n  li.appendChild(name);\n\n  var date = document.createElement('p');\n  date.innerHTML = review.date;\n  li.appendChild(date);\n\n  var rating = document.createElement('p');\n  rating.innerHTML = 'Rating: ' + review.rating;\n  li.appendChild(rating);\n\n  var comments = document.createElement('p');\n  comments.innerHTML = review.comments;\n  li.appendChild(comments);\n\n  return li;\n};\n/*\n * Added by Jimmy Mercado\n * Create review HTML and add it to the webpage.\n*/\nvar createReviewHTML = function createReviewHTML(review) {\n  var li = document.createElement('li');\n  //encapsulate with div tag\n  var div = document.createElement('div');\n  div.className = 'reviewHeader';\n  var name = document.createElement('p');\n  name.innerHTML = review.name;\n  name.setAttribute('tabindex', 0);\n  //li.appendChild(name);\n\n  var date = document.createElement('p');\n  date.innerHTML = review.date;\n  date.setAttribute('tabindex', 0);\n  //li.appendChild(date);\n  div.innerHTML = name.outerHTML + ' ' + date.outerHTML;\n  li.appendChild(div);\n\n  var rating = document.createElement('div');\n  rating.className = 'ratingBox';\n  rating.innerHTML = 'Rating: ' + review.rating;\n  rating.setAttribute('tabindex', 0);\n  li.appendChild(rating);\n\n  var comments = document.createElement('p');\n  comments.innerHTML = review.comments;\n  li.appendChild(comments);\n\n  return li;\n};\n\n/**\n * Add restaurant name to the breadcrumb navigation menu\n */\nvar fillBreadcrumb = function fillBreadcrumb() {\n  var restaurant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.restaurant;\n\n  var breadcrumb = document.getElementById('breadcrumb');\n  var li = document.createElement('li');\n  li.innerHTML = restaurant.name;\n  breadcrumb.appendChild(li);\n};\n\n/**\n * Get a parameter by name from page URL.\n */\nvar getParameterByName = function getParameterByName(name, url) {\n  if (!url) url = window.location.href;\n  name = name.replace(/[\\[\\]]/g, '\\\\$&');\n  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),\n      results = regex.exec(url);\n  if (!results) return null;\n  if (!results[2]) return '';\n  return decodeURIComponent(results[2].replace(/\\+/g, ' '));\n};\n\n//# sourceURL=webpack:///./js/src/restaurant_info.js?");

/***/ }),

/***/ "./node_modules/idb/lib/idb.js":
/*!*************************************!*\
  !*** ./node_modules/idb/lib/idb.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function() {\n  function toArray(arr) {\n    return Array.prototype.slice.call(arr);\n  }\n\n  function promisifyRequest(request) {\n    return new Promise(function(resolve, reject) {\n      request.onsuccess = function() {\n        resolve(request.result);\n      };\n\n      request.onerror = function() {\n        reject(request.error);\n      };\n    });\n  }\n\n  function promisifyRequestCall(obj, method, args) {\n    var request;\n    var p = new Promise(function(resolve, reject) {\n      request = obj[method].apply(obj, args);\n      promisifyRequest(request).then(resolve, reject);\n    });\n\n    p.request = request;\n    return p;\n  }\n\n  function promisifyCursorRequestCall(obj, method, args) {\n    var p = promisifyRequestCall(obj, method, args);\n    return p.then(function(value) {\n      if (!value) return;\n      return new Cursor(value, p.request);\n    });\n  }\n\n  function proxyProperties(ProxyClass, targetProp, properties) {\n    properties.forEach(function(prop) {\n      Object.defineProperty(ProxyClass.prototype, prop, {\n        get: function() {\n          return this[targetProp][prop];\n        },\n        set: function(val) {\n          this[targetProp][prop] = val;\n        }\n      });\n    });\n  }\n\n  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {\n    properties.forEach(function(prop) {\n      if (!(prop in Constructor.prototype)) return;\n      ProxyClass.prototype[prop] = function() {\n        return promisifyRequestCall(this[targetProp], prop, arguments);\n      };\n    });\n  }\n\n  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {\n    properties.forEach(function(prop) {\n      if (!(prop in Constructor.prototype)) return;\n      ProxyClass.prototype[prop] = function() {\n        return this[targetProp][prop].apply(this[targetProp], arguments);\n      };\n    });\n  }\n\n  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {\n    properties.forEach(function(prop) {\n      if (!(prop in Constructor.prototype)) return;\n      ProxyClass.prototype[prop] = function() {\n        return promisifyCursorRequestCall(this[targetProp], prop, arguments);\n      };\n    });\n  }\n\n  function Index(index) {\n    this._index = index;\n  }\n\n  proxyProperties(Index, '_index', [\n    'name',\n    'keyPath',\n    'multiEntry',\n    'unique'\n  ]);\n\n  proxyRequestMethods(Index, '_index', IDBIndex, [\n    'get',\n    'getKey',\n    'getAll',\n    'getAllKeys',\n    'count'\n  ]);\n\n  proxyCursorRequestMethods(Index, '_index', IDBIndex, [\n    'openCursor',\n    'openKeyCursor'\n  ]);\n\n  function Cursor(cursor, request) {\n    this._cursor = cursor;\n    this._request = request;\n  }\n\n  proxyProperties(Cursor, '_cursor', [\n    'direction',\n    'key',\n    'primaryKey',\n    'value'\n  ]);\n\n  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [\n    'update',\n    'delete'\n  ]);\n\n  // proxy 'next' methods\n  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {\n    if (!(methodName in IDBCursor.prototype)) return;\n    Cursor.prototype[methodName] = function() {\n      var cursor = this;\n      var args = arguments;\n      return Promise.resolve().then(function() {\n        cursor._cursor[methodName].apply(cursor._cursor, args);\n        return promisifyRequest(cursor._request).then(function(value) {\n          if (!value) return;\n          return new Cursor(value, cursor._request);\n        });\n      });\n    };\n  });\n\n  function ObjectStore(store) {\n    this._store = store;\n  }\n\n  ObjectStore.prototype.createIndex = function() {\n    return new Index(this._store.createIndex.apply(this._store, arguments));\n  };\n\n  ObjectStore.prototype.index = function() {\n    return new Index(this._store.index.apply(this._store, arguments));\n  };\n\n  proxyProperties(ObjectStore, '_store', [\n    'name',\n    'keyPath',\n    'indexNames',\n    'autoIncrement'\n  ]);\n\n  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [\n    'put',\n    'add',\n    'delete',\n    'clear',\n    'get',\n    'getAll',\n    'getKey',\n    'getAllKeys',\n    'count'\n  ]);\n\n  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [\n    'openCursor',\n    'openKeyCursor'\n  ]);\n\n  proxyMethods(ObjectStore, '_store', IDBObjectStore, [\n    'deleteIndex'\n  ]);\n\n  function Transaction(idbTransaction) {\n    this._tx = idbTransaction;\n    this.complete = new Promise(function(resolve, reject) {\n      idbTransaction.oncomplete = function() {\n        resolve();\n      };\n      idbTransaction.onerror = function() {\n        reject(idbTransaction.error);\n      };\n      idbTransaction.onabort = function() {\n        reject(idbTransaction.error);\n      };\n    });\n  }\n\n  Transaction.prototype.objectStore = function() {\n    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));\n  };\n\n  proxyProperties(Transaction, '_tx', [\n    'objectStoreNames',\n    'mode'\n  ]);\n\n  proxyMethods(Transaction, '_tx', IDBTransaction, [\n    'abort'\n  ]);\n\n  function UpgradeDB(db, oldVersion, transaction) {\n    this._db = db;\n    this.oldVersion = oldVersion;\n    this.transaction = new Transaction(transaction);\n  }\n\n  UpgradeDB.prototype.createObjectStore = function() {\n    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));\n  };\n\n  proxyProperties(UpgradeDB, '_db', [\n    'name',\n    'version',\n    'objectStoreNames'\n  ]);\n\n  proxyMethods(UpgradeDB, '_db', IDBDatabase, [\n    'deleteObjectStore',\n    'close'\n  ]);\n\n  function DB(db) {\n    this._db = db;\n  }\n\n  DB.prototype.transaction = function() {\n    return new Transaction(this._db.transaction.apply(this._db, arguments));\n  };\n\n  proxyProperties(DB, '_db', [\n    'name',\n    'version',\n    'objectStoreNames'\n  ]);\n\n  proxyMethods(DB, '_db', IDBDatabase, [\n    'close'\n  ]);\n\n  // Add cursor iterators\n  // TODO: remove this once browsers do the right thing with promises\n  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {\n    [ObjectStore, Index].forEach(function(Constructor) {\n      // Don't create iterateKeyCursor if openKeyCursor doesn't exist.\n      if (!(funcName in Constructor.prototype)) return;\n\n      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {\n        var args = toArray(arguments);\n        var callback = args[args.length - 1];\n        var nativeObject = this._store || this._index;\n        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));\n        request.onsuccess = function() {\n          callback(request.result);\n        };\n      };\n    });\n  });\n\n  // polyfill getAll\n  [Index, ObjectStore].forEach(function(Constructor) {\n    if (Constructor.prototype.getAll) return;\n    Constructor.prototype.getAll = function(query, count) {\n      var instance = this;\n      var items = [];\n\n      return new Promise(function(resolve) {\n        instance.iterateCursor(query, function(cursor) {\n          if (!cursor) {\n            resolve(items);\n            return;\n          }\n          items.push(cursor.value);\n\n          if (count !== undefined && items.length == count) {\n            resolve(items);\n            return;\n          }\n          cursor.continue();\n        });\n      });\n    };\n  });\n\n  var exp = {\n    open: function(name, version, upgradeCallback) {\n      var p = promisifyRequestCall(indexedDB, 'open', [name, version]);\n      var request = p.request;\n\n      request.onupgradeneeded = function(event) {\n        if (upgradeCallback) {\n          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));\n        }\n      };\n\n      return p.then(function(db) {\n        return new DB(db);\n      });\n    },\n    delete: function(name) {\n      return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);\n    }\n  };\n\n  if (true) {\n    module.exports = exp;\n    module.exports.default = module.exports;\n  }\n  else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/idb/lib/idb.js?");

/***/ }),

/***/ 1:
/*!*********************************************************!*\
  !*** multi ./js/src/restaurant_info.js ./js/src/app.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/src/restaurant_info.js */\"./js/src/restaurant_info.js\");\nmodule.exports = __webpack_require__(/*! ./js/src/app.js */\"./js/src/app.js\");\n\n\n//# sourceURL=webpack:///multi_./js/src/restaurant_info.js_./js/src/app.js?");

/***/ })

/******/ });