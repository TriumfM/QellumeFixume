/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/public/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueResource = __webpack_require__(5);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	var _vueRouter = __webpack_require__(7);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _vueLocalstorage = __webpack_require__(8);

	var _vueLocalstorage2 = _interopRequireDefault(_vueLocalstorage);

	var _App = __webpack_require__(9);

	var _App2 = _interopRequireDefault(_App);

	var _Page = __webpack_require__(21);

	var _Page2 = _interopRequireDefault(_Page);

	var _Singel_Player = __webpack_require__(27);

	var _Singel_Player2 = _interopRequireDefault(_Singel_Player);

	var _Multi_Player = __webpack_require__(32);

	var _Multi_Player2 = _interopRequireDefault(_Multi_Player);

	var _Game = __webpack_require__(35);

	var _Game2 = _interopRequireDefault(_Game);

	var _New_game = __webpack_require__(40);

	var _New_game2 = _interopRequireDefault(_New_game);

	var _Find_game = __webpack_require__(45);

	var _Find_game2 = _interopRequireDefault(_Find_game);

	var _StartMulti = __webpack_require__(50);

	var _StartMulti2 = _interopRequireDefault(_StartMulti);

	var _Game_Multi_Player = __webpack_require__(55);

	var _Game_Multi_Player2 = _interopRequireDefault(_Game_Multi_Player);

	var _notification = __webpack_require__(60);

	var _notification2 = _interopRequireDefault(_notification);

	var _store = __webpack_require__(61);

	var _laravelEcho = __webpack_require__(63);

	var _laravelEcho2 = _interopRequireDefault(_laravelEcho);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//-------------------------------------------

	window.Pusher = __webpack_require__(64);
	// import Pusher from "pusher-js";

	window.Echo = new _laravelEcho2.default({
	  broadcaster: 'pusher',
	  key: '4096d082d0c16aeb5e11',
	  cluster: "eu"
	});
	//=----------------------------------------


	// Install plugins
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_vueResource2.default);
	_vue2.default.use(_vueLocalstorage2.default);

	_vue2.default.config.devtools = false;
	_vue2.default.config.debug = false;
	_vue2.default.config.silent = true;

	// Vue.use(socketio)


	var routes = [{
	  path: '/page1',
	  name: 'page1',
	  component: _Page2.default
	}, {
	  path: '/singelplayer',
	  name: 'singelplayer',
	  component: _Singel_Player2.default
	}, {
	  path: '/multiplayer',
	  name: 'multiplayer',
	  component: _Multi_Player2.default
	}, {
	  path: '/game',
	  name: 'game',
	  component: _Game2.default
	}, {
	  path: '/newgame',
	  name: 'new_game',
	  component: _New_game2.default
	}, {
	  path: '/findgame',
	  name: 'find_game',
	  component: _Find_game2.default
	}, {
	  path: '/startmultiplayer',
	  name: 'startmultiplayer',
	  component: _StartMulti2.default
	}, {
	  path: '/game-multiplayer', //duhet te dergohet id ne url->/game-multiplayer/:id
	  name: 'startmultiplayer',
	  component: _Game_Multi_Player2.default
	}, {
	  path: 'enterRoom/id',
	  name: 'EnterRoom',
	  component: _Game2.default
	}, { path: '*', redirect: '/page1' }];

	// Set up a new router
	var router = new _vueRouter2.default({
	  mode: 'history',
	  routes: routes
	});

	new _vue2.default({
	  router: router,
	  store: _store.store,
	  render: function render(h) {
	    return h(_App2.default);
	  }
	}).$mount('#admin');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/*!
	 * Vue.js v2.5.2
	 * (c) 2014-2017 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	/*  */

	// these helpers produces better vm code in JS engines due to their
	// explicitness and function inlining
	function isUndef (v) {
	  return v === undefined || v === null
	}

	function isDef (v) {
	  return v !== undefined && v !== null
	}

	function isTrue (v) {
	  return v === true
	}

	function isFalse (v) {
	  return v === false
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return (
	    typeof value === 'string' ||
	    typeof value === 'number' ||
	    typeof value === 'boolean'
	  )
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Get the raw type string of a value e.g. [object Object]
	 */
	var _toString = Object.prototype.toString;

	function toRawType (value) {
	  return _toString.call(value).slice(8, -1)
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	function isPlainObject (obj) {
	  return _toString.call(obj) === '[object Object]'
	}

	function isRegExp (v) {
	  return _toString.call(v) === '[object RegExp]'
	}

	/**
	 * Check if val is a valid array index.
	 */
	function isValidArrayIndex (val) {
	  var n = parseFloat(String(val));
	  return n >= 0 && Math.floor(n) === n && isFinite(val)
	}

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val);
	  return isNaN(n) ? val : n
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);

	/**
	 * Check if a attribute is a reserved attribute.
	 */
	var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

	/**
	 * Remove an item from an array
	 */
	function remove (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return (function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  })
	}

	/**
	 * Camelize a hyphen-delimited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /\B([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '-$1').toLowerCase()
	});

	/**
	 * Simple bind, faster than native
	 */
	function bind (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}

	/**
	 * Perform no operation.
	 * Stubbing args to make Flow happy without leaving useless transpiled code
	 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
	 */
	function noop (a, b, c) {}

	/**
	 * Always return false.
	 */
	var no = function (a, b, c) { return false; };

	/**
	 * Return same value
	 */
	var identity = function (_) { return _; };

	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  if (a === b) { return true }
	  var isObjectA = isObject(a);
	  var isObjectB = isObject(b);
	  if (isObjectA && isObjectB) {
	    try {
	      var isArrayA = Array.isArray(a);
	      var isArrayB = Array.isArray(b);
	      if (isArrayA && isArrayB) {
	        return a.length === b.length && a.every(function (e, i) {
	          return looseEqual(e, b[i])
	        })
	      } else if (!isArrayA && !isArrayB) {
	        var keysA = Object.keys(a);
	        var keysB = Object.keys(b);
	        return keysA.length === keysB.length && keysA.every(function (key) {
	          return looseEqual(a[key], b[key])
	        })
	      } else {
	        /* istanbul ignore next */
	        return false
	      }
	    } catch (e) {
	      /* istanbul ignore next */
	      return false
	    }
	  } else if (!isObjectA && !isObjectB) {
	    return String(a) === String(b)
	  } else {
	    return false
	  }
	}

	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}

	/**
	 * Ensure a function is called only once.
	 */
	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn.apply(this, arguments);
	    }
	  }
	}

	var SSR_ATTR = 'data-server-rendered';

	var ASSET_TYPES = [
	  'component',
	  'directive',
	  'filter'
	];

	var LIFECYCLE_HOOKS = [
	  'beforeCreate',
	  'created',
	  'beforeMount',
	  'mounted',
	  'beforeUpdate',
	  'updated',
	  'beforeDestroy',
	  'destroyed',
	  'activated',
	  'deactivated',
	  'errorCaptured'
	];

	/*  */

	var config = ({
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Show production mode tip message on boot?
	   */
	  productionTip: process.env.NODE_ENV !== 'production',

	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Whether to record perf
	   */
	  performance: false,

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Warn handler for watcher warns
	   */
	  warnHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: [],

	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if an attribute is reserved so that it cannot be used as a component
	   * prop. This is platform-dependent and may be overwritten.
	   */
	  isReservedAttr: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Parse the real tag name for the specific platform.
	   */
	  parsePlatformTagName: identity,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * Exposed for legacy reasons
	   */
	  _lifecycleHooks: LIFECYCLE_HOOKS
	});

	/*  */

	var emptyObject = Object.freeze({});

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  }
	  var segments = path.split('.');
	  return function (obj) {
	    for (var i = 0; i < segments.length; i++) {
	      if (!obj) { return }
	      obj = obj[segments[i]];
	    }
	    return obj
	  }
	}

	/*  */

	// can we use __proto__?
	var hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

	// Firefox has a "watch" function on Object.prototype...
	var nativeWatch = ({}).watch;

	var supportsPassive = false;
	if (inBrowser) {
	  try {
	    var opts = {};
	    Object.defineProperty(opts, 'passive', ({
	      get: function get () {
	        /* istanbul ignore next */
	        supportsPassive = true;
	      }
	    })); // https://github.com/facebook/flow/issues/285
	    window.addEventListener('test-passive', null, opts);
	  } catch (e) {}
	}

	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function () {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer
	};

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative (Ctor) {
	  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
	}

	var hasSymbol =
	  typeof Symbol !== 'undefined' && isNative(Symbol) &&
	  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

	var _Set;
	/* istanbul ignore if */ // $flow-disable-line
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] === true
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }());
	}

	/*  */

	var warn = noop;
	var tip = noop;
	var generateComponentTrace = (noop); // work around flow check
	var formatComponentName = (noop);

	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined';
	  var classifyRE = /(?:^|[-_])(\w)/g;
	  var classify = function (str) { return str
	    .replace(classifyRE, function (c) { return c.toUpperCase(); })
	    .replace(/[-_]/g, ''); };

	  warn = function (msg, vm) {
	    var trace = vm ? generateComponentTrace(vm) : '';

	    if (config.warnHandler) {
	      config.warnHandler.call(null, msg, vm, trace);
	    } else if (hasConsole && (!config.silent)) {
	      console.error(("[Vue warn]: " + msg + trace));
	    }
	  };

	  tip = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.warn("[Vue tip]: " + msg + (
	        vm ? generateComponentTrace(vm) : ''
	      ));
	    }
	  };

	  formatComponentName = function (vm, includeFile) {
	    if (vm.$root === vm) {
	      return '<Root>'
	    }
	    var options = typeof vm === 'function' && vm.cid != null
	      ? vm.options
	      : vm._isVue
	        ? vm.$options || vm.constructor.options
	        : vm || {};
	    var name = options.name || options._componentTag;
	    var file = options.__file;
	    if (!name && file) {
	      var match = file.match(/([^/\\]+)\.vue$/);
	      name = match && match[1];
	    }

	    return (
	      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
	      (file && includeFile !== false ? (" at " + file) : '')
	    )
	  };

	  var repeat = function (str, n) {
	    var res = '';
	    while (n) {
	      if (n % 2 === 1) { res += str; }
	      if (n > 1) { str += str; }
	      n >>= 1;
	    }
	    return res
	  };

	  generateComponentTrace = function (vm) {
	    if (vm._isVue && vm.$parent) {
	      var tree = [];
	      var currentRecursiveSequence = 0;
	      while (vm) {
	        if (tree.length > 0) {
	          var last = tree[tree.length - 1];
	          if (last.constructor === vm.constructor) {
	            currentRecursiveSequence++;
	            vm = vm.$parent;
	            continue
	          } else if (currentRecursiveSequence > 0) {
	            tree[tree.length - 1] = [last, currentRecursiveSequence];
	            currentRecursiveSequence = 0;
	          }
	        }
	        tree.push(vm);
	        vm = vm.$parent;
	      }
	      return '\n\nfound in\n\n' + tree
	        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
	            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
	            : formatComponentName(vm))); })
	        .join('\n')
	    } else {
	      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
	    }
	  };
	}

	/*  */


	var uid = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove(this.subs, sub);
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify () {
	  // stabilize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];

	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}

	function popTarget () {
	  Dep.target = targetStack.pop();
	}

	/*  */

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  context,
	  componentOptions,
	  asyncFactory
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = undefined;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.functionalOptions = undefined;
	  this.functionalScopeId = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.componentInstance = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	  this.asyncFactory = asyncFactory;
	  this.asyncMeta = undefined;
	  this.isAsyncPlaceholder = false;
	};

	var prototypeAccessors = { child: { configurable: true } };

	// DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */
	prototypeAccessors.child.get = function () {
	  return this.componentInstance
	};

	Object.defineProperties( VNode.prototype, prototypeAccessors );

	var createEmptyVNode = function (text) {
	  if ( text === void 0 ) text = '';

	  var node = new VNode();
	  node.text = text;
	  node.isComment = true;
	  return node
	};

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode, deep) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.context,
	    vnode.componentOptions,
	    vnode.asyncFactory
	  );
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isComment = vnode.isComment;
	  cloned.isCloned = true;
	  if (deep && vnode.children) {
	    cloned.children = cloneVNodes(vnode.children);
	  }
	  return cloned
	}

	function cloneVNodes (vnodes, deep) {
	  var len = vnodes.length;
	  var res = new Array(len);
	  for (var i = 0; i < len; i++) {
	    res[i] = cloneVNode(vnodes[i], deep);
	  }
	  return res
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true
	};

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive(obj, keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src, keys) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value, asRootData) {
	  if (!isObject(value) || value instanceof VNode) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  if (asRootData && ob) {
	    ob.vmCount++;
	  }
	  return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive (
	  obj,
	  key,
	  val,
	  customSetter,
	  shallow
	) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = !shallow && observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	          if (Array.isArray(value)) {
	            dependArray(value);
	          }
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
	      }
	      /* eslint-enable no-self-compare */
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = !shallow && observe(newVal);
	      dep.notify();
	    }
	  });
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (target, key, val) {
	  if (Array.isArray(target) && isValidArrayIndex(key)) {
	    target.length = Math.max(target.length, key);
	    target.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(target, key)) {
	    target[key] = val;
	    return val
	  }
	  var ob = (target).__ob__;
	  if (target._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return val
	  }
	  if (!ob) {
	    target[key] = val;
	    return val
	  }
	  defineReactive(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (target, key) {
	  if (Array.isArray(target) && isValidArrayIndex(key)) {
	    target.splice(key, 1);
	    return
	  }
	  var ob = (target).__ob__;
	  if (target._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(target, key)) {
	    return
	  }
	  delete target[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;

	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
	  var key, toVal, fromVal;
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */
	function mergeDataOrFn (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        typeof childVal === 'function' ? childVal.call(this) : childVal,
	        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : parentVal;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}

	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    if (childVal && typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );

	      return parentVal
	    }
	    return mergeDataOrFn.call(this, parentVal, childVal)
	  }

	  return mergeDataOrFn(parentVal, childVal, vm)
	};

	/**
	 * Hooks and props are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}

	LIFECYCLE_HOOKS.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  var res = Object.create(parentVal || null);
	  if (childVal) {
	    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
	    return extend(res, childVal)
	  } else {
	    return res
	  }
	}

	ASSET_TYPES.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  // work around Firefox's Object.prototype.watch...
	  if (parentVal === nativeWatch) { parentVal = undefined; }
	  if (childVal === nativeWatch) { childVal = undefined; }
	  /* istanbul ignore if */
	  if (!childVal) { return Object.create(parentVal || null) }
	  if (process.env.NODE_ENV !== 'production') {
	    assertObjectType(key, childVal, vm);
	  }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key$1 in childVal) {
	    var parent = ret[key$1];
	    var child = childVal[key$1];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key$1] = parent
	      ? parent.concat(child)
	      : Array.isArray(child) ? child : [child];
	  }
	  return ret
	};

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.inject =
	strats.computed = function (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  if (childVal && process.env.NODE_ENV !== 'production') {
	    assertObjectType(key, childVal, vm);
	  }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  if (childVal) { extend(ret, childVal); }
	  return ret
	};
	strats.provide = mergeDataOrFn;

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};

	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn(
	        'Do not use built-in or reserved HTML elements as component ' +
	        'id: ' + key
	      );
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options, vm) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn(
	      "Invalid value for option \"props\": expected an Array or an Object, " +
	      "but got " + (toRawType(props)) + ".",
	      vm
	    );
	  }
	  options.props = res;
	}

	/**
	 * Normalize all injections into Object-based format
	 */
	function normalizeInject (options, vm) {
	  var inject = options.inject;
	  var normalized = options.inject = {};
	  if (Array.isArray(inject)) {
	    for (var i = 0; i < inject.length; i++) {
	      normalized[inject[i]] = { from: inject[i] };
	    }
	  } else if (isPlainObject(inject)) {
	    for (var key in inject) {
	      var val = inject[key];
	      normalized[key] = isPlainObject(val)
	        ? extend({ from: key }, val)
	        : { from: val };
	    }
	  } else if (process.env.NODE_ENV !== 'production' && inject) {
	    warn(
	      "Invalid value for option \"inject\": expected an Array or an Object, " +
	      "but got " + (toRawType(inject)) + ".",
	      vm
	    );
	  }
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}

	function assertObjectType (name, value, vm) {
	  if (!isPlainObject(value)) {
	    warn(
	      "Invalid value for option \"" + name + "\": expected an Object, " +
	      "but got " + (toRawType(value)) + ".",
	      vm
	    );
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    checkComponents(child);
	  }

	  if (typeof child === 'function') {
	    child = child.options;
	  }

	  normalizeProps(child, vm);
	  normalizeInject(child, vm);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) { return assets[id] }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}

	/*  */

	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isType(Boolean, prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
	    warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm._props[key] !== undefined
	  ) {
	    return vm._props[key]
	  }
	  // call factory function for non-Function types
	  // a value is Function if its prototype is function even across different execution context
	  return typeof def === 'function' && getType(prop.type) !== 'Function'
	    ? def.call(vm)
	    : def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType || '');
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      "Invalid prop: type check failed for prop \"" + name + "\"." +
	      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
	      ", got " + (toRawType(value)) + ".",
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}

	var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (simpleCheckRE.test(expectedType)) {
	    var t = typeof value;
	    valid = t === expectedType.toLowerCase();
	    // for primitive wrapper objects
	    if (!valid && t === 'object') {
	      valid = value instanceof type;
	    }
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match ? match[1] : ''
	}

	function isType (type, fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === getType(type)
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === getType(type)) {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}

	/*  */

	function handleError (err, vm, info) {
	  if (vm) {
	    var cur = vm;
	    while ((cur = cur.$parent)) {
	      var hooks = cur.$options.errorCaptured;
	      if (hooks) {
	        for (var i = 0; i < hooks.length; i++) {
	          try {
	            var capture = hooks[i].call(cur, err, vm, info) === false;
	            if (capture) { return }
	          } catch (e) {
	            globalHandleError(e, cur, 'errorCaptured hook');
	          }
	        }
	      }
	    }
	  }
	  globalHandleError(err, vm, info);
	}

	function globalHandleError (err, vm, info) {
	  if (config.errorHandler) {
	    try {
	      return config.errorHandler.call(null, err, vm, info)
	    } catch (e) {
	      logError(e, null, 'config.errorHandler');
	    }
	  }
	  logError(err, vm, info);
	}

	function logError (err, vm, info) {
	  if (process.env.NODE_ENV !== 'production') {
	    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
	  }
	  /* istanbul ignore else */
	  if (inBrowser && typeof console !== 'undefined') {
	    console.error(err);
	  } else {
	    throw err
	  }
	}

	/*  */
	/* globals MessageChannel */

	var callbacks = [];
	var pending = false;

	function flushCallbacks () {
	  pending = false;
	  var copies = callbacks.slice(0);
	  callbacks.length = 0;
	  for (var i = 0; i < copies.length; i++) {
	    copies[i]();
	  }
	}

	// Here we have async deferring wrappers using both micro and macro tasks.
	// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
	// micro tasks have too high a priority and fires in between supposedly
	// sequential events (e.g. #4521, #6690) or even between bubbling of the same
	// event (#6566). However, using macro tasks everywhere also has subtle problems
	// when state is changed right before repaint (e.g. #6813, out-in transitions).
	// Here we use micro task by default, but expose a way to force macro task when
	// needed (e.g. in event handlers attached by v-on).
	var microTimerFunc;
	var macroTimerFunc;
	var useMacroTask = false;

	// Determine (macro) Task defer implementation.
	// Technically setImmediate should be the ideal choice, but it's only available
	// in IE. The only polyfill that consistently queues the callback after all DOM
	// events triggered in the same loop is by using MessageChannel.
	/* istanbul ignore if */
	if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
	  macroTimerFunc = function () {
	    setImmediate(flushCallbacks);
	  };
	} else if (typeof MessageChannel !== 'undefined' && (
	  isNative(MessageChannel) ||
	  // PhantomJS
	  MessageChannel.toString() === '[object MessageChannelConstructor]'
	)) {
	  var channel = new MessageChannel();
	  var port = channel.port2;
	  channel.port1.onmessage = flushCallbacks;
	  macroTimerFunc = function () {
	    port.postMessage(1);
	  };
	} else {
	  /* istanbul ignore next */
	  macroTimerFunc = function () {
	    setTimeout(flushCallbacks, 0);
	  };
	}

	// Determine MicroTask defer implementation.
	/* istanbul ignore next, $flow-disable-line */
	if (typeof Promise !== 'undefined' && isNative(Promise)) {
	  var p = Promise.resolve();
	  microTimerFunc = function () {
	    p.then(flushCallbacks);
	    // in problematic UIWebViews, Promise.then doesn't completely break, but
	    // it can get stuck in a weird state where callbacks are pushed into the
	    // microtask queue but the queue isn't being flushed, until the browser
	    // needs to do some other work, e.g. handle a timer. Therefore we can
	    // "force" the microtask queue to be flushed by adding an empty timer.
	    if (isIOS) { setTimeout(noop); }
	  };
	} else {
	  // fallback to macro
	  microTimerFunc = macroTimerFunc;
	}

	/**
	 * Wrap a function so that if any code inside triggers state change,
	 * the changes are queued using a Task instead of a MicroTask.
	 */
	function withMacroTask (fn) {
	  return fn._withTask || (fn._withTask = function () {
	    useMacroTask = true;
	    var res = fn.apply(null, arguments);
	    useMacroTask = false;
	    return res
	  })
	}

	function nextTick (cb, ctx) {
	  var _resolve;
	  callbacks.push(function () {
	    if (cb) {
	      try {
	        cb.call(ctx);
	      } catch (e) {
	        handleError(e, ctx, 'nextTick');
	      }
	    } else if (_resolve) {
	      _resolve(ctx);
	    }
	  });
	  if (!pending) {
	    pending = true;
	    if (useMacroTask) {
	      macroTimerFunc();
	    } else {
	      microTimerFunc();
	    }
	  }
	  // $flow-disable-line
	  if (!cb && typeof Promise !== 'undefined') {
	    return new Promise(function (resolve) {
	      _resolve = resolve;
	    })
	  }
	}

	/*  */

	var mark;
	var measure;

	if (process.env.NODE_ENV !== 'production') {
	  var perf = inBrowser && window.performance;
	  /* istanbul ignore if */
	  if (
	    perf &&
	    perf.mark &&
	    perf.measure &&
	    perf.clearMarks &&
	    perf.clearMeasures
	  ) {
	    mark = function (tag) { return perf.mark(tag); };
	    measure = function (name, startTag, endTag) {
	      perf.measure(name, startTag, endTag);
	      perf.clearMarks(startTag);
	      perf.clearMarks(endTag);
	      perf.clearMeasures(name);
	    };
	  }
	}

	/* not type checking this file because flow doesn't play well with Proxy */

	var initProxy;

	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );

	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      'referenced during render. Make sure that this property is reactive, ' +
	      'either in the data option, or for class-based components, by ' +
	      'initializing the property. ' +
	      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
	      target
	    );
	  };

	  var hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);

	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }

	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed
	    }
	  };

	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key]
	    }
	  };

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */

	var normalizeEvent = cached(function (name) {
	  var passive = name.charAt(0) === '&';
	  name = passive ? name.slice(1) : name;
	  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
	  name = once$$1 ? name.slice(1) : name;
	  var capture = name.charAt(0) === '!';
	  name = capture ? name.slice(1) : name;
	  return {
	    name: name,
	    once: once$$1,
	    capture: capture,
	    passive: passive
	  }
	});

	function createFnInvoker (fns) {
	  function invoker () {
	    var arguments$1 = arguments;

	    var fns = invoker.fns;
	    if (Array.isArray(fns)) {
	      var cloned = fns.slice();
	      for (var i = 0; i < cloned.length; i++) {
	        cloned[i].apply(null, arguments$1);
	      }
	    } else {
	      // return handler return value for single handlers
	      return fns.apply(null, arguments)
	    }
	  }
	  invoker.fns = fns;
	  return invoker
	}

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, event;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    event = normalizeEvent(name);
	    if (isUndef(cur)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
	        vm
	      );
	    } else if (isUndef(old)) {
	      if (isUndef(cur.fns)) {
	        cur = on[name] = createFnInvoker(cur);
	      }
	      add(event.name, cur, event.once, event.capture, event.passive);
	    } else if (cur !== old) {
	      old.fns = cur;
	      on[name] = old;
	    }
	  }
	  for (name in oldOn) {
	    if (isUndef(on[name])) {
	      event = normalizeEvent(name);
	      remove$$1(event.name, oldOn[name], event.capture);
	    }
	  }
	}

	/*  */

	function mergeVNodeHook (def, hookKey, hook) {
	  var invoker;
	  var oldHook = def[hookKey];

	  function wrappedHook () {
	    hook.apply(this, arguments);
	    // important: remove merged hook to ensure it's called only once
	    // and prevent memory leak
	    remove(invoker.fns, wrappedHook);
	  }

	  if (isUndef(oldHook)) {
	    // no existing hook
	    invoker = createFnInvoker([wrappedHook]);
	  } else {
	    /* istanbul ignore if */
	    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
	      // already a merged invoker
	      invoker = oldHook;
	      invoker.fns.push(wrappedHook);
	    } else {
	      // existing plain hook
	      invoker = createFnInvoker([oldHook, wrappedHook]);
	    }
	  }

	  invoker.merged = true;
	  def[hookKey] = invoker;
	}

	/*  */

	function extractPropsFromVNodeData (
	  data,
	  Ctor,
	  tag
	) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (isUndef(propOptions)) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  if (isDef(attrs) || isDef(props)) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      if (process.env.NODE_ENV !== 'production') {
	        var keyInLowerCase = key.toLowerCase();
	        if (
	          key !== keyInLowerCase &&
	          attrs && hasOwn(attrs, keyInLowerCase)
	        ) {
	          tip(
	            "Prop \"" + keyInLowerCase + "\" is passed to component " +
	            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
	            " \"" + key + "\". " +
	            "Note that HTML attributes are case-insensitive and camelCased " +
	            "props need to use their kebab-case equivalents when using in-DOM " +
	            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
	          );
	        }
	      }
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey, false);
	    }
	  }
	  return res
	}

	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (isDef(hash)) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}

	/*  */

	// The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:

	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// normalization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
	function simpleNormalizeChildren (children) {
	  for (var i = 0; i < children.length; i++) {
	    if (Array.isArray(children[i])) {
	      return Array.prototype.concat.apply([], children)
	    }
	  }
	  return children
	}

	// 2. When the children contains constructs that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren (children) {
	  return isPrimitive(children)
	    ? [createTextVNode(children)]
	    : Array.isArray(children)
	      ? normalizeArrayChildren(children)
	      : undefined
	}

	function isTextNode (node) {
	  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
	}

	function normalizeArrayChildren (children, nestedIndex) {
	  var res = [];
	  var i, c, lastIndex, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (isUndef(c) || typeof c === 'boolean') { continue }
	    lastIndex = res.length - 1;
	    last = res[lastIndex];
	    //  nested
	    if (Array.isArray(c)) {
	      if (c.length > 0) {
	        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
	        // merge adjacent text nodes
	        if (isTextNode(c[0]) && isTextNode(last)) {
	          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
	          c.shift();
	        }
	        res.push.apply(res, c);
	      }
	    } else if (isPrimitive(c)) {
	      if (isTextNode(last)) {
	        // merge adjacent text nodes
	        // this is necessary for SSR hydration because text nodes are
	        // essentially merged when rendered to HTML strings
	        res[lastIndex] = createTextVNode(last.text + c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (isTextNode(c) && isTextNode(last)) {
	        // merge adjacent text nodes
	        res[lastIndex] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (isTrue(children._isVList) &&
	          isDef(c.tag) &&
	          isUndef(c.key) &&
	          isDef(nestedIndex)) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res
	}

	/*  */

	function ensureCtor (comp, base) {
	  if (
	    comp.__esModule ||
	    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
	  ) {
	    comp = comp.default;
	  }
	  return isObject(comp)
	    ? base.extend(comp)
	    : comp
	}

	function createAsyncPlaceholder (
	  factory,
	  data,
	  context,
	  children,
	  tag
	) {
	  var node = createEmptyVNode();
	  node.asyncFactory = factory;
	  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
	  return node
	}

	function resolveAsyncComponent (
	  factory,
	  baseCtor,
	  context
	) {
	  if (isTrue(factory.error) && isDef(factory.errorComp)) {
	    return factory.errorComp
	  }

	  if (isDef(factory.resolved)) {
	    return factory.resolved
	  }

	  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
	    return factory.loadingComp
	  }

	  if (isDef(factory.contexts)) {
	    // already pending
	    factory.contexts.push(context);
	  } else {
	    var contexts = factory.contexts = [context];
	    var sync = true;

	    var forceRender = function () {
	      for (var i = 0, l = contexts.length; i < l; i++) {
	        contexts[i].$forceUpdate();
	      }
	    };

	    var resolve = once(function (res) {
	      // cache resolved
	      factory.resolved = ensureCtor(res, baseCtor);
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        forceRender();
	      }
	    });

	    var reject = once(function (reason) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	      if (isDef(factory.errorComp)) {
	        factory.error = true;
	        forceRender();
	      }
	    });

	    var res = factory(resolve, reject);

	    if (isObject(res)) {
	      if (typeof res.then === 'function') {
	        // () => Promise
	        if (isUndef(factory.resolved)) {
	          res.then(resolve, reject);
	        }
	      } else if (isDef(res.component) && typeof res.component.then === 'function') {
	        res.component.then(resolve, reject);

	        if (isDef(res.error)) {
	          factory.errorComp = ensureCtor(res.error, baseCtor);
	        }

	        if (isDef(res.loading)) {
	          factory.loadingComp = ensureCtor(res.loading, baseCtor);
	          if (res.delay === 0) {
	            factory.loading = true;
	          } else {
	            setTimeout(function () {
	              if (isUndef(factory.resolved) && isUndef(factory.error)) {
	                factory.loading = true;
	                forceRender();
	              }
	            }, res.delay || 200);
	          }
	        }

	        if (isDef(res.timeout)) {
	          setTimeout(function () {
	            if (isUndef(factory.resolved)) {
	              reject(
	                process.env.NODE_ENV !== 'production'
	                  ? ("timeout (" + (res.timeout) + "ms)")
	                  : null
	              );
	            }
	          }, res.timeout);
	        }
	      }
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.loading
	      ? factory.loadingComp
	      : factory.resolved
	  }
	}

	/*  */

	function isAsyncPlaceholder (node) {
	  return node.isComment && node.asyncFactory
	}

	/*  */

	function getFirstComponentChild (children) {
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      var c = children[i];
	      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
	        return c
	      }
	    }
	  }
	}

	/*  */

	/*  */

	function initEvents (vm) {
	  vm._events = Object.create(null);
	  vm._hasHookEvent = false;
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  if (listeners) {
	    updateComponentListeners(vm, listeners);
	  }
	}

	var target;

	function add (event, fn, once) {
	  if (once) {
	    target.$once(event, fn);
	  } else {
	    target.$on(event, fn);
	  }
	}

	function remove$1 (event, fn) {
	  target.$off(event, fn);
	}

	function updateComponentListeners (
	  vm,
	  listeners,
	  oldListeners
	) {
	  target = vm;
	  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
	}

	function eventsMixin (Vue) {
	  var hookRE = /^hook:/;
	  Vue.prototype.$on = function (event, fn) {
	    var this$1 = this;

	    var vm = this;
	    if (Array.isArray(event)) {
	      for (var i = 0, l = event.length; i < l; i++) {
	        this$1.$on(event[i], fn);
	      }
	    } else {
	      (vm._events[event] || (vm._events[event] = [])).push(fn);
	      // optimize hook:event cost by using a boolean flag marked at registration
	      // instead of a hash lookup
	      if (hookRE.test(event)) {
	        vm._hasHookEvent = true;
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };

	  Vue.prototype.$off = function (event, fn) {
	    var this$1 = this;

	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // array of events
	    if (Array.isArray(event)) {
	      for (var i = 0, l = event.length; i < l; i++) {
	        this$1.$off(event[i], fn);
	      }
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    if (fn) {
	      // specific handler
	      var cb;
	      var i$1 = cbs.length;
	      while (i$1--) {
	        cb = cbs[i$1];
	        if (cb === fn || cb.fn === fn) {
	          cbs.splice(i$1, 1);
	          break
	        }
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    if (process.env.NODE_ENV !== 'production') {
	      var lowerCaseEvent = event.toLowerCase();
	      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
	        tip(
	          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
	          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
	          "Note that HTML attributes are case-insensitive and you cannot use " +
	          "v-on to listen to camelCase events when using in-DOM templates. " +
	          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
	        );
	      }
	    }
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        try {
	          cbs[i].apply(vm, args);
	        } catch (e) {
	          handleError(e, vm, ("event handler for \"" + event + "\""));
	        }
	      }
	    }
	    return vm
	  };
	}

	/*  */

	/**
	 * Runtime helper for resolving raw children VNodes into a slot object.
	 */
	function resolveSlots (
	  children,
	  context
	) {
	  var slots = {};
	  if (!children) {
	    return slots
	  }
	  var defaultSlot = [];
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i];
	    var data = child.data;
	    // remove slot attribute if the node is resolved as a Vue slot node
	    if (data && data.attrs && data.attrs.slot) {
	      delete data.attrs.slot;
	    }
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	      data && data.slot != null
	    ) {
	      var name = child.data.slot;
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore whitespace
	  if (!defaultSlot.every(isWhitespace)) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}

	function isWhitespace (node) {
	  return node.isComment || node.text === ' '
	}

	function resolveScopedSlots (
	  fns, // see flow/vnode
	  res
	) {
	  res = res || {};
	  for (var i = 0; i < fns.length; i++) {
	    if (Array.isArray(fns[i])) {
	      resolveScopedSlots(fns[i], res);
	    } else {
	      res[fns[i].key] = fns[i].fn;
	    }
	  }
	  return res
	}

	/*  */

	var activeInstance = null;
	var isUpdatingChildComponent = false;

	function initLifecycle (vm) {
	  var options = vm.$options;

	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }

	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;

	  vm.$children = [];
	  vm.$refs = {};

	  vm._watcher = null;
	  vm._inactive = null;
	  vm._directInactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}

	function lifecycleMixin (Vue) {
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(
	        vm.$el, vnode, hydrating, false /* removeOnly */,
	        vm.$options._parentElm,
	        vm.$options._refElm
	      );
	      // no need for the ref nodes after initial patch
	      // this prevents keeping a detached DOM tree in memory (#5851)
	      vm.$options._parentElm = vm.$options._refElm = null;
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    // updated hook is called by the scheduler to ensure that children are
	    // updated in a parent's updated hook.
	  };

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };

	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	    // fire destroyed hook
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // release circular reference (#6759)
	    if (vm.$vnode) {
	      vm.$vnode.parent = null;
	    }
	  };
	}

	function mountComponent (
	  vm,
	  el,
	  hydrating
	) {
	  vm.$el = el;
	  if (!vm.$options.render) {
	    vm.$options.render = createEmptyVNode;
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
	        vm.$options.el || el) {
	        warn(
	          'You are using the runtime-only build of Vue where the template ' +
	          'compiler is not available. Either pre-compile the templates into ' +
	          'render functions, or use the compiler-included build.',
	          vm
	        );
	      } else {
	        warn(
	          'Failed to mount component: template or render function not defined.',
	          vm
	        );
	      }
	    }
	  }
	  callHook(vm, 'beforeMount');

	  var updateComponent;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
	    updateComponent = function () {
	      var name = vm._name;
	      var id = vm._uid;
	      var startTag = "vue-perf-start:" + id;
	      var endTag = "vue-perf-end:" + id;

	      mark(startTag);
	      var vnode = vm._render();
	      mark(endTag);
	      measure(("vue " + name + " render"), startTag, endTag);

	      mark(startTag);
	      vm._update(vnode, hydrating);
	      mark(endTag);
	      measure(("vue " + name + " patch"), startTag, endTag);
	    };
	  } else {
	    updateComponent = function () {
	      vm._update(vm._render(), hydrating);
	    };
	  }

	  vm._watcher = new Watcher(vm, updateComponent, noop);
	  hydrating = false;

	  // manually mounted instance, call mounted on self
	  // mounted is called for render-created child components in its inserted hook
	  if (vm.$vnode == null) {
	    vm._isMounted = true;
	    callHook(vm, 'mounted');
	  }
	  return vm
	}

	function updateChildComponent (
	  vm,
	  propsData,
	  listeners,
	  parentVnode,
	  renderChildren
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    isUpdatingChildComponent = true;
	  }

	  // determine whether component has slot children
	  // we need to do this before overwriting $options._renderChildren
	  var hasChildren = !!(
	    renderChildren ||               // has new static slots
	    vm.$options._renderChildren ||  // has old static slots
	    parentVnode.data.scopedSlots || // has new scoped slots
	    vm.$scopedSlots !== emptyObject // has old scoped slots
	  );

	  vm.$options._parentVnode = parentVnode;
	  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

	  if (vm._vnode) { // update child tree's parent
	    vm._vnode.parent = parentVnode;
	  }
	  vm.$options._renderChildren = renderChildren;

	  // update $attrs and $listeners hash
	  // these are also reactive so they may trigger child update if the child
	  // used them during render
	  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
	  vm.$listeners = listeners || emptyObject;

	  // update props
	  if (propsData && vm.$options.props) {
	    observerState.shouldConvert = false;
	    var props = vm._props;
	    var propKeys = vm.$options._propKeys || [];
	    for (var i = 0; i < propKeys.length; i++) {
	      var key = propKeys[i];
	      props[key] = validateProp(key, vm.$options.props, propsData, vm);
	    }
	    observerState.shouldConvert = true;
	    // keep a copy of raw propsData
	    vm.$options.propsData = propsData;
	  }

	  // update listeners
	  if (listeners) {
	    var oldListeners = vm.$options._parentListeners;
	    vm.$options._parentListeners = listeners;
	    updateComponentListeners(vm, listeners, oldListeners);
	  }
	  // resolve slots + force update if has children
	  if (hasChildren) {
	    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	    vm.$forceUpdate();
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    isUpdatingChildComponent = false;
	  }
	}

	function isInInactiveTree (vm) {
	  while (vm && (vm = vm.$parent)) {
	    if (vm._inactive) { return true }
	  }
	  return false
	}

	function activateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = false;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  } else if (vm._directInactive) {
	    return
	  }
	  if (vm._inactive || vm._inactive === null) {
	    vm._inactive = false;
	    for (var i = 0; i < vm.$children.length; i++) {
	      activateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'activated');
	  }
	}

	function deactivateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = true;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  }
	  if (!vm._inactive) {
	    vm._inactive = true;
	    for (var i = 0; i < vm.$children.length; i++) {
	      deactivateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'deactivated');
	  }
	}

	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      try {
	        handlers[i].call(vm);
	      } catch (e) {
	        handleError(e, vm, (hook + " hook"));
	      }
	    }
	  }
	  if (vm._hasHookEvent) {
	    vm.$emit('hook:' + hook);
	  }
	}

	/*  */


	var MAX_UPDATE_COUNT = 100;

	var queue = [];
	var activatedChildren = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  index = queue.length = activatedChildren.length = 0;
	  has = {};
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {};
	  }
	  waiting = flushing = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;
	  var watcher, id;

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    watcher = queue[index];
	    id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > MAX_UPDATE_COUNT) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }

	  // keep copies of post queues before resetting state
	  var activatedQueue = activatedChildren.slice();
	  var updatedQueue = queue.slice();

	  resetSchedulerState();

	  // call component updated and activated hooks
	  callActivatedHooks(activatedQueue);
	  callUpdatedHooks(updatedQueue);

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	}

	function callUpdatedHooks (queue) {
	  var i = queue.length;
	  while (i--) {
	    var watcher = queue[i];
	    var vm = watcher.vm;
	    if (vm._watcher === watcher && vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  }
	}

	/**
	 * Queue a kept-alive component that was activated during patch.
	 * The queue will be processed after the entire tree has been patched.
	 */
	function queueActivatedComponent (vm) {
	  // setting _inactive to false here so that a render function can
	  // rely on checking whether it's in an inactive tree (e.g. router-view)
	  vm._inactive = false;
	  activatedChildren.push(vm);
	}

	function callActivatedHooks (queue) {
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]._inactive = true;
	    activateChildComponent(queue[i], true /* true */);
	  }
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    has[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i > index && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(i + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}

	/*  */

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  if (options) {
	    this.deep = !!options.deep;
	    this.user = !!options.user;
	    this.lazy = !!options.lazy;
	    this.sync = !!options.sync;
	  } else {
	    this.deep = this.user = this.lazy = this.sync = false;
	  }
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.expression = process.env.NODE_ENV !== 'production'
	    ? expOrFn.toString()
	    : '';
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value;
	  var vm = this.vm;
	  try {
	    value = this.getter.call(vm, vm);
	  } catch (e) {
	    if (this.user) {
	      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
	    } else {
	      throw e
	    }
	  } finally {
	    // "touch" every property so they are all tracked as
	    // dependencies for deep watching
	    if (this.deep) {
	      traverse(value);
	    }
	    popTarget();
	    this.cleanupDeps();
	  }
	  return value
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	    if (
	      value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;

	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed.
	    if (!this.vm._isBeingDestroyed) {
	      remove(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}

	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}

	/*  */

	var sharedPropertyDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function proxy (target, sourceKey, key) {
	  sharedPropertyDefinition.get = function proxyGetter () {
	    return this[sourceKey][key]
	  };
	  sharedPropertyDefinition.set = function proxySetter (val) {
	    this[sourceKey][key] = val;
	  };
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}

	function initState (vm) {
	  vm._watchers = [];
	  var opts = vm.$options;
	  if (opts.props) { initProps(vm, opts.props); }
	  if (opts.methods) { initMethods(vm, opts.methods); }
	  if (opts.data) {
	    initData(vm);
	  } else {
	    observe(vm._data = {}, true /* asRootData */);
	  }
	  if (opts.computed) { initComputed(vm, opts.computed); }
	  if (opts.watch && opts.watch !== nativeWatch) {
	    initWatch(vm, opts.watch);
	  }
	}

	function initProps (vm, propsOptions) {
	  var propsData = vm.$options.propsData || {};
	  var props = vm._props = {};
	  // cache prop keys so that future props updates can iterate using Array
	  // instead of dynamic object key enumeration.
	  var keys = vm.$options._propKeys = [];
	  var isRoot = !vm.$parent;
	  // root instance props should be converted
	  observerState.shouldConvert = isRoot;
	  var loop = function ( key ) {
	    keys.push(key);
	    var value = validateProp(key, propsOptions, propsData, vm);
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      var hyphenatedKey = hyphenate(key);
	      if (isReservedAttribute(hyphenatedKey) ||
	          config.isReservedAttr(hyphenatedKey)) {
	        warn(
	          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
	          vm
	        );
	      }
	      defineReactive(props, key, value, function () {
	        if (vm.$parent && !isUpdatingChildComponent) {
	          warn(
	            "Avoid mutating a prop directly since the value will be " +
	            "overwritten whenever the parent component re-renders. " +
	            "Instead, use a data or computed property based on the prop's " +
	            "value. Prop being mutated: \"" + key + "\"",
	            vm
	          );
	        }
	      });
	    } else {
	      defineReactive(props, key, value);
	    }
	    // static props are already proxied on the component's prototype
	    // during Vue.extend(). We only need to proxy props defined at
	    // instantiation here.
	    if (!(key in vm)) {
	      proxy(vm, "_props", key);
	    }
	  };

	  for (var key in propsOptions) loop( key );
	  observerState.shouldConvert = true;
	}

	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? getData(data, vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    process.env.NODE_ENV !== 'production' && warn(
	      'data functions should return an object:\n' +
	      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var methods = vm.$options.methods;
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    if (process.env.NODE_ENV !== 'production') {
	      if (methods && hasOwn(methods, key)) {
	        warn(
	          ("Method \"" + key + "\" has already been defined as a data property."),
	          vm
	        );
	      }
	    }
	    if (props && hasOwn(props, key)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "The data property \"" + key + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else if (!isReserved(key)) {
	      proxy(vm, "_data", key);
	    }
	  }
	  // observe data
	  observe(data, true /* asRootData */);
	}

	function getData (data, vm) {
	  try {
	    return data.call(vm, vm)
	  } catch (e) {
	    handleError(e, vm, "data()");
	    return {}
	  }
	}

	var computedWatcherOptions = { lazy: true };

	function initComputed (vm, computed) {
	  var watchers = vm._computedWatchers = Object.create(null);
	  // computed properties are just getters during SSR
	  var isSSR = isServerRendering();

	  for (var key in computed) {
	    var userDef = computed[key];
	    var getter = typeof userDef === 'function' ? userDef : userDef.get;
	    if (process.env.NODE_ENV !== 'production' && getter == null) {
	      warn(
	        ("Getter is missing for computed property \"" + key + "\"."),
	        vm
	      );
	    }

	    if (!isSSR) {
	      // create internal watcher for the computed property.
	      watchers[key] = new Watcher(
	        vm,
	        getter || noop,
	        noop,
	        computedWatcherOptions
	      );
	    }

	    // component-defined computed properties are already defined on the
	    // component prototype. We only need to define computed properties defined
	    // at instantiation here.
	    if (!(key in vm)) {
	      defineComputed(vm, key, userDef);
	    } else if (process.env.NODE_ENV !== 'production') {
	      if (key in vm.$data) {
	        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
	      } else if (vm.$options.props && key in vm.$options.props) {
	        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
	      }
	    }
	  }
	}

	function defineComputed (
	  target,
	  key,
	  userDef
	) {
	  var shouldCache = !isServerRendering();
	  if (typeof userDef === 'function') {
	    sharedPropertyDefinition.get = shouldCache
	      ? createComputedGetter(key)
	      : userDef;
	    sharedPropertyDefinition.set = noop;
	  } else {
	    sharedPropertyDefinition.get = userDef.get
	      ? shouldCache && userDef.cache !== false
	        ? createComputedGetter(key)
	        : userDef.get
	      : noop;
	    sharedPropertyDefinition.set = userDef.set
	      ? userDef.set
	      : noop;
	  }
	  if (process.env.NODE_ENV !== 'production' &&
	      sharedPropertyDefinition.set === noop) {
	    sharedPropertyDefinition.set = function () {
	      warn(
	        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
	        this
	      );
	    };
	  }
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}

	function createComputedGetter (key) {
	  return function computedGetter () {
	    var watcher = this._computedWatchers && this._computedWatchers[key];
	    if (watcher) {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value
	    }
	  }
	}

	function initMethods (vm, methods) {
	  var props = vm.$options.props;
	  for (var key in methods) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (methods[key] == null) {
	        warn(
	          "Method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	      if (props && hasOwn(props, key)) {
	        warn(
	          ("Method \"" + key + "\" has already been defined as a prop."),
	          vm
	        );
	      }
	      if ((key in vm) && isReserved(key)) {
	        warn(
	          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
	          "Avoid defining component methods that start with _ or $."
	        );
	      }
	    }
	    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
	  }
	}

	function initWatch (vm, watch) {
	  for (var key in watch) {
	    var handler = watch[key];
	    if (Array.isArray(handler)) {
	      for (var i = 0; i < handler.length; i++) {
	        createWatcher(vm, key, handler[i]);
	      }
	    } else {
	      createWatcher(vm, key, handler);
	    }
	  }
	}

	function createWatcher (
	  vm,
	  keyOrFn,
	  handler,
	  options
	) {
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  return vm.$watch(keyOrFn, handler, options)
	}

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () { return this._data };
	  var propsDef = {};
	  propsDef.get = function () { return this._props };
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	    propsDef.set = function () {
	      warn("$props is readonly.", this);
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	  Object.defineProperty(Vue.prototype, '$props', propsDef);

	  Vue.prototype.$set = set;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    if (isPlainObject(cb)) {
	      return createWatcher(vm, expOrFn, cb, options)
	    }
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}

	/*  */

	function initProvide (vm) {
	  var provide = vm.$options.provide;
	  if (provide) {
	    vm._provided = typeof provide === 'function'
	      ? provide.call(vm)
	      : provide;
	  }
	}

	function initInjections (vm) {
	  var result = resolveInject(vm.$options.inject, vm);
	  if (result) {
	    observerState.shouldConvert = false;
	    Object.keys(result).forEach(function (key) {
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production') {
	        defineReactive(vm, key, result[key], function () {
	          warn(
	            "Avoid mutating an injected value directly since the changes will be " +
	            "overwritten whenever the provided component re-renders. " +
	            "injection being mutated: \"" + key + "\"",
	            vm
	          );
	        });
	      } else {
	        defineReactive(vm, key, result[key]);
	      }
	    });
	    observerState.shouldConvert = true;
	  }
	}

	function resolveInject (inject, vm) {
	  if (inject) {
	    // inject is :any because flow is not smart enough to figure out cached
	    var result = Object.create(null);
	    var keys = hasSymbol
	        ? Reflect.ownKeys(inject).filter(function (key) {
	          /* istanbul ignore next */
	          return Object.getOwnPropertyDescriptor(inject, key).enumerable
	        })
	        : Object.keys(inject);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var provideKey = inject[key].from;
	      var source = vm;
	      while (source) {
	        if (source._provided && provideKey in source._provided) {
	          result[key] = source._provided[provideKey];
	          break
	        }
	        source = source.$parent;
	      }
	      if (!source) {
	        if ('default' in inject[key]) {
	          var provideDefault = inject[key].default;
	          result[key] = typeof provideDefault === 'function'
	            ? provideDefault.call(vm)
	            : provideDefault;
	        } else if (process.env.NODE_ENV !== 'production') {
	          warn(("Injection \"" + key + "\" not found"), vm);
	        }
	      }
	    }
	    return result
	  }
	}

	/*  */

	/**
	 * Runtime helper for rendering v-for lists.
	 */
	function renderList (
	  val,
	  render
	) {
	  var ret, i, l, keys, key;
	  if (Array.isArray(val) || typeof val === 'string') {
	    ret = new Array(val.length);
	    for (i = 0, l = val.length; i < l; i++) {
	      ret[i] = render(val[i], i);
	    }
	  } else if (typeof val === 'number') {
	    ret = new Array(val);
	    for (i = 0; i < val; i++) {
	      ret[i] = render(i + 1, i);
	    }
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    ret = new Array(keys.length);
	    for (i = 0, l = keys.length; i < l; i++) {
	      key = keys[i];
	      ret[i] = render(val[key], key, i);
	    }
	  }
	  if (isDef(ret)) {
	    (ret)._isVList = true;
	  }
	  return ret
	}

	/*  */

	/**
	 * Runtime helper for rendering <slot>
	 */
	function renderSlot (
	  name,
	  fallback,
	  props,
	  bindObject
	) {
	  var scopedSlotFn = this.$scopedSlots[name];
	  if (scopedSlotFn) { // scoped slot
	    props = props || {};
	    if (bindObject) {
	      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
	        warn(
	          'slot v-bind without argument expects an Object',
	          this
	        );
	      }
	      props = extend(extend({}, bindObject), props);
	    }
	    return scopedSlotFn(props) || fallback
	  } else {
	    var slotNodes = this.$slots[name];
	    // warn duplicate slot usage
	    if (slotNodes && process.env.NODE_ENV !== 'production') {
	      slotNodes._rendered && warn(
	        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	        "- this will likely cause render errors.",
	        this
	      );
	      slotNodes._rendered = true;
	    }
	    return slotNodes || fallback
	  }
	}

	/*  */

	/**
	 * Runtime helper for resolving filters
	 */
	function resolveFilter (id) {
	  return resolveAsset(this.$options, 'filters', id, true) || identity
	}

	/*  */

	/**
	 * Runtime helper for checking keyCodes from config.
	 * exposed as Vue.prototype._k
	 * passing in eventKeyName as last argument separately for backwards compat
	 */
	function checkKeyCodes (
	  eventKeyCode,
	  key,
	  builtInAlias,
	  eventKeyName
	) {
	  var keyCodes = config.keyCodes[key] || builtInAlias;
	  if (keyCodes) {
	    if (Array.isArray(keyCodes)) {
	      return keyCodes.indexOf(eventKeyCode) === -1
	    } else {
	      return keyCodes !== eventKeyCode
	    }
	  } else if (eventKeyName) {
	    return hyphenate(eventKeyName) !== key
	  }
	}

	/*  */

	/**
	 * Runtime helper for merging v-bind="object" into a VNode's data.
	 */
	function bindObjectProps (
	  data,
	  tag,
	  value,
	  asProp,
	  isSync
	) {
	  if (value) {
	    if (!isObject(value)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'v-bind without argument expects an Object or Array value',
	        this
	      );
	    } else {
	      if (Array.isArray(value)) {
	        value = toObject(value);
	      }
	      var hash;
	      var loop = function ( key ) {
	        if (
	          key === 'class' ||
	          key === 'style' ||
	          isReservedAttribute(key)
	        ) {
	          hash = data;
	        } else {
	          var type = data.attrs && data.attrs.type;
	          hash = asProp || config.mustUseProp(tag, type, key)
	            ? data.domProps || (data.domProps = {})
	            : data.attrs || (data.attrs = {});
	        }
	        if (!(key in hash)) {
	          hash[key] = value[key];

	          if (isSync) {
	            var on = data.on || (data.on = {});
	            on[("update:" + key)] = function ($event) {
	              value[key] = $event;
	            };
	          }
	        }
	      };

	      for (var key in value) loop( key );
	    }
	  }
	  return data
	}

	/*  */

	/**
	 * Runtime helper for rendering static trees.
	 */
	function renderStatic (
	  index,
	  isInFor
	) {
	  // static trees can be rendered once and cached on the contructor options
	  // so every instance shares the same cached trees
	  var renderFns = this.$options.staticRenderFns;
	  var cached = renderFns.cached || (renderFns.cached = []);
	  var tree = cached[index];
	  // if has already-rendered static tree and not inside v-for,
	  // we can reuse the same tree by doing a shallow clone.
	  if (tree && !isInFor) {
	    return Array.isArray(tree)
	      ? cloneVNodes(tree)
	      : cloneVNode(tree)
	  }
	  // otherwise, render a fresh tree.
	  tree = cached[index] = renderFns[index].call(this._renderProxy, null, this);
	  markStatic(tree, ("__static__" + index), false);
	  return tree
	}

	/**
	 * Runtime helper for v-once.
	 * Effectively it means marking the node as static with a unique key.
	 */
	function markOnce (
	  tree,
	  index,
	  key
	) {
	  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	  return tree
	}

	function markStatic (
	  tree,
	  key,
	  isOnce
	) {
	  if (Array.isArray(tree)) {
	    for (var i = 0; i < tree.length; i++) {
	      if (tree[i] && typeof tree[i] !== 'string') {
	        markStaticNode(tree[i], (key + "_" + i), isOnce);
	      }
	    }
	  } else {
	    markStaticNode(tree, key, isOnce);
	  }
	}

	function markStaticNode (node, key, isOnce) {
	  node.isStatic = true;
	  node.key = key;
	  node.isOnce = isOnce;
	}

	/*  */

	function bindObjectListeners (data, value) {
	  if (value) {
	    if (!isPlainObject(value)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'v-on without argument expects an Object value',
	        this
	      );
	    } else {
	      var on = data.on = data.on ? extend({}, data.on) : {};
	      for (var key in value) {
	        var existing = on[key];
	        var ours = value[key];
	        on[key] = existing ? [].concat(existing, ours) : ours;
	      }
	    }
	  }
	  return data
	}

	/*  */

	function installRenderHelpers (target) {
	  target._o = markOnce;
	  target._n = toNumber;
	  target._s = toString;
	  target._l = renderList;
	  target._t = renderSlot;
	  target._q = looseEqual;
	  target._i = looseIndexOf;
	  target._m = renderStatic;
	  target._f = resolveFilter;
	  target._k = checkKeyCodes;
	  target._b = bindObjectProps;
	  target._v = createTextVNode;
	  target._e = createEmptyVNode;
	  target._u = resolveScopedSlots;
	  target._g = bindObjectListeners;
	}

	/*  */

	function FunctionalRenderContext (
	  data,
	  props,
	  children,
	  parent,
	  Ctor
	) {
	  var options = Ctor.options;
	  this.data = data;
	  this.props = props;
	  this.children = children;
	  this.parent = parent;
	  this.listeners = data.on || emptyObject;
	  this.injections = resolveInject(options.inject, parent);
	  this.slots = function () { return resolveSlots(children, parent); };

	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var contextVm = Object.create(parent);
	  var isCompiled = isTrue(options._compiled);
	  var needNormalization = !isCompiled;

	  // support for compiled functional template
	  if (isCompiled) {
	    // exposing $options for renderStatic()
	    this.$options = options;
	    // pre-resolve slots for renderSlot()
	    this.$slots = this.slots();
	    this.$scopedSlots = data.scopedSlots || emptyObject;
	  }

	  if (options._scopeId) {
	    this._c = function (a, b, c, d) {
	      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
	      if (vnode) {
	        vnode.functionalScopeId = options._scopeId;
	        vnode.functionalContext = parent;
	      }
	      return vnode
	    };
	  } else {
	    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
	  }
	}

	installRenderHelpers(FunctionalRenderContext.prototype);

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  contextVm,
	  children
	) {
	  var options = Ctor.options;
	  var props = {};
	  var propOptions = options.props;
	  if (isDef(propOptions)) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData || emptyObject);
	    }
	  } else {
	    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
	    if (isDef(data.props)) { mergeProps(props, data.props); }
	  }

	  var renderContext = new FunctionalRenderContext(
	    data,
	    props,
	    children,
	    contextVm,
	    Ctor
	  );

	  var vnode = options.render.call(null, renderContext._c, renderContext);

	  if (vnode instanceof VNode) {
	    vnode.functionalContext = contextVm;
	    vnode.functionalOptions = options;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }

	  return vnode
	}

	function mergeProps (to, from) {
	  for (var key in from) {
	    to[camelize(key)] = from[key];
	  }
	}

	/*  */

	// hooks to be invoked on component VNodes during patch
	var componentVNodeHooks = {
	  init: function init (
	    vnode,
	    hydrating,
	    parentElm,
	    refElm
	  ) {
	    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
	      var child = vnode.componentInstance = createComponentInstanceForVnode(
	        vnode,
	        activeInstance,
	        parentElm,
	        refElm
	      );
	      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	    } else if (vnode.data.keepAlive) {
	      // kept-alive components, treat as a patch
	      var mountedNode = vnode; // work around flow
	      componentVNodeHooks.prepatch(mountedNode, mountedNode);
	    }
	  },

	  prepatch: function prepatch (oldVnode, vnode) {
	    var options = vnode.componentOptions;
	    var child = vnode.componentInstance = oldVnode.componentInstance;
	    updateChildComponent(
	      child,
	      options.propsData, // updated props
	      options.listeners, // updated listeners
	      vnode, // new parent vnode
	      options.children // new children
	    );
	  },

	  insert: function insert (vnode) {
	    var context = vnode.context;
	    var componentInstance = vnode.componentInstance;
	    if (!componentInstance._isMounted) {
	      componentInstance._isMounted = true;
	      callHook(componentInstance, 'mounted');
	    }
	    if (vnode.data.keepAlive) {
	      if (context._isMounted) {
	        // vue-router#1212
	        // During updates, a kept-alive component's child components may
	        // change, so directly walking the tree here may call activated hooks
	        // on incorrect children. Instead we push them into a queue which will
	        // be processed after the whole patch process ended.
	        queueActivatedComponent(componentInstance);
	      } else {
	        activateChildComponent(componentInstance, true /* direct */);
	      }
	    }
	  },

	  destroy: function destroy (vnode) {
	    var componentInstance = vnode.componentInstance;
	    if (!componentInstance._isDestroyed) {
	      if (!vnode.data.keepAlive) {
	        componentInstance.$destroy();
	      } else {
	        deactivateChildComponent(componentInstance, true /* direct */);
	      }
	    }
	  }
	};

	var hooksToMerge = Object.keys(componentVNodeHooks);

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (isUndef(Ctor)) {
	    return
	  }

	  var baseCtor = context.$options._base;

	  // plain options object: turn it into a constructor
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }

	  // if at this stage it's not a constructor or an async component factory,
	  // reject.
	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }

	  // async component
	  var asyncFactory;
	  if (isUndef(Ctor.cid)) {
	    asyncFactory = Ctor;
	    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
	    if (Ctor === undefined) {
	      // return a placeholder node for async component, which is rendered
	      // as a comment node but preserves all the raw information for the node.
	      // the information will be used for async server-rendering and hydration.
	      return createAsyncPlaceholder(
	        asyncFactory,
	        data,
	        context,
	        children,
	        tag
	      )
	    }
	  }

	  data = data || {};

	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);

	  // transform component v-model data into props & events
	  if (isDef(data.model)) {
	    transformModel(Ctor.options, data);
	  }

	  // extract props
	  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

	  // functional component
	  if (isTrue(Ctor.options.functional)) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  // so it gets processed during parent component patch.
	  data.on = data.nativeOn;

	  if (isTrue(Ctor.options.abstract)) {
	    // abstract components do not keep anything
	    // other than props & listeners & slot

	    // work around flow
	    var slot = data.slot;
	    data = {};
	    if (slot) {
	      data.slot = slot;
	    }
	  }

	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
	    asyncFactory
	  );
	  return vnode
	}

	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent, // activeInstance in lifecycle state
	  parentElm,
	  refElm
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children,
	    _parentElm: parentElm || null,
	    _refElm: refElm || null
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (isDef(inlineTemplate)) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}

	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = componentVNodeHooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}

	function mergeHook$1 (one, two) {
	  return function (a, b, c, d) {
	    one(a, b, c, d);
	    two(a, b, c, d);
	  }
	}

	// transform component v-model info (value and callback) into
	// prop and event handler respectively.
	function transformModel (options, data) {
	  var prop = (options.model && options.model.prop) || 'value';
	  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
	  var on = data.on || (data.on = {});
	  if (isDef(on[event])) {
	    on[event] = [data.model.callback].concat(on[event]);
	  } else {
	    on[event] = data.model.callback;
	  }
	}

	/*  */

	var SIMPLE_NORMALIZE = 1;
	var ALWAYS_NORMALIZE = 2;

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType,
	  alwaysNormalize
	) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    normalizationType = children;
	    children = data;
	    data = undefined;
	  }
	  if (isTrue(alwaysNormalize)) {
	    normalizationType = ALWAYS_NORMALIZE;
	  }
	  return _createElement(context, tag, data, children, normalizationType)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType
	) {
	  if (isDef(data) && isDef((data).__ob__)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return createEmptyVNode()
	  }
	  // object syntax in v-bind
	  if (isDef(data) && isDef(data.is)) {
	    tag = data.is;
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode()
	  }
	  // warn against non-primitive key
	  if (process.env.NODE_ENV !== 'production' &&
	    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
	  ) {
	    warn(
	      'Avoid using non-primitive value as key, ' +
	      'use string/number value instead.',
	      context
	    );
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	    typeof children[0] === 'function'
	  ) {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (normalizationType === ALWAYS_NORMALIZE) {
	    children = normalizeChildren(children);
	  } else if (normalizationType === SIMPLE_NORMALIZE) {
	    children = simpleNormalizeChildren(children);
	  }
	  var vnode, ns;
	  if (typeof tag === 'string') {
	    var Ctor;
	    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      vnode = new VNode(
	        config.parsePlatformTagName(tag), data, children,
	        undefined, undefined, context
	      );
	    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      vnode = new VNode(
	        tag, data, children,
	        undefined, undefined, context
	      );
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (isDef(vnode)) {
	    if (ns) { applyNS(vnode, ns); }
	    return vnode
	  } else {
	    return createEmptyVNode()
	  }
	}

	function applyNS (vnode, ns, force) {
	  vnode.ns = ns;
	  if (vnode.tag === 'foreignObject') {
	    // use default namespace inside foreignObject
	    ns = undefined;
	    force = true;
	  }
	  if (isDef(vnode.children)) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
	        applyNS(child, ns, force);
	      }
	    }
	  }
	}

	/*  */

	function initRender (vm) {
	  vm._vnode = null; // the root of the child tree
	  var options = vm.$options;
	  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(options._renderChildren, renderContext);
	  vm.$scopedSlots = emptyObject;
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, normalizationType, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

	  // $attrs & $listeners are exposed for easier HOC creation.
	  // they need to be reactive so that HOCs using them are always updated
	  var parentData = parentVnode && parentVnode.data;

	  /* istanbul ignore else */
	  if (process.env.NODE_ENV !== 'production') {
	    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
	      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
	    }, true);
	    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
	      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
	    }, true);
	  } else {
	    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
	    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
	  }
	}

	function renderMixin (Vue) {
	  // install runtime convenience helpers
	  installRenderHelpers(Vue.prototype);

	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
	  };

	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var _parentVnode = ref._parentVnode;

	    if (vm._isMounted) {
	      // if the parent didn't update, the slot nodes will be the ones from
	      // last render. They need to be cloned to ensure "freshness" for this render.
	      for (var key in vm.$slots) {
	        var slot = vm.$slots[key];
	        if (slot._rendered) {
	          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
	        }
	      }
	    }

	    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      handleError(e, vm, "render");
	      // return error render result,
	      // or previous vnode to prevent render error causing blank component
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production') {
	        if (vm.$options.renderError) {
	          try {
	            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
	          } catch (e) {
	            handleError(e, vm, "renderError");
	            vnode = vm._vnode;
	          }
	        } else {
	          vnode = vm._vnode;
	        }
	      } else {
	        vnode = vm._vnode;
	      }
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };
	}

	/*  */

	var uid$1 = 0;

	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid$1++;

	    var startTag, endTag;
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
	      startTag = "vue-perf-start:" + (vm._uid);
	      endTag = "vue-perf-end:" + (vm._uid);
	      mark(startTag);
	    }

	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm);
	    } else {
	      vm._renderProxy = vm;
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    initRender(vm);
	    callHook(vm, 'beforeCreate');
	    initInjections(vm); // resolve injections before data/props
	    initState(vm);
	    initProvide(vm); // resolve provide after data/props
	    callHook(vm, 'created');

	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
	      vm._name = formatComponentName(vm, false);
	      mark(endTag);
	      measure(("vue " + (vm._name) + " init"), startTag, endTag);
	    }

	    if (vm.$options.el) {
	      vm.$mount(vm.$options.el);
	    }
	  };
	}

	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  opts._parentElm = options._parentElm;
	  opts._refElm = options._refElm;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}

	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = resolveConstructorOptions(Ctor.super);
	    var cachedSuperOptions = Ctor.superOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed,
	      // need to resolve new options.
	      Ctor.superOptions = superOptions;
	      // check if there are any late-modified/attached options (#4976)
	      var modifiedOptions = resolveModifiedOptions(Ctor);
	      // update base extend options
	      if (modifiedOptions) {
	        extend(Ctor.extendOptions, modifiedOptions);
	      }
	      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}

	function resolveModifiedOptions (Ctor) {
	  var modified;
	  var latest = Ctor.options;
	  var extended = Ctor.extendOptions;
	  var sealed = Ctor.sealedOptions;
	  for (var key in latest) {
	    if (latest[key] !== sealed[key]) {
	      if (!modified) { modified = {}; }
	      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
	    }
	  }
	  return modified
	}

	function dedupe (latest, extended, sealed) {
	  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
	  // between merges
	  if (Array.isArray(latest)) {
	    var res = [];
	    sealed = Array.isArray(sealed) ? sealed : [sealed];
	    extended = Array.isArray(extended) ? extended : [extended];
	    for (var i = 0; i < latest.length; i++) {
	      // push original options and not sealed options to exclude duplicated options
	      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
	        res.push(latest[i]);
	      }
	    }
	    return res
	  } else {
	    return latest
	  }
	}

	function Vue$3 (options) {
	  if (process.env.NODE_ENV !== 'production' &&
	    !(this instanceof Vue$3)
	  ) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}

	initMixin(Vue$3);
	stateMixin(Vue$3);
	eventsMixin(Vue$3);
	lifecycleMixin(Vue$3);
	renderMixin(Vue$3);

	/*  */

	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
	    if (installedPlugins.indexOf(plugin) > -1) {
	      return this
	    }

	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else if (typeof plugin === 'function') {
	      plugin.apply(null, args);
	    }
	    installedPlugins.push(plugin);
	    return this
	  };
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	    return this
	  };
	}

	/*  */

	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId]
	    }

	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characters and the hyphen, ' +
	          'and must start with a letter.'
	        );
	      }
	    }

	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;

	    // For props and computed properties, we define the proxy getters on
	    // the Vue instances at extension time, on the extended prototype. This
	    // avoids Object.defineProperty calls for each instance created.
	    if (Sub.options.props) {
	      initProps$1(Sub);
	    }
	    if (Sub.options.computed) {
	      initComputed$1(Sub);
	    }

	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;

	    // create asset registers, so extended classes
	    // can have their private assets too.
	    ASSET_TYPES.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }

	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    Sub.sealedOptions = extend({}, Sub.options);

	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}

	function initProps$1 (Comp) {
	  var props = Comp.options.props;
	  for (var key in props) {
	    proxy(Comp.prototype, "_props", key);
	  }
	}

	function initComputed$1 (Comp) {
	  var computed = Comp.options.computed;
	  for (var key in computed) {
	    defineComputed(Comp.prototype, key, computed[key]);
	  }
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  ASSET_TYPES.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}

	/*  */

	function getComponentName (opts) {
	  return opts && (opts.Ctor.options.name || opts.tag)
	}

	function matches (pattern, name) {
	  if (Array.isArray(pattern)) {
	    return pattern.indexOf(name) > -1
	  } else if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else if (isRegExp(pattern)) {
	    return pattern.test(name)
	  }
	  /* istanbul ignore next */
	  return false
	}

	function pruneCache (keepAliveInstance, filter) {
	  var cache = keepAliveInstance.cache;
	  var keys = keepAliveInstance.keys;
	  var _vnode = keepAliveInstance._vnode;
	  for (var key in cache) {
	    var cachedNode = cache[key];
	    if (cachedNode) {
	      var name = getComponentName(cachedNode.componentOptions);
	      if (name && !filter(name)) {
	        pruneCacheEntry(cache, key, keys, _vnode);
	      }
	    }
	  }
	}

	function pruneCacheEntry (
	  cache,
	  key,
	  keys,
	  current
	) {
	  var cached$$1 = cache[key];
	  if (cached$$1 && cached$$1 !== current) {
	    cached$$1.componentInstance.$destroy();
	  }
	  cache[key] = null;
	  remove(keys, key);
	}

	var patternTypes = [String, RegExp, Array];

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,

	  props: {
	    include: patternTypes,
	    exclude: patternTypes,
	    max: [String, Number]
	  },

	  created: function created () {
	    this.cache = Object.create(null);
	    this.keys = [];
	  },

	  destroyed: function destroyed () {
	    var this$1 = this;

	    for (var key in this$1.cache) {
	      pruneCacheEntry(this$1.cache, key, this$1.keys);
	    }
	  },

	  watch: {
	    include: function include (val) {
	      pruneCache(this, function (name) { return matches(val, name); });
	    },
	    exclude: function exclude (val) {
	      pruneCache(this, function (name) { return !matches(val, name); });
	    }
	  },

	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    var componentOptions = vnode && vnode.componentOptions;
	    if (componentOptions) {
	      // check pattern
	      var name = getComponentName(componentOptions);
	      if (name && (
	        (this.include && !matches(this.include, name)) ||
	        (this.exclude && matches(this.exclude, name))
	      )) {
	        return vnode
	      }

	      var ref = this;
	      var cache = ref.cache;
	      var keys = ref.keys;
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
	        : vnode.key;
	      if (cache[key]) {
	        vnode.componentInstance = cache[key].componentInstance;
	        // make current key freshest
	        remove(keys, key);
	        keys.push(key);
	      } else {
	        cache[key] = vnode;
	        keys.push(key);
	        // prune oldest entry
	        if (this.max && keys.length > parseInt(this.max)) {
	          pruneCacheEntry(cache, keys[0], keys, this._vnode);
	        }
	      }

	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  }
	};

	var builtInComponents = {
	  KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);

	  // exposed util methods.
	  // NOTE: these are not considered part of the public API - avoid relying on
	  // them unless you are aware of the risk.
	  Vue.util = {
	    warn: warn,
	    extend: extend,
	    mergeOptions: mergeOptions,
	    defineReactive: defineReactive
	  };

	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  Vue.options = Object.create(null);
	  ASSET_TYPES.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });

	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;

	  extend(Vue.options.components, builtInComponents);

	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue$3);

	Object.defineProperty(Vue$3.prototype, '$isServer', {
	  get: isServerRendering
	});

	Object.defineProperty(Vue$3.prototype, '$ssrContext', {
	  get: function get () {
	    /* istanbul ignore next */
	    return this.$vnode && this.$vnode.ssrContext
	  }
	});

	Vue$3.version = '2.5.2';

	/*  */

	// these are reserved for web because they are directly compiled away
	// during template compilation
	var isReservedAttr = makeMap('style,class');

	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select,progress');
	var mustUseProp = function (tag, type, attr) {
	  return (
	    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);

	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};

	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};

	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};

	/*  */

	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (isDef(childNode.componentInstance)) {
	    childNode = childNode.componentInstance._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while (isDef(parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return renderClass(data.staticClass, data.class)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: isDef(child.class)
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function renderClass (
	  staticClass,
	  dynamicClass
	) {
	  if (isDef(staticClass) || isDef(dynamicClass)) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  if (Array.isArray(value)) {
	    return stringifyArray(value)
	  }
	  if (isObject(value)) {
	    return stringifyObject(value)
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function stringifyArray (value) {
	  var res = '';
	  var stringified;
	  for (var i = 0, l = value.length; i < l; i++) {
	    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
	      if (res) { res += ' '; }
	      res += stringified;
	    }
	  }
	  return res
	}

	function stringifyObject (value) {
	  var res = '';
	  for (var key in value) {
	    if (value[key]) {
	      if (res) { res += ' '; }
	      res += key;
	    }
	  }
	  return res
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};

	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template,blockquote,iframe,tfoot'
	);

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
	  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);

	var isPreTag = function (tag) { return tag === 'pre'; };

	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};

	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}

	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}

	var isTextInputType = makeMap('text,number,password,search,email,tel,url');

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selected = document.querySelector(el);
	    if (!selected) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'Cannot find element: ' + el
	      );
	      return document.createElement('div')
	    }
	    return selected
	  } else {
	    return el
	  }
	}

	/*  */

	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  // false or null will remove the attribute but undefined will not
	  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}

	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
	  return document.createTextNode(text)
	}

	function createComment (text) {
	  return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild (node, child) {
	  node.removeChild(child);
	}

	function appendChild (node, child) {
	  node.appendChild(child);
	}

	function parentNode (node) {
	  return node.parentNode
	}

	function nextSibling (node) {
	  return node.nextSibling
	}

	function tagName (node) {
	  return node.tagName
	}

	function setTextContent (node, text) {
	  node.textContent = text;
	}

	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}


	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		setAttribute: setAttribute
	});

	/*  */

	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};

	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }

	  var vm = vnode.context;
	  var ref = vnode.componentInstance || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (!Array.isArray(refs[key])) {
	        refs[key] = [ref];
	      } else if (refs[key].indexOf(ref) < 0) {
	        // $flow-disable-line
	        refs[key].push(ref);
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyNode = new VNode('', {}, []);

	var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

	function sameVnode (a, b) {
	  return (
	    a.key === b.key && (
	      (
	        a.tag === b.tag &&
	        a.isComment === b.isComment &&
	        isDef(a.data) === isDef(b.data) &&
	        sameInputType(a, b)
	      ) || (
	        isTrue(a.isAsyncPlaceholder) &&
	        a.asyncFactory === b.asyncFactory &&
	        isUndef(b.asyncFactory.error)
	      )
	    )
	  )
	}

	function sameInputType (a, b) {
	  if (a.tag !== 'input') { return true }
	  var i;
	  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
	  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
	  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}

	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks.length; ++i) {
	    cbs[hooks[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (isDef(modules[j][hooks[i]])) {
	        cbs[hooks[i]].push(modules[j][hooks[i]]);
	      }
	    }
	  }

	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }

	  function createRmCb (childElm, listeners) {
	    function remove () {
	      if (--remove.listeners === 0) {
	        removeNode(childElm);
	      }
	    }
	    remove.listeners = listeners;
	    return remove
	  }

	  function removeNode (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html / v-text
	    if (isDef(parent)) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  var inPre = 0;
	  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }

	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (data && data.pre) {
	          inPre++;
	        }
	        if (
	          !inPre &&
	          !vnode.ns &&
	          !(
	            config.ignoredElements.length &&
	            config.ignoredElements.some(function (ignore) {
	              return isRegExp(ignore)
	                ? ignore.test(tag)
	                : ignore === tag
	            })
	          ) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);

	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }

	      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
	        inPre--;
	      }
	    } else if (isTrue(vnode.isComment)) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }

	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */, parentElm, refElm);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.componentInstance)) {
	        initComponent(vnode, insertedVnodeQueue);
	        if (isTrue(isReactivated)) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (isDef(vnode.data.pendingInsert)) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	      vnode.data.pendingInsert = null;
	    }
	    vnode.elm = vnode.componentInstance.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }

	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.componentInstance) {
	      innerNode = innerNode.componentInstance._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }

	  function insert (parent, elm, ref$$1) {
	    if (isDef(parent)) {
	      if (isDef(ref$$1)) {
	        if (ref$$1.parentNode === parent) {
	          nodeOps.insertBefore(parent, elm, ref$$1);
	        }
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.componentInstance) {
	      vnode = vnode.componentInstance._vnode;
	    }
	    return isDef(vnode.tag)
	  }

	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (isDef(i.create)) { i.create(emptyNode, vnode); }
	      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.functionalScopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    } else {
	      var ancestor = vnode;
	      while (ancestor) {
	        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
	          nodeOps.setAttribute(vnode.elm, i, '');
	        }
	        ancestor = ancestor.parent;
	      }
	    }
	    // for slot content they should also get the scopeId from the host instance.
	    if (isDef(i = activeInstance) &&
	      i !== vnode.context &&
	      i !== vnode.functionalContext &&
	      isDef(i = i.$options._scopeId)
	    ) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }

	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
	    }
	  }

	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }

	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          removeNode(ch.elm);
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (isDef(rm) || isDef(vnode.data)) {
	      var i;
	      var listeners = cbs.remove.length + 1;
	      if (isDef(rm)) {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      } else {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeNode(vnode.elm);
	    }
	  }

	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key)
	          ? oldKeyToIdx[newStartVnode.key]
	          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	        } else {
	          vnodeToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !vnodeToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (sameVnode(vnodeToMove, newStartVnode)) {
	            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
	          } else {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	          }
	        }
	        newStartVnode = newCh[++newStartIdx];
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }

	  function findIdxInOld (node, oldCh, start, end) {
	    for (var i = start; i < end; i++) {
	      var c = oldCh[i];
	      if (isDef(c) && sameVnode(node, c)) { return i }
	    }
	  }

	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }

	    var elm = vnode.elm = oldVnode.elm;

	    if (isTrue(oldVnode.isAsyncPlaceholder)) {
	      if (isDef(vnode.asyncFactory.resolved)) {
	        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
	      } else {
	        vnode.isAsyncPlaceholder = true;
	      }
	      return
	    }

	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (isTrue(vnode.isStatic) &&
	      isTrue(oldVnode.isStatic) &&
	      vnode.key === oldVnode.key &&
	      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
	    ) {
	      vnode.componentInstance = oldVnode.componentInstance;
	      return
	    }

	    var i;
	    var data = vnode.data;
	    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }

	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (isDef(data) && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (isTrue(initial) && isDef(vnode.parent)) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }

	  var bailed = false;
	  // list of modules that can skip create hook during hydration because they
	  // are already rendered on the client or has no need for initialization
	  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

	  // Note: this is a browser-only function so we can assume elms are DOM nodes.
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
	      vnode.elm = elm;
	      vnode.isAsyncPlaceholder = true;
	      return true
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.componentInstance)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        // empty element, allow client to pick up and populate children
	        if (!elm.hasChildNodes()) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          // v-html and domProps: innerHTML
	          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
	            if (i !== elm.innerHTML) {
	              /* istanbul ignore if */
	              if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed
	              ) {
	                bailed = true;
	                console.warn('Parent: ', elm);
	                console.warn('server innerHTML: ', i);
	                console.warn('client innerHTML: ', elm.innerHTML);
	              }
	              return false
	            }
	          } else {
	            // iterate and compare children lists
	            var childrenMatch = true;
	            var childNode = elm.firstChild;
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false;
	                break
	              }
	              childNode = childNode.nextSibling;
	            }
	            // if childNode is not null, it means the actual childNodes list is
	            // longer than the virtual children list.
	            if (!childrenMatch || childNode) {
	              /* istanbul ignore if */
	              if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed
	              ) {
	                bailed = true;
	                console.warn('Parent: ', elm);
	                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	              }
	              return false
	            }
	          }
	        }
	      }
	      if (isDef(data)) {
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break
	          }
	        }
	      }
	    } else if (elm.data !== vnode.text) {
	      elm.data = vnode.text;
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode) {
	    if (isDef(vnode.tag)) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
	      )
	    } else {
	      return node.nodeType === (vnode.isComment ? 8 : 3)
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (isUndef(vnode)) {
	      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
	      return
	    }

	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (isUndef(oldVnode)) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
	            oldVnode.removeAttribute(SSR_ATTR);
	            hydrating = true;
	          }
	          if (isTrue(hydrating)) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        // replacing existing element
	        var oldElm = oldVnode.elm;
	        var parentElm$1 = nodeOps.parentNode(oldElm);
	        createElm(
	          vnode,
	          insertedVnodeQueue,
	          // extremely rare edge case: do not insert if old element is in a
	          // leaving transition. Only happens when combining transition +
	          // keep-alive + HOCs. (#4590)
	          oldElm._leaveCb ? null : parentElm$1,
	          nodeOps.nextSibling(oldElm)
	        );

	        if (isDef(vnode.parent)) {
	          // component root element replaced.
	          // update parent placeholder node element, recursively
	          var ancestor = vnode.parent;
	          var patchable = isPatchable(vnode);
	          while (ancestor) {
	            for (var i = 0; i < cbs.destroy.length; ++i) {
	              cbs.destroy[i](ancestor);
	            }
	            ancestor.elm = vnode.elm;
	            if (patchable) {
	              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	                cbs.create[i$1](emptyNode, ancestor);
	              }
	              // #6513
	              // invoke insert hooks that may have been merged by create hooks.
	              // e.g. for directives that uses the "inserted" hook.
	              var insert = ancestor.data.hook.insert;
	              if (insert.merged) {
	                // start at index 1 to avoid re-invoking component mounted hook
	                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
	                  insert.fns[i$2]();
	                }
	              }
	            } else {
	              registerRef(ancestor);
	            }
	            ancestor = ancestor.parent;
	          }
	        }

	        if (isDef(parentElm$1)) {
	          removeVnodes(parentElm$1, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}

	/*  */

	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};

	function updateDirectives (oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}

	function _update (oldVnode, vnode) {
	  var isCreate = oldVnode === emptyNode;
	  var isDestroy = vnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];

	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }

	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      for (var i = 0; i < dirsWithInsert.length; i++) {
	        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	      }
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    });
	  }

	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
	      }
	    }
	  }
	}

	var emptyModifiers = Object.create(null);

	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}

	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}

	function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    try {
	      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	    } catch (e) {
	      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
	    }
	  }
	}

	var baseModules = [
	  ref,
	  directives
	];

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  var opts = vnode.componentOptions;
	  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
	    return
	  }
	  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (isDef(attrs.__ob__)) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }

	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  // #4391: in IE9, setting type can reset value for input[type=radio]
	  // #6666: IE/Edge forces progress value down to 1 before setting a max
	  /* istanbul ignore if */
	  if ((isIE9 || isEdge) && attrs.value !== oldAttrs.value) {
	    setAttr(elm, 'value', attrs.value);
	  }
	  for (key in oldAttrs) {
	    if (isUndef(attrs[key])) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}

	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      // technically allowfullscreen is a boolean attribute for <iframe>,
	      // but Flash expects a value of "true" when used on <embed> tag
	      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
	        ? 'true'
	        : key;
	      el.setAttribute(key, value);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};

	/*  */

	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (
	    isUndef(data.staticClass) &&
	    isUndef(data.class) && (
	      isUndef(oldData) || (
	        isUndef(oldData.staticClass) &&
	        isUndef(oldData.class)
	      )
	    )
	  ) {
	    return
	  }

	  var cls = genClassForVnode(vnode);

	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (isDef(transitionClass)) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	};

	/*  */

	var validDivisionCharRE = /[\w).+\-_$\]]/;

	function parseFilters (exp) {
	  var inSingle = false;
	  var inDouble = false;
	  var inTemplateString = false;
	  var inRegex = false;
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;

	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
	    } else if (inDouble) {
	      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
	    } else if (inTemplateString) {
	      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
	    } else if (inRegex) {
	      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
	    } else if (
	      c === 0x7C && // pipe
	      exp.charCodeAt(i + 1) !== 0x7C &&
	      exp.charCodeAt(i - 1) !== 0x7C &&
	      !curly && !square && !paren
	    ) {
	      if (expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        expression = exp.slice(0, i).trim();
	      } else {
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break         // "
	        case 0x27: inSingle = true; break         // '
	        case 0x60: inTemplateString = true; break // `
	        case 0x28: paren++; break                 // (
	        case 0x29: paren--; break                 // )
	        case 0x5B: square++; break                // [
	        case 0x5D: square--; break                // ]
	        case 0x7B: curly++; break                 // {
	        case 0x7D: curly--; break                 // }
	      }
	      if (c === 0x2f) { // /
	        var j = i - 1;
	        var p = (void 0);
	        // find first non-whitespace prev char
	        for (; j >= 0; j--) {
	          p = exp.charAt(j);
	          if (p !== ' ') { break }
	        }
	        if (!p || !validDivisionCharRE.test(p)) {
	          inRegex = true;
	        }
	      }
	    }
	  }

	  if (expression === undefined) {
	    expression = exp.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  function pushFilter () {
	    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
	    lastFilterIndex = i + 1;
	  }

	  if (filters) {
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i]);
	    }
	  }

	  return expression
	}

	function wrapFilter (exp, filter) {
	  var i = filter.indexOf('(');
	  if (i < 0) {
	    // _f: resolveFilter
	    return ("_f(\"" + filter + "\")(" + exp + ")")
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    return ("_f(\"" + name + "\")(" + exp + "," + args)
	  }
	}

	/*  */

	function baseWarn (msg) {
	  console.error(("[Vue compiler]: " + msg));
	}

	function pluckModuleFunction (
	  modules,
	  key
	) {
	  return modules
	    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
	    : []
	}

	function addProp (el, name, value) {
	  (el.props || (el.props = [])).push({ name: name, value: value });
	}

	function addAttr (el, name, value) {
	  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
	}

	function addDirective (
	  el,
	  name,
	  rawName,
	  value,
	  arg,
	  modifiers
	) {
	  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	}

	function addHandler (
	  el,
	  name,
	  value,
	  modifiers,
	  important,
	  warn
	) {
	  // warn prevent and passive modifier
	  /* istanbul ignore if */
	  if (
	    process.env.NODE_ENV !== 'production' && warn &&
	    modifiers && modifiers.prevent && modifiers.passive
	  ) {
	    warn(
	      'passive and prevent can\'t be used together. ' +
	      'Passive handler can\'t prevent default event.'
	    );
	  }
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  if (modifiers && modifiers.once) {
	    delete modifiers.once;
	    name = '~' + name; // mark the event as once
	  }
	  /* istanbul ignore if */
	  if (modifiers && modifiers.passive) {
	    delete modifiers.passive;
	    name = '&' + name; // mark the event as passive
	  }
	  var events;
	  if (modifiers && modifiers.native) {
	    delete modifiers.native;
	    events = el.nativeEvents || (el.nativeEvents = {});
	  } else {
	    events = el.events || (el.events = {});
	  }
	  var newHandler = { value: value, modifiers: modifiers };
	  var handlers = events[name];
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
	  } else if (handlers) {
	    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
	  } else {
	    events[name] = newHandler;
	  }
	}

	function getBindingAttr (
	  el,
	  name,
	  getStatic
	) {
	  var dynamicValue =
	    getAndRemoveAttr(el, ':' + name) ||
	    getAndRemoveAttr(el, 'v-bind:' + name);
	  if (dynamicValue != null) {
	    return parseFilters(dynamicValue)
	  } else if (getStatic !== false) {
	    var staticValue = getAndRemoveAttr(el, name);
	    if (staticValue != null) {
	      return JSON.stringify(staticValue)
	    }
	  }
	}

	// note: this only removes the attr from the Array (attrsList) so that it
	// doesn't get processed by processAttrs.
	// By default it does NOT remove it from the map (attrsMap) because the map is
	// needed during codegen.
	function getAndRemoveAttr (
	  el,
	  name,
	  removeFromMap
	) {
	  var val;
	  if ((val = el.attrsMap[name]) != null) {
	    var list = el.attrsList;
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (list[i].name === name) {
	        list.splice(i, 1);
	        break
	      }
	    }
	  }
	  if (removeFromMap) {
	    delete el.attrsMap[name];
	  }
	  return val
	}

	/*  */

	/**
	 * Cross-platform code generation for component v-model
	 */
	function genComponentModel (
	  el,
	  value,
	  modifiers
	) {
	  var ref = modifiers || {};
	  var number = ref.number;
	  var trim = ref.trim;

	  var baseValueExpression = '$$v';
	  var valueExpression = baseValueExpression;
	  if (trim) {
	    valueExpression =
	      "(typeof " + baseValueExpression + " === 'string'" +
	        "? " + baseValueExpression + ".trim()" +
	        ": " + baseValueExpression + ")";
	  }
	  if (number) {
	    valueExpression = "_n(" + valueExpression + ")";
	  }
	  var assignment = genAssignmentCode(value, valueExpression);

	  el.model = {
	    value: ("(" + value + ")"),
	    expression: ("\"" + value + "\""),
	    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
	  };
	}

	/**
	 * Cross-platform codegen helper for generating v-model value assignment code.
	 */
	function genAssignmentCode (
	  value,
	  assignment
	) {
	  var res = parseModel(value);
	  if (res.key === null) {
	    return (value + "=" + assignment)
	  } else {
	    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
	  }
	}

	/**
	 * Parse a v-model expression into a base path and a final key segment.
	 * Handles both dot-path and possible square brackets.
	 *
	 * Possible cases:
	 *
	 * - test
	 * - test[key]
	 * - test[test1[key]]
	 * - test["a"][key]
	 * - xxx.test[a[a].test1[key]]
	 * - test.xxx.a["asa"][test1[key]]
	 *
	 */

	var len;
	var str;
	var chr;
	var index$1;
	var expressionPos;
	var expressionEndPos;



	function parseModel (val) {
	  len = val.length;

	  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
	    index$1 = val.lastIndexOf('.');
	    if (index$1 > -1) {
	      return {
	        exp: val.slice(0, index$1),
	        key: '"' + val.slice(index$1 + 1) + '"'
	      }
	    } else {
	      return {
	        exp: val,
	        key: null
	      }
	    }
	  }

	  str = val;
	  index$1 = expressionPos = expressionEndPos = 0;

	  while (!eof()) {
	    chr = next();
	    /* istanbul ignore if */
	    if (isStringStart(chr)) {
	      parseString(chr);
	    } else if (chr === 0x5B) {
	      parseBracket(chr);
	    }
	  }

	  return {
	    exp: val.slice(0, expressionPos),
	    key: val.slice(expressionPos + 1, expressionEndPos)
	  }
	}

	function next () {
	  return str.charCodeAt(++index$1)
	}

	function eof () {
	  return index$1 >= len
	}

	function isStringStart (chr) {
	  return chr === 0x22 || chr === 0x27
	}

	function parseBracket (chr) {
	  var inBracket = 1;
	  expressionPos = index$1;
	  while (!eof()) {
	    chr = next();
	    if (isStringStart(chr)) {
	      parseString(chr);
	      continue
	    }
	    if (chr === 0x5B) { inBracket++; }
	    if (chr === 0x5D) { inBracket--; }
	    if (inBracket === 0) {
	      expressionEndPos = index$1;
	      break
	    }
	  }
	}

	function parseString (chr) {
	  var stringQuote = chr;
	  while (!eof()) {
	    chr = next();
	    if (chr === stringQuote) {
	      break
	    }
	  }
	}

	/*  */

	var warn$1;

	// in some cases, the event used has to be determined at runtime
	// so we used some reserved tokens during compile.
	var RANGE_TOKEN = '__r';
	var CHECKBOX_RADIO_TOKEN = '__c';

	function model (
	  el,
	  dir,
	  _warn
	) {
	  warn$1 = _warn;
	  var value = dir.value;
	  var modifiers = dir.modifiers;
	  var tag = el.tag;
	  var type = el.attrsMap.type;

	  if (process.env.NODE_ENV !== 'production') {
	    // inputs with type="file" are read only and setting the input's
	    // value will throw an error.
	    if (tag === 'input' && type === 'file') {
	      warn$1(
	        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
	        "File inputs are read only. Use a v-on:change listener instead."
	      );
	    }
	  }

	  if (el.component) {
	    genComponentModel(el, value, modifiers);
	    // component v-model doesn't need extra runtime
	    return false
	  } else if (tag === 'select') {
	    genSelect(el, value, modifiers);
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value, modifiers);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value, modifiers);
	  } else if (tag === 'input' || tag === 'textarea') {
	    genDefaultModel(el, value, modifiers);
	  } else if (!config.isReservedTag(tag)) {
	    genComponentModel(el, value, modifiers);
	    // component v-model doesn't need extra runtime
	    return false
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn$1(
	      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	      "v-model is not supported on this element type. " +
	      'If you are working with contenteditable, it\'s recommended to ' +
	      'wrap a library dedicated for that purpose inside a custom component.'
	    );
	  }

	  // ensure runtime directive metadata
	  return true
	}

	function genCheckboxModel (
	  el,
	  value,
	  modifiers
	) {
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
	  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
	  addProp(el, 'checked',
	    "Array.isArray(" + value + ")" +
	      "?_i(" + value + "," + valueBinding + ")>-1" + (
	        trueValueBinding === 'true'
	          ? (":(" + value + ")")
	          : (":_q(" + value + "," + trueValueBinding + ")")
	      )
	  );
	  addHandler(el, 'change',
	    "var $$a=" + value + "," +
	        '$$el=$event.target,' +
	        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
	    'if(Array.isArray($$a)){' +
	      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
	      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
	    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
	    null, true
	  );
	}

	function genRadioModel (
	    el,
	    value,
	    modifiers
	) {
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
	  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
	}

	function genSelect (
	    el,
	    value,
	    modifiers
	) {
	  var number = modifiers && modifiers.number;
	  var selectedVal = "Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
	    "return " + (number ? '_n(val)' : 'val') + "})";

	  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
	  var code = "var $$selectedVal = " + selectedVal + ";";
	  code = code + " " + (genAssignmentCode(value, assignment));
	  addHandler(el, 'change', code, null, true);
	}

	function genDefaultModel (
	  el,
	  value,
	  modifiers
	) {
	  var type = el.attrsMap.type;
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var needCompositionGuard = !lazy && type !== 'range';
	  var event = lazy
	    ? 'change'
	    : type === 'range'
	      ? RANGE_TOKEN
	      : 'input';

	  var valueExpression = '$event.target.value';
	  if (trim) {
	    valueExpression = "$event.target.value.trim()";
	  }
	  if (number) {
	    valueExpression = "_n(" + valueExpression + ")";
	  }

	  var code = genAssignmentCode(value, valueExpression);
	  if (needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code;
	  }

	  addProp(el, 'value', ("(" + value + ")"));
	  addHandler(el, event, code, null, true);
	  if (trim || number) {
	    addHandler(el, 'blur', '$forceUpdate()');
	  }
	}

	/*  */

	// normalize v-model event tokens that can only be determined at runtime.
	// it's important to place the event as the first in the array because
	// the whole point is ensuring the v-model callback gets called before
	// user-attached handlers.
	function normalizeEvents (on) {
	  /* istanbul ignore if */
	  if (isDef(on[RANGE_TOKEN])) {
	    // IE input[type=range] only supports `change` event
	    var event = isIE ? 'change' : 'input';
	    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
	    delete on[RANGE_TOKEN];
	  }
	  // This was originally intended to fix #4521 but no longer necessary
	  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
	  /* istanbul ignore if */
	  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
	    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
	    delete on[CHECKBOX_RADIO_TOKEN];
	  }
	}

	var target$1;

	function createOnceHandler (handler, event, capture) {
	  var _target = target$1; // save current target element in closure
	  return function onceHandler () {
	    var res = handler.apply(null, arguments);
	    if (res !== null) {
	      remove$2(event, onceHandler, capture, _target);
	    }
	  }
	}

	function add$1 (
	  event,
	  handler,
	  once$$1,
	  capture,
	  passive
	) {
	  handler = withMacroTask(handler);
	  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
	  target$1.addEventListener(
	    event,
	    handler,
	    supportsPassive
	      ? { capture: capture, passive: passive }
	      : capture
	  );
	}

	function remove$2 (
	  event,
	  handler,
	  capture,
	  _target
	) {
	  (_target || target$1).removeEventListener(
	    event,
	    handler._withTask || handler,
	    capture
	  );
	}

	function updateDOMListeners (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target$1 = vnode.elm;
	  normalizeEvents(on);
	  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

	/*  */

	function updateDOMProps (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (isDef(props.__ob__)) {
	    props = vnode.data.domProps = extend({}, props);
	  }

	  for (key in oldProps) {
	    if (isUndef(props[key])) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
	      // #6601 work around Chrome version <= 55 bug where single textNode
	      // replaced by innerHTML/textContent retains its parentNode property
	      if (elm.childNodes.length === 1) {
	        elm.removeChild(elm.childNodes[0]);
	      }
	    }

	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = isUndef(cur) ? '' : String(cur);
	      if (shouldUpdateValue(elm, strCur)) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}

	// check platforms/web/util/attrs.js acceptValue


	function shouldUpdateValue (elm, checkVal) {
	  return (!elm.composing && (
	    elm.tagName === 'OPTION' ||
	    isDirty(elm, checkVal) ||
	    isInputChanged(elm, checkVal)
	  ))
	}

	function isDirty (elm, checkVal) {
	  // return true when textbox (.number and .trim) loses focus and its value is
	  // not equal to the updated value
	  var notInFocus = true;
	  // #6157
	  // work around IE bug when accessing document.activeElement in an iframe
	  try { notInFocus = document.activeElement !== elm; } catch (e) {}
	  return notInFocus && elm.value !== checkVal
	}

	function isInputChanged (elm, newVal) {
	  var value = elm.value;
	  var modifiers = elm._vModifiers; // injected by v-model runtime
	  if (isDef(modifiers) && modifiers.number) {
	    return toNumber(value) !== toNumber(newVal)
	  }
	  if (isDef(modifiers) && modifiers.trim) {
	    return value.trim() !== newVal.trim()
	  }
	  return value !== newVal
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};

	/*  */

	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res
	});

	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}

	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}

	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
	  var res = {};
	  var styleData;

	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.componentInstance) {
	      childNode = childNode.componentInstance._vnode;
	      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
	        extend(res, styleData);
	      }
	    }
	  }

	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }

	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}

	/*  */

	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	  } else {
	    var normalizedName = normalize(name);
	    if (Array.isArray(val)) {
	      // Support values array created by autoprefixer, e.g.
	      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
	      // Set them one by one, and the browser will only set those it can recognize
	      for (var i = 0, len = val.length; i < len; i++) {
	        el.style[normalizedName] = val[i];
	      }
	    } else {
	      el.style[normalizedName] = val;
	    }
	  }
	};

	var vendorNames = ['Webkit', 'Moz', 'ms'];

	var emptyStyle;
	var normalize = cached(function (prop) {
	  emptyStyle = emptyStyle || document.createElement('div').style;
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in emptyStyle)) {
	    return prop
	  }
	  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < vendorNames.length; i++) {
	    var name = vendorNames[i] + capName;
	    if (name in emptyStyle) {
	      return name
	    }
	  }
	});

	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;

	  if (isUndef(data.staticStyle) && isUndef(data.style) &&
	    isUndef(oldData.staticStyle) && isUndef(oldData.style)
	  ) {
	    return
	  }

	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldData.staticStyle;
	  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;

	  var style = normalizeStyleBinding(vnode.data.style) || {};

	  // store normalized style under a different key for next diff
	  // make sure to clone it if it's reactive, since the user likely wants
	  // to mutate it.
	  vnode.data.normalizedStyle = isDef(style.__ob__)
	    ? extend({}, style)
	    : style;

	  var newStyle = getStyle(vnode, true);

	  for (name in oldStyle) {
	    if (isUndef(newStyle[name])) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	};

	/*  */

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	    if (!el.classList.length) {
	      el.removeAttribute('class');
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    cur = cur.trim();
	    if (cur) {
	      el.setAttribute('class', cur);
	    } else {
	      el.removeAttribute('class');
	    }
	  }
	}

	/*  */

	function resolveTransition (def) {
	  if (!def) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def === 'object') {
	    var res = {};
	    if (def.css !== false) {
	      extend(res, autoCssTransition(def.name || 'v'));
	    }
	    extend(res, def);
	    return res
	  } else if (typeof def === 'string') {
	    return autoCssTransition(def)
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    enterToClass: (name + "-enter-to"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveClass: (name + "-leave"),
	    leaveToClass: (name + "-leave-to"),
	    leaveActiveClass: (name + "-leave-active")
	  }
	});

	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';

	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  ) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  ) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}

	// binding to window is necessary to make hot reload work in IE in strict mode
	var raf = inBrowser
	  ? window.requestAnimationFrame
	    ? window.requestAnimationFrame.bind(window)
	    : setTimeout
	  : /* istanbul ignore next */ function (fn) { return fn(); };

	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}

	function addTransitionClass (el, cls) {
	  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
	  if (transitionClasses.indexOf(cls) < 0) {
	    transitionClasses.push(cls);
	    addClass(el, cls);
	  }
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}

	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}

	var transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);

	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}

	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }

	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}

	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}

	/*  */

	function enter (vnode, toggleDisplay) {
	  var el = vnode.elm;

	  // call leave callback now
	  if (isDef(el._leaveCb)) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (isUndef(data)) {
	    return
	  }

	  /* istanbul ignore if */
	  if (isDef(el._enterCb) || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterToClass = data.enterToClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearToClass = data.appearToClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	  var duration = data.duration;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    transitionNode = transitionNode.parent;
	    context = transitionNode.context;
	  }

	  var isAppear = !context._isMounted || !vnode.isRootInsert;

	  if (isAppear && !appear && appear !== '') {
	    return
	  }

	  var startClass = isAppear && appearClass
	    ? appearClass
	    : enterClass;
	  var activeClass = isAppear && appearActiveClass
	    ? appearActiveClass
	    : enterActiveClass;
	  var toClass = isAppear && appearToClass
	    ? appearToClass
	    : enterToClass;

	  var beforeEnterHook = isAppear
	    ? (beforeAppear || beforeEnter)
	    : beforeEnter;
	  var enterHook = isAppear
	    ? (typeof appear === 'function' ? appear : enter)
	    : enter;
	  var afterEnterHook = isAppear
	    ? (afterAppear || afterEnter)
	    : afterEnter;
	  var enterCancelledHook = isAppear
	    ? (appearCancelled || enterCancelled)
	    : enterCancelled;

	  var explicitEnterDuration = toNumber(
	    isObject(duration)
	      ? duration.enter
	      : duration
	  );

	  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
	    checkDuration(explicitEnterDuration, 'enter', vnode);
	  }

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookArgumentsLength(enterHook);

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, toClass);
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode &&
	        pendingNode.tag === vnode.tag &&
	        pendingNode.elm._leaveCb
	      ) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    });
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      addTransitionClass(el, toClass);
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        if (isValidDuration(explicitEnterDuration)) {
	          setTimeout(cb, explicitEnterDuration);
	        } else {
	          whenTransitionEnds(el, type, cb);
	        }
	      }
	    });
	  }

	  if (vnode.data.show) {
	    toggleDisplay && toggleDisplay();
	    enterHook && enterHook(el, cb);
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}

	function leave (vnode, rm) {
	  var el = vnode.elm;

	  // call enter callback now
	  if (isDef(el._enterCb)) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (isUndef(data)) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (isDef(el._leaveCb) || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveToClass = data.leaveToClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	  var duration = data.duration;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookArgumentsLength(leave);

	  var explicitLeaveDuration = toNumber(
	    isObject(duration)
	      ? duration.leave
	      : duration
	  );

	  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
	    checkDuration(explicitLeaveDuration, 'leave', vnode);
	  }

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveToClass);
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });

	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }

	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        addTransitionClass(el, leaveToClass);
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          if (isValidDuration(explicitLeaveDuration)) {
	            setTimeout(cb, explicitLeaveDuration);
	          } else {
	            whenTransitionEnds(el, type, cb);
	          }
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}

	// only used in dev mode
	function checkDuration (val, name, vnode) {
	  if (typeof val !== 'number') {
	    warn(
	      "<transition> explicit " + name + " duration is not a valid number - " +
	      "got " + (JSON.stringify(val)) + ".",
	      vnode.context
	    );
	  } else if (isNaN(val)) {
	    warn(
	      "<transition> explicit " + name + " duration is NaN - " +
	      'the duration expression might be incorrect.',
	      vnode.context
	    );
	  }
	}

	function isValidDuration (val) {
	  return typeof val === 'number' && !isNaN(val)
	}

	/**
	 * Normalize a transition hook's argument length. The hook may be:
	 * - a merged hook (invoker) with the original in .fns
	 * - a wrapped component method (check ._length)
	 * - a plain function (.length)
	 */
	function getHookArgumentsLength (fn) {
	  if (isUndef(fn)) {
	    return false
	  }
	  var invokerFns = fn.fns;
	  if (isDef(invokerFns)) {
	    // invoker
	    return getHookArgumentsLength(
	      Array.isArray(invokerFns)
	        ? invokerFns[0]
	        : invokerFns
	    )
	  } else {
	    return (fn._length || fn.length) > 1
	  }
	}

	function _enter (_, vnode) {
	  if (vnode.data.show !== true) {
	    enter(vnode);
	  }
	}

	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove$$1 (vnode, rm) {
	    /* istanbul ignore else */
	    if (vnode.data.show !== true) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};

	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);

	var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}

	var model$1 = {
	  inserted: function inserted (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      el._vOptions = [].map.call(el.options, getValue);
	    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
	        // Safari < 10.2 & UIWebView doesn't fire compositionend when
	        // switching focus before confirming composition choice
	        // this also fixes the issue where some browsers e.g. iOS Chrome
	        // fires "change" instead of "input" on autocomplete.
	        el.addEventListener('change', onCompositionEnd);
	        if (!isAndroid) {
	          el.addEventListener('compositionstart', onCompositionStart);
	          el.addEventListener('compositionend', onCompositionEnd);
	        }
	        /* istanbul ignore if */
	        if (isIE9) {
	          el.vmodel = true;
	        }
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var prevOptions = el._vOptions;
	      var curOptions = el._vOptions = [].map.call(el.options, getValue);
	      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
	        // trigger change event if
	        // no matching option found for at least one value
	        var needReset = el.multiple
	          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
	          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
	        if (needReset) {
	          trigger(el, 'change');
	        }
	      }
	    }
	  }
	};

	function setSelected (el, binding, vm) {
	  actuallySetSelected(el, binding, vm);
	  /* istanbul ignore if */
	  if (isIE || isEdge) {
	    setTimeout(function () {
	      actuallySetSelected(el, binding, vm);
	    }, 0);
	  }
	}

	function actuallySetSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}

	function hasNoMatchingOption (value, options) {
	  return options.every(function (o) { return !looseEqual(o, value); })
	}

	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}

	function onCompositionStart (e) {
	  e.target.composing = true;
	}

	function onCompositionEnd (e) {
	  // prevent triggering an input event for no reason
	  if (!e.target.composing) { return }
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}

	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.componentInstance._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition$$1 = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay =
	      el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition$$1) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },

	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition$$1 = vnode.data && vnode.data.transition;
	    if (transition$$1) {
	      vnode.data.show = true;
	      if (value) {
	        enter(vnode, function () {
	          el.style.display = el.__vOriginalDisplay;
	        });
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  },

	  unbind: function unbind (
	    el,
	    binding,
	    vnode,
	    oldVnode,
	    isDestroy
	  ) {
	    if (!isDestroy) {
	      el.style.display = el.__vOriginalDisplay;
	    }
	  }
	};

	var platformDirectives = {
	  model: model$1,
	  show: show
	};

	/*  */

	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterToClass: String,
	  leaveToClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String,
	  appearToClass: String,
	  duration: [Number, String, Object]
	};

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}

	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1];
	  }
	  return data
	}

	function placeholder (h, rawChild) {
	  if (/\d-keep-alive$/.test(rawChild.tag)) {
	    return h('keep-alive', {
	      props: rawChild.componentOptions.propsData
	    })
	  }
	}

	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}

	function isSameChild (child, oldChild) {
	  return oldChild.key === child.key && oldChild.tag === child.tag
	}

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,

	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$options._renderChildren;
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' &&
	      mode && mode !== 'in-out' && mode !== 'out-in'
	    ) {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }

	    var rawChild = children[0];

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }

	    // ensure a key that is unique to the vnode type and to this transition
	    // component instance. This key will be used to remove pending leaving nodes
	    // during entering.
	    var id = "__transition-" + (this._uid) + "-";
	    child.key = child.key == null
	      ? child.isComment
	        ? id + 'comment'
	        : id + child.tag
	      : isPrimitive(child.key)
	        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
	        : child.key;

	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }

	    if (
	      oldChild &&
	      oldChild.data &&
	      !isSameChild(child, oldChild) &&
	      !isAsyncPlaceholder(oldChild)
	    ) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        });
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        if (isAsyncPlaceholder(child)) {
	          return oldRawChild
	        }
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave);
	        mergeVNodeHook(data, 'enterCancelled', performLeave);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
	      }
	    }

	    return rawChild
	  }
	};

	/*  */

	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final desired state. This way in the second pass removed
	// nodes will remain where they should be.

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);

	delete props.mode;

	var TransitionGroup = {
	  props: props,

	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions;
	          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }

	    return h(tag, null, children)
	  },

	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },

	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);

	    // force reflow to put everything in position
	    // assign to this to avoid being removed in tree-shaking
	    // $flow-disable-line
	    this._reflow = document.body.offsetHeight;

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },

	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      /* istanbul ignore if */
	      if (this._hasMove) {
	        return this._hasMove
	      }
	      // Detect whether an element with the move class applied has
	      // CSS transitions. Since the element may be inside an entering
	      // transition at this very moment, we make a clone of it and remove
	      // all other transition classes applied to ensure only the move class
	      // is applied.
	      var clone = el.cloneNode();
	      if (el._transitionClasses) {
	        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
	      }
	      addClass(clone, moveClass);
	      clone.style.display = 'none';
	      this.$el.appendChild(clone);
	      var info = getTransitionInfo(clone);
	      this.$el.removeChild(clone);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};

	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}

	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};

	/*  */

	// install platform specific utils
	Vue$3.config.mustUseProp = mustUseProp;
	Vue$3.config.isReservedTag = isReservedTag;
	Vue$3.config.isReservedAttr = isReservedAttr;
	Vue$3.config.getTagNamespace = getTagNamespace;
	Vue$3.config.isUnknownElement = isUnknownElement;

	// install platform runtime directives & components
	extend(Vue$3.options.directives, platformDirectives);
	extend(Vue$3.options.components, platformComponents);

	// install platform patch function
	Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

	// public mount method
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return mountComponent(this, el, hydrating)
	};

	// devtools global hook
	/* istanbul ignore next */
	Vue$3.nextTick(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$3);
	    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
	      console[console.info ? 'info' : 'log'](
	        'Download the Vue Devtools extension for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	  if (process.env.NODE_ENV !== 'production' &&
	    config.productionTip !== false &&
	    inBrowser && typeof console !== 'undefined'
	  ) {
	    console[console.info ? 'info' : 'log'](
	      "You are running Vue in development mode.\n" +
	      "Make sure to turn on production mode when deploying for production.\n" +
	      "See more tips at https://vuejs.org/guide/deployment.html"
	    );
	  }
	}, 0);

	/*  */

	// check whether current browser encodes a char inside attribute values
	function shouldDecode (content, encoded) {
	  var div = document.createElement('div');
	  div.innerHTML = "<div a=\"" + content + "\"/>";
	  return div.innerHTML.indexOf(encoded) > 0
	}

	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

	/*  */

	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

	var buildRegex = cached(function (delimiters) {
	  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
	  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
	  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	});

	function parseText (
	  text,
	  delimiters
	) {
	  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
	  if (!tagRE.test(text)) {
	    return
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index;
	  while ((match = tagRE.exec(text))) {
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
	    }
	    // tag token
	    var exp = parseFilters(match[1].trim());
	    tokens.push(("_s(" + exp + ")"));
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push(JSON.stringify(text.slice(lastIndex)));
	  }
	  return tokens.join('+')
	}

	/*  */

	function transformNode (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticClass = getAndRemoveAttr(el, 'class');
	  if (process.env.NODE_ENV !== 'production' && staticClass) {
	    var expression = parseText(staticClass, options.delimiters);
	    if (expression) {
	      warn(
	        "class=\"" + staticClass + "\": " +
	        'Interpolation inside attributes has been removed. ' +
	        'Use v-bind or the colon shorthand instead. For example, ' +
	        'instead of <div class="{{ val }}">, use <div :class="val">.'
	      );
	    }
	  }
	  if (staticClass) {
	    el.staticClass = JSON.stringify(staticClass);
	  }
	  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
	  if (classBinding) {
	    el.classBinding = classBinding;
	  }
	}

	function genData (el) {
	  var data = '';
	  if (el.staticClass) {
	    data += "staticClass:" + (el.staticClass) + ",";
	  }
	  if (el.classBinding) {
	    data += "class:" + (el.classBinding) + ",";
	  }
	  return data
	}

	var klass$1 = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData
	};

	/*  */

	function transformNode$1 (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticStyle = getAndRemoveAttr(el, 'style');
	  if (staticStyle) {
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production') {
	      var expression = parseText(staticStyle, options.delimiters);
	      if (expression) {
	        warn(
	          "style=\"" + staticStyle + "\": " +
	          'Interpolation inside attributes has been removed. ' +
	          'Use v-bind or the colon shorthand instead. For example, ' +
	          'instead of <div style="{{ val }}">, use <div :style="val">.'
	        );
	      }
	    }
	    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
	  }

	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}

	function genData$1 (el) {
	  var data = '';
	  if (el.staticStyle) {
	    data += "staticStyle:" + (el.staticStyle) + ",";
	  }
	  if (el.styleBinding) {
	    data += "style:(" + (el.styleBinding) + "),";
	  }
	  return data
	}

	var style$1 = {
	  staticKeys: ['staticStyle'],
	  transformNode: transformNode$1,
	  genData: genData$1
	};

	/*  */

	var decoder;

	var he = {
	  decode: function decode (html) {
	    decoder = decoder || document.createElement('div');
	    decoder.innerHTML = html;
	    return decoder.textContent
	  }
	};

	/*  */

	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr'
	);

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
	);

	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track'
	);

	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */

	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */

	// Regular Expressions for parsing tags and attributes
	var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
	var startTagOpen = new RegExp(("^<" + qnameCapture));
	var startTagClose = /^\s*(\/?)>/;
	var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
	var doctype = /^<!DOCTYPE [^>]+>/i;
	var comment = /^<!--/;
	var conditionalComment = /^<!\[/;

	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === '';
	});

	// Special Elements (can contain anything)
	var isPlainTextElement = makeMap('script,style,textarea', true);
	var reCache = {};

	var decodingMap = {
	  '&lt;': '<',
	  '&gt;': '>',
	  '&quot;': '"',
	  '&amp;': '&',
	  '&#10;': '\n'
	};
	var encodedAttr = /&(?:lt|gt|quot|amp);/g;
	var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

	// #5992
	var isIgnoreNewlineTag = makeMap('pre,textarea', true);
	var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

	function decodeAttr (value, shouldDecodeNewlines) {
	  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
	  return value.replace(re, function (match) { return decodingMap[match]; })
	}

	function parseHTML (html, options) {
	  var stack = [];
	  var expectHTML = options.expectHTML;
	  var isUnaryTag$$1 = options.isUnaryTag || no;
	  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
	  var index = 0;
	  var last, lastTag;
	  while (html) {
	    last = html;
	    // Make sure we're not in a plaintext content element like script/style
	    if (!lastTag || !isPlainTextElement(lastTag)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (comment.test(html)) {
	          var commentEnd = html.indexOf('-->');

	          if (commentEnd >= 0) {
	            if (options.shouldKeepComment) {
	              options.comment(html.substring(4, commentEnd));
	            }
	            advance(commentEnd + 3);
	            continue
	          }
	        }

	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (conditionalComment.test(html)) {
	          var conditionalEnd = html.indexOf(']>');

	          if (conditionalEnd >= 0) {
	            advance(conditionalEnd + 2);
	            continue
	          }
	        }

	        // Doctype:
	        var doctypeMatch = html.match(doctype);
	        if (doctypeMatch) {
	          advance(doctypeMatch[0].length);
	          continue
	        }

	        // End tag:
	        var endTagMatch = html.match(endTag);
	        if (endTagMatch) {
	          var curIndex = index;
	          advance(endTagMatch[0].length);
	          parseEndTag(endTagMatch[1], curIndex, index);
	          continue
	        }

	        // Start tag:
	        var startTagMatch = parseStartTag();
	        if (startTagMatch) {
	          handleStartTag(startTagMatch);
	          if (shouldIgnoreFirstNewline(lastTag, html)) {
	            advance(1);
	          }
	          continue
	        }
	      }

	      var text = (void 0), rest = (void 0), next = (void 0);
	      if (textEnd >= 0) {
	        rest = html.slice(textEnd);
	        while (
	          !endTag.test(rest) &&
	          !startTagOpen.test(rest) &&
	          !comment.test(rest) &&
	          !conditionalComment.test(rest)
	        ) {
	          // < in plain text, be forgiving and treat it as text
	          next = rest.indexOf('<', 1);
	          if (next < 0) { break }
	          textEnd += next;
	          rest = html.slice(textEnd);
	        }
	        text = html.substring(0, textEnd);
	        advance(textEnd);
	      }

	      if (textEnd < 0) {
	        text = html;
	        html = '';
	      }

	      if (options.chars && text) {
	        options.chars(text);
	      }
	    } else {
	      var endTagLength = 0;
	      var stackedTag = lastTag.toLowerCase();
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length;
	        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
	          text = text
	            .replace(/<!--([\s\S]*?)-->/g, '$1')
	            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
	        }
	        if (shouldIgnoreFirstNewline(stackedTag, text)) {
	          text = text.slice(1);
	        }
	        if (options.chars) {
	          options.chars(text);
	        }
	        return ''
	      });
	      index += html.length - rest$1.length;
	      html = rest$1;
	      parseEndTag(stackedTag, index - endTagLength, index);
	    }

	    if (html === last) {
	      options.chars && options.chars(html);
	      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
	        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
	      }
	      break
	    }
	  }

	  // Clean up any remaining tags
	  parseEndTag();

	  function advance (n) {
	    index += n;
	    html = html.substring(n);
	  }

	  function parseStartTag () {
	    var start = html.match(startTagOpen);
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: [],
	        start: index
	      };
	      advance(start[0].length);
	      var end, attr;
	      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	        advance(attr[0].length);
	        match.attrs.push(attr);
	      }
	      if (end) {
	        match.unarySlash = end[1];
	        advance(end[0].length);
	        match.end = index;
	        return match
	      }
	    }
	  }

	  function handleStartTag (match) {
	    var tagName = match.tagName;
	    var unarySlash = match.unarySlash;

	    if (expectHTML) {
	      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	        parseEndTag(lastTag);
	      }
	      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
	        parseEndTag(tagName);
	      }
	    }

	    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

	    var l = match.attrs.length;
	    var attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      var args = match.attrs[i];
	      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	        if (args[3] === '') { delete args[3]; }
	        if (args[4] === '') { delete args[4]; }
	        if (args[5] === '') { delete args[5]; }
	      }
	      var value = args[3] || args[4] || args[5] || '';
	      attrs[i] = {
	        name: args[1],
	        value: decodeAttr(
	          value,
	          options.shouldDecodeNewlines
	        )
	      };
	    }

	    if (!unary) {
	      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
	      lastTag = tagName;
	    }

	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end);
	    }
	  }

	  function parseEndTag (tagName, start, end) {
	    var pos, lowerCasedTagName;
	    if (start == null) { start = index; }
	    if (end == null) { end = index; }

	    if (tagName) {
	      lowerCasedTagName = tagName.toLowerCase();
	    }

	    // Find the closest opened tag of the same type
	    if (tagName) {
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
	          break
	        }
	      }
	    } else {
	      // If no tag name is provided, clean shop
	      pos = 0;
	    }

	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if (process.env.NODE_ENV !== 'production' &&
	          (i > pos || !tagName) &&
	          options.warn
	        ) {
	          options.warn(
	            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
	          );
	        }
	        if (options.end) {
	          options.end(stack[i].tag, start, end);
	        }
	      }

	      // Remove the open elements from the stack
	      stack.length = pos;
	      lastTag = pos && stack[pos - 1].tag;
	    } else if (lowerCasedTagName === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end);
	      }
	    } else if (lowerCasedTagName === 'p') {
	      if (options.start) {
	        options.start(tagName, [], false, start, end);
	      }
	      if (options.end) {
	        options.end(tagName, start, end);
	      }
	    }
	  }
	}

	/*  */

	var onRE = /^@|^v-on:/;
	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

	var argRE = /:(.*)$/;
	var bindRE = /^:|^v-bind:/;
	var modifierRE = /\.[^.]+/g;

	var decodeHTMLCached = cached(he.decode);

	// configurable state
	var warn$2;
	var delimiters;
	var transforms;
	var preTransforms;
	var postTransforms;
	var platformIsPreTag;
	var platformMustUseProp;
	var platformGetTagNamespace;



	function createASTElement (
	  tag,
	  attrs,
	  parent
	) {
	  return {
	    type: 1,
	    tag: tag,
	    attrsList: attrs,
	    attrsMap: makeAttrsMap(attrs),
	    parent: parent,
	    children: []
	  }
	}

	/**
	 * Convert HTML string to AST.
	 */
	function parse (
	  template,
	  options
	) {
	  warn$2 = options.warn || baseWarn;

	  platformIsPreTag = options.isPreTag || no;
	  platformMustUseProp = options.mustUseProp || no;
	  platformGetTagNamespace = options.getTagNamespace || no;

	  transforms = pluckModuleFunction(options.modules, 'transformNode');
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

	  delimiters = options.delimiters;

	  var stack = [];
	  var preserveWhitespace = options.preserveWhitespace !== false;
	  var root;
	  var currentParent;
	  var inVPre = false;
	  var inPre = false;
	  var warned = false;

	  function warnOnce (msg) {
	    if (!warned) {
	      warned = true;
	      warn$2(msg);
	    }
	  }

	  function endPre (element) {
	    // check pre state
	    if (element.pre) {
	      inVPre = false;
	    }
	    if (platformIsPreTag(element.tag)) {
	      inPre = false;
	    }
	  }

	  parseHTML(template, {
	    warn: warn$2,
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    canBeLeftOpenTag: options.canBeLeftOpenTag,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
	    shouldKeepComment: options.comments,
	    start: function start (tag, attrs, unary) {
	      // check namespace.
	      // inherit parent ns if there is one
	      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

	      // handle IE svg bug
	      /* istanbul ignore if */
	      if (isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }

	      var element = createASTElement(tag, attrs, currentParent);
	      if (ns) {
	        element.ns = ns;
	      }

	      if (isForbiddenTag(element) && !isServerRendering()) {
	        element.forbidden = true;
	        process.env.NODE_ENV !== 'production' && warn$2(
	          'Templates should only be responsible for mapping the state to the ' +
	          'UI. Avoid placing tags with side-effects in your templates, such as ' +
	          "<" + tag + ">" + ', as they will not be parsed.'
	        );
	      }

	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        element = preTransforms[i](element, options) || element;
	      }

	      if (!inVPre) {
	        processPre(element);
	        if (element.pre) {
	          inVPre = true;
	        }
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = true;
	      }
	      if (inVPre) {
	        processRawAttrs(element);
	      } else if (!element.processed) {
	        // structural directives
	        processFor(element);
	        processIf(element);
	        processOnce(element);
	        // element-scope stuff
	        processElement(element, options);
	      }

	      function checkRootConstraints (el) {
	        if (process.env.NODE_ENV !== 'production') {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warnOnce(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes.'
	            );
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warnOnce(
	              'Cannot use v-for on stateful component root element because ' +
	              'it renders multiple elements.'
	            );
	          }
	        }
	      }

	      // tree management
	      if (!root) {
	        root = element;
	        checkRootConstraints(root);
	      } else if (!stack.length) {
	        // allow root elements with v-if, v-else-if and v-else
	        if (root.if && (element.elseif || element.else)) {
	          checkRootConstraints(element);
	          addIfCondition(root, {
	            exp: element.elseif,
	            block: element
	          });
	        } else if (process.env.NODE_ENV !== 'production') {
	          warnOnce(
	            "Component template should contain exactly one root element. " +
	            "If you are using v-if on multiple elements, " +
	            "use v-else-if to chain them instead."
	          );
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.elseif || element.else) {
	          processIfConditions(element, currentParent);
	        } else if (element.slotScope) { // scoped slot
	          currentParent.plain = false;
	          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
	        } else {
	          currentParent.children.push(element);
	          element.parent = currentParent;
	        }
	      }
	      if (!unary) {
	        currentParent = element;
	        stack.push(element);
	      } else {
	        endPre(element);
	      }
	      // apply post-transforms
	      for (var i$1 = 0; i$1 < postTransforms.length; i$1++) {
	        postTransforms[i$1](element, options);
	      }
	    },

	    end: function end () {
	      // remove trailing whitespace
	      var element = stack[stack.length - 1];
	      var lastNode = element.children[element.children.length - 1];
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
	        element.children.pop();
	      }
	      // pop stack
	      stack.length -= 1;
	      currentParent = stack[stack.length - 1];
	      endPre(element);
	    },

	    chars: function chars (text) {
	      if (!currentParent) {
	        if (process.env.NODE_ENV !== 'production') {
	          if (text === template) {
	            warnOnce(
	              'Component template requires a root element, rather than just text.'
	            );
	          } else if ((text = text.trim())) {
	            warnOnce(
	              ("text \"" + text + "\" outside root element will be ignored.")
	            );
	          }
	        }
	        return
	      }
	      // IE textarea placeholder bug
	      /* istanbul ignore if */
	      if (isIE &&
	        currentParent.tag === 'textarea' &&
	        currentParent.attrsMap.placeholder === text
	      ) {
	        return
	      }
	      var children = currentParent.children;
	      text = inPre || text.trim()
	        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && children.length ? ' ' : '';
	      if (text) {
	        var expression;
	        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	          children.push({
	            type: 2,
	            expression: expression,
	            text: text
	          });
	        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
	          children.push({
	            type: 3,
	            text: text
	          });
	        }
	      }
	    },
	    comment: function comment (text) {
	      currentParent.children.push({
	        type: 3,
	        text: text,
	        isComment: true
	      });
	    }
	  });
	  return root
	}

	function processPre (el) {
	  if (getAndRemoveAttr(el, 'v-pre') != null) {
	    el.pre = true;
	  }
	}

	function processRawAttrs (el) {
	  var l = el.attrsList.length;
	  if (l) {
	    var attrs = el.attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      attrs[i] = {
	        name: el.attrsList[i].name,
	        value: JSON.stringify(el.attrsList[i].value)
	      };
	    }
	  } else if (!el.pre) {
	    // non root node in pre blocks with no attributes
	    el.plain = true;
	  }
	}

	function processElement (element, options) {
	  processKey(element);

	  // determine whether this is a plain element after
	  // removing structural attributes
	  element.plain = !element.key && !element.attrsList.length;

	  processRef(element);
	  processSlot(element);
	  processComponent(element);
	  for (var i = 0; i < transforms.length; i++) {
	    element = transforms[i](element, options) || element;
	  }
	  processAttrs(element);
	}

	function processKey (el) {
	  var exp = getBindingAttr(el, 'key');
	  if (exp) {
	    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
	      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
	    }
	    el.key = exp;
	  }
	}

	function processRef (el) {
	  var ref = getBindingAttr(el, 'ref');
	  if (ref) {
	    el.ref = ref;
	    el.refInFor = checkInFor(el);
	  }
	}

	function processFor (el) {
	  var exp;
	  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
	    var inMatch = exp.match(forAliasRE);
	    if (!inMatch) {
	      process.env.NODE_ENV !== 'production' && warn$2(
	        ("Invalid v-for expression: " + exp)
	      );
	      return
	    }
	    el.for = inMatch[2].trim();
	    var alias = inMatch[1].trim();
	    var iteratorMatch = alias.match(forIteratorRE);
	    if (iteratorMatch) {
	      el.alias = iteratorMatch[1].trim();
	      el.iterator1 = iteratorMatch[2].trim();
	      if (iteratorMatch[3]) {
	        el.iterator2 = iteratorMatch[3].trim();
	      }
	    } else {
	      el.alias = alias;
	    }
	  }
	}

	function processIf (el) {
	  var exp = getAndRemoveAttr(el, 'v-if');
	  if (exp) {
	    el.if = exp;
	    addIfCondition(el, {
	      exp: exp,
	      block: el
	    });
	  } else {
	    if (getAndRemoveAttr(el, 'v-else') != null) {
	      el.else = true;
	    }
	    var elseif = getAndRemoveAttr(el, 'v-else-if');
	    if (elseif) {
	      el.elseif = elseif;
	    }
	  }
	}

	function processIfConditions (el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    addIfCondition(prev, {
	      exp: el.elseif,
	      block: el
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn$2(
	      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
	      "used on element <" + (el.tag) + "> without corresponding v-if."
	    );
	  }
	}

	function findPrevElement (children) {
	  var i = children.length;
	  while (i--) {
	    if (children[i].type === 1) {
	      return children[i]
	    } else {
	      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
	        warn$2(
	          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
	          "will be ignored."
	        );
	      }
	      children.pop();
	    }
	  }
	}

	function addIfCondition (el, condition) {
	  if (!el.ifConditions) {
	    el.ifConditions = [];
	  }
	  el.ifConditions.push(condition);
	}

	function processOnce (el) {
	  var once$$1 = getAndRemoveAttr(el, 'v-once');
	  if (once$$1 != null) {
	    el.once = true;
	  }
	}

	function processSlot (el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name');
	    if (process.env.NODE_ENV !== 'production' && el.key) {
	      warn$2(
	        "`key` does not work on <slot> because slots are abstract outlets " +
	        "and can possibly expand into multiple elements. " +
	        "Use the key on a wrapping element instead."
	      );
	    }
	  } else {
	    var slotScope;
	    if (el.tag === 'template') {
	      slotScope = getAndRemoveAttr(el, 'scope');
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && slotScope) {
	        warn$2(
	          "the \"scope\" attribute for scoped slots have been deprecated and " +
	          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
	          "can also be used on plain elements in addition to <template> to " +
	          "denote scoped slots.",
	          true
	        );
	      }
	      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
	    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
	      el.slotScope = slotScope;
	    }
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
	      // preserve slot as an attribute for native shadow DOM compat
	      // only for non-scoped slots.
	      if (!el.slotScope) {
	        addAttr(el, 'slot', slotTarget);
	      }
	    }
	  }
	}

	function processComponent (el) {
	  var binding;
	  if ((binding = getBindingAttr(el, 'is'))) {
	    el.component = binding;
	  }
	  if (getAndRemoveAttr(el, 'inline-template') != null) {
	    el.inlineTemplate = true;
	  }
	}

	function processAttrs (el) {
	  var list = el.attrsList;
	  var i, l, name, rawName, value, modifiers, isProp;
	  for (i = 0, l = list.length; i < l; i++) {
	    name = rawName = list[i].name;
	    value = list[i].value;
	    if (dirRE.test(name)) {
	      // mark element as dynamic
	      el.hasBindings = true;
	      // modifiers
	      modifiers = parseModifiers(name);
	      if (modifiers) {
	        name = name.replace(modifierRE, '');
	      }
	      if (bindRE.test(name)) { // v-bind
	        name = name.replace(bindRE, '');
	        value = parseFilters(value);
	        isProp = false;
	        if (modifiers) {
	          if (modifiers.prop) {
	            isProp = true;
	            name = camelize(name);
	            if (name === 'innerHtml') { name = 'innerHTML'; }
	          }
	          if (modifiers.camel) {
	            name = camelize(name);
	          }
	          if (modifiers.sync) {
	            addHandler(
	              el,
	              ("update:" + (camelize(name))),
	              genAssignmentCode(value, "$event")
	            );
	          }
	        }
	        if (isProp || (
	          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
	        )) {
	          addProp(el, name, value);
	        } else {
	          addAttr(el, name, value);
	        }
	      } else if (onRE.test(name)) { // v-on
	        name = name.replace(onRE, '');
	        addHandler(el, name, value, modifiers, false, warn$2);
	      } else { // normal directives
	        name = name.replace(dirRE, '');
	        // parse arg
	        var argMatch = name.match(argRE);
	        var arg = argMatch && argMatch[1];
	        if (arg) {
	          name = name.slice(0, -(arg.length + 1));
	        }
	        addDirective(el, name, rawName, value, arg, modifiers);
	        if (process.env.NODE_ENV !== 'production' && name === 'model') {
	          checkForAliasModel(el, value);
	        }
	      }
	    } else {
	      // literal attribute
	      if (process.env.NODE_ENV !== 'production') {
	        var expression = parseText(value, delimiters);
	        if (expression) {
	          warn$2(
	            name + "=\"" + value + "\": " +
	            'Interpolation inside attributes has been removed. ' +
	            'Use v-bind or the colon shorthand instead. For example, ' +
	            'instead of <div id="{{ val }}">, use <div :id="val">.'
	          );
	        }
	      }
	      addAttr(el, name, JSON.stringify(value));
	    }
	  }
	}

	function checkInFor (el) {
	  var parent = el;
	  while (parent) {
	    if (parent.for !== undefined) {
	      return true
	    }
	    parent = parent.parent;
	  }
	  return false
	}

	function parseModifiers (name) {
	  var match = name.match(modifierRE);
	  if (match) {
	    var ret = {};
	    match.forEach(function (m) { ret[m.slice(1)] = true; });
	    return ret
	  }
	}

	function makeAttrsMap (attrs) {
	  var map = {};
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if (
	      process.env.NODE_ENV !== 'production' &&
	      map[attrs[i].name] && !isIE && !isEdge
	    ) {
	      warn$2('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map
	}

	// for script (e.g. type="x/template") or style, do not decode content
	function isTextTag (el) {
	  return el.tag === 'script' || el.tag === 'style'
	}

	function isForbiddenTag (el) {
	  return (
	    el.tag === 'style' ||
	    (el.tag === 'script' && (
	      !el.attrsMap.type ||
	      el.attrsMap.type === 'text/javascript'
	    ))
	  )
	}

	var ieNSBug = /^xmlns:NS\d+/;
	var ieNSPrefix = /^NS\d+:/;

	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
	  var res = [];
	  for (var i = 0; i < attrs.length; i++) {
	    var attr = attrs[i];
	    if (!ieNSBug.test(attr.name)) {
	      attr.name = attr.name.replace(ieNSPrefix, '');
	      res.push(attr);
	    }
	  }
	  return res
	}

	function checkForAliasModel (el, value) {
	  var _el = el;
	  while (_el) {
	    if (_el.for && _el.alias === value) {
	      warn$2(
	        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	        "You are binding v-model directly to a v-for iteration alias. " +
	        "This will not be able to modify the v-for source array because " +
	        "writing to the alias is like modifying a function local variable. " +
	        "Consider using an array of objects and use v-model on an object property instead."
	      );
	    }
	    _el = _el.parent;
	  }
	}

	/*  */

	/**
	 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
	 * Turn this:
	 *   <input v-model="data[type]" :type="type">
	 * into this:
	 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
	 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
	 *   <input v-else :type="type" v-model="data[type]">
	 */

	function preTransformNode (el, options) {
	  if (el.tag === 'input') {
	    var map = el.attrsMap;
	    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
	      var typeBinding = getBindingAttr(el, 'type');
	      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
	      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
	      // 1. checkbox
	      var branch0 = cloneASTElement(el);
	      // process for on the main node
	      processFor(branch0);
	      addRawAttr(branch0, 'type', 'checkbox');
	      processElement(branch0, options);
	      branch0.processed = true; // prevent it from double-processed
	      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
	      addIfCondition(branch0, {
	        exp: branch0.if,
	        block: branch0
	      });
	      // 2. add radio else-if condition
	      var branch1 = cloneASTElement(el);
	      getAndRemoveAttr(branch1, 'v-for', true);
	      addRawAttr(branch1, 'type', 'radio');
	      processElement(branch1, options);
	      addIfCondition(branch0, {
	        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
	        block: branch1
	      });
	      // 3. other
	      var branch2 = cloneASTElement(el);
	      getAndRemoveAttr(branch2, 'v-for', true);
	      addRawAttr(branch2, ':type', typeBinding);
	      processElement(branch2, options);
	      addIfCondition(branch0, {
	        exp: ifCondition,
	        block: branch2
	      });
	      return branch0
	    }
	  }
	}

	function cloneASTElement (el) {
	  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
	}

	function addRawAttr (el, name, value) {
	  el.attrsMap[name] = value;
	  el.attrsList.push({ name: name, value: value });
	}

	var model$2 = {
	  preTransformNode: preTransformNode
	};

	var modules$1 = [
	  klass$1,
	  style$1,
	  model$2
	];

	/*  */

	function text (el, dir) {
	  if (dir.value) {
	    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
	  }
	}

	/*  */

	function html (el, dir) {
	  if (dir.value) {
	    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
	  }
	}

	var directives$1 = {
	  model: model,
	  text: text,
	  html: html
	};

	/*  */

	var baseOptions = {
	  expectHTML: true,
	  modules: modules$1,
	  directives: directives$1,
	  isPreTag: isPreTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  canBeLeftOpenTag: canBeLeftOpenTag,
	  isReservedTag: isReservedTag,
	  getTagNamespace: getTagNamespace,
	  staticKeys: genStaticKeys(modules$1)
	};

	/*  */

	var isStaticKey;
	var isPlatformReservedTag;

	var genStaticKeysCached = cached(genStaticKeys$1);

	/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize (root, options) {
	  if (!root) { return }
	  isStaticKey = genStaticKeysCached(options.staticKeys || '');
	  isPlatformReservedTag = options.isReservedTag || no;
	  // first pass: mark all non-static nodes.
	  markStatic$1(root);
	  // second pass: mark static roots.
	  markStaticRoots(root, false);
	}

	function genStaticKeys$1 (keys) {
	  return makeMap(
	    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
	    (keys ? ',' + keys : '')
	  )
	}

	function markStatic$1 (node) {
	  node.static = isStatic(node);
	  if (node.type === 1) {
	    // do not make component slot content static. this avoids
	    // 1. components not able to mutate slot nodes
	    // 2. static slot content fails for hot-reloading
	    if (
	      !isPlatformReservedTag(node.tag) &&
	      node.tag !== 'slot' &&
	      node.attrsMap['inline-template'] == null
	    ) {
	      return
	    }
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      var child = node.children[i];
	      markStatic$1(child);
	      if (!child.static) {
	        node.static = false;
	      }
	    }
	    if (node.ifConditions) {
	      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
	        var block = node.ifConditions[i$1].block;
	        markStatic$1(block);
	        if (!block.static) {
	          node.static = false;
	        }
	      }
	    }
	  }
	}

	function markStaticRoots (node, isInFor) {
	  if (node.type === 1) {
	    if (node.static || node.once) {
	      node.staticInFor = isInFor;
	    }
	    // For a node to qualify as a static root, it should have children that
	    // are not just static text. Otherwise the cost of hoisting out will
	    // outweigh the benefits and it's better off to just always render it fresh.
	    if (node.static && node.children.length && !(
	      node.children.length === 1 &&
	      node.children[0].type === 3
	    )) {
	      node.staticRoot = true;
	      return
	    } else {
	      node.staticRoot = false;
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], isInFor || !!node.for);
	      }
	    }
	    if (node.ifConditions) {
	      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
	        markStaticRoots(node.ifConditions[i$1].block, isInFor);
	      }
	    }
	  }
	}

	function isStatic (node) {
	  if (node.type === 2) { // expression
	    return false
	  }
	  if (node.type === 3) { // text
	    return true
	  }
	  return !!(node.pre || (
	    !node.hasBindings && // no dynamic bindings
	    !node.if && !node.for && // not v-if or v-for or v-else
	    !isBuiltInTag(node.tag) && // not a built-in
	    isPlatformReservedTag(node.tag) && // not a component
	    !isDirectChildOfTemplateFor(node) &&
	    Object.keys(node).every(isStaticKey)
	  ))
	}

	function isDirectChildOfTemplateFor (node) {
	  while (node.parent) {
	    node = node.parent;
	    if (node.tag !== 'template') {
	      return false
	    }
	    if (node.for) {
	      return true
	    }
	  }
	  return false
	}

	/*  */

	var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
	var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40,
	  'delete': [8, 46]
	};

	// #4868: modifiers that prevent the execution of the listener
	// need to explicitly return null so that we can determine whether to remove
	// the listener for .once
	var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: genGuard("$event.target !== $event.currentTarget"),
	  ctrl: genGuard("!$event.ctrlKey"),
	  shift: genGuard("!$event.shiftKey"),
	  alt: genGuard("!$event.altKey"),
	  meta: genGuard("!$event.metaKey"),
	  left: genGuard("'button' in $event && $event.button !== 0"),
	  middle: genGuard("'button' in $event && $event.button !== 1"),
	  right: genGuard("'button' in $event && $event.button !== 2")
	};

	function genHandlers (
	  events,
	  isNative,
	  warn
	) {
	  var res = isNative ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    var handler = events[name];
	    // #5330: warn click.right, since right clicks do not actually fire click events.
	    if (process.env.NODE_ENV !== 'production' &&
	      name === 'click' &&
	      handler && handler.modifiers && handler.modifiers.right
	    ) {
	      warn(
	        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
	        "do not actually fire \"click\" events."
	      );
	    }
	    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}

	function genHandler (
	  name,
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  }

	  if (Array.isArray(handler)) {
	    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
	  }

	  var isMethodPath = simplePathRE.test(handler.value);
	  var isFunctionExpression = fnExpRE.test(handler.value);

	  if (!handler.modifiers) {
	    return isMethodPath || isFunctionExpression
	      ? handler.value
	      : ("function($event){" + (handler.value) + "}") // inline statement
	  } else {
	    var code = '';
	    var genModifierCode = '';
	    var keys = [];
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        genModifierCode += modifierCode[key];
	        // left/right
	        if (keyCodes[key]) {
	          keys.push(key);
	        }
	      } else if (key === 'exact') {
	        var modifiers = (handler.modifiers);
	        genModifierCode += genGuard(
	          ['ctrl', 'shift', 'alt', 'meta']
	            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
	            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
	            .join('||')
	        );
	      } else {
	        keys.push(key);
	      }
	    }
	    if (keys.length) {
	      code += genKeyFilter(keys);
	    }
	    // Make sure modifiers like prevent and stop get executed after key filtering
	    if (genModifierCode) {
	      code += genModifierCode;
	    }
	    var handlerCode = isMethodPath
	      ? handler.value + '($event)'
	      : isFunctionExpression
	        ? ("(" + (handler.value) + ")($event)")
	        : handler.value;
	    return ("function($event){" + code + handlerCode + "}")
	  }
	}

	function genKeyFilter (keys) {
	  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
	}

	function genFilterCode (key) {
	  var keyVal = parseInt(key, 10);
	  if (keyVal) {
	    return ("$event.keyCode!==" + keyVal)
	  }
	  var code = keyCodes[key];
	  return (
	    "_k($event.keyCode," +
	    (JSON.stringify(key)) + "," +
	    (JSON.stringify(code)) + "," +
	    "$event.key)"
	  )
	}

	/*  */

	function on (el, dir) {
	  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
	    warn("v-on without argument does not support modifiers.");
	  }
	  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
	}

	/*  */

	function bind$1 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
	  };
	}

	/*  */

	var baseDirectives = {
	  on: on,
	  bind: bind$1,
	  cloak: noop
	};

	/*  */

	var CodegenState = function CodegenState (options) {
	  this.options = options;
	  this.warn = options.warn || baseWarn;
	  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
	  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  this.directives = extend(extend({}, baseDirectives), options.directives);
	  var isReservedTag = options.isReservedTag || no;
	  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
	  this.onceId = 0;
	  this.staticRenderFns = [];
	};



	function generate (
	  ast,
	  options
	) {
	  var state = new CodegenState(options);
	  var code = ast ? genElement(ast, state) : '_c("div")';
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: state.staticRenderFns
	  }
	}

	function genElement (el, state) {
	  if (el.staticRoot && !el.staticProcessed) {
	    return genStatic(el, state)
	  } else if (el.once && !el.onceProcessed) {
	    return genOnce(el, state)
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el, state)
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el, state)
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el, state) || 'void 0'
	  } else if (el.tag === 'slot') {
	    return genSlot(el, state)
	  } else {
	    // component or element
	    var code;
	    if (el.component) {
	      code = genComponent(el.component, el, state);
	    } else {
	      var data = el.plain ? undefined : genData$2(el, state);

	      var children = el.inlineTemplate ? null : genChildren(el, state, true);
	      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
	    }
	    // module transforms
	    for (var i = 0; i < state.transforms.length; i++) {
	      code = state.transforms[i](el, code);
	    }
	    return code
	  }
	}

	// hoist static sub-trees out
	function genStatic (el, state) {
	  el.staticProcessed = true;
	  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
	  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	}

	// v-once
	function genOnce (el, state) {
	  el.onceProcessed = true;
	  if (el.if && !el.ifProcessed) {
	    return genIf(el, state)
	  } else if (el.staticInFor) {
	    var key = '';
	    var parent = el.parent;
	    while (parent) {
	      if (parent.for) {
	        key = parent.key;
	        break
	      }
	      parent = parent.parent;
	    }
	    if (!key) {
	      process.env.NODE_ENV !== 'production' && state.warn(
	        "v-once can only be used inside v-for that is keyed. "
	      );
	      return genElement(el, state)
	    }
	    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
	  } else {
	    return genStatic(el, state)
	  }
	}

	function genIf (
	  el,
	  state,
	  altGen,
	  altEmpty
	) {
	  el.ifProcessed = true; // avoid recursion
	  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
	}

	function genIfConditions (
	  conditions,
	  state,
	  altGen,
	  altEmpty
	) {
	  if (!conditions.length) {
	    return altEmpty || '_e()'
	  }

	  var condition = conditions.shift();
	  if (condition.exp) {
	    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
	  } else {
	    return ("" + (genTernaryExp(condition.block)))
	  }

	  // v-if with v-once should generate code like (a)?_m(0):_m(1)
	  function genTernaryExp (el) {
	    return altGen
	      ? altGen(el, state)
	      : el.once
	        ? genOnce(el, state)
	        : genElement(el, state)
	  }
	}

	function genFor (
	  el,
	  state,
	  altGen,
	  altHelper
	) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

	  if (process.env.NODE_ENV !== 'production' &&
	    state.maybeComponent(el) &&
	    el.tag !== 'slot' &&
	    el.tag !== 'template' &&
	    !el.key
	  ) {
	    state.warn(
	      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
	      "v-for should have explicit keys. " +
	      "See https://vuejs.org/guide/list.html#key for more info.",
	      true /* tip */
	    );
	  }

	  el.forProcessed = true; // avoid recursion
	  return (altHelper || '_l') + "((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + ((altGen || genElement)(el, state)) +
	    '})'
	}

	function genData$2 (el, state) {
	  var data = '{';

	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el, state);
	  if (dirs) { data += dirs + ','; }

	  // key
	  if (el.key) {
	    data += "key:" + (el.key) + ",";
	  }
	  // ref
	  if (el.ref) {
	    data += "ref:" + (el.ref) + ",";
	  }
	  if (el.refInFor) {
	    data += "refInFor:true,";
	  }
	  // pre
	  if (el.pre) {
	    data += "pre:true,";
	  }
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\",";
	  }
	  // module data generation functions
	  for (var i = 0; i < state.dataGenFns.length; i++) {
	    data += state.dataGenFns[i](el);
	  }
	  // attributes
	  if (el.attrs) {
	    data += "attrs:{" + (genProps(el.attrs)) + "},";
	  }
	  // DOM props
	  if (el.props) {
	    data += "domProps:{" + (genProps(el.props)) + "},";
	  }
	  // event handlers
	  if (el.events) {
	    data += (genHandlers(el.events, false, state.warn)) + ",";
	  }
	  if (el.nativeEvents) {
	    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
	  }
	  // slot target
	  // only for non-scoped slots
	  if (el.slotTarget && !el.slotScope) {
	    data += "slot:" + (el.slotTarget) + ",";
	  }
	  // scoped slots
	  if (el.scopedSlots) {
	    data += (genScopedSlots(el.scopedSlots, state)) + ",";
	  }
	  // component v-model
	  if (el.model) {
	    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var inlineTemplate = genInlineTemplate(el, state);
	    if (inlineTemplate) {
	      data += inlineTemplate + ",";
	    }
	  }
	  data = data.replace(/,$/, '') + '}';
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data);
	  }
	  // v-on data wrap
	  if (el.wrapListeners) {
	    data = el.wrapListeners(data);
	  }
	  return data
	}

	function genDirectives (el, state) {
	  var dirs = el.directives;
	  if (!dirs) { return }
	  var res = 'directives:[';
	  var hasRuntime = false;
	  var i, l, dir, needRuntime;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i];
	    needRuntime = true;
	    var gen = state.directives[dir.name];
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, state.warn);
	    }
	    if (needRuntime) {
	      hasRuntime = true;
	      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']'
	  }
	}

	function genInlineTemplate (el, state) {
	  var ast = el.children[0];
	  if (process.env.NODE_ENV !== 'production' && (
	    el.children.length !== 1 || ast.type !== 1
	  )) {
	    state.warn('Inline-template components must have exactly one child element.');
	  }
	  if (ast.type === 1) {
	    var inlineRenderFns = generate(ast, state.options);
	    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
	  }
	}

	function genScopedSlots (
	  slots,
	  state
	) {
	  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
	      return genScopedSlot(key, slots[key], state)
	    }).join(',')) + "])")
	}

	function genScopedSlot (
	  key,
	  el,
	  state
	) {
	  if (el.for && !el.forProcessed) {
	    return genForScopedSlot(key, el, state)
	  }
	  var fn = "function(" + (String(el.slotScope)) + "){" +
	    "return " + (el.tag === 'template'
	      ? el.if
	        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
	        : genChildren(el, state) || 'undefined'
	      : genElement(el, state)) + "}";
	  return ("{key:" + key + ",fn:" + fn + "}")
	}

	function genForScopedSlot (
	  key,
	  el,
	  state
	) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genScopedSlot(key, el, state)) +
	    '})'
	}

	function genChildren (
	  el,
	  state,
	  checkSkip,
	  altGenElement,
	  altGenNode
	) {
	  var children = el.children;
	  if (children.length) {
	    var el$1 = children[0];
	    // optimize single v-for
	    if (children.length === 1 &&
	      el$1.for &&
	      el$1.tag !== 'template' &&
	      el$1.tag !== 'slot'
	    ) {
	      return (altGenElement || genElement)(el$1, state)
	    }
	    var normalizationType = checkSkip
	      ? getNormalizationType(children, state.maybeComponent)
	      : 0;
	    var gen = altGenNode || genNode;
	    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
	  }
	}

	// determine the normalization needed for the children array.
	// 0: no normalization needed
	// 1: simple normalization needed (possible 1-level deep nested array)
	// 2: full normalization needed
	function getNormalizationType (
	  children,
	  maybeComponent
	) {
	  var res = 0;
	  for (var i = 0; i < children.length; i++) {
	    var el = children[i];
	    if (el.type !== 1) {
	      continue
	    }
	    if (needsNormalization(el) ||
	        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
	      res = 2;
	      break
	    }
	    if (maybeComponent(el) ||
	        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
	      res = 1;
	    }
	  }
	  return res
	}

	function needsNormalization (el) {
	  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
	}

	function genNode (node, state) {
	  if (node.type === 1) {
	    return genElement(node, state)
	  } if (node.type === 3 && node.isComment) {
	    return genComment(node)
	  } else {
	    return genText(node)
	  }
	}

	function genText (text) {
	  return ("_v(" + (text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
	}

	function genComment (comment) {
	  return ("_e(" + (JSON.stringify(comment.text)) + ")")
	}

	function genSlot (el, state) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el, state);
	  var res = "_t(" + slotName + (children ? ("," + children) : '');
	  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
	  var bind$$1 = el.attrsMap['v-bind'];
	  if ((attrs || bind$$1) && !children) {
	    res += ",null";
	  }
	  if (attrs) {
	    res += "," + attrs;
	  }
	  if (bind$$1) {
	    res += (attrs ? '' : ',null') + "," + bind$$1;
	  }
	  return res + ')'
	}

	// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent (
	  componentName,
	  el,
	  state
	) {
	  var children = el.inlineTemplate ? null : genChildren(el, state, true);
	  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
	}

	function genProps (props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
	  }
	  return res.slice(0, -1)
	}

	// #3895, #4268
	function transformSpecialNewlines (text) {
	  return text
	    .replace(/\u2028/g, '\\u2028')
	    .replace(/\u2029/g, '\\u2029')
	}

	/*  */

	// these keywords should not appear inside expressions, but operators like
	// typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + (
	  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
	  'super,throw,while,yield,delete,export,import,return,switch,default,' +
	  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b');

	// these unary operators should not be used as property/method names
	var unaryOperatorsRE = new RegExp('\\b' + (
	  'delete,typeof,void'
	).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

	// check valid identifier for v-for
	var identRE = /[A-Za-z_$][\w$]*/;

	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

	// detect problematic expressions in a template
	function detectErrors (ast) {
	  var errors = [];
	  if (ast) {
	    checkNode(ast, errors);
	  }
	  return errors
	}

	function checkNode (node, errors) {
	  if (node.type === 1) {
	    for (var name in node.attrsMap) {
	      if (dirRE.test(name)) {
	        var value = node.attrsMap[name];
	        if (value) {
	          if (name === 'v-for') {
	            checkFor(node, ("v-for=\"" + value + "\""), errors);
	          } else if (onRE.test(name)) {
	            checkEvent(value, (name + "=\"" + value + "\""), errors);
	          } else {
	            checkExpression(value, (name + "=\"" + value + "\""), errors);
	          }
	        }
	      }
	    }
	    if (node.children) {
	      for (var i = 0; i < node.children.length; i++) {
	        checkNode(node.children[i], errors);
	      }
	    }
	  } else if (node.type === 2) {
	    checkExpression(node.expression, node.text, errors);
	  }
	}

	function checkEvent (exp, text, errors) {
	  var stipped = exp.replace(stripStringRE, '');
	  var keywordMatch = stipped.match(unaryOperatorsRE);
	  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
	    errors.push(
	      "avoid using JavaScript unary operator as property name: " +
	      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
	    );
	  }
	  checkExpression(exp, text, errors);
	}

	function checkFor (node, text, errors) {
	  checkExpression(node.for || '', text, errors);
	  checkIdentifier(node.alias, 'v-for alias', text, errors);
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}

	function checkIdentifier (ident, type, text, errors) {
	  if (typeof ident === 'string' && !identRE.test(ident)) {
	    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
	  }
	}

	function checkExpression (exp, text, errors) {
	  try {
	    new Function(("return " + exp));
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      errors.push(
	        "avoid using JavaScript keyword as property name: " +
	        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
	      );
	    } else {
	      errors.push(
	        "invalid expression: " + (e.message) + " in\n\n" +
	        "    " + exp + "\n\n" +
	        "  Raw expression: " + (text.trim()) + "\n"
	      );
	    }
	  }
	}

	/*  */

	function createFunction (code, errors) {
	  try {
	    return new Function(code)
	  } catch (err) {
	    errors.push({ err: err, code: code });
	    return noop
	  }
	}

	function createCompileToFunctionFn (compile) {
	  var cache = Object.create(null);

	  return function compileToFunctions (
	    template,
	    options,
	    vm
	  ) {
	    options = extend({}, options);
	    var warn$$1 = options.warn || warn;
	    delete options.warn;

	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production') {
	      // detect possible CSP restriction
	      try {
	        new Function('return 1');
	      } catch (e) {
	        if (e.toString().match(/unsafe-eval|CSP/)) {
	          warn$$1(
	            'It seems you are using the standalone build of Vue.js in an ' +
	            'environment with Content Security Policy that prohibits unsafe-eval. ' +
	            'The template compiler cannot work in this environment. Consider ' +
	            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
	            'templates into render functions.'
	          );
	        }
	      }
	    }

	    // check cache
	    var key = options.delimiters
	      ? String(options.delimiters) + template
	      : template;
	    if (cache[key]) {
	      return cache[key]
	    }

	    // compile
	    var compiled = compile(template, options);

	    // check compilation errors/tips
	    if (process.env.NODE_ENV !== 'production') {
	      if (compiled.errors && compiled.errors.length) {
	        warn$$1(
	          "Error compiling template:\n\n" + template + "\n\n" +
	          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
	          vm
	        );
	      }
	      if (compiled.tips && compiled.tips.length) {
	        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
	      }
	    }

	    // turn code into functions
	    var res = {};
	    var fnGenErrors = [];
	    res.render = createFunction(compiled.render, fnGenErrors);
	    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
	      return createFunction(code, fnGenErrors)
	    });

	    // check function generation errors.
	    // this should only happen if there is a bug in the compiler itself.
	    // mostly for codegen development use
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production') {
	      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
	        warn$$1(
	          "Failed to generate render function:\n\n" +
	          fnGenErrors.map(function (ref) {
	            var err = ref.err;
	            var code = ref.code;

	            return ((err.toString()) + " in\n\n" + code + "\n");
	        }).join('\n'),
	          vm
	        );
	      }
	    }

	    return (cache[key] = res)
	  }
	}

	/*  */

	function createCompilerCreator (baseCompile) {
	  return function createCompiler (baseOptions) {
	    function compile (
	      template,
	      options
	    ) {
	      var finalOptions = Object.create(baseOptions);
	      var errors = [];
	      var tips = [];
	      finalOptions.warn = function (msg, tip) {
	        (tip ? tips : errors).push(msg);
	      };

	      if (options) {
	        // merge custom modules
	        if (options.modules) {
	          finalOptions.modules =
	            (baseOptions.modules || []).concat(options.modules);
	        }
	        // merge custom directives
	        if (options.directives) {
	          finalOptions.directives = extend(
	            Object.create(baseOptions.directives),
	            options.directives
	          );
	        }
	        // copy other options
	        for (var key in options) {
	          if (key !== 'modules' && key !== 'directives') {
	            finalOptions[key] = options[key];
	          }
	        }
	      }

	      var compiled = baseCompile(template, finalOptions);
	      if (process.env.NODE_ENV !== 'production') {
	        errors.push.apply(errors, detectErrors(compiled.ast));
	      }
	      compiled.errors = errors;
	      compiled.tips = tips;
	      return compiled
	    }

	    return {
	      compile: compile,
	      compileToFunctions: createCompileToFunctionFn(compile)
	    }
	  }
	}

	/*  */

	// `createCompilerCreator` allows creating compilers that use alternative
	// parser/optimizer/codegen, e.g the SSR optimizing compiler.
	// Here we just export a default compiler using the default parts.
	var createCompiler = createCompilerCreator(function baseCompile (
	  template,
	  options
	) {
	  var ast = parse(template.trim(), options);
	  optimize(ast, options);
	  var code = generate(ast, options);
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  }
	});

	/*  */

	var ref$1 = createCompiler(baseOptions);
	var compileToFunctions = ref$1.compileToFunctions;

	/*  */

	var idToTemplate = cached(function (id) {
	  var el = query(id);
	  return el && el.innerHTML
	});

	var mount = Vue$3.prototype.$mount;
	Vue$3.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && query(el);

	  /* istanbul ignore if */
	  if (el === document.body || el === document.documentElement) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
	    );
	    return this
	  }

	  var options = this.$options;
	  // resolve template/el and convert to render function
	  if (!options.render) {
	    var template = options.template;
	    if (template) {
	      if (typeof template === 'string') {
	        if (template.charAt(0) === '#') {
	          template = idToTemplate(template);
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !template) {
	            warn(
	              ("Template element not found or is empty: " + (options.template)),
	              this
	            );
	          }
	        }
	      } else if (template.nodeType) {
	        template = template.innerHTML;
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          warn('invalid template option:' + template, this);
	        }
	        return this
	      }
	    } else if (el) {
	      template = getOuterHTML(el);
	    }
	    if (template) {
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
	        mark('compile');
	      }

	      var ref = compileToFunctions(template, {
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        delimiters: options.delimiters,
	        comments: options.comments
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render;
	      options.staticRenderFns = staticRenderFns;

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
	        mark('compile end');
	        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
	      }
	    }
	  }
	  return mount.call(this, el, hydrating)
	};

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML (el) {
	  if (el.outerHTML) {
	    return el.outerHTML
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML
	  }
	}

	Vue$3.compile = compileToFunctions;

	module.exports = Vue$3;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), (function() { return this; }()), __webpack_require__(3).setImmediate))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(4);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * vue-resource v1.3.4
	 * https://github.com/pagekit/vue-resource
	 * Released under the MIT License.
	 */

	'use strict';

	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */

	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING  = 2;

	function Promise$1(executor) {

	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];

	    var promise = this;

	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}

	Promise$1.reject = function (r) {
	    return new Promise$1(function (resolve, reject) {
	        reject(r);
	    });
	};

	Promise$1.resolve = function (x) {
	    return new Promise$1(function (resolve, reject) {
	        resolve(x);
	    });
	};

	Promise$1.all = function all(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        var count = 0, result = [];

	        if (iterable.length === 0) {
	            resolve(result);
	        }

	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;

	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }

	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};

	Promise$1.race = function race(iterable) {
	    return new Promise$1(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$1.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};

	var p$1 = Promise$1.prototype;

	p$1.resolve = function resolve(x) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        var called = false;

	        try {
	            var then = x && x['then'];

	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;

	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }

	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};

	p$1.reject = function reject(reason) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};

	p$1.notify = function notify() {
	    var promise = this;

	    nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];

	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};

	p$1.then = function then(onResolved, onRejected) {
	    var promise = this;

	    return new Promise$1(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};

	p$1.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};

	/**
	 * Promise adapter.
	 */

	if (typeof Promise === 'undefined') {
	    window.Promise = Promise$1;
	}

	function PromiseObj(executor, context) {

	    if (executor instanceof Promise) {
	        this.promise = executor;
	    } else {
	        this.promise = new Promise(executor.bind(context));
	    }

	    this.context = context;
	}

	PromiseObj.all = function (iterable, context) {
	    return new PromiseObj(Promise.all(iterable), context);
	};

	PromiseObj.resolve = function (value, context) {
	    return new PromiseObj(Promise.resolve(value), context);
	};

	PromiseObj.reject = function (reason, context) {
	    return new PromiseObj(Promise.reject(reason), context);
	};

	PromiseObj.race = function (iterable, context) {
	    return new PromiseObj(Promise.race(iterable), context);
	};

	var p = PromiseObj.prototype;

	p.bind = function (context) {
	    this.context = context;
	    return this;
	};

	p.then = function (fulfilled, rejected) {

	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
	};

	p.catch = function (rejected) {

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    return new PromiseObj(this.promise.catch(rejected), this.context);
	};

	p.finally = function (callback) {

	    return this.then(function (value) {
	            callback.call(this);
	            return value;
	        }, function (reason) {
	            callback.call(this);
	            return Promise.reject(reason);
	        }
	    );
	};

	/**
	 * Utility functions.
	 */

	var ref = {};
	var hasOwnProperty = ref.hasOwnProperty;

	var ref$1 = [];
	var slice = ref$1.slice;
	var debug = false;
	var ntick;

	var inBrowser = typeof window !== 'undefined';

	var Util = function (ref) {
	    var config = ref.config;
	    var nextTick = ref.nextTick;

	    ntick = nextTick;
	    debug = config.debug || !config.silent;
	};

	function warn(msg) {
	    if (typeof console !== 'undefined' && debug) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	}

	function error(msg) {
	    if (typeof console !== 'undefined') {
	        console.error(msg);
	    }
	}

	function nextTick(cb, ctx) {
	    return ntick(cb, ctx);
	}

	function trim(str) {
	    return str ? str.replace(/^\s*|\s*$/g, '') : '';
	}

	function trimEnd(str, chars) {

	    if (str && chars === undefined) {
	        return str.replace(/\s+$/, '');
	    }

	    if (!str || !chars) {
	        return str;
	    }

	    return str.replace(new RegExp(("[" + chars + "]+$")), '');
	}

	function toLower(str) {
	    return str ? str.toLowerCase() : '';
	}

	function toUpper(str) {
	    return str ? str.toUpperCase() : '';
	}

	var isArray = Array.isArray;

	function isString(val) {
	    return typeof val === 'string';
	}



	function isFunction(val) {
	    return typeof val === 'function';
	}

	function isObject(obj) {
	    return obj !== null && typeof obj === 'object';
	}

	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	}

	function isBlob(obj) {
	    return typeof Blob !== 'undefined' && obj instanceof Blob;
	}

	function isFormData(obj) {
	    return typeof FormData !== 'undefined' && obj instanceof FormData;
	}

	function when(value, fulfilled, rejected) {

	    var promise = PromiseObj.resolve(value);

	    if (arguments.length < 2) {
	        return promise;
	    }

	    return promise.then(fulfilled, rejected);
	}

	function options(fn, obj, opts) {

	    opts = opts || {};

	    if (isFunction(opts)) {
	        opts = opts.call(obj);
	    }

	    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
	}

	function each(obj, iterator) {

	    var i, key;

	    if (isArray(obj)) {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (hasOwnProperty.call(obj, key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }

	    return obj;
	}

	var assign = Object.assign || _assign;

	function merge(target) {

	    var args = slice.call(arguments, 1);

	    args.forEach(function (source) {
	        _merge(target, source, true);
	    });

	    return target;
	}

	function defaults(target) {

	    var args = slice.call(arguments, 1);

	    args.forEach(function (source) {

	        for (var key in source) {
	            if (target[key] === undefined) {
	                target[key] = source[key];
	            }
	        }

	    });

	    return target;
	}

	function _assign(target) {

	    var args = slice.call(arguments, 1);

	    args.forEach(function (source) {
	        _merge(target, source);
	    });

	    return target;
	}

	function _merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (isArray(source[key]) && !isArray(target[key])) {
	                target[key] = [];
	            }
	            _merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}

	/**
	 * Root Prefix Transform.
	 */

	var root = function (options$$1, next) {

	    var url = next(options$$1);

	    if (isString(options$$1.root) && !/^(https?:)?\//.test(url)) {
	        url = trimEnd(options$$1.root, '/') + '/' + url;
	    }

	    return url;
	};

	/**
	 * Query Parameter Transform.
	 */

	var query = function (options$$1, next) {

	    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

	    each(options$$1.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });

	    query = Url.params(query);

	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }

	    return url;
	};

	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */

	function expand(url, params, variables) {

	    var tmpl = parse(url), expanded = tmpl.expand(params);

	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }

	    return expanded;
	}

	function parse(template) {

	    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

	    return {
	        vars: variables,
	        expand: function expand(context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {

	                    var operator = null, values = [];

	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }

	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });

	                    if (operator && operator !== '+') {

	                        var separator = ',';

	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }

	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }

	                } else {
	                    return encodeReserved(literal);
	                }
	            });
	        }
	    };
	}

	function getValues(context, operator, key, modifier) {

	    var value = context[key], result = [];

	    if (isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();

	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }

	            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            result.push(encodeValue(operator, value[k], k));
	                        }
	                    });
	                }
	            } else {
	                var tmp = [];

	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        tmp.push(encodeValue(operator, value));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(encodeValue(operator, value[k].toString()));
	                        }
	                    });
	                }

	                if (isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }

	    return result;
	}

	function isDefined(value) {
	    return value !== undefined && value !== null;
	}

	function isKeyOperator(operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	}

	function encodeValue(operator, value, key) {

	    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	}

	function encodeReserved(str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	}

	/**
	 * URL Template (RFC 6570) Transform.
	 */

	var template = function (options) {

	    var variables = [], url = expand(options.url, options.params, variables);

	    variables.forEach(function (key) {
	        delete options.params[key];
	    });

	    return url;
	};

	/**
	 * Service for URL templating.
	 */

	function Url(url, params) {

	    var self = this || {}, options$$1 = url, transform;

	    if (isString(url)) {
	        options$$1 = {url: url, params: params};
	    }

	    options$$1 = merge({}, Url.options, self.$options, options$$1);

	    Url.transforms.forEach(function (handler) {

	        if (isString(handler)) {
	            handler = Url.transform[handler];
	        }

	        if (isFunction(handler)) {
	            transform = factory(handler, transform, self.$vm);
	        }

	    });

	    return transform(options$$1);
	}

	/**
	 * Url options.
	 */

	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};

	/**
	 * Url transforms.
	 */

	Url.transform = {template: template, query: query, root: root};
	Url.transforms = ['template', 'query', 'root'];

	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */

	Url.params = function (obj) {

	    var params = [], escape = encodeURIComponent;

	    params.add = function (key, value) {

	        if (isFunction(value)) {
	            value = value();
	        }

	        if (value === null) {
	            value = '';
	        }

	        this.push(escape(key) + '=' + escape(value));
	    };

	    serialize(params, obj);

	    return params.join('&').replace(/%20/g, '+');
	};

	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */

	Url.parse = function (url) {

	    var el = document.createElement('a');

	    if (document.documentMode) {
	        el.href = url;
	        url = el.href;
	    }

	    el.href = url;

	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};

	function factory(handler, next, vm) {
	    return function (options$$1) {
	        return handler.call(vm, options$$1, next);
	    };
	}

	function serialize(params, obj, scope) {

	    var array = isArray(obj), plain = isPlainObject(obj), hash;

	    each(obj, function (value, key) {

	        hash = isObject(value) || isArray(value);

	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }

	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}

	/**
	 * XDomain client (Internet Explorer).
	 */

	var xdrClient = function (request) {
	    return new PromiseObj(function (resolve) {

	        var xdr = new XDomainRequest(), handler = function (ref) {
	            var type = ref.type;


	            var status = 0;

	            if (type === 'load') {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }

	            resolve(request.respondWith(xdr.responseText, {status: status}));
	        };

	        request.abort = function () { return xdr.abort(); };

	        xdr.open(request.method, request.getUrl());

	        if (request.timeout) {
	            xdr.timeout = request.timeout;
	        }

	        xdr.onload = handler;
	        xdr.onabort = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = handler;
	        xdr.onprogress = function () {};
	        xdr.send(request.getBody());
	    });
	};

	/**
	 * CORS Interceptor.
	 */

	var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

	var cors = function (request, next) {

	    if (inBrowser) {

	        var orgUrl = Url.parse(location.href);
	        var reqUrl = Url.parse(request.getUrl());

	        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

	            request.crossOrigin = true;
	            request.emulateHTTP = false;

	            if (!SUPPORTS_CORS) {
	                request.client = xdrClient;
	            }
	        }
	    }

	    next();
	};

	/**
	 * Form data Interceptor.
	 */

	var form = function (request, next) {

	    if (isFormData(request.body)) {

	        request.headers.delete('Content-Type');

	    } else if (isObject(request.body) && request.emulateJSON) {

	        request.body = Url.params(request.body);
	        request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
	    }

	    next();
	};

	/**
	 * JSON Interceptor.
	 */

	var json = function (request, next) {

	    var type = request.headers.get('Content-Type') || '';

	    if (isObject(request.body) && type.indexOf('application/json') === 0) {
	        request.body = JSON.stringify(request.body);
	    }

	    next(function (response) {

	        return response.bodyText ? when(response.text(), function (text) {

	            type = response.headers.get('Content-Type') || '';

	            if (type.indexOf('application/json') === 0 || isJson(text)) {

	                try {
	                    response.body = JSON.parse(text);
	                } catch (e) {
	                    response.body = null;
	                }

	            } else {
	                response.body = text;
	            }

	            return response;

	        }) : response;

	    });
	};

	function isJson(str) {

	    var start = str.match(/^\[|^\{(?!\{)/), end = {'[': /]$/, '{': /}$/};

	    return start && end[start[0]].test(str);
	}

	/**
	 * JSONP client (Browser).
	 */

	var jsonpClient = function (request) {
	    return new PromiseObj(function (resolve) {

	        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

	        handler = function (ref) {
	            var type = ref.type;


	            var status = 0;

	            if (type === 'load' && body !== null) {
	                status = 200;
	            } else if (type === 'error') {
	                status = 500;
	            }

	            if (status && window[callback]) {
	                delete window[callback];
	                document.body.removeChild(script);
	            }

	            resolve(request.respondWith(body, {status: status}));
	        };

	        window[callback] = function (result) {
	            body = JSON.stringify(result);
	        };

	        request.abort = function () {
	            handler({type: 'abort'});
	        };

	        request.params[name] = callback;

	        if (request.timeout) {
	            setTimeout(request.abort, request.timeout);
	        }

	        script = document.createElement('script');
	        script.src = request.getUrl();
	        script.type = 'text/javascript';
	        script.async = true;
	        script.onload = handler;
	        script.onerror = handler;

	        document.body.appendChild(script);
	    });
	};

	/**
	 * JSONP Interceptor.
	 */

	var jsonp = function (request, next) {

	    if (request.method == 'JSONP') {
	        request.client = jsonpClient;
	    }

	    next();
	};

	/**
	 * Before Interceptor.
	 */

	var before = function (request, next) {

	    if (isFunction(request.before)) {
	        request.before.call(this, request);
	    }

	    next();
	};

	/**
	 * HTTP method override Interceptor.
	 */

	var method = function (request, next) {

	    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	        request.headers.set('X-HTTP-Method-Override', request.method);
	        request.method = 'POST';
	    }

	    next();
	};

	/**
	 * Header Interceptor.
	 */

	var header = function (request, next) {

	    var headers = assign({}, Http.headers.common,
	        !request.crossOrigin ? Http.headers.custom : {},
	        Http.headers[toLower(request.method)]
	    );

	    each(headers, function (value, name) {
	        if (!request.headers.has(name)) {
	            request.headers.set(name, value);
	        }
	    });

	    next();
	};

	/**
	 * XMLHttp client (Browser).
	 */

	var xhrClient = function (request) {
	    return new PromiseObj(function (resolve) {

	        var xhr = new XMLHttpRequest(), handler = function (event) {

	            var response = request.respondWith(
	                'response' in xhr ? xhr.response : xhr.responseText, {
	                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
	                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
	                }
	            );

	            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
	                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
	            });

	            resolve(response);
	        };

	        request.abort = function () { return xhr.abort(); };

	        if (request.progress) {
	            if (request.method === 'GET') {
	                xhr.addEventListener('progress', request.progress);
	            } else if (/^(POST|PUT)$/i.test(request.method)) {
	                xhr.upload.addEventListener('progress', request.progress);
	            }
	        }

	        xhr.open(request.method, request.getUrl(), true);

	        if (request.timeout) {
	            xhr.timeout = request.timeout;
	        }

	        if (request.responseType && 'responseType' in xhr) {
	            xhr.responseType = request.responseType;
	        }

	        if (request.withCredentials || request.credentials) {
	            xhr.withCredentials = true;
	        }

	        if (!request.crossOrigin) {
	            request.headers.set('X-Requested-With', 'XMLHttpRequest');
	        }

	        request.headers.forEach(function (value, name) {
	            xhr.setRequestHeader(name, value);
	        });

	        xhr.onload = handler;
	        xhr.onabort = handler;
	        xhr.onerror = handler;
	        xhr.ontimeout = handler;
	        xhr.send(request.getBody());
	    });
	};

	/**
	 * Http client (Node).
	 */

	var nodeClient = function (request) {

	    var client = __webpack_require__(6);

	    return new PromiseObj(function (resolve) {

	        var url = request.getUrl();
	        var body = request.getBody();
	        var method = request.method;
	        var headers = {}, handler;

	        request.headers.forEach(function (value, name) {
	            headers[name] = value;
	        });

	        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

	            var response = request.respondWith(resp.body, {
	                    status: resp.statusCode,
	                    statusText: trim(resp.statusMessage)
	                }
	            );

	            each(resp.headers, function (value, name) {
	                response.headers.set(name, value);
	            });

	            resolve(response);

	        }, function (error$$1) { return handler(error$$1.response); });
	    });
	};

	/**
	 * Base client.
	 */

	var Client = function (context) {

	    var reqHandlers = [sendRequest], resHandlers = [], handler;

	    if (!isObject(context)) {
	        context = null;
	    }

	    function Client(request) {
	        return new PromiseObj(function (resolve, reject) {

	            function exec() {

	                handler = reqHandlers.pop();

	                if (isFunction(handler)) {
	                    handler.call(context, request, next);
	                } else {
	                    warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
	                    next();
	                }
	            }

	            function next(response) {

	                if (isFunction(response)) {

	                    resHandlers.unshift(response);

	                } else if (isObject(response)) {

	                    resHandlers.forEach(function (handler) {
	                        response = when(response, function (response) {
	                            return handler.call(context, response) || response;
	                        }, reject);
	                    });

	                    when(response, resolve, reject);

	                    return;
	                }

	                exec();
	            }

	            exec();

	        }, context);
	    }

	    Client.use = function (handler) {
	        reqHandlers.push(handler);
	    };

	    return Client;
	};

	function sendRequest(request, resolve) {

	    var client = request.client || (inBrowser ? xhrClient : nodeClient);

	    resolve(client(request));
	}

	/**
	 * HTTP Headers.
	 */

	var Headers = function Headers(headers) {
	    var this$1 = this;


	    this.map = {};

	    each(headers, function (value, name) { return this$1.append(name, value); });
	};

	Headers.prototype.has = function has (name) {
	    return getName(this.map, name) !== null;
	};

	Headers.prototype.get = function get (name) {

	    var list = this.map[getName(this.map, name)];

	    return list ? list.join() : null;
	};

	Headers.prototype.getAll = function getAll (name) {
	    return this.map[getName(this.map, name)] || [];
	};

	Headers.prototype.set = function set (name, value) {
	    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
	};

	Headers.prototype.append = function append (name, value){

	    var list = this.map[getName(this.map, name)];

	    if (list) {
	        list.push(trim(value));
	    } else {
	        this.set(name, value);
	    }
	};

	Headers.prototype.delete = function delete$1 (name){
	    delete this.map[getName(this.map, name)];
	};

	Headers.prototype.deleteAll = function deleteAll (){
	    this.map = {};
	};

	Headers.prototype.forEach = function forEach (callback, thisArg) {
	        var this$1 = this;

	    each(this.map, function (list, name) {
	        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
	    });
	};

	function getName(map, name) {
	    return Object.keys(map).reduce(function (prev, curr) {
	        return toLower(name) === toLower(curr) ? curr : prev;
	    }, null);
	}

	function normalizeName(name) {

	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	        throw new TypeError('Invalid character in header field name');
	    }

	    return trim(name);
	}

	/**
	 * HTTP Response.
	 */

	var Response = function Response(body, ref) {
	    var url = ref.url;
	    var headers = ref.headers;
	    var status = ref.status;
	    var statusText = ref.statusText;


	    this.url = url;
	    this.ok = status >= 200 && status < 300;
	    this.status = status || 0;
	    this.statusText = statusText || '';
	    this.headers = new Headers(headers);
	    this.body = body;

	    if (isString(body)) {

	        this.bodyText = body;

	    } else if (isBlob(body)) {

	        this.bodyBlob = body;

	        if (isBlobText(body)) {
	            this.bodyText = blobText(body);
	        }
	    }
	};

	Response.prototype.blob = function blob () {
	    return when(this.bodyBlob);
	};

	Response.prototype.text = function text () {
	    return when(this.bodyText);
	};

	Response.prototype.json = function json () {
	    return when(this.text(), function (text) { return JSON.parse(text); });
	};

	Object.defineProperty(Response.prototype, 'data', {

	    get: function get() {
	        return this.body;
	    },

	    set: function set(body) {
	        this.body = body;
	    }

	});

	function blobText(body) {
	    return new PromiseObj(function (resolve) {

	        var reader = new FileReader();

	        reader.readAsText(body);
	        reader.onload = function () {
	            resolve(reader.result);
	        };

	    });
	}

	function isBlobText(body) {
	    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
	}

	/**
	 * HTTP Request.
	 */

	var Request = function Request(options$$1) {

	    this.body = null;
	    this.params = {};

	    assign(this, options$$1, {
	        method: toUpper(options$$1.method || 'GET')
	    });

	    if (!(this.headers instanceof Headers)) {
	        this.headers = new Headers(this.headers);
	    }
	};

	Request.prototype.getUrl = function getUrl (){
	    return Url(this);
	};

	Request.prototype.getBody = function getBody (){
	    return this.body;
	};

	Request.prototype.respondWith = function respondWith (body, options$$1) {
	    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
	};

	/**
	 * Service for sending network requests.
	 */

	var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
	var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

	function Http(options$$1) {

	    var self = this || {}, client = Client(self.$vm);

	    defaults(options$$1 || {}, self.$options, Http.options);

	    Http.interceptors.forEach(function (handler) {

	        if (isString(handler)) {
	            handler = Http.interceptor[handler];
	        }

	        if (isFunction(handler)) {
	            client.use(handler);
	        }

	    });

	    return client(new Request(options$$1)).then(function (response) {

	        return response.ok ? response : PromiseObj.reject(response);

	    }, function (response) {

	        if (response instanceof Error) {
	            error(response);
	        }

	        return PromiseObj.reject(response);
	    });
	}

	Http.options = {};

	Http.headers = {
	    put: JSON_CONTENT_TYPE,
	    post: JSON_CONTENT_TYPE,
	    patch: JSON_CONTENT_TYPE,
	    delete: JSON_CONTENT_TYPE,
	    common: COMMON_HEADERS,
	    custom: {}
	};

	Http.interceptor = {before: before, method: method, jsonp: jsonp, json: json, form: form, header: header, cors: cors};
	Http.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors'];

	['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

	    Http[method$$1] = function (url, options$$1) {
	        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
	    };

	});

	['post', 'put', 'patch'].forEach(function (method$$1) {

	    Http[method$$1] = function (url, body, options$$1) {
	        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body}));
	    };

	});

	/**
	 * Service for interacting with RESTful services.
	 */

	function Resource(url, params, actions, options$$1) {

	    var self = this || {}, resource = {};

	    actions = assign({},
	        Resource.actions,
	        actions
	    );

	    each(actions, function (action, name) {

	        action = merge({url: url, params: assign({}, params)}, options$$1, action);

	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });

	    return resource;
	}

	function opts(action, args) {

	    var options$$1 = assign({}, action), params = {}, body;

	    switch (args.length) {

	        case 2:

	            params = args[0];
	            body = args[1];

	            break;

	        case 1:

	            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
	                body = args[0];
	            } else {
	                params = args[0];
	            }

	            break;

	        case 0:

	            break;

	        default:

	            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
	    }

	    options$$1.body = body;
	    options$$1.params = assign({}, options$$1.params, params);

	    return options$$1;
	}

	Resource.actions = {

	    get: {method: 'GET'},
	    save: {method: 'POST'},
	    query: {method: 'GET'},
	    update: {method: 'PUT'},
	    remove: {method: 'DELETE'},
	    delete: {method: 'DELETE'}

	};

	/**
	 * Install plugin.
	 */

	function plugin(Vue) {

	    if (plugin.installed) {
	        return;
	    }

	    Util(Vue);

	    Vue.url = Url;
	    Vue.http = Http;
	    Vue.resource = Resource;
	    Vue.Promise = PromiseObj;

	    Object.defineProperties(Vue.prototype, {

	        $url: {
	            get: function get() {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },

	        $http: {
	            get: function get() {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },

	        $resource: {
	            get: function get() {
	                return Vue.resource.bind(this);
	            }
	        },

	        $promise: {
	            get: function get() {
	                var this$1 = this;

	                return function (executor) { return new Vue.Promise(executor, this$1); };
	            }
	        }

	    });
	}

	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}

	module.exports = plugin;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.8.1
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';

	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (process.env.NODE_ENV !== 'production' && !condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
	  }
	}

	function isError (err) {
	  return Object.prototype.toString.call(err).indexOf('Error') > -1
	}

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (_, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true;

	    // directly use parent context's createElement() function
	    // so that components rendered by router-view can resolve named slots
	    var h = parent.$createElement;
	    var name = props.name;
	    var route = parent.$route;
	    var cache = parent._routerViewCache || (parent._routerViewCache = {});

	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0;
	    var inactive = false;
	    while (parent && parent._routerRoot !== parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++;
	      }
	      if (parent._inactive) {
	        inactive = true;
	      }
	      parent = parent.$parent;
	    }
	    data.routerViewDepth = depth;

	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      return h(cache[name], data, children)
	    }

	    var matched = route.matched[depth];
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null;
	      return h()
	    }

	    var component = cache[name] = matched.components[name];

	    // attach instance registration hook
	    // this will be called in the instance's injected lifecycle hooks
	    data.registerRouteInstance = function (vm, val) {
	      // val could be undefined for unregistration
	      var current = matched.instances[name];
	      if (
	        (val && current !== vm) ||
	        (!val && current === vm)
	      ) {
	        matched.instances[name] = val;
	      }
	    }

	    // also register instance in prepatch hook
	    // in case the same component instance is reused across different routes
	    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
	      matched.instances[name] = vnode.componentInstance;
	    };

	    // resolve props
	    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
	    if (propsToPass) {
	      // clone to prevent mutation
	      propsToPass = data.props = extend({}, propsToPass);
	      // pass non-declared props as attrs
	      var attrs = data.attrs = data.attrs || {};
	      for (var key in propsToPass) {
	        if (!component.props || !(key in component.props)) {
	          attrs[key] = propsToPass[key];
	          delete propsToPass[key];
	        }
	      }
	    }

	    return h(component, data, children)
	  }
	};

	function resolveProps (route, config) {
	  switch (typeof config) {
	    case 'undefined':
	      return
	    case 'object':
	      return config
	    case 'function':
	      return config(route)
	    case 'boolean':
	      return config ? route.params : undefined
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        warn(
	          false,
	          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
	          "expecting an object, function or boolean."
	        );
	      }
	  }
	}

	function extend (to, from) {
	  for (var key in from) {
	    to[key] = from[key];
	  }
	  return to
	}

	/*  */

	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
	var commaRE = /%2C/g;

	// fixed encodeURIComponent which is more conformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function (str) { return encodeURIComponent(str)
	  .replace(encodeReserveRE, encodeReserveReplacer)
	  .replace(commaRE, ','); };

	var decode = decodeURIComponent;

	function resolveQuery (
	  query,
	  extraQuery,
	  _parseQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  var parse = _parseQuery || parseQuery;
	  var parsedQuery;
	  try {
	    parsedQuery = parse(query || '');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn(false, e.message);
	    parsedQuery = {};
	  }
	  for (var key in extraQuery) {
	    parsedQuery[key] = extraQuery[key];
	  }
	  return parsedQuery
	}

	function parseQuery (query) {
	  var res = {};

	  query = query.trim().replace(/^(\?|#|&)/, '');

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null;

	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = [];
	      val.forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null;
	  return res ? ("?" + res) : ''
	}

	/*  */


	var trailingSlashRE = /\/?$/;

	function createRoute (
	  record,
	  location,
	  redirectedFrom,
	  router
	) {
	  var stringifyQuery$$1 = router && router.options.stringifyQuery;

	  var query = location.query || {};
	  try {
	    query = clone(query);
	  } catch (e) {}

	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: query,
	    params: location.params || {},
	    fullPath: getFullPath(location, stringifyQuery$$1),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
	  }
	  return Object.freeze(route)
	}

	function clone (value) {
	  if (Array.isArray(value)) {
	    return value.map(clone)
	  } else if (value && typeof value === 'object') {
	    var res = {};
	    for (var key in value) {
	      res[key] = clone(value[key]);
	    }
	    return res
	  } else {
	    return value
	  }
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});

	function formatMatch (record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res
	}

	function getFullPath (
	  ref,
	  _stringifyQuery
	) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  var stringify = _stringifyQuery || stringifyQuery;
	  return (path || '/') + stringify(query) + hash
	}

	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  // handle null value #1566
	  if (!a || !b) { return a === b }
	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) {
	    var aVal = a[key];
	    var bVal = b[key];
	    // check nested equality
	    if (typeof aVal === 'object' && typeof bVal === 'object') {
	      return isObjectEqual(aVal, bVal)
	    }
	    return String(aVal) === String(bVal)
	  })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.replace(trailingSlashRE, '/').indexOf(
	      target.path.replace(trailingSlashRE, '/')
	    ) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object];
	var eventTypes = [String, Array];

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    exactActiveClass: String,
	    event: {
	      type: eventTypes,
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;

	    var router = this.$router;
	    var current = this.$route;
	    var ref = router.resolve(this.to, current, this.append);
	    var location = ref.location;
	    var route = ref.route;
	    var href = ref.href;

	    var classes = {};
	    var globalActiveClass = router.options.linkActiveClass;
	    var globalExactActiveClass = router.options.linkExactActiveClass;
	    // Support global empty active class
	    var activeClassFallback = globalActiveClass == null
	            ? 'router-link-active'
	            : globalActiveClass;
	    var exactActiveClassFallback = globalExactActiveClass == null
	            ? 'router-link-exact-active'
	            : globalExactActiveClass;
	    var activeClass = this.activeClass == null
	            ? activeClassFallback
	            : this.activeClass;
	    var exactActiveClass = this.exactActiveClass == null
	            ? exactActiveClassFallback
	            : this.exactActiveClass;
	    var compareTarget = location.path
	      ? createRoute(null, location, null, router)
	      : route;

	    classes[exactActiveClass] = isSameRoute(current, compareTarget);
	    classes[activeClass] = this.exact
	      ? classes[exactActiveClass]
	      : isIncludedRoute(current, compareTarget);

	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(location);
	        } else {
	          router.push(location);
	        }
	      }
	    };

	    var on = { click: guardEvent };
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler; });
	    } else {
	      on[this.event] = handler;
	    }

	    var data = {
	      class: classes
	    };

	    if (this.tag === 'a') {
	      data.on = on;
	      data.attrs = { href: href };
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default);
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false;
	        var extend = _Vue.util.extend;
	        var aData = a.data = extend({}, a.data);
	        aData.on = on;
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	        aAttrs.href = href;
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on;
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	};

	function guardEvent (e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  if (e.currentTarget && e.currentTarget.getAttribute) {
	    var target = e.currentTarget.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) { return }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true
	}

	function findAnchor (children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	var _Vue;

	function install (Vue) {
	  if (install.installed && _Vue === Vue) { return }
	  install.installed = true;

	  _Vue = Vue;

	  var isDef = function (v) { return v !== undefined; };

	  var registerInstance = function (vm, callVal) {
	    var i = vm.$options._parentVnode;
	    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
	      i(vm, callVal);
	    }
	  };

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (isDef(this.$options.router)) {
	        this._routerRoot = this;
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      } else {
	        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
	      }
	      registerInstance(this, this);
	    },
	    destroyed: function destroyed () {
	      registerInstance(this);
	    }
	  });

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this._routerRoot._router }
	  });

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get () { return this._routerRoot._route }
	  });

	  Vue.component('router-view', View);
	  Vue.component('router-link', Link);

	  var strats = Vue.config.optionMergeStrategies;
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
	}

	/*  */

	var inBrowser = typeof window !== 'undefined';

	/*  */

	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  var firstChar = relative.charAt(0);
	  if (firstChar === '/') {
	    return relative
	  }

	  if (firstChar === '?' || firstChar === '#') {
	    return base + relative
	  }

	  var stack = base.split('/');

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '..') {
	      stack.pop();
	    } else if (segment !== '.') {
	      stack.push(segment);
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }

	  return stack.join('/')
	}

	function parsePath (path) {
	  var hash = '';
	  var query = '';

	  var hashIndex = path.indexOf('#');
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex);
	    path = path.slice(0, hashIndex);
	  }

	  var queryIndex = path.indexOf('?');
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1);
	    path = path.slice(0, queryIndex);
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}

	var isarray = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	/**
	 * Expose `pathToRegexp`.
	 */
	var pathToRegexp_1 = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}

	pathToRegexp_1.parse = parse_1;
	pathToRegexp_1.compile = compile_1;
	pathToRegexp_1.tokensToFunction = tokensToFunction_1;
	pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

	/*  */

	// $flow-disable-line
	var regexpCompileCache = Object.create(null);

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
	    }
	    return ''
	  }
	}

	/*  */

	function createRouteMap (
	  routes,
	  oldPathList,
	  oldPathMap,
	  oldNameMap
	) {
	  // the path list is used to control path matching priority
	  var pathList = oldPathList || [];
	  // $flow-disable-line
	  var pathMap = oldPathMap || Object.create(null);
	  // $flow-disable-line
	  var nameMap = oldNameMap || Object.create(null);

	  routes.forEach(function (route) {
	    addRouteRecord(pathList, pathMap, nameMap, route);
	  });

	  // ensure wildcard routes are always at the end
	  for (var i = 0, l = pathList.length; i < l; i++) {
	    if (pathList[i] === '*') {
	      pathList.push(pathList.splice(i, 1)[0]);
	      l--;
	      i--;
	    }
	  }

	  return {
	    pathList: pathList,
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathList,
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    );
	  }

	  var pathToRegexpOptions = route.pathToRegexpOptions || {};
	  var normalizedPath = normalizePath(
	    path,
	    parent,
	    pathToRegexpOptions.strict
	  );

	  if (typeof route.caseSensitive === 'boolean') {
	    pathToRegexpOptions.sensitive = route.caseSensitive;
	  }

	  var record = {
	    path: normalizedPath,
	    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {},
	    props: route.props == null
	      ? {}
	      : route.components
	        ? route.props
	        : { default: route.props }
	  };

	  if (route.children) {
	    // Warn if route is named, does not redirect and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(
	          false,
	          "Named Route '" + (route.name) + "' has a default child route. " +
	          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
	          "the default child route will not be rendered. Remove the name from " +
	          "this route and use the name of the default child route for named " +
	          "links instead."
	        );
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs
	        ? cleanPath((matchAs + "/" + (child.path)))
	        : undefined;
	      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
	    });
	  }

	  if (route.alias !== undefined) {
	    var aliases = Array.isArray(route.alias)
	      ? route.alias
	      : [route.alias];

	    aliases.forEach(function (alias) {
	      var aliasRoute = {
	        path: alias,
	        children: route.children
	      };
	      addRouteRecord(
	        pathList,
	        pathMap,
	        nameMap,
	        aliasRoute,
	        parent,
	        record.path || '/' // matchAs
	      );
	    });
	  }

	  if (!pathMap[record.path]) {
	    pathList.push(record.path);
	    pathMap[record.path] = record;
	  }

	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
	      warn(
	        false,
	        "Duplicate named routes definition: " +
	        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      );
	    }
	  }
	}

	function compileRouteRegex (path, pathToRegexpOptions) {
	  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
	  if (process.env.NODE_ENV !== 'production') {
	    var keys = Object.create(null);
	    regex.keys.forEach(function (key) {
	      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
	      keys[key.name] = true;
	    });
	  }
	  return regex
	}

	function normalizePath (path, parent, strict) {
	  if (!strict) { path = path.replace(/\/$/, ''); }
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	/*  */


	function normalizeLocation (
	  raw,
	  current,
	  append,
	  router
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }

	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next);
	    next._normalized = true;
	    var params = assign(assign({}, current.params), next.params);
	    if (current.name) {
	      next.name = current.name;
	      next.params = params;
	    } else if (current.matched.length) {
	      var rawPath = current.matched[current.matched.length - 1].path;
	      next.path = fillParams(rawPath, params, ("path " + (current.path)));
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next
	  }

	  var parsedPath = parsePath(next.path || '');
	  var basePath = (current && current.path) || '/';
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : basePath;

	  var query = resolveQuery(
	    parsedPath.query,
	    next.query,
	    router && router.options.parseQuery
	  );

	  var hash = next.hash || parsedPath.hash;
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash;
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a
	}

	/*  */


	function createMatcher (
	  routes,
	  router
	) {
	  var ref = createRouteMap(routes);
	  var pathList = ref.pathList;
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function addRoutes (routes) {
	    createRouteMap(routes, pathList, pathMap, nameMap);
	  }

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute, false, router);
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, ("Route with name '" + name + "' does not exist"));
	      }
	      if (!record) { return _createRoute(null, location) }
	      var paramNames = record.regex.keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; });

	      if (typeof location.params !== 'object') {
	        location.params = {};
	      }

	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {};
	      for (var i = 0; i < pathList.length; i++) {
	        var path = pathList[i];
	        var record$1 = pathMap[path];
	        if (matchRoute(record$1.regex, location.path, location.params)) {
	          return _createRoute(record$1, location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location, null, router))
	        : originalRedirect;

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(
	          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	        );
	      }
	      return _createRoute(null, location)
	    }

	    var re = redirect;
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query;
	    hash = re.hasOwnProperty('hash') ? re.hash : hash;
	    params = re.hasOwnProperty('params') ? re.params : params;

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
	      }
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom, router)
	  }

	  return {
	    match: match,
	    addRoutes: addRoutes
	  }
	}

	function matchRoute (
	  regex,
	  path,
	  params
	) {
	  var m = path.match(regex);

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = regex.keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) {
	      params[key.name] = val;
	    }
	  }

	  return true
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */


	var positionStore = Object.create(null);

	function setupScroll () {
	  // Fix for #1585 for Firefox
	  window.history.replaceState({ key: getStateKey() }, '');
	  window.addEventListener('popstate', function (e) {
	    saveScrollPosition();
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });
	}

	function handleScroll (
	  router,
	  to,
	  from,
	  isPop
	) {
	  if (!router.app) {
	    return
	  }

	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }

	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior(to, from, isPop ? position : null);

	    if (!shouldScroll) {
	      return
	    }

	    if (typeof shouldScroll.then === 'function') {
	      shouldScroll.then(function (shouldScroll) {
	        scrollToPosition((shouldScroll), position);
	      }).catch(function (err) {
	        if (process.env.NODE_ENV !== 'production') {
	          assert(false, err.toString());
	        }
	      });
	    } else {
	      scrollToPosition(shouldScroll, position);
	    }
	  });
	}

	function saveScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}

	function getScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key]
	  }
	}

	function getElementPosition (el, offset) {
	  var docEl = document.documentElement;
	  var docRect = docEl.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left - offset.x,
	    y: elRect.top - docRect.top - offset.y
	  }
	}

	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function normalizeOffset (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : 0,
	    y: isNumber(obj.y) ? obj.y : 0
	  }
	}

	function isNumber (v) {
	  return typeof v === 'number'
	}

	function scrollToPosition (shouldScroll, position) {
	  var isObject = typeof shouldScroll === 'object';
	  if (isObject && typeof shouldScroll.selector === 'string') {
	    var el = document.querySelector(shouldScroll.selector);
	    if (el) {
	      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
	      offset = normalizeOffset(offset);
	      position = getElementPosition(el, offset);
	    } else if (isValidPosition(shouldScroll)) {
	      position = normalizePosition(shouldScroll);
	    }
	  } else if (isObject && isValidPosition(shouldScroll)) {
	    position = normalizePosition(shouldScroll);
	  }

	  if (position) {
	    window.scrollTo(position.x, position.y);
	  }
	}

	/*  */

	var supportsPushState = inBrowser && (function () {
	  var ua = window.navigator.userAgent;

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})();

	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser && window.performance && window.performance.now
	  ? window.performance
	  : Date;

	var _key = genKey();

	function genKey () {
	  return Time.now().toFixed(3)
	}

	function getStateKey () {
	  return _key
	}

	function setStateKey (key) {
	  _key = key;
	}

	function pushState (url, replace) {
	  saveScrollPosition();
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history;
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url);
	    } else {
	      _key = genKey();
	      history.pushState({ key: _key }, '', url);
	    }
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url);
	  }
	}

	function replaceState (url) {
	  pushState(url, true);
	}

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb();
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1);
	        });
	      } else {
	        step(index + 1);
	      }
	    }
	  };
	  step(0);
	}

	/*  */

	function resolveAsyncComponents (matched) {
	  return function (to, from, next) {
	    var hasAsync = false;
	    var pending = 0;
	    var error = null;

	    flatMapComponents(matched, function (def, _, match, key) {
	      // if it's a function and doesn't have cid attached,
	      // assume it's an async component resolve function.
	      // we are not using Vue's default async resolving mechanism because
	      // we want to halt the navigation until the incoming component has been
	      // resolved.
	      if (typeof def === 'function' && def.cid === undefined) {
	        hasAsync = true;
	        pending++;

	        var resolve = once(function (resolvedDef) {
	          if (isESModule(resolvedDef)) {
	            resolvedDef = resolvedDef.default;
	          }
	          // save resolved on async factory in case it's used elsewhere
	          def.resolved = typeof resolvedDef === 'function'
	            ? resolvedDef
	            : _Vue.extend(resolvedDef);
	          match.components[key] = resolvedDef;
	          pending--;
	          if (pending <= 0) {
	            next();
	          }
	        });

	        var reject = once(function (reason) {
	          var msg = "Failed to resolve async component " + key + ": " + reason;
	          process.env.NODE_ENV !== 'production' && warn(false, msg);
	          if (!error) {
	            error = isError(reason)
	              ? reason
	              : new Error(msg);
	            next(error);
	          }
	        });

	        var res;
	        try {
	          res = def(resolve, reject);
	        } catch (e) {
	          reject(e);
	        }
	        if (res) {
	          if (typeof res.then === 'function') {
	            res.then(resolve, reject);
	          } else {
	            // new syntax in Vue 2.3
	            var comp = res.component;
	            if (comp && typeof comp.then === 'function') {
	              comp.then(resolve, reject);
	            }
	          }
	        }
	      }
	    });

	    if (!hasAsync) { next(); }
	  }
	}

	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}

	var hasSymbol =
	  typeof Symbol === 'function' &&
	  typeof Symbol.toStringTag === 'symbol';

	function isESModule (obj) {
	  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
	}

	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once (fn) {
	  var called = false;
	  return function () {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    if (called) { return }
	    called = true;
	    return fn.apply(this, args)
	  }
	}

	/*  */

	var History = function History (router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	  this.readyErrorCbs = [];
	  this.errorCbs = [];
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb;
	};

	History.prototype.onReady = function onReady (cb, errorCb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	    if (errorCb) {
	      this.readyErrorCbs.push(errorCb);
	    }
	  }
	};

	History.prototype.onError = function onError (errorCb) {
	  this.errorCbs.push(errorCb);
	};

	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current);
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route);
	    onComplete && onComplete(route);
	    this$1.ensureURL();

	    // fire ready cbs once
	    if (!this$1.ready) {
	      this$1.ready = true;
	      this$1.readyCbs.forEach(function (cb) { cb(route); });
	    }
	  }, function (err) {
	    if (onAbort) {
	      onAbort(err);
	    }
	    if (err && !this$1.ready) {
	      this$1.ready = true;
	      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
	    }
	  });
	};

	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;

	  var current = this.current;
	  var abort = function (err) {
	    if (isError(err)) {
	      if (this$1.errorCbs.length) {
	        this$1.errorCbs.forEach(function (cb) { cb(err); });
	      } else {
	        warn(false, 'uncaught error during route navigation:');
	        console.error(err);
	      }
	    }
	    onAbort && onAbort(err);
	  };
	  if (
	    isSameRoute(route, current) &&
	    // in the case the route map has been dynamically appended to
	    route.matched.length === current.matched.length
	  ) {
	    this.ensureURL();
	    return abort()
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	    var updated = ref.updated;
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // in-component update hooks
	    extractUpdateHooks(updated),
	    // in-config enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  );

	  this.pending = route;
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    try {
	      hook(route, current, function (to) {
	        if (to === false || isError(to)) {
	          // next(false) -> abort navigation, ensure current URL
	          this$1.ensureURL(true);
	          abort(to);
	        } else if (
	          typeof to === 'string' ||
	          (typeof to === 'object' && (
	            typeof to.path === 'string' ||
	            typeof to.name === 'string'
	          ))
	        ) {
	          // next('/') or next({ path: '/' }) -> redirect
	          abort();
	          if (typeof to === 'object' && to.replace) {
	            this$1.replace(to);
	          } else {
	            this$1.push(to);
	          }
	        } else {
	          // confirm transition and pass on the value
	          next(to);
	        }
	      });
	    } catch (e) {
	      abort(e);
	    }
	  };

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function () { return this$1.current === route; };
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    var queue = enterGuards.concat(this$1.router.resolveHooks);
	    runQueue(queue, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { cb(); });
	        });
	      }
	    });
	  });
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current;
	  this.current = route;
	  this.cb && this.cb(route);
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev);
	  });
	};

	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base');
	      base = (baseEl && baseEl.getAttribute('href')) || '/';
	      // strip full URL origin
	      base = base.replace(/^https?:\/\/[^\/]+/, '');
	    } else {
	      base = '/';
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base;
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractGuards (
	  records,
	  name,
	  bind,
	  reverse
	) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
	        : bind(guard, instance, match, key)
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards)
	}

	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key]
	}

	function extractLeaveGuards (deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
	}

	function extractUpdateHooks (updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
	}

	function bindGuard (guard, instance) {
	  if (instance) {
	    return function boundRouteGuard () {
	      return guard.apply(instance, arguments)
	    }
	  }
	}

	function extractEnterGuards (
	  activated,
	  cbs,
	  isValid
	) {
	  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
	    return bindEnterGuard(guard, match, key, cbs, isValid)
	  })
	}

	function bindEnterGuard (
	  guard,
	  match,
	  key,
	  cbs,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb);
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid);
	        });
	      }
	    })
	  }
	}

	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}

	/*  */


	var HTML5History = (function (History$$1) {
	  function HTML5History (router, base) {
	    var this$1 = this;

	    History$$1.call(this, router, base);

	    var expectScroll = router.options.scrollBehavior;

	    if (expectScroll) {
	      setupScroll();
	    }

	    var initLocation = getLocation(this.base);
	    window.addEventListener('popstate', function (e) {
	      var current = this$1.current;

	      // Avoiding first `popstate` event dispatched in some browsers but first
	      // history route not updated since async guard at the same time.
	      var location = getLocation(this$1.base);
	      if (this$1.current === START && location === initLocation) {
	        return
	      }

	      this$1.transitionTo(location, function (route) {
	        if (expectScroll) {
	          handleScroll(router, route, current, true);
	        }
	      });
	    });
	  }

	  if ( History$$1 ) HTML5History.__proto__ = History$$1;
	  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };

	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getLocation(this.base)
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = window.location.pathname;
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	/*  */


	var HashHistory = (function (History$$1) {
	  function HashHistory (router, base, fallback) {
	    History$$1.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return
	    }
	    ensureSlash();
	  }

	  if ( History$$1 ) HashHistory.__proto__ = History$$1;
	  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners () {
	    var this$1 = this;

	    var router = this.router;
	    var expectScroll = router.options.scrollBehavior;
	    var supportsScroll = supportsPushState && expectScroll;

	    if (supportsScroll) {
	      setupScroll();
	    }

	    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
	      var current = this$1.current;
	      if (!ensureSlash()) {
	        return
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        if (supportsScroll) {
	          handleScroll(this$1.router, route, current, true);
	        }
	        if (!supportsPushState) {
	          replaceHash(route.fullPath);
	        }
	      });
	    });
	  };

	  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath);
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath);
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };

	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getHash()
	  };

	  return HashHistory;
	}(History));

	function checkFallback (base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(
	      cleanPath(base + '/#' + location)
	    );
	    return true
	  }
	}

	function ensureSlash () {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path);
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function getUrl (path) {
	  var href = window.location.href;
	  var i = href.indexOf('#');
	  var base = i >= 0 ? href.slice(0, i) : href;
	  return (base + "#" + path)
	}

	function pushHash (path) {
	  if (supportsPushState) {
	    pushState(getUrl(path));
	  } else {
	    window.location.hash = path;
	  }
	}

	function replaceHash (path) {
	  if (supportsPushState) {
	    replaceState(getUrl(path));
	  } else {
	    window.location.replace(getUrl(path));
	  }
	}

	/*  */


	var AbstractHistory = (function (History$$1) {
	  function AbstractHistory (router, base) {
	    History$$1.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }

	  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
	  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	      this$1.index++;
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex;
	      this$1.updateRoute(route);
	    });
	  };

	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/'
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

	  this.app = null;
	  this.apps = [];
	  this.options = options;
	  this.beforeHooks = [];
	  this.resolveHooks = [];
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || [], this);

	  var mode = options.mode || 'hash';
	  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
	  if (this.fallback) {
	    mode = 'hash';
	  }
	  if (!inBrowser) {
	    mode = 'abstract';
	  }
	  this.mode = mode;

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base);
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        assert(false, ("invalid mode: " + mode));
	      }
	  }
	};

	var prototypeAccessors = { currentRoute: { configurable: true } };

	VueRouter.prototype.match = function match (
	  raw,
	  current,
	  redirectedFrom
	) {
	  return this.matcher.match(raw, current, redirectedFrom)
	};

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  );

	  this.apps.push(app);

	  // main app already initialized.
	  if (this.app) {
	    return
	  }

	  this.app = app;

	  var history = this.history;

	  if (history instanceof HTML5History) {
	    history.transitionTo(history.getCurrentLocation());
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      history.setupListeners();
	    };
	    history.transitionTo(
	      history.getCurrentLocation(),
	      setupHashListener,
	      setupHashListener
	    );
	  }

	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  return registerHook(this.beforeHooks, fn)
	};

	VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
	  return registerHook(this.resolveHooks, fn)
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  return registerHook(this.afterHooks, fn)
	};

	VueRouter.prototype.onReady = function onReady (cb, errorCb) {
	  this.history.onReady(cb, errorCb);
	};

	VueRouter.prototype.onError = function onError (errorCb) {
	  this.history.onError(errorCb);
	};

	VueRouter.prototype.push = function push (location, onComplete, onAbort) {
	  this.history.push(location, onComplete, onAbort);
	};

	VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
	  this.history.replace(location, onComplete, onAbort);
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n);
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1);
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1);
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? to.matched
	      ? to
	      : this.resolve(to).route
	    : this.currentRoute;
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  var location = normalizeLocation(
	    to,
	    current || this.history.current,
	    append,
	    this
	  );
	  var route = this.match(location, current);
	  var fullPath = route.redirectedFrom || route.fullPath;
	  var base = this.history.base;
	  var href = createHref(base, fullPath, this.mode);
	  return {
	    location: location,
	    route: route,
	    href: href,
	    // for backwards compat
	    normalizedTo: location,
	    resolved: route
	  }
	};

	VueRouter.prototype.addRoutes = function addRoutes (routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	function registerHook (list, fn) {
	  list.push(fn);
	  return function () {
	    var i = list.indexOf(fn);
	    if (i > -1) { list.splice(i, 1); }
	  }
	}

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path
	}

	VueRouter.install = install;
	VueRouter.version = '2.8.1';

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}

	module.exports = VueRouter;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * vue-local-storage v0.5.0
	 * (c) 2017 Alexander Avakov
	 * @license MIT
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.VueLocalStorage = factory());
	}(this, (function () { 'use strict';

	var VueLocalStorage = function VueLocalStorage () {
	  this._properties = {};
	};

	/**
	 * Get value from localStorage
	 *
	 * @param {String} lsKey
	 * @param {*} defaultValue
	 * @returns {*}
	 */
	VueLocalStorage.prototype.get = function get (lsKey, defaultValue) {
	    var this$1 = this;
	    if ( defaultValue === void 0 ) defaultValue = null;

	  if (window.localStorage[lsKey]) {
	    var type = String;

	    for (var key in this$1._properties) {
	      if (key === lsKey) {
	        type = this$1._properties[key].type;
	        break
	      }
	    }

	    return this._process(type, window.localStorage[lsKey])
	  }

	  return defaultValue !== null ? defaultValue : null
	};

	/**
	 * Set localStorage value
	 *
	 * @param {String} lsKey
	 * @param {*} value
	 * @returns {*}
	 */
	VueLocalStorage.prototype.set = function set (lsKey, value) {
	    var this$1 = this;

	  for (var key in this$1._properties) {
	    var type = this$1._properties[key].type;

	    if ((key === lsKey) && [Array, Object].includes(type)) {
	      window.localStorage.setItem(lsKey, JSON.stringify(value));

	      return value
	    }
	  }

	  window.localStorage.setItem(lsKey, value);

	  return value
	};

	/**
	 * Remove value from localStorage
	 *
	 * @param {String} lsKey
	 */
	VueLocalStorage.prototype.remove = function remove (lsKey) {
	  return window.localStorage.removeItem(lsKey)
	};

	/**
	 * Add new property to localStorage
	 *
	 * @param {String} key
	 * @param {function} type
	 * @param {*} defaultValue
	 */
	VueLocalStorage.prototype.addProperty = function addProperty (key, type, defaultValue) {
	    if ( defaultValue === void 0 ) defaultValue = undefined;

	  type = type || String;

	  this._properties[key] = { type: type };

	  if (!window.localStorage[key] && defaultValue !== null) {
	    window.localStorage.setItem(
	      key,
	      [Array, Object].includes(type) ? JSON.stringify(defaultValue) : defaultValue
	    );
	  }
	};

	/**
	 * Process the value before return it from localStorage
	 *
	 * @param {String} type
	 * @param {*} value
	 * @returns {*}
	 * @private
	 */
	VueLocalStorage.prototype._process = function _process (type, value) {
	  switch (type) {
	    case Boolean:
	      return value === 'true'
	    case Number:
	      return parseInt(value, 10)
	    case Array:
	      try {
	        var array = JSON.parse(value);

	        return Array.isArray(array) ? array : []
	      } catch (e) {
	        return []
	      }
	    case Object:
	      try {
	        return JSON.parse(value)
	      } catch (e) {
	        return {}
	      }
	    default:
	      return value
	  }
	};

	var VueLocalStorage$1 = new VueLocalStorage();

	var index = {
	  /**
	   * Install vue-local-storage plugin
	   *
	   * @param {Vue} Vue
	   * @param {Object} options
	   */
	  install: function (Vue, options) {
	    if ( options === void 0 ) options = {};

	    if (typeof process !== 'undefined' &&
	      (
	        process.server ||
	        process.SERVER_BUILD ||
	        (process.env && process.env.VUE_ENV === 'server')
	      )
	    ) {
	      return
	    }

	    try {
	      var test = '__vue-localstorage-test__';

	      window.localStorage.setItem(test, test);
	      window.localStorage.removeItem(test);
	    } catch (e) {
	      console.error('Local storage is not supported');
	    }

	    var name = options.name || 'localStorage';
	    var bind = options.bind;

	    Vue.mixin({
	      beforeCreate: function beforeCreate () {
	        var this$1 = this;

	        if (this.$options[name]) {
	          Object.keys(this.$options[name]).forEach(function (key) {
	            var config = this$1.$options[name][key];
	            var ref = [config.type, config.default];
	            var type = ref[0];
	            var defaultValue = ref[1];

	            VueLocalStorage$1.addProperty(key, type, defaultValue);

	            var existingProp = Object.getOwnPropertyDescriptor(VueLocalStorage$1, key);

	            if (!existingProp) {
	              var prop = {
	                get: function () { return Vue.localStorage.get(key, defaultValue); },
	                set: function (val) { return Vue.localStorage.set(key, val); },
	                configurable: true
	              };

	              Object.defineProperty(VueLocalStorage$1, key, prop);
	              Vue.util.defineReactive(VueLocalStorage$1, key, defaultValue);
	            } else if (!Vue.config.silent) {
	              console.log((key + ": is already defined and will be reused"));
	            }

	            if ((bind || config.bind) && config.bind !== false) {
	              this$1.$options.computed = this$1.$options.computed || {};

	              if (!this$1.$options.computed[key]) {
	                this$1.$options.computed[key] = {
	                  get: function () { return Vue.localStorage[key]; },
	                  set: function (val) { Vue.localStorage[key] = val; }
	                };
	              }
	            }
	          });
	        }
	      }
	    });

	    Vue[name] = VueLocalStorage$1;
	    Vue.prototype[("$" + name)] = VueLocalStorage$1;
	  }
	};

	return index;

	})));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(10)

	/* template */
	var __vue_template__ = __webpack_require__(26)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Triumf\\Desktop\\VueJS 2 project\\qellume fixume multiplayer\\resources\\admin\\components\\App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0c9b1462", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0c9b1462", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(7);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _HeaderComponent = __webpack_require__(11);

	var _HeaderComponent2 = _interopRequireDefault(_HeaderComponent);

	var _TextEditor = __webpack_require__(18);

	var _TextEditor2 = _interopRequireDefault(_TextEditor);

	var _Page = __webpack_require__(21);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.component('HeaderComponent', _HeaderComponent2.default);
	_vue2.default.component('PageOne', _Page2.default);

	exports.default = {

	    data: function data() {
	        return {
	            frmChoose: []

	        };
	    },

	    mounted: function mounted() {
	        this.frmChoose = false;

	        if (this.$route.path == "/dashboard") {
	            this.frmChoose = true;
	        }
	    }
	};


	new _vue2.default({
	    el: '#admin'

	});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(12)

	/* script */
	__vue_exports__ = __webpack_require__(16)

	/* template */
	var __vue_template__ = __webpack_require__(17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Triumf\\Desktop\\VueJS 2 project\\qellume fixume multiplayer\\resources\\admin\\components\\includes\\HeaderComponent.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2bb8522e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2bb8522e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] HeaderComponent.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2bb8522e!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HeaderComponent.vue", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2bb8522e!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HeaderComponent.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "\n.nav{margin-bottom: 100px;\n}\n", ""]);

	// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	exports.default = {
	   data: function data() {
	      return {
	         btn: false

	      };
	   }

	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "nav"
	  }, [_c('nav', {
	    staticClass: "navbar navbar-inverse navbar-fixed-top "
	  }, [_c('div', {
	    staticClass: "container-fluid"
	  }, [_c('div', {
	    staticClass: "navbar-header menu"
	  }, [_c('h5', {
	    staticClass: "navbar-brand titulli"
	  }, [_vm._v("Number XYZ")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('router-link', {
	    staticClass: "menuItem",
	    attrs: {
	      "to": "/multiplayer"
	    }
	  }, [_c('h6', {
	    staticClass: "navbar-brand"
	  }, [_vm._v("Multi")])]), _vm._v(" "), _c('router-link', {
	    staticClass: "menuItem",
	    attrs: {
	      "to": "/singelplayer"
	    }
	  }, [_c('h6', {
	    staticClass: "navbar-brand"
	  }, [_vm._v("Single")])])], 1)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": "/logout"
	    }
	  }, [_c('h6', {
	    staticClass: "navbar-brand menuItem"
	  }, [_vm._v("Logout")])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2bb8522e", module.exports)
	  }
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(19)

	/* template */
	var __vue_template__ = __webpack_require__(20)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Triumf\\Desktop\\VueJS 2 project\\qellume fixume multiplayer\\resources\\admin\\components\\helpers\\TextEditor.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2e358d00", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2e358d00", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] TextEditor.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//

	var CKEDITOR = window.CKEDITOR;
	var index = 0;
	if (!CKEDITOR) {
	  throw new Error('[VueCkeditor] cannot locate CKEDITOR.');
	}
	exports.default = {
	  name: 'vue-ckeditor',
	  props: {
	    value: {
	      type: String
	    },
	    id: {
	      type: String,
	      default: function _default() {
	        return 'editor-' + (index += 1);
	      }
	    },
	    height: {
	      type: String,
	      default: '250px'
	    },
	    toolbar: {
	      type: Array,
	      default: function _default() {
	        return ['Format', ['Bold', 'Italic', 'Strike', 'Underline'], ['BulletedList', 'NumberedList', 'Blockquote'], ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'], ['Link', 'Unlink'], ['FontSize', 'TextColor'], ['Image', 'Table'], ['Undo', 'Redo'], ['Source', 'Maximize']];
	      }
	    },
	    language: {
	      type: String,
	      default: 'en'
	    },
	    extraplugins: {
	      type: String,
	      default: ''
	    }
	  },
	  data: function data() {
	    return {
	      count: 0
	    };
	  },
	  beforeUpdate: function beforeUpdate() {
	    var id = this.id;

	    if (this.value !== CKEDITOR.instances[id].getData()) {
	      CKEDITOR.instances[id].setData(this.value);
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    var id = this.id;

	    var config = {
	      toolbar: this.toolbar,
	      language: this.language,
	      height: this.height,
	      extraPlugins: this.extraplugins
	    };
	    CKEDITOR.replace(id, config);
	    CKEDITOR.instances[id].setData(this.value);
	    CKEDITOR.instances[id].on('change', function () {
	      var value = CKEDITOR.instances[id].getData();
	      if (value !== _this.value) {
	        _this.$emit('input', value);
	      }

	      $('.modal').on('hidden.bs.modal', function () {
	        CKEDITOR.instances[id].setData("");
	      });
	    });
	  },
	  destroyed: function destroyed() {
	    var id = this.id;

	    if (CKEDITOR.instances[id]) {
	      CKEDITOR.instances[id].destroy();
	    }
	  }
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ckeditor"
	  }, [_c('textarea', {
	    attrs: {
	      "id": _vm.id
	    },
	    domProps: {
	      "value": _vm.value
	    }
	  })])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2e358d00", module.exports)
	  }
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(22)

	/* script */
	__vue_exports__ = __webpack_require__(24)

	/* template */
	var __vue_template__ = __webpack_require__(25)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Triumf\\Desktop\\VueJS 2 project\\qellume fixume multiplayer\\resources\\admin\\components\\Page1.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-69ce8b03", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-69ce8b03", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Page1.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-69ce8b03!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Page1.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-69ce8b03!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Page1.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  data: function data() {
	    return {};
	  },

	  mounted: function mounted() {

	    this.$http.get('ses').then(function (response) {
	      this.$localStorage.set('user', response.data);
	    });
	  },

	  methods: {}
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page1"
	  }, [_c('router-link', {
	    attrs: {
	      "to": "/singelplayer"
	    }
	  }, [_c('button', {
	    staticClass: "buton1"
	  }, [_c('span', [_vm._v("Single Player")])])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/multiplayer"
	    }
	  }, [_c('button', {
	    staticClass: "buton1",
	    attrs: {
	      "id": "multibuton"
	    }
	  }, [_c('span', [_vm._v("Multi Player")])])])], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-69ce8b03", module.exports)
	  }
	}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container1"
	  }, [_c('header-component'), _vm._v(" "), _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "starter-template"
	  }, [_c('router-view')], 1)])], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0c9b1462", module.exports)
	  }
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(28)

	/* script */
	__vue_exports__ = __webpack_require__(30)

	/* template */
	var __vue_template__ = __webpack_require__(31)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Triumf\\Desktop\\VueJS 2 project\\qellume fixume multiplayer\\resources\\admin\\components\\Singel_Player.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d347032a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d347032a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Singel_Player.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d347032a!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Singel_Player.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d347032a!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Singel_Player.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "\n.singelplayer{margin-bottom: 100px;\n}\n\n", ""]);

	// exports


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {

	    data: function data() {
	        return {
	            Level: []

	        };
	    },
	    methods: {
	        Level_singel: function Level_singel(param) {

	            this.$http.post('/singleStart', { level: param }).then(function (response) {

	                this.$store.commit('setRoom', response.data['room']);
	                this.$store.commit('setGame', response.data['game']);
	            });
	        }
	    }
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "singelplayer"
	  }, [_c('table', {
	    staticClass: "table"
	  }, [_vm._m(0), _vm._v(" "), _c('tr', [_c('td', [_c('router-link', {
	    attrs: {
	      "to": "/game"
	    }
	  }, [_c('button', {
	    staticClass: "buton5",
	    on: {
	      "click": function($event) {
	        _vm.Level_singel(2)
	      }
	    }
	  }, [_c('span', [_vm._v("2")])])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/game"
	    }
	  }, [_c('button', {
	    staticClass: "buton5",
	    on: {
	      "click": function($event) {
	        _vm.Level_singel(3)
	      }
	    }
	  }, [_c('span', [_vm._v("3")])])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/game"
	    }
	  }, [_c('button', {
	    staticClass: "buton5",
	    on: {
	      "click": function($event) {
	        _vm.Level_singel(4)
	      }
	    }
	  }, [_c('span', [_vm._v("4")])])])], 1)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', [_c('td', {
	    attrs: {
	      "colspan": "1"
	    }
	  }, [_c('span', {
	    staticClass: "span1"
	  }, [_vm._v("With how many number do you want to play?")])])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d347032a", module.exports)
	  }
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(33)

	/* template */
	var __vue_template__ = __webpack_require__(34)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Triumf\\Desktop\\VueJS 2 project\\qellume fixume multiplayer\\resources\\admin\\components\\Multi_Player.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-cb897c54", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-cb897c54", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Multi_Player.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	//
	"use strict";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('router-link', {
	    attrs: {
	      "to": "/newgame"
	    }
	  }, [_c('button', {
	    staticClass: "buton1"
	  }, [_c('span', [_vm._v("New Game")])])]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/findgame"
	    }
	  }, [_c('button', {
	    staticClass: "buton1",
	    attrs: {
	      "id": "findbuton"
	    }
	  }, [_c('span', [_vm._v("Find Game")])])])], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cb897c54", module.exports)
	  }
	}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(36)

	/* script */
	__vue_exports__ = __webpack_require__(38)

	/* template */
	var __vue_template__ = __webpack_require__(39)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Triumf\\Desktop\\VueJS 2 project\\qellume fixume multiplayer\\resources\\admin\\components\\Game.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4b4e4afe", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4b4e4afe", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Game.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4b4e4afe!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Game.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4b4e4afe!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Game.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "\n.game{\n}\n\n", ""]);

	// exports


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//


	exports.default = {
	    data: function data() {
	        return {
	            tries: [],
	            order: [],

	            tryinfo: [],
	            inputTry: [],
	            bool: false,
	            roomId: [],
	            number: [],
	            btnNewGame: false,

	            errorInput: null,
	            btnTryDisabled: [],
	            infoInput: null,

	            User: null,
	            frmTry: true
	        };
	    },

	    mounted: function mounted() {

	        this.bool = this.$store.state.game.order == this.order;
	        this.inputTry.length = 0;
	        this.btnTryDisable = true;
	        // this.User=this.$store.state.


	        // this.$http.get('getReadyPlayers/'+this.$store.state.room.id).then(function (response) {
	        //         this.User = response.data;                    
	        //     });

	        setInterval(function () {

	            if (this.inputTry == null) {
	                this.inputTry.length == 0;
	            }
	            if (this.$store.state.room.number.toString().length == this.inputTry.toString().length) {
	                this.btnTryDisabled = false;
	            } else {
	                this.btnTryDisabled = true;
	            }

	            // this.number=this.$store.state.room.number;
	        }.bind(this), 1000);
	    },


	    methods: {
	        getTries: function getTries() {
	            this.$http.get('getGameTries/' + this.$store.state.room.id).then(function (response) {

	                this.tries = response.data;
	            });
	        },

	        SendTry: function SendTry() {

	            this.bool = false;
	            this.tryinfo.push({
	                number: this.inputTry,
	                game_id: this.$store.state.game.id,
	                lengthNumber: this.$store.state.room.number.toString().length });

	            this.$http.post('/try', this.tryinfo[this.tryinfo.length - 1]).then(function (response) {
	                this.infoInput = response.datanumber;

	                if (response.status == 200) {
	                    this.$store.commit('setRoom', response.data['room']);
	                }

	                if (this.inputTry == this.$store.state.room.number) {
	                    var username = this.$localStorage.get('user');
	                    this.infoInput = username + " win this game!";
	                    this.frmTry = false;

	                    swal(username + ' win this game', '', 'info');

	                    this.btnNewGame = true;
	                }
	                this.inputTry = [];
	            });

	            this.getTries();
	        }
	    }
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "multiGame"
	  }, [_c('div', {
	    staticClass: "inputItem"
	  }, [(_vm.frmTry) ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputTry),
	      expression: "inputTry"
	    }],
	    staticClass: "tryNumber input1",
	    attrs: {
	      "type": "number",
	      "name": "tryNumber"
	    },
	    domProps: {
	      "value": (_vm.inputTry)
	    },
	    on: {
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
	        _vm.SendTry()
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.inputTry = $event.target.value
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.frmTry) ? _c('input', {
	    staticClass: "buton4",
	    attrs: {
	      "type": "submit",
	      "name": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.SendTry()
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.btnNewGame) ? _c('router-link', {
	    attrs: {
	      "to": "/singelplayer"
	    }
	  }, [_c('button', {
	    staticClass: "buton4"
	  }, [_vm._v("New Game")])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
	    staticClass: "tentimet"
	  }, [_c('h3', [_vm._v(_vm._s(_vm.infoInput))]), _vm._v(" "), _vm._l((_vm.tries), function(tryy) {
	    return _c('h4', {
	      staticClass: "span1"
	    }, [_vm._v("\r\n\t\t" + _vm._s(tryy.tentimi) + " " + _vm._s(tryy.message))])
	  })], 2)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4b4e4afe", module.exports)
	  }
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(41)

	/* script */
	__vue_exports__ = __webpack_require__(43)

	/* template */
	var __vue_template__ = __webpack_require__(44)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Triumf\\Desktop\\VueJS 2 project\\qellume fixume multiplayer\\resources\\admin\\components\\New_game.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4cd7e2c0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4cd7e2c0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] New_game.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4cd7e2c0!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./New_game.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4cd7e2c0!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./New_game.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	exports.default = {
	   data: function data() {
	      return {

	         diff: [],
	         nr_player: [],
	         name_room: [],

	         room: [],
	         asd: 1234

	      };
	   },
	   methods: {
	      CreateRoom: function CreateRoom() {

	         this.room.push({
	            level: this.diff,
	            maxPlayers: this.nr_player,
	            name: this.name_room });

	         this.$http.post('/createRoom', this.room[this.room.length - 1]).then(function (response) {
	            console.log(response.data);
	            this.$store.commit('setRoom', response.data.room);
	            this.$store.commit('setGame', response.data.game);

	            // this.$store.state.room=this.asd;
	         });
	      },
	      ClearForm: function ClearForm() {

	         this.diff = null;
	         this.nr_player = null;
	         this.name_room = null;
	      }

	   }
	};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h2', {
	    staticClass: "nenTitulli"
	  }, [_vm._v("Create new room")]), _vm._v(" "), _c('br'), _c('br'), _c('br'), _c('br'), _vm._v(" "), _c('div', {
	    staticClass: "frmNewGame"
	  }, [_c('div', {
	    attrs: {
	      "id": "Level"
	    }
	  }, [_vm._m(0), _vm._v(" "), _c('ul', {
	    staticClass: "ulRadio"
	  }, [_c('li', [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.diff),
	      expression: "diff"
	    }],
	    staticClass: "radio2",
	    attrs: {
	      "type": "radio",
	      "id": "f-option",
	      "name": "selector"
	    },
	    domProps: {
	      "value": 2,
	      "checked": _vm._q(_vm.diff, 2)
	    },
	    on: {
	      "change": function($event) {
	        _vm.diff = 2
	      }
	    }
	  }), _vm._v(" "), _c('label', {
	    attrs: {
	      "for": "f-option"
	    }
	  }, [_vm._v("2")]), _vm._v(" "), _c('div', {
	    staticClass: "check"
	  })]), _vm._v(" "), _c('li', [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.diff),
	      expression: "diff"
	    }],
	    staticClass: "radio2",
	    attrs: {
	      "type": "radio",
	      "id": "s-option",
	      "name": "selector"
	    },
	    domProps: {
	      "value": 3,
	      "checked": _vm._q(_vm.diff, 3)
	    },
	    on: {
	      "change": function($event) {
	        _vm.diff = 3
	      }
	    }
	  }), _vm._v(" "), _c('label', {
	    attrs: {
	      "for": "s-option"
	    }
	  }, [_vm._v("3")]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('li', [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.diff),
	      expression: "diff"
	    }],
	    staticClass: "radio2",
	    attrs: {
	      "type": "radio",
	      "id": "t-option",
	      "name": "selector"
	    },
	    domProps: {
	      "value": 4,
	      "checked": _vm._q(_vm.diff, 4)
	    },
	    on: {
	      "change": function($event) {
	        _vm.diff = 4
	      }
	    }
	  }), _vm._v(" "), _c('label', {
	    attrs: {
	      "for": "t-option"
	    }
	  }, [_vm._v("4")]), _vm._v(" "), _vm._m(2)])])]), _vm._v(" "), _c('div', {
	    attrs: {
	      "id": "NrPlayers"
	    }
	  }, [_vm._m(3), _vm._v(" "), _c('ul', {
	    staticClass: "ulRadio"
	  }, [_c('li', [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.nr_player),
	      expression: "nr_player"
	    }],
	    staticClass: "radio1",
	    attrs: {
	      "type": "radio",
	      "id": "t1-option",
	      "name": "selector1"
	    },
	    domProps: {
	      "value": 2,
	      "checked": _vm._q(_vm.nr_player, 2)
	    },
	    on: {
	      "change": function($event) {
	        _vm.nr_player = 2
	      }
	    }
	  }), _vm._v(" "), _c('label', {
	    attrs: {
	      "for": "t1-option"
	    }
	  }, [_vm._v("2")]), _vm._v(" "), _c('div', {
	    staticClass: "check"
	  })]), _vm._v(" "), _c('li', [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.nr_player),
	      expression: "nr_player"
	    }],
	    staticClass: "radio1",
	    attrs: {
	      "type": "radio",
	      "id": "t2-option",
	      "name": "selector1"
	    },
	    domProps: {
	      "value": 3,
	      "checked": _vm._q(_vm.nr_player, 3)
	    },
	    on: {
	      "change": function($event) {
	        _vm.nr_player = 3
	      }
	    }
	  }), _vm._v(" "), _c('label', {
	    attrs: {
	      "for": "t2-option"
	    }
	  }, [_vm._v("3")]), _vm._v(" "), _vm._m(4)]), _vm._v(" "), _c('li', [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.nr_player),
	      expression: "nr_player"
	    }],
	    staticClass: "radio1",
	    attrs: {
	      "type": "radio",
	      "id": "t3-option",
	      "name": "selector1"
	    },
	    domProps: {
	      "value": 4,
	      "checked": _vm._q(_vm.nr_player, 4)
	    },
	    on: {
	      "change": function($event) {
	        _vm.nr_player = 4
	      }
	    }
	  }), _vm._v(" "), _c('label', {
	    attrs: {
	      "for": "t3-option"
	    }
	  }, [_vm._v("4")]), _vm._v(" "), _vm._m(5)]), _vm._v(" "), _c('li', [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.nr_player),
	      expression: "nr_player"
	    }],
	    staticClass: "radio1",
	    attrs: {
	      "type": "radio",
	      "id": "t4-option",
	      "name": "selector1"
	    },
	    domProps: {
	      "value": 5,
	      "checked": _vm._q(_vm.nr_player, 5)
	    },
	    on: {
	      "change": function($event) {
	        _vm.nr_player = 5
	      }
	    }
	  }), _vm._v(" "), _c('label', {
	    attrs: {
	      "for": "t4-option"
	    }
	  }, [_vm._v("5")]), _vm._v(" "), _vm._m(6)])])]), _vm._v(" "), _c('div', {
	    attrs: {
	      "id": "RoomName"
	    }
	  }, [_vm._m(7), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.name_room),
	      expression: "name_room"
	    }],
	    staticClass: "input-text-1",
	    attrs: {
	      "type": "text",
	      "name": "NameRoom"
	    },
	    domProps: {
	      "value": (_vm.name_room)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.name_room = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "ftmRight"
	  }, [_c('router-link', {
	    attrs: {
	      "to": "/startmultiplayer"
	    }
	  }, [_c('input', {
	    staticClass: "buton2",
	    attrs: {
	      "type": "submit",
	      "name": "CreateRoom",
	      "value": "Create"
	    },
	    on: {
	      "click": function($event) {
	        _vm.CreateRoom()
	      }
	    }
	  })]), _vm._v(" "), _c('input', {
	    staticClass: "buton3",
	    attrs: {
	      "type": "button",
	      "name": "Clear",
	      "value": "Clear"
	    },
	    on: {
	      "click": function($event) {
	        _vm.ClearForm()
	      }
	    }
	  })], 1)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticStyle: {
	      "float": "left"
	    }
	  }, [_c('b', [_vm._v("How many digits:  ")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "check"
	  }, [_c('div', {
	    staticClass: "inside"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "check"
	  }, [_c('div', {
	    staticClass: "inside"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticStyle: {
	      "float": "left"
	    }
	  }, [_c('b', [_vm._v("Players:")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "check"
	  }, [_c('div', {
	    staticClass: "inside"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "check"
	  }, [_c('div', {
	    staticClass: "inside"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "check"
	  }, [_c('div', {
	    staticClass: "inside"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "span1"
	  }, [_c('b', [_vm._v("Name of room: ")])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4cd7e2c0", module.exports)
	  }
	}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(46)

	/* script */
	__vue_exports__ = __webpack_require__(48)

	/* template */
	var __vue_template__ = __webpack_require__(49)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Triumf\\Desktop\\VueJS 2 project\\qellume fixume multiplayer\\resources\\admin\\components\\Find_game.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-35c4a28e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-35c4a28e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Find_game.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-35c4a28e!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Find_game.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-35c4a28e!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Find_game.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {

	    data: function data() {
	        return {

	            rooms: [],
	            players: [],
	            searchInput: [],

	            abc: []

	        };
	    },

	    mounted: function mounted() {},


	    computed: {
	        filteredList: function filteredList() {
	            var _this = this;

	            return this.rooms.filter(function (room) {
	                return room.name.toLowerCase().includes(_this.searchInput) || room.id.toString().includes(_this.searchInput);
	            });
	        }
	    },
	    created: function created() {
	        var _this2 = this;

	        this.GetRooms();

	        Echo.join('channel_getRoom').listen('getRooms', function (e) {
	            _this2.GetRooms();
	            console.log(e);
	        });
	    },


	    methods: {

	        tableFilter: function tableFilter(room) {
	            return room.name.indexOf(this.searchInput) != -1 || room.id.indexOf(this.searchInput) != -1;
	        },

	        JoinRoom: function JoinRoom(param) {
	            clearInterval(this.abc);

	            this.$http.get('enterRoom/' + param).then(function (response) {

	                this.$store.commit('setRoom', response.data.room);
	                this.$store.commit('setGame', response.data.game);
	            });
	        },

	        GetRooms: function GetRooms() {
	            this.$http.get('getRooms').then(function (response) {
	                this.rooms = response.data;
	            });
	        }

	    },

	    filters: {
	        toString1: function toString1(value) {
	            var a = value.toString().length;
	            if (a == 2) return "Easy";
	            if (a == 3) return "Medium";
	            if (a == 4) return "Hard";
	        }
	    }
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h2', {
	    staticClass: "nenTitulli"
	  }, [_vm._v("Find rooms")]), _c('br'), _c('br'), _c('br'), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.searchInput),
	      expression: "searchInput"
	    }],
	    staticClass: "input2",
	    attrs: {
	      "type": "search",
	      "name": "search",
	      "placeholder": "Find room"
	    },
	    domProps: {
	      "value": (_vm.searchInput)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.searchInput = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('br'), _c('br'), _c('br'), _vm._v(" "), _c('table', {
	    staticClass: "table1"
	  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.filteredList), function(room, index) {
	    return _c('tr', [_c('td', [_c('span', [_vm._v(_vm._s(room.name))])]), _vm._v(" "), _c('td', [_c('span', [_vm._v(_vm._s(room.maxPlayers))])]), _vm._v(" "), _c('td', [_c('span', [_vm._v(_vm._s(_vm._f("toString1")(room.number)))])]), _vm._v(" "), _c('td', [_c('router-link', {
	      attrs: {
	        "to": "/startmultiplayer"
	      }
	    }, [_c('button', {
	      staticClass: "buton3",
	      on: {
	        "click": function($event) {
	          _vm.JoinRoom(room.id)
	        }
	      }
	    }, [_vm._v("Join Room")])])], 1)])
	  })], 2)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('tr', [_c('th', [_c('span', [_vm._v("Room")])]), _vm._v(" "), _c('th', [_c('span', [_vm._v("Max Player")])]), _vm._v(" "), _c('th', [_c('span', [_vm._v("Level")])]), _vm._v(" "), _c('th', [_vm._v("Join free room")])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-35c4a28e", module.exports)
	  }
	}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(51)

	/* script */
	__vue_exports__ = __webpack_require__(53)

	/* template */
	var __vue_template__ = __webpack_require__(54)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Triumf\\Desktop\\VueJS 2 project\\qellume fixume multiplayer\\resources\\admin\\components\\StartMulti.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3774bcc6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3774bcc6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] StartMulti.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3774bcc6!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StartMulti.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3774bcc6!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StartMulti.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {

	    data: function data() {
	        return {
	            ReadyPlayers: [],
	            bool: false,
	            abc: [],
	            room_id: 0,
	            loading: true
	        };
	    },

	    computed: {},

	    created: function created() {
	        this.getReadyPlayers();

	        this.abc = setInterval(function () {
	            if (this.$store.state.room != null) {
	                this.initGame();
	                this.getReadyPlayers();
	                // this.initGame(this.room_id);
	            }
	        }.bind(this), 100);

	        console.log('hej');
	    },
	    mounted: function mounted() {},


	    methods: {

	        getReadyPlayers: function getReadyPlayers() {

	            this.$http.get('getReadyPlayers/' + this.room_id).then(function (response) {
	                this.ReadyPlayers = response.data;
	                this.bool = this.ReadyPlayers.length == this.$store.state.room.maxPlayers;
	            });
	        },
	        startGame: function startGame() {
	            this.ReadyPlayers = [];
	        },

	        initGame: function initGame() {
	            var _this = this;

	            this.room_id = this.$store.state.room.id;
	            this.loading = false;

	            Echo.private('private-room.' + this.room_id).listen('getPlayers', function (e) {

	                _this.getReadyPlayers();
	            });

	            clearInterval(this.abc);
	        }

	    }
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "frmStartMulti"
	  }, [_c('h2', [_vm._v("Active user in room")]), _vm._v(" "), _c('ol', _vm._l((_vm.ReadyPlayers), function(player) {
	    return _c('li', {
	      staticClass: "span1"
	    }, [_vm._v(_vm._s(player.user.username))])
	  })), _vm._v(" "), _vm._m(0), _vm._v(" "), (_vm.bool && !_vm.loading) ? _c('div', {
	    staticClass: "ftmRight"
	  }, [_c('router-link', {
	    attrs: {
	      "to": "/game-multiplayer"
	    }
	  }, [_c('button', {
	    staticClass: "buton3"
	  }, [_vm._v("Start game")])])], 1) : _vm._e()])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "loading"
	  }, [_c('i', {
	    staticClass: "fa fa-circle-o-notch fa-spin fa-3x fa-fw"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "sr-only"
	  }, [_vm._v("Loading...")])])
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3774bcc6", module.exports)
	  }
	}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(56)

	/* script */
	__vue_exports__ = __webpack_require__(58)

	/* template */
	var __vue_template__ = __webpack_require__(59)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Triumf\\Desktop\\VueJS 2 project\\qellume fixume multiplayer\\resources\\admin\\components\\Game_Multi_Player.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-501a6515", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-501a6515", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Game_Multi_Player.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-501a6515!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Game_Multi_Player.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-501a6515!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Game_Multi_Player.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {

	    data: function data() {
	        return {
	            players: [],
	            tries: [],
	            order: 0,

	            tryinfo: [],
	            inputTry: null,
	            bool: false,
	            room_id: 0,
	            game_order: [],

	            initGameInRoom: []
	        };
	    },

	    created: function created() {

	        // this.getPlayersInRoom();


	        // this.initGameInRoom = setInterval(function () {
	        //     if(this.$store.state.game.order!=null && this.order!=null && this.$store.state.room.id)
	        //     {
	        //         this.initGame();
	        //     }

	        // }.bind(this), 100);
	        // // this.GetRoomOrder();
	        // // this.getTries(); 

	        // // this.interval_RoomID = setInterval(function () {
	        // //       if(this.$store.state.room != null)
	        // //       {   
	        // //           this.initGame();

	        // //       }

	        // // }.bind(this), 10);

	    },
	    mounted: function mounted() {

	        this.getTries();

	        this.initGameInRoom = setInterval(function () {
	            if (this.$store.state.game.order != null && this.order != 0 && this.$store.state.room.id) {
	                this.initGame();
	            }
	        }.bind(this), 100);

	        // Echo.private(`channel_getOrderInRoom`)
	        //     .listen('getOrderInRoom', (e) => {
	        //          console.log("asdad");
	        //          this.getTries();

	        //     });

	        // this.getTries();
	        this.GetRoomOrder();
	        this.getPlayersInRoom();
	    },


	    methods: {

	        getTries: function getTries() {
	            this.$http.get('getGameTries/' + this.$store.state.room.id).then(function (response) {
	                this.tries = response.data;
	            });
	        },

	        getPlayersInRoom: function getPlayersInRoom() {
	            this.$http.get('getReadyPlayers/' + this.$store.state.room.id).then(function (response) {
	                this.players = response.data;
	            });
	        },

	        SendTry: function SendTry() {

	            this.bool = false;
	            this.tryinfo.push({
	                number: this.inputTry,
	                game_id: this.$store.state.game.id,
	                lengthNumber: this.$store.state.room.number.toString().length
	            });

	            this.$http.post('/try', this.tryinfo[this.tryinfo.length - 1]).then(function (response) {
	                if (response.data.fitore) {
	                    console.log('ju keni Triumfuar!');
	                }
	            });

	            console.log('dadadad');
	        },

	        GetRoomOrder: function GetRoomOrder(response) {
	            this.$http.get('getRoom/' + this.$store.state.room.id).then(function (response) {
	                this.order = response.data.orders;
	                this.bool = this.$store.state.game.order == this.order;
	                console.log(this.order);
	            });
	        },

	        initGame: function initGame() {
	            var _this = this;

	            this.GetRoomOrder();

	            this.room_id = this.$store.state.room.id;
	            this.game_order = this.$store.state.game.order;
	            this.bool = this.$store.state.game.order == this.order;

	            console.log(this.room_id);

	            Echo.private('channel_getTries.' + this.room_id).listen('getTries', function (e) {
	                console.log("asdad");
	                _this.getTries();
	                _this.GetRoomOrder();
	            });

	            clearInterval(this.initGameInRoom);
	        }
	    }

	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "multiGame"
	  }, [_c('div', {
	    staticClass: "inputItem"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputTry),
	      expression: "inputTry"
	    }],
	    staticClass: "tryNumber input1",
	    attrs: {
	      "type": "number",
	      "name": "tryNumber"
	    },
	    domProps: {
	      "value": (_vm.inputTry)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.inputTry = $event.target.value
	      }
	    }
	  }), _vm._v(" "), (_vm.bool) ? _c('input', {
	    staticClass: "buton4",
	    attrs: {
	      "type": "submit",
	      "name": ""
	    },
	    on: {
	      "click": function($event) {
	        _vm.SendTry()
	      }
	    }
	  }) : _vm._e()]), _vm._v(" "), _c('div', {
	    staticClass: "tentimet"
	  }, _vm._l((_vm.tries), function(tryy) {
	    return _c('h4', {
	      staticClass: "span1"
	    }, [_vm._v("\r\n\t\t" + _vm._s(tryy.tentimi) + " " + _vm._s(tryy.message))])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "players"
	  }, [_c('h3', [_vm._v("Players")]), _vm._v(" "), _c('ol', _vm._l((_vm.players), function(player) {
	    return _c('li', [_vm._v(_vm._s(player.user.username))])
	  }))])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-501a6515", module.exports)
	  }
	}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		show: function show(type, message) {
			switch (type) {
				case "success":
					toastr.success(message);
					break;
				case "warning":
					toastr.warning(message);
					break;
				case "error":
					toastr.error(message);
					break;
			}
		}
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.store = undefined;

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(62);

	var _vuex2 = _interopRequireDefault(_vuex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vuex2.default);

	var store = exports.store = new _vuex2.default.Store({
	  state: {
	    playersInRoom: [],
	    idRoom: [],
	    user: "Triumf ",

	    room: null,
	    game: [],

	    msg: null,
	    qelluar: null,
	    boolean: true

	  },

	  mutations: {
	    setRoom: function setRoom(state, room) {
	      state.room = room;
	    },
	    setGame: function setGame(state, game) {
	      state.game = game;
	    },
	    setMsg: function setMsg(state, msg) {
	      state.msg = msg;
	    },
	    setBoolean: function setBoolean(state, boolean) {
	      state.boolean = boolean;
	    }
	  }
	  // getters: {
	  //     getRoom(state) {
	  //         return 
	  //     }
	  // }

	});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * vuex v2.5.0
	 * (c) 2017 Evan You
	 * @license MIT
	 */
	'use strict';

	var applyMixin = function (Vue) {
	  var version = Number(Vue.version.split('.')[0]);

	  if (version >= 2) {
	    Vue.mixin({ beforeCreate: vuexInit });
	  } else {
	    // override init and inject vuex init procedure
	    // for 1.x backwards compatibility.
	    var _init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      if ( options === void 0 ) options = {};

	      options.init = options.init
	        ? [vuexInit].concat(options.init)
	        : vuexInit;
	      _init.call(this, options);
	    };
	  }

	  /**
	   * Vuex init hook, injected into each instances init hooks list.
	   */

	  function vuexInit () {
	    var options = this.$options;
	    // store injection
	    if (options.store) {
	      this.$store = typeof options.store === 'function'
	        ? options.store()
	        : options.store;
	    } else if (options.parent && options.parent.$store) {
	      this.$store = options.parent.$store;
	    }
	  }
	};

	var devtoolHook =
	  typeof window !== 'undefined' &&
	  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	function devtoolPlugin (store) {
	  if (!devtoolHook) { return }

	  store._devtoolHook = devtoolHook;

	  devtoolHook.emit('vuex:init', store);

	  devtoolHook.on('vuex:travel-to-state', function (targetState) {
	    store.replaceState(targetState);
	  });

	  store.subscribe(function (mutation, state) {
	    devtoolHook.emit('vuex:mutation', mutation, state);
	  });
	}

	/**
	 * Get the first item that pass the test
	 * by second argument function
	 *
	 * @param {Array} list
	 * @param {Function} f
	 * @return {*}
	 */
	/**
	 * Deep copy the given object considering circular structure.
	 * This function caches all nested objects and its copies.
	 * If it detects circular structure, use cached copy to avoid infinite loop.
	 *
	 * @param {*} obj
	 * @param {Array<Object>} cache
	 * @return {*}
	 */


	/**
	 * forEach for object
	 */
	function forEachValue (obj, fn) {
	  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
	}

	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	function isPromise (val) {
	  return val && typeof val.then === 'function'
	}

	function assert (condition, msg) {
	  if (!condition) { throw new Error(("[vuex] " + msg)) }
	}

	var Module = function Module (rawModule, runtime) {
	  this.runtime = runtime;
	  this._children = Object.create(null);
	  this._rawModule = rawModule;
	  var rawState = rawModule.state;
	  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
	};

	var prototypeAccessors$1 = { namespaced: { configurable: true } };

	prototypeAccessors$1.namespaced.get = function () {
	  return !!this._rawModule.namespaced
	};

	Module.prototype.addChild = function addChild (key, module) {
	  this._children[key] = module;
	};

	Module.prototype.removeChild = function removeChild (key) {
	  delete this._children[key];
	};

	Module.prototype.getChild = function getChild (key) {
	  return this._children[key]
	};

	Module.prototype.update = function update (rawModule) {
	  this._rawModule.namespaced = rawModule.namespaced;
	  if (rawModule.actions) {
	    this._rawModule.actions = rawModule.actions;
	  }
	  if (rawModule.mutations) {
	    this._rawModule.mutations = rawModule.mutations;
	  }
	  if (rawModule.getters) {
	    this._rawModule.getters = rawModule.getters;
	  }
	};

	Module.prototype.forEachChild = function forEachChild (fn) {
	  forEachValue(this._children, fn);
	};

	Module.prototype.forEachGetter = function forEachGetter (fn) {
	  if (this._rawModule.getters) {
	    forEachValue(this._rawModule.getters, fn);
	  }
	};

	Module.prototype.forEachAction = function forEachAction (fn) {
	  if (this._rawModule.actions) {
	    forEachValue(this._rawModule.actions, fn);
	  }
	};

	Module.prototype.forEachMutation = function forEachMutation (fn) {
	  if (this._rawModule.mutations) {
	    forEachValue(this._rawModule.mutations, fn);
	  }
	};

	Object.defineProperties( Module.prototype, prototypeAccessors$1 );

	var ModuleCollection = function ModuleCollection (rawRootModule) {
	  // register root module (Vuex.Store options)
	  this.register([], rawRootModule, false);
	};

	ModuleCollection.prototype.get = function get (path) {
	  return path.reduce(function (module, key) {
	    return module.getChild(key)
	  }, this.root)
	};

	ModuleCollection.prototype.getNamespace = function getNamespace (path) {
	  var module = this.root;
	  return path.reduce(function (namespace, key) {
	    module = module.getChild(key);
	    return namespace + (module.namespaced ? key + '/' : '')
	  }, '')
	};

	ModuleCollection.prototype.update = function update$1 (rawRootModule) {
	  update([], this.root, rawRootModule);
	};

	ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
	    var this$1 = this;
	    if ( runtime === void 0 ) runtime = true;

	  if (process.env.NODE_ENV !== 'production') {
	    assertRawModule(path, rawModule);
	  }

	  var newModule = new Module(rawModule, runtime);
	  if (path.length === 0) {
	    this.root = newModule;
	  } else {
	    var parent = this.get(path.slice(0, -1));
	    parent.addChild(path[path.length - 1], newModule);
	  }

	  // register nested modules
	  if (rawModule.modules) {
	    forEachValue(rawModule.modules, function (rawChildModule, key) {
	      this$1.register(path.concat(key), rawChildModule, runtime);
	    });
	  }
	};

	ModuleCollection.prototype.unregister = function unregister (path) {
	  var parent = this.get(path.slice(0, -1));
	  var key = path[path.length - 1];
	  if (!parent.getChild(key).runtime) { return }

	  parent.removeChild(key);
	};

	function update (path, targetModule, newModule) {
	  if (process.env.NODE_ENV !== 'production') {
	    assertRawModule(path, newModule);
	  }

	  // update target module
	  targetModule.update(newModule);

	  // update nested modules
	  if (newModule.modules) {
	    for (var key in newModule.modules) {
	      if (!targetModule.getChild(key)) {
	        if (process.env.NODE_ENV !== 'production') {
	          console.warn(
	            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
	            'manual reload is needed'
	          );
	        }
	        return
	      }
	      update(
	        path.concat(key),
	        targetModule.getChild(key),
	        newModule.modules[key]
	      );
	    }
	  }
	}

	var functionAssert = {
	  assert: function (value) { return typeof value === 'function'; },
	  expected: 'function'
	};

	var objectAssert = {
	  assert: function (value) { return typeof value === 'function' ||
	    (typeof value === 'object' && typeof value.handler === 'function'); },
	  expected: 'function or object with "handler" function'
	};

	var assertTypes = {
	  getters: functionAssert,
	  mutations: functionAssert,
	  actions: objectAssert
	};

	function assertRawModule (path, rawModule) {
	  Object.keys(assertTypes).forEach(function (key) {
	    if (!rawModule[key]) { return }

	    var assertOptions = assertTypes[key];

	    forEachValue(rawModule[key], function (value, type) {
	      assert(
	        assertOptions.assert(value),
	        makeAssertionMessage(path, key, type, value, assertOptions.expected)
	      );
	    });
	  });
	}

	function makeAssertionMessage (path, key, type, value, expected) {
	  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
	  if (path.length > 0) {
	    buf += " in module \"" + (path.join('.')) + "\"";
	  }
	  buf += " is " + (JSON.stringify(value)) + ".";
	  return buf
	}

	var Vue; // bind on install

	var Store = function Store (options) {
	  var this$1 = this;
	  if ( options === void 0 ) options = {};

	  // Auto install if it is not done yet and `window` has `Vue`.
	  // To allow users to avoid auto-installation in some cases,
	  // this code should be placed here. See #731
	  if (!Vue && typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
	    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
	    assert(this instanceof Store, "Store must be called with the new operator.");
	  }

	  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
	  var strict = options.strict; if ( strict === void 0 ) strict = false;

	  var state = options.state; if ( state === void 0 ) state = {};
	  if (typeof state === 'function') {
	    state = state() || {};
	  }

	  // store internal state
	  this._committing = false;
	  this._actions = Object.create(null);
	  this._actionSubscribers = [];
	  this._mutations = Object.create(null);
	  this._wrappedGetters = Object.create(null);
	  this._modules = new ModuleCollection(options);
	  this._modulesNamespaceMap = Object.create(null);
	  this._subscribers = [];
	  this._watcherVM = new Vue();

	  // bind commit and dispatch to self
	  var store = this;
	  var ref = this;
	  var dispatch = ref.dispatch;
	  var commit = ref.commit;
	  this.dispatch = function boundDispatch (type, payload) {
	    return dispatch.call(store, type, payload)
	  };
	  this.commit = function boundCommit (type, payload, options) {
	    return commit.call(store, type, payload, options)
	  };

	  // strict mode
	  this.strict = strict;

	  // init root module.
	  // this also recursively registers all sub-modules
	  // and collects all module getters inside this._wrappedGetters
	  installModule(this, state, [], this._modules.root);

	  // initialize the store vm, which is responsible for the reactivity
	  // (also registers _wrappedGetters as computed properties)
	  resetStoreVM(this, state);

	  // apply plugins
	  plugins.forEach(function (plugin) { return plugin(this$1); });

	  if (Vue.config.devtools) {
	    devtoolPlugin(this);
	  }
	};

	var prototypeAccessors = { state: { configurable: true } };

	prototypeAccessors.state.get = function () {
	  return this._vm._data.$$state
	};

	prototypeAccessors.state.set = function (v) {
	  if (process.env.NODE_ENV !== 'production') {
	    assert(false, "Use store.replaceState() to explicit replace store state.");
	  }
	};

	Store.prototype.commit = function commit (_type, _payload, _options) {
	    var this$1 = this;

	  // check object-style commit
	  var ref = unifyObjectStyle(_type, _payload, _options);
	    var type = ref.type;
	    var payload = ref.payload;
	    var options = ref.options;

	  var mutation = { type: type, payload: payload };
	  var entry = this._mutations[type];
	  if (!entry) {
	    if (process.env.NODE_ENV !== 'production') {
	      console.error(("[vuex] unknown mutation type: " + type));
	    }
	    return
	  }
	  this._withCommit(function () {
	    entry.forEach(function commitIterator (handler) {
	      handler(payload);
	    });
	  });
	  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

	  if (
	    process.env.NODE_ENV !== 'production' &&
	    options && options.silent
	  ) {
	    console.warn(
	      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
	      'Use the filter functionality in the vue-devtools'
	    );
	  }
	};

	Store.prototype.dispatch = function dispatch (_type, _payload) {
	    var this$1 = this;

	  // check object-style dispatch
	  var ref = unifyObjectStyle(_type, _payload);
	    var type = ref.type;
	    var payload = ref.payload;

	  var action = { type: type, payload: payload };
	  var entry = this._actions[type];
	  if (!entry) {
	    if (process.env.NODE_ENV !== 'production') {
	      console.error(("[vuex] unknown action type: " + type));
	    }
	    return
	  }

	  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

	  return entry.length > 1
	    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
	    : entry[0](payload)
	};

	Store.prototype.subscribe = function subscribe (fn) {
	  return genericSubscribe(fn, this._subscribers)
	};

	Store.prototype.subscribeAction = function subscribeAction (fn) {
	  return genericSubscribe(fn, this._actionSubscribers)
	};

	Store.prototype.watch = function watch (getter, cb, options) {
	    var this$1 = this;

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof getter === 'function', "store.watch only accepts a function.");
	  }
	  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
	};

	Store.prototype.replaceState = function replaceState (state) {
	    var this$1 = this;

	  this._withCommit(function () {
	    this$1._vm._data.$$state = state;
	  });
	};

	Store.prototype.registerModule = function registerModule (path, rawModule, options) {
	    if ( options === void 0 ) options = {};

	  if (typeof path === 'string') { path = [path]; }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(Array.isArray(path), "module path must be a string or an Array.");
	    assert(path.length > 0, 'cannot register the root module by using registerModule.');
	  }

	  this._modules.register(path, rawModule);
	  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
	  // reset store to update getters...
	  resetStoreVM(this, this.state);
	};

	Store.prototype.unregisterModule = function unregisterModule (path) {
	    var this$1 = this;

	  if (typeof path === 'string') { path = [path]; }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(Array.isArray(path), "module path must be a string or an Array.");
	  }

	  this._modules.unregister(path);
	  this._withCommit(function () {
	    var parentState = getNestedState(this$1.state, path.slice(0, -1));
	    Vue.delete(parentState, path[path.length - 1]);
	  });
	  resetStore(this);
	};

	Store.prototype.hotUpdate = function hotUpdate (newOptions) {
	  this._modules.update(newOptions);
	  resetStore(this, true);
	};

	Store.prototype._withCommit = function _withCommit (fn) {
	  var committing = this._committing;
	  this._committing = true;
	  fn();
	  this._committing = committing;
	};

	Object.defineProperties( Store.prototype, prototypeAccessors );

	function genericSubscribe (fn, subs) {
	  if (subs.indexOf(fn) < 0) {
	    subs.push(fn);
	  }
	  return function () {
	    var i = subs.indexOf(fn);
	    if (i > -1) {
	      subs.splice(i, 1);
	    }
	  }
	}

	function resetStore (store, hot) {
	  store._actions = Object.create(null);
	  store._mutations = Object.create(null);
	  store._wrappedGetters = Object.create(null);
	  store._modulesNamespaceMap = Object.create(null);
	  var state = store.state;
	  // init all modules
	  installModule(store, state, [], store._modules.root, true);
	  // reset vm
	  resetStoreVM(store, state, hot);
	}

	function resetStoreVM (store, state, hot) {
	  var oldVm = store._vm;

	  // bind store public getters
	  store.getters = {};
	  var wrappedGetters = store._wrappedGetters;
	  var computed = {};
	  forEachValue(wrappedGetters, function (fn, key) {
	    // use computed to leverage its lazy-caching mechanism
	    computed[key] = function () { return fn(store); };
	    Object.defineProperty(store.getters, key, {
	      get: function () { return store._vm[key]; },
	      enumerable: true // for local getters
	    });
	  });

	  // use a Vue instance to store the state tree
	  // suppress warnings just in case the user has added
	  // some funky global mixins
	  var silent = Vue.config.silent;
	  Vue.config.silent = true;
	  store._vm = new Vue({
	    data: {
	      $$state: state
	    },
	    computed: computed
	  });
	  Vue.config.silent = silent;

	  // enable strict mode for new vm
	  if (store.strict) {
	    enableStrictMode(store);
	  }

	  if (oldVm) {
	    if (hot) {
	      // dispatch changes in all subscribed watchers
	      // to force getter re-evaluation for hot reloading.
	      store._withCommit(function () {
	        oldVm._data.$$state = null;
	      });
	    }
	    Vue.nextTick(function () { return oldVm.$destroy(); });
	  }
	}

	function installModule (store, rootState, path, module, hot) {
	  var isRoot = !path.length;
	  var namespace = store._modules.getNamespace(path);

	  // register in namespace map
	  if (module.namespaced) {
	    store._modulesNamespaceMap[namespace] = module;
	  }

	  // set state
	  if (!isRoot && !hot) {
	    var parentState = getNestedState(rootState, path.slice(0, -1));
	    var moduleName = path[path.length - 1];
	    store._withCommit(function () {
	      Vue.set(parentState, moduleName, module.state);
	    });
	  }

	  var local = module.context = makeLocalContext(store, namespace, path);

	  module.forEachMutation(function (mutation, key) {
	    var namespacedType = namespace + key;
	    registerMutation(store, namespacedType, mutation, local);
	  });

	  module.forEachAction(function (action, key) {
	    var type = action.root ? key : namespace + key;
	    var handler = action.handler || action;
	    registerAction(store, type, handler, local);
	  });

	  module.forEachGetter(function (getter, key) {
	    var namespacedType = namespace + key;
	    registerGetter(store, namespacedType, getter, local);
	  });

	  module.forEachChild(function (child, key) {
	    installModule(store, rootState, path.concat(key), child, hot);
	  });
	}

	/**
	 * make localized dispatch, commit, getters and state
	 * if there is no namespace, just use root ones
	 */
	function makeLocalContext (store, namespace, path) {
	  var noNamespace = namespace === '';

	  var local = {
	    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options);
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;

	      if (!options || !options.root) {
	        type = namespace + type;
	        if (process.env.NODE_ENV !== 'production' && !store._actions[type]) {
	          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
	          return
	        }
	      }

	      return store.dispatch(type, payload)
	    },

	    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options);
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;

	      if (!options || !options.root) {
	        type = namespace + type;
	        if (process.env.NODE_ENV !== 'production' && !store._mutations[type]) {
	          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
	          return
	        }
	      }

	      store.commit(type, payload, options);
	    }
	  };

	  // getters and state object must be gotten lazily
	  // because they will be changed by vm update
	  Object.defineProperties(local, {
	    getters: {
	      get: noNamespace
	        ? function () { return store.getters; }
	        : function () { return makeLocalGetters(store, namespace); }
	    },
	    state: {
	      get: function () { return getNestedState(store.state, path); }
	    }
	  });

	  return local
	}

	function makeLocalGetters (store, namespace) {
	  var gettersProxy = {};

	  var splitPos = namespace.length;
	  Object.keys(store.getters).forEach(function (type) {
	    // skip if the target getter is not match this namespace
	    if (type.slice(0, splitPos) !== namespace) { return }

	    // extract local getter type
	    var localType = type.slice(splitPos);

	    // Add a port to the getters proxy.
	    // Define as getter property because
	    // we do not want to evaluate the getters in this time.
	    Object.defineProperty(gettersProxy, localType, {
	      get: function () { return store.getters[type]; },
	      enumerable: true
	    });
	  });

	  return gettersProxy
	}

	function registerMutation (store, type, handler, local) {
	  var entry = store._mutations[type] || (store._mutations[type] = []);
	  entry.push(function wrappedMutationHandler (payload) {
	    handler.call(store, local.state, payload);
	  });
	}

	function registerAction (store, type, handler, local) {
	  var entry = store._actions[type] || (store._actions[type] = []);
	  entry.push(function wrappedActionHandler (payload, cb) {
	    var res = handler.call(store, {
	      dispatch: local.dispatch,
	      commit: local.commit,
	      getters: local.getters,
	      state: local.state,
	      rootGetters: store.getters,
	      rootState: store.state
	    }, payload, cb);
	    if (!isPromise(res)) {
	      res = Promise.resolve(res);
	    }
	    if (store._devtoolHook) {
	      return res.catch(function (err) {
	        store._devtoolHook.emit('vuex:error', err);
	        throw err
	      })
	    } else {
	      return res
	    }
	  });
	}

	function registerGetter (store, type, rawGetter, local) {
	  if (store._wrappedGetters[type]) {
	    if (process.env.NODE_ENV !== 'production') {
	      console.error(("[vuex] duplicate getter key: " + type));
	    }
	    return
	  }
	  store._wrappedGetters[type] = function wrappedGetter (store) {
	    return rawGetter(
	      local.state, // local state
	      local.getters, // local getters
	      store.state, // root state
	      store.getters // root getters
	    )
	  };
	}

	function enableStrictMode (store) {
	  store._vm.$watch(function () { return this._data.$$state }, function () {
	    if (process.env.NODE_ENV !== 'production') {
	      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
	    }
	  }, { deep: true, sync: true });
	}

	function getNestedState (state, path) {
	  return path.length
	    ? path.reduce(function (state, key) { return state[key]; }, state)
	    : state
	}

	function unifyObjectStyle (type, payload, options) {
	  if (isObject(type) && type.type) {
	    options = payload;
	    payload = type;
	    type = type.type;
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
	  }

	  return { type: type, payload: payload, options: options }
	}

	function install (_Vue) {
	  if (Vue && _Vue === Vue) {
	    if (process.env.NODE_ENV !== 'production') {
	      console.error(
	        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
	      );
	    }
	    return
	  }
	  Vue = _Vue;
	  applyMixin(Vue);
	}

	var mapState = normalizeNamespace(function (namespace, states) {
	  var res = {};
	  normalizeMap(states).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedState () {
	      var state = this.$store.state;
	      var getters = this.$store.getters;
	      if (namespace) {
	        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
	        if (!module) {
	          return
	        }
	        state = module.context.state;
	        getters = module.context.getters;
	      }
	      return typeof val === 'function'
	        ? val.call(this, state, getters)
	        : state[val]
	    };
	    // mark vuex getter for devtools
	    res[key].vuex = true;
	  });
	  return res
	});

	var mapMutations = normalizeNamespace(function (namespace, mutations) {
	  var res = {};
	  normalizeMap(mutations).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedMutation () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      var commit = this.$store.commit;
	      if (namespace) {
	        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
	        if (!module) {
	          return
	        }
	        commit = module.context.commit;
	      }
	      return typeof val === 'function'
	        ? val.apply(this, [commit].concat(args))
	        : commit.apply(this.$store, [val].concat(args))
	    };
	  });
	  return res
	});

	var mapGetters = normalizeNamespace(function (namespace, getters) {
	  var res = {};
	  normalizeMap(getters).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val;
	    res[key] = function mappedGetter () {
	      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
	        return
	      }
	      if (process.env.NODE_ENV !== 'production' && !(val in this.$store.getters)) {
	        console.error(("[vuex] unknown getter: " + val));
	        return
	      }
	      return this.$store.getters[val]
	    };
	    // mark vuex getter for devtools
	    res[key].vuex = true;
	  });
	  return res
	});

	var mapActions = normalizeNamespace(function (namespace, actions) {
	  var res = {};
	  normalizeMap(actions).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedAction () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      var dispatch = this.$store.dispatch;
	      if (namespace) {
	        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
	        if (!module) {
	          return
	        }
	        dispatch = module.context.dispatch;
	      }
	      return typeof val === 'function'
	        ? val.apply(this, [dispatch].concat(args))
	        : dispatch.apply(this.$store, [val].concat(args))
	    };
	  });
	  return res
	});

	var createNamespacedHelpers = function (namespace) { return ({
	  mapState: mapState.bind(null, namespace),
	  mapGetters: mapGetters.bind(null, namespace),
	  mapMutations: mapMutations.bind(null, namespace),
	  mapActions: mapActions.bind(null, namespace)
	}); };

	function normalizeMap (map) {
	  return Array.isArray(map)
	    ? map.map(function (key) { return ({ key: key, val: key }); })
	    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
	}

	function normalizeNamespace (fn) {
	  return function (namespace, map) {
	    if (typeof namespace !== 'string') {
	      map = namespace;
	      namespace = '';
	    } else if (namespace.charAt(namespace.length - 1) !== '/') {
	      namespace += '/';
	    }
	    return fn(namespace, map)
	  }
	}

	function getModuleByNamespace (store, helper, namespace) {
	  var module = store._modulesNamespaceMap[namespace];
	  if (process.env.NODE_ENV !== 'production' && !module) {
	    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
	  }
	  return module
	}

	var index = {
	  Store: Store,
	  install: install,
	  version: '2.5.0',
	  mapState: mapState,
	  mapMutations: mapMutations,
	  mapGetters: mapGetters,
	  mapActions: mapActions,
	  createNamespacedHelpers: createNamespacedHelpers
	};

	module.exports = index;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	var asyncGenerator = function () {
	  function AwaitValue(value) {
	    this.value = value;
	  }

	  function AsyncGenerator(gen) {
	    var front, back;

	    function send(key, arg) {
	      return new Promise(function (resolve, reject) {
	        var request = {
	          key: key,
	          arg: arg,
	          resolve: resolve,
	          reject: reject,
	          next: null
	        };

	        if (back) {
	          back = back.next = request;
	        } else {
	          front = back = request;
	          resume(key, arg);
	        }
	      });
	    }

	    function resume(key, arg) {
	      try {
	        var result = gen[key](arg);
	        var value = result.value;

	        if (value instanceof AwaitValue) {
	          Promise.resolve(value.value).then(function (arg) {
	            resume("next", arg);
	          }, function (arg) {
	            resume("throw", arg);
	          });
	        } else {
	          settle(result.done ? "return" : "normal", result.value);
	        }
	      } catch (err) {
	        settle("throw", err);
	      }
	    }

	    function settle(type, value) {
	      switch (type) {
	        case "return":
	          front.resolve({
	            value: value,
	            done: true
	          });
	          break;

	        case "throw":
	          front.reject(value);
	          break;

	        default:
	          front.resolve({
	            value: value,
	            done: false
	          });
	          break;
	      }

	      front = front.next;

	      if (front) {
	        resume(front.key, front.arg);
	      } else {
	        back = null;
	      }
	    }

	    this._invoke = send;

	    if (typeof gen.return !== "function") {
	      this.return = undefined;
	    }
	  }

	  if (typeof Symbol === "function" && Symbol.asyncIterator) {
	    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
	      return this;
	    };
	  }

	  AsyncGenerator.prototype.next = function (arg) {
	    return this._invoke("next", arg);
	  };

	  AsyncGenerator.prototype.throw = function (arg) {
	    return this._invoke("throw", arg);
	  };

	  AsyncGenerator.prototype.return = function (arg) {
	    return this._invoke("return", arg);
	  };

	  return {
	    wrap: function (fn) {
	      return function () {
	        return new AsyncGenerator(fn.apply(this, arguments));
	      };
	    },
	    await: function (value) {
	      return new AwaitValue(value);
	    }
	  };
	}();

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	var Connector = function () {
	    function Connector(options) {
	        classCallCheck(this, Connector);

	        this._defaultOptions = {
	            auth: {
	                headers: {}
	            },
	            authEndpoint: '/broadcasting/auth',
	            broadcaster: 'pusher',
	            csrfToken: null,
	            host: null,
	            key: null,
	            namespace: 'App.Events'
	        };
	        this.setOptions(options);
	        this.connect();
	    }

	    createClass(Connector, [{
	        key: 'setOptions',
	        value: function setOptions(options) {
	            this.options = _extends(this._defaultOptions, options);
	            if (this.csrfToken()) {
	                this.options.auth.headers['X-CSRF-TOKEN'] = this.csrfToken();
	            }
	            return options;
	        }
	    }, {
	        key: 'csrfToken',
	        value: function csrfToken() {
	            var selector = void 0;
	            if (window && window['Laravel'] && window['Laravel'].csrfToken) {
	                return window['Laravel'].csrfToken;
	            } else if (this.options.csrfToken) {
	                return this.options.csrfToken;
	            } else if (typeof document !== 'undefined' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
	                return selector.getAttribute('content');
	            }
	            return null;
	        }
	    }]);
	    return Connector;
	}();

	var Channel = function () {
	    function Channel() {
	        classCallCheck(this, Channel);
	    }

	    createClass(Channel, [{
	        key: 'notification',
	        value: function notification(callback) {
	            return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
	        }
	    }, {
	        key: 'listenForWhisper',
	        value: function listenForWhisper(event, callback) {
	            return this.listen('.client-' + event, callback);
	        }
	    }]);
	    return Channel;
	}();

	var EventFormatter = function () {
	    function EventFormatter(namespace) {
	        classCallCheck(this, EventFormatter);

	        this.setNamespace(namespace);
	    }

	    createClass(EventFormatter, [{
	        key: 'format',
	        value: function format(event) {
	            if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
	                return event.substr(1);
	            } else if (this.namespace) {
	                event = this.namespace + '.' + event;
	            }
	            return event.replace(/\./g, '\\');
	        }
	    }, {
	        key: 'setNamespace',
	        value: function setNamespace(value) {
	            this.namespace = value;
	        }
	    }]);
	    return EventFormatter;
	}();

	var PusherChannel = function (_Channel) {
	    inherits(PusherChannel, _Channel);

	    function PusherChannel(pusher, name, options) {
	        classCallCheck(this, PusherChannel);

	        var _this = possibleConstructorReturn(this, (PusherChannel.__proto__ || Object.getPrototypeOf(PusherChannel)).call(this));

	        _this.name = name;
	        _this.pusher = pusher;
	        _this.options = options;
	        _this.eventFormatter = new EventFormatter(_this.options.namespace);
	        _this.subscribe();
	        return _this;
	    }

	    createClass(PusherChannel, [{
	        key: 'subscribe',
	        value: function subscribe() {
	            this.subscription = this.pusher.subscribe(this.name);
	        }
	    }, {
	        key: 'unsubscribe',
	        value: function unsubscribe() {
	            this.pusher.unsubscribe(this.name);
	        }
	    }, {
	        key: 'listen',
	        value: function listen(event, callback) {
	            this.on(this.eventFormatter.format(event), callback);
	            return this;
	        }
	    }, {
	        key: 'stopListening',
	        value: function stopListening(event) {
	            this.subscription.unbind(this.eventFormatter.format(event));
	            return this;
	        }
	    }, {
	        key: 'on',
	        value: function on(event, callback) {
	            this.subscription.bind(event, callback);
	            return this;
	        }
	    }]);
	    return PusherChannel;
	}(Channel);

	var PusherPrivateChannel = function (_PusherChannel) {
	    inherits(PusherPrivateChannel, _PusherChannel);

	    function PusherPrivateChannel() {
	        classCallCheck(this, PusherPrivateChannel);
	        return possibleConstructorReturn(this, (PusherPrivateChannel.__proto__ || Object.getPrototypeOf(PusherPrivateChannel)).apply(this, arguments));
	    }

	    createClass(PusherPrivateChannel, [{
	        key: 'whisper',
	        value: function whisper(eventName, data) {
	            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
	            return this;
	        }
	    }]);
	    return PusherPrivateChannel;
	}(PusherChannel);

	var PusherPresenceChannel = function (_PusherChannel) {
	    inherits(PusherPresenceChannel, _PusherChannel);

	    function PusherPresenceChannel() {
	        classCallCheck(this, PusherPresenceChannel);
	        return possibleConstructorReturn(this, (PusherPresenceChannel.__proto__ || Object.getPrototypeOf(PusherPresenceChannel)).apply(this, arguments));
	    }

	    createClass(PusherPresenceChannel, [{
	        key: 'here',
	        value: function here(callback) {
	            this.on('pusher:subscription_succeeded', function (data) {
	                callback(Object.keys(data.members).map(function (k) {
	                    return data.members[k];
	                }));
	            });
	            return this;
	        }
	    }, {
	        key: 'joining',
	        value: function joining(callback) {
	            this.on('pusher:member_added', function (member) {
	                callback(member.info);
	            });
	            return this;
	        }
	    }, {
	        key: 'leaving',
	        value: function leaving(callback) {
	            this.on('pusher:member_removed', function (member) {
	                callback(member.info);
	            });
	            return this;
	        }
	    }, {
	        key: 'whisper',
	        value: function whisper(eventName, data) {
	            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
	            return this;
	        }
	    }]);
	    return PusherPresenceChannel;
	}(PusherChannel);

	var SocketIoChannel = function (_Channel) {
	    inherits(SocketIoChannel, _Channel);

	    function SocketIoChannel(socket, name, options) {
	        classCallCheck(this, SocketIoChannel);

	        var _this = possibleConstructorReturn(this, (SocketIoChannel.__proto__ || Object.getPrototypeOf(SocketIoChannel)).call(this));

	        _this.events = {};
	        _this.name = name;
	        _this.socket = socket;
	        _this.options = options;
	        _this.eventFormatter = new EventFormatter(_this.options.namespace);
	        _this.subscribe();
	        _this.configureReconnector();
	        return _this;
	    }

	    createClass(SocketIoChannel, [{
	        key: 'subscribe',
	        value: function subscribe() {
	            this.socket.emit('subscribe', {
	                channel: this.name,
	                auth: this.options.auth || {}
	            });
	        }
	    }, {
	        key: 'unsubscribe',
	        value: function unsubscribe() {
	            this.unbind();
	            this.socket.emit('unsubscribe', {
	                channel: this.name,
	                auth: this.options.auth || {}
	            });
	        }
	    }, {
	        key: 'listen',
	        value: function listen(event, callback) {
	            this.on(this.eventFormatter.format(event), callback);
	            return this;
	        }
	    }, {
	        key: 'on',
	        value: function on(event, callback) {
	            var _this2 = this;

	            var listener = function listener(channel, data) {
	                if (_this2.name == channel) {
	                    callback(data);
	                }
	            };
	            this.socket.on(event, listener);
	            this.bind(event, listener);
	        }
	    }, {
	        key: 'configureReconnector',
	        value: function configureReconnector() {
	            var _this3 = this;

	            var listener = function listener() {
	                _this3.subscribe();
	            };
	            this.socket.on('reconnect', listener);
	            this.bind('reconnect', listener);
	        }
	    }, {
	        key: 'bind',
	        value: function bind(event, callback) {
	            this.events[event] = this.events[event] || [];
	            this.events[event].push(callback);
	        }
	    }, {
	        key: 'unbind',
	        value: function unbind() {
	            var _this4 = this;

	            Object.keys(this.events).forEach(function (event) {
	                _this4.events[event].forEach(function (callback) {
	                    _this4.socket.removeListener(event, callback);
	                });
	                delete _this4.events[event];
	            });
	        }
	    }]);
	    return SocketIoChannel;
	}(Channel);

	var SocketIoPrivateChannel = function (_SocketIoChannel) {
	    inherits(SocketIoPrivateChannel, _SocketIoChannel);

	    function SocketIoPrivateChannel() {
	        classCallCheck(this, SocketIoPrivateChannel);
	        return possibleConstructorReturn(this, (SocketIoPrivateChannel.__proto__ || Object.getPrototypeOf(SocketIoPrivateChannel)).apply(this, arguments));
	    }

	    createClass(SocketIoPrivateChannel, [{
	        key: 'whisper',
	        value: function whisper(eventName, data) {
	            this.socket.emit('client event', {
	                channel: this.name,
	                event: 'client-' + eventName,
	                data: data
	            });
	            return this;
	        }
	    }]);
	    return SocketIoPrivateChannel;
	}(SocketIoChannel);

	var SocketIoPresenceChannel = function (_SocketIoPrivateChann) {
	    inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

	    function SocketIoPresenceChannel() {
	        classCallCheck(this, SocketIoPresenceChannel);
	        return possibleConstructorReturn(this, (SocketIoPresenceChannel.__proto__ || Object.getPrototypeOf(SocketIoPresenceChannel)).apply(this, arguments));
	    }

	    createClass(SocketIoPresenceChannel, [{
	        key: 'here',
	        value: function here(callback) {
	            this.on('presence:subscribed', function (members) {
	                callback(members.map(function (m) {
	                    return m.user_info;
	                }));
	            });
	            return this;
	        }
	    }, {
	        key: 'joining',
	        value: function joining(callback) {
	            this.on('presence:joining', function (member) {
	                return callback(member.user_info);
	            });
	            return this;
	        }
	    }, {
	        key: 'leaving',
	        value: function leaving(callback) {
	            this.on('presence:leaving', function (member) {
	                return callback(member.user_info);
	            });
	            return this;
	        }
	    }]);
	    return SocketIoPresenceChannel;
	}(SocketIoPrivateChannel);

	var PusherConnector = function (_Connector) {
	    inherits(PusherConnector, _Connector);

	    function PusherConnector() {
	        var _ref;

	        classCallCheck(this, PusherConnector);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = possibleConstructorReturn(this, (_ref = PusherConnector.__proto__ || Object.getPrototypeOf(PusherConnector)).call.apply(_ref, [this].concat(args)));

	        _this.channels = {};
	        return _this;
	    }

	    createClass(PusherConnector, [{
	        key: 'connect',
	        value: function connect() {
	            this.pusher = new Pusher(this.options.key, this.options);
	        }
	    }, {
	        key: 'listen',
	        value: function listen(name, event, callback) {
	            return this.channel(name).listen(event, callback);
	        }
	    }, {
	        key: 'channel',
	        value: function channel(name) {
	            if (!this.channels[name]) {
	                this.channels[name] = new PusherChannel(this.pusher, name, this.options);
	            }
	            return this.channels[name];
	        }
	    }, {
	        key: 'privateChannel',
	        value: function privateChannel(name) {
	            if (!this.channels['private-' + name]) {
	                this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
	            }
	            return this.channels['private-' + name];
	        }
	    }, {
	        key: 'presenceChannel',
	        value: function presenceChannel(name) {
	            if (!this.channels['presence-' + name]) {
	                this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
	            }
	            return this.channels['presence-' + name];
	        }
	    }, {
	        key: 'leave',
	        value: function leave(name) {
	            var _this2 = this;

	            var channels = [name, 'private-' + name, 'presence-' + name];
	            channels.forEach(function (name, index) {
	                if (_this2.channels[name]) {
	                    _this2.channels[name].unsubscribe();
	                    delete _this2.channels[name];
	                }
	            });
	        }
	    }, {
	        key: 'socketId',
	        value: function socketId() {
	            return this.pusher.connection.socket_id;
	        }
	    }, {
	        key: 'disconnect',
	        value: function disconnect() {
	            this.pusher.disconnect();
	        }
	    }]);
	    return PusherConnector;
	}(Connector);

	var SocketIoConnector = function (_Connector) {
	    inherits(SocketIoConnector, _Connector);

	    function SocketIoConnector() {
	        var _ref;

	        classCallCheck(this, SocketIoConnector);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = possibleConstructorReturn(this, (_ref = SocketIoConnector.__proto__ || Object.getPrototypeOf(SocketIoConnector)).call.apply(_ref, [this].concat(args)));

	        _this.channels = {};
	        return _this;
	    }

	    createClass(SocketIoConnector, [{
	        key: 'connect',
	        value: function connect() {
	            this.socket = io(this.options.host, this.options);
	            return this.socket;
	        }
	    }, {
	        key: 'listen',
	        value: function listen(name, event, callback) {
	            return this.channel(name).listen(event, callback);
	        }
	    }, {
	        key: 'channel',
	        value: function channel(name) {
	            if (!this.channels[name]) {
	                this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
	            }
	            return this.channels[name];
	        }
	    }, {
	        key: 'privateChannel',
	        value: function privateChannel(name) {
	            if (!this.channels['private-' + name]) {
	                this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
	            }
	            return this.channels['private-' + name];
	        }
	    }, {
	        key: 'presenceChannel',
	        value: function presenceChannel(name) {
	            if (!this.channels['presence-' + name]) {
	                this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
	            }
	            return this.channels['presence-' + name];
	        }
	    }, {
	        key: 'leave',
	        value: function leave(name) {
	            var _this2 = this;

	            var channels = [name, 'private-' + name, 'presence-' + name];
	            channels.forEach(function (name) {
	                if (_this2.channels[name]) {
	                    _this2.channels[name].unsubscribe();
	                    delete _this2.channels[name];
	                }
	            });
	        }
	    }, {
	        key: 'socketId',
	        value: function socketId() {
	            return this.socket.id;
	        }
	    }, {
	        key: 'disconnect',
	        value: function disconnect() {
	            this.socket.disconnect();
	        }
	    }]);
	    return SocketIoConnector;
	}(Connector);

	var Echo = function () {
	    function Echo(options) {
	        classCallCheck(this, Echo);

	        this.options = options;
	        if (typeof Vue === 'function' && Vue.http) {
	            this.registerVueRequestInterceptor();
	        }
	        if (typeof axios === 'function') {
	            this.registerAxiosRequestInterceptor();
	        }
	        if (typeof jQuery === 'function') {
	            this.registerjQueryAjaxSetup();
	        }
	        if (this.options.broadcaster == 'pusher') {
	            this.connector = new PusherConnector(this.options);
	        } else if (this.options.broadcaster == 'socket.io') {
	            this.connector = new SocketIoConnector(this.options);
	        }
	    }

	    createClass(Echo, [{
	        key: 'registerVueRequestInterceptor',
	        value: function registerVueRequestInterceptor() {
	            var _this = this;

	            Vue.http.interceptors.push(function (request, next) {
	                if (_this.socketId()) {
	                    request.headers.set('X-Socket-ID', _this.socketId());
	                }
	                next();
	            });
	        }
	    }, {
	        key: 'registerAxiosRequestInterceptor',
	        value: function registerAxiosRequestInterceptor() {
	            var _this2 = this;

	            axios.interceptors.request.use(function (config) {
	                if (_this2.socketId()) {
	                    config.headers['X-Socket-Id'] = _this2.socketId();
	                }
	                return config;
	            });
	        }
	    }, {
	        key: 'registerjQueryAjaxSetup',
	        value: function registerjQueryAjaxSetup() {
	            var _this3 = this;

	            if (typeof jQuery.ajax != 'undefined') {
	                jQuery.ajaxSetup({
	                    beforeSend: function beforeSend(xhr) {
	                        if (_this3.socketId()) {
	                            xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
	                        }
	                    }
	                });
	            }
	        }
	    }, {
	        key: 'listen',
	        value: function listen(channel, event, callback) {
	            return this.connector.listen(channel, event, callback);
	        }
	    }, {
	        key: 'channel',
	        value: function channel(_channel) {
	            return this.connector.channel(_channel);
	        }
	    }, {
	        key: 'private',
	        value: function _private(channel) {
	            return this.connector.privateChannel(channel);
	        }
	    }, {
	        key: 'join',
	        value: function join(channel) {
	            return this.connector.presenceChannel(channel);
	        }
	    }, {
	        key: 'leave',
	        value: function leave(channel) {
	            this.connector.leave(channel);
	        }
	    }, {
	        key: 'socketId',
	        value: function socketId() {
	            return this.connector.socketId();
	        }
	    }, {
	        key: 'disconnect',
	        value: function disconnect() {
	            this.connector.disconnect();
	        }
	    }]);
	    return Echo;
	}();

	module.exports = Echo;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * Pusher JavaScript Library v4.2.1
	 * https://pusher.com/
	 *
	 * Copyright 2017, Pusher
	 * Released under the MIT licence.
	 */

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Pusher"] = factory();
		else
			root["Pusher"] = factory();
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
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var pusher_1 = __webpack_require__(1);
		module.exports = pusher_1["default"];


	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var runtime_1 = __webpack_require__(2);
		var Collections = __webpack_require__(9);
		var dispatcher_1 = __webpack_require__(24);
		var timeline_1 = __webpack_require__(39);
		var level_1 = __webpack_require__(40);
		var StrategyBuilder = __webpack_require__(41);
		var timers_1 = __webpack_require__(12);
		var defaults_1 = __webpack_require__(5);
		var DefaultConfig = __webpack_require__(63);
		var logger_1 = __webpack_require__(8);
		var factory_1 = __webpack_require__(43);
		var url_store_1 = __webpack_require__(14);
		var Pusher = (function () {
		    function Pusher(app_key, options) {
		        var _this = this;
		        checkAppKey(app_key);
		        options = options || {};
		        if (!options.cluster) {
		            var suffix = url_store_1["default"].buildLogSuffix("javascriptQuickStart");
		            logger_1["default"].warn("You should always specify a cluster when connecting. " + suffix);
		        }
		        this.key = app_key;
		        this.config = Collections.extend(DefaultConfig.getGlobalConfig(), options.cluster ? DefaultConfig.getClusterConfig(options.cluster) : {}, options);
		        this.channels = factory_1["default"].createChannels();
		        this.global_emitter = new dispatcher_1["default"]();
		        this.sessionID = Math.floor(Math.random() * 1000000000);
		        this.timeline = new timeline_1["default"](this.key, this.sessionID, {
		            cluster: this.config.cluster,
		            features: Pusher.getClientFeatures(),
		            params: this.config.timelineParams || {},
		            limit: 50,
		            level: level_1["default"].INFO,
		            version: defaults_1["default"].VERSION
		        });
		        if (!this.config.disableStats) {
		            this.timelineSender = factory_1["default"].createTimelineSender(this.timeline, {
		                host: this.config.statsHost,
		                path: "/timeline/v2/" + runtime_1["default"].TimelineTransport.name
		            });
		        }
		        var getStrategy = function (options) {
		            var config = Collections.extend({}, _this.config, options);
		            return StrategyBuilder.build(runtime_1["default"].getDefaultStrategy(config), config);
		        };
		        this.connection = factory_1["default"].createConnectionManager(this.key, Collections.extend({ getStrategy: getStrategy,
		            timeline: this.timeline,
		            activityTimeout: this.config.activity_timeout,
		            pongTimeout: this.config.pong_timeout,
		            unavailableTimeout: this.config.unavailable_timeout
		        }, this.config, { encrypted: this.isEncrypted() }));
		        this.connection.bind('connected', function () {
		            _this.subscribeAll();
		            if (_this.timelineSender) {
		                _this.timelineSender.send(_this.connection.isEncrypted());
		            }
		        });
		        this.connection.bind('message', function (params) {
		            var internal = (params.event.indexOf('pusher_internal:') === 0);
		            if (params.channel) {
		                var channel = _this.channel(params.channel);
		                if (channel) {
		                    channel.handleEvent(params.event, params.data);
		                }
		            }
		            if (!internal) {
		                _this.global_emitter.emit(params.event, params.data);
		            }
		        });
		        this.connection.bind('connecting', function () {
		            _this.channels.disconnect();
		        });
		        this.connection.bind('disconnected', function () {
		            _this.channels.disconnect();
		        });
		        this.connection.bind('error', function (err) {
		            logger_1["default"].warn('Error', err);
		        });
		        Pusher.instances.push(this);
		        this.timeline.info({ instances: Pusher.instances.length });
		        if (Pusher.isReady) {
		            this.connect();
		        }
		    }
		    Pusher.ready = function () {
		        Pusher.isReady = true;
		        for (var i = 0, l = Pusher.instances.length; i < l; i++) {
		            Pusher.instances[i].connect();
		        }
		    };
		    Pusher.log = function (message) {
		        if (Pusher.logToConsole && (window).console && (window).console.log) {
		            (window).console.log(message);
		        }
		    };
		    Pusher.getClientFeatures = function () {
		        return Collections.keys(Collections.filterObject({ "ws": runtime_1["default"].Transports.ws }, function (t) { return t.isSupported({}); }));
		    };
		    Pusher.prototype.channel = function (name) {
		        return this.channels.find(name);
		    };
		    Pusher.prototype.allChannels = function () {
		        return this.channels.all();
		    };
		    Pusher.prototype.connect = function () {
		        this.connection.connect();
		        if (this.timelineSender) {
		            if (!this.timelineSenderTimer) {
		                var encrypted = this.connection.isEncrypted();
		                var timelineSender = this.timelineSender;
		                this.timelineSenderTimer = new timers_1.PeriodicTimer(60000, function () {
		                    timelineSender.send(encrypted);
		                });
		            }
		        }
		    };
		    Pusher.prototype.disconnect = function () {
		        this.connection.disconnect();
		        if (this.timelineSenderTimer) {
		            this.timelineSenderTimer.ensureAborted();
		            this.timelineSenderTimer = null;
		        }
		    };
		    Pusher.prototype.bind = function (event_name, callback, context) {
		        this.global_emitter.bind(event_name, callback, context);
		        return this;
		    };
		    Pusher.prototype.unbind = function (event_name, callback, context) {
		        this.global_emitter.unbind(event_name, callback, context);
		        return this;
		    };
		    Pusher.prototype.bind_global = function (callback) {
		        this.global_emitter.bind_global(callback);
		        return this;
		    };
		    Pusher.prototype.unbind_global = function (callback) {
		        this.global_emitter.unbind_global(callback);
		        return this;
		    };
		    Pusher.prototype.unbind_all = function (callback) {
		        this.global_emitter.unbind_all();
		        return this;
		    };
		    Pusher.prototype.subscribeAll = function () {
		        var channelName;
		        for (channelName in this.channels.channels) {
		            if (this.channels.channels.hasOwnProperty(channelName)) {
		                this.subscribe(channelName);
		            }
		        }
		    };
		    Pusher.prototype.subscribe = function (channel_name) {
		        var channel = this.channels.add(channel_name, this);
		        if (channel.subscriptionPending && channel.subscriptionCancelled) {
		            channel.reinstateSubscription();
		        }
		        else if (!channel.subscriptionPending && this.connection.state === "connected") {
		            channel.subscribe();
		        }
		        return channel;
		    };
		    Pusher.prototype.unsubscribe = function (channel_name) {
		        var channel = this.channels.find(channel_name);
		        if (channel && channel.subscriptionPending) {
		            channel.cancelSubscription();
		        }
		        else {
		            channel = this.channels.remove(channel_name);
		            if (channel && this.connection.state === "connected") {
		                channel.unsubscribe();
		            }
		        }
		    };
		    Pusher.prototype.send_event = function (event_name, data, channel) {
		        return this.connection.send_event(event_name, data, channel);
		    };
		    Pusher.prototype.isEncrypted = function () {
		        if (runtime_1["default"].getProtocol() === "https:") {
		            return true;
		        }
		        else {
		            return Boolean(this.config.encrypted);
		        }
		    };
		    Pusher.instances = [];
		    Pusher.isReady = false;
		    Pusher.logToConsole = false;
		    Pusher.Runtime = runtime_1["default"];
		    Pusher.ScriptReceivers = runtime_1["default"].ScriptReceivers;
		    Pusher.DependenciesReceivers = runtime_1["default"].DependenciesReceivers;
		    Pusher.auth_callbacks = runtime_1["default"].auth_callbacks;
		    return Pusher;
		}());
		exports.__esModule = true;
		exports["default"] = Pusher;
		function checkAppKey(key) {
		    if (key === null || key === undefined) {
		        throw "You must pass your app key when you instantiate Pusher.";
		    }
		}
		runtime_1["default"].setup(Pusher);


	/***/ }),
	/* 2 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var dependencies_1 = __webpack_require__(3);
		var xhr_auth_1 = __webpack_require__(7);
		var jsonp_auth_1 = __webpack_require__(15);
		var script_request_1 = __webpack_require__(16);
		var jsonp_request_1 = __webpack_require__(17);
		var script_receiver_factory_1 = __webpack_require__(4);
		var jsonp_timeline_1 = __webpack_require__(18);
		var transports_1 = __webpack_require__(19);
		var net_info_1 = __webpack_require__(26);
		var default_strategy_1 = __webpack_require__(27);
		var transport_connection_initializer_1 = __webpack_require__(28);
		var http_1 = __webpack_require__(29);
		var Runtime = {
		    nextAuthCallbackID: 1,
		    auth_callbacks: {},
		    ScriptReceivers: script_receiver_factory_1.ScriptReceivers,
		    DependenciesReceivers: dependencies_1.DependenciesReceivers,
		    getDefaultStrategy: default_strategy_1["default"],
		    Transports: transports_1["default"],
		    transportConnectionInitializer: transport_connection_initializer_1["default"],
		    HTTPFactory: http_1["default"],
		    TimelineTransport: jsonp_timeline_1["default"],
		    getXHRAPI: function () {
		        return window.XMLHttpRequest;
		    },
		    getWebSocketAPI: function () {
		        return window.WebSocket || window.MozWebSocket;
		    },
		    setup: function (PusherClass) {
		        var _this = this;
		        window.Pusher = PusherClass;
		        var initializeOnDocumentBody = function () {
		            _this.onDocumentBody(PusherClass.ready);
		        };
		        if (!window.JSON) {
		            dependencies_1.Dependencies.load("json2", {}, initializeOnDocumentBody);
		        }
		        else {
		            initializeOnDocumentBody();
		        }
		    },
		    getDocument: function () {
		        return document;
		    },
		    getProtocol: function () {
		        return this.getDocument().location.protocol;
		    },
		    getAuthorizers: function () {
		        return { ajax: xhr_auth_1["default"], jsonp: jsonp_auth_1["default"] };
		    },
		    onDocumentBody: function (callback) {
		        var _this = this;
		        if (document.body) {
		            callback();
		        }
		        else {
		            setTimeout(function () {
		                _this.onDocumentBody(callback);
		            }, 0);
		        }
		    },
		    createJSONPRequest: function (url, data) {
		        return new jsonp_request_1["default"](url, data);
		    },
		    createScriptRequest: function (src) {
		        return new script_request_1["default"](src);
		    },
		    getLocalStorage: function () {
		        try {
		            return window.localStorage;
		        }
		        catch (e) {
		            return undefined;
		        }
		    },
		    createXHR: function () {
		        if (this.getXHRAPI()) {
		            return this.createXMLHttpRequest();
		        }
		        else {
		            return this.createMicrosoftXHR();
		        }
		    },
		    createXMLHttpRequest: function () {
		        var Constructor = this.getXHRAPI();
		        return new Constructor();
		    },
		    createMicrosoftXHR: function () {
		        return new ActiveXObject("Microsoft.XMLHTTP");
		    },
		    getNetwork: function () {
		        return net_info_1.Network;
		    },
		    createWebSocket: function (url) {
		        var Constructor = this.getWebSocketAPI();
		        return new Constructor(url);
		    },
		    createSocketRequest: function (method, url) {
		        if (this.isXHRSupported()) {
		            return this.HTTPFactory.createXHR(method, url);
		        }
		        else if (this.isXDRSupported(url.indexOf("https:") === 0)) {
		            return this.HTTPFactory.createXDR(method, url);
		        }
		        else {
		            throw "Cross-origin HTTP requests are not supported";
		        }
		    },
		    isXHRSupported: function () {
		        var Constructor = this.getXHRAPI();
		        return Boolean(Constructor) && (new Constructor()).withCredentials !== undefined;
		    },
		    isXDRSupported: function (encrypted) {
		        var protocol = encrypted ? "https:" : "http:";
		        var documentProtocol = this.getProtocol();
		        return Boolean((window['XDomainRequest'])) && documentProtocol === protocol;
		    },
		    addUnloadListener: function (listener) {
		        if (window.addEventListener !== undefined) {
		            window.addEventListener("unload", listener, false);
		        }
		        else if (window.attachEvent !== undefined) {
		            window.attachEvent("onunload", listener);
		        }
		    },
		    removeUnloadListener: function (listener) {
		        if (window.addEventListener !== undefined) {
		            window.removeEventListener("unload", listener, false);
		        }
		        else if (window.detachEvent !== undefined) {
		            window.detachEvent("onunload", listener);
		        }
		    }
		};
		exports.__esModule = true;
		exports["default"] = Runtime;


	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var script_receiver_factory_1 = __webpack_require__(4);
		var defaults_1 = __webpack_require__(5);
		var dependency_loader_1 = __webpack_require__(6);
		exports.DependenciesReceivers = new script_receiver_factory_1.ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers");
		exports.Dependencies = new dependency_loader_1["default"]({
		    cdn_http: defaults_1["default"].cdn_http,
		    cdn_https: defaults_1["default"].cdn_https,
		    version: defaults_1["default"].VERSION,
		    suffix: defaults_1["default"].dependency_suffix,
		    receivers: exports.DependenciesReceivers
		});


	/***/ }),
	/* 4 */
	/***/ (function(module, exports) {

		"use strict";
		var ScriptReceiverFactory = (function () {
		    function ScriptReceiverFactory(prefix, name) {
		        this.lastId = 0;
		        this.prefix = prefix;
		        this.name = name;
		    }
		    ScriptReceiverFactory.prototype.create = function (callback) {
		        this.lastId++;
		        var number = this.lastId;
		        var id = this.prefix + number;
		        var name = this.name + "[" + number + "]";
		        var called = false;
		        var callbackWrapper = function () {
		            if (!called) {
		                callback.apply(null, arguments);
		                called = true;
		            }
		        };
		        this[number] = callbackWrapper;
		        return { number: number, id: id, name: name, callback: callbackWrapper };
		    };
		    ScriptReceiverFactory.prototype.remove = function (receiver) {
		        delete this[receiver.number];
		    };
		    return ScriptReceiverFactory;
		}());
		exports.ScriptReceiverFactory = ScriptReceiverFactory;
		exports.ScriptReceivers = new ScriptReceiverFactory("_pusher_script_", "Pusher.ScriptReceivers");


	/***/ }),
	/* 5 */
	/***/ (function(module, exports) {

		"use strict";
		var Defaults = {
		    VERSION: "4.2.1",
		    PROTOCOL: 7,
		    host: 'ws.pusherapp.com',
		    ws_port: 80,
		    wss_port: 443,
		    sockjs_host: 'sockjs.pusher.com',
		    sockjs_http_port: 80,
		    sockjs_https_port: 443,
		    sockjs_path: "/pusher",
		    stats_host: 'stats.pusher.com',
		    channel_auth_endpoint: '/pusher/auth',
		    channel_auth_transport: 'ajax',
		    activity_timeout: 120000,
		    pong_timeout: 30000,
		    unavailable_timeout: 10000,
		    cdn_http: 'http://js.pusher.com',
		    cdn_https: 'https://js.pusher.com',
		    dependency_suffix: ''
		};
		exports.__esModule = true;
		exports["default"] = Defaults;


	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var script_receiver_factory_1 = __webpack_require__(4);
		var runtime_1 = __webpack_require__(2);
		var DependencyLoader = (function () {
		    function DependencyLoader(options) {
		        this.options = options;
		        this.receivers = options.receivers || script_receiver_factory_1.ScriptReceivers;
		        this.loading = {};
		    }
		    DependencyLoader.prototype.load = function (name, options, callback) {
		        var self = this;
		        if (self.loading[name] && self.loading[name].length > 0) {
		            self.loading[name].push(callback);
		        }
		        else {
		            self.loading[name] = [callback];
		            var request = runtime_1["default"].createScriptRequest(self.getPath(name, options));
		            var receiver = self.receivers.create(function (error) {
		                self.receivers.remove(receiver);
		                if (self.loading[name]) {
		                    var callbacks = self.loading[name];
		                    delete self.loading[name];
		                    var successCallback = function (wasSuccessful) {
		                        if (!wasSuccessful) {
		                            request.cleanup();
		                        }
		                    };
		                    for (var i = 0; i < callbacks.length; i++) {
		                        callbacks[i](error, successCallback);
		                    }
		                }
		            });
		            request.send(receiver);
		        }
		    };
		    DependencyLoader.prototype.getRoot = function (options) {
		        var cdn;
		        var protocol = runtime_1["default"].getDocument().location.protocol;
		        if ((options && options.encrypted) || protocol === "https:") {
		            cdn = this.options.cdn_https;
		        }
		        else {
		            cdn = this.options.cdn_http;
		        }
		        return cdn.replace(/\/*$/, "") + "/" + this.options.version;
		    };
		    DependencyLoader.prototype.getPath = function (name, options) {
		        return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
		    };
		    ;
		    return DependencyLoader;
		}());
		exports.__esModule = true;
		exports["default"] = DependencyLoader;


	/***/ }),
	/* 7 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var logger_1 = __webpack_require__(8);
		var runtime_1 = __webpack_require__(2);
		var url_store_1 = __webpack_require__(14);
		var ajax = function (context, socketId, callback) {
		    var self = this, xhr;
		    xhr = runtime_1["default"].createXHR();
		    xhr.open("POST", self.options.authEndpoint, true);
		    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		    for (var headerName in this.authOptions.headers) {
		        xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
		    }
		    xhr.onreadystatechange = function () {
		        if (xhr.readyState === 4) {
		            if (xhr.status === 200) {
		                var data, parsed = false;
		                try {
		                    data = JSON.parse(xhr.responseText);
		                    parsed = true;
		                }
		                catch (e) {
		                    callback(true, 'JSON returned from webapp was invalid, yet status code was 200. Data was: ' + xhr.responseText);
		                }
		                if (parsed) {
		                    callback(false, data);
		                }
		            }
		            else {
		                var suffix = url_store_1["default"].buildLogSuffix("authenticationEndpoint");
		                logger_1["default"].warn(("Couldn't retrieve authentication info. " + xhr.status) +
		                    ("Clients must be authenticated to join private or presence channels. " + suffix));
		                callback(true, xhr.status);
		            }
		        }
		    };
		    xhr.send(this.composeQuery(socketId));
		    return xhr;
		};
		exports.__esModule = true;
		exports["default"] = ajax;


	/***/ }),
	/* 8 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var collections_1 = __webpack_require__(9);
		var pusher_1 = __webpack_require__(1);
		var Logger = {
		    debug: function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i - 0] = arguments[_i];
		        }
		        if (!pusher_1["default"].log) {
		            return;
		        }
		        pusher_1["default"].log(collections_1.stringify.apply(this, arguments));
		    },
		    warn: function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i - 0] = arguments[_i];
		        }
		        var message = collections_1.stringify.apply(this, arguments);
		        if ((window).console) {
		            if ((window).console.warn) {
		                (window).console.warn(message);
		            }
		            else if ((window).console.log) {
		                (window).console.log(message);
		            }
		        }
		        if (pusher_1["default"].log) {
		            pusher_1["default"].log(message);
		        }
		    }
		};
		exports.__esModule = true;
		exports["default"] = Logger;


	/***/ }),
	/* 9 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var base64_1 = __webpack_require__(10);
		var util_1 = __webpack_require__(11);
		function extend(target) {
		    var sources = [];
		    for (var _i = 1; _i < arguments.length; _i++) {
		        sources[_i - 1] = arguments[_i];
		    }
		    for (var i = 0; i < sources.length; i++) {
		        var extensions = sources[i];
		        for (var property in extensions) {
		            if (extensions[property] && extensions[property].constructor &&
		                extensions[property].constructor === Object) {
		                target[property] = extend(target[property] || {}, extensions[property]);
		            }
		            else {
		                target[property] = extensions[property];
		            }
		        }
		    }
		    return target;
		}
		exports.extend = extend;
		function stringify() {
		    var m = ["Pusher"];
		    for (var i = 0; i < arguments.length; i++) {
		        if (typeof arguments[i] === "string") {
		            m.push(arguments[i]);
		        }
		        else {
		            m.push(safeJSONStringify(arguments[i]));
		        }
		    }
		    return m.join(" : ");
		}
		exports.stringify = stringify;
		function arrayIndexOf(array, item) {
		    var nativeIndexOf = Array.prototype.indexOf;
		    if (array === null) {
		        return -1;
		    }
		    if (nativeIndexOf && array.indexOf === nativeIndexOf) {
		        return array.indexOf(item);
		    }
		    for (var i = 0, l = array.length; i < l; i++) {
		        if (array[i] === item) {
		            return i;
		        }
		    }
		    return -1;
		}
		exports.arrayIndexOf = arrayIndexOf;
		function objectApply(object, f) {
		    for (var key in object) {
		        if (Object.prototype.hasOwnProperty.call(object, key)) {
		            f(object[key], key, object);
		        }
		    }
		}
		exports.objectApply = objectApply;
		function keys(object) {
		    var keys = [];
		    objectApply(object, function (_, key) {
		        keys.push(key);
		    });
		    return keys;
		}
		exports.keys = keys;
		function values(object) {
		    var values = [];
		    objectApply(object, function (value) {
		        values.push(value);
		    });
		    return values;
		}
		exports.values = values;
		function apply(array, f, context) {
		    for (var i = 0; i < array.length; i++) {
		        f.call(context || (window), array[i], i, array);
		    }
		}
		exports.apply = apply;
		function map(array, f) {
		    var result = [];
		    for (var i = 0; i < array.length; i++) {
		        result.push(f(array[i], i, array, result));
		    }
		    return result;
		}
		exports.map = map;
		function mapObject(object, f) {
		    var result = {};
		    objectApply(object, function (value, key) {
		        result[key] = f(value);
		    });
		    return result;
		}
		exports.mapObject = mapObject;
		function filter(array, test) {
		    test = test || function (value) { return !!value; };
		    var result = [];
		    for (var i = 0; i < array.length; i++) {
		        if (test(array[i], i, array, result)) {
		            result.push(array[i]);
		        }
		    }
		    return result;
		}
		exports.filter = filter;
		function filterObject(object, test) {
		    var result = {};
		    objectApply(object, function (value, key) {
		        if ((test && test(value, key, object, result)) || Boolean(value)) {
		            result[key] = value;
		        }
		    });
		    return result;
		}
		exports.filterObject = filterObject;
		function flatten(object) {
		    var result = [];
		    objectApply(object, function (value, key) {
		        result.push([key, value]);
		    });
		    return result;
		}
		exports.flatten = flatten;
		function any(array, test) {
		    for (var i = 0; i < array.length; i++) {
		        if (test(array[i], i, array)) {
		            return true;
		        }
		    }
		    return false;
		}
		exports.any = any;
		function all(array, test) {
		    for (var i = 0; i < array.length; i++) {
		        if (!test(array[i], i, array)) {
		            return false;
		        }
		    }
		    return true;
		}
		exports.all = all;
		function encodeParamsObject(data) {
		    return mapObject(data, function (value) {
		        if (typeof value === "object") {
		            value = safeJSONStringify(value);
		        }
		        return encodeURIComponent(base64_1["default"](value.toString()));
		    });
		}
		exports.encodeParamsObject = encodeParamsObject;
		function buildQueryString(data) {
		    var params = filterObject(data, function (value) {
		        return value !== undefined;
		    });
		    var query = map(flatten(encodeParamsObject(params)), util_1["default"].method("join", "=")).join("&");
		    return query;
		}
		exports.buildQueryString = buildQueryString;
		function decycleObject(object) {
		    var objects = [], paths = [];
		    return (function derez(value, path) {
		        var i, name, nu;
		        switch (typeof value) {
		            case 'object':
		                if (!value) {
		                    return null;
		                }
		                for (i = 0; i < objects.length; i += 1) {
		                    if (objects[i] === value) {
		                        return { $ref: paths[i] };
		                    }
		                }
		                objects.push(value);
		                paths.push(path);
		                if (Object.prototype.toString.apply(value) === '[object Array]') {
		                    nu = [];
		                    for (i = 0; i < value.length; i += 1) {
		                        nu[i] = derez(value[i], path + '[' + i + ']');
		                    }
		                }
		                else {
		                    nu = {};
		                    for (name in value) {
		                        if (Object.prototype.hasOwnProperty.call(value, name)) {
		                            nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
		                        }
		                    }
		                }
		                return nu;
		            case 'number':
		            case 'string':
		            case 'boolean':
		                return value;
		        }
		    }(object, '$'));
		}
		exports.decycleObject = decycleObject;
		function safeJSONStringify(source) {
		    try {
		        return JSON.stringify(source);
		    }
		    catch (e) {
		        return JSON.stringify(decycleObject(source));
		    }
		}
		exports.safeJSONStringify = safeJSONStringify;


	/***/ }),
	/* 10 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		function encode(s) {
		    return btoa(utob(s));
		}
		exports.__esModule = true;
		exports["default"] = encode;
		var fromCharCode = String.fromCharCode;
		var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		var b64tab = {};
		for (var i = 0, l = b64chars.length; i < l; i++) {
		    b64tab[b64chars.charAt(i)] = i;
		}
		var cb_utob = function (c) {
		    var cc = c.charCodeAt(0);
		    return cc < 0x80 ? c
		        : cc < 0x800 ? fromCharCode(0xc0 | (cc >>> 6)) +
		            fromCharCode(0x80 | (cc & 0x3f))
		            : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
		                fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
		                fromCharCode(0x80 | (cc & 0x3f));
		};
		var utob = function (u) {
		    return u.replace(/[^\x00-\x7F]/g, cb_utob);
		};
		var cb_encode = function (ccc) {
		    var padlen = [0, 2, 1][ccc.length % 3];
		    var ord = ccc.charCodeAt(0) << 16
		        | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
		        | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0));
		    var chars = [
		        b64chars.charAt(ord >>> 18),
		        b64chars.charAt((ord >>> 12) & 63),
		        padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
		        padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
		    ];
		    return chars.join('');
		};
		var btoa = (window).btoa || function (b) {
		    return b.replace(/[\s\S]{1,3}/g, cb_encode);
		};


	/***/ }),
	/* 11 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var timers_1 = __webpack_require__(12);
		var Util = {
		    now: function () {
		        if (Date.now) {
		            return Date.now();
		        }
		        else {
		            return new Date().valueOf();
		        }
		    },
		    defer: function (callback) {
		        return new timers_1.OneOffTimer(0, callback);
		    },
		    method: function (name) {
		        var args = [];
		        for (var _i = 1; _i < arguments.length; _i++) {
		            args[_i - 1] = arguments[_i];
		        }
		        var boundArguments = Array.prototype.slice.call(arguments, 1);
		        return function (object) {
		            return object[name].apply(object, boundArguments.concat(arguments));
		        };
		    }
		};
		exports.__esModule = true;
		exports["default"] = Util;


	/***/ }),
	/* 12 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var abstract_timer_1 = __webpack_require__(13);
		function clearTimeout(timer) {
		    (window).clearTimeout(timer);
		}
		function clearInterval(timer) {
		    (window).clearInterval(timer);
		}
		var OneOffTimer = (function (_super) {
		    __extends(OneOffTimer, _super);
		    function OneOffTimer(delay, callback) {
		        _super.call(this, setTimeout, clearTimeout, delay, function (timer) {
		            callback();
		            return null;
		        });
		    }
		    return OneOffTimer;
		}(abstract_timer_1["default"]));
		exports.OneOffTimer = OneOffTimer;
		var PeriodicTimer = (function (_super) {
		    __extends(PeriodicTimer, _super);
		    function PeriodicTimer(delay, callback) {
		        _super.call(this, setInterval, clearInterval, delay, function (timer) {
		            callback();
		            return timer;
		        });
		    }
		    return PeriodicTimer;
		}(abstract_timer_1["default"]));
		exports.PeriodicTimer = PeriodicTimer;


	/***/ }),
	/* 13 */
	/***/ (function(module, exports) {

		"use strict";
		var Timer = (function () {
		    function Timer(set, clear, delay, callback) {
		        var _this = this;
		        this.clear = clear;
		        this.timer = set(function () {
		            if (_this.timer) {
		                _this.timer = callback(_this.timer);
		            }
		        }, delay);
		    }
		    Timer.prototype.isRunning = function () {
		        return this.timer !== null;
		    };
		    Timer.prototype.ensureAborted = function () {
		        if (this.timer) {
		            this.clear(this.timer);
		            this.timer = null;
		        }
		    };
		    return Timer;
		}());
		exports.__esModule = true;
		exports["default"] = Timer;


	/***/ }),
	/* 14 */
	/***/ (function(module, exports) {

		"use strict";
		var urlStore = {
		    baseUrl: "https://pusher.com",
		    urls: {
		        authenticationEndpoint: {
		            path: "/docs/authenticating_users"
		        },
		        javascriptQuickStart: {
		            path: "/docs/javascript_quick_start"
		        }
		    }
		};
		var buildLogSuffix = function (key) {
		    var urlPrefix = "See:";
		    var urlObj = urlStore.urls[key];
		    if (!urlObj)
		        return "";
		    var url;
		    if (urlObj.fullUrl) {
		        url = urlObj.fullUrl;
		    }
		    else if (urlObj.path) {
		        url = urlStore.baseUrl + urlObj.path;
		    }
		    if (!url)
		        return "";
		    return urlPrefix + " " + url;
		};
		exports.__esModule = true;
		exports["default"] = { buildLogSuffix: buildLogSuffix };


	/***/ }),
	/* 15 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var logger_1 = __webpack_require__(8);
		var jsonp = function (context, socketId, callback) {
		    if (this.authOptions.headers !== undefined) {
		        logger_1["default"].warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
		    }
		    var callbackName = context.nextAuthCallbackID.toString();
		    context.nextAuthCallbackID++;
		    var document = context.getDocument();
		    var script = document.createElement("script");
		    context.auth_callbacks[callbackName] = function (data) {
		        callback(false, data);
		    };
		    var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
		    script.src = this.options.authEndpoint +
		        '?callback=' +
		        encodeURIComponent(callback_name) +
		        '&' +
		        this.composeQuery(socketId);
		    var head = document.getElementsByTagName("head")[0] || document.documentElement;
		    head.insertBefore(script, head.firstChild);
		};
		exports.__esModule = true;
		exports["default"] = jsonp;


	/***/ }),
	/* 16 */
	/***/ (function(module, exports) {

		"use strict";
		var ScriptRequest = (function () {
		    function ScriptRequest(src) {
		        this.src = src;
		    }
		    ScriptRequest.prototype.send = function (receiver) {
		        var self = this;
		        var errorString = "Error loading " + self.src;
		        self.script = document.createElement("script");
		        self.script.id = receiver.id;
		        self.script.src = self.src;
		        self.script.type = "text/javascript";
		        self.script.charset = "UTF-8";
		        if (self.script.addEventListener) {
		            self.script.onerror = function () {
		                receiver.callback(errorString);
		            };
		            self.script.onload = function () {
		                receiver.callback(null);
		            };
		        }
		        else {
		            self.script.onreadystatechange = function () {
		                if (self.script.readyState === 'loaded' ||
		                    self.script.readyState === 'complete') {
		                    receiver.callback(null);
		                }
		            };
		        }
		        if (self.script.async === undefined && document.attachEvent &&
		            /opera/i.test(navigator.userAgent)) {
		            self.errorScript = document.createElement("script");
		            self.errorScript.id = receiver.id + "_error";
		            self.errorScript.text = receiver.name + "('" + errorString + "');";
		            self.script.async = self.errorScript.async = false;
		        }
		        else {
		            self.script.async = true;
		        }
		        var head = document.getElementsByTagName('head')[0];
		        head.insertBefore(self.script, head.firstChild);
		        if (self.errorScript) {
		            head.insertBefore(self.errorScript, self.script.nextSibling);
		        }
		    };
		    ScriptRequest.prototype.cleanup = function () {
		        if (this.script) {
		            this.script.onload = this.script.onerror = null;
		            this.script.onreadystatechange = null;
		        }
		        if (this.script && this.script.parentNode) {
		            this.script.parentNode.removeChild(this.script);
		        }
		        if (this.errorScript && this.errorScript.parentNode) {
		            this.errorScript.parentNode.removeChild(this.errorScript);
		        }
		        this.script = null;
		        this.errorScript = null;
		    };
		    return ScriptRequest;
		}());
		exports.__esModule = true;
		exports["default"] = ScriptRequest;


	/***/ }),
	/* 17 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var runtime_1 = __webpack_require__(2);
		var JSONPRequest = (function () {
		    function JSONPRequest(url, data) {
		        this.url = url;
		        this.data = data;
		    }
		    JSONPRequest.prototype.send = function (receiver) {
		        if (this.request) {
		            return;
		        }
		        var query = Collections.buildQueryString(this.data);
		        var url = this.url + "/" + receiver.number + "?" + query;
		        this.request = runtime_1["default"].createScriptRequest(url);
		        this.request.send(receiver);
		    };
		    JSONPRequest.prototype.cleanup = function () {
		        if (this.request) {
		            this.request.cleanup();
		        }
		    };
		    return JSONPRequest;
		}());
		exports.__esModule = true;
		exports["default"] = JSONPRequest;


	/***/ }),
	/* 18 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var runtime_1 = __webpack_require__(2);
		var script_receiver_factory_1 = __webpack_require__(4);
		var getAgent = function (sender, encrypted) {
		    return function (data, callback) {
		        var scheme = "http" + (encrypted ? "s" : "") + "://";
		        var url = scheme + (sender.host || sender.options.host) + sender.options.path;
		        var request = runtime_1["default"].createJSONPRequest(url, data);
		        var receiver = runtime_1["default"].ScriptReceivers.create(function (error, result) {
		            script_receiver_factory_1.ScriptReceivers.remove(receiver);
		            request.cleanup();
		            if (result && result.host) {
		                sender.host = result.host;
		            }
		            if (callback) {
		                callback(error, result);
		            }
		        });
		        request.send(receiver);
		    };
		};
		var jsonp = {
		    name: 'jsonp',
		    getAgent: getAgent
		};
		exports.__esModule = true;
		exports["default"] = jsonp;


	/***/ }),
	/* 19 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var transports_1 = __webpack_require__(20);
		var transport_1 = __webpack_require__(22);
		var URLSchemes = __webpack_require__(21);
		var runtime_1 = __webpack_require__(2);
		var dependencies_1 = __webpack_require__(3);
		var Collections = __webpack_require__(9);
		var SockJSTransport = new transport_1["default"]({
		    file: "sockjs",
		    urls: URLSchemes.sockjs,
		    handlesActivityChecks: true,
		    supportsPing: false,
		    isSupported: function () {
		        return true;
		    },
		    isInitialized: function () {
		        return window.SockJS !== undefined;
		    },
		    getSocket: function (url, options) {
		        return new window.SockJS(url, null, {
		            js_path: dependencies_1.Dependencies.getPath("sockjs", {
		                encrypted: options.encrypted
		            }),
		            ignore_null_origin: options.ignoreNullOrigin
		        });
		    },
		    beforeOpen: function (socket, path) {
		        socket.send(JSON.stringify({
		            path: path
		        }));
		    }
		});
		var xdrConfiguration = {
		    isSupported: function (environment) {
		        var yes = runtime_1["default"].isXDRSupported(environment.encrypted);
		        return yes;
		    }
		};
		var XDRStreamingTransport = new transport_1["default"](Collections.extend({}, transports_1.streamingConfiguration, xdrConfiguration));
		var XDRPollingTransport = new transport_1["default"](Collections.extend({}, transports_1.pollingConfiguration, xdrConfiguration));
		transports_1["default"].xdr_streaming = XDRStreamingTransport;
		transports_1["default"].xdr_polling = XDRPollingTransport;
		transports_1["default"].sockjs = SockJSTransport;
		exports.__esModule = true;
		exports["default"] = transports_1["default"];


	/***/ }),
	/* 20 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var URLSchemes = __webpack_require__(21);
		var transport_1 = __webpack_require__(22);
		var Collections = __webpack_require__(9);
		var runtime_1 = __webpack_require__(2);
		var WSTransport = new transport_1["default"]({
		    urls: URLSchemes.ws,
		    handlesActivityChecks: false,
		    supportsPing: false,
		    isInitialized: function () {
		        return Boolean(runtime_1["default"].getWebSocketAPI());
		    },
		    isSupported: function () {
		        return Boolean(runtime_1["default"].getWebSocketAPI());
		    },
		    getSocket: function (url) {
		        return runtime_1["default"].createWebSocket(url);
		    }
		});
		var httpConfiguration = {
		    urls: URLSchemes.http,
		    handlesActivityChecks: false,
		    supportsPing: true,
		    isInitialized: function () {
		        return true;
		    }
		};
		exports.streamingConfiguration = Collections.extend({ getSocket: function (url) {
		        return runtime_1["default"].HTTPFactory.createStreamingSocket(url);
		    }
		}, httpConfiguration);
		exports.pollingConfiguration = Collections.extend({ getSocket: function (url) {
		        return runtime_1["default"].HTTPFactory.createPollingSocket(url);
		    }
		}, httpConfiguration);
		var xhrConfiguration = {
		    isSupported: function () {
		        return runtime_1["default"].isXHRSupported();
		    }
		};
		var XHRStreamingTransport = new transport_1["default"](Collections.extend({}, exports.streamingConfiguration, xhrConfiguration));
		var XHRPollingTransport = new transport_1["default"](Collections.extend({}, exports.pollingConfiguration, xhrConfiguration));
		var Transports = {
		    ws: WSTransport,
		    xhr_streaming: XHRStreamingTransport,
		    xhr_polling: XHRPollingTransport
		};
		exports.__esModule = true;
		exports["default"] = Transports;


	/***/ }),
	/* 21 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var defaults_1 = __webpack_require__(5);
		function getGenericURL(baseScheme, params, path) {
		    var scheme = baseScheme + (params.encrypted ? "s" : "");
		    var host = params.encrypted ? params.hostEncrypted : params.hostUnencrypted;
		    return scheme + "://" + host + path;
		}
		function getGenericPath(key, queryString) {
		    var path = "/app/" + key;
		    var query = "?protocol=" + defaults_1["default"].PROTOCOL +
		        "&client=js" +
		        "&version=" + defaults_1["default"].VERSION +
		        (queryString ? ("&" + queryString) : "");
		    return path + query;
		}
		exports.ws = {
		    getInitial: function (key, params) {
		        return getGenericURL("ws", params, getGenericPath(key, "flash=false"));
		    }
		};
		exports.http = {
		    getInitial: function (key, params) {
		        var path = (params.httpPath || "/pusher") + getGenericPath(key);
		        return getGenericURL("http", params, path);
		    }
		};
		exports.sockjs = {
		    getInitial: function (key, params) {
		        return getGenericURL("http", params, params.httpPath || "/pusher");
		    },
		    getPath: function (key, params) {
		        return getGenericPath(key);
		    }
		};


	/***/ }),
	/* 22 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var transport_connection_1 = __webpack_require__(23);
		var Transport = (function () {
		    function Transport(hooks) {
		        this.hooks = hooks;
		    }
		    Transport.prototype.isSupported = function (environment) {
		        return this.hooks.isSupported(environment);
		    };
		    Transport.prototype.createConnection = function (name, priority, key, options) {
		        return new transport_connection_1["default"](this.hooks, name, priority, key, options);
		    };
		    return Transport;
		}());
		exports.__esModule = true;
		exports["default"] = Transport;


	/***/ }),
	/* 23 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var util_1 = __webpack_require__(11);
		var Collections = __webpack_require__(9);
		var dispatcher_1 = __webpack_require__(24);
		var logger_1 = __webpack_require__(8);
		var runtime_1 = __webpack_require__(2);
		var TransportConnection = (function (_super) {
		    __extends(TransportConnection, _super);
		    function TransportConnection(hooks, name, priority, key, options) {
		        _super.call(this);
		        this.initialize = runtime_1["default"].transportConnectionInitializer;
		        this.hooks = hooks;
		        this.name = name;
		        this.priority = priority;
		        this.key = key;
		        this.options = options;
		        this.state = "new";
		        this.timeline = options.timeline;
		        this.activityTimeout = options.activityTimeout;
		        this.id = this.timeline.generateUniqueID();
		    }
		    TransportConnection.prototype.handlesActivityChecks = function () {
		        return Boolean(this.hooks.handlesActivityChecks);
		    };
		    TransportConnection.prototype.supportsPing = function () {
		        return Boolean(this.hooks.supportsPing);
		    };
		    TransportConnection.prototype.connect = function () {
		        var _this = this;
		        if (this.socket || this.state !== "initialized") {
		            return false;
		        }
		        var url = this.hooks.urls.getInitial(this.key, this.options);
		        try {
		            this.socket = this.hooks.getSocket(url, this.options);
		        }
		        catch (e) {
		            util_1["default"].defer(function () {
		                _this.onError(e);
		                _this.changeState("closed");
		            });
		            return false;
		        }
		        this.bindListeners();
		        logger_1["default"].debug("Connecting", { transport: this.name, url: url });
		        this.changeState("connecting");
		        return true;
		    };
		    TransportConnection.prototype.close = function () {
		        if (this.socket) {
		            this.socket.close();
		            return true;
		        }
		        else {
		            return false;
		        }
		    };
		    TransportConnection.prototype.send = function (data) {
		        var _this = this;
		        if (this.state === "open") {
		            util_1["default"].defer(function () {
		                if (_this.socket) {
		                    _this.socket.send(data);
		                }
		            });
		            return true;
		        }
		        else {
		            return false;
		        }
		    };
		    TransportConnection.prototype.ping = function () {
		        if (this.state === "open" && this.supportsPing()) {
		            this.socket.ping();
		        }
		    };
		    TransportConnection.prototype.onOpen = function () {
		        if (this.hooks.beforeOpen) {
		            this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
		        }
		        this.changeState("open");
		        this.socket.onopen = undefined;
		    };
		    TransportConnection.prototype.onError = function (error) {
		        this.emit("error", { type: 'WebSocketError', error: error });
		        this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
		    };
		    TransportConnection.prototype.onClose = function (closeEvent) {
		        if (closeEvent) {
		            this.changeState("closed", {
		                code: closeEvent.code,
		                reason: closeEvent.reason,
		                wasClean: closeEvent.wasClean
		            });
		        }
		        else {
		            this.changeState("closed");
		        }
		        this.unbindListeners();
		        this.socket = undefined;
		    };
		    TransportConnection.prototype.onMessage = function (message) {
		        this.emit("message", message);
		    };
		    TransportConnection.prototype.onActivity = function () {
		        this.emit("activity");
		    };
		    TransportConnection.prototype.bindListeners = function () {
		        var _this = this;
		        this.socket.onopen = function () {
		            _this.onOpen();
		        };
		        this.socket.onerror = function (error) {
		            _this.onError(error);
		        };
		        this.socket.onclose = function (closeEvent) {
		            _this.onClose(closeEvent);
		        };
		        this.socket.onmessage = function (message) {
		            _this.onMessage(message);
		        };
		        if (this.supportsPing()) {
		            this.socket.onactivity = function () { _this.onActivity(); };
		        }
		    };
		    TransportConnection.prototype.unbindListeners = function () {
		        if (this.socket) {
		            this.socket.onopen = undefined;
		            this.socket.onerror = undefined;
		            this.socket.onclose = undefined;
		            this.socket.onmessage = undefined;
		            if (this.supportsPing()) {
		                this.socket.onactivity = undefined;
		            }
		        }
		    };
		    TransportConnection.prototype.changeState = function (state, params) {
		        this.state = state;
		        this.timeline.info(this.buildTimelineMessage({
		            state: state,
		            params: params
		        }));
		        this.emit(state, params);
		    };
		    TransportConnection.prototype.buildTimelineMessage = function (message) {
		        return Collections.extend({ cid: this.id }, message);
		    };
		    return TransportConnection;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = TransportConnection;


	/***/ }),
	/* 24 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var callback_registry_1 = __webpack_require__(25);
		var Dispatcher = (function () {
		    function Dispatcher(failThrough) {
		        this.callbacks = new callback_registry_1["default"]();
		        this.global_callbacks = [];
		        this.failThrough = failThrough;
		    }
		    Dispatcher.prototype.bind = function (eventName, callback, context) {
		        this.callbacks.add(eventName, callback, context);
		        return this;
		    };
		    Dispatcher.prototype.bind_global = function (callback) {
		        this.global_callbacks.push(callback);
		        return this;
		    };
		    Dispatcher.prototype.unbind = function (eventName, callback, context) {
		        this.callbacks.remove(eventName, callback, context);
		        return this;
		    };
		    Dispatcher.prototype.unbind_global = function (callback) {
		        if (!callback) {
		            this.global_callbacks = [];
		            return this;
		        }
		        this.global_callbacks = Collections.filter(this.global_callbacks || [], function (c) { return c !== callback; });
		        return this;
		    };
		    Dispatcher.prototype.unbind_all = function () {
		        this.unbind();
		        this.unbind_global();
		        return this;
		    };
		    Dispatcher.prototype.emit = function (eventName, data) {
		        var i;
		        for (i = 0; i < this.global_callbacks.length; i++) {
		            this.global_callbacks[i](eventName, data);
		        }
		        var callbacks = this.callbacks.get(eventName);
		        if (callbacks && callbacks.length > 0) {
		            for (i = 0; i < callbacks.length; i++) {
		                callbacks[i].fn.call(callbacks[i].context || (window), data);
		            }
		        }
		        else if (this.failThrough) {
		            this.failThrough(eventName, data);
		        }
		        return this;
		    };
		    return Dispatcher;
		}());
		exports.__esModule = true;
		exports["default"] = Dispatcher;


	/***/ }),
	/* 25 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var CallbackRegistry = (function () {
		    function CallbackRegistry() {
		        this._callbacks = {};
		    }
		    CallbackRegistry.prototype.get = function (name) {
		        return this._callbacks[prefix(name)];
		    };
		    CallbackRegistry.prototype.add = function (name, callback, context) {
		        var prefixedEventName = prefix(name);
		        this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];
		        this._callbacks[prefixedEventName].push({
		            fn: callback,
		            context: context
		        });
		    };
		    CallbackRegistry.prototype.remove = function (name, callback, context) {
		        if (!name && !callback && !context) {
		            this._callbacks = {};
		            return;
		        }
		        var names = name ? [prefix(name)] : Collections.keys(this._callbacks);
		        if (callback || context) {
		            this.removeCallback(names, callback, context);
		        }
		        else {
		            this.removeAllCallbacks(names);
		        }
		    };
		    CallbackRegistry.prototype.removeCallback = function (names, callback, context) {
		        Collections.apply(names, function (name) {
		            this._callbacks[name] = Collections.filter(this._callbacks[name] || [], function (binding) {
		                return (callback && callback !== binding.fn) ||
		                    (context && context !== binding.context);
		            });
		            if (this._callbacks[name].length === 0) {
		                delete this._callbacks[name];
		            }
		        }, this);
		    };
		    CallbackRegistry.prototype.removeAllCallbacks = function (names) {
		        Collections.apply(names, function (name) {
		            delete this._callbacks[name];
		        }, this);
		    };
		    return CallbackRegistry;
		}());
		exports.__esModule = true;
		exports["default"] = CallbackRegistry;
		function prefix(name) {
		    return "_" + name;
		}


	/***/ }),
	/* 26 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var dispatcher_1 = __webpack_require__(24);
		var NetInfo = (function (_super) {
		    __extends(NetInfo, _super);
		    function NetInfo() {
		        _super.call(this);
		        var self = this;
		        if (window.addEventListener !== undefined) {
		            window.addEventListener("online", function () {
		                self.emit('online');
		            }, false);
		            window.addEventListener("offline", function () {
		                self.emit('offline');
		            }, false);
		        }
		    }
		    NetInfo.prototype.isOnline = function () {
		        if (window.navigator.onLine === undefined) {
		            return true;
		        }
		        else {
		            return window.navigator.onLine;
		        }
		    };
		    return NetInfo;
		}(dispatcher_1["default"]));
		exports.NetInfo = NetInfo;
		exports.Network = new NetInfo();


	/***/ }),
	/* 27 */
	/***/ (function(module, exports) {

		"use strict";
		var getDefaultStrategy = function (config) {
		    var wsStrategy;
		    if (config.encrypted) {
		        wsStrategy = [
		            ":best_connected_ever",
		            ":ws_loop",
		            [":delayed", 2000, [":http_fallback_loop"]]
		        ];
		    }
		    else {
		        wsStrategy = [
		            ":best_connected_ever",
		            ":ws_loop",
		            [":delayed", 2000, [":wss_loop"]],
		            [":delayed", 5000, [":http_fallback_loop"]]
		        ];
		    }
		    return [
		        [":def", "ws_options", {
		                hostUnencrypted: config.wsHost + ":" + config.wsPort,
		                hostEncrypted: config.wsHost + ":" + config.wssPort
		            }],
		        [":def", "wss_options", [":extend", ":ws_options", {
		                    encrypted: true
		                }]],
		        [":def", "sockjs_options", {
		                hostUnencrypted: config.httpHost + ":" + config.httpPort,
		                hostEncrypted: config.httpHost + ":" + config.httpsPort,
		                httpPath: config.httpPath
		            }],
		        [":def", "timeouts", {
		                loop: true,
		                timeout: 15000,
		                timeoutLimit: 60000
		            }],
		        [":def", "ws_manager", [":transport_manager", {
		                    lives: 2,
		                    minPingDelay: 10000,
		                    maxPingDelay: config.activity_timeout
		                }]],
		        [":def", "streaming_manager", [":transport_manager", {
		                    lives: 2,
		                    minPingDelay: 10000,
		                    maxPingDelay: config.activity_timeout
		                }]],
		        [":def_transport", "ws", "ws", 3, ":ws_options", ":ws_manager"],
		        [":def_transport", "wss", "ws", 3, ":wss_options", ":ws_manager"],
		        [":def_transport", "sockjs", "sockjs", 1, ":sockjs_options"],
		        [":def_transport", "xhr_streaming", "xhr_streaming", 1, ":sockjs_options", ":streaming_manager"],
		        [":def_transport", "xdr_streaming", "xdr_streaming", 1, ":sockjs_options", ":streaming_manager"],
		        [":def_transport", "xhr_polling", "xhr_polling", 1, ":sockjs_options"],
		        [":def_transport", "xdr_polling", "xdr_polling", 1, ":sockjs_options"],
		        [":def", "ws_loop", [":sequential", ":timeouts", ":ws"]],
		        [":def", "wss_loop", [":sequential", ":timeouts", ":wss"]],
		        [":def", "sockjs_loop", [":sequential", ":timeouts", ":sockjs"]],
		        [":def", "streaming_loop", [":sequential", ":timeouts",
		                [":if", [":is_supported", ":xhr_streaming"],
		                    ":xhr_streaming",
		                    ":xdr_streaming"
		                ]
		            ]],
		        [":def", "polling_loop", [":sequential", ":timeouts",
		                [":if", [":is_supported", ":xhr_polling"],
		                    ":xhr_polling",
		                    ":xdr_polling"
		                ]
		            ]],
		        [":def", "http_loop", [":if", [":is_supported", ":streaming_loop"], [
		                    ":best_connected_ever",
		                    ":streaming_loop",
		                    [":delayed", 4000, [":polling_loop"]]
		                ], [
		                    ":polling_loop"
		                ]]],
		        [":def", "http_fallback_loop",
		            [":if", [":is_supported", ":http_loop"], [
		                    ":http_loop"
		                ], [
		                    ":sockjs_loop"
		                ]]
		        ],
		        [":def", "strategy",
		            [":cached", 1800000,
		                [":first_connected",
		                    [":if", [":is_supported", ":ws"],
		                        wsStrategy,
		                        ":http_fallback_loop"
		                    ]
		                ]
		            ]
		        ]
		    ];
		};
		exports.__esModule = true;
		exports["default"] = getDefaultStrategy;


	/***/ }),
	/* 28 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var dependencies_1 = __webpack_require__(3);
		function default_1() {
		    var self = this;
		    self.timeline.info(self.buildTimelineMessage({
		        transport: self.name + (self.options.encrypted ? "s" : "")
		    }));
		    if (self.hooks.isInitialized()) {
		        self.changeState("initialized");
		    }
		    else if (self.hooks.file) {
		        self.changeState("initializing");
		        dependencies_1.Dependencies.load(self.hooks.file, { encrypted: self.options.encrypted }, function (error, callback) {
		            if (self.hooks.isInitialized()) {
		                self.changeState("initialized");
		                callback(true);
		            }
		            else {
		                if (error) {
		                    self.onError(error);
		                }
		                self.onClose();
		                callback(false);
		            }
		        });
		    }
		    else {
		        self.onClose();
		    }
		}
		exports.__esModule = true;
		exports["default"] = default_1;


	/***/ }),
	/* 29 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var http_xdomain_request_1 = __webpack_require__(30);
		var http_1 = __webpack_require__(32);
		http_1["default"].createXDR = function (method, url) {
		    return this.createRequest(http_xdomain_request_1["default"], method, url);
		};
		exports.__esModule = true;
		exports["default"] = http_1["default"];


	/***/ }),
	/* 30 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var Errors = __webpack_require__(31);
		var hooks = {
		    getRequest: function (socket) {
		        var xdr = new window.XDomainRequest();
		        xdr.ontimeout = function () {
		            socket.emit("error", new Errors.RequestTimedOut());
		            socket.close();
		        };
		        xdr.onerror = function (e) {
		            socket.emit("error", e);
		            socket.close();
		        };
		        xdr.onprogress = function () {
		            if (xdr.responseText && xdr.responseText.length > 0) {
		                socket.onChunk(200, xdr.responseText);
		            }
		        };
		        xdr.onload = function () {
		            if (xdr.responseText && xdr.responseText.length > 0) {
		                socket.onChunk(200, xdr.responseText);
		            }
		            socket.emit("finished", 200);
		            socket.close();
		        };
		        return xdr;
		    },
		    abortRequest: function (xdr) {
		        xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
		        xdr.abort();
		    }
		};
		exports.__esModule = true;
		exports["default"] = hooks;


	/***/ }),
	/* 31 */
	/***/ (function(module, exports) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var BadEventName = (function (_super) {
		    __extends(BadEventName, _super);
		    function BadEventName() {
		        _super.apply(this, arguments);
		    }
		    return BadEventName;
		}(Error));
		exports.BadEventName = BadEventName;
		var RequestTimedOut = (function (_super) {
		    __extends(RequestTimedOut, _super);
		    function RequestTimedOut() {
		        _super.apply(this, arguments);
		    }
		    return RequestTimedOut;
		}(Error));
		exports.RequestTimedOut = RequestTimedOut;
		var TransportPriorityTooLow = (function (_super) {
		    __extends(TransportPriorityTooLow, _super);
		    function TransportPriorityTooLow() {
		        _super.apply(this, arguments);
		    }
		    return TransportPriorityTooLow;
		}(Error));
		exports.TransportPriorityTooLow = TransportPriorityTooLow;
		var TransportClosed = (function (_super) {
		    __extends(TransportClosed, _super);
		    function TransportClosed() {
		        _super.apply(this, arguments);
		    }
		    return TransportClosed;
		}(Error));
		exports.TransportClosed = TransportClosed;
		var UnsupportedTransport = (function (_super) {
		    __extends(UnsupportedTransport, _super);
		    function UnsupportedTransport() {
		        _super.apply(this, arguments);
		    }
		    return UnsupportedTransport;
		}(Error));
		exports.UnsupportedTransport = UnsupportedTransport;
		var UnsupportedStrategy = (function (_super) {
		    __extends(UnsupportedStrategy, _super);
		    function UnsupportedStrategy() {
		        _super.apply(this, arguments);
		    }
		    return UnsupportedStrategy;
		}(Error));
		exports.UnsupportedStrategy = UnsupportedStrategy;


	/***/ }),
	/* 32 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var http_request_1 = __webpack_require__(33);
		var http_socket_1 = __webpack_require__(34);
		var http_streaming_socket_1 = __webpack_require__(36);
		var http_polling_socket_1 = __webpack_require__(37);
		var http_xhr_request_1 = __webpack_require__(38);
		var HTTP = {
		    createStreamingSocket: function (url) {
		        return this.createSocket(http_streaming_socket_1["default"], url);
		    },
		    createPollingSocket: function (url) {
		        return this.createSocket(http_polling_socket_1["default"], url);
		    },
		    createSocket: function (hooks, url) {
		        return new http_socket_1["default"](hooks, url);
		    },
		    createXHR: function (method, url) {
		        return this.createRequest(http_xhr_request_1["default"], method, url);
		    },
		    createRequest: function (hooks, method, url) {
		        return new http_request_1["default"](hooks, method, url);
		    }
		};
		exports.__esModule = true;
		exports["default"] = HTTP;


	/***/ }),
	/* 33 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var runtime_1 = __webpack_require__(2);
		var dispatcher_1 = __webpack_require__(24);
		var MAX_BUFFER_LENGTH = 256 * 1024;
		var HTTPRequest = (function (_super) {
		    __extends(HTTPRequest, _super);
		    function HTTPRequest(hooks, method, url) {
		        _super.call(this);
		        this.hooks = hooks;
		        this.method = method;
		        this.url = url;
		    }
		    HTTPRequest.prototype.start = function (payload) {
		        var _this = this;
		        this.position = 0;
		        this.xhr = this.hooks.getRequest(this);
		        this.unloader = function () {
		            _this.close();
		        };
		        runtime_1["default"].addUnloadListener(this.unloader);
		        this.xhr.open(this.method, this.url, true);
		        if (this.xhr.setRequestHeader) {
		            this.xhr.setRequestHeader("Content-Type", "application/json");
		        }
		        this.xhr.send(payload);
		    };
		    HTTPRequest.prototype.close = function () {
		        if (this.unloader) {
		            runtime_1["default"].removeUnloadListener(this.unloader);
		            this.unloader = null;
		        }
		        if (this.xhr) {
		            this.hooks.abortRequest(this.xhr);
		            this.xhr = null;
		        }
		    };
		    HTTPRequest.prototype.onChunk = function (status, data) {
		        while (true) {
		            var chunk = this.advanceBuffer(data);
		            if (chunk) {
		                this.emit("chunk", { status: status, data: chunk });
		            }
		            else {
		                break;
		            }
		        }
		        if (this.isBufferTooLong(data)) {
		            this.emit("buffer_too_long");
		        }
		    };
		    HTTPRequest.prototype.advanceBuffer = function (buffer) {
		        var unreadData = buffer.slice(this.position);
		        var endOfLinePosition = unreadData.indexOf("\n");
		        if (endOfLinePosition !== -1) {
		            this.position += endOfLinePosition + 1;
		            return unreadData.slice(0, endOfLinePosition);
		        }
		        else {
		            return null;
		        }
		    };
		    HTTPRequest.prototype.isBufferTooLong = function (buffer) {
		        return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
		    };
		    return HTTPRequest;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = HTTPRequest;


	/***/ }),
	/* 34 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var state_1 = __webpack_require__(35);
		var util_1 = __webpack_require__(11);
		var runtime_1 = __webpack_require__(2);
		var autoIncrement = 1;
		var HTTPSocket = (function () {
		    function HTTPSocket(hooks, url) {
		        this.hooks = hooks;
		        this.session = randomNumber(1000) + "/" + randomString(8);
		        this.location = getLocation(url);
		        this.readyState = state_1["default"].CONNECTING;
		        this.openStream();
		    }
		    HTTPSocket.prototype.send = function (payload) {
		        return this.sendRaw(JSON.stringify([payload]));
		    };
		    HTTPSocket.prototype.ping = function () {
		        this.hooks.sendHeartbeat(this);
		    };
		    HTTPSocket.prototype.close = function (code, reason) {
		        this.onClose(code, reason, true);
		    };
		    HTTPSocket.prototype.sendRaw = function (payload) {
		        if (this.readyState === state_1["default"].OPEN) {
		            try {
		                runtime_1["default"].createSocketRequest("POST", getUniqueURL(getSendURL(this.location, this.session))).start(payload);
		                return true;
		            }
		            catch (e) {
		                return false;
		            }
		        }
		        else {
		            return false;
		        }
		    };
		    HTTPSocket.prototype.reconnect = function () {
		        this.closeStream();
		        this.openStream();
		    };
		    ;
		    HTTPSocket.prototype.onClose = function (code, reason, wasClean) {
		        this.closeStream();
		        this.readyState = state_1["default"].CLOSED;
		        if (this.onclose) {
		            this.onclose({
		                code: code,
		                reason: reason,
		                wasClean: wasClean
		            });
		        }
		    };
		    HTTPSocket.prototype.onChunk = function (chunk) {
		        if (chunk.status !== 200) {
		            return;
		        }
		        if (this.readyState === state_1["default"].OPEN) {
		            this.onActivity();
		        }
		        var payload;
		        var type = chunk.data.slice(0, 1);
		        switch (type) {
		            case 'o':
		                payload = JSON.parse(chunk.data.slice(1) || '{}');
		                this.onOpen(payload);
		                break;
		            case 'a':
		                payload = JSON.parse(chunk.data.slice(1) || '[]');
		                for (var i = 0; i < payload.length; i++) {
		                    this.onEvent(payload[i]);
		                }
		                break;
		            case 'm':
		                payload = JSON.parse(chunk.data.slice(1) || 'null');
		                this.onEvent(payload);
		                break;
		            case 'h':
		                this.hooks.onHeartbeat(this);
		                break;
		            case 'c':
		                payload = JSON.parse(chunk.data.slice(1) || '[]');
		                this.onClose(payload[0], payload[1], true);
		                break;
		        }
		    };
		    HTTPSocket.prototype.onOpen = function (options) {
		        if (this.readyState === state_1["default"].CONNECTING) {
		            if (options && options.hostname) {
		                this.location.base = replaceHost(this.location.base, options.hostname);
		            }
		            this.readyState = state_1["default"].OPEN;
		            if (this.onopen) {
		                this.onopen();
		            }
		        }
		        else {
		            this.onClose(1006, "Server lost session", true);
		        }
		    };
		    HTTPSocket.prototype.onEvent = function (event) {
		        if (this.readyState === state_1["default"].OPEN && this.onmessage) {
		            this.onmessage({ data: event });
		        }
		    };
		    HTTPSocket.prototype.onActivity = function () {
		        if (this.onactivity) {
		            this.onactivity();
		        }
		    };
		    HTTPSocket.prototype.onError = function (error) {
		        if (this.onerror) {
		            this.onerror(error);
		        }
		    };
		    HTTPSocket.prototype.openStream = function () {
		        var _this = this;
		        this.stream = runtime_1["default"].createSocketRequest("POST", getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
		        this.stream.bind("chunk", function (chunk) {
		            _this.onChunk(chunk);
		        });
		        this.stream.bind("finished", function (status) {
		            _this.hooks.onFinished(_this, status);
		        });
		        this.stream.bind("buffer_too_long", function () {
		            _this.reconnect();
		        });
		        try {
		            this.stream.start();
		        }
		        catch (error) {
		            util_1["default"].defer(function () {
		                _this.onError(error);
		                _this.onClose(1006, "Could not start streaming", false);
		            });
		        }
		    };
		    HTTPSocket.prototype.closeStream = function () {
		        if (this.stream) {
		            this.stream.unbind_all();
		            this.stream.close();
		            this.stream = null;
		        }
		    };
		    return HTTPSocket;
		}());
		function getLocation(url) {
		    var parts = /([^\?]*)\/*(\??.*)/.exec(url);
		    return {
		        base: parts[1],
		        queryString: parts[2]
		    };
		}
		function getSendURL(url, session) {
		    return url.base + "/" + session + "/xhr_send";
		}
		function getUniqueURL(url) {
		    var separator = (url.indexOf('?') === -1) ? "?" : "&";
		    return url + separator + "t=" + (+new Date()) + "&n=" + autoIncrement++;
		}
		function replaceHost(url, hostname) {
		    var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
		    return urlParts[1] + hostname + urlParts[3];
		}
		function randomNumber(max) {
		    return Math.floor(Math.random() * max);
		}
		function randomString(length) {
		    var result = [];
		    for (var i = 0; i < length; i++) {
		        result.push(randomNumber(32).toString(32));
		    }
		    return result.join('');
		}
		exports.__esModule = true;
		exports["default"] = HTTPSocket;


	/***/ }),
	/* 35 */
	/***/ (function(module, exports) {

		"use strict";
		var State;
		(function (State) {
		    State[State["CONNECTING"] = 0] = "CONNECTING";
		    State[State["OPEN"] = 1] = "OPEN";
		    State[State["CLOSED"] = 3] = "CLOSED";
		})(State || (State = {}));
		exports.__esModule = true;
		exports["default"] = State;


	/***/ }),
	/* 36 */
	/***/ (function(module, exports) {

		"use strict";
		var hooks = {
		    getReceiveURL: function (url, session) {
		        return url.base + "/" + session + "/xhr_streaming" + url.queryString;
		    },
		    onHeartbeat: function (socket) {
		        socket.sendRaw("[]");
		    },
		    sendHeartbeat: function (socket) {
		        socket.sendRaw("[]");
		    },
		    onFinished: function (socket, status) {
		        socket.onClose(1006, "Connection interrupted (" + status + ")", false);
		    }
		};
		exports.__esModule = true;
		exports["default"] = hooks;


	/***/ }),
	/* 37 */
	/***/ (function(module, exports) {

		"use strict";
		var hooks = {
		    getReceiveURL: function (url, session) {
		        return url.base + "/" + session + "/xhr" + url.queryString;
		    },
		    onHeartbeat: function () {
		    },
		    sendHeartbeat: function (socket) {
		        socket.sendRaw("[]");
		    },
		    onFinished: function (socket, status) {
		        if (status === 200) {
		            socket.reconnect();
		        }
		        else {
		            socket.onClose(1006, "Connection interrupted (" + status + ")", false);
		        }
		    }
		};
		exports.__esModule = true;
		exports["default"] = hooks;


	/***/ }),
	/* 38 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var runtime_1 = __webpack_require__(2);
		var hooks = {
		    getRequest: function (socket) {
		        var Constructor = runtime_1["default"].getXHRAPI();
		        var xhr = new Constructor();
		        xhr.onreadystatechange = xhr.onprogress = function () {
		            switch (xhr.readyState) {
		                case 3:
		                    if (xhr.responseText && xhr.responseText.length > 0) {
		                        socket.onChunk(xhr.status, xhr.responseText);
		                    }
		                    break;
		                case 4:
		                    if (xhr.responseText && xhr.responseText.length > 0) {
		                        socket.onChunk(xhr.status, xhr.responseText);
		                    }
		                    socket.emit("finished", xhr.status);
		                    socket.close();
		                    break;
		            }
		        };
		        return xhr;
		    },
		    abortRequest: function (xhr) {
		        xhr.onreadystatechange = null;
		        xhr.abort();
		    }
		};
		exports.__esModule = true;
		exports["default"] = hooks;


	/***/ }),
	/* 39 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var util_1 = __webpack_require__(11);
		var level_1 = __webpack_require__(40);
		var Timeline = (function () {
		    function Timeline(key, session, options) {
		        this.key = key;
		        this.session = session;
		        this.events = [];
		        this.options = options || {};
		        this.sent = 0;
		        this.uniqueID = 0;
		    }
		    Timeline.prototype.log = function (level, event) {
		        if (level <= this.options.level) {
		            this.events.push(Collections.extend({}, event, { timestamp: util_1["default"].now() }));
		            if (this.options.limit && this.events.length > this.options.limit) {
		                this.events.shift();
		            }
		        }
		    };
		    Timeline.prototype.error = function (event) {
		        this.log(level_1["default"].ERROR, event);
		    };
		    Timeline.prototype.info = function (event) {
		        this.log(level_1["default"].INFO, event);
		    };
		    Timeline.prototype.debug = function (event) {
		        this.log(level_1["default"].DEBUG, event);
		    };
		    Timeline.prototype.isEmpty = function () {
		        return this.events.length === 0;
		    };
		    Timeline.prototype.send = function (sendfn, callback) {
		        var _this = this;
		        var data = Collections.extend({
		            session: this.session,
		            bundle: this.sent + 1,
		            key: this.key,
		            lib: "js",
		            version: this.options.version,
		            cluster: this.options.cluster,
		            features: this.options.features,
		            timeline: this.events
		        }, this.options.params);
		        this.events = [];
		        sendfn(data, function (error, result) {
		            if (!error) {
		                _this.sent++;
		            }
		            if (callback) {
		                callback(error, result);
		            }
		        });
		        return true;
		    };
		    Timeline.prototype.generateUniqueID = function () {
		        this.uniqueID++;
		        return this.uniqueID;
		    };
		    return Timeline;
		}());
		exports.__esModule = true;
		exports["default"] = Timeline;


	/***/ }),
	/* 40 */
	/***/ (function(module, exports) {

		"use strict";
		var TimelineLevel;
		(function (TimelineLevel) {
		    TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
		    TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
		    TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
		})(TimelineLevel || (TimelineLevel = {}));
		exports.__esModule = true;
		exports["default"] = TimelineLevel;


	/***/ }),
	/* 41 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var util_1 = __webpack_require__(11);
		var transport_manager_1 = __webpack_require__(42);
		var Errors = __webpack_require__(31);
		var transport_strategy_1 = __webpack_require__(56);
		var sequential_strategy_1 = __webpack_require__(57);
		var best_connected_ever_strategy_1 = __webpack_require__(58);
		var cached_strategy_1 = __webpack_require__(59);
		var delayed_strategy_1 = __webpack_require__(60);
		var if_strategy_1 = __webpack_require__(61);
		var first_connected_strategy_1 = __webpack_require__(62);
		var runtime_1 = __webpack_require__(2);
		var Transports = runtime_1["default"].Transports;
		exports.build = function (scheme, options) {
		    var context = Collections.extend({}, globalContext, options);
		    return evaluate(scheme, context)[1].strategy;
		};
		var UnsupportedStrategy = {
		    isSupported: function () {
		        return false;
		    },
		    connect: function (_, callback) {
		        var deferred = util_1["default"].defer(function () {
		            callback(new Errors.UnsupportedStrategy());
		        });
		        return {
		            abort: function () {
		                deferred.ensureAborted();
		            },
		            forceMinPriority: function () { }
		        };
		    }
		};
		function returnWithOriginalContext(f) {
		    return function (context) {
		        return [f.apply(this, arguments), context];
		    };
		}
		var globalContext = {
		    extend: function (context, first, second) {
		        return [Collections.extend({}, first, second), context];
		    },
		    def: function (context, name, value) {
		        if (context[name] !== undefined) {
		            throw "Redefining symbol " + name;
		        }
		        context[name] = value;
		        return [undefined, context];
		    },
		    def_transport: function (context, name, type, priority, options, manager) {
		        var transportClass = Transports[type];
		        if (!transportClass) {
		            throw new Errors.UnsupportedTransport(type);
		        }
		        var enabled = (!context.enabledTransports ||
		            Collections.arrayIndexOf(context.enabledTransports, name) !== -1) &&
		            (!context.disabledTransports ||
		                Collections.arrayIndexOf(context.disabledTransports, name) === -1);
		        var transport;
		        if (enabled) {
		            transport = new transport_strategy_1["default"](name, priority, manager ? manager.getAssistant(transportClass) : transportClass, Collections.extend({
		                key: context.key,
		                encrypted: context.encrypted,
		                timeline: context.timeline,
		                ignoreNullOrigin: context.ignoreNullOrigin
		            }, options));
		        }
		        else {
		            transport = UnsupportedStrategy;
		        }
		        var newContext = context.def(context, name, transport)[1];
		        newContext.Transports = context.Transports || {};
		        newContext.Transports[name] = transport;
		        return [undefined, newContext];
		    },
		    transport_manager: returnWithOriginalContext(function (_, options) {
		        return new transport_manager_1["default"](options);
		    }),
		    sequential: returnWithOriginalContext(function (_, options) {
		        var strategies = Array.prototype.slice.call(arguments, 2);
		        return new sequential_strategy_1["default"](strategies, options);
		    }),
		    cached: returnWithOriginalContext(function (context, ttl, strategy) {
		        return new cached_strategy_1["default"](strategy, context.Transports, {
		            ttl: ttl,
		            timeline: context.timeline,
		            encrypted: context.encrypted
		        });
		    }),
		    first_connected: returnWithOriginalContext(function (_, strategy) {
		        return new first_connected_strategy_1["default"](strategy);
		    }),
		    best_connected_ever: returnWithOriginalContext(function () {
		        var strategies = Array.prototype.slice.call(arguments, 1);
		        return new best_connected_ever_strategy_1["default"](strategies);
		    }),
		    delayed: returnWithOriginalContext(function (_, delay, strategy) {
		        return new delayed_strategy_1["default"](strategy, { delay: delay });
		    }),
		    "if": returnWithOriginalContext(function (_, test, trueBranch, falseBranch) {
		        return new if_strategy_1["default"](test, trueBranch, falseBranch);
		    }),
		    is_supported: returnWithOriginalContext(function (_, strategy) {
		        return function () {
		            return strategy.isSupported();
		        };
		    })
		};
		function isSymbol(expression) {
		    return (typeof expression === "string") && expression.charAt(0) === ":";
		}
		function getSymbolValue(expression, context) {
		    return context[expression.slice(1)];
		}
		function evaluateListOfExpressions(expressions, context) {
		    if (expressions.length === 0) {
		        return [[], context];
		    }
		    var head = evaluate(expressions[0], context);
		    var tail = evaluateListOfExpressions(expressions.slice(1), head[1]);
		    return [[head[0]].concat(tail[0]), tail[1]];
		}
		function evaluateString(expression, context) {
		    if (!isSymbol(expression)) {
		        return [expression, context];
		    }
		    var value = getSymbolValue(expression, context);
		    if (value === undefined) {
		        throw "Undefined symbol " + expression;
		    }
		    return [value, context];
		}
		function evaluateArray(expression, context) {
		    if (isSymbol(expression[0])) {
		        var f = getSymbolValue(expression[0], context);
		        if (expression.length > 1) {
		            if (typeof f !== "function") {
		                throw "Calling non-function " + expression[0];
		            }
		            var args = [Collections.extend({}, context)].concat(Collections.map(expression.slice(1), function (arg) {
		                return evaluate(arg, Collections.extend({}, context))[0];
		            }));
		            return f.apply(this, args);
		        }
		        else {
		            return [f, context];
		        }
		    }
		    else {
		        return evaluateListOfExpressions(expression, context);
		    }
		}
		function evaluate(expression, context) {
		    if (typeof expression === "string") {
		        return evaluateString(expression, context);
		    }
		    else if (typeof expression === "object") {
		        if (expression instanceof Array && expression.length > 0) {
		            return evaluateArray(expression, context);
		        }
		    }
		    return [expression, context];
		}


	/***/ }),
	/* 42 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var factory_1 = __webpack_require__(43);
		var TransportManager = (function () {
		    function TransportManager(options) {
		        this.options = options || {};
		        this.livesLeft = this.options.lives || Infinity;
		    }
		    TransportManager.prototype.getAssistant = function (transport) {
		        return factory_1["default"].createAssistantToTheTransportManager(this, transport, {
		            minPingDelay: this.options.minPingDelay,
		            maxPingDelay: this.options.maxPingDelay
		        });
		    };
		    TransportManager.prototype.isAlive = function () {
		        return this.livesLeft > 0;
		    };
		    TransportManager.prototype.reportDeath = function () {
		        this.livesLeft -= 1;
		    };
		    return TransportManager;
		}());
		exports.__esModule = true;
		exports["default"] = TransportManager;


	/***/ }),
	/* 43 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var assistant_to_the_transport_manager_1 = __webpack_require__(44);
		var handshake_1 = __webpack_require__(45);
		var pusher_authorizer_1 = __webpack_require__(48);
		var timeline_sender_1 = __webpack_require__(49);
		var presence_channel_1 = __webpack_require__(50);
		var private_channel_1 = __webpack_require__(51);
		var channel_1 = __webpack_require__(52);
		var connection_manager_1 = __webpack_require__(54);
		var channels_1 = __webpack_require__(55);
		var Factory = {
		    createChannels: function () {
		        return new channels_1["default"]();
		    },
		    createConnectionManager: function (key, options) {
		        return new connection_manager_1["default"](key, options);
		    },
		    createChannel: function (name, pusher) {
		        return new channel_1["default"](name, pusher);
		    },
		    createPrivateChannel: function (name, pusher) {
		        return new private_channel_1["default"](name, pusher);
		    },
		    createPresenceChannel: function (name, pusher) {
		        return new presence_channel_1["default"](name, pusher);
		    },
		    createTimelineSender: function (timeline, options) {
		        return new timeline_sender_1["default"](timeline, options);
		    },
		    createAuthorizer: function (channel, options) {
		        if (options.authorizer) {
		            return options.authorizer(channel, options);
		        }
		        return new pusher_authorizer_1["default"](channel, options);
		    },
		    createHandshake: function (transport, callback) {
		        return new handshake_1["default"](transport, callback);
		    },
		    createAssistantToTheTransportManager: function (manager, transport, options) {
		        return new assistant_to_the_transport_manager_1["default"](manager, transport, options);
		    }
		};
		exports.__esModule = true;
		exports["default"] = Factory;


	/***/ }),
	/* 44 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var util_1 = __webpack_require__(11);
		var Collections = __webpack_require__(9);
		var AssistantToTheTransportManager = (function () {
		    function AssistantToTheTransportManager(manager, transport, options) {
		        this.manager = manager;
		        this.transport = transport;
		        this.minPingDelay = options.minPingDelay;
		        this.maxPingDelay = options.maxPingDelay;
		        this.pingDelay = undefined;
		    }
		    AssistantToTheTransportManager.prototype.createConnection = function (name, priority, key, options) {
		        var _this = this;
		        options = Collections.extend({}, options, {
		            activityTimeout: this.pingDelay
		        });
		        var connection = this.transport.createConnection(name, priority, key, options);
		        var openTimestamp = null;
		        var onOpen = function () {
		            connection.unbind("open", onOpen);
		            connection.bind("closed", onClosed);
		            openTimestamp = util_1["default"].now();
		        };
		        var onClosed = function (closeEvent) {
		            connection.unbind("closed", onClosed);
		            if (closeEvent.code === 1002 || closeEvent.code === 1003) {
		                _this.manager.reportDeath();
		            }
		            else if (!closeEvent.wasClean && openTimestamp) {
		                var lifespan = util_1["default"].now() - openTimestamp;
		                if (lifespan < 2 * _this.maxPingDelay) {
		                    _this.manager.reportDeath();
		                    _this.pingDelay = Math.max(lifespan / 2, _this.minPingDelay);
		                }
		            }
		        };
		        connection.bind("open", onOpen);
		        return connection;
		    };
		    AssistantToTheTransportManager.prototype.isSupported = function (environment) {
		        return this.manager.isAlive() && this.transport.isSupported(environment);
		    };
		    return AssistantToTheTransportManager;
		}());
		exports.__esModule = true;
		exports["default"] = AssistantToTheTransportManager;


	/***/ }),
	/* 45 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var Protocol = __webpack_require__(46);
		var connection_1 = __webpack_require__(47);
		var Handshake = (function () {
		    function Handshake(transport, callback) {
		        this.transport = transport;
		        this.callback = callback;
		        this.bindListeners();
		    }
		    Handshake.prototype.close = function () {
		        this.unbindListeners();
		        this.transport.close();
		    };
		    Handshake.prototype.bindListeners = function () {
		        var _this = this;
		        this.onMessage = function (m) {
		            _this.unbindListeners();
		            var result;
		            try {
		                result = Protocol.processHandshake(m);
		            }
		            catch (e) {
		                _this.finish("error", { error: e });
		                _this.transport.close();
		                return;
		            }
		            if (result.action === "connected") {
		                _this.finish("connected", {
		                    connection: new connection_1["default"](result.id, _this.transport),
		                    activityTimeout: result.activityTimeout
		                });
		            }
		            else {
		                _this.finish(result.action, { error: result.error });
		                _this.transport.close();
		            }
		        };
		        this.onClosed = function (closeEvent) {
		            _this.unbindListeners();
		            var action = Protocol.getCloseAction(closeEvent) || "backoff";
		            var error = Protocol.getCloseError(closeEvent);
		            _this.finish(action, { error: error });
		        };
		        this.transport.bind("message", this.onMessage);
		        this.transport.bind("closed", this.onClosed);
		    };
		    Handshake.prototype.unbindListeners = function () {
		        this.transport.unbind("message", this.onMessage);
		        this.transport.unbind("closed", this.onClosed);
		    };
		    Handshake.prototype.finish = function (action, params) {
		        this.callback(Collections.extend({ transport: this.transport, action: action }, params));
		    };
		    return Handshake;
		}());
		exports.__esModule = true;
		exports["default"] = Handshake;


	/***/ }),
	/* 46 */
	/***/ (function(module, exports) {

		"use strict";
		exports.decodeMessage = function (message) {
		    try {
		        var params = JSON.parse(message.data);
		        if (typeof params.data === 'string') {
		            try {
		                params.data = JSON.parse(params.data);
		            }
		            catch (e) {
		                if (!(e instanceof SyntaxError)) {
		                    throw e;
		                }
		            }
		        }
		        return params;
		    }
		    catch (e) {
		        throw { type: 'MessageParseError', error: e, data: message.data };
		    }
		};
		exports.encodeMessage = function (message) {
		    return JSON.stringify(message);
		};
		exports.processHandshake = function (message) {
		    message = exports.decodeMessage(message);
		    if (message.event === "pusher:connection_established") {
		        if (!message.data.activity_timeout) {
		            throw "No activity timeout specified in handshake";
		        }
		        return {
		            action: "connected",
		            id: message.data.socket_id,
		            activityTimeout: message.data.activity_timeout * 1000
		        };
		    }
		    else if (message.event === "pusher:error") {
		        return {
		            action: this.getCloseAction(message.data),
		            error: this.getCloseError(message.data)
		        };
		    }
		    else {
		        throw "Invalid handshake";
		    }
		};
		exports.getCloseAction = function (closeEvent) {
		    if (closeEvent.code < 4000) {
		        if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
		            return "backoff";
		        }
		        else {
		            return null;
		        }
		    }
		    else if (closeEvent.code === 4000) {
		        return "ssl_only";
		    }
		    else if (closeEvent.code < 4100) {
		        return "refused";
		    }
		    else if (closeEvent.code < 4200) {
		        return "backoff";
		    }
		    else if (closeEvent.code < 4300) {
		        return "retry";
		    }
		    else {
		        return "refused";
		    }
		};
		exports.getCloseError = function (closeEvent) {
		    if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
		        return {
		            type: 'PusherError',
		            data: {
		                code: closeEvent.code,
		                message: closeEvent.reason || closeEvent.message
		            }
		        };
		    }
		    else {
		        return null;
		    }
		};


	/***/ }),
	/* 47 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var Collections = __webpack_require__(9);
		var dispatcher_1 = __webpack_require__(24);
		var Protocol = __webpack_require__(46);
		var logger_1 = __webpack_require__(8);
		var Connection = (function (_super) {
		    __extends(Connection, _super);
		    function Connection(id, transport) {
		        _super.call(this);
		        this.id = id;
		        this.transport = transport;
		        this.activityTimeout = transport.activityTimeout;
		        this.bindListeners();
		    }
		    Connection.prototype.handlesActivityChecks = function () {
		        return this.transport.handlesActivityChecks();
		    };
		    Connection.prototype.send = function (data) {
		        return this.transport.send(data);
		    };
		    Connection.prototype.send_event = function (name, data, channel) {
		        var message = { event: name, data: data };
		        if (channel) {
		            message.channel = channel;
		        }
		        logger_1["default"].debug('Event sent', message);
		        return this.send(Protocol.encodeMessage(message));
		    };
		    Connection.prototype.ping = function () {
		        if (this.transport.supportsPing()) {
		            this.transport.ping();
		        }
		        else {
		            this.send_event('pusher:ping', {});
		        }
		    };
		    Connection.prototype.close = function () {
		        this.transport.close();
		    };
		    Connection.prototype.bindListeners = function () {
		        var _this = this;
		        var listeners = {
		            message: function (m) {
		                var message;
		                try {
		                    message = Protocol.decodeMessage(m);
		                }
		                catch (e) {
		                    _this.emit('error', {
		                        type: 'MessageParseError',
		                        error: e,
		                        data: m.data
		                    });
		                }
		                if (message !== undefined) {
		                    logger_1["default"].debug('Event recd', message);
		                    switch (message.event) {
		                        case 'pusher:error':
		                            _this.emit('error', { type: 'PusherError', data: message.data });
		                            break;
		                        case 'pusher:ping':
		                            _this.emit("ping");
		                            break;
		                        case 'pusher:pong':
		                            _this.emit("pong");
		                            break;
		                    }
		                    _this.emit('message', message);
		                }
		            },
		            activity: function () {
		                _this.emit("activity");
		            },
		            error: function (error) {
		                _this.emit("error", { type: "WebSocketError", error: error });
		            },
		            closed: function (closeEvent) {
		                unbindListeners();
		                if (closeEvent && closeEvent.code) {
		                    _this.handleCloseEvent(closeEvent);
		                }
		                _this.transport = null;
		                _this.emit("closed");
		            }
		        };
		        var unbindListeners = function () {
		            Collections.objectApply(listeners, function (listener, event) {
		                _this.transport.unbind(event, listener);
		            });
		        };
		        Collections.objectApply(listeners, function (listener, event) {
		            _this.transport.bind(event, listener);
		        });
		    };
		    Connection.prototype.handleCloseEvent = function (closeEvent) {
		        var action = Protocol.getCloseAction(closeEvent);
		        var error = Protocol.getCloseError(closeEvent);
		        if (error) {
		            this.emit('error', error);
		        }
		        if (action) {
		            this.emit(action);
		        }
		    };
		    return Connection;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = Connection;


	/***/ }),
	/* 48 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var runtime_1 = __webpack_require__(2);
		var PusherAuthorizer = (function () {
		    function PusherAuthorizer(channel, options) {
		        this.channel = channel;
		        var authTransport = options.authTransport;
		        if (typeof runtime_1["default"].getAuthorizers()[authTransport] === "undefined") {
		            throw "'" + authTransport + "' is not a recognized auth transport";
		        }
		        this.type = authTransport;
		        this.options = options;
		        this.authOptions = (options || {}).auth || {};
		    }
		    PusherAuthorizer.prototype.composeQuery = function (socketId) {
		        var query = 'socket_id=' + encodeURIComponent(socketId) +
		            '&channel_name=' + encodeURIComponent(this.channel.name);
		        for (var i in this.authOptions.params) {
		            query += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(this.authOptions.params[i]);
		        }
		        return query;
		    };
		    PusherAuthorizer.prototype.authorize = function (socketId, callback) {
		        PusherAuthorizer.authorizers = PusherAuthorizer.authorizers || runtime_1["default"].getAuthorizers();
		        return PusherAuthorizer.authorizers[this.type].call(this, runtime_1["default"], socketId, callback);
		    };
		    return PusherAuthorizer;
		}());
		exports.__esModule = true;
		exports["default"] = PusherAuthorizer;


	/***/ }),
	/* 49 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var runtime_1 = __webpack_require__(2);
		var TimelineSender = (function () {
		    function TimelineSender(timeline, options) {
		        this.timeline = timeline;
		        this.options = options || {};
		    }
		    TimelineSender.prototype.send = function (encrypted, callback) {
		        if (this.timeline.isEmpty()) {
		            return;
		        }
		        this.timeline.send(runtime_1["default"].TimelineTransport.getAgent(this, encrypted), callback);
		    };
		    return TimelineSender;
		}());
		exports.__esModule = true;
		exports["default"] = TimelineSender;


	/***/ }),
	/* 50 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var private_channel_1 = __webpack_require__(51);
		var logger_1 = __webpack_require__(8);
		var members_1 = __webpack_require__(53);
		var url_store_1 = __webpack_require__(14);
		var PresenceChannel = (function (_super) {
		    __extends(PresenceChannel, _super);
		    function PresenceChannel(name, pusher) {
		        _super.call(this, name, pusher);
		        this.members = new members_1["default"]();
		    }
		    PresenceChannel.prototype.authorize = function (socketId, callback) {
		        var _this = this;
		        _super.prototype.authorize.call(this, socketId, function (error, authData) {
		            if (!error) {
		                if (authData.channel_data === undefined) {
		                    var suffix = url_store_1["default"].buildLogSuffix("authenticationEndpoint");
		                    logger_1["default"].warn(("Invalid auth response for channel '" + _this.name + "',") +
		                        ("expected 'channel_data' field. " + suffix));
		                    callback("Invalid auth response");
		                    return;
		                }
		                var channelData = JSON.parse(authData.channel_data);
		                _this.members.setMyID(channelData.user_id);
		            }
		            callback(error, authData);
		        });
		    };
		    PresenceChannel.prototype.handleEvent = function (event, data) {
		        switch (event) {
		            case "pusher_internal:subscription_succeeded":
		                this.subscriptionPending = false;
		                this.subscribed = true;
		                if (this.subscriptionCancelled) {
		                    this.pusher.unsubscribe(this.name);
		                }
		                else {
		                    this.members.onSubscription(data);
		                    this.emit("pusher:subscription_succeeded", this.members);
		                }
		                break;
		            case "pusher_internal:member_added":
		                var addedMember = this.members.addMember(data);
		                this.emit('pusher:member_added', addedMember);
		                break;
		            case "pusher_internal:member_removed":
		                var removedMember = this.members.removeMember(data);
		                if (removedMember) {
		                    this.emit('pusher:member_removed', removedMember);
		                }
		                break;
		            default:
		                private_channel_1["default"].prototype.handleEvent.call(this, event, data);
		        }
		    };
		    PresenceChannel.prototype.disconnect = function () {
		        this.members.reset();
		        _super.prototype.disconnect.call(this);
		    };
		    return PresenceChannel;
		}(private_channel_1["default"]));
		exports.__esModule = true;
		exports["default"] = PresenceChannel;


	/***/ }),
	/* 51 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var factory_1 = __webpack_require__(43);
		var channel_1 = __webpack_require__(52);
		var PrivateChannel = (function (_super) {
		    __extends(PrivateChannel, _super);
		    function PrivateChannel() {
		        _super.apply(this, arguments);
		    }
		    PrivateChannel.prototype.authorize = function (socketId, callback) {
		        var authorizer = factory_1["default"].createAuthorizer(this, this.pusher.config);
		        return authorizer.authorize(socketId, callback);
		    };
		    return PrivateChannel;
		}(channel_1["default"]));
		exports.__esModule = true;
		exports["default"] = PrivateChannel;


	/***/ }),
	/* 52 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var dispatcher_1 = __webpack_require__(24);
		var Errors = __webpack_require__(31);
		var logger_1 = __webpack_require__(8);
		var Channel = (function (_super) {
		    __extends(Channel, _super);
		    function Channel(name, pusher) {
		        _super.call(this, function (event, data) {
		            logger_1["default"].debug('No callbacks on ' + name + ' for ' + event);
		        });
		        this.name = name;
		        this.pusher = pusher;
		        this.subscribed = false;
		        this.subscriptionPending = false;
		        this.subscriptionCancelled = false;
		    }
		    Channel.prototype.authorize = function (socketId, callback) {
		        return callback(false, {});
		    };
		    Channel.prototype.trigger = function (event, data) {
		        if (event.indexOf("client-") !== 0) {
		            throw new Errors.BadEventName("Event '" + event + "' does not start with 'client-'");
		        }
		        return this.pusher.send_event(event, data, this.name);
		    };
		    Channel.prototype.disconnect = function () {
		        this.subscribed = false;
		        this.subscriptionPending = false;
		    };
		    Channel.prototype.handleEvent = function (event, data) {
		        if (event.indexOf("pusher_internal:") === 0) {
		            if (event === "pusher_internal:subscription_succeeded") {
		                this.subscriptionPending = false;
		                this.subscribed = true;
		                if (this.subscriptionCancelled) {
		                    this.pusher.unsubscribe(this.name);
		                }
		                else {
		                    this.emit("pusher:subscription_succeeded", data);
		                }
		            }
		        }
		        else {
		            this.emit(event, data);
		        }
		    };
		    Channel.prototype.subscribe = function () {
		        var _this = this;
		        if (this.subscribed) {
		            return;
		        }
		        this.subscriptionPending = true;
		        this.subscriptionCancelled = false;
		        this.authorize(this.pusher.connection.socket_id, function (error, data) {
		            if (error) {
		                _this.handleEvent('pusher:subscription_error', data);
		            }
		            else {
		                _this.pusher.send_event('pusher:subscribe', {
		                    auth: data.auth,
		                    channel_data: data.channel_data,
		                    channel: _this.name
		                });
		            }
		        });
		    };
		    Channel.prototype.unsubscribe = function () {
		        this.subscribed = false;
		        this.pusher.send_event('pusher:unsubscribe', {
		            channel: this.name
		        });
		    };
		    Channel.prototype.cancelSubscription = function () {
		        this.subscriptionCancelled = true;
		    };
		    Channel.prototype.reinstateSubscription = function () {
		        this.subscriptionCancelled = false;
		    };
		    return Channel;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = Channel;


	/***/ }),
	/* 53 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var Members = (function () {
		    function Members() {
		        this.reset();
		    }
		    Members.prototype.get = function (id) {
		        if (Object.prototype.hasOwnProperty.call(this.members, id)) {
		            return {
		                id: id,
		                info: this.members[id]
		            };
		        }
		        else {
		            return null;
		        }
		    };
		    Members.prototype.each = function (callback) {
		        var _this = this;
		        Collections.objectApply(this.members, function (member, id) {
		            callback(_this.get(id));
		        });
		    };
		    Members.prototype.setMyID = function (id) {
		        this.myID = id;
		    };
		    Members.prototype.onSubscription = function (subscriptionData) {
		        this.members = subscriptionData.presence.hash;
		        this.count = subscriptionData.presence.count;
		        this.me = this.get(this.myID);
		    };
		    Members.prototype.addMember = function (memberData) {
		        if (this.get(memberData.user_id) === null) {
		            this.count++;
		        }
		        this.members[memberData.user_id] = memberData.user_info;
		        return this.get(memberData.user_id);
		    };
		    Members.prototype.removeMember = function (memberData) {
		        var member = this.get(memberData.user_id);
		        if (member) {
		            delete this.members[memberData.user_id];
		            this.count--;
		        }
		        return member;
		    };
		    Members.prototype.reset = function () {
		        this.members = {};
		        this.count = 0;
		        this.myID = null;
		        this.me = null;
		    };
		    return Members;
		}());
		exports.__esModule = true;
		exports["default"] = Members;


	/***/ }),
	/* 54 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var dispatcher_1 = __webpack_require__(24);
		var timers_1 = __webpack_require__(12);
		var logger_1 = __webpack_require__(8);
		var Collections = __webpack_require__(9);
		var runtime_1 = __webpack_require__(2);
		var ConnectionManager = (function (_super) {
		    __extends(ConnectionManager, _super);
		    function ConnectionManager(key, options) {
		        var _this = this;
		        _super.call(this);
		        this.key = key;
		        this.options = options || {};
		        this.state = "initialized";
		        this.connection = null;
		        this.encrypted = !!options.encrypted;
		        this.timeline = this.options.timeline;
		        this.connectionCallbacks = this.buildConnectionCallbacks();
		        this.errorCallbacks = this.buildErrorCallbacks();
		        this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
		        var Network = runtime_1["default"].getNetwork();
		        Network.bind("online", function () {
		            _this.timeline.info({ netinfo: "online" });
		            if (_this.state === "connecting" || _this.state === "unavailable") {
		                _this.retryIn(0);
		            }
		        });
		        Network.bind("offline", function () {
		            _this.timeline.info({ netinfo: "offline" });
		            if (_this.connection) {
		                _this.sendActivityCheck();
		            }
		        });
		        this.updateStrategy();
		    }
		    ConnectionManager.prototype.connect = function () {
		        if (this.connection || this.runner) {
		            return;
		        }
		        if (!this.strategy.isSupported()) {
		            this.updateState("failed");
		            return;
		        }
		        this.updateState("connecting");
		        this.startConnecting();
		        this.setUnavailableTimer();
		    };
		    ;
		    ConnectionManager.prototype.send = function (data) {
		        if (this.connection) {
		            return this.connection.send(data);
		        }
		        else {
		            return false;
		        }
		    };
		    ;
		    ConnectionManager.prototype.send_event = function (name, data, channel) {
		        if (this.connection) {
		            return this.connection.send_event(name, data, channel);
		        }
		        else {
		            return false;
		        }
		    };
		    ;
		    ConnectionManager.prototype.disconnect = function () {
		        this.disconnectInternally();
		        this.updateState("disconnected");
		    };
		    ;
		    ConnectionManager.prototype.isEncrypted = function () {
		        return this.encrypted;
		    };
		    ;
		    ConnectionManager.prototype.startConnecting = function () {
		        var _this = this;
		        var callback = function (error, handshake) {
		            if (error) {
		                _this.runner = _this.strategy.connect(0, callback);
		            }
		            else {
		                if (handshake.action === "error") {
		                    _this.emit("error", { type: "HandshakeError", error: handshake.error });
		                    _this.timeline.error({ handshakeError: handshake.error });
		                }
		                else {
		                    _this.abortConnecting();
		                    _this.handshakeCallbacks[handshake.action](handshake);
		                }
		            }
		        };
		        this.runner = this.strategy.connect(0, callback);
		    };
		    ;
		    ConnectionManager.prototype.abortConnecting = function () {
		        if (this.runner) {
		            this.runner.abort();
		            this.runner = null;
		        }
		    };
		    ;
		    ConnectionManager.prototype.disconnectInternally = function () {
		        this.abortConnecting();
		        this.clearRetryTimer();
		        this.clearUnavailableTimer();
		        if (this.connection) {
		            var connection = this.abandonConnection();
		            connection.close();
		        }
		    };
		    ;
		    ConnectionManager.prototype.updateStrategy = function () {
		        this.strategy = this.options.getStrategy({
		            key: this.key,
		            timeline: this.timeline,
		            encrypted: this.encrypted
		        });
		    };
		    ;
		    ConnectionManager.prototype.retryIn = function (delay) {
		        var _this = this;
		        this.timeline.info({ action: "retry", delay: delay });
		        if (delay > 0) {
		            this.emit("connecting_in", Math.round(delay / 1000));
		        }
		        this.retryTimer = new timers_1.OneOffTimer(delay || 0, function () {
		            _this.disconnectInternally();
		            _this.connect();
		        });
		    };
		    ;
		    ConnectionManager.prototype.clearRetryTimer = function () {
		        if (this.retryTimer) {
		            this.retryTimer.ensureAborted();
		            this.retryTimer = null;
		        }
		    };
		    ;
		    ConnectionManager.prototype.setUnavailableTimer = function () {
		        var _this = this;
		        this.unavailableTimer = new timers_1.OneOffTimer(this.options.unavailableTimeout, function () {
		            _this.updateState("unavailable");
		        });
		    };
		    ;
		    ConnectionManager.prototype.clearUnavailableTimer = function () {
		        if (this.unavailableTimer) {
		            this.unavailableTimer.ensureAborted();
		        }
		    };
		    ;
		    ConnectionManager.prototype.sendActivityCheck = function () {
		        var _this = this;
		        this.stopActivityCheck();
		        this.connection.ping();
		        this.activityTimer = new timers_1.OneOffTimer(this.options.pongTimeout, function () {
		            _this.timeline.error({ pong_timed_out: _this.options.pongTimeout });
		            _this.retryIn(0);
		        });
		    };
		    ;
		    ConnectionManager.prototype.resetActivityCheck = function () {
		        var _this = this;
		        this.stopActivityCheck();
		        if (this.connection && !this.connection.handlesActivityChecks()) {
		            this.activityTimer = new timers_1.OneOffTimer(this.activityTimeout, function () {
		                _this.sendActivityCheck();
		            });
		        }
		    };
		    ;
		    ConnectionManager.prototype.stopActivityCheck = function () {
		        if (this.activityTimer) {
		            this.activityTimer.ensureAborted();
		        }
		    };
		    ;
		    ConnectionManager.prototype.buildConnectionCallbacks = function () {
		        var _this = this;
		        return {
		            message: function (message) {
		                _this.resetActivityCheck();
		                _this.emit('message', message);
		            },
		            ping: function () {
		                _this.send_event('pusher:pong', {});
		            },
		            activity: function () {
		                _this.resetActivityCheck();
		            },
		            error: function (error) {
		                _this.emit("error", { type: "WebSocketError", error: error });
		            },
		            closed: function () {
		                _this.abandonConnection();
		                if (_this.shouldRetry()) {
		                    _this.retryIn(1000);
		                }
		            }
		        };
		    };
		    ;
		    ConnectionManager.prototype.buildHandshakeCallbacks = function (errorCallbacks) {
		        var _this = this;
		        return Collections.extend({}, errorCallbacks, {
		            connected: function (handshake) {
		                _this.activityTimeout = Math.min(_this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
		                _this.clearUnavailableTimer();
		                _this.setConnection(handshake.connection);
		                _this.socket_id = _this.connection.id;
		                _this.updateState("connected", { socket_id: _this.socket_id });
		            }
		        });
		    };
		    ;
		    ConnectionManager.prototype.buildErrorCallbacks = function () {
		        var _this = this;
		        var withErrorEmitted = function (callback) {
		            return function (result) {
		                if (result.error) {
		                    _this.emit("error", { type: "WebSocketError", error: result.error });
		                }
		                callback(result);
		            };
		        };
		        return {
		            ssl_only: withErrorEmitted(function () {
		                _this.encrypted = true;
		                _this.updateStrategy();
		                _this.retryIn(0);
		            }),
		            refused: withErrorEmitted(function () {
		                _this.disconnect();
		            }),
		            backoff: withErrorEmitted(function () {
		                _this.retryIn(1000);
		            }),
		            retry: withErrorEmitted(function () {
		                _this.retryIn(0);
		            })
		        };
		    };
		    ;
		    ConnectionManager.prototype.setConnection = function (connection) {
		        this.connection = connection;
		        for (var event in this.connectionCallbacks) {
		            this.connection.bind(event, this.connectionCallbacks[event]);
		        }
		        this.resetActivityCheck();
		    };
		    ;
		    ConnectionManager.prototype.abandonConnection = function () {
		        if (!this.connection) {
		            return;
		        }
		        this.stopActivityCheck();
		        for (var event in this.connectionCallbacks) {
		            this.connection.unbind(event, this.connectionCallbacks[event]);
		        }
		        var connection = this.connection;
		        this.connection = null;
		        return connection;
		    };
		    ConnectionManager.prototype.updateState = function (newState, data) {
		        var previousState = this.state;
		        this.state = newState;
		        if (previousState !== newState) {
		            var newStateDescription = newState;
		            if (newStateDescription === "connected") {
		                newStateDescription += " with new socket ID " + data.socket_id;
		            }
		            logger_1["default"].debug('State changed', previousState + ' -> ' + newStateDescription);
		            this.timeline.info({ state: newState, params: data });
		            this.emit('state_change', { previous: previousState, current: newState });
		            this.emit(newState, data);
		        }
		    };
		    ConnectionManager.prototype.shouldRetry = function () {
		        return this.state === "connecting" || this.state === "connected";
		    };
		    return ConnectionManager;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = ConnectionManager;


	/***/ }),
	/* 55 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var factory_1 = __webpack_require__(43);
		var Channels = (function () {
		    function Channels() {
		        this.channels = {};
		    }
		    Channels.prototype.add = function (name, pusher) {
		        if (!this.channels[name]) {
		            this.channels[name] = createChannel(name, pusher);
		        }
		        return this.channels[name];
		    };
		    Channels.prototype.all = function () {
		        return Collections.values(this.channels);
		    };
		    Channels.prototype.find = function (name) {
		        return this.channels[name];
		    };
		    Channels.prototype.remove = function (name) {
		        var channel = this.channels[name];
		        delete this.channels[name];
		        return channel;
		    };
		    Channels.prototype.disconnect = function () {
		        Collections.objectApply(this.channels, function (channel) {
		            channel.disconnect();
		        });
		    };
		    return Channels;
		}());
		exports.__esModule = true;
		exports["default"] = Channels;
		function createChannel(name, pusher) {
		    if (name.indexOf('private-') === 0) {
		        return factory_1["default"].createPrivateChannel(name, pusher);
		    }
		    else if (name.indexOf('presence-') === 0) {
		        return factory_1["default"].createPresenceChannel(name, pusher);
		    }
		    else {
		        return factory_1["default"].createChannel(name, pusher);
		    }
		}


	/***/ }),
	/* 56 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var factory_1 = __webpack_require__(43);
		var util_1 = __webpack_require__(11);
		var Errors = __webpack_require__(31);
		var Collections = __webpack_require__(9);
		var TransportStrategy = (function () {
		    function TransportStrategy(name, priority, transport, options) {
		        this.name = name;
		        this.priority = priority;
		        this.transport = transport;
		        this.options = options || {};
		    }
		    TransportStrategy.prototype.isSupported = function () {
		        return this.transport.isSupported({
		            encrypted: this.options.encrypted
		        });
		    };
		    TransportStrategy.prototype.connect = function (minPriority, callback) {
		        var _this = this;
		        if (!this.isSupported()) {
		            return failAttempt(new Errors.UnsupportedStrategy(), callback);
		        }
		        else if (this.priority < minPriority) {
		            return failAttempt(new Errors.TransportPriorityTooLow(), callback);
		        }
		        var connected = false;
		        var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
		        var handshake = null;
		        var onInitialized = function () {
		            transport.unbind("initialized", onInitialized);
		            transport.connect();
		        };
		        var onOpen = function () {
		            handshake = factory_1["default"].createHandshake(transport, function (result) {
		                connected = true;
		                unbindListeners();
		                callback(null, result);
		            });
		        };
		        var onError = function (error) {
		            unbindListeners();
		            callback(error);
		        };
		        var onClosed = function () {
		            unbindListeners();
		            var serializedTransport;
		            serializedTransport = Collections.safeJSONStringify(transport);
		            callback(new Errors.TransportClosed(serializedTransport));
		        };
		        var unbindListeners = function () {
		            transport.unbind("initialized", onInitialized);
		            transport.unbind("open", onOpen);
		            transport.unbind("error", onError);
		            transport.unbind("closed", onClosed);
		        };
		        transport.bind("initialized", onInitialized);
		        transport.bind("open", onOpen);
		        transport.bind("error", onError);
		        transport.bind("closed", onClosed);
		        transport.initialize();
		        return {
		            abort: function () {
		                if (connected) {
		                    return;
		                }
		                unbindListeners();
		                if (handshake) {
		                    handshake.close();
		                }
		                else {
		                    transport.close();
		                }
		            },
		            forceMinPriority: function (p) {
		                if (connected) {
		                    return;
		                }
		                if (_this.priority < p) {
		                    if (handshake) {
		                        handshake.close();
		                    }
		                    else {
		                        transport.close();
		                    }
		                }
		            }
		        };
		    };
		    return TransportStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = TransportStrategy;
		function failAttempt(error, callback) {
		    util_1["default"].defer(function () {
		        callback(error);
		    });
		    return {
		        abort: function () { },
		        forceMinPriority: function () { }
		    };
		}


	/***/ }),
	/* 57 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var util_1 = __webpack_require__(11);
		var timers_1 = __webpack_require__(12);
		var SequentialStrategy = (function () {
		    function SequentialStrategy(strategies, options) {
		        this.strategies = strategies;
		        this.loop = Boolean(options.loop);
		        this.failFast = Boolean(options.failFast);
		        this.timeout = options.timeout;
		        this.timeoutLimit = options.timeoutLimit;
		    }
		    SequentialStrategy.prototype.isSupported = function () {
		        return Collections.any(this.strategies, util_1["default"].method("isSupported"));
		    };
		    SequentialStrategy.prototype.connect = function (minPriority, callback) {
		        var _this = this;
		        var strategies = this.strategies;
		        var current = 0;
		        var timeout = this.timeout;
		        var runner = null;
		        var tryNextStrategy = function (error, handshake) {
		            if (handshake) {
		                callback(null, handshake);
		            }
		            else {
		                current = current + 1;
		                if (_this.loop) {
		                    current = current % strategies.length;
		                }
		                if (current < strategies.length) {
		                    if (timeout) {
		                        timeout = timeout * 2;
		                        if (_this.timeoutLimit) {
		                            timeout = Math.min(timeout, _this.timeoutLimit);
		                        }
		                    }
		                    runner = _this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: _this.failFast }, tryNextStrategy);
		                }
		                else {
		                    callback(true);
		                }
		            }
		        };
		        runner = this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: this.failFast }, tryNextStrategy);
		        return {
		            abort: function () {
		                runner.abort();
		            },
		            forceMinPriority: function (p) {
		                minPriority = p;
		                if (runner) {
		                    runner.forceMinPriority(p);
		                }
		            }
		        };
		    };
		    SequentialStrategy.prototype.tryStrategy = function (strategy, minPriority, options, callback) {
		        var timer = null;
		        var runner = null;
		        if (options.timeout > 0) {
		            timer = new timers_1.OneOffTimer(options.timeout, function () {
		                runner.abort();
		                callback(true);
		            });
		        }
		        runner = strategy.connect(minPriority, function (error, handshake) {
		            if (error && timer && timer.isRunning() && !options.failFast) {
		                return;
		            }
		            if (timer) {
		                timer.ensureAborted();
		            }
		            callback(error, handshake);
		        });
		        return {
		            abort: function () {
		                if (timer) {
		                    timer.ensureAborted();
		                }
		                runner.abort();
		            },
		            forceMinPriority: function (p) {
		                runner.forceMinPriority(p);
		            }
		        };
		    };
		    return SequentialStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = SequentialStrategy;


	/***/ }),
	/* 58 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var Collections = __webpack_require__(9);
		var util_1 = __webpack_require__(11);
		var BestConnectedEverStrategy = (function () {
		    function BestConnectedEverStrategy(strategies) {
		        this.strategies = strategies;
		    }
		    BestConnectedEverStrategy.prototype.isSupported = function () {
		        return Collections.any(this.strategies, util_1["default"].method("isSupported"));
		    };
		    BestConnectedEverStrategy.prototype.connect = function (minPriority, callback) {
		        return connect(this.strategies, minPriority, function (i, runners) {
		            return function (error, handshake) {
		                runners[i].error = error;
		                if (error) {
		                    if (allRunnersFailed(runners)) {
		                        callback(true);
		                    }
		                    return;
		                }
		                Collections.apply(runners, function (runner) {
		                    runner.forceMinPriority(handshake.transport.priority);
		                });
		                callback(null, handshake);
		            };
		        });
		    };
		    return BestConnectedEverStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = BestConnectedEverStrategy;
		function connect(strategies, minPriority, callbackBuilder) {
		    var runners = Collections.map(strategies, function (strategy, i, _, rs) {
		        return strategy.connect(minPriority, callbackBuilder(i, rs));
		    });
		    return {
		        abort: function () {
		            Collections.apply(runners, abortRunner);
		        },
		        forceMinPriority: function (p) {
		            Collections.apply(runners, function (runner) {
		                runner.forceMinPriority(p);
		            });
		        }
		    };
		}
		function allRunnersFailed(runners) {
		    return Collections.all(runners, function (runner) {
		        return Boolean(runner.error);
		    });
		}
		function abortRunner(runner) {
		    if (!runner.error && !runner.aborted) {
		        runner.abort();
		        runner.aborted = true;
		    }
		}


	/***/ }),
	/* 59 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var util_1 = __webpack_require__(11);
		var runtime_1 = __webpack_require__(2);
		var sequential_strategy_1 = __webpack_require__(57);
		var Collections = __webpack_require__(9);
		var CachedStrategy = (function () {
		    function CachedStrategy(strategy, transports, options) {
		        this.strategy = strategy;
		        this.transports = transports;
		        this.ttl = options.ttl || 1800 * 1000;
		        this.encrypted = options.encrypted;
		        this.timeline = options.timeline;
		    }
		    CachedStrategy.prototype.isSupported = function () {
		        return this.strategy.isSupported();
		    };
		    CachedStrategy.prototype.connect = function (minPriority, callback) {
		        var encrypted = this.encrypted;
		        var info = fetchTransportCache(encrypted);
		        var strategies = [this.strategy];
		        if (info && info.timestamp + this.ttl >= util_1["default"].now()) {
		            var transport = this.transports[info.transport];
		            if (transport) {
		                this.timeline.info({
		                    cached: true,
		                    transport: info.transport,
		                    latency: info.latency
		                });
		                strategies.push(new sequential_strategy_1["default"]([transport], {
		                    timeout: info.latency * 2 + 1000,
		                    failFast: true
		                }));
		            }
		        }
		        var startTimestamp = util_1["default"].now();
		        var runner = strategies.pop().connect(minPriority, function cb(error, handshake) {
		            if (error) {
		                flushTransportCache(encrypted);
		                if (strategies.length > 0) {
		                    startTimestamp = util_1["default"].now();
		                    runner = strategies.pop().connect(minPriority, cb);
		                }
		                else {
		                    callback(error);
		                }
		            }
		            else {
		                storeTransportCache(encrypted, handshake.transport.name, util_1["default"].now() - startTimestamp);
		                callback(null, handshake);
		            }
		        });
		        return {
		            abort: function () {
		                runner.abort();
		            },
		            forceMinPriority: function (p) {
		                minPriority = p;
		                if (runner) {
		                    runner.forceMinPriority(p);
		                }
		            }
		        };
		    };
		    return CachedStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = CachedStrategy;
		function getTransportCacheKey(encrypted) {
		    return "pusherTransport" + (encrypted ? "Encrypted" : "Unencrypted");
		}
		function fetchTransportCache(encrypted) {
		    var storage = runtime_1["default"].getLocalStorage();
		    if (storage) {
		        try {
		            var serializedCache = storage[getTransportCacheKey(encrypted)];
		            if (serializedCache) {
		                return JSON.parse(serializedCache);
		            }
		        }
		        catch (e) {
		            flushTransportCache(encrypted);
		        }
		    }
		    return null;
		}
		function storeTransportCache(encrypted, transport, latency) {
		    var storage = runtime_1["default"].getLocalStorage();
		    if (storage) {
		        try {
		            storage[getTransportCacheKey(encrypted)] = Collections.safeJSONStringify({
		                timestamp: util_1["default"].now(),
		                transport: transport,
		                latency: latency
		            });
		        }
		        catch (e) {
		        }
		    }
		}
		function flushTransportCache(encrypted) {
		    var storage = runtime_1["default"].getLocalStorage();
		    if (storage) {
		        try {
		            delete storage[getTransportCacheKey(encrypted)];
		        }
		        catch (e) {
		        }
		    }
		}


	/***/ }),
	/* 60 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var timers_1 = __webpack_require__(12);
		var DelayedStrategy = (function () {
		    function DelayedStrategy(strategy, _a) {
		        var number = _a.delay;
		        this.strategy = strategy;
		        this.options = { delay: number };
		    }
		    DelayedStrategy.prototype.isSupported = function () {
		        return this.strategy.isSupported();
		    };
		    DelayedStrategy.prototype.connect = function (minPriority, callback) {
		        var strategy = this.strategy;
		        var runner;
		        var timer = new timers_1.OneOffTimer(this.options.delay, function () {
		            runner = strategy.connect(minPriority, callback);
		        });
		        return {
		            abort: function () {
		                timer.ensureAborted();
		                if (runner) {
		                    runner.abort();
		                }
		            },
		            forceMinPriority: function (p) {
		                minPriority = p;
		                if (runner) {
		                    runner.forceMinPriority(p);
		                }
		            }
		        };
		    };
		    return DelayedStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = DelayedStrategy;


	/***/ }),
	/* 61 */
	/***/ (function(module, exports) {

		"use strict";
		var IfStrategy = (function () {
		    function IfStrategy(test, trueBranch, falseBranch) {
		        this.test = test;
		        this.trueBranch = trueBranch;
		        this.falseBranch = falseBranch;
		    }
		    IfStrategy.prototype.isSupported = function () {
		        var branch = this.test() ? this.trueBranch : this.falseBranch;
		        return branch.isSupported();
		    };
		    IfStrategy.prototype.connect = function (minPriority, callback) {
		        var branch = this.test() ? this.trueBranch : this.falseBranch;
		        return branch.connect(minPriority, callback);
		    };
		    return IfStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = IfStrategy;


	/***/ }),
	/* 62 */
	/***/ (function(module, exports) {

		"use strict";
		var FirstConnectedStrategy = (function () {
		    function FirstConnectedStrategy(strategy) {
		        this.strategy = strategy;
		    }
		    FirstConnectedStrategy.prototype.isSupported = function () {
		        return this.strategy.isSupported();
		    };
		    FirstConnectedStrategy.prototype.connect = function (minPriority, callback) {
		        var runner = this.strategy.connect(minPriority, function (error, handshake) {
		            if (handshake) {
		                runner.abort();
		            }
		            callback(error, handshake);
		        });
		        return runner;
		    };
		    return FirstConnectedStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = FirstConnectedStrategy;


	/***/ }),
	/* 63 */
	/***/ (function(module, exports, __webpack_require__) {

		"use strict";
		var defaults_1 = __webpack_require__(5);
		exports.getGlobalConfig = function () {
		    return {
		        wsHost: defaults_1["default"].host,
		        wsPort: defaults_1["default"].ws_port,
		        wssPort: defaults_1["default"].wss_port,
		        httpHost: defaults_1["default"].sockjs_host,
		        httpPort: defaults_1["default"].sockjs_http_port,
		        httpsPort: defaults_1["default"].sockjs_https_port,
		        httpPath: defaults_1["default"].sockjs_path,
		        statsHost: defaults_1["default"].stats_host,
		        authEndpoint: defaults_1["default"].channel_auth_endpoint,
		        authTransport: defaults_1["default"].channel_auth_transport,
		        activity_timeout: defaults_1["default"].activity_timeout,
		        pong_timeout: defaults_1["default"].pong_timeout,
		        unavailable_timeout: defaults_1["default"].unavailable_timeout
		    };
		};
		exports.getClusterConfig = function (clusterName) {
		    return {
		        wsHost: "ws-" + clusterName + ".pusher.com",
		        httpHost: "sockjs-" + clusterName + ".pusher.com"
		    };
		};


	/***/ })
	/******/ ])
	});
	;

/***/ })
/******/ ]);