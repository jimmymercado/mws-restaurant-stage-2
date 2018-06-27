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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/app.js":
/*!***********************!*\
  !*** ./js/src/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n/* Adding Service Worker */\r\nif('serviceWorker' in navigator){\r\n\r\n    navigator.serviceWorker    \r\n        .register('/service-worker.js', {scope: '/'})\r\n        .then(function(registration){\r\n            console.log('ServiceWorker Registered');\r\n        })\r\n        .catch(function(err){\r\n            console.log('ServiceWorker Unsupported', err);\r\n        })\r\n  }\r\n\n\n//# sourceURL=webpack:///./js/src/app.js?");

/***/ }),

/***/ "./js/src/dbhelper.js":
/*!****************************!*\
  !*** ./js/src/dbhelper.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//import idb from '../node_modules/idb/lib/idb.js';\r\n\r\n\r\n\r\n\r\n/**\r\n * Common database helper functions.\r\n */\r\nclass DBHelper {\r\n\r\n  /**\r\n   * Database URL.\r\n   * Change this to restaurants.json file location on your server.\r\n   */\r\n  static get DATABASE_URL() {\r\n    // const port = 8000; // Change this to your server port\r\n    // return `http://localhost:${port}/data/restaurants.json`;\r\n    const port = 1337; // Change this to your server port\r\n    return `http://localhost:${port}/restaurants`;\r\n  }\r\n\r\n  static get dbPromise() {\r\n\t\tif (!navigator.serviceWorker) {\r\n\t\t\treturn Promise.resolve();\r\n\t\t} else {\r\n\t\t\treturn idb.open('restaurants', 1, function (upgradeDb) {\r\n\t\t\t\tupgradeDb.createObjectStore('all-restaurants', { keyPath: 'id' });\r\n\t\t\t\tupgradeDb.createObjectStore('all-reviews', { keyPath: 'id' });\r\n\t\t\t\tupgradeDb.createObjectStore('offline-reviews', { keyPath: 'updatedAt' });\r\n\t\t\t});\r\n\t\t}\r\n  }\r\n  \r\n  static get idbPromise() { \r\n    return idb.open('test-db', 1, function(upgradeDB){\r\n    let keyValStore = upgradeDB.createObjectStore('keyval');\r\n    keyValStore.put('world', 'hello');\r\n    });\r\n  }\r\n\r\n  static fetchRestaurants(callback) {\r\n    let xhr = new XMLHttpRequest();\r\n    xhr.open('GET', DBHelper.DATABASE_URL);\r\n    xhr.onload = () => {\r\n      if (xhr.status === 200) { // Got a success response from server!        \r\n        const restaurants = JSON.parse(xhr.responseText);        \r\n        callback(null, restaurants);\r\n      } else { // Oops!. Got an error from server.\r\n        const error = (`Request failed. Returned status of ${xhr.status}`);\r\n        callback(error, null);\r\n      }\r\n    };\r\n    xhr.send();\r\n  }\r\n\r\n  static fetchRestaurants_OLD(callback) {\r\n    let xhr = new XMLHttpRequest();\r\n    xhr.open('GET', DBHelper.DATABASE_URL);\r\n    xhr.onload = () => {\r\n      if (xhr.status === 200) { // Got a success response from server!\r\n        \r\n        const json = JSON.parse(xhr.responseText);        \r\n        const restaurants = json.restaurants;\r\n        callback(null, restaurants);\r\n      } else { // Oops!. Got an error from server.\r\n        const error = (`Request failed. Returned status of ${xhr.status}`);\r\n        callback(error, null);\r\n      }\r\n    };\r\n    xhr.send();\r\n  }\r\n\r\n\r\n  /**\r\n   * Fetch a restaurant by its ID.\r\n   */\r\n  static fetchRestaurantById(id, callback) {\r\n    // fetch all restaurants with proper error handling.\r\n    DBHelper.fetchRestaurants((error, restaurants) => {\r\n      if (error) {\r\n        callback(error, null);\r\n      } else {\r\n        const restaurant = restaurants.find(r => r.id == id);\r\n        if (restaurant) { // Got the restaurant\r\n          callback(null, restaurant);\r\n        } else { // Restaurant does not exist in the database\r\n          callback('Restaurant does not exist', null);\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Fetch restaurants by a cuisine type with proper error handling.\r\n   */\r\n  static fetchRestaurantByCuisine(cuisine, callback) {\r\n    // Fetch all restaurants  with proper error handling\r\n    DBHelper.fetchRestaurants((error, restaurants) => {\r\n      if (error) {\r\n        callback(error, null);\r\n      } else {\r\n        // Filter restaurants to have only given cuisine type\r\n        const results = restaurants.filter(r => r.cuisine_type == cuisine);\r\n        callback(null, results);\r\n      }\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Fetch restaurants by a neighborhood with proper error handling.\r\n   */\r\n  static fetchRestaurantByNeighborhood(neighborhood, callback) {\r\n    // Fetch all restaurants\r\n    DBHelper.fetchRestaurants((error, restaurants) => {\r\n      if (error) {\r\n        callback(error, null);\r\n      } else {\r\n        // Filter restaurants to have only given neighborhood\r\n        const results = restaurants.filter(r => r.neighborhood == neighborhood);\r\n        callback(null, results);\r\n      }\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Fetch restaurants by a cuisine and a neighborhood with proper error handling.\r\n   */\r\n  static fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, callback) {\r\n    // Fetch all restaurants\r\n    DBHelper.fetchRestaurants((error, restaurants) => {\r\n      if (error) {\r\n        callback(error, null);\r\n      } else {\r\n        let results = restaurants\r\n        if (cuisine != 'all') { // filter by cuisine\r\n          results = results.filter(r => r.cuisine_type == cuisine);\r\n        }\r\n        if (neighborhood != 'all') { // filter by neighborhood\r\n          results = results.filter(r => r.neighborhood == neighborhood);\r\n        }\r\n        callback(null, results);\r\n      }\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Fetch all neighborhoods with proper error handling.\r\n   */\r\n  static fetchNeighborhoods(callback) {\r\n    // Fetch all restaurants\r\n    DBHelper.fetchRestaurants((error, restaurants) => {\r\n      if (error) {\r\n        callback(error, null);\r\n      } else {\r\n        // Get all neighborhoods from all restaurants\r\n        const neighborhoods = restaurants.map((v, i) => restaurants[i].neighborhood)\r\n        // Remove duplicates from neighborhoods\r\n        const uniqueNeighborhoods = neighborhoods.filter((v, i) => neighborhoods.indexOf(v) == i)\r\n        callback(null, uniqueNeighborhoods);\r\n      }\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Fetch all cuisines with proper error handling.\r\n   */\r\n  static fetchCuisines(callback) {\r\n    // Fetch all restaurants\r\n    DBHelper.fetchRestaurants((error, restaurants) => {\r\n      if (error) {\r\n        callback(error, null);\r\n      } else {\r\n        // Get all cuisines from all restaurants\r\n        const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type)\r\n        // Remove duplicates from cuisines\r\n        const uniqueCuisines = cuisines.filter((v, i) => cuisines.indexOf(v) == i)\r\n        callback(null, uniqueCuisines);\r\n      }\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Restaurant page URL.\r\n   */\r\n  static urlForRestaurant(restaurant) {\r\n    return (`./restaurant.html?id=${restaurant.id}`);\r\n  }\r\n\r\n  /**\r\n   * Restaurant image URL.\r\n   */\r\n  static imageUrlForRestaurant(restaurant) {\r\n    //return (`/img/${restaurant.photograph}`);\r\n\r\n    //modified by Jimmy Mercado\r\n    \r\n    if(restaurant.photograph){\r\n      return (`/images/${restaurant.photograph}`);\r\n      \r\n    }\r\n    //console.log('missing photo = ' + restaurant.id);\r\n    return (`/images/${restaurant.id}`);\r\n    \r\n  }\r\n\r\n  /**\r\n   * Map marker for a restaurant.\r\n   */\r\n  static mapMarkerForRestaurant(restaurant, map) {\r\n    // https://leafletjs.com/reference-1.3.0.html#marker  \r\n    const marker = new L.marker([restaurant.latlng.lat, restaurant.latlng.lng],\r\n      {title: restaurant.name,\r\n      alt: restaurant.name,\r\n      url: DBHelper.urlForRestaurant(restaurant)\r\n      })\r\n      marker.addTo(newMap);\r\n    return marker;\r\n  } \r\n\r\n  /*\r\n  static mapMarkerForRestaurant(restaurant, map) {\r\n    const marker = new google.maps.Marker({\r\n      position: restaurant.latlng,\r\n      title: restaurant.name,\r\n      url: DBHelper.urlForRestaurant(restaurant),\r\n      map: map,\r\n      animation: google.maps.Animation.DROP}\r\n    );\r\n    return marker;\r\n  }\r\n  */\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/src/dbhelper.js?");

/***/ }),

/***/ "./js/src/main.js":
/*!************************!*\
  !*** ./js/src/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nlet restaurants,\r\n  neighborhoods,\r\n  cuisines;\r\nvar newMap;\r\nvar markers = [];\r\n\r\n\r\n\r\n/**\r\n * Fetch neighborhoods and cuisines as soon as the page is loaded.\r\n */\r\ndocument.addEventListener('DOMContentLoaded', (event) => {\r\n  initMap(); \r\n  fetchNeighborhoods();\r\n  fetchCuisines();\r\n});\r\n\r\n/**\r\n * Fetch all neighborhoods and set their HTML.\r\n */\r\nfetchNeighborhoods = () => {\r\n  DBHelper.fetchNeighborhoods((error, neighborhoods) => {\r\n    if (error) { // Got an error\r\n      console.error(error);\r\n    } else {\r\n      self.neighborhoods = neighborhoods;\r\n      fillNeighborhoodsHTML();\r\n    }\r\n  });\r\n}\r\n\r\n/**\r\n * Set neighborhoods HTML.\r\n */\r\nfillNeighborhoodsHTML = (neighborhoods = self.neighborhoods) => {\r\n  const select = document.getElementById('neighborhoods-select');\r\n  neighborhoods.forEach(neighborhood => {\r\n    const option = document.createElement('option');\r\n    option.innerHTML = neighborhood;\r\n    option.value = neighborhood;\r\n    select.append(option);\r\n  });\r\n}\r\n\r\n/**\r\n * Fetch all cuisines and set their HTML.\r\n */\r\nfetchCuisines = () => {\r\n  DBHelper.fetchCuisines((error, cuisines) => {\r\n    if (error) { // Got an error!\r\n      console.error(error);\r\n    } else {\r\n      self.cuisines = cuisines;\r\n      fillCuisinesHTML();\r\n    }\r\n  });\r\n}\r\n\r\n/**\r\n * Set cuisines HTML.\r\n */\r\nfillCuisinesHTML = (cuisines = self.cuisines) => {\r\n  const select = document.getElementById('cuisines-select');\r\n\r\n  cuisines.forEach(cuisine => {\r\n    const option = document.createElement('option');\r\n    option.innerHTML = cuisine;\r\n    option.value = cuisine;\r\n    select.append(option);\r\n  });\r\n}\r\n\r\n/**\r\n * Initialize leaflet map, called from HTML.\r\n */\r\ninitMap = () => {\r\n  self.newMap = L.map('map', {\r\n        center: [40.722216, -73.987501],\r\n        zoom: 12,\r\n        scrollWheelZoom: false\r\n      });\r\n  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}', {\r\n    mapboxToken: 'pk.eyJ1IjoiamltbXltZXJjYWRvIiwiYSI6ImNqaWtzZWZ1czFlamYzcXBmemNreDg2aDQifQ.YQGY_pIwe5x68Q7q8Dvufw',\r\n    maxZoom: 18,\r\n    attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, ' +\r\n      '<a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, ' +\r\n      'Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\r\n    id: 'mapbox.streets'\r\n  }).addTo(newMap);\r\n\r\n  updateRestaurants();\r\n}\r\n\r\n/**\r\n * Initialize Google map, called from HTML.\r\n\r\nwindow.initMap = () => {\r\n  let loc = {\r\n    lat: 40.722216,\r\n    lng: -73.987501\r\n  };\r\n  self.map = new google.maps.Map(document.getElementById('map'), {\r\n    zoom: 12,\r\n    center: loc,\r\n    scrollwheel: false\r\n  });\r\n  updateRestaurants();\r\n}\r\n */\r\n\r\n\r\n/**\r\n * Update page and map for current restaurants.\r\n */\r\nupdateRestaurants = () => {\r\n  const cSelect = document.getElementById('cuisines-select');\r\n  const nSelect = document.getElementById('neighborhoods-select');\r\n\r\n  const cIndex = cSelect.selectedIndex;\r\n  const nIndex = nSelect.selectedIndex;\r\n\r\n  const cuisine = cSelect[cIndex].value;\r\n  const neighborhood = nSelect[nIndex].value;\r\n\r\n  DBHelper.fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, (error, restaurants) => {\r\n    if (error) { // Got an error!\r\n      console.error(error);\r\n    } else {\r\n      resetRestaurants(restaurants);\r\n      fillRestaurantsHTML();\r\n    }\r\n  })\r\n}\r\n\r\n/**\r\n * Clear current restaurants, their HTML and remove their map markers.\r\n */\r\nresetRestaurants = (restaurants) => {\r\n  // Remove all restaurants\r\n  self.restaurants = [];\r\n  const ul = document.getElementById('restaurants-list');\r\n  ul.innerHTML = '';\r\n\r\n  // Remove all map markers\r\n  if (self.markers) {\r\n    self.markers.forEach(marker => marker.remove());\r\n  }\r\n  self.markers = [];\r\n  self.restaurants = restaurants;\r\n}\r\n\r\n/**\r\n * Create all restaurants HTML and add them to the webpage.\r\n */\r\nfillRestaurantsHTML = (restaurants = self.restaurants) => {\r\n  const ul = document.getElementById('restaurants-list');\r\n  restaurants.forEach(restaurant => {\r\n    ul.append(createRestaurantHTML(restaurant));\r\n  });\r\n  addMarkersToMap();\r\n}\r\n\r\n/**\r\n * Create restaurant HTML.\r\n */\r\ncreateRestaurantHTML = (restaurant) => {\r\n\r\n\r\n  const li = document.createElement('li');\r\n\r\n/*\r\n * Added by Jimmy Mercado\r\n * include aria-label srcset and alt attrib\r\n*/\r\n  li.setAttribute(\"aria-label\", \"restaurant details for \" + restaurant.name);\r\n  \r\n  const imgPath = DBHelper.imageUrlForRestaurant(restaurant);\r\n  //const imgPathFileName = imgPath.substring(0, (imgPath.length - 4));\r\n  // const imgFileExtesion = imgPath.substring((imgPath.length - 4), imgPath.length);\r\n  const imgPathFileName = imgPath;\r\n  const imgFileExtesion = '.jpg';\r\n\r\n  const image = document.createElement('img');\r\n  image.className = 'restaurant-img';\r\n  image.src = imgPathFileName + '_800px' + imgFileExtesion//DBHelper.imageUrlForRestaurant(restaurant);\r\n\r\n  //image.setAttribute('alt', restaurant.photo_description);\r\n  image.setAttribute('alt', 'Photo of ' + restaurant.name);\r\n  image.setAttribute(\"srcset\", imgPathFileName + '_270px' + imgFileExtesion + ' 1140w, ' + imgPathFileName + '_400px' + imgFileExtesion + ' 900w, ' + imgPathFileName + '_270px' + imgFileExtesion + ' 646w, ' + imgPathFileName + '_400px' + imgFileExtesion + ' 645w ' )\r\n\r\n  li.append(image);\r\n\r\n  const name = document.createElement('h3');\r\n  name.innerHTML = restaurant.name;\r\n  li.append(name);\r\n\r\n  const neighborhood = document.createElement('p');\r\n  neighborhood.innerHTML = restaurant.neighborhood;\r\n  li.append(neighborhood);\r\n\r\n  const address = document.createElement('p');\r\n  address.innerHTML = restaurant.address;\r\n  li.append(address);\r\n\r\n  const more = document.createElement('a');\r\n  more.innerHTML = 'View Details';\r\n  more.href = DBHelper.urlForRestaurant(restaurant);\r\n  li.append(more)\r\n\r\n  return li\r\n}\r\n\r\n/**\r\n * Add markers for current restaurants to the map.\r\n */\r\naddMarkersToMap = (restaurants = self.restaurants) => {\r\n  restaurants.forEach(restaurant => {\r\n    // Add marker to the map\r\n    const marker = DBHelper.mapMarkerForRestaurant(restaurant, self.newMap);\r\n    marker.on(\"click\", onClick);\r\n    function onClick() {\r\n      window.location.href = marker.options.url;\r\n    }\r\n    self.markers.push(marker);\r\n  });\r\n\r\n} \r\n/*\r\naddMarkersToMap = (restaurants = self.restaurants) => {\r\n  restaurants.forEach(restaurant => {\r\n    // Add marker to the map\r\n    const marker = DBHelper.mapMarkerForRestaurant(restaurant, self.map);\r\n    google.maps.event.addListener(marker, 'click', () => {\r\n      window.location.href = marker.url\r\n    });\r\n    self.markers.push(marker);\r\n  });\r\n}\r\n*/\r\n\n\n//# sourceURL=webpack:///./js/src/main.js?");

/***/ }),

/***/ "./js/src/restaurant_info.js":
/*!***********************************!*\
  !*** ./js/src/restaurant_info.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//import DBHelper from './dbhelper.js';\n\nlet restaurant;\nvar newMap;\n\n\n/**\n * Initialize map as soon as the page is loaded.\n */\ndocument.addEventListener('DOMContentLoaded', (event) => {  \n  initMap();\n});\n\n/**\n * Initialize leaflet map\n */\ninitMap = () => {\n  fetchRestaurantFromURL((error, restaurant) => {\n    if (error) { // Got an error!\n      console.error(error);\n    } else {      \n      self.newMap = L.map('map', {\n        center: [restaurant.latlng.lat, restaurant.latlng.lng],\n        zoom: 16,\n        scrollWheelZoom: false\n      });\n      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}', {\n        mapboxToken: 'pk.eyJ1IjoiamltbXltZXJjYWRvIiwiYSI6ImNqaWtzZWZ1czFlamYzcXBmemNreDg2aDQifQ.YQGY_pIwe5x68Q7q8Dvufw',\n        maxZoom: 18,\n        attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, ' +\n          '<a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, ' +\n          'Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n        id: 'mapbox.streets'    \n      }).addTo(newMap);\n      fillBreadcrumb();\n      DBHelper.mapMarkerForRestaurant(self.restaurant, self.newMap);\n    }\n  });\n}\n\n/**\n* Initialize Google map, called from HTML.\n\nwindow.initMap = () => {\n  fetchRestaurantFromURL((error, restaurant) => {\n    if (error) { // Got an error!\n      console.error(error);\n    } else {\n      self.map = new google.maps.Map(document.getElementById('map'), {\n        zoom: 16,\n        center: restaurant.latlng,\n        scrollwheel: false\n      });\n      fillBreadcrumb();\n      DBHelper.mapMarkerForRestaurant(self.restaurant, self.map);\n    }\n  });\n}\n */\n\n\n/**\n * Get current restaurant from page URL.\n */\nfetchRestaurantFromURL = (callback) => {\n  if (self.restaurant) { // restaurant already fetched!\n    callback(null, self.restaurant)\n    return;\n  }\n  const id = getParameterByName('id');\n  if (!id) { // no id found in URL\n    error = 'No restaurant id in URL'\n    callback(error, null);\n  } else {\n    DBHelper.fetchRestaurantById(id, (error, restaurant) => {\n      self.restaurant = restaurant;\n      if (!restaurant) {\n        console.error(error);\n        return;\n      }\n      fillRestaurantHTML();\n      callback(null, restaurant)\n    });\n  }\n}\n\n/**\n * Create restaurant HTML and add it to the webpage\n */\nfillRestaurantHTML = (restaurant = self.restaurant) => {\n  const name = document.getElementById('restaurant-name');\n  name.innerHTML = restaurant.name;\n\n  const address = document.getElementById('restaurant-address');\n  address.innerHTML = restaurant.address;\n\n  const image = document.getElementById('restaurant-img');\n  image.className = 'restaurant-img'\n  image.src = DBHelper.imageUrlForRestaurant(restaurant);\n\n/*\n * Added by Jimmy Mercado\n * include srcset and alt attrib\n*/\n//image.setAttribute('alt', restaurant.photo_description);\nimage.setAttribute('alt', 'Photo of ' + restaurant.name);\nconst imgPath = DBHelper.imageUrlForRestaurant(restaurant);\nconst imgPathFileName = imgPath.substring(0, (imgPath.length - 4));\nconst imgFileExtesion = imgPath.substring((imgPath.length - 4), imgPath.length);\nimage.setAttribute(\"srcset\", imgPathFileName + imgFileExtesion + ' 1140w, ' + imgPathFileName + '_400px' + imgFileExtesion + ' 900w, ' + imgPathFileName + '_270px' + imgFileExtesion + ' 650w, ' + imgPathFileName + imgFileExtesion + ' 645w ' )\n\n\n\n  const cuisine = document.getElementById('restaurant-cuisine');\n  cuisine.innerHTML = restaurant.cuisine_type;\n\n  // fill operating hours\n  if (restaurant.operating_hours) {\n    fillRestaurantHoursHTML();\n  }\n  // fill reviews\n  fillReviewsHTML();\n}\n\n/**\n * Create restaurant operating hours HTML table and add it to the webpage.\n */\nfillRestaurantHoursHTML = (operatingHours = self.restaurant.operating_hours) => {\n  const hours = document.getElementById('restaurant-hours');\n  for (let key in operatingHours) {\n    const row = document.createElement('tr');\n\n    const day = document.createElement('td');\n    day.innerHTML = key;\n    row.appendChild(day);\n\n    const time = document.createElement('td');\n    time.innerHTML = operatingHours[key];\n    row.appendChild(time);\n\n    hours.appendChild(row);\n  }\n}\n\n/**\n * Create all reviews HTML and add them to the webpage.\n */\nfillReviewsHTML = (reviews = self.restaurant.reviews) => {\n  const container = document.getElementById('reviews-container');\n  const title = document.createElement('h3');\n  title.innerHTML = 'Reviews';\n  title.setAttribute('tabindex', 0);\n  container.appendChild(title);\n\n  if (!reviews) {\n    const noReviews = document.createElement('p');\n    noReviews.innerHTML = 'No reviews yet!';\n    noReviews.setAttribute('tabindex', 0);\n    container.appendChild(noReviews);\n    return;\n  }\n  const ul = document.getElementById('reviews-list');\n  reviews.forEach(review => {\n    ul.appendChild(createReviewHTML(review));\n  });\n  container.appendChild(ul);\n}\n\n/**\n * Create review HTML and add it to the webpage.\n */\ncreateReviewHTML_OLD = (review) => {\n  const li = document.createElement('li');\n  const name = document.createElement('p');\n  name.innerHTML = review.name;\n  li.appendChild(name);\n\n  const date = document.createElement('p');\n  date.innerHTML = review.date;\n  li.appendChild(date);\n\n  const rating = document.createElement('p');\n  rating.innerHTML = `Rating: ${review.rating}`;\n  li.appendChild(rating);\n\n  const comments = document.createElement('p');\n  comments.innerHTML = review.comments;\n  li.appendChild(comments);\n\n  return li;\n}\n/*\n * Added by Jimmy Mercado\n * Create review HTML and add it to the webpage.\n*/\ncreateReviewHTML = (review) => {\n  const li = document.createElement('li');\n  //encapsulate with div tag\n  const div = document.createElement('div');\n  div.className = 'reviewHeader';\n  const name = document.createElement('p');\n  name.innerHTML = review.name;\n  name.setAttribute('tabindex', 0);\n  //li.appendChild(name);\n\n  const date = document.createElement('p');\n  date.innerHTML = review.date;\n  date.setAttribute('tabindex', 0);\n  //li.appendChild(date);\n  div.innerHTML = name.outerHTML + ' ' + date.outerHTML;\n  li.appendChild(div);\n\n  const rating = document.createElement('div');\n  rating.className = 'ratingBox';\n  rating.innerHTML = `Rating: ${review.rating}`;\n  rating.setAttribute('tabindex', 0);\n  li.appendChild(rating);\n\n  const comments = document.createElement('p');\n  comments.innerHTML = review.comments;\n  li.appendChild(comments);\n\n  return li;\n}\n\n\n/**\n * Add restaurant name to the breadcrumb navigation menu\n */\nfillBreadcrumb = (restaurant=self.restaurant) => {\n  const breadcrumb = document.getElementById('breadcrumb');\n  const li = document.createElement('li');\n  li.innerHTML = restaurant.name;\n  breadcrumb.appendChild(li);\n}\n\n/**\n * Get a parameter by name from page URL.\n */\ngetParameterByName = (name, url) => {\n  if (!url)\n    url = window.location.href;\n  name = name.replace(/[\\[\\]]/g, '\\\\$&');\n  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),\n    results = regex.exec(url);\n  if (!results)\n    return null;\n  if (!results[2])\n    return '';\n  return decodeURIComponent(results[2].replace(/\\+/g, ' '));\n}\n\n\n//# sourceURL=webpack:///./js/src/restaurant_info.js?");

/***/ }),

/***/ 0:
/*!***********************************************************************************************!*\
  !*** multi ./js/src/app.js ./js/src/dbhelper.js ./js/src/main.js ./js/src/restaurant_info.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/src/app.js */\"./js/src/app.js\");\n__webpack_require__(/*! ./js/src/dbhelper.js */\"./js/src/dbhelper.js\");\n__webpack_require__(/*! ./js/src/main.js */\"./js/src/main.js\");\nmodule.exports = __webpack_require__(/*! ./js/src/restaurant_info.js */\"./js/src/restaurant_info.js\");\n\n\n//# sourceURL=webpack:///multi_./js/src/app.js_./js/src/dbhelper.js_./js/src/main.js_./js/src/restaurant_info.js?");

/***/ })

/******/ });