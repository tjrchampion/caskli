module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/_id","2":"pages/account/login","3":"pages/account/register","4":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue-feather-icons");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(13).default
module.exports.__inject__ = function (context) {
  add("3191d5ad", content, true, context)
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 9 */
/***/ (function(module, exports) {



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 17 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"protocol\":\"http\",\"domain\":\"theporndude.com\",\"path\":\"go/xhamster.com\",\"subdomain\":null,\"host\":\"theporndude\",\"tld\":\"com\",\"parent_domain\":\"theporndude.com\"},{\"protocol\":\"http\",\"domain\":\"www.xvideos.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"xvideos\",\"tld\":\"com\",\"parent_domain\":\"xvideos.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornhub.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornhub\",\"tld\":\"com\",\"parent_domain\":\"pornhub.com\"},{\"protocol\":\"http\",\"domain\":\"www.youporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"youporn\",\"tld\":\"com\",\"parent_domain\":\"youporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.tube8.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tube8\",\"tld\":\"com\",\"parent_domain\":\"tube8.com\"},{\"protocol\":\"http\",\"domain\":\"www.youjizz.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"youjizz\",\"tld\":\"com\",\"parent_domain\":\"youjizz.com\"},{\"protocol\":\"http\",\"domain\":\"www.motherless.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"motherless\",\"tld\":\"com\",\"parent_domain\":\"motherless.com\"},{\"protocol\":\"http\",\"domain\":\"www.hardsextube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hardsextube\",\"tld\":\"com\",\"parent_domain\":\"hardsextube.com\"},{\"protocol\":\"http\",\"domain\":\"www.xnxx.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"xnxx\",\"tld\":\"com\",\"parent_domain\":\"xnxx.com\"},{\"protocol\":\"http\",\"domain\":\"www.spankwire.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"spankwire\",\"tld\":\"com\",\"parent_domain\":\"spankwire.com\"},{\"protocol\":\"http\",\"domain\":\"www.beeg.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"beeg\",\"tld\":\"com\",\"parent_domain\":\"beeg.com\"},{\"protocol\":\"http\",\"domain\":\"www.keezmovies.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"keezmovies\",\"tld\":\"com\",\"parent_domain\":\"keezmovies.com\"},{\"protocol\":\"http\",\"domain\":\"www.tubegalore.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tubegalore\",\"tld\":\"com\",\"parent_domain\":\"tubegalore.com\"},{\"protocol\":\"http\",\"domain\":\"www.porn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"porn\",\"tld\":\"com\",\"parent_domain\":\"porn.com\"},{\"protocol\":\"http\",\"domain\":\"www.4tube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"4tube\",\"tld\":\"com\",\"parent_domain\":\"4tube.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornbox.ch\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornbox\",\"tld\":\"ch\",\"parent_domain\":\"pornbox.ch\"},{\"protocol\":\"http\",\"domain\":\"www.xtube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"xtube\",\"tld\":\"com\",\"parent_domain\":\"xtube.com\"},{\"protocol\":\"http\",\"domain\":\"www.yourlust.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"yourlust\",\"tld\":\"com\",\"parent_domain\":\"yourlust.com\"},{\"protocol\":\"http\",\"domain\":\"www.tnaflix.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tnaflix\",\"tld\":\"com\",\"parent_domain\":\"tnaflix.com\"},{\"protocol\":\"http\",\"domain\":\"www.sunporno.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"sunporno\",\"tld\":\"com\",\"parent_domain\":\"sunporno.com\"},{\"protocol\":\"http\",\"domain\":\"www.cliphunter.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"cliphunter\",\"tld\":\"com\",\"parent_domain\":\"cliphunter.com\"},{\"protocol\":\"http\",\"domain\":\"www.slutload.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"slutload\",\"tld\":\"com\",\"parent_domain\":\"slutload.com\"},{\"protocol\":\"http\",\"domain\":\"www.empflix.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"empflix\",\"tld\":\"com\",\"parent_domain\":\"empflix.com\"},{\"protocol\":\"http\",\"domain\":\"www.vid2c.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"vid2c\",\"tld\":\"com\",\"parent_domain\":\"vid2c.com\"},{\"protocol\":\"http\",\"domain\":\"www.xxxbunker.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"xxxbunker\",\"tld\":\"com\",\"parent_domain\":\"xxxbunker.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornyaz.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornyaz\",\"tld\":\"com\",\"parent_domain\":\"pornyaz.com\"},{\"protocol\":\"http\",\"domain\":\"www.overthumbs.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"overthumbs\",\"tld\":\"com\",\"parent_domain\":\"overthumbs.com\"},{\"protocol\":\"http\",\"domain\":\"www.xxxkinky.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"xxxkinky\",\"tld\":\"com\",\"parent_domain\":\"xxxkinky.com\"},{\"protocol\":\"http\",\"domain\":\"www.ah-me.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"ah-me\",\"tld\":\"com\",\"parent_domain\":\"ah-me.com\"},{\"protocol\":\"http\",\"domain\":\"www.eporner.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"eporner\",\"tld\":\"com\",\"parent_domain\":\"eporner.com\"},{\"protocol\":\"http\",\"domain\":\"www.madthumbs.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"madthumbs\",\"tld\":\"com\",\"parent_domain\":\"madthumbs.com\"},{\"protocol\":\"http\",\"domain\":\"www.fastjizz.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fastjizz\",\"tld\":\"com\",\"parent_domain\":\"fastjizz.com\"},{\"protocol\":\"http\",\"domain\":\"www.orgasm.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"orgasm\",\"tld\":\"com\",\"parent_domain\":\"orgasm.com\"},{\"protocol\":\"http\",\"domain\":\"www.bigtits.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bigtits\",\"tld\":\"com\",\"parent_domain\":\"bigtits.com\"},{\"protocol\":\"http\",\"domain\":\"www.userporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"userporn\",\"tld\":\"com\",\"parent_domain\":\"userporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.xogogo.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"xogogo\",\"tld\":\"com\",\"parent_domain\":\"xogogo.com\"},{\"protocol\":\"http\",\"domain\":\"www.spankbang.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"spankbang\",\"tld\":\"com\",\"parent_domain\":\"spankbang.com\"},{\"protocol\":\"http\",\"domain\":\"www.perfectgirls.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"perfectgirls\",\"tld\":\"net\",\"parent_domain\":\"perfectgirls.net\"},{\"protocol\":\"http\",\"domain\":\"www.my18tube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"my18tube\",\"tld\":\"com\",\"parent_domain\":\"my18tube.com\"},{\"protocol\":\"http\",\"domain\":\"www.hdpornstar.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hdpornstar\",\"tld\":\"com\",\"parent_domain\":\"hdpornstar.com\"},{\"protocol\":\"http\",\"domain\":\"www.fapdu.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fapdu\",\"tld\":\"com\",\"parent_domain\":\"fapdu.com\"},{\"protocol\":\"http\",\"domain\":\"www.free18.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"free18\",\"tld\":\"net\",\"parent_domain\":\"free18.net\"},{\"protocol\":\"http\",\"domain\":\"www.stileproject.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"stileproject\",\"tld\":\"com\",\"parent_domain\":\"stileproject.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornative.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornative\",\"tld\":\"com\",\"parent_domain\":\"pornative.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornrabbit.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornrabbit\",\"tld\":\"com\",\"parent_domain\":\"pornrabbit.com\"},{\"protocol\":\"http\",\"domain\":\"www.fucktube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fucktube\",\"tld\":\"com\",\"parent_domain\":\"fucktube.com\"},{\"protocol\":\"http\",\"domain\":\"www.sluttyred.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"sluttyred\",\"tld\":\"com\",\"parent_domain\":\"sluttyred.com\"},{\"protocol\":\"http\",\"domain\":\"www.fux.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fux\",\"tld\":\"com\",\"parent_domain\":\"fux.com\"},{\"protocol\":\"http\",\"domain\":\"www.bustnow.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bustnow\",\"tld\":\"com\",\"parent_domain\":\"bustnow.com\"},{\"protocol\":\"http\",\"domain\":\"www.lubetube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"lubetube\",\"tld\":\"com\",\"parent_domain\":\"lubetube.com\"},{\"protocol\":\"http\",\"domain\":\"www.freudbox.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"freudbox\",\"tld\":\"com\",\"parent_domain\":\"freudbox.com\"},{\"protocol\":\"http\",\"domain\":\"www.definefetish.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"definefetish\",\"tld\":\"com\",\"parent_domain\":\"definefetish.com\"},{\"protocol\":\"http\",\"domain\":\"www.moviesand.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"moviesand\",\"tld\":\"com\",\"parent_domain\":\"moviesand.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornjog.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornjog\",\"tld\":\"com\",\"parent_domain\":\"pornjog.com\"},{\"protocol\":\"http\",\"domain\":\"www.spankingtube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"spankingtube\",\"tld\":\"com\",\"parent_domain\":\"spankingtube.com\"},{\"protocol\":\"http\",\"domain\":\"www.definebabe.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"definebabe\",\"tld\":\"com\",\"parent_domain\":\"definebabe.com\"},{\"protocol\":\"http\",\"domain\":\"www.bondagetube.tv\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bondagetube\",\"tld\":\"tv\",\"parent_domain\":\"bondagetube.tv\"},{\"protocol\":\"http\",\"domain\":\"www.moviesguy.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"moviesguy\",\"tld\":\"com\",\"parent_domain\":\"moviesguy.com\"},{\"protocol\":\"http\",\"domain\":\"www.alotporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"alotporn\",\"tld\":\"com\",\"parent_domain\":\"alotporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.vporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"vporn\",\"tld\":\"com\",\"parent_domain\":\"vporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.bangyoulater.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bangyoulater\",\"tld\":\"com\",\"parent_domain\":\"bangyoulater.com\"},{\"protocol\":\"http\",\"domain\":\"www.thisvid.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"thisvid\",\"tld\":\"com\",\"parent_domain\":\"thisvid.com\"},{\"protocol\":\"http\",\"domain\":\"www.nonktube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"nonktube\",\"tld\":\"com\",\"parent_domain\":\"nonktube.com\"},{\"protocol\":\"http\",\"domain\":\"www.freecreampietube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"freecreampietube\",\"tld\":\"com\",\"parent_domain\":\"freecreampietube.com\"},{\"protocol\":\"http\",\"domain\":\"www.sextube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"sextube\",\"tld\":\"com\",\"parent_domain\":\"sextube.com\"},{\"protocol\":\"http\",\"domain\":\"www.mofosex.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"mofosex\",\"tld\":\"com\",\"parent_domain\":\"mofosex.com\"},{\"protocol\":\"http\",\"domain\":\"www.bravotube.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bravotube\",\"tld\":\"net\",\"parent_domain\":\"bravotube.net\"},{\"protocol\":\"http\",\"domain\":\"www.pinktube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pinktube\",\"tld\":\"com\",\"parent_domain\":\"pinktube.com\"},{\"protocol\":\"http\",\"domain\":\"www.newsfilter.org\",\"path\":\"videos\",\"subdomain\":\"www\",\"host\":\"newsfilter\",\"tld\":\"org\",\"parent_domain\":\"newsfilter.org\"},{\"protocol\":\"http\",\"domain\":\"www.xxxymovies.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"xxxymovies\",\"tld\":\"com\",\"parent_domain\":\"xxxymovies.com\"},{\"protocol\":\"http\",\"domain\":\"www.openaked.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"openaked\",\"tld\":\"com\",\"parent_domain\":\"openaked.com\"},{\"protocol\":\"http\",\"domain\":\"www.x18.xxx\",\"path\":null,\"subdomain\":\"www\",\"host\":\"x18\",\"tld\":\"xxx\",\"parent_domain\":\"x18.xxx\"},{\"protocol\":\"http\",\"domain\":\"anysex.com\",\"path\":null,\"subdomain\":null,\"host\":\"anysex\",\"tld\":\"com\",\"parent_domain\":\"anysex.com\"},{\"protocol\":\"http\",\"domain\":\"www.timtube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"timtube\",\"tld\":\"com\",\"parent_domain\":\"timtube.com\"},{\"protocol\":\"http\",\"domain\":\"www.kosimak.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"kosimak\",\"tld\":\"com\",\"parent_domain\":\"kosimak.com\"},{\"protocol\":\"http\",\"domain\":\"www.hibasex.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hibasex\",\"tld\":\"com\",\"parent_domain\":\"hibasex.com\"},{\"protocol\":\"http\",\"domain\":\"www.halasex.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"halasex\",\"tld\":\"com\",\"parent_domain\":\"halasex.com\"},{\"protocol\":\"http\",\"domain\":\"www.xhamster.com\",\"path\":\"search.php?q=arab&qcat=video\",\"subdomain\":\"www\",\"host\":\"xhamster\",\"tld\":\"com\",\"parent_domain\":\"xhamster.com\"},{\"protocol\":\"http\",\"domain\":\"www.japan-whores.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"japan-whores\",\"tld\":\"com\",\"parent_domain\":\"japan-whores.com\"},{\"protocol\":\"http\",\"domain\":\"www.chicken8.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"chicken8\",\"tld\":\"com\",\"parent_domain\":\"chicken8.com\"},{\"protocol\":\"http\",\"domain\":\"www.asianpornmovies.com\",\"path\":\"videos/\",\"subdomain\":\"www\",\"host\":\"asianpornmovies\",\"tld\":\"com\",\"parent_domain\":\"asianpornmovies.com\"},{\"protocol\":\"http\",\"domain\":\"www.iyottube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"iyottube\",\"tld\":\"com\",\"parent_domain\":\"iyottube.com\"},{\"protocol\":\"http\",\"domain\":\"www.jmetube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"jmetube\",\"tld\":\"com\",\"parent_domain\":\"jmetube.com\"},{\"protocol\":\"http\",\"domain\":\"www.viewasianporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"viewasianporn\",\"tld\":\"com\",\"parent_domain\":\"viewasianporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.jorpetz.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"jorpetz\",\"tld\":\"com\",\"parent_domain\":\"jorpetz.com\"},{\"protocol\":\"http\",\"domain\":\"www.asianfreeporn.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"asianfreeporn\",\"tld\":\"org\",\"parent_domain\":\"asianfreeporn.org\"},{\"protocol\":\"http\",\"domain\":\"www.tokyoporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tokyoporn\",\"tld\":\"com\",\"parent_domain\":\"tokyoporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.avporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"avporn\",\"tld\":\"com\",\"parent_domain\":\"avporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.kuntfutube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"kuntfutube\",\"tld\":\"com\",\"parent_domain\":\"kuntfutube.com\"},{\"protocol\":\"http\",\"domain\":\"www.91porn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"91porn\",\"tld\":\"com\",\"parent_domain\":\"91porn.com\"},{\"protocol\":\"http\",\"domain\":\"www.141tube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"141tube\",\"tld\":\"com\",\"parent_domain\":\"141tube.com\"},{\"protocol\":\"http\",\"domain\":\"www.thisav.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"thisav\",\"tld\":\"com\",\"parent_domain\":\"thisav.com\"},{\"protocol\":\"http\",\"domain\":\"www.mynakal.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"mynakal\",\"tld\":\"com\",\"parent_domain\":\"mynakal.com\"},{\"protocol\":\"http\",\"domain\":\"www.shesfreaky.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"shesfreaky\",\"tld\":\"com\",\"parent_domain\":\"shesfreaky.com\"},{\"protocol\":\"http\",\"domain\":\"www.myfreeblack.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"myfreeblack\",\"tld\":\"com\",\"parent_domain\":\"myfreeblack.com\"},{\"protocol\":\"http\",\"domain\":\"www.hoodamateurs.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hoodamateurs\",\"tld\":\"com\",\"parent_domain\":\"hoodamateurs.com\"},{\"protocol\":\"http\",\"domain\":\"www.ghettotube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"ghettotube\",\"tld\":\"com\",\"parent_domain\":\"ghettotube.com\"},{\"protocol\":\"http\",\"domain\":\"www.blackz.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"blackz\",\"tld\":\"com\",\"parent_domain\":\"blackz.com\"},{\"protocol\":\"http\",\"domain\":\"www.homegrownfreaks.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"homegrownfreaks\",\"tld\":\"net\",\"parent_domain\":\"homegrownfreaks.net\"},{\"protocol\":\"http\",\"domain\":\"www.freeebonytube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"freeebonytube\",\"tld\":\"com\",\"parent_domain\":\"freeebonytube.com\"},{\"protocol\":\"http\",\"domain\":\"www.realghettogirlfriend.xxx\",\"path\":null,\"subdomain\":\"www\",\"host\":\"realghettogirlfriend\",\"tld\":\"xxx\",\"parent_domain\":\"realghettogirlfriend.xxx\"},{\"protocol\":\"http\",\"domain\":\"www.urbanfreakcam.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"urbanfreakcam\",\"tld\":\"com\",\"parent_domain\":\"urbanfreakcam.com\"},{\"protocol\":\"http\",\"domain\":\"www.shegotass.info\",\"path\":null,\"subdomain\":\"www\",\"host\":\"shegotass\",\"tld\":\"info\",\"parent_domain\":\"shegotass.info\"},{\"protocol\":\"http\",\"domain\":\"www.island-freaks.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"island-freaks\",\"tld\":\"com\",\"parent_domain\":\"island-freaks.com\"},{\"protocol\":\"http\",\"domain\":\"www.viewblackporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"viewblackporn\",\"tld\":\"com\",\"parent_domain\":\"viewblackporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.youtwerk.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"youtwerk\",\"tld\":\"com\",\"parent_domain\":\"youtwerk.com\"},{\"protocol\":\"http\",\"domain\":\"www.ratchetblackporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"ratchetblackporn\",\"tld\":\"com\",\"parent_domain\":\"ratchetblackporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.extasytube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"extasytube\",\"tld\":\"com\",\"parent_domain\":\"extasytube.com\"},{\"protocol\":\"http\",\"domain\":\"www.indianpornvideos.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"indianpornvideos\",\"tld\":\"com\",\"parent_domain\":\"indianpornvideos.com\"},{\"protocol\":\"http\",\"domain\":\"www.mastishare.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"mastishare\",\"tld\":\"com\",\"parent_domain\":\"mastishare.com\"},{\"protocol\":\"http\",\"domain\":\"www.indianxtube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"indianxtube\",\"tld\":\"com\",\"parent_domain\":\"indianxtube.com\"},{\"protocol\":\"http\",\"domain\":\"www.thiruttumasala.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"thiruttumasala\",\"tld\":\"com\",\"parent_domain\":\"thiruttumasala.com\"},{\"protocol\":\"http\",\"domain\":\"www.desihoes.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"desihoes\",\"tld\":\"com\",\"parent_domain\":\"desihoes.com\"},{\"protocol\":\"http\",\"domain\":\"www.sexzindian.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"sexzindian\",\"tld\":\"com\",\"parent_domain\":\"sexzindian.com\"},{\"protocol\":\"http\",\"domain\":\"www.indiangilma.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"indiangilma\",\"tld\":\"com\",\"parent_domain\":\"indiangilma.com\"},{\"protocol\":\"http\",\"domain\":\"www.sexzworld.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"sexzworld\",\"tld\":\"com\",\"parent_domain\":\"sexzworld.com\"},{\"protocol\":\"http\",\"domain\":\"www.indiansexztube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"indiansexztube\",\"tld\":\"com\",\"parent_domain\":\"indiansexztube.com\"},{\"protocol\":\"http\",\"domain\":\"www.cnnamador.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"cnnamador\",\"tld\":\"com\",\"parent_domain\":\"cnnamador.com\"},{\"protocol\":\"http\",\"domain\":\"www.hellxx.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hellxx\",\"tld\":\"com\",\"parent_domain\":\"hellxx.com\"},{\"protocol\":\"http\",\"domain\":\"www.nude-latina.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"nude-latina\",\"tld\":\"com\",\"parent_domain\":\"nude-latina.com\"},{\"protocol\":\"http\",\"domain\":\"www.videosamadoresbr.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"videosamadoresbr\",\"tld\":\"com\",\"parent_domain\":\"videosamadoresbr.com\"},{\"protocol\":\"http\",\"domain\":\"www.viewlatinaporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"viewlatinaporn\",\"tld\":\"com\",\"parent_domain\":\"viewlatinaporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.mafiadaputaria.info\",\"path\":null,\"subdomain\":\"www\",\"host\":\"mafiadaputaria\",\"tld\":\"info\",\"parent_domain\":\"mafiadaputaria.info\"},{\"protocol\":\"http\",\"domain\":\"www.deviantclip.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"deviantclip\",\"tld\":\"com\",\"parent_domain\":\"deviantclip.com\"},{\"protocol\":\"http\",\"domain\":\"www.freebdsmtube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"freebdsmtube\",\"tld\":\"com\",\"parent_domain\":\"freebdsmtube.com\"},{\"protocol\":\"http\",\"domain\":\"www.bdsmtubevideos.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bdsmtubevideos\",\"tld\":\"com\",\"parent_domain\":\"bdsmtubevideos.com\"},{\"protocol\":\"http\",\"domain\":\"www.fetishtubevideos.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fetishtubevideos\",\"tld\":\"com\",\"parent_domain\":\"fetishtubevideos.com\"},{\"protocol\":\"http\",\"domain\":\"www.femdom-tube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"femdom-tube\",\"tld\":\"com\",\"parent_domain\":\"femdom-tube.com\"},{\"protocol\":\"http\",\"domain\":\"www.femdom-fetish-tube.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"femdom-fetish-tube\",\"tld\":\"co\",\"parent_domain\":\"femdom-fetish-tube.co\"},{\"protocol\":\"http\",\"domain\":\"www.extremetube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"extremetube\",\"tld\":\"com\",\"parent_domain\":\"extremetube.com\"},{\"protocol\":\"http\",\"domain\":\"www.ballbustingtube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"ballbustingtube\",\"tld\":\"com\",\"parent_domain\":\"ballbustingtube.com\"},{\"protocol\":\"http\",\"domain\":\"www.slavestube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"slavestube\",\"tld\":\"com\",\"parent_domain\":\"slavestube.com\"},{\"protocol\":\"http\",\"domain\":\"www.femdomlibrary.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"femdomlibrary\",\"tld\":\"com\",\"parent_domain\":\"femdomlibrary.com\"},{\"protocol\":\"http\",\"domain\":\"www.humiliation.me\",\"path\":null,\"subdomain\":\"www\",\"host\":\"humiliation\",\"tld\":\"me\",\"parent_domain\":\"humiliation.me\"},{\"protocol\":\"http\",\"domain\":\"www.fetishbox.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fetishbox\",\"tld\":\"com\",\"parent_domain\":\"fetishbox.com\"},{\"protocol\":\"http\",\"domain\":\"www.girlincontrol.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"girlincontrol\",\"tld\":\"com\",\"parent_domain\":\"girlincontrol.com\"},{\"protocol\":\"http\",\"domain\":\"www.bdsmchamber.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bdsmchamber\",\"tld\":\"com\",\"parent_domain\":\"bdsmchamber.com\"},{\"protocol\":\"http\",\"domain\":\"www.bdsmstreak.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bdsmstreak\",\"tld\":\"com\",\"parent_domain\":\"bdsmstreak.com\"},{\"protocol\":\"http\",\"domain\":\"www.dominationtube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"dominationtube\",\"tld\":\"com\",\"parent_domain\":\"dominationtube.com\"},{\"protocol\":\"http\",\"domain\":\"www.myfetishtube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"myfetishtube\",\"tld\":\"com\",\"parent_domain\":\"myfetishtube.com\"},{\"protocol\":\"http\",\"domain\":\"www.heavy-r.com\",\"path\":\"porn_videos/scat\",\"subdomain\":\"www\",\"host\":\"heavy-r\",\"tld\":\"com\",\"parent_domain\":\"heavy-r.com\"},{\"protocol\":\"http\",\"domain\":\"www.eroprofile.com\",\"path\":\"m/videos/home?text=&niche=29\",\"subdomain\":\"www\",\"host\":\"eroprofile\",\"tld\":\"com\",\"parent_domain\":\"eroprofile.com\"},{\"protocol\":\"http\",\"domain\":\"www.dirtyshack.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"dirtyshack\",\"tld\":\"com\",\"parent_domain\":\"dirtyshack.com\"},{\"protocol\":\"http\",\"domain\":\"www.xpee.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"xpee\",\"tld\":\"com\",\"parent_domain\":\"xpee.com\"},{\"protocol\":\"http\",\"domain\":\"www.shitporntube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"shitporntube\",\"tld\":\"com\",\"parent_domain\":\"shitporntube.com\"},{\"protocol\":\"http\",\"domain\":\"www.scatrina.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"scatrina\",\"tld\":\"com\",\"parent_domain\":\"scatrina.com\"},{\"protocol\":\"http\",\"domain\":\"www.kaviar-tube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"kaviar-tube\",\"tld\":\"com\",\"parent_domain\":\"kaviar-tube.com\"},{\"protocol\":\"http\",\"domain\":\"www.findtubes.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"findtubes\",\"tld\":\"com\",\"parent_domain\":\"findtubes.com\"},{\"protocol\":\"http\",\"domain\":\"www.nudevista.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"nudevista\",\"tld\":\"com\",\"parent_domain\":\"nudevista.com\"},{\"protocol\":\"http\",\"domain\":\"www.askjolene.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"askjolene\",\"tld\":\"com\",\"parent_domain\":\"askjolene.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornmd.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornmd\",\"tld\":\"com\",\"parent_domain\":\"pornmd.com\"},{\"protocol\":\"http\",\"domain\":\"www.ro89.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"ro89\",\"tld\":\"com\",\"parent_domain\":\"ro89.com\"},{\"protocol\":\"http\",\"domain\":\"www.tubaholic.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tubaholic\",\"tld\":\"com\",\"parent_domain\":\"tubaholic.com\"},{\"protocol\":\"http\",\"domain\":\"www.bing.com\",\"path\":\"videos/search?qpvt=Porn&q=Porn&qft=+filterui:duration-long+filterui:resolution-tv\",\"subdomain\":\"www\",\"host\":\"bing\",\"tld\":\"com\",\"parent_domain\":\"bing.com\"},{\"protocol\":\"http\",\"domain\":\"www.badjojo.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"badjojo\",\"tld\":\"com\",\"parent_domain\":\"badjojo.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornmaxim.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornmaxim\",\"tld\":\"com\",\"parent_domain\":\"pornmaxim.com\"},{\"protocol\":\"http\",\"domain\":\"www.adultvideofinder.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"adultvideofinder\",\"tld\":\"com\",\"parent_domain\":\"adultvideofinder.com\"},{\"protocol\":\"http\",\"domain\":\"www.bulktube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bulktube\",\"tld\":\"com\",\"parent_domain\":\"bulktube.com\"},{\"protocol\":\"http\",\"domain\":\"www.mrsnake.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"mrsnake\",\"tld\":\"com\",\"parent_domain\":\"mrsnake.com\"},{\"protocol\":\"http\",\"domain\":\"www.realgfporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"realgfporn\",\"tld\":\"com\",\"parent_domain\":\"realgfporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.submityourflicks.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"submityourflicks\",\"tld\":\"com\",\"parent_domain\":\"submityourflicks.com\"},{\"protocol\":\"http\",\"domain\":\"www.homemoviestube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"homemoviestube\",\"tld\":\"com\",\"parent_domain\":\"homemoviestube.com\"},{\"protocol\":\"http\",\"domain\":\"www.empireamateurs.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"empireamateurs\",\"tld\":\"com\",\"parent_domain\":\"empireamateurs.com\"},{\"protocol\":\"http\",\"domain\":\"www.homemadeporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"homemadeporn\",\"tld\":\"com\",\"parent_domain\":\"homemadeporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.eroxia.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"eroxia\",\"tld\":\"com\",\"parent_domain\":\"eroxia.com\"},{\"protocol\":\"http\",\"domain\":\"www.homebangs.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"homebangs\",\"tld\":\"com\",\"parent_domain\":\"homebangs.com\"},{\"protocol\":\"http\",\"domain\":\"www.youramateurporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"youramateurporn\",\"tld\":\"com\",\"parent_domain\":\"youramateurporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.chatroulettetube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"chatroulettetube\",\"tld\":\"com\",\"parent_domain\":\"chatroulettetube.com\"},{\"protocol\":\"http\",\"domain\":\"www.fantasti.cc\",\"path\":\"videos/uploads/\",\"subdomain\":\"www\",\"host\":\"fantasti\",\"tld\":\"cc\",\"parent_domain\":\"fantasti.cc\"},{\"protocol\":\"http\",\"domain\":\"www.voyeurweb.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"voyeurweb\",\"tld\":\"com\",\"parent_domain\":\"voyeurweb.com\"},{\"protocol\":\"http\",\"domain\":\"www.zoig.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"zoig\",\"tld\":\"com\",\"parent_domain\":\"zoig.com\"},{\"protocol\":\"http\",\"domain\":\"www.burningcamel.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"burningcamel\",\"tld\":\"com\",\"parent_domain\":\"burningcamel.com\"},{\"protocol\":\"http\",\"domain\":\"www.swapsmut.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"swapsmut\",\"tld\":\"com\",\"parent_domain\":\"swapsmut.com\"},{\"protocol\":\"http\",\"domain\":\"www.watchersweb.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"watchersweb\",\"tld\":\"com\",\"parent_domain\":\"watchersweb.com\"},{\"protocol\":\"http\",\"domain\":\"www.coomgirls.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"coomgirls\",\"tld\":\"com\",\"parent_domain\":\"coomgirls.com\"},{\"protocol\":\"http\",\"domain\":\"www.fapjacks.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fapjacks\",\"tld\":\"com\",\"parent_domain\":\"fapjacks.com\"},{\"protocol\":\"http\",\"domain\":\"www.amateurs-gone-wild.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"amateurs-gone-wild\",\"tld\":\"com\",\"parent_domain\":\"amateurs-gone-wild.com\"},{\"protocol\":\"http\",\"domain\":\"www.ruleporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"ruleporn\",\"tld\":\"com\",\"parent_domain\":\"ruleporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.cuckold69.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"cuckold69\",\"tld\":\"com\",\"parent_domain\":\"cuckold69.com\"},{\"protocol\":\"http\",\"domain\":\"www.supertangas.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"supertangas\",\"tld\":\"com\",\"parent_domain\":\"supertangas.com\"},{\"protocol\":\"http\",\"domain\":\"www.realteengirls.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"realteengirls\",\"tld\":\"org\",\"parent_domain\":\"realteengirls.org\"},{\"protocol\":\"http\",\"domain\":\"www.amateuralbum.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"amateuralbum\",\"tld\":\"net\",\"parent_domain\":\"amateuralbum.net\"},{\"protocol\":\"http\",\"domain\":\"www.exgfpics.com\",\"path\":\"blog/\",\"subdomain\":\"www\",\"host\":\"exgfpics\",\"tld\":\"com\",\"parent_domain\":\"exgfpics.com\"},{\"protocol\":\"http\",\"domain\":\"www.palevo.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"palevo\",\"tld\":\"com\",\"parent_domain\":\"palevo.com\"},{\"protocol\":\"http\",\"domain\":\"www.xxxaporn.com\",\"path\":\"?ctr=filter&act=videos\",\"subdomain\":\"www\",\"host\":\"xxxaporn\",\"tld\":\"com\",\"parent_domain\":\"xxxaporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.tangotime.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tangotime\",\"tld\":\"com\",\"parent_domain\":\"tangotime.com\"},{\"protocol\":\"http\",\"domain\":\"www.candidvoyeurism.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"candidvoyeurism\",\"tld\":\"com\",\"parent_domain\":\"candidvoyeurism.com\"},{\"protocol\":\"http\",\"domain\":\"www.noviceamateurs.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"noviceamateurs\",\"tld\":\"com\",\"parent_domain\":\"noviceamateurs.com\"},{\"protocol\":\"http\",\"domain\":\"www.perezhilton.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"perezhilton\",\"tld\":\"com\",\"parent_domain\":\"perezhilton.com\"},{\"protocol\":\"http\",\"domain\":\"www.tmz.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tmz\",\"tld\":\"com\",\"parent_domain\":\"tmz.com\"},{\"protocol\":\"http\",\"domain\":\"www.thesuperficial.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"thesuperficial\",\"tld\":\"com\",\"parent_domain\":\"thesuperficial.com\"},{\"protocol\":\"http\",\"domain\":\"www.dlisted.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"dlisted\",\"tld\":\"com\",\"parent_domain\":\"dlisted.com\"},{\"protocol\":\"http\",\"domain\":\"www.justjared.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"justjared\",\"tld\":\"com\",\"parent_domain\":\"justjared.com\"},{\"protocol\":\"http\",\"domain\":\"www.hollywoodtuna.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hollywoodtuna\",\"tld\":\"com\",\"parent_domain\":\"hollywoodtuna.com\"},{\"protocol\":\"http\",\"domain\":\"www.hq-celebrity.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hq-celebrity\",\"tld\":\"com\",\"parent_domain\":\"hq-celebrity.com\"},{\"protocol\":\"http\",\"domain\":\"www.egotastic.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"egotastic\",\"tld\":\"com\",\"parent_domain\":\"egotastic.com\"},{\"protocol\":\"http\",\"domain\":\"www.hotcelebshome.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hotcelebshome\",\"tld\":\"com\",\"parent_domain\":\"hotcelebshome.com\"},{\"protocol\":\"http\",\"domain\":\"www.theybf.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"theybf\",\"tld\":\"com\",\"parent_domain\":\"theybf.com\"},{\"protocol\":\"http\",\"domain\":\"www.hollywoodlife.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hollywoodlife\",\"tld\":\"com\",\"parent_domain\":\"hollywoodlife.com\"},{\"protocol\":\"http\",\"domain\":\"omg.yahoo.com\",\"path\":null,\"subdomain\":\"omg\",\"host\":\"yahoo\",\"tld\":\"com\",\"parent_domain\":\"yahoo.com\"},{\"protocol\":\"http\",\"domain\":\"www.celebuzz.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"celebuzz\",\"tld\":\"com\",\"parent_domain\":\"celebuzz.com\"},{\"protocol\":\"http\",\"domain\":\"www.thehollywoodgossip.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"thehollywoodgossip\",\"tld\":\"com\",\"parent_domain\":\"thehollywoodgossip.com\"},{\"protocol\":\"http\",\"domain\":\"www.onlythebestfakes.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"onlythebestfakes\",\"tld\":\"com\",\"parent_domain\":\"onlythebestfakes.com\"},{\"protocol\":\"http\",\"domain\":\"www.cfake.com\",\"path\":\"home\",\"subdomain\":\"www\",\"host\":\"cfake\",\"tld\":\"com\",\"parent_domain\":\"cfake.com\"},{\"protocol\":\"http\",\"domain\":\"www.bcfakes.com\",\"path\":\"celebritylist/\",\"subdomain\":\"www\",\"host\":\"bcfakes\",\"tld\":\"com\",\"parent_domain\":\"bcfakes.com\"},{\"protocol\":\"http\",\"domain\":\"www.cfakers.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"cfakers\",\"tld\":\"com\",\"parent_domain\":\"cfakers.com\"},{\"protocol\":\"http\",\"domain\":\"www.celebrity-hq.co.uk\",\"path\":\"main.php\",\"subdomain\":\"www\",\"host\":\"celebrity-hq\",\"tld\":\"co.uk\",\"parent_domain\":\"celebrity-hq.co.uk\"},{\"protocol\":\"http\",\"domain\":\"www.gagreport.com\",\"path\":\"top_50_Free_Celebrity_Fake_List.htm\",\"subdomain\":\"www\",\"host\":\"gagreport\",\"tld\":\"com\",\"parent_domain\":\"gagreport.com\"},{\"protocol\":\"http\",\"domain\":\"www.nakedcelebgallery.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"nakedcelebgallery\",\"tld\":\"com\",\"parent_domain\":\"nakedcelebgallery.com\"},{\"protocol\":\"http\",\"domain\":\"www.famousboard.com\",\"path\":\"forums/9-Celebrity-Fakes\",\"subdomain\":\"www\",\"host\":\"famousboard\",\"tld\":\"com\",\"parent_domain\":\"famousboard.com\"},{\"protocol\":\"http\",\"domain\":\"www.fakethebitch.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fakethebitch\",\"tld\":\"com\",\"parent_domain\":\"fakethebitch.com\"},{\"protocol\":\"http\",\"domain\":\"www.hentaistream.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hentaistream\",\"tld\":\"com\",\"parent_domain\":\"hentaistream.com\"},{\"protocol\":\"http\",\"domain\":\"www.hentaitube.tv\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hentaitube\",\"tld\":\"tv\",\"parent_domain\":\"hentaitube.tv\"},{\"protocol\":\"http\",\"domain\":\"www.tubehentai.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tubehentai\",\"tld\":\"com\",\"parent_domain\":\"tubehentai.com\"},{\"protocol\":\"http\",\"domain\":\"www.cartoonporntube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"cartoonporntube\",\"tld\":\"com\",\"parent_domain\":\"cartoonporntube.com\"},{\"protocol\":\"http\",\"domain\":\"www.hbrowse.com\",\"path\":\"browse\",\"subdomain\":\"www\",\"host\":\"hbrowse\",\"tld\":\"com\",\"parent_domain\":\"hbrowse.com\"},{\"protocol\":\"http\",\"domain\":\"www.gelbooru.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"gelbooru\",\"tld\":\"com\",\"parent_domain\":\"gelbooru.com\"},{\"protocol\":\"http\",\"domain\":\"www.fakku.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fakku\",\"tld\":\"net\",\"parent_domain\":\"fakku.net\"},{\"protocol\":\"http\",\"domain\":\"www.hentaicrunch.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hentaicrunch\",\"tld\":\"com\",\"parent_domain\":\"hentaicrunch.com\"},{\"protocol\":\"http\",\"domain\":\"www.animephile.com\",\"path\":\"hentai\",\"subdomain\":\"www\",\"host\":\"animephile\",\"tld\":\"com\",\"parent_domain\":\"animephile.com\"},{\"protocol\":\"http\",\"domain\":\"chan.sankakucomplex.com\",\"path\":null,\"subdomain\":\"chan\",\"host\":\"sankakucomplex\",\"tld\":\"com\",\"parent_domain\":\"sankakucomplex.com\"},{\"protocol\":\"http\",\"domain\":\"www.hentai-foundry.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hentai-foundry\",\"tld\":\"com\",\"parent_domain\":\"hentai-foundry.com\"},{\"protocol\":\"http\",\"domain\":\"www.luscious.net\",\"path\":\"c/hentai/\",\"subdomain\":\"www\",\"host\":\"luscious\",\"tld\":\"net\",\"parent_domain\":\"luscious.net\"},{\"protocol\":\"http\",\"domain\":\"www.hentairules.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hentairules\",\"tld\":\"net\",\"parent_domain\":\"hentairules.net\"},{\"protocol\":\"http\",\"domain\":\"www.doujin-moe.us\",\"path\":\"main.html\",\"subdomain\":\"www\",\"host\":\"doujin-moe\",\"tld\":\"us\",\"parent_domain\":\"doujin-moe.us\"},{\"protocol\":\"http\",\"domain\":\"www.rule34.xxx\",\"path\":\"index.php?page=post&s=list\",\"subdomain\":\"www\",\"host\":\"rule34\",\"tld\":\"xxx\",\"parent_domain\":\"rule34.xxx\"},{\"protocol\":\"http\",\"domain\":\"www.doujinland.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"doujinland\",\"tld\":\"com\",\"parent_domain\":\"doujinland.com\"},{\"protocol\":\"http\",\"domain\":\"www.sahadou.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"sahadou\",\"tld\":\"com\",\"parent_domain\":\"sahadou.com\"},{\"protocol\":\"http\",\"domain\":\"www.hentai.ms\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hentai\",\"tld\":\"ms\",\"parent_domain\":\"hentai.ms\"},{\"protocol\":\"http\",\"domain\":\"g.e-hentai.org\",\"path\":null,\"subdomain\":\"g\",\"host\":\"e-hentai\",\"tld\":\"org\",\"parent_domain\":\"e-hentai.org\"},{\"protocol\":\"http\",\"domain\":\"www.hentai4manga.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hentai4manga\",\"tld\":\"com\",\"parent_domain\":\"hentai4manga.com\"},{\"protocol\":\"http\",\"domain\":\"www.myhentai.tv\",\"path\":null,\"subdomain\":\"www\",\"host\":\"myhentai\",\"tld\":\"tv\",\"parent_domain\":\"myhentai.tv\"},{\"protocol\":\"http\",\"domain\":\"www.aerisdies.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"aerisdies\",\"tld\":\"com\",\"parent_domain\":\"aerisdies.com\"},{\"protocol\":\"http\",\"domain\":\"www.c.urvy.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"c\",\"tld\":\"urvy.org\",\"parent_domain\":\"c.urvy.org\"},{\"protocol\":\"http\",\"domain\":\"www.slimythief.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"slimythief\",\"tld\":\"com\",\"parent_domain\":\"slimythief.com\"},{\"protocol\":\"http\",\"domain\":\"www.pepsaga.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pepsaga\",\"tld\":\"com\",\"parent_domain\":\"pepsaga.com\"},{\"protocol\":\"http\",\"domain\":\"www.menagea3.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"menagea3\",\"tld\":\"net\",\"parent_domain\":\"menagea3.net\"},{\"protocol\":\"http\",\"domain\":\"www.kitnkayboodle.comicgenesis.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"kitnkayboodle\",\"tld\":\"comicgenesis.com\",\"parent_domain\":\"kitnkayboodle.comicgenesis.com\"},{\"protocol\":\"http\",\"domain\":\"www.lushstories.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"lushstories\",\"tld\":\"com\",\"parent_domain\":\"lushstories.com\"},{\"protocol\":\"http\",\"domain\":\"www.asstr.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"asstr\",\"tld\":\"org\",\"parent_domain\":\"asstr.org\"},{\"protocol\":\"http\",\"domain\":\"www.eroticast.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"eroticast\",\"tld\":\"net\",\"parent_domain\":\"eroticast.net\"},{\"protocol\":\"http\",\"domain\":\"www.literotica.com\",\"path\":\"stories/index.php\",\"subdomain\":\"www\",\"host\":\"literotica\",\"tld\":\"com\",\"parent_domain\":\"literotica.com\"},{\"protocol\":\"http\",\"domain\":\"www.mcstories.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"mcstories\",\"tld\":\"com\",\"parent_domain\":\"mcstories.com\"},{\"protocol\":\"http\",\"domain\":\"www.t-s-s-a.com\",\"path\":\"stories/updates.php\",\"subdomain\":\"www\",\"host\":\"t-s-s-a\",\"tld\":\"com\",\"parent_domain\":\"t-s-s-a.com\"},{\"protocol\":\"http\",\"domain\":\"www.nifty.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"nifty\",\"tld\":\"org\",\"parent_domain\":\"nifty.org\"},{\"protocol\":\"http\",\"domain\":\"www.bdsmlibrary.com\",\"path\":\"stories/\",\"subdomain\":\"www\",\"host\":\"bdsmlibrary\",\"tld\":\"com\",\"parent_domain\":\"bdsmlibrary.com\"},{\"protocol\":\"http\",\"domain\":\"www.jessfink.com\",\"path\":\"Chester5000XYV/\",\"subdomain\":\"www\",\"host\":\"jessfink\",\"tld\":\"com\",\"parent_domain\":\"jessfink.com\"},{\"protocol\":\"http\",\"domain\":\"www.adultsexgames.xxx\",\"path\":null,\"subdomain\":\"www\",\"host\":\"adultsexgames\",\"tld\":\"xxx\",\"parent_domain\":\"adultsexgames.xxx\"},{\"protocol\":\"http\",\"domain\":\"www.mysexgames.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"mysexgames\",\"tld\":\"com\",\"parent_domain\":\"mysexgames.com\"},{\"protocol\":\"http\",\"domain\":\"www.funny-games.biz\",\"path\":\"porn-games.html\",\"subdomain\":\"www\",\"host\":\"funny-games\",\"tld\":\"biz\",\"parent_domain\":\"funny-games.biz\"},{\"protocol\":\"http\",\"domain\":\"www.2adultflashgames.com\",\"path\":\"new_adult_games.htm?numdisp=100&sort=age\",\"subdomain\":\"www\",\"host\":\"2adultflashgames\",\"tld\":\"com\",\"parent_domain\":\"2adultflashgames.com\"},{\"protocol\":\"http\",\"domain\":\"www.clitgames.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"clitgames\",\"tld\":\"com\",\"parent_domain\":\"clitgames.com\"},{\"protocol\":\"http\",\"domain\":\"www.hornygamer.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hornygamer\",\"tld\":\"com\",\"parent_domain\":\"hornygamer.com\"},{\"protocol\":\"http\",\"domain\":\"www.anonib.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"anonib\",\"tld\":\"com\",\"parent_domain\":\"anonib.com\"},{\"protocol\":\"http\",\"domain\":\"www.ichan.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"ichan\",\"tld\":\"org\",\"parent_domain\":\"ichan.org\"},{\"protocol\":\"http\",\"domain\":\"boards.4chan.org\",\"path\":\"s/\",\"subdomain\":\"boards\",\"host\":\"4chan\",\"tld\":\"org\",\"parent_domain\":\"4chan.org\"},{\"protocol\":\"http\",\"domain\":\"www.porn-chan.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"porn-chan\",\"tld\":\"com\",\"parent_domain\":\"porn-chan.com\"},{\"protocol\":\"http\",\"domain\":\"www.7chan.org\",\"path\":\"s/\",\"subdomain\":\"www\",\"host\":\"7chan\",\"tld\":\"org\",\"parent_domain\":\"7chan.org\"},{\"protocol\":\"http\",\"domain\":\"boards.420chan.org\",\"path\":\"sa/\",\"subdomain\":\"boards\",\"host\":\"420chan\",\"tld\":\"org\",\"parent_domain\":\"420chan.org\"},{\"protocol\":\"http\",\"domain\":\"www.wetchan.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"wetchan\",\"tld\":\"org\",\"parent_domain\":\"wetchan.org\"},{\"protocol\":\"http\",\"domain\":\"www.xxxchan.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"xxxchan\",\"tld\":\"org\",\"parent_domain\":\"xxxchan.org\"},{\"protocol\":\"http\",\"domain\":\"www.4chon.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"4chon\",\"tld\":\"org\",\"parent_domain\":\"4chon.org\"},{\"protocol\":\"http\",\"domain\":\"www.adultvideodump.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"adultvideodump\",\"tld\":\"com\",\"parent_domain\":\"adultvideodump.com\"},{\"protocol\":\"http\",\"domain\":\"www.fucking1.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fucking1\",\"tld\":\"com\",\"parent_domain\":\"fucking1.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornvids69.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornvids69\",\"tld\":\"com\",\"parent_domain\":\"pornvids69.com\"},{\"protocol\":\"http\",\"domain\":\"www.sexyvideodump.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"sexyvideodump\",\"tld\":\"com\",\"parent_domain\":\"sexyvideodump.com\"},{\"protocol\":\"http\",\"domain\":\"www.pinayfresh.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pinayfresh\",\"tld\":\"com\",\"parent_domain\":\"pinayfresh.com\"},{\"protocol\":\"http\",\"domain\":\"www.fuckbook18.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fuckbook18\",\"tld\":\"com\",\"parent_domain\":\"fuckbook18.com\"},{\"protocol\":\"http\",\"domain\":\"www.adultdumper.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"adultdumper\",\"tld\":\"com\",\"parent_domain\":\"adultdumper.com\"},{\"protocol\":\"http\",\"domain\":\"www.thesexdump.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"thesexdump\",\"tld\":\"com\",\"parent_domain\":\"thesexdump.com\"},{\"protocol\":\"http\",\"domain\":\"www.18pornsearch.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"18pornsearch\",\"tld\":\"com\",\"parent_domain\":\"18pornsearch.com\"},{\"protocol\":\"http\",\"domain\":\"www.fuckingdumpit.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fuckingdumpit\",\"tld\":\"com\",\"parent_domain\":\"fuckingdumpit.com\"},{\"protocol\":\"http\",\"domain\":\"www.fuckinglink.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fuckinglink\",\"tld\":\"com\",\"parent_domain\":\"fuckinglink.com\"},{\"protocol\":\"http\",\"domain\":\"www.topadultdump.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"topadultdump\",\"tld\":\"com\",\"parent_domain\":\"topadultdump.com\"},{\"protocol\":\"http\",\"domain\":\"www.efukt.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"efukt\",\"tld\":\"com\",\"parent_domain\":\"efukt.com\"},{\"protocol\":\"http\",\"domain\":\"www.thatsphucked.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"thatsphucked\",\"tld\":\"com\",\"parent_domain\":\"thatsphucked.com\"},{\"protocol\":\"http\",\"domain\":\"www.joyreactor.com\",\"path\":\"tag/porn/all\",\"subdomain\":\"www\",\"host\":\"joyreactor\",\"tld\":\"com\",\"parent_domain\":\"joyreactor.com\"},{\"protocol\":\"http\",\"domain\":\"www.omegle.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"omegle\",\"tld\":\"com\",\"parent_domain\":\"omegle.com\"},{\"protocol\":\"http\",\"domain\":\"www.dirtyroulette.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"dirtyroulette\",\"tld\":\"com\",\"parent_domain\":\"dirtyroulette.com\"},{\"protocol\":\"http\",\"domain\":\"www.chatroulette.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"chatroulette\",\"tld\":\"com\",\"parent_domain\":\"chatroulette.com\"},{\"protocol\":\"http\",\"domain\":\"www.yoloflip.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"yoloflip\",\"tld\":\"com\",\"parent_domain\":\"yoloflip.com\"},{\"protocol\":\"http\",\"domain\":\"www.bazoocam.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bazoocam\",\"tld\":\"org\",\"parent_domain\":\"bazoocam.org\"},{\"protocol\":\"http\",\"domain\":\"www.sex.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"sex\",\"tld\":\"com\",\"parent_domain\":\"sex.com\"},{\"protocol\":\"http\",\"domain\":\"www.pinsex.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pinsex\",\"tld\":\"com\",\"parent_domain\":\"pinsex.com\"},{\"protocol\":\"http\",\"domain\":\"www.punchpin.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"punchpin\",\"tld\":\"com\",\"parent_domain\":\"punchpin.com\"},{\"protocol\":\"http\",\"domain\":\"www.weluvporn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"weluvporn\",\"tld\":\"com\",\"parent_domain\":\"weluvporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.snatchly.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"snatchly\",\"tld\":\"com\",\"parent_domain\":\"snatchly.com\"},{\"protocol\":\"http\",\"domain\":\"www.lustpin.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"lustpin\",\"tld\":\"com\",\"parent_domain\":\"lustpin.com\"},{\"protocol\":\"http\",\"domain\":\"www.smutty.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"smutty\",\"tld\":\"com\",\"parent_domain\":\"smutty.com\"},{\"protocol\":\"http\",\"domain\":\"www.pinme.xxx\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pinme\",\"tld\":\"xxx\",\"parent_domain\":\"pinme.xxx\"},{\"protocol\":\"http\",\"domain\":\"www.pornopin.me\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornopin\",\"tld\":\"me\",\"parent_domain\":\"pornopin.me\"},{\"protocol\":\"http\",\"domain\":\"www.pingay.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pingay\",\"tld\":\"com\",\"parent_domain\":\"pingay.com\"},{\"protocol\":\"http\",\"domain\":\"www.fuskator.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fuskator\",\"tld\":\"com\",\"parent_domain\":\"fuskator.com\"},{\"protocol\":\"http\",\"domain\":\"www.hellokisses.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hellokisses\",\"tld\":\"com\",\"parent_domain\":\"hellokisses.com\"},{\"protocol\":\"http\",\"domain\":\"www.sexit.fr\",\"path\":null,\"subdomain\":\"www\",\"host\":\"sexit\",\"tld\":\"fr\",\"parent_domain\":\"sexit.fr\"},{\"protocol\":\"http\",\"domain\":\"nude.bustybay.com\",\"path\":null,\"subdomain\":\"nude\",\"host\":\"bustybay\",\"tld\":\"com\",\"parent_domain\":\"bustybay.com\"},{\"protocol\":\"http\",\"domain\":\"www.i-like-nsfw.com\",\"path\":\"?choice-type=photo\",\"subdomain\":\"www\",\"host\":\"i-like-nsfw\",\"tld\":\"com\",\"parent_domain\":\"i-like-nsfw.com\"},{\"protocol\":\"http\",\"domain\":\"www.babe-lounge.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"babe-lounge\",\"tld\":\"com\",\"parent_domain\":\"babe-lounge.com\"},{\"protocol\":\"http\",\"domain\":\"www.subimg.net\",\"path\":\"browse.php\",\"subdomain\":\"www\",\"host\":\"subimg\",\"tld\":\"net\",\"parent_domain\":\"subimg.net\"},{\"protocol\":\"http\",\"domain\":\"www.shuttur.com\",\"path\":\"category/nsfw\",\"subdomain\":\"www\",\"host\":\"shuttur\",\"tld\":\"com\",\"parent_domain\":\"shuttur.com\"},{\"protocol\":\"http\",\"domain\":\"www.xxxlens.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"xxxlens\",\"tld\":\"com\",\"parent_domain\":\"xxxlens.com\"},{\"protocol\":\"http\",\"domain\":\"www.asspictures.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"asspictures\",\"tld\":\"co\",\"parent_domain\":\"asspictures.co\"},{\"protocol\":\"http\",\"domain\":\"www.apina.biz\",\"path\":null,\"subdomain\":\"www\",\"host\":\"apina\",\"tld\":\"biz\",\"parent_domain\":\"apina.biz\"},{\"protocol\":\"http\",\"domain\":\"www.bootyoftheday.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bootyoftheday\",\"tld\":\"co\",\"parent_domain\":\"bootyoftheday.co\"},{\"protocol\":\"http\",\"domain\":\"www.boobsaroundtheworld.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"boobsaroundtheworld\",\"tld\":\"com\",\"parent_domain\":\"boobsaroundtheworld.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornolab.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornolab\",\"tld\":\"net\",\"parent_domain\":\"pornolab.net\"},{\"protocol\":\"http\",\"domain\":\"torrents.empornium.me\",\"path\":\"index.php\",\"subdomain\":\"torrents\",\"host\":\"empornium\",\"tld\":\"me\",\"parent_domain\":\"empornium.me\"},{\"protocol\":\"http\",\"domain\":\"www.pornbay.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornbay\",\"tld\":\"org\",\"parent_domain\":\"pornbay.org\"},{\"protocol\":\"http\",\"domain\":\"www.pussytorrents.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pussytorrents\",\"tld\":\"org\",\"parent_domain\":\"pussytorrents.org\"},{\"protocol\":\"http\",\"domain\":\"www.extratorrent.com\",\"path\":\"category/552/Video+Torrents.html\",\"subdomain\":\"www\",\"host\":\"extratorrent\",\"tld\":\"com\",\"parent_domain\":\"extratorrent.com\"},{\"protocol\":\"http\",\"domain\":\"www.thepiratebay.pe\",\"path\":\"browse/500\",\"subdomain\":\"www\",\"host\":\"thepiratebay\",\"tld\":\"pe\",\"parent_domain\":\"thepiratebay.pe\"},{\"protocol\":\"http\",\"domain\":\"www.pornbits.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornbits\",\"tld\":\"net\",\"parent_domain\":\"pornbits.net\"},{\"protocol\":\"http\",\"domain\":\"www.rarbg.com\",\"path\":\"torrents.php?category=4\",\"subdomain\":\"www\",\"host\":\"rarbg\",\"tld\":\"com\",\"parent_domain\":\"rarbg.com\"},{\"protocol\":\"http\",\"domain\":\"www.bootytape.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bootytape\",\"tld\":\"com\",\"parent_domain\":\"bootytape.com\"},{\"protocol\":\"http\",\"domain\":\"www.webop.me\",\"path\":null,\"subdomain\":\"www\",\"host\":\"webop\",\"tld\":\"me\",\"parent_domain\":\"webop.me\"},{\"protocol\":\"http\",\"domain\":\"www.torsky.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"torsky\",\"tld\":\"org\",\"parent_domain\":\"torsky.org\"},{\"protocol\":\"http\",\"domain\":\"www.xossip.com\",\"path\":\"forumdisplay.php?f=31\",\"subdomain\":\"www\",\"host\":\"xossip\",\"tld\":\"com\",\"parent_domain\":\"xossip.com\"},{\"protocol\":\"http\",\"domain\":\"www.nutorrent.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"nutorrent\",\"tld\":\"com\",\"parent_domain\":\"nutorrent.com\"},{\"protocol\":\"http\",\"domain\":\"en.gay-lounge.net\",\"path\":null,\"subdomain\":\"en\",\"host\":\"gay-lounge\",\"tld\":\"net\",\"parent_domain\":\"gay-lounge.net\"},{\"protocol\":\"http\",\"domain\":\"www.adultbay.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"adultbay\",\"tld\":\"org\",\"parent_domain\":\"adultbay.org\"},{\"protocol\":\"http\",\"domain\":\"www.pornmade.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornmade\",\"tld\":\"com\",\"parent_domain\":\"pornmade.com\"},{\"protocol\":\"http\",\"domain\":\"www.hotpornfile.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hotpornfile\",\"tld\":\"org\",\"parent_domain\":\"hotpornfile.org\"},{\"protocol\":\"http\",\"domain\":\"www.hornywhores.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hornywhores\",\"tld\":\"net\",\"parent_domain\":\"hornywhores.net\"},{\"protocol\":\"http\",\"domain\":\"www.girlscanner.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"girlscanner\",\"tld\":\"com\",\"parent_domain\":\"girlscanner.com\"},{\"protocol\":\"http\",\"domain\":\"www.vipfucker.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"vipfucker\",\"tld\":\"com\",\"parent_domain\":\"vipfucker.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornoh.info\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornoh\",\"tld\":\"info\",\"parent_domain\":\"pornoh.info\"},{\"protocol\":\"http\",\"domain\":\"www.tdarkangel.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tdarkangel\",\"tld\":\"com\",\"parent_domain\":\"tdarkangel.com\"},{\"protocol\":\"http\",\"domain\":\"www.worldvoyeur.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"worldvoyeur\",\"tld\":\"com\",\"parent_domain\":\"worldvoyeur.com\"},{\"protocol\":\"http\",\"domain\":\"www.rapidhorny.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"rapidhorny\",\"tld\":\"com\",\"parent_domain\":\"rapidhorny.com\"},{\"protocol\":\"http\",\"domain\":\"www.naked-sluts.us\",\"path\":null,\"subdomain\":\"www\",\"host\":\"naked-sluts\",\"tld\":\"us\",\"parent_domain\":\"naked-sluts.us\"},{\"protocol\":\"http\",\"domain\":\"www.pornshare.biz\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornshare\",\"tld\":\"biz\",\"parent_domain\":\"pornshare.biz\"},{\"protocol\":\"http\",\"domain\":\"www.pissandfist.biz\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pissandfist\",\"tld\":\"biz\",\"parent_domain\":\"pissandfist.biz\"},{\"protocol\":\"http\",\"domain\":\"www.jav-porn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"jav-porn\",\"tld\":\"com\",\"parent_domain\":\"jav-porn.com\"},{\"protocol\":\"http\",\"domain\":\"www.fairybb.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fairybb\",\"tld\":\"org\",\"parent_domain\":\"fairybb.org\"},{\"protocol\":\"http\",\"domain\":\"www.lustex.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"lustex\",\"tld\":\"net\",\"parent_domain\":\"lustex.net\"},{\"protocol\":\"http\",\"domain\":\"www.site-rip.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"site-rip\",\"tld\":\"org\",\"parent_domain\":\"site-rip.org\"},{\"protocol\":\"http\",\"domain\":\"www.serakon.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"serakon\",\"tld\":\"com\",\"parent_domain\":\"serakon.com\"},{\"protocol\":\"http\",\"domain\":\"www.pichunter.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pichunter\",\"tld\":\"com\",\"parent_domain\":\"pichunter.com\"},{\"protocol\":\"http\",\"domain\":\"www.hq69.com\",\"path\":\"galleriesn.php\",\"subdomain\":\"www\",\"host\":\"hq69\",\"tld\":\"com\",\"parent_domain\":\"hq69.com\"},{\"protocol\":\"http\",\"domain\":\"www.coedcherry.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"coedcherry\",\"tld\":\"com\",\"parent_domain\":\"coedcherry.com\"},{\"protocol\":\"http\",\"domain\":\"www.nextdoortease.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"nextdoortease\",\"tld\":\"com\",\"parent_domain\":\"nextdoortease.com\"},{\"protocol\":\"http\",\"domain\":\"www.ero-love.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"ero-love\",\"tld\":\"com\",\"parent_domain\":\"ero-love.com\"},{\"protocol\":\"http\",\"domain\":\"www.pussycalor.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pussycalor\",\"tld\":\"com\",\"parent_domain\":\"pussycalor.com\"},{\"protocol\":\"http\",\"domain\":\"www.kindgirls.com\",\"path\":\"photo-archive\",\"subdomain\":\"www\",\"host\":\"kindgirls\",\"tld\":\"com\",\"parent_domain\":\"kindgirls.com\"},{\"protocol\":\"http\",\"domain\":\"www.gallerygalore.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"gallerygalore\",\"tld\":\"net\",\"parent_domain\":\"gallerygalore.net\"},{\"protocol\":\"http\",\"domain\":\"www.nurglesnymphs.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"nurglesnymphs\",\"tld\":\"com\",\"parent_domain\":\"nurglesnymphs.com\"},{\"protocol\":\"http\",\"domain\":\"www.gymnastsnude.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"gymnastsnude\",\"tld\":\"com\",\"parent_domain\":\"gymnastsnude.com\"},{\"protocol\":\"http\",\"domain\":\"www.fineartteens.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fineartteens\",\"tld\":\"com\",\"parent_domain\":\"fineartteens.com\"},{\"protocol\":\"http\",\"domain\":\"www.foxhq.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"foxhq\",\"tld\":\"com\",\"parent_domain\":\"foxhq.com\"},{\"protocol\":\"http\",\"domain\":\"www.brdteengal.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"brdteengal\",\"tld\":\"com\",\"parent_domain\":\"brdteengal.com\"},{\"protocol\":\"http\",\"domain\":\"www.tokyoteenies.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tokyoteenies\",\"tld\":\"com\",\"parent_domain\":\"tokyoteenies.com\"},{\"protocol\":\"http\",\"domain\":\"www.labatidora.net\",\"path\":\"galleries/\",\"subdomain\":\"www\",\"host\":\"labatidora\",\"tld\":\"net\",\"parent_domain\":\"labatidora.net\"},{\"protocol\":\"http\",\"domain\":\"www.hottystop.com\",\"path\":\"showgals.php\",\"subdomain\":\"www\",\"host\":\"hottystop\",\"tld\":\"com\",\"parent_domain\":\"hottystop.com\"},{\"protocol\":\"http\",\"domain\":\"www.xuk.ru\",\"path\":null,\"subdomain\":\"www\",\"host\":\"xuk\",\"tld\":\"ru\",\"parent_domain\":\"xuk.ru\"},{\"protocol\":\"http\",\"domain\":\"www.teensinasia.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"teensinasia\",\"tld\":\"com\",\"parent_domain\":\"teensinasia.com\"},{\"protocol\":\"http\",\"domain\":\"www.hqtgp.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hqtgp\",\"tld\":\"com\",\"parent_domain\":\"hqtgp.com\"},{\"protocol\":\"http\",\"domain\":\"www.bondage-shock.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bondage-shock\",\"tld\":\"com\",\"parent_domain\":\"bondage-shock.com\"},{\"protocol\":\"http\",\"domain\":\"www.subirporno.com\",\"path\":\"buscar.php\",\"subdomain\":\"www\",\"host\":\"subirporno\",\"tld\":\"com\",\"parent_domain\":\"subirporno.com\"},{\"protocol\":\"http\",\"domain\":\"www.nastypornostars.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"nastypornostars\",\"tld\":\"com\",\"parent_domain\":\"nastypornostars.com\"},{\"protocol\":\"http\",\"domain\":\"www.erooups.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"erooups\",\"tld\":\"com\",\"parent_domain\":\"erooups.com\"},{\"protocol\":\"http\",\"domain\":\"www.totallynsfw.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"totallynsfw\",\"tld\":\"com\",\"parent_domain\":\"totallynsfw.com\"},{\"protocol\":\"http\",\"domain\":\"www.dirtyrottenwhore.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"dirtyrottenwhore\",\"tld\":\"com\",\"parent_domain\":\"dirtyrottenwhore.com\"},{\"protocol\":\"http\",\"domain\":\"www.fleshbot.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fleshbot\",\"tld\":\"com\",\"parent_domain\":\"fleshbot.com\"},{\"protocol\":\"http\",\"domain\":\"www.awsum.me\",\"path\":null,\"subdomain\":\"www\",\"host\":\"awsum\",\"tld\":\"me\",\"parent_domain\":\"awsum.me\"},{\"protocol\":\"http\",\"domain\":\"www.russiasexygirls.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"russiasexygirls\",\"tld\":\"com\",\"parent_domain\":\"russiasexygirls.com\"},{\"protocol\":\"http\",\"domain\":\"www.pinkythekinky.com\",\"path\":\"archive\",\"subdomain\":\"www\",\"host\":\"pinkythekinky\",\"tld\":\"com\",\"parent_domain\":\"pinkythekinky.com\"},{\"protocol\":\"http\",\"domain\":\"www.nsfwdump.com\",\"path\":\"archive\",\"subdomain\":\"www\",\"host\":\"nsfwdump\",\"tld\":\"com\",\"parent_domain\":\"nsfwdump.com\"},{\"protocol\":\"http\",\"domain\":\"tush.tumblr.com\",\"path\":\"archive\",\"subdomain\":\"tush\",\"host\":\"tumblr\",\"tld\":\"com\",\"parent_domain\":\"tumblr.com\"},{\"protocol\":\"http\",\"domain\":\"www.nsfworld.com\",\"path\":\"archive\",\"subdomain\":\"www\",\"host\":\"nsfworld\",\"tld\":\"com\",\"parent_domain\":\"nsfworld.com\"},{\"protocol\":\"http\",\"domain\":\"www.bananabunny.com\",\"path\":\"archive\",\"subdomain\":\"www\",\"host\":\"bananabunny\",\"tld\":\"com\",\"parent_domain\":\"bananabunny.com\"},{\"protocol\":\"http\",\"domain\":\"www.amateurindex.com\",\"path\":\"links/solo.php\",\"subdomain\":\"www\",\"host\":\"amateurindex\",\"tld\":\"com\",\"parent_domain\":\"amateurindex.com\"},{\"protocol\":\"http\",\"domain\":\"photos.freeones.com\",\"path\":null,\"subdomain\":\"photos\",\"host\":\"freeones\",\"tld\":\"com\",\"parent_domain\":\"freeones.com\"},{\"protocol\":\"http\",\"domain\":\"www.babepedia.com\",\"path\":\"alphabetical/\",\"subdomain\":\"www\",\"host\":\"babepedia\",\"tld\":\"com\",\"parent_domain\":\"babepedia.com\"},{\"protocol\":\"http\",\"domain\":\"www.europornstar.com\",\"path\":\"a-pornstars.html\",\"subdomain\":\"www\",\"host\":\"europornstar\",\"tld\":\"com\",\"parent_domain\":\"europornstar.com\"},{\"protocol\":\"http\",\"domain\":\"thenude.eu\",\"path\":\"model_index_a.htm\",\"subdomain\":null,\"host\":\"thenude\",\"tld\":\"eu\",\"parent_domain\":\"thenude.eu\"},{\"protocol\":\"http\",\"domain\":\"www.pornstarbook.com\",\"path\":\"archives-a.shtml\",\"subdomain\":\"www\",\"host\":\"pornstarbook\",\"tld\":\"com\",\"parent_domain\":\"pornstarbook.com\"},{\"protocol\":\"http\",\"domain\":\"www.beaverbattle.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"beaverbattle\",\"tld\":\"com\",\"parent_domain\":\"beaverbattle.com\"},{\"protocol\":\"http\",\"domain\":\"botto.ms\",\"path\":null,\"subdomain\":null,\"host\":\"botto\",\"tld\":\"ms\",\"parent_domain\":\"botto.ms\"},{\"protocol\":\"http\",\"domain\":\"boo.by\",\"path\":null,\"subdomain\":null,\"host\":\"boo\",\"tld\":\"by\",\"parent_domain\":\"boo.by\"},{\"protocol\":\"http\",\"domain\":\"www.tittybattles.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tittybattles\",\"tld\":\"com\",\"parent_domain\":\"tittybattles.com\"},{\"protocol\":\"http\",\"domain\":\"www.assbattles.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"assbattles\",\"tld\":\"com\",\"parent_domain\":\"assbattles.com\"},{\"protocol\":\"http\",\"domain\":\"www.muffbattles.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"muffbattles\",\"tld\":\"com\",\"parent_domain\":\"muffbattles.com\"},{\"protocol\":\"http\",\"domain\":\"www.camelto.es\",\"path\":null,\"subdomain\":\"www\",\"host\":\"camelto\",\"tld\":\"es\",\"parent_domain\":\"camelto.es\"},{\"protocol\":\"http\",\"domain\":\"www.meatbeerbabes.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"meatbeerbabes\",\"tld\":\"com\",\"parent_domain\":\"meatbeerbabes.com\"},{\"protocol\":\"http\",\"domain\":\"www.bootyfix.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bootyfix\",\"tld\":\"com\",\"parent_domain\":\"bootyfix.com\"},{\"protocol\":\"http\",\"domain\":\"www.nonnudegirls.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"nonnudegirls\",\"tld\":\"org\",\"parent_domain\":\"nonnudegirls.org\"},{\"protocol\":\"http\",\"domain\":\"www.ebaumsworld.com\",\"path\":\"categories/sexy/\",\"subdomain\":\"www\",\"host\":\"ebaumsworld\",\"tld\":\"com\",\"parent_domain\":\"ebaumsworld.com\"},{\"protocol\":\"http\",\"domain\":\"www.thongsaroundtheworld.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"thongsaroundtheworld\",\"tld\":\"com\",\"parent_domain\":\"thongsaroundtheworld.com\"},{\"protocol\":\"http\",\"domain\":\"www.thenipslip.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"thenipslip\",\"tld\":\"com\",\"parent_domain\":\"thenipslip.com\"},{\"protocol\":\"http\",\"domain\":\"www.eyehandy.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"eyehandy\",\"tld\":\"com\",\"parent_domain\":\"eyehandy.com\"},{\"protocol\":\"http\",\"domain\":\"4gifs.tv\",\"path\":\"gallery/v/Adult_GIFs/\",\"subdomain\":null,\"host\":\"4gifs\",\"tld\":\"tv\",\"parent_domain\":\"4gifs.tv\"},{\"protocol\":\"http\",\"domain\":\"www.jigglegifs.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"jigglegifs\",\"tld\":\"com\",\"parent_domain\":\"jigglegifs.com\"},{\"protocol\":\"http\",\"domain\":\"www.fuckmaker.tumblr.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fuckmaker\",\"tld\":\"tumblr.com\",\"parent_domain\":\"fuckmaker.tumblr.com\"},{\"protocol\":\"http\",\"domain\":\"www.giftube.com\",\"path\":\"index?dis=nsfw\",\"subdomain\":\"www\",\"host\":\"giftube\",\"tld\":\"com\",\"parent_domain\":\"giftube.com\"},{\"protocol\":\"http\",\"domain\":\"www.gifporntube.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"gifporntube\",\"tld\":\"com\",\"parent_domain\":\"gifporntube.com\"},{\"protocol\":\"http\",\"domain\":\"online.europacasino.com\",\"path\":\"promoRedirect?key=ej0yMTkwOTk4MjkxJmw9MjE5MjY2MTA4MyZwPTEwMTQ2ODE%3D\",\"subdomain\":\"online\",\"host\":\"europacasino\",\"tld\":\"com\",\"parent_domain\":\"europacasino.com\"},{\"protocol\":\"http\",\"domain\":\"online.titanpoker.com\",\"path\":\"promoRedirect?key=ej0xNDI5OTY4NyZsPTEzNTIyMzExJnA9MTAxMTY4Mw%3D%3D\",\"subdomain\":\"online\",\"host\":\"titanpoker\",\"tld\":\"com\",\"parent_domain\":\"titanpoker.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornbb.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornbb\",\"tld\":\"org\",\"parent_domain\":\"pornbb.org\"},{\"protocol\":\"http\",\"domain\":\"www.planetsuzy.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"planetsuzy\",\"tld\":\"org\",\"parent_domain\":\"planetsuzy.org\"},{\"protocol\":\"http\",\"domain\":\"www.intporn.com\",\"path\":\"forums/\",\"subdomain\":\"www\",\"host\":\"intporn\",\"tld\":\"com\",\"parent_domain\":\"intporn.com\"},{\"protocol\":\"http\",\"domain\":\"www.forumophilia.com\",\"path\":\"index.php\",\"subdomain\":\"www\",\"host\":\"forumophilia\",\"tld\":\"com\",\"parent_domain\":\"forumophilia.com\"},{\"protocol\":\"http\",\"domain\":\"www.vamateur.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"vamateur\",\"tld\":\"com\",\"parent_domain\":\"vamateur.com\"},{\"protocol\":\"http\",\"domain\":\"www.porn-w.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"porn-w\",\"tld\":\"org\",\"parent_domain\":\"porn-w.org\"},{\"protocol\":\"http\",\"domain\":\"forum.phun.org\",\"path\":\"index.php\",\"subdomain\":\"forum\",\"host\":\"phun\",\"tld\":\"org\",\"parent_domain\":\"phun.org\"},{\"protocol\":\"http\",\"domain\":\"saff.cc\",\"path\":null,\"subdomain\":null,\"host\":\"saff\",\"tld\":\"cc\",\"parent_domain\":\"saff.cc\"},{\"protocol\":\"http\",\"domain\":\"www.sexandfetishforum.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"sexandfetishforum\",\"tld\":\"com\",\"parent_domain\":\"sexandfetishforum.com\"},{\"protocol\":\"http\",\"domain\":\"www.peachyforum.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"peachyforum\",\"tld\":\"com\",\"parent_domain\":\"peachyforum.com\"},{\"protocol\":\"http\",\"domain\":\"forums.sexyandfunny.com\",\"path\":null,\"subdomain\":\"forums\",\"host\":\"sexyandfunny\",\"tld\":\"com\",\"parent_domain\":\"sexyandfunny.com\"},{\"protocol\":\"http\",\"domain\":\"www.fritchy.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fritchy\",\"tld\":\"com\",\"parent_domain\":\"fritchy.com\"},{\"protocol\":\"http\",\"domain\":\"forum.oneclickchicks.com\",\"path\":null,\"subdomain\":\"forum\",\"host\":\"oneclickchicks\",\"tld\":\"com\",\"parent_domain\":\"oneclickchicks.com\"},{\"protocol\":\"http\",\"domain\":\"www.vintage-erotica-forum.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"vintage-erotica-forum\",\"tld\":\"com\",\"parent_domain\":\"vintage-erotica-forum.com\"},{\"protocol\":\"http\",\"domain\":\"forum.ns4w.org\",\"path\":null,\"subdomain\":\"forum\",\"host\":\"ns4w\",\"tld\":\"org\",\"parent_domain\":\"ns4w.org\"},{\"protocol\":\"http\",\"domain\":\"ua-teens.com\",\"path\":\"forum/\",\"subdomain\":null,\"host\":\"ua-teens\",\"tld\":\"com\",\"parent_domain\":\"ua-teens.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornrush.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornrush\",\"tld\":\"org\",\"parent_domain\":\"pornrush.org\"},{\"protocol\":\"http\",\"domain\":\"forum.scanlover.com\",\"path\":null,\"subdomain\":\"forum\",\"host\":\"scanlover\",\"tld\":\"com\",\"parent_domain\":\"scanlover.com\"},{\"protocol\":\"http\",\"domain\":\"www.rawporn.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"rawporn\",\"tld\":\"org\",\"parent_domain\":\"rawporn.org\"},{\"protocol\":\"http\",\"domain\":\"www.hqpdb.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hqpdb\",\"tld\":\"com\",\"parent_domain\":\"hqpdb.com\"},{\"protocol\":\"http\",\"domain\":\"www.porno-maniac.net\",\"path\":null,\"subdomain\":\"www\",\"host\":\"porno-maniac\",\"tld\":\"net\",\"parent_domain\":\"porno-maniac.net\"},{\"protocol\":\"http\",\"domain\":\"www.kitty-kats.net\",\"path\":\"forum.php\",\"subdomain\":\"www\",\"host\":\"kitty-kats\",\"tld\":\"net\",\"parent_domain\":\"kitty-kats.net\"},{\"protocol\":\"http\",\"domain\":\"www.mediafire.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"mediafire\",\"tld\":\"com\",\"parent_domain\":\"mediafire.com\"},{\"protocol\":\"http\",\"domain\":\"www.rapidshare.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"rapidshare\",\"tld\":\"com\",\"parent_domain\":\"rapidshare.com\"},{\"protocol\":\"http\",\"domain\":\"www.reddit.com\",\"path\":\"r/nsfw/\",\"subdomain\":\"www\",\"host\":\"reddit\",\"tld\":\"com\",\"parent_domain\":\"reddit.com\"},{\"protocol\":\"http\",\"domain\":\"www.videarn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"videarn\",\"tld\":\"com\",\"parent_domain\":\"videarn.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornhost.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornhost\",\"tld\":\"com\",\"parent_domain\":\"pornhost.com\"},{\"protocol\":\"http\",\"domain\":\"www.imgur.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"imgur\",\"tld\":\"com\",\"parent_domain\":\"imgur.com\"},{\"protocol\":\"http\",\"domain\":\"www.imagevenue.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"imagevenue\",\"tld\":\"com\",\"parent_domain\":\"imagevenue.com\"},{\"protocol\":\"http\",\"domain\":\"xxx.freeimage.us\",\"path\":null,\"subdomain\":\"xxx\",\"host\":\"freeimage\",\"tld\":\"us\",\"parent_domain\":\"freeimage.us\"},{\"protocol\":\"http\",\"domain\":\"www.imagebam.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"imagebam\",\"tld\":\"com\",\"parent_domain\":\"imagebam.com\"},{\"protocol\":\"http\",\"domain\":\"www.stooorage.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"stooorage\",\"tld\":\"com\",\"parent_domain\":\"stooorage.com\"},{\"protocol\":\"http\",\"domain\":\"www.postimage.org\",\"path\":null,\"subdomain\":\"www\",\"host\":\"postimage\",\"tld\":\"org\",\"parent_domain\":\"postimage.org\"},{\"protocol\":\"http\",\"domain\":\"upload.imagefap.com\",\"path\":\"upload.php\",\"subdomain\":\"upload\",\"host\":\"imagefap\",\"tld\":\"com\",\"parent_domain\":\"imagefap.com\"},{\"protocol\":\"http\",\"domain\":\"www.imagearn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"imagearn\",\"tld\":\"com\",\"parent_domain\":\"imagearn.com\"},{\"protocol\":\"http\",\"domain\":\"www.pimpandhost.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pimpandhost\",\"tld\":\"com\",\"parent_domain\":\"pimpandhost.com\"},{\"protocol\":\"http\",\"domain\":\"www.imagetwist.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"imagetwist\",\"tld\":\"com\",\"parent_domain\":\"imagetwist.com\"},{\"protocol\":\"http\",\"domain\":\"www.uploadhouse.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"uploadhouse\",\"tld\":\"com\",\"parent_domain\":\"uploadhouse.com\"},{\"protocol\":\"http\",\"domain\":\"www.imgbox.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"imgbox\",\"tld\":\"com\",\"parent_domain\":\"imgbox.com\"},{\"protocol\":\"http\",\"domain\":\"www.mozilla.org\",\"path\":\"en-US/firefox/fx/\",\"subdomain\":\"www\",\"host\":\"mozilla\",\"tld\":\"org\",\"parent_domain\":\"mozilla.org\"},{\"protocol\":\"https\",\"domain\":\"www.google.com\",\"path\":\"intl/en/chrome/browser/\",\"subdomain\":\"www\",\"host\":\"google\",\"tld\":\"com\",\"parent_domain\":\"google.com\"},{\"protocol\":\"http\",\"domain\":\"www.opera.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"opera\",\"tld\":\"com\",\"parent_domain\":\"opera.com\"},{\"protocol\":\"http\",\"domain\":\"support.apple.com\",\"path\":\"kb/dl1531\",\"subdomain\":\"support\",\"host\":\"apple\",\"tld\":\"com\",\"parent_domain\":\"apple.com\"},{\"protocol\":\"http\",\"domain\":\"wwww.jdownloader.org\",\"path\":null,\"subdomain\":\"wwww\",\"host\":\"jdownloader\",\"tld\":\"org\",\"parent_domain\":\"jdownloader.org\"},{\"protocol\":\"http\",\"domain\":\"www.pchealthboost.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pchealthboost\",\"tld\":\"co\",\"parent_domain\":\"pchealthboost.co\"},{\"protocol\":\"http\",\"domain\":\"www.bleepingcomputer.com\",\"path\":\"download/adwcleaner/\",\"subdomain\":\"www\",\"host\":\"bleepingcomputer\",\"tld\":\"com\",\"parent_domain\":\"bleepingcomputer.com\"},{\"protocol\":\"http\",\"domain\":\"www.videolan.org\",\"path\":\"vlc/\",\"subdomain\":\"www\",\"host\":\"videolan\",\"tld\":\"org\",\"parent_domain\":\"videolan.org\"},{\"protocol\":\"http\",\"domain\":\"www.bsplayer.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bsplayer\",\"tld\":\"com\",\"parent_domain\":\"bsplayer.com\"},{\"protocol\":\"http\",\"domain\":\"www.netnanny.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"netnanny\",\"tld\":\"com\",\"parent_domain\":\"netnanny.com\"},{\"protocol\":\"http\",\"domain\":\"www.mypornblocker.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"mypornblocker\",\"tld\":\"com\",\"parent_domain\":\"mypornblocker.com\"},{\"protocol\":\"http\",\"domain\":\"www.redtube.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"redtube\",\"tld\":\"co\",\"parent_domain\":\"redtube.co\"},{\"protocol\":\"http\",\"domain\":\"www.drtuber.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"drtuber\",\"tld\":\"co\",\"parent_domain\":\"drtuber.co\"},{\"protocol\":\"http\",\"domain\":\"www.nuvid.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"nuvid\",\"tld\":\"co\",\"parent_domain\":\"nuvid.co\"},{\"protocol\":\"http\",\"domain\":\"www.pornoxo.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornoxo\",\"tld\":\"co\",\"parent_domain\":\"pornoxo.co\"},{\"protocol\":\"http\",\"domain\":\"tnaflixfree.net\",\"path\":null,\"subdomain\":null,\"host\":\"tnaflixfree\",\"tld\":\"net\",\"parent_domain\":\"tnaflixfree.net\"},{\"protocol\":\"http\",\"domain\":\"www.shufuni.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"shufuni\",\"tld\":\"co\",\"parent_domain\":\"shufuni.co\"},{\"protocol\":\"http\",\"domain\":\"www.twilightsex.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"twilightsex\",\"tld\":\"co\",\"parent_domain\":\"twilightsex.co\"},{\"protocol\":\"http\",\"domain\":\"www.kporno.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"kporno\",\"tld\":\"co\",\"parent_domain\":\"kporno.co\"},{\"protocol\":\"http\",\"domain\":\"www.porntitan.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"porntitan\",\"tld\":\"co\",\"parent_domain\":\"porntitan.co\"},{\"protocol\":\"http\",\"domain\":\"www.fuckuh.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fuckuh\",\"tld\":\"co\",\"parent_domain\":\"fuckuh.co\"},{\"protocol\":\"http\",\"domain\":\"www.moviegator.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"moviegator\",\"tld\":\"co\",\"parent_domain\":\"moviegator.co\"},{\"protocol\":\"http\",\"domain\":\"www.pornerbros.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornerbros\",\"tld\":\"co\",\"parent_domain\":\"pornerbros.co\"},{\"protocol\":\"http\",\"domain\":\"www.yourlustmovies.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"yourlustmovies\",\"tld\":\"co\",\"parent_domain\":\"yourlustmovies.co\"},{\"protocol\":\"http\",\"domain\":\"www.tubeland.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tubeland\",\"tld\":\"co\",\"parent_domain\":\"tubeland.co\"},{\"protocol\":\"http\",\"domain\":\"www.jizzall.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"jizzall\",\"tld\":\"co\",\"parent_domain\":\"jizzall.co\"},{\"protocol\":\"http\",\"domain\":\"www.hotgoo.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hotgoo\",\"tld\":\"co\",\"parent_domain\":\"hotgoo.co\"},{\"protocol\":\"http\",\"domain\":\"www.yuvutu.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"yuvutu\",\"tld\":\"co\",\"parent_domain\":\"yuvutu.co\"},{\"protocol\":\"http\",\"domain\":\"www.dirtyxxxvideo.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"dirtyxxxvideo\",\"tld\":\"co\",\"parent_domain\":\"dirtyxxxvideo.co\"},{\"protocol\":\"http\",\"domain\":\"privatehomeclips.co\",\"path\":null,\"subdomain\":null,\"host\":\"privatehomeclips\",\"tld\":\"co\",\"parent_domain\":\"privatehomeclips.co\"},{\"protocol\":\"http\",\"domain\":\"www.pornologo.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornologo\",\"tld\":\"co\",\"parent_domain\":\"pornologo.co\"},{\"protocol\":\"http\",\"domain\":\"hellporno.co\",\"path\":null,\"subdomain\":null,\"host\":\"hellporno\",\"tld\":\"co\",\"parent_domain\":\"hellporno.co\"},{\"protocol\":\"http\",\"domain\":\"www.wankoz.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"wankoz\",\"tld\":\"co\",\"parent_domain\":\"wankoz.co\"},{\"protocol\":\"http\",\"domain\":\"xbabe.co\",\"path\":null,\"subdomain\":null,\"host\":\"xbabe\",\"tld\":\"co\",\"parent_domain\":\"xbabe.co\"},{\"protocol\":\"http\",\"domain\":\"www.thenewporn.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"thenewporn\",\"tld\":\"co\",\"parent_domain\":\"thenewporn.co\"},{\"protocol\":\"http\",\"domain\":\"www.updatetube.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"updatetube\",\"tld\":\"co\",\"parent_domain\":\"updatetube.co\"},{\"protocol\":\"http\",\"domain\":\"xxxdessert.co\",\"path\":null,\"subdomain\":null,\"host\":\"xxxdessert\",\"tld\":\"co\",\"parent_domain\":\"xxxdessert.co\"},{\"protocol\":\"http\",\"domain\":\"www.befuck.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"befuck\",\"tld\":\"co\",\"parent_domain\":\"befuck.co\"},{\"protocol\":\"http\",\"domain\":\"ice-porn.co\",\"path\":null,\"subdomain\":null,\"host\":\"ice-porn\",\"tld\":\"co\",\"parent_domain\":\"ice-porn.co\"},{\"protocol\":\"http\",\"domain\":\"www.proporn.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"proporn\",\"tld\":\"co\",\"parent_domain\":\"proporn.co\"},{\"protocol\":\"http\",\"domain\":\"www.myxvids.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"myxvids\",\"tld\":\"co\",\"parent_domain\":\"myxvids.co\"},{\"protocol\":\"http\",\"domain\":\"www.foxytube.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"foxytube\",\"tld\":\"co\",\"parent_domain\":\"foxytube.co\"},{\"protocol\":\"http\",\"domain\":\"www.pornicom.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornicom\",\"tld\":\"co\",\"parent_domain\":\"pornicom.co\"},{\"protocol\":\"http\",\"domain\":\"www.dreamamateurs.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"dreamamateurs\",\"tld\":\"co\",\"parent_domain\":\"dreamamateurs.co\"},{\"protocol\":\"http\",\"domain\":\"www.wetplace.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"wetplace\",\"tld\":\"co\",\"parent_domain\":\"wetplace.co\"},{\"protocol\":\"http\",\"domain\":\"www.fantasy8.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fantasy8\",\"tld\":\"co\",\"parent_domain\":\"fantasy8.co\"},{\"protocol\":\"http\",\"domain\":\"www.dansmovies.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"dansmovies\",\"tld\":\"co\",\"parent_domain\":\"dansmovies.co\"},{\"protocol\":\"http\",\"domain\":\"h2porn.co\",\"path\":null,\"subdomain\":null,\"host\":\"h2porn\",\"tld\":\"co\",\"parent_domain\":\"h2porn.co\"},{\"protocol\":\"http\",\"domain\":\"www.redvak.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"redvak\",\"tld\":\"co\",\"parent_domain\":\"redvak.co\"},{\"protocol\":\"http\",\"domain\":\"www.fookgle.xx\",\"path\":null,\"subdomain\":\"www\",\"host\":\"fookgle\",\"tld\":\"xx\",\"parent_domain\":\"fookgle.xx\"},{\"protocol\":\"http\",\"domain\":\"www.88fuck.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"88fuck\",\"tld\":\"co\",\"parent_domain\":\"88fuck.co\"},{\"protocol\":\"http\",\"domain\":\"pervclips.co\",\"path\":null,\"subdomain\":null,\"host\":\"pervclips\",\"tld\":\"co\",\"parent_domain\":\"pervclips.co\"},{\"protocol\":\"http\",\"domain\":\"www.dailee.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"dailee\",\"tld\":\"co\",\"parent_domain\":\"dailee.co\"},{\"protocol\":\"http\",\"domain\":\"www.pornheed.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornheed\",\"tld\":\"co\",\"parent_domain\":\"pornheed.co\"},{\"protocol\":\"http\",\"domain\":\"www.hdporn.ne\",\"path\":null,\"subdomain\":\"www\",\"host\":\"hdporn\",\"tld\":\"ne\",\"parent_domain\":\"hdporn.ne\"},{\"protocol\":\"http\",\"domain\":\"www.bestporntube.or\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bestporntube\",\"tld\":\"or\",\"parent_domain\":\"bestporntube.or\"},{\"protocol\":\"http\",\"domain\":\"www.elephanttube.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"elephanttube\",\"tld\":\"co\",\"parent_domain\":\"elephanttube.co\"},{\"protocol\":\"http\",\"domain\":\"porn-wanted.co\",\"path\":null,\"subdomain\":null,\"host\":\"porn-wanted\",\"tld\":\"co\",\"parent_domain\":\"porn-wanted.co\"},{\"protocol\":\"http\",\"domain\":\"www.apetube.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"apetube\",\"tld\":\"co\",\"parent_domain\":\"apetube.co\"},{\"protocol\":\"http\",\"domain\":\"www.tjoob.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tjoob\",\"tld\":\"co\",\"parent_domain\":\"tjoob.co\"},{\"protocol\":\"http\",\"domain\":\"www.porncor.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"porncor\",\"tld\":\"co\",\"parent_domain\":\"porncor.co\"},{\"protocol\":\"http\",\"domain\":\"www.freetoptube.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"freetoptube\",\"tld\":\"co\",\"parent_domain\":\"freetoptube.co\"},{\"protocol\":\"http\",\"domain\":\"www.largeporntube.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"largeporntube\",\"tld\":\"co\",\"parent_domain\":\"largeporntube.co\"},{\"protocol\":\"http\",\"domain\":\"video.search.yahoo.com\",\"path\":\"search/video?fr=sfp&fr2=piv-web&p=porn&.bcrumb=ZaF57phvPYQ,1385310133\",\"subdomain\":\"video\",\"host\":\"search\",\"tld\":\"yahoo.com\",\"parent_domain\":\"search.yahoo.com\"},{\"protocol\":\"http\",\"domain\":\"www.ovguide.com\",\"path\":\"adult.html\",\"subdomain\":\"www\",\"host\":\"ovguide\",\"tld\":\"com\",\"parent_domain\":\"ovguide.com\"},{\"protocol\":\"http\",\"domain\":\"iptorrents.com\",\"path\":\"torrents/\",\"subdomain\":null,\"host\":\"iptorrents\",\"tld\":\"com\",\"parent_domain\":\"iptorrents.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornorip.ne\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornorip\",\"tld\":\"ne\",\"parent_domain\":\"pornorip.ne\"},{\"protocol\":\"http\",\"domain\":\"www.amazon.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"amazon\",\"tld\":\"co\",\"parent_domain\":\"amazon.co\"},{\"protocol\":\"https\",\"domain\":\"www.pinkcherryaffiliate.com\",\"path\":\"sextoys.php?id=2215\",\"subdomain\":\"www\",\"host\":\"pinkcherryaffiliate\",\"tld\":\"com\",\"parent_domain\":\"pinkcherryaffiliate.com\"},{\"protocol\":\"http\",\"domain\":\"www.edenfantasys.com\",\"path\":\"#pcode-YMF\",\"subdomain\":\"www\",\"host\":\"edenfantasys\",\"tld\":\"com\",\"parent_domain\":\"edenfantasys.com\"},{\"protocol\":\"http\",\"domain\":\"www.bestpornstardb.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"bestpornstardb\",\"tld\":\"com\",\"parent_domain\":\"bestpornstardb.com\"},{\"protocol\":\"http\",\"domain\":\"www.avn.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"avn\",\"tld\":\"com\",\"parent_domain\":\"avn.com\"},{\"protocol\":\"http\",\"domain\":\"www.maxim.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"maxim\",\"tld\":\"com\",\"parent_domain\":\"maxim.com\"},{\"protocol\":\"http\",\"domain\":\"www.playboy.com\",\"path\":\"magazine\",\"subdomain\":\"www\",\"host\":\"playboy\",\"tld\":\"com\",\"parent_domain\":\"playboy.com\"},{\"protocol\":\"http\",\"domain\":\"www.menshealth.com\",\"path\":\"sex-women/\",\"subdomain\":\"www\",\"host\":\"menshealth\",\"tld\":\"com\",\"parent_domain\":\"menshealth.com\"},{\"protocol\":\"http\",\"domain\":\"www.cosmopolitan.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"cosmopolitan\",\"tld\":\"co\",\"parent_domain\":\"cosmopolitan.co\"},{\"protocol\":\"http\",\"domain\":\"live-cams-1.livejasmin.com\",\"path\":\"landing/?tid=103&psid=m4rc0f&campaign_id=75431&pstour=&psprogram=PPS&pstool=15_39&site=jasmin\",\"subdomain\":\"live-cams-1\",\"host\":\"livejasmin\",\"tld\":\"com\",\"parent_domain\":\"livejasmin.com\"},{\"protocol\":\"http\",\"domain\":\"cams.com\",\"path\":\"go/g1417327-pct\",\"subdomain\":null,\"host\":\"cams\",\"tld\":\"com\",\"parent_domain\":\"cams.com\"},{\"protocol\":\"http\",\"domain\":\"stripshow.com\",\"path\":\"go/g1417327-pct\",\"subdomain\":null,\"host\":\"stripshow\",\"tld\":\"com\",\"parent_domain\":\"stripshow.com\"},{\"protocol\":\"http\",\"domain\":\"new.xlovecam.com\",\"path\":\"promo/textlink/?id_affilie=5907&cat=1&age=1&p=mr\",\"subdomain\":\"new\",\"host\":\"xlovecam\",\"tld\":\"com\",\"parent_domain\":\"xlovecam.com\"},{\"protocol\":\"http\",\"domain\":\"www.privatefeeds.com?AFNO=1-246229-2-Pornbibl\",\"path\":null,\"subdomain\":\"www\",\"host\":\"privatefeeds\",\"tld\":\"com?AFNO=1-246229-2-Pornbibl\",\"parent_domain\":\"privatefeeds.com?AFNO=1-246229-2-Pornbibl\"},{\"protocol\":\"http\",\"domain\":\"www.pornication.com?AFNO=1-246229-2-Pornbibl\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornication\",\"tld\":\"com?AFNO=1-246229-2-Pornbibl\",\"parent_domain\":\"pornication.com?AFNO=1-246229-2-Pornbibl\"},{\"protocol\":\"http\",\"domain\":\"mt.livecamfun.com\",\"path\":\"xtarc/637128/354/0/arg_tour=ex1?mta=354940\",\"subdomain\":\"mt\",\"host\":\"livecamfun\",\"tld\":\"com\",\"parent_domain\":\"livecamfun.com\"},{\"protocol\":\"http\",\"domain\":\"www.webcams.com\",\"path\":\"link.php?reseller=m4rk3p&rev=0&type=2&misc1=myporn&misc2=&_u=http://tours.webcams.com/static/join-page/6/04/?wca=1&mcat_id=\",\"subdomain\":\"www\",\"host\":\"webcams\",\"tld\":\"com\",\"parent_domain\":\"webcams.com\"},{\"protocol\":\"http\",\"domain\":\"sexier.com\",\"path\":\"services/directlinkhandler.ashx?WID=126020043825&LinkID=1080&promocode=BCODEL0000021_mypornbible&cid=8\",\"subdomain\":null,\"host\":\"sexier\",\"tld\":\"com\",\"parent_domain\":\"sexier.com\"},{\"protocol\":\"http\",\"domain\":\"www.rivcams.com\",\"path\":\"?rcid=10156\",\"subdomain\":\"www\",\"host\":\"rivcams\",\"tld\":\"com\",\"parent_domain\":\"rivcams.com\"},{\"protocol\":\"http\",\"domain\":\"enter.iknowthatgirl.com\",\"path\":\"track/NDAwODE5NS4zLjE0LjU2LjUuMC4wLjAuMA\",\"subdomain\":\"enter\",\"host\":\"iknowthatgirl\",\"tld\":\"com\",\"parent_domain\":\"iknowthatgirl.com\"},{\"protocol\":\"http\",\"domain\":\"www.tubeum.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"tubeum\",\"tld\":\"co\",\"parent_domain\":\"tubeum.co\"},{\"protocol\":\"http\",\"domain\":\"www.bigmouthfuls.com\",\"path\":\"t1/pps=m4rk3p/\",\"subdomain\":\"www\",\"host\":\"bigmouthfuls\",\"tld\":\"com\",\"parent_domain\":\"bigmouthfuls.com\"},{\"protocol\":\"http\",\"domain\":\"enter.pervsonpatrol.com\",\"path\":\"track/NDAwODE5NS4zLjE2LjYwLjUuMC4wLjAuMA\",\"subdomain\":\"enter\",\"host\":\"pervsonpatrol\",\"tld\":\"com\",\"parent_domain\":\"pervsonpatrol.com\"},{\"protocol\":\"http\",\"domain\":\"www.streetblowjobs.com\",\"path\":\"main.htm?id=hdpornbible&p=clean\",\"subdomain\":\"www\",\"host\":\"streetblowjobs\",\"tld\":\"com\",\"parent_domain\":\"streetblowjobs.com\"},{\"protocol\":\"http\",\"domain\":\"www.sexforums.com\",\"path\":\"gallery/\",\"subdomain\":\"www\",\"host\":\"sexforums\",\"tld\":\"com\",\"parent_domain\":\"sexforums.com\"},{\"protocol\":\"http\",\"domain\":\"www.funpic.hu\",\"path\":\"hu/\",\"subdomain\":\"www\",\"host\":\"funpic\",\"tld\":\"hu\",\"parent_domain\":\"funpic.hu\"},{\"protocol\":\"http\",\"domain\":\"www.x17online.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"x17online\",\"tld\":\"co\",\"parent_domain\":\"x17online.co\"},{\"protocol\":\"http\",\"domain\":\"celebritybabies.people.co\",\"path\":null,\"subdomain\":\"celebritybabies\",\"host\":\"people\",\"tld\":\"co\",\"parent_domain\":\"people.co\"},{\"protocol\":\"http\",\"domain\":\"www.laineygossip.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"laineygossip\",\"tld\":\"co\",\"parent_domain\":\"laineygossip.co\"},{\"protocol\":\"http\",\"domain\":\"imnotobsessed.co\",\"path\":null,\"subdomain\":null,\"host\":\"imnotobsessed\",\"tld\":\"co\",\"parent_domain\":\"imnotobsessed.co\"},{\"protocol\":\"http\",\"domain\":\"hentaischool.com\",\"path\":null,\"subdomain\":null,\"host\":\"hentaischool\",\"tld\":\"com\",\"parent_domain\":\"hentaischool.com\"},{\"protocol\":\"http\",\"domain\":\"justicehentai.com\",\"path\":\"TOUR/index.php\",\"subdomain\":null,\"host\":\"justicehentai\",\"tld\":\"com\",\"parent_domain\":\"justicehentai.com\"},{\"protocol\":\"http\",\"domain\":\"www.lolhentai.ne\",\"path\":null,\"subdomain\":\"www\",\"host\":\"lolhentai\",\"tld\":\"ne\",\"parent_domain\":\"lolhentai.ne\"},{\"protocol\":\"http\",\"domain\":\"www.24hentai.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"24hentai\",\"tld\":\"co\",\"parent_domain\":\"24hentai.co\"},{\"protocol\":\"http\",\"domain\":\"www.simply-hentai.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"simply-hentai\",\"tld\":\"co\",\"parent_domain\":\"simply-hentai.co\"},{\"protocol\":\"http\",\"domain\":\"hdhentaisex.co\",\"path\":null,\"subdomain\":null,\"host\":\"hdhentaisex\",\"tld\":\"co\",\"parent_domain\":\"hdhentaisex.co\"},{\"protocol\":\"http\",\"domain\":\"www.sexyfuckgames.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"sexyfuckgames\",\"tld\":\"co\",\"parent_domain\":\"sexyfuckgames.co\"},{\"protocol\":\"http\",\"domain\":\"playporngames.co\",\"path\":null,\"subdomain\":null,\"host\":\"playporngames\",\"tld\":\"co\",\"parent_domain\":\"playporngames.co\"},{\"protocol\":\"http\",\"domain\":\"playforceone.co\",\"path\":null,\"subdomain\":null,\"host\":\"playforceone\",\"tld\":\"co\",\"parent_domain\":\"playforceone.co\"},{\"protocol\":\"http\",\"domain\":\"www.wtfpeople.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"wtfpeople\",\"tld\":\"co\",\"parent_domain\":\"wtfpeople.co\"},{\"protocol\":\"http\",\"domain\":\"www.daftporn.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"daftporn\",\"tld\":\"co\",\"parent_domain\":\"daftporn.co\"},{\"protocol\":\"http\",\"domain\":\"www.uselessjunk.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"uselessjunk\",\"tld\":\"co\",\"parent_domain\":\"uselessjunk.co\"},{\"protocol\":\"http\",\"domain\":\"69games.xx\",\"path\":null,\"subdomain\":null,\"host\":\"69games\",\"tld\":\"xx\",\"parent_domain\":\"69games.xx\"},{\"protocol\":\"http\",\"domain\":\"refer.ccbill.com\",\"path\":\"cgi-bin/clicks.cgi?CA=939775-0000&PA=2437327&BAN=0\",\"subdomain\":\"refer\",\"host\":\"ccbill\",\"tld\":\"com\",\"parent_domain\":\"ccbill.com\"},{\"protocol\":\"http\",\"domain\":\"pornstarshowdown.com\",\"path\":null,\"subdomain\":null,\"host\":\"pornstarshowdown\",\"tld\":\"com\",\"parent_domain\":\"pornstarshowdown.com\"},{\"protocol\":\"http\",\"domain\":\"www.rateme100.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"rateme100\",\"tld\":\"com\",\"parent_domain\":\"rateme100.com\"},{\"protocol\":\"http\",\"domain\":\"www.beauty-battle.com\",\"path\":\"battle/\",\"subdomain\":\"www\",\"host\":\"beauty-battle\",\"tld\":\"com\",\"parent_domain\":\"beauty-battle.com\"},{\"protocol\":\"http\",\"domain\":\"www.zimbio.com\",\"path\":\"Celebrity+Bikini+Battle\",\"subdomain\":\"www\",\"host\":\"zimbio\",\"tld\":\"com\",\"parent_domain\":\"zimbio.com\"},{\"protocol\":\"http\",\"domain\":\"vintagepinupgirls.ne\",\"path\":null,\"subdomain\":null,\"host\":\"vintagepinupgirls\",\"tld\":\"ne\",\"parent_domain\":\"vintagepinupgirls.ne\"},{\"protocol\":\"http\",\"domain\":\"freesexpins.co\",\"path\":null,\"subdomain\":null,\"host\":\"freesexpins\",\"tld\":\"co\",\"parent_domain\":\"freesexpins.co\"},{\"protocol\":\"http\",\"domain\":\"www.pornpin.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"pornpin\",\"tld\":\"co\",\"parent_domain\":\"pornpin.co\"},{\"protocol\":\"https\",\"domain\":\"twitter.com\",\"path\":\"BreeOlson\",\"subdomain\":null,\"host\":\"twitter\",\"tld\":\"com\",\"parent_domain\":\"twitter.com\"},{\"protocol\":\"http\",\"domain\":\"www.pinterest.com\",\"path\":\"suicidegirls/\",\"subdomain\":\"www\",\"host\":\"pinterest\",\"tld\":\"com\",\"parent_domain\":\"pinterest.com\"},{\"protocol\":\"http\",\"domain\":\"art-or-porn.co\",\"path\":null,\"subdomain\":null,\"host\":\"art-or-porn\",\"tld\":\"co\",\"parent_domain\":\"art-or-porn.co\"},{\"protocol\":\"http\",\"domain\":\"www.ladycheeky.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"ladycheeky\",\"tld\":\"co\",\"parent_domain\":\"ladycheeky.co\"},{\"protocol\":\"http\",\"domain\":\"www.mandatory.com\",\"path\":\"girls/\",\"subdomain\":\"www\",\"host\":\"mandatory\",\"tld\":\"com\",\"parent_domain\":\"mandatory.com\"},{\"protocol\":\"http\",\"domain\":\"www.erotica7.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"erotica7\",\"tld\":\"com\",\"parent_domain\":\"erotica7.com\"},{\"protocol\":\"http\",\"domain\":\"thechive.com\",\"path\":\"category/girls/\",\"subdomain\":null,\"host\":\"thechive\",\"tld\":\"com\",\"parent_domain\":\"thechive.com\"},{\"protocol\":\"http\",\"domain\":\"www.rk.com\",\"path\":\"main.htm?id=hdpornbible\",\"subdomain\":\"www\",\"host\":\"rk\",\"tld\":\"com\",\"parent_domain\":\"rk.com\"},{\"protocol\":\"http\",\"domain\":\"natour.naughtyamerica.com\",\"path\":\"track/MTEzNTY1LjEyLjguMTU1LjYuMC4wLjAuMA\",\"subdomain\":\"natour\",\"host\":\"naughtyamerica\",\"tld\":\"com\",\"parent_domain\":\"naughtyamerica.com\"},{\"protocol\":\"http\",\"domain\":\"enter.mofosnetwork.com\",\"path\":\"track/NDAwODE5NS4xLjIuMy41LjAuMC4wLjA\",\"subdomain\":\"enter\",\"host\":\"mofosnetwork\",\"tld\":\"com\",\"parent_domain\":\"mofosnetwork.com\"},{\"protocol\":\"http\",\"domain\":\"join.teamskeet.com\",\"path\":\"track/NTI0Ny4yLjE1LjIyOC4zLjAuMC4wLjA\",\"subdomain\":\"join\",\"host\":\"teamskeet\",\"tld\":\"com\",\"parent_domain\":\"teamskeet.com\"},{\"protocol\":\"http\",\"domain\":\"www.gfrevenge.com\",\"path\":\"main.htm?id=hdpornbible\",\"subdomain\":\"www\",\"host\":\"gfrevenge\",\"tld\":\"com\",\"parent_domain\":\"gfrevenge.com\"},{\"protocol\":\"http\",\"domain\":\"www.videosz.com\",\"path\":\"index.php?link_id=25421&tracker_id=35275&lg=us&nt=1\",\"subdomain\":\"www\",\"host\":\"videosz\",\"tld\":\"com\",\"parent_domain\":\"videosz.com\"},{\"protocol\":\"http\",\"domain\":\"join.digitalplayground.com\",\"path\":\"track/MTAwMDE0MDAxLjEwMTMxLjM3LjEzMS4xLjAuMC4wLjA\",\"subdomain\":\"join\",\"host\":\"digitalplayground\",\"tld\":\"com\",\"parent_domain\":\"digitalplayground.com\"},{\"protocol\":\"http\",\"domain\":\"join.wickedpictures.com\",\"path\":\"track/NDk3MzE6MTA6MQ/\",\"subdomain\":\"join\",\"host\":\"wickedpictures\",\"tld\":\"com\",\"parent_domain\":\"wickedpictures.com\"},{\"protocol\":\"http\",\"domain\":\"enter.brazzersnetwork.com\",\"path\":\"track/NTI2ODg2OjgxOjQx/\",\"subdomain\":\"enter\",\"host\":\"brazzersnetwork\",\"tld\":\"com\",\"parent_domain\":\"brazzersnetwork.com\"},{\"protocol\":\"http\",\"domain\":\"secure.twistys.com\",\"path\":\"track/MjAwNTAzOjQ2OjE,31/\",\"subdomain\":\"secure\",\"host\":\"twistys\",\"tld\":\"com\",\"parent_domain\":\"twistys.com\"},{\"protocol\":\"http\",\"domain\":\"secure.hustler.com\",\"path\":\"track/MzAwMDExOS4xLjkuOS4xLjAuMC4wLjA\",\"subdomain\":\"secure\",\"host\":\"hustler\",\"tld\":\"com\",\"parent_domain\":\"hustler.com\"},{\"protocol\":\"http\",\"domain\":\"join.ddfnetwork.com\",\"path\":\"track/MTAwMDAwMjc0NC4zNS4yMy41MTIuMS4wLjAuMC4w\",\"subdomain\":\"join\",\"host\":\"ddfnetwork\",\"tld\":\"com\",\"parent_domain\":\"ddfnetwork.com\"},{\"protocol\":\"http\",\"domain\":\"enter.javhd.com\",\"path\":\"track/MTkwMzMuMi4yLjIuMS4wLjAuMC4w\",\"subdomain\":\"enter\",\"host\":\"javhd\",\"tld\":\"com\",\"parent_domain\":\"javhd.com\"},{\"protocol\":\"http\",\"domain\":\"signup.21sextury.com\",\"path\":\"track/MTA4MDExLjM2LjkxLjkxLjAuMC4wLjAuMA\",\"subdomain\":\"signup\",\"host\":\"21sextury\",\"tld\":\"com\",\"parent_domain\":\"21sextury.com\"},{\"protocol\":\"http\",\"domain\":\"join.pornprosnetwork.com\",\"path\":\"track/Mjk5ODk6OTQ6MTA/\",\"subdomain\":\"join\",\"host\":\"pornprosnetwork\",\"tld\":\"com\",\"parent_domain\":\"pornprosnetwork.com\"},{\"protocol\":\"http\",\"domain\":\"join.puffynetwork.com\",\"path\":\"track/MzAwMDQyOC45LjUuMzUuMS4wLjAuMC4w\",\"subdomain\":\"join\",\"host\":\"puffynetwork\",\"tld\":\"com\",\"parent_domain\":\"puffynetwork.com\"},{\"protocol\":\"http\",\"domain\":\"join.perfectgonzo.com\",\"path\":\"track/MjUxLjIuMS4xLjEuMC4wLjAuMA\",\"subdomain\":\"join\",\"host\":\"perfectgonzo\",\"tld\":\"com\",\"parent_domain\":\"perfectgonzo.com\"},{\"protocol\":\"http\",\"domain\":\"join.allofgfs.com\",\"path\":\"track/ODY5LjIuMy4zLjEuMC4wLjAuMA\",\"subdomain\":\"join\",\"host\":\"allofgfs\",\"tld\":\"com\",\"parent_domain\":\"allofgfs.com\"},{\"protocol\":\"http\",\"domain\":\"adultfriendfinder.com\",\"path\":\"go/g1417327\",\"subdomain\":null,\"host\":\"adultfriendfinder\",\"tld\":\"com\",\"parent_domain\":\"adultfriendfinder.com\"},{\"protocol\":\"http\",\"domain\":\"www.xxxdating.com\",\"path\":\"?ainfo=Mzg2MzV8MTAzfDE1NjY\",\"subdomain\":\"www\",\"host\":\"xxxdating\",\"tld\":\"com\",\"parent_domain\":\"xxxdating.com\"},{\"protocol\":\"http\",\"domain\":\"getiton.com\",\"path\":\"go/g1417327-pct\",\"subdomain\":null,\"host\":\"getiton\",\"tld\":\"com\",\"parent_domain\":\"getiton.com\"},{\"protocol\":\"http\",\"domain\":\"affiliates.perfectmatch.com\",\"path\":\"go/g1417327-pct\",\"subdomain\":\"affiliates\",\"host\":\"perfectmatch\",\"tld\":\"com\",\"parent_domain\":\"perfectmatch.com\"},{\"protocol\":\"http\",\"domain\":\"xhookups.com\",\"path\":\"go/g1417327\",\"subdomain\":null,\"host\":\"xhookups\",\"tld\":\"com\",\"parent_domain\":\"xhookups.com\"},{\"protocol\":\"http\",\"domain\":\"nostringsattached.com\",\"path\":\"go/g1417327-pct\",\"subdomain\":null,\"host\":\"nostringsattached\",\"tld\":\"com\",\"parent_domain\":\"nostringsattached.com\"},{\"protocol\":\"http\",\"domain\":\"passion.com\",\"path\":\"go/g1417327\",\"subdomain\":null,\"host\":\"passion\",\"tld\":\"com\",\"parent_domain\":\"passion.com\"},{\"protocol\":\"http\",\"domain\":\"www.cpd8.net\",\"path\":\"bn/aff.php?dynamicpage=passion_bn_new&a_bid=c4fbca01&utm_source=int&utm_medium=web&utm_campaign=d00b5b08\",\"subdomain\":\"www\",\"host\":\"cpd8\",\"tld\":\"net\",\"parent_domain\":\"cpd8.net\"},{\"protocol\":\"http\",\"domain\":\"www.xdatenow.net\",\"path\":\"ufi/aff.php?dynamicpage=memb&a_bid=04d03242&a_aid=c378c222\",\"subdomain\":\"www\",\"host\":\"xdatenow\",\"tld\":\"net\",\"parent_domain\":\"xdatenow.net\"},{\"protocol\":\"http\",\"domain\":\"www.hornymatches.com\",\"path\":\"dating/visit.php?campaign_id=61385\",\"subdomain\":\"www\",\"host\":\"hornymatches\",\"tld\":\"com\",\"parent_domain\":\"hornymatches.com\"},{\"protocol\":\"http\",\"domain\":\"www.the-pork.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"the-pork\",\"tld\":\"co\",\"parent_domain\":\"the-pork.co\"},{\"protocol\":\"http\",\"domain\":\"forum.fckya.com\",\"path\":\"forum.php\",\"subdomain\":\"forum\",\"host\":\"fckya\",\"tld\":\"com\",\"parent_domain\":\"fckya.com\"},{\"protocol\":\"http\",\"domain\":\"www.pornusers.com\",\"path\":\"home.html\",\"subdomain\":\"www\",\"host\":\"pornusers\",\"tld\":\"com\",\"parent_domain\":\"pornusers.com\"},{\"protocol\":\"http\",\"domain\":\"www.justusboys.co\",\"path\":null,\"subdomain\":\"www\",\"host\":\"justusboys\",\"tld\":\"co\",\"parent_domain\":\"justusboys.co\"},{\"protocol\":\"http\",\"domain\":\"magic-wigs.co\",\"path\":null,\"subdomain\":null,\"host\":\"magic-wigs\",\"tld\":\"co\",\"parent_domain\":\"magic-wigs.co\"},{\"protocol\":\"http\",\"domain\":\"actual-porn.or\",\"path\":null,\"subdomain\":null,\"host\":\"actual-porn\",\"tld\":\"or\",\"parent_domain\":\"actual-porn.or\"},{\"protocol\":\"http\",\"domain\":\"entnt.co\",\"path\":null,\"subdomain\":null,\"host\":\"entnt\",\"tld\":\"co\",\"parent_domain\":\"entnt.co\"},{\"protocol\":\"http\",\"domain\":\"pornpicdumps.co\",\"path\":null,\"subdomain\":null,\"host\":\"pornpicdumps\",\"tld\":\"co\",\"parent_domain\":\"pornpicdumps.co\"},{\"protocol\":\"http\",\"domain\":\"phapit.co\",\"path\":null,\"subdomain\":null,\"host\":\"phapit\",\"tld\":\"co\",\"parent_domain\":\"phapit.co\"},{\"protocol\":\"http\",\"domain\":\"www.post-tits.or\",\"path\":null,\"subdomain\":\"www\",\"host\":\"post-tits\",\"tld\":\"or\",\"parent_domain\":\"post-tits.or\"},{\"protocol\":\"http\",\"domain\":\"en.softonic.com\",\"path\":\"s/timeline-remove-free-download\",\"subdomain\":\"en\",\"host\":\"softonic\",\"tld\":\"com\",\"parent_domain\":\"softonic.com\"},{\"protocol\":\"http\",\"domain\":\"www.mediadetective.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"mediadetective\",\"tld\":\"com\",\"parent_domain\":\"mediadetective.com\"},{\"protocol\":\"http\",\"domain\":\"www.surfrecon.com\",\"path\":null,\"subdomain\":\"www\",\"host\":\"surfrecon\",\"tld\":\"com\",\"parent_domain\":\"surfrecon.com\"},{\"protocol\":\"http\",\"domain\":\"hide-porn.winsite.com\",\"path\":null,\"subdomain\":\"hide-porn\",\"host\":\"winsite\",\"tld\":\"com\",\"parent_domain\":\"winsite.com\"},{\"protocol\":\"http\",\"domain\":\"www.microsoft.com\",\"path\":\"security/pc-security/malware-removal.aspx\",\"subdomain\":\"www\",\"host\":\"microsoft\",\"tld\":\"com\",\"parent_domain\":\"microsoft.com\"},{\"protocol\":\"http\",\"domain\":\"macscan.securemac.com\",\"path\":null,\"subdomain\":\"macscan\",\"host\":\"securemac\",\"tld\":\"com\",\"parent_domain\":\"securemac.com\"},{\"protocol\":\"https\",\"domain\":\"keepersecurity.co\",\"path\":null,\"subdomain\":null,\"host\":\"keepersecurity\",\"tld\":\"co\",\"parent_domain\":\"keepersecurity.co\"},{\"protocol\":\"http\",\"domain\":\"download.cnet.com\",\"path\":\"Smart-Popup-Blocker/3000-7786_4-10282837.html\",\"subdomain\":\"download\",\"host\":\"cnet\",\"tld\":\"com\",\"parent_domain\":\"cnet.com\"},{\"protocol\":\"http:\",\"host\":\"incezt\",\"port\":null,\"hostname\":\"incezt.net\",\"path\":\"/\",\"subdomain\":null,\"tld\":\"net\",\"domain\":\"incezt.net\",\"ip\":[\"46.229.172.135\"]},{\"protocol\":\"http:\",\"host\":\"semprot\",\"port\":null,\"hostname\":\"semprot.com\",\"path\":\"/\",\"subdomain\":null,\"tld\":\"com\",\"domain\":\"semprot.com\",\"ip\":[\"96.30.52.192\"]},{\"protocol\":\"http:\",\"host\":\"bokep\",\"port\":null,\"hostname\":\"bokep.com\",\"path\":\"/\",\"subdomain\":null,\"tld\":\"com\",\"domain\":\"bokep.com\",\"ip\":[\"209.15.13.134\"]},{\"protocol\":\"http:\",\"host\":\"sambaporno\",\"port\":null,\"hostname\":\"sambaporno.com\",\"path\":\"/\",\"subdomain\":\"www\",\"tld\":\"com\",\"domain\":\"sambaporno.com\",\"ip\":[\"64.188.56.171\"]}]");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 19 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Caskli\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-capable\",\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-status-bar-style\",\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black-translucent\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"Caskli\"},{\"hid\":\"description\",\"name\":\"description\",\"content\":\"Caskli - Brew Short URLs\"},{\"hid\":\"theme-color\",\"name\":\"theme-color\",\"content\":\"#614BE6\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"Caskli\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"Caskli\"},{\"hid\":\"og:description\",\"name\":\"og:description\",\"property\":\"og:description\",\"content\":\"Caskli - Brew Short URLs\"}],\"link\":[{\"rel\":\"shortcut icon\",\"href\":\"/icon-192x192.png\"},{\"rel\":\"apple-touch-icon\",\"href\":\"/_nuxt/icons/icon_512x512.feeeeb.png\",\"sizes\":\"512x512\"},{\"href\":\"/_nuxt/icons/splash_iphonese_640x1136.feeeeb.png\",\"media\":\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)\",\"rel\":\"apple-touch-startup-image\",\"hid\":\"apple-touch-startup-image-iphonese\"},{\"href\":\"/_nuxt/icons/splash_iphone6_50x1334.feeeeb.png\",\"media\":\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)\",\"rel\":\"apple-touch-startup-image\",\"hid\":\"apple-touch-startup-image-iphone6\"},{\"href\":\"/_nuxt/icons/splash_iphoneplus_1080x1920.feeeeb.png\",\"media\":\"(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)\",\"rel\":\"apple-touch-startup-image\",\"hid\":\"apple-touch-startup-image-iphoneplus\"},{\"href\":\"/_nuxt/icons/splash_iphonex_1125x2436.feeeeb.png\",\"media\":\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)\",\"rel\":\"apple-touch-startup-image\",\"hid\":\"apple-touch-startup-image-iphonex\"},{\"href\":\"/_nuxt/icons/splash_iphonexr_828x1792.feeeeb.png\",\"media\":\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)\",\"rel\":\"apple-touch-startup-image\",\"hid\":\"apple-touch-startup-image-iphonexr\"},{\"href\":\"/_nuxt/icons/splash_iphonexsmax_1242x2688.feeeeb.png\",\"media\":\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)\",\"rel\":\"apple-touch-startup-image\",\"hid\":\"apple-touch-startup-image-iphonexsmax\"},{\"href\":\"/_nuxt/icons/splash_ipad_1536x2048.feeeeb.png\",\"media\":\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)\",\"rel\":\"apple-touch-startup-image\",\"hid\":\"apple-touch-startup-image-ipad\"},{\"media\":\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)\",\"rel\":\"apple-touch-startup-image\",\"hid\":\"apple-touch-startup-image-ipadpro1\"},{\"media\":\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)\",\"rel\":\"apple-touch-startup-image\",\"hid\":\"apple-touch-startup-image-ipadpro2\"},{\"media\":\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)\",\"rel\":\"apple-touch-startup-image\",\"hid\":\"apple-touch-startup-image-ipadpro3\"},{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.3a7f63d6.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }

  for (const key in from) {
    const value = from[key];

    if (Array.isArray(value)) {
      to[key] = to[key] || [];

      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        } // Add meta


        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};

      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
};

function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function ({
  store,
  redirect
}) {
  if (store.getters['isAuthenticated']) {
    return redirect('/');
  }
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(11);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(13).default("be361e24", content, true)

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(11);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(.focus-visible),[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]),a:not([href]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:none}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-hide,.swal2-popup.swal2-toast.swal2-show{-webkit-animation:none;animation:none}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:none 0s ease 0s;transition:initial;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:transparent!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:0;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-radius:100%;border-color:#2778c4 transparent;border-style:solid;border-width:.25em}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:0;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;background-color:#2778c4;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;background-color:#d14529;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:0;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;background-color:#757575;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:none;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:0;border-bottom-left-radius:0}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:none 0s ease 0s;transition:initial;border:none;border-radius:5px;background:transparent;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:transparent;color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:none 0s ease 0s;transition:initial;border:1px solid #d9d9d9;border-radius:0;background:inherit;box-shadow:none;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{display:none;align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message:before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-hide,.swal2-show{-webkit-animation:none;animation:none}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotate(2deg)}33%{transform:translateY(0) rotate(-2deg)}66%{transform:translateY(.3125em) rotate(2deg)}to{transform:translateY(0) rotate(0deg)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotate(2deg)}33%{transform:translateY(0) rotate(-2deg)}66%{transform:translateY(.3125em) rotate(2deg)}to{transform:translateY(0) rotate(0deg)}}@-webkit-keyframes swal2-toast-hide{to{transform:rotate(1deg);opacity:0}}@keyframes swal2-toast-hide{to{transform:rotate(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}to{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}to{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}to{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}to{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}to{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}to{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}to{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}to{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}to{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}to{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}to{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}to{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}to{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}to{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}to{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}to{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}to{transform:rotateX(0deg);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}to{transform:rotateX(0deg);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - 1.25em);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}body,html{box-sizing:border-box;font-size:1rem;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";width:100%;background:#614be6;position:fixed}#__layout,#__nuxt,#geektube,body,html{height:100%}.is-offline{display:flex;font-size:.75rem;padding:.75rem 1rem;background:#8878ec;color:#fff}.user-notify{width:100%;color:#fff;padding:1rem}.user-notify.danger{background:#b40b0b}.user-notify.success{background:#36ac00}.disable-scrollbars{-ms-overflow-style:none;scrollbar-width:none}.disable-scrollbars ::-webkit-scrollbar{display:none}#gtprimary{position:relative;background-color:#fff;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Cpattern id='b' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='translate(-29049.936 -21787.452) scale(30.05)'%3E%3Cuse fill='%23fafafa' href='%23a' y='2'/%3E%3Cuse fill='%23fafafa' href='%23a' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23a' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23a'/%3E%3Cuse fill='%23f0f0f0' href='%23a' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23a' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='c' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='translate(-29049.936 -21787.452) scale(30.05)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23a'/%3E%3Cuse href='%23a' y='5'/%3E%3Cuse href='%23a' x='1' y='10'/%3E%3Cuse href='%23a' x='2' y='1'/%3E%3Cuse href='%23a' x='2' y='4'/%3E%3Cuse href='%23a' x='3' y='8'/%3E%3Cuse href='%23a' x='4' y='3'/%3E%3Cuse href='%23a' x='4' y='7'/%3E%3Cuse href='%23a' x='5' y='2'/%3E%3Cuse href='%23a' x='5' y='6'/%3E%3Cuse href='%23a' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='translate(-29049.936 -21787.452) scale(30.05)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23a' y='5'/%3E%3Cuse href='%23a' y='8'/%3E%3Cuse href='%23a' x='1' y='1'/%3E%3Cuse href='%23a' x='1' y='9'/%3E%3Cuse href='%23a' x='1' y='12'/%3E%3Cuse href='%23a' x='2'/%3E%3Cuse href='%23a' x='2' y='4'/%3E%3Cuse href='%23a' x='3' y='2'/%3E%3Cuse href='%23a' x='3' y='6'/%3E%3Cuse href='%23a' x='3' y='11'/%3E%3Cuse href='%23a' x='4' y='3'/%3E%3Cuse href='%23a' x='4' y='7'/%3E%3Cuse href='%23a' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='translate(-29049.936 -21787.452) scale(30.05)'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse href='%23a' y='11'/%3E%3Cuse href='%23a' x='2' y='9'/%3E%3Cuse href='%23a' x='5' y='12'/%3E%3Cuse href='%23a' x='9' y='4'/%3E%3Cuse href='%23a' x='12' y='1'/%3E%3Cuse href='%23a' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='translate(-29049.936 -21787.452) scale(30.05)'%3E%3Cg fill='%23fff'%3E%3Cuse href='%23a' y='9'/%3E%3Cuse href='%23a' x='16' y='5'/%3E%3Cuse href='%23a' x='14' y='2'/%3E%3Cuse href='%23a' x='11' y='11'/%3E%3Cuse href='%23a' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse href='%23a' x='3' y='13'/%3E%3Cuse href='%23a' x='9' y='7'/%3E%3Cuse href='%23a' x='13' y='10'/%3E%3Cuse href='%23a' x='15' y='4'/%3E%3Cuse href='%23a' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='translate(-29049.936 -21787.452) scale(30.05)'%3E%3Cg fill='%236a5acd'%3E%3Cuse href='%23a' x='2' y='5'/%3E%3Cuse href='%23a' x='16' y='38'/%3E%3Cuse href='%23a' x='46' y='42'/%3E%3Cuse href='%23a' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='translate(-29049.936 -21787.452) scale(30.05)'%3E%3Cg fill='%236a5acd'%3E%3Cuse href='%23a' x='33' y='13'/%3E%3Cuse href='%23a' x='27' y='54'/%3E%3Cuse href='%23a' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='i' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='translate(-29049.936 -21787.452) scale(30.05)'%3E%3Cg fill='%236a5acd'%3E%3Cuse href='%23a' x='11' y='8'/%3E%3Cuse href='%23a' x='51' y='13'/%3E%3Cuse href='%23a' x='17' y='73'/%3E%3Cuse href='%23a' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3Cpath stroke='%23fff' stroke-width='.6' id='a' d='M0 0h1v1H0z'/%3E%3C/defs%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23i)' width='100%25' height='100%25'/%3E%3C/svg%3E\");background-attachment:fixed;background-size:cover;overflow:auto;z-index:0}#gtprimary.bgbrand{background:#614be6;background:linear-gradient(0deg,#8f00ff,#614be6)!important;background-image:none;background-color:#614be6 important;height:100%}#gtprimary.bgbrand:before{content:\"\";position:absolute;background:transparent}#gtprimary:before{content:\"\";position:absolute;left:0;height:100%;width:100%;z-index:0;background:#fff;background:linear-gradient(0deg,#fff,#fff 27%,hsla(0,0%,100%,0));bottom:0}#gtprimary .container{position:relative}*,:after,:before{box-sizing:inherit}body,h1,h2,h3,h4,h5,h6,ol,p,ul{margin:0;padding:0;font-weight:400}ol,ul{list-style:none}img{max-width:100%;height:auto}.empty__urls{display:flex;flex-direction:column;justify-content:center;height:100%;width:100%;text-align:center;color:#fff}.empty__urls a{color:#fff}.container{margin:0 auto;height:100%}.btn__load{background:#614be6;border:0;text-align:center;color:#fff;font-size:1rem;padding:.75rem 1rem}.btn__load.disabled{opacity:.5}.grid{display:flex;flex-direction:column;width:auto;height:calc(100% - 8.2rem);position:relative;top:8.2rem;padding:0 1rem;overflow-y:scroll}.grid__item .link__item{display:flex;flex-direction:row;justify-content:space-between;text-decoration:none;overflow:hidden;transition:all .3s;border-bottom:1px solid #f1f1f1;padding:.5rem 0}.grid__item .link__item .title{display:flex;flex:1 1 0;flex-direction:row;justify-content:flex-start;color:#000;transition:all .3s;word-wrap:none;overflow:hidden}.grid__item .link__item .title .link__count{display:flex;flex-direction:column;justify-content:center;outline:none;transition:all .3s;min-width:3rem;min-height:3rem;margin-right:2rem;text-align:center;font-size:1.5rem}.grid__item .link__item .title .link__info{display:flex;flex-direction:column;width:50%}.grid__item .link__item .title .link__info p{color:#444;width:100%;white-space:nowrap;overflow:hidden;display:inline-block;text-overflow:ellipsis}.grid__item .link__item .link__actions{display:flex;flex-direction:row}.grid__item .link__item .link__actions .external{display:flex;flex-direction:column;justify-content:center;outline:none;padding:0 0 0 .5rem;transition:all .3s}.grid__item .link__item .link__actions .external .external__icon{cursor:pointer;display:flex;color:#614be6;padding:.45rem}.grid__item .link__item .link__actions .external .external__icon:hover{background:#614be6;color:#fff}.isloading{position:relative;background:#f1f1f1;height:100%;padding:1rem;overflow:hidden}.isloading:before{content:\"\";display:block;position:absolute;left:-150px;top:0;height:100%;width:150px;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:load;animation-name:load;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:linear-gradient(90deg,transparent 0,#fff 50%,transparent 0)}@-webkit-keyframes load{0%{left:-150px}to{left:100%}}@keyframes load{0%{left:-150px}to{left:100%}}.header__wrap{position:fixed;width:100%;background:#614be6;overflow:auto;padding:1rem;z-index:100}.header__wrap .navigation{position:relative;z-index:100;display:flex;flex-direction:row;justify-content:flex-end;color:#fff}.header__wrap .navigation li{margin:0 0 0 1rem;display:flex;align-items:center}.header__wrap .navigation li .feather{margin-right:.25rem}.header__wrap .navigation li a{display:flex;align-items:center;color:#fff}.header__wrap .navigation li a .feather{margin-right:.25rem}#shtn{position:relative;width:100%;padding:1rem 0 0;z-index:200;display:flex;flex-direction:row}#shtn label{opacity:0;height:0!important;margin:0}#shtn .gt-logo{border:3px solid #fff}#shtn input{width:100%;border:0;border-top:3px solid #fff;border-bottom:3px solid #fff;padding:0 1rem;height:100%;background:#fff;-webkit-appearance:none;border-radius:0}#shtn input:focus{outline:none;background:hsla(0,0%,100%,.8)}#shtn .url{flex-direction:row}#shtn .url label{opacity:0;position:absolute}#shtn div{position:relative;display:flex;flex:1 1 auto;flex-direction:column}#shtn div:first-child{max-width:60px}#shtn div:nth-child(2){display:none}#shtn div:nth-child(2):before{content:\"\";position:absolute;right:0;width:3px;height:100%;background:#614be6}@media (min-width:765px){#shtn div:nth-child(2){display:flex}}#shtn div:nth-child(2)[focus-within]:before{content:\"\";position:absolute;left:-3px;width:3px;height:100%;background:#fff}#shtn div:nth-child(2):focus-within:before{content:\"\";position:absolute;left:-3px;width:3px;height:100%;background:#fff}#shtn div:nth-child(3)[focus-within]:before{content:\"\";position:absolute;left:-3px;width:3px;height:100%;background:#fff}#shtn div:nth-child(3):focus-within:before{content:\"\";position:absolute;left:-3px;width:3px;height:100%;background:#fff}#shtn div.invalid{transition:all 0s}#shtn div.invalid input{background:#fff}#shtn div.invalid input:focus{border:3px solid rgba(255,0,0,.3)}#shtn div.invalid button{background:#614be6;border:3px solid rgba(255,0,0,.5);background:rgba(255,0,0,.5);outline:none;margin:0;padding:0 .75rem}#shtn div.invalid button:focus{outline:none}#shtn button{background:#614be6;border:3px solid #fff;outline:none;margin:0;transition:all .1s;padding:0 .75rem}#shtn button:focus{outline:none}#shtn button.btnActive{background:#614be6}#shtn button.btnActive:hover{background:#7e6eeb}#login{display:flex;flex-direction:column;padding:1rem;flex:1 1 0;justify-content:center;text-align:center;height:100%}#login legend{margin:0 0 3rem}#login legend img{max-width:75px;margin:0 auto}#login fieldset{display:flex;flex-direction:column;width:100%;margin:0 auto}@media (min-width:765px){#login fieldset{width:500px}}#login fieldset .field-group{margin-bottom:1rem}#login fieldset .field-group label{position:absolute;opacity:0;height:0!important;margin:0}#login fieldset .field-group input{width:100%;border:3px solid silver;padding:.75rem;font-size:1.03rem;height:100%;transition:all .3s;background:hsla(0,0%,100%,.03);-webkit-appearance:none;border-radius:0}#login fieldset .field-group input:focus{outline:none;border:3px solid #614be6;transition:all .3s}#login fieldset button{border:0;background:#614be6;padding:1rem;color:#fff}#login fieldset a{color:#fff;margin:3rem 0}#gtprimary.bgbrand #login legend{margin:0 0 3rem}#gtprimary.bgbrand #login legend img{max-width:75px;margin:0 auto;border:3px solid #fff}#gtprimary.bgbrand #login fieldset .field-group{margin-bottom:1rem}#gtprimary.bgbrand #login fieldset .field-group label{position:absolute;opacity:0;height:0!important;margin:0}#gtprimary.bgbrand #login fieldset .field-group input{width:100%;border:3px solid #fff;padding:.75rem;font-size:1.03rem;height:100%;transition:all .3s;background:#fff}#gtprimary.bgbrand #login fieldset .field-group input:focus{outline:none;border:3px solid #3a1fdf;transition:all .3s}#gtprimary.bgbrand #login fieldset button{background:#614be6;padding:1rem;border:3px solid #fff;color:#fff}#gtprimary.bgbrand #login fieldset button:focus{outline:none}#gtprimary.bgbrand #login fieldset button:hover{background:#fff;color:#614be6;cursor:pointer}.swal2-container .swal2-shown{background:hsla(0,0%,100%,.5)!important}.swal2-container .swal2-modal{border-radius:0;padding:0;background:#614be6;color:#fff!important}.swal2-container .swal2-modal .swal2-title{font-size:1.2rem;margin-top:1rem;color:#fff}.swal2-container .swal2-modal .swal2-content{color:#fff}.swal2-container .swal2-modal .swal2-actions{padding:0;display:flex;flex-direction:row}.swal2-container .swal2-modal .swal2-actions .swal2-styled{display:flex;flex:1 1 auto;border:0;border-radius:0;margin:0;background:#7561e9}.swal2-container .swal2-modal .swal2-actions .swal2-styled:focus{outline-color:#fff}.swal2-container .swal2-modal .swal2-actions .swal2-styled:first-child{border-right:3px solid #4d35e3!important}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_banned_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
var _static_banned_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(17, 1);


const state = () => ({
  loggedIn: false,
  user: {},
  appUrl: process.env.APP_URL,
  submitDisabled: false,
  urls: [],
  page: 1,
  pageCount: null,
  banned: [],
  short: ['bit.ly', 'goo.gl', 'tinyurl.com', 'shorturl.at', 'free-url-shortener.rb.gy', 'rebrandly.com', 'ow.ly', 'su.pr', 'is.gd', 'cli.gs', 'tiny.cc', 'sn.im', 'moourl.com', 'l.gg', 'catchylink.com', 'branch.io', 'yourls.org', 'short.nr', 'para.pt', 'twurl.nl', 'snipurl.com', 'budurl.com', 'xrl.us']
});
const mutations = {
  SET_URL(state, url) {
    state.urls.unshift(url);
  },

  SET_SUBMIT_DISABLED(state, bool) {
    state.submitDisabled = bool;
  },

  SET_PAGE(state, page) {
    state.page = page;
  },

  SET_PAGE_COUNT(state, count) {
    state.pageCount = count;
  },

  SET_URLS(state, urls) {
    state.urls.push.apply(state.urls, urls);
  },

  CLEAR_LOADER(state) {
    state.urls.shift();
  },

  SET_BANNED(state, banned) {
    state.banned = banned;
  },

  CLEAR_INDEX(state, id) {
    let filtered = state.urls.filter(u => u.id !== id);
    state.urls = filtered;
  },

  CLEAR_URLS(state) {
    state.urls = [];
  },

  SET_URL_COUNT(state, data) {
    return state.urls.find(url => {
      if (url.id === data.id) {
        let meta = JSON.parse(url.meta);
        meta.clicks += 1;
        url.meta = JSON.stringify(meta);
      }
    });
  }

};
const actions = {
  nuxtServerInit({
    commit
  }, {
    req
  }) {
    commit('SET_BANNED', _static_banned_json__WEBPACK_IMPORTED_MODULE_1__);
  },

  setUrl({
    commit
  }, url) {
    commit('SET_URL', url);
  },

  setUrls({
    commit
  }, urls) {
    commit('SET_URLS', urls);
  },

  setPage({
    commit
  }, page) {
    commit('SET_PAGE', page);
  },

  setPageCount({
    commit
  }, count) {
    commit('SET_PAGE_COUNT', count);
  },

  clearLoader({
    commit
  }) {
    commit('CLEAR_LOADER');
  },

  setBanned({
    commit
  }, banned) {
    commit('SET_BANNED', banned);
  },

  setUrlCount({
    commit
  }, data) {
    commit('SET_URL_COUNT', data);
  },

  setSubmitDisabled({
    commit
  }, bool) {
    commit('SET_SUBMIT_DISABLED', bool);
  },

  clearIndex({
    commit
  }, id) {
    commit('CLEAR_INDEX', id);
  },

  clearUrls({
    commit
  }) {
    commit('CLEAR_URLS');
  }

};
const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },

  getAppUrl(state) {
    return state.appUrl;
  },

  getUrls(state) {
    return state.urls;
  },

  getShort(state) {
    return state.short;
  },

  getPage(state) {
    return state.page;
  },

  getPageCount(state) {
    return state.pageCount;
  },

  getBanned(state) {
    return state.banned;
  },

  getUrlPattern() {
    return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
  },

  getSubmitDisabled(state) {
    return state.submitDisabled;
  },

  loader() {
    return {
      slug: "",
      meta: JSON.stringify({
        file: "",
        colour: ""
      }),
      created_at: "",
      url: "",
      isLoading: true
    };
  }

};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(14);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(15);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['guest'] = __webpack_require__(22);
middleware['guest'] = middleware['guest'].default || middleware['guest'];
middleware['redirect'] = __webpack_require__(23);
middleware['redirect'] = middleware['redirect'].default || middleware['redirect'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(16);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(8);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(7);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(5);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _72d0a5ee = () => interopDefault(__webpack_require__.e(/* import() | pages/account/login */ 2).then(__webpack_require__.bind(null, 36)));

const _3622f7a4 = () => interopDefault(__webpack_require__.e(/* import() | pages/account/register */ 3).then(__webpack_require__.bind(null, 37)));

const _1c4df18e = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 4).then(__webpack_require__.bind(null, 39)));

const _677cf83e = () => interopDefault(__webpack_require__.e(/* import() | pages/_id */ 1).then(__webpack_require__.bind(null, 38))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/account/login",
    component: _72d0a5ee,
    name: "account-login"
  }, {
    path: "/account/register",
    component: _3622f7a4,
    name: "account-register"
  }, {
    path: "/",
    component: _1c4df18e,
    name: "index"
  }, {
    path: "/:id",
    component: _677cf83e,
    name: "id"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=0c3de97f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode(((_vm.error.statusCode === 404)?("<h1>Brew not found...</h1>"):("<h1>An error occurred</h1>"))+" <p>"+_vm._ssrEscape("Developer: "+_vm._s(_vm.error.message))+"</p> "),_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Go home")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=0c3de97f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  layout: 'primary',
  props: ['error']
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "09813222"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(24)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "aa1aa94c"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/styles/app.scss
var styles_app = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/primary.vue?vue&type=template&id=28fdc064&
var primaryvue_type_template_id_28fdc064_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{bgbrand: (_vm.$route.name === 'account-login' || _vm.$route.name === 'account-register')},attrs:{"id":"gtprimary"}},[_c('nuxt')],1)}
var primaryvue_type_template_id_28fdc064_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/primary.vue?vue&type=template&id=28fdc064&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/primary.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var primaryvue_type_script_lang_js_ = ({
  name: 'primary'
});
// CONCATENATED MODULE: ./layouts/primary.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_primaryvue_type_script_lang_js_ = (primaryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/primary.vue





/* normalize component */

var primary_component = Object(componentNormalizer["a" /* default */])(
  layouts_primaryvue_type_script_lang_js_,
  primaryvue_type_template_id_28fdc064_render,
  primaryvue_type_template_id_28fdc064_staticRenderFns,
  false,
  null,
  null,
  "7974be29"
  
)

/* harmony default export */ var primary = (primary_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&
var defaultvue_type_template_id_0040005c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Nuxt')}
var defaultvue_type_template_id_0040005c_staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "5444776c"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_primary": sanitizeComponent(primary),
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail(this.nuxt.err);
        }

        if (this.$loading.finish) {
          this.$loading.finish();
        }
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(28), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(12);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(18);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'http://localhost:1337'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(19);

// EXTERNAL MODULE: ./.nuxt/pwa/meta.merge.js
var meta_merge = __webpack_require__(20);
var meta_merge_default = /*#__PURE__*/__webpack_require__.n(meta_merge);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.js


/* harmony default export */ var pwa_meta = (function ({
  app
}) {
  meta_merge_default()(app.head, meta);
});
// CONCATENATED MODULE: ./.nuxt/pwa/icons.js
/* harmony default export */ var icons = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64x64.feeeeb.png",
    "120x120": "/_nuxt/icons/icon_120x120.feeeeb.png",
    "144x144": "/_nuxt/icons/icon_144x144.feeeeb.png",
    "152x152": "/_nuxt/icons/icon_152x152.feeeeb.png",
    "192x192": "/_nuxt/icons/icon_192x192.feeeeb.png",
    "384x384": "/_nuxt/icons/icon_384x384.feeeeb.png",
    "512x512": "/_nuxt/icons/icon_512x512.feeeeb.png",
    "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.feeeeb.png",
    "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.feeeeb.png",
    "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.feeeeb.png",
    "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.feeeeb.png",
    "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.feeeeb.png",
    "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.feeeeb.png",
    "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.feeeeb.png",
    "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.feeeeb.png",
    "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.feeeeb.png",
    "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.feeeeb.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// CONCATENATED MODULE: ./plugins/bus.js

const eventBus = {};

eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue();
};

external_vue_default.a.use(eventBus);
// EXTERNAL MODULE: external "vue-feather-icons"
var external_vue_feather_icons_ = __webpack_require__(1);

// CONCATENATED MODULE: ./plugins/feather.js


external_vue_default.a.component("plus-icon", external_vue_feather_icons_["PlusIcon"]);
external_vue_default.a.component("external-link-icon", external_vue_feather_icons_["ExternalLinkIcon"]);
external_vue_default.a.component("copy-icon", external_vue_feather_icons_["CopyIcon"]);
external_vue_default.a.component("coffee-icon", external_vue_feather_icons_["CoffeeIcon"]);
external_vue_default.a.component("key-icon", external_vue_feather_icons_["KeyIcon"]);
external_vue_default.a.component("login-icon", external_vue_feather_icons_["LogInIcon"]);
external_vue_default.a.component("logout-icon", external_vue_feather_icons_["LogOutIcon"]);
external_vue_default.a.component("user-icon", external_vue_feather_icons_["UserIcon"]);
external_vue_default.a.component("trash-icon", external_vue_feather_icons_["Trash2Icon"]);
external_vue_default.a.component("refresh-cw", external_vue_feather_icons_["RefreshCwIcon"]);
// CONCATENATED MODULE: ./plugins/api.js
/* harmony default export */ var api = ((context, inject) => {
  inject('api', api_api);
  context.$api = api_api;
});
const api_api = {
  async getDate() {
    const res = await fetch('/api/create');
    return await res.json();
  }

};
// EXTERNAL MODULE: ./plugins/sweet.js
var sweet = __webpack_require__(9);
var sweet_default = /*#__PURE__*/__webpack_require__.n(sweet);

// CONCATENATED MODULE: ./plugins/mixins/urls.js


const URLs = {
  namespaced: true,

  install(Vue, options) {
    Vue.mixin({
      computed: { ...Object(external_vuex_["mapGetters"])({
          appUrl: 'getAppUrl',
          urls: 'getUrls',
          page: 'getPage',
          pageCount: 'getPageCount',
          short: 'getShort',
          banned: 'getBanned',
          loader: 'loader',
          pattern: 'getUrlPattern',
          submitDisabled: 'getSubmitDisabled'
        })
      }
    });
  }

};
external_vue_default.a.use(URLs);
// CONCATENATED MODULE: ./plugins/mixins/auth.js


const auth_Auth = {
  namespaced: true,

  install(Vue, options) {
    Vue.mixin({
      computed: { ...Object(external_vuex_["mapGetters"])({
          isAuthenticated: 'isAuthenticated',
          loggedInUser: 'loggedInUser'
        })
      }
    });
  }

};
external_vue_default.a.use(auth_Auth);
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(10);

// CONCATENATED MODULE: ./.nuxt/auth/utilities.js
const isUnset = o => typeof o === 'undefined' || o === null;
const isSet = o => !isUnset(o);
const isSameURL = (a, b) => a.split('?')[0].replace(/\/+$/, '') === b.split('?')[0].replace(/\/+$/, '');
const isRelativeURL = u => u && u.length && /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(u);
const parseQuery = queryString => {
  const query = {};
  const pairs = queryString.split('&');

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return query;
};
const encodeQuery = queryObject => {
  return Object.entries(queryObject).filter(([key, value]) => typeof value !== 'undefined').map(([key, value]) => encodeURIComponent(key) + (value != null ? '=' + encodeURIComponent(value) : '')).join('&');
};
const routeOption = (route, key, value) => {
  return route.matched.some(m => {
    if (false) {} else {
      // SSR
      return Object.values(m.components).some(component => Object.values(component._Ctor).some(ctor => ctor.options && ctor.options[key] === value));
    }
  });
};
const utilities_getMatchedComponents = (route, matches = false) => {
  return [].concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).map(function (key) {
      matches && matches.push(index);
      return m.components[key];
    });
  }));
};
function normalizePath(path = '') {
  // Remove query string
  let result = path.split('?')[0]; // Remove redundant / from the end of path

  if (result.charAt(result.length - 1) === '/') {
    result = result.slice(0, -1);
  }

  return result;
}
function encodeValue(val) {
  if (typeof val === 'string') {
    return val;
  }

  return JSON.stringify(val);
}
function decodeValue(val) {
  // Try to parse as json
  if (typeof val === 'string') {
    try {
      return JSON.parse(val);
    } catch (_) {}
  } // Return as is


  return val;
}
/**
 * Get property defined by dot notation in string.
 * Based on  https://github.com/dy/dotprop (MIT)
 *
 * @param  {Object} holder   Target object where to look property up
 * @param  {string} propName Dot notation, like 'this.a.b.c'
 * @return {*}          A property value
 */

function getProp(holder, propName) {
  if (!propName || !holder) {
    return holder;
  }

  if (propName in holder) {
    return holder[propName];
  }

  const propParts = Array.isArray(propName) ? propName : (propName + '').split('.');
  let result = holder;

  while (propParts.length && result) {
    result = result[propParts.shift()];
  }

  return result;
}
// CONCATENATED MODULE: ./.nuxt/auth/storage.js



class storage_Storage {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;

    this._initState();
  } // ------------------------------------
  // Universal
  // ------------------------------------


  setUniversal(key, value) {
    // Unset null, undefined
    if (isUnset(value)) {
      return this.removeUniversal(key);
    } // Local state


    this.setState(key, value); // Cookies

    this.setCookie(key, value); // Local Storage

    this.setLocalStorage(key, value);
    return value;
  }

  getUniversal(key) {
    // Local state
    let value = this.getState(key); // Cookies

    if (isUnset(value)) {
      value = this.getCookie(key);
    } // Local Storage


    if (isUnset(value)) {
      value = this.getLocalStorage(key);
    }

    return value;
  }

  syncUniversal(key, defaultValue) {
    let value = this.getUniversal(key);

    if (isUnset(value) && isSet(defaultValue)) {
      value = defaultValue;
    }

    if (isSet(value)) {
      this.setUniversal(key, value);
    }

    return value;
  }

  removeUniversal(key) {
    this.removeState(key);
    this.removeLocalStorage(key);
    this.removeCookie(key);
  } // ------------------------------------
  // Local state (reactive)
  // ------------------------------------


  _initState() {
    // Private state is suitable to keep information not being exposed to Vuex store
    // This helps prevent stealing token from SSR response HTML
    external_vue_default.a.set(this, '_state', {}); // Use vuex for local state's if possible

    this._useVuex = this.options.vuex && this.ctx.store;

    if (this._useVuex) {
      const storeModule = {
        namespaced: true,
        state: () => this.options.initialState,
        mutations: {
          SET(state, payload) {
            external_vue_default.a.set(state, payload.key, payload.value);
          }

        }
      };
      this.ctx.store.registerModule(this.options.vuex.namespace, storeModule, {
        preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
      });
      this.state = this.ctx.store.state[this.options.vuex.namespace];
    } else {
      external_vue_default.a.set(this, 'state', {});
    }
  }

  setState(key, value) {
    if (key[0] === '_') {
      external_vue_default.a.set(this._state, key, value);
    } else {
      if (this._useVuex) {
        this.ctx.store.commit(this.options.vuex.namespace + '/SET', {
          key,
          value
        });
      } else {
        external_vue_default.a.set(this.state, key, value);
      }
    }

    return value;
  }

  getState(key) {
    if (key[0] !== '_') {
      return this.state[key];
    } else {
      return this._state[key];
    }
  }

  watchState(key, fn) {
    if (this._useVuex) {
      return this.ctx.store.watch(state => getProp(state[this.options.vuex.namespace], key), fn);
    }
  }

  removeState(key) {
    this.setState(key, undefined);
  } // ------------------------------------
  // Local storage
  // ------------------------------------


  setLocalStorage(key, value) {
    // Unset null, undefined
    if (isUnset(value)) {
      return this.removeLocalStorage(key);
    }

    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    try {
      localStorage.setItem(_key, encodeValue(value));
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e;
      }
    }

    return value;
  }

  getLocalStorage(key) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    const value = localStorage.getItem(_key);
    return decodeValue(value);
  }

  removeLocalStorage(key) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    localStorage.removeItem(_key);
  } // ------------------------------------
  // Cookies
  // ------------------------------------


  getCookies() {
    const cookieStr =  false ? undefined : this.ctx.req.headers.cookie;
    return Object(external_cookie_["parse"])(cookieStr || '') || {};
  }

  setCookie(key, value, options = {}) {
    if (!this.options.cookie ||  true && !this.ctx.res) {
      return;
    }

    const _key = this.options.cookie.prefix + key;

    const _options = Object.assign({}, this.options.cookie.options, options);

    const _value = encodeValue(value); // Unset null, undefined


    if (isUnset(value)) {
      _options.maxAge = -1;
    } // Accept expires as a number for js-cookie compatiblity


    if (typeof _options.expires === 'number') {
      _options.expires = new Date(new Date() * 1 + _options.expires * 864e+5);
    }

    const serializedCookie = Object(external_cookie_["serialize"])(_key, _value, _options);

    if (false) {} else if ( true && this.ctx.res) {
      // Send Set-Cookie header from server side
      const prevCookies = this.ctx.res.getHeader('Set-Cookie');
      this.ctx.res.setHeader('Set-Cookie', [].concat(prevCookies, serializedCookie).filter(v => v));
    }

    return value;
  }

  getCookie(key) {
    if (!this.options.cookie ||  true && !this.ctx.req) {
      return;
    }

    const _key = this.options.cookie.prefix + key;

    const cookies = this.getCookies();
    const value = cookies[_key] ? decodeURIComponent(cookies[_key]) : undefined;
    return decodeValue(value);
  }

  removeCookie(key, options) {
    this.setCookie(key, undefined, options);
  }

}
// CONCATENATED MODULE: ./.nuxt/auth/auth.js


class auth_auth_Auth {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options; // Strategies

    this.strategies = {}; // Error listeners

    this._errorListeners = []; // Redirect listeners

    this._redirectListeners = []; // Storage & State

    options.initialState = {
      user: null,
      loggedIn: false
    };
    const storage = new storage_Storage(ctx, options);
    this.$storage = storage;
    this.$state = storage.state;
  }

  async init() {
    // Reset on error
    if (this.options.resetOnError) {
      this.onError((...args) => {
        if (typeof this.options.resetOnError !== 'function' || this.options.resetOnError(...args)) {
          this.reset();
        }
      });
    } // Restore strategy


    this.$storage.syncUniversal('strategy', this.options.defaultStrategy); // Set default strategy if current one is invalid

    if (!this.strategy) {
      this.$storage.setUniversal('strategy', this.options.defaultStrategy); // Give up if still invalid

      if (!this.strategy) {
        return Promise.resolve();
      }
    }

    try {
      // Call mounted for active strategy on initial load
      await this.mounted();
    } catch (error) {
      this.callOnError(error);
    } finally {
      // Watch for loggedIn changes only in client side
      if (false) {}
    }
  } // Backward compatibility


  get state() {
    if (!this._state_warn_shown) {
      this._state_warn_shown = true; // eslint-disable-next-line no-console

      console.warn('[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn');
    }

    return this.$state;
  }

  getState(key) {
    if (!this._get_state_warn_shown) {
      this._get_state_warn_shown = true; // eslint-disable-next-line no-console

      console.warn('[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn');
    }

    return this.$storage.getState(key);
  } // ---------------------------------------------------------------
  // Strategy and Scheme
  // ---------------------------------------------------------------


  get strategy() {
    return this.strategies[this.$state.strategy];
  }

  registerStrategy(name, strategy) {
    this.strategies[name] = strategy;
  }

  setStrategy(name) {
    if (name === this.$storage.getUniversal('strategy')) {
      return Promise.resolve();
    } // Set strategy


    this.$storage.setUniversal('strategy', name); // Call mounted hook on active strategy

    return this.mounted();
  }

  mounted() {
    if (!this.strategy.mounted) {
      return this.fetchUserOnce();
    }

    return Promise.resolve(this.strategy.mounted(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'mounted'
      });
      return Promise.reject(error);
    });
  }

  loginWith(name, ...args) {
    return this.setStrategy(name).then(() => this.login(...args));
  }

  login() {
    if (!this.strategy.login) {
      return Promise.resolve();
    }

    return this.wrapLogin(this.strategy.login(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'login'
      });
      return Promise.reject(error);
    });
  }

  fetchUser() {
    if (!this.strategy.fetchUser) {
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.fetchUser(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'fetchUser'
      });
      return Promise.reject(error);
    });
  }

  logout() {
    if (!this.strategy.logout) {
      this.reset();
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.logout(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'logout'
      });
      return Promise.reject(error);
    });
  }

  setUserToken(token) {
    if (!this.strategy.setUserToken) {
      this.setToken(this.strategy.name, token);
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.setUserToken(token)).catch(error => {
      this.callOnError(error, {
        method: 'setUserToken'
      });
      return Promise.reject(error);
    });
  }

  reset() {
    if (!this.strategy.reset) {
      this.setUser(false);
      this.setToken(this.$state.strategy, false);
      this.setRefreshToken(this.$state.strategy, false);
      return Promise.resolve();
    }

    return Promise.resolve(this.strategy.reset(...arguments)).catch(error => {
      this.callOnError(error, {
        method: 'reset'
      });
      return Promise.reject(error);
    });
  } // ---------------------------------------------------------------
  // Token helpers
  // ---------------------------------------------------------------


  getToken(strategy) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.getUniversal(_key);
  }

  setToken(strategy, token) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.setUniversal(_key, token);
  }

  syncToken(strategy) {
    const _key = this.options.token.prefix + strategy;

    return this.$storage.syncUniversal(_key);
  } // ---------------------------------------------------------------
  // Refresh token helpers
  // ---------------------------------------------------------------


  getRefreshToken(strategy) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.getUniversal(_key);
  }

  setRefreshToken(strategy, refreshToken) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.setUniversal(_key, refreshToken);
  }

  syncRefreshToken(strategy) {
    const _key = this.options.refresh_token.prefix + strategy;

    return this.$storage.syncUniversal(_key);
  } // ---------------------------------------------------------------
  // User helpers
  // ---------------------------------------------------------------


  get user() {
    return this.$state.user;
  }

  get loggedIn() {
    return this.$state.loggedIn;
  }

  fetchUserOnce() {
    if (!this.$state.user) {
      return this.fetchUser(...arguments);
    }

    return Promise.resolve();
  }

  setUser(user) {
    this.$storage.setState('user', user);
    this.$storage.setState('loggedIn', Boolean(user));
  } // ---------------------------------------------------------------
  // Utils
  // ---------------------------------------------------------------


  get busy() {
    return this.$storage.getState('busy');
  }

  request(endpoint, defaults, withResponse) {
    const _endpoint = typeof defaults === 'object' ? Object.assign({}, defaults, endpoint) : endpoint;

    if (!this.ctx.app.$axios) {
      // eslint-disable-next-line no-console
      console.error('[AUTH] add the @nuxtjs/axios module to nuxt.config file');
      return;
    }

    return this.ctx.app.$axios.request(_endpoint).then(response => {
      const result = _endpoint.propertyName ? getProp(response.data, _endpoint.propertyName) : response.data;

      if (withResponse) {
        return {
          response,
          result
        };
      } else {
        return result;
      }
    }).catch(error => {
      // Call all error handlers
      this.callOnError(error, {
        method: 'request'
      }); // Throw error

      return Promise.reject(error);
    });
  }

  requestWith(strategy, endpoint, defaults, withResponse) {
    const token = this.getToken(strategy);

    const _endpoint = Object.assign({}, defaults, endpoint);

    const tokenName = this.strategies[strategy].options.tokenName || 'Authorization';

    if (!_endpoint.headers) {
      _endpoint.headers = {};
    }

    if (!_endpoint.headers[tokenName] && isSet(token) && token) {
      _endpoint.headers[tokenName] = token;
    }

    return this.request(_endpoint, false, withResponse);
  }

  wrapLogin(promise) {
    this.$storage.setState('busy', true);
    this.error = null;
    return Promise.resolve(promise).then(response => {
      this.$storage.setState('busy', false);
      return response;
    }).catch(error => {
      this.$storage.setState('busy', false);
      return Promise.reject(error);
    });
  }

  onError(listener) {
    this._errorListeners.push(listener);
  }

  callOnError(error, payload = {}) {
    this.error = error;

    for (const fn of this._errorListeners) {
      fn(error, payload);
    }
  }

  redirect(name, noRouter = false) {
    if (!this.options.redirect) {
      return;
    }

    const from = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path;
    let to = this.options.redirect[name];

    if (!to) {
      return;
    } // Apply rewrites


    if (this.options.rewriteRedirects) {
      if (name === 'login' && isRelativeURL(from) && !isSameURL(to, from)) {
        this.$storage.setUniversal('redirect', from);
      }

      if (name === 'home') {
        const redirect = this.$storage.getUniversal('redirect');
        this.$storage.setUniversal('redirect', null);

        if (isRelativeURL(redirect)) {
          to = redirect;
        }
      }
    } // Call onRedirect hook


    to = this.callOnRedirect(to, from) || to; // Prevent infinity redirects

    if (isSameURL(to, from)) {
      return;
    }

    if (false) {} else {
      this.ctx.redirect(to, this.ctx.query);
    }
  }

  onRedirect(listener) {
    this._redirectListeners.push(listener);
  }

  callOnRedirect(to, from) {
    for (const fn of this._redirectListeners) {
      to = fn(to, from) || to;
    }

    return to;
  }

  hasScope(scope) {
    const userScopes = this.$state.user && getProp(this.$state.user, this.options.scopeKey);

    if (!userScopes) {
      return false;
    }

    if (Array.isArray(userScopes)) {
      return userScopes.includes(scope);
    }

    return Boolean(getProp(userScopes, scope));
  }

}
// CONCATENATED MODULE: ./.nuxt/auth/middleware.js



_nuxt_middleware.auth = function (ctx) {
  // Disable middleware if options: { auth: false } is set on the route
  if (routeOption(ctx.route, 'auth', false)) {
    return;
  } // Disable middleware if no route was matched to allow 404/error page


  const matches = [];
  const Components = utilities_getMatchedComponents(ctx.route, matches);

  if (!Components.length) {
    return;
  }

  const {
    login,
    callback
  } = ctx.$auth.options.redirect;
  const pageIsInGuestMode = routeOption(ctx.route, 'auth', 'guest');

  const insidePage = page => normalizePath(ctx.route.path) === normalizePath(page);

  if (ctx.$auth.$state.loggedIn) {
    // -- Authorized --
    if (!login || insidePage(login) || pageIsInGuestMode) {
      ctx.$auth.redirect('home');
    }
  } else {
    // -- Guest --
    // (Those passing `callback` at runtime need to mark their callback component
    // with `auth: false` to avoid an unnecessary redirect from callback to login)
    if (!pageIsInGuestMode && (!callback || !insidePage(callback))) {
      ctx.$auth.redirect('login');
    }
  }
};
// CONCATENATED MODULE: ./.nuxt/auth/schemes/local.js
class LocalScheme {
  constructor(auth, options) {
    this.$auth = auth;
    this.name = options._name;
    this.options = Object.assign({}, DEFAULTS, options);
  }

  _setToken(token) {
    if (this.options.globalToken) {
      // Set Authorization token for all axios requests
      this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, token);
    }
  }

  _clearToken() {
    if (this.options.globalToken) {
      // Clear Authorization token for all axios requests
      this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, false);
    }
  }

  mounted() {
    if (this.options.tokenRequired) {
      const token = this.$auth.syncToken(this.name);

      this._setToken(token);
    }

    return this.$auth.fetchUserOnce();
  }

  async login(endpoint) {
    if (!this.options.endpoints.login) {
      return;
    } // Ditch any leftover local tokens before attempting to log in


    await this.$auth.reset();
    const {
      response,
      result
    } = await this.$auth.request(endpoint, this.options.endpoints.login, true);

    if (this.options.tokenRequired) {
      const token = this.options.tokenType ? this.options.tokenType + ' ' + result : result;
      this.$auth.setToken(this.name, token);

      this._setToken(token);
    }

    if (this.options.autoFetchUser) {
      await this.fetchUser();
    }

    return response;
  }

  async setUserToken(tokenValue) {
    const token = this.options.tokenType ? this.options.tokenType + ' ' + tokenValue : tokenValue;
    this.$auth.setToken(this.name, token);

    this._setToken(token);

    return this.fetchUser();
  }

  async fetchUser(endpoint) {
    // Token is required but not available
    if (this.options.tokenRequired && !this.$auth.getToken(this.name)) {
      return;
    } // User endpoint is disabled.


    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return;
    } // Try to fetch user and then set


    const user = await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.user);
    this.$auth.setUser(user);
  }

  async logout(endpoint) {
    // Only connect to logout endpoint if it's configured
    if (this.options.endpoints.logout) {
      await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.logout).catch(() => {});
    } // But reset regardless


    return this.$auth.reset();
  }

  async reset() {
    if (this.options.tokenRequired) {
      this._clearToken();
    }

    this.$auth.setUser(false);
    this.$auth.setToken(this.name, false);
    this.$auth.setRefreshToken(this.name, false);
    return Promise.resolve();
  }

}
const DEFAULTS = {
  tokenRequired: true,
  tokenType: 'Bearer',
  globalToken: true,
  tokenName: 'Authorization',
  autoFetchUser: true
};
// CONCATENATED MODULE: ./.nuxt/auth/plugin.js

 // Active schemes


/* harmony default export */ var auth_plugin = (function (ctx, inject) {
  // Options
  const options = {
    "resetOnError": false,
    "scopeKey": "scope",
    "rewriteRedirects": true,
    "fullPathRedirect": false,
    "watchLoggedIn": true,
    "redirect": {
      "login": "/account/login",
      "logout": "/account/login",
      "home": "/",
      "callback": "/account/login"
    },
    "vuex": {
      "namespace": "auth"
    },
    "cookie": {
      "prefix": "auth.",
      "options": {
        "path": "/"
      }
    },
    "localStorage": {
      "prefix": "auth."
    },
    "token": {
      "prefix": "_token."
    },
    "refresh_token": {
      "prefix": "_refresh_token."
    },
    "defaultStrategy": "local"
  }; // Create a new Auth instance

  const $auth = new auth_auth_Auth(ctx, options); // Register strategies
  // local

  $auth.registerStrategy('local', new LocalScheme($auth, {
    "endpoints": {
      "login": {
        "url": "/api/account/login",
        "method": "post",
        "propertyName": "token"
      },
      "logout": false,
      "user": {
        "url": "/api/account/me",
        "method": "get",
        "propertyName": "data"
      }
    },
    "tokenRequired": true,
    "tokenType": "Bearer",
    "_name": "local"
  })); // Inject it to nuxt context as $auth

  inject('auth', $auth);
  ctx.$auth = $auth; // Initialize auth

  return $auth.init().catch(error => {
    if (false) {}
  });
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./toast.js (mode: 'client')

 // Source: ./axios.js (mode: 'all')

 // Source: ./workbox.js (mode: 'client')

 // Source: ./pwa/meta.js (mode: 'all')

 // Source: ./pwa/icons.js (mode: 'all')

 // Source: ../plugins/bus.js (mode: 'all')

 // Source: ../plugins/feather.js (mode: 'all')

 // Source: ../plugins/api.js (mode: 'all')

 // Source: ../plugins/sweet.js (mode: 'all')

 // Source: ../plugins/mixins/urls.js (mode: 'all')

 // Source: ../plugins/mixins/auth.js (mode: 'all')

 // Source: ./auth/plugin.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Caskli - Brew short URLs",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "name": "msapplication-TileColor",
        "content": "#614BE6"
      }, {
        "name": "theme-color",
        "content": "#614BE6"
      }, {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black-translucent"
      }, {
        "name": "description",
        "content": "Brew URLs with Csk.li - Another URL shortner. "
      }, {
        "name": "application-name",
        "content": "Caskli"
      }, {
        "hid": "Caskli - Brew URLs",
        "name": "Caskli - Brew URLs",
        "content": "Caskli - Another URL shortner"
      }],
      "link": [{
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Roboto+Mono:wght@400;500&display=swap"
      }, {
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico?v2"
      }, {
        "rel": "apple-touch-icon",
        "sizes": "180x180",
        "href": "\u002Fapple-touch-icon.png"
      }, {
        "rel": "icon",
        "type": "image\u002Fpng",
        "sizes": "32x32",
        "href": "\u002Ffavicon-32x32.png"
      }, {
        "rel": "icon",
        "type": "image\u002Fpng",
        "sizes": "16x16",
        "href": "\u002Ffavicon-16x16.png"
      }, {
        "rel": "manifest",
        "href": "\u002Fsite.webmanifest"
      }, {
        "rel": "mask-icon",
        "href": "\u002Fsafari-pinned-tab.svg",
        "color": "#c5442b"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (false) {}

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (false) {}

  if (typeof pwa_meta === 'function') {
    await pwa_meta(app.context, inject);
  }

  if (typeof icons === 'function') {
    await icons(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/bus.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/bus.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/feather.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/feather.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof api === 'function') {
    await api(app.context, inject);
  }

  if (typeof sweet_default.a === 'function') {
    await sweet_default()(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/mixins/urls.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/mixins/urls.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/mixins/auth.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/mixins/auth.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof auth_plugin === 'function') {
    await auth_plugin(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map