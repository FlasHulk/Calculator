/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

var backblaze = {
  minSum: 7,
  priceStorage: 0.005,
  priceTransfer: 0.01,
  fullPrice: calcFullPrice
},
    bunny = {
  minSum: 0,
  maxSum: 10,
  priceStorage: 0.01,
  priceTransfer: 0.01,
  fullPrice: calcFullPrice
},
    scaleway = {
  minSum: 0,
  priceStorage: 0.06,
  priceTransfer: 0.02,
  fullPrice: calcFullPrice
},
    vultr = {
  minSum: 5,
  priceStorage: 0.01,
  priceTransfer: 0.01,
  fullPrice: calcFullPrice
};
var inputStorage = document.getElementById('storage');
var inputTransfer = document.getElementById('transfer');
var storage = inputStorage.value,
    transfer = inputTransfer.value;
var inputHDD = document.getElementById('type-disk1');
var inputSSD = document.getElementById('type-disk2');
var inputMulti = document.getElementById('type-options1');
var inputSingle = document.getElementById('type-options2');
var diskTypes = document.getElementsByName('type-disk');
var optionTypes = document.getElementsByName('type-options');
startAll();
setPriceStorage(bunny, calcStorageOnDisk, diskTypes);
setPriceStorage(scaleway, calcStorageOnOptions, optionTypes);
setPriceTransfer(scaleway);
inputStorage.addEventListener('input', function (e) {
  storage = e.target.value;
  setPriceStorage(scaleway, calcStorageOnOptions, optionTypes);
  setPriceTransfer(scaleway);
  startAll();
});
inputTransfer.addEventListener('input', function (e) {
  transfer = e.target.value;
  setPriceStorage(scaleway, calcStorageOnOptions, optionTypes);
  setPriceTransfer(scaleway);
  startAll();
});
inputHDD.addEventListener('change', function () {
  setPriceStorage(bunny, calcStorageOnDisk, diskTypes);
  startAll();
});
inputSSD.addEventListener('change', function () {
  setPriceStorage(bunny, calcStorageOnDisk, diskTypes);
  startAll();
});
inputMulti.addEventListener('change', function () {
  setPriceStorage(scaleway, calcStorageOnOptions, optionTypes);
  startAll();
});
inputSingle.addEventListener('change', function () {
  setPriceStorage(scaleway, calcStorageOnOptions, optionTypes);
  startAll();
});

function calcFullPrice(storage, transfer) {
  var price = storage * this.priceStorage + transfer * this.priceTransfer;

  if (price > this.maxSum) {
    price = this.maxSum;
  }

  return price <= this.minSum ? this.minSum : price;
}

function calcStorageOnDisk(typeDisk) {
  switch (typeDisk) {
    case 'HDD':
      return 0.01;
      break;

    case 'SSD':
      return 0.02;
      break;

    default:
      return 0.01;
  }
}

function calcStorageOnOptions(options) {
  switch (options) {
    case 'Multi':
      return storage <= 75 ? 0 : 0.06;
      break;

    case 'Single':
      return storage <= 75 ? 0 : 0.03;
      break;

    default:
      return storage <= 75 ? 0 : 0.06;
  }
}

function calcTransferOnSize() {
  return transfer <= 75 ? 0 : 0.02;
}

function findChecked(array) {
  return Array.from(array).find(function (radio) {
    return radio.checked;
  }).value;
}

function setPriceStorage(obj, func, array) {
  obj.priceStorage = func(findChecked(array));
}

function setPriceTransfer(odj) {
  odj.priceTransfer = calcTransferOnSize();
}

function startAll() {
  var htmlPrice = document.querySelectorAll('.calculator-result li .price'),
      htmlBar = document.querySelectorAll('.calculator-result li .progress'),
      prices = [backblaze.fullPrice(storage, transfer), bunny.fullPrice(storage, transfer), scaleway.fullPrice(storage, transfer), vultr.fullPrice(storage, transfer)];
  inputStorage.closest('.calculator-data__input').querySelector('p').setAttribute('data-value', storage);
  inputTransfer.closest('.calculator-data__input').querySelector('p').setAttribute('data-value', transfer);
  htmlPrice.forEach(function (item, key) {
    item.closest('.calculator-result li').classList.remove("max");
    item.setAttribute('data-price', prices[key]);
  });
  var indexMaxEl = prices.indexOf(Math.max.apply(null, prices));
  htmlPrice[indexMaxEl].closest('.calculator-result li').classList.add("max");

  if (window.innerWidth > 767) {
    htmlBar.forEach(function (item, key) {
      item.style.width = "".concat(100 * prices[key] / 100, "%");
    });
  } else {
    htmlBar.forEach(function (item, key) {
      item.style.height = "".concat(100 * prices[key] / 100, "%");
    });
  }
}

/***/ }),

/***/ "./resources/scss/main.scss":
/*!**********************************!*\
  !*** ./resources/scss/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/app": 0,
/******/ 			"assets/css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/main"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/main"], () => (__webpack_require__("./resources/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map