(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("import { Es2Sql } from 'es2sql';\n\nconst API_V = 'v2';\nlet Cartodb = {};\n\nCartodb.__type__ = \"cartodb\";\n\nCartodb.fetch = function (config) {\n  let query, url, urlWithQuery, sql;\n  return new Promise((resolve, reject) => {\n    // parse user and query from url\n    if (config.url) {\n      url = config.url;\n      config.user = Cartodb._parseDatasetUrl(config.url);\n      query = config.url.match(/q=(.*)/g);\n      // otherwise create a default query\n    } else {\n      url = Cartodb._getUrl(config);\n      query = config.query || Cartodb._defaultQuery(config);\n      query.table = config.table;\n      query = encodeURIComponent(Cartodb._getQueryString(query));\n    }\n    urlWithQuery = url + query;\n    // Do fetch\n    fetch(urlWithQuery).then(res => {\n      return res.json();\n    }).then(data => {\n      let output;\n      let fields = Object.keys(data.fields).map(function (val, i) {\n        return { id: val };\n      });\n      output = {\n        fields: fields,\n        rows: data.rows,\n        useMemoryStore: false\n      };\n      resolve(output);\n    }).catch(e => {\n      reject(e);\n    });\n  });\n};\n\nCartodb._getUrl = function (config) {\n  return `https://${ config.user }.cartodb.com/api/${ API_V }/sql?q=`;\n};\n\n// return the non urlencoded query\nCartodb._getQueryString = function (query) {\n  return Es2sql.translate(query);\n};\n\nCartodb._defaultQuery = function (config) {\n  return {\n    table: config.table,\n    user: config.user,\n    from: 0,\n    size: 100\n  };\n};\n\n// exports for testing\nCartodb.Es2sql = Es2sql;\n\n// Get usermame fron url\nCartodb._parseDatasetUrl = function (url) {\n  let s = url.replace(/http(s*):\\/\\//g, '');\n  s = s.split('.')[0];\n  return s;\n};\n\nexport default Cartodb;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJFczJTcWwiLCJBUElfViIsIkNhcnRvZGIiLCJfX3R5cGVfXyIsImZldGNoIiwiY29uZmlnIiwicXVlcnkiLCJ1cmwiLCJ1cmxXaXRoUXVlcnkiLCJzcWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVzZXIiLCJfcGFyc2VEYXRhc2V0VXJsIiwibWF0Y2giLCJfZ2V0VXJsIiwiX2RlZmF1bHRRdWVyeSIsInRhYmxlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2dldFF1ZXJ5U3RyaW5nIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwib3V0cHV0IiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInZhbCIsImkiLCJpZCIsInJvd3MiLCJ1c2VNZW1vcnlTdG9yZSIsImNhdGNoIiwiZSIsIkVzMnNxbCIsInRyYW5zbGF0ZSIsImZyb20iLCJzaXplIiwicyIsInJlcGxhY2UiLCJzcGxpdCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUUEsTUFBUixRQUFxQixRQUFyQjs7QUFFQSxNQUFNQyxRQUFRLElBQWQ7QUFDQSxJQUFJQyxVQUFVLEVBQWQ7O0FBRUFBLFFBQVFDLFFBQVIsR0FBbUIsU0FBbkI7O0FBRUFELFFBQVFFLEtBQVIsR0FBZ0IsVUFBVUMsTUFBVixFQUFrQjtBQUNoQyxNQUFJQyxLQUFKLEVBQVdDLEdBQVgsRUFBZ0JDLFlBQWhCLEVBQThCQyxHQUE5QjtBQUNBLFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUN4QztBQUNBLFFBQUlQLE9BQU9FLEdBQVgsRUFBZ0I7QUFDWkEsWUFBTUYsT0FBT0UsR0FBYjtBQUNIRixhQUFPUSxJQUFQLEdBQWNYLFFBQVFZLGdCQUFSLENBQXlCVCxPQUFPRSxHQUFoQyxDQUFkO0FBQ0FELGNBQVFELE9BQU9FLEdBQVAsQ0FBV1EsS0FBWCxDQUFpQixTQUFqQixDQUFSO0FBQ0Q7QUFDQyxLQUxELE1BS087QUFDSFIsWUFBTUwsUUFBUWMsT0FBUixDQUFnQlgsTUFBaEIsQ0FBTjtBQUNIQyxjQUFRRCxPQUFPQyxLQUFQLElBQWdCSixRQUFRZSxhQUFSLENBQXNCWixNQUF0QixDQUF4QjtBQUNBQyxZQUFNWSxLQUFOLEdBQWNiLE9BQU9hLEtBQXJCO0FBQ0FaLGNBQVFhLG1CQUFtQmpCLFFBQVFrQixlQUFSLENBQXdCZCxLQUF4QixDQUFuQixDQUFSO0FBQ0E7QUFDQ0UsbUJBQWVELE1BQUlELEtBQW5CO0FBQ0Y7QUFDRUYsVUFBTUksWUFBTixFQUNHYSxJQURILENBQ1FDLE9BQU87QUFDWCxhQUFPQSxJQUFJQyxJQUFKLEVBQVA7QUFDRCxLQUhILEVBSUdGLElBSkgsQ0FJUUcsUUFBUTtBQUNaLFVBQUlDLE1BQUo7QUFDQSxVQUFJQyxTQUFTQyxPQUFPQyxJQUFQLENBQVlKLEtBQUtFLE1BQWpCLEVBQXlCRyxHQUF6QixDQUE2QixVQUFTQyxHQUFULEVBQWNDLENBQWQsRUFBaUI7QUFDekQsZUFBTyxFQUFDQyxJQUFJRixHQUFMLEVBQVA7QUFDRCxPQUZZLENBQWI7QUFHQUwsZUFBUztBQUNQQyxnQkFBUUEsTUFERDtBQUVQTyxjQUFPVCxLQUFLUyxJQUZMO0FBR1BDLHdCQUFnQjtBQUhULE9BQVQ7QUFLQXZCLGNBQVFjLE1BQVI7QUFDRCxLQWZILEVBZ0JHVSxLQWhCSCxDQWdCU0MsS0FBSztBQUNWeEIsYUFBT3dCLENBQVA7QUFDRCxLQWxCSDtBQW1CRCxHQWxDTSxDQUFQO0FBbUNELENBckNEOztBQXdDQWxDLFFBQVFjLE9BQVIsR0FBa0IsVUFBVVgsTUFBVixFQUFrQjtBQUNsQyxTQUFRLFlBQVVBLE9BQU9RLElBQUssc0JBQW1CWixLQUFNLFVBQXZEO0FBQ0QsQ0FGRDs7QUFJQTtBQUNBQyxRQUFRa0IsZUFBUixHQUEwQixVQUFVZCxLQUFWLEVBQWlCO0FBQ3pDLFNBQU8rQixPQUFPQyxTQUFQLENBQWlCaEMsS0FBakIsQ0FBUDtBQUNELENBRkQ7O0FBSUFKLFFBQVFlLGFBQVIsR0FBd0IsVUFBVVosTUFBVixFQUFrQjtBQUN4QyxTQUFPO0FBQ0xhLFdBQU9iLE9BQU9hLEtBRFQ7QUFFTEwsVUFBTVIsT0FBT1EsSUFGUjtBQUdMMEIsVUFBTSxDQUhEO0FBSUxDLFVBQU07QUFKRCxHQUFQO0FBTUQsQ0FQRDs7QUFTQTtBQUNBdEMsUUFBUW1DLE1BQVIsR0FBaUJBLE1BQWpCOztBQUVBO0FBQ0FuQyxRQUFRWSxnQkFBUixHQUEyQixVQUFVUCxHQUFWLEVBQWU7QUFDeEMsTUFBSWtDLElBQUlsQyxJQUFJbUMsT0FBSixDQUFZLGdCQUFaLEVBQThCLEVBQTlCLENBQVI7QUFDQUQsTUFBSUEsRUFBRUUsS0FBRixDQUFRLEdBQVIsRUFBYSxDQUFiLENBQUo7QUFDQSxTQUFPRixDQUFQO0FBQ0QsQ0FKRDs7QUFNQSxlQUFldkMsT0FBZiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFczJTcWx9IGZyb20gJ2VzMnNxbCc7XG5cbmNvbnN0IEFQSV9WID0gJ3YyJztcbmxldCBDYXJ0b2RiID0ge307XG5cbkNhcnRvZGIuX190eXBlX18gPSBcImNhcnRvZGJcIjtcblxuQ2FydG9kYi5mZXRjaCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgbGV0IHF1ZXJ5LCB1cmwsIHVybFdpdGhRdWVyeSwgc3FsO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdC8vIHBhcnNlIHVzZXIgYW5kIHF1ZXJ5IGZyb20gdXJsXG5cdFx0aWYgKGNvbmZpZy51cmwpIHtcbiAgICAgIHVybCA9IGNvbmZpZy51cmw7XG5cdFx0XHRjb25maWcudXNlciA9IENhcnRvZGIuX3BhcnNlRGF0YXNldFVybChjb25maWcudXJsKTtcblx0XHRcdHF1ZXJ5ID0gY29uZmlnLnVybC5tYXRjaCgvcT0oLiopL2cpO1xuXHRcdC8vIG90aGVyd2lzZSBjcmVhdGUgYSBkZWZhdWx0IHF1ZXJ5XG5cdFx0fSBlbHNlIHtcbiAgICAgIHVybCA9IENhcnRvZGIuX2dldFVybChjb25maWcpO1xuXHRcdFx0cXVlcnkgPSBjb25maWcucXVlcnkgfHwgQ2FydG9kYi5fZGVmYXVsdFF1ZXJ5KGNvbmZpZyk7XG5cdFx0XHRxdWVyeS50YWJsZSA9IGNvbmZpZy50YWJsZTtcblx0XHRcdHF1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KENhcnRvZGIuX2dldFF1ZXJ5U3RyaW5nKHF1ZXJ5KSk7XG5cdFx0fVxuICAgIHVybFdpdGhRdWVyeSA9IHVybCtxdWVyeTtcblx0XHQvLyBEbyBmZXRjaFxuICAgIGZldGNoKHVybFdpdGhRdWVyeSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBsZXQgb3V0cHV0O1xuICAgICAgICBsZXQgZmllbGRzID0gT2JqZWN0LmtleXMoZGF0YS5maWVsZHMpLm1hcChmdW5jdGlvbih2YWwsIGkpIHtcbiAgICAgICAgICByZXR1cm4ge2lkOiB2YWx9O1xuICAgICAgICB9KTtcbiAgICAgICAgb3V0cHV0ID0ge1xuICAgICAgICAgIGZpZWxkczogZmllbGRzLFxuICAgICAgICAgIHJvd3M6ICBkYXRhLnJvd3MsXG4gICAgICAgICAgdXNlTWVtb3J5U3RvcmU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHJlc29sdmUob3V0cHV0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH0pO1xuXHRcdH0pO1xufTtcblxuXG5DYXJ0b2RiLl9nZXRVcmwgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBgaHR0cHM6Ly8ke2NvbmZpZy51c2VyfS5jYXJ0b2RiLmNvbS9hcGkvJHtBUElfVn0vc3FsP3E9YFxufTtcblxuLy8gcmV0dXJuIHRoZSBub24gdXJsZW5jb2RlZCBxdWVyeVxuQ2FydG9kYi5fZ2V0UXVlcnlTdHJpbmcgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgcmV0dXJuIEVzMnNxbC50cmFuc2xhdGUocXVlcnkpO1xufTtcblxuQ2FydG9kYi5fZGVmYXVsdFF1ZXJ5ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4ge1xuICAgIHRhYmxlOiBjb25maWcudGFibGUsXG4gICAgdXNlcjogY29uZmlnLnVzZXIsXG4gICAgZnJvbTogMCxcbiAgICBzaXplOiAxMDBcbiAgfVxufVxuXG4vLyBleHBvcnRzIGZvciB0ZXN0aW5nXG5DYXJ0b2RiLkVzMnNxbCA9IEVzMnNxbDtcblxuLy8gR2V0IHVzZXJtYW1lIGZyb24gdXJsXG5DYXJ0b2RiLl9wYXJzZURhdGFzZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIGxldCBzID0gdXJsLnJlcGxhY2UoL2h0dHAocyopOlxcL1xcLy9nLCAnJyk7XG4gIHMgPSBzLnNwbGl0KCcuJylbMF07XG4gIHJldHVybiBzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydG9kYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ])
});
;