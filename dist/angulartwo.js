(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["angulartwo"] = factory();
	else
		root["angulartwo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(4);
	
	module.exports = __webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$traceurRuntime"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function(global) {
	  'use strict';
	  if (global.$traceurRuntime) {
	    return;
	  }
	  var $Object = Object;
	  var $TypeError = TypeError;
	  var $create = $Object.create;
	  var $defineProperties = $Object.defineProperties;
	  var $defineProperty = $Object.defineProperty;
	  var $freeze = $Object.freeze;
	  var $getOwnPropertyDescriptor = $Object.getOwnPropertyDescriptor;
	  var $getOwnPropertyNames = $Object.getOwnPropertyNames;
	  var $keys = $Object.keys;
	  var $hasOwnProperty = $Object.prototype.hasOwnProperty;
	  var $toString = $Object.prototype.toString;
	  var $preventExtensions = Object.preventExtensions;
	  var $seal = Object.seal;
	  var $isExtensible = Object.isExtensible;
	  function nonEnum(value) {
	    return {
	      configurable: true,
	      enumerable: false,
	      value: value,
	      writable: true
	    };
	  }
	  var types = {
	    void: function voidType() {},
	    any: function any() {},
	    string: function string() {},
	    number: function number() {},
	    boolean: function boolean() {}
	  };
	  var method = nonEnum;
	  var counter = 0;
	  function newUniqueString() {
	    return '__$' + Math.floor(Math.random() * 1e9) + '$' + ++counter + '$__';
	  }
	  var symbolInternalProperty = newUniqueString();
	  var symbolDescriptionProperty = newUniqueString();
	  var symbolDataProperty = newUniqueString();
	  var symbolValues = $create(null);
	  var privateNames = $create(null);
	  function createPrivateName() {
	    var s = newUniqueString();
	    privateNames[s] = true;
	    return s;
	  }
	  function isSymbol(symbol) {
	    return typeof symbol === 'object' && symbol instanceof SymbolValue;
	  }
	  function typeOf(v) {
	    if (isSymbol(v))
	      return 'symbol';
	    return typeof v;
	  }
	  function Symbol(description) {
	    var value = new SymbolValue(description);
	    if (!(this instanceof Symbol))
	      return value;
	    throw new TypeError('Symbol cannot be new\'ed');
	  }
	  $defineProperty(Symbol.prototype, 'constructor', nonEnum(Symbol));
	  $defineProperty(Symbol.prototype, 'toString', method(function() {
	    var symbolValue = this[symbolDataProperty];
	    if (!getOption('symbols'))
	      return symbolValue[symbolInternalProperty];
	    if (!symbolValue)
	      throw TypeError('Conversion from symbol to string');
	    var desc = symbolValue[symbolDescriptionProperty];
	    if (desc === undefined)
	      desc = '';
	    return 'Symbol(' + desc + ')';
	  }));
	  $defineProperty(Symbol.prototype, 'valueOf', method(function() {
	    var symbolValue = this[symbolDataProperty];
	    if (!symbolValue)
	      throw TypeError('Conversion from symbol to string');
	    if (!getOption('symbols'))
	      return symbolValue[symbolInternalProperty];
	    return symbolValue;
	  }));
	  function SymbolValue(description) {
	    var key = newUniqueString();
	    $defineProperty(this, symbolDataProperty, {value: this});
	    $defineProperty(this, symbolInternalProperty, {value: key});
	    $defineProperty(this, symbolDescriptionProperty, {value: description});
	    freeze(this);
	    symbolValues[key] = this;
	  }
	  $defineProperty(SymbolValue.prototype, 'constructor', nonEnum(Symbol));
	  $defineProperty(SymbolValue.prototype, 'toString', {
	    value: Symbol.prototype.toString,
	    enumerable: false
	  });
	  $defineProperty(SymbolValue.prototype, 'valueOf', {
	    value: Symbol.prototype.valueOf,
	    enumerable: false
	  });
	  var hashProperty = createPrivateName();
	  var hashPropertyDescriptor = {value: undefined};
	  var hashObjectProperties = {
	    hash: {value: undefined},
	    self: {value: undefined}
	  };
	  var hashCounter = 0;
	  function getOwnHashObject(object) {
	    var hashObject = object[hashProperty];
	    if (hashObject && hashObject.self === object)
	      return hashObject;
	    if ($isExtensible(object)) {
	      hashObjectProperties.hash.value = hashCounter++;
	      hashObjectProperties.self.value = object;
	      hashPropertyDescriptor.value = $create(null, hashObjectProperties);
	      $defineProperty(object, hashProperty, hashPropertyDescriptor);
	      return hashPropertyDescriptor.value;
	    }
	    return undefined;
	  }
	  function freeze(object) {
	    getOwnHashObject(object);
	    return $freeze.apply(this, arguments);
	  }
	  function preventExtensions(object) {
	    getOwnHashObject(object);
	    return $preventExtensions.apply(this, arguments);
	  }
	  function seal(object) {
	    getOwnHashObject(object);
	    return $seal.apply(this, arguments);
	  }
	  Symbol.iterator = Symbol();
	  freeze(SymbolValue.prototype);
	  function toProperty(name) {
	    if (isSymbol(name))
	      return name[symbolInternalProperty];
	    return name;
	  }
	  function getOwnPropertyNames(object) {
	    var rv = [];
	    var names = $getOwnPropertyNames(object);
	    for (var i = 0; i < names.length; i++) {
	      var name = names[i];
	      if (!symbolValues[name] && !privateNames[name])
	        rv.push(name);
	    }
	    return rv;
	  }
	  function getOwnPropertyDescriptor(object, name) {
	    return $getOwnPropertyDescriptor(object, toProperty(name));
	  }
	  function getOwnPropertySymbols(object) {
	    var rv = [];
	    var names = $getOwnPropertyNames(object);
	    for (var i = 0; i < names.length; i++) {
	      var symbol = symbolValues[names[i]];
	      if (symbol)
	        rv.push(symbol);
	    }
	    return rv;
	  }
	  function hasOwnProperty(name) {
	    return $hasOwnProperty.call(this, toProperty(name));
	  }
	  function getOption(name) {
	    return global.traceur && global.traceur.options[name];
	  }
	  function setProperty(object, name, value) {
	    var sym,
	        desc;
	    if (isSymbol(name)) {
	      sym = name;
	      name = name[symbolInternalProperty];
	    }
	    object[name] = value;
	    if (sym && (desc = $getOwnPropertyDescriptor(object, name)))
	      $defineProperty(object, name, {enumerable: false});
	    return value;
	  }
	  function defineProperty(object, name, descriptor) {
	    if (isSymbol(name)) {
	      if (descriptor.enumerable) {
	        descriptor = $create(descriptor, {enumerable: {value: false}});
	      }
	      name = name[symbolInternalProperty];
	    }
	    $defineProperty(object, name, descriptor);
	    return object;
	  }
	  function polyfillObject(Object) {
	    $defineProperty(Object, 'defineProperty', {value: defineProperty});
	    $defineProperty(Object, 'getOwnPropertyNames', {value: getOwnPropertyNames});
	    $defineProperty(Object, 'getOwnPropertyDescriptor', {value: getOwnPropertyDescriptor});
	    $defineProperty(Object.prototype, 'hasOwnProperty', {value: hasOwnProperty});
	    $defineProperty(Object, 'freeze', {value: freeze});
	    $defineProperty(Object, 'preventExtensions', {value: preventExtensions});
	    $defineProperty(Object, 'seal', {value: seal});
	    Object.getOwnPropertySymbols = getOwnPropertySymbols;
	  }
	  function exportStar(object) {
	    for (var i = 1; i < arguments.length; i++) {
	      var names = $getOwnPropertyNames(arguments[i]);
	      for (var j = 0; j < names.length; j++) {
	        var name = names[j];
	        if (privateNames[name])
	          continue;
	        (function(mod, name) {
	          $defineProperty(object, name, {
	            get: function() {
	              return mod[name];
	            },
	            enumerable: true
	          });
	        })(arguments[i], names[j]);
	      }
	    }
	    return object;
	  }
	  function isObject(x) {
	    return x != null && (typeof x === 'object' || typeof x === 'function');
	  }
	  function toObject(x) {
	    if (x == null)
	      throw $TypeError();
	    return $Object(x);
	  }
	  function checkObjectCoercible(argument) {
	    if (argument == null) {
	      throw new TypeError('Value cannot be converted to an Object');
	    }
	    return argument;
	  }
	  function setupGlobals(global) {
	    global.Symbol = Symbol;
	    global.Reflect = global.Reflect || {};
	    global.Reflect.global = global.Reflect.global || global;
	    polyfillObject(global.Object);
	  }
	  setupGlobals(global);
	  global.$traceurRuntime = {
	    createPrivateName: createPrivateName,
	    exportStar: exportStar,
	    getOwnHashObject: getOwnHashObject,
	    privateNames: privateNames,
	    setProperty: setProperty,
	    setupGlobals: setupGlobals,
	    toObject: toObject,
	    isObject: isObject,
	    toProperty: toProperty,
	    type: types,
	    typeof: typeOf,
	    checkObjectCoercible: checkObjectCoercible,
	    hasOwnProperty: function(o, p) {
	      return hasOwnProperty.call(o, p);
	    },
	    defineProperties: $defineProperties,
	    defineProperty: $defineProperty,
	    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	    getOwnPropertyNames: $getOwnPropertyNames,
	    keys: $keys
	  };
	})(typeof global !== 'undefined' ? global : this);
	(function() {
	  'use strict';
	  function spread() {
	    var rv = [],
	        j = 0,
	        iterResult;
	    for (var i = 0; i < arguments.length; i++) {
	      var valueToSpread = $traceurRuntime.checkObjectCoercible(arguments[i]);
	      if (typeof valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)] !== 'function') {
	        throw new TypeError('Cannot spread non-iterable object.');
	      }
	      var iter = valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)]();
	      while (!(iterResult = iter.next()).done) {
	        rv[j++] = iterResult.value;
	      }
	    }
	    return rv;
	  }
	  $traceurRuntime.spread = spread;
	})();
	(function() {
	  'use strict';
	  var $Object = Object;
	  var $TypeError = TypeError;
	  var $create = $Object.create;
	  var $defineProperties = $traceurRuntime.defineProperties;
	  var $defineProperty = $traceurRuntime.defineProperty;
	  var $getOwnPropertyDescriptor = $traceurRuntime.getOwnPropertyDescriptor;
	  var $getOwnPropertyNames = $traceurRuntime.getOwnPropertyNames;
	  var $getPrototypeOf = Object.getPrototypeOf;
	  function superDescriptor(homeObject, name) {
	    var proto = $getPrototypeOf(homeObject);
	    do {
	      var result = $getOwnPropertyDescriptor(proto, name);
	      if (result)
	        return result;
	      proto = $getPrototypeOf(proto);
	    } while (proto);
	    return undefined;
	  }
	  function superCall(self, homeObject, name, args) {
	    return superGet(self, homeObject, name).apply(self, args);
	  }
	  function superGet(self, homeObject, name) {
	    var descriptor = superDescriptor(homeObject, name);
	    if (descriptor) {
	      if (!descriptor.get)
	        return descriptor.value;
	      return descriptor.get.call(self);
	    }
	    return undefined;
	  }
	  function superSet(self, homeObject, name, value) {
	    var descriptor = superDescriptor(homeObject, name);
	    if (descriptor && descriptor.set) {
	      descriptor.set.call(self, value);
	      return value;
	    }
	    throw $TypeError("super has no setter '" + name + "'.");
	  }
	  function getDescriptors(object) {
	    var descriptors = {},
	        name,
	        names = $getOwnPropertyNames(object);
	    for (var i = 0; i < names.length; i++) {
	      var name = names[i];
	      descriptors[name] = $getOwnPropertyDescriptor(object, name);
	    }
	    return descriptors;
	  }
	  function createClass(ctor, object, staticObject, superClass) {
	    $defineProperty(object, 'constructor', {
	      value: ctor,
	      configurable: true,
	      enumerable: false,
	      writable: true
	    });
	    if (arguments.length > 3) {
	      if (typeof superClass === 'function')
	        ctor.__proto__ = superClass;
	      ctor.prototype = $create(getProtoParent(superClass), getDescriptors(object));
	    } else {
	      ctor.prototype = object;
	    }
	    $defineProperty(ctor, 'prototype', {
	      configurable: false,
	      writable: false
	    });
	    return $defineProperties(ctor, getDescriptors(staticObject));
	  }
	  function getProtoParent(superClass) {
	    if (typeof superClass === 'function') {
	      var prototype = superClass.prototype;
	      if ($Object(prototype) === prototype || prototype === null)
	        return superClass.prototype;
	      throw new $TypeError('super prototype must be an Object or null');
	    }
	    if (superClass === null)
	      return null;
	    throw new $TypeError(("Super expression must either be null or a function, not " + typeof superClass + "."));
	  }
	  function defaultSuperCall(self, homeObject, args) {
	    if ($getPrototypeOf(homeObject) !== null)
	      superCall(self, homeObject, 'constructor', args);
	  }
	  $traceurRuntime.createClass = createClass;
	  $traceurRuntime.defaultSuperCall = defaultSuperCall;
	  $traceurRuntime.superCall = superCall;
	  $traceurRuntime.superGet = superGet;
	  $traceurRuntime.superSet = superSet;
	})();
	(function() {
	  'use strict';
	  var createPrivateName = $traceurRuntime.createPrivateName;
	  var $defineProperties = $traceurRuntime.defineProperties;
	  var $defineProperty = $traceurRuntime.defineProperty;
	  var $create = Object.create;
	  var $TypeError = TypeError;
	  function nonEnum(value) {
	    return {
	      configurable: true,
	      enumerable: false,
	      value: value,
	      writable: true
	    };
	  }
	  var ST_NEWBORN = 0;
	  var ST_EXECUTING = 1;
	  var ST_SUSPENDED = 2;
	  var ST_CLOSED = 3;
	  var END_STATE = -2;
	  var RETHROW_STATE = -3;
	  function getInternalError(state) {
	    return new Error('Traceur compiler bug: invalid state in state machine: ' + state);
	  }
	  function GeneratorContext() {
	    this.state = 0;
	    this.GState = ST_NEWBORN;
	    this.storedException = undefined;
	    this.finallyFallThrough = undefined;
	    this.sent_ = undefined;
	    this.returnValue = undefined;
	    this.tryStack_ = [];
	  }
	  GeneratorContext.prototype = {
	    pushTry: function(catchState, finallyState) {
	      if (finallyState !== null) {
	        var finallyFallThrough = null;
	        for (var i = this.tryStack_.length - 1; i >= 0; i--) {
	          if (this.tryStack_[i].catch !== undefined) {
	            finallyFallThrough = this.tryStack_[i].catch;
	            break;
	          }
	        }
	        if (finallyFallThrough === null)
	          finallyFallThrough = RETHROW_STATE;
	        this.tryStack_.push({
	          finally: finallyState,
	          finallyFallThrough: finallyFallThrough
	        });
	      }
	      if (catchState !== null) {
	        this.tryStack_.push({catch: catchState});
	      }
	    },
	    popTry: function() {
	      this.tryStack_.pop();
	    },
	    get sent() {
	      this.maybeThrow();
	      return this.sent_;
	    },
	    set sent(v) {
	      this.sent_ = v;
	    },
	    get sentIgnoreThrow() {
	      return this.sent_;
	    },
	    maybeThrow: function() {
	      if (this.action === 'throw') {
	        this.action = 'next';
	        throw this.sent_;
	      }
	    },
	    end: function() {
	      switch (this.state) {
	        case END_STATE:
	          return this;
	        case RETHROW_STATE:
	          throw this.storedException;
	        default:
	          throw getInternalError(this.state);
	      }
	    },
	    handleException: function(ex) {
	      this.GState = ST_CLOSED;
	      this.state = END_STATE;
	      throw ex;
	    }
	  };
	  function nextOrThrow(ctx, moveNext, action, x) {
	    switch (ctx.GState) {
	      case ST_EXECUTING:
	        throw new Error(("\"" + action + "\" on executing generator"));
	      case ST_CLOSED:
	        if (action == 'next') {
	          return {
	            value: undefined,
	            done: true
	          };
	        }
	        throw x;
	      case ST_NEWBORN:
	        if (action === 'throw') {
	          ctx.GState = ST_CLOSED;
	          throw x;
	        }
	        if (x !== undefined)
	          throw $TypeError('Sent value to newborn generator');
	      case ST_SUSPENDED:
	        ctx.GState = ST_EXECUTING;
	        ctx.action = action;
	        ctx.sent = x;
	        var value = moveNext(ctx);
	        var done = value === ctx;
	        if (done)
	          value = ctx.returnValue;
	        ctx.GState = done ? ST_CLOSED : ST_SUSPENDED;
	        return {
	          value: value,
	          done: done
	        };
	    }
	  }
	  var ctxName = createPrivateName();
	  var moveNextName = createPrivateName();
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
	  $defineProperty(GeneratorFunctionPrototype, 'constructor', nonEnum(GeneratorFunction));
	  GeneratorFunctionPrototype.prototype = {
	    constructor: GeneratorFunctionPrototype,
	    next: function(v) {
	      return nextOrThrow(this[ctxName], this[moveNextName], 'next', v);
	    },
	    throw: function(v) {
	      return nextOrThrow(this[ctxName], this[moveNextName], 'throw', v);
	    }
	  };
	  $defineProperties(GeneratorFunctionPrototype.prototype, {
	    constructor: {enumerable: false},
	    next: {enumerable: false},
	    throw: {enumerable: false}
	  });
	  Object.defineProperty(GeneratorFunctionPrototype.prototype, Symbol.iterator, nonEnum(function() {
	    return this;
	  }));
	  function createGeneratorInstance(innerFunction, functionObject, self) {
	    var moveNext = getMoveNext(innerFunction, self);
	    var ctx = new GeneratorContext();
	    var object = $create(functionObject.prototype);
	    object[ctxName] = ctx;
	    object[moveNextName] = moveNext;
	    return object;
	  }
	  function initGeneratorFunction(functionObject) {
	    functionObject.prototype = $create(GeneratorFunctionPrototype.prototype);
	    functionObject.__proto__ = GeneratorFunctionPrototype;
	    return functionObject;
	  }
	  function AsyncFunctionContext() {
	    GeneratorContext.call(this);
	    this.err = undefined;
	    var ctx = this;
	    ctx.result = new Promise(function(resolve, reject) {
	      ctx.resolve = resolve;
	      ctx.reject = reject;
	    });
	  }
	  AsyncFunctionContext.prototype = $create(GeneratorContext.prototype);
	  AsyncFunctionContext.prototype.end = function() {
	    switch (this.state) {
	      case END_STATE:
	        this.resolve(this.returnValue);
	        break;
	      case RETHROW_STATE:
	        this.reject(this.storedException);
	        break;
	      default:
	        this.reject(getInternalError(this.state));
	    }
	  };
	  AsyncFunctionContext.prototype.handleException = function() {
	    this.state = RETHROW_STATE;
	  };
	  function asyncWrap(innerFunction, self) {
	    var moveNext = getMoveNext(innerFunction, self);
	    var ctx = new AsyncFunctionContext();
	    ctx.createCallback = function(newState) {
	      return function(value) {
	        ctx.state = newState;
	        ctx.value = value;
	        moveNext(ctx);
	      };
	    };
	    ctx.errback = function(err) {
	      handleCatch(ctx, err);
	      moveNext(ctx);
	    };
	    moveNext(ctx);
	    return ctx.result;
	  }
	  function getMoveNext(innerFunction, self) {
	    return function(ctx) {
	      while (true) {
	        try {
	          return innerFunction.call(self, ctx);
	        } catch (ex) {
	          handleCatch(ctx, ex);
	        }
	      }
	    };
	  }
	  function handleCatch(ctx, ex) {
	    ctx.storedException = ex;
	    var last = ctx.tryStack_[ctx.tryStack_.length - 1];
	    if (!last) {
	      ctx.handleException(ex);
	      return;
	    }
	    ctx.state = last.catch !== undefined ? last.catch : last.finally;
	    if (last.finallyFallThrough !== undefined)
	      ctx.finallyFallThrough = last.finallyFallThrough;
	  }
	  $traceurRuntime.asyncWrap = asyncWrap;
	  $traceurRuntime.initGeneratorFunction = initGeneratorFunction;
	  $traceurRuntime.createGeneratorInstance = createGeneratorInstance;
	})();
	(function() {
	  function buildFromEncodedParts(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
	    var out = [];
	    if (opt_scheme) {
	      out.push(opt_scheme, ':');
	    }
	    if (opt_domain) {
	      out.push('//');
	      if (opt_userInfo) {
	        out.push(opt_userInfo, '@');
	      }
	      out.push(opt_domain);
	      if (opt_port) {
	        out.push(':', opt_port);
	      }
	    }
	    if (opt_path) {
	      out.push(opt_path);
	    }
	    if (opt_queryData) {
	      out.push('?', opt_queryData);
	    }
	    if (opt_fragment) {
	      out.push('#', opt_fragment);
	    }
	    return out.join('');
	  }
	  ;
	  var splitRe = new RegExp('^' + '(?:' + '([^:/?#.]+)' + ':)?' + '(?://' + '(?:([^/?#]*)@)?' + '([\\w\\d\\-\\u0100-\\uffff.%]*)' + '(?::([0-9]+))?' + ')?' + '([^?#]+)?' + '(?:\\?([^#]*))?' + '(?:#(.*))?' + '$');
	  var ComponentIndex = {
	    SCHEME: 1,
	    USER_INFO: 2,
	    DOMAIN: 3,
	    PORT: 4,
	    PATH: 5,
	    QUERY_DATA: 6,
	    FRAGMENT: 7
	  };
	  function split(uri) {
	    return (uri.match(splitRe));
	  }
	  function removeDotSegments(path) {
	    if (path === '/')
	      return '/';
	    var leadingSlash = path[0] === '/' ? '/' : '';
	    var trailingSlash = path.slice(-1) === '/' ? '/' : '';
	    var segments = path.split('/');
	    var out = [];
	    var up = 0;
	    for (var pos = 0; pos < segments.length; pos++) {
	      var segment = segments[pos];
	      switch (segment) {
	        case '':
	        case '.':
	          break;
	        case '..':
	          if (out.length)
	            out.pop();
	          else
	            up++;
	          break;
	        default:
	          out.push(segment);
	      }
	    }
	    if (!leadingSlash) {
	      while (up-- > 0) {
	        out.unshift('..');
	      }
	      if (out.length === 0)
	        out.push('.');
	    }
	    return leadingSlash + out.join('/') + trailingSlash;
	  }
	  function joinAndCanonicalizePath(parts) {
	    var path = parts[ComponentIndex.PATH] || '';
	    path = removeDotSegments(path);
	    parts[ComponentIndex.PATH] = path;
	    return buildFromEncodedParts(parts[ComponentIndex.SCHEME], parts[ComponentIndex.USER_INFO], parts[ComponentIndex.DOMAIN], parts[ComponentIndex.PORT], parts[ComponentIndex.PATH], parts[ComponentIndex.QUERY_DATA], parts[ComponentIndex.FRAGMENT]);
	  }
	  function canonicalizeUrl(url) {
	    var parts = split(url);
	    return joinAndCanonicalizePath(parts);
	  }
	  function resolveUrl(base, url) {
	    var parts = split(url);
	    var baseParts = split(base);
	    if (parts[ComponentIndex.SCHEME]) {
	      return joinAndCanonicalizePath(parts);
	    } else {
	      parts[ComponentIndex.SCHEME] = baseParts[ComponentIndex.SCHEME];
	    }
	    for (var i = ComponentIndex.SCHEME; i <= ComponentIndex.PORT; i++) {
	      if (!parts[i]) {
	        parts[i] = baseParts[i];
	      }
	    }
	    if (parts[ComponentIndex.PATH][0] == '/') {
	      return joinAndCanonicalizePath(parts);
	    }
	    var path = baseParts[ComponentIndex.PATH];
	    var index = path.lastIndexOf('/');
	    path = path.slice(0, index + 1) + parts[ComponentIndex.PATH];
	    parts[ComponentIndex.PATH] = path;
	    return joinAndCanonicalizePath(parts);
	  }
	  function isAbsolute(name) {
	    if (!name)
	      return false;
	    if (name[0] === '/')
	      return true;
	    var parts = split(name);
	    if (parts[ComponentIndex.SCHEME])
	      return true;
	    return false;
	  }
	  $traceurRuntime.canonicalizeUrl = canonicalizeUrl;
	  $traceurRuntime.isAbsolute = isAbsolute;
	  $traceurRuntime.removeDotSegments = removeDotSegments;
	  $traceurRuntime.resolveUrl = resolveUrl;
	})();
	(function(global) {
	  'use strict';
	  var $__2 = $traceurRuntime,
	      canonicalizeUrl = $__2.canonicalizeUrl,
	      resolveUrl = $__2.resolveUrl,
	      isAbsolute = $__2.isAbsolute;
	  var moduleInstantiators = Object.create(null);
	  var baseURL;
	  if (global.location && global.location.href)
	    baseURL = resolveUrl(global.location.href, './');
	  else
	    baseURL = '';
	  var UncoatedModuleEntry = function UncoatedModuleEntry(url, uncoatedModule) {
	    this.url = url;
	    this.value_ = uncoatedModule;
	  };
	  ($traceurRuntime.createClass)(UncoatedModuleEntry, {}, {});
	  var ModuleEvaluationError = function ModuleEvaluationError(erroneousModuleName, cause) {
	    this.message = this.constructor.name + (cause ? ': \'' + cause + '\'' : '') + ' in ' + erroneousModuleName;
	  };
	  ($traceurRuntime.createClass)(ModuleEvaluationError, {loadedBy: function(moduleName) {
	      this.message += '\n loaded by ' + moduleName;
	    }}, {}, Error);
	  var UncoatedModuleInstantiator = function UncoatedModuleInstantiator(url, func) {
	    $traceurRuntime.superCall(this, $UncoatedModuleInstantiator.prototype, "constructor", [url, null]);
	    this.func = func;
	  };
	  var $UncoatedModuleInstantiator = UncoatedModuleInstantiator;
	  ($traceurRuntime.createClass)(UncoatedModuleInstantiator, {getUncoatedModule: function() {
	      if (this.value_)
	        return this.value_;
	      try {
	        return this.value_ = this.func.call(global);
	      } catch (ex) {
	        if (ex instanceof ModuleEvaluationError) {
	          ex.loadedBy(this.url);
	          throw ex;
	        }
	        throw new ModuleEvaluationError(this.url, ex);
	      }
	    }}, {}, UncoatedModuleEntry);
	  function getUncoatedModuleInstantiator(name) {
	    if (!name)
	      return;
	    var url = ModuleStore.normalize(name);
	    return moduleInstantiators[url];
	  }
	  ;
	  var moduleInstances = Object.create(null);
	  var liveModuleSentinel = {};
	  function Module(uncoatedModule) {
	    var isLive = arguments[1];
	    var coatedModule = Object.create(null);
	    Object.getOwnPropertyNames(uncoatedModule).forEach((function(name) {
	      var getter,
	          value;
	      if (isLive === liveModuleSentinel) {
	        var descr = Object.getOwnPropertyDescriptor(uncoatedModule, name);
	        if (descr.get)
	          getter = descr.get;
	      }
	      if (!getter) {
	        value = uncoatedModule[name];
	        getter = function() {
	          return value;
	        };
	      }
	      Object.defineProperty(coatedModule, name, {
	        get: getter,
	        enumerable: true
	      });
	    }));
	    Object.preventExtensions(coatedModule);
	    return coatedModule;
	  }
	  var ModuleStore = {
	    normalize: function(name, refererName, refererAddress) {
	      if (typeof name !== "string")
	        throw new TypeError("module name must be a string, not " + typeof name);
	      if (isAbsolute(name))
	        return canonicalizeUrl(name);
	      if (/[^\.]\/\.\.\//.test(name)) {
	        throw new Error('module name embeds /../: ' + name);
	      }
	      if (name[0] === '.' && refererName)
	        return resolveUrl(refererName, name);
	      return canonicalizeUrl(name);
	    },
	    get: function(normalizedName) {
	      var m = getUncoatedModuleInstantiator(normalizedName);
	      if (!m)
	        return undefined;
	      var moduleInstance = moduleInstances[m.url];
	      if (moduleInstance)
	        return moduleInstance;
	      moduleInstance = Module(m.getUncoatedModule(), liveModuleSentinel);
	      return moduleInstances[m.url] = moduleInstance;
	    },
	    set: function(normalizedName, module) {
	      normalizedName = String(normalizedName);
	      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, (function() {
	        return module;
	      }));
	      moduleInstances[normalizedName] = module;
	    },
	    get baseURL() {
	      return baseURL;
	    },
	    set baseURL(v) {
	      baseURL = String(v);
	    },
	    registerModule: function(name, func) {
	      var normalizedName = ModuleStore.normalize(name);
	      if (moduleInstantiators[normalizedName])
	        throw new Error('duplicate module named ' + normalizedName);
	      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, func);
	    },
	    bundleStore: Object.create(null),
	    register: function(name, deps, func) {
	      if (!deps || !deps.length && !func.length) {
	        this.registerModule(name, func);
	      } else {
	        this.bundleStore[name] = {
	          deps: deps,
	          execute: function() {
	            var $__0 = arguments;
	            var depMap = {};
	            deps.forEach((function(dep, index) {
	              return depMap[dep] = $__0[index];
	            }));
	            var registryEntry = func.call(this, depMap);
	            registryEntry.execute.call(this);
	            return registryEntry.exports;
	          }
	        };
	      }
	    },
	    getAnonymousModule: function(func) {
	      return new Module(func.call(global), liveModuleSentinel);
	    },
	    getForTesting: function(name) {
	      var $__0 = this;
	      if (!this.testingPrefix_) {
	        Object.keys(moduleInstances).some((function(key) {
	          var m = /(traceur@[^\/]*\/)/.exec(key);
	          if (m) {
	            $__0.testingPrefix_ = m[1];
	            return true;
	          }
	        }));
	      }
	      return this.get(this.testingPrefix_ + name);
	    }
	  };
	  ModuleStore.set('@traceur/src/runtime/ModuleStore', new Module({ModuleStore: ModuleStore}));
	  var setupGlobals = $traceurRuntime.setupGlobals;
	  $traceurRuntime.setupGlobals = function(global) {
	    setupGlobals(global);
	  };
	  $traceurRuntime.ModuleStore = ModuleStore;
	  global.System = {
	    register: ModuleStore.register.bind(ModuleStore),
	    get: ModuleStore.get,
	    set: ModuleStore.set,
	    normalize: ModuleStore.normalize
	  };
	  $traceurRuntime.getModuleImpl = function(name) {
	    var instantiator = getUncoatedModuleInstantiator(name);
	    return instantiator && instantiator.getUncoatedModule();
	  };
	})(typeof global !== 'undefined' ? global : this);
	System.register("traceur-runtime@0.0.59/src/runtime/polyfills/utils", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.59/src/runtime/polyfills/utils";
	  var $ceil = Math.ceil;
	  var $floor = Math.floor;
	  var $isFinite = isFinite;
	  var $isNaN = isNaN;
	  var $pow = Math.pow;
	  var $min = Math.min;
	  var toObject = $traceurRuntime.toObject;
	  function toUint32(x) {
	    return x >>> 0;
	  }
	  function isObject(x) {
	    return x && (typeof x === 'object' || typeof x === 'function');
	  }
	  function isCallable(x) {
	    return typeof x === 'function';
	  }
	  function isNumber(x) {
	    return typeof x === 'number';
	  }
	  function toInteger(x) {
	    x = +x;
	    if ($isNaN(x))
	      return 0;
	    if (x === 0 || !$isFinite(x))
	      return x;
	    return x > 0 ? $floor(x) : $ceil(x);
	  }
	  var MAX_SAFE_LENGTH = $pow(2, 53) - 1;
	  function toLength(x) {
	    var len = toInteger(x);
	    return len < 0 ? 0 : $min(len, MAX_SAFE_LENGTH);
	  }
	  function checkIterable(x) {
	    return !isObject(x) ? undefined : x[Symbol.iterator];
	  }
	  function isConstructor(x) {
	    return isCallable(x);
	  }
	  function createIteratorResultObject(value, done) {
	    return {
	      value: value,
	      done: done
	    };
	  }
	  function maybeDefine(object, name, descr) {
	    if (!(name in object)) {
	      Object.defineProperty(object, name, descr);
	    }
	  }
	  function maybeDefineMethod(object, name, value) {
	    maybeDefine(object, name, {
	      value: value,
	      configurable: true,
	      enumerable: false,
	      writable: true
	    });
	  }
	  function maybeDefineConst(object, name, value) {
	    maybeDefine(object, name, {
	      value: value,
	      configurable: false,
	      enumerable: false,
	      writable: false
	    });
	  }
	  function maybeAddFunctions(object, functions) {
	    for (var i = 0; i < functions.length; i += 2) {
	      var name = functions[i];
	      var value = functions[i + 1];
	      maybeDefineMethod(object, name, value);
	    }
	  }
	  function maybeAddConsts(object, consts) {
	    for (var i = 0; i < consts.length; i += 2) {
	      var name = consts[i];
	      var value = consts[i + 1];
	      maybeDefineConst(object, name, value);
	    }
	  }
	  function maybeAddIterator(object, func, Symbol) {
	    if (!Symbol || !Symbol.iterator || object[Symbol.iterator])
	      return;
	    if (object['@@iterator'])
	      func = object['@@iterator'];
	    Object.defineProperty(object, Symbol.iterator, {
	      value: func,
	      configurable: true,
	      enumerable: false,
	      writable: true
	    });
	  }
	  var polyfills = [];
	  function registerPolyfill(func) {
	    polyfills.push(func);
	  }
	  function polyfillAll(global) {
	    polyfills.forEach((function(f) {
	      return f(global);
	    }));
	  }
	  return {
	    get toObject() {
	      return toObject;
	    },
	    get toUint32() {
	      return toUint32;
	    },
	    get isObject() {
	      return isObject;
	    },
	    get isCallable() {
	      return isCallable;
	    },
	    get isNumber() {
	      return isNumber;
	    },
	    get toInteger() {
	      return toInteger;
	    },
	    get toLength() {
	      return toLength;
	    },
	    get checkIterable() {
	      return checkIterable;
	    },
	    get isConstructor() {
	      return isConstructor;
	    },
	    get createIteratorResultObject() {
	      return createIteratorResultObject;
	    },
	    get maybeDefine() {
	      return maybeDefine;
	    },
	    get maybeDefineMethod() {
	      return maybeDefineMethod;
	    },
	    get maybeDefineConst() {
	      return maybeDefineConst;
	    },
	    get maybeAddFunctions() {
	      return maybeAddFunctions;
	    },
	    get maybeAddConsts() {
	      return maybeAddConsts;
	    },
	    get maybeAddIterator() {
	      return maybeAddIterator;
	    },
	    get registerPolyfill() {
	      return registerPolyfill;
	    },
	    get polyfillAll() {
	      return polyfillAll;
	    }
	  };
	});
	System.register("traceur-runtime@0.0.59/src/runtime/polyfills/Map", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.59/src/runtime/polyfills/Map";
	  var $__3 = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/utils"),
	      isObject = $__3.isObject,
	      maybeAddIterator = $__3.maybeAddIterator,
	      registerPolyfill = $__3.registerPolyfill;
	  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
	  var $hasOwnProperty = Object.prototype.hasOwnProperty;
	  var deletedSentinel = {};
	  function lookupIndex(map, key) {
	    if (isObject(key)) {
	      var hashObject = getOwnHashObject(key);
	      return hashObject && map.objectIndex_[hashObject.hash];
	    }
	    if (typeof key === 'string')
	      return map.stringIndex_[key];
	    return map.primitiveIndex_[key];
	  }
	  function initMap(map) {
	    map.entries_ = [];
	    map.objectIndex_ = Object.create(null);
	    map.stringIndex_ = Object.create(null);
	    map.primitiveIndex_ = Object.create(null);
	    map.deletedCount_ = 0;
	  }
	  var Map = function Map() {
	    var iterable = arguments[0];
	    if (!isObject(this))
	      throw new TypeError('Map called on incompatible type');
	    if ($hasOwnProperty.call(this, 'entries_')) {
	      throw new TypeError('Map can not be reentrantly initialised');
	    }
	    initMap(this);
	    if (iterable !== null && iterable !== undefined) {
	      for (var $__5 = iterable[Symbol.iterator](),
	          $__6; !($__6 = $__5.next()).done; ) {
	        var $__7 = $__6.value,
	            key = $__7[0],
	            value = $__7[1];
	        {
	          this.set(key, value);
	        }
	      }
	    }
	  };
	  ($traceurRuntime.createClass)(Map, {
	    get size() {
	      return this.entries_.length / 2 - this.deletedCount_;
	    },
	    get: function(key) {
	      var index = lookupIndex(this, key);
	      if (index !== undefined)
	        return this.entries_[index + 1];
	    },
	    set: function(key, value) {
	      var objectMode = isObject(key);
	      var stringMode = typeof key === 'string';
	      var index = lookupIndex(this, key);
	      if (index !== undefined) {
	        this.entries_[index + 1] = value;
	      } else {
	        index = this.entries_.length;
	        this.entries_[index] = key;
	        this.entries_[index + 1] = value;
	        if (objectMode) {
	          var hashObject = getOwnHashObject(key);
	          var hash = hashObject.hash;
	          this.objectIndex_[hash] = index;
	        } else if (stringMode) {
	          this.stringIndex_[key] = index;
	        } else {
	          this.primitiveIndex_[key] = index;
	        }
	      }
	      return this;
	    },
	    has: function(key) {
	      return lookupIndex(this, key) !== undefined;
	    },
	    delete: function(key) {
	      var objectMode = isObject(key);
	      var stringMode = typeof key === 'string';
	      var index;
	      var hash;
	      if (objectMode) {
	        var hashObject = getOwnHashObject(key);
	        if (hashObject) {
	          index = this.objectIndex_[hash = hashObject.hash];
	          delete this.objectIndex_[hash];
	        }
	      } else if (stringMode) {
	        index = this.stringIndex_[key];
	        delete this.stringIndex_[key];
	      } else {
	        index = this.primitiveIndex_[key];
	        delete this.primitiveIndex_[key];
	      }
	      if (index !== undefined) {
	        this.entries_[index] = deletedSentinel;
	        this.entries_[index + 1] = undefined;
	        this.deletedCount_++;
	        return true;
	      }
	      return false;
	    },
	    clear: function() {
	      initMap(this);
	    },
	    forEach: function(callbackFn) {
	      var thisArg = arguments[1];
	      for (var i = 0,
	          len = this.entries_.length; i < len; i += 2) {
	        var key = this.entries_[i];
	        var value = this.entries_[i + 1];
	        if (key === deletedSentinel)
	          continue;
	        callbackFn.call(thisArg, value, key, this);
	      }
	    },
	    entries: $traceurRuntime.initGeneratorFunction(function $__8() {
	      var i,
	          len,
	          key,
	          value;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              i = 0, len = this.entries_.length;
	              $ctx.state = 12;
	              break;
	            case 12:
	              $ctx.state = (i < len) ? 8 : -2;
	              break;
	            case 4:
	              i += 2;
	              $ctx.state = 12;
	              break;
	            case 8:
	              key = this.entries_[i];
	              value = this.entries_[i + 1];
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = (key === deletedSentinel) ? 4 : 6;
	              break;
	            case 6:
	              $ctx.state = 2;
	              return [key, value];
	            case 2:
	              $ctx.maybeThrow();
	              $ctx.state = 4;
	              break;
	            default:
	              return $ctx.end();
	          }
	      }, $__8, this);
	    }),
	    keys: $traceurRuntime.initGeneratorFunction(function $__9() {
	      var i,
	          len,
	          key,
	          value;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              i = 0, len = this.entries_.length;
	              $ctx.state = 12;
	              break;
	            case 12:
	              $ctx.state = (i < len) ? 8 : -2;
	              break;
	            case 4:
	              i += 2;
	              $ctx.state = 12;
	              break;
	            case 8:
	              key = this.entries_[i];
	              value = this.entries_[i + 1];
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = (key === deletedSentinel) ? 4 : 6;
	              break;
	            case 6:
	              $ctx.state = 2;
	              return key;
	            case 2:
	              $ctx.maybeThrow();
	              $ctx.state = 4;
	              break;
	            default:
	              return $ctx.end();
	          }
	      }, $__9, this);
	    }),
	    values: $traceurRuntime.initGeneratorFunction(function $__10() {
	      var i,
	          len,
	          key,
	          value;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              i = 0, len = this.entries_.length;
	              $ctx.state = 12;
	              break;
	            case 12:
	              $ctx.state = (i < len) ? 8 : -2;
	              break;
	            case 4:
	              i += 2;
	              $ctx.state = 12;
	              break;
	            case 8:
	              key = this.entries_[i];
	              value = this.entries_[i + 1];
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = (key === deletedSentinel) ? 4 : 6;
	              break;
	            case 6:
	              $ctx.state = 2;
	              return value;
	            case 2:
	              $ctx.maybeThrow();
	              $ctx.state = 4;
	              break;
	            default:
	              return $ctx.end();
	          }
	      }, $__10, this);
	    })
	  }, {});
	  Object.defineProperty(Map.prototype, Symbol.iterator, {
	    configurable: true,
	    writable: true,
	    value: Map.prototype.entries
	  });
	  function polyfillMap(global) {
	    var $__7 = global,
	        Object = $__7.Object,
	        Symbol = $__7.Symbol;
	    if (!global.Map)
	      global.Map = Map;
	    var mapPrototype = global.Map.prototype;
	    if (mapPrototype.entries) {
	      maybeAddIterator(mapPrototype, mapPrototype.entries, Symbol);
	      maybeAddIterator(Object.getPrototypeOf(new global.Map().entries()), function() {
	        return this;
	      }, Symbol);
	    }
	  }
	  registerPolyfill(polyfillMap);
	  return {
	    get Map() {
	      return Map;
	    },
	    get polyfillMap() {
	      return polyfillMap;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.59/src/runtime/polyfills/Map" + '');
	System.register("traceur-runtime@0.0.59/src/runtime/polyfills/Set", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.59/src/runtime/polyfills/Set";
	  var $__11 = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/utils"),
	      isObject = $__11.isObject,
	      maybeAddIterator = $__11.maybeAddIterator,
	      registerPolyfill = $__11.registerPolyfill;
	  var Map = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/Map").Map;
	  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
	  var $hasOwnProperty = Object.prototype.hasOwnProperty;
	  function initSet(set) {
	    set.map_ = new Map();
	  }
	  var Set = function Set() {
	    var iterable = arguments[0];
	    if (!isObject(this))
	      throw new TypeError('Set called on incompatible type');
	    if ($hasOwnProperty.call(this, 'map_')) {
	      throw new TypeError('Set can not be reentrantly initialised');
	    }
	    initSet(this);
	    if (iterable !== null && iterable !== undefined) {
	      for (var $__15 = iterable[Symbol.iterator](),
	          $__16; !($__16 = $__15.next()).done; ) {
	        var item = $__16.value;
	        {
	          this.add(item);
	        }
	      }
	    }
	  };
	  ($traceurRuntime.createClass)(Set, {
	    get size() {
	      return this.map_.size;
	    },
	    has: function(key) {
	      return this.map_.has(key);
	    },
	    add: function(key) {
	      this.map_.set(key, key);
	      return this;
	    },
	    delete: function(key) {
	      return this.map_.delete(key);
	    },
	    clear: function() {
	      return this.map_.clear();
	    },
	    forEach: function(callbackFn) {
	      var thisArg = arguments[1];
	      var $__13 = this;
	      return this.map_.forEach((function(value, key) {
	        callbackFn.call(thisArg, key, key, $__13);
	      }));
	    },
	    values: $traceurRuntime.initGeneratorFunction(function $__18() {
	      var $__19,
	          $__20;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              $__19 = this.map_.keys()[Symbol.iterator]();
	              $ctx.sent = void 0;
	              $ctx.action = 'next';
	              $ctx.state = 12;
	              break;
	            case 12:
	              $__20 = $__19[$ctx.action]($ctx.sentIgnoreThrow);
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = ($__20.done) ? 3 : 2;
	              break;
	            case 3:
	              $ctx.sent = $__20.value;
	              $ctx.state = -2;
	              break;
	            case 2:
	              $ctx.state = 12;
	              return $__20.value;
	            default:
	              return $ctx.end();
	          }
	      }, $__18, this);
	    }),
	    entries: $traceurRuntime.initGeneratorFunction(function $__21() {
	      var $__22,
	          $__23;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              $__22 = this.map_.entries()[Symbol.iterator]();
	              $ctx.sent = void 0;
	              $ctx.action = 'next';
	              $ctx.state = 12;
	              break;
	            case 12:
	              $__23 = $__22[$ctx.action]($ctx.sentIgnoreThrow);
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = ($__23.done) ? 3 : 2;
	              break;
	            case 3:
	              $ctx.sent = $__23.value;
	              $ctx.state = -2;
	              break;
	            case 2:
	              $ctx.state = 12;
	              return $__23.value;
	            default:
	              return $ctx.end();
	          }
	      }, $__21, this);
	    })
	  }, {});
	  Object.defineProperty(Set.prototype, Symbol.iterator, {
	    configurable: true,
	    writable: true,
	    value: Set.prototype.values
	  });
	  Object.defineProperty(Set.prototype, 'keys', {
	    configurable: true,
	    writable: true,
	    value: Set.prototype.values
	  });
	  function polyfillSet(global) {
	    var $__17 = global,
	        Object = $__17.Object,
	        Symbol = $__17.Symbol;
	    if (!global.Set)
	      global.Set = Set;
	    var setPrototype = global.Set.prototype;
	    if (setPrototype.values) {
	      maybeAddIterator(setPrototype, setPrototype.values, Symbol);
	      maybeAddIterator(Object.getPrototypeOf(new global.Set().values()), function() {
	        return this;
	      }, Symbol);
	    }
	  }
	  registerPolyfill(polyfillSet);
	  return {
	    get Set() {
	      return Set;
	    },
	    get polyfillSet() {
	      return polyfillSet;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.59/src/runtime/polyfills/Set" + '');
	System.register("traceur-runtime@0.0.59/node_modules/rsvp/lib/rsvp/asap", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.59/node_modules/rsvp/lib/rsvp/asap";
	  var length = 0;
	  function asap(callback, arg) {
	    queue[length] = callback;
	    queue[length + 1] = arg;
	    length += 2;
	    if (length === 2) {
	      scheduleFlush();
	    }
	  }
	  var $__default = asap;
	  var browserGlobal = (typeof window !== 'undefined') ? window : {};
	  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	  function useNextTick() {
	    return function() {
	      process.nextTick(flush);
	    };
	  }
	  function useMutationObserver() {
	    var iterations = 0;
	    var observer = new BrowserMutationObserver(flush);
	    var node = document.createTextNode('');
	    observer.observe(node, {characterData: true});
	    return function() {
	      node.data = (iterations = ++iterations % 2);
	    };
	  }
	  function useMessageChannel() {
	    var channel = new MessageChannel();
	    channel.port1.onmessage = flush;
	    return function() {
	      channel.port2.postMessage(0);
	    };
	  }
	  function useSetTimeout() {
	    return function() {
	      setTimeout(flush, 1);
	    };
	  }
	  var queue = new Array(1000);
	  function flush() {
	    for (var i = 0; i < length; i += 2) {
	      var callback = queue[i];
	      var arg = queue[i + 1];
	      callback(arg);
	      queue[i] = undefined;
	      queue[i + 1] = undefined;
	    }
	    length = 0;
	  }
	  var scheduleFlush;
	  if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
	    scheduleFlush = useNextTick();
	  } else if (BrowserMutationObserver) {
	    scheduleFlush = useMutationObserver();
	  } else if (isWorker) {
	    scheduleFlush = useMessageChannel();
	  } else {
	    scheduleFlush = useSetTimeout();
	  }
	  return {get default() {
	      return $__default;
	    }};
	});
	System.register("traceur-runtime@0.0.59/src/runtime/polyfills/Promise", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.59/src/runtime/polyfills/Promise";
	  var async = System.get("traceur-runtime@0.0.59/node_modules/rsvp/lib/rsvp/asap").default;
	  var registerPolyfill = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/utils").registerPolyfill;
	  var promiseRaw = {};
	  function isPromise(x) {
	    return x && typeof x === 'object' && x.status_ !== undefined;
	  }
	  function idResolveHandler(x) {
	    return x;
	  }
	  function idRejectHandler(x) {
	    throw x;
	  }
	  function chain(promise) {
	    var onResolve = arguments[1] !== (void 0) ? arguments[1] : idResolveHandler;
	    var onReject = arguments[2] !== (void 0) ? arguments[2] : idRejectHandler;
	    var deferred = getDeferred(promise.constructor);
	    switch (promise.status_) {
	      case undefined:
	        throw TypeError;
	      case 0:
	        promise.onResolve_.push(onResolve, deferred);
	        promise.onReject_.push(onReject, deferred);
	        break;
	      case +1:
	        promiseEnqueue(promise.value_, [onResolve, deferred]);
	        break;
	      case -1:
	        promiseEnqueue(promise.value_, [onReject, deferred]);
	        break;
	    }
	    return deferred.promise;
	  }
	  function getDeferred(C) {
	    if (this === $Promise) {
	      var promise = promiseInit(new $Promise(promiseRaw));
	      return {
	        promise: promise,
	        resolve: (function(x) {
	          promiseResolve(promise, x);
	        }),
	        reject: (function(r) {
	          promiseReject(promise, r);
	        })
	      };
	    } else {
	      var result = {};
	      result.promise = new C((function(resolve, reject) {
	        result.resolve = resolve;
	        result.reject = reject;
	      }));
	      return result;
	    }
	  }
	  function promiseSet(promise, status, value, onResolve, onReject) {
	    promise.status_ = status;
	    promise.value_ = value;
	    promise.onResolve_ = onResolve;
	    promise.onReject_ = onReject;
	    return promise;
	  }
	  function promiseInit(promise) {
	    return promiseSet(promise, 0, undefined, [], []);
	  }
	  var Promise = function Promise(resolver) {
	    if (resolver === promiseRaw)
	      return;
	    if (typeof resolver !== 'function')
	      throw new TypeError;
	    var promise = promiseInit(this);
	    try {
	      resolver((function(x) {
	        promiseResolve(promise, x);
	      }), (function(r) {
	        promiseReject(promise, r);
	      }));
	    } catch (e) {
	      promiseReject(promise, e);
	    }
	  };
	  ($traceurRuntime.createClass)(Promise, {
	    catch: function(onReject) {
	      return this.then(undefined, onReject);
	    },
	    then: function(onResolve, onReject) {
	      if (typeof onResolve !== 'function')
	        onResolve = idResolveHandler;
	      if (typeof onReject !== 'function')
	        onReject = idRejectHandler;
	      var that = this;
	      var constructor = this.constructor;
	      return chain(this, function(x) {
	        x = promiseCoerce(constructor, x);
	        return x === that ? onReject(new TypeError) : isPromise(x) ? x.then(onResolve, onReject) : onResolve(x);
	      }, onReject);
	    }
	  }, {
	    resolve: function(x) {
	      if (this === $Promise) {
	        if (isPromise(x)) {
	          return x;
	        }
	        return promiseSet(new $Promise(promiseRaw), +1, x);
	      } else {
	        return new this(function(resolve, reject) {
	          resolve(x);
	        });
	      }
	    },
	    reject: function(r) {
	      if (this === $Promise) {
	        return promiseSet(new $Promise(promiseRaw), -1, r);
	      } else {
	        return new this((function(resolve, reject) {
	          reject(r);
	        }));
	      }
	    },
	    all: function(values) {
	      var deferred = getDeferred(this);
	      var resolutions = [];
	      try {
	        var count = values.length;
	        if (count === 0) {
	          deferred.resolve(resolutions);
	        } else {
	          for (var i = 0; i < values.length; i++) {
	            this.resolve(values[i]).then(function(i, x) {
	              resolutions[i] = x;
	              if (--count === 0)
	                deferred.resolve(resolutions);
	            }.bind(undefined, i), (function(r) {
	              deferred.reject(r);
	            }));
	          }
	        }
	      } catch (e) {
	        deferred.reject(e);
	      }
	      return deferred.promise;
	    },
	    race: function(values) {
	      var deferred = getDeferred(this);
	      try {
	        for (var i = 0; i < values.length; i++) {
	          this.resolve(values[i]).then((function(x) {
	            deferred.resolve(x);
	          }), (function(r) {
	            deferred.reject(r);
	          }));
	        }
	      } catch (e) {
	        deferred.reject(e);
	      }
	      return deferred.promise;
	    }
	  });
	  var $Promise = Promise;
	  var $PromiseReject = $Promise.reject;
	  function promiseResolve(promise, x) {
	    promiseDone(promise, +1, x, promise.onResolve_);
	  }
	  function promiseReject(promise, r) {
	    promiseDone(promise, -1, r, promise.onReject_);
	  }
	  function promiseDone(promise, status, value, reactions) {
	    if (promise.status_ !== 0)
	      return;
	    promiseEnqueue(value, reactions);
	    promiseSet(promise, status, value);
	  }
	  function promiseEnqueue(value, tasks) {
	    async((function() {
	      for (var i = 0; i < tasks.length; i += 2) {
	        promiseHandle(value, tasks[i], tasks[i + 1]);
	      }
	    }));
	  }
	  function promiseHandle(value, handler, deferred) {
	    try {
	      var result = handler(value);
	      if (result === deferred.promise)
	        throw new TypeError;
	      else if (isPromise(result))
	        chain(result, deferred.resolve, deferred.reject);
	      else
	        deferred.resolve(result);
	    } catch (e) {
	      try {
	        deferred.reject(e);
	      } catch (e) {}
	    }
	  }
	  var thenableSymbol = '@@thenable';
	  function isObject(x) {
	    return x && (typeof x === 'object' || typeof x === 'function');
	  }
	  function promiseCoerce(constructor, x) {
	    if (!isPromise(x) && isObject(x)) {
	      var then;
	      try {
	        then = x.then;
	      } catch (r) {
	        var promise = $PromiseReject.call(constructor, r);
	        x[thenableSymbol] = promise;
	        return promise;
	      }
	      if (typeof then === 'function') {
	        var p = x[thenableSymbol];
	        if (p) {
	          return p;
	        } else {
	          var deferred = getDeferred(constructor);
	          x[thenableSymbol] = deferred.promise;
	          try {
	            then.call(x, deferred.resolve, deferred.reject);
	          } catch (r) {
	            deferred.reject(r);
	          }
	          return deferred.promise;
	        }
	      }
	    }
	    return x;
	  }
	  function polyfillPromise(global) {
	    if (!global.Promise)
	      global.Promise = Promise;
	  }
	  registerPolyfill(polyfillPromise);
	  return {
	    get Promise() {
	      return Promise;
	    },
	    get polyfillPromise() {
	      return polyfillPromise;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.59/src/runtime/polyfills/Promise" + '');
	System.register("traceur-runtime@0.0.59/src/runtime/polyfills/StringIterator", [], function() {
	  "use strict";
	  var $__29;
	  var __moduleName = "traceur-runtime@0.0.59/src/runtime/polyfills/StringIterator";
	  var $__27 = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/utils"),
	      createIteratorResultObject = $__27.createIteratorResultObject,
	      isObject = $__27.isObject;
	  var $__30 = $traceurRuntime,
	      hasOwnProperty = $__30.hasOwnProperty,
	      toProperty = $__30.toProperty;
	  var iteratedString = Symbol('iteratedString');
	  var stringIteratorNextIndex = Symbol('stringIteratorNextIndex');
	  var StringIterator = function StringIterator() {};
	  ($traceurRuntime.createClass)(StringIterator, ($__29 = {}, Object.defineProperty($__29, "next", {
	    value: function() {
	      var o = this;
	      if (!isObject(o) || !hasOwnProperty(o, iteratedString)) {
	        throw new TypeError('this must be a StringIterator object');
	      }
	      var s = o[toProperty(iteratedString)];
	      if (s === undefined) {
	        return createIteratorResultObject(undefined, true);
	      }
	      var position = o[toProperty(stringIteratorNextIndex)];
	      var len = s.length;
	      if (position >= len) {
	        o[toProperty(iteratedString)] = undefined;
	        return createIteratorResultObject(undefined, true);
	      }
	      var first = s.charCodeAt(position);
	      var resultString;
	      if (first < 0xD800 || first > 0xDBFF || position + 1 === len) {
	        resultString = String.fromCharCode(first);
	      } else {
	        var second = s.charCodeAt(position + 1);
	        if (second < 0xDC00 || second > 0xDFFF) {
	          resultString = String.fromCharCode(first);
	        } else {
	          resultString = String.fromCharCode(first) + String.fromCharCode(second);
	        }
	      }
	      o[toProperty(stringIteratorNextIndex)] = position + resultString.length;
	      return createIteratorResultObject(resultString, false);
	    },
	    configurable: true,
	    enumerable: true,
	    writable: true
	  }), Object.defineProperty($__29, Symbol.iterator, {
	    value: function() {
	      return this;
	    },
	    configurable: true,
	    enumerable: true,
	    writable: true
	  }), $__29), {});
	  function createStringIterator(string) {
	    var s = String(string);
	    var iterator = Object.create(StringIterator.prototype);
	    iterator[toProperty(iteratedString)] = s;
	    iterator[toProperty(stringIteratorNextIndex)] = 0;
	    return iterator;
	  }
	  return {get createStringIterator() {
	      return createStringIterator;
	    }};
	});
	System.register("traceur-runtime@0.0.59/src/runtime/polyfills/String", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.59/src/runtime/polyfills/String";
	  var createStringIterator = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/StringIterator").createStringIterator;
	  var $__32 = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/utils"),
	      maybeAddFunctions = $__32.maybeAddFunctions,
	      maybeAddIterator = $__32.maybeAddIterator,
	      registerPolyfill = $__32.registerPolyfill;
	  var $toString = Object.prototype.toString;
	  var $indexOf = String.prototype.indexOf;
	  var $lastIndexOf = String.prototype.lastIndexOf;
	  function startsWith(search) {
	    var string = String(this);
	    if (this == null || $toString.call(search) == '[object RegExp]') {
	      throw TypeError();
	    }
	    var stringLength = string.length;
	    var searchString = String(search);
	    var searchLength = searchString.length;
	    var position = arguments.length > 1 ? arguments[1] : undefined;
	    var pos = position ? Number(position) : 0;
	    if (isNaN(pos)) {
	      pos = 0;
	    }
	    var start = Math.min(Math.max(pos, 0), stringLength);
	    return $indexOf.call(string, searchString, pos) == start;
	  }
	  function endsWith(search) {
	    var string = String(this);
	    if (this == null || $toString.call(search) == '[object RegExp]') {
	      throw TypeError();
	    }
	    var stringLength = string.length;
	    var searchString = String(search);
	    var searchLength = searchString.length;
	    var pos = stringLength;
	    if (arguments.length > 1) {
	      var position = arguments[1];
	      if (position !== undefined) {
	        pos = position ? Number(position) : 0;
	        if (isNaN(pos)) {
	          pos = 0;
	        }
	      }
	    }
	    var end = Math.min(Math.max(pos, 0), stringLength);
	    var start = end - searchLength;
	    if (start < 0) {
	      return false;
	    }
	    return $lastIndexOf.call(string, searchString, start) == start;
	  }
	  function contains(search) {
	    if (this == null) {
	      throw TypeError();
	    }
	    var string = String(this);
	    var stringLength = string.length;
	    var searchString = String(search);
	    var searchLength = searchString.length;
	    var position = arguments.length > 1 ? arguments[1] : undefined;
	    var pos = position ? Number(position) : 0;
	    if (isNaN(pos)) {
	      pos = 0;
	    }
	    var start = Math.min(Math.max(pos, 0), stringLength);
	    return $indexOf.call(string, searchString, pos) != -1;
	  }
	  function repeat(count) {
	    if (this == null) {
	      throw TypeError();
	    }
	    var string = String(this);
	    var n = count ? Number(count) : 0;
	    if (isNaN(n)) {
	      n = 0;
	    }
	    if (n < 0 || n == Infinity) {
	      throw RangeError();
	    }
	    if (n == 0) {
	      return '';
	    }
	    var result = '';
	    while (n--) {
	      result += string;
	    }
	    return result;
	  }
	  function codePointAt(position) {
	    if (this == null) {
	      throw TypeError();
	    }
	    var string = String(this);
	    var size = string.length;
	    var index = position ? Number(position) : 0;
	    if (isNaN(index)) {
	      index = 0;
	    }
	    if (index < 0 || index >= size) {
	      return undefined;
	    }
	    var first = string.charCodeAt(index);
	    var second;
	    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
	      second = string.charCodeAt(index + 1);
	      if (second >= 0xDC00 && second <= 0xDFFF) {
	        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
	      }
	    }
	    return first;
	  }
	  function raw(callsite) {
	    var raw = callsite.raw;
	    var len = raw.length >>> 0;
	    if (len === 0)
	      return '';
	    var s = '';
	    var i = 0;
	    while (true) {
	      s += raw[i];
	      if (i + 1 === len)
	        return s;
	      s += arguments[++i];
	    }
	  }
	  function fromCodePoint() {
	    var codeUnits = [];
	    var floor = Math.floor;
	    var highSurrogate;
	    var lowSurrogate;
	    var index = -1;
	    var length = arguments.length;
	    if (!length) {
	      return '';
	    }
	    while (++index < length) {
	      var codePoint = Number(arguments[index]);
	      if (!isFinite(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || floor(codePoint) != codePoint) {
	        throw RangeError('Invalid code point: ' + codePoint);
	      }
	      if (codePoint <= 0xFFFF) {
	        codeUnits.push(codePoint);
	      } else {
	        codePoint -= 0x10000;
	        highSurrogate = (codePoint >> 10) + 0xD800;
	        lowSurrogate = (codePoint % 0x400) + 0xDC00;
	        codeUnits.push(highSurrogate, lowSurrogate);
	      }
	    }
	    return String.fromCharCode.apply(null, codeUnits);
	  }
	  function stringPrototypeIterator() {
	    var o = $traceurRuntime.checkObjectCoercible(this);
	    var s = String(o);
	    return createStringIterator(s);
	  }
	  function polyfillString(global) {
	    var String = global.String;
	    maybeAddFunctions(String.prototype, ['codePointAt', codePointAt, 'contains', contains, 'endsWith', endsWith, 'startsWith', startsWith, 'repeat', repeat]);
	    maybeAddFunctions(String, ['fromCodePoint', fromCodePoint, 'raw', raw]);
	    maybeAddIterator(String.prototype, stringPrototypeIterator, Symbol);
	  }
	  registerPolyfill(polyfillString);
	  return {
	    get startsWith() {
	      return startsWith;
	    },
	    get endsWith() {
	      return endsWith;
	    },
	    get contains() {
	      return contains;
	    },
	    get repeat() {
	      return repeat;
	    },
	    get codePointAt() {
	      return codePointAt;
	    },
	    get raw() {
	      return raw;
	    },
	    get fromCodePoint() {
	      return fromCodePoint;
	    },
	    get stringPrototypeIterator() {
	      return stringPrototypeIterator;
	    },
	    get polyfillString() {
	      return polyfillString;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.59/src/runtime/polyfills/String" + '');
	System.register("traceur-runtime@0.0.59/src/runtime/polyfills/ArrayIterator", [], function() {
	  "use strict";
	  var $__36;
	  var __moduleName = "traceur-runtime@0.0.59/src/runtime/polyfills/ArrayIterator";
	  var $__34 = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/utils"),
	      toObject = $__34.toObject,
	      toUint32 = $__34.toUint32,
	      createIteratorResultObject = $__34.createIteratorResultObject;
	  var ARRAY_ITERATOR_KIND_KEYS = 1;
	  var ARRAY_ITERATOR_KIND_VALUES = 2;
	  var ARRAY_ITERATOR_KIND_ENTRIES = 3;
	  var ArrayIterator = function ArrayIterator() {};
	  ($traceurRuntime.createClass)(ArrayIterator, ($__36 = {}, Object.defineProperty($__36, "next", {
	    value: function() {
	      var iterator = toObject(this);
	      var array = iterator.iteratorObject_;
	      if (!array) {
	        throw new TypeError('Object is not an ArrayIterator');
	      }
	      var index = iterator.arrayIteratorNextIndex_;
	      var itemKind = iterator.arrayIterationKind_;
	      var length = toUint32(array.length);
	      if (index >= length) {
	        iterator.arrayIteratorNextIndex_ = Infinity;
	        return createIteratorResultObject(undefined, true);
	      }
	      iterator.arrayIteratorNextIndex_ = index + 1;
	      if (itemKind == ARRAY_ITERATOR_KIND_VALUES)
	        return createIteratorResultObject(array[index], false);
	      if (itemKind == ARRAY_ITERATOR_KIND_ENTRIES)
	        return createIteratorResultObject([index, array[index]], false);
	      return createIteratorResultObject(index, false);
	    },
	    configurable: true,
	    enumerable: true,
	    writable: true
	  }), Object.defineProperty($__36, Symbol.iterator, {
	    value: function() {
	      return this;
	    },
	    configurable: true,
	    enumerable: true,
	    writable: true
	  }), $__36), {});
	  function createArrayIterator(array, kind) {
	    var object = toObject(array);
	    var iterator = new ArrayIterator;
	    iterator.iteratorObject_ = object;
	    iterator.arrayIteratorNextIndex_ = 0;
	    iterator.arrayIterationKind_ = kind;
	    return iterator;
	  }
	  function entries() {
	    return createArrayIterator(this, ARRAY_ITERATOR_KIND_ENTRIES);
	  }
	  function keys() {
	    return createArrayIterator(this, ARRAY_ITERATOR_KIND_KEYS);
	  }
	  function values() {
	    return createArrayIterator(this, ARRAY_ITERATOR_KIND_VALUES);
	  }
	  return {
	    get entries() {
	      return entries;
	    },
	    get keys() {
	      return keys;
	    },
	    get values() {
	      return values;
	    }
	  };
	});
	System.register("traceur-runtime@0.0.59/src/runtime/polyfills/Array", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.59/src/runtime/polyfills/Array";
	  var $__37 = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/ArrayIterator"),
	      entries = $__37.entries,
	      keys = $__37.keys,
	      values = $__37.values;
	  var $__38 = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/utils"),
	      checkIterable = $__38.checkIterable,
	      isCallable = $__38.isCallable,
	      isConstructor = $__38.isConstructor,
	      maybeAddFunctions = $__38.maybeAddFunctions,
	      maybeAddIterator = $__38.maybeAddIterator,
	      registerPolyfill = $__38.registerPolyfill,
	      toInteger = $__38.toInteger,
	      toLength = $__38.toLength,
	      toObject = $__38.toObject;
	  function from(arrLike) {
	    var mapFn = arguments[1];
	    var thisArg = arguments[2];
	    var C = this;
	    var items = toObject(arrLike);
	    var mapping = mapFn !== undefined;
	    var k = 0;
	    var arr,
	        len;
	    if (mapping && !isCallable(mapFn)) {
	      throw TypeError();
	    }
	    if (checkIterable(items)) {
	      arr = isConstructor(C) ? new C() : [];
	      for (var $__39 = items[Symbol.iterator](),
	          $__40; !($__40 = $__39.next()).done; ) {
	        var item = $__40.value;
	        {
	          if (mapping) {
	            arr[k] = mapFn.call(thisArg, item, k);
	          } else {
	            arr[k] = item;
	          }
	          k++;
	        }
	      }
	      arr.length = k;
	      return arr;
	    }
	    len = toLength(items.length);
	    arr = isConstructor(C) ? new C(len) : new Array(len);
	    for (; k < len; k++) {
	      if (mapping) {
	        arr[k] = typeof thisArg === 'undefined' ? mapFn(items[k], k) : mapFn.call(thisArg, items[k], k);
	      } else {
	        arr[k] = items[k];
	      }
	    }
	    arr.length = len;
	    return arr;
	  }
	  function of() {
	    for (var items = [],
	        $__41 = 0; $__41 < arguments.length; $__41++)
	      items[$__41] = arguments[$__41];
	    var C = this;
	    var len = items.length;
	    var arr = isConstructor(C) ? new C(len) : new Array(len);
	    for (var k = 0; k < len; k++) {
	      arr[k] = items[k];
	    }
	    arr.length = len;
	    return arr;
	  }
	  function fill(value) {
	    var start = arguments[1] !== (void 0) ? arguments[1] : 0;
	    var end = arguments[2];
	    var object = toObject(this);
	    var len = toLength(object.length);
	    var fillStart = toInteger(start);
	    var fillEnd = end !== undefined ? toInteger(end) : len;
	    fillStart = fillStart < 0 ? Math.max(len + fillStart, 0) : Math.min(fillStart, len);
	    fillEnd = fillEnd < 0 ? Math.max(len + fillEnd, 0) : Math.min(fillEnd, len);
	    while (fillStart < fillEnd) {
	      object[fillStart] = value;
	      fillStart++;
	    }
	    return object;
	  }
	  function find(predicate) {
	    var thisArg = arguments[1];
	    return findHelper(this, predicate, thisArg);
	  }
	  function findIndex(predicate) {
	    var thisArg = arguments[1];
	    return findHelper(this, predicate, thisArg, true);
	  }
	  function findHelper(self, predicate) {
	    var thisArg = arguments[2];
	    var returnIndex = arguments[3] !== (void 0) ? arguments[3] : false;
	    var object = toObject(self);
	    var len = toLength(object.length);
	    if (!isCallable(predicate)) {
	      throw TypeError();
	    }
	    for (var i = 0; i < len; i++) {
	      if (i in object) {
	        var value = object[i];
	        if (predicate.call(thisArg, value, i, object)) {
	          return returnIndex ? i : value;
	        }
	      }
	    }
	    return returnIndex ? -1 : undefined;
	  }
	  function polyfillArray(global) {
	    var $__42 = global,
	        Array = $__42.Array,
	        Object = $__42.Object,
	        Symbol = $__42.Symbol;
	    maybeAddFunctions(Array.prototype, ['entries', entries, 'keys', keys, 'values', values, 'fill', fill, 'find', find, 'findIndex', findIndex]);
	    maybeAddFunctions(Array, ['from', from, 'of', of]);
	    maybeAddIterator(Array.prototype, values, Symbol);
	    maybeAddIterator(Object.getPrototypeOf([].values()), function() {
	      return this;
	    }, Symbol);
	  }
	  registerPolyfill(polyfillArray);
	  return {
	    get from() {
	      return from;
	    },
	    get of() {
	      return of;
	    },
	    get fill() {
	      return fill;
	    },
	    get find() {
	      return find;
	    },
	    get findIndex() {
	      return findIndex;
	    },
	    get polyfillArray() {
	      return polyfillArray;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.59/src/runtime/polyfills/Array" + '');
	System.register("traceur-runtime@0.0.59/src/runtime/polyfills/Object", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.59/src/runtime/polyfills/Object";
	  var $__43 = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/utils"),
	      maybeAddFunctions = $__43.maybeAddFunctions,
	      registerPolyfill = $__43.registerPolyfill;
	  var $__44 = $traceurRuntime,
	      defineProperty = $__44.defineProperty,
	      getOwnPropertyDescriptor = $__44.getOwnPropertyDescriptor,
	      getOwnPropertyNames = $__44.getOwnPropertyNames,
	      keys = $__44.keys,
	      privateNames = $__44.privateNames;
	  function is(left, right) {
	    if (left === right)
	      return left !== 0 || 1 / left === 1 / right;
	    return left !== left && right !== right;
	  }
	  function assign(target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	      var props = keys(source);
	      var p,
	          length = props.length;
	      for (p = 0; p < length; p++) {
	        var name = props[p];
	        if (privateNames[name])
	          continue;
	        target[name] = source[name];
	      }
	    }
	    return target;
	  }
	  function mixin(target, source) {
	    var props = getOwnPropertyNames(source);
	    var p,
	        descriptor,
	        length = props.length;
	    for (p = 0; p < length; p++) {
	      var name = props[p];
	      if (privateNames[name])
	        continue;
	      descriptor = getOwnPropertyDescriptor(source, props[p]);
	      defineProperty(target, props[p], descriptor);
	    }
	    return target;
	  }
	  function polyfillObject(global) {
	    var Object = global.Object;
	    maybeAddFunctions(Object, ['assign', assign, 'is', is, 'mixin', mixin]);
	  }
	  registerPolyfill(polyfillObject);
	  return {
	    get is() {
	      return is;
	    },
	    get assign() {
	      return assign;
	    },
	    get mixin() {
	      return mixin;
	    },
	    get polyfillObject() {
	      return polyfillObject;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.59/src/runtime/polyfills/Object" + '');
	System.register("traceur-runtime@0.0.59/src/runtime/polyfills/Number", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.59/src/runtime/polyfills/Number";
	  var $__46 = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/utils"),
	      isNumber = $__46.isNumber,
	      maybeAddConsts = $__46.maybeAddConsts,
	      maybeAddFunctions = $__46.maybeAddFunctions,
	      registerPolyfill = $__46.registerPolyfill,
	      toInteger = $__46.toInteger;
	  var $abs = Math.abs;
	  var $isFinite = isFinite;
	  var $isNaN = isNaN;
	  var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
	  var MIN_SAFE_INTEGER = -Math.pow(2, 53) + 1;
	  var EPSILON = Math.pow(2, -52);
	  function NumberIsFinite(number) {
	    return isNumber(number) && $isFinite(number);
	  }
	  ;
	  function isInteger(number) {
	    return NumberIsFinite(number) && toInteger(number) === number;
	  }
	  function NumberIsNaN(number) {
	    return isNumber(number) && $isNaN(number);
	  }
	  ;
	  function isSafeInteger(number) {
	    if (NumberIsFinite(number)) {
	      var integral = toInteger(number);
	      if (integral === number)
	        return $abs(integral) <= MAX_SAFE_INTEGER;
	    }
	    return false;
	  }
	  function polyfillNumber(global) {
	    var Number = global.Number;
	    maybeAddConsts(Number, ['MAX_SAFE_INTEGER', MAX_SAFE_INTEGER, 'MIN_SAFE_INTEGER', MIN_SAFE_INTEGER, 'EPSILON', EPSILON]);
	    maybeAddFunctions(Number, ['isFinite', NumberIsFinite, 'isInteger', isInteger, 'isNaN', NumberIsNaN, 'isSafeInteger', isSafeInteger]);
	  }
	  registerPolyfill(polyfillNumber);
	  return {
	    get MAX_SAFE_INTEGER() {
	      return MAX_SAFE_INTEGER;
	    },
	    get MIN_SAFE_INTEGER() {
	      return MIN_SAFE_INTEGER;
	    },
	    get EPSILON() {
	      return EPSILON;
	    },
	    get isFinite() {
	      return NumberIsFinite;
	    },
	    get isInteger() {
	      return isInteger;
	    },
	    get isNaN() {
	      return NumberIsNaN;
	    },
	    get isSafeInteger() {
	      return isSafeInteger;
	    },
	    get polyfillNumber() {
	      return polyfillNumber;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.59/src/runtime/polyfills/Number" + '');
	System.register("traceur-runtime@0.0.59/src/runtime/polyfills/polyfills", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.59/src/runtime/polyfills/polyfills";
	  var polyfillAll = System.get("traceur-runtime@0.0.59/src/runtime/polyfills/utils").polyfillAll;
	  polyfillAll(this);
	  var setupGlobals = $traceurRuntime.setupGlobals;
	  $traceurRuntime.setupGlobals = function(global) {
	    setupGlobals(global);
	    polyfillAll(global);
	  };
	  return {};
	});
	System.get("traceur-runtime@0.0.59/src/runtime/polyfills/polyfills" + '');
	module.exports = $traceurRuntime;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(10)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __moduleName = "angular2/angular2";
	var $__angular2_47_change_95_detection__,
	    $__angular2_47_core__,
	    $__angular2_47_directives__,
	    $__angular2_47_forms__;
	var $__angular2_47_change_95_detection__ = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__});
	var $__angular2_47_core__ = ($__angular2_47_core__ = __webpack_require__(7), $__angular2_47_core__ && $__angular2_47_core__.__esModule && $__angular2_47_core__ || {default: $__angular2_47_core__});
	var $__angular2_47_directives__ = ($__angular2_47_directives__ = __webpack_require__(8), $__angular2_47_directives__ && $__angular2_47_directives__.__esModule && $__angular2_47_directives__ || {default: $__angular2_47_directives__});
	var $__angular2_47_forms__ = ($__angular2_47_forms__ = __webpack_require__(9), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__});
	module.exports = $traceurRuntime.exportStar({__esModule: true}, $__angular2_47_change_95_detection__, $__angular2_47_core__, $__angular2_47_directives__, $__angular2_47_forms__);
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/angular2.map
	
	//# sourceMappingURL=./angular2.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["assert"] = __webpack_require__(5);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	Object.defineProperties(module.exports, {
	  proxy: {get: function() {
	      return proxy;
	    }},
	  assert: {get: function() {
	      return assert;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "rtts_assert/src/rtts_assert";
	var _global = typeof window === 'object' ? window : global;
	var POSITION_NAME = ['', '1st', '2nd', '3rd'];
	function argPositionName(i) {
	  var position = (i / 2) + 1;
	  return POSITION_NAME[position] || (position + 'th');
	}
	var primitives;
	var genericType;
	if (typeof $traceurRuntime === 'object') {
	  primitives = $traceurRuntime.type;
	  genericType = $traceurRuntime.genericType;
	} else {
	  primitives = {
	    any: {name: 'any'},
	    boolean: {name: 'boolean'},
	    number: {name: 'number'},
	    string: {name: 'string'},
	    symbol: {name: 'symbol'},
	    void: {name: 'void'}
	  };
	  genericType = function(type, args) {
	    return {
	      type: type,
	      args: args
	    };
	  };
	}
	Object.keys(primitives).forEach(function(name) {
	  primitives[name].__assertName = name;
	});
	function proxy() {}
	function assertArgumentTypes() {
	  for (var params = [],
	      $__0 = 0; $__0 < arguments.length; $__0++)
	    params[$__0] = arguments[$__0];
	  var actual,
	      type;
	  var currentArgErrors;
	  var errors = [];
	  var msg;
	  for (var i = 0,
	      l = params.length; i < l; i = i + 2) {
	    actual = params[i];
	    type = params[i + 1];
	    currentArgErrors = [];
	    if (!isType(actual, type, currentArgErrors)) {
	      errors.push(argPositionName(i) + ' argument has to be an instance of ' + prettyPrint(type) + ', got ' + prettyPrint(actual));
	      if (currentArgErrors.length) {
	        errors.push(currentArgErrors);
	      }
	    }
	  }
	  if (errors.length) {
	    throw new Error('Invalid arguments given!\n' + formatErrors(errors));
	  }
	}
	function prettyPrint(value, depth) {
	  if (typeof(depth) === 'undefined') {
	    depth = 0;
	  }
	  if (depth++ > 3) {
	    return '[...]';
	  }
	  if (typeof value === 'undefined') {
	    return 'undefined';
	  }
	  if (typeof value === 'string') {
	    return '"' + value + '"';
	  }
	  if (typeof value === 'boolean') {
	    return value.toString();
	  }
	  if (value === null) {
	    return 'null';
	  }
	  if (typeof value === 'object') {
	    if (value.__assertName) {
	      return value.__assertName;
	    }
	    if (value.map && typeof value.map === 'function') {
	      return '[' + value.map((function(v) {
	        return prettyPrint(v, depth);
	      })).join(', ') + ']';
	    }
	    var properties = Object.keys(value);
	    var suffix = '}';
	    if (properties.length > 20) {
	      properties.length = 20;
	      suffix = ', ... }';
	    }
	    return '{' + properties.map((function(p) {
	      return p + ': ' + prettyPrint(value[p], depth);
	    })).join(', ') + suffix;
	  }
	  return value.__assertName || value.name || value.toString();
	}
	function isType(value, T, errors) {
	  if (T && T.type) {
	    T = T.type;
	  }
	  if (T === primitives.void) {
	    return typeof value === 'undefined';
	  }
	  if (_isProxy(value)) {
	    return true;
	  }
	  if (T === primitives.any || value === null) {
	    return true;
	  }
	  if (T === primitives.string) {
	    return typeof value === 'string';
	  }
	  if (T === primitives.number) {
	    return typeof value === 'number';
	  }
	  if (T === primitives.boolean) {
	    return typeof value === 'boolean';
	  }
	  if (typeof T.assert === 'function') {
	    var parentStack = currentStack;
	    var isValid;
	    currentStack = errors;
	    try {
	      isValid = T.assert(value);
	    } catch (e) {
	      fail(e.message);
	      isValid = false;
	    }
	    currentStack = parentStack;
	    if (typeof isValid === 'undefined') {
	      isValid = errors.length === 0;
	    }
	    return isValid;
	  }
	  return value instanceof T;
	}
	function _isProxy(obj) {
	  if (!obj || !obj.constructor || !obj.constructor.annotations)
	    return false;
	  return obj.constructor.annotations.filter((function(a) {
	    return a instanceof proxy;
	  })).length > 0;
	}
	function formatErrors(errors) {
	  var indent = arguments[1] !== (void 0) ? arguments[1] : '  ';
	  return errors.map((function(e) {
	    if (typeof e === 'string')
	      return indent + '- ' + e;
	    return formatErrors(e, indent + '  ');
	  })).join('\n');
	}
	function type(actual, T) {
	  var errors = [];
	  if (!isType(actual, T, errors)) {
	    var msg = 'Expected an instance of ' + prettyPrint(T) + ', got ' + prettyPrint(actual) + '!';
	    if (errors.length) {
	      msg += '\n' + formatErrors(errors);
	    }
	    throw new Error(msg);
	  }
	  return actual;
	}
	function returnType(actual, T) {
	  var errors = [];
	  if (!isType(actual, T, errors)) {
	    var msg = 'Expected to return an instance of ' + prettyPrint(T) + ', got ' + prettyPrint(actual) + '!';
	    if (errors.length) {
	      msg += '\n' + formatErrors(errors);
	    }
	    throw new Error(msg);
	  }
	  return actual;
	}
	var string = type.string = !(__WEBPACK_AMD_DEFINE_RESULT__ = function(value) {
	  return "function" === 'string';
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	var boolean = type.boolean = !(__WEBPACK_AMD_DEFINE_RESULT__ = function(value) {
	  return "function" === 'boolean';
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	var number = type.number = !(__WEBPACK_AMD_DEFINE_RESULT__ = function(value) {
	  return "function" === 'number';
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	function arrayOf() {
	  for (var types = [],
	      $__1 = 0; $__1 < arguments.length; $__1++)
	    types[$__1] = arguments[$__1];
	  return assert.define('array of ' + types.map(prettyPrint).join('/'), function(value) {
	    var $__3;
	    if (assert(value).is(Array)) {
	      for (var i = 0; i < value.length; i++) {
	        ($__3 = assert(value[i])).is.apply($__3, $traceurRuntime.spread(types));
	      }
	    }
	  });
	}
	function structure(definition) {
	  var properties = Object.keys(definition);
	  return assert.define('object with properties ' + properties.join(', '), function(value) {
	    if (assert(value).is(Object)) {
	      for (var i = 0; i < properties.length; i++) {
	        var property = properties[i];
	        assert(value[property]).is(definition[property]);
	      }
	    }
	  });
	}
	var currentStack = [];
	function fail(message) {
	  currentStack.push(message);
	}
	function define(classOrName, check) {
	  var cls = classOrName;
	  if (typeof classOrName === 'string') {
	    cls = function() {};
	    cls.__assertName = classOrName;
	  }
	  cls.assert = function(value) {
	    return check(value);
	  };
	  return cls;
	}
	function assert(value) {
	  return {is: function is() {
	      var $__3;
	      for (var types = [],
	          $__2 = 0; $__2 < arguments.length; $__2++)
	        types[$__2] = arguments[$__2];
	      var allErrors = [];
	      var errors;
	      for (var i = 0; i < types.length; i++) {
	        var type = types[i];
	        errors = [];
	        if (isType(value, type, errors)) {
	          return true;
	        }
	        allErrors.push(prettyPrint(value) + ' is not instance of ' + prettyPrint(type));
	        if (errors.length) {
	          allErrors.push(errors);
	        }
	      }
	      ($__3 = currentStack).push.apply($__3, $traceurRuntime.spread(allErrors));
	      return false;
	    }};
	}
	assert.type = type;
	for (var prop = void 0 in primitives) {
	  assert.type[prop] = primitives[prop];
	}
	assert.genericType = genericType;
	assert.argumentTypes = assertArgumentTypes;
	assert.returnType = returnType;
	assert.define = define;
	assert.fail = fail;
	assert.string = string;
	assert.number = number;
	assert.boolean = boolean;
	assert.arrayOf = arrayOf;
	assert.structure = structure;
	;
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/rtts_assert/src/rtts_assert.map
	
	//# sourceMappingURL=./rtts_assert.map
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = assert
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __moduleName = "angular2/change_detection";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_change_95_detection_47_parser_47_ast__,
	    $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__,
	    $__angular2_47_src_47_change_95_detection_47_parser_47_parser__,
	    $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__,
	    $__angular2_47_src_47_change_95_detection_47_exceptions__,
	    $__angular2_47_src_47_change_95_detection_47_interfaces__,
	    $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__,
	    $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__,
	    $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_array_95_changes__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_null_95_pipe__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__angular2_47_src_47_change_95_detection_47_parser_47_ast__ = ($__angular2_47_src_47_change_95_detection_47_parser_47_ast__ = __webpack_require__(15), $__angular2_47_src_47_change_95_detection_47_parser_47_ast__ && $__angular2_47_src_47_change_95_detection_47_parser_47_ast__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_ast__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_ast__});
	var $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ = ($__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ = __webpack_require__(16), $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ && $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__});
	var $__angular2_47_src_47_change_95_detection_47_parser_47_parser__ = ($__angular2_47_src_47_change_95_detection_47_parser_47_parser__ = __webpack_require__(17), $__angular2_47_src_47_change_95_detection_47_parser_47_parser__ && $__angular2_47_src_47_change_95_detection_47_parser_47_parser__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_parser__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_parser__});
	var $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ = ($__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ = __webpack_require__(18), $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__});
	var $__angular2_47_src_47_change_95_detection_47_exceptions__ = ($__angular2_47_src_47_change_95_detection_47_exceptions__ = __webpack_require__(11), $__angular2_47_src_47_change_95_detection_47_exceptions__ && $__angular2_47_src_47_change_95_detection_47_exceptions__.__esModule && $__angular2_47_src_47_change_95_detection_47_exceptions__ || {default: $__angular2_47_src_47_change_95_detection_47_exceptions__});
	var $__angular2_47_src_47_change_95_detection_47_interfaces__ = ($__angular2_47_src_47_change_95_detection_47_interfaces__ = __webpack_require__(12), $__angular2_47_src_47_change_95_detection_47_interfaces__ && $__angular2_47_src_47_change_95_detection_47_interfaces__.__esModule && $__angular2_47_src_47_change_95_detection_47_interfaces__ || {default: $__angular2_47_src_47_change_95_detection_47_interfaces__});
	var $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ = ($__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ = __webpack_require__(13), $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ && $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__});
	var $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__ = ($__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__ = __webpack_require__(14), $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__ && $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__.__esModule && $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__ || {default: $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__});
	var $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ = __webpack_require__(19), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__});
	var $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = __webpack_require__(20), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__});
	var $__1 = ($__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ = __webpack_require__(13), $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ && $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__}),
	    ProtoChangeDetector = $__1.ProtoChangeDetector,
	    DynamicProtoChangeDetector = $__1.DynamicProtoChangeDetector,
	    JitProtoChangeDetector = $__1.JitProtoChangeDetector;
	var PipeRegistry = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ = __webpack_require__(19), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__}).PipeRegistry;
	var ArrayChangesFactory = ($__angular2_47_src_47_change_95_detection_47_pipes_47_array_95_changes__ = __webpack_require__(21), $__angular2_47_src_47_change_95_detection_47_pipes_47_array_95_changes__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_array_95_changes__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_array_95_changes__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_array_95_changes__}).ArrayChangesFactory;
	var KeyValueChangesFactory = ($__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__ = __webpack_require__(22), $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__}).KeyValueChangesFactory;
	var NullPipeFactory = ($__angular2_47_src_47_change_95_detection_47_pipes_47_null_95_pipe__ = __webpack_require__(23), $__angular2_47_src_47_change_95_detection_47_pipes_47_null_95_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_null_95_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_null_95_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_null_95_pipe__}).NullPipeFactory;
	var ChangeDetection = function ChangeDetection() {};
	($traceurRuntime.createClass)(ChangeDetection, {createProtoChangeDetector: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    return assert.returnType((null), ProtoChangeDetector);
	  }}, {});
	Object.defineProperty(ChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var defaultPipes = {
	  "iterableDiff": [new ArrayChangesFactory(), new NullPipeFactory()],
	  "keyValDiff": [new KeyValueChangesFactory(), new NullPipeFactory()]
	};
	var DynamicChangeDetection = function DynamicChangeDetection(registry) {
	  assert.argumentTypes(registry, PipeRegistry);
	  $traceurRuntime.superConstructor($DynamicChangeDetection).call(this);
	  this.registry = registry;
	};
	var $DynamicChangeDetection = DynamicChangeDetection;
	($traceurRuntime.createClass)(DynamicChangeDetection, {createProtoChangeDetector: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    return assert.returnType((new DynamicProtoChangeDetector(this.registry)), ProtoChangeDetector);
	  }}, {}, ChangeDetection);
	Object.defineProperty(DynamicChangeDetection, "parameters", {get: function() {
	    return [[PipeRegistry]];
	  }});
	Object.defineProperty(DynamicChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var JitChangeDetection = function JitChangeDetection(registry) {
	  assert.argumentTypes(registry, PipeRegistry);
	  $traceurRuntime.superConstructor($JitChangeDetection).call(this);
	  this.registry = registry;
	};
	var $JitChangeDetection = JitChangeDetection;
	($traceurRuntime.createClass)(JitChangeDetection, {createProtoChangeDetector: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    return assert.returnType((new JitProtoChangeDetector(this.registry)), ProtoChangeDetector);
	  }}, {}, ChangeDetection);
	Object.defineProperty(JitChangeDetection, "parameters", {get: function() {
	    return [[PipeRegistry]];
	  }});
	Object.defineProperty(JitChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var _registry = new PipeRegistry(defaultPipes);
	var dynamicChangeDetection = new DynamicChangeDetection(_registry);
	var jitChangeDetection = new JitChangeDetection(_registry);
	module.exports = $traceurRuntime.exportStar({
	  get AST() {
	    return $__angular2_47_src_47_change_95_detection_47_parser_47_ast__.AST;
	  },
	  get Lexer() {
	    return $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__.Lexer;
	  },
	  get Parser() {
	    return $__angular2_47_src_47_change_95_detection_47_parser_47_parser__.Parser;
	  },
	  get ContextWithVariableBindings() {
	    return $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__.ContextWithVariableBindings;
	  },
	  get ExpressionChangedAfterItHasBeenChecked() {
	    return $__angular2_47_src_47_change_95_detection_47_exceptions__.ExpressionChangedAfterItHasBeenChecked;
	  },
	  get ChangeDetectionError() {
	    return $__angular2_47_src_47_change_95_detection_47_exceptions__.ChangeDetectionError;
	  },
	  get ChangeRecord() {
	    return $__angular2_47_src_47_change_95_detection_47_interfaces__.ChangeRecord;
	  },
	  get ChangeDispatcher() {
	    return $__angular2_47_src_47_change_95_detection_47_interfaces__.ChangeDispatcher;
	  },
	  get ChangeDetector() {
	    return $__angular2_47_src_47_change_95_detection_47_interfaces__.ChangeDetector;
	  },
	  get CHECK_ONCE() {
	    return $__angular2_47_src_47_change_95_detection_47_interfaces__.CHECK_ONCE;
	  },
	  get CHECK_ALWAYS() {
	    return $__angular2_47_src_47_change_95_detection_47_interfaces__.CHECK_ALWAYS;
	  },
	  get DETACHED() {
	    return $__angular2_47_src_47_change_95_detection_47_interfaces__.DETACHED;
	  },
	  get CHECKED() {
	    return $__angular2_47_src_47_change_95_detection_47_interfaces__.CHECKED;
	  },
	  get ProtoChangeDetector() {
	    return $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__.ProtoChangeDetector;
	  },
	  get DynamicProtoChangeDetector() {
	    return $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__.DynamicProtoChangeDetector;
	  },
	  get JitProtoChangeDetector() {
	    return $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__.JitProtoChangeDetector;
	  },
	  get DynamicChangeDetector() {
	    return $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__.DynamicChangeDetector;
	  },
	  get ChangeDetection() {
	    return ChangeDetection;
	  },
	  get defaultPipes() {
	    return defaultPipes;
	  },
	  get DynamicChangeDetection() {
	    return DynamicChangeDetection;
	  },
	  get JitChangeDetection() {
	    return JitChangeDetection;
	  },
	  get dynamicChangeDetection() {
	    return dynamicChangeDetection;
	  },
	  get jitChangeDetection() {
	    return jitChangeDetection;
	  },
	  __esModule: true
	}, $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__, $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__);
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/change_detection.map
	
	//# sourceMappingURL=./change_detection.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __moduleName = "angular2/core";
	var $__angular2_47_src_47_core_47_annotations_47_annotations__,
	    $__angular2_47_src_47_core_47_annotations_47_visibility__,
	    $__angular2_47_src_47_core_47_compiler_47_interfaces__,
	    $__angular2_47_src_47_core_47_annotations_47_template__,
	    $__angular2_47_src_47_core_47_application__,
	    $__angular2_47_src_47_core_47_compiler_47_compiler__,
	    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
	    $__angular2_47_src_47_core_47_compiler_47_view__,
	    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
	    $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__,
	    $__angular2_47_src_47_core_47_dom_47_element__;
	var $__angular2_47_src_47_core_47_annotations_47_annotations__ = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = __webpack_require__(25), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__});
	var $__angular2_47_src_47_core_47_annotations_47_visibility__ = ($__angular2_47_src_47_core_47_annotations_47_visibility__ = __webpack_require__(26), $__angular2_47_src_47_core_47_annotations_47_visibility__ && $__angular2_47_src_47_core_47_annotations_47_visibility__.__esModule && $__angular2_47_src_47_core_47_annotations_47_visibility__ || {default: $__angular2_47_src_47_core_47_annotations_47_visibility__});
	var $__angular2_47_src_47_core_47_compiler_47_interfaces__ = ($__angular2_47_src_47_core_47_compiler_47_interfaces__ = __webpack_require__(28), $__angular2_47_src_47_core_47_compiler_47_interfaces__ && $__angular2_47_src_47_core_47_compiler_47_interfaces__.__esModule && $__angular2_47_src_47_core_47_compiler_47_interfaces__ || {default: $__angular2_47_src_47_core_47_compiler_47_interfaces__});
	var $__angular2_47_src_47_core_47_annotations_47_template__ = ($__angular2_47_src_47_core_47_annotations_47_template__ = __webpack_require__(27), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__});
	var $__angular2_47_src_47_core_47_application__ = ($__angular2_47_src_47_core_47_application__ = __webpack_require__(24), $__angular2_47_src_47_core_47_application__ && $__angular2_47_src_47_core_47_application__.__esModule && $__angular2_47_src_47_core_47_application__ || {default: $__angular2_47_src_47_core_47_application__});
	var $__angular2_47_src_47_core_47_compiler_47_compiler__ = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = __webpack_require__(29), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__});
	var $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = __webpack_require__(30), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__});
	var $__angular2_47_src_47_core_47_compiler_47_view__ = ($__angular2_47_src_47_core_47_compiler_47_view__ = __webpack_require__(31), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__});
	var $__angular2_47_src_47_core_47_compiler_47_view_95_container__ = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = __webpack_require__(32), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__});
	var $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ = ($__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ = __webpack_require__(33), $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ && $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__.__esModule && $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ || {default: $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__});
	var $__angular2_47_src_47_core_47_dom_47_element__ = ($__angular2_47_src_47_core_47_dom_47_element__ = __webpack_require__(34), $__angular2_47_src_47_core_47_dom_47_element__ && $__angular2_47_src_47_core_47_dom_47_element__.__esModule && $__angular2_47_src_47_core_47_dom_47_element__ || {default: $__angular2_47_src_47_core_47_dom_47_element__});
	module.exports = $traceurRuntime.exportStar({__esModule: true}, $__angular2_47_src_47_core_47_annotations_47_annotations__, $__angular2_47_src_47_core_47_annotations_47_visibility__, $__angular2_47_src_47_core_47_compiler_47_interfaces__, $__angular2_47_src_47_core_47_annotations_47_template__, $__angular2_47_src_47_core_47_application__, $__angular2_47_src_47_core_47_compiler_47_compiler__, $__angular2_47_src_47_core_47_compiler_47_template_95_loader__, $__angular2_47_src_47_core_47_compiler_47_view__, $__angular2_47_src_47_core_47_compiler_47_view_95_container__, $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__, $__angular2_47_src_47_core_47_dom_47_element__);
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/core.map
	
	//# sourceMappingURL=./core.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __moduleName = "angular2/directives";
	var $__angular2_47_src_47_directives_47_foreach__,
	    $__angular2_47_src_47_directives_47_if__,
	    $__angular2_47_src_47_directives_47_non_95_bindable__,
	    $__angular2_47_src_47_directives_47_switch__;
	var $__angular2_47_src_47_directives_47_foreach__ = ($__angular2_47_src_47_directives_47_foreach__ = __webpack_require__(35), $__angular2_47_src_47_directives_47_foreach__ && $__angular2_47_src_47_directives_47_foreach__.__esModule && $__angular2_47_src_47_directives_47_foreach__ || {default: $__angular2_47_src_47_directives_47_foreach__});
	var $__angular2_47_src_47_directives_47_if__ = ($__angular2_47_src_47_directives_47_if__ = __webpack_require__(36), $__angular2_47_src_47_directives_47_if__ && $__angular2_47_src_47_directives_47_if__.__esModule && $__angular2_47_src_47_directives_47_if__ || {default: $__angular2_47_src_47_directives_47_if__});
	var $__angular2_47_src_47_directives_47_non_95_bindable__ = ($__angular2_47_src_47_directives_47_non_95_bindable__ = __webpack_require__(37), $__angular2_47_src_47_directives_47_non_95_bindable__ && $__angular2_47_src_47_directives_47_non_95_bindable__.__esModule && $__angular2_47_src_47_directives_47_non_95_bindable__ || {default: $__angular2_47_src_47_directives_47_non_95_bindable__});
	var $__angular2_47_src_47_directives_47_switch__ = ($__angular2_47_src_47_directives_47_switch__ = __webpack_require__(38), $__angular2_47_src_47_directives_47_switch__ && $__angular2_47_src_47_directives_47_switch__.__esModule && $__angular2_47_src_47_directives_47_switch__ || {default: $__angular2_47_src_47_directives_47_switch__});
	module.exports = $traceurRuntime.exportStar({__esModule: true}, $__angular2_47_src_47_directives_47_foreach__, $__angular2_47_src_47_directives_47_if__, $__angular2_47_src_47_directives_47_non_95_bindable__, $__angular2_47_src_47_directives_47_switch__);
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/directives.map
	
	//# sourceMappingURL=./directives.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __moduleName = "angular2/forms";
	var $__angular2_47_src_47_forms_47_model__,
	    $__angular2_47_src_47_forms_47_directives__,
	    $__angular2_47_src_47_forms_47_validators__,
	    $__angular2_47_src_47_forms_47_validator_95_directives__;
	var $__angular2_47_src_47_forms_47_model__ = ($__angular2_47_src_47_forms_47_model__ = __webpack_require__(39), $__angular2_47_src_47_forms_47_model__ && $__angular2_47_src_47_forms_47_model__.__esModule && $__angular2_47_src_47_forms_47_model__ || {default: $__angular2_47_src_47_forms_47_model__});
	var $__angular2_47_src_47_forms_47_directives__ = ($__angular2_47_src_47_forms_47_directives__ = __webpack_require__(40), $__angular2_47_src_47_forms_47_directives__ && $__angular2_47_src_47_forms_47_directives__.__esModule && $__angular2_47_src_47_forms_47_directives__ || {default: $__angular2_47_src_47_forms_47_directives__});
	var $__angular2_47_src_47_forms_47_validators__ = ($__angular2_47_src_47_forms_47_validators__ = __webpack_require__(41), $__angular2_47_src_47_forms_47_validators__ && $__angular2_47_src_47_forms_47_validators__.__esModule && $__angular2_47_src_47_forms_47_validators__ || {default: $__angular2_47_src_47_forms_47_validators__});
	var $__angular2_47_src_47_forms_47_validator_95_directives__ = ($__angular2_47_src_47_forms_47_validator_95_directives__ = __webpack_require__(42), $__angular2_47_src_47_forms_47_validator_95_directives__ && $__angular2_47_src_47_forms_47_validator_95_directives__.__esModule && $__angular2_47_src_47_forms_47_validator_95_directives__ || {default: $__angular2_47_src_47_forms_47_validator_95_directives__});
	module.exports = $traceurRuntime.exportStar({__esModule: true}, $__angular2_47_src_47_forms_47_model__, $__angular2_47_src_47_forms_47_directives__, $__angular2_47_src_47_forms_47_validators__, $__angular2_47_src_47_forms_47_validator_95_directives__);
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/forms.map
	
	//# sourceMappingURL=./forms.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    draining = true;
	    var currentQueue;
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        var i = -1;
	        while (++i < len) {
	            currentQueue[i]();
	        }
	        len = queue.length;
	    }
	    draining = false;
	}
	process.nextTick = function (fun) {
	    queue.push(fun);
	    if (!draining) {
	        setTimeout(drainQueue, 0);
	    }
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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ExpressionChangedAfterItHasBeenChecked: {get: function() {
	      return ExpressionChangedAfterItHasBeenChecked;
	    }},
	  ChangeDetectionError: {get: function() {
	      return ChangeDetectionError;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/exceptions";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_change_95_detection_47_proto_95_record__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var ProtoRecord = ($__angular2_47_src_47_change_95_detection_47_proto_95_record__ = __webpack_require__(44), $__angular2_47_src_47_change_95_detection_47_proto_95_record__ && $__angular2_47_src_47_change_95_detection_47_proto_95_record__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_record__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_record__}).ProtoRecord;
	var ExpressionChangedAfterItHasBeenChecked = function ExpressionChangedAfterItHasBeenChecked(proto, change) {
	  assert.argumentTypes(proto, ProtoRecord, change, assert.type.any);
	  $traceurRuntime.superConstructor($ExpressionChangedAfterItHasBeenChecked).call(this);
	  this.message = ("Expression '" + proto.expressionAsString + "' has changed after it was checked. ") + ("Previous value: '" + change.previousValue + "'. Current value: '" + change.currentValue + "'");
	};
	var $ExpressionChangedAfterItHasBeenChecked = ExpressionChangedAfterItHasBeenChecked;
	($traceurRuntime.createClass)(ExpressionChangedAfterItHasBeenChecked, {toString: function() {
	    return assert.returnType((this.message), assert.type.string);
	  }}, {}, Error);
	Object.defineProperty(ExpressionChangedAfterItHasBeenChecked, "parameters", {get: function() {
	    return [[ProtoRecord], [assert.type.any]];
	  }});
	var ChangeDetectionError = function ChangeDetectionError(proto, originalException) {
	  assert.argumentTypes(proto, ProtoRecord, originalException, assert.type.any);
	  $traceurRuntime.superConstructor($ChangeDetectionError).call(this);
	  this.originalException = originalException;
	  this.location = proto.expressionAsString;
	  this.message = (this.originalException + " in [" + this.location + "]");
	};
	var $ChangeDetectionError = ChangeDetectionError;
	($traceurRuntime.createClass)(ChangeDetectionError, {toString: function() {
	    return assert.returnType((this.message), assert.type.string);
	  }}, {}, Error);
	Object.defineProperty(ChangeDetectionError, "parameters", {get: function() {
	    return [[ProtoRecord], [assert.type.any]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/exceptions.map
	
	//# sourceMappingURL=./exceptions.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ChangeRecord: {get: function() {
	      return ChangeRecord;
	    }},
	  CHECK_ONCE: {get: function() {
	      return CHECK_ONCE;
	    }},
	  CHECKED: {get: function() {
	      return CHECKED;
	    }},
	  CHECK_ALWAYS: {get: function() {
	      return CHECK_ALWAYS;
	    }},
	  DETACHED: {get: function() {
	      return DETACHED;
	    }},
	  ChangeDispatcher: {get: function() {
	      return ChangeDispatcher;
	    }},
	  ChangeDetector: {get: function() {
	      return ChangeDetector;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/interfaces";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var List = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
	var ChangeRecord = function ChangeRecord(bindingMemento, change) {
	  this.bindingMemento = bindingMemento;
	  this.change = change;
	};
	($traceurRuntime.createClass)(ChangeRecord, {
	  get currentValue() {
	    return this.change.currentValue;
	  },
	  get previousValue() {
	    return this.change.previousValue;
	  }
	}, {});
	var CHECK_ONCE = "CHECK_ONCE";
	var CHECKED = "CHECKED";
	var CHECK_ALWAYS = "ALWAYS_CHECK";
	var DETACHED = "DETACHED";
	var ChangeDispatcher = function ChangeDispatcher() {};
	($traceurRuntime.createClass)(ChangeDispatcher, {onRecordChange: function(directiveMemento, records) {
	    assert.argumentTypes(directiveMemento, assert.type.any, records, assert.genericType(List, ChangeRecord));
	  }}, {});
	Object.defineProperty(ChangeDispatcher.prototype.onRecordChange, "parameters", {get: function() {
	    return [[], [assert.genericType(List, ChangeRecord)]];
	  }});
	var ChangeDetector = function ChangeDetector() {};
	var $ChangeDetector = ChangeDetector;
	($traceurRuntime.createClass)(ChangeDetector, {
	  addChild: function(cd) {
	    assert.argumentTypes(cd, $ChangeDetector);
	  },
	  removeChild: function(cd) {
	    assert.argumentTypes(cd, $ChangeDetector);
	  },
	  remove: function() {},
	  setContext: function(context) {
	    assert.argumentTypes(context, assert.type.any);
	  },
	  markPathToRootAsCheckOnce: function() {},
	  detectChanges: function() {},
	  checkNoChanges: function() {}
	}, {});
	Object.defineProperty(ChangeDetector.prototype.addChild, "parameters", {get: function() {
	    return [[ChangeDetector]];
	  }});
	Object.defineProperty(ChangeDetector.prototype.removeChild, "parameters", {get: function() {
	    return [[ChangeDetector]];
	  }});
	Object.defineProperty(ChangeDetector.prototype.setContext, "parameters", {get: function() {
	    return [[assert.type.any]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/interfaces.map
	
	//# sourceMappingURL=./interfaces.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ProtoChangeDetector: {get: function() {
	      return ProtoChangeDetector;
	    }},
	  DynamicProtoChangeDetector: {get: function() {
	      return DynamicProtoChangeDetector;
	    }},
	  JitProtoChangeDetector: {get: function() {
	      return JitProtoChangeDetector;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/proto_change_detector";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_change_95_detection_47_parser_47_ast__,
	    $__angular2_47_src_47_change_95_detection_47_interfaces__,
	    $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__,
	    $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__,
	    $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_jit_95_generator__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__,
	    $__angular2_47_src_47_change_95_detection_47_coalesce__,
	    $__angular2_47_src_47_change_95_detection_47_proto_95_record__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__1.isPresent,
	    isBlank = $__1.isBlank,
	    BaseException = $__1.BaseException,
	    Type = $__1.Type,
	    isString = $__1.isString;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper,
	    MapWrapper = $__2.MapWrapper,
	    StringMapWrapper = $__2.StringMapWrapper;
	var $__3 = ($__angular2_47_src_47_change_95_detection_47_parser_47_ast__ = __webpack_require__(15), $__angular2_47_src_47_change_95_detection_47_parser_47_ast__ && $__angular2_47_src_47_change_95_detection_47_parser_47_ast__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_ast__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_ast__}),
	    AccessMember = $__3.AccessMember,
	    Assignment = $__3.Assignment,
	    AST = $__3.AST,
	    ASTWithSource = $__3.ASTWithSource,
	    AstVisitor = $__3.AstVisitor,
	    Binary = $__3.Binary,
	    Chain = $__3.Chain,
	    Conditional = $__3.Conditional,
	    Pipe = $__3.Pipe,
	    FunctionCall = $__3.FunctionCall,
	    ImplicitReceiver = $__3.ImplicitReceiver,
	    Interpolation = $__3.Interpolation,
	    KeyedAccess = $__3.KeyedAccess,
	    LiteralArray = $__3.LiteralArray,
	    LiteralMap = $__3.LiteralMap,
	    LiteralPrimitive = $__3.LiteralPrimitive,
	    MethodCall = $__3.MethodCall,
	    PrefixNot = $__3.PrefixNot;
	var $__4 = ($__angular2_47_src_47_change_95_detection_47_interfaces__ = __webpack_require__(12), $__angular2_47_src_47_change_95_detection_47_interfaces__ && $__angular2_47_src_47_change_95_detection_47_interfaces__.__esModule && $__angular2_47_src_47_change_95_detection_47_interfaces__ || {default: $__angular2_47_src_47_change_95_detection_47_interfaces__}),
	    ChangeRecord = $__4.ChangeRecord,
	    ChangeDispatcher = $__4.ChangeDispatcher,
	    ChangeDetector = $__4.ChangeDetector;
	var ChangeDetectionUtil = ($__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ = __webpack_require__(47), $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ && $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__.__esModule && $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ || {default: $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__}).ChangeDetectionUtil;
	var DynamicChangeDetector = ($__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__ = __webpack_require__(14), $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__ && $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__.__esModule && $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__ || {default: $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__}).DynamicChangeDetector;
	var ChangeDetectorJITGenerator = ($__angular2_47_src_47_change_95_detection_47_change_95_detection_95_jit_95_generator__ = __webpack_require__(48), $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_jit_95_generator__ && $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_jit_95_generator__.__esModule && $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_jit_95_generator__ || {default: $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_jit_95_generator__}).ChangeDetectorJITGenerator;
	var PipeRegistry = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ = __webpack_require__(19), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__}).PipeRegistry;
	var coalesce = ($__angular2_47_src_47_change_95_detection_47_coalesce__ = __webpack_require__(49), $__angular2_47_src_47_change_95_detection_47_coalesce__ && $__angular2_47_src_47_change_95_detection_47_coalesce__.__esModule && $__angular2_47_src_47_change_95_detection_47_coalesce__ || {default: $__angular2_47_src_47_change_95_detection_47_coalesce__}).coalesce;
	var $__10 = ($__angular2_47_src_47_change_95_detection_47_proto_95_record__ = __webpack_require__(44), $__angular2_47_src_47_change_95_detection_47_proto_95_record__ && $__angular2_47_src_47_change_95_detection_47_proto_95_record__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_record__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_record__}),
	    ProtoRecord = $__10.ProtoRecord,
	    RECORD_TYPE_SELF = $__10.RECORD_TYPE_SELF,
	    RECORD_TYPE_PROPERTY = $__10.RECORD_TYPE_PROPERTY,
	    RECORD_TYPE_INVOKE_METHOD = $__10.RECORD_TYPE_INVOKE_METHOD,
	    RECORD_TYPE_CONST = $__10.RECORD_TYPE_CONST,
	    RECORD_TYPE_INVOKE_CLOSURE = $__10.RECORD_TYPE_INVOKE_CLOSURE,
	    RECORD_TYPE_PRIMITIVE_OP = $__10.RECORD_TYPE_PRIMITIVE_OP,
	    RECORD_TYPE_KEYED_ACCESS = $__10.RECORD_TYPE_KEYED_ACCESS,
	    RECORD_TYPE_PIPE = $__10.RECORD_TYPE_PIPE,
	    RECORD_TYPE_INTERPOLATE = $__10.RECORD_TYPE_INTERPOLATE;
	var ProtoChangeDetector = function ProtoChangeDetector() {};
	($traceurRuntime.createClass)(ProtoChangeDetector, {
	  addAst: function(ast, bindingMemento) {
	    var directiveMemento = arguments[2] !== (void 0) ? arguments[2] : null;
	    assert.argumentTypes(ast, AST, bindingMemento, assert.type.any, directiveMemento, assert.type.any);
	  },
	  instantiate: function(dispatcher) {
	    assert.argumentTypes(dispatcher, assert.type.any);
	    return assert.returnType((null), ChangeDetector);
	  }
	}, {});
	Object.defineProperty(ProtoChangeDetector.prototype.addAst, "parameters", {get: function() {
	    return [[AST], [assert.type.any], [assert.type.any]];
	  }});
	Object.defineProperty(ProtoChangeDetector.prototype.instantiate, "parameters", {get: function() {
	    return [[assert.type.any]];
	  }});
	var DynamicProtoChangeDetector = function DynamicProtoChangeDetector(pipeRegistry) {
	  assert.argumentTypes(pipeRegistry, PipeRegistry);
	  $traceurRuntime.superConstructor($DynamicProtoChangeDetector).call(this);
	  this._pipeRegistry = pipeRegistry;
	  this._records = null;
	  this._recordBuilder = new ProtoRecordBuilder();
	};
	var $DynamicProtoChangeDetector = DynamicProtoChangeDetector;
	($traceurRuntime.createClass)(DynamicProtoChangeDetector, {
	  addAst: function(ast, bindingMemento) {
	    var directiveMemento = arguments[2] !== (void 0) ? arguments[2] : null;
	    assert.argumentTypes(ast, AST, bindingMemento, assert.type.any, directiveMemento, assert.type.any);
	    this._recordBuilder.addAst(ast, bindingMemento, directiveMemento);
	  },
	  instantiate: function(dispatcher) {
	    assert.argumentTypes(dispatcher, assert.type.any);
	    this._createRecordsIfNecessary();
	    return new DynamicChangeDetector(dispatcher, this._pipeRegistry, this._records);
	  },
	  _createRecordsIfNecessary: function() {
	    if (isBlank(this._records)) {
	      var records = this._recordBuilder.records;
	      this._records = coalesce(records);
	    }
	  }
	}, {}, ProtoChangeDetector);
	Object.defineProperty(DynamicProtoChangeDetector, "parameters", {get: function() {
	    return [[PipeRegistry]];
	  }});
	Object.defineProperty(DynamicProtoChangeDetector.prototype.addAst, "parameters", {get: function() {
	    return [[AST], [assert.type.any], [assert.type.any]];
	  }});
	Object.defineProperty(DynamicProtoChangeDetector.prototype.instantiate, "parameters", {get: function() {
	    return [[assert.type.any]];
	  }});
	var _jitProtoChangeDetectorClassCounter = assert.type(0, assert.type.number);
	var JitProtoChangeDetector = function JitProtoChangeDetector(pipeRegistry) {
	  $traceurRuntime.superConstructor($JitProtoChangeDetector).call(this);
	  this._pipeRegistry = pipeRegistry;
	  this._factory = null;
	  this._recordBuilder = new ProtoRecordBuilder();
	};
	var $JitProtoChangeDetector = JitProtoChangeDetector;
	($traceurRuntime.createClass)(JitProtoChangeDetector, {
	  addAst: function(ast, bindingMemento) {
	    var directiveMemento = arguments[2] !== (void 0) ? arguments[2] : null;
	    assert.argumentTypes(ast, AST, bindingMemento, assert.type.any, directiveMemento, assert.type.any);
	    this._recordBuilder.addAst(ast, bindingMemento, directiveMemento);
	  },
	  instantiate: function(dispatcher) {
	    assert.argumentTypes(dispatcher, assert.type.any);
	    this._createFactoryIfNecessary();
	    return this._factory(dispatcher, this._pipeRegistry);
	  },
	  _createFactoryIfNecessary: function() {
	    if (isBlank(this._factory)) {
	      var c = _jitProtoChangeDetectorClassCounter++;
	      var records = coalesce(this._recordBuilder.records);
	      var typeName = ("ChangeDetector" + c);
	      this._factory = new ChangeDetectorJITGenerator(typeName, records).generate();
	    }
	  }
	}, {}, ProtoChangeDetector);
	Object.defineProperty(JitProtoChangeDetector.prototype.addAst, "parameters", {get: function() {
	    return [[AST], [assert.type.any], [assert.type.any]];
	  }});
	Object.defineProperty(JitProtoChangeDetector.prototype.instantiate, "parameters", {get: function() {
	    return [[assert.type.any]];
	  }});
	var ProtoRecordBuilder = function ProtoRecordBuilder() {
	  this.records = [];
	};
	($traceurRuntime.createClass)(ProtoRecordBuilder, {addAst: function(ast, bindingMemento) {
	    var directiveMemento = arguments[2] !== (void 0) ? arguments[2] : null;
	    assert.argumentTypes(ast, AST, bindingMemento, assert.type.any, directiveMemento, assert.type.any);
	    var last = ListWrapper.last(this.records);
	    if (isPresent(last) && last.directiveMemento == directiveMemento) {
	      last.lastInDirective = false;
	    }
	    var pr = _ConvertAstIntoProtoRecords.convert(ast, bindingMemento, directiveMemento, this.records.length);
	    if (!ListWrapper.isEmpty(pr)) {
	      var last = ListWrapper.last(pr);
	      last.lastInBinding = true;
	      last.lastInDirective = true;
	      this.records = ListWrapper.concat(this.records, pr);
	    }
	  }}, {});
	Object.defineProperty(ProtoRecordBuilder.prototype.addAst, "parameters", {get: function() {
	    return [[AST], [assert.type.any], [assert.type.any]];
	  }});
	var _ConvertAstIntoProtoRecords = function _ConvertAstIntoProtoRecords(bindingMemento, directiveMemento, contextIndex, expressionAsString) {
	  assert.argumentTypes(bindingMemento, assert.type.any, directiveMemento, assert.type.any, contextIndex, assert.type.number, expressionAsString, assert.type.string);
	  this.protoRecords = [];
	  this.bindingMemento = bindingMemento;
	  this.directiveMemento = directiveMemento;
	  this.contextIndex = contextIndex;
	  this.expressionAsString = expressionAsString;
	};
	var $_ConvertAstIntoProtoRecords = _ConvertAstIntoProtoRecords;
	($traceurRuntime.createClass)(_ConvertAstIntoProtoRecords, {
	  visitImplicitReceiver: function(ast) {
	    assert.argumentTypes(ast, ImplicitReceiver);
	    return 0;
	  },
	  visitInterpolation: function(ast) {
	    assert.argumentTypes(ast, Interpolation);
	    var args = this._visitAll(ast.expressions);
	    return this._addRecord(RECORD_TYPE_INTERPOLATE, "interpolate", _interpolationFn(ast.strings), args, ast.strings, 0);
	  },
	  visitLiteralPrimitive: function(ast) {
	    assert.argumentTypes(ast, LiteralPrimitive);
	    return this._addRecord(RECORD_TYPE_CONST, "literal", ast.value, [], null, 0);
	  },
	  visitAccessMember: function(ast) {
	    assert.argumentTypes(ast, AccessMember);
	    var receiver = ast.receiver.visit(this);
	    return this._addRecord(RECORD_TYPE_PROPERTY, ast.name, ast.getter, [], null, receiver);
	  },
	  visitMethodCall: function(ast) {
	    assert.argumentTypes(ast, MethodCall);
	    var receiver = ast.receiver.visit(this);
	    var args = this._visitAll(ast.args);
	    return this._addRecord(RECORD_TYPE_INVOKE_METHOD, ast.name, ast.fn, args, null, receiver);
	  },
	  visitFunctionCall: function(ast) {
	    assert.argumentTypes(ast, FunctionCall);
	    var target = ast.target.visit(this);
	    var args = this._visitAll(ast.args);
	    return this._addRecord(RECORD_TYPE_INVOKE_CLOSURE, "closure", null, args, null, target);
	  },
	  visitLiteralArray: function(ast) {
	    assert.argumentTypes(ast, LiteralArray);
	    var primitiveName = ("arrayFn" + ast.expressions.length);
	    return this._addRecord(RECORD_TYPE_PRIMITIVE_OP, primitiveName, _arrayFn(ast.expressions.length), this._visitAll(ast.expressions), null, 0);
	  },
	  visitLiteralMap: function(ast) {
	    assert.argumentTypes(ast, LiteralMap);
	    return this._addRecord(RECORD_TYPE_PRIMITIVE_OP, _mapPrimitiveName(ast.keys), ChangeDetectionUtil.mapFn(ast.keys), this._visitAll(ast.values), null, 0);
	  },
	  visitBinary: function(ast) {
	    assert.argumentTypes(ast, Binary);
	    var left = ast.left.visit(this);
	    var right = ast.right.visit(this);
	    return this._addRecord(RECORD_TYPE_PRIMITIVE_OP, _operationToPrimitiveName(ast.operation), _operationToFunction(ast.operation), [left, right], null, 0);
	  },
	  visitPrefixNot: function(ast) {
	    assert.argumentTypes(ast, PrefixNot);
	    var exp = ast.expression.visit(this);
	    return this._addRecord(RECORD_TYPE_PRIMITIVE_OP, "operation_negate", ChangeDetectionUtil.operation_negate, [exp], null, 0);
	  },
	  visitConditional: function(ast) {
	    assert.argumentTypes(ast, Conditional);
	    var c = ast.condition.visit(this);
	    var t = ast.trueExp.visit(this);
	    var f = ast.falseExp.visit(this);
	    return this._addRecord(RECORD_TYPE_PRIMITIVE_OP, "cond", ChangeDetectionUtil.cond, [c, t, f], null, 0);
	  },
	  visitPipe: function(ast) {
	    assert.argumentTypes(ast, Pipe);
	    var value = ast.exp.visit(this);
	    return this._addRecord(RECORD_TYPE_PIPE, ast.name, ast.name, [], null, value);
	  },
	  visitKeyedAccess: function(ast) {
	    assert.argumentTypes(ast, KeyedAccess);
	    var obj = ast.obj.visit(this);
	    var key = ast.key.visit(this);
	    return this._addRecord(RECORD_TYPE_KEYED_ACCESS, "keyedAccess", ChangeDetectionUtil.keyedAccess, [key], null, obj);
	  },
	  _visitAll: function(asts) {
	    assert.argumentTypes(asts, List);
	    var res = ListWrapper.createFixedSize(asts.length);
	    for (var i = 0; i < asts.length; ++i) {
	      res[i] = asts[i].visit(this);
	    }
	    return res;
	  },
	  _addRecord: function(type, name, funcOrValue, args, fixedArgs, context) {
	    var selfIndex = ++this.contextIndex;
	    ListWrapper.push(this.protoRecords, new ProtoRecord(type, name, funcOrValue, args, fixedArgs, context, selfIndex, this.bindingMemento, this.directiveMemento, this.expressionAsString, false, false));
	    return selfIndex;
	  }
	}, {convert: function(ast, bindingMemento, directiveMemento, contextIndex) {
	    assert.argumentTypes(ast, AST, bindingMemento, assert.type.any, directiveMemento, assert.type.any, contextIndex, assert.type.number);
	    var c = new $_ConvertAstIntoProtoRecords(bindingMemento, directiveMemento, contextIndex, ast.toString());
	    ast.visit(c);
	    return c.protoRecords;
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords, "parameters", {get: function() {
	    return [[assert.type.any], [assert.type.any], [assert.type.number], [assert.type.string]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.convert, "parameters", {get: function() {
	    return [[AST], [assert.type.any], [assert.type.any], [assert.type.number]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitImplicitReceiver, "parameters", {get: function() {
	    return [[ImplicitReceiver]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitInterpolation, "parameters", {get: function() {
	    return [[Interpolation]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitLiteralPrimitive, "parameters", {get: function() {
	    return [[LiteralPrimitive]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitAccessMember, "parameters", {get: function() {
	    return [[AccessMember]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitMethodCall, "parameters", {get: function() {
	    return [[MethodCall]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitFunctionCall, "parameters", {get: function() {
	    return [[FunctionCall]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitLiteralArray, "parameters", {get: function() {
	    return [[LiteralArray]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitLiteralMap, "parameters", {get: function() {
	    return [[LiteralMap]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitBinary, "parameters", {get: function() {
	    return [[Binary]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitPrefixNot, "parameters", {get: function() {
	    return [[PrefixNot]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitConditional, "parameters", {get: function() {
	    return [[Conditional]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitPipe, "parameters", {get: function() {
	    return [[Pipe]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype.visitKeyedAccess, "parameters", {get: function() {
	    return [[KeyedAccess]];
	  }});
	Object.defineProperty(_ConvertAstIntoProtoRecords.prototype._visitAll, "parameters", {get: function() {
	    return [[List]];
	  }});
	function _arrayFn(length) {
	  assert.argumentTypes(length, assert.type.number);
	  switch (length) {
	    case 0:
	      return assert.returnType((ChangeDetectionUtil.arrayFn0), Function);
	    case 1:
	      return assert.returnType((ChangeDetectionUtil.arrayFn1), Function);
	    case 2:
	      return assert.returnType((ChangeDetectionUtil.arrayFn2), Function);
	    case 3:
	      return assert.returnType((ChangeDetectionUtil.arrayFn3), Function);
	    case 4:
	      return assert.returnType((ChangeDetectionUtil.arrayFn4), Function);
	    case 5:
	      return assert.returnType((ChangeDetectionUtil.arrayFn5), Function);
	    case 6:
	      return assert.returnType((ChangeDetectionUtil.arrayFn6), Function);
	    case 7:
	      return assert.returnType((ChangeDetectionUtil.arrayFn7), Function);
	    case 8:
	      return assert.returnType((ChangeDetectionUtil.arrayFn8), Function);
	    case 9:
	      return assert.returnType((ChangeDetectionUtil.arrayFn9), Function);
	    default:
	      throw new BaseException("Does not support literal maps with more than 9 elements");
	  }
	}
	Object.defineProperty(_arrayFn, "parameters", {get: function() {
	    return [[assert.type.number]];
	  }});
	function _mapPrimitiveName(keys) {
	  var stringifiedKeys = ListWrapper.join(ListWrapper.map(keys, (function(k) {
	    return isString(k) ? ("\"" + k + "\"") : ("" + k);
	  })), ", ");
	  return ("mapFn([" + stringifiedKeys + "])");
	}
	Object.defineProperty(_mapPrimitiveName, "parameters", {get: function() {
	    return [[List]];
	  }});
	function _operationToPrimitiveName(operation) {
	  assert.argumentTypes(operation, assert.type.string);
	  switch (operation) {
	    case '+':
	      return assert.returnType(("operation_add"), assert.type.string);
	    case '-':
	      return assert.returnType(("operation_subtract"), assert.type.string);
	    case '*':
	      return assert.returnType(("operation_multiply"), assert.type.string);
	    case '/':
	      return assert.returnType(("operation_divide"), assert.type.string);
	    case '%':
	      return assert.returnType(("operation_remainder"), assert.type.string);
	    case '==':
	      return assert.returnType(("operation_equals"), assert.type.string);
	    case '!=':
	      return assert.returnType(("operation_not_equals"), assert.type.string);
	    case '<':
	      return assert.returnType(("operation_less_then"), assert.type.string);
	    case '>':
	      return assert.returnType(("operation_greater_then"), assert.type.string);
	    case '<=':
	      return assert.returnType(("operation_less_or_equals_then"), assert.type.string);
	    case '>=':
	      return assert.returnType(("operation_greater_or_equals_then"), assert.type.string);
	    case '&&':
	      return assert.returnType(("operation_logical_and"), assert.type.string);
	    case '||':
	      return assert.returnType(("operation_logical_or"), assert.type.string);
	    default:
	      throw new BaseException(("Unsupported operation " + operation));
	  }
	}
	Object.defineProperty(_operationToPrimitiveName, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	function _operationToFunction(operation) {
	  assert.argumentTypes(operation, assert.type.string);
	  switch (operation) {
	    case '+':
	      return assert.returnType((ChangeDetectionUtil.operation_add), Function);
	    case '-':
	      return assert.returnType((ChangeDetectionUtil.operation_subtract), Function);
	    case '*':
	      return assert.returnType((ChangeDetectionUtil.operation_multiply), Function);
	    case '/':
	      return assert.returnType((ChangeDetectionUtil.operation_divide), Function);
	    case '%':
	      return assert.returnType((ChangeDetectionUtil.operation_remainder), Function);
	    case '==':
	      return assert.returnType((ChangeDetectionUtil.operation_equals), Function);
	    case '!=':
	      return assert.returnType((ChangeDetectionUtil.operation_not_equals), Function);
	    case '<':
	      return assert.returnType((ChangeDetectionUtil.operation_less_then), Function);
	    case '>':
	      return assert.returnType((ChangeDetectionUtil.operation_greater_then), Function);
	    case '<=':
	      return assert.returnType((ChangeDetectionUtil.operation_less_or_equals_then), Function);
	    case '>=':
	      return assert.returnType((ChangeDetectionUtil.operation_greater_or_equals_then), Function);
	    case '&&':
	      return assert.returnType((ChangeDetectionUtil.operation_logical_and), Function);
	    case '||':
	      return assert.returnType((ChangeDetectionUtil.operation_logical_or), Function);
	    default:
	      throw new BaseException(("Unsupported operation " + operation));
	  }
	}
	Object.defineProperty(_operationToFunction, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	function s(v) {
	  return isPresent(v) ? ("" + v) : '';
	}
	function _interpolationFn(strings) {
	  var length = strings.length;
	  var c0 = length > 0 ? strings[0] : null;
	  var c1 = length > 1 ? strings[1] : null;
	  var c2 = length > 2 ? strings[2] : null;
	  var c3 = length > 3 ? strings[3] : null;
	  var c4 = length > 4 ? strings[4] : null;
	  var c5 = length > 5 ? strings[5] : null;
	  var c6 = length > 6 ? strings[6] : null;
	  var c7 = length > 7 ? strings[7] : null;
	  var c8 = length > 8 ? strings[8] : null;
	  var c9 = length > 9 ? strings[9] : null;
	  switch (length - 1) {
	    case 1:
	      return (function(a1) {
	        return c0 + s(a1) + c1;
	      });
	    case 2:
	      return (function(a1, a2) {
	        return c0 + s(a1) + c1 + s(a2) + c2;
	      });
	    case 3:
	      return (function(a1, a2, a3) {
	        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3;
	      });
	    case 4:
	      return (function(a1, a2, a3, a4) {
	        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4;
	      });
	    case 5:
	      return (function(a1, a2, a3, a4, a5) {
	        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5;
	      });
	    case 6:
	      return (function(a1, a2, a3, a4, a5, a6) {
	        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6;
	      });
	    case 7:
	      return (function(a1, a2, a3, a4, a5, a6, a7) {
	        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7;
	      });
	    case 8:
	      return (function(a1, a2, a3, a4, a5, a6, a7, a8) {
	        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7 + s(a8) + c8;
	      });
	    case 9:
	      return (function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	        return c0 + s(a1) + c1 + s(a2) + c2 + s(a3) + c3 + s(a4) + c4 + s(a5) + c5 + s(a6) + c6 + s(a7) + c7 + s(a8) + c8 + s(a9) + c9;
	      });
	    default:
	      throw new BaseException("Does not support more than 9 expressions");
	  }
	}
	Object.defineProperty(_interpolationFn, "parameters", {get: function() {
	    return [[List]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/proto_change_detector.map
	
	//# sourceMappingURL=./proto_change_detector.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  DynamicChangeDetector: {get: function() {
	      return DynamicChangeDetector;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/dynamic_change_detector";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__,
	    $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__,
	    $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__,
	    $__angular2_47_src_47_change_95_detection_47_proto_95_record__,
	    $__angular2_47_src_47_change_95_detection_47_exceptions__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__1.isPresent,
	    isBlank = $__1.isBlank,
	    BaseException = $__1.BaseException,
	    FunctionWrapper = $__1.FunctionWrapper;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper,
	    MapWrapper = $__2.MapWrapper,
	    StringMapWrapper = $__2.StringMapWrapper;
	var ContextWithVariableBindings = ($__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ = __webpack_require__(18), $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__}).ContextWithVariableBindings;
	var AbstractChangeDetector = ($__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__ = __webpack_require__(50), $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__ && $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__.__esModule && $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__ || {default: $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__}).AbstractChangeDetector;
	var PipeRegistry = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ = __webpack_require__(19), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__}).PipeRegistry;
	var $__6 = ($__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ = __webpack_require__(47), $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ && $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__.__esModule && $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ || {default: $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__}),
	    ChangeDetectionUtil = $__6.ChangeDetectionUtil,
	    SimpleChange = $__6.SimpleChange,
	    uninitialized = $__6.uninitialized;
	var $__7 = ($__angular2_47_src_47_change_95_detection_47_proto_95_record__ = __webpack_require__(44), $__angular2_47_src_47_change_95_detection_47_proto_95_record__ && $__angular2_47_src_47_change_95_detection_47_proto_95_record__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_record__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_record__}),
	    ProtoRecord = $__7.ProtoRecord,
	    RECORD_TYPE_SELF = $__7.RECORD_TYPE_SELF,
	    RECORD_TYPE_PROPERTY = $__7.RECORD_TYPE_PROPERTY,
	    RECORD_TYPE_INVOKE_METHOD = $__7.RECORD_TYPE_INVOKE_METHOD,
	    RECORD_TYPE_CONST = $__7.RECORD_TYPE_CONST,
	    RECORD_TYPE_INVOKE_CLOSURE = $__7.RECORD_TYPE_INVOKE_CLOSURE,
	    RECORD_TYPE_PRIMITIVE_OP = $__7.RECORD_TYPE_PRIMITIVE_OP,
	    RECORD_TYPE_KEYED_ACCESS = $__7.RECORD_TYPE_KEYED_ACCESS,
	    RECORD_TYPE_PIPE = $__7.RECORD_TYPE_PIPE,
	    RECORD_TYPE_INTERPOLATE = $__7.RECORD_TYPE_INTERPOLATE;
	var $__8 = ($__angular2_47_src_47_change_95_detection_47_exceptions__ = __webpack_require__(11), $__angular2_47_src_47_change_95_detection_47_exceptions__ && $__angular2_47_src_47_change_95_detection_47_exceptions__.__esModule && $__angular2_47_src_47_change_95_detection_47_exceptions__ || {default: $__angular2_47_src_47_change_95_detection_47_exceptions__}),
	    ExpressionChangedAfterItHasBeenChecked = $__8.ExpressionChangedAfterItHasBeenChecked,
	    ChangeDetectionError = $__8.ChangeDetectionError;
	var DynamicChangeDetector = function DynamicChangeDetector(dispatcher, pipeRegistry, protoRecords) {
	  assert.argumentTypes(dispatcher, assert.type.any, pipeRegistry, PipeRegistry, protoRecords, assert.genericType(List, ProtoRecord));
	  $traceurRuntime.superConstructor($DynamicChangeDetector).call(this);
	  this.dispatcher = dispatcher;
	  this.pipeRegistry = pipeRegistry;
	  this.values = ListWrapper.createFixedSize(protoRecords.length + 1);
	  this.pipes = ListWrapper.createFixedSize(protoRecords.length + 1);
	  this.prevContexts = ListWrapper.createFixedSize(protoRecords.length + 1);
	  this.changes = ListWrapper.createFixedSize(protoRecords.length + 1);
	  this.protos = protoRecords;
	};
	var $DynamicChangeDetector = DynamicChangeDetector;
	($traceurRuntime.createClass)(DynamicChangeDetector, {
	  setContext: function(context) {
	    assert.argumentTypes(context, assert.type.any);
	    ListWrapper.fill(this.values, uninitialized);
	    ListWrapper.fill(this.changes, false);
	    ListWrapper.fill(this.pipes, null);
	    ListWrapper.fill(this.prevContexts, uninitialized);
	    this.values[0] = context;
	  },
	  detectChangesInRecords: function(throwOnChange) {
	    assert.argumentTypes(throwOnChange, assert.type.boolean);
	    var protos = assert.type(this.protos, assert.genericType(List, ProtoRecord));
	    var updatedRecords = null;
	    for (var i = 0; i < protos.length; ++i) {
	      var proto = assert.type(protos[i], ProtoRecord);
	      var change = this._check(proto);
	      if (isPresent(change)) {
	        var record = ChangeDetectionUtil.changeRecord(proto.bindingMemento, change);
	        updatedRecords = ChangeDetectionUtil.addRecord(updatedRecords, record);
	      }
	      if (proto.lastInDirective && isPresent(updatedRecords)) {
	        if (throwOnChange)
	          ChangeDetectionUtil.throwOnChange(proto, updatedRecords[0]);
	        this.dispatcher.onRecordChange(proto.directiveMemento, updatedRecords);
	        updatedRecords = null;
	      }
	    }
	  },
	  _check: function(proto) {
	    assert.argumentTypes(proto, ProtoRecord);
	    try {
	      if (proto.mode == RECORD_TYPE_PIPE) {
	        return this._pipeCheck(proto);
	      } else {
	        return this._referenceCheck(proto);
	      }
	    } catch (e) {
	      throw new ChangeDetectionError(proto, e);
	    }
	  },
	  _referenceCheck: function(proto) {
	    assert.argumentTypes(proto, ProtoRecord);
	    if (this._pureFuncAndArgsDidNotChange(proto)) {
	      this._setChanged(proto, false);
	      return null;
	    }
	    var prevValue = this._readSelf(proto);
	    var currValue = this._calculateCurrValue(proto);
	    if (!isSame(prevValue, currValue)) {
	      this._writeSelf(proto, currValue);
	      this._setChanged(proto, true);
	      if (proto.lastInBinding) {
	        return ChangeDetectionUtil.simpleChange(prevValue, currValue);
	      } else {
	        return null;
	      }
	    } else {
	      this._setChanged(proto, false);
	      return null;
	    }
	  },
	  _calculateCurrValue: function(proto) {
	    assert.argumentTypes(proto, ProtoRecord);
	    switch (proto.mode) {
	      case RECORD_TYPE_SELF:
	        return this._readContext(proto);
	      case RECORD_TYPE_CONST:
	        return proto.funcOrValue;
	      case RECORD_TYPE_PROPERTY:
	        var context = this._readContext(proto);
	        var c = ChangeDetectionUtil.findContext(proto.name, context);
	        if (c instanceof ContextWithVariableBindings) {
	          return c.get(proto.name);
	        } else {
	          var propertyGetter = assert.type(proto.funcOrValue, Function);
	          return propertyGetter(c);
	        }
	        break;
	      case RECORD_TYPE_INVOKE_METHOD:
	        var context = this._readContext(proto);
	        var args = this._readArgs(proto);
	        var c = ChangeDetectionUtil.findContext(proto.name, context);
	        if (c instanceof ContextWithVariableBindings) {
	          return FunctionWrapper.apply(c.get(proto.name), args);
	        } else {
	          var methodInvoker = assert.type(proto.funcOrValue, Function);
	          return methodInvoker(c, args);
	        }
	        break;
	      case RECORD_TYPE_KEYED_ACCESS:
	        var arg = this._readArgs(proto)[0];
	        return this._readContext(proto)[arg];
	      case RECORD_TYPE_INVOKE_CLOSURE:
	        return FunctionWrapper.apply(this._readContext(proto), this._readArgs(proto));
	      case RECORD_TYPE_INTERPOLATE:
	      case RECORD_TYPE_PRIMITIVE_OP:
	        return FunctionWrapper.apply(proto.funcOrValue, this._readArgs(proto));
	      default:
	        throw new BaseException(("Unknown operation " + proto.mode));
	    }
	  },
	  _pipeCheck: function(proto) {
	    assert.argumentTypes(proto, ProtoRecord);
	    var context = this._readContext(proto);
	    var pipe = this._pipeFor(proto, context);
	    var newValue = pipe.transform(context);
	    if (!ChangeDetectionUtil.noChangeMarker(newValue)) {
	      var prevValue = this._readSelf(proto);
	      this._writeSelf(proto, newValue);
	      this._setChanged(proto, true);
	      if (proto.lastInBinding) {
	        return ChangeDetectionUtil.simpleChange(prevValue, newValue);
	      } else {
	        return null;
	      }
	    } else {
	      this._setChanged(proto, false);
	      return null;
	    }
	  },
	  _pipeFor: function(proto, context) {
	    assert.argumentTypes(proto, ProtoRecord, context, assert.type.any);
	    var storedPipe = this._readPipe(proto);
	    if (isPresent(storedPipe) && storedPipe.supports(context)) {
	      return storedPipe;
	    } else {
	      var pipe = this.pipeRegistry.get(proto.name, context);
	      this._writePipe(proto, pipe);
	      return pipe;
	    }
	  },
	  _readContext: function(proto) {
	    assert.argumentTypes(proto, ProtoRecord);
	    return this.values[proto.contextIndex];
	  },
	  _readSelf: function(proto) {
	    assert.argumentTypes(proto, ProtoRecord);
	    return this.values[proto.selfIndex];
	  },
	  _writeSelf: function(proto, value) {
	    assert.argumentTypes(proto, ProtoRecord, value, assert.type.any);
	    this.values[proto.selfIndex] = value;
	  },
	  _readPipe: function(proto) {
	    assert.argumentTypes(proto, ProtoRecord);
	    return this.pipes[proto.selfIndex];
	  },
	  _writePipe: function(proto, value) {
	    assert.argumentTypes(proto, ProtoRecord, value, assert.type.any);
	    this.pipes[proto.selfIndex] = value;
	  },
	  _setChanged: function(proto, value) {
	    assert.argumentTypes(proto, ProtoRecord, value, assert.type.boolean);
	    this.changes[proto.selfIndex] = value;
	  },
	  _pureFuncAndArgsDidNotChange: function(proto) {
	    assert.argumentTypes(proto, ProtoRecord);
	    return assert.returnType((proto.isPureFunction() && !this._argsChanged(proto)), assert.type.boolean);
	  },
	  _argsChanged: function(proto) {
	    assert.argumentTypes(proto, ProtoRecord);
	    var args = proto.args;
	    for (var i = 0; i < args.length; ++i) {
	      if (this.changes[args[i]]) {
	        return assert.returnType((true), assert.type.boolean);
	      }
	    }
	    return assert.returnType((false), assert.type.boolean);
	  },
	  _readArgs: function(proto) {
	    assert.argumentTypes(proto, ProtoRecord);
	    var res = ListWrapper.createFixedSize(proto.args.length);
	    var args = proto.args;
	    for (var i = 0; i < args.length; ++i) {
	      res[i] = this.values[args[i]];
	    }
	    return res;
	  }
	}, {}, AbstractChangeDetector);
	Object.defineProperty(DynamicChangeDetector, "parameters", {get: function() {
	    return [[assert.type.any], [PipeRegistry], [assert.genericType(List, ProtoRecord)]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype.setContext, "parameters", {get: function() {
	    return [[assert.type.any]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype.detectChangesInRecords, "parameters", {get: function() {
	    return [[assert.type.boolean]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._check, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._referenceCheck, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._calculateCurrValue, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._pipeCheck, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._pipeFor, "parameters", {get: function() {
	    return [[ProtoRecord], []];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._readContext, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._readSelf, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._writeSelf, "parameters", {get: function() {
	    return [[ProtoRecord], []];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._readPipe, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._writePipe, "parameters", {get: function() {
	    return [[ProtoRecord], []];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._setChanged, "parameters", {get: function() {
	    return [[ProtoRecord], [assert.type.boolean]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._pureFuncAndArgsDidNotChange, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._argsChanged, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(DynamicChangeDetector.prototype._readArgs, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	var _singleElementList = [null];
	function isSame(a, b) {
	  if (a === b)
	    return true;
	  if (a instanceof String && b instanceof String && a == b)
	    return true;
	  if ((a !== a) && (b !== b))
	    return true;
	  return false;
	}
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/dynamic_change_detector.map
	
	//# sourceMappingURL=./dynamic_change_detector.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  AST: {get: function() {
	      return AST;
	    }},
	  EmptyExpr: {get: function() {
	      return EmptyExpr;
	    }},
	  ImplicitReceiver: {get: function() {
	      return ImplicitReceiver;
	    }},
	  Chain: {get: function() {
	      return Chain;
	    }},
	  Conditional: {get: function() {
	      return Conditional;
	    }},
	  AccessMember: {get: function() {
	      return AccessMember;
	    }},
	  KeyedAccess: {get: function() {
	      return KeyedAccess;
	    }},
	  Pipe: {get: function() {
	      return Pipe;
	    }},
	  LiteralPrimitive: {get: function() {
	      return LiteralPrimitive;
	    }},
	  LiteralArray: {get: function() {
	      return LiteralArray;
	    }},
	  LiteralMap: {get: function() {
	      return LiteralMap;
	    }},
	  Interpolation: {get: function() {
	      return Interpolation;
	    }},
	  Binary: {get: function() {
	      return Binary;
	    }},
	  PrefixNot: {get: function() {
	      return PrefixNot;
	    }},
	  Assignment: {get: function() {
	      return Assignment;
	    }},
	  MethodCall: {get: function() {
	      return MethodCall;
	    }},
	  FunctionCall: {get: function() {
	      return FunctionCall;
	    }},
	  ASTWithSource: {get: function() {
	      return ASTWithSource;
	    }},
	  TemplateBinding: {get: function() {
	      return TemplateBinding;
	    }},
	  AstVisitor: {get: function() {
	      return AstVisitor;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/parser/ast";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    FIELD = $__1.FIELD,
	    autoConvertAdd = $__1.autoConvertAdd,
	    isBlank = $__1.isBlank,
	    isPresent = $__1.isPresent,
	    FunctionWrapper = $__1.FunctionWrapper,
	    BaseException = $__1.BaseException;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    Map = $__2.Map,
	    ListWrapper = $__2.ListWrapper,
	    StringMapWrapper = $__2.StringMapWrapper;
	var ContextWithVariableBindings = ($__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ = __webpack_require__(18), $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__}).ContextWithVariableBindings;
	var AST = function AST() {};
	($traceurRuntime.createClass)(AST, {
	  eval: function(context) {
	    throw new BaseException("Not supported");
	  },
	  get isAssignable() {
	    return false;
	  },
	  assign: function(context, value) {
	    throw new BaseException("Not supported");
	  },
	  visit: function(visitor) {},
	  toString: function() {
	    return assert.returnType(("AST"), assert.type.string);
	  }
	}, {});
	var EmptyExpr = function EmptyExpr() {
	  $traceurRuntime.superConstructor($EmptyExpr).apply(this, arguments);
	};
	var $EmptyExpr = EmptyExpr;
	($traceurRuntime.createClass)(EmptyExpr, {
	  eval: function(context) {
	    return null;
	  },
	  visit: function(visitor) {}
	}, {}, AST);
	var ImplicitReceiver = function ImplicitReceiver() {
	  $traceurRuntime.superConstructor($ImplicitReceiver).apply(this, arguments);
	};
	var $ImplicitReceiver = ImplicitReceiver;
	($traceurRuntime.createClass)(ImplicitReceiver, {
	  eval: function(context) {
	    return context;
	  },
	  visit: function(visitor) {
	    return visitor.visitImplicitReceiver(this);
	  }
	}, {}, AST);
	var Chain = function Chain(expressions) {
	  assert.argumentTypes(expressions, List);
	  $traceurRuntime.superConstructor($Chain).call(this);
	  this.expressions = expressions;
	};
	var $Chain = Chain;
	($traceurRuntime.createClass)(Chain, {
	  eval: function(context) {
	    var result;
	    for (var i = 0; i < this.expressions.length; i++) {
	      var last = this.expressions[i].eval(context);
	      if (isPresent(last))
	        result = last;
	    }
	    return result;
	  },
	  visit: function(visitor) {
	    return visitor.visitChain(this);
	  }
	}, {}, AST);
	Object.defineProperty(Chain, "parameters", {get: function() {
	    return [[List]];
	  }});
	var Conditional = function Conditional(condition, trueExp, falseExp) {
	  assert.argumentTypes(condition, AST, trueExp, AST, falseExp, AST);
	  $traceurRuntime.superConstructor($Conditional).call(this);
	  this.condition = condition;
	  this.trueExp = trueExp;
	  this.falseExp = falseExp;
	};
	var $Conditional = Conditional;
	($traceurRuntime.createClass)(Conditional, {
	  eval: function(context) {
	    if (this.condition.eval(context)) {
	      return this.trueExp.eval(context);
	    } else {
	      return this.falseExp.eval(context);
	    }
	  },
	  visit: function(visitor) {
	    return visitor.visitConditional(this);
	  }
	}, {}, AST);
	Object.defineProperty(Conditional, "parameters", {get: function() {
	    return [[AST], [AST], [AST]];
	  }});
	var AccessMember = function AccessMember(receiver, name, getter, setter) {
	  assert.argumentTypes(receiver, AST, name, assert.type.string, getter, Function, setter, Function);
	  $traceurRuntime.superConstructor($AccessMember).call(this);
	  this.receiver = receiver;
	  this.name = name;
	  this.getter = getter;
	  this.setter = setter;
	};
	var $AccessMember = AccessMember;
	($traceurRuntime.createClass)(AccessMember, {
	  eval: function(context) {
	    var evaluatedContext = this.receiver.eval(context);
	    while (evaluatedContext instanceof ContextWithVariableBindings) {
	      if (evaluatedContext.hasBinding(this.name)) {
	        return evaluatedContext.get(this.name);
	      }
	      evaluatedContext = evaluatedContext.parent;
	    }
	    return this.getter(evaluatedContext);
	  },
	  get isAssignable() {
	    return true;
	  },
	  assign: function(context, value) {
	    var evaluatedContext = this.receiver.eval(context);
	    while (evaluatedContext instanceof ContextWithVariableBindings) {
	      if (evaluatedContext.hasBinding(this.name)) {
	        throw new BaseException(("Cannot reassign a variable binding " + this.name));
	      }
	      evaluatedContext = evaluatedContext.parent;
	    }
	    return this.setter(evaluatedContext, value);
	  },
	  visit: function(visitor) {
	    return visitor.visitAccessMember(this);
	  }
	}, {}, AST);
	Object.defineProperty(AccessMember, "parameters", {get: function() {
	    return [[AST], [assert.type.string], [Function], [Function]];
	  }});
	var KeyedAccess = function KeyedAccess(obj, key) {
	  assert.argumentTypes(obj, AST, key, AST);
	  $traceurRuntime.superConstructor($KeyedAccess).call(this);
	  this.obj = obj;
	  this.key = key;
	};
	var $KeyedAccess = KeyedAccess;
	($traceurRuntime.createClass)(KeyedAccess, {
	  eval: function(context) {
	    var obj = this.obj.eval(context);
	    var key = this.key.eval(context);
	    return obj[key];
	  },
	  get isAssignable() {
	    return true;
	  },
	  assign: function(context, value) {
	    var obj = this.obj.eval(context);
	    var key = this.key.eval(context);
	    obj[key] = value;
	    return value;
	  },
	  visit: function(visitor) {
	    return visitor.visitKeyedAccess(this);
	  }
	}, {}, AST);
	Object.defineProperty(KeyedAccess, "parameters", {get: function() {
	    return [[AST], [AST]];
	  }});
	var Pipe = function Pipe(exp, name, args) {
	  assert.argumentTypes(exp, AST, name, assert.type.string, args, List);
	  $traceurRuntime.superConstructor($Pipe).call(this);
	  this.exp = exp;
	  this.name = name;
	  this.args = args;
	};
	var $Pipe = Pipe;
	($traceurRuntime.createClass)(Pipe, {visit: function(visitor) {
	    return visitor.visitPipe(this);
	  }}, {}, AST);
	Object.defineProperty(Pipe, "parameters", {get: function() {
	    return [[AST], [assert.type.string], [List]];
	  }});
	var LiteralPrimitive = function LiteralPrimitive(value) {
	  $traceurRuntime.superConstructor($LiteralPrimitive).call(this);
	  this.value = value;
	};
	var $LiteralPrimitive = LiteralPrimitive;
	($traceurRuntime.createClass)(LiteralPrimitive, {
	  eval: function(context) {
	    return this.value;
	  },
	  visit: function(visitor) {
	    return visitor.visitLiteralPrimitive(this);
	  }
	}, {}, AST);
	var LiteralArray = function LiteralArray(expressions) {
	  assert.argumentTypes(expressions, List);
	  $traceurRuntime.superConstructor($LiteralArray).call(this);
	  this.expressions = expressions;
	};
	var $LiteralArray = LiteralArray;
	($traceurRuntime.createClass)(LiteralArray, {
	  eval: function(context) {
	    return ListWrapper.map(this.expressions, (function(e) {
	      return e.eval(context);
	    }));
	  },
	  visit: function(visitor) {
	    return visitor.visitLiteralArray(this);
	  }
	}, {}, AST);
	Object.defineProperty(LiteralArray, "parameters", {get: function() {
	    return [[List]];
	  }});
	var LiteralMap = function LiteralMap(keys, values) {
	  assert.argumentTypes(keys, List, values, List);
	  $traceurRuntime.superConstructor($LiteralMap).call(this);
	  this.keys = keys;
	  this.values = values;
	};
	var $LiteralMap = LiteralMap;
	($traceurRuntime.createClass)(LiteralMap, {
	  eval: function(context) {
	    var res = StringMapWrapper.create();
	    for (var i = 0; i < this.keys.length; ++i) {
	      StringMapWrapper.set(res, this.keys[i], this.values[i].eval(context));
	    }
	    return res;
	  },
	  visit: function(visitor) {
	    return visitor.visitLiteralMap(this);
	  }
	}, {}, AST);
	Object.defineProperty(LiteralMap, "parameters", {get: function() {
	    return [[List], [List]];
	  }});
	var Interpolation = function Interpolation(strings, expressions) {
	  assert.argumentTypes(strings, List, expressions, List);
	  $traceurRuntime.superConstructor($Interpolation).call(this);
	  this.strings = strings;
	  this.expressions = expressions;
	};
	var $Interpolation = Interpolation;
	($traceurRuntime.createClass)(Interpolation, {
	  eval: function(context) {
	    throw new BaseException("evaluating an Interpolation is not supported");
	  },
	  visit: function(visitor) {
	    visitor.visitInterpolation(this);
	  }
	}, {}, AST);
	Object.defineProperty(Interpolation, "parameters", {get: function() {
	    return [[List], [List]];
	  }});
	var Binary = function Binary(operation, left, right) {
	  assert.argumentTypes(operation, assert.type.string, left, AST, right, AST);
	  $traceurRuntime.superConstructor($Binary).call(this);
	  this.operation = operation;
	  this.left = left;
	  this.right = right;
	};
	var $Binary = Binary;
	($traceurRuntime.createClass)(Binary, {
	  eval: function(context) {
	    var left = this.left.eval(context);
	    switch (this.operation) {
	      case '&&':
	        return left && this.right.eval(context);
	      case '||':
	        return left || this.right.eval(context);
	    }
	    var right = this.right.eval(context);
	    switch (this.operation) {
	      case '+':
	        return left + right;
	      case '-':
	        return left - right;
	      case '*':
	        return left * right;
	      case '/':
	        return left / right;
	      case '%':
	        return left % right;
	      case '==':
	        return left == right;
	      case '!=':
	        return left != right;
	      case '<':
	        return left < right;
	      case '>':
	        return left > right;
	      case '<=':
	        return left <= right;
	      case '>=':
	        return left >= right;
	      case '^':
	        return left ^ right;
	      case '&':
	        return left & right;
	    }
	    throw 'Internal error [$operation] not handled';
	  },
	  visit: function(visitor) {
	    return visitor.visitBinary(this);
	  }
	}, {}, AST);
	Object.defineProperty(Binary, "parameters", {get: function() {
	    return [[assert.type.string], [AST], [AST]];
	  }});
	var PrefixNot = function PrefixNot(expression) {
	  assert.argumentTypes(expression, AST);
	  $traceurRuntime.superConstructor($PrefixNot).call(this);
	  this.expression = expression;
	};
	var $PrefixNot = PrefixNot;
	($traceurRuntime.createClass)(PrefixNot, {
	  eval: function(context) {
	    return !this.expression.eval(context);
	  },
	  visit: function(visitor) {
	    return visitor.visitPrefixNot(this);
	  }
	}, {}, AST);
	Object.defineProperty(PrefixNot, "parameters", {get: function() {
	    return [[AST]];
	  }});
	var Assignment = function Assignment(target, value) {
	  assert.argumentTypes(target, AST, value, AST);
	  $traceurRuntime.superConstructor($Assignment).call(this);
	  this.target = target;
	  this.value = value;
	};
	var $Assignment = Assignment;
	($traceurRuntime.createClass)(Assignment, {
	  eval: function(context) {
	    return this.target.assign(context, this.value.eval(context));
	  },
	  visit: function(visitor) {
	    return visitor.visitAssignment(this);
	  }
	}, {}, AST);
	Object.defineProperty(Assignment, "parameters", {get: function() {
	    return [[AST], [AST]];
	  }});
	var MethodCall = function MethodCall(receiver, name, fn, args) {
	  assert.argumentTypes(receiver, AST, name, assert.type.string, fn, Function, args, List);
	  $traceurRuntime.superConstructor($MethodCall).call(this);
	  this.receiver = receiver;
	  this.fn = fn;
	  this.args = args;
	  this.name = name;
	};
	var $MethodCall = MethodCall;
	($traceurRuntime.createClass)(MethodCall, {
	  eval: function(context) {
	    var evaluatedContext = this.receiver.eval(context);
	    var evaluatedArgs = evalList(context, this.args);
	    while (evaluatedContext instanceof ContextWithVariableBindings) {
	      if (evaluatedContext.hasBinding(this.name)) {
	        var fn = evaluatedContext.get(this.name);
	        return FunctionWrapper.apply(fn, evaluatedArgs);
	      }
	      evaluatedContext = evaluatedContext.parent;
	    }
	    return this.fn(evaluatedContext, evaluatedArgs);
	  },
	  visit: function(visitor) {
	    return visitor.visitMethodCall(this);
	  }
	}, {}, AST);
	Object.defineProperty(MethodCall, "parameters", {get: function() {
	    return [[AST], [assert.type.string], [Function], [List]];
	  }});
	var FunctionCall = function FunctionCall(target, args) {
	  assert.argumentTypes(target, AST, args, List);
	  $traceurRuntime.superConstructor($FunctionCall).call(this);
	  this.target = target;
	  this.args = args;
	};
	var $FunctionCall = FunctionCall;
	($traceurRuntime.createClass)(FunctionCall, {
	  eval: function(context) {
	    var obj = this.target.eval(context);
	    if (!(obj instanceof Function)) {
	      throw new BaseException((obj + " is not a function"));
	    }
	    return FunctionWrapper.apply(obj, evalList(context, this.args));
	  },
	  visit: function(visitor) {
	    return visitor.visitFunctionCall(this);
	  }
	}, {}, AST);
	Object.defineProperty(FunctionCall, "parameters", {get: function() {
	    return [[AST], [List]];
	  }});
	var ASTWithSource = function ASTWithSource(ast, source, location) {
	  assert.argumentTypes(ast, AST, source, assert.type.string, location, assert.type.string);
	  $traceurRuntime.superConstructor($ASTWithSource).call(this);
	  this.source = source;
	  this.location = location;
	  this.ast = ast;
	};
	var $ASTWithSource = ASTWithSource;
	($traceurRuntime.createClass)(ASTWithSource, {
	  eval: function(context) {
	    return this.ast.eval(context);
	  },
	  get isAssignable() {
	    return this.ast.isAssignable;
	  },
	  assign: function(context, value) {
	    return this.ast.assign(context, value);
	  },
	  visit: function(visitor) {
	    return this.ast.visit(visitor);
	  },
	  toString: function() {
	    return assert.returnType(((this.source + " in " + this.location)), assert.type.string);
	  }
	}, {}, AST);
	Object.defineProperty(ASTWithSource, "parameters", {get: function() {
	    return [[AST], [assert.type.string], [assert.type.string]];
	  }});
	var TemplateBinding = function TemplateBinding(key, keyIsVar, name, expression) {
	  assert.argumentTypes(key, assert.type.string, keyIsVar, assert.type.boolean, name, assert.type.string, expression, ASTWithSource);
	  $traceurRuntime.superConstructor($TemplateBinding).call(this);
	  this.key = key;
	  this.keyIsVar = keyIsVar;
	  this.name = name;
	  this.expression = expression;
	};
	var $TemplateBinding = TemplateBinding;
	($traceurRuntime.createClass)(TemplateBinding, {}, {});
	Object.defineProperty(TemplateBinding, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.boolean], [assert.type.string], [ASTWithSource]];
	  }});
	var AstVisitor = function AstVisitor() {};
	($traceurRuntime.createClass)(AstVisitor, {
	  visitAccessMember: function(ast) {
	    assert.argumentTypes(ast, AccessMember);
	  },
	  visitAssignment: function(ast) {
	    assert.argumentTypes(ast, Assignment);
	  },
	  visitBinary: function(ast) {
	    assert.argumentTypes(ast, Binary);
	  },
	  visitChain: function(ast) {
	    assert.argumentTypes(ast, Chain);
	  },
	  visitConditional: function(ast) {
	    assert.argumentTypes(ast, Conditional);
	  },
	  visitPipe: function(ast) {
	    assert.argumentTypes(ast, Pipe);
	  },
	  visitFunctionCall: function(ast) {
	    assert.argumentTypes(ast, FunctionCall);
	  },
	  visitImplicitReceiver: function(ast) {
	    assert.argumentTypes(ast, ImplicitReceiver);
	  },
	  visitKeyedAccess: function(ast) {
	    assert.argumentTypes(ast, KeyedAccess);
	  },
	  visitLiteralArray: function(ast) {
	    assert.argumentTypes(ast, LiteralArray);
	  },
	  visitLiteralMap: function(ast) {
	    assert.argumentTypes(ast, LiteralMap);
	  },
	  visitLiteralPrimitive: function(ast) {
	    assert.argumentTypes(ast, LiteralPrimitive);
	  },
	  visitMethodCall: function(ast) {
	    assert.argumentTypes(ast, MethodCall);
	  },
	  visitPrefixNot: function(ast) {
	    assert.argumentTypes(ast, PrefixNot);
	  }
	}, {});
	Object.defineProperty(AstVisitor.prototype.visitAccessMember, "parameters", {get: function() {
	    return [[AccessMember]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitAssignment, "parameters", {get: function() {
	    return [[Assignment]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitBinary, "parameters", {get: function() {
	    return [[Binary]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitChain, "parameters", {get: function() {
	    return [[Chain]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitConditional, "parameters", {get: function() {
	    return [[Conditional]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitPipe, "parameters", {get: function() {
	    return [[Pipe]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitFunctionCall, "parameters", {get: function() {
	    return [[FunctionCall]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitImplicitReceiver, "parameters", {get: function() {
	    return [[ImplicitReceiver]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitKeyedAccess, "parameters", {get: function() {
	    return [[KeyedAccess]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitLiteralArray, "parameters", {get: function() {
	    return [[LiteralArray]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitLiteralMap, "parameters", {get: function() {
	    return [[LiteralMap]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitLiteralPrimitive, "parameters", {get: function() {
	    return [[LiteralPrimitive]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitMethodCall, "parameters", {get: function() {
	    return [[MethodCall]];
	  }});
	Object.defineProperty(AstVisitor.prototype.visitPrefixNot, "parameters", {get: function() {
	    return [[PrefixNot]];
	  }});
	var _evalListCache = [[], [0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]];
	function evalList(context, exps) {
	  assert.argumentTypes(context, assert.type.any, exps, List);
	  var length = exps.length;
	  var result = _evalListCache[length];
	  for (var i = 0; i < length; i++) {
	    result[i] = exps[i].eval(context);
	  }
	  return result;
	}
	Object.defineProperty(evalList, "parameters", {get: function() {
	    return [[], [List]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/parser/ast.map
	
	//# sourceMappingURL=./ast.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  TOKEN_TYPE_CHARACTER: {get: function() {
	      return TOKEN_TYPE_CHARACTER;
	    }},
	  TOKEN_TYPE_IDENTIFIER: {get: function() {
	      return TOKEN_TYPE_IDENTIFIER;
	    }},
	  TOKEN_TYPE_KEYWORD: {get: function() {
	      return TOKEN_TYPE_KEYWORD;
	    }},
	  TOKEN_TYPE_STRING: {get: function() {
	      return TOKEN_TYPE_STRING;
	    }},
	  TOKEN_TYPE_OPERATOR: {get: function() {
	      return TOKEN_TYPE_OPERATOR;
	    }},
	  TOKEN_TYPE_NUMBER: {get: function() {
	      return TOKEN_TYPE_NUMBER;
	    }},
	  Lexer: {get: function() {
	      return Lexer;
	    }},
	  Token: {get: function() {
	      return Token;
	    }},
	  EOF: {get: function() {
	      return EOF;
	    }},
	  $EOF: {get: function() {
	      return $EOF;
	    }},
	  $TAB: {get: function() {
	      return $TAB;
	    }},
	  $LF: {get: function() {
	      return $LF;
	    }},
	  $VTAB: {get: function() {
	      return $VTAB;
	    }},
	  $FF: {get: function() {
	      return $FF;
	    }},
	  $CR: {get: function() {
	      return $CR;
	    }},
	  $SPACE: {get: function() {
	      return $SPACE;
	    }},
	  $BANG: {get: function() {
	      return $BANG;
	    }},
	  $DQ: {get: function() {
	      return $DQ;
	    }},
	  $HASH: {get: function() {
	      return $HASH;
	    }},
	  $$: {get: function() {
	      return $$;
	    }},
	  $PERCENT: {get: function() {
	      return $PERCENT;
	    }},
	  $AMPERSAND: {get: function() {
	      return $AMPERSAND;
	    }},
	  $SQ: {get: function() {
	      return $SQ;
	    }},
	  $LPAREN: {get: function() {
	      return $LPAREN;
	    }},
	  $RPAREN: {get: function() {
	      return $RPAREN;
	    }},
	  $STAR: {get: function() {
	      return $STAR;
	    }},
	  $PLUS: {get: function() {
	      return $PLUS;
	    }},
	  $COMMA: {get: function() {
	      return $COMMA;
	    }},
	  $MINUS: {get: function() {
	      return $MINUS;
	    }},
	  $PERIOD: {get: function() {
	      return $PERIOD;
	    }},
	  $SLASH: {get: function() {
	      return $SLASH;
	    }},
	  $COLON: {get: function() {
	      return $COLON;
	    }},
	  $SEMICOLON: {get: function() {
	      return $SEMICOLON;
	    }},
	  $LT: {get: function() {
	      return $LT;
	    }},
	  $EQ: {get: function() {
	      return $EQ;
	    }},
	  $GT: {get: function() {
	      return $GT;
	    }},
	  $QUESTION: {get: function() {
	      return $QUESTION;
	    }},
	  $LBRACKET: {get: function() {
	      return $LBRACKET;
	    }},
	  $BACKSLASH: {get: function() {
	      return $BACKSLASH;
	    }},
	  $RBRACKET: {get: function() {
	      return $RBRACKET;
	    }},
	  $LBRACE: {get: function() {
	      return $LBRACE;
	    }},
	  $BAR: {get: function() {
	      return $BAR;
	    }},
	  $RBRACE: {get: function() {
	      return $RBRACE;
	    }},
	  ScannerError: {get: function() {
	      return ScannerError;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/parser/lexer";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__1.List,
	    ListWrapper = $__1.ListWrapper,
	    SetWrapper = $__1.SetWrapper;
	var $__2 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    int = $__2.int,
	    FIELD = $__2.FIELD,
	    NumberWrapper = $__2.NumberWrapper,
	    StringJoiner = $__2.StringJoiner,
	    StringWrapper = $__2.StringWrapper;
	var TOKEN_TYPE_CHARACTER = 1;
	var TOKEN_TYPE_IDENTIFIER = 2;
	var TOKEN_TYPE_KEYWORD = 3;
	var TOKEN_TYPE_STRING = 4;
	var TOKEN_TYPE_OPERATOR = 5;
	var TOKEN_TYPE_NUMBER = 6;
	var Lexer = function Lexer() {};
	($traceurRuntime.createClass)(Lexer, {tokenize: function(text) {
	    assert.argumentTypes(text, assert.type.string);
	    var scanner = new _Scanner(text);
	    var tokens = [];
	    var token = scanner.scanToken();
	    while (token != null) {
	      ListWrapper.push(tokens, token);
	      token = scanner.scanToken();
	    }
	    return assert.returnType((tokens), List);
	  }}, {});
	Object.defineProperty(Lexer.prototype.tokenize, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var Token = function Token(index, type, numValue, strValue) {
	  assert.argumentTypes(index, int, type, int, numValue, assert.type.number, strValue, assert.type.string);
	  this.index = index;
	  this.type = type;
	  this._numValue = numValue;
	  this._strValue = strValue;
	};
	($traceurRuntime.createClass)(Token, {
	  isCharacter: function(code) {
	    assert.argumentTypes(code, int);
	    return assert.returnType(((this.type == TOKEN_TYPE_CHARACTER && this._numValue == code)), assert.type.boolean);
	  },
	  isNumber: function() {
	    return assert.returnType(((this.type == TOKEN_TYPE_NUMBER)), assert.type.boolean);
	  },
	  isString: function() {
	    return assert.returnType(((this.type == TOKEN_TYPE_STRING)), assert.type.boolean);
	  },
	  isOperator: function(operater) {
	    assert.argumentTypes(operater, assert.type.string);
	    return assert.returnType(((this.type == TOKEN_TYPE_OPERATOR && this._strValue == operater)), assert.type.boolean);
	  },
	  isIdentifier: function() {
	    return assert.returnType(((this.type == TOKEN_TYPE_IDENTIFIER)), assert.type.boolean);
	  },
	  isKeyword: function() {
	    return assert.returnType(((this.type == TOKEN_TYPE_KEYWORD)), assert.type.boolean);
	  },
	  isKeywordVar: function() {
	    return assert.returnType(((this.type == TOKEN_TYPE_KEYWORD && this._strValue == "var")), assert.type.boolean);
	  },
	  isKeywordNull: function() {
	    return assert.returnType(((this.type == TOKEN_TYPE_KEYWORD && this._strValue == "null")), assert.type.boolean);
	  },
	  isKeywordUndefined: function() {
	    return assert.returnType(((this.type == TOKEN_TYPE_KEYWORD && this._strValue == "undefined")), assert.type.boolean);
	  },
	  isKeywordTrue: function() {
	    return assert.returnType(((this.type == TOKEN_TYPE_KEYWORD && this._strValue == "true")), assert.type.boolean);
	  },
	  isKeywordFalse: function() {
	    return assert.returnType(((this.type == TOKEN_TYPE_KEYWORD && this._strValue == "false")), assert.type.boolean);
	  },
	  toNumber: function() {
	    return assert.returnType(((this.type == TOKEN_TYPE_NUMBER) ? this._numValue : -1), assert.type.number);
	  },
	  toString: function() {
	    var type = assert.type(this.type, int);
	    if (type >= TOKEN_TYPE_CHARACTER && type <= TOKEN_TYPE_STRING) {
	      return assert.returnType((this._strValue), assert.type.string);
	    } else if (type == TOKEN_TYPE_NUMBER) {
	      return assert.returnType((this._numValue.toString()), assert.type.string);
	    } else {
	      return assert.returnType((null), assert.type.string);
	    }
	  }
	}, {});
	Object.defineProperty(Token, "parameters", {get: function() {
	    return [[int], [int], [assert.type.number], [assert.type.string]];
	  }});
	Object.defineProperty(Token.prototype.isCharacter, "parameters", {get: function() {
	    return [[int]];
	  }});
	Object.defineProperty(Token.prototype.isOperator, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	function newCharacterToken(index, code) {
	  assert.argumentTypes(index, int, code, int);
	  return assert.returnType((new Token(index, TOKEN_TYPE_CHARACTER, code, StringWrapper.fromCharCode(code))), Token);
	}
	Object.defineProperty(newCharacterToken, "parameters", {get: function() {
	    return [[int], [int]];
	  }});
	function newIdentifierToken(index, text) {
	  assert.argumentTypes(index, int, text, assert.type.string);
	  return assert.returnType((new Token(index, TOKEN_TYPE_IDENTIFIER, 0, text)), Token);
	}
	Object.defineProperty(newIdentifierToken, "parameters", {get: function() {
	    return [[int], [assert.type.string]];
	  }});
	function newKeywordToken(index, text) {
	  assert.argumentTypes(index, int, text, assert.type.string);
	  return assert.returnType((new Token(index, TOKEN_TYPE_KEYWORD, 0, text)), Token);
	}
	Object.defineProperty(newKeywordToken, "parameters", {get: function() {
	    return [[int], [assert.type.string]];
	  }});
	function newOperatorToken(index, text) {
	  assert.argumentTypes(index, int, text, assert.type.string);
	  return assert.returnType((new Token(index, TOKEN_TYPE_OPERATOR, 0, text)), Token);
	}
	Object.defineProperty(newOperatorToken, "parameters", {get: function() {
	    return [[int], [assert.type.string]];
	  }});
	function newStringToken(index, text) {
	  assert.argumentTypes(index, int, text, assert.type.string);
	  return assert.returnType((new Token(index, TOKEN_TYPE_STRING, 0, text)), Token);
	}
	Object.defineProperty(newStringToken, "parameters", {get: function() {
	    return [[int], [assert.type.string]];
	  }});
	function newNumberToken(index, n) {
	  assert.argumentTypes(index, int, n, assert.type.number);
	  return assert.returnType((new Token(index, TOKEN_TYPE_NUMBER, n, "")), Token);
	}
	Object.defineProperty(newNumberToken, "parameters", {get: function() {
	    return [[int], [assert.type.number]];
	  }});
	var EOF = assert.type(new Token(-1, 0, 0, ""), Token);
	var $EOF = 0;
	var $TAB = 9;
	var $LF = 10;
	var $VTAB = 11;
	var $FF = 12;
	var $CR = 13;
	var $SPACE = 32;
	var $BANG = 33;
	var $DQ = 34;
	var $HASH = 35;
	var $$ = 36;
	var $PERCENT = 37;
	var $AMPERSAND = 38;
	var $SQ = 39;
	var $LPAREN = 40;
	var $RPAREN = 41;
	var $STAR = 42;
	var $PLUS = 43;
	var $COMMA = 44;
	var $MINUS = 45;
	var $PERIOD = 46;
	var $SLASH = 47;
	var $COLON = 58;
	var $SEMICOLON = 59;
	var $LT = 60;
	var $EQ = 61;
	var $GT = 62;
	var $QUESTION = 63;
	var $0 = 48;
	var $9 = 57;
	var $A = 65,
	    $B = 66,
	    $C = 67,
	    $D = 68,
	    $E = 69,
	    $F = 70,
	    $G = 71,
	    $H = 72,
	    $I = 73,
	    $J = 74,
	    $K = 75,
	    $L = 76,
	    $M = 77,
	    $N = 78,
	    $O = 79,
	    $P = 80,
	    $Q = 81,
	    $R = 82,
	    $S = 83,
	    $T = 84,
	    $U = 85,
	    $V = 86,
	    $W = 87,
	    $X = 88,
	    $Y = 89,
	    $Z = 90;
	var $LBRACKET = 91;
	var $BACKSLASH = 92;
	var $RBRACKET = 93;
	var $CARET = 94;
	var $_ = 95;
	var $a = 97,
	    $b = 98,
	    $c = 99,
	    $d = 100,
	    $e = 101,
	    $f = 102,
	    $g = 103,
	    $h = 104,
	    $i = 105,
	    $j = 106,
	    $k = 107,
	    $l = 108,
	    $m = 109,
	    $n = 110,
	    $o = 111,
	    $p = 112,
	    $q = 113,
	    $r = 114,
	    $s = 115,
	    $t = 116,
	    $u = 117,
	    $v = 118,
	    $w = 119,
	    $x = 120,
	    $y = 121,
	    $z = 122;
	var $LBRACE = 123;
	var $BAR = 124;
	var $RBRACE = 125;
	var $TILDE = 126;
	var $NBSP = 160;
	var ScannerError = function ScannerError(message) {
	  $traceurRuntime.superConstructor($ScannerError).call(this);
	  this.message = message;
	};
	var $ScannerError = ScannerError;
	($traceurRuntime.createClass)(ScannerError, {toString: function() {
	    return this.message;
	  }}, {}, Error);
	var _Scanner = function _Scanner(input) {
	  assert.argumentTypes(input, assert.type.string);
	  this.input = input;
	  this.length = input.length;
	  this.peek = 0;
	  this.index = -1;
	  this.advance();
	};
	($traceurRuntime.createClass)(_Scanner, {
	  advance: function() {
	    this.peek = ++this.index >= this.length ? $EOF : StringWrapper.charCodeAt(this.input, this.index);
	  },
	  scanToken: function() {
	    var input = this.input,
	        length = this.length,
	        peek = this.peek,
	        index = this.index;
	    while (peek <= $SPACE) {
	      if (++index >= length) {
	        peek = $EOF;
	        break;
	      } else {
	        peek = StringWrapper.charCodeAt(input, index);
	      }
	    }
	    this.peek = peek;
	    this.index = index;
	    if (index >= length) {
	      return assert.returnType((null), Token);
	    }
	    if (isIdentifierStart(peek))
	      return assert.returnType((this.scanIdentifier()), Token);
	    if (isDigit(peek))
	      return assert.returnType((this.scanNumber(index)), Token);
	    var start = assert.type(index, int);
	    switch (peek) {
	      case $PERIOD:
	        this.advance();
	        return assert.returnType((isDigit(this.peek) ? this.scanNumber(start) : newCharacterToken(start, $PERIOD)), Token);
	      case $LPAREN:
	      case $RPAREN:
	      case $LBRACE:
	      case $RBRACE:
	      case $LBRACKET:
	      case $RBRACKET:
	      case $COMMA:
	      case $COLON:
	      case $SEMICOLON:
	        return assert.returnType((this.scanCharacter(start, peek)), Token);
	      case $SQ:
	      case $DQ:
	        return assert.returnType((this.scanString()), Token);
	      case $HASH:
	        return assert.returnType((this.scanOperator(start, StringWrapper.fromCharCode(peek))), Token);
	      case $PLUS:
	      case $MINUS:
	      case $STAR:
	      case $SLASH:
	      case $PERCENT:
	      case $CARET:
	      case $QUESTION:
	        return assert.returnType((this.scanOperator(start, StringWrapper.fromCharCode(peek))), Token);
	      case $LT:
	      case $GT:
	      case $BANG:
	      case $EQ:
	        return assert.returnType((this.scanComplexOperator(start, $EQ, StringWrapper.fromCharCode(peek), '=')), Token);
	      case $AMPERSAND:
	        return assert.returnType((this.scanComplexOperator(start, $AMPERSAND, '&', '&')), Token);
	      case $BAR:
	        return assert.returnType((this.scanComplexOperator(start, $BAR, '|', '|')), Token);
	      case $TILDE:
	        return assert.returnType((this.scanComplexOperator(start, $SLASH, '~', '/')), Token);
	      case $NBSP:
	        while (isWhitespace(this.peek))
	          this.advance();
	        return assert.returnType((this.scanToken()), Token);
	    }
	    this.error(("Unexpected character [" + StringWrapper.fromCharCode(peek) + "]"), 0);
	    return assert.returnType((null), Token);
	  },
	  scanCharacter: function(start, code) {
	    assert.argumentTypes(start, int, code, int);
	    assert(this.peek == code);
	    this.advance();
	    return assert.returnType((newCharacterToken(start, code)), Token);
	  },
	  scanOperator: function(start, str) {
	    assert.argumentTypes(start, int, str, assert.type.string);
	    assert(this.peek == StringWrapper.charCodeAt(str, 0));
	    assert(SetWrapper.has(OPERATORS, str));
	    this.advance();
	    return assert.returnType((newOperatorToken(start, str)), Token);
	  },
	  scanComplexOperator: function(start, code, one, two) {
	    assert.argumentTypes(start, int, code, int, one, assert.type.string, two, assert.type.string);
	    assert(this.peek == StringWrapper.charCodeAt(one, 0));
	    this.advance();
	    var str = assert.type(one, assert.type.string);
	    if (this.peek == code) {
	      this.advance();
	      str += two;
	    }
	    assert(SetWrapper.has(OPERATORS, str));
	    return assert.returnType((newOperatorToken(start, str)), Token);
	  },
	  scanIdentifier: function() {
	    assert(isIdentifierStart(this.peek));
	    var start = assert.type(this.index, int);
	    this.advance();
	    while (isIdentifierPart(this.peek))
	      this.advance();
	    var str = assert.type(this.input.substring(start, this.index), assert.type.string);
	    if (SetWrapper.has(KEYWORDS, str)) {
	      return assert.returnType((newKeywordToken(start, str)), Token);
	    } else {
	      return assert.returnType((newIdentifierToken(start, str)), Token);
	    }
	  },
	  scanNumber: function(start) {
	    assert.argumentTypes(start, int);
	    assert(isDigit(this.peek));
	    var simple = assert.type((this.index === start), assert.type.boolean);
	    this.advance();
	    while (true) {
	      if (isDigit(this.peek)) {} else if (this.peek == $PERIOD) {
	        simple = false;
	      } else if (isExponentStart(this.peek)) {
	        this.advance();
	        if (isExponentSign(this.peek))
	          this.advance();
	        if (!isDigit(this.peek))
	          this.error('Invalid exponent', -1);
	        simple = false;
	      } else {
	        break;
	      }
	      this.advance();
	    }
	    var str = assert.type(this.input.substring(start, this.index), assert.type.string);
	    var value = assert.type(simple ? NumberWrapper.parseIntAutoRadix(str) : NumberWrapper.parseFloat(str), assert.type.number);
	    return assert.returnType((newNumberToken(start, value)), Token);
	  },
	  scanString: function() {
	    assert(this.peek == $SQ || this.peek == $DQ);
	    var start = assert.type(this.index, int);
	    var quote = assert.type(this.peek, int);
	    this.advance();
	    var buffer;
	    var marker = assert.type(this.index, int);
	    var input = assert.type(this.input, assert.type.string);
	    while (this.peek != quote) {
	      if (this.peek == $BACKSLASH) {
	        if (buffer == null)
	          buffer = new StringJoiner();
	        buffer.add(input.substring(marker, this.index));
	        this.advance();
	        var unescapedCode = void 0;
	        if (this.peek == $u) {
	          var hex = assert.type(input.substring(this.index + 1, this.index + 5), assert.type.string);
	          try {
	            unescapedCode = NumberWrapper.parseInt(hex, 16);
	          } catch (e) {
	            this.error(("Invalid unicode escape [\\u" + hex + "]"), 0);
	          }
	          for (var i = assert.type(0, int); i < 5; i++) {
	            this.advance();
	          }
	        } else {
	          unescapedCode = unescape(this.peek);
	          this.advance();
	        }
	        buffer.add(StringWrapper.fromCharCode(unescapedCode));
	        marker = this.index;
	      } else if (this.peek == $EOF) {
	        this.error('Unterminated quote', 0);
	      } else {
	        this.advance();
	      }
	    }
	    var last = assert.type(input.substring(marker, this.index), assert.type.string);
	    this.advance();
	    var unescaped = assert.type(last, assert.type.string);
	    if (buffer != null) {
	      buffer.add(last);
	      unescaped = buffer.toString();
	    }
	    return assert.returnType((newStringToken(start, unescaped)), Token);
	  },
	  error: function(message, offset) {
	    assert.argumentTypes(message, assert.type.string, offset, int);
	    var position = assert.type(this.index + offset, int);
	    throw new ScannerError(("Lexer Error: " + message + " at column " + position + " in expression [" + this.input + "]"));
	  }
	}, {});
	Object.defineProperty(_Scanner, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(_Scanner.prototype.scanCharacter, "parameters", {get: function() {
	    return [[int], [int]];
	  }});
	Object.defineProperty(_Scanner.prototype.scanOperator, "parameters", {get: function() {
	    return [[int], [assert.type.string]];
	  }});
	Object.defineProperty(_Scanner.prototype.scanComplexOperator, "parameters", {get: function() {
	    return [[int], [int], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(_Scanner.prototype.scanNumber, "parameters", {get: function() {
	    return [[int]];
	  }});
	Object.defineProperty(_Scanner.prototype.error, "parameters", {get: function() {
	    return [[assert.type.string], [int]];
	  }});
	function isWhitespace(code) {
	  assert.argumentTypes(code, int);
	  return assert.returnType(((code >= $TAB && code <= $SPACE) || (code == $NBSP)), assert.type.boolean);
	}
	Object.defineProperty(isWhitespace, "parameters", {get: function() {
	    return [[int]];
	  }});
	function isIdentifierStart(code) {
	  assert.argumentTypes(code, int);
	  return assert.returnType((($a <= code && code <= $z) || ($A <= code && code <= $Z) || (code == $_) || (code == $$)), assert.type.boolean);
	}
	Object.defineProperty(isIdentifierStart, "parameters", {get: function() {
	    return [[int]];
	  }});
	function isIdentifierPart(code) {
	  assert.argumentTypes(code, int);
	  return assert.returnType((($a <= code && code <= $z) || ($A <= code && code <= $Z) || ($0 <= code && code <= $9) || (code == $_) || (code == $$)), assert.type.boolean);
	}
	Object.defineProperty(isIdentifierPart, "parameters", {get: function() {
	    return [[int]];
	  }});
	function isDigit(code) {
	  assert.argumentTypes(code, int);
	  return assert.returnType(($0 <= code && code <= $9), assert.type.boolean);
	}
	Object.defineProperty(isDigit, "parameters", {get: function() {
	    return [[int]];
	  }});
	function isExponentStart(code) {
	  assert.argumentTypes(code, int);
	  return assert.returnType((code == $e || code == $E), assert.type.boolean);
	}
	Object.defineProperty(isExponentStart, "parameters", {get: function() {
	    return [[int]];
	  }});
	function isExponentSign(code) {
	  assert.argumentTypes(code, int);
	  return assert.returnType((code == $MINUS || code == $PLUS), assert.type.boolean);
	}
	Object.defineProperty(isExponentSign, "parameters", {get: function() {
	    return [[int]];
	  }});
	function unescape(code) {
	  assert.argumentTypes(code, int);
	  switch (code) {
	    case $n:
	      return assert.returnType(($LF), int);
	    case $f:
	      return assert.returnType(($FF), int);
	    case $r:
	      return assert.returnType(($CR), int);
	    case $t:
	      return assert.returnType(($TAB), int);
	    case $v:
	      return assert.returnType(($VTAB), int);
	    default:
	      return assert.returnType((code), int);
	  }
	}
	Object.defineProperty(unescape, "parameters", {get: function() {
	    return [[int]];
	  }});
	var OPERATORS = SetWrapper.createFromList(['+', '-', '*', '/', '~/', '%', '^', '=', '==', '!=', '<', '>', '<=', '>=', '&&', '||', '&', '|', '!', '?', '#']);
	var KEYWORDS = SetWrapper.createFromList(['var', 'null', 'undefined', 'true', 'false']);
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/parser/lexer.map
	
	//# sourceMappingURL=./lexer.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Parser: {get: function() {
	      return Parser;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/parser/parser";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__,
	    $__angular2_47_src_47_reflection_47_reflection__,
	    $__angular2_47_src_47_change_95_detection_47_parser_47_ast__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    FIELD = $__1.FIELD,
	    int = $__1.int,
	    isBlank = $__1.isBlank,
	    isPresent = $__1.isPresent,
	    BaseException = $__1.BaseException,
	    StringWrapper = $__1.StringWrapper,
	    RegExpWrapper = $__1.RegExpWrapper;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    ListWrapper = $__2.ListWrapper,
	    List = $__2.List;
	var $__3 = ($__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ = __webpack_require__(16), $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ && $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__}),
	    Lexer = $__3.Lexer,
	    EOF = $__3.EOF,
	    Token = $__3.Token,
	    $PERIOD = $__3.$PERIOD,
	    $COLON = $__3.$COLON,
	    $SEMICOLON = $__3.$SEMICOLON,
	    $LBRACKET = $__3.$LBRACKET,
	    $RBRACKET = $__3.$RBRACKET,
	    $COMMA = $__3.$COMMA,
	    $LBRACE = $__3.$LBRACE,
	    $RBRACE = $__3.$RBRACE,
	    $LPAREN = $__3.$LPAREN,
	    $RPAREN = $__3.$RPAREN;
	var $__4 = ($__angular2_47_src_47_reflection_47_reflection__ = __webpack_require__(51), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}),
	    reflector = $__4.reflector,
	    Reflector = $__4.Reflector;
	var $__5 = ($__angular2_47_src_47_change_95_detection_47_parser_47_ast__ = __webpack_require__(15), $__angular2_47_src_47_change_95_detection_47_parser_47_ast__ && $__angular2_47_src_47_change_95_detection_47_parser_47_ast__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_ast__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_ast__}),
	    AST = $__5.AST,
	    EmptyExpr = $__5.EmptyExpr,
	    ImplicitReceiver = $__5.ImplicitReceiver,
	    AccessMember = $__5.AccessMember,
	    LiteralPrimitive = $__5.LiteralPrimitive,
	    Expression = $__5.Expression,
	    Binary = $__5.Binary,
	    PrefixNot = $__5.PrefixNot,
	    Conditional = $__5.Conditional,
	    Pipe = $__5.Pipe,
	    Assignment = $__5.Assignment,
	    Chain = $__5.Chain,
	    KeyedAccess = $__5.KeyedAccess,
	    LiteralArray = $__5.LiteralArray,
	    LiteralMap = $__5.LiteralMap,
	    Interpolation = $__5.Interpolation,
	    MethodCall = $__5.MethodCall,
	    FunctionCall = $__5.FunctionCall,
	    TemplateBindings = $__5.TemplateBindings,
	    TemplateBinding = $__5.TemplateBinding,
	    ASTWithSource = $__5.ASTWithSource;
	var _implicitReceiver = new ImplicitReceiver();
	var INTERPOLATION_REGEXP = RegExpWrapper.create('\\{\\{(.*?)\\}\\}');
	var QUOTE_REGEXP = RegExpWrapper.create("'");
	var Parser = function Parser(lexer) {
	  var providedReflector = arguments[1] !== (void 0) ? arguments[1] : null;
	  assert.argumentTypes(lexer, Lexer, providedReflector, Reflector);
	  this._lexer = lexer;
	  this._reflector = isPresent(providedReflector) ? providedReflector : reflector;
	};
	($traceurRuntime.createClass)(Parser, {
	  parseAction: function(input, location) {
	    assert.argumentTypes(input, assert.type.string, location, assert.type.any);
	    var tokens = this._lexer.tokenize(input);
	    var ast = new _ParseAST(input, location, tokens, this._reflector, true).parseChain();
	    return assert.returnType((new ASTWithSource(ast, input, location)), ASTWithSource);
	  },
	  parseBinding: function(input, location) {
	    assert.argumentTypes(input, assert.type.string, location, assert.type.any);
	    var tokens = this._lexer.tokenize(input);
	    var ast = new _ParseAST(input, location, tokens, this._reflector, false).parseChain();
	    return assert.returnType((new ASTWithSource(ast, input, location)), ASTWithSource);
	  },
	  addPipes: function(bindingAst, pipes) {
	    if (ListWrapper.isEmpty(pipes))
	      return assert.returnType((bindingAst), ASTWithSource);
	    var res = ListWrapper.reduce(pipes, (function(result, currentPipeName) {
	      return new Pipe(result, currentPipeName, []);
	    }), bindingAst.ast);
	    return assert.returnType((new ASTWithSource(res, bindingAst.source, bindingAst.location)), ASTWithSource);
	  },
	  parseTemplateBindings: function(input, location) {
	    assert.argumentTypes(input, assert.type.string, location, assert.type.any);
	    var tokens = this._lexer.tokenize(input);
	    return assert.returnType((new _ParseAST(input, location, tokens, this._reflector, false).parseTemplateBindings()), assert.genericType(List, TemplateBinding));
	  },
	  parseInterpolation: function(input, location) {
	    assert.argumentTypes(input, assert.type.string, location, assert.type.any);
	    var parts = StringWrapper.split(input, INTERPOLATION_REGEXP);
	    if (parts.length <= 1) {
	      return assert.returnType((null), ASTWithSource);
	    }
	    var strings = [];
	    var expressions = [];
	    for (var i = 0; i < parts.length; i++) {
	      var part = parts[i];
	      if (i % 2 === 0) {
	        ListWrapper.push(strings, part);
	      } else {
	        var tokens = this._lexer.tokenize(part);
	        var ast = new _ParseAST(input, location, tokens, this._reflector, false).parseChain();
	        ListWrapper.push(expressions, ast);
	      }
	    }
	    return assert.returnType((new ASTWithSource(new Interpolation(strings, expressions), input, location)), ASTWithSource);
	  },
	  wrapLiteralPrimitive: function(input, location) {
	    assert.argumentTypes(input, assert.type.string, location, assert.type.any);
	    return assert.returnType((new ASTWithSource(new LiteralPrimitive(input), input, location)), ASTWithSource);
	  }
	}, {});
	Object.defineProperty(Parser, "parameters", {get: function() {
	    return [[Lexer], [Reflector]];
	  }});
	Object.defineProperty(Parser.prototype.parseAction, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.any]];
	  }});
	Object.defineProperty(Parser.prototype.parseBinding, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.any]];
	  }});
	Object.defineProperty(Parser.prototype.addPipes, "parameters", {get: function() {
	    return [[ASTWithSource], [assert.genericType(List, String)]];
	  }});
	Object.defineProperty(Parser.prototype.parseTemplateBindings, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.any]];
	  }});
	Object.defineProperty(Parser.prototype.parseInterpolation, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.any]];
	  }});
	Object.defineProperty(Parser.prototype.wrapLiteralPrimitive, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.any]];
	  }});
	var _ParseAST = function _ParseAST(input, location, tokens, reflector, parseAction) {
	  assert.argumentTypes(input, assert.type.string, location, assert.type.any, tokens, List, reflector, Reflector, parseAction, assert.type.boolean);
	  this.input = input;
	  this.location = location;
	  this.tokens = tokens;
	  this.index = 0;
	  this.reflector = reflector;
	  this.parseAction = parseAction;
	};
	($traceurRuntime.createClass)(_ParseAST, {
	  peek: function(offset) {
	    assert.argumentTypes(offset, int);
	    var i = this.index + offset;
	    return assert.returnType((i < this.tokens.length ? this.tokens[i] : EOF), Token);
	  },
	  get next() {
	    return assert.returnType((this.peek(0)), Token);
	  },
	  get inputIndex() {
	    return assert.returnType(((this.index < this.tokens.length) ? this.next.index : this.input.length), int);
	  },
	  advance: function() {
	    this.index++;
	  },
	  optionalCharacter: function(code) {
	    assert.argumentTypes(code, int);
	    if (this.next.isCharacter(code)) {
	      this.advance();
	      return assert.returnType((true), assert.type.boolean);
	    } else {
	      return assert.returnType((false), assert.type.boolean);
	    }
	  },
	  optionalKeywordVar: function() {
	    if (this.peekKeywordVar()) {
	      this.advance();
	      return assert.returnType((true), assert.type.boolean);
	    } else {
	      return assert.returnType((false), assert.type.boolean);
	    }
	  },
	  peekKeywordVar: function() {
	    return assert.returnType((this.next.isKeywordVar() || this.next.isOperator('#')), assert.type.boolean);
	  },
	  expectCharacter: function(code) {
	    assert.argumentTypes(code, int);
	    if (this.optionalCharacter(code))
	      return ;
	    this.error(("Missing expected " + StringWrapper.fromCharCode(code)));
	  },
	  optionalOperator: function(op) {
	    assert.argumentTypes(op, assert.type.string);
	    if (this.next.isOperator(op)) {
	      this.advance();
	      return assert.returnType((true), assert.type.boolean);
	    } else {
	      return assert.returnType((false), assert.type.boolean);
	    }
	  },
	  expectOperator: function(operator) {
	    assert.argumentTypes(operator, assert.type.string);
	    if (this.optionalOperator(operator))
	      return ;
	    this.error(("Missing expected operator " + operator));
	  },
	  expectIdentifierOrKeyword: function() {
	    var n = this.next;
	    if (!n.isIdentifier() && !n.isKeyword()) {
	      this.error(("Unexpected token " + n + ", expected identifier or keyword"));
	    }
	    this.advance();
	    return assert.returnType((n.toString()), assert.type.string);
	  },
	  expectIdentifierOrKeywordOrString: function() {
	    var n = this.next;
	    if (!n.isIdentifier() && !n.isKeyword() && !n.isString()) {
	      this.error(("Unexpected token " + n + ", expected identifier, keyword, or string"));
	    }
	    this.advance();
	    return assert.returnType((n.toString()), assert.type.string);
	  },
	  parseChain: function() {
	    var exprs = [];
	    while (this.index < this.tokens.length) {
	      var expr = this.parsePipe();
	      ListWrapper.push(exprs, expr);
	      if (this.optionalCharacter($SEMICOLON)) {
	        if (!this.parseAction) {
	          this.error("Binding expression cannot contain chained expression");
	        }
	        while (this.optionalCharacter($SEMICOLON)) {}
	      } else if (this.index < this.tokens.length) {
	        this.error(("Unexpected token '" + this.next + "'"));
	      }
	    }
	    if (exprs.length == 0)
	      return assert.returnType((new EmptyExpr()), AST);
	    if (exprs.length == 1)
	      return assert.returnType((exprs[0]), AST);
	    return assert.returnType((new Chain(exprs)), AST);
	  },
	  parsePipe: function() {
	    var result = this.parseExpression();
	    while (this.optionalOperator("|")) {
	      if (this.parseAction) {
	        this.error("Cannot have a pipe in an action expression");
	      }
	      var name = this.expectIdentifierOrKeyword();
	      var args = ListWrapper.create();
	      while (this.optionalCharacter($COLON)) {
	        ListWrapper.push(args, this.parseExpression());
	      }
	      result = new Pipe(result, name, args);
	    }
	    return result;
	  },
	  parseExpression: function() {
	    var start = this.inputIndex;
	    var result = this.parseConditional();
	    while (this.next.isOperator('=')) {
	      if (!result.isAssignable) {
	        var end = this.inputIndex;
	        var expression = this.input.substring(start, end);
	        this.error(("Expression " + expression + " is not assignable"));
	      }
	      if (!this.parseAction) {
	        this.error("Binding expression cannot contain assignments");
	      }
	      this.expectOperator('=');
	      result = new Assignment(result, this.parseConditional());
	    }
	    return result;
	  },
	  parseConditional: function() {
	    var start = this.inputIndex;
	    var result = this.parseLogicalOr();
	    if (this.optionalOperator('?')) {
	      var yes = this.parseExpression();
	      if (!this.optionalCharacter($COLON)) {
	        var end = this.inputIndex;
	        var expression = this.input.substring(start, end);
	        this.error(("Conditional expression " + expression + " requires all 3 expressions"));
	      }
	      var no = this.parseExpression();
	      return new Conditional(result, yes, no);
	    } else {
	      return result;
	    }
	  },
	  parseLogicalOr: function() {
	    var result = this.parseLogicalAnd();
	    while (this.optionalOperator('||')) {
	      result = new Binary('||', result, this.parseLogicalAnd());
	    }
	    return result;
	  },
	  parseLogicalAnd: function() {
	    var result = this.parseEquality();
	    while (this.optionalOperator('&&')) {
	      result = new Binary('&&', result, this.parseEquality());
	    }
	    return result;
	  },
	  parseEquality: function() {
	    var result = this.parseRelational();
	    while (true) {
	      if (this.optionalOperator('==')) {
	        result = new Binary('==', result, this.parseRelational());
	      } else if (this.optionalOperator('!=')) {
	        result = new Binary('!=', result, this.parseRelational());
	      } else {
	        return result;
	      }
	    }
	  },
	  parseRelational: function() {
	    var result = this.parseAdditive();
	    while (true) {
	      if (this.optionalOperator('<')) {
	        result = new Binary('<', result, this.parseAdditive());
	      } else if (this.optionalOperator('>')) {
	        result = new Binary('>', result, this.parseAdditive());
	      } else if (this.optionalOperator('<=')) {
	        result = new Binary('<=', result, this.parseAdditive());
	      } else if (this.optionalOperator('>=')) {
	        result = new Binary('>=', result, this.parseAdditive());
	      } else {
	        return result;
	      }
	    }
	  },
	  parseAdditive: function() {
	    var result = this.parseMultiplicative();
	    while (true) {
	      if (this.optionalOperator('+')) {
	        result = new Binary('+', result, this.parseMultiplicative());
	      } else if (this.optionalOperator('-')) {
	        result = new Binary('-', result, this.parseMultiplicative());
	      } else {
	        return result;
	      }
	    }
	  },
	  parseMultiplicative: function() {
	    var result = this.parsePrefix();
	    while (true) {
	      if (this.optionalOperator('*')) {
	        result = new Binary('*', result, this.parsePrefix());
	      } else if (this.optionalOperator('%')) {
	        result = new Binary('%', result, this.parsePrefix());
	      } else if (this.optionalOperator('/')) {
	        result = new Binary('/', result, this.parsePrefix());
	      } else {
	        return result;
	      }
	    }
	  },
	  parsePrefix: function() {
	    if (this.optionalOperator('+')) {
	      return this.parsePrefix();
	    } else if (this.optionalOperator('-')) {
	      return new Binary('-', new LiteralPrimitive(0), this.parsePrefix());
	    } else if (this.optionalOperator('!')) {
	      return new PrefixNot(this.parsePrefix());
	    } else {
	      return this.parseCallChain();
	    }
	  },
	  parseCallChain: function() {
	    var result = this.parsePrimary();
	    while (true) {
	      if (this.optionalCharacter($PERIOD)) {
	        result = this.parseAccessMemberOrMethodCall(result);
	      } else if (this.optionalCharacter($LBRACKET)) {
	        var key = this.parseExpression();
	        this.expectCharacter($RBRACKET);
	        result = new KeyedAccess(result, key);
	      } else if (this.optionalCharacter($LPAREN)) {
	        var args = this.parseCallArguments();
	        this.expectCharacter($RPAREN);
	        result = new FunctionCall(result, args);
	      } else {
	        return assert.returnType((result), AST);
	      }
	    }
	  },
	  parsePrimary: function() {
	    if (this.optionalCharacter($LPAREN)) {
	      var result = this.parsePipe();
	      this.expectCharacter($RPAREN);
	      return result;
	    } else if (this.next.isKeywordNull() || this.next.isKeywordUndefined()) {
	      this.advance();
	      return new LiteralPrimitive(null);
	    } else if (this.next.isKeywordTrue()) {
	      this.advance();
	      return new LiteralPrimitive(true);
	    } else if (this.next.isKeywordFalse()) {
	      this.advance();
	      return new LiteralPrimitive(false);
	    } else if (this.optionalCharacter($LBRACKET)) {
	      var elements = this.parseExpressionList($RBRACKET);
	      this.expectCharacter($RBRACKET);
	      return new LiteralArray(elements);
	    } else if (this.next.isCharacter($LBRACE)) {
	      return this.parseLiteralMap();
	    } else if (this.next.isIdentifier()) {
	      return this.parseAccessMemberOrMethodCall(_implicitReceiver);
	    } else if (this.next.isNumber()) {
	      var value = this.next.toNumber();
	      this.advance();
	      return new LiteralPrimitive(value);
	    } else if (this.next.isString()) {
	      var value = this.next.toString();
	      this.advance();
	      return new LiteralPrimitive(value);
	    } else if (this.index >= this.tokens.length) {
	      this.error(("Unexpected end of expression: " + this.input));
	    } else {
	      this.error(("Unexpected token " + this.next));
	    }
	  },
	  parseExpressionList: function(terminator) {
	    assert.argumentTypes(terminator, int);
	    var result = [];
	    if (!this.next.isCharacter(terminator)) {
	      do {
	        ListWrapper.push(result, this.parseExpression());
	      } while (this.optionalCharacter($COMMA));
	    }
	    return assert.returnType((result), List);
	  },
	  parseLiteralMap: function() {
	    var keys = [];
	    var values = [];
	    this.expectCharacter($LBRACE);
	    if (!this.optionalCharacter($RBRACE)) {
	      do {
	        var key = this.expectIdentifierOrKeywordOrString();
	        ListWrapper.push(keys, key);
	        this.expectCharacter($COLON);
	        ListWrapper.push(values, this.parseExpression());
	      } while (this.optionalCharacter($COMMA));
	      this.expectCharacter($RBRACE);
	    }
	    return new LiteralMap(keys, values);
	  },
	  parseAccessMemberOrMethodCall: function(receiver) {
	    var id = this.expectIdentifierOrKeyword();
	    if (this.optionalCharacter($LPAREN)) {
	      var args = this.parseCallArguments();
	      this.expectCharacter($RPAREN);
	      var fn = this.reflector.method(id);
	      return assert.returnType((new MethodCall(receiver, id, fn, args)), AST);
	    } else {
	      var getter = this.reflector.getter(id);
	      var setter = this.reflector.setter(id);
	      return assert.returnType((new AccessMember(receiver, id, getter, setter)), AST);
	    }
	  },
	  parseCallArguments: function() {
	    if (this.next.isCharacter($RPAREN))
	      return [];
	    var positionals = [];
	    do {
	      ListWrapper.push(positionals, this.parseExpression());
	    } while (this.optionalCharacter($COMMA));
	    return positionals;
	  },
	  expectTemplateBindingKey: function() {
	    var result = '';
	    var operatorFound = false;
	    do {
	      result += this.expectIdentifierOrKeywordOrString();
	      operatorFound = this.optionalOperator('-');
	      if (operatorFound) {
	        result += '-';
	      }
	    } while (operatorFound);
	    return result.toString();
	  },
	  parseTemplateBindings: function() {
	    var bindings = [];
	    while (this.index < this.tokens.length) {
	      var keyIsVar = assert.type(this.optionalKeywordVar(), assert.type.boolean);
	      var key = this.expectTemplateBindingKey();
	      this.optionalCharacter($COLON);
	      var name = null;
	      var expression = null;
	      if (this.next !== EOF) {
	        if (keyIsVar) {
	          if (this.optionalOperator("=")) {
	            name = this.expectTemplateBindingKey();
	          } else {
	            name = '\$implicit';
	          }
	        } else if (!this.peekKeywordVar()) {
	          var start = this.inputIndex;
	          var ast = this.parsePipe();
	          var source = this.input.substring(start, this.inputIndex);
	          expression = new ASTWithSource(ast, source, this.location);
	        }
	      }
	      ListWrapper.push(bindings, new TemplateBinding(key, keyIsVar, name, expression));
	      if (!this.optionalCharacter($SEMICOLON)) {
	        this.optionalCharacter($COMMA);
	      }
	      ;
	    }
	    return bindings;
	  },
	  error: function(message) {
	    var index = arguments[1] !== (void 0) ? arguments[1] : null;
	    assert.argumentTypes(message, assert.type.string, index, int);
	    if (isBlank(index))
	      index = this.index;
	    var location = (index < this.tokens.length) ? ("at column " + (this.tokens[index].index + 1) + " in") : "at the end of the expression";
	    throw new BaseException(("Parser Error: " + message + " " + location + " [" + this.input + "] in " + this.location));
	  }
	}, {});
	Object.defineProperty(_ParseAST, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.any], [List], [Reflector], [assert.type.boolean]];
	  }});
	Object.defineProperty(_ParseAST.prototype.peek, "parameters", {get: function() {
	    return [[int]];
	  }});
	Object.defineProperty(_ParseAST.prototype.optionalCharacter, "parameters", {get: function() {
	    return [[int]];
	  }});
	Object.defineProperty(_ParseAST.prototype.expectCharacter, "parameters", {get: function() {
	    return [[int]];
	  }});
	Object.defineProperty(_ParseAST.prototype.optionalOperator, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(_ParseAST.prototype.expectOperator, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(_ParseAST.prototype.parseExpressionList, "parameters", {get: function() {
	    return [[int]];
	  }});
	Object.defineProperty(_ParseAST.prototype.error, "parameters", {get: function() {
	    return [[assert.type.string], [int]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/parser/parser.map
	
	//# sourceMappingURL=./parser.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ContextWithVariableBindings: {get: function() {
	      return ContextWithVariableBindings;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/parser/context_with_variable_bindings";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
	var BaseException = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).BaseException;
	var ContextWithVariableBindings = function ContextWithVariableBindings(parent, varBindings) {
	  assert.argumentTypes(parent, assert.type.any, varBindings, Map);
	  this.parent = parent;
	  this.varBindings = varBindings;
	};
	($traceurRuntime.createClass)(ContextWithVariableBindings, {
	  hasBinding: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    return assert.returnType((MapWrapper.contains(this.varBindings, name)), assert.type.boolean);
	  },
	  get: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    return MapWrapper.get(this.varBindings, name);
	  },
	  set: function(name, value) {
	    assert.argumentTypes(name, assert.type.string, value, assert.type.any);
	    if (this.hasBinding(name)) {
	      MapWrapper.set(this.varBindings, name, value);
	    } else {
	      throw new BaseException('VariableBindings do not support setting of new keys post-construction.');
	    }
	  },
	  clearValues: function() {
	    for (var $__4 = MapWrapper.keys(this.varBindings)[$traceurRuntime.toProperty(Symbol.iterator)](),
	        $__5 = void 0; !($__5 = $__4.next()).done; ) {
	      var k = $__5.value;
	      {
	        MapWrapper.set(this.varBindings, k, null);
	      }
	    }
	  }
	}, {});
	Object.defineProperty(ContextWithVariableBindings, "parameters", {get: function() {
	    return [[assert.type.any], [Map]];
	  }});
	Object.defineProperty(ContextWithVariableBindings.prototype.hasBinding, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ContextWithVariableBindings.prototype.get, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ContextWithVariableBindings.prototype.set, "parameters", {get: function() {
	    return [[assert.type.string], []];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/parser/context_with_variable_bindings.map
	
	//# sourceMappingURL=./context_with_variable_bindings.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  PipeRegistry: {get: function() {
	      return PipeRegistry;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/pipes/pipe_registry";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__1.List,
	    ListWrapper = $__1.ListWrapper;
	var $__2 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isBlank = $__2.isBlank,
	    isPresent = $__2.isPresent,
	    BaseException = $__2.BaseException,
	    CONST = $__2.CONST;
	var Pipe = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = __webpack_require__(20), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__}).Pipe;
	var PipeRegistry = function PipeRegistry(config) {
	  this.config = config;
	};
	($traceurRuntime.createClass)(PipeRegistry, {get: function(type, obj) {
	    var listOfConfigs = this.config[type];
	    if (isBlank(listOfConfigs)) {
	      throw new BaseException(("Cannot find a pipe for type '" + type + "' object '" + obj + "'"));
	    }
	    var matchingConfig = ListWrapper.find(listOfConfigs, (function(pipeConfig) {
	      return pipeConfig.supports(obj);
	    }));
	    if (isBlank(matchingConfig)) {
	      throw new BaseException(("Cannot find a pipe for type '" + type + "' object '" + obj + "'"));
	    }
	    return assert.returnType((matchingConfig.create()), Pipe);
	  }}, {});
	Object.defineProperty(PipeRegistry.prototype.get, "parameters", {get: function() {
	    return [[assert.type.string], []];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/pipes/pipe_registry.map
	
	//# sourceMappingURL=./pipe_registry.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  NO_CHANGE: {get: function() {
	      return NO_CHANGE;
	    }},
	  Pipe: {get: function() {
	      return Pipe;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/pipes/pipe";
	var $__rtts_95_assert_47_rtts_95_assert__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var NO_CHANGE = new Object();
	var Pipe = function Pipe() {};
	($traceurRuntime.createClass)(Pipe, {
	  supports: function(obj) {
	    return assert.returnType((false), assert.type.boolean);
	  },
	  transform: function(value) {
	    assert.argumentTypes(value, assert.type.any);
	    return assert.returnType((null), assert.type.any);
	  }
	}, {});
	Object.defineProperty(Pipe.prototype.transform, "parameters", {get: function() {
	    return [[assert.type.any]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/pipes/pipe.map
	
	//# sourceMappingURL=./pipe.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ArrayChangesFactory: {get: function() {
	      return ArrayChangesFactory;
	    }},
	  ArrayChanges: {get: function() {
	      return ArrayChanges;
	    }},
	  CollectionChangeRecord: {get: function() {
	      return CollectionChangeRecord;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/pipes/array_changes";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    isListLikeIterable = $__1.isListLikeIterable,
	    iterateListLike = $__1.iterateListLike,
	    ListWrapper = $__1.ListWrapper,
	    MapWrapper = $__1.MapWrapper;
	var $__2 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    int = $__2.int,
	    isBlank = $__2.isBlank,
	    isPresent = $__2.isPresent,
	    stringify = $__2.stringify,
	    getMapKey = $__2.getMapKey,
	    looseIdentical = $__2.looseIdentical;
	var $__3 = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = __webpack_require__(20), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__}),
	    NO_CHANGE = $__3.NO_CHANGE,
	    Pipe = $__3.Pipe;
	var ArrayChangesFactory = function ArrayChangesFactory() {};
	($traceurRuntime.createClass)(ArrayChangesFactory, {
	  supports: function(obj) {
	    return assert.returnType((ArrayChanges.supportsObj(obj)), assert.type.boolean);
	  },
	  create: function() {
	    return assert.returnType((new ArrayChanges()), Pipe);
	  }
	}, {});
	var ArrayChanges = function ArrayChanges() {
	  $traceurRuntime.superConstructor($ArrayChanges).call(this);
	  this._collection = null;
	  this._length = null;
	  this._linkedRecords = null;
	  this._unlinkedRecords = null;
	  this._previousItHead = null;
	  this._itHead = null;
	  this._itTail = null;
	  this._additionsHead = null;
	  this._additionsTail = null;
	  this._movesHead = null;
	  this._movesTail = null;
	  this._removalsHead = null;
	  this._removalsTail = null;
	};
	var $ArrayChanges = ArrayChanges;
	($traceurRuntime.createClass)(ArrayChanges, {
	  supports: function(obj) {
	    return assert.returnType(($ArrayChanges.supportsObj(obj)), assert.type.boolean);
	  },
	  get collection() {
	    return this._collection;
	  },
	  get length() {
	    return assert.returnType((this._length), int);
	  },
	  forEachItem: function(fn) {
	    assert.argumentTypes(fn, Function);
	    var record;
	    for (record = this._itHead; record !== null; record = record._next) {
	      fn(record);
	    }
	  },
	  forEachPreviousItem: function(fn) {
	    assert.argumentTypes(fn, Function);
	    var record;
	    for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
	      fn(record);
	    }
	  },
	  forEachAddedItem: function(fn) {
	    assert.argumentTypes(fn, Function);
	    var record;
	    for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	      fn(record);
	    }
	  },
	  forEachMovedItem: function(fn) {
	    assert.argumentTypes(fn, Function);
	    var record;
	    for (record = this._movesHead; record !== null; record = record._nextMoved) {
	      fn(record);
	    }
	  },
	  forEachRemovedItem: function(fn) {
	    assert.argumentTypes(fn, Function);
	    var record;
	    for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	      fn(record);
	    }
	  },
	  transform: function(collection) {
	    if (this.check(collection)) {
	      return this;
	    } else {
	      return NO_CHANGE;
	    }
	  },
	  check: function(collection) {
	    var $__4 = this;
	    this._reset();
	    var record = assert.type(this._itHead, CollectionChangeRecord);
	    var mayBeDirty = assert.type(false, assert.type.boolean);
	    var index,
	        item;
	    if (ListWrapper.isList(collection)) {
	      var list = collection;
	      this._length = collection.length;
	      for (index = 0; index < this._length; index++) {
	        item = list[index];
	        if (record === null || !looseIdentical(record.item, item)) {
	          record = this._mismatch(record, item, index);
	          mayBeDirty = true;
	        } else if (mayBeDirty) {
	          record = this._verifyReinsertion(record, item, index);
	        }
	        record = record._next;
	      }
	    } else {
	      index = 0;
	      iterateListLike(collection, (function(item) {
	        if (record === null || !looseIdentical(record.item, item)) {
	          record = $__4._mismatch(record, item, index);
	          mayBeDirty = true;
	        } else if (mayBeDirty) {
	          record = $__4._verifyReinsertion(record, item, index);
	        }
	        record = record._next;
	        index++;
	      }));
	      this._length = index;
	    }
	    this._truncate(record);
	    this._collection = collection;
	    return assert.returnType((this.isDirty), assert.type.boolean);
	  },
	  get isDirty() {
	    return assert.returnType((this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null), assert.type.boolean);
	  },
	  _reset: function() {
	    if (this.isDirty) {
	      var record;
	      var nextRecord;
	      for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
	        record._nextPrevious = record._next;
	      }
	      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	        record.previousIndex = record.currentIndex;
	      }
	      this._additionsHead = this._additionsTail = null;
	      for (record = this._movesHead; record !== null; record = nextRecord) {
	        record.previousIndex = record.currentIndex;
	        nextRecord = record._nextMoved;
	      }
	      this._movesHead = this._movesTail = null;
	      this._removalsHead = this._removalsTail = null;
	    }
	  },
	  _mismatch: function(record, item, index) {
	    assert.argumentTypes(record, CollectionChangeRecord, item, assert.type.any, index, int);
	    var previousRecord;
	    if (record === null) {
	      previousRecord = this._itTail;
	    } else {
	      previousRecord = record._prev;
	      this._remove(record);
	    }
	    record = this._linkedRecords === null ? null : this._linkedRecords.get(item, index);
	    if (record !== null) {
	      this._moveAfter(record, previousRecord, index);
	    } else {
	      record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(item);
	      if (record !== null) {
	        this._reinsertAfter(record, previousRecord, index);
	      } else {
	        record = this._addAfter(new CollectionChangeRecord(item), previousRecord, index);
	      }
	    }
	    return assert.returnType((record), CollectionChangeRecord);
	  },
	  _verifyReinsertion: function(record, item, index) {
	    assert.argumentTypes(record, CollectionChangeRecord, item, assert.type.any, index, int);
	    var reinsertRecord = assert.type(this._unlinkedRecords === null ? null : this._unlinkedRecords.get(item), CollectionChangeRecord);
	    if (reinsertRecord !== null) {
	      record = this._reinsertAfter(reinsertRecord, record._prev, index);
	    } else if (record.currentIndex != index) {
	      record.currentIndex = index;
	      this._addToMoves(record, index);
	    }
	    return assert.returnType((record), CollectionChangeRecord);
	  },
	  _truncate: function(record) {
	    assert.argumentTypes(record, CollectionChangeRecord);
	    while (record !== null) {
	      var nextRecord = assert.type(record._next, CollectionChangeRecord);
	      this._addToRemovals(this._unlink(record));
	      record = nextRecord;
	    }
	    if (this._unlinkedRecords !== null) {
	      this._unlinkedRecords.clear();
	    }
	    if (this._additionsTail !== null) {
	      this._additionsTail._nextAdded = null;
	    }
	    if (this._movesTail !== null) {
	      this._movesTail._nextMoved = null;
	    }
	    if (this._itTail !== null) {
	      this._itTail._next = null;
	    }
	    if (this._removalsTail !== null) {
	      this._removalsTail._nextRemoved = null;
	    }
	  },
	  _reinsertAfter: function(record, prevRecord, index) {
	    assert.argumentTypes(record, CollectionChangeRecord, prevRecord, CollectionChangeRecord, index, int);
	    if (this._unlinkedRecords !== null) {
	      this._unlinkedRecords.remove(record);
	    }
	    var prev = record._prevRemoved;
	    var next = record._nextRemoved;
	    if (prev === null) {
	      this._removalsHead = next;
	    } else {
	      prev._nextRemoved = next;
	    }
	    if (next === null) {
	      this._removalsTail = prev;
	    } else {
	      next._prevRemoved = prev;
	    }
	    this._insertAfter(record, prevRecord, index);
	    this._addToMoves(record, index);
	    return assert.returnType((record), CollectionChangeRecord);
	  },
	  _moveAfter: function(record, prevRecord, index) {
	    assert.argumentTypes(record, CollectionChangeRecord, prevRecord, CollectionChangeRecord, index, int);
	    this._unlink(record);
	    this._insertAfter(record, prevRecord, index);
	    this._addToMoves(record, index);
	    return assert.returnType((record), CollectionChangeRecord);
	  },
	  _addAfter: function(record, prevRecord, index) {
	    assert.argumentTypes(record, CollectionChangeRecord, prevRecord, CollectionChangeRecord, index, int);
	    this._insertAfter(record, prevRecord, index);
	    if (this._additionsTail === null) {
	      this._additionsTail = this._additionsHead = record;
	    } else {
	      this._additionsTail = this._additionsTail._nextAdded = record;
	    }
	    return assert.returnType((record), CollectionChangeRecord);
	  },
	  _insertAfter: function(record, prevRecord, index) {
	    assert.argumentTypes(record, CollectionChangeRecord, prevRecord, CollectionChangeRecord, index, int);
	    var next = assert.type(prevRecord === null ? this._itHead : prevRecord._next, CollectionChangeRecord);
	    record._next = next;
	    record._prev = prevRecord;
	    if (next === null) {
	      this._itTail = record;
	    } else {
	      next._prev = record;
	    }
	    if (prevRecord === null) {
	      this._itHead = record;
	    } else {
	      prevRecord._next = record;
	    }
	    if (this._linkedRecords === null) {
	      this._linkedRecords = new _DuplicateMap();
	    }
	    this._linkedRecords.put(record);
	    record.currentIndex = index;
	    return assert.returnType((record), CollectionChangeRecord);
	  },
	  _remove: function(record) {
	    assert.argumentTypes(record, CollectionChangeRecord);
	    return assert.returnType((this._addToRemovals(this._unlink(record))), CollectionChangeRecord);
	  },
	  _unlink: function(record) {
	    assert.argumentTypes(record, CollectionChangeRecord);
	    if (this._linkedRecords !== null) {
	      this._linkedRecords.remove(record);
	    }
	    var prev = record._prev;
	    var next = record._next;
	    if (prev === null) {
	      this._itHead = next;
	    } else {
	      prev._next = next;
	    }
	    if (next === null) {
	      this._itTail = prev;
	    } else {
	      next._prev = prev;
	    }
	    return assert.returnType((record), CollectionChangeRecord);
	  },
	  _addToMoves: function(record, toIndex) {
	    assert.argumentTypes(record, CollectionChangeRecord, toIndex, int);
	    if (record.previousIndex === toIndex) {
	      return assert.returnType((record), CollectionChangeRecord);
	    }
	    if (this._movesTail === null) {
	      this._movesTail = this._movesHead = record;
	    } else {
	      this._movesTail = this._movesTail._nextMoved = record;
	    }
	    return assert.returnType((record), CollectionChangeRecord);
	  },
	  _addToRemovals: function(record) {
	    assert.argumentTypes(record, CollectionChangeRecord);
	    if (this._unlinkedRecords === null) {
	      this._unlinkedRecords = new _DuplicateMap();
	    }
	    this._unlinkedRecords.put(record);
	    record.currentIndex = null;
	    record._nextRemoved = null;
	    if (this._removalsTail === null) {
	      this._removalsTail = this._removalsHead = record;
	      record._prevRemoved = null;
	    } else {
	      record._prevRemoved = this._removalsTail;
	      this._removalsTail = this._removalsTail._nextRemoved = record;
	    }
	    return assert.returnType((record), CollectionChangeRecord);
	  },
	  toString: function() {
	    var record;
	    var list = [];
	    for (record = this._itHead; record !== null; record = record._next) {
	      ListWrapper.push(list, record);
	    }
	    var previous = [];
	    for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
	      ListWrapper.push(previous, record);
	    }
	    var additions = [];
	    for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	      ListWrapper.push(additions, record);
	    }
	    var moves = [];
	    for (record = this._movesHead; record !== null; record = record._nextMoved) {
	      ListWrapper.push(moves, record);
	    }
	    var removals = [];
	    for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	      ListWrapper.push(removals, record);
	    }
	    return assert.returnType(("collection: " + list.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" + "additions: " + additions.join(', ') + "\n" + "moves: " + moves.join(', ') + "\n" + "removals: " + removals.join(', ') + "\n"), assert.type.string);
	  }
	}, {supportsObj: function(obj) {
	    return assert.returnType((isListLikeIterable(obj)), assert.type.boolean);
	  }}, Pipe);
	Object.defineProperty(ArrayChanges.prototype.forEachItem, "parameters", {get: function() {
	    return [[Function]];
	  }});
	Object.defineProperty(ArrayChanges.prototype.forEachPreviousItem, "parameters", {get: function() {
	    return [[Function]];
	  }});
	Object.defineProperty(ArrayChanges.prototype.forEachAddedItem, "parameters", {get: function() {
	    return [[Function]];
	  }});
	Object.defineProperty(ArrayChanges.prototype.forEachMovedItem, "parameters", {get: function() {
	    return [[Function]];
	  }});
	Object.defineProperty(ArrayChanges.prototype.forEachRemovedItem, "parameters", {get: function() {
	    return [[Function]];
	  }});
	Object.defineProperty(ArrayChanges.prototype._mismatch, "parameters", {get: function() {
	    return [[CollectionChangeRecord], [], [int]];
	  }});
	Object.defineProperty(ArrayChanges.prototype._verifyReinsertion, "parameters", {get: function() {
	    return [[CollectionChangeRecord], [], [int]];
	  }});
	Object.defineProperty(ArrayChanges.prototype._truncate, "parameters", {get: function() {
	    return [[CollectionChangeRecord]];
	  }});
	Object.defineProperty(ArrayChanges.prototype._reinsertAfter, "parameters", {get: function() {
	    return [[CollectionChangeRecord], [CollectionChangeRecord], [int]];
	  }});
	Object.defineProperty(ArrayChanges.prototype._moveAfter, "parameters", {get: function() {
	    return [[CollectionChangeRecord], [CollectionChangeRecord], [int]];
	  }});
	Object.defineProperty(ArrayChanges.prototype._addAfter, "parameters", {get: function() {
	    return [[CollectionChangeRecord], [CollectionChangeRecord], [int]];
	  }});
	Object.defineProperty(ArrayChanges.prototype._insertAfter, "parameters", {get: function() {
	    return [[CollectionChangeRecord], [CollectionChangeRecord], [int]];
	  }});
	Object.defineProperty(ArrayChanges.prototype._remove, "parameters", {get: function() {
	    return [[CollectionChangeRecord]];
	  }});
	Object.defineProperty(ArrayChanges.prototype._unlink, "parameters", {get: function() {
	    return [[CollectionChangeRecord]];
	  }});
	Object.defineProperty(ArrayChanges.prototype._addToMoves, "parameters", {get: function() {
	    return [[CollectionChangeRecord], [int]];
	  }});
	Object.defineProperty(ArrayChanges.prototype._addToRemovals, "parameters", {get: function() {
	    return [[CollectionChangeRecord]];
	  }});
	var CollectionChangeRecord = function CollectionChangeRecord(item) {
	  this.currentIndex = null;
	  this.previousIndex = null;
	  this.item = item;
	  this._nextPrevious = null;
	  this._prev = null;
	  this._next = null;
	  this._prevDup = null;
	  this._nextDup = null;
	  this._prevRemoved = null;
	  this._nextRemoved = null;
	  this._nextAdded = null;
	  this._nextMoved = null;
	};
	($traceurRuntime.createClass)(CollectionChangeRecord, {toString: function() {
	    return assert.returnType((this.previousIndex === this.currentIndex ? stringify(this.item) : stringify(this.item) + '[' + stringify(this.previousIndex) + '->' + stringify(this.currentIndex) + ']'), assert.type.string);
	  }}, {});
	var _DuplicateItemRecordList = function _DuplicateItemRecordList() {
	  this._head = null;
	  this._tail = null;
	};
	($traceurRuntime.createClass)(_DuplicateItemRecordList, {
	  add: function(record) {
	    assert.argumentTypes(record, CollectionChangeRecord);
	    if (this._head === null) {
	      this._head = this._tail = record;
	      record._nextDup = null;
	      record._prevDup = null;
	    } else {
	      this._tail._nextDup = record;
	      record._prevDup = this._tail;
	      record._nextDup = null;
	      this._tail = record;
	    }
	  },
	  get: function(item, afterIndex) {
	    assert.argumentTypes(item, assert.type.any, afterIndex, int);
	    var record;
	    for (record = this._head; record !== null; record = record._nextDup) {
	      if ((afterIndex === null || afterIndex < record.currentIndex) && looseIdentical(record.item, item)) {
	        return assert.returnType((record), CollectionChangeRecord);
	      }
	    }
	    return assert.returnType((null), CollectionChangeRecord);
	  },
	  remove: function(record) {
	    assert.argumentTypes(record, CollectionChangeRecord);
	    var prev = assert.type(record._prevDup, CollectionChangeRecord);
	    var next = assert.type(record._nextDup, CollectionChangeRecord);
	    if (prev === null) {
	      this._head = next;
	    } else {
	      prev._nextDup = next;
	    }
	    if (next === null) {
	      this._tail = prev;
	    } else {
	      next._prevDup = prev;
	    }
	    return assert.returnType((this._head === null), assert.type.boolean);
	  }
	}, {});
	Object.defineProperty(_DuplicateItemRecordList.prototype.add, "parameters", {get: function() {
	    return [[CollectionChangeRecord]];
	  }});
	Object.defineProperty(_DuplicateItemRecordList.prototype.get, "parameters", {get: function() {
	    return [[], [int]];
	  }});
	Object.defineProperty(_DuplicateItemRecordList.prototype.remove, "parameters", {get: function() {
	    return [[CollectionChangeRecord]];
	  }});
	var _DuplicateMap = function _DuplicateMap() {
	  this.map = MapWrapper.create();
	};
	($traceurRuntime.createClass)(_DuplicateMap, {
	  put: function(record) {
	    assert.argumentTypes(record, CollectionChangeRecord);
	    var key = getMapKey(record.item);
	    var duplicates = MapWrapper.get(this.map, key);
	    if (!isPresent(duplicates)) {
	      duplicates = new _DuplicateItemRecordList();
	      MapWrapper.set(this.map, key, duplicates);
	    }
	    duplicates.add(record);
	  },
	  get: function(value) {
	    var afterIndex = arguments[1] !== (void 0) ? arguments[1] : null;
	    var key = getMapKey(value);
	    var recordList = MapWrapper.get(this.map, key);
	    return assert.returnType((isBlank(recordList) ? null : recordList.get(value, afterIndex)), CollectionChangeRecord);
	  },
	  remove: function(record) {
	    assert.argumentTypes(record, CollectionChangeRecord);
	    var key = getMapKey(record.item);
	    var recordList = assert.type(MapWrapper.get(this.map, key), _DuplicateItemRecordList);
	    if (recordList.remove(record)) {
	      MapWrapper.delete(this.map, key);
	    }
	    return assert.returnType((record), CollectionChangeRecord);
	  },
	  get isEmpty() {
	    return assert.returnType((MapWrapper.size(this.map) === 0), assert.type.boolean);
	  },
	  clear: function() {
	    MapWrapper.clear(this.map);
	  },
	  toString: function() {
	    return assert.returnType(('_DuplicateMap(' + stringify(this.map) + ')'), assert.type.string);
	  }
	}, {});
	Object.defineProperty(_DuplicateMap.prototype.put, "parameters", {get: function() {
	    return [[CollectionChangeRecord]];
	  }});
	Object.defineProperty(_DuplicateMap.prototype.remove, "parameters", {get: function() {
	    return [[CollectionChangeRecord]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/pipes/array_changes.map
	
	//# sourceMappingURL=./array_changes.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  KeyValueChangesFactory: {get: function() {
	      return KeyValueChangesFactory;
	    }},
	  KeyValueChanges: {get: function() {
	      return KeyValueChanges;
	    }},
	  KVChangeRecord: {get: function() {
	      return KVChangeRecord;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/pipes/keyvalue_changes";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    ListWrapper = $__1.ListWrapper,
	    MapWrapper = $__1.MapWrapper,
	    StringMapWrapper = $__1.StringMapWrapper;
	var $__2 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    stringify = $__2.stringify,
	    looseIdentical = $__2.looseIdentical,
	    isJsObject = $__2.isJsObject;
	var $__3 = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = __webpack_require__(20), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__}),
	    NO_CHANGE = $__3.NO_CHANGE,
	    Pipe = $__3.Pipe;
	var KeyValueChangesFactory = function KeyValueChangesFactory() {};
	($traceurRuntime.createClass)(KeyValueChangesFactory, {
	  supports: function(obj) {
	    return assert.returnType((KeyValueChanges.supportsObj(obj)), assert.type.boolean);
	  },
	  create: function() {
	    return assert.returnType((new KeyValueChanges()), Pipe);
	  }
	}, {});
	var KeyValueChanges = function KeyValueChanges() {
	  $traceurRuntime.superConstructor($KeyValueChanges).call(this);
	  this._records = MapWrapper.create();
	  this._mapHead = null;
	  this._previousMapHead = null;
	  this._changesHead = null;
	  this._changesTail = null;
	  this._additionsHead = null;
	  this._additionsTail = null;
	  this._removalsHead = null;
	  this._removalsTail = null;
	};
	var $KeyValueChanges = KeyValueChanges;
	($traceurRuntime.createClass)(KeyValueChanges, {
	  supports: function(obj) {
	    return assert.returnType(($KeyValueChanges.supportsObj(obj)), assert.type.boolean);
	  },
	  transform: function(map) {
	    if (this.check(map)) {
	      return this;
	    } else {
	      return NO_CHANGE;
	    }
	  },
	  get isDirty() {
	    return assert.returnType((this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null), assert.type.boolean);
	  },
	  forEachItem: function(fn) {
	    assert.argumentTypes(fn, Function);
	    var record;
	    for (record = this._mapHead; record !== null; record = record._next) {
	      fn(record);
	    }
	  },
	  forEachPreviousItem: function(fn) {
	    assert.argumentTypes(fn, Function);
	    var record;
	    for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
	      fn(record);
	    }
	  },
	  forEachChangedItem: function(fn) {
	    assert.argumentTypes(fn, Function);
	    var record;
	    for (record = this._changesHead; record !== null; record = record._nextChanged) {
	      fn(record);
	    }
	  },
	  forEachAddedItem: function(fn) {
	    assert.argumentTypes(fn, Function);
	    var record;
	    for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	      fn(record);
	    }
	  },
	  forEachRemovedItem: function(fn) {
	    assert.argumentTypes(fn, Function);
	    var record;
	    for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	      fn(record);
	    }
	  },
	  check: function(map) {
	    var $__4 = this;
	    this._reset();
	    var records = this._records;
	    var oldSeqRecord = assert.type(this._mapHead, KVChangeRecord);
	    var lastOldSeqRecord = assert.type(null, KVChangeRecord);
	    var lastNewSeqRecord = assert.type(null, KVChangeRecord);
	    var seqChanged = assert.type(false, assert.type.boolean);
	    this._forEach(map, (function(value, key) {
	      var newSeqRecord;
	      if (oldSeqRecord !== null && key === oldSeqRecord.key) {
	        newSeqRecord = oldSeqRecord;
	        if (!looseIdentical(value, oldSeqRecord._currentValue)) {
	          oldSeqRecord._previousValue = oldSeqRecord._currentValue;
	          oldSeqRecord._currentValue = value;
	          $__4._addToChanges(oldSeqRecord);
	        }
	      } else {
	        seqChanged = true;
	        if (oldSeqRecord !== null) {
	          oldSeqRecord._next = null;
	          $__4._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
	          $__4._addToRemovals(oldSeqRecord);
	        }
	        if (MapWrapper.contains(records, key)) {
	          newSeqRecord = MapWrapper.get(records, key);
	        } else {
	          newSeqRecord = new KVChangeRecord(key);
	          MapWrapper.set(records, key, newSeqRecord);
	          newSeqRecord._currentValue = value;
	          $__4._addToAdditions(newSeqRecord);
	        }
	      }
	      if (seqChanged) {
	        if ($__4._isInRemovals(newSeqRecord)) {
	          $__4._removeFromRemovals(newSeqRecord);
	        }
	        if (lastNewSeqRecord == null) {
	          $__4._mapHead = newSeqRecord;
	        } else {
	          lastNewSeqRecord._next = newSeqRecord;
	        }
	      }
	      lastOldSeqRecord = oldSeqRecord;
	      lastNewSeqRecord = newSeqRecord;
	      oldSeqRecord = oldSeqRecord === null ? null : oldSeqRecord._next;
	    }));
	    this._truncate(lastOldSeqRecord, oldSeqRecord);
	    return assert.returnType((this.isDirty), assert.type.boolean);
	  },
	  _reset: function() {
	    if (this.isDirty) {
	      var record;
	      for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
	        record._nextPrevious = record._next;
	      }
	      for (record = this._changesHead; record !== null; record = record._nextChanged) {
	        record._previousValue = record._currentValue;
	      }
	      for (record = this._additionsHead; record != null; record = record._nextAdded) {
	        record._previousValue = record._currentValue;
	      }
	      this._changesHead = this._changesTail = null;
	      this._additionsHead = this._additionsTail = null;
	      this._removalsHead = this._removalsTail = null;
	    }
	  },
	  _truncate: function(lastRecord, record) {
	    assert.argumentTypes(lastRecord, KVChangeRecord, record, KVChangeRecord);
	    while (record !== null) {
	      if (lastRecord === null) {
	        this._mapHead = null;
	      } else {
	        lastRecord._next = null;
	      }
	      var nextRecord = record._next;
	      this._addToRemovals(record);
	      lastRecord = record;
	      record = nextRecord;
	    }
	    for (var rec = assert.type(this._removalsHead, KVChangeRecord); rec !== null; rec = rec._nextRemoved) {
	      rec._previousValue = rec._currentValue;
	      rec._currentValue = null;
	      MapWrapper.delete(this._records, rec.key);
	    }
	  },
	  _isInRemovals: function(record) {
	    assert.argumentTypes(record, KVChangeRecord);
	    return record === this._removalsHead || record._nextRemoved !== null || record._prevRemoved !== null;
	  },
	  _addToRemovals: function(record) {
	    assert.argumentTypes(record, KVChangeRecord);
	    if (this._removalsHead === null) {
	      this._removalsHead = this._removalsTail = record;
	    } else {
	      this._removalsTail._nextRemoved = record;
	      record._prevRemoved = this._removalsTail;
	      this._removalsTail = record;
	    }
	  },
	  _removeFromSeq: function(prev, record) {
	    assert.argumentTypes(prev, KVChangeRecord, record, KVChangeRecord);
	    var next = record._next;
	    if (prev === null) {
	      this._mapHead = next;
	    } else {
	      prev._next = next;
	    }
	  },
	  _removeFromRemovals: function(record) {
	    assert.argumentTypes(record, KVChangeRecord);
	    var prev = record._prevRemoved;
	    var next = record._nextRemoved;
	    if (prev === null) {
	      this._removalsHead = next;
	    } else {
	      prev._nextRemoved = next;
	    }
	    if (next === null) {
	      this._removalsTail = prev;
	    } else {
	      next._prevRemoved = prev;
	    }
	    record._prevRemoved = record._nextRemoved = null;
	  },
	  _addToAdditions: function(record) {
	    assert.argumentTypes(record, KVChangeRecord);
	    if (this._additionsHead === null) {
	      this._additionsHead = this._additionsTail = record;
	    } else {
	      this._additionsTail._nextAdded = record;
	      this._additionsTail = record;
	    }
	  },
	  _addToChanges: function(record) {
	    assert.argumentTypes(record, KVChangeRecord);
	    if (this._changesHead === null) {
	      this._changesHead = this._changesTail = record;
	    } else {
	      this._changesTail._nextChanged = record;
	      this._changesTail = record;
	    }
	  },
	  toString: function() {
	    var items = [];
	    var previous = [];
	    var changes = [];
	    var additions = [];
	    var removals = [];
	    var record;
	    for (record = this._mapHead; record !== null; record = record._next) {
	      ListWrapper.push(items, stringify(record));
	    }
	    for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
	      ListWrapper.push(previous, stringify(record));
	    }
	    for (record = this._changesHead; record !== null; record = record._nextChanged) {
	      ListWrapper.push(changes, stringify(record));
	    }
	    for (record = this._additionsHead; record !== null; record = record._nextAdded) {
	      ListWrapper.push(additions, stringify(record));
	    }
	    for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
	      ListWrapper.push(removals, stringify(record));
	    }
	    return assert.returnType(("map: " + items.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" + "additions: " + additions.join(', ') + "\n" + "changes: " + changes.join(', ') + "\n" + "removals: " + removals.join(', ') + "\n"), assert.type.string);
	  },
	  _forEach: function(obj, fn) {
	    assert.argumentTypes(obj, assert.type.any, fn, Function);
	    if (obj instanceof Map) {
	      MapWrapper.forEach(obj, fn);
	    } else {
	      StringMapWrapper.forEach(obj, fn);
	    }
	  }
	}, {supportsObj: function(obj) {
	    return assert.returnType((obj instanceof Map || isJsObject(obj)), assert.type.boolean);
	  }}, Pipe);
	Object.defineProperty(KeyValueChanges.prototype.forEachItem, "parameters", {get: function() {
	    return [[Function]];
	  }});
	Object.defineProperty(KeyValueChanges.prototype.forEachPreviousItem, "parameters", {get: function() {
	    return [[Function]];
	  }});
	Object.defineProperty(KeyValueChanges.prototype.forEachChangedItem, "parameters", {get: function() {
	    return [[Function]];
	  }});
	Object.defineProperty(KeyValueChanges.prototype.forEachAddedItem, "parameters", {get: function() {
	    return [[Function]];
	  }});
	Object.defineProperty(KeyValueChanges.prototype.forEachRemovedItem, "parameters", {get: function() {
	    return [[Function]];
	  }});
	Object.defineProperty(KeyValueChanges.prototype._truncate, "parameters", {get: function() {
	    return [[KVChangeRecord], [KVChangeRecord]];
	  }});
	Object.defineProperty(KeyValueChanges.prototype._isInRemovals, "parameters", {get: function() {
	    return [[KVChangeRecord]];
	  }});
	Object.defineProperty(KeyValueChanges.prototype._addToRemovals, "parameters", {get: function() {
	    return [[KVChangeRecord]];
	  }});
	Object.defineProperty(KeyValueChanges.prototype._removeFromSeq, "parameters", {get: function() {
	    return [[KVChangeRecord], [KVChangeRecord]];
	  }});
	Object.defineProperty(KeyValueChanges.prototype._removeFromRemovals, "parameters", {get: function() {
	    return [[KVChangeRecord]];
	  }});
	Object.defineProperty(KeyValueChanges.prototype._addToAdditions, "parameters", {get: function() {
	    return [[KVChangeRecord]];
	  }});
	Object.defineProperty(KeyValueChanges.prototype._addToChanges, "parameters", {get: function() {
	    return [[KVChangeRecord]];
	  }});
	Object.defineProperty(KeyValueChanges.prototype._forEach, "parameters", {get: function() {
	    return [[], [Function]];
	  }});
	var KVChangeRecord = function KVChangeRecord(key) {
	  this.key = key;
	  this._previousValue = null;
	  this._currentValue = null;
	  this._nextPrevious = null;
	  this._next = null;
	  this._nextAdded = null;
	  this._nextRemoved = null;
	  this._prevRemoved = null;
	  this._nextChanged = null;
	};
	($traceurRuntime.createClass)(KVChangeRecord, {toString: function() {
	    return assert.returnType((looseIdentical(this._previousValue, this._currentValue) ? stringify(this.key) : (stringify(this.key) + '[' + stringify(this._previousValue) + '->' + stringify(this._currentValue) + ']')), assert.type.string);
	  }}, {});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/pipes/keyvalue_changes.map
	
	//# sourceMappingURL=./keyvalue_changes.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  NullPipeFactory: {get: function() {
	      return NullPipeFactory;
	    }},
	  NullPipe: {get: function() {
	      return NullPipe;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/pipes/null_pipe";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var isBlank = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
	var $__2 = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = __webpack_require__(20), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__}),
	    Pipe = $__2.Pipe,
	    NO_CHANGE = $__2.NO_CHANGE;
	var NullPipeFactory = function NullPipeFactory() {};
	($traceurRuntime.createClass)(NullPipeFactory, {
	  supports: function(obj) {
	    return assert.returnType((NullPipe.supportsObj(obj)), assert.type.boolean);
	  },
	  create: function() {
	    return assert.returnType((new NullPipe()), Pipe);
	  }
	}, {});
	var NullPipe = function NullPipe() {
	  $traceurRuntime.superConstructor($NullPipe).call(this);
	  this.called = false;
	};
	var $NullPipe = NullPipe;
	($traceurRuntime.createClass)(NullPipe, {
	  supports: function(obj) {
	    return $NullPipe.supportsObj(obj);
	  },
	  transform: function(value) {
	    if (!this.called) {
	      this.called = true;
	      return null;
	    } else {
	      return NO_CHANGE;
	    }
	  }
	}, {supportsObj: function(obj) {
	    return assert.returnType((isBlank(obj)), assert.type.boolean);
	  }}, Pipe);
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/pipes/null_pipe.map
	
	//# sourceMappingURL=./null_pipe.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  appViewToken: {get: function() {
	      return appViewToken;
	    }},
	  appChangeDetectorToken: {get: function() {
	      return appChangeDetectorToken;
	    }},
	  appElementToken: {get: function() {
	      return appElementToken;
	    }},
	  appComponentAnnotatedTypeToken: {get: function() {
	      return appComponentAnnotatedTypeToken;
	    }},
	  appDocumentToken: {get: function() {
	      return appDocumentToken;
	    }},
	  bootstrap: {get: function() {
	      return bootstrap;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/application";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_di__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_dom_47_browser_95_adapter__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_core_47_compiler_47_compiler__,
	    $__angular2_47_src_47_core_47_compiler_47_view__,
	    $__angular2_47_src_47_reflection_47_reflection__,
	    $__angular2_47_change_95_detection__,
	    $__angular2_47_src_47_core_47_exception_95_handler__,
	    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
	    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_async__,
	    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__,
	    $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
	    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__,
	    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__,
	    $__angular2_47_src_47_core_47_events_47_event_95_manager__,
	    $__angular2_47_src_47_core_47_events_47_hammer_95_gestures__,
	    $__angular2_47_src_47_di_47_binding__,
	    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
	    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
	    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
	    $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_di__ = __webpack_require__(52), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
	    Injector = $__1.Injector,
	    bind = $__1.bind,
	    OpaqueToken = $__1.OpaqueToken;
	var $__2 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    Type = $__2.Type,
	    FIELD = $__2.FIELD,
	    isBlank = $__2.isBlank,
	    isPresent = $__2.isPresent,
	    BaseException = $__2.BaseException,
	    assertionsEnabled = $__2.assertionsEnabled,
	    print = $__2.print;
	var BrowserDomAdapter = ($__angular2_47_src_47_dom_47_browser_95_adapter__ = __webpack_require__(53), $__angular2_47_src_47_dom_47_browser_95_adapter__ && $__angular2_47_src_47_dom_47_browser_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_browser_95_adapter__ || {default: $__angular2_47_src_47_dom_47_browser_95_adapter__}).BrowserDomAdapter;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var $__5 = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = __webpack_require__(29), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}),
	    Compiler = $__5.Compiler,
	    CompilerCache = $__5.CompilerCache;
	var ProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = __webpack_require__(31), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).ProtoView;
	var $__7 = ($__angular2_47_src_47_reflection_47_reflection__ = __webpack_require__(51), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}),
	    Reflector = $__7.Reflector,
	    reflector = $__7.reflector;
	var $__8 = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
	    Parser = $__8.Parser,
	    Lexer = $__8.Lexer,
	    ChangeDetection = $__8.ChangeDetection,
	    dynamicChangeDetection = $__8.dynamicChangeDetection,
	    jitChangeDetection = $__8.jitChangeDetection;
	var ExceptionHandler = ($__angular2_47_src_47_core_47_exception_95_handler__ = __webpack_require__(55), $__angular2_47_src_47_core_47_exception_95_handler__ && $__angular2_47_src_47_core_47_exception_95_handler__.__esModule && $__angular2_47_src_47_core_47_exception_95_handler__ || {default: $__angular2_47_src_47_core_47_exception_95_handler__}).ExceptionHandler;
	var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = __webpack_require__(30), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
	var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = __webpack_require__(56), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
	var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = __webpack_require__(57), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
	var $__13 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__13.List,
	    ListWrapper = $__13.ListWrapper;
	var $__14 = ($__angular2_47_src_47_facade_47_async__ = __webpack_require__(58), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
	    Promise = $__14.Promise,
	    PromiseWrapper = $__14.PromiseWrapper;
	var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = __webpack_require__(59), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
	var LifeCycle = ($__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ = __webpack_require__(60), $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__.__esModule && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ || {default: $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__}).LifeCycle;
	var $__17 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = __webpack_require__(61), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}),
	    ShadowDomStrategy = $__17.ShadowDomStrategy,
	    NativeShadowDomStrategy = $__17.NativeShadowDomStrategy;
	var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = __webpack_require__(62), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
	var XHRImpl = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ = __webpack_require__(63), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__}).XHRImpl;
	var $__20 = ($__angular2_47_src_47_core_47_events_47_event_95_manager__ = __webpack_require__(64), $__angular2_47_src_47_core_47_events_47_event_95_manager__ && $__angular2_47_src_47_core_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_core_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_core_47_events_47_event_95_manager__}),
	    EventManager = $__20.EventManager,
	    DomEventsPlugin = $__20.DomEventsPlugin;
	var HammerGesturesPlugin = ($__angular2_47_src_47_core_47_events_47_hammer_95_gestures__ = __webpack_require__(65), $__angular2_47_src_47_core_47_events_47_hammer_95_gestures__ && $__angular2_47_src_47_core_47_events_47_hammer_95_gestures__.__esModule && $__angular2_47_src_47_core_47_events_47_hammer_95_gestures__ || {default: $__angular2_47_src_47_core_47_events_47_hammer_95_gestures__}).HammerGesturesPlugin;
	var Binding = ($__angular2_47_src_47_di_47_binding__ = __webpack_require__(66), $__angular2_47_src_47_di_47_binding__ && $__angular2_47_src_47_di_47_binding__.__esModule && $__angular2_47_src_47_di_47_binding__ || {default: $__angular2_47_src_47_di_47_binding__}).Binding;
	var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = __webpack_require__(67), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
	var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = __webpack_require__(68), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
	var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = __webpack_require__(69), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
	var StyleInliner = ($__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ = __webpack_require__(70), $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__}).StyleInliner;
	var _rootInjector;
	var _rootBindings = [bind(Reflector).toValue(reflector)];
	var appViewToken = new OpaqueToken('AppView');
	var appChangeDetectorToken = new OpaqueToken('AppChangeDetector');
	var appElementToken = new OpaqueToken('AppElement');
	var appComponentAnnotatedTypeToken = new OpaqueToken('AppComponentAnnotatedType');
	var appDocumentToken = new OpaqueToken('AppDocument');
	function _injectorBindings(appComponentType) {
	  return assert.returnType(([bind(appDocumentToken).toValue(DOM.defaultDoc()), bind(appComponentAnnotatedTypeToken).toFactory((function(reader) {
	    return reader.read(appComponentType);
	  }), [DirectiveMetadataReader]), bind(appElementToken).toFactory((function(appComponentAnnotatedType, appDocument) {
	    var selector = appComponentAnnotatedType.annotation.selector;
	    var element = DOM.querySelector(appDocument, selector);
	    if (isBlank(element)) {
	      throw new BaseException(("The app selector \"" + selector + "\" did not match any elements"));
	    }
	    return element;
	  }), [appComponentAnnotatedTypeToken, appDocumentToken]), bind(appViewToken).toAsyncFactory((function(changeDetection, compiler, injector, appElement, appComponentAnnotatedType, strategy, eventManager) {
	    return compiler.compile(appComponentAnnotatedType.type).then((function(protoView) {
	      var appProtoView = ProtoView.createRootProtoView(protoView, appElement, appComponentAnnotatedType, changeDetection.createProtoChangeDetector('root'), strategy);
	      var view = appProtoView.instantiate(null, eventManager);
	      view.hydrate(injector, null, new Object());
	      return view;
	    }));
	  }), [ChangeDetection, Compiler, Injector, appElementToken, appComponentAnnotatedTypeToken, ShadowDomStrategy, EventManager]), bind(appChangeDetectorToken).toFactory((function(rootView) {
	    return rootView.changeDetector;
	  }), [appViewToken]), bind(appComponentType).toFactory((function(rootView) {
	    return rootView.elementInjectors[0].getComponent();
	  }), [appViewToken]), bind(LifeCycle).toFactory((function(exceptionHandler) {
	    return new LifeCycle(exceptionHandler, null, assertionsEnabled());
	  }), [ExceptionHandler]), bind(EventManager).toFactory((function(zone) {
	    var plugins = [new HammerGesturesPlugin(), new DomEventsPlugin()];
	    return new EventManager(plugins, zone);
	  }), [VmTurnZone]), bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy), Compiler, CompilerCache, TemplateResolver, bind(ChangeDetection).toValue(dynamicChangeDetection), TemplateLoader, DirectiveMetadataReader, Parser, Lexer, ExceptionHandler, bind(XHR).toValue(new XHRImpl()), ComponentUrlMapper, UrlResolver, StyleUrlResolver, StyleInliner]), assert.genericType(List, Binding));
	}
	function _createVmZone(givenReporter) {
	  assert.argumentTypes(givenReporter, Function);
	  var defaultErrorReporter = (function(exception, stackTrace) {
	    var longStackTrace = ListWrapper.join(stackTrace, "\n\n-----async gap-----\n");
	    print((exception + "\n\n" + longStackTrace));
	    throw exception;
	  });
	  var reporter = isPresent(givenReporter) ? givenReporter : defaultErrorReporter;
	  var zone = new VmTurnZone({enableLongStackTrace: assertionsEnabled()});
	  zone.initCallbacks({onErrorHandler: reporter});
	  return assert.returnType((zone), VmTurnZone);
	}
	Object.defineProperty(_createVmZone, "parameters", {get: function() {
	    return [[Function]];
	  }});
	function bootstrap(appComponentType) {
	  var bindings = arguments[1] !== (void 0) ? arguments[1] : null;
	  var givenBootstrapErrorReporter = arguments[2] !== (void 0) ? arguments[2] : null;
	  assert.argumentTypes(appComponentType, Type, bindings, assert.genericType(List, Binding), givenBootstrapErrorReporter, Function);
	  BrowserDomAdapter.makeCurrent();
	  var bootstrapProcess = PromiseWrapper.completer();
	  var zone = _createVmZone(givenBootstrapErrorReporter);
	  zone.run((function() {
	    var appInjector = _createAppInjector(appComponentType, bindings, zone);
	    PromiseWrapper.then(appInjector.asyncGet(appViewToken), (function(rootView) {
	      var lc = appInjector.get(LifeCycle);
	      lc.registerWith(zone, rootView.changeDetector);
	      lc.tick();
	      bootstrapProcess.resolve(appInjector);
	    }), (function(err) {
	      bootstrapProcess.reject(err);
	    }));
	  }));
	  return assert.returnType((bootstrapProcess.promise), Promise);
	}
	Object.defineProperty(bootstrap, "parameters", {get: function() {
	    return [[Type], [assert.genericType(List, Binding)], [Function]];
	  }});
	function _createAppInjector(appComponentType, bindings, zone) {
	  assert.argumentTypes(appComponentType, Type, bindings, assert.genericType(List, Binding), zone, VmTurnZone);
	  if (isBlank(_rootInjector))
	    _rootInjector = new Injector(_rootBindings);
	  var mergedBindings = isPresent(bindings) ? ListWrapper.concat(_injectorBindings(appComponentType), bindings) : _injectorBindings(appComponentType);
	  ListWrapper.push(mergedBindings, bind(VmTurnZone).toValue(zone));
	  return assert.returnType((_rootInjector.createChild(mergedBindings)), Injector);
	}
	Object.defineProperty(_createAppInjector, "parameters", {get: function() {
	    return [[Type], [assert.genericType(List, Binding)], [VmTurnZone]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/application.map
	
	//# sourceMappingURL=./application.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Directive: {get: function() {
	      return Directive;
	    }},
	  Component: {get: function() {
	      return Component;
	    }},
	  Decorator: {get: function() {
	      return Decorator;
	    }},
	  Viewport: {get: function() {
	      return Viewport;
	    }},
	  onDestroy: {get: function() {
	      return onDestroy;
	    }},
	  onChange: {get: function() {
	      return onChange;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/annotations/annotations";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    ABSTRACT = $__1.ABSTRACT,
	    CONST = $__1.CONST,
	    normalizeBlank = $__1.normalizeBlank,
	    isPresent = $__1.isPresent;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    ListWrapper = $__2.ListWrapper,
	    List = $__2.List;
	var Directive = function Directive() {
	  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
	      selector = $__4.selector,
	      bind = $__4.bind,
	      lightDomServices = $__4.lightDomServices,
	      implementsTypes = $__4.implementsTypes,
	      lifecycle = $__4.lifecycle;
	  this.selector = selector;
	  this.lightDomServices = lightDomServices;
	  this.implementsTypes = implementsTypes;
	  this.bind = bind;
	  this.lifecycle = lifecycle;
	};
	($traceurRuntime.createClass)(Directive, {hasLifecycleHook: function(hook) {
	    assert.argumentTypes(hook, assert.type.string);
	    return assert.returnType((isPresent(this.lifecycle) ? ListWrapper.contains(this.lifecycle, hook) : false), assert.type.boolean);
	  }}, {});
	Object.defineProperty(Directive, "annotations", {get: function() {
	    return [new ABSTRACT(), new CONST()];
	  }});
	Object.defineProperty(Directive.prototype.hasLifecycleHook, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var Component = function Component() {
	  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
	      selector = $__4.selector,
	      bind = $__4.bind,
	      lightDomServices = $__4.lightDomServices,
	      shadowDomServices = $__4.shadowDomServices,
	      componentServices = $__4.componentServices,
	      implementsTypes = $__4.implementsTypes,
	      lifecycle = $__4.lifecycle;
	  $traceurRuntime.superConstructor($Component).call(this, {
	    selector: selector,
	    bind: bind,
	    lightDomServices: lightDomServices,
	    implementsTypes: implementsTypes,
	    lifecycle: lifecycle
	  });
	  this.lightDomServices = lightDomServices;
	  this.shadowDomServices = shadowDomServices;
	  this.componentServices = componentServices;
	  this.lifecycle = lifecycle;
	};
	var $Component = Component;
	($traceurRuntime.createClass)(Component, {}, {}, Directive);
	Object.defineProperty(Component, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	var Decorator = function Decorator() {
	  var $__5;
	  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
	      selector = $__4.selector,
	      bind = $__4.bind,
	      lightDomServices = $__4.lightDomServices,
	      implementsTypes = $__4.implementsTypes,
	      lifecycle = $__4.lifecycle,
	      compileChildren = ($__5 = $__4.compileChildren) === void 0 ? true : $__5;
	  this.compileChildren = compileChildren;
	  $traceurRuntime.superConstructor($Decorator).call(this, {
	    selector: selector,
	    bind: bind,
	    lightDomServices: lightDomServices,
	    implementsTypes: implementsTypes,
	    lifecycle: lifecycle
	  });
	};
	var $Decorator = Decorator;
	($traceurRuntime.createClass)(Decorator, {}, {}, Directive);
	Object.defineProperty(Decorator, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	var Viewport = function Viewport() {
	  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
	      selector = $__4.selector,
	      bind = $__4.bind,
	      lightDomServices = $__4.lightDomServices,
	      implementsTypes = $__4.implementsTypes,
	      lifecycle = $__4.lifecycle;
	  $traceurRuntime.superConstructor($Viewport).call(this, {
	    selector: selector,
	    bind: bind,
	    lightDomServices: lightDomServices,
	    implementsTypes: implementsTypes,
	    lifecycle: lifecycle
	  });
	};
	var $Viewport = Viewport;
	($traceurRuntime.createClass)(Viewport, {}, {}, Directive);
	Object.defineProperty(Viewport, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	var onDestroy = "onDestroy";
	var onChange = "onChange";
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/annotations/annotations.map
	
	//# sourceMappingURL=./annotations.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Parent: {get: function() {
	      return Parent;
	    }},
	  Ancestor: {get: function() {
	      return Ancestor;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/annotations/visibility";
	var $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_di__;
	var CONST = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).CONST;
	var DependencyAnnotation = ($__angular2_47_di__ = __webpack_require__(52), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).DependencyAnnotation;
	var Parent = function Parent() {
	  $traceurRuntime.superConstructor($Parent).call(this);
	};
	var $Parent = Parent;
	($traceurRuntime.createClass)(Parent, {}, {}, DependencyAnnotation);
	Object.defineProperty(Parent, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	var Ancestor = function Ancestor() {
	  $traceurRuntime.superConstructor($Ancestor).call(this);
	};
	var $Ancestor = Ancestor;
	($traceurRuntime.createClass)(Ancestor, {}, {}, DependencyAnnotation);
	Object.defineProperty(Ancestor, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/annotations/visibility.map
	
	//# sourceMappingURL=./visibility.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Template: {get: function() {
	      return Template;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/annotations/template";
	var $__angular2_47_src_47_facade_47_lang__;
	var $__0 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    ABSTRACT = $__0.ABSTRACT,
	    CONST = $__0.CONST,
	    Type = $__0.Type;
	var Template = function Template($__2) {
	  var $__3 = $__2,
	      url = $__3.url,
	      inline = $__3.inline,
	      directives = $__3.directives,
	      formatters = $__3.formatters,
	      source = $__3.source,
	      locale = $__3.locale,
	      device = $__3.device;
	  this.url = url;
	  this.inline = inline;
	  this.directives = directives;
	  this.formatters = formatters;
	  this.source = source;
	  this.locale = locale;
	  this.device = device;
	};
	($traceurRuntime.createClass)(Template, {}, {});
	Object.defineProperty(Template, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/annotations/template.map
	
	//# sourceMappingURL=./template.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  OnChange: {get: function() {
	      return OnChange;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/interfaces";
	var OnChange = function OnChange() {};
	($traceurRuntime.createClass)(OnChange, {onChange: function(changes) {
	    throw "OnChange.onChange is not implemented";
	  }}, {});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/interfaces.map
	
	//# sourceMappingURL=./interfaces.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  CompilerCache: {get: function() {
	      return CompilerCache;
	    }},
	  Compiler: {get: function() {
	      return Compiler;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/compiler";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_async__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_change_95_detection__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
	    $__angular2_47_src_47_core_47_compiler_47_view__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_default_95_steps__,
	    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
	    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
	    $__angular2_47_src_47_core_47_annotations_47_template__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
	    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
	    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    Type = $__1.Type,
	    isBlank = $__1.isBlank,
	    isPresent = $__1.isPresent,
	    BaseException = $__1.BaseException,
	    normalizeBlank = $__1.normalizeBlank,
	    stringify = $__1.stringify;
	var $__2 = ($__angular2_47_src_47_facade_47_async__ = __webpack_require__(58), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
	    Promise = $__2.Promise,
	    PromiseWrapper = $__2.PromiseWrapper;
	var $__3 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__3.List,
	    ListWrapper = $__3.ListWrapper,
	    Map = $__3.Map,
	    MapWrapper = $__3.MapWrapper;
	var $__4 = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
	    ChangeDetection = $__4.ChangeDetection,
	    Parser = $__4.Parser;
	var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = __webpack_require__(57), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
	var ProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = __webpack_require__(31), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).ProtoView;
	var CompilePipeline = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ = __webpack_require__(71), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__}).CompilePipeline;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var createDefaultSteps = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_default_95_steps__ = __webpack_require__(73), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_default_95_steps__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_default_95_steps__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_default_95_steps__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_default_95_steps__}).createDefaultSteps;
	var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = __webpack_require__(30), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
	var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = __webpack_require__(56), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
	var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = __webpack_require__(74), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
	var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = __webpack_require__(27), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
	var ShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = __webpack_require__(61), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = __webpack_require__(67), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
	var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = __webpack_require__(68), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
	var CompilerCache = function CompilerCache() {
	  this._cache = MapWrapper.create();
	};
	($traceurRuntime.createClass)(CompilerCache, {
	  set: function(component, protoView) {
	    assert.argumentTypes(component, Type, protoView, ProtoView);
	    MapWrapper.set(this._cache, component, protoView);
	  },
	  get: function(component) {
	    assert.argumentTypes(component, Type);
	    var result = MapWrapper.get(this._cache, component);
	    return assert.returnType((normalizeBlank(result)), ProtoView);
	  },
	  clear: function() {
	    MapWrapper.clear(this._cache);
	  }
	}, {});
	Object.defineProperty(CompilerCache.prototype.set, "parameters", {get: function() {
	    return [[Type], [ProtoView]];
	  }});
	Object.defineProperty(CompilerCache.prototype.get, "parameters", {get: function() {
	    return [[Type]];
	  }});
	var Compiler = function Compiler(changeDetection, templateLoader, reader, parser, cache, shadowDomStrategy, templateResolver, componentUrlMapper, urlResolver) {
	  assert.argumentTypes(changeDetection, ChangeDetection, templateLoader, TemplateLoader, reader, DirectiveMetadataReader, parser, Parser, cache, CompilerCache, shadowDomStrategy, ShadowDomStrategy, templateResolver, TemplateResolver, componentUrlMapper, ComponentUrlMapper, urlResolver, UrlResolver);
	  this._changeDetection = changeDetection;
	  this._reader = reader;
	  this._parser = parser;
	  this._compilerCache = cache;
	  this._templateLoader = templateLoader;
	  this._compiling = MapWrapper.create();
	  this._shadowDomStrategy = shadowDomStrategy;
	  this._shadowDomDirectives = [];
	  var types = shadowDomStrategy.polyfillDirectives();
	  for (var i = 0; i < types.length; i++) {
	    ListWrapper.push(this._shadowDomDirectives, reader.read(types[i]));
	  }
	  this._templateResolver = templateResolver;
	  this._componentUrlMapper = componentUrlMapper;
	  this._urlResolver = urlResolver;
	  this._appUrl = urlResolver.resolve(null, './');
	};
	($traceurRuntime.createClass)(Compiler, {
	  createSteps: function(component, template) {
	    var $__18 = this;
	    var dirMetadata = [];
	    var tplMetadata = ListWrapper.map(this._flattenDirectives(template), (function(d) {
	      return $__18._reader.read(d);
	    }));
	    dirMetadata = ListWrapper.concat(dirMetadata, tplMetadata);
	    dirMetadata = ListWrapper.concat(dirMetadata, this._shadowDomDirectives);
	    var cmpMetadata = this._reader.read(component);
	    var templateUrl = this._templateLoader.getTemplateUrl(template);
	    return assert.returnType((createDefaultSteps(this._changeDetection, this._parser, cmpMetadata, dirMetadata, this._shadowDomStrategy, templateUrl)), assert.genericType(List, CompileStep));
	  },
	  compile: function(component) {
	    assert.argumentTypes(component, Type);
	    var protoView = this._compile(component);
	    return assert.returnType((PromiseWrapper.isPromise(protoView) ? protoView : PromiseWrapper.resolve(protoView)), assert.genericType(Promise, ProtoView));
	  },
	  _compile: function(component) {
	    var $__18 = this;
	    var protoView = this._compilerCache.get(component);
	    if (isPresent(protoView)) {
	      return protoView;
	    }
	    var pvPromise = MapWrapper.get(this._compiling, component);
	    if (isPresent(pvPromise)) {
	      return pvPromise;
	    }
	    var template = this._templateResolver.resolve(component);
	    var componentUrl = this._componentUrlMapper.getUrl(component);
	    var baseUrl = this._urlResolver.resolve(this._appUrl, componentUrl);
	    this._templateLoader.setBaseUrl(template, baseUrl);
	    var tplElement = this._templateLoader.load(template);
	    if (PromiseWrapper.isPromise(tplElement)) {
	      pvPromise = PromiseWrapper.then(tplElement, (function(el) {
	        return $__18._compileTemplate(template, el, component);
	      }), (function(_) {
	        throw new BaseException(("Failed to load the template for " + stringify(component)));
	      }));
	      MapWrapper.set(this._compiling, component, pvPromise);
	      return pvPromise;
	    }
	    return this._compileTemplate(template, tplElement, component);
	  },
	  _compileTemplate: function(template, tplElement, component) {
	    var pipeline = new CompilePipeline(this.createSteps(component, template));
	    var compilationCtxtDescription = stringify(this._reader.read(component).type);
	    var compileElements;
	    try {
	      compileElements = pipeline.process(tplElement, compilationCtxtDescription);
	    } catch (ex) {
	      return PromiseWrapper.reject(ex);
	    }
	    var protoView = compileElements[0].inheritedProtoView;
	    this._compilerCache.set(component, protoView);
	    MapWrapper.delete(this._compiling, component);
	    var nestedPVPromises = [];
	    for (var i = 0; i < compileElements.length; i++) {
	      var ce = compileElements[i];
	      if (isPresent(ce.componentDirective)) {
	        this._compileNestedProtoView(ce, nestedPVPromises);
	      }
	    }
	    if (protoView.stylePromises.length > 0) {
	      var syncProtoView = protoView;
	      protoView = PromiseWrapper.all(syncProtoView.stylePromises).then((function(_) {
	        return syncProtoView;
	      }));
	    }
	    if (nestedPVPromises.length > 0) {
	      return PromiseWrapper.then(PromiseWrapper.all(nestedPVPromises), (function(_) {
	        return protoView;
	      }), (function(e) {
	        throw new BaseException((e.message + " -> Failed to compile " + stringify(component)));
	      }));
	    }
	    return protoView;
	  },
	  _compileNestedProtoView: function(ce, promises) {
	    assert.argumentTypes(ce, CompileElement, promises, assert.genericType(List, Promise));
	    var protoView = this._compile(ce.componentDirective.type);
	    if (PromiseWrapper.isPromise(protoView)) {
	      ListWrapper.push(promises, protoView);
	      protoView.then(function(protoView) {
	        ce.inheritedElementBinder.nestedProtoView = protoView;
	      });
	    } else {
	      ce.inheritedElementBinder.nestedProtoView = protoView;
	    }
	  },
	  _flattenDirectives: function(template) {
	    assert.argumentTypes(template, Template);
	    if (isBlank(template.directives))
	      return assert.returnType(([]), assert.genericType(List, Type));
	    var directives = [];
	    this._flattenList(template.directives, directives);
	    return assert.returnType((directives), assert.genericType(List, Type));
	  },
	  _flattenList: function(tree, out) {
	    assert.argumentTypes(tree, assert.genericType(List, assert.type.any), out, assert.genericType(List, Type));
	    for (var i = 0; i < tree.length; i++) {
	      var item = tree[i];
	      if (ListWrapper.isList(item)) {
	        this._flattenList(item, out);
	      } else {
	        ListWrapper.push(out, item);
	      }
	    }
	  }
	}, {});
	Object.defineProperty(Compiler, "parameters", {get: function() {
	    return [[ChangeDetection], [TemplateLoader], [DirectiveMetadataReader], [Parser], [CompilerCache], [ShadowDomStrategy], [TemplateResolver], [ComponentUrlMapper], [UrlResolver]];
	  }});
	Object.defineProperty(Compiler.prototype.createSteps, "parameters", {get: function() {
	    return [[Type], [Template]];
	  }});
	Object.defineProperty(Compiler.prototype.compile, "parameters", {get: function() {
	    return [[Type]];
	  }});
	Object.defineProperty(Compiler.prototype._compile, "parameters", {get: function() {
	    return [[Type]];
	  }});
	Object.defineProperty(Compiler.prototype._compileTemplate, "parameters", {get: function() {
	    return [[Template], [], [Type]];
	  }});
	Object.defineProperty(Compiler.prototype._compileNestedProtoView, "parameters", {get: function() {
	    return [[CompileElement], [assert.genericType(List, Promise)]];
	  }});
	Object.defineProperty(Compiler.prototype._flattenDirectives, "parameters", {get: function() {
	    return [[Template]];
	  }});
	Object.defineProperty(Compiler.prototype._flattenList, "parameters", {get: function() {
	    return [[assert.genericType(List, assert.type.any)], [assert.genericType(List, Type)]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/compiler.map
	
	//# sourceMappingURL=./compiler.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  TemplateLoader: {get: function() {
	      return TemplateLoader;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/template_loader";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__,
	    $__angular2_47_src_47_core_47_annotations_47_template__,
	    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isBlank = $__1.isBlank,
	    isPresent = $__1.isPresent,
	    BaseException = $__1.BaseException,
	    stringify = $__1.stringify;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    Map = $__2.Map,
	    MapWrapper = $__2.MapWrapper,
	    StringMapWrapper = $__2.StringMapWrapper,
	    StringMap = $__2.StringMap;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = __webpack_require__(62), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
	var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = __webpack_require__(27), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
	var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = __webpack_require__(68), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
	var TemplateLoader = function TemplateLoader(xhr, urlResolver) {
	  assert.argumentTypes(xhr, XHR, urlResolver, UrlResolver);
	  this._xhr = xhr;
	  this._urlResolver = urlResolver;
	  this._htmlCache = StringMapWrapper.create();
	  this._baseUrls = MapWrapper.create();
	  this._urlCache = MapWrapper.create();
	};
	($traceurRuntime.createClass)(TemplateLoader, {
	  load: function(template) {
	    assert.argumentTypes(template, Template);
	    if (isPresent(template.inline)) {
	      return DOM.createTemplate(template.inline);
	    }
	    if (isPresent(template.url)) {
	      var url = this.getTemplateUrl(template);
	      var promise = StringMapWrapper.get(this._htmlCache, url);
	      if (isBlank(promise)) {
	        promise = this._xhr.get(url).then(function(html) {
	          var template = DOM.createTemplate(html);
	          return template;
	        });
	        StringMapWrapper.set(this._htmlCache, url, promise);
	      }
	      return promise;
	    }
	    throw new BaseException('Templates should have either their url or inline property set');
	  },
	  setBaseUrl: function(template, baseUrl) {
	    assert.argumentTypes(template, Template, baseUrl, assert.type.string);
	    MapWrapper.set(this._baseUrls, template, baseUrl);
	    MapWrapper.delete(this._urlCache, template);
	  },
	  getTemplateUrl: function(template) {
	    assert.argumentTypes(template, Template);
	    if (!MapWrapper.contains(this._urlCache, template)) {
	      var baseUrl = MapWrapper.get(this._baseUrls, template);
	      if (isBlank(baseUrl)) {
	        throw new BaseException('The template base URL is not set');
	      }
	      var templateUrl;
	      if (isPresent(template.url)) {
	        templateUrl = this._urlResolver.resolve(baseUrl, template.url);
	      } else {
	        templateUrl = baseUrl;
	      }
	      MapWrapper.set(this._urlCache, template, templateUrl);
	    }
	    return MapWrapper.get(this._urlCache, template);
	  }
	}, {});
	Object.defineProperty(TemplateLoader, "parameters", {get: function() {
	    return [[XHR], [UrlResolver]];
	  }});
	Object.defineProperty(TemplateLoader.prototype.load, "parameters", {get: function() {
	    return [[Template]];
	  }});
	Object.defineProperty(TemplateLoader.prototype.setBaseUrl, "parameters", {get: function() {
	    return [[Template], [assert.type.string]];
	  }});
	Object.defineProperty(TemplateLoader.prototype.getTemplateUrl, "parameters", {get: function() {
	    return [[Template]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/template_loader.map
	
	//# sourceMappingURL=./template_loader.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  View: {get: function() {
	      return View;
	    }},
	  ProtoView: {get: function() {
	      return ProtoView;
	    }},
	  ElementBindingMemento: {get: function() {
	      return ElementBindingMemento;
	    }},
	  DirectiveBindingMemento: {get: function() {
	      return DirectiveBindingMemento;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/view";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_async__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_change_95_detection__,
	    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
	    $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__,
	    $__angular2_47_src_47_core_47_compiler_47_element_95_binder__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
	    $__angular2_47_src_47_reflection_47_types__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_di__,
	    $__angular2_47_src_47_core_47_dom_47_element__,
	    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
	    $__angular2_47_src_47_core_47_compiler_47_view_95_pool__,
	    $__angular2_47_src_47_core_47_events_47_event_95_manager__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var Promise = ($__angular2_47_src_47_facade_47_async__ = __webpack_require__(58), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
	var $__3 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    ListWrapper = $__3.ListWrapper,
	    MapWrapper = $__3.MapWrapper,
	    StringMapWrapper = $__3.StringMapWrapper,
	    List = $__3.List;
	var $__4 = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
	    AST = $__4.AST,
	    ContextWithVariableBindings = $__4.ContextWithVariableBindings,
	    ChangeDispatcher = $__4.ChangeDispatcher,
	    ProtoChangeDetector = $__4.ProtoChangeDetector,
	    ChangeDetector = $__4.ChangeDetector,
	    ChangeRecord = $__4.ChangeRecord;
	var $__5 = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = __webpack_require__(76), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}),
	    ProtoElementInjector = $__5.ProtoElementInjector,
	    ElementInjector = $__5.ElementInjector,
	    PreBuiltObjects = $__5.PreBuiltObjects;
	var BindingPropagationConfig = ($__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ = __webpack_require__(33), $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ && $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__.__esModule && $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ || {default: $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__}).BindingPropagationConfig;
	var ElementBinder = ($__angular2_47_src_47_core_47_compiler_47_element_95_binder__ = __webpack_require__(77), $__angular2_47_src_47_core_47_compiler_47_element_95_binder__ && $__angular2_47_src_47_core_47_compiler_47_element_95_binder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_binder__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_binder__}).ElementBinder;
	var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = __webpack_require__(74), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
	var SetterFn = ($__angular2_47_src_47_reflection_47_types__ = __webpack_require__(78), $__angular2_47_src_47_reflection_47_types__ && $__angular2_47_src_47_reflection_47_types__.__esModule && $__angular2_47_src_47_reflection_47_types__ || {default: $__angular2_47_src_47_reflection_47_types__}).SetterFn;
	var $__10 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    FIELD = $__10.FIELD,
	    IMPLEMENTS = $__10.IMPLEMENTS,
	    int = $__10.int,
	    isPresent = $__10.isPresent,
	    isBlank = $__10.isBlank,
	    BaseException = $__10.BaseException;
	var Injector = ($__angular2_47_di__ = __webpack_require__(52), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
	var NgElement = ($__angular2_47_src_47_core_47_dom_47_element__ = __webpack_require__(34), $__angular2_47_src_47_core_47_dom_47_element__ && $__angular2_47_src_47_core_47_dom_47_element__.__esModule && $__angular2_47_src_47_core_47_dom_47_element__ || {default: $__angular2_47_src_47_core_47_dom_47_element__}).NgElement;
	var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = __webpack_require__(32), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
	var $__14 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = __webpack_require__(79), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__}),
	    LightDom = $__14.LightDom,
	    DestinationLightDom = $__14.DestinationLightDom;
	var ShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = __webpack_require__(61), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
	var ViewPool = ($__angular2_47_src_47_core_47_compiler_47_view_95_pool__ = __webpack_require__(80), $__angular2_47_src_47_core_47_compiler_47_view_95_pool__ && $__angular2_47_src_47_core_47_compiler_47_view_95_pool__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_pool__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_pool__}).ViewPool;
	var EventManager = ($__angular2_47_src_47_core_47_events_47_event_95_manager__ = __webpack_require__(64), $__angular2_47_src_47_core_47_events_47_event_95_manager__ && $__angular2_47_src_47_core_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_core_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_core_47_events_47_event_95_manager__}).EventManager;
	var NG_BINDING_CLASS = 'ng-binding';
	var NG_BINDING_CLASS_SELECTOR = '.ng-binding';
	var VIEW_POOL_CAPACITY = 10000;
	var VIEW_POOL_PREFILL = 0;
	var View = function View(proto, nodes, protoChangeDetector, protoContextLocals) {
	  assert.argumentTypes(proto, ProtoView, nodes, List, protoChangeDetector, ProtoChangeDetector, protoContextLocals, Map);
	  this.proto = proto;
	  this.nodes = nodes;
	  this.changeDetector = protoChangeDetector.instantiate(this);
	  this.elementInjectors = null;
	  this.rootElementInjectors = null;
	  this.textNodes = null;
	  this.bindElements = null;
	  this.componentChildViews = null;
	  this.viewContainers = null;
	  this.preBuiltObjects = null;
	  this.context = null;
	  this.contextWithLocals = (MapWrapper.size(protoContextLocals) > 0) ? new ContextWithVariableBindings(null, MapWrapper.clone(protoContextLocals)) : null;
	};
	($traceurRuntime.createClass)(View, {
	  init: function(elementInjectors, rootElementInjectors, textNodes, bindElements, viewContainers, preBuiltObjects, componentChildViews) {
	    assert.argumentTypes(elementInjectors, List, rootElementInjectors, List, textNodes, List, bindElements, List, viewContainers, List, preBuiltObjects, List, componentChildViews, List);
	    this.elementInjectors = elementInjectors;
	    this.rootElementInjectors = rootElementInjectors;
	    this.textNodes = textNodes;
	    this.bindElements = bindElements;
	    this.viewContainers = viewContainers;
	    this.preBuiltObjects = preBuiltObjects;
	    this.componentChildViews = componentChildViews;
	  },
	  setLocal: function(contextName, value) {
	    assert.argumentTypes(contextName, assert.type.string, value, assert.type.any);
	    if (!this.hydrated())
	      throw new BaseException('Cannot set locals on dehydrated view.');
	    if (!MapWrapper.contains(this.proto.variableBindings, contextName)) {
	      return ;
	    }
	    var templateName = MapWrapper.get(this.proto.variableBindings, contextName);
	    this.context.set(templateName, value);
	  },
	  hydrated: function() {
	    return isPresent(this.context);
	  },
	  _hydrateContext: function(newContext) {
	    if (isPresent(this.contextWithLocals)) {
	      this.contextWithLocals.parent = newContext;
	      this.context = this.contextWithLocals;
	    } else {
	      this.context = newContext;
	    }
	    this.changeDetector.setContext(this.context);
	  },
	  _dehydrateContext: function() {
	    if (isPresent(this.contextWithLocals)) {
	      this.contextWithLocals.clearValues();
	    }
	    this.context = null;
	  },
	  hydrate: function(appInjector, hostElementInjector, context) {
	    assert.argumentTypes(appInjector, Injector, hostElementInjector, ElementInjector, context, Object);
	    if (this.hydrated())
	      throw new BaseException('The view is already hydrated.');
	    this._hydrateContext(context);
	    for (var i = 0; i < this.viewContainers.length; i++) {
	      this.viewContainers[i].hydrate(appInjector, hostElementInjector);
	    }
	    var binders = this.proto.elementBinders;
	    var componentChildViewIndex = 0;
	    for (var i = 0; i < binders.length; ++i) {
	      var componentDirective = binders[i].componentDirective;
	      var shadowDomAppInjector = null;
	      if (isPresent(componentDirective)) {
	        var services = componentDirective.annotation.componentServices;
	        if (isPresent(services))
	          shadowDomAppInjector = appInjector.createChild(services);
	        else {
	          shadowDomAppInjector = appInjector;
	        }
	      } else {
	        shadowDomAppInjector = null;
	      }
	      var elementInjector = this.elementInjectors[i];
	      if (isPresent(elementInjector)) {
	        elementInjector.instantiateDirectives(appInjector, shadowDomAppInjector, this.preBuiltObjects[i]);
	        var exportImplicitName = elementInjector.getExportImplicitName();
	        if (elementInjector.isExportingComponent()) {
	          this.context.set(exportImplicitName, elementInjector.getComponent());
	        } else if (elementInjector.isExportingElement()) {
	          this.context.set(exportImplicitName, elementInjector.getNgElement().domElement);
	        }
	      }
	      if (isPresent(componentDirective)) {
	        this.componentChildViews[componentChildViewIndex++].hydrate(shadowDomAppInjector, elementInjector, elementInjector.getComponent());
	      }
	    }
	    for (var i = 0; i < binders.length; ++i) {
	      var componentDirective = binders[i].componentDirective;
	      if (isPresent(componentDirective)) {
	        var lightDom = this.preBuiltObjects[i].lightDom;
	        if (isPresent(lightDom)) {
	          lightDom.redistribute();
	        }
	      }
	    }
	  },
	  dehydrate: function() {
	    for (var i = 0; i < this.componentChildViews.length; i++) {
	      this.componentChildViews[i].dehydrate();
	    }
	    for (var i = 0; i < this.elementInjectors.length; i++) {
	      if (isPresent(this.elementInjectors[i])) {
	        this.elementInjectors[i].clearDirectives();
	      }
	    }
	    if (isPresent(this.viewContainers)) {
	      for (var i = 0; i < this.viewContainers.length; i++) {
	        this.viewContainers[i].dehydrate();
	      }
	    }
	    this._dehydrateContext();
	  },
	  onRecordChange: function(directiveMemento, records) {
	    assert.argumentTypes(directiveMemento, assert.type.any, records, List);
	    this._invokeMementos(records);
	    if (directiveMemento instanceof DirectiveMemento) {
	      this._notifyDirectiveAboutChanges(directiveMemento, records);
	    }
	  },
	  _invokeMementos: function(records) {
	    assert.argumentTypes(records, List);
	    for (var i = 0; i < records.length; ++i) {
	      this._invokeMementoFor(records[i]);
	    }
	  },
	  _notifyDirectiveAboutChanges: function(directiveMemento, records) {
	    assert.argumentTypes(directiveMemento, assert.type.any, records, List);
	    var dir = directiveMemento.directive(this.elementInjectors);
	    var binding = directiveMemento.directiveBinding(this.elementInjectors);
	    if (binding.callOnChange) {
	      dir.onChange(this._collectChanges(records));
	    }
	  },
	  _invokeMementoFor: function(record) {
	    assert.argumentTypes(record, ChangeRecord);
	    var memento = record.bindingMemento;
	    if (memento instanceof DirectiveBindingMemento) {
	      var directiveMemento = assert.type(memento, DirectiveBindingMemento);
	      directiveMemento.invoke(record, this.elementInjectors);
	    } else if (memento instanceof ElementBindingMemento) {
	      var elementMemento = assert.type(memento, ElementBindingMemento);
	      elementMemento.invoke(record, this.bindElements);
	    } else {
	      var textNodeIndex = assert.type(memento, assert.type.number);
	      DOM.setText(this.textNodes[textNodeIndex], record.currentValue);
	    }
	  },
	  _collectChanges: function(records) {
	    assert.argumentTypes(records, List);
	    var changes = StringMapWrapper.create();
	    for (var i = 0; i < records.length; ++i) {
	      var record = records[i];
	      var propertyUpdate = new PropertyUpdate(record.currentValue, record.previousValue);
	      StringMapWrapper.set(changes, record.bindingMemento._setterName, propertyUpdate);
	    }
	    return changes;
	  }
	}, {});
	Object.defineProperty(View, "annotations", {get: function() {
	    return [new IMPLEMENTS(ChangeDispatcher)];
	  }});
	Object.defineProperty(View, "parameters", {get: function() {
	    return [[ProtoView], [List], [ProtoChangeDetector], [Map]];
	  }});
	Object.defineProperty(View.prototype.init, "parameters", {get: function() {
	    return [[List], [List], [List], [List], [List], [List], [List]];
	  }});
	Object.defineProperty(View.prototype.setLocal, "parameters", {get: function() {
	    return [[assert.type.string], []];
	  }});
	Object.defineProperty(View.prototype.hydrate, "parameters", {get: function() {
	    return [[Injector], [ElementInjector], [Object]];
	  }});
	Object.defineProperty(View.prototype.onRecordChange, "parameters", {get: function() {
	    return [[], [List]];
	  }});
	Object.defineProperty(View.prototype._invokeMementos, "parameters", {get: function() {
	    return [[List]];
	  }});
	Object.defineProperty(View.prototype._notifyDirectiveAboutChanges, "parameters", {get: function() {
	    return [[], [List]];
	  }});
	Object.defineProperty(View.prototype._invokeMementoFor, "parameters", {get: function() {
	    return [[ChangeRecord]];
	  }});
	Object.defineProperty(View.prototype._collectChanges, "parameters", {get: function() {
	    return [[List]];
	  }});
	var ProtoView = function ProtoView(template, protoChangeDetector, shadowDomStrategy) {
	  assert.argumentTypes(template, assert.type.any, protoChangeDetector, ProtoChangeDetector, shadowDomStrategy, ShadowDomStrategy);
	  this.element = template;
	  this.elementBinders = [];
	  this.variableBindings = MapWrapper.create();
	  this.protoContextLocals = MapWrapper.create();
	  this.protoChangeDetector = protoChangeDetector;
	  this.textNodesWithBindingCount = 0;
	  this.elementsWithBindingCount = 0;
	  this.instantiateInPlace = false;
	  this.rootBindingOffset = (isPresent(this.element) && DOM.hasClass(this.element, NG_BINDING_CLASS)) ? 1 : 0;
	  this.isTemplateElement = DOM.isTemplateElement(this.element);
	  this.shadowDomStrategy = shadowDomStrategy;
	  this._viewPool = new ViewPool(VIEW_POOL_CAPACITY);
	  this.stylePromises = [];
	};
	var $ProtoView = ProtoView;
	($traceurRuntime.createClass)(ProtoView, {
	  instantiate: function(hostElementInjector, eventManager) {
	    assert.argumentTypes(hostElementInjector, ElementInjector, eventManager, EventManager);
	    if (this._viewPool.length() == 0)
	      this._preFillPool(hostElementInjector, eventManager);
	    var view = this._viewPool.pop();
	    return assert.returnType((isPresent(view) ? view : this._instantiate(hostElementInjector, eventManager)), View);
	  },
	  _preFillPool: function(hostElementInjector, eventManager) {
	    assert.argumentTypes(hostElementInjector, ElementInjector, eventManager, EventManager);
	    for (var i = 0; i < VIEW_POOL_PREFILL; i++) {
	      this._viewPool.push(this._instantiate(hostElementInjector, eventManager));
	    }
	  },
	  _instantiate: function(hostElementInjector, eventManager) {
	    assert.argumentTypes(hostElementInjector, ElementInjector, eventManager, EventManager);
	    var rootElementClone = this.instantiateInPlace ? this.element : DOM.importIntoDoc(this.element);
	    var elementsWithBindingsDynamic;
	    if (this.isTemplateElement) {
	      elementsWithBindingsDynamic = DOM.querySelectorAll(DOM.content(rootElementClone), NG_BINDING_CLASS_SELECTOR);
	    } else {
	      elementsWithBindingsDynamic = DOM.getElementsByClassName(rootElementClone, NG_BINDING_CLASS);
	    }
	    var elementsWithBindings = ListWrapper.createFixedSize(elementsWithBindingsDynamic.length);
	    for (var i = 0; i < elementsWithBindingsDynamic.length; ++i) {
	      elementsWithBindings[i] = elementsWithBindingsDynamic[i];
	    }
	    var viewNodes;
	    if (this.isTemplateElement) {
	      var childNode = DOM.firstChild(DOM.content(rootElementClone));
	      viewNodes = [];
	      while (childNode != null) {
	        ListWrapper.push(viewNodes, childNode);
	        childNode = DOM.nextSibling(childNode);
	      }
	    } else {
	      viewNodes = [rootElementClone];
	    }
	    var view = new View(this, viewNodes, this.protoChangeDetector, this.protoContextLocals);
	    var binders = this.elementBinders;
	    var elementInjectors = ListWrapper.createFixedSize(binders.length);
	    var rootElementInjectors = [];
	    var textNodes = [];
	    var elementsWithPropertyBindings = [];
	    var preBuiltObjects = ListWrapper.createFixedSize(binders.length);
	    var viewContainers = [];
	    var componentChildViews = [];
	    for (var i = 0; i < binders.length; i++) {
	      var binder = binders[i];
	      var element = void 0;
	      if (i === 0 && this.rootBindingOffset === 1) {
	        element = rootElementClone;
	      } else {
	        element = elementsWithBindings[i - this.rootBindingOffset];
	      }
	      var elementInjector = null;
	      var protoElementInjector = binder.protoElementInjector;
	      if (isPresent(protoElementInjector)) {
	        if (isPresent(protoElementInjector.parent)) {
	          var parentElementInjector = elementInjectors[protoElementInjector.parent.index];
	          elementInjector = protoElementInjector.instantiate(parentElementInjector, null, binder.events);
	        } else {
	          elementInjector = protoElementInjector.instantiate(null, hostElementInjector, binder.events);
	          ListWrapper.push(rootElementInjectors, elementInjector);
	        }
	      }
	      elementInjectors[i] = elementInjector;
	      if (binder.hasElementPropertyBindings) {
	        ListWrapper.push(elementsWithPropertyBindings, element);
	      }
	      var textNodeIndices = binder.textNodeIndices;
	      if (isPresent(textNodeIndices)) {
	        var childNode = DOM.firstChild(DOM.templateAwareRoot(element));
	        for (var j = 0,
	            k = 0; j < textNodeIndices.length; j++) {
	          for (var index = textNodeIndices[j]; k < index; k++) {
	            childNode = DOM.nextSibling(childNode);
	          }
	          ListWrapper.push(textNodes, childNode);
	        }
	      }
	      var lightDom = null;
	      var bindingPropagationConfig = null;
	      if (isPresent(binder.componentDirective)) {
	        var strategy = this.shadowDomStrategy;
	        var childView = binder.nestedProtoView.instantiate(elementInjector, eventManager);
	        view.changeDetector.addChild(childView.changeDetector);
	        lightDom = strategy.constructLightDom(view, childView, element);
	        strategy.attachTemplate(element, childView);
	        bindingPropagationConfig = new BindingPropagationConfig(view.changeDetector);
	        ListWrapper.push(componentChildViews, childView);
	      }
	      var viewContainer = null;
	      if (isPresent(binder.viewportDirective)) {
	        var destLightDom = this._directParentElementLightDom(protoElementInjector, preBuiltObjects);
	        viewContainer = new ViewContainer(view, element, binder.nestedProtoView, elementInjector, eventManager, destLightDom);
	        ListWrapper.push(viewContainers, viewContainer);
	      }
	      if (isPresent(elementInjector)) {
	        preBuiltObjects[i] = new PreBuiltObjects(view, new NgElement(element), viewContainer, lightDom, bindingPropagationConfig);
	      }
	      if (isPresent(binder.events)) {
	        MapWrapper.forEach(binder.events, (function(expr, eventName) {
	          if (isBlank(elementInjector) || !elementInjector.hasEventEmitter(eventName)) {
	            var handler = $ProtoView.buildInnerCallback(expr, view);
	            eventManager.addEventListener(element, eventName, handler);
	          }
	        }));
	      }
	    }
	    view.init(elementInjectors, rootElementInjectors, textNodes, elementsWithPropertyBindings, viewContainers, preBuiltObjects, componentChildViews);
	    return assert.returnType((view), View);
	  },
	  returnToPool: function(view) {
	    assert.argumentTypes(view, View);
	    this._viewPool.push(view);
	  },
	  _directParentElementLightDom: function(protoElementInjector, preBuiltObjects) {
	    assert.argumentTypes(protoElementInjector, ProtoElementInjector, preBuiltObjects, List);
	    var p = protoElementInjector.directParent();
	    return assert.returnType((isPresent(p) ? preBuiltObjects[p.index].lightDom : null), LightDom);
	  },
	  bindVariable: function(contextName, templateName) {
	    assert.argumentTypes(contextName, assert.type.string, templateName, assert.type.string);
	    MapWrapper.set(this.variableBindings, contextName, templateName);
	    MapWrapper.set(this.protoContextLocals, templateName, null);
	  },
	  bindElement: function(protoElementInjector) {
	    var componentDirective = arguments[1] !== (void 0) ? arguments[1] : null;
	    var viewportDirective = arguments[2] !== (void 0) ? arguments[2] : null;
	    assert.argumentTypes(protoElementInjector, ProtoElementInjector, componentDirective, DirectiveMetadata, viewportDirective, DirectiveMetadata);
	    var elBinder = new ElementBinder(protoElementInjector, componentDirective, viewportDirective);
	    ListWrapper.push(this.elementBinders, elBinder);
	    return assert.returnType((elBinder), ElementBinder);
	  },
	  bindTextNode: function(indexInParent, expression) {
	    assert.argumentTypes(indexInParent, int, expression, AST);
	    var elBinder = this.elementBinders[this.elementBinders.length - 1];
	    if (isBlank(elBinder.textNodeIndices)) {
	      elBinder.textNodeIndices = ListWrapper.create();
	    }
	    ListWrapper.push(elBinder.textNodeIndices, indexInParent);
	    var memento = this.textNodesWithBindingCount++;
	    this.protoChangeDetector.addAst(expression, memento);
	  },
	  bindElementProperty: function(expression, setterName, setter) {
	    assert.argumentTypes(expression, AST, setterName, assert.type.string, setter, SetterFn);
	    var elBinder = this.elementBinders[this.elementBinders.length - 1];
	    if (!elBinder.hasElementPropertyBindings) {
	      elBinder.hasElementPropertyBindings = true;
	      this.elementsWithBindingCount++;
	    }
	    var memento = new ElementBindingMemento(this.elementsWithBindingCount - 1, setterName, setter);
	    this.protoChangeDetector.addAst(expression, memento);
	  },
	  bindEvent: function(eventName, expression) {
	    assert.argumentTypes(eventName, assert.type.string, expression, AST);
	    var elBinder = this.elementBinders[this.elementBinders.length - 1];
	    if (isBlank(elBinder.events)) {
	      elBinder.events = MapWrapper.create();
	    }
	    MapWrapper.set(elBinder.events, eventName, expression);
	  },
	  bindDirectiveProperty: function(directiveIndex, expression, setterName, setter) {
	    assert.argumentTypes(directiveIndex, assert.type.number, expression, AST, setterName, assert.type.string, setter, SetterFn);
	    var bindingMemento = new DirectiveBindingMemento(this.elementBinders.length - 1, directiveIndex, setterName, setter);
	    var directiveMemento = DirectiveMemento.get(bindingMemento);
	    this.protoChangeDetector.addAst(expression, bindingMemento, directiveMemento);
	  }
	}, {
	  buildInnerCallback: function(expr, view) {
	    assert.argumentTypes(expr, AST, view, View);
	    var locals = MapWrapper.create();
	    return (function(event) {
	      if (view.hydrated()) {
	        MapWrapper.set(locals, '$event', event);
	        var context = new ContextWithVariableBindings(view.context, locals);
	        expr.eval(context);
	      }
	    });
	  },
	  createRootProtoView: function(protoView, insertionElement, rootComponentAnnotatedType, protoChangeDetector, shadowDomStrategy) {
	    assert.argumentTypes(protoView, $ProtoView, insertionElement, assert.type.any, rootComponentAnnotatedType, DirectiveMetadata, protoChangeDetector, ProtoChangeDetector, shadowDomStrategy, ShadowDomStrategy);
	    DOM.addClass(insertionElement, NG_BINDING_CLASS);
	    var cmpType = rootComponentAnnotatedType.type;
	    var rootProtoView = new $ProtoView(insertionElement, protoChangeDetector, shadowDomStrategy);
	    rootProtoView.instantiateInPlace = true;
	    var binder = rootProtoView.bindElement(new ProtoElementInjector(null, 0, [cmpType], true));
	    binder.componentDirective = rootComponentAnnotatedType;
	    binder.nestedProtoView = protoView;
	    shadowDomStrategy.shimHostElement(cmpType, insertionElement);
	    return assert.returnType((rootProtoView), $ProtoView);
	  }
	});
	Object.defineProperty(ProtoView, "parameters", {get: function() {
	    return [[], [ProtoChangeDetector], [ShadowDomStrategy]];
	  }});
	Object.defineProperty(ProtoView.prototype.instantiate, "parameters", {get: function() {
	    return [[ElementInjector], [EventManager]];
	  }});
	Object.defineProperty(ProtoView.prototype._preFillPool, "parameters", {get: function() {
	    return [[ElementInjector], [EventManager]];
	  }});
	Object.defineProperty(ProtoView.prototype._instantiate, "parameters", {get: function() {
	    return [[ElementInjector], [EventManager]];
	  }});
	Object.defineProperty(ProtoView.prototype.returnToPool, "parameters", {get: function() {
	    return [[View]];
	  }});
	Object.defineProperty(ProtoView.buildInnerCallback, "parameters", {get: function() {
	    return [[AST], [View]];
	  }});
	Object.defineProperty(ProtoView.prototype._directParentElementLightDom, "parameters", {get: function() {
	    return [[ProtoElementInjector], [List]];
	  }});
	Object.defineProperty(ProtoView.prototype.bindVariable, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(ProtoView.prototype.bindElement, "parameters", {get: function() {
	    return [[ProtoElementInjector], [DirectiveMetadata], [DirectiveMetadata]];
	  }});
	Object.defineProperty(ProtoView.prototype.bindTextNode, "parameters", {get: function() {
	    return [[int], [AST]];
	  }});
	Object.defineProperty(ProtoView.prototype.bindElementProperty, "parameters", {get: function() {
	    return [[AST], [assert.type.string], [SetterFn]];
	  }});
	Object.defineProperty(ProtoView.prototype.bindEvent, "parameters", {get: function() {
	    return [[assert.type.string], [AST]];
	  }});
	Object.defineProperty(ProtoView.prototype.bindDirectiveProperty, "parameters", {get: function() {
	    return [[assert.type.number], [AST], [assert.type.string], [SetterFn]];
	  }});
	Object.defineProperty(ProtoView.createRootProtoView, "parameters", {get: function() {
	    return [[ProtoView], [], [DirectiveMetadata], [ProtoChangeDetector], [ShadowDomStrategy]];
	  }});
	var ElementBindingMemento = function ElementBindingMemento(elementIndex, setterName, setter) {
	  assert.argumentTypes(elementIndex, int, setterName, assert.type.string, setter, SetterFn);
	  this._elementIndex = elementIndex;
	  this._setterName = setterName;
	  this._setter = setter;
	};
	($traceurRuntime.createClass)(ElementBindingMemento, {invoke: function(record, bindElements) {
	    assert.argumentTypes(record, ChangeRecord, bindElements, List);
	    var element = bindElements[this._elementIndex];
	    this._setter(element, record.currentValue);
	  }}, {});
	Object.defineProperty(ElementBindingMemento, "parameters", {get: function() {
	    return [[int], [assert.type.string], [SetterFn]];
	  }});
	Object.defineProperty(ElementBindingMemento.prototype.invoke, "parameters", {get: function() {
	    return [[ChangeRecord], [List]];
	  }});
	var DirectiveBindingMemento = function DirectiveBindingMemento(elementInjectorIndex, directiveIndex, setterName, setter) {
	  assert.argumentTypes(elementInjectorIndex, assert.type.number, directiveIndex, assert.type.number, setterName, assert.type.string, setter, SetterFn);
	  this._elementInjectorIndex = elementInjectorIndex;
	  this._directiveIndex = directiveIndex;
	  this._setterName = setterName;
	  this._setter = setter;
	};
	($traceurRuntime.createClass)(DirectiveBindingMemento, {invoke: function(record, elementInjectors) {
	    assert.argumentTypes(record, ChangeRecord, elementInjectors, assert.genericType(List, ElementInjector));
	    var elementInjector = assert.type(elementInjectors[this._elementInjectorIndex], ElementInjector);
	    var directive = elementInjector.getDirectiveAtIndex(this._directiveIndex);
	    this._setter(directive, record.currentValue);
	  }}, {});
	Object.defineProperty(DirectiveBindingMemento, "parameters", {get: function() {
	    return [[assert.type.number], [assert.type.number], [assert.type.string], [SetterFn]];
	  }});
	Object.defineProperty(DirectiveBindingMemento.prototype.invoke, "parameters", {get: function() {
	    return [[ChangeRecord], [assert.genericType(List, ElementInjector)]];
	  }});
	var _directiveMementos = MapWrapper.create();
	var DirectiveMemento = function DirectiveMemento(elementInjectorIndex, directiveIndex) {
	  assert.argumentTypes(elementInjectorIndex, assert.type.number, directiveIndex, assert.type.number);
	  this._elementInjectorIndex = elementInjectorIndex;
	  this._directiveIndex = directiveIndex;
	};
	var $DirectiveMemento = DirectiveMemento;
	($traceurRuntime.createClass)(DirectiveMemento, {
	  directive: function(elementInjectors) {
	    assert.argumentTypes(elementInjectors, assert.genericType(List, ElementInjector));
	    var elementInjector = assert.type(elementInjectors[this._elementInjectorIndex], ElementInjector);
	    return elementInjector.getDirectiveAtIndex(this._directiveIndex);
	  },
	  directiveBinding: function(elementInjectors) {
	    assert.argumentTypes(elementInjectors, assert.genericType(List, ElementInjector));
	    var elementInjector = assert.type(elementInjectors[this._elementInjectorIndex], ElementInjector);
	    return elementInjector.getDirectiveBindingAtIndex(this._directiveIndex);
	  }
	}, {get: function(memento) {
	    assert.argumentTypes(memento, DirectiveBindingMemento);
	    var elementInjectorIndex = memento._elementInjectorIndex;
	    var directiveIndex = memento._directiveIndex;
	    var id = elementInjectorIndex * 100 + directiveIndex;
	    if (!MapWrapper.contains(_directiveMementos, id)) {
	      MapWrapper.set(_directiveMementos, id, new $DirectiveMemento(elementInjectorIndex, directiveIndex));
	    }
	    return MapWrapper.get(_directiveMementos, id);
	  }});
	Object.defineProperty(DirectiveMemento, "parameters", {get: function() {
	    return [[assert.type.number], [assert.type.number]];
	  }});
	Object.defineProperty(DirectiveMemento.get, "parameters", {get: function() {
	    return [[DirectiveBindingMemento]];
	  }});
	Object.defineProperty(DirectiveMemento.prototype.directive, "parameters", {get: function() {
	    return [[assert.genericType(List, ElementInjector)]];
	  }});
	Object.defineProperty(DirectiveMemento.prototype.directiveBinding, "parameters", {get: function() {
	    return [[assert.genericType(List, ElementInjector)]];
	  }});
	var PropertyUpdate = function PropertyUpdate(currentValue, previousValue) {
	  this.currentValue = currentValue;
	  this.previousValue = previousValue;
	};
	($traceurRuntime.createClass)(PropertyUpdate, {}, {});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/view.map
	
	//# sourceMappingURL=./view.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ViewContainer: {get: function() {
	      return ViewContainer;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/view_container";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_compiler_47_view__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_di__,
	    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_core_47_events_47_event_95_manager__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var viewModule = ($__angular2_47_src_47_core_47_compiler_47_view__ = __webpack_require__(31), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__});
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    ListWrapper = $__2.ListWrapper,
	    MapWrapper = $__2.MapWrapper,
	    List = $__2.List;
	var BaseException = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).BaseException;
	var Injector = ($__angular2_47_di__ = __webpack_require__(52), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
	var eiModule = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = __webpack_require__(76), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__});
	var $__5 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__5.isPresent,
	    isBlank = $__5.isBlank;
	var EventManager = ($__angular2_47_src_47_core_47_events_47_event_95_manager__ = __webpack_require__(64), $__angular2_47_src_47_core_47_events_47_event_95_manager__ && $__angular2_47_src_47_core_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_core_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_core_47_events_47_event_95_manager__}).EventManager;
	var ViewContainer = function ViewContainer(parentView, templateElement, defaultProtoView, elementInjector, eventManager) {
	  var lightDom = arguments[5] !== (void 0) ? arguments[5] : null;
	  assert.argumentTypes(parentView, viewModule.View, templateElement, assert.type.any, defaultProtoView, viewModule.ProtoView, elementInjector, eiModule.ElementInjector, eventManager, EventManager, lightDom, assert.type.any);
	  this.parentView = parentView;
	  this.templateElement = templateElement;
	  this.defaultProtoView = defaultProtoView;
	  this.elementInjector = elementInjector;
	  this._lightDom = lightDom;
	  this._views = [];
	  this.appInjector = null;
	  this.hostElementInjector = null;
	  this._eventManager = eventManager;
	};
	var $ViewContainer = ViewContainer;
	($traceurRuntime.createClass)(ViewContainer, {
	  hydrate: function(appInjector, hostElementInjector) {
	    assert.argumentTypes(appInjector, Injector, hostElementInjector, eiModule.ElementInjector);
	    this.appInjector = appInjector;
	    this.hostElementInjector = hostElementInjector;
	  },
	  dehydrate: function() {
	    this.appInjector = null;
	    this.hostElementInjector = null;
	    this.clear();
	  },
	  clear: function() {
	    for (var i = this._views.length - 1; i >= 0; i--) {
	      this.remove(i);
	    }
	  },
	  get: function(index) {
	    assert.argumentTypes(index, assert.type.number);
	    return assert.returnType((this._views[index]), viewModule.View);
	  },
	  get length() {
	    return this._views.length;
	  },
	  _siblingToInsertAfter: function(index) {
	    assert.argumentTypes(index, assert.type.number);
	    if (index == 0)
	      return this.templateElement;
	    return ListWrapper.last(this._views[index - 1].nodes);
	  },
	  hydrated: function() {
	    return isPresent(this.appInjector);
	  },
	  create: function() {
	    var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
	    if (!this.hydrated())
	      throw new BaseException('Cannot create views on a dehydrated ViewContainer');
	    var newView = this.defaultProtoView.instantiate(this.hostElementInjector, this._eventManager);
	    this.insert(newView, atIndex);
	    newView.hydrate(this.appInjector, this.hostElementInjector, this.parentView.context);
	    return assert.returnType((newView), viewModule.View);
	  },
	  insert: function(view) {
	    var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
	    if (atIndex == -1)
	      atIndex = this._views.length;
	    ListWrapper.insert(this._views, atIndex, view);
	    if (isBlank(this._lightDom)) {
	      $ViewContainer.moveViewNodesAfterSibling(this._siblingToInsertAfter(atIndex), view);
	    } else {
	      this._lightDom.redistribute();
	    }
	    this.parentView.changeDetector.addChild(view.changeDetector);
	    this._linkElementInjectors(view);
	    return assert.returnType((view), viewModule.View);
	  },
	  remove: function() {
	    var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
	    if (atIndex == -1)
	      atIndex = this._views.length - 1;
	    var view = this.detach(atIndex);
	    view.dehydrate();
	    this.defaultProtoView.returnToPool(view);
	  },
	  detach: function() {
	    var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
	    if (atIndex == -1)
	      atIndex = this._views.length - 1;
	    var detachedView = this.get(atIndex);
	    ListWrapper.removeAt(this._views, atIndex);
	    if (isBlank(this._lightDom)) {
	      $ViewContainer.removeViewNodesFromParent(this.templateElement.parentNode, detachedView);
	    } else {
	      this._lightDom.redistribute();
	    }
	    detachedView.changeDetector.remove();
	    this._unlinkElementInjectors(detachedView);
	    return assert.returnType((detachedView), viewModule.View);
	  },
	  contentTagContainers: function() {
	    return this._views;
	  },
	  nodes: function() {
	    var r = [];
	    for (var i = 0; i < this._views.length; ++i) {
	      r = ListWrapper.concat(r, this._views[i].nodes);
	    }
	    return assert.returnType((r), List);
	  },
	  _linkElementInjectors: function(view) {
	    for (var i = 0; i < view.rootElementInjectors.length; ++i) {
	      view.rootElementInjectors[i].parent = this.elementInjector;
	    }
	  },
	  _unlinkElementInjectors: function(view) {
	    for (var i = 0; i < view.rootElementInjectors.length; ++i) {
	      view.rootElementInjectors[i].parent = null;
	    }
	  }
	}, {
	  moveViewNodesAfterSibling: function(sibling, view) {
	    for (var i = view.nodes.length - 1; i >= 0; --i) {
	      DOM.insertAfter(sibling, view.nodes[i]);
	    }
	  },
	  removeViewNodesFromParent: function(parent, view) {
	    for (var i = view.nodes.length - 1; i >= 0; --i) {
	      DOM.removeChild(parent, view.nodes[i]);
	    }
	  }
	});
	Object.defineProperty(ViewContainer, "parameters", {get: function() {
	    return [[viewModule.View], [], [viewModule.ProtoView], [eiModule.ElementInjector], [EventManager], []];
	  }});
	Object.defineProperty(ViewContainer.prototype.hydrate, "parameters", {get: function() {
	    return [[Injector], [eiModule.ElementInjector]];
	  }});
	Object.defineProperty(ViewContainer.prototype.get, "parameters", {get: function() {
	    return [[assert.type.number]];
	  }});
	Object.defineProperty(ViewContainer.prototype._siblingToInsertAfter, "parameters", {get: function() {
	    return [[assert.type.number]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/view_container.map
	
	//# sourceMappingURL=./view_container.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  BindingPropagationConfig: {get: function() {
	      return BindingPropagationConfig;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/binding_propagation_config";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_change_95_detection__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
	    ChangeDetector = $__1.ChangeDetector,
	    CHECK_ONCE = $__1.CHECK_ONCE,
	    DETACHED = $__1.DETACHED,
	    CHECK_ALWAYS = $__1.CHECK_ALWAYS;
	var BindingPropagationConfig = function BindingPropagationConfig(cd) {
	  assert.argumentTypes(cd, ChangeDetector);
	  this._cd = cd;
	};
	($traceurRuntime.createClass)(BindingPropagationConfig, {
	  shouldBePropagated: function() {
	    this._cd.mode = CHECK_ONCE;
	  },
	  shouldBePropagatedFromRoot: function() {
	    this._cd.markPathToRootAsCheckOnce();
	  },
	  shouldNotPropagate: function() {
	    this._cd.mode = DETACHED;
	  },
	  shouldAlwaysPropagate: function() {
	    this._cd.mode = CHECK_ALWAYS;
	  }
	}, {});
	Object.defineProperty(BindingPropagationConfig, "parameters", {get: function() {
	    return [[ChangeDetector]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/binding_propagation_config.map
	
	//# sourceMappingURL=./binding_propagation_config.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  NgElement: {get: function() {
	      return NgElement;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/dom/element";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var normalizeBlank = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).normalizeBlank;
	var NgElement = function NgElement(domElement) {
	  this.domElement = domElement;
	};
	($traceurRuntime.createClass)(NgElement, {getAttribute: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    return normalizeBlank(DOM.getAttribute(this.domElement, name));
	  }}, {});
	Object.defineProperty(NgElement.prototype.getAttribute, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/dom/element.map
	
	//# sourceMappingURL=./element.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Foreach: {get: function() {
	      return Foreach;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/directives/foreach";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_annotations_47_annotations__,
	    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
	    $__angular2_47_src_47_core_47_compiler_47_view__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var Viewport = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = __webpack_require__(25), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Viewport;
	var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = __webpack_require__(32), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
	var View = ($__angular2_47_src_47_core_47_compiler_47_view__ = __webpack_require__(31), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).View;
	var $__4 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__4.isPresent,
	    isBlank = $__4.isBlank;
	var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
	var Foreach = function Foreach(viewContainer) {
	  assert.argumentTypes(viewContainer, ViewContainer);
	  $traceurRuntime.superConstructor($Foreach).call(this);
	  this.viewContainer = viewContainer;
	};
	var $Foreach = Foreach;
	($traceurRuntime.createClass)(Foreach, {
	  set iterableChanges(changes) {
	    if (isBlank(changes)) {
	      this.viewContainer.clear();
	      return ;
	    }
	    var recordViewTuples = [];
	    changes.forEachRemovedItem((function(removedRecord) {
	      return ListWrapper.push(recordViewTuples, new RecordViewTuple(removedRecord, null));
	    }));
	    changes.forEachMovedItem((function(movedRecord) {
	      return ListWrapper.push(recordViewTuples, new RecordViewTuple(movedRecord, null));
	    }));
	    var insertTuples = $Foreach.bulkRemove(recordViewTuples, this.viewContainer);
	    changes.forEachAddedItem((function(addedRecord) {
	      return ListWrapper.push(insertTuples, new RecordViewTuple(addedRecord, null));
	    }));
	    $Foreach.bulkInsert(insertTuples, this.viewContainer);
	    for (var i = 0; i < insertTuples.length; i++) {
	      this.perViewChange(insertTuples[i].view, insertTuples[i].record);
	    }
	  },
	  perViewChange: function(view, record) {
	    view.setLocal('\$implicit', record.item);
	    view.setLocal('index', record.currentIndex);
	  }
	}, {
	  bulkRemove: function(tuples, viewContainer) {
	    tuples.sort((function(a, b) {
	      return a.record.previousIndex - b.record.previousIndex;
	    }));
	    var movedTuples = [];
	    for (var i = tuples.length - 1; i >= 0; i--) {
	      var tuple = tuples[i];
	      if (isPresent(tuple.record.currentIndex)) {
	        tuple.view = viewContainer.detach(tuple.record.previousIndex);
	        ListWrapper.push(movedTuples, tuple);
	      } else {
	        viewContainer.remove(tuple.record.previousIndex);
	      }
	    }
	    return movedTuples;
	  },
	  bulkInsert: function(tuples, viewContainer) {
	    tuples.sort((function(a, b) {
	      return a.record.currentIndex - b.record.currentIndex;
	    }));
	    for (var i = 0; i < tuples.length; i++) {
	      var tuple = tuples[i];
	      if (isPresent(tuple.view)) {
	        viewContainer.insert(tuple.view, tuple.record.currentIndex);
	      } else {
	        tuple.view = viewContainer.create(tuple.record.currentIndex);
	      }
	    }
	    return tuples;
	  }
	});
	Object.defineProperty(Foreach, "annotations", {get: function() {
	    return [new Viewport({
	      selector: '[foreach][in]',
	      bind: {'iterableChanges': 'in | iterableDiff'}
	    })];
	  }});
	Object.defineProperty(Foreach, "parameters", {get: function() {
	    return [[ViewContainer]];
	  }});
	var RecordViewTuple = function RecordViewTuple(record, view) {
	  this.record = record;
	  this.view = view;
	};
	($traceurRuntime.createClass)(RecordViewTuple, {}, {});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/directives/foreach.map
	
	//# sourceMappingURL=./foreach.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  If: {get: function() {
	      return If;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/directives/if";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_annotations_47_annotations__,
	    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var Viewport = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = __webpack_require__(25), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Viewport;
	var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = __webpack_require__(32), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
	var isBlank = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
	var If = function If(viewContainer) {
	  assert.argumentTypes(viewContainer, ViewContainer);
	  this.viewContainer = viewContainer;
	  this.prevCondition = null;
	};
	($traceurRuntime.createClass)(If, {set condition(newCondition) {
	    if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
	      this.prevCondition = true;
	      this.viewContainer.create();
	    } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
	      this.prevCondition = false;
	      this.viewContainer.clear();
	    }
	  }}, {});
	Object.defineProperty(If, "annotations", {get: function() {
	    return [new Viewport({
	      selector: '[if]',
	      bind: {'condition': 'if'}
	    })];
	  }});
	Object.defineProperty(If, "parameters", {get: function() {
	    return [[ViewContainer]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/directives/if.map
	
	//# sourceMappingURL=./if.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  NonBindable: {get: function() {
	      return NonBindable;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/directives/non_bindable";
	var $__angular2_47_src_47_core_47_annotations_47_annotations__;
	var Decorator = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = __webpack_require__(25), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Decorator;
	var NonBindable = function NonBindable() {};
	($traceurRuntime.createClass)(NonBindable, {}, {});
	Object.defineProperty(NonBindable, "annotations", {get: function() {
	    return [new Decorator({
	      selector: '[non-bindable]',
	      compileChildren: false
	    })];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/directives/non_bindable.map
	
	//# sourceMappingURL=./non_bindable.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Switch: {get: function() {
	      return Switch;
	    }},
	  SwitchWhen: {get: function() {
	      return SwitchWhen;
	    }},
	  SwitchDefault: {get: function() {
	      return SwitchDefault;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/directives/switch";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_annotations_47_annotations__,
	    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
	    $__angular2_47_src_47_core_47_dom_47_element__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_core_47_annotations_47_visibility__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = __webpack_require__(25), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
	    Decorator = $__1.Decorator,
	    Viewport = $__1.Viewport;
	var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = __webpack_require__(32), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
	var NgElement = ($__angular2_47_src_47_core_47_dom_47_element__ = __webpack_require__(34), $__angular2_47_src_47_core_47_dom_47_element__ && $__angular2_47_src_47_core_47_dom_47_element__.__esModule && $__angular2_47_src_47_core_47_dom_47_element__ || {default: $__angular2_47_src_47_core_47_dom_47_element__}).NgElement;
	var $__4 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__4.isPresent,
	    isBlank = $__4.isBlank,
	    normalizeBlank = $__4.normalizeBlank;
	var $__5 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    ListWrapper = $__5.ListWrapper,
	    List = $__5.List,
	    MapWrapper = $__5.MapWrapper,
	    Map = $__5.Map;
	var Parent = ($__angular2_47_src_47_core_47_annotations_47_visibility__ = __webpack_require__(26), $__angular2_47_src_47_core_47_annotations_47_visibility__ && $__angular2_47_src_47_core_47_annotations_47_visibility__.__esModule && $__angular2_47_src_47_core_47_annotations_47_visibility__ || {default: $__angular2_47_src_47_core_47_annotations_47_visibility__}).Parent;
	var Switch = function Switch() {
	  this._valueViewContainers = MapWrapper.create();
	  this._activeViewContainers = ListWrapper.create();
	  this._useDefault = false;
	};
	($traceurRuntime.createClass)(Switch, {
	  set value(value) {
	    this._emptyAllActiveViewContainers();
	    this._useDefault = false;
	    var containers = MapWrapper.get(this._valueViewContainers, value);
	    if (isBlank(containers)) {
	      this._useDefault = true;
	      containers = normalizeBlank(MapWrapper.get(this._valueViewContainers, _whenDefault));
	    }
	    this._activateViewContainers(containers);
	    this._switchValue = value;
	  },
	  _onWhenValueChanged: function(oldWhen, newWhen, viewContainer) {
	    assert.argumentTypes(oldWhen, assert.type.any, newWhen, assert.type.any, viewContainer, ViewContainer);
	    this._deregisterViewContainer(oldWhen, viewContainer);
	    this._registerViewContainer(newWhen, viewContainer);
	    if (oldWhen === this._switchValue) {
	      viewContainer.remove();
	      ListWrapper.remove(this._activeViewContainers, viewContainer);
	    } else if (newWhen === this._switchValue) {
	      if (this._useDefault) {
	        this._useDefault = false;
	        this._emptyAllActiveViewContainers();
	      }
	      viewContainer.create();
	      ListWrapper.push(this._activeViewContainers, viewContainer);
	    }
	    if (this._activeViewContainers.length === 0 && !this._useDefault) {
	      this._useDefault = true;
	      this._activateViewContainers(MapWrapper.get(this._valueViewContainers, _whenDefault));
	    }
	  },
	  _emptyAllActiveViewContainers: function() {
	    var activeContainers = this._activeViewContainers;
	    for (var i = 0; i < activeContainers.length; i++) {
	      activeContainers[i].remove();
	    }
	    this._activeViewContainers = ListWrapper.create();
	  },
	  _activateViewContainers: function(containers) {
	    assert.argumentTypes(containers, assert.genericType(List, ViewContainer));
	    if (isPresent(containers)) {
	      for (var i = 0; i < containers.length; i++) {
	        containers[i].create();
	      }
	      this._activeViewContainers = containers;
	    }
	  },
	  _registerViewContainer: function(value, container) {
	    assert.argumentTypes(value, assert.type.any, container, ViewContainer);
	    var containers = MapWrapper.get(this._valueViewContainers, value);
	    if (isBlank(containers)) {
	      containers = ListWrapper.create();
	      MapWrapper.set(this._valueViewContainers, value, containers);
	    }
	    ListWrapper.push(containers, container);
	  },
	  _deregisterViewContainer: function(value, container) {
	    assert.argumentTypes(value, assert.type.any, container, ViewContainer);
	    if (value == _whenDefault)
	      return ;
	    var containers = MapWrapper.get(this._valueViewContainers, value);
	    if (containers.length == 1) {
	      MapWrapper.delete(this._valueViewContainers, value);
	    } else {
	      ListWrapper.remove(containers, container);
	    }
	  }
	}, {});
	Object.defineProperty(Switch, "annotations", {get: function() {
	    return [new Decorator({
	      selector: '[switch]',
	      bind: {'value': 'switch'}
	    })];
	  }});
	Object.defineProperty(Switch.prototype._onWhenValueChanged, "parameters", {get: function() {
	    return [[], [], [ViewContainer]];
	  }});
	Object.defineProperty(Switch.prototype._activateViewContainers, "parameters", {get: function() {
	    return [[assert.genericType(List, ViewContainer)]];
	  }});
	Object.defineProperty(Switch.prototype._registerViewContainer, "parameters", {get: function() {
	    return [[], [ViewContainer]];
	  }});
	Object.defineProperty(Switch.prototype._deregisterViewContainer, "parameters", {get: function() {
	    return [[], [ViewContainer]];
	  }});
	var SwitchWhen = function SwitchWhen(el, viewContainer, sswitch) {
	  assert.argumentTypes(el, NgElement, viewContainer, ViewContainer, sswitch, Switch);
	  this._value = _whenDefault;
	  this._switch = sswitch;
	  this._viewContainer = viewContainer;
	};
	($traceurRuntime.createClass)(SwitchWhen, {set when(value) {
	    this._switch._onWhenValueChanged(this._value, value, this._viewContainer);
	    this._value = value;
	  }}, {});
	Object.defineProperty(SwitchWhen, "annotations", {get: function() {
	    return [new Viewport({
	      selector: '[switch-when]',
	      bind: {'when': 'switch-when'}
	    })];
	  }});
	Object.defineProperty(SwitchWhen, "parameters", {get: function() {
	    return [[NgElement], [ViewContainer], [Switch, new Parent()]];
	  }});
	var SwitchDefault = function SwitchDefault(viewContainer, sswitch) {
	  assert.argumentTypes(viewContainer, ViewContainer, sswitch, Switch);
	  sswitch._registerViewContainer(_whenDefault, viewContainer);
	};
	($traceurRuntime.createClass)(SwitchDefault, {}, {});
	Object.defineProperty(SwitchDefault, "annotations", {get: function() {
	    return [new Viewport({selector: '[switch-default]'})];
	  }});
	Object.defineProperty(SwitchDefault, "parameters", {get: function() {
	    return [[ViewContainer], [Switch, new Parent()]];
	  }});
	var _whenDefault = new Object();
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/directives/switch.map
	
	//# sourceMappingURL=./switch.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  VALID: {get: function() {
	      return VALID;
	    }},
	  INVALID: {get: function() {
	      return INVALID;
	    }},
	  Control: {get: function() {
	      return Control;
	    }},
	  ControlGroup: {get: function() {
	      return ControlGroup;
	    }},
	  OptionalControl: {get: function() {
	      return OptionalControl;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/forms/model";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_forms_47_validators__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var isPresent = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    StringMap = $__2.StringMap,
	    StringMapWrapper = $__2.StringMapWrapper;
	var $__3 = ($__angular2_47_src_47_forms_47_validators__ = __webpack_require__(41), $__angular2_47_src_47_forms_47_validators__ && $__angular2_47_src_47_forms_47_validators__.__esModule && $__angular2_47_src_47_forms_47_validators__ || {default: $__angular2_47_src_47_forms_47_validators__}),
	    nullValidator = $__3.nullValidator,
	    controlGroupValidator = $__3.controlGroupValidator;
	var VALID = "VALID";
	var INVALID = "INVALID";
	var Control = function Control(value) {
	  var validator = arguments[1] !== (void 0) ? arguments[1] : nullValidator;
	  assert.argumentTypes(value, assert.type.any, validator, Function);
	  this._value = value;
	  this.validator = validator;
	  this._dirty = true;
	};
	($traceurRuntime.createClass)(Control, {
	  updateValue: function(value) {
	    assert.argumentTypes(value, assert.type.any);
	    this._value = value;
	    this._dirty = true;
	    this._updateParent();
	  },
	  get active() {
	    return assert.returnType((true), assert.type.boolean);
	  },
	  get value() {
	    return this._value;
	  },
	  get status() {
	    this._updateIfNeeded();
	    return this._status;
	  },
	  get valid() {
	    this._updateIfNeeded();
	    return this._status === VALID;
	  },
	  get errors() {
	    this._updateIfNeeded();
	    return this._errors;
	  },
	  setParent: function(parent) {
	    this._parent = parent;
	  },
	  _updateIfNeeded: function() {
	    if (this._dirty) {
	      this._dirty = false;
	      this._errors = this.validator(this);
	      this._status = isPresent(this._errors) ? INVALID : VALID;
	    }
	  },
	  _updateParent: function() {
	    if (isPresent(this._parent)) {
	      this._parent._controlChanged();
	    }
	  }
	}, {});
	Object.defineProperty(Control, "parameters", {get: function() {
	    return [[assert.type.any], [Function]];
	  }});
	Object.defineProperty(Control.prototype.updateValue, "parameters", {get: function() {
	    return [[assert.type.any]];
	  }});
	var ControlGroup = function ControlGroup(controls) {
	  var validator = arguments[1] !== (void 0) ? arguments[1] : controlGroupValidator;
	  assert.argumentTypes(controls, assert.type.any, validator, Function);
	  this.controls = controls;
	  this.validator = validator;
	  this._dirty = true;
	  this._setParentForControls();
	};
	($traceurRuntime.createClass)(ControlGroup, {
	  get value() {
	    this._updateIfNeeded();
	    return this._value;
	  },
	  get status() {
	    this._updateIfNeeded();
	    return this._status;
	  },
	  get valid() {
	    this._updateIfNeeded();
	    return this._status === VALID;
	  },
	  get errors() {
	    this._updateIfNeeded();
	    return this._errors;
	  },
	  _setParentForControls: function() {
	    var $__4 = this;
	    StringMapWrapper.forEach(this.controls, (function(control, name) {
	      control.setParent($__4);
	    }));
	  },
	  _updateIfNeeded: function() {
	    if (this._dirty) {
	      this._dirty = false;
	      this._value = this._reduceValue();
	      this._errors = this.validator(this);
	      this._status = isPresent(this._errors) ? INVALID : VALID;
	    }
	  },
	  _reduceValue: function() {
	    var newValue = {};
	    StringMapWrapper.forEach(this.controls, (function(control, name) {
	      if (control.active) {
	        newValue[name] = control.value;
	      }
	    }));
	    return newValue;
	  },
	  _controlChanged: function() {
	    this._dirty = true;
	  }
	}, {});
	Object.defineProperty(ControlGroup, "parameters", {get: function() {
	    return [[], [Function]];
	  }});
	var OptionalControl = function OptionalControl(control, cond) {
	  assert.argumentTypes(control, Control, cond, assert.type.boolean);
	  $traceurRuntime.superConstructor($OptionalControl).call(this);
	  this._control = control;
	  this._cond = cond;
	};
	var $OptionalControl = OptionalControl;
	($traceurRuntime.createClass)(OptionalControl, {
	  get active() {
	    return assert.returnType((this._cond), assert.type.boolean);
	  },
	  get value() {
	    return this._control.value;
	  },
	  get status() {
	    return this._control.status;
	  },
	  get errors() {
	    return this._control.errors;
	  },
	  set validator(v) {
	    this._control.validator = v;
	  },
	  get validator() {
	    return this._control.validator;
	  },
	  set cond(value) {
	    assert.argumentTypes(value, assert.type.boolean);
	    this._cond = value;
	    this._control._updateParent();
	  },
	  get cond() {
	    return assert.returnType((this._cond), assert.type.boolean);
	  },
	  updateValue: function(value) {
	    assert.argumentTypes(value, assert.type.any);
	    this._control.updateValue(value);
	  },
	  setParent: function(parent) {
	    this._control.setParent(parent);
	  }
	}, {});
	Object.defineProperty(OptionalControl, "parameters", {get: function() {
	    return [[Control], [assert.type.boolean]];
	  }});
	Object.defineProperty(Object.getOwnPropertyDescriptor(OptionalControl.prototype, "cond").set, "parameters", {get: function() {
	    return [[assert.type.boolean]];
	  }});
	Object.defineProperty(OptionalControl.prototype.updateValue, "parameters", {get: function() {
	    return [[assert.type.any]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/forms/model.map
	
	//# sourceMappingURL=./model.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ControlValueAccessor: {get: function() {
	      return ControlValueAccessor;
	    }},
	  ControlDirective: {get: function() {
	      return ControlDirective;
	    }},
	  ControlGroupDirective: {get: function() {
	      return ControlGroupDirective;
	    }},
	  FormDirectives: {get: function() {
	      return FormDirectives;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/forms/directives";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_core__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_forms_47_model__,
	    $__angular2_47_src_47_forms_47_validators__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_core__ = __webpack_require__(7), $__angular2_47_core__ && $__angular2_47_core__.__esModule && $__angular2_47_core__ || {default: $__angular2_47_core__}),
	    Template = $__1.Template,
	    Component = $__1.Component,
	    Decorator = $__1.Decorator,
	    NgElement = $__1.NgElement,
	    Ancestor = $__1.Ancestor,
	    onChange = $__1.onChange;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var $__3 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isBlank = $__3.isBlank,
	    isPresent = $__3.isPresent,
	    CONST = $__3.CONST;
	var $__4 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    StringMapWrapper = $__4.StringMapWrapper,
	    ListWrapper = $__4.ListWrapper;
	var $__5 = ($__angular2_47_src_47_forms_47_model__ = __webpack_require__(39), $__angular2_47_src_47_forms_47_model__ && $__angular2_47_src_47_forms_47_model__.__esModule && $__angular2_47_src_47_forms_47_model__ || {default: $__angular2_47_src_47_forms_47_model__}),
	    ControlGroup = $__5.ControlGroup,
	    Control = $__5.Control;
	var validators = ($__angular2_47_src_47_forms_47_validators__ = __webpack_require__(41), $__angular2_47_src_47_forms_47_validators__ && $__angular2_47_src_47_forms_47_validators__.__esModule && $__angular2_47_src_47_forms_47_validators__ || {default: $__angular2_47_src_47_forms_47_validators__});
	var ControlValueAccessor = function ControlValueAccessor() {};
	($traceurRuntime.createClass)(ControlValueAccessor, {
	  readValue: function(el) {},
	  writeValue: function(el, value) {}
	}, {});
	Object.defineProperty(ControlValueAccessor, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	var DefaultControlValueAccessor = function DefaultControlValueAccessor() {
	  $traceurRuntime.superConstructor($DefaultControlValueAccessor).call(this);
	};
	var $DefaultControlValueAccessor = DefaultControlValueAccessor;
	($traceurRuntime.createClass)(DefaultControlValueAccessor, {
	  readValue: function(el) {
	    return DOM.getValue(el);
	  },
	  writeValue: function(el, value) {
	    DOM.setValue(el, value);
	  }
	}, {}, ControlValueAccessor);
	Object.defineProperty(DefaultControlValueAccessor, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	var CheckboxControlValueAccessor = function CheckboxControlValueAccessor() {
	  $traceurRuntime.superConstructor($CheckboxControlValueAccessor).call(this);
	};
	var $CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	($traceurRuntime.createClass)(CheckboxControlValueAccessor, {
	  readValue: function(el) {
	    return assert.returnType((DOM.getChecked(el)), assert.type.boolean);
	  },
	  writeValue: function(el, value) {
	    assert.argumentTypes(el, assert.type.any, value, assert.type.boolean);
	    DOM.setChecked(el, value);
	  }
	}, {}, ControlValueAccessor);
	Object.defineProperty(CheckboxControlValueAccessor, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	Object.defineProperty(CheckboxControlValueAccessor.prototype.writeValue, "parameters", {get: function() {
	    return [[], [assert.type.boolean]];
	  }});
	var controlValueAccessors = {
	  "checkbox": new CheckboxControlValueAccessor(),
	  "text": new DefaultControlValueAccessor()
	};
	function controlValueAccessorFor(controlType) {
	  assert.argumentTypes(controlType, assert.type.string);
	  var accessor = StringMapWrapper.get(controlValueAccessors, controlType);
	  if (isPresent(accessor)) {
	    return assert.returnType((accessor), ControlValueAccessor);
	  } else {
	    return assert.returnType((StringMapWrapper.get(controlValueAccessors, "text")), ControlValueAccessor);
	  }
	}
	Object.defineProperty(controlValueAccessorFor, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var ControlDirective = function ControlDirective(groupDecorator, el) {
	  assert.argumentTypes(groupDecorator, ControlGroupDirective, el, NgElement);
	  this._groupDecorator = groupDecorator;
	  this._el = el;
	  this.validator = validators.nullValidator;
	};
	($traceurRuntime.createClass)(ControlDirective, {
	  onChange: function(_) {
	    this._initialize();
	  },
	  _initialize: function() {
	    var $__6 = this;
	    this._groupDecorator.addDirective(this);
	    var c = this._control();
	    c.validator = validators.compose([c.validator, this.validator]);
	    if (isBlank(this.valueAccessor)) {
	      this.valueAccessor = controlValueAccessorFor(this.type);
	    }
	    this._updateDomValue();
	    DOM.on(this._el.domElement, "change", (function(_) {
	      return $__6._updateControlValue();
	    }));
	  },
	  _updateDomValue: function() {
	    this.valueAccessor.writeValue(this._el.domElement, this._control().value);
	  },
	  _updateControlValue: function() {
	    this._control().updateValue(this.valueAccessor.readValue(this._el.domElement));
	  },
	  _control: function() {
	    return this._groupDecorator.findControl(this.controlName);
	  }
	}, {});
	Object.defineProperty(ControlDirective, "annotations", {get: function() {
	    return [new Decorator({
	      lifecycle: [onChange],
	      selector: '[control]',
	      bind: {
	        'controlName': 'control',
	        'type': 'type'
	      }
	    })];
	  }});
	Object.defineProperty(ControlDirective, "parameters", {get: function() {
	    return [[ControlGroupDirective, new Ancestor()], [NgElement]];
	  }});
	var ControlGroupDirective = function ControlGroupDirective() {
	  $traceurRuntime.superConstructor($ControlGroupDirective).call(this);
	  this._directives = ListWrapper.create();
	};
	var $ControlGroupDirective = ControlGroupDirective;
	($traceurRuntime.createClass)(ControlGroupDirective, {
	  set controlGroup(controlGroup) {
	    this._controlGroup = controlGroup;
	    ListWrapper.forEach(this._directives, (function(cd) {
	      return cd._updateDomValue();
	    }));
	  },
	  addDirective: function(c) {
	    assert.argumentTypes(c, ControlDirective);
	    ListWrapper.push(this._directives, c);
	  },
	  findControl: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    return assert.returnType((this._controlGroup.controls[name]), Control);
	  }
	}, {});
	Object.defineProperty(ControlGroupDirective, "annotations", {get: function() {
	    return [new Decorator({
	      selector: '[control-group]',
	      bind: {'controlGroup': 'control-group'}
	    })];
	  }});
	Object.defineProperty(Object.getOwnPropertyDescriptor(ControlGroupDirective.prototype, "controlGroup").set, "parameters", {get: function() {
	    return [[ControlGroup]];
	  }});
	Object.defineProperty(ControlGroupDirective.prototype.addDirective, "parameters", {get: function() {
	    return [[ControlDirective]];
	  }});
	Object.defineProperty(ControlGroupDirective.prototype.findControl, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var FormDirectives = [ControlGroupDirective, ControlDirective];
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/forms/directives.map
	
	//# sourceMappingURL=./directives.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  required: {get: function() {
	      return required;
	    }},
	  nullValidator: {get: function() {
	      return nullValidator;
	    }},
	  compose: {get: function() {
	      return compose;
	    }},
	  controlGroupValidator: {get: function() {
	      return controlGroupValidator;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/forms/validators";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_forms__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isBlank = $__1.isBlank,
	    isPresent = $__1.isPresent;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper,
	    StringMapWrapper = $__2.StringMapWrapper;
	var $__3 = ($__angular2_47_forms__ = __webpack_require__(9), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__}),
	    ControlGroup = $__3.ControlGroup,
	    Control = $__3.Control;
	function required(c) {
	  assert.argumentTypes(c, Control);
	  return isBlank(c.value) || c.value == "" ? {"required": true} : null;
	}
	Object.defineProperty(required, "parameters", {get: function() {
	    return [[Control]];
	  }});
	function nullValidator(c) {
	  assert.argumentTypes(c, Control);
	  return null;
	}
	Object.defineProperty(nullValidator, "parameters", {get: function() {
	    return [[Control]];
	  }});
	function compose(validators) {
	  assert.argumentTypes(validators, assert.genericType(List, Function));
	  return assert.returnType((function(c) {
	    assert.argumentTypes(c, Control);
	    var res = ListWrapper.reduce(validators, (function(res, validator) {
	      var errors = validator(c);
	      return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	    }), {});
	    return StringMapWrapper.isEmpty(res) ? null : res;
	  }), Function);
	}
	Object.defineProperty(compose, "parameters", {get: function() {
	    return [[assert.genericType(List, Function)]];
	  }});
	function controlGroupValidator(c) {
	  assert.argumentTypes(c, ControlGroup);
	  var res = {};
	  StringMapWrapper.forEach(c.controls, (function(control, name) {
	    if (control.active && isPresent(control.errors)) {
	      StringMapWrapper.forEach(control.errors, (function(value, error) {
	        if (!StringMapWrapper.contains(res, error)) {
	          res[error] = [];
	        }
	        ListWrapper.push(res[error], control);
	      }));
	    }
	  }));
	  return StringMapWrapper.isEmpty(res) ? null : res;
	}
	Object.defineProperty(controlGroupValidator, "parameters", {get: function() {
	    return [[ControlGroup]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/forms/validators.map
	
	//# sourceMappingURL=./validators.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  RequiredValidatorDirective: {get: function() {
	      return RequiredValidatorDirective;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/forms/validator_directives";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_core__,
	    $__angular2_47_forms__,
	    $__angular2_47_forms__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var Decorator = ($__angular2_47_core__ = __webpack_require__(7), $__angular2_47_core__ && $__angular2_47_core__.__esModule && $__angular2_47_core__ || {default: $__angular2_47_core__}).Decorator;
	var ControlDirective = ($__angular2_47_forms__ = __webpack_require__(9), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__}).ControlDirective;
	var validators = ($__angular2_47_forms__ = __webpack_require__(9), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__});
	var RequiredValidatorDirective = function RequiredValidatorDirective(c) {
	  assert.argumentTypes(c, ControlDirective);
	  c.validator = validators.compose([c.validator, validators.required]);
	};
	($traceurRuntime.createClass)(RequiredValidatorDirective, {}, {});
	Object.defineProperty(RequiredValidatorDirective, "annotations", {get: function() {
	    return [new Decorator({selector: '[required]'})];
	  }});
	Object.defineProperty(RequiredValidatorDirective, "parameters", {get: function() {
	    return [[ControlDirective]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/forms/validator_directives.map
	
	//# sourceMappingURL=./validator_directives.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __moduleName = "rtts_assert/rtts_assert";
	var $__rtts_95_assert_47_src_47_rtts_95_assert__;
	var $__rtts_95_assert_47_src_47_rtts_95_assert__ = ($__rtts_95_assert_47_src_47_rtts_95_assert__ = __webpack_require__(81), $__rtts_95_assert_47_src_47_rtts_95_assert__ && $__rtts_95_assert_47_src_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_src_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_src_47_rtts_95_assert__});
	module.exports = $traceurRuntime.exportStar({__esModule: true}, $__rtts_95_assert_47_src_47_rtts_95_assert__);
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/rtts_assert/rtts_assert.map
	
	//# sourceMappingURL=./rtts_assert.map

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  RECORD_TYPE_SELF: {get: function() {
	      return RECORD_TYPE_SELF;
	    }},
	  RECORD_TYPE_CONST: {get: function() {
	      return RECORD_TYPE_CONST;
	    }},
	  RECORD_TYPE_PRIMITIVE_OP: {get: function() {
	      return RECORD_TYPE_PRIMITIVE_OP;
	    }},
	  RECORD_TYPE_PROPERTY: {get: function() {
	      return RECORD_TYPE_PROPERTY;
	    }},
	  RECORD_TYPE_INVOKE_METHOD: {get: function() {
	      return RECORD_TYPE_INVOKE_METHOD;
	    }},
	  RECORD_TYPE_INVOKE_CLOSURE: {get: function() {
	      return RECORD_TYPE_INVOKE_CLOSURE;
	    }},
	  RECORD_TYPE_KEYED_ACCESS: {get: function() {
	      return RECORD_TYPE_KEYED_ACCESS;
	    }},
	  RECORD_TYPE_PIPE: {get: function() {
	      return RECORD_TYPE_PIPE;
	    }},
	  RECORD_TYPE_INTERPOLATE: {get: function() {
	      return RECORD_TYPE_INTERPOLATE;
	    }},
	  ProtoRecord: {get: function() {
	      return ProtoRecord;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/proto_record";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var List = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
	var RECORD_TYPE_SELF = 0;
	var RECORD_TYPE_CONST = 1;
	var RECORD_TYPE_PRIMITIVE_OP = 2;
	var RECORD_TYPE_PROPERTY = 3;
	var RECORD_TYPE_INVOKE_METHOD = 4;
	var RECORD_TYPE_INVOKE_CLOSURE = 5;
	var RECORD_TYPE_KEYED_ACCESS = 6;
	var RECORD_TYPE_PIPE = 8;
	var RECORD_TYPE_INTERPOLATE = 9;
	var ProtoRecord = function ProtoRecord(mode, name, funcOrValue, args, fixedArgs, contextIndex, selfIndex, bindingMemento, directiveMemento, expressionAsString, lastInBinding, lastInDirective) {
	  assert.argumentTypes(mode, assert.type.number, name, assert.type.string, funcOrValue, assert.type.any, args, List, fixedArgs, List, contextIndex, assert.type.number, selfIndex, assert.type.number, bindingMemento, assert.type.any, directiveMemento, assert.type.any, expressionAsString, assert.type.string, lastInBinding, assert.type.boolean, lastInDirective, assert.type.boolean);
	  this.mode = mode;
	  this.name = name;
	  this.funcOrValue = funcOrValue;
	  this.args = args;
	  this.fixedArgs = fixedArgs;
	  this.contextIndex = contextIndex;
	  this.selfIndex = selfIndex;
	  this.bindingMemento = bindingMemento;
	  this.directiveMemento = directiveMemento;
	  this.lastInBinding = lastInBinding;
	  this.lastInDirective = lastInDirective;
	  this.expressionAsString = expressionAsString;
	};
	($traceurRuntime.createClass)(ProtoRecord, {isPureFunction: function() {
	    return assert.returnType((this.mode === RECORD_TYPE_INTERPOLATE || this.mode === RECORD_TYPE_PRIMITIVE_OP), assert.type.boolean);
	  }}, {});
	Object.defineProperty(ProtoRecord, "parameters", {get: function() {
	    return [[assert.type.number], [assert.type.string], [], [List], [List], [assert.type.number], [assert.type.number], [assert.type.any], [assert.type.any], [assert.type.string], [assert.type.boolean], [assert.type.boolean]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/proto_record.map
	
	//# sourceMappingURL=./proto_record.map

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  List: {get: function() {
	      return List;
	    }},
	  Map: {get: function() {
	      return Map;
	    }},
	  Set: {get: function() {
	      return Set;
	    }},
	  StringMap: {get: function() {
	      return StringMap;
	    }},
	  MapWrapper: {get: function() {
	      return MapWrapper;
	    }},
	  StringMapWrapper: {get: function() {
	      return StringMapWrapper;
	    }},
	  ListWrapper: {get: function() {
	      return ListWrapper;
	    }},
	  isListLikeIterable: {get: function() {
	      return isListLikeIterable;
	    }},
	  iterateListLike: {get: function() {
	      return iterateListLike;
	    }},
	  SetWrapper: {get: function() {
	      return SetWrapper;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/facade/collection";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    int = $__1.int,
	    isJsObject = $__1.isJsObject,
	    global = $__1.global;
	var List = global.Array;
	var Map = global.Map;
	var Set = global.Set;
	var StringMap = global.Object;
	var MapWrapper = function MapWrapper() {};
	var $MapWrapper = MapWrapper;
	($traceurRuntime.createClass)(MapWrapper, {}, {
	  create: function() {
	    return assert.returnType((new Map()), Map);
	  },
	  clone: function(m) {
	    assert.argumentTypes(m, Map);
	    return assert.returnType((new Map(m)), Map);
	  },
	  createFromStringMap: function(stringMap) {
	    var result = $MapWrapper.create();
	    for (var prop = void 0 in stringMap) {
	      $MapWrapper.set(result, prop, stringMap[prop]);
	    }
	    return assert.returnType((result), Map);
	  },
	  createFromPairs: function(pairs) {
	    assert.argumentTypes(pairs, List);
	    return assert.returnType((new Map(pairs)), Map);
	  },
	  get: function(m, k) {
	    return m.get(k);
	  },
	  set: function(m, k, v) {
	    m.set(k, v);
	  },
	  contains: function(m, k) {
	    return m.has(k);
	  },
	  forEach: function(m, fn) {
	    m.forEach(fn);
	  },
	  size: function(m) {
	    return m.size;
	  },
	  delete: function(m, k) {
	    m.delete(k);
	  },
	  clear: function(m) {
	    m.clear();
	  },
	  iterable: function(m) {
	    return m;
	  },
	  keys: function(m) {
	    return m.keys();
	  },
	  values: function(m) {
	    return m.values();
	  }
	});
	Object.defineProperty(MapWrapper.clone, "parameters", {get: function() {
	    return [[Map]];
	  }});
	Object.defineProperty(MapWrapper.createFromPairs, "parameters", {get: function() {
	    return [[List]];
	  }});
	var StringMapWrapper = function StringMapWrapper() {};
	($traceurRuntime.createClass)(StringMapWrapper, {}, {
	  create: function() {
	    return assert.returnType(({}), Object);
	  },
	  contains: function(map, key) {
	    return map.hasOwnProperty(key);
	  },
	  get: function(map, key) {
	    return map.hasOwnProperty(key) ? map[key] : undefined;
	  },
	  set: function(map, key, value) {
	    map[key] = value;
	  },
	  isEmpty: function(map) {
	    for (var prop = void 0 in map) {
	      return false;
	    }
	    return true;
	  },
	  forEach: function(map, callback) {
	    for (var prop = void 0 in map) {
	      if (map.hasOwnProperty(prop)) {
	        callback(map[prop], prop);
	      }
	    }
	  },
	  merge: function(m1, m2) {
	    var m = {};
	    for (var attr = void 0 in m1) {
	      if (m1.hasOwnProperty(attr)) {
	        m[attr] = m1[attr];
	      }
	    }
	    for (var attr = void 0 in m2) {
	      if (m2.hasOwnProperty(attr)) {
	        m[attr] = m2[attr];
	      }
	    }
	    return m;
	  }
	});
	var ListWrapper = function ListWrapper() {};
	var $ListWrapper = ListWrapper;
	($traceurRuntime.createClass)(ListWrapper, {}, {
	  create: function() {
	    return assert.returnType((new List()), List);
	  },
	  createFixedSize: function(size) {
	    return assert.returnType((new List(size)), List);
	  },
	  get: function(m, k) {
	    return m[k];
	  },
	  set: function(m, k, v) {
	    m[k] = v;
	  },
	  clone: function(array) {
	    assert.argumentTypes(array, List);
	    return array.slice(0);
	  },
	  map: function(array, fn) {
	    return array.map(fn);
	  },
	  forEach: function(array, fn) {
	    assert.argumentTypes(array, List, fn, Function);
	    for (var i = 0; i < array.length; i++) {
	      fn(array[i]);
	    }
	  },
	  push: function(array, el) {
	    array.push(el);
	  },
	  first: function(array) {
	    if (!array)
	      return null;
	    return array[0];
	  },
	  last: function(array) {
	    if (!array || array.length == 0)
	      return null;
	    return array[array.length - 1];
	  },
	  find: function(list, pred) {
	    assert.argumentTypes(list, List, pred, Function);
	    for (var i = 0; i < list.length; ++i) {
	      if (pred(list[i]))
	        return list[i];
	    }
	    return null;
	  },
	  reduce: function(list, fn, init) {
	    assert.argumentTypes(list, List, fn, Function, init, assert.type.any);
	    return list.reduce(fn, init);
	  },
	  filter: function(array, pred) {
	    assert.argumentTypes(array, assert.type.any, pred, Function);
	    return array.filter(pred);
	  },
	  any: function(list, pred) {
	    assert.argumentTypes(list, List, pred, Function);
	    for (var i = 0; i < list.length; ++i) {
	      if (pred(list[i]))
	        return true;
	    }
	    return false;
	  },
	  contains: function(list, el) {
	    assert.argumentTypes(list, List, el, assert.type.any);
	    return list.indexOf(el) !== -1;
	  },
	  reversed: function(array) {
	    var a = $ListWrapper.clone(array);
	    return a.reverse();
	  },
	  concat: function(a, b) {
	    return a.concat(b);
	  },
	  isList: function(list) {
	    return Array.isArray(list);
	  },
	  insert: function(list, index, value) {
	    assert.argumentTypes(list, assert.type.any, index, int, value, assert.type.any);
	    list.splice(index, 0, value);
	  },
	  removeAt: function(list, index) {
	    assert.argumentTypes(list, assert.type.any, index, int);
	    var res = list[index];
	    list.splice(index, 1);
	    return res;
	  },
	  removeAll: function(list, items) {
	    for (var i = 0; i < items.length; ++i) {
	      var index = list.indexOf(items[i]);
	      list.splice(index, 1);
	    }
	  },
	  removeLast: function(list) {
	    assert.argumentTypes(list, List);
	    return list.pop();
	  },
	  remove: function(list, el) {
	    var index = list.indexOf(el);
	    if (index > -1) {
	      list.splice(index, 1);
	      return assert.returnType((true), assert.type.boolean);
	    }
	    return assert.returnType((false), assert.type.boolean);
	  },
	  clear: function(list) {
	    list.splice(0, list.length);
	  },
	  join: function(list, s) {
	    return list.join(s);
	  },
	  isEmpty: function(list) {
	    return list.length == 0;
	  },
	  fill: function(list, value) {
	    var start = arguments[2] !== (void 0) ? arguments[2] : 0;
	    var end = arguments[3] !== (void 0) ? arguments[3] : null;
	    assert.argumentTypes(list, List, value, assert.type.any, start, int, end, int);
	    list.fill(value, start, end === null ? undefined : end);
	  },
	  equals: function(a, b) {
	    assert.argumentTypes(a, List, b, List);
	    if (a.length != b.length)
	      return assert.returnType((false), assert.type.boolean);
	    for (var i = 0; i < a.length; ++i) {
	      if (a[i] !== b[i])
	        return assert.returnType((false), assert.type.boolean);
	    }
	    return assert.returnType((true), assert.type.boolean);
	  },
	  slice: function(l, from, to) {
	    assert.argumentTypes(l, List, from, int, to, int);
	    return assert.returnType((l.slice(from, to)), List);
	  },
	  sort: function(l, compareFn) {
	    assert.argumentTypes(l, List, compareFn, Function);
	    l.sort(compareFn);
	  }
	});
	Object.defineProperty(ListWrapper.clone, "parameters", {get: function() {
	    return [[List]];
	  }});
	Object.defineProperty(ListWrapper.forEach, "parameters", {get: function() {
	    return [[List], [Function]];
	  }});
	Object.defineProperty(ListWrapper.find, "parameters", {get: function() {
	    return [[List], [Function]];
	  }});
	Object.defineProperty(ListWrapper.reduce, "parameters", {get: function() {
	    return [[List], [Function], []];
	  }});
	Object.defineProperty(ListWrapper.filter, "parameters", {get: function() {
	    return [[], [Function]];
	  }});
	Object.defineProperty(ListWrapper.any, "parameters", {get: function() {
	    return [[List], [Function]];
	  }});
	Object.defineProperty(ListWrapper.contains, "parameters", {get: function() {
	    return [[List], []];
	  }});
	Object.defineProperty(ListWrapper.insert, "parameters", {get: function() {
	    return [[], [int], []];
	  }});
	Object.defineProperty(ListWrapper.removeAt, "parameters", {get: function() {
	    return [[], [int]];
	  }});
	Object.defineProperty(ListWrapper.removeLast, "parameters", {get: function() {
	    return [[List]];
	  }});
	Object.defineProperty(ListWrapper.fill, "parameters", {get: function() {
	    return [[List], [], [int], [int]];
	  }});
	Object.defineProperty(ListWrapper.equals, "parameters", {get: function() {
	    return [[List], [List]];
	  }});
	Object.defineProperty(ListWrapper.slice, "parameters", {get: function() {
	    return [[List], [int], [int]];
	  }});
	Object.defineProperty(ListWrapper.sort, "parameters", {get: function() {
	    return [[List], [Function]];
	  }});
	function isListLikeIterable(obj) {
	  if (!isJsObject(obj))
	    return assert.returnType((false), assert.type.boolean);
	  return assert.returnType((ListWrapper.isList(obj) || (!(obj instanceof Map) && Symbol.iterator in obj)), assert.type.boolean);
	}
	function iterateListLike(obj, fn) {
	  assert.argumentTypes(obj, assert.type.any, fn, Function);
	  if (ListWrapper.isList(obj)) {
	    for (var i = 0; i < obj.length; i++) {
	      fn(obj[i]);
	    }
	  } else {
	    var iterator = obj[Symbol.iterator]();
	    var item;
	    while (!((item = iterator.next()).done)) {
	      fn(item.value);
	    }
	  }
	}
	Object.defineProperty(iterateListLike, "parameters", {get: function() {
	    return [[], [Function]];
	  }});
	var SetWrapper = function SetWrapper() {};
	($traceurRuntime.createClass)(SetWrapper, {}, {
	  createFromList: function(lst) {
	    assert.argumentTypes(lst, List);
	    return new Set(lst);
	  },
	  has: function(s, key) {
	    assert.argumentTypes(s, Set, key, assert.type.any);
	    return assert.returnType((s.has(key)), assert.type.boolean);
	  }
	});
	Object.defineProperty(SetWrapper.createFromList, "parameters", {get: function() {
	    return [[List]];
	  }});
	Object.defineProperty(SetWrapper.has, "parameters", {get: function() {
	    return [[Set], []];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/facade/collection.map
	
	//# sourceMappingURL=./collection.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	Object.defineProperties(module.exports, {
	  global: {get: function() {
	      return _global;
	    }},
	  Type: {get: function() {
	      return Type;
	    }},
	  Math: {get: function() {
	      return Math;
	    }},
	  Date: {get: function() {
	      return Date;
	    }},
	  int: {get: function() {
	      return int;
	    }},
	  FIELD: {get: function() {
	      return FIELD;
	    }},
	  CONST: {get: function() {
	      return CONST;
	    }},
	  ABSTRACT: {get: function() {
	      return ABSTRACT;
	    }},
	  IMPLEMENTS: {get: function() {
	      return IMPLEMENTS;
	    }},
	  isPresent: {get: function() {
	      return isPresent;
	    }},
	  isBlank: {get: function() {
	      return isBlank;
	    }},
	  isString: {get: function() {
	      return isString;
	    }},
	  stringify: {get: function() {
	      return stringify;
	    }},
	  StringWrapper: {get: function() {
	      return StringWrapper;
	    }},
	  StringJoiner: {get: function() {
	      return StringJoiner;
	    }},
	  NumberParseError: {get: function() {
	      return NumberParseError;
	    }},
	  NumberWrapper: {get: function() {
	      return NumberWrapper;
	    }},
	  RegExp: {get: function() {
	      return RegExp;
	    }},
	  RegExpWrapper: {get: function() {
	      return RegExpWrapper;
	    }},
	  RegExpMatcherWrapper: {get: function() {
	      return RegExpMatcherWrapper;
	    }},
	  FunctionWrapper: {get: function() {
	      return FunctionWrapper;
	    }},
	  BaseException: {get: function() {
	      return BaseException;
	    }},
	  looseIdentical: {get: function() {
	      return looseIdentical;
	    }},
	  getMapKey: {get: function() {
	      return getMapKey;
	    }},
	  normalizeBlank: {get: function() {
	      return normalizeBlank;
	    }},
	  isJsObject: {get: function() {
	      return isJsObject;
	    }},
	  assertionsEnabled: {get: function() {
	      return assertionsEnabled;
	    }},
	  print: {get: function() {
	      return print;
	    }},
	  Json: {get: function() {
	      return Json;
	    }},
	  DateWrapper: {get: function() {
	      return DateWrapper;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/facade/lang";
	var $__rtts_95_assert_47_rtts_95_assert__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var _global = typeof window === 'undefined' ? global : window;
	;
	var Type = Function;
	var Math = _global.Math;
	var Date = _global.Date;
	var assertionsEnabled_ = typeof assert !== 'undefined';
	var int;
	if (assertionsEnabled_) {
	  _global.assert = assert;
	  int = assert.define('int', function(value) {
	    return typeof value === 'number' && value % 1 === 0;
	  });
	} else {
	  int = {};
	  _global.assert = function() {};
	}
	;
	var FIELD = function FIELD(definition) {
	  this.definition = definition;
	};
	($traceurRuntime.createClass)(FIELD, {}, {});
	var CONST = function CONST() {};
	($traceurRuntime.createClass)(CONST, {}, {});
	var ABSTRACT = function ABSTRACT() {};
	($traceurRuntime.createClass)(ABSTRACT, {}, {});
	var IMPLEMENTS = function IMPLEMENTS() {};
	($traceurRuntime.createClass)(IMPLEMENTS, {}, {});
	function isPresent(obj) {
	  return assert.returnType((obj !== undefined && obj !== null), assert.type.boolean);
	}
	function isBlank(obj) {
	  return assert.returnType((obj === undefined || obj === null), assert.type.boolean);
	}
	function isString(obj) {
	  return assert.returnType((typeof obj === "string"), assert.type.boolean);
	}
	function stringify(token) {
	  if (typeof token === 'string') {
	    return assert.returnType((token), assert.type.string);
	  }
	  if (token === undefined || token === null) {
	    return assert.returnType(('' + token), assert.type.string);
	  }
	  if (token.name) {
	    return assert.returnType((token.name), assert.type.string);
	  }
	  return assert.returnType((token.toString()), assert.type.string);
	}
	var StringWrapper = function StringWrapper() {};
	($traceurRuntime.createClass)(StringWrapper, {}, {
	  fromCharCode: function(code) {
	    assert.argumentTypes(code, int);
	    return assert.returnType((String.fromCharCode(code)), assert.type.string);
	  },
	  charCodeAt: function(s, index) {
	    assert.argumentTypes(s, assert.type.string, index, int);
	    return s.charCodeAt(index);
	  },
	  split: function(s, regExp) {
	    assert.argumentTypes(s, assert.type.string, regExp, RegExp);
	    return s.split(regExp.multiple);
	  },
	  equals: function(s, s2) {
	    assert.argumentTypes(s, assert.type.string, s2, assert.type.string);
	    return assert.returnType((s === s2), assert.type.boolean);
	  },
	  replace: function(s, from, replace) {
	    assert.argumentTypes(s, assert.type.string, from, assert.type.any, replace, assert.type.string);
	    if (typeof(from) === "string") {
	      return assert.returnType((s.replace(from, replace)), assert.type.string);
	    } else {
	      return assert.returnType((s.replace(from.single, replace)), assert.type.string);
	    }
	  },
	  replaceAll: function(s, from, replace) {
	    assert.argumentTypes(s, assert.type.string, from, RegExp, replace, assert.type.string);
	    return assert.returnType((s.replace(from.multiple, replace)), assert.type.string);
	  },
	  startsWith: function(s, start) {
	    assert.argumentTypes(s, assert.type.string, start, assert.type.string);
	    return s.startsWith(start);
	  },
	  substring: function(s, start) {
	    var end = arguments[2] !== (void 0) ? arguments[2] : null;
	    assert.argumentTypes(s, assert.type.string, start, int, end, int);
	    return s.substring(start, end === null ? undefined : end);
	  },
	  replaceAllMapped: function(s, from, cb) {
	    assert.argumentTypes(s, assert.type.string, from, RegExp, cb, Function);
	    return assert.returnType((s.replace(from.multiple, function() {
	      for (var matches = [],
	          $__2 = 0; $__2 < arguments.length; $__2++)
	        matches[$__2] = arguments[$__2];
	      matches.splice(-2, 2);
	      return cb(matches);
	    })), assert.type.string);
	  },
	  contains: function(s, substr) {
	    assert.argumentTypes(s, assert.type.string, substr, assert.type.string);
	    return assert.returnType((s.indexOf(substr) != -1), assert.type.boolean);
	  }
	});
	Object.defineProperty(StringWrapper.fromCharCode, "parameters", {get: function() {
	    return [[int]];
	  }});
	Object.defineProperty(StringWrapper.charCodeAt, "parameters", {get: function() {
	    return [[assert.type.string], [int]];
	  }});
	Object.defineProperty(StringWrapper.split, "parameters", {get: function() {
	    return [[assert.type.string], [RegExp]];
	  }});
	Object.defineProperty(StringWrapper.equals, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(StringWrapper.replace, "parameters", {get: function() {
	    return [[assert.type.string], [], [assert.type.string]];
	  }});
	Object.defineProperty(StringWrapper.replaceAll, "parameters", {get: function() {
	    return [[assert.type.string], [RegExp], [assert.type.string]];
	  }});
	Object.defineProperty(StringWrapper.startsWith, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(StringWrapper.substring, "parameters", {get: function() {
	    return [[assert.type.string], [int], [int]];
	  }});
	Object.defineProperty(StringWrapper.replaceAllMapped, "parameters", {get: function() {
	    return [[assert.type.string], [RegExp], [Function]];
	  }});
	Object.defineProperty(StringWrapper.contains, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	var StringJoiner = function StringJoiner() {
	  this.parts = [];
	};
	($traceurRuntime.createClass)(StringJoiner, {
	  add: function(part) {
	    assert.argumentTypes(part, assert.type.string);
	    this.parts.push(part);
	  },
	  toString: function() {
	    return assert.returnType((this.parts.join("")), assert.type.string);
	  }
	}, {});
	Object.defineProperty(StringJoiner.prototype.add, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var NumberParseError = function NumberParseError(message) {
	  $traceurRuntime.superConstructor($NumberParseError).call(this);
	  this.message = message;
	};
	var $NumberParseError = NumberParseError;
	($traceurRuntime.createClass)(NumberParseError, {toString: function() {
	    return this.message;
	  }}, {}, Error);
	var NumberWrapper = function NumberWrapper() {};
	($traceurRuntime.createClass)(NumberWrapper, {}, {
	  toFixed: function(n, fractionDigits) {
	    assert.argumentTypes(n, assert.type.number, fractionDigits, int);
	    return assert.returnType((n.toFixed(fractionDigits)), assert.type.string);
	  },
	  equal: function(a, b) {
	    return assert.returnType((a === b), assert.type.boolean);
	  },
	  parseIntAutoRadix: function(text) {
	    assert.argumentTypes(text, assert.type.string);
	    var result = assert.type(parseInt(text), int);
	    if (isNaN(result)) {
	      throw new NumberParseError("Invalid integer literal when parsing " + text);
	    }
	    return assert.returnType((result), int);
	  },
	  parseInt: function(text, radix) {
	    assert.argumentTypes(text, assert.type.string, radix, int);
	    if (radix == 10) {
	      if (/^(\-|\+)?[0-9]+$/.test(text)) {
	        return assert.returnType((parseInt(text, radix)), int);
	      }
	    } else if (radix == 16) {
	      if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	        return assert.returnType((parseInt(text, radix)), int);
	      }
	    } else {
	      var result = assert.type(parseInt(text, radix), int);
	      if (!isNaN(result)) {
	        return assert.returnType((result), int);
	      }
	    }
	    throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " + radix);
	  },
	  parseFloat: function(text) {
	    assert.argumentTypes(text, assert.type.string);
	    return assert.returnType((parseFloat(text)), assert.type.number);
	  },
	  get NaN() {
	    return assert.returnType((NaN), assert.type.number);
	  },
	  isNaN: function(value) {
	    return assert.returnType((isNaN(value)), assert.type.boolean);
	  },
	  isInteger: function(value) {
	    return assert.returnType((Number.isInteger(value)), assert.type.boolean);
	  }
	});
	Object.defineProperty(NumberWrapper.toFixed, "parameters", {get: function() {
	    return [[assert.type.number], [int]];
	  }});
	Object.defineProperty(NumberWrapper.parseIntAutoRadix, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(NumberWrapper.parseInt, "parameters", {get: function() {
	    return [[assert.type.string], [int]];
	  }});
	Object.defineProperty(NumberWrapper.parseFloat, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var RegExp;
	if (assertionsEnabled_) {
	  RegExp = assert.define('RegExp', function(obj) {
	    assert(obj).is(assert.structure({
	      single: _global.RegExp,
	      multiple: _global.RegExp
	    }));
	  });
	} else {
	  RegExp = {};
	}
	var RegExpWrapper = function RegExpWrapper() {};
	($traceurRuntime.createClass)(RegExpWrapper, {}, {
	  create: function(regExpStr) {
	    var flags = arguments[1] !== (void 0) ? arguments[1] : '';
	    assert.argumentTypes(regExpStr, assert.type.any, flags, assert.type.string);
	    flags = flags.replace(/g/g, '');
	    return assert.returnType(({
	      multiple: new _global.RegExp(regExpStr, flags + 'g'),
	      single: new _global.RegExp(regExpStr, flags)
	    }), RegExp);
	  },
	  firstMatch: function(regExp, input) {
	    return input.match(regExp.single);
	  },
	  matcher: function(regExp, input) {
	    return {
	      re: regExp.multiple,
	      input: input
	    };
	  }
	});
	Object.defineProperty(RegExpWrapper.create, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	var RegExpMatcherWrapper = function RegExpMatcherWrapper() {};
	($traceurRuntime.createClass)(RegExpMatcherWrapper, {}, {next: function(matcher) {
	    return matcher.re.exec(matcher.input);
	  }});
	var FunctionWrapper = function FunctionWrapper() {};
	($traceurRuntime.createClass)(FunctionWrapper, {}, {apply: function(fn, posArgs) {
	    assert.argumentTypes(fn, Function, posArgs, assert.type.any);
	    return fn.apply(null, posArgs);
	  }});
	Object.defineProperty(FunctionWrapper.apply, "parameters", {get: function() {
	    return [[Function], []];
	  }});
	var BaseException = Error;
	function looseIdentical(a, b) {
	  return assert.returnType((a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b)), assert.type.boolean);
	}
	function getMapKey(value) {
	  return value;
	}
	function normalizeBlank(obj) {
	  return isBlank(obj) ? null : obj;
	}
	function isJsObject(o) {
	  return assert.returnType((o !== null && (typeof o === "function" || typeof o === "object")), assert.type.boolean);
	}
	function assertionsEnabled() {
	  return assert.returnType((assertionsEnabled_), assert.type.boolean);
	}
	function print(obj) {
	  if (obj instanceof Error) {
	    console.log(obj.stack);
	  } else {
	    console.log(obj);
	  }
	}
	var Json = _global.JSON;
	var DateWrapper = function DateWrapper() {};
	($traceurRuntime.createClass)(DateWrapper, {}, {
	  fromMillis: function(ms) {
	    return new Date(ms);
	  },
	  now: function() {
	    return new Date();
	  }
	});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/facade/lang.map
	
	//# sourceMappingURL=./lang.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  uninitialized: {get: function() {
	      return uninitialized;
	    }},
	  SimpleChange: {get: function() {
	      return SimpleChange;
	    }},
	  ChangeDetectionUtil: {get: function() {
	      return ChangeDetectionUtil;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/change_detection_util";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__,
	    $__angular2_47_src_47_change_95_detection_47_proto_95_record__,
	    $__angular2_47_src_47_change_95_detection_47_exceptions__,
	    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__,
	    $__angular2_47_src_47_change_95_detection_47_interfaces__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__1.isPresent,
	    isBlank = $__1.isBlank,
	    BaseException = $__1.BaseException,
	    Type = $__1.Type;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper,
	    MapWrapper = $__2.MapWrapper,
	    StringMapWrapper = $__2.StringMapWrapper;
	var ContextWithVariableBindings = ($__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ = __webpack_require__(18), $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__}).ContextWithVariableBindings;
	var ProtoRecord = ($__angular2_47_src_47_change_95_detection_47_proto_95_record__ = __webpack_require__(44), $__angular2_47_src_47_change_95_detection_47_proto_95_record__ && $__angular2_47_src_47_change_95_detection_47_proto_95_record__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_record__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_record__}).ProtoRecord;
	var ExpressionChangedAfterItHasBeenChecked = ($__angular2_47_src_47_change_95_detection_47_exceptions__ = __webpack_require__(11), $__angular2_47_src_47_change_95_detection_47_exceptions__ && $__angular2_47_src_47_change_95_detection_47_exceptions__.__esModule && $__angular2_47_src_47_change_95_detection_47_exceptions__ || {default: $__angular2_47_src_47_change_95_detection_47_exceptions__}).ExpressionChangedAfterItHasBeenChecked;
	var NO_CHANGE = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = __webpack_require__(20), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__}).NO_CHANGE;
	var $__7 = ($__angular2_47_src_47_change_95_detection_47_interfaces__ = __webpack_require__(12), $__angular2_47_src_47_change_95_detection_47_interfaces__ && $__angular2_47_src_47_change_95_detection_47_interfaces__.__esModule && $__angular2_47_src_47_change_95_detection_47_interfaces__ || {default: $__angular2_47_src_47_change_95_detection_47_interfaces__}),
	    ChangeRecord = $__7.ChangeRecord,
	    ChangeDetector = $__7.ChangeDetector,
	    CHECK_ALWAYS = $__7.CHECK_ALWAYS,
	    CHECK_ONCE = $__7.CHECK_ONCE,
	    CHECKED = $__7.CHECKED,
	    DETACHED = $__7.DETACHED;
	var uninitialized = new Object();
	var SimpleChange = function SimpleChange(previousValue, currentValue) {
	  assert.argumentTypes(previousValue, assert.type.any, currentValue, assert.type.any);
	  this.previousValue = previousValue;
	  this.currentValue = currentValue;
	};
	($traceurRuntime.createClass)(SimpleChange, {}, {});
	Object.defineProperty(SimpleChange, "parameters", {get: function() {
	    return [[assert.type.any], [assert.type.any]];
	  }});
	var _simpleChangesIndex = 0;
	var _simpleChanges = [new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null)];
	var _changeRecordsIndex = 0;
	var _changeRecords = [new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null)];
	function _simpleChange(previousValue, currentValue) {
	  var index = _simpleChangesIndex++ % 20;
	  var s = _simpleChanges[index];
	  s.previousValue = previousValue;
	  s.currentValue = currentValue;
	  return s;
	}
	function _changeRecord(bindingMemento, change) {
	  var index = _changeRecordsIndex++ % 20;
	  var s = _changeRecords[index];
	  s.bindingMemento = bindingMemento;
	  s.change = change;
	  return s;
	}
	var _singleElementList = [null];
	var ChangeDetectionUtil = function ChangeDetectionUtil() {};
	($traceurRuntime.createClass)(ChangeDetectionUtil, {}, {
	  unitialized: function() {
	    return uninitialized;
	  },
	  arrayFn0: function() {
	    return [];
	  },
	  arrayFn1: function(a1) {
	    return [a1];
	  },
	  arrayFn2: function(a1, a2) {
	    return [a1, a2];
	  },
	  arrayFn3: function(a1, a2, a3) {
	    return [a1, a2, a3];
	  },
	  arrayFn4: function(a1, a2, a3, a4) {
	    return [a1, a2, a3, a4];
	  },
	  arrayFn5: function(a1, a2, a3, a4, a5) {
	    return [a1, a2, a3, a4, a5];
	  },
	  arrayFn6: function(a1, a2, a3, a4, a5, a6) {
	    return [a1, a2, a3, a4, a5, a6];
	  },
	  arrayFn7: function(a1, a2, a3, a4, a5, a6, a7) {
	    return [a1, a2, a3, a4, a5, a6, a7];
	  },
	  arrayFn8: function(a1, a2, a3, a4, a5, a6, a7, a8) {
	    return [a1, a2, a3, a4, a5, a6, a7, a8];
	  },
	  arrayFn9: function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	    return [a1, a2, a3, a4, a5, a6, a7, a8, a9];
	  },
	  operation_negate: function(value) {
	    return !value;
	  },
	  operation_add: function(left, right) {
	    return left + right;
	  },
	  operation_subtract: function(left, right) {
	    return left - right;
	  },
	  operation_multiply: function(left, right) {
	    return left * right;
	  },
	  operation_divide: function(left, right) {
	    return left / right;
	  },
	  operation_remainder: function(left, right) {
	    return left % right;
	  },
	  operation_equals: function(left, right) {
	    return left == right;
	  },
	  operation_not_equals: function(left, right) {
	    return left != right;
	  },
	  operation_less_then: function(left, right) {
	    return left < right;
	  },
	  operation_greater_then: function(left, right) {
	    return left > right;
	  },
	  operation_less_or_equals_then: function(left, right) {
	    return left <= right;
	  },
	  operation_greater_or_equals_then: function(left, right) {
	    return left >= right;
	  },
	  operation_logical_and: function(left, right) {
	    return left && right;
	  },
	  operation_logical_or: function(left, right) {
	    return left || right;
	  },
	  cond: function(cond, trueVal, falseVal) {
	    return cond ? trueVal : falseVal;
	  },
	  mapFn: function(keys) {
	    function buildMap(values) {
	      var res = StringMapWrapper.create();
	      for (var i = 0; i < keys.length; ++i) {
	        StringMapWrapper.set(res, keys[i], values[i]);
	      }
	      return res;
	    }
	    switch (keys.length) {
	      case 0:
	        return (function() {
	          return [];
	        });
	      case 1:
	        return (function(a1) {
	          return buildMap([a1]);
	        });
	      case 2:
	        return (function(a1, a2) {
	          return buildMap([a1, a2]);
	        });
	      case 3:
	        return (function(a1, a2, a3) {
	          return buildMap([a1, a2, a3]);
	        });
	      case 4:
	        return (function(a1, a2, a3, a4) {
	          return buildMap([a1, a2, a3, a4]);
	        });
	      case 5:
	        return (function(a1, a2, a3, a4, a5) {
	          return buildMap([a1, a2, a3, a4, a5]);
	        });
	      case 6:
	        return (function(a1, a2, a3, a4, a5, a6) {
	          return buildMap([a1, a2, a3, a4, a5, a6]);
	        });
	      case 7:
	        return (function(a1, a2, a3, a4, a5, a6, a7) {
	          return buildMap([a1, a2, a3, a4, a5, a6, a7]);
	        });
	      case 8:
	        return (function(a1, a2, a3, a4, a5, a6, a7, a8) {
	          return buildMap([a1, a2, a3, a4, a5, a6, a7, a8]);
	        });
	      case 9:
	        return (function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	          return buildMap([a1, a2, a3, a4, a5, a6, a7, a8, a9]);
	        });
	      default:
	        throw new BaseException("Does not support literal maps with more than 9 elements");
	    }
	  },
	  keyedAccess: function(obj, args) {
	    return obj[args[0]];
	  },
	  findContext: function(name, c) {
	    assert.argumentTypes(name, assert.type.string, c, assert.type.any);
	    while (c instanceof ContextWithVariableBindings) {
	      if (c.hasBinding(name)) {
	        return c;
	      }
	      c = c.parent;
	    }
	    return c;
	  },
	  noChangeMarker: function(value) {
	    return assert.returnType((value === NO_CHANGE), assert.type.boolean);
	  },
	  throwOnChange: function(proto, change) {
	    assert.argumentTypes(proto, ProtoRecord, change, assert.type.any);
	    throw new ExpressionChangedAfterItHasBeenChecked(proto, change);
	  },
	  simpleChange: function(previousValue, currentValue) {
	    assert.argumentTypes(previousValue, assert.type.any, currentValue, assert.type.any);
	    return assert.returnType((_simpleChange(previousValue, currentValue)), SimpleChange);
	  },
	  changeRecord: function(memento, change) {
	    assert.argumentTypes(memento, assert.type.any, change, assert.type.any);
	    return assert.returnType((_changeRecord(memento, change)), ChangeRecord);
	  },
	  simpleChangeRecord: function(memento, previousValue, currentValue) {
	    assert.argumentTypes(memento, assert.type.any, previousValue, assert.type.any, currentValue, assert.type.any);
	    return assert.returnType((_changeRecord(memento, _simpleChange(previousValue, currentValue))), ChangeRecord);
	  },
	  addRecord: function(updatedRecords, changeRecord) {
	    assert.argumentTypes(updatedRecords, List, changeRecord, ChangeRecord);
	    if (isBlank(updatedRecords)) {
	      updatedRecords = _singleElementList;
	      updatedRecords[0] = changeRecord;
	    } else if (updatedRecords === _singleElementList) {
	      updatedRecords = [_singleElementList[0], changeRecord];
	    } else {
	      ListWrapper.push(updatedRecords, changeRecord);
	    }
	    return assert.returnType((updatedRecords), List);
	  }
	});
	Object.defineProperty(ChangeDetectionUtil.mapFn, "parameters", {get: function() {
	    return [[List]];
	  }});
	Object.defineProperty(ChangeDetectionUtil.findContext, "parameters", {get: function() {
	    return [[assert.type.string], []];
	  }});
	Object.defineProperty(ChangeDetectionUtil.throwOnChange, "parameters", {get: function() {
	    return [[ProtoRecord], []];
	  }});
	Object.defineProperty(ChangeDetectionUtil.simpleChange, "parameters", {get: function() {
	    return [[assert.type.any], [assert.type.any]];
	  }});
	Object.defineProperty(ChangeDetectionUtil.changeRecord, "parameters", {get: function() {
	    return [[assert.type.any], [assert.type.any]];
	  }});
	Object.defineProperty(ChangeDetectionUtil.simpleChangeRecord, "parameters", {get: function() {
	    return [[assert.type.any], [assert.type.any], [assert.type.any]];
	  }});
	Object.defineProperty(ChangeDetectionUtil.addRecord, "parameters", {get: function() {
	    return [[List], [ChangeRecord]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/change_detection_util.map
	
	//# sourceMappingURL=./change_detection_util.map

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ChangeDetectorJITGenerator: {get: function() {
	      return ChangeDetectorJITGenerator;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/change_detection_jit_generator";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__,
	    $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__,
	    $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__,
	    $__angular2_47_src_47_change_95_detection_47_proto_95_record__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__1.isPresent,
	    isBlank = $__1.isBlank,
	    BaseException = $__1.BaseException,
	    Type = $__1.Type;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper,
	    MapWrapper = $__2.MapWrapper,
	    StringMapWrapper = $__2.StringMapWrapper;
	var ContextWithVariableBindings = ($__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ = __webpack_require__(18), $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__}).ContextWithVariableBindings;
	var AbstractChangeDetector = ($__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__ = __webpack_require__(50), $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__ && $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__.__esModule && $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__ || {default: $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__}).AbstractChangeDetector;
	var ChangeDetectionUtil = ($__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ = __webpack_require__(47), $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ && $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__.__esModule && $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ || {default: $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__}).ChangeDetectionUtil;
	var $__6 = ($__angular2_47_src_47_change_95_detection_47_proto_95_record__ = __webpack_require__(44), $__angular2_47_src_47_change_95_detection_47_proto_95_record__ && $__angular2_47_src_47_change_95_detection_47_proto_95_record__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_record__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_record__}),
	    ProtoRecord = $__6.ProtoRecord,
	    RECORD_TYPE_SELF = $__6.RECORD_TYPE_SELF,
	    RECORD_TYPE_PROPERTY = $__6.RECORD_TYPE_PROPERTY,
	    RECORD_TYPE_INVOKE_METHOD = $__6.RECORD_TYPE_INVOKE_METHOD,
	    RECORD_TYPE_CONST = $__6.RECORD_TYPE_CONST,
	    RECORD_TYPE_INVOKE_CLOSURE = $__6.RECORD_TYPE_INVOKE_CLOSURE,
	    RECORD_TYPE_PRIMITIVE_OP = $__6.RECORD_TYPE_PRIMITIVE_OP,
	    RECORD_TYPE_KEYED_ACCESS = $__6.RECORD_TYPE_KEYED_ACCESS,
	    RECORD_TYPE_PIPE = $__6.RECORD_TYPE_PIPE,
	    RECORD_TYPE_INTERPOLATE = $__6.RECORD_TYPE_INTERPOLATE;
	var ABSTRACT_CHANGE_DETECTOR = "AbstractChangeDetector";
	var UTIL = "ChangeDetectionUtil";
	var DISPATCHER_ACCESSOR = "this.dispatcher";
	var PIPE_REGISTRY_ACCESSOR = "this.pipeRegistry";
	var PROTOS_ACCESSOR = "this.protos";
	var CHANGE_LOCAL = "change";
	var CHANGES_LOCAL = "changes";
	var TEMP_LOCAL = "temp";
	function typeTemplate(type, cons, detectChanges, setContext) {
	  assert.argumentTypes(type, assert.type.string, cons, assert.type.string, detectChanges, assert.type.string, setContext, assert.type.string);
	  return assert.returnType((("\n" + cons + "\n" + detectChanges + "\n" + setContext + ";\n\nreturn function(dispatcher, pipeRegistry) {\n  return new " + type + "(dispatcher, pipeRegistry, protos);\n}\n")), assert.type.string);
	}
	Object.defineProperty(typeTemplate, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
	  }});
	function constructorTemplate(type, fieldsDefinitions) {
	  assert.argumentTypes(type, assert.type.string, fieldsDefinitions, assert.type.string);
	  return assert.returnType((("\nvar " + type + " = function " + type + "(dispatcher, pipeRegistry, protos) {\n" + ABSTRACT_CHANGE_DETECTOR + ".call(this);\n" + DISPATCHER_ACCESSOR + " = dispatcher;\n" + PIPE_REGISTRY_ACCESSOR + " = pipeRegistry;\n" + PROTOS_ACCESSOR + " = protos;\n" + fieldsDefinitions + "\n}\n\n" + type + ".prototype = Object.create(" + ABSTRACT_CHANGE_DETECTOR + ".prototype);\n")), assert.type.string);
	}
	Object.defineProperty(constructorTemplate, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	function setContextTemplate(type) {
	  assert.argumentTypes(type, assert.type.string);
	  return assert.returnType((("\n" + type + ".prototype.setContext = function(context) {\n  this.context = context;\n}\n")), assert.type.string);
	}
	Object.defineProperty(setContextTemplate, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	function detectChangesTemplate(type, body) {
	  assert.argumentTypes(type, assert.type.string, body, assert.type.string);
	  return assert.returnType((("\n" + type + ".prototype.detectChangesInRecords = function(throwOnChange) {\n  " + body + "\n}\n")), assert.type.string);
	}
	Object.defineProperty(detectChangesTemplate, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	function bodyTemplate(localDefinitions, changeDefinitions, records) {
	  assert.argumentTypes(localDefinitions, assert.type.string, changeDefinitions, assert.type.string, records, assert.type.string);
	  return assert.returnType((("\n" + localDefinitions + "\n" + changeDefinitions + "\nvar " + TEMP_LOCAL + ";\nvar " + CHANGE_LOCAL + ";\nvar " + CHANGES_LOCAL + " = null;\n\ncontext = this.context;\n" + records + "\n")), assert.type.string);
	}
	Object.defineProperty(bodyTemplate, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string]];
	  }});
	function notifyTemplate(index) {
	  assert.argumentTypes(index, assert.type.number);
	  return assert.returnType((("\nif (" + CHANGES_LOCAL + " && " + CHANGES_LOCAL + ".length > 0) {\n  if(throwOnChange) " + UTIL + ".throwOnChange(" + PROTOS_ACCESSOR + "[" + index + "], " + CHANGES_LOCAL + "[0]);\n  " + DISPATCHER_ACCESSOR + ".onRecordChange(" + PROTOS_ACCESSOR + "[" + index + "].directiveMemento, " + CHANGES_LOCAL + ");\n  " + CHANGES_LOCAL + " = null;\n}\n")), assert.type.string);
	}
	Object.defineProperty(notifyTemplate, "parameters", {get: function() {
	    return [[assert.type.number]];
	  }});
	function pipeCheckTemplate(context, pipe, pipeType, value, change, addRecord, notify) {
	  assert.argumentTypes(context, assert.type.string, pipe, assert.type.string, pipeType, assert.type.string, value, assert.type.string, change, assert.type.string, addRecord, assert.type.string, notify, assert.type.string);
	  return assert.returnType((("\nif (" + pipe + " === " + UTIL + ".unitialized() || !" + pipe + ".supports(" + context + ")) {\n  " + pipe + " = " + PIPE_REGISTRY_ACCESSOR + ".get('" + pipeType + "', " + context + ");\n}\n\n" + CHANGE_LOCAL + " = " + pipe + ".transform(" + context + ");\nif (! " + UTIL + ".noChangeMarker(" + CHANGE_LOCAL + ")) {\n  " + value + " = " + CHANGE_LOCAL + ";\n  " + change + " = true;\n  " + addRecord + "\n}\n" + notify + "\n")), assert.type.string);
	}
	Object.defineProperty(pipeCheckTemplate, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
	  }});
	function referenceCheckTemplate(assignment, newValue, oldValue, change, addRecord, notify) {
	  return ("\n" + assignment + "\nif (" + newValue + " !== " + oldValue + " || (" + newValue + " !== " + newValue + ") && (" + oldValue + " !== " + oldValue + ")) {\n  " + change + " = true;\n  " + addRecord + "\n  " + oldValue + " = " + newValue + ";\n}\n" + notify + "\n");
	}
	function assignmentTemplate(field, value) {
	  assert.argumentTypes(field, assert.type.string, value, assert.type.string);
	  return (field + " = " + value + ";");
	}
	Object.defineProperty(assignmentTemplate, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	function propertyReadTemplate(name, context, newValue) {
	  assert.argumentTypes(name, assert.type.string, context, assert.type.string, newValue, assert.type.string);
	  return ("\n" + TEMP_LOCAL + " = " + UTIL + ".findContext(\"" + name + "\", " + context + ");\nif (" + TEMP_LOCAL + " instanceof ContextWithVariableBindings) {\n  " + newValue + " = " + TEMP_LOCAL + ".get('" + name + "');\n} else {\n  " + newValue + " = " + TEMP_LOCAL + "." + name + ";\n}\n");
	}
	Object.defineProperty(propertyReadTemplate, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string]];
	  }});
	function invokeMethodTemplate(name, args, context, newValue) {
	  assert.argumentTypes(name, assert.type.string, args, assert.type.string, context, assert.type.string, newValue, assert.type.string);
	  return ("\n" + TEMP_LOCAL + " = " + UTIL + ".findContext(\"" + name + "\", " + context + ");\nif (" + TEMP_LOCAL + " instanceof ContextWithVariableBindings) {\n  " + newValue + " = " + TEMP_LOCAL + ".get('" + name + "').apply(null, [" + args + "]);\n} else {\n  " + newValue + " = " + context + "." + name + "(" + args + ");\n}\n");
	}
	Object.defineProperty(invokeMethodTemplate, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
	  }});
	function localDefinitionsTemplate(names) {
	  return assert.returnType((names.map((function(n) {
	    return ("var " + n + ";");
	  })).join("\n")), assert.type.string);
	}
	Object.defineProperty(localDefinitionsTemplate, "parameters", {get: function() {
	    return [[List]];
	  }});
	function changeDefinitionsTemplate(names) {
	  return assert.returnType((names.map((function(n) {
	    return ("var " + n + " = false;");
	  })).join("\n")), assert.type.string);
	}
	Object.defineProperty(changeDefinitionsTemplate, "parameters", {get: function() {
	    return [[List]];
	  }});
	function fieldDefinitionsTemplate(names) {
	  return assert.returnType((names.map((function(n) {
	    return (n + " = " + UTIL + ".unitialized();");
	  })).join("\n")), assert.type.string);
	}
	Object.defineProperty(fieldDefinitionsTemplate, "parameters", {get: function() {
	    return [[List]];
	  }});
	function ifChangedGuardTemplate(changeNames, body) {
	  assert.argumentTypes(changeNames, List, body, assert.type.string);
	  var cond = changeNames.join(" || ");
	  return assert.returnType((("\nif (" + cond + ") {\n  " + body + "\n}\n")), assert.type.string);
	}
	Object.defineProperty(ifChangedGuardTemplate, "parameters", {get: function() {
	    return [[List], [assert.type.string]];
	  }});
	function addSimpleChangeRecordTemplate(protoIndex, oldValue, newValue) {
	  assert.argumentTypes(protoIndex, assert.type.number, oldValue, assert.type.string, newValue, assert.type.string);
	  return (CHANGES_LOCAL + " = " + UTIL + ".addRecord(" + CHANGES_LOCAL + ",\n    " + UTIL + ".simpleChangeRecord(" + PROTOS_ACCESSOR + "[" + protoIndex + "].bindingMemento, " + oldValue + ", " + newValue + "));");
	}
	Object.defineProperty(addSimpleChangeRecordTemplate, "parameters", {get: function() {
	    return [[assert.type.number], [assert.type.string], [assert.type.string]];
	  }});
	var ChangeDetectorJITGenerator = function ChangeDetectorJITGenerator(typeName, records) {
	  assert.argumentTypes(typeName, assert.type.string, records, assert.genericType(List, ProtoRecord));
	  this.typeName = typeName;
	  this.records = records;
	  this.localNames = this.getLocalNames(records);
	  this.changeNames = this.getChangeNames(this.localNames);
	  this.fieldNames = this.getFieldNames(this.localNames);
	  this.pipeNames = this.getPipeNames(this.localNames);
	};
	($traceurRuntime.createClass)(ChangeDetectorJITGenerator, {
	  getLocalNames: function(records) {
	    assert.argumentTypes(records, assert.genericType(List, ProtoRecord));
	    var index = 0;
	    var names = records.map((function(r) {
	      var sanitizedName = r.name.replace(new RegExp("\\W", "g"), '');
	      return ("" + sanitizedName + index++);
	    }));
	    return assert.returnType((["context"].concat(names)), assert.genericType(List, String));
	  },
	  getChangeNames: function(localNames) {
	    return assert.returnType((localNames.map((function(n) {
	      return ("change_" + n);
	    }))), assert.genericType(List, String));
	  },
	  getFieldNames: function(localNames) {
	    return assert.returnType((localNames.map((function(n) {
	      return ("this." + n);
	    }))), assert.genericType(List, String));
	  },
	  getPipeNames: function(localNames) {
	    return assert.returnType((localNames.map((function(n) {
	      return ("this." + n + "_pipe");
	    }))), assert.genericType(List, String));
	  },
	  generate: function() {
	    var text = typeTemplate(this.typeName, this.genConstructor(), this.genDetectChanges(), this.genSetContext());
	    return assert.returnType((new Function('AbstractChangeDetector', 'ChangeDetectionUtil', 'ContextWithVariableBindings', 'protos', text)(AbstractChangeDetector, ChangeDetectionUtil, ContextWithVariableBindings, this.records)), Function);
	  },
	  genConstructor: function() {
	    var $__7 = this;
	    var fields = [];
	    fields = fields.concat(this.fieldNames);
	    this.records.forEach((function(r) {
	      if (r.mode === RECORD_TYPE_PIPE) {
	        fields.push($__7.pipeNames[r.selfIndex]);
	      }
	    }));
	    return assert.returnType((constructorTemplate(this.typeName, fieldDefinitionsTemplate(fields))), assert.type.string);
	  },
	  genSetContext: function() {
	    return assert.returnType((setContextTemplate(this.typeName)), assert.type.string);
	  },
	  genDetectChanges: function() {
	    var body = this.genBody();
	    return assert.returnType((detectChangesTemplate(this.typeName, body)), assert.type.string);
	  },
	  genBody: function() {
	    var $__7 = this;
	    var rec = this.records.map((function(r) {
	      return $__7.genRecord(r);
	    })).join("\n");
	    return assert.returnType((bodyTemplate(this.genLocalDefinitions(), this.genChangeDefinitions(), rec)), assert.type.string);
	  },
	  genLocalDefinitions: function() {
	    return assert.returnType((localDefinitionsTemplate(this.localNames)), assert.type.string);
	  },
	  genChangeDefinitions: function() {
	    return assert.returnType((changeDefinitionsTemplate(this.changeNames)), assert.type.string);
	  },
	  genRecord: function(r) {
	    assert.argumentTypes(r, ProtoRecord);
	    if (r.mode === RECORD_TYPE_PIPE) {
	      return assert.returnType((this.genPipeCheck(r)), assert.type.string);
	    } else {
	      return assert.returnType((this.genReferenceCheck(r)), assert.type.string);
	    }
	  },
	  genPipeCheck: function(r) {
	    assert.argumentTypes(r, ProtoRecord);
	    var context = this.localNames[r.contextIndex];
	    var pipe = this.pipeNames[r.selfIndex];
	    var newValue = this.localNames[r.selfIndex];
	    var oldValue = this.fieldNames[r.selfIndex];
	    var change = this.changeNames[r.selfIndex];
	    var addRecord = addSimpleChangeRecordTemplate(r.selfIndex - 1, oldValue, newValue);
	    var notify = this.genNotify(r);
	    return assert.returnType((pipeCheckTemplate(context, pipe, r.name, newValue, change, addRecord, notify)), assert.type.string);
	  },
	  genReferenceCheck: function(r) {
	    assert.argumentTypes(r, ProtoRecord);
	    var newValue = this.localNames[r.selfIndex];
	    var oldValue = this.fieldNames[r.selfIndex];
	    var change = this.changeNames[r.selfIndex];
	    var assignment = this.genUpdateCurrentValue(r);
	    var addRecord = addSimpleChangeRecordTemplate(r.selfIndex - 1, oldValue, newValue);
	    var notify = this.genNotify(r);
	    var check = referenceCheckTemplate(assignment, newValue, oldValue, change, r.lastInBinding ? addRecord : '', notify);
	    ;
	    if (r.isPureFunction()) {
	      return assert.returnType((this.ifChangedGuard(r, check)), assert.type.string);
	    } else {
	      return assert.returnType((check), assert.type.string);
	    }
	  },
	  genUpdateCurrentValue: function(r) {
	    assert.argumentTypes(r, ProtoRecord);
	    var context = this.localNames[r.contextIndex];
	    var newValue = this.localNames[r.selfIndex];
	    var args = this.genArgs(r);
	    switch (r.mode) {
	      case RECORD_TYPE_SELF:
	        return assert.returnType((assignmentTemplate(newValue, context)), assert.type.string);
	      case RECORD_TYPE_CONST:
	        return assert.returnType(((newValue + " = " + this.genLiteral(r.funcOrValue))), assert.type.string);
	      case RECORD_TYPE_PROPERTY:
	        if (r.contextIndex == 0) {
	          return assert.returnType((propertyReadTemplate(r.name, context, newValue)), assert.type.string);
	        } else {
	          return assert.returnType((assignmentTemplate(newValue, (context + "." + r.name))), assert.type.string);
	        }
	      case RECORD_TYPE_INVOKE_METHOD:
	        if (r.contextIndex == 0) {
	          return assert.returnType((invokeMethodTemplate(r.name, args, context, newValue)), assert.type.string);
	        } else {
	          return assert.returnType((assignmentTemplate(newValue, (context + "." + r.name + "(" + args + ")"))), assert.type.string);
	        }
	      case RECORD_TYPE_INVOKE_CLOSURE:
	        return assert.returnType((assignmentTemplate(newValue, (context + "(" + args + ")"))), assert.type.string);
	      case RECORD_TYPE_PRIMITIVE_OP:
	        return assert.returnType((assignmentTemplate(newValue, (UTIL + "." + r.name + "(" + args + ")"))), assert.type.string);
	      case RECORD_TYPE_INTERPOLATE:
	        return assert.returnType((assignmentTemplate(newValue, this.genInterpolation(r))), assert.type.string);
	      case RECORD_TYPE_KEYED_ACCESS:
	        var key = this.localNames[r.args[0]];
	        return assert.returnType((assignmentTemplate(newValue, (context + "[" + key + "]"))), assert.type.string);
	      default:
	        throw new BaseException(("Unknown operation " + r.mode));
	    }
	  },
	  ifChangedGuard: function(r, body) {
	    var $__7 = this;
	    return assert.returnType((ifChangedGuardTemplate(r.args.map((function(a) {
	      return $__7.changeNames[a];
	    })), body)), assert.type.string);
	  },
	  genInterpolation: function(r) {
	    assert.argumentTypes(r, ProtoRecord);
	    var res = "";
	    for (var i = 0; i < r.args.length; ++i) {
	      res += this.genLiteral(r.fixedArgs[i]);
	      res += " + ";
	      res += this.localNames[r.args[i]];
	      res += " + ";
	    }
	    res += this.genLiteral(r.fixedArgs[r.args.length]);
	    return assert.returnType((res), assert.type.string);
	  },
	  genLiteral: function(value) {
	    return assert.returnType((JSON.stringify(value)), assert.type.string);
	  },
	  genNotify: function(r) {
	    return assert.returnType((r.lastInDirective ? notifyTemplate(r.selfIndex - 1) : ''), assert.type.string);
	  },
	  genArgs: function(r) {
	    var $__7 = this;
	    return assert.returnType((r.args.map((function(arg) {
	      return $__7.localNames[arg];
	    })).join(", ")), assert.type.string);
	  }
	}, {});
	Object.defineProperty(ChangeDetectorJITGenerator, "parameters", {get: function() {
	    return [[assert.type.string], [assert.genericType(List, ProtoRecord)]];
	  }});
	Object.defineProperty(ChangeDetectorJITGenerator.prototype.getLocalNames, "parameters", {get: function() {
	    return [[assert.genericType(List, ProtoRecord)]];
	  }});
	Object.defineProperty(ChangeDetectorJITGenerator.prototype.getChangeNames, "parameters", {get: function() {
	    return [[assert.genericType(List, String)]];
	  }});
	Object.defineProperty(ChangeDetectorJITGenerator.prototype.getFieldNames, "parameters", {get: function() {
	    return [[assert.genericType(List, String)]];
	  }});
	Object.defineProperty(ChangeDetectorJITGenerator.prototype.getPipeNames, "parameters", {get: function() {
	    return [[assert.genericType(List, String)]];
	  }});
	Object.defineProperty(ChangeDetectorJITGenerator.prototype.genRecord, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(ChangeDetectorJITGenerator.prototype.genPipeCheck, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(ChangeDetectorJITGenerator.prototype.genReferenceCheck, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(ChangeDetectorJITGenerator.prototype.genUpdateCurrentValue, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(ChangeDetectorJITGenerator.prototype.ifChangedGuard, "parameters", {get: function() {
	    return [[ProtoRecord], [assert.type.string]];
	  }});
	Object.defineProperty(ChangeDetectorJITGenerator.prototype.genInterpolation, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	Object.defineProperty(ChangeDetectorJITGenerator.prototype.genArgs, "parameters", {get: function() {
	    return [[ProtoRecord]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/change_detection_jit_generator.map
	
	//# sourceMappingURL=./change_detection_jit_generator.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  coalesce: {get: function() {
	      return coalesce;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/coalesce";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_change_95_detection_47_proto_95_record__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var isPresent = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper,
	    Map = $__2.Map,
	    MapWrapper = $__2.MapWrapper;
	var $__3 = ($__angular2_47_src_47_change_95_detection_47_proto_95_record__ = __webpack_require__(44), $__angular2_47_src_47_change_95_detection_47_proto_95_record__ && $__angular2_47_src_47_change_95_detection_47_proto_95_record__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_record__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_record__}),
	    RECORD_TYPE_SELF = $__3.RECORD_TYPE_SELF,
	    ProtoRecord = $__3.ProtoRecord;
	function coalesce(records) {
	  assert.argumentTypes(records, assert.genericType(List, ProtoRecord));
	  var res = ListWrapper.create();
	  var indexMap = MapWrapper.create();
	  for (var i = 0; i < records.length; ++i) {
	    var r = records[i];
	    var record = _replaceIndices(r, res.length + 1, indexMap);
	    var matchingRecord = _findMatching(record, res);
	    if (isPresent(matchingRecord) && record.lastInBinding) {
	      ListWrapper.push(res, _selfRecord(record, matchingRecord.selfIndex, res.length + 1));
	      MapWrapper.set(indexMap, r.selfIndex, matchingRecord.selfIndex);
	    } else if (isPresent(matchingRecord) && !record.lastInBinding) {
	      MapWrapper.set(indexMap, r.selfIndex, matchingRecord.selfIndex);
	    } else {
	      ListWrapper.push(res, record);
	      MapWrapper.set(indexMap, r.selfIndex, record.selfIndex);
	    }
	  }
	  return assert.returnType((res), assert.genericType(List, ProtoRecord));
	}
	Object.defineProperty(coalesce, "parameters", {get: function() {
	    return [[assert.genericType(List, ProtoRecord)]];
	  }});
	function _selfRecord(r, contextIndex, selfIndex) {
	  assert.argumentTypes(r, ProtoRecord, contextIndex, assert.type.number, selfIndex, assert.type.number);
	  return assert.returnType((new ProtoRecord(RECORD_TYPE_SELF, "self", null, [], r.fixedArgs, contextIndex, selfIndex, r.bindingMemento, r.directiveMemento, r.expressionAsString, r.lastInBinding, r.lastInDirective)), ProtoRecord);
	}
	Object.defineProperty(_selfRecord, "parameters", {get: function() {
	    return [[ProtoRecord], [assert.type.number], [assert.type.number]];
	  }});
	function _findMatching(r, rs) {
	  return ListWrapper.find(rs, (function(rr) {
	    return rr.mode === r.mode && rr.funcOrValue === r.funcOrValue && rr.contextIndex === r.contextIndex && ListWrapper.equals(rr.args, r.args);
	  }));
	}
	Object.defineProperty(_findMatching, "parameters", {get: function() {
	    return [[ProtoRecord], [assert.genericType(List, ProtoRecord)]];
	  }});
	function _replaceIndices(r, selfIndex, indexMap) {
	  var args = ListWrapper.map(r.args, (function(a) {
	    return _map(indexMap, a);
	  }));
	  var contextIndex = _map(indexMap, r.contextIndex);
	  return new ProtoRecord(r.mode, r.name, r.funcOrValue, args, r.fixedArgs, contextIndex, selfIndex, r.bindingMemento, r.directiveMemento, r.expressionAsString, r.lastInBinding, r.lastInDirective);
	}
	Object.defineProperty(_replaceIndices, "parameters", {get: function() {
	    return [[ProtoRecord], [assert.type.number], [Map]];
	  }});
	function _map(indexMap, value) {
	  assert.argumentTypes(indexMap, Map, value, assert.type.number);
	  var r = MapWrapper.get(indexMap, value);
	  return isPresent(r) ? r : value;
	}
	Object.defineProperty(_map, "parameters", {get: function() {
	    return [[Map], [assert.type.number]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/coalesce.map
	
	//# sourceMappingURL=./coalesce.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  AbstractChangeDetector: {get: function() {
	      return AbstractChangeDetector;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/change_detection/abstract_change_detector";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_change_95_detection_47_interfaces__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var isPresent = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper;
	var $__3 = ($__angular2_47_src_47_change_95_detection_47_interfaces__ = __webpack_require__(12), $__angular2_47_src_47_change_95_detection_47_interfaces__ && $__angular2_47_src_47_change_95_detection_47_interfaces__.__esModule && $__angular2_47_src_47_change_95_detection_47_interfaces__ || {default: $__angular2_47_src_47_change_95_detection_47_interfaces__}),
	    ChangeDetector = $__3.ChangeDetector,
	    CHECK_ALWAYS = $__3.CHECK_ALWAYS,
	    CHECK_ONCE = $__3.CHECK_ONCE,
	    CHECKED = $__3.CHECKED,
	    DETACHED = $__3.DETACHED;
	var AbstractChangeDetector = function AbstractChangeDetector() {
	  $traceurRuntime.superConstructor($AbstractChangeDetector).call(this);
	  this.children = [];
	  this.mode = CHECK_ALWAYS;
	};
	var $AbstractChangeDetector = AbstractChangeDetector;
	($traceurRuntime.createClass)(AbstractChangeDetector, {
	  addChild: function(cd) {
	    assert.argumentTypes(cd, ChangeDetector);
	    ListWrapper.push(this.children, cd);
	    cd.parent = this;
	  },
	  removeChild: function(cd) {
	    assert.argumentTypes(cd, ChangeDetector);
	    ListWrapper.remove(this.children, cd);
	  },
	  remove: function() {
	    this.parent.removeChild(this);
	  },
	  detectChanges: function() {
	    this._detectChanges(false);
	  },
	  checkNoChanges: function() {
	    this._detectChanges(true);
	  },
	  _detectChanges: function(throwOnChange) {
	    assert.argumentTypes(throwOnChange, assert.type.boolean);
	    if (this.mode === DETACHED || this.mode === CHECKED)
	      return ;
	    this.detectChangesInRecords(throwOnChange);
	    this._detectChangesInChildren(throwOnChange);
	    if (this.mode === CHECK_ONCE)
	      this.mode = CHECKED;
	  },
	  detectChangesInRecords: function(throwOnChange) {
	    assert.argumentTypes(throwOnChange, assert.type.boolean);
	  },
	  _detectChangesInChildren: function(throwOnChange) {
	    assert.argumentTypes(throwOnChange, assert.type.boolean);
	    var children = this.children;
	    for (var i = 0; i < children.length; ++i) {
	      children[i]._detectChanges(throwOnChange);
	    }
	  },
	  markPathToRootAsCheckOnce: function() {
	    var c = this;
	    while (isPresent(c) && c.mode != DETACHED) {
	      if (c.mode === CHECKED)
	        c.mode = CHECK_ONCE;
	      c = c.parent;
	    }
	  }
	}, {}, ChangeDetector);
	Object.defineProperty(AbstractChangeDetector.prototype.addChild, "parameters", {get: function() {
	    return [[ChangeDetector]];
	  }});
	Object.defineProperty(AbstractChangeDetector.prototype.removeChild, "parameters", {get: function() {
	    return [[ChangeDetector]];
	  }});
	Object.defineProperty(AbstractChangeDetector.prototype._detectChanges, "parameters", {get: function() {
	    return [[assert.type.boolean]];
	  }});
	Object.defineProperty(AbstractChangeDetector.prototype.detectChangesInRecords, "parameters", {get: function() {
	    return [[assert.type.boolean]];
	  }});
	Object.defineProperty(AbstractChangeDetector.prototype._detectChangesInChildren, "parameters", {get: function() {
	    return [[assert.type.boolean]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/change_detection/abstract_change_detector.map
	
	//# sourceMappingURL=./abstract_change_detector.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Reflector: {get: function() {
	      return $__angular2_47_src_47_reflection_47_reflector__.Reflector;
	    }},
	  reflector: {get: function() {
	      return reflector;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/reflection/reflection";
	var $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_reflection_47_reflector__,
	    $__angular2_47_src_47_reflection_47_reflector__,
	    $__angular2_47_src_47_reflection_47_reflection_95_capabilities__;
	var $__0 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    Type = $__0.Type,
	    isPresent = $__0.isPresent;
	var $__1 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__1.List,
	    ListWrapper = $__1.ListWrapper;
	var Reflector = ($__angular2_47_src_47_reflection_47_reflector__ = __webpack_require__(82), $__angular2_47_src_47_reflection_47_reflector__ && $__angular2_47_src_47_reflection_47_reflector__.__esModule && $__angular2_47_src_47_reflection_47_reflector__ || {default: $__angular2_47_src_47_reflection_47_reflector__}).Reflector;
	var $__angular2_47_src_47_reflection_47_reflector__ = ($__angular2_47_src_47_reflection_47_reflector__ = __webpack_require__(82), $__angular2_47_src_47_reflection_47_reflector__ && $__angular2_47_src_47_reflection_47_reflector__.__esModule && $__angular2_47_src_47_reflection_47_reflector__ || {default: $__angular2_47_src_47_reflection_47_reflector__});
	var ReflectionCapabilities = ($__angular2_47_src_47_reflection_47_reflection_95_capabilities__ = __webpack_require__(83), $__angular2_47_src_47_reflection_47_reflection_95_capabilities__ && $__angular2_47_src_47_reflection_47_reflection_95_capabilities__.__esModule && $__angular2_47_src_47_reflection_47_reflection_95_capabilities__ || {default: $__angular2_47_src_47_reflection_47_reflection_95_capabilities__}).ReflectionCapabilities;
	var reflector = new Reflector(new ReflectionCapabilities());
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/reflection/reflection.map
	
	//# sourceMappingURL=./reflection.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Inject: {get: function() {
	      return $__angular2_47_src_47_di_47_annotations__.Inject;
	    }},
	  InjectPromise: {get: function() {
	      return $__angular2_47_src_47_di_47_annotations__.InjectPromise;
	    }},
	  InjectLazy: {get: function() {
	      return $__angular2_47_src_47_di_47_annotations__.InjectLazy;
	    }},
	  DependencyAnnotation: {get: function() {
	      return $__angular2_47_src_47_di_47_annotations__.DependencyAnnotation;
	    }},
	  Injector: {get: function() {
	      return $__angular2_47_src_47_di_47_injector__.Injector;
	    }},
	  Binding: {get: function() {
	      return $__angular2_47_src_47_di_47_binding__.Binding;
	    }},
	  Dependency: {get: function() {
	      return $__angular2_47_src_47_di_47_binding__.Dependency;
	    }},
	  bind: {get: function() {
	      return $__angular2_47_src_47_di_47_binding__.bind;
	    }},
	  Key: {get: function() {
	      return $__angular2_47_src_47_di_47_key__.Key;
	    }},
	  KeyRegistry: {get: function() {
	      return $__angular2_47_src_47_di_47_key__.KeyRegistry;
	    }},
	  KeyMetadataError: {get: function() {
	      return $__angular2_47_src_47_di_47_exceptions__.KeyMetadataError;
	    }},
	  NoProviderError: {get: function() {
	      return $__angular2_47_src_47_di_47_exceptions__.NoProviderError;
	    }},
	  ProviderError: {get: function() {
	      return $__angular2_47_src_47_di_47_exceptions__.ProviderError;
	    }},
	  AsyncBindingError: {get: function() {
	      return $__angular2_47_src_47_di_47_exceptions__.AsyncBindingError;
	    }},
	  CyclicDependencyError: {get: function() {
	      return $__angular2_47_src_47_di_47_exceptions__.CyclicDependencyError;
	    }},
	  InstantiationError: {get: function() {
	      return $__angular2_47_src_47_di_47_exceptions__.InstantiationError;
	    }},
	  InvalidBindingError: {get: function() {
	      return $__angular2_47_src_47_di_47_exceptions__.InvalidBindingError;
	    }},
	  NoAnnotationError: {get: function() {
	      return $__angular2_47_src_47_di_47_exceptions__.NoAnnotationError;
	    }},
	  OpaqueToken: {get: function() {
	      return $__angular2_47_src_47_di_47_opaque_95_token__.OpaqueToken;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/di";
	var $__angular2_47_src_47_di_47_annotations__,
	    $__angular2_47_src_47_di_47_injector__,
	    $__angular2_47_src_47_di_47_binding__,
	    $__angular2_47_src_47_di_47_key__,
	    $__angular2_47_src_47_di_47_exceptions__,
	    $__angular2_47_src_47_di_47_opaque_95_token__;
	var $__angular2_47_src_47_di_47_annotations__ = ($__angular2_47_src_47_di_47_annotations__ = __webpack_require__(84), $__angular2_47_src_47_di_47_annotations__ && $__angular2_47_src_47_di_47_annotations__.__esModule && $__angular2_47_src_47_di_47_annotations__ || {default: $__angular2_47_src_47_di_47_annotations__});
	var $__angular2_47_src_47_di_47_injector__ = ($__angular2_47_src_47_di_47_injector__ = __webpack_require__(85), $__angular2_47_src_47_di_47_injector__ && $__angular2_47_src_47_di_47_injector__.__esModule && $__angular2_47_src_47_di_47_injector__ || {default: $__angular2_47_src_47_di_47_injector__});
	var $__angular2_47_src_47_di_47_binding__ = ($__angular2_47_src_47_di_47_binding__ = __webpack_require__(66), $__angular2_47_src_47_di_47_binding__ && $__angular2_47_src_47_di_47_binding__.__esModule && $__angular2_47_src_47_di_47_binding__ || {default: $__angular2_47_src_47_di_47_binding__});
	var $__angular2_47_src_47_di_47_key__ = ($__angular2_47_src_47_di_47_key__ = __webpack_require__(86), $__angular2_47_src_47_di_47_key__ && $__angular2_47_src_47_di_47_key__.__esModule && $__angular2_47_src_47_di_47_key__ || {default: $__angular2_47_src_47_di_47_key__});
	var $__angular2_47_src_47_di_47_exceptions__ = ($__angular2_47_src_47_di_47_exceptions__ = __webpack_require__(87), $__angular2_47_src_47_di_47_exceptions__ && $__angular2_47_src_47_di_47_exceptions__.__esModule && $__angular2_47_src_47_di_47_exceptions__ || {default: $__angular2_47_src_47_di_47_exceptions__});
	var $__angular2_47_src_47_di_47_opaque_95_token__ = ($__angular2_47_src_47_di_47_opaque_95_token__ = __webpack_require__(88), $__angular2_47_src_47_di_47_opaque_95_token__ && $__angular2_47_src_47_di_47_opaque_95_token__.__esModule && $__angular2_47_src_47_di_47_opaque_95_token__ || {default: $__angular2_47_src_47_di_47_opaque_95_token__});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/di.map
	
	//# sourceMappingURL=./di.map

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  BrowserDomAdapter: {get: function() {
	      return BrowserDomAdapter;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/dom/browser_adapter";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__1.List,
	    MapWrapper = $__1.MapWrapper,
	    ListWrapper = $__1.ListWrapper;
	var isPresent = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
	var $__3 = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}),
	    DomAdapter = $__3.DomAdapter,
	    setRootDomAdapter = $__3.setRootDomAdapter;
	var _attrToPropMap = {
	  'inner-html': 'innerHTML',
	  'readonly': 'readOnly',
	  'tabindex': 'tabIndex'
	};
	var BrowserDomAdapter = function BrowserDomAdapter() {
	  $traceurRuntime.superConstructor($BrowserDomAdapter).apply(this, arguments);
	};
	var $BrowserDomAdapter = BrowserDomAdapter;
	($traceurRuntime.createClass)(BrowserDomAdapter, {
	  get attrToPropMap() {
	    return _attrToPropMap;
	  },
	  query: function(selector) {
	    return document.querySelector(selector);
	  },
	  querySelector: function(el, selector) {
	    assert.argumentTypes(el, assert.type.any, selector, assert.type.string);
	    return assert.returnType((el.querySelector(selector)), Node);
	  },
	  querySelectorAll: function(el, selector) {
	    assert.argumentTypes(el, assert.type.any, selector, assert.type.string);
	    return assert.returnType((el.querySelectorAll(selector)), NodeList);
	  },
	  on: function(el, evt, listener) {
	    el.addEventListener(evt, listener, false);
	  },
	  dispatchEvent: function(el, evt) {
	    el.dispatchEvent(evt);
	  },
	  createMouseEvent: function(eventType) {
	    var evt = new MouseEvent(eventType);
	    evt.initEvent(eventType, true, true);
	    return evt;
	  },
	  createEvent: function(eventType) {
	    return new Event(eventType, true);
	  },
	  getInnerHTML: function(el) {
	    return el.innerHTML;
	  },
	  getOuterHTML: function(el) {
	    return el.outerHTML;
	  },
	  nodeName: function(node) {
	    assert.argumentTypes(node, Node);
	    return assert.returnType((node.nodeName), assert.type.string);
	  },
	  nodeValue: function(node) {
	    assert.argumentTypes(node, Node);
	    return assert.returnType((node.nodeValue), assert.type.string);
	  },
	  type: function(node) {
	    assert.argumentTypes(node, assert.type.string);
	    return node.type;
	  },
	  content: function(node) {
	    assert.argumentTypes(node, HTMLTemplateElement);
	    return assert.returnType((node.content), Node);
	  },
	  firstChild: function(el) {
	    return assert.returnType((el.firstChild), Node);
	  },
	  nextSibling: function(el) {
	    return assert.returnType((el.nextSibling), Node);
	  },
	  parentElement: function(el) {
	    return el.parentElement;
	  },
	  childNodes: function(el) {
	    return assert.returnType((el.childNodes), NodeList);
	  },
	  childNodesAsList: function(el) {
	    var childNodes = el.childNodes;
	    var res = ListWrapper.createFixedSize(childNodes.length);
	    for (var i = 0; i < childNodes.length; i++) {
	      res[i] = childNodes[i];
	    }
	    return assert.returnType((res), List);
	  },
	  clearNodes: function(el) {
	    el.innerHTML = '';
	  },
	  appendChild: function(el, node) {
	    el.appendChild(node);
	  },
	  removeChild: function(el, node) {
	    el.removeChild(node);
	  },
	  remove: function(el) {
	    var parent = el.parentNode;
	    parent.removeChild(el);
	    return el;
	  },
	  insertBefore: function(el, node) {
	    el.parentNode.insertBefore(node, el);
	  },
	  insertAllBefore: function(el, nodes) {
	    ListWrapper.forEach(nodes, (function(n) {
	      el.parentNode.insertBefore(n, el);
	    }));
	  },
	  insertAfter: function(el, node) {
	    el.parentNode.insertBefore(node, el.nextSibling);
	  },
	  setInnerHTML: function(el, value) {
	    el.innerHTML = value;
	  },
	  getText: function(el) {
	    return el.textContent;
	  },
	  setText: function(el, value) {
	    assert.argumentTypes(el, assert.type.any, value, assert.type.string);
	    el.textContent = value;
	  },
	  getValue: function(el) {
	    return el.value;
	  },
	  setValue: function(el, value) {
	    assert.argumentTypes(el, assert.type.any, value, assert.type.string);
	    el.value = value;
	  },
	  getChecked: function(el) {
	    return el.checked;
	  },
	  setChecked: function(el, value) {
	    assert.argumentTypes(el, assert.type.any, value, assert.type.boolean);
	    el.checked = value;
	  },
	  createTemplate: function(html) {
	    var t = document.createElement('template');
	    t.innerHTML = html;
	    return t;
	  },
	  createElement: function(tagName) {
	    var doc = arguments[1] !== (void 0) ? arguments[1] : document;
	    return doc.createElement(tagName);
	  },
	  createTextNode: function(text) {
	    var doc = arguments[1] !== (void 0) ? arguments[1] : document;
	    assert.argumentTypes(text, assert.type.string, doc, assert.type.any);
	    return doc.createTextNode(text);
	  },
	  createScriptTag: function(attrName, attrValue) {
	    var doc = arguments[2] !== (void 0) ? arguments[2] : document;
	    assert.argumentTypes(attrName, assert.type.string, attrValue, assert.type.string, doc, assert.type.any);
	    var el = doc.createElement('SCRIPT');
	    el.setAttribute(attrName, attrValue);
	    return el;
	  },
	  createStyleElement: function(css) {
	    var doc = arguments[1] !== (void 0) ? arguments[1] : document;
	    assert.argumentTypes(css, assert.type.string, doc, assert.type.any);
	    var style = doc.createElement('STYLE');
	    style.innerText = css;
	    return assert.returnType((style), HTMLStyleElement);
	  },
	  createShadowRoot: function(el) {
	    assert.argumentTypes(el, HTMLElement);
	    return assert.returnType((el.createShadowRoot()), ShadowRoot);
	  },
	  getShadowRoot: function(el) {
	    assert.argumentTypes(el, HTMLElement);
	    return assert.returnType((el.shadowRoot), ShadowRoot);
	  },
	  clone: function(node) {
	    assert.argumentTypes(node, Node);
	    return node.cloneNode(true);
	  },
	  hasProperty: function(element, name) {
	    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
	    return name in element;
	  },
	  getElementsByClassName: function(element, name) {
	    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
	    return element.getElementsByClassName(name);
	  },
	  getElementsByTagName: function(element, name) {
	    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
	    return element.getElementsByTagName(name);
	  },
	  classList: function(element) {
	    return assert.returnType((Array.prototype.slice.call(element.classList, 0)), List);
	  },
	  addClass: function(element, classname) {
	    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
	    element.classList.add(classname);
	  },
	  removeClass: function(element, classname) {
	    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
	    element.classList.remove(classname);
	  },
	  hasClass: function(element, classname) {
	    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
	    return element.classList.contains(classname);
	  },
	  setStyle: function(element, stylename, stylevalue) {
	    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string, stylevalue, assert.type.string);
	    element.style[stylename] = stylevalue;
	  },
	  removeStyle: function(element, stylename) {
	    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string);
	    element.style[stylename] = null;
	  },
	  getStyle: function(element, stylename) {
	    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string);
	    return element.style[stylename];
	  },
	  tagName: function(element) {
	    return assert.returnType((element.tagName), assert.type.string);
	  },
	  attributeMap: function(element) {
	    var res = MapWrapper.create();
	    var elAttrs = element.attributes;
	    for (var i = 0; i < elAttrs.length; i++) {
	      var attrib = elAttrs[i];
	      MapWrapper.set(res, attrib.name, attrib.value);
	    }
	    return res;
	  },
	  getAttribute: function(element, attribute) {
	    assert.argumentTypes(element, assert.type.any, attribute, assert.type.string);
	    return element.getAttribute(attribute);
	  },
	  setAttribute: function(element, name, value) {
	    assert.argumentTypes(element, assert.type.any, name, assert.type.string, value, assert.type.string);
	    element.setAttribute(name, value);
	  },
	  removeAttribute: function(element, attribute) {
	    assert.argumentTypes(element, assert.type.any, attribute, assert.type.string);
	    return element.removeAttribute(attribute);
	  },
	  templateAwareRoot: function(el) {
	    return el instanceof HTMLTemplateElement ? el.content : el;
	  },
	  createHtmlDocument: function() {
	    return document.implementation.createHTMLDocument();
	  },
	  defaultDoc: function() {
	    return document;
	  },
	  elementMatches: function(n, selector) {
	    assert.argumentTypes(n, assert.type.any, selector, assert.type.string);
	    return assert.returnType((n instanceof HTMLElement && n.matches(selector)), assert.type.boolean);
	  },
	  isTemplateElement: function(el) {
	    assert.argumentTypes(el, assert.type.any);
	    return assert.returnType((el instanceof HTMLTemplateElement), assert.type.boolean);
	  },
	  isTextNode: function(node) {
	    assert.argumentTypes(node, Node);
	    return assert.returnType((node.nodeType === Node.TEXT_NODE), assert.type.boolean);
	  },
	  isCommentNode: function(node) {
	    assert.argumentTypes(node, Node);
	    return assert.returnType((node.nodeType === Node.TEXT_NODE), assert.type.boolean);
	  },
	  isElementNode: function(node) {
	    assert.argumentTypes(node, Node);
	    return assert.returnType((node.nodeType === Node.ELEMENT_NODE), assert.type.boolean);
	  },
	  hasShadowRoot: function(node) {
	    return assert.returnType((node instanceof HTMLElement && isPresent(node.shadowRoot)), assert.type.boolean);
	  },
	  importIntoDoc: function(node) {
	    assert.argumentTypes(node, Node);
	    return document.importNode(node, true);
	  },
	  isPageRule: function(rule) {
	    return rule.type === CSSRule.PAGE_RULE;
	  },
	  isStyleRule: function(rule) {
	    return rule.type === CSSRule.STYLE_RULE;
	  },
	  isMediaRule: function(rule) {
	    return rule.type === CSSRule.MEDIA_RULE;
	  },
	  isKeyframesRule: function(rule) {
	    return rule.type === CSSRule.KEYFRAMES_RULE;
	  }
	}, {makeCurrent: function() {
	    setRootDomAdapter(new $BrowserDomAdapter());
	  }}, DomAdapter);
	Object.defineProperty(BrowserDomAdapter.prototype.querySelector, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.querySelectorAll, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.nodeName, "parameters", {get: function() {
	    return [[Node]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.nodeValue, "parameters", {get: function() {
	    return [[Node]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.type, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.content, "parameters", {get: function() {
	    return [[HTMLTemplateElement]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.setText, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.setValue, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.setChecked, "parameters", {get: function() {
	    return [[], [assert.type.boolean]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.createTextNode, "parameters", {get: function() {
	    return [[assert.type.string], []];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.createScriptTag, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], []];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.createStyleElement, "parameters", {get: function() {
	    return [[assert.type.string], []];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.createShadowRoot, "parameters", {get: function() {
	    return [[HTMLElement]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.getShadowRoot, "parameters", {get: function() {
	    return [[HTMLElement]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.clone, "parameters", {get: function() {
	    return [[Node]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.hasProperty, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.getElementsByClassName, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.getElementsByTagName, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.addClass, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.removeClass, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.hasClass, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.setStyle, "parameters", {get: function() {
	    return [[], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.removeStyle, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.getStyle, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.getAttribute, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.setAttribute, "parameters", {get: function() {
	    return [[], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.removeAttribute, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.elementMatches, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.isTemplateElement, "parameters", {get: function() {
	    return [[assert.type.any]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.isTextNode, "parameters", {get: function() {
	    return [[Node]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.isCommentNode, "parameters", {get: function() {
	    return [[Node]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.isElementNode, "parameters", {get: function() {
	    return [[Node]];
	  }});
	Object.defineProperty(BrowserDomAdapter.prototype.importIntoDoc, "parameters", {get: function() {
	    return [[Node]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/dom/browser_adapter.map
	
	//# sourceMappingURL=./browser_adapter.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  DOM: {get: function() {
	      return DOM;
	    }},
	  setRootDomAdapter: {get: function() {
	      return setRootDomAdapter;
	    }},
	  DomAdapter: {get: function() {
	      return DomAdapter;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/dom/dom_adapter";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    ABSTRACT = $__1.ABSTRACT,
	    BaseException = $__1.BaseException;
	var DOM;
	function setRootDomAdapter(adapter) {
	  assert.argumentTypes(adapter, DomAdapter);
	  DOM = adapter;
	}
	Object.defineProperty(setRootDomAdapter, "parameters", {get: function() {
	    return [[DomAdapter]];
	  }});
	function _abstract() {
	  return new BaseException('This method is abstract');
	}
	var DomAdapter = function DomAdapter() {};
	($traceurRuntime.createClass)(DomAdapter, {
	  get attrToPropMap() {
	    throw _abstract();
	  },
	  parse: function(templateHtml) {
	    assert.argumentTypes(templateHtml, assert.type.string);
	    throw _abstract();
	  },
	  query: function(selector) {
	    throw _abstract();
	  },
	  querySelector: function(el, selector) {
	    assert.argumentTypes(el, assert.type.any, selector, assert.type.string);
	    throw _abstract();
	  },
	  querySelectorAll: function(el, selector) {
	    assert.argumentTypes(el, assert.type.any, selector, assert.type.string);
	    throw _abstract();
	  },
	  on: function(el, evt, listener) {
	    throw _abstract();
	  },
	  dispatchEvent: function(el, evt) {
	    throw _abstract();
	  },
	  createMouseEvent: function(eventType) {
	    throw _abstract();
	  },
	  createEvent: function(eventType) {
	    throw _abstract();
	  },
	  getInnerHTML: function(el) {
	    throw _abstract();
	  },
	  getOuterHTML: function(el) {
	    throw _abstract();
	  },
	  nodeName: function(node) {
	    throw _abstract();
	  },
	  nodeValue: function(node) {
	    throw _abstract();
	  },
	  type: function(node) {
	    throw _abstract();
	  },
	  content: function(node) {
	    throw _abstract();
	  },
	  firstChild: function(el) {
	    throw _abstract();
	  },
	  nextSibling: function(el) {
	    throw _abstract();
	  },
	  parentElement: function(el) {
	    throw _abstract();
	  },
	  childNodes: function(el) {
	    throw _abstract();
	  },
	  childNodesAsList: function(el) {
	    throw _abstract();
	  },
	  clearNodes: function(el) {
	    throw _abstract();
	  },
	  appendChild: function(el, node) {
	    throw _abstract();
	  },
	  removeChild: function(el, node) {
	    throw _abstract();
	  },
	  remove: function(el) {
	    throw _abstract();
	  },
	  insertBefore: function(el, node) {
	    throw _abstract();
	  },
	  insertAllBefore: function(el, nodes) {
	    throw _abstract();
	  },
	  insertAfter: function(el, node) {
	    throw _abstract();
	  },
	  setInnerHTML: function(el, value) {
	    throw _abstract();
	  },
	  getText: function(el) {
	    throw _abstract();
	  },
	  setText: function(el, value) {
	    assert.argumentTypes(el, assert.type.any, value, assert.type.string);
	    throw _abstract();
	  },
	  getValue: function(el) {
	    throw _abstract();
	  },
	  setValue: function(el, value) {
	    assert.argumentTypes(el, assert.type.any, value, assert.type.string);
	    throw _abstract();
	  },
	  getChecked: function(el) {
	    throw _abstract();
	  },
	  setChecked: function(el, value) {
	    assert.argumentTypes(el, assert.type.any, value, assert.type.boolean);
	    throw _abstract();
	  },
	  createTemplate: function(html) {
	    throw _abstract();
	  },
	  createElement: function(tagName) {
	    var doc = arguments[1] !== (void 0) ? arguments[1] : null;
	    throw _abstract();
	  },
	  createTextNode: function(text) {
	    var doc = arguments[1] !== (void 0) ? arguments[1] : null;
	    assert.argumentTypes(text, assert.type.string, doc, assert.type.any);
	    throw _abstract();
	  },
	  createScriptTag: function(attrName, attrValue) {
	    var doc = arguments[2] !== (void 0) ? arguments[2] : null;
	    assert.argumentTypes(attrName, assert.type.string, attrValue, assert.type.string, doc, assert.type.any);
	    throw _abstract();
	  },
	  createStyleElement: function(css) {
	    var doc = arguments[1] !== (void 0) ? arguments[1] : null;
	    assert.argumentTypes(css, assert.type.string, doc, assert.type.any);
	    throw _abstract();
	  },
	  createShadowRoot: function(el) {
	    throw _abstract();
	  },
	  getShadowRoot: function(el) {
	    throw _abstract();
	  },
	  clone: function(node) {
	    throw _abstract();
	  },
	  hasProperty: function(element, name) {
	    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
	    throw _abstract();
	  },
	  getElementsByClassName: function(element, name) {
	    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
	    throw _abstract();
	  },
	  getElementsByTagName: function(element, name) {
	    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
	    throw _abstract();
	  },
	  classList: function(element) {
	    throw _abstract();
	  },
	  addClass: function(element, classname) {
	    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
	    throw _abstract();
	  },
	  removeClass: function(element, classname) {
	    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
	    throw _abstract();
	  },
	  hasClass: function(element, classname) {
	    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
	    throw _abstract();
	  },
	  setStyle: function(element, stylename, stylevalue) {
	    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string, stylevalue, assert.type.string);
	    throw _abstract();
	  },
	  removeStyle: function(element, stylename) {
	    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string);
	    throw _abstract();
	  },
	  getStyle: function(element, stylename) {
	    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string);
	    throw _abstract();
	  },
	  tagName: function(element) {
	    throw _abstract();
	  },
	  attributeMap: function(element) {
	    throw _abstract();
	  },
	  getAttribute: function(element, attribute) {
	    assert.argumentTypes(element, assert.type.any, attribute, assert.type.string);
	    throw _abstract();
	  },
	  setAttribute: function(element, name, value) {
	    assert.argumentTypes(element, assert.type.any, name, assert.type.string, value, assert.type.string);
	    throw _abstract();
	  },
	  removeAttribute: function(element, attribute) {
	    assert.argumentTypes(element, assert.type.any, attribute, assert.type.string);
	    throw _abstract();
	  },
	  templateAwareRoot: function(el) {
	    throw _abstract();
	  },
	  createHtmlDocument: function() {
	    throw _abstract();
	  },
	  defaultDoc: function() {
	    throw _abstract();
	  },
	  elementMatches: function(n, selector) {
	    assert.argumentTypes(n, assert.type.any, selector, assert.type.string);
	    throw _abstract();
	  },
	  isTemplateElement: function(el) {
	    assert.argumentTypes(el, assert.type.any);
	    throw _abstract();
	  },
	  isTextNode: function(node) {
	    throw _abstract();
	  },
	  isCommentNode: function(node) {
	    throw _abstract();
	  },
	  isElementNode: function(node) {
	    throw _abstract();
	  },
	  hasShadowRoot: function(node) {
	    throw _abstract();
	  },
	  importIntoDoc: function(node) {
	    throw _abstract();
	  },
	  isPageRule: function(rule) {
	    throw _abstract();
	  },
	  isStyleRule: function(rule) {
	    throw _abstract();
	  },
	  isMediaRule: function(rule) {
	    throw _abstract();
	  },
	  isKeyframesRule: function(rule) {
	    throw _abstract();
	  }
	}, {});
	Object.defineProperty(DomAdapter, "annotations", {get: function() {
	    return [new ABSTRACT()];
	  }});
	Object.defineProperty(DomAdapter.prototype.parse, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.querySelector, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.querySelectorAll, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.setText, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.setValue, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.setChecked, "parameters", {get: function() {
	    return [[], [assert.type.boolean]];
	  }});
	Object.defineProperty(DomAdapter.prototype.createTextNode, "parameters", {get: function() {
	    return [[assert.type.string], []];
	  }});
	Object.defineProperty(DomAdapter.prototype.createScriptTag, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], []];
	  }});
	Object.defineProperty(DomAdapter.prototype.createStyleElement, "parameters", {get: function() {
	    return [[assert.type.string], []];
	  }});
	Object.defineProperty(DomAdapter.prototype.hasProperty, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.getElementsByClassName, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.getElementsByTagName, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.addClass, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.removeClass, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.hasClass, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.setStyle, "parameters", {get: function() {
	    return [[], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.removeStyle, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.getStyle, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.getAttribute, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.setAttribute, "parameters", {get: function() {
	    return [[], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.removeAttribute, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.elementMatches, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(DomAdapter.prototype.isTemplateElement, "parameters", {get: function() {
	    return [[assert.type.any]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/dom/dom_adapter.map
	
	//# sourceMappingURL=./dom_adapter.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ExceptionHandler: {get: function() {
	      return ExceptionHandler;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/exception_handler";
	var $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__;
	var $__0 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__0.isPresent,
	    print = $__0.print;
	var $__1 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    ListWrapper = $__1.ListWrapper,
	    isListLikeIterable = $__1.isListLikeIterable;
	var ExceptionHandler = function ExceptionHandler() {};
	($traceurRuntime.createClass)(ExceptionHandler, {call: function(error) {
	    var stackTrace = arguments[1] !== (void 0) ? arguments[1] : null;
	    var reason = arguments[2] !== (void 0) ? arguments[2] : null;
	    var longStackTrace = isListLikeIterable(stackTrace) ? ListWrapper.join(stackTrace, "\n\n") : stackTrace;
	    var reasonStr = isPresent(reason) ? ("\n" + reason) : '';
	    print(("" + error + reasonStr + "\nSTACKTRACE:\n" + longStackTrace));
	  }}, {});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/exception_handler.map
	
	//# sourceMappingURL=./exception_handler.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  TemplateResolver: {get: function() {
	      return TemplateResolver;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/template_resolver";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_annotations_47_template__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_reflection_47_reflection__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = __webpack_require__(27), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
	var $__2 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    Type = $__2.Type,
	    stringify = $__2.stringify,
	    isBlank = $__2.isBlank,
	    BaseException = $__2.BaseException;
	var $__3 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    Map = $__3.Map,
	    MapWrapper = $__3.MapWrapper,
	    List = $__3.List,
	    ListWrapper = $__3.ListWrapper;
	var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = __webpack_require__(51), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
	var TemplateResolver = function TemplateResolver() {
	  this._cache = MapWrapper.create();
	};
	($traceurRuntime.createClass)(TemplateResolver, {
	  resolve: function(component) {
	    assert.argumentTypes(component, Type);
	    var template = MapWrapper.get(this._cache, component);
	    if (isBlank(template)) {
	      template = this._resolve(component);
	      MapWrapper.set(this._cache, component, template);
	    }
	    return assert.returnType((template), Template);
	  },
	  _resolve: function(component) {
	    assert.argumentTypes(component, Type);
	    var annotations = reflector.annotations(component);
	    for (var i = 0; i < annotations.length; i++) {
	      var annotation = annotations[i];
	      if (annotation instanceof Template) {
	        return annotation;
	      }
	    }
	    throw new BaseException(("No template found for " + stringify(component)));
	  }
	}, {});
	Object.defineProperty(TemplateResolver.prototype.resolve, "parameters", {get: function() {
	    return [[Type]];
	  }});
	Object.defineProperty(TemplateResolver.prototype._resolve, "parameters", {get: function() {
	    return [[Type]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/template_resolver.map
	
	//# sourceMappingURL=./template_resolver.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  DirectiveMetadataReader: {get: function() {
	      return DirectiveMetadataReader;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/directive_metadata_reader";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_core_47_annotations_47_annotations__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
	    $__angular2_47_src_47_reflection_47_reflection__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    Type = $__1.Type,
	    isPresent = $__1.isPresent,
	    BaseException = $__1.BaseException,
	    stringify = $__1.stringify;
	var Directive = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = __webpack_require__(25), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Directive;
	var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = __webpack_require__(74), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
	var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = __webpack_require__(51), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
	var DirectiveMetadataReader = function DirectiveMetadataReader() {};
	($traceurRuntime.createClass)(DirectiveMetadataReader, {read: function(type) {
	    assert.argumentTypes(type, Type);
	    var annotations = reflector.annotations(type);
	    if (isPresent(annotations)) {
	      for (var i = 0; i < annotations.length; i++) {
	        var annotation = annotations[i];
	        if (annotation instanceof Directive) {
	          return assert.returnType((new DirectiveMetadata(type, annotation)), DirectiveMetadata);
	        }
	      }
	    }
	    throw new BaseException(("No Directive annotation found on " + stringify(type)));
	  }}, {});
	Object.defineProperty(DirectiveMetadataReader.prototype.read, "parameters", {get: function() {
	    return [[Type]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/directive_metadata_reader.map
	
	//# sourceMappingURL=./directive_metadata_reader.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Promise: {get: function() {
	      return Promise;
	    }},
	  PromiseWrapper: {get: function() {
	      return PromiseWrapper;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/facade/async";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    int = $__1.int,
	    global = $__1.global;
	var List = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
	var Promise = global.Promise;
	var PromiseWrapper = function PromiseWrapper() {};
	($traceurRuntime.createClass)(PromiseWrapper, {}, {
	  resolve: function(obj) {
	    return assert.returnType((Promise.resolve(obj)), Promise);
	  },
	  reject: function(obj) {
	    return assert.returnType((Promise.reject(obj)), Promise);
	  },
	  catchError: function(promise, onError) {
	    assert.argumentTypes(promise, Promise, onError, Function);
	    return assert.returnType((promise.catch(onError)), Promise);
	  },
	  all: function(promises) {
	    assert.argumentTypes(promises, List);
	    if (promises.length == 0)
	      return assert.returnType((Promise.resolve([])), Promise);
	    return assert.returnType((Promise.all(promises)), Promise);
	  },
	  then: function(promise, success, rejection) {
	    assert.argumentTypes(promise, Promise, success, Function, rejection, Function);
	    return assert.returnType((promise.then(success, rejection)), Promise);
	  },
	  completer: function() {
	    var resolve;
	    var reject;
	    var p = new Promise(function(res, rej) {
	      resolve = res;
	      reject = rej;
	    });
	    return {
	      promise: p,
	      resolve: resolve,
	      reject: reject
	    };
	  },
	  setTimeout: function(fn, millis) {
	    assert.argumentTypes(fn, Function, millis, int);
	    global.setTimeout(fn, millis);
	  },
	  isPromise: function(maybePromise) {
	    return assert.returnType((maybePromise instanceof Promise), assert.type.boolean);
	  }
	});
	Object.defineProperty(PromiseWrapper.catchError, "parameters", {get: function() {
	    return [[Promise], [Function]];
	  }});
	Object.defineProperty(PromiseWrapper.all, "parameters", {get: function() {
	    return [[List]];
	  }});
	Object.defineProperty(PromiseWrapper.then, "parameters", {get: function() {
	    return [[Promise], [Function], [Function]];
	  }});
	Object.defineProperty(PromiseWrapper.setTimeout, "parameters", {get: function() {
	    return [[Function], [int]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/facade/async.map
	
	//# sourceMappingURL=./async.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  VmTurnZone: {get: function() {
	      return VmTurnZone;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/zone/vm_turn_zone";
	var $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__;
	var $__0 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__0.List,
	    ListWrapper = $__0.ListWrapper,
	    StringMapWrapper = $__0.StringMapWrapper;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    normalizeBlank = $__1.normalizeBlank,
	    isPresent = $__1.isPresent,
	    global = $__1.global;
	var VmTurnZone = function VmTurnZone($__4) {
	  var enableLongStackTrace = $__4.enableLongStackTrace;
	  this._nestedRunCounter = 0;
	  this._onTurnStart = null;
	  this._onTurnDone = null;
	  this._onErrorHandler = null;
	  this._outerZone = global.zone;
	  this._innerZone = this._createInnerZone(this._outerZone, enableLongStackTrace);
	};
	($traceurRuntime.createClass)(VmTurnZone, {
	  initCallbacks: function() {
	    var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
	        onTurnStart = $__4.onTurnStart,
	        onTurnDone = $__4.onTurnDone,
	        onScheduleMicrotask = $__4.onScheduleMicrotask,
	        onErrorHandler = $__4.onErrorHandler;
	    this._onTurnStart = normalizeBlank(onTurnStart);
	    this._onTurnDone = normalizeBlank(onTurnDone);
	    this._onErrorHandler = normalizeBlank(onErrorHandler);
	  },
	  run: function(fn) {
	    return this._innerZone.run(fn);
	  },
	  runOutsideAngular: function(fn) {
	    return this._outerZone.run(fn);
	  },
	  _createInnerZone: function(zone, enableLongStackTrace) {
	    var $__2 = this;
	    var vmTurnZone = this;
	    var errorHandling;
	    if (enableLongStackTrace) {
	      errorHandling = StringMapWrapper.merge(Zone.longStackTraceZone, {onError: function(e) {
	          vmTurnZone._onError(this, e);
	        }});
	    } else {
	      errorHandling = {onError: function(e) {
	          vmTurnZone._onError(this, e);
	        }};
	    }
	    return zone.fork(errorHandling).fork({
	      beforeTask: (function() {
	        $__2._beforeTask();
	      }),
	      afterTask: (function() {
	        $__2._afterTask();
	      })
	    });
	  },
	  _beforeTask: function() {
	    this._nestedRunCounter++;
	    if (this._nestedRunCounter === 1 && this._onTurnStart) {
	      this._onTurnStart();
	    }
	  },
	  _afterTask: function() {
	    this._nestedRunCounter--;
	    if (this._nestedRunCounter === 0 && this._onTurnDone) {
	      this._onTurnDone();
	    }
	  },
	  _onError: function(zone, e) {
	    if (isPresent(this._onErrorHandler)) {
	      var trace = [normalizeBlank(e.stack)];
	      while (zone && zone.constructedAtException) {
	        trace.push(zone.constructedAtException.get());
	        zone = zone.parent;
	      }
	      this._onErrorHandler(e, trace);
	    } else {
	      throw e;
	    }
	  }
	}, {});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/zone/vm_turn_zone.map
	
	//# sourceMappingURL=./vm_turn_zone.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  LifeCycle: {get: function() {
	      return LifeCycle;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/life_cycle/life_cycle";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_change_95_detection__,
	    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__,
	    $__angular2_47_src_47_core_47_exception_95_handler__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var ChangeDetector = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).ChangeDetector;
	var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = __webpack_require__(59), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
	var ExceptionHandler = ($__angular2_47_src_47_core_47_exception_95_handler__ = __webpack_require__(55), $__angular2_47_src_47_core_47_exception_95_handler__ && $__angular2_47_src_47_core_47_exception_95_handler__.__esModule && $__angular2_47_src_47_core_47_exception_95_handler__ || {default: $__angular2_47_src_47_core_47_exception_95_handler__}).ExceptionHandler;
	var isPresent = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
	var LifeCycle = function LifeCycle(exceptionHandler) {
	  var changeDetector = arguments[1] !== (void 0) ? arguments[1] : null;
	  var enforceNoNewChanges = arguments[2] !== (void 0) ? arguments[2] : false;
	  assert.argumentTypes(exceptionHandler, ExceptionHandler, changeDetector, ChangeDetector, enforceNoNewChanges, assert.type.boolean);
	  this._errorHandler = (function(exception, stackTrace) {
	    exceptionHandler.call(exception, stackTrace);
	    throw exception;
	  });
	  this._changeDetector = changeDetector;
	  this._enforceNoNewChanges = enforceNoNewChanges;
	};
	($traceurRuntime.createClass)(LifeCycle, {
	  registerWith: function(zone) {
	    var changeDetector = arguments[1] !== (void 0) ? arguments[1] : null;
	    var $__5 = this;
	    if (isPresent(changeDetector)) {
	      this._changeDetector = changeDetector;
	    }
	    zone.initCallbacks({
	      onErrorHandler: this._errorHandler,
	      onTurnDone: (function() {
	        return $__5.tick();
	      })
	    });
	  },
	  tick: function() {
	    this._changeDetector.detectChanges();
	    if (this._enforceNoNewChanges) {
	      this._changeDetector.checkNoChanges();
	    }
	  }
	}, {});
	Object.defineProperty(LifeCycle, "parameters", {get: function() {
	    return [[ExceptionHandler], [ChangeDetector], [assert.type.boolean]];
	  }});
	Object.defineProperty(LifeCycle.prototype.registerWith, "parameters", {get: function() {
	    return [[VmTurnZone], [ChangeDetector]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/life_cycle/life_cycle.map
	
	//# sourceMappingURL=./life_cycle.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ShadowDomStrategy: {get: function() {
	      return ShadowDomStrategy;
	    }},
	  EmulatedUnscopedShadowDomStrategy: {get: function() {
	      return EmulatedUnscopedShadowDomStrategy;
	    }},
	  EmulatedScopedShadowDomStrategy: {get: function() {
	      return EmulatedScopedShadowDomStrategy;
	    }},
	  NativeShadowDomStrategy: {get: function() {
	      return NativeShadowDomStrategy;
	    }},
	  resetShadowDomCache: {get: function() {
	      return resetShadowDomCache;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/shadow_dom_strategy";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_async__,
	    $__angular2_47_src_47_core_47_compiler_47_view__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_shadow_95_css__,
	    $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__,
	    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    Type = $__1.Type,
	    isBlank = $__1.isBlank,
	    isPresent = $__1.isPresent,
	    int = $__1.int;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var $__3 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__3.List,
	    ListWrapper = $__3.ListWrapper,
	    MapWrapper = $__3.MapWrapper,
	    Map = $__3.Map;
	var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = __webpack_require__(58), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
	var View = ($__angular2_47_src_47_core_47_compiler_47_view__ = __webpack_require__(31), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).View;
	var Content = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ = __webpack_require__(89), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__}).Content;
	var LightDom = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = __webpack_require__(79), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__}).LightDom;
	var ShadowCss = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_shadow_95_css__ = __webpack_require__(90), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_shadow_95_css__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_shadow_95_css__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_shadow_95_css__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_shadow_95_css__}).ShadowCss;
	var StyleInliner = ($__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ = __webpack_require__(70), $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__}).StyleInliner;
	var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = __webpack_require__(69), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
	var ShadowDomStrategy = function ShadowDomStrategy() {};
	($traceurRuntime.createClass)(ShadowDomStrategy, {
	  attachTemplate: function(el, view) {
	    assert.argumentTypes(el, assert.type.any, view, View);
	  },
	  constructLightDom: function(lightDomView, shadowDomView, el) {
	    assert.argumentTypes(lightDomView, View, shadowDomView, View, el, assert.type.any);
	  },
	  polyfillDirectives: function() {
	    return assert.returnType((null), assert.genericType(List, Type));
	  },
	  transformStyleText: function(cssText, baseUrl, component) {
	    assert.argumentTypes(cssText, assert.type.string, baseUrl, assert.type.string, component, Type);
	  },
	  handleStyleElement: function(styleEl) {},
	  shimContentElement: function(component, element) {
	    assert.argumentTypes(component, Type, element, assert.type.any);
	  },
	  shimHostElement: function(component, element) {
	    assert.argumentTypes(component, Type, element, assert.type.any);
	  }
	}, {});
	Object.defineProperty(ShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
	    return [[], [View]];
	  }});
	Object.defineProperty(ShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
	    return [[View], [View], []];
	  }});
	Object.defineProperty(ShadowDomStrategy.prototype.transformStyleText, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [Type]];
	  }});
	Object.defineProperty(ShadowDomStrategy.prototype.shimContentElement, "parameters", {get: function() {
	    return [[Type], []];
	  }});
	Object.defineProperty(ShadowDomStrategy.prototype.shimHostElement, "parameters", {get: function() {
	    return [[Type], []];
	  }});
	var EmulatedUnscopedShadowDomStrategy = function EmulatedUnscopedShadowDomStrategy(styleUrlResolver, styleHost) {
	  assert.argumentTypes(styleUrlResolver, StyleUrlResolver, styleHost, assert.type.any);
	  $traceurRuntime.superConstructor($EmulatedUnscopedShadowDomStrategy).call(this);
	  this._styleUrlResolver = styleUrlResolver;
	  this._styleHost = styleHost;
	};
	var $EmulatedUnscopedShadowDomStrategy = EmulatedUnscopedShadowDomStrategy;
	($traceurRuntime.createClass)(EmulatedUnscopedShadowDomStrategy, {
	  attachTemplate: function(el, view) {
	    assert.argumentTypes(el, assert.type.any, view, View);
	    DOM.clearNodes(el);
	    _moveViewNodesIntoParent(el, view);
	  },
	  constructLightDom: function(lightDomView, shadowDomView, el) {
	    assert.argumentTypes(lightDomView, View, shadowDomView, View, el, assert.type.any);
	    return new LightDom(lightDomView, shadowDomView, el);
	  },
	  polyfillDirectives: function() {
	    return assert.returnType(([Content]), assert.genericType(List, Type));
	  },
	  transformStyleText: function(cssText, baseUrl, component) {
	    assert.argumentTypes(cssText, assert.type.string, baseUrl, assert.type.string, component, Type);
	    return this._styleUrlResolver.resolveUrls(cssText, baseUrl);
	  },
	  handleStyleElement: function(styleEl) {
	    DOM.remove(styleEl);
	    var cssText = DOM.getText(styleEl);
	    if (!MapWrapper.contains(_sharedStyleTexts, cssText)) {
	      MapWrapper.set(_sharedStyleTexts, cssText, true);
	      this._insertStyleElement(this._styleHost, styleEl);
	    }
	  },
	  _insertStyleElement: function(host, style) {
	    if (isBlank(this._lastInsertedStyle)) {
	      var firstChild = DOM.firstChild(host);
	      if (isPresent(firstChild)) {
	        DOM.insertBefore(firstChild, style);
	      } else {
	        DOM.appendChild(host, style);
	      }
	    } else {
	      DOM.insertAfter(this._lastInsertedStyle, style);
	    }
	    this._lastInsertedStyle = style;
	  }
	}, {}, ShadowDomStrategy);
	Object.defineProperty(EmulatedUnscopedShadowDomStrategy, "parameters", {get: function() {
	    return [[StyleUrlResolver], []];
	  }});
	Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
	    return [[], [View]];
	  }});
	Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
	    return [[View], [View], []];
	  }});
	Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.transformStyleText, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [Type]];
	  }});
	var EmulatedScopedShadowDomStrategy = function EmulatedScopedShadowDomStrategy(styleInliner, styleUrlResolver, styleHost) {
	  assert.argumentTypes(styleInliner, StyleInliner, styleUrlResolver, StyleUrlResolver, styleHost, assert.type.any);
	  $traceurRuntime.superConstructor($EmulatedScopedShadowDomStrategy).call(this, styleUrlResolver, styleHost);
	  this._styleInliner = styleInliner;
	};
	var $EmulatedScopedShadowDomStrategy = EmulatedScopedShadowDomStrategy;
	($traceurRuntime.createClass)(EmulatedScopedShadowDomStrategy, {
	  transformStyleText: function(cssText, baseUrl, component) {
	    cssText = this._styleUrlResolver.resolveUrls(cssText, baseUrl);
	    var css = this._styleInliner.inlineImports(cssText, baseUrl);
	    if (PromiseWrapper.isPromise(css)) {
	      return css.then((function(css) {
	        return _shimCssForComponent(css, component);
	      }));
	    } else {
	      return _shimCssForComponent(css, component);
	    }
	  },
	  handleStyleElement: function(styleEl) {
	    DOM.remove(styleEl);
	    this._insertStyleElement(this._styleHost, styleEl);
	  },
	  shimContentElement: function(component, element) {
	    assert.argumentTypes(component, Type, element, assert.type.any);
	    var id = _getComponentId(component);
	    var attrName = _getContentAttribute(id);
	    DOM.setAttribute(element, attrName, '');
	  },
	  shimHostElement: function(component, element) {
	    assert.argumentTypes(component, Type, element, assert.type.any);
	    var id = _getComponentId(component);
	    var attrName = _getHostAttribute(id);
	    DOM.setAttribute(element, attrName, '');
	  }
	}, {}, EmulatedUnscopedShadowDomStrategy);
	Object.defineProperty(EmulatedScopedShadowDomStrategy, "parameters", {get: function() {
	    return [[StyleInliner], [StyleUrlResolver], []];
	  }});
	Object.defineProperty(EmulatedScopedShadowDomStrategy.prototype.transformStyleText, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [Type]];
	  }});
	Object.defineProperty(EmulatedScopedShadowDomStrategy.prototype.shimContentElement, "parameters", {get: function() {
	    return [[Type], []];
	  }});
	Object.defineProperty(EmulatedScopedShadowDomStrategy.prototype.shimHostElement, "parameters", {get: function() {
	    return [[Type], []];
	  }});
	var NativeShadowDomStrategy = function NativeShadowDomStrategy(styleUrlResolver) {
	  assert.argumentTypes(styleUrlResolver, StyleUrlResolver);
	  $traceurRuntime.superConstructor($NativeShadowDomStrategy).call(this);
	  this._styleUrlResolver = styleUrlResolver;
	};
	var $NativeShadowDomStrategy = NativeShadowDomStrategy;
	($traceurRuntime.createClass)(NativeShadowDomStrategy, {
	  attachTemplate: function(el, view) {
	    assert.argumentTypes(el, assert.type.any, view, View);
	    _moveViewNodesIntoParent(DOM.createShadowRoot(el), view);
	  },
	  constructLightDom: function(lightDomView, shadowDomView, el) {
	    assert.argumentTypes(lightDomView, View, shadowDomView, View, el, assert.type.any);
	    return null;
	  },
	  polyfillDirectives: function() {
	    return assert.returnType(([]), assert.genericType(List, Type));
	  },
	  transformStyleText: function(cssText, baseUrl, component) {
	    assert.argumentTypes(cssText, assert.type.string, baseUrl, assert.type.string, component, Type);
	    return this._styleUrlResolver.resolveUrls(cssText, baseUrl);
	  }
	}, {}, ShadowDomStrategy);
	Object.defineProperty(NativeShadowDomStrategy, "parameters", {get: function() {
	    return [[StyleUrlResolver]];
	  }});
	Object.defineProperty(NativeShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
	    return [[], [View]];
	  }});
	Object.defineProperty(NativeShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
	    return [[View], [View], []];
	  }});
	Object.defineProperty(NativeShadowDomStrategy.prototype.transformStyleText, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [Type]];
	  }});
	function _moveViewNodesIntoParent(parent, view) {
	  for (var i = 0; i < view.nodes.length; ++i) {
	    DOM.appendChild(parent, view.nodes[i]);
	  }
	}
	var _componentUIDs = assert.type(MapWrapper.create(), assert.genericType(Map, Type, int));
	var _nextComponentUID = assert.type(0, int);
	var _sharedStyleTexts = assert.type(MapWrapper.create(), assert.genericType(Map, assert.type.string, assert.type.boolean));
	function _getComponentId(component) {
	  assert.argumentTypes(component, Type);
	  var id = MapWrapper.get(_componentUIDs, component);
	  if (isBlank(id)) {
	    id = _nextComponentUID++;
	    MapWrapper.set(_componentUIDs, component, id);
	  }
	  return id;
	}
	Object.defineProperty(_getComponentId, "parameters", {get: function() {
	    return [[Type]];
	  }});
	function _getHostAttribute(id) {
	  assert.argumentTypes(id, int);
	  return ("_nghost-" + id);
	}
	Object.defineProperty(_getHostAttribute, "parameters", {get: function() {
	    return [[int]];
	  }});
	function _getContentAttribute(id) {
	  assert.argumentTypes(id, int);
	  return ("_ngcontent-" + id);
	}
	Object.defineProperty(_getContentAttribute, "parameters", {get: function() {
	    return [[int]];
	  }});
	function _shimCssForComponent(cssText, component) {
	  assert.argumentTypes(cssText, assert.type.string, component, Type);
	  var id = _getComponentId(component);
	  var shadowCss = new ShadowCss();
	  return assert.returnType((shadowCss.shimCssText(cssText, _getContentAttribute(id), _getHostAttribute(id))), assert.type.string);
	}
	Object.defineProperty(_shimCssForComponent, "parameters", {get: function() {
	    return [[assert.type.string], [Type]];
	  }});
	function resetShadowDomCache() {
	  MapWrapper.clear(_componentUIDs);
	  _nextComponentUID = 0;
	  MapWrapper.clear(_sharedStyleTexts);
	}
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/shadow_dom_strategy.map
	
	//# sourceMappingURL=./shadow_dom_strategy.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  XHR: {get: function() {
	      return XHR;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/xhr/xhr";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_async__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var Promise = ($__angular2_47_src_47_facade_47_async__ = __webpack_require__(58), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
	var XHR = function XHR() {};
	($traceurRuntime.createClass)(XHR, {get: function(url) {
	    assert.argumentTypes(url, assert.type.string);
	    return assert.returnType((null), assert.genericType(Promise, assert.type.string));
	  }}, {});
	Object.defineProperty(XHR.prototype.get, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/xhr/xhr.map
	
	//# sourceMappingURL=./xhr.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  XHRImpl: {get: function() {
	      return XHRImpl;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/xhr/xhr_impl";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_async__,
	    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_async__ = __webpack_require__(58), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
	    Promise = $__1.Promise,
	    PromiseWrapper = $__1.PromiseWrapper;
	var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = __webpack_require__(62), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
	var XHRImpl = function XHRImpl() {
	  $traceurRuntime.superConstructor($XHRImpl).apply(this, arguments);
	};
	var $XHRImpl = XHRImpl;
	($traceurRuntime.createClass)(XHRImpl, {get: function(url) {
	    assert.argumentTypes(url, assert.type.string);
	    var completer = PromiseWrapper.completer();
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', url, true);
	    xhr.responseType = 'text';
	    xhr.onload = function() {
	      var status = xhr.status;
	      if (200 <= status && status <= 300) {
	        completer.resolve(xhr.responseText);
	      } else {
	        completer.reject(("Failed to load " + url));
	      }
	    };
	    xhr.onerror = function() {
	      completer.reject(("Failed to load " + url));
	    };
	    xhr.send();
	    return assert.returnType((completer.promise), assert.genericType(Promise, assert.type.string));
	  }}, {}, XHR);
	Object.defineProperty(XHRImpl.prototype.get, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/xhr/xhr_impl.map
	
	//# sourceMappingURL=./xhr_impl.map

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  EventManager: {get: function() {
	      return EventManager;
	    }},
	  EventManagerPlugin: {get: function() {
	      return EventManagerPlugin;
	    }},
	  DomEventsPlugin: {get: function() {
	      return DomEventsPlugin;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/events/event_manager";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isBlank = $__1.isBlank,
	    BaseException = $__1.BaseException,
	    isPresent = $__1.isPresent,
	    StringWrapper = $__1.StringWrapper;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var $__3 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__3.List,
	    ListWrapper = $__3.ListWrapper,
	    MapWrapper = $__3.MapWrapper;
	var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = __webpack_require__(59), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
	var BUBBLE_SYMBOL = '^';
	var EventManager = function EventManager(plugins, zone) {
	  assert.argumentTypes(plugins, assert.genericType(List, EventManagerPlugin), zone, VmTurnZone);
	  this._zone = zone;
	  this._plugins = plugins;
	  for (var i = 0; i < plugins.length; i++) {
	    plugins[i].manager = this;
	  }
	};
	($traceurRuntime.createClass)(EventManager, {
	  addEventListener: function(element, eventName, handler) {
	    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function);
	    var shouldSupportBubble = eventName[0] == BUBBLE_SYMBOL;
	    if (shouldSupportBubble) {
	      eventName = StringWrapper.substring(eventName, 1);
	    }
	    var plugin = this._findPluginFor(eventName);
	    plugin.addEventListener(element, eventName, handler, shouldSupportBubble);
	  },
	  getZone: function() {
	    return assert.returnType((this._zone), VmTurnZone);
	  },
	  _findPluginFor: function(eventName) {
	    assert.argumentTypes(eventName, assert.type.string);
	    var plugins = this._plugins;
	    for (var i = 0; i < plugins.length; i++) {
	      var plugin = plugins[i];
	      if (plugin.supports(eventName)) {
	        return assert.returnType((plugin), EventManagerPlugin);
	      }
	    }
	    throw new BaseException(("No event manager plugin found for event " + eventName));
	  }
	}, {});
	Object.defineProperty(EventManager, "parameters", {get: function() {
	    return [[assert.genericType(List, EventManagerPlugin)], [VmTurnZone]];
	  }});
	Object.defineProperty(EventManager.prototype.addEventListener, "parameters", {get: function() {
	    return [[], [assert.type.string], [Function]];
	  }});
	Object.defineProperty(EventManager.prototype._findPluginFor, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var EventManagerPlugin = function EventManagerPlugin() {};
	($traceurRuntime.createClass)(EventManagerPlugin, {
	  supports: function(eventName) {
	    assert.argumentTypes(eventName, assert.type.string);
	    return assert.returnType((false), assert.type.boolean);
	  },
	  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
	    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
	    throw "not implemented";
	  }
	}, {});
	Object.defineProperty(EventManagerPlugin.prototype.supports, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(EventManagerPlugin.prototype.addEventListener, "parameters", {get: function() {
	    return [[], [assert.type.string], [Function], [assert.type.boolean]];
	  }});
	var DomEventsPlugin = function DomEventsPlugin() {
	  $traceurRuntime.superConstructor($DomEventsPlugin).apply(this, arguments);
	};
	var $DomEventsPlugin = DomEventsPlugin;
	($traceurRuntime.createClass)(DomEventsPlugin, {
	  supports: function(eventName) {
	    assert.argumentTypes(eventName, assert.type.string);
	    return assert.returnType((true), assert.type.boolean);
	  },
	  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
	    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
	    var outsideHandler = shouldSupportBubble ? $DomEventsPlugin.bubbleCallback(element, handler, this.manager._zone) : $DomEventsPlugin.sameElementCallback(element, handler, this.manager._zone);
	    this.manager._zone.runOutsideAngular((function() {
	      DOM.on(element, eventName, outsideHandler);
	    }));
	  }
	}, {
	  sameElementCallback: function(element, handler, zone) {
	    return (function(event) {
	      if (event.target === element) {
	        zone.run((function() {
	          return handler(event);
	        }));
	      }
	    });
	  },
	  bubbleCallback: function(element, handler, zone) {
	    return (function(event) {
	      return zone.run((function() {
	        return handler(event);
	      }));
	    });
	  }
	}, EventManagerPlugin);
	Object.defineProperty(DomEventsPlugin.prototype.supports, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(DomEventsPlugin.prototype.addEventListener, "parameters", {get: function() {
	    return [[], [assert.type.string], [Function], [assert.type.boolean]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/events/event_manager.map
	
	//# sourceMappingURL=./event_manager.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  HammerGesturesPlugin: {get: function() {
	      return HammerGesturesPlugin;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/events/hammer_gestures";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_events_47_hammer_95_common__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var HammerGesturesPluginCommon = ($__angular2_47_src_47_core_47_events_47_hammer_95_common__ = __webpack_require__(91), $__angular2_47_src_47_core_47_events_47_hammer_95_common__ && $__angular2_47_src_47_core_47_events_47_hammer_95_common__.__esModule && $__angular2_47_src_47_core_47_events_47_hammer_95_common__ || {default: $__angular2_47_src_47_core_47_events_47_hammer_95_common__}).HammerGesturesPluginCommon;
	var $__2 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__2.isPresent,
	    BaseException = $__2.BaseException;
	var HammerGesturesPlugin = function HammerGesturesPlugin() {
	  $traceurRuntime.superConstructor($HammerGesturesPlugin).call(this);
	};
	var $HammerGesturesPlugin = HammerGesturesPlugin;
	($traceurRuntime.createClass)(HammerGesturesPlugin, {
	  supports: function(eventName) {
	    assert.argumentTypes(eventName, assert.type.string);
	    if (!$traceurRuntime.superGet(this, $HammerGesturesPlugin.prototype, "supports").call(this, eventName))
	      return assert.returnType((false), assert.type.boolean);
	    if (!isPresent(window.Hammer)) {
	      throw new BaseException(("Hammer.js is not loaded, can not bind " + eventName + " event"));
	    }
	    return assert.returnType((true), assert.type.boolean);
	  },
	  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
	    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
	    if (shouldSupportBubble)
	      throw new BaseException('Hammer.js plugin does not support bubbling gestures.');
	    var zone = this.manager.getZone();
	    eventName = eventName.toLowerCase();
	    zone.runOutsideAngular(function() {
	      var mc = new Hammer(element);
	      mc.get('pinch').set({enable: true});
	      mc.get('rotate').set({enable: true});
	      mc.on(eventName, function(eventObj) {
	        zone.run(function() {
	          handler(eventObj);
	        });
	      });
	    });
	  }
	}, {}, HammerGesturesPluginCommon);
	Object.defineProperty(HammerGesturesPlugin.prototype.supports, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(HammerGesturesPlugin.prototype.addEventListener, "parameters", {get: function() {
	    return [[], [assert.type.string], [Function], [assert.type.boolean]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/events/hammer_gestures.map
	
	//# sourceMappingURL=./hammer_gestures.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Dependency: {get: function() {
	      return Dependency;
	    }},
	  Binding: {get: function() {
	      return Binding;
	    }},
	  bind: {get: function() {
	      return bind;
	    }},
	  BindingBuilder: {get: function() {
	      return BindingBuilder;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/di/binding";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_reflection_47_reflection__,
	    $__angular2_47_src_47_di_47_key__,
	    $__angular2_47_src_47_di_47_annotations__,
	    $__angular2_47_src_47_di_47_exceptions__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    FIELD = $__1.FIELD,
	    Type = $__1.Type,
	    isBlank = $__1.isBlank,
	    isPresent = $__1.isPresent;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    MapWrapper = $__2.MapWrapper,
	    ListWrapper = $__2.ListWrapper;
	var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = __webpack_require__(51), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
	var Key = ($__angular2_47_src_47_di_47_key__ = __webpack_require__(86), $__angular2_47_src_47_di_47_key__ && $__angular2_47_src_47_di_47_key__.__esModule && $__angular2_47_src_47_di_47_key__ || {default: $__angular2_47_src_47_di_47_key__}).Key;
	var $__5 = ($__angular2_47_src_47_di_47_annotations__ = __webpack_require__(84), $__angular2_47_src_47_di_47_annotations__ && $__angular2_47_src_47_di_47_annotations__.__esModule && $__angular2_47_src_47_di_47_annotations__ || {default: $__angular2_47_src_47_di_47_annotations__}),
	    Inject = $__5.Inject,
	    InjectLazy = $__5.InjectLazy,
	    InjectPromise = $__5.InjectPromise,
	    DependencyAnnotation = $__5.DependencyAnnotation;
	var NoAnnotationError = ($__angular2_47_src_47_di_47_exceptions__ = __webpack_require__(87), $__angular2_47_src_47_di_47_exceptions__ && $__angular2_47_src_47_di_47_exceptions__.__esModule && $__angular2_47_src_47_di_47_exceptions__ || {default: $__angular2_47_src_47_di_47_exceptions__}).NoAnnotationError;
	var Dependency = function Dependency(key, asPromise, lazy, properties) {
	  assert.argumentTypes(key, Key, asPromise, assert.type.boolean, lazy, assert.type.boolean, properties, List);
	  this.key = key;
	  this.asPromise = asPromise;
	  this.lazy = lazy;
	  this.properties = properties;
	};
	($traceurRuntime.createClass)(Dependency, {}, {});
	Object.defineProperty(Dependency, "parameters", {get: function() {
	    return [[Key], [assert.type.boolean], [assert.type.boolean], [List]];
	  }});
	var Binding = function Binding(key, factory, dependencies, providedAsPromise) {
	  assert.argumentTypes(key, Key, factory, Function, dependencies, List, providedAsPromise, assert.type.boolean);
	  this.key = key;
	  this.factory = factory;
	  this.dependencies = dependencies;
	  this.providedAsPromise = providedAsPromise;
	};
	($traceurRuntime.createClass)(Binding, {}, {});
	Object.defineProperty(Binding, "parameters", {get: function() {
	    return [[Key], [Function], [List], [assert.type.boolean]];
	  }});
	function bind(token) {
	  return assert.returnType((new BindingBuilder(token)), BindingBuilder);
	}
	var BindingBuilder = function BindingBuilder(token) {
	  this.token = token;
	};
	($traceurRuntime.createClass)(BindingBuilder, {
	  toClass: function(type) {
	    assert.argumentTypes(type, Type);
	    return assert.returnType((new Binding(Key.get(this.token), reflector.factory(type), _dependenciesFor(type), false)), Binding);
	  },
	  toValue: function(value) {
	    return assert.returnType((new Binding(Key.get(this.token), (function() {
	      return value;
	    }), [], false)), Binding);
	  },
	  toAlias: function(aliasToken) {
	    return assert.returnType((new Binding(Key.get(this.token), (function(aliasInstance) {
	      return aliasInstance;
	    }), [new Dependency(Key.get(aliasToken), false, false, [])], false)), Binding);
	  },
	  toFactory: function(factoryFunction) {
	    var dependencies = arguments[1] !== (void 0) ? arguments[1] : null;
	    assert.argumentTypes(factoryFunction, Function, dependencies, List);
	    return assert.returnType((new Binding(Key.get(this.token), factoryFunction, this._constructDependencies(factoryFunction, dependencies), false)), Binding);
	  },
	  toAsyncFactory: function(factoryFunction) {
	    var dependencies = arguments[1] !== (void 0) ? arguments[1] : null;
	    assert.argumentTypes(factoryFunction, Function, dependencies, List);
	    return assert.returnType((new Binding(Key.get(this.token), factoryFunction, this._constructDependencies(factoryFunction, dependencies), true)), Binding);
	  },
	  _constructDependencies: function(factoryFunction, dependencies) {
	    return isBlank(dependencies) ? _dependenciesFor(factoryFunction) : ListWrapper.map(dependencies, (function(t) {
	      return new Dependency(Key.get(t), false, false, []);
	    }));
	  }
	}, {});
	Object.defineProperty(BindingBuilder.prototype.toClass, "parameters", {get: function() {
	    return [[Type]];
	  }});
	Object.defineProperty(BindingBuilder.prototype.toFactory, "parameters", {get: function() {
	    return [[Function], [List]];
	  }});
	Object.defineProperty(BindingBuilder.prototype.toAsyncFactory, "parameters", {get: function() {
	    return [[Function], [List]];
	  }});
	Object.defineProperty(BindingBuilder.prototype._constructDependencies, "parameters", {get: function() {
	    return [[Function], [List]];
	  }});
	function _dependenciesFor(typeOrFunc) {
	  var params = reflector.parameters(typeOrFunc);
	  if (isBlank(params))
	    return assert.returnType(([]), List);
	  if (ListWrapper.any(params, (function(p) {
	    return isBlank(p);
	  })))
	    throw new NoAnnotationError(typeOrFunc);
	  return assert.returnType((ListWrapper.map(params, (function(p) {
	    return _extractToken(typeOrFunc, p);
	  }))), List);
	}
	function _extractToken(typeOrFunc, annotations) {
	  var type;
	  var depProps = [];
	  for (var i = 0; i < annotations.length; ++i) {
	    var paramAnnotation = annotations[i];
	    if (paramAnnotation instanceof Type) {
	      type = paramAnnotation;
	    } else if (paramAnnotation instanceof Inject) {
	      return _createDependency(paramAnnotation.token, false, false, []);
	    } else if (paramAnnotation instanceof InjectPromise) {
	      return _createDependency(paramAnnotation.token, true, false, []);
	    } else if (paramAnnotation instanceof InjectLazy) {
	      return _createDependency(paramAnnotation.token, false, true, []);
	    } else if (paramAnnotation instanceof DependencyAnnotation) {
	      ListWrapper.push(depProps, paramAnnotation);
	    }
	  }
	  if (isPresent(type)) {
	    return _createDependency(type, false, false, depProps);
	  } else {
	    throw new NoAnnotationError(typeOrFunc);
	  }
	}
	function _createDependency(token, asPromise, lazy, depProps) {
	  return assert.returnType((new Dependency(Key.get(token), asPromise, lazy, depProps)), Dependency);
	}
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/di/binding.map
	
	//# sourceMappingURL=./binding.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ComponentUrlMapper: {get: function() {
	      return ComponentUrlMapper;
	    }},
	  RuntimeComponentUrlMapper: {get: function() {
	      return RuntimeComponentUrlMapper;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/component_url_mapper";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    Type = $__1.Type,
	    isPresent = $__1.isPresent;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    Map = $__2.Map,
	    MapWrapper = $__2.MapWrapper;
	var ComponentUrlMapper = function ComponentUrlMapper() {};
	($traceurRuntime.createClass)(ComponentUrlMapper, {getUrl: function(component) {
	    assert.argumentTypes(component, Type);
	    return assert.returnType(('./'), assert.type.string);
	  }}, {});
	Object.defineProperty(ComponentUrlMapper.prototype.getUrl, "parameters", {get: function() {
	    return [[Type]];
	  }});
	var RuntimeComponentUrlMapper = function RuntimeComponentUrlMapper() {
	  $traceurRuntime.superConstructor($RuntimeComponentUrlMapper).call(this);
	  this._componentUrls = MapWrapper.create();
	};
	var $RuntimeComponentUrlMapper = RuntimeComponentUrlMapper;
	($traceurRuntime.createClass)(RuntimeComponentUrlMapper, {
	  setComponentUrl: function(component, url) {
	    assert.argumentTypes(component, Type, url, assert.type.string);
	    MapWrapper.set(this._componentUrls, component, url);
	  },
	  getUrl: function(component) {
	    assert.argumentTypes(component, Type);
	    var url = MapWrapper.get(this._componentUrls, component);
	    if (isPresent(url))
	      return assert.returnType((url), assert.type.string);
	    return assert.returnType(($traceurRuntime.superGet(this, $RuntimeComponentUrlMapper.prototype, "getUrl").call(this, component)), assert.type.string);
	  }
	}, {}, ComponentUrlMapper);
	Object.defineProperty(RuntimeComponentUrlMapper.prototype.setComponentUrl, "parameters", {get: function() {
	    return [[Type], [assert.type.string]];
	  }});
	Object.defineProperty(RuntimeComponentUrlMapper.prototype.getUrl, "parameters", {get: function() {
	    return [[Type]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/component_url_mapper.map
	
	//# sourceMappingURL=./component_url_mapper.map

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  UrlResolver: {get: function() {
	      return UrlResolver;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/url_resolver";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__1.isPresent,
	    isBlank = $__1.isBlank,
	    RegExpWrapper = $__1.RegExpWrapper,
	    BaseException = $__1.BaseException;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var UrlResolver = function UrlResolver() {
	  if (isBlank($UrlResolver.a)) {
	    $UrlResolver.a = DOM.createElement('a');
	  }
	};
	var $UrlResolver = UrlResolver;
	($traceurRuntime.createClass)(UrlResolver, {resolve: function(baseUrl, url) {
	    assert.argumentTypes(baseUrl, assert.type.string, url, assert.type.string);
	    if (isBlank(baseUrl)) {
	      $UrlResolver.a.href = url;
	      return assert.returnType(($UrlResolver.a.href), assert.type.string);
	    }
	    if (isBlank(url) || url == '')
	      return assert.returnType((baseUrl), assert.type.string);
	    if (url[0] == '/') {
	      throw new BaseException(("Could not resolve the url " + url + " from " + baseUrl));
	    }
	    var m = RegExpWrapper.firstMatch(_schemeRe, url);
	    if (isPresent(m[1])) {
	      return assert.returnType((url), assert.type.string);
	    }
	    $UrlResolver.a.href = baseUrl + '/../' + url;
	    return assert.returnType(($UrlResolver.a.href), assert.type.string);
	  }}, {});
	Object.defineProperty(UrlResolver.prototype.resolve, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	var _schemeRe = RegExpWrapper.create('^([^:/?#]+:)?');
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/url_resolver.map
	
	//# sourceMappingURL=./url_resolver.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  StyleUrlResolver: {get: function() {
	      return StyleUrlResolver;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/style_url_resolver";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    RegExp = $__1.RegExp,
	    RegExpWrapper = $__1.RegExpWrapper,
	    StringWrapper = $__1.StringWrapper;
	var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = __webpack_require__(68), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
	var StyleUrlResolver = function StyleUrlResolver(resolver) {
	  assert.argumentTypes(resolver, UrlResolver);
	  this._resolver = resolver;
	};
	($traceurRuntime.createClass)(StyleUrlResolver, {
	  resolveUrls: function(cssText, baseUrl) {
	    assert.argumentTypes(cssText, assert.type.string, baseUrl, assert.type.string);
	    cssText = this._replaceUrls(cssText, _cssUrlRe, baseUrl);
	    cssText = this._replaceUrls(cssText, _cssImportRe, baseUrl);
	    return cssText;
	  },
	  _replaceUrls: function(cssText, re, baseUrl) {
	    var $__3 = this;
	    assert.argumentTypes(cssText, assert.type.string, re, RegExp, baseUrl, assert.type.string);
	    return StringWrapper.replaceAllMapped(cssText, re, (function(m) {
	      var pre = m[1];
	      var url = StringWrapper.replaceAll(m[2], _quoteRe, '');
	      var post = m[3];
	      var resolvedUrl = $__3._resolver.resolve(baseUrl, url);
	      return pre + "'" + resolvedUrl + "'" + post;
	    }));
	  }
	}, {});
	Object.defineProperty(StyleUrlResolver, "parameters", {get: function() {
	    return [[UrlResolver]];
	  }});
	Object.defineProperty(StyleUrlResolver.prototype.resolveUrls, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(StyleUrlResolver.prototype._replaceUrls, "parameters", {get: function() {
	    return [[assert.type.string], [RegExp], [assert.type.string]];
	  }});
	var _cssUrlRe = RegExpWrapper.create('(url\\()([^)]*)(\\))');
	var _cssImportRe = RegExpWrapper.create('(@import[\\s]+(?!url\\())[\'"]([^\'"]*)[\'"](.*;)');
	var _quoteRe = RegExpWrapper.create('[\'"]');
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/style_url_resolver.map
	
	//# sourceMappingURL=./style_url_resolver.map

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  StyleInliner: {get: function() {
	      return StyleInliner;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/style_inliner";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__,
	    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
	    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_async__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = __webpack_require__(62), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
	var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = __webpack_require__(69), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
	var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = __webpack_require__(68), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
	var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
	var $__5 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isBlank = $__5.isBlank,
	    isPresent = $__5.isPresent,
	    RegExp = $__5.RegExp,
	    RegExpWrapper = $__5.RegExpWrapper,
	    StringWrapper = $__5.StringWrapper,
	    normalizeBlank = $__5.normalizeBlank;
	var $__6 = ($__angular2_47_src_47_facade_47_async__ = __webpack_require__(58), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
	    Promise = $__6.Promise,
	    PromiseWrapper = $__6.PromiseWrapper;
	var StyleInliner = function StyleInliner(xhr, styleUrlResolver, urlResolver) {
	  assert.argumentTypes(xhr, XHR, styleUrlResolver, StyleUrlResolver, urlResolver, UrlResolver);
	  this._xhr = xhr;
	  this._urlResolver = urlResolver;
	  this._styleUrlResolver = styleUrlResolver;
	};
	($traceurRuntime.createClass)(StyleInliner, {
	  inlineImports: function(cssText, baseUrl) {
	    assert.argumentTypes(cssText, assert.type.string, baseUrl, assert.type.string);
	    return this._inlineImports(cssText, baseUrl, []);
	  },
	  _inlineImports: function(cssText, baseUrl, inlinedUrls) {
	    var $__7 = this;
	    var partIndex = 0;
	    var parts = StringWrapper.split(cssText, _importRe);
	    if (parts.length === 1) {
	      return cssText;
	    }
	    var promises = [];
	    while (partIndex < parts.length - 1) {
	      var prefix = parts[partIndex];
	      var rule = parts[partIndex + 1];
	      var url = _extractUrl(rule);
	      if (isPresent(url)) {
	        url = this._urlResolver.resolve(baseUrl, url);
	      }
	      var mediaQuery = _extractMediaQuery(rule);
	      var promise = void 0;
	      if (isBlank(url)) {
	        promise = PromiseWrapper.resolve(("/* Invalid import rule: \"@import " + rule + ";\" */"));
	      } else if (ListWrapper.contains(inlinedUrls, url)) {
	        promise = PromiseWrapper.resolve(prefix);
	      } else {
	        ListWrapper.push(inlinedUrls, url);
	        promise = PromiseWrapper.then(this._xhr.get(url), (function(css) {
	          css = $__7._inlineImports(css, url, inlinedUrls);
	          if (PromiseWrapper.isPromise(css)) {
	            return css.then((function(css) {
	              return prefix + $__7._transformImportedCss(css, mediaQuery, url) + '\n';
	            }));
	          } else {
	            return prefix + $__7._transformImportedCss(css, mediaQuery, url) + '\n';
	          }
	        }), (function(error) {
	          return ("/* failed to import " + url + " */\n");
	        }));
	      }
	      ListWrapper.push(promises, promise);
	      partIndex += 2;
	    }
	    return PromiseWrapper.all(promises).then(function(cssParts) {
	      var cssText = cssParts.join('');
	      if (partIndex < parts.length) {
	        cssText += parts[partIndex];
	      }
	      return cssText;
	    });
	  },
	  _transformImportedCss: function(css, mediaQuery, url) {
	    assert.argumentTypes(css, assert.type.string, mediaQuery, assert.type.string, url, assert.type.string);
	    css = this._styleUrlResolver.resolveUrls(css, url);
	    return assert.returnType((_wrapInMediaRule(css, mediaQuery)), assert.type.string);
	  }
	}, {});
	Object.defineProperty(StyleInliner, "parameters", {get: function() {
	    return [[XHR], [StyleUrlResolver], [UrlResolver]];
	  }});
	Object.defineProperty(StyleInliner.prototype.inlineImports, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(StyleInliner.prototype._inlineImports, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.genericType(List, assert.type.string)]];
	  }});
	Object.defineProperty(StyleInliner.prototype._transformImportedCss, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string]];
	  }});
	function _extractUrl(importRule) {
	  assert.argumentTypes(importRule, assert.type.string);
	  var match = RegExpWrapper.firstMatch(_urlRe, importRule);
	  if (isBlank(match))
	    return assert.returnType((null), assert.type.string);
	  return assert.returnType((isPresent(match[1]) ? match[1] : match[2]), assert.type.string);
	}
	Object.defineProperty(_extractUrl, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	function _extractMediaQuery(importRule) {
	  assert.argumentTypes(importRule, assert.type.string);
	  var match = RegExpWrapper.firstMatch(_mediaQueryRe, importRule);
	  if (isBlank(match))
	    return assert.returnType((null), assert.type.string);
	  var mediaQuery = match[1].trim();
	  return assert.returnType(((mediaQuery.length > 0) ? mediaQuery : null), assert.type.string);
	}
	Object.defineProperty(_extractMediaQuery, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	function _wrapInMediaRule(css, query) {
	  assert.argumentTypes(css, assert.type.string, query, assert.type.string);
	  return assert.returnType(((isBlank(query)) ? css : ("@media " + query + " {\n" + css + "\n}")), assert.type.string);
	}
	Object.defineProperty(_wrapInMediaRule, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	var _importRe = RegExpWrapper.create('@import\\s+([^;]+);');
	var _urlRe = RegExpWrapper.create('url\\(\\s*?[\'"]?([^\'")]+)[\'"]?|' + '[\'"]([^\'")]+)[\'"]');
	var _mediaQueryRe = RegExpWrapper.create('[\'"][^\'"]+[\'"]\\s*\\)?\\s*(.*)');
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/style_inliner.map
	
	//# sourceMappingURL=./style_inliner.map

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  CompilePipeline: {get: function() {
	      return CompilePipeline;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/compile_pipeline";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var isPresent = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = __webpack_require__(92), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var CompilePipeline = function CompilePipeline(steps) {
	  assert.argumentTypes(steps, assert.genericType(List, CompileStep));
	  this._control = new CompileControl(steps);
	};
	($traceurRuntime.createClass)(CompilePipeline, {
	  process: function(rootElement) {
	    var compilationCtxtDescription = arguments[1] !== (void 0) ? arguments[1] : '';
	    assert.argumentTypes(rootElement, assert.type.any, compilationCtxtDescription, assert.type.string);
	    var results = ListWrapper.create();
	    this._process(results, null, new CompileElement(rootElement, compilationCtxtDescription), compilationCtxtDescription);
	    return assert.returnType((results), List);
	  },
	  _process: function(results, parent, current) {
	    var compilationCtxtDescription = arguments[3] !== (void 0) ? arguments[3] : '';
	    assert.argumentTypes(results, assert.type.any, parent, CompileElement, current, CompileElement, compilationCtxtDescription, assert.type.string);
	    var additionalChildren = this._control.internalProcess(results, 0, parent, current);
	    if (current.compileChildren) {
	      var node = DOM.firstChild(DOM.templateAwareRoot(current.element));
	      while (isPresent(node)) {
	        var nextNode = DOM.nextSibling(node);
	        if (DOM.isElementNode(node)) {
	          this._process(results, current, new CompileElement(node, compilationCtxtDescription));
	        }
	        node = nextNode;
	      }
	    }
	    if (isPresent(additionalChildren)) {
	      for (var i = 0; i < additionalChildren.length; i++) {
	        this._process(results, current, additionalChildren[i]);
	      }
	    }
	  }
	}, {});
	Object.defineProperty(CompilePipeline, "parameters", {get: function() {
	    return [[assert.genericType(List, CompileStep)]];
	  }});
	Object.defineProperty(CompilePipeline.prototype.process, "parameters", {get: function() {
	    return [[], [assert.type.string]];
	  }});
	Object.defineProperty(CompilePipeline.prototype._process, "parameters", {get: function() {
	    return [[], [CompileElement], [CompileElement], [assert.type.string]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/compile_pipeline.map
	
	//# sourceMappingURL=./compile_pipeline.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  CompileElement: {get: function() {
	      return CompileElement;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/compile_element";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
	    $__angular2_47_src_47_core_47_annotations_47_annotations__,
	    $__angular2_47_src_47_core_47_compiler_47_element_95_binder__,
	    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
	    $__angular2_47_src_47_core_47_compiler_47_view__,
	    $__angular2_47_change_95_detection__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__1.List,
	    Map = $__1.Map,
	    ListWrapper = $__1.ListWrapper,
	    MapWrapper = $__1.MapWrapper;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var $__3 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    int = $__3.int,
	    isBlank = $__3.isBlank,
	    isPresent = $__3.isPresent,
	    Type = $__3.Type,
	    StringJoiner = $__3.StringJoiner,
	    assertionsEnabled = $__3.assertionsEnabled;
	var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = __webpack_require__(74), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
	var $__5 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = __webpack_require__(25), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
	    Decorator = $__5.Decorator,
	    Component = $__5.Component,
	    Viewport = $__5.Viewport;
	var ElementBinder = ($__angular2_47_src_47_core_47_compiler_47_element_95_binder__ = __webpack_require__(77), $__angular2_47_src_47_core_47_compiler_47_element_95_binder__ && $__angular2_47_src_47_core_47_compiler_47_element_95_binder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_binder__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_binder__}).ElementBinder;
	var ProtoElementInjector = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = __webpack_require__(76), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}).ProtoElementInjector;
	var ProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = __webpack_require__(31), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).ProtoView;
	var AST = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).AST;
	var CompileElement = function CompileElement(element) {
	  var compilationUnit = arguments[1] !== (void 0) ? arguments[1] : '';
	  this.element = element;
	  this._attrs = null;
	  this._classList = null;
	  this.textNodeBindings = null;
	  this.propertyBindings = null;
	  this.eventBindings = null;
	  this.variableBindings = null;
	  this.decoratorDirectives = null;
	  this.viewportDirective = null;
	  this.componentDirective = null;
	  this._allDirectives = null;
	  this.isViewRoot = false;
	  this.hasBindings = false;
	  this.inheritedProtoView = null;
	  this.inheritedProtoElementInjector = null;
	  this.inheritedElementBinder = null;
	  this.distanceToParentInjector = 0;
	  this.compileChildren = true;
	  this.ignoreBindings = false;
	  var tplDesc = assertionsEnabled() ? getElementDescription(element) : null;
	  if (compilationUnit !== '') {
	    this.elementDescription = compilationUnit;
	    if (isPresent(tplDesc))
	      this.elementDescription += ": " + tplDesc;
	  } else {
	    this.elementDescription = tplDesc;
	  }
	};
	($traceurRuntime.createClass)(CompileElement, {
	  refreshAttrs: function() {
	    this._attrs = null;
	  },
	  attrs: function() {
	    if (isBlank(this._attrs)) {
	      this._attrs = DOM.attributeMap(this.element);
	    }
	    return assert.returnType((this._attrs), assert.genericType(Map, assert.type.string, assert.type.string));
	  },
	  refreshClassList: function() {
	    this._classList = null;
	  },
	  classList: function() {
	    if (isBlank(this._classList)) {
	      this._classList = ListWrapper.create();
	      var elClassList = DOM.classList(this.element);
	      for (var i = 0; i < elClassList.length; i++) {
	        ListWrapper.push(this._classList, elClassList[i]);
	      }
	    }
	    return assert.returnType((this._classList), assert.genericType(List, assert.type.string));
	  },
	  addTextNodeBinding: function(indexInParent, expression) {
	    assert.argumentTypes(indexInParent, int, expression, AST);
	    if (isBlank(this.textNodeBindings)) {
	      this.textNodeBindings = MapWrapper.create();
	    }
	    MapWrapper.set(this.textNodeBindings, indexInParent, expression);
	  },
	  addPropertyBinding: function(property, expression) {
	    assert.argumentTypes(property, assert.type.string, expression, AST);
	    if (isBlank(this.propertyBindings)) {
	      this.propertyBindings = MapWrapper.create();
	    }
	    MapWrapper.set(this.propertyBindings, property, expression);
	  },
	  addVariableBinding: function(variableName, variableValue) {
	    assert.argumentTypes(variableName, assert.type.string, variableValue, assert.type.string);
	    if (isBlank(this.variableBindings)) {
	      this.variableBindings = MapWrapper.create();
	    }
	    MapWrapper.set(this.variableBindings, variableValue, variableName);
	  },
	  addEventBinding: function(eventName, expression) {
	    assert.argumentTypes(eventName, assert.type.string, expression, AST);
	    if (isBlank(this.eventBindings)) {
	      this.eventBindings = MapWrapper.create();
	    }
	    MapWrapper.set(this.eventBindings, eventName, expression);
	  },
	  addDirective: function(directive) {
	    assert.argumentTypes(directive, DirectiveMetadata);
	    var annotation = directive.annotation;
	    this._allDirectives = null;
	    if (annotation instanceof Decorator) {
	      if (isBlank(this.decoratorDirectives)) {
	        this.decoratorDirectives = ListWrapper.create();
	      }
	      ListWrapper.push(this.decoratorDirectives, directive);
	      if (!annotation.compileChildren) {
	        this.compileChildren = false;
	      }
	    } else if (annotation instanceof Viewport) {
	      this.viewportDirective = directive;
	    } else if (annotation instanceof Component) {
	      this.componentDirective = directive;
	    }
	  },
	  getAllDirectives: function() {
	    if (this._allDirectives === null) {
	      var directives = ListWrapper.create();
	      if (isPresent(this.componentDirective)) {
	        ListWrapper.push(directives, this.componentDirective);
	      }
	      if (isPresent(this.viewportDirective)) {
	        ListWrapper.push(directives, this.viewportDirective);
	      }
	      if (isPresent(this.decoratorDirectives)) {
	        directives = ListWrapper.concat(directives, this.decoratorDirectives);
	      }
	      this._allDirectives = directives;
	    }
	    return assert.returnType((this._allDirectives), assert.genericType(List, DirectiveMetadata));
	  }
	}, {});
	Object.defineProperty(CompileElement.prototype.addTextNodeBinding, "parameters", {get: function() {
	    return [[int], [AST]];
	  }});
	Object.defineProperty(CompileElement.prototype.addPropertyBinding, "parameters", {get: function() {
	    return [[assert.type.string], [AST]];
	  }});
	Object.defineProperty(CompileElement.prototype.addVariableBinding, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(CompileElement.prototype.addEventBinding, "parameters", {get: function() {
	    return [[assert.type.string], [AST]];
	  }});
	Object.defineProperty(CompileElement.prototype.addDirective, "parameters", {get: function() {
	    return [[DirectiveMetadata]];
	  }});
	function getElementDescription(domElement) {
	  var buf = new StringJoiner();
	  var atts = DOM.attributeMap(domElement);
	  buf.add("<");
	  buf.add(DOM.tagName(domElement).toLowerCase());
	  addDescriptionAttribute(buf, "id", MapWrapper.get(atts, "id"));
	  addDescriptionAttribute(buf, "class", MapWrapper.get(atts, "class"));
	  MapWrapper.forEach(atts, (function(attValue, attName) {
	    if (attName !== "id" && attName !== "class") {
	      addDescriptionAttribute(buf, attName, attValue);
	    }
	  }));
	  buf.add(">");
	  return assert.returnType((buf.toString()), assert.type.string);
	}
	function addDescriptionAttribute(buffer, attName, attValue) {
	  assert.argumentTypes(buffer, StringJoiner, attName, assert.type.string, attValue, assert.type.any);
	  if (isPresent(attValue)) {
	    if (attValue.length === 0) {
	      buffer.add(' ' + attName);
	    } else {
	      buffer.add(' ' + attName + '="' + attValue + '"');
	    }
	  }
	}
	Object.defineProperty(addDescriptionAttribute, "parameters", {get: function() {
	    return [[StringJoiner], [assert.type.string], []];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/compile_element.map
	
	//# sourceMappingURL=./compile_element.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  createDefaultSteps: {get: function() {
	      return createDefaultSteps;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/default_steps";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_change_95_detection__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_property_95_binding_95_parser__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_resolve_95_css__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_shim_95_shadow_95_dom__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
	    ChangeDetection = $__1.ChangeDetection,
	    Parser = $__1.Parser;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper;
	var PropertyBindingParser = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_property_95_binding_95_parser__ = __webpack_require__(93), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_property_95_binding_95_parser__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_property_95_binding_95_parser__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_property_95_binding_95_parser__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_property_95_binding_95_parser__}).PropertyBindingParser;
	var TextInterpolationParser = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__ = __webpack_require__(94), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__}).TextInterpolationParser;
	var DirectiveParser = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__ = __webpack_require__(95), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__}).DirectiveParser;
	var ViewSplitter = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__ = __webpack_require__(96), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__}).ViewSplitter;
	var ElementBindingMarker = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__ = __webpack_require__(97), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__}).ElementBindingMarker;
	var ProtoViewBuilder = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__ = __webpack_require__(98), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__}).ProtoViewBuilder;
	var ProtoElementInjectorBuilder = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__ = __webpack_require__(99), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__}).ProtoElementInjectorBuilder;
	var ElementBinderBuilder = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ = __webpack_require__(100), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__}).ElementBinderBuilder;
	var ResolveCss = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_resolve_95_css__ = __webpack_require__(101), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_resolve_95_css__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_resolve_95_css__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_resolve_95_css__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_resolve_95_css__}).ResolveCss;
	var ShimShadowDom = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_shim_95_shadow_95_dom__ = __webpack_require__(102), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_shim_95_shadow_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_shim_95_shadow_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_shim_95_shadow_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_shim_95_shadow_95_dom__}).ShimShadowDom;
	var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = __webpack_require__(74), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
	var $__14 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = __webpack_require__(61), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}),
	    ShadowDomStrategy = $__14.ShadowDomStrategy,
	    EmulatedScopedShadowDomStrategy = $__14.EmulatedScopedShadowDomStrategy;
	function createDefaultSteps(changeDetection, parser, compiledComponent, directives, shadowDomStrategy, templateUrl) {
	  assert.argumentTypes(changeDetection, ChangeDetection, parser, Parser, compiledComponent, DirectiveMetadata, directives, assert.genericType(List, DirectiveMetadata), shadowDomStrategy, ShadowDomStrategy, templateUrl, assert.type.string);
	  var steps = [new ViewSplitter(parser), new ResolveCss(compiledComponent, shadowDomStrategy, templateUrl), new PropertyBindingParser(parser), new DirectiveParser(directives), new TextInterpolationParser(parser), new ElementBindingMarker(), new ProtoViewBuilder(changeDetection, shadowDomStrategy), new ProtoElementInjectorBuilder(), new ElementBinderBuilder(parser)];
	  if (shadowDomStrategy instanceof EmulatedScopedShadowDomStrategy) {
	    var step = new ShimShadowDom(compiledComponent, shadowDomStrategy);
	    ListWrapper.push(steps, step);
	  }
	  return steps;
	}
	Object.defineProperty(createDefaultSteps, "parameters", {get: function() {
	    return [[ChangeDetection], [Parser], [DirectiveMetadata], [assert.genericType(List, DirectiveMetadata)], [ShadowDomStrategy], [assert.type.string]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/default_steps.map
	
	//# sourceMappingURL=./default_steps.map

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  DirectiveMetadata: {get: function() {
	      return DirectiveMetadata;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/directive_metadata";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_core_47_annotations_47_annotations__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var Type = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).Type;
	var Directive = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = __webpack_require__(25), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Directive;
	var DirectiveMetadata = function DirectiveMetadata(type, annotation) {
	  assert.argumentTypes(type, Type, annotation, Directive);
	  this.annotation = annotation;
	  this.type = type;
	};
	($traceurRuntime.createClass)(DirectiveMetadata, {}, {});
	Object.defineProperty(DirectiveMetadata, "parameters", {get: function() {
	    return [[Type], [Directive]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/directive_metadata.map
	
	//# sourceMappingURL=./directive_metadata.map

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  CompileStep: {get: function() {
	      return CompileStep;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/compile_step";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = __webpack_require__(92), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
	var CompileStep = function CompileStep() {};
	($traceurRuntime.createClass)(CompileStep, {process: function(parent, current, control) {
	    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
	  }}, {});
	Object.defineProperty(CompileStep.prototype.process, "parameters", {get: function() {
	    return [[CompileElement], [CompileElement], [CompileControl]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/compile_step.map
	
	//# sourceMappingURL=./compile_step.map

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  DirectiveDependency: {get: function() {
	      return DirectiveDependency;
	    }},
	  DirectiveBinding: {get: function() {
	      return DirectiveBinding;
	    }},
	  PreBuiltObjects: {get: function() {
	      return PreBuiltObjects;
	    }},
	  ProtoElementInjector: {get: function() {
	      return ProtoElementInjector;
	    }},
	  ElementInjector: {get: function() {
	      return ElementInjector;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/element_injector";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_math__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_di__,
	    $__angular2_47_src_47_core_47_annotations_47_visibility__,
	    $__angular2_47_src_47_core_47_annotations_47_events__,
	    $__angular2_47_src_47_core_47_compiler_47_view__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__,
	    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
	    $__angular2_47_src_47_core_47_dom_47_element__,
	    $__angular2_47_src_47_core_47_annotations_47_annotations__,
	    $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    FIELD = $__1.FIELD,
	    isPresent = $__1.isPresent,
	    isBlank = $__1.isBlank,
	    Type = $__1.Type,
	    int = $__1.int,
	    BaseException = $__1.BaseException;
	var Math = ($__angular2_47_src_47_facade_47_math__ = __webpack_require__(103), $__angular2_47_src_47_facade_47_math__ && $__angular2_47_src_47_facade_47_math__.__esModule && $__angular2_47_src_47_facade_47_math__ || {default: $__angular2_47_src_47_facade_47_math__}).Math;
	var $__3 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__3.List,
	    ListWrapper = $__3.ListWrapper,
	    MapWrapper = $__3.MapWrapper;
	var $__4 = ($__angular2_47_di__ = __webpack_require__(52), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
	    Injector = $__4.Injector,
	    Key = $__4.Key,
	    Dependency = $__4.Dependency,
	    bind = $__4.bind,
	    Binding = $__4.Binding,
	    NoProviderError = $__4.NoProviderError,
	    ProviderError = $__4.ProviderError,
	    CyclicDependencyError = $__4.CyclicDependencyError;
	var $__5 = ($__angular2_47_src_47_core_47_annotations_47_visibility__ = __webpack_require__(26), $__angular2_47_src_47_core_47_annotations_47_visibility__ && $__angular2_47_src_47_core_47_annotations_47_visibility__.__esModule && $__angular2_47_src_47_core_47_annotations_47_visibility__ || {default: $__angular2_47_src_47_core_47_annotations_47_visibility__}),
	    Parent = $__5.Parent,
	    Ancestor = $__5.Ancestor;
	var EventEmitter = ($__angular2_47_src_47_core_47_annotations_47_events__ = __webpack_require__(104), $__angular2_47_src_47_core_47_annotations_47_events__ && $__angular2_47_src_47_core_47_annotations_47_events__.__esModule && $__angular2_47_src_47_core_47_annotations_47_events__ || {default: $__angular2_47_src_47_core_47_annotations_47_events__}).EventEmitter;
	var $__7 = ($__angular2_47_src_47_core_47_compiler_47_view__ = __webpack_require__(31), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}),
	    View = $__7.View,
	    ProtoView = $__7.ProtoView;
	var $__8 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = __webpack_require__(79), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__}),
	    LightDom = $__8.LightDom,
	    SourceLightDom = $__8.SourceLightDom,
	    DestinationLightDom = $__8.DestinationLightDom;
	var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = __webpack_require__(32), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
	var NgElement = ($__angular2_47_src_47_core_47_dom_47_element__ = __webpack_require__(34), $__angular2_47_src_47_core_47_dom_47_element__ && $__angular2_47_src_47_core_47_dom_47_element__.__esModule && $__angular2_47_src_47_core_47_dom_47_element__ || {default: $__angular2_47_src_47_core_47_dom_47_element__}).NgElement;
	var $__11 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = __webpack_require__(25), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
	    Directive = $__11.Directive,
	    onChange = $__11.onChange,
	    onDestroy = $__11.onDestroy;
	var BindingPropagationConfig = ($__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ = __webpack_require__(33), $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ && $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__.__esModule && $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ || {default: $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__}).BindingPropagationConfig;
	var _MAX_DIRECTIVE_CONSTRUCTION_COUNTER = 10;
	var MAX_DEPTH = Math.pow(2, 30) - 1;
	var _undefined = new Object();
	var _staticKeys;
	var StaticKeys = function StaticKeys() {
	  this.viewId = Key.get(View).id;
	  this.ngElementId = Key.get(NgElement).id;
	  this.viewContainerId = Key.get(ViewContainer).id;
	  this.destinationLightDomId = Key.get(DestinationLightDom).id;
	  this.sourceLightDomId = Key.get(SourceLightDom).id;
	  this.bindingPropagationConfigId = Key.get(BindingPropagationConfig).id;
	};
	var $StaticKeys = StaticKeys;
	($traceurRuntime.createClass)(StaticKeys, {}, {instance: function() {
	    if (isBlank(_staticKeys))
	      _staticKeys = new $StaticKeys();
	    return _staticKeys;
	  }});
	var TreeNode = function TreeNode(parent) {
	  assert.argumentTypes(parent, $TreeNode);
	  this._parent = parent;
	  this._head = null;
	  this._tail = null;
	  this._next = null;
	  if (isPresent(parent))
	    parent._addChild(this);
	};
	var $TreeNode = TreeNode;
	($traceurRuntime.createClass)(TreeNode, {
	  _addChild: function(child) {
	    assert.argumentTypes(child, $TreeNode);
	    if (isPresent(this._tail)) {
	      this._tail._next = child;
	      this._tail = child;
	    } else {
	      this._tail = this._head = child;
	    }
	  },
	  get parent() {
	    return this._parent;
	  },
	  set parent(node) {
	    assert.argumentTypes(node, $TreeNode);
	    this._parent = node;
	  },
	  get children() {
	    var res = [];
	    var child = this._head;
	    while (child != null) {
	      ListWrapper.push(res, child);
	      child = child._next;
	    }
	    return res;
	  }
	}, {});
	Object.defineProperty(TreeNode, "parameters", {get: function() {
	    return [[TreeNode]];
	  }});
	Object.defineProperty(TreeNode.prototype._addChild, "parameters", {get: function() {
	    return [[TreeNode]];
	  }});
	Object.defineProperty(Object.getOwnPropertyDescriptor(TreeNode.prototype, "parent").set, "parameters", {get: function() {
	    return [[TreeNode]];
	  }});
	var DirectiveDependency = function DirectiveDependency(key, asPromise, lazy, properties, depth, eventEmitterName) {
	  assert.argumentTypes(key, Key, asPromise, assert.type.boolean, lazy, assert.type.boolean, properties, List, depth, int, eventEmitterName, assert.type.string);
	  $traceurRuntime.superConstructor($DirectiveDependency).call(this, key, asPromise, lazy, properties);
	  this.depth = depth;
	  this.eventEmitterName = eventEmitterName;
	};
	var $DirectiveDependency = DirectiveDependency;
	($traceurRuntime.createClass)(DirectiveDependency, {}, {
	  createFrom: function(d) {
	    assert.argumentTypes(d, Dependency);
	    return assert.returnType((new $DirectiveDependency(d.key, d.asPromise, d.lazy, d.properties, $DirectiveDependency._depth(d.properties), $DirectiveDependency._eventEmitterName(d.properties))), Dependency);
	  },
	  _depth: function(properties) {
	    if (properties.length == 0)
	      return assert.returnType((0), int);
	    if (ListWrapper.any(properties, (function(p) {
	      return p instanceof Parent;
	    })))
	      return assert.returnType((1), int);
	    if (ListWrapper.any(properties, (function(p) {
	      return p instanceof Ancestor;
	    })))
	      return assert.returnType((MAX_DEPTH), int);
	    return assert.returnType((0), int);
	  },
	  _eventEmitterName: function(properties) {
	    for (var i = 0; i < properties.length; i++) {
	      if (properties[i] instanceof EventEmitter) {
	        return assert.returnType((properties[i].eventName), assert.type.string);
	      }
	    }
	    return assert.returnType((null), assert.type.string);
	  }
	}, Dependency);
	Object.defineProperty(DirectiveDependency, "parameters", {get: function() {
	    return [[Key], [assert.type.boolean], [assert.type.boolean], [List], [int], [assert.type.string]];
	  }});
	Object.defineProperty(DirectiveDependency.createFrom, "parameters", {get: function() {
	    return [[Dependency]];
	  }});
	var DirectiveBinding = function DirectiveBinding(key, factory, dependencies, providedAsPromise, annotation) {
	  assert.argumentTypes(key, Key, factory, Function, dependencies, List, providedAsPromise, assert.type.boolean, annotation, Directive);
	  $traceurRuntime.superConstructor($DirectiveBinding).call(this, key, factory, dependencies, providedAsPromise);
	  this.callOnDestroy = isPresent(annotation) && annotation.hasLifecycleHook(onDestroy);
	  this.callOnChange = isPresent(annotation) && annotation.hasLifecycleHook(onChange);
	};
	var $DirectiveBinding = DirectiveBinding;
	($traceurRuntime.createClass)(DirectiveBinding, {}, {
	  createFromBinding: function(b, annotation) {
	    assert.argumentTypes(b, Binding, annotation, Directive);
	    var deps = ListWrapper.map(b.dependencies, DirectiveDependency.createFrom);
	    return assert.returnType((new $DirectiveBinding(b.key, b.factory, deps, b.providedAsPromise, annotation)), Binding);
	  },
	  createFromType: function(type, annotation) {
	    assert.argumentTypes(type, Type, annotation, Directive);
	    var binding = bind(type).toClass(type);
	    return assert.returnType(($DirectiveBinding.createFromBinding(binding, annotation)), Binding);
	  },
	  _hasEventEmitter: function(eventName, binding) {
	    return ListWrapper.any(binding.dependencies, (function(d) {
	      return (d.eventEmitterName == eventName);
	    }));
	  }
	}, Binding);
	Object.defineProperty(DirectiveBinding, "parameters", {get: function() {
	    return [[Key], [Function], [List], [assert.type.boolean], [Directive]];
	  }});
	Object.defineProperty(DirectiveBinding.createFromBinding, "parameters", {get: function() {
	    return [[Binding], [Directive]];
	  }});
	Object.defineProperty(DirectiveBinding.createFromType, "parameters", {get: function() {
	    return [[Type], [Directive]];
	  }});
	Object.defineProperty(DirectiveBinding._hasEventEmitter, "parameters", {get: function() {
	    return [[assert.type.string], [DirectiveBinding]];
	  }});
	var PreBuiltObjects = function PreBuiltObjects(view, element, viewContainer, lightDom, bindingPropagationConfig) {
	  assert.argumentTypes(view, assert.type.any, element, NgElement, viewContainer, ViewContainer, lightDom, LightDom, bindingPropagationConfig, BindingPropagationConfig);
	  this.view = view;
	  this.element = element;
	  this.viewContainer = viewContainer;
	  this.lightDom = lightDom;
	  this.bindingPropagationConfig = bindingPropagationConfig;
	};
	($traceurRuntime.createClass)(PreBuiltObjects, {}, {});
	Object.defineProperty(PreBuiltObjects, "parameters", {get: function() {
	    return [[], [NgElement], [ViewContainer], [LightDom], [BindingPropagationConfig]];
	  }});
	var ProtoElementInjector = function ProtoElementInjector(parent, index, bindings) {
	  var firstBindingIsComponent = arguments[3] !== (void 0) ? arguments[3] : false;
	  var distanceToParent = arguments[4] !== (void 0) ? arguments[4] : 0;
	  assert.argumentTypes(parent, $ProtoElementInjector, index, int, bindings, List, firstBindingIsComponent, assert.type.boolean, distanceToParent, assert.type.number);
	  this.parent = parent;
	  this.index = index;
	  this.distanceToParent = distanceToParent;
	  this.exportComponent = false;
	  this.exportElement = false;
	  this._binding0IsComponent = firstBindingIsComponent;
	  this._binding0 = null;
	  this._keyId0 = null;
	  this._binding1 = null;
	  this._keyId1 = null;
	  this._binding2 = null;
	  this._keyId2 = null;
	  this._binding3 = null;
	  this._keyId3 = null;
	  this._binding4 = null;
	  this._keyId4 = null;
	  this._binding5 = null;
	  this._keyId5 = null;
	  this._binding6 = null;
	  this._keyId6 = null;
	  this._binding7 = null;
	  this._keyId7 = null;
	  this._binding8 = null;
	  this._keyId8 = null;
	  this._binding9 = null;
	  this._keyId9 = null;
	  var length = bindings.length;
	  if (length > 0) {
	    this._binding0 = this._createBinding(bindings[0]);
	    this._keyId0 = this._binding0.key.id;
	  }
	  if (length > 1) {
	    this._binding1 = this._createBinding(bindings[1]);
	    this._keyId1 = this._binding1.key.id;
	  }
	  if (length > 2) {
	    this._binding2 = this._createBinding(bindings[2]);
	    this._keyId2 = this._binding2.key.id;
	  }
	  if (length > 3) {
	    this._binding3 = this._createBinding(bindings[3]);
	    this._keyId3 = this._binding3.key.id;
	  }
	  if (length > 4) {
	    this._binding4 = this._createBinding(bindings[4]);
	    this._keyId4 = this._binding4.key.id;
	  }
	  if (length > 5) {
	    this._binding5 = this._createBinding(bindings[5]);
	    this._keyId5 = this._binding5.key.id;
	  }
	  if (length > 6) {
	    this._binding6 = this._createBinding(bindings[6]);
	    this._keyId6 = this._binding6.key.id;
	  }
	  if (length > 7) {
	    this._binding7 = this._createBinding(bindings[7]);
	    this._keyId7 = this._binding7.key.id;
	  }
	  if (length > 8) {
	    this._binding8 = this._createBinding(bindings[8]);
	    this._keyId8 = this._binding8.key.id;
	  }
	  if (length > 9) {
	    this._binding9 = this._createBinding(bindings[9]);
	    this._keyId9 = this._binding9.key.id;
	  }
	  if (length > 10) {
	    throw 'Maximum number of directives per element has been reached.';
	  }
	};
	var $ProtoElementInjector = ProtoElementInjector;
	($traceurRuntime.createClass)(ProtoElementInjector, {
	  instantiate: function(parent, host, eventCallbacks) {
	    assert.argumentTypes(parent, ElementInjector, host, ElementInjector, eventCallbacks, assert.type.any);
	    return assert.returnType((new ElementInjector(this, parent, host, eventCallbacks)), ElementInjector);
	  },
	  directParent: function() {
	    return assert.returnType((this.distanceToParent < 2 ? this.parent : null), $ProtoElementInjector);
	  },
	  _createBinding: function(bindingOrType) {
	    if (bindingOrType instanceof DirectiveBinding) {
	      return bindingOrType;
	    } else {
	      var b = bind(bindingOrType).toClass(bindingOrType);
	      return DirectiveBinding.createFromBinding(b, null);
	    }
	  },
	  get hasBindings() {
	    return assert.returnType((isPresent(this._binding0)), assert.type.boolean);
	  },
	  hasEventEmitter: function(eventName) {
	    assert.argumentTypes(eventName, assert.type.string);
	    var p = this;
	    if (isPresent(p._binding0) && DirectiveBinding._hasEventEmitter(eventName, p._binding0))
	      return true;
	    if (isPresent(p._binding1) && DirectiveBinding._hasEventEmitter(eventName, p._binding1))
	      return true;
	    if (isPresent(p._binding2) && DirectiveBinding._hasEventEmitter(eventName, p._binding2))
	      return true;
	    if (isPresent(p._binding3) && DirectiveBinding._hasEventEmitter(eventName, p._binding3))
	      return true;
	    if (isPresent(p._binding4) && DirectiveBinding._hasEventEmitter(eventName, p._binding4))
	      return true;
	    if (isPresent(p._binding5) && DirectiveBinding._hasEventEmitter(eventName, p._binding5))
	      return true;
	    if (isPresent(p._binding6) && DirectiveBinding._hasEventEmitter(eventName, p._binding6))
	      return true;
	    if (isPresent(p._binding7) && DirectiveBinding._hasEventEmitter(eventName, p._binding7))
	      return true;
	    if (isPresent(p._binding8) && DirectiveBinding._hasEventEmitter(eventName, p._binding8))
	      return true;
	    if (isPresent(p._binding9) && DirectiveBinding._hasEventEmitter(eventName, p._binding9))
	      return true;
	    return false;
	  }
	}, {});
	Object.defineProperty(ProtoElementInjector, "parameters", {get: function() {
	    return [[ProtoElementInjector], [int], [List], [assert.type.boolean], [assert.type.number]];
	  }});
	Object.defineProperty(ProtoElementInjector.prototype.instantiate, "parameters", {get: function() {
	    return [[ElementInjector], [ElementInjector], []];
	  }});
	Object.defineProperty(ProtoElementInjector.prototype.hasEventEmitter, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var ElementInjector = function ElementInjector(proto, parent, host, eventCallbacks) {
	  assert.argumentTypes(proto, ProtoElementInjector, parent, $ElementInjector, host, $ElementInjector, eventCallbacks, Map);
	  $traceurRuntime.superConstructor($ElementInjector).call(this, parent);
	  if (isPresent(parent) && isPresent(host)) {
	    throw new BaseException('Only either parent or host is allowed');
	  }
	  this._host = null;
	  if (isPresent(parent)) {
	    this._host = parent._host;
	  } else {
	    this._host = host;
	  }
	  this._proto = proto;
	  this._preBuiltObjects = null;
	  this._lightDomAppInjector = null;
	  this._shadowDomAppInjector = null;
	  this._eventCallbacks = eventCallbacks;
	  this._obj0 = null;
	  this._obj1 = null;
	  this._obj2 = null;
	  this._obj3 = null;
	  this._obj4 = null;
	  this._obj5 = null;
	  this._obj6 = null;
	  this._obj7 = null;
	  this._obj8 = null;
	  this._obj9 = null;
	  this._constructionCounter = 0;
	};
	var $ElementInjector = ElementInjector;
	($traceurRuntime.createClass)(ElementInjector, {
	  clearDirectives: function() {
	    this._preBuiltObjects = null;
	    this._lightDomAppInjector = null;
	    this._shadowDomAppInjector = null;
	    var p = this._proto;
	    if (isPresent(p._binding0) && p._binding0.callOnDestroy) {
	      this._obj0.onDestroy();
	    }
	    if (isPresent(p._binding1) && p._binding1.callOnDestroy) {
	      this._obj1.onDestroy();
	    }
	    if (isPresent(p._binding2) && p._binding2.callOnDestroy) {
	      this._obj2.onDestroy();
	    }
	    if (isPresent(p._binding3) && p._binding3.callOnDestroy) {
	      this._obj3.onDestroy();
	    }
	    if (isPresent(p._binding4) && p._binding4.callOnDestroy) {
	      this._obj4.onDestroy();
	    }
	    if (isPresent(p._binding5) && p._binding5.callOnDestroy) {
	      this._obj5.onDestroy();
	    }
	    if (isPresent(p._binding6) && p._binding6.callOnDestroy) {
	      this._obj6.onDestroy();
	    }
	    if (isPresent(p._binding7) && p._binding7.callOnDestroy) {
	      this._obj7.onDestroy();
	    }
	    if (isPresent(p._binding8) && p._binding8.callOnDestroy) {
	      this._obj8.onDestroy();
	    }
	    if (isPresent(p._binding9) && p._binding9.callOnDestroy) {
	      this._obj9.onDestroy();
	    }
	    this._obj0 = null;
	    this._obj1 = null;
	    this._obj2 = null;
	    this._obj3 = null;
	    this._obj4 = null;
	    this._obj5 = null;
	    this._obj6 = null;
	    this._obj7 = null;
	    this._obj8 = null;
	    this._obj9 = null;
	    this._constructionCounter = 0;
	  },
	  instantiateDirectives: function(lightDomAppInjector, shadowDomAppInjector, preBuiltObjects) {
	    assert.argumentTypes(lightDomAppInjector, Injector, shadowDomAppInjector, Injector, preBuiltObjects, PreBuiltObjects);
	    this._checkShadowDomAppInjector(shadowDomAppInjector);
	    this._preBuiltObjects = preBuiltObjects;
	    this._lightDomAppInjector = lightDomAppInjector;
	    this._shadowDomAppInjector = shadowDomAppInjector;
	    var p = this._proto;
	    if (isPresent(p._keyId0))
	      this._getDirectiveByKeyId(p._keyId0);
	    if (isPresent(p._keyId1))
	      this._getDirectiveByKeyId(p._keyId1);
	    if (isPresent(p._keyId2))
	      this._getDirectiveByKeyId(p._keyId2);
	    if (isPresent(p._keyId3))
	      this._getDirectiveByKeyId(p._keyId3);
	    if (isPresent(p._keyId4))
	      this._getDirectiveByKeyId(p._keyId4);
	    if (isPresent(p._keyId5))
	      this._getDirectiveByKeyId(p._keyId5);
	    if (isPresent(p._keyId6))
	      this._getDirectiveByKeyId(p._keyId6);
	    if (isPresent(p._keyId7))
	      this._getDirectiveByKeyId(p._keyId7);
	    if (isPresent(p._keyId8))
	      this._getDirectiveByKeyId(p._keyId8);
	    if (isPresent(p._keyId9))
	      this._getDirectiveByKeyId(p._keyId9);
	  },
	  _checkShadowDomAppInjector: function(shadowDomAppInjector) {
	    assert.argumentTypes(shadowDomAppInjector, Injector);
	    if (this._proto._binding0IsComponent && isBlank(shadowDomAppInjector)) {
	      throw new BaseException('A shadowDomAppInjector is required as this ElementInjector contains a component');
	    } else if (!this._proto._binding0IsComponent && isPresent(shadowDomAppInjector)) {
	      throw new BaseException('No shadowDomAppInjector allowed as there is not component stored in this ElementInjector');
	    }
	  },
	  get: function(token) {
	    return this._getByKey(Key.get(token), 0, null);
	  },
	  hasDirective: function(type) {
	    assert.argumentTypes(type, Type);
	    return assert.returnType((this._getDirectiveByKeyId(Key.get(type).id) !== _undefined), assert.type.boolean);
	  },
	  hasPreBuiltObject: function(type) {
	    assert.argumentTypes(type, Type);
	    var pb = this._getPreBuiltObjectByKeyId(Key.get(type).id);
	    return assert.returnType((pb !== _undefined && isPresent(pb)), assert.type.boolean);
	  },
	  forElement: function(el) {
	    return assert.returnType((this._preBuiltObjects.element.domElement === el), assert.type.boolean);
	  },
	  getNgElement: function() {
	    return this._preBuiltObjects.element;
	  },
	  getComponent: function() {
	    if (this._proto._binding0IsComponent) {
	      return this._obj0;
	    } else {
	      throw new BaseException('There is not component stored in this ElementInjector');
	    }
	  },
	  directParent: function() {
	    return assert.returnType((this._proto.distanceToParent < 2 ? this.parent : null), $ElementInjector);
	  },
	  _isComponentKey: function(key) {
	    assert.argumentTypes(key, Key);
	    return this._proto._binding0IsComponent && key.id === this._proto._keyId0;
	  },
	  _new: function(binding) {
	    assert.argumentTypes(binding, Binding);
	    if (this._constructionCounter++ > _MAX_DIRECTIVE_CONSTRUCTION_COUNTER) {
	      throw new CyclicDependencyError(binding.key);
	    }
	    var factory = binding.factory;
	    var deps = binding.dependencies;
	    var length = deps.length;
	    var d0,
	        d1,
	        d2,
	        d3,
	        d4,
	        d5,
	        d6,
	        d7,
	        d8,
	        d9;
	    try {
	      d0 = length > 0 ? this._getByDependency(deps[0], binding.key) : null;
	      d1 = length > 1 ? this._getByDependency(deps[1], binding.key) : null;
	      d2 = length > 2 ? this._getByDependency(deps[2], binding.key) : null;
	      d3 = length > 3 ? this._getByDependency(deps[3], binding.key) : null;
	      d4 = length > 4 ? this._getByDependency(deps[4], binding.key) : null;
	      d5 = length > 5 ? this._getByDependency(deps[5], binding.key) : null;
	      d6 = length > 6 ? this._getByDependency(deps[6], binding.key) : null;
	      d7 = length > 7 ? this._getByDependency(deps[7], binding.key) : null;
	      d8 = length > 8 ? this._getByDependency(deps[8], binding.key) : null;
	      d9 = length > 9 ? this._getByDependency(deps[9], binding.key) : null;
	    } catch (e) {
	      if (e instanceof ProviderError)
	        e.addKey(binding.key);
	      throw e;
	    }
	    var obj;
	    switch (length) {
	      case 0:
	        obj = factory();
	        break;
	      case 1:
	        obj = factory(d0);
	        break;
	      case 2:
	        obj = factory(d0, d1);
	        break;
	      case 3:
	        obj = factory(d0, d1, d2);
	        break;
	      case 4:
	        obj = factory(d0, d1, d2, d3);
	        break;
	      case 5:
	        obj = factory(d0, d1, d2, d3, d4);
	        break;
	      case 6:
	        obj = factory(d0, d1, d2, d3, d4, d5);
	        break;
	      case 7:
	        obj = factory(d0, d1, d2, d3, d4, d5, d6);
	        break;
	      case 8:
	        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
	        break;
	      case 9:
	        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
	        break;
	      case 10:
	        obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
	        break;
	      default:
	        throw ("Directive " + binding.key.token + " can only have up to 10 dependencies.");
	    }
	    return obj;
	  },
	  _getByDependency: function(dep, requestor) {
	    assert.argumentTypes(dep, DirectiveDependency, requestor, Key);
	    if (isPresent(dep.eventEmitterName))
	      return this._buildEventEmitter(dep);
	    return this._getByKey(dep.key, dep.depth, requestor);
	  },
	  _buildEventEmitter: function(dep) {
	    var view = this._getPreBuiltObjectByKeyId(StaticKeys.instance().viewId);
	    if (isPresent(this._eventCallbacks)) {
	      var callback = MapWrapper.get(this._eventCallbacks, dep.eventEmitterName);
	      if (isPresent(callback)) {
	        return ProtoView.buildInnerCallback(callback, view);
	      }
	    }
	    return (function(_) {});
	  },
	  _getByKey: function(key, depth, requestor) {
	    assert.argumentTypes(key, Key, depth, assert.type.number, requestor, Key);
	    var ei = this;
	    if (!this._shouldIncludeSelf(depth)) {
	      depth -= ei._proto.distanceToParent;
	      ei = ei._parent;
	    }
	    while (ei != null && depth >= 0) {
	      var preBuiltObj = ei._getPreBuiltObjectByKeyId(key.id);
	      if (preBuiltObj !== _undefined)
	        return preBuiltObj;
	      var dir = ei._getDirectiveByKeyId(key.id);
	      if (dir !== _undefined)
	        return dir;
	      depth -= ei._proto.distanceToParent;
	      ei = ei._parent;
	    }
	    if (isPresent(this._host) && this._host._isComponentKey(key)) {
	      return this._host.getComponent();
	    } else {
	      return this._appInjector(requestor).get(key);
	    }
	  },
	  _appInjector: function(requestor) {
	    assert.argumentTypes(requestor, Key);
	    if (isPresent(requestor) && this._isComponentKey(requestor)) {
	      return this._shadowDomAppInjector;
	    } else {
	      return this._lightDomAppInjector;
	    }
	  },
	  _shouldIncludeSelf: function(depth) {
	    assert.argumentTypes(depth, int);
	    return depth === 0;
	  },
	  _getPreBuiltObjectByKeyId: function(keyId) {
	    assert.argumentTypes(keyId, int);
	    var staticKeys = StaticKeys.instance();
	    if (keyId === staticKeys.viewId)
	      return this._preBuiltObjects.view;
	    if (keyId === staticKeys.ngElementId)
	      return this._preBuiltObjects.element;
	    if (keyId === staticKeys.viewContainerId)
	      return this._preBuiltObjects.viewContainer;
	    if (keyId === staticKeys.bindingPropagationConfigId)
	      return this._preBuiltObjects.bindingPropagationConfig;
	    if (keyId === staticKeys.destinationLightDomId) {
	      var p = assert.type(this.directParent(), $ElementInjector);
	      return isPresent(p) ? p._preBuiltObjects.lightDom : null;
	    }
	    if (keyId === staticKeys.sourceLightDomId) {
	      return this._host._preBuiltObjects.lightDom;
	    }
	    return _undefined;
	  },
	  _getDirectiveByKeyId: function(keyId) {
	    assert.argumentTypes(keyId, int);
	    var p = this._proto;
	    if (p._keyId0 === keyId) {
	      if (isBlank(this._obj0)) {
	        this._obj0 = this._new(p._binding0);
	      }
	      return this._obj0;
	    }
	    if (p._keyId1 === keyId) {
	      if (isBlank(this._obj1)) {
	        this._obj1 = this._new(p._binding1);
	      }
	      return this._obj1;
	    }
	    if (p._keyId2 === keyId) {
	      if (isBlank(this._obj2)) {
	        this._obj2 = this._new(p._binding2);
	      }
	      return this._obj2;
	    }
	    if (p._keyId3 === keyId) {
	      if (isBlank(this._obj3)) {
	        this._obj3 = this._new(p._binding3);
	      }
	      return this._obj3;
	    }
	    if (p._keyId4 === keyId) {
	      if (isBlank(this._obj4)) {
	        this._obj4 = this._new(p._binding4);
	      }
	      return this._obj4;
	    }
	    if (p._keyId5 === keyId) {
	      if (isBlank(this._obj5)) {
	        this._obj5 = this._new(p._binding5);
	      }
	      return this._obj5;
	    }
	    if (p._keyId6 === keyId) {
	      if (isBlank(this._obj6)) {
	        this._obj6 = this._new(p._binding6);
	      }
	      return this._obj6;
	    }
	    if (p._keyId7 === keyId) {
	      if (isBlank(this._obj7)) {
	        this._obj7 = this._new(p._binding7);
	      }
	      return this._obj7;
	    }
	    if (p._keyId8 === keyId) {
	      if (isBlank(this._obj8)) {
	        this._obj8 = this._new(p._binding8);
	      }
	      return this._obj8;
	    }
	    if (p._keyId9 === keyId) {
	      if (isBlank(this._obj9)) {
	        this._obj9 = this._new(p._binding9);
	      }
	      return this._obj9;
	    }
	    return _undefined;
	  },
	  getDirectiveAtIndex: function(index) {
	    assert.argumentTypes(index, int);
	    if (index == 0)
	      return this._obj0;
	    if (index == 1)
	      return this._obj1;
	    if (index == 2)
	      return this._obj2;
	    if (index == 3)
	      return this._obj3;
	    if (index == 4)
	      return this._obj4;
	    if (index == 5)
	      return this._obj5;
	    if (index == 6)
	      return this._obj6;
	    if (index == 7)
	      return this._obj7;
	    if (index == 8)
	      return this._obj8;
	    if (index == 9)
	      return this._obj9;
	    throw new OutOfBoundsAccess(index);
	  },
	  getDirectiveBindingAtIndex: function(index) {
	    assert.argumentTypes(index, int);
	    var p = this._proto;
	    if (index == 0)
	      return p._binding0;
	    if (index == 1)
	      return p._binding1;
	    if (index == 2)
	      return p._binding2;
	    if (index == 3)
	      return p._binding3;
	    if (index == 4)
	      return p._binding4;
	    if (index == 5)
	      return p._binding5;
	    if (index == 6)
	      return p._binding6;
	    if (index == 7)
	      return p._binding7;
	    if (index == 8)
	      return p._binding8;
	    if (index == 9)
	      return p._binding9;
	    throw new OutOfBoundsAccess(index);
	  },
	  hasInstances: function() {
	    return this._constructionCounter > 0;
	  },
	  hasEventEmitter: function(eventName) {
	    assert.argumentTypes(eventName, assert.type.string);
	    return this._proto.hasEventEmitter(eventName);
	  },
	  isExportingComponent: function() {
	    return this._proto.exportComponent;
	  },
	  isExportingElement: function() {
	    return this._proto.exportElement;
	  },
	  getExportImplicitName: function() {
	    return this._proto.exportImplicitName;
	  }
	}, {}, TreeNode);
	Object.defineProperty(ElementInjector, "parameters", {get: function() {
	    return [[ProtoElementInjector], [ElementInjector], [ElementInjector], [Map]];
	  }});
	Object.defineProperty(ElementInjector.prototype.instantiateDirectives, "parameters", {get: function() {
	    return [[Injector], [Injector], [PreBuiltObjects]];
	  }});
	Object.defineProperty(ElementInjector.prototype._checkShadowDomAppInjector, "parameters", {get: function() {
	    return [[Injector]];
	  }});
	Object.defineProperty(ElementInjector.prototype.hasDirective, "parameters", {get: function() {
	    return [[Type]];
	  }});
	Object.defineProperty(ElementInjector.prototype.hasPreBuiltObject, "parameters", {get: function() {
	    return [[Type]];
	  }});
	Object.defineProperty(ElementInjector.prototype._isComponentKey, "parameters", {get: function() {
	    return [[Key]];
	  }});
	Object.defineProperty(ElementInjector.prototype._new, "parameters", {get: function() {
	    return [[Binding]];
	  }});
	Object.defineProperty(ElementInjector.prototype._getByDependency, "parameters", {get: function() {
	    return [[DirectiveDependency], [Key]];
	  }});
	Object.defineProperty(ElementInjector.prototype._getByKey, "parameters", {get: function() {
	    return [[Key], [assert.type.number], [Key]];
	  }});
	Object.defineProperty(ElementInjector.prototype._appInjector, "parameters", {get: function() {
	    return [[Key]];
	  }});
	Object.defineProperty(ElementInjector.prototype._shouldIncludeSelf, "parameters", {get: function() {
	    return [[int]];
	  }});
	Object.defineProperty(ElementInjector.prototype._getPreBuiltObjectByKeyId, "parameters", {get: function() {
	    return [[int]];
	  }});
	Object.defineProperty(ElementInjector.prototype._getDirectiveByKeyId, "parameters", {get: function() {
	    return [[int]];
	  }});
	Object.defineProperty(ElementInjector.prototype.getDirectiveAtIndex, "parameters", {get: function() {
	    return [[int]];
	  }});
	Object.defineProperty(ElementInjector.prototype.getDirectiveBindingAtIndex, "parameters", {get: function() {
	    return [[int]];
	  }});
	Object.defineProperty(ElementInjector.prototype.hasEventEmitter, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var OutOfBoundsAccess = function OutOfBoundsAccess(index) {
	  $traceurRuntime.superConstructor($OutOfBoundsAccess).call(this);
	  this.message = ("Index " + index + " is out-of-bounds.");
	};
	var $OutOfBoundsAccess = OutOfBoundsAccess;
	($traceurRuntime.createClass)(OutOfBoundsAccess, {toString: function() {
	    return this.message;
	  }}, {}, Error);
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/element_injector.map
	
	//# sourceMappingURL=./element_injector.map

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ElementBinder: {get: function() {
	      return ElementBinder;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/element_binder";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_core_47_compiler_47_view__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var ProtoElementInjector = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = __webpack_require__(76), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}).ProtoElementInjector;
	var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = __webpack_require__(74), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
	var $__3 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__3.List,
	    Map = $__3.Map;
	var ProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = __webpack_require__(31), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).ProtoView;
	var ElementBinder = function ElementBinder(protoElementInjector, componentDirective, viewportDirective) {
	  assert.argumentTypes(protoElementInjector, ProtoElementInjector, componentDirective, DirectiveMetadata, viewportDirective, DirectiveMetadata);
	  this.protoElementInjector = protoElementInjector;
	  this.componentDirective = componentDirective;
	  this.viewportDirective = viewportDirective;
	  this.events = null;
	  this.textNodeIndices = null;
	  this.hasElementPropertyBindings = false;
	  this.nestedProtoView = null;
	};
	($traceurRuntime.createClass)(ElementBinder, {}, {});
	Object.defineProperty(ElementBinder, "parameters", {get: function() {
	    return [[ProtoElementInjector], [DirectiveMetadata], [DirectiveMetadata]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/element_binder.map
	
	//# sourceMappingURL=./element_binder.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  SetterFn: {get: function() {
	      return SetterFn;
	    }},
	  GetterFn: {get: function() {
	      return GetterFn;
	    }},
	  MethodFn: {get: function() {
	      return MethodFn;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/reflection/types";
	var SetterFn = Function;
	var GetterFn = Function;
	var MethodFn = Function;
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/reflection/types.map
	
	//# sourceMappingURL=./types.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  SourceLightDom: {get: function() {
	      return SourceLightDom;
	    }},
	  DestinationLightDom: {get: function() {
	      return DestinationLightDom;
	    }},
	  LightDom: {get: function() {
	      return LightDom;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/shadow_dom_emulation/light_dom";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_core_47_compiler_47_view__,
	    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
	    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper;
	var $__3 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isBlank = $__3.isBlank,
	    isPresent = $__3.isPresent;
	var View = ($__angular2_47_src_47_core_47_compiler_47_view__ = __webpack_require__(31), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).View;
	var ElementInjector = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = __webpack_require__(76), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}).ElementInjector;
	var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = __webpack_require__(32), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
	var Content = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ = __webpack_require__(89), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__}).Content;
	var SourceLightDom = function SourceLightDom() {};
	($traceurRuntime.createClass)(SourceLightDom, {}, {});
	var DestinationLightDom = function DestinationLightDom() {};
	($traceurRuntime.createClass)(DestinationLightDom, {}, {});
	var _Root = function _Root(node, injector) {
	  this.node = node;
	  this.injector = injector;
	};
	($traceurRuntime.createClass)(_Root, {}, {});
	var LightDom = function LightDom(lightDomView, shadowDomView, element) {
	  assert.argumentTypes(lightDomView, View, shadowDomView, View, element, assert.type.any);
	  this.lightDomView = lightDomView;
	  this.shadowDomView = shadowDomView;
	  this.nodes = DOM.childNodesAsList(element);
	  this.roots = null;
	};
	($traceurRuntime.createClass)(LightDom, {
	  redistribute: function() {
	    var tags = this.contentTags();
	    if (tags.length > 0) {
	      redistributeNodes(tags, this.expandedDomNodes());
	    }
	  },
	  contentTags: function() {
	    return assert.returnType((this._collectAllContentTags(this.shadowDomView, [])), assert.genericType(List, Content));
	  },
	  _collectAllContentTags: function(view, acc) {
	    var $__8 = this;
	    assert.argumentTypes(view, View, acc, assert.genericType(List, Content));
	    var eis = view.elementInjectors;
	    for (var i = 0; i < eis.length; ++i) {
	      var ei = eis[i];
	      if (isBlank(ei))
	        continue;
	      if (ei.hasDirective(Content)) {
	        ListWrapper.push(acc, ei.get(Content));
	      } else if (ei.hasPreBuiltObject(ViewContainer)) {
	        var vc = ei.get(ViewContainer);
	        ListWrapper.forEach(vc.contentTagContainers(), (function(view) {
	          $__8._collectAllContentTags(view, acc);
	        }));
	      }
	    }
	    return assert.returnType((acc), assert.genericType(List, Content));
	  },
	  expandedDomNodes: function() {
	    var res = [];
	    var roots = this._roots();
	    for (var i = 0; i < roots.length; ++i) {
	      var root = roots[i];
	      var ei = root.injector;
	      if (isPresent(ei) && ei.hasPreBuiltObject(ViewContainer)) {
	        var vc = root.injector.get(ViewContainer);
	        res = ListWrapper.concat(res, vc.nodes());
	      } else if (isPresent(ei) && ei.hasDirective(Content)) {
	        var content = root.injector.get(Content);
	        res = ListWrapper.concat(res, content.nodes());
	      } else {
	        ListWrapper.push(res, root.node);
	      }
	    }
	    return assert.returnType((res), List);
	  },
	  _roots: function() {
	    if (isPresent(this.roots))
	      return this.roots;
	    var viewInj = this.lightDomView.elementInjectors;
	    this.roots = ListWrapper.map(this.nodes, (function(n) {
	      return new _Root(n, ListWrapper.find(viewInj, (function(inj) {
	        return isPresent(inj) ? inj.forElement(n) : false;
	      })));
	    }));
	    return this.roots;
	  }
	}, {});
	Object.defineProperty(LightDom, "parameters", {get: function() {
	    return [[View], [View], []];
	  }});
	Object.defineProperty(LightDom.prototype._collectAllContentTags, "parameters", {get: function() {
	    return [[View], [assert.genericType(List, Content)]];
	  }});
	function redistributeNodes(contents, nodes) {
	  for (var i = 0; i < contents.length; ++i) {
	    var content = contents[i];
	    var select = content.select;
	    var matchSelector = (function(n) {
	      return DOM.elementMatches(n, select);
	    });
	    if (isBlank(select)) {
	      content.insert(nodes);
	      ListWrapper.clear(nodes);
	    } else {
	      var matchingNodes = ListWrapper.filter(nodes, matchSelector);
	      content.insert(matchingNodes);
	      ListWrapper.removeAll(nodes, matchingNodes);
	    }
	  }
	}
	Object.defineProperty(redistributeNodes, "parameters", {get: function() {
	    return [[assert.genericType(List, Content)], [List]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/shadow_dom_emulation/light_dom.map
	
	//# sourceMappingURL=./light_dom.map

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ViewPool: {get: function() {
	      return ViewPool;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/view_pool";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_core_47_compiler_47_view__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    ListWrapper = $__1.ListWrapper,
	    MapWrapper = $__1.MapWrapper,
	    StringMapWrapper = $__1.StringMapWrapper,
	    List = $__1.List;
	var viewModule = ($__angular2_47_src_47_core_47_compiler_47_view__ = __webpack_require__(31), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__});
	var ViewPool = function ViewPool(capacity) {
	  assert.argumentTypes(capacity, assert.type.number);
	  this._views = [];
	  this._capacity = capacity;
	};
	($traceurRuntime.createClass)(ViewPool, {
	  pop: function() {
	    return assert.returnType((ListWrapper.isEmpty(this._views) ? null : ListWrapper.removeLast(this._views)), viewModule.View);
	  },
	  push: function(view) {
	    assert.argumentTypes(view, viewModule.View);
	    if (this._views.length < this._capacity) {
	      ListWrapper.push(this._views, view);
	    }
	  },
	  length: function() {
	    return this._views.length;
	  }
	}, {});
	Object.defineProperty(ViewPool, "parameters", {get: function() {
	    return [[assert.type.number]];
	  }});
	Object.defineProperty(ViewPool.prototype.push, "parameters", {get: function() {
	    return [[viewModule.View]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/view_pool.map
	
	//# sourceMappingURL=./view_pool.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	Object.defineProperties(module.exports, {
	  proxy: {get: function() {
	      return proxy;
	    }},
	  assert: {get: function() {
	      return assert;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "rtts_assert/src/rtts_assert";
	var _global = typeof window === 'object' ? window : global;
	var POSITION_NAME = ['', '1st', '2nd', '3rd'];
	function argPositionName(i) {
	  var position = (i / 2) + 1;
	  return POSITION_NAME[position] || (position + 'th');
	}
	var primitives;
	var genericType;
	if (typeof $traceurRuntime === 'object') {
	  primitives = $traceurRuntime.type;
	  genericType = $traceurRuntime.genericType;
	} else {
	  primitives = {
	    any: {name: 'any'},
	    boolean: {name: 'boolean'},
	    number: {name: 'number'},
	    string: {name: 'string'},
	    symbol: {name: 'symbol'},
	    void: {name: 'void'}
	  };
	  genericType = function(type, args) {
	    return {
	      type: type,
	      args: args
	    };
	  };
	}
	Object.keys(primitives).forEach(function(name) {
	  primitives[name].__assertName = name;
	});
	function proxy() {}
	function assertArgumentTypes() {
	  for (var params = [],
	      $__0 = 0; $__0 < arguments.length; $__0++)
	    params[$__0] = arguments[$__0];
	  var actual,
	      type;
	  var currentArgErrors;
	  var errors = [];
	  var msg;
	  for (var i = 0,
	      l = params.length; i < l; i = i + 2) {
	    actual = params[i];
	    type = params[i + 1];
	    currentArgErrors = [];
	    if (!isType(actual, type, currentArgErrors)) {
	      errors.push(argPositionName(i) + ' argument has to be an instance of ' + prettyPrint(type) + ', got ' + prettyPrint(actual));
	      if (currentArgErrors.length) {
	        errors.push(currentArgErrors);
	      }
	    }
	  }
	  if (errors.length) {
	    throw new Error('Invalid arguments given!\n' + formatErrors(errors));
	  }
	}
	function prettyPrint(value, depth) {
	  if (typeof(depth) === 'undefined') {
	    depth = 0;
	  }
	  if (depth++ > 3) {
	    return '[...]';
	  }
	  if (typeof value === 'undefined') {
	    return 'undefined';
	  }
	  if (typeof value === 'string') {
	    return '"' + value + '"';
	  }
	  if (typeof value === 'boolean') {
	    return value.toString();
	  }
	  if (value === null) {
	    return 'null';
	  }
	  if (typeof value === 'object') {
	    if (value.__assertName) {
	      return value.__assertName;
	    }
	    if (value.map && typeof value.map === 'function') {
	      return '[' + value.map((function(v) {
	        return prettyPrint(v, depth);
	      })).join(', ') + ']';
	    }
	    var properties = Object.keys(value);
	    var suffix = '}';
	    if (properties.length > 20) {
	      properties.length = 20;
	      suffix = ', ... }';
	    }
	    return '{' + properties.map((function(p) {
	      return p + ': ' + prettyPrint(value[p], depth);
	    })).join(', ') + suffix;
	  }
	  return value.__assertName || value.name || value.toString();
	}
	function isType(value, T, errors) {
	  if (T && T.type) {
	    T = T.type;
	  }
	  if (T === primitives.void) {
	    return typeof value === 'undefined';
	  }
	  if (_isProxy(value)) {
	    return true;
	  }
	  if (T === primitives.any || value === null) {
	    return true;
	  }
	  if (T === primitives.string) {
	    return typeof value === 'string';
	  }
	  if (T === primitives.number) {
	    return typeof value === 'number';
	  }
	  if (T === primitives.boolean) {
	    return typeof value === 'boolean';
	  }
	  if (typeof T.assert === 'function') {
	    var parentStack = currentStack;
	    var isValid;
	    currentStack = errors;
	    try {
	      isValid = T.assert(value);
	    } catch (e) {
	      fail(e.message);
	      isValid = false;
	    }
	    currentStack = parentStack;
	    if (typeof isValid === 'undefined') {
	      isValid = errors.length === 0;
	    }
	    return isValid;
	  }
	  return value instanceof T;
	}
	function _isProxy(obj) {
	  if (!obj || !obj.constructor || !obj.constructor.annotations)
	    return false;
	  return obj.constructor.annotations.filter((function(a) {
	    return a instanceof proxy;
	  })).length > 0;
	}
	function formatErrors(errors) {
	  var indent = arguments[1] !== (void 0) ? arguments[1] : '  ';
	  return errors.map((function(e) {
	    if (typeof e === 'string')
	      return indent + '- ' + e;
	    return formatErrors(e, indent + '  ');
	  })).join('\n');
	}
	function type(actual, T) {
	  var errors = [];
	  if (!isType(actual, T, errors)) {
	    var msg = 'Expected an instance of ' + prettyPrint(T) + ', got ' + prettyPrint(actual) + '!';
	    if (errors.length) {
	      msg += '\n' + formatErrors(errors);
	    }
	    throw new Error(msg);
	  }
	  return actual;
	}
	function returnType(actual, T) {
	  var errors = [];
	  if (!isType(actual, T, errors)) {
	    var msg = 'Expected to return an instance of ' + prettyPrint(T) + ', got ' + prettyPrint(actual) + '!';
	    if (errors.length) {
	      msg += '\n' + formatErrors(errors);
	    }
	    throw new Error(msg);
	  }
	  return actual;
	}
	var string = type.string = !(__WEBPACK_AMD_DEFINE_RESULT__ = function(value) {
	  return "function" === 'string';
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	var boolean = type.boolean = !(__WEBPACK_AMD_DEFINE_RESULT__ = function(value) {
	  return "function" === 'boolean';
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	var number = type.number = !(__WEBPACK_AMD_DEFINE_RESULT__ = function(value) {
	  return "function" === 'number';
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	function arrayOf() {
	  for (var types = [],
	      $__1 = 0; $__1 < arguments.length; $__1++)
	    types[$__1] = arguments[$__1];
	  return assert.define('array of ' + types.map(prettyPrint).join('/'), function(value) {
	    var $__3;
	    if (assert(value).is(Array)) {
	      for (var i = 0; i < value.length; i++) {
	        ($__3 = assert(value[i])).is.apply($__3, $traceurRuntime.spread(types));
	      }
	    }
	  });
	}
	function structure(definition) {
	  var properties = Object.keys(definition);
	  return assert.define('object with properties ' + properties.join(', '), function(value) {
	    if (assert(value).is(Object)) {
	      for (var i = 0; i < properties.length; i++) {
	        var property = properties[i];
	        assert(value[property]).is(definition[property]);
	      }
	    }
	  });
	}
	var currentStack = [];
	function fail(message) {
	  currentStack.push(message);
	}
	function define(classOrName, check) {
	  var cls = classOrName;
	  if (typeof classOrName === 'string') {
	    cls = function() {};
	    cls.__assertName = classOrName;
	  }
	  cls.assert = function(value) {
	    return check(value);
	  };
	  return cls;
	}
	function assert(value) {
	  return {is: function is() {
	      var $__3;
	      for (var types = [],
	          $__2 = 0; $__2 < arguments.length; $__2++)
	        types[$__2] = arguments[$__2];
	      var allErrors = [];
	      var errors;
	      for (var i = 0; i < types.length; i++) {
	        var type = types[i];
	        errors = [];
	        if (isType(value, type, errors)) {
	          return true;
	        }
	        allErrors.push(prettyPrint(value) + ' is not instance of ' + prettyPrint(type));
	        if (errors.length) {
	          allErrors.push(errors);
	        }
	      }
	      ($__3 = currentStack).push.apply($__3, $traceurRuntime.spread(allErrors));
	      return false;
	    }};
	}
	assert.type = type;
	for (var prop = void 0 in primitives) {
	  assert.type[prop] = primitives[prop];
	}
	assert.genericType = genericType;
	assert.argumentTypes = assertArgumentTypes;
	assert.returnType = returnType;
	assert.define = define;
	assert.fail = fail;
	assert.string = string;
	assert.number = number;
	assert.boolean = boolean;
	assert.arrayOf = arrayOf;
	assert.structure = structure;
	;
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/rtts_assert/src/rtts_assert.map
	
	//# sourceMappingURL=./rtts_assert.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  SetterFn: {get: function() {
	      return $__angular2_47_src_47_reflection_47_types__.SetterFn;
	    }},
	  GetterFn: {get: function() {
	      return $__angular2_47_src_47_reflection_47_types__.GetterFn;
	    }},
	  MethodFn: {get: function() {
	      return $__angular2_47_src_47_reflection_47_types__.MethodFn;
	    }},
	  Reflector: {get: function() {
	      return Reflector;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/reflection/reflector";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_reflection_47_types__,
	    $__angular2_47_src_47_reflection_47_types__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    Type = $__1.Type,
	    isPresent = $__1.isPresent,
	    stringify = $__1.stringify,
	    BaseException = $__1.BaseException;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper,
	    Map = $__2.Map,
	    MapWrapper = $__2.MapWrapper,
	    StringMapWrapper = $__2.StringMapWrapper;
	var $__3 = ($__angular2_47_src_47_reflection_47_types__ = __webpack_require__(78), $__angular2_47_src_47_reflection_47_types__ && $__angular2_47_src_47_reflection_47_types__.__esModule && $__angular2_47_src_47_reflection_47_types__ || {default: $__angular2_47_src_47_reflection_47_types__}),
	    SetterFn = $__3.SetterFn,
	    GetterFn = $__3.GetterFn,
	    MethodFn = $__3.MethodFn;
	var $__angular2_47_src_47_reflection_47_types__ = ($__angular2_47_src_47_reflection_47_types__ = __webpack_require__(78), $__angular2_47_src_47_reflection_47_types__ && $__angular2_47_src_47_reflection_47_types__.__esModule && $__angular2_47_src_47_reflection_47_types__ || {default: $__angular2_47_src_47_reflection_47_types__});
	var Reflector = function Reflector(reflectionCapabilities) {
	  this._typeInfo = MapWrapper.create();
	  this._getters = MapWrapper.create();
	  this._setters = MapWrapper.create();
	  this._methods = MapWrapper.create();
	  this.reflectionCapabilities = reflectionCapabilities;
	};
	($traceurRuntime.createClass)(Reflector, {
	  registerType: function(type, typeInfo) {
	    MapWrapper.set(this._typeInfo, type, typeInfo);
	  },
	  registerGetters: function(getters) {
	    _mergeMaps(this._getters, getters);
	  },
	  registerSetters: function(setters) {
	    _mergeMaps(this._setters, setters);
	  },
	  registerMethods: function(methods) {
	    _mergeMaps(this._methods, methods);
	  },
	  factory: function(type) {
	    assert.argumentTypes(type, Type);
	    if (MapWrapper.contains(this._typeInfo, type)) {
	      return assert.returnType((MapWrapper.get(this._typeInfo, type)["factory"]), Function);
	    } else {
	      return assert.returnType((this.reflectionCapabilities.factory(type)), Function);
	    }
	  },
	  parameters: function(typeOfFunc) {
	    if (MapWrapper.contains(this._typeInfo, typeOfFunc)) {
	      return assert.returnType((MapWrapper.get(this._typeInfo, typeOfFunc)["parameters"]), List);
	    } else {
	      return assert.returnType((this.reflectionCapabilities.parameters(typeOfFunc)), List);
	    }
	  },
	  annotations: function(typeOfFunc) {
	    if (MapWrapper.contains(this._typeInfo, typeOfFunc)) {
	      return assert.returnType((MapWrapper.get(this._typeInfo, typeOfFunc)["annotations"]), List);
	    } else {
	      return assert.returnType((this.reflectionCapabilities.annotations(typeOfFunc)), List);
	    }
	  },
	  getter: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    if (MapWrapper.contains(this._getters, name)) {
	      return assert.returnType((MapWrapper.get(this._getters, name)), GetterFn);
	    } else {
	      return assert.returnType((this.reflectionCapabilities.getter(name)), GetterFn);
	    }
	  },
	  setter: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    if (MapWrapper.contains(this._setters, name)) {
	      return assert.returnType((MapWrapper.get(this._setters, name)), SetterFn);
	    } else {
	      return assert.returnType((this.reflectionCapabilities.setter(name)), SetterFn);
	    }
	  },
	  method: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    if (MapWrapper.contains(this._methods, name)) {
	      return assert.returnType((MapWrapper.get(this._methods, name)), MethodFn);
	    } else {
	      return assert.returnType((this.reflectionCapabilities.method(name)), MethodFn);
	    }
	  }
	}, {});
	Object.defineProperty(Reflector.prototype.factory, "parameters", {get: function() {
	    return [[Type]];
	  }});
	Object.defineProperty(Reflector.prototype.getter, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(Reflector.prototype.setter, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(Reflector.prototype.method, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	function _mergeMaps(target, config) {
	  StringMapWrapper.forEach(config, (function(v, k) {
	    return MapWrapper.set(target, k, v);
	  }));
	}
	Object.defineProperty(_mergeMaps, "parameters", {get: function() {
	    return [[Map], []];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/reflection/reflector.map
	
	//# sourceMappingURL=./reflector.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ReflectionCapabilities: {get: function() {
	      return ReflectionCapabilities;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/reflection/reflection_capabilities";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_reflection_47_types__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    Type = $__1.Type,
	    isPresent = $__1.isPresent;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper;
	var $__3 = ($__angular2_47_src_47_reflection_47_types__ = __webpack_require__(78), $__angular2_47_src_47_reflection_47_types__ && $__angular2_47_src_47_reflection_47_types__.__esModule && $__angular2_47_src_47_reflection_47_types__ || {default: $__angular2_47_src_47_reflection_47_types__}),
	    GetterFn = $__3.GetterFn,
	    SetterFn = $__3.SetterFn,
	    MethodFn = $__3.MethodFn;
	var ReflectionCapabilities = function ReflectionCapabilities() {};
	($traceurRuntime.createClass)(ReflectionCapabilities, {
	  factory: function(type) {
	    assert.argumentTypes(type, Type);
	    switch (type.length) {
	      case 0:
	        return assert.returnType((function() {
	          return new type();
	        }), Function);
	      case 1:
	        return assert.returnType((function(a1) {
	          return new type(a1);
	        }), Function);
	      case 2:
	        return assert.returnType((function(a1, a2) {
	          return new type(a1, a2);
	        }), Function);
	      case 3:
	        return assert.returnType((function(a1, a2, a3) {
	          return new type(a1, a2, a3);
	        }), Function);
	      case 4:
	        return assert.returnType((function(a1, a2, a3, a4) {
	          return new type(a1, a2, a3, a4);
	        }), Function);
	      case 5:
	        return assert.returnType((function(a1, a2, a3, a4, a5) {
	          return new type(a1, a2, a3, a4, a5);
	        }), Function);
	      case 6:
	        return assert.returnType((function(a1, a2, a3, a4, a5, a6) {
	          return new type(a1, a2, a3, a4, a5, a6);
	        }), Function);
	      case 7:
	        return assert.returnType((function(a1, a2, a3, a4, a5, a6, a7) {
	          return new type(a1, a2, a3, a4, a5, a6, a7);
	        }), Function);
	      case 8:
	        return assert.returnType((function(a1, a2, a3, a4, a5, a6, a7, a8) {
	          return new type(a1, a2, a3, a4, a5, a6, a7, a8);
	        }), Function);
	      case 9:
	        return assert.returnType((function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	          return new type(a1, a2, a3, a4, a5, a6, a7, a8, a9);
	        }), Function);
	      case 10:
	        return assert.returnType((function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
	          return new type(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
	        }), Function);
	    }
	    ;
	    throw new Error("Factory cannot take more than 10 arguments");
	  },
	  parameters: function(typeOfFunc) {
	    return assert.returnType((isPresent(typeOfFunc.parameters) ? typeOfFunc.parameters : ListWrapper.createFixedSize(typeOfFunc.length)), assert.genericType(List, List));
	  },
	  annotations: function(typeOfFunc) {
	    return assert.returnType((isPresent(typeOfFunc.annotations) ? typeOfFunc.annotations : []), List);
	  },
	  getter: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    return assert.returnType((new Function('o', 'return o.' + name + ';')), GetterFn);
	  },
	  setter: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    return assert.returnType((new Function('o', 'v', 'return o.' + name + ' = v;')), SetterFn);
	  },
	  method: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    var method = ("o." + name);
	    return assert.returnType((new Function('o', 'args', ("if (!" + method + ") throw new Error('\"" + name + "\" is undefined');") + ("return " + method + ".apply(o, args);"))), MethodFn);
	  }
	}, {});
	Object.defineProperty(ReflectionCapabilities.prototype.factory, "parameters", {get: function() {
	    return [[Type]];
	  }});
	Object.defineProperty(ReflectionCapabilities.prototype.getter, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ReflectionCapabilities.prototype.setter, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ReflectionCapabilities.prototype.method, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/reflection/reflection_capabilities.map
	
	//# sourceMappingURL=./reflection_capabilities.map

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Inject: {get: function() {
	      return Inject;
	    }},
	  InjectPromise: {get: function() {
	      return InjectPromise;
	    }},
	  InjectLazy: {get: function() {
	      return InjectLazy;
	    }},
	  DependencyAnnotation: {get: function() {
	      return DependencyAnnotation;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/di/annotations";
	var $__angular2_47_src_47_facade_47_lang__;
	var CONST = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).CONST;
	var Inject = function Inject(token) {
	  this.token = token;
	};
	($traceurRuntime.createClass)(Inject, {}, {});
	Object.defineProperty(Inject, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	var InjectPromise = function InjectPromise(token) {
	  this.token = token;
	};
	($traceurRuntime.createClass)(InjectPromise, {}, {});
	Object.defineProperty(InjectPromise, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	var InjectLazy = function InjectLazy(token) {
	  this.token = token;
	};
	($traceurRuntime.createClass)(InjectLazy, {}, {});
	Object.defineProperty(InjectLazy, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	var DependencyAnnotation = function DependencyAnnotation() {};
	($traceurRuntime.createClass)(DependencyAnnotation, {}, {});
	Object.defineProperty(DependencyAnnotation, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/di/annotations.map
	
	//# sourceMappingURL=./annotations.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Injector: {get: function() {
	      return Injector;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/di/injector";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_di_47_binding__,
	    $__angular2_47_src_47_di_47_exceptions__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_async__,
	    $__angular2_47_src_47_di_47_key__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    Map = $__1.Map,
	    List = $__1.List,
	    MapWrapper = $__1.MapWrapper,
	    ListWrapper = $__1.ListWrapper;
	var $__2 = ($__angular2_47_src_47_di_47_binding__ = __webpack_require__(66), $__angular2_47_src_47_di_47_binding__ && $__angular2_47_src_47_di_47_binding__.__esModule && $__angular2_47_src_47_di_47_binding__ || {default: $__angular2_47_src_47_di_47_binding__}),
	    Binding = $__2.Binding,
	    BindingBuilder = $__2.BindingBuilder,
	    bind = $__2.bind;
	var $__3 = ($__angular2_47_src_47_di_47_exceptions__ = __webpack_require__(87), $__angular2_47_src_47_di_47_exceptions__ && $__angular2_47_src_47_di_47_exceptions__.__esModule && $__angular2_47_src_47_di_47_exceptions__ || {default: $__angular2_47_src_47_di_47_exceptions__}),
	    ProviderError = $__3.ProviderError,
	    NoProviderError = $__3.NoProviderError,
	    InvalidBindingError = $__3.InvalidBindingError,
	    AsyncBindingError = $__3.AsyncBindingError,
	    CyclicDependencyError = $__3.CyclicDependencyError,
	    InstantiationError = $__3.InstantiationError;
	var $__4 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    FunctionWrapper = $__4.FunctionWrapper,
	    Type = $__4.Type,
	    isPresent = $__4.isPresent,
	    isBlank = $__4.isBlank;
	var $__5 = ($__angular2_47_src_47_facade_47_async__ = __webpack_require__(58), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
	    Promise = $__5.Promise,
	    PromiseWrapper = $__5.PromiseWrapper;
	var Key = ($__angular2_47_src_47_di_47_key__ = __webpack_require__(86), $__angular2_47_src_47_di_47_key__ && $__angular2_47_src_47_di_47_key__.__esModule && $__angular2_47_src_47_di_47_key__ || {default: $__angular2_47_src_47_di_47_key__}).Key;
	var _constructing = new Object();
	var _Waiting = function _Waiting(promise) {
	  assert.argumentTypes(promise, Promise);
	  this.promise = promise;
	};
	($traceurRuntime.createClass)(_Waiting, {}, {});
	Object.defineProperty(_Waiting, "parameters", {get: function() {
	    return [[Promise]];
	  }});
	function _isWaiting(obj) {
	  return assert.returnType((obj instanceof _Waiting), assert.type.boolean);
	}
	var Injector = function Injector(bindings) {
	  var $__10,
	      $__11;
	  var $__9 = arguments[1] !== (void 0) ? arguments[1] : {},
	      parent = ($__10 = $__9.parent) === void 0 ? null : $__10,
	      defaultBindings = ($__11 = $__9.defaultBindings) === void 0 ? false : $__11;
	  assert.argumentTypes(bindings, List);
	  var flatten = _flattenBindings(bindings, MapWrapper.create());
	  this._bindings = this._createListOfBindings(flatten);
	  this._instances = this._createInstances();
	  this._parent = parent;
	  this._defaultBindings = defaultBindings;
	  this._asyncStrategy = new _AsyncInjectorStrategy(this);
	  this._syncStrategy = new _SyncInjectorStrategy(this);
	};
	var $Injector = Injector;
	($traceurRuntime.createClass)(Injector, {
	  get: function(token) {
	    return this._getByKey(Key.get(token), false, false);
	  },
	  asyncGet: function(token) {
	    return this._getByKey(Key.get(token), true, false);
	  },
	  createChild: function(bindings) {
	    assert.argumentTypes(bindings, List);
	    return assert.returnType((new $Injector(bindings, {parent: this})), $Injector);
	  },
	  _createListOfBindings: function(flattenBindings) {
	    var bindings = ListWrapper.createFixedSize(Key.numberOfKeys + 1);
	    MapWrapper.forEach(flattenBindings, (function(v, keyId) {
	      return bindings[keyId] = v;
	    }));
	    return assert.returnType((bindings), List);
	  },
	  _createInstances: function() {
	    return assert.returnType((ListWrapper.createFixedSize(Key.numberOfKeys + 1)), List);
	  },
	  _getByKey: function(key, returnPromise, returnLazy) {
	    var $__7 = this;
	    if (returnLazy) {
	      return (function() {
	        return $__7._getByKey(key, returnPromise, false);
	      });
	    }
	    var strategy = returnPromise ? this._asyncStrategy : this._syncStrategy;
	    var instance = strategy.readFromCache(key);
	    if (isPresent(instance))
	      return instance;
	    instance = strategy.instantiate(key);
	    if (isPresent(instance))
	      return instance;
	    if (isPresent(this._parent)) {
	      return this._parent._getByKey(key, returnPromise, returnLazy);
	    }
	    throw new NoProviderError(key);
	  },
	  _resolveDependencies: function(key, binding, forceAsync) {
	    var $__7 = this;
	    try {
	      var getDependency = (function(d) {
	        return $__7._getByKey(d.key, forceAsync || d.asPromise, d.lazy);
	      });
	      return assert.returnType((ListWrapper.map(binding.dependencies, getDependency)), List);
	    } catch (e) {
	      this._clear(key);
	      if (e instanceof ProviderError)
	        e.addKey(key);
	      throw e;
	    }
	  },
	  _getInstance: function(key) {
	    assert.argumentTypes(key, Key);
	    if (this._instances.length <= key.id)
	      return null;
	    return ListWrapper.get(this._instances, key.id);
	  },
	  _setInstance: function(key, obj) {
	    assert.argumentTypes(key, Key, obj, assert.type.any);
	    ListWrapper.set(this._instances, key.id, obj);
	  },
	  _getBinding: function(key) {
	    assert.argumentTypes(key, Key);
	    var binding = this._bindings.length <= key.id ? null : ListWrapper.get(this._bindings, key.id);
	    if (isBlank(binding) && this._defaultBindings) {
	      return bind(key.token).toClass(key.token);
	    } else {
	      return binding;
	    }
	  },
	  _markAsConstructing: function(key) {
	    assert.argumentTypes(key, Key);
	    this._setInstance(key, _constructing);
	  },
	  _clear: function(key) {
	    assert.argumentTypes(key, Key);
	    this._setInstance(key, null);
	  }
	}, {});
	Object.defineProperty(Injector, "parameters", {get: function() {
	    return [[List], []];
	  }});
	Object.defineProperty(Injector.prototype.createChild, "parameters", {get: function() {
	    return [[List]];
	  }});
	Object.defineProperty(Injector.prototype._getByKey, "parameters", {get: function() {
	    return [[Key], [assert.type.boolean], [assert.type.boolean]];
	  }});
	Object.defineProperty(Injector.prototype._resolveDependencies, "parameters", {get: function() {
	    return [[Key], [Binding], [assert.type.boolean]];
	  }});
	Object.defineProperty(Injector.prototype._getInstance, "parameters", {get: function() {
	    return [[Key]];
	  }});
	Object.defineProperty(Injector.prototype._setInstance, "parameters", {get: function() {
	    return [[Key], []];
	  }});
	Object.defineProperty(Injector.prototype._getBinding, "parameters", {get: function() {
	    return [[Key]];
	  }});
	Object.defineProperty(Injector.prototype._markAsConstructing, "parameters", {get: function() {
	    return [[Key]];
	  }});
	Object.defineProperty(Injector.prototype._clear, "parameters", {get: function() {
	    return [[Key]];
	  }});
	var _SyncInjectorStrategy = function _SyncInjectorStrategy(injector) {
	  assert.argumentTypes(injector, Injector);
	  this.injector = injector;
	};
	($traceurRuntime.createClass)(_SyncInjectorStrategy, {
	  readFromCache: function(key) {
	    assert.argumentTypes(key, Key);
	    if (key.token === Injector) {
	      return this.injector;
	    }
	    var instance = this.injector._getInstance(key);
	    if (instance === _constructing) {
	      throw new CyclicDependencyError(key);
	    } else if (isPresent(instance) && !_isWaiting(instance)) {
	      return instance;
	    } else {
	      return null;
	    }
	  },
	  instantiate: function(key) {
	    assert.argumentTypes(key, Key);
	    var binding = this.injector._getBinding(key);
	    if (isBlank(binding))
	      return null;
	    if (binding.providedAsPromise)
	      throw new AsyncBindingError(key);
	    this.injector._markAsConstructing(key);
	    var deps = this.injector._resolveDependencies(key, binding, false);
	    return this._createInstance(key, binding, deps);
	  },
	  _createInstance: function(key, binding, deps) {
	    assert.argumentTypes(key, Key, binding, Binding, deps, List);
	    try {
	      var instance = FunctionWrapper.apply(binding.factory, deps);
	      this.injector._setInstance(key, instance);
	      return instance;
	    } catch (e) {
	      this.injector._clear(key);
	      throw new InstantiationError(e, key);
	    }
	  }
	}, {});
	Object.defineProperty(_SyncInjectorStrategy, "parameters", {get: function() {
	    return [[Injector]];
	  }});
	Object.defineProperty(_SyncInjectorStrategy.prototype.readFromCache, "parameters", {get: function() {
	    return [[Key]];
	  }});
	Object.defineProperty(_SyncInjectorStrategy.prototype.instantiate, "parameters", {get: function() {
	    return [[Key]];
	  }});
	Object.defineProperty(_SyncInjectorStrategy.prototype._createInstance, "parameters", {get: function() {
	    return [[Key], [Binding], [List]];
	  }});
	var _AsyncInjectorStrategy = function _AsyncInjectorStrategy(injector) {
	  assert.argumentTypes(injector, Injector);
	  this.injector = injector;
	};
	($traceurRuntime.createClass)(_AsyncInjectorStrategy, {
	  readFromCache: function(key) {
	    assert.argumentTypes(key, Key);
	    if (key.token === Injector) {
	      return PromiseWrapper.resolve(this.injector);
	    }
	    var instance = this.injector._getInstance(key);
	    if (instance === _constructing) {
	      throw new CyclicDependencyError(key);
	    } else if (_isWaiting(instance)) {
	      return instance.promise;
	    } else if (isPresent(instance)) {
	      return PromiseWrapper.resolve(instance);
	    } else {
	      return null;
	    }
	  },
	  instantiate: function(key) {
	    var $__7 = this;
	    var binding = this.injector._getBinding(key);
	    if (isBlank(binding))
	      return null;
	    this.injector._markAsConstructing(key);
	    var deps = this.injector._resolveDependencies(key, binding, true);
	    var depsPromise = PromiseWrapper.all(deps);
	    var promise = PromiseWrapper.then(depsPromise, null, (function(e) {
	      return $__7._errorHandler(key, e);
	    })).then((function(deps) {
	      return $__7._findOrCreate(key, binding, deps);
	    })).then((function(instance) {
	      return $__7._cacheInstance(key, instance);
	    }));
	    this.injector._setInstance(key, new _Waiting(promise));
	    return promise;
	  },
	  _errorHandler: function(key, e) {
	    assert.argumentTypes(key, Key, e, assert.type.any);
	    if (e instanceof ProviderError)
	      e.addKey(key);
	    return assert.returnType((PromiseWrapper.reject(e)), Promise);
	  },
	  _findOrCreate: function(key, binding, deps) {
	    assert.argumentTypes(key, Key, binding, Binding, deps, List);
	    try {
	      var instance = this.injector._getInstance(key);
	      if (!_isWaiting(instance))
	        return instance;
	      return FunctionWrapper.apply(binding.factory, deps);
	    } catch (e) {
	      this.injector._clear(key);
	      throw new InstantiationError(e, key);
	    }
	  },
	  _cacheInstance: function(key, instance) {
	    this.injector._setInstance(key, instance);
	    return instance;
	  }
	}, {});
	Object.defineProperty(_AsyncInjectorStrategy, "parameters", {get: function() {
	    return [[Injector]];
	  }});
	Object.defineProperty(_AsyncInjectorStrategy.prototype.readFromCache, "parameters", {get: function() {
	    return [[Key]];
	  }});
	Object.defineProperty(_AsyncInjectorStrategy.prototype.instantiate, "parameters", {get: function() {
	    return [[Key]];
	  }});
	Object.defineProperty(_AsyncInjectorStrategy.prototype._errorHandler, "parameters", {get: function() {
	    return [[Key], []];
	  }});
	Object.defineProperty(_AsyncInjectorStrategy.prototype._findOrCreate, "parameters", {get: function() {
	    return [[Key], [Binding], [List]];
	  }});
	function _flattenBindings(bindings, res) {
	  assert.argumentTypes(bindings, List, res, Map);
	  ListWrapper.forEach(bindings, function(b) {
	    if (b instanceof Binding) {
	      MapWrapper.set(res, b.key.id, b);
	    } else if (b instanceof Type) {
	      var s = bind(b).toClass(b);
	      MapWrapper.set(res, s.key.id, s);
	    } else if (b instanceof List) {
	      _flattenBindings(b, res);
	    } else if (b instanceof BindingBuilder) {
	      throw new InvalidBindingError(b.token);
	    } else {
	      throw new InvalidBindingError(b);
	    }
	  });
	  return res;
	}
	Object.defineProperty(_flattenBindings, "parameters", {get: function() {
	    return [[List], [Map]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/di/injector.map
	
	//# sourceMappingURL=./injector.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Key: {get: function() {
	      return Key;
	    }},
	  KeyRegistry: {get: function() {
	      return KeyRegistry;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/di/key";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_di_47_exceptions__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var KeyMetadataError = ($__angular2_47_src_47_di_47_exceptions__ = __webpack_require__(87), $__angular2_47_src_47_di_47_exceptions__ && $__angular2_47_src_47_di_47_exceptions__.__esModule && $__angular2_47_src_47_di_47_exceptions__ || {default: $__angular2_47_src_47_di_47_exceptions__}).KeyMetadataError;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    MapWrapper = $__2.MapWrapper,
	    Map = $__2.Map;
	var $__3 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    FIELD = $__3.FIELD,
	    int = $__3.int,
	    isPresent = $__3.isPresent;
	var Key = function Key(token, id) {
	  assert.argumentTypes(token, assert.type.any, id, int);
	  this.token = token;
	  this.id = id;
	  this.metadata = null;
	};
	var $Key = Key;
	($traceurRuntime.createClass)(Key, {}, {
	  setMetadata: function(key, metadata) {
	    assert.argumentTypes(key, $Key, metadata, assert.type.any);
	    if (isPresent(key.metadata) && key.metadata !== metadata) {
	      throw new KeyMetadataError();
	    }
	    key.metadata = metadata;
	    return assert.returnType((key), $Key);
	  },
	  get: function(token) {
	    return assert.returnType((_globalKeyRegistry.get(token)), $Key);
	  },
	  get numberOfKeys() {
	    return assert.returnType((_globalKeyRegistry.numberOfKeys), int);
	  }
	});
	Object.defineProperty(Key, "parameters", {get: function() {
	    return [[], [int]];
	  }});
	Object.defineProperty(Key.setMetadata, "parameters", {get: function() {
	    return [[Key], []];
	  }});
	var KeyRegistry = function KeyRegistry() {
	  this._allKeys = MapWrapper.create();
	};
	($traceurRuntime.createClass)(KeyRegistry, {
	  get: function(token) {
	    if (token instanceof Key)
	      return assert.returnType((token), Key);
	    if (MapWrapper.contains(this._allKeys, token)) {
	      return assert.returnType((MapWrapper.get(this._allKeys, token)), Key);
	    }
	    var newKey = new Key(token, Key.numberOfKeys);
	    MapWrapper.set(this._allKeys, token, newKey);
	    return assert.returnType((newKey), Key);
	  },
	  get numberOfKeys() {
	    return assert.returnType((MapWrapper.size(this._allKeys)), int);
	  }
	}, {});
	var _globalKeyRegistry = new KeyRegistry();
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/di/key.map
	
	//# sourceMappingURL=./key.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  KeyMetadataError: {get: function() {
	      return KeyMetadataError;
	    }},
	  ProviderError: {get: function() {
	      return ProviderError;
	    }},
	  NoProviderError: {get: function() {
	      return NoProviderError;
	    }},
	  AsyncBindingError: {get: function() {
	      return AsyncBindingError;
	    }},
	  CyclicDependencyError: {get: function() {
	      return CyclicDependencyError;
	    }},
	  InstantiationError: {get: function() {
	      return InstantiationError;
	    }},
	  InvalidBindingError: {get: function() {
	      return InvalidBindingError;
	    }},
	  NoAnnotationError: {get: function() {
	      return NoAnnotationError;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/di/exceptions";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    ListWrapper = $__1.ListWrapper,
	    List = $__1.List;
	var stringify = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).stringify;
	function findFirstClosedCycle(keys) {
	  assert.argumentTypes(keys, List);
	  var res = [];
	  for (var i = 0; i < keys.length; ++i) {
	    if (ListWrapper.contains(res, keys[i])) {
	      ListWrapper.push(res, keys[i]);
	      return res;
	    } else {
	      ListWrapper.push(res, keys[i]);
	    }
	  }
	  return res;
	}
	Object.defineProperty(findFirstClosedCycle, "parameters", {get: function() {
	    return [[List]];
	  }});
	function constructResolvingPath(keys) {
	  if (keys.length > 1) {
	    var reversed = findFirstClosedCycle(ListWrapper.reversed(keys));
	    var tokenStrs = ListWrapper.map(reversed, (function(k) {
	      return stringify(k.token);
	    }));
	    return " (" + tokenStrs.join(' -> ') + ")";
	  } else {
	    return "";
	  }
	}
	Object.defineProperty(constructResolvingPath, "parameters", {get: function() {
	    return [[List]];
	  }});
	var KeyMetadataError = function KeyMetadataError() {
	  $traceurRuntime.superConstructor($KeyMetadataError).apply(this, arguments);
	};
	var $KeyMetadataError = KeyMetadataError;
	($traceurRuntime.createClass)(KeyMetadataError, {}, {}, Error);
	var ProviderError = function ProviderError(key, constructResolvingMessage) {
	  assert.argumentTypes(key, assert.type.any, constructResolvingMessage, Function);
	  $traceurRuntime.superConstructor($ProviderError).call(this);
	  this.keys = [key];
	  this.constructResolvingMessage = constructResolvingMessage;
	  this.message = this.constructResolvingMessage(this.keys);
	};
	var $ProviderError = ProviderError;
	($traceurRuntime.createClass)(ProviderError, {
	  addKey: function(key) {
	    ListWrapper.push(this.keys, key);
	    this.message = this.constructResolvingMessage(this.keys);
	  },
	  toString: function() {
	    return this.message;
	  }
	}, {}, Error);
	Object.defineProperty(ProviderError, "parameters", {get: function() {
	    return [[], [Function]];
	  }});
	var NoProviderError = function NoProviderError(key) {
	  $traceurRuntime.superConstructor($NoProviderError).call(this, key, function(keys) {
	    assert.argumentTypes(keys, List);
	    var first = stringify(ListWrapper.first(keys).token);
	    return ("No provider for " + first + "!" + constructResolvingPath(keys));
	  });
	};
	var $NoProviderError = NoProviderError;
	($traceurRuntime.createClass)(NoProviderError, {}, {}, ProviderError);
	var AsyncBindingError = function AsyncBindingError(key) {
	  $traceurRuntime.superConstructor($AsyncBindingError).call(this, key, function(keys) {
	    assert.argumentTypes(keys, List);
	    var first = stringify(ListWrapper.first(keys).token);
	    return ("Cannot instantiate " + first + " synchronously. ") + ("It is provided as a promise!" + constructResolvingPath(keys));
	  });
	};
	var $AsyncBindingError = AsyncBindingError;
	($traceurRuntime.createClass)(AsyncBindingError, {}, {}, ProviderError);
	var CyclicDependencyError = function CyclicDependencyError(key) {
	  $traceurRuntime.superConstructor($CyclicDependencyError).call(this, key, function(keys) {
	    assert.argumentTypes(keys, List);
	    return ("Cannot instantiate cyclic dependency!" + constructResolvingPath(keys));
	  });
	};
	var $CyclicDependencyError = CyclicDependencyError;
	($traceurRuntime.createClass)(CyclicDependencyError, {}, {}, ProviderError);
	var InstantiationError = function InstantiationError(originalException, key) {
	  $traceurRuntime.superConstructor($InstantiationError).call(this, key, function(keys) {
	    assert.argumentTypes(keys, List);
	    var first = stringify(ListWrapper.first(keys).token);
	    return ("Error during instantiation of " + first + "!" + constructResolvingPath(keys) + ".") + (" ORIGINAL ERROR: " + originalException);
	  });
	};
	var $InstantiationError = InstantiationError;
	($traceurRuntime.createClass)(InstantiationError, {}, {}, ProviderError);
	var InvalidBindingError = function InvalidBindingError(binding) {
	  $traceurRuntime.superConstructor($InvalidBindingError).call(this);
	  this.message = ("Invalid binding " + binding);
	};
	var $InvalidBindingError = InvalidBindingError;
	($traceurRuntime.createClass)(InvalidBindingError, {toString: function() {
	    return this.message;
	  }}, {}, Error);
	var NoAnnotationError = function NoAnnotationError(typeOrFunc) {
	  $traceurRuntime.superConstructor($NoAnnotationError).call(this);
	  this.message = ("Cannot resolve all parameters for " + stringify(typeOrFunc));
	};
	var $NoAnnotationError = NoAnnotationError;
	($traceurRuntime.createClass)(NoAnnotationError, {toString: function() {
	    return this.message;
	  }}, {}, Error);
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/di/exceptions.map
	
	//# sourceMappingURL=./exceptions.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  OpaqueToken: {get: function() {
	      return OpaqueToken;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/di/opaque_token";
	var $__rtts_95_assert_47_rtts_95_assert__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var OpaqueToken = function OpaqueToken(desc) {
	  assert.argumentTypes(desc, assert.type.string);
	  this._desc = ("Token(" + desc + ")");
	};
	($traceurRuntime.createClass)(OpaqueToken, {toString: function() {
	    return this._desc;
	  }}, {});
	Object.defineProperty(OpaqueToken, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/di/opaque_token.map
	
	//# sourceMappingURL=./opaque_token.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Content: {get: function() {
	      return Content;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/shadow_dom_emulation/content_tag";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_annotations_47_annotations__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__,
	    $__angular2_47_di__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_core_47_dom_47_element__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var Decorator = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = __webpack_require__(25), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Decorator;
	var $__2 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = __webpack_require__(79), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__}),
	    SourceLightDom = $__2.SourceLightDom,
	    DestinationLightDom = $__2.DestinationLightDom,
	    LightDom = $__2.LightDom;
	var Inject = ($__angular2_47_di__ = __webpack_require__(52), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Inject;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var isPresent = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
	var $__6 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__6.List,
	    ListWrapper = $__6.ListWrapper;
	var NgElement = ($__angular2_47_src_47_core_47_dom_47_element__ = __webpack_require__(34), $__angular2_47_src_47_core_47_dom_47_element__ && $__angular2_47_src_47_core_47_dom_47_element__.__esModule && $__angular2_47_src_47_core_47_dom_47_element__ || {default: $__angular2_47_src_47_core_47_dom_47_element__}).NgElement;
	var ContentStrategy = function ContentStrategy() {};
	($traceurRuntime.createClass)(ContentStrategy, {insert: function(nodes) {
	    assert.argumentTypes(nodes, List);
	  }}, {});
	Object.defineProperty(ContentStrategy.prototype.insert, "parameters", {get: function() {
	    return [[List]];
	  }});
	var RenderedContent = function RenderedContent(contentEl) {
	  $traceurRuntime.superConstructor($RenderedContent).call(this);
	  this._replaceContentElementWithScriptTags(contentEl);
	  this.nodes = [];
	};
	var $RenderedContent = RenderedContent;
	($traceurRuntime.createClass)(RenderedContent, {
	  _scriptTemplate: function() {
	    if (!isPresent($RenderedContent._lazyScriptTemplate)) {
	      $RenderedContent._lazyScriptTemplate = DOM.createScriptTag('type', 'ng/content');
	    }
	    return $RenderedContent._lazyScriptTemplate;
	  },
	  insert: function(nodes) {
	    assert.argumentTypes(nodes, List);
	    this.nodes = nodes;
	    DOM.insertAllBefore(this.endScript, nodes);
	    this._removeNodesUntil(ListWrapper.isEmpty(nodes) ? this.endScript : nodes[0]);
	  },
	  _replaceContentElementWithScriptTags: function(contentEl) {
	    this.beginScript = DOM.clone(this._scriptTemplate());
	    this.endScript = DOM.clone(this._scriptTemplate());
	    DOM.insertBefore(contentEl, this.beginScript);
	    DOM.insertBefore(contentEl, this.endScript);
	    DOM.removeChild(DOM.parentElement(contentEl), contentEl);
	  },
	  _removeNodesUntil: function(node) {
	    var p = DOM.parentElement(this.beginScript);
	    for (var next = DOM.nextSibling(this.beginScript); next !== node; next = DOM.nextSibling(this.beginScript)) {
	      DOM.removeChild(p, next);
	    }
	  }
	}, {}, ContentStrategy);
	Object.defineProperty(RenderedContent.prototype.insert, "parameters", {get: function() {
	    return [[List]];
	  }});
	var IntermediateContent = function IntermediateContent(destinationLightDom) {
	  assert.argumentTypes(destinationLightDom, LightDom);
	  $traceurRuntime.superConstructor($IntermediateContent).call(this);
	  this.destinationLightDom = destinationLightDom;
	  this.nodes = [];
	};
	var $IntermediateContent = IntermediateContent;
	($traceurRuntime.createClass)(IntermediateContent, {insert: function(nodes) {
	    assert.argumentTypes(nodes, List);
	    this.nodes = nodes;
	    this.destinationLightDom.redistribute();
	  }}, {}, ContentStrategy);
	Object.defineProperty(IntermediateContent, "parameters", {get: function() {
	    return [[LightDom]];
	  }});
	Object.defineProperty(IntermediateContent.prototype.insert, "parameters", {get: function() {
	    return [[List]];
	  }});
	var Content = function Content(destinationLightDom, contentEl) {
	  assert.argumentTypes(destinationLightDom, assert.type.any, contentEl, NgElement);
	  this.select = contentEl.getAttribute('select');
	  this._strategy = isPresent(destinationLightDom) ? new IntermediateContent(destinationLightDom) : new RenderedContent(contentEl.domElement);
	};
	($traceurRuntime.createClass)(Content, {
	  nodes: function() {
	    return assert.returnType((this._strategy.nodes), List);
	  },
	  insert: function(nodes) {
	    assert.argumentTypes(nodes, List);
	    this._strategy.insert(nodes);
	  }
	}, {});
	Object.defineProperty(Content, "annotations", {get: function() {
	    return [new Decorator({selector: 'content'})];
	  }});
	Object.defineProperty(Content, "parameters", {get: function() {
	    return [[new Inject(DestinationLightDom)], [NgElement]];
	  }});
	Object.defineProperty(Content.prototype.insert, "parameters", {get: function() {
	    return [[List]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/shadow_dom_emulation/content_tag.map
	
	//# sourceMappingURL=./content_tag.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ShadowCss: {get: function() {
	      return ShadowCss;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/shadow_dom_emulation/shadow_css";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper;
	var $__3 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    StringWrapper = $__3.StringWrapper,
	    RegExp = $__3.RegExp,
	    RegExpWrapper = $__3.RegExpWrapper,
	    RegExpMatcherWrapper = $__3.RegExpMatcherWrapper,
	    isPresent = $__3.isPresent,
	    isBlank = $__3.isBlank,
	    BaseException = $__3.BaseException,
	    int = $__3.int;
	var ShadowCss = function ShadowCss() {
	  this.strictStyling = true;
	};
	($traceurRuntime.createClass)(ShadowCss, {
	  shimStyle: function(style, selector) {
	    var hostSelector = arguments[2] !== (void 0) ? arguments[2] : '';
	    assert.argumentTypes(style, assert.type.any, selector, assert.type.string, hostSelector, assert.type.string);
	    var cssText = DOM.getText(style);
	    return assert.returnType((this.shimCssText(cssText, selector, hostSelector)), assert.type.string);
	  },
	  shimCssText: function(cssText, selector) {
	    var hostSelector = arguments[2] !== (void 0) ? arguments[2] : '';
	    assert.argumentTypes(cssText, assert.type.string, selector, assert.type.string, hostSelector, assert.type.string);
	    cssText = this._insertDirectives(cssText);
	    return assert.returnType((this._scopeCssText(cssText, selector, hostSelector)), assert.type.string);
	  },
	  _insertDirectives: function(cssText) {
	    assert.argumentTypes(cssText, assert.type.string);
	    cssText = this._insertPolyfillDirectivesInCssText(cssText);
	    return assert.returnType((this._insertPolyfillRulesInCssText(cssText)), assert.type.string);
	  },
	  _insertPolyfillDirectivesInCssText: function(cssText) {
	    assert.argumentTypes(cssText, assert.type.string);
	    return assert.returnType((StringWrapper.replaceAllMapped(cssText, _cssContentNextSelectorRe, function(m) {
	      return m[1] + '{';
	    })), assert.type.string);
	  },
	  _insertPolyfillRulesInCssText: function(cssText) {
	    assert.argumentTypes(cssText, assert.type.string);
	    return assert.returnType((StringWrapper.replaceAllMapped(cssText, _cssContentRuleRe, function(m) {
	      var rule = m[0];
	      rule = StringWrapper.replace(rule, m[1], '');
	      rule = StringWrapper.replace(rule, m[2], '');
	      return m[3] + rule;
	    })), assert.type.string);
	  },
	  _scopeCssText: function(cssText, scopeSelector, hostSelector) {
	    var $__4 = this;
	    assert.argumentTypes(cssText, assert.type.string, scopeSelector, assert.type.string, hostSelector, assert.type.string);
	    var unscoped = this._extractUnscopedRulesFromCssText(cssText);
	    cssText = this._insertPolyfillHostInCssText(cssText);
	    cssText = this._convertColonHost(cssText);
	    cssText = this._convertColonHostContext(cssText);
	    cssText = this._convertShadowDOMSelectors(cssText);
	    if (isPresent(scopeSelector)) {
	      _withCssRules(cssText, (function(rules) {
	        cssText = $__4._scopeRules(rules, scopeSelector, hostSelector);
	      }));
	    }
	    cssText = cssText + '\n' + unscoped;
	    return assert.returnType((cssText.trim()), assert.type.string);
	  },
	  _extractUnscopedRulesFromCssText: function(cssText) {
	    assert.argumentTypes(cssText, assert.type.string);
	    var r = '',
	        m;
	    var matcher = RegExpWrapper.matcher(_cssContentUnscopedRuleRe, cssText);
	    while (isPresent(m = RegExpMatcherWrapper.next(matcher))) {
	      var rule = m[0];
	      rule = StringWrapper.replace(rule, m[2], '');
	      rule = StringWrapper.replace(rule, m[1], m[3]);
	      r = rule + '\n\n';
	    }
	    return assert.returnType((r), assert.type.string);
	  },
	  _convertColonHost: function(cssText) {
	    assert.argumentTypes(cssText, assert.type.string);
	    return assert.returnType((this._convertColonRule(cssText, _cssColonHostRe, this._colonHostPartReplacer)), assert.type.string);
	  },
	  _convertColonHostContext: function(cssText) {
	    assert.argumentTypes(cssText, assert.type.string);
	    return assert.returnType((this._convertColonRule(cssText, _cssColonHostContextRe, this._colonHostContextPartReplacer)), assert.type.string);
	  },
	  _convertColonRule: function(cssText, regExp, partReplacer) {
	    assert.argumentTypes(cssText, assert.type.string, regExp, RegExp, partReplacer, Function);
	    return assert.returnType((StringWrapper.replaceAllMapped(cssText, regExp, function(m) {
	      if (isPresent(m[2])) {
	        var parts = m[2].split(','),
	            r = [];
	        for (var i = 0; i < parts.length; i++) {
	          var p = parts[i];
	          if (isBlank(p))
	            break;
	          p = p.trim();
	          ListWrapper.push(r, partReplacer(_polyfillHostNoCombinator, p, m[3]));
	        }
	        return r.join(',');
	      } else {
	        return _polyfillHostNoCombinator + m[3];
	      }
	    })), assert.type.string);
	  },
	  _colonHostContextPartReplacer: function(host, part, suffix) {
	    assert.argumentTypes(host, assert.type.string, part, assert.type.string, suffix, assert.type.string);
	    if (StringWrapper.contains(part, _polyfillHost)) {
	      return assert.returnType((this._colonHostPartReplacer(host, part, suffix)), assert.type.string);
	    } else {
	      return assert.returnType((host + part + suffix + ', ' + part + ' ' + host + suffix), assert.type.string);
	    }
	  },
	  _colonHostPartReplacer: function(host, part, suffix) {
	    assert.argumentTypes(host, assert.type.string, part, assert.type.string, suffix, assert.type.string);
	    return assert.returnType((host + StringWrapper.replace(part, _polyfillHost, '') + suffix), assert.type.string);
	  },
	  _convertShadowDOMSelectors: function(cssText) {
	    assert.argumentTypes(cssText, assert.type.string);
	    for (var i = 0; i < _shadowDOMSelectorsRe.length; i++) {
	      cssText = StringWrapper.replaceAll(cssText, _shadowDOMSelectorsRe[i], ' ');
	    }
	    return assert.returnType((cssText), assert.type.string);
	  },
	  _scopeRules: function(cssRules, scopeSelector, hostSelector) {
	    assert.argumentTypes(cssRules, assert.type.any, scopeSelector, assert.type.string, hostSelector, assert.type.string);
	    var cssText = '';
	    if (isPresent(cssRules)) {
	      for (var i = 0; i < cssRules.length; i++) {
	        var rule = cssRules[i];
	        if (DOM.isStyleRule(rule) || DOM.isPageRule(rule)) {
	          cssText += this._scopeSelector(rule.selectorText, scopeSelector, hostSelector, this.strictStyling) + ' {\n';
	          cssText += this._propertiesFromRule(rule) + '\n}\n\n';
	        } else if (DOM.isMediaRule(rule)) {
	          cssText += '@media ' + rule.media.mediaText + ' {\n';
	          cssText += this._scopeRules(rule.cssRules, scopeSelector, hostSelector);
	          cssText += '\n}\n\n';
	        } else {
	          try {
	            if (isPresent(rule.cssText)) {
	              cssText += rule.cssText + '\n\n';
	            }
	          } catch (x) {
	            if (DOM.isKeyframesRule(rule) && isPresent(rule.cssRules)) {
	              cssText += this._ieSafeCssTextFromKeyFrameRule(rule);
	            }
	          }
	        }
	      }
	    }
	    return assert.returnType((cssText), assert.type.string);
	  },
	  _ieSafeCssTextFromKeyFrameRule: function(rule) {
	    var cssText = '@keyframes ' + rule.name + ' {';
	    for (var i = 0; i < rule.cssRules.length; i++) {
	      var r = rule.cssRules[i];
	      cssText += ' ' + r.keyText + ' {' + r.style.cssText + '}';
	    }
	    cssText += ' }';
	    return assert.returnType((cssText), assert.type.string);
	  },
	  _scopeSelector: function(selector, scopeSelector, hostSelector, strict) {
	    assert.argumentTypes(selector, assert.type.string, scopeSelector, assert.type.string, hostSelector, assert.type.string, strict, assert.type.boolean);
	    var r = [],
	        parts = selector.split(',');
	    for (var i = 0; i < parts.length; i++) {
	      var p = parts[i];
	      p = p.trim();
	      if (this._selectorNeedsScoping(p, scopeSelector)) {
	        p = strict && !StringWrapper.contains(p, _polyfillHostNoCombinator) ? this._applyStrictSelectorScope(p, scopeSelector) : this._applySelectorScope(p, scopeSelector, hostSelector);
	      }
	      ListWrapper.push(r, p);
	    }
	    return assert.returnType((r.join(', ')), assert.type.string);
	  },
	  _selectorNeedsScoping: function(selector, scopeSelector) {
	    assert.argumentTypes(selector, assert.type.string, scopeSelector, assert.type.string);
	    var re = this._makeScopeMatcher(scopeSelector);
	    return assert.returnType((!isPresent(RegExpWrapper.firstMatch(re, selector))), assert.type.boolean);
	  },
	  _makeScopeMatcher: function(scopeSelector) {
	    assert.argumentTypes(scopeSelector, assert.type.string);
	    var lre = RegExpWrapper.create('\\[');
	    var rre = RegExpWrapper.create('\\]');
	    scopeSelector = StringWrapper.replaceAll(scopeSelector, lre, '\\[');
	    scopeSelector = StringWrapper.replaceAll(scopeSelector, rre, '\\]');
	    return assert.returnType((RegExpWrapper.create('^(' + scopeSelector + ')' + _selectorReSuffix, 'm')), RegExp);
	  },
	  _applySelectorScope: function(selector, scopeSelector, hostSelector) {
	    assert.argumentTypes(selector, assert.type.string, scopeSelector, assert.type.string, hostSelector, assert.type.string);
	    return assert.returnType((this._applySimpleSelectorScope(selector, scopeSelector, hostSelector)), assert.type.string);
	  },
	  _applySimpleSelectorScope: function(selector, scopeSelector, hostSelector) {
	    assert.argumentTypes(selector, assert.type.string, scopeSelector, assert.type.string, hostSelector, assert.type.string);
	    if (isPresent(RegExpWrapper.firstMatch(_polyfillHostRe, selector))) {
	      var replaceBy = this.strictStyling ? ("[" + hostSelector + "]") : scopeSelector;
	      selector = StringWrapper.replace(selector, _polyfillHostNoCombinator, replaceBy);
	      return assert.returnType((StringWrapper.replaceAll(selector, _polyfillHostRe, replaceBy + ' ')), assert.type.string);
	    } else {
	      return assert.returnType((scopeSelector + ' ' + selector), assert.type.string);
	    }
	  },
	  _applyStrictSelectorScope: function(selector, scopeSelector) {
	    var isRe = RegExpWrapper.create('\\[is=([^\\]]*)\\]');
	    scopeSelector = StringWrapper.replaceAllMapped(scopeSelector, isRe, (function(m) {
	      return m[1];
	    }));
	    var splits = [' ', '>', '+', '~'],
	        scoped = selector,
	        attrName = '[' + scopeSelector + ']';
	    for (var i = 0; i < splits.length; i++) {
	      var sep = splits[i];
	      var parts = scoped.split(sep);
	      scoped = ListWrapper.map(parts, function(p) {
	        var t = StringWrapper.replaceAll(p.trim(), _polyfillHostRe, '');
	        if (t.length > 0 && !ListWrapper.contains(splits, t) && !StringWrapper.contains(t, attrName)) {
	          var re = RegExpWrapper.create('([^:]*)(:*)(.*)');
	          var m = RegExpWrapper.firstMatch(re, t);
	          if (isPresent(m)) {
	            p = m[1] + attrName + m[2] + m[3];
	          }
	        }
	        return p;
	      }).join(sep);
	    }
	    return assert.returnType((scoped), assert.type.string);
	  },
	  _insertPolyfillHostInCssText: function(selector) {
	    assert.argumentTypes(selector, assert.type.string);
	    selector = StringWrapper.replaceAll(selector, _colonHostContextRe, _polyfillHostContext);
	    selector = StringWrapper.replaceAll(selector, _colonHostRe, _polyfillHost);
	    return assert.returnType((selector), assert.type.string);
	  },
	  _propertiesFromRule: function(rule) {
	    var cssText = rule.style.cssText;
	    var attrRe = RegExpWrapper.create('[\'"]+|attr');
	    if (rule.style.content.length > 0 && !isPresent(RegExpWrapper.firstMatch(attrRe, rule.style.content))) {
	      var contentRe = RegExpWrapper.create('content:[^;]*;');
	      cssText = StringWrapper.replaceAll(cssText, contentRe, 'content: \'' + rule.style.content + '\';');
	    }
	    return assert.returnType((cssText), assert.type.string);
	  }
	}, {});
	Object.defineProperty(ShadowCss.prototype.shimStyle, "parameters", {get: function() {
	    return [[], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype.shimCssText, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._insertDirectives, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._insertPolyfillDirectivesInCssText, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._insertPolyfillRulesInCssText, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._scopeCssText, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._extractUnscopedRulesFromCssText, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._convertColonHost, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._convertColonHostContext, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._convertColonRule, "parameters", {get: function() {
	    return [[assert.type.string], [RegExp], [Function]];
	  }});
	Object.defineProperty(ShadowCss.prototype._colonHostContextPartReplacer, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._colonHostPartReplacer, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._convertShadowDOMSelectors, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._scopeRules, "parameters", {get: function() {
	    return [[], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._scopeSelector, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.boolean]];
	  }});
	Object.defineProperty(ShadowCss.prototype._selectorNeedsScoping, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._makeScopeMatcher, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._applySelectorScope, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._applySimpleSelectorScope, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._applyStrictSelectorScope, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(ShadowCss.prototype._insertPolyfillHostInCssText, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var _cssContentNextSelectorRe = RegExpWrapper.create('polyfill-next-selector[^}]*content:[\\s]*?[\'"](.*?)[\'"][;\\s]*}([^{]*?){', 'im');
	var _cssContentRuleRe = RegExpWrapper.create('(polyfill-rule)[^}]*(content:[\\s]*[\'"](.*?)[\'"])[;\\s]*[^}]*}', 'im');
	var _cssContentUnscopedRuleRe = RegExpWrapper.create('(polyfill-unscoped-rule)[^}]*(content:[\\s]*[\'"](.*?)[\'"])[;\\s]*[^}]*}', 'im');
	var _polyfillHost = '-shadowcsshost';
	var _polyfillHostContext = '-shadowcsscontext';
	var _parenSuffix = ')(?:\\((' + '(?:\\([^)(]*\\)|[^)(]*)+?' + ')\\))?([^,{]*)';
	var _cssColonHostRe = RegExpWrapper.create('(' + _polyfillHost + _parenSuffix, 'im');
	var _cssColonHostContextRe = RegExpWrapper.create('(' + _polyfillHostContext + _parenSuffix, 'im');
	var _polyfillHostNoCombinator = _polyfillHost + '-no-combinator';
	var _shadowDOMSelectorsRe = [RegExpWrapper.create('/shadow/'), RegExpWrapper.create('/shadow-deep/'), RegExpWrapper.create('::shadow'), RegExpWrapper.create('/deep/'), RegExpWrapper.create('::content')];
	var _selectorReSuffix = '([>\\s~+\[.,{:][\\s\\S]*)?$';
	var _polyfillHostRe = RegExpWrapper.create(_polyfillHost, 'im');
	var _colonHostRe = RegExpWrapper.create(':host', 'im');
	var _colonHostContextRe = RegExpWrapper.create(':host-context', 'im');
	function _cssTextToStyle(cssText) {
	  assert.argumentTypes(cssText, assert.type.string);
	  return DOM.createStyleElement(cssText);
	}
	Object.defineProperty(_cssTextToStyle, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	function _cssToRules(cssText) {
	  assert.argumentTypes(cssText, assert.type.string);
	  var style = _cssTextToStyle(cssText);
	  DOM.appendChild(DOM.defaultDoc().head, style);
	  var rules = [];
	  if (isPresent(style.sheet)) {
	    try {
	      rules = style.sheet.cssRules;
	    } catch (e) {}
	  } else {}
	  DOM.remove(style);
	  return rules;
	}
	Object.defineProperty(_cssToRules, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	function _withCssRules(cssText, callback) {
	  assert.argumentTypes(cssText, assert.type.string, callback, Function);
	  if (isBlank(callback))
	    return ;
	  var rules = _cssToRules(cssText);
	  callback(rules);
	}
	Object.defineProperty(_withCssRules, "parameters", {get: function() {
	    return [[assert.type.string], [Function]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/shadow_dom_emulation/shadow_css.map
	
	//# sourceMappingURL=./shadow_css.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  HammerGesturesPluginCommon: {get: function() {
	      return HammerGesturesPluginCommon;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/events/hammer_common";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_events_47_event_95_manager__,
	    $__angular2_47_src_47_facade_47_collection__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var EventManagerPlugin = ($__angular2_47_src_47_core_47_events_47_event_95_manager__ = __webpack_require__(64), $__angular2_47_src_47_core_47_events_47_event_95_manager__ && $__angular2_47_src_47_core_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_core_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_core_47_events_47_event_95_manager__}).EventManagerPlugin;
	var StringMapWrapper = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).StringMapWrapper;
	var _eventNames = {
	  'pan': true,
	  'panstart': true,
	  'panmove': true,
	  'panend': true,
	  'pancancel': true,
	  'panleft': true,
	  'panright': true,
	  'panup': true,
	  'pandown': true,
	  'pinch': true,
	  'pinchstart': true,
	  'pinchmove': true,
	  'pinchend': true,
	  'pinchcancel': true,
	  'pinchin': true,
	  'pinchout': true,
	  'press': true,
	  'pressup': true,
	  'rotate': true,
	  'rotatestart': true,
	  'rotatemove': true,
	  'rotateend': true,
	  'rotatecancel': true,
	  'swipe': true,
	  'swipeleft': true,
	  'swiperight': true,
	  'swipeup': true,
	  'swipedown': true,
	  'tap': true
	};
	var HammerGesturesPluginCommon = function HammerGesturesPluginCommon() {
	  $traceurRuntime.superConstructor($HammerGesturesPluginCommon).call(this);
	};
	var $HammerGesturesPluginCommon = HammerGesturesPluginCommon;
	($traceurRuntime.createClass)(HammerGesturesPluginCommon, {supports: function(eventName) {
	    assert.argumentTypes(eventName, assert.type.string);
	    eventName = eventName.toLowerCase();
	    return assert.returnType((StringMapWrapper.contains(_eventNames, eventName)), assert.type.boolean);
	  }}, {}, EventManagerPlugin);
	Object.defineProperty(HammerGesturesPluginCommon.prototype.supports, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/events/hammer_common.map
	
	//# sourceMappingURL=./hammer_common.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  CompileControl: {get: function() {
	      return CompileControl;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/compile_control";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var isBlank = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    ListWrapper = $__2.ListWrapper;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var CompileControl = function CompileControl(steps) {
	  this._steps = steps;
	  this._currentStepIndex = 0;
	  this._parent = null;
	  this._results = null;
	  this._additionalChildren = null;
	};
	($traceurRuntime.createClass)(CompileControl, {
	  internalProcess: function(results, startStepIndex, parent, current) {
	    assert.argumentTypes(results, assert.type.any, startStepIndex, assert.type.any, parent, CompileElement, current, CompileElement);
	    this._results = results;
	    var previousStepIndex = this._currentStepIndex;
	    var previousParent = this._parent;
	    for (var i = startStepIndex; i < this._steps.length; i++) {
	      var step = this._steps[i];
	      this._parent = parent;
	      this._currentStepIndex = i;
	      step.process(parent, current, this);
	      parent = this._parent;
	    }
	    ListWrapper.push(results, current);
	    this._currentStepIndex = previousStepIndex;
	    this._parent = previousParent;
	    var localAdditionalChildren = this._additionalChildren;
	    this._additionalChildren = null;
	    return localAdditionalChildren;
	  },
	  addParent: function(newElement) {
	    assert.argumentTypes(newElement, CompileElement);
	    this.internalProcess(this._results, this._currentStepIndex + 1, this._parent, newElement);
	    this._parent = newElement;
	  },
	  addChild: function(element) {
	    assert.argumentTypes(element, CompileElement);
	    if (isBlank(this._additionalChildren)) {
	      this._additionalChildren = ListWrapper.create();
	    }
	    ListWrapper.push(this._additionalChildren, element);
	  }
	}, {});
	Object.defineProperty(CompileControl.prototype.internalProcess, "parameters", {get: function() {
	    return [[], [], [CompileElement], [CompileElement]];
	  }});
	Object.defineProperty(CompileControl.prototype.addParent, "parameters", {get: function() {
	    return [[CompileElement]];
	  }});
	Object.defineProperty(CompileControl.prototype.addChild, "parameters", {get: function() {
	    return [[CompileElement]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/compile_control.map
	
	//# sourceMappingURL=./compile_control.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  PropertyBindingParser: {get: function() {
	      return PropertyBindingParser;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/property_binding_parser";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_change_95_detection__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__1.isPresent,
	    isBlank = $__1.isBlank,
	    RegExpWrapper = $__1.RegExpWrapper,
	    BaseException = $__1.BaseException;
	var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
	var $__3 = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
	    Parser = $__3.Parser,
	    AST = $__3.AST,
	    ExpressionWithSource = $__3.ExpressionWithSource;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = __webpack_require__(92), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
	var BIND_NAME_REGEXP = RegExpWrapper.create('^(?:(?:(bind)|(var)|(on))-(.+))|\\[([^\\]]+)\\]|\\(([^\\)]+)\\)|(#)(.+)');
	var PropertyBindingParser = function PropertyBindingParser(parser) {
	  assert.argumentTypes(parser, Parser);
	  $traceurRuntime.superConstructor($PropertyBindingParser).call(this);
	  this._parser = parser;
	};
	var $PropertyBindingParser = PropertyBindingParser;
	($traceurRuntime.createClass)(PropertyBindingParser, {
	  process: function(parent, current, control) {
	    var $__7 = this;
	    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
	    if (current.ignoreBindings) {
	      return ;
	    }
	    var attrs = current.attrs();
	    var desc = current.elementDescription;
	    MapWrapper.forEach(attrs, (function(attrValue, attrName) {
	      var bindParts = RegExpWrapper.firstMatch(BIND_NAME_REGEXP, attrName);
	      if (isPresent(bindParts)) {
	        if (isPresent(bindParts[1])) {
	          current.addPropertyBinding(bindParts[4], $__7._parseBinding(attrValue, desc));
	        } else if (isPresent(bindParts[2]) || isPresent(bindParts[7])) {
	          var identifier = (isPresent(bindParts[4]) && bindParts[4] !== '') ? bindParts[4] : bindParts[8];
	          var value = attrValue == '' ? '\$implicit' : attrValue;
	          current.addVariableBinding(identifier, value);
	        } else if (isPresent(bindParts[3])) {
	          current.addEventBinding(bindParts[4], $__7._parseAction(attrValue, desc));
	        } else if (isPresent(bindParts[5])) {
	          current.addPropertyBinding(bindParts[5], $__7._parseBinding(attrValue, desc));
	        } else if (isPresent(bindParts[6])) {
	          current.addEventBinding(bindParts[6], $__7._parseBinding(attrValue, desc));
	        }
	      } else {
	        var ast = $__7._parseInterpolation(attrValue, desc);
	        if (isPresent(ast)) {
	          current.addPropertyBinding(attrName, ast);
	        }
	      }
	    }));
	  },
	  _parseInterpolation: function(input, location) {
	    assert.argumentTypes(input, assert.type.string, location, assert.type.string);
	    return assert.returnType((this._parser.parseInterpolation(input, location)), AST);
	  },
	  _parseBinding: function(input, location) {
	    assert.argumentTypes(input, assert.type.string, location, assert.type.string);
	    return assert.returnType((this._parser.parseBinding(input, location)), AST);
	  },
	  _parseAction: function(input, location) {
	    assert.argumentTypes(input, assert.type.string, location, assert.type.string);
	    return assert.returnType((this._parser.parseAction(input, location)), AST);
	  }
	}, {}, CompileStep);
	Object.defineProperty(PropertyBindingParser, "parameters", {get: function() {
	    return [[Parser]];
	  }});
	Object.defineProperty(PropertyBindingParser.prototype.process, "parameters", {get: function() {
	    return [[CompileElement], [CompileElement], [CompileControl]];
	  }});
	Object.defineProperty(PropertyBindingParser.prototype._parseInterpolation, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(PropertyBindingParser.prototype._parseBinding, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(PropertyBindingParser.prototype._parseAction, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/property_binding_parser.map
	
	//# sourceMappingURL=./property_binding_parser.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  TextInterpolationParser: {get: function() {
	      return TextInterpolationParser;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/text_interpolation_parser";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_change_95_detection__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    RegExpWrapper = $__1.RegExpWrapper,
	    StringWrapper = $__1.StringWrapper,
	    isPresent = $__1.isPresent;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var Parser = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).Parser;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = __webpack_require__(92), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
	var TextInterpolationParser = function TextInterpolationParser(parser) {
	  assert.argumentTypes(parser, Parser);
	  $traceurRuntime.superConstructor($TextInterpolationParser).call(this);
	  this._parser = parser;
	};
	var $TextInterpolationParser = TextInterpolationParser;
	($traceurRuntime.createClass)(TextInterpolationParser, {
	  process: function(parent, current, control) {
	    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
	    if (!current.compileChildren || current.ignoreBindings) {
	      return ;
	    }
	    var element = current.element;
	    var childNodes = DOM.childNodes(DOM.templateAwareRoot(element));
	    for (var i = 0; i < childNodes.length; i++) {
	      var node = childNodes[i];
	      if (DOM.isTextNode(node)) {
	        this._parseTextNode(current, node, i);
	      }
	    }
	  },
	  _parseTextNode: function(pipelineElement, node, nodeIndex) {
	    var ast = this._parser.parseInterpolation(DOM.nodeValue(node), pipelineElement.elementDescription);
	    if (isPresent(ast)) {
	      DOM.setText(node, ' ');
	      pipelineElement.addTextNodeBinding(nodeIndex, ast);
	    }
	  }
	}, {}, CompileStep);
	Object.defineProperty(TextInterpolationParser, "parameters", {get: function() {
	    return [[Parser]];
	  }});
	Object.defineProperty(TextInterpolationParser.prototype.process, "parameters", {get: function() {
	    return [[CompileElement], [CompileElement], [CompileControl]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/text_interpolation_parser.map
	
	//# sourceMappingURL=./text_interpolation_parser.map

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  DirectiveParser: {get: function() {
	      return DirectiveParser;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/directive_parser";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_core_47_compiler_47_selector__,
	    $__angular2_47_src_47_core_47_compiler_47_selector__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
	    $__angular2_47_src_47_core_47_annotations_47_annotations__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__1.isPresent,
	    isBlank = $__1.isBlank,
	    BaseException = $__1.BaseException,
	    assertionsEnabled = $__1.assertionsEnabled,
	    RegExpWrapper = $__1.RegExpWrapper;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__2.List,
	    MapWrapper = $__2.MapWrapper,
	    StringMapWrapper = $__2.StringMapWrapper;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var SelectorMatcher = ($__angular2_47_src_47_core_47_compiler_47_selector__ = __webpack_require__(105), $__angular2_47_src_47_core_47_compiler_47_selector__ && $__angular2_47_src_47_core_47_compiler_47_selector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_selector__ || {default: $__angular2_47_src_47_core_47_compiler_47_selector__}).SelectorMatcher;
	var CssSelector = ($__angular2_47_src_47_core_47_compiler_47_selector__ = __webpack_require__(105), $__angular2_47_src_47_core_47_compiler_47_selector__ && $__angular2_47_src_47_core_47_compiler_47_selector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_selector__ || {default: $__angular2_47_src_47_core_47_compiler_47_selector__}).CssSelector;
	var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = __webpack_require__(74), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
	var $__7 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = __webpack_require__(25), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
	    Component = $__7.Component,
	    Viewport = $__7.Viewport;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = __webpack_require__(92), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
	var isSpecialProperty = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ = __webpack_require__(100), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__}).isSpecialProperty;
	;
	var PROPERTY_BINDING_REGEXP = RegExpWrapper.create('^ *([^\\s\\|]+)');
	var DirectiveParser = function DirectiveParser(directives) {
	  assert.argumentTypes(directives, assert.genericType(List, DirectiveMetadata));
	  $traceurRuntime.superConstructor($DirectiveParser).call(this);
	  var selector;
	  this._selectorMatcher = new SelectorMatcher();
	  for (var i = 0; i < directives.length; i++) {
	    var directiveMetadata = directives[i];
	    selector = CssSelector.parse(directiveMetadata.annotation.selector);
	    this._selectorMatcher.addSelectable(selector, directiveMetadata);
	  }
	};
	var $DirectiveParser = DirectiveParser;
	($traceurRuntime.createClass)(DirectiveParser, {process: function(parent, current, control) {
	    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
	    var attrs = current.attrs();
	    var classList = current.classList();
	    var cssSelector = new CssSelector();
	    cssSelector.setElement(DOM.nodeName(current.element));
	    for (var i = 0; i < classList.length; i++) {
	      cssSelector.addClassName(classList[i]);
	    }
	    MapWrapper.forEach(attrs, (function(attrValue, attrName) {
	      if (isBlank(current.propertyBindings) || isPresent(current.propertyBindings) && !MapWrapper.contains(current.propertyBindings, attrName)) {
	        cssSelector.addAttribute(attrName, attrValue);
	      }
	    }));
	    if (isPresent(current.propertyBindings)) {
	      MapWrapper.forEach(current.propertyBindings, (function(expression, prop) {
	        cssSelector.addAttribute(prop, expression.source);
	      }));
	    }
	    if (isPresent(current.variableBindings)) {
	      MapWrapper.forEach(current.variableBindings, (function(value, name) {
	        cssSelector.addAttribute(name, value);
	      }));
	    }
	    var isTemplateElement = DOM.isTemplateElement(current.element);
	    var matchedProperties;
	    this._selectorMatcher.match(cssSelector, (function(selector, directive) {
	      matchedProperties = updateMatchedProperties(matchedProperties, selector, directive);
	      checkDirectiveValidity(directive, current, isTemplateElement);
	      current.addDirective(directive);
	    }));
	    checkMissingDirectives(current, matchedProperties, isTemplateElement);
	  }}, {}, CompileStep);
	Object.defineProperty(DirectiveParser, "parameters", {get: function() {
	    return [[assert.genericType(List, DirectiveMetadata)]];
	  }});
	Object.defineProperty(DirectiveParser.prototype.process, "parameters", {get: function() {
	    return [[CompileElement], [CompileElement], [CompileControl]];
	  }});
	function updateMatchedProperties(matchedProperties, selector, directive) {
	  if (assertionsEnabled()) {
	    var attrs = selector.attrs;
	    if (!isPresent(matchedProperties)) {
	      matchedProperties = StringMapWrapper.create();
	    }
	    if (isPresent(attrs)) {
	      for (var idx = 0; idx < attrs.length; idx += 2) {
	        StringMapWrapper.set(matchedProperties, attrs[idx], true);
	      }
	    }
	    if (isPresent(directive.annotation) && isPresent(directive.annotation.bind)) {
	      var bindMap = directive.annotation.bind;
	      StringMapWrapper.forEach(bindMap, (function(value, key) {
	        var bindProp = RegExpWrapper.firstMatch(PROPERTY_BINDING_REGEXP, value);
	        if (isPresent(bindProp) && isPresent(bindProp[1])) {
	          StringMapWrapper.set(matchedProperties, bindProp[1], true);
	        }
	      }));
	    }
	  }
	  return matchedProperties;
	}
	function checkDirectiveValidity(directive, current, isTemplateElement) {
	  if (directive.annotation instanceof Viewport) {
	    if (!isTemplateElement) {
	      throw new BaseException("Viewport directives need to be placed on <template> elements or elements " + ("with template attribute - check " + current.elementDescription));
	    } else if (isPresent(current.viewportDirective)) {
	      throw new BaseException(("Only one viewport directive can be used per element - check " + current.elementDescription));
	    }
	  } else if (isTemplateElement) {
	    throw new BaseException(("Only template directives are allowed on template elements - check " + current.elementDescription));
	  } else if ((directive.annotation instanceof Component) && isPresent(current.componentDirective)) {
	    throw new BaseException(("Multiple component directives not allowed on the same element - check " + current.elementDescription));
	  }
	}
	function checkMissingDirectives(current, matchedProperties, isTemplateElement) {
	  if (assertionsEnabled()) {
	    var ppBindings = current.propertyBindings;
	    if (isPresent(ppBindings)) {
	      MapWrapper.forEach(ppBindings, (function(expression, prop) {
	        if (!DOM.hasProperty(current.element, prop) && !isSpecialProperty(prop)) {
	          if (!isPresent(matchedProperties) || !isPresent(StringMapWrapper.get(matchedProperties, prop))) {
	            throw new BaseException(("Missing directive to handle '" + prop + "' in " + current.elementDescription));
	          }
	        }
	      }));
	    }
	    if (isTemplateElement && !current.isViewRoot && !isPresent(current.viewportDirective)) {
	      throw new BaseException(("Missing directive to handle: " + current.elementDescription));
	    }
	  }
	}
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/directive_parser.map
	
	//# sourceMappingURL=./directive_parser.map

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ViewSplitter: {get: function() {
	      return ViewSplitter;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/view_splitter";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_change_95_detection__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isBlank = $__1.isBlank,
	    isPresent = $__1.isPresent,
	    BaseException = $__1.BaseException;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var $__3 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    MapWrapper = $__3.MapWrapper,
	    ListWrapper = $__3.ListWrapper;
	var Parser = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).Parser;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = __webpack_require__(92), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
	var StringWrapper = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).StringWrapper;
	var ViewSplitter = function ViewSplitter(parser) {
	  assert.argumentTypes(parser, Parser);
	  $traceurRuntime.superConstructor($ViewSplitter).call(this);
	  this._parser = parser;
	};
	var $ViewSplitter = ViewSplitter;
	($traceurRuntime.createClass)(ViewSplitter, {
	  process: function(parent, current, control) {
	    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
	    var attrs = current.attrs();
	    var templateBindings = MapWrapper.get(attrs, 'template');
	    var hasTemplateBinding = isPresent(templateBindings);
	    MapWrapper.forEach(attrs, (function(attrValue, attrName) {
	      if (StringWrapper.startsWith(attrName, '*')) {
	        var key = StringWrapper.substring(attrName, 1);
	        if (hasTemplateBinding) {
	          throw new BaseException("Only one template directive per element is allowed: " + (templateBindings + " and " + key + " cannot be used simultaneously ") + ("in " + current.elementDescription));
	        } else {
	          templateBindings = (attrValue.length == 0) ? key : key + ' ' + attrValue;
	          hasTemplateBinding = true;
	        }
	      }
	    }));
	    if (isBlank(parent)) {
	      current.isViewRoot = true;
	    } else {
	      if (DOM.isTemplateElement(current.element)) {
	        if (!current.isViewRoot) {
	          var viewRoot = new CompileElement(DOM.createTemplate(''));
	          var currentElement = current.element;
	          var viewRootElement = viewRoot.element;
	          this._moveChildNodes(DOM.content(currentElement), DOM.content(viewRootElement));
	          viewRoot.elementDescription = current.elementDescription;
	          viewRoot.isViewRoot = true;
	          control.addChild(viewRoot);
	        }
	      } else {
	        if (hasTemplateBinding) {
	          var newParent = new CompileElement(DOM.createTemplate(''));
	          newParent.elementDescription = current.elementDescription;
	          current.isViewRoot = true;
	          this._parseTemplateBindings(templateBindings, newParent);
	          this._addParentElement(current.element, newParent.element);
	          control.addParent(newParent);
	          DOM.remove(current.element);
	        }
	      }
	    }
	  },
	  _moveChildNodes: function(source, target) {
	    var next = DOM.firstChild(source);
	    while (isPresent(next)) {
	      DOM.appendChild(target, next);
	      next = DOM.firstChild(source);
	    }
	  },
	  _addParentElement: function(currentElement, newParentElement) {
	    DOM.insertBefore(currentElement, newParentElement);
	    DOM.appendChild(newParentElement, currentElement);
	  },
	  _parseTemplateBindings: function(templateBindings, compileElement) {
	    assert.argumentTypes(templateBindings, assert.type.string, compileElement, CompileElement);
	    var bindings = this._parser.parseTemplateBindings(templateBindings, compileElement.elementDescription);
	    for (var i = 0; i < bindings.length; i++) {
	      var binding = bindings[i];
	      if (binding.keyIsVar) {
	        compileElement.addVariableBinding(binding.key, binding.name);
	      } else if (isPresent(binding.expression)) {
	        compileElement.addPropertyBinding(binding.key, binding.expression);
	      } else {
	        DOM.setAttribute(compileElement.element, binding.key, '');
	      }
	    }
	  }
	}, {}, CompileStep);
	Object.defineProperty(ViewSplitter, "parameters", {get: function() {
	    return [[Parser]];
	  }});
	Object.defineProperty(ViewSplitter.prototype.process, "parameters", {get: function() {
	    return [[CompileElement], [CompileElement], [CompileControl]];
	  }});
	Object.defineProperty(ViewSplitter.prototype._parseTemplateBindings, "parameters", {get: function() {
	    return [[assert.type.string], [CompileElement]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/view_splitter.map
	
	//# sourceMappingURL=./view_splitter.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ElementBindingMarker: {get: function() {
	      return ElementBindingMarker;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/element_binding_marker";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var isPresent = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
	var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = __webpack_require__(92), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
	var NG_BINDING_CLASS = 'ng-binding';
	var ElementBindingMarker = function ElementBindingMarker() {
	  $traceurRuntime.superConstructor($ElementBindingMarker).apply(this, arguments);
	};
	var $ElementBindingMarker = ElementBindingMarker;
	($traceurRuntime.createClass)(ElementBindingMarker, {process: function(parent, current, control) {
	    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
	    if (current.ignoreBindings) {
	      return ;
	    }
	    var hasBindings = (isPresent(current.textNodeBindings) && MapWrapper.size(current.textNodeBindings) > 0) || (isPresent(current.propertyBindings) && MapWrapper.size(current.propertyBindings) > 0) || (isPresent(current.variableBindings) && MapWrapper.size(current.variableBindings) > 0) || (isPresent(current.eventBindings) && MapWrapper.size(current.eventBindings) > 0) || (isPresent(current.decoratorDirectives) && current.decoratorDirectives.length > 0) || isPresent(current.viewportDirective) || isPresent(current.componentDirective);
	    if (hasBindings) {
	      var element = current.element;
	      DOM.addClass(element, NG_BINDING_CLASS);
	      current.hasBindings = true;
	    }
	  }}, {}, CompileStep);
	Object.defineProperty(ElementBindingMarker.prototype.process, "parameters", {get: function() {
	    return [[CompileElement], [CompileElement], [CompileControl]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/element_binding_marker.map
	
	//# sourceMappingURL=./element_binding_marker.map

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ProtoViewBuilder: {get: function() {
	      return ProtoViewBuilder;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/proto_view_builder";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_core_47_compiler_47_view__,
	    $__angular2_47_change_95_detection__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__1.isPresent,
	    BaseException = $__1.BaseException;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    ListWrapper = $__2.ListWrapper,
	    MapWrapper = $__2.MapWrapper;
	var ProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = __webpack_require__(31), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).ProtoView;
	var ChangeDetection = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).ChangeDetection;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = __webpack_require__(92), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
	var ShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = __webpack_require__(61), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
	var ProtoViewBuilder = function ProtoViewBuilder(changeDetection, shadowDomStrategy) {
	  assert.argumentTypes(changeDetection, ChangeDetection, shadowDomStrategy, ShadowDomStrategy);
	  $traceurRuntime.superConstructor($ProtoViewBuilder).call(this);
	  this._shadowDomStrategy = shadowDomStrategy;
	  this.changeDetection = changeDetection;
	};
	var $ProtoViewBuilder = ProtoViewBuilder;
	($traceurRuntime.createClass)(ProtoViewBuilder, {process: function(parent, current, control) {
	    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
	    var inheritedProtoView = null;
	    if (current.isViewRoot) {
	      var protoChangeDetector = this.changeDetection.createProtoChangeDetector('dummy');
	      inheritedProtoView = new ProtoView(current.element, protoChangeDetector, this._shadowDomStrategy);
	      if (isPresent(parent)) {
	        if (isPresent(parent.inheritedElementBinder.nestedProtoView)) {
	          throw new BaseException('Only one nested view per element is allowed');
	        }
	        parent.inheritedElementBinder.nestedProtoView = inheritedProtoView;
	        if (isPresent(parent.variableBindings)) {
	          MapWrapper.forEach(parent.variableBindings, (function(mappedName, varName) {
	            inheritedProtoView.bindVariable(varName, mappedName);
	          }));
	        }
	      }
	    } else if (isPresent(parent)) {
	      inheritedProtoView = parent.inheritedProtoView;
	    }
	    if (isPresent(current.variableBindings)) {
	      MapWrapper.forEach(current.variableBindings, (function(mappedName, varName) {
	        MapWrapper.set(inheritedProtoView.protoContextLocals, mappedName, null);
	      }));
	    }
	    current.inheritedProtoView = inheritedProtoView;
	  }}, {}, CompileStep);
	Object.defineProperty(ProtoViewBuilder, "parameters", {get: function() {
	    return [[ChangeDetection], [ShadowDomStrategy]];
	  }});
	Object.defineProperty(ProtoViewBuilder.prototype.process, "parameters", {get: function() {
	    return [[CompileElement], [CompileElement], [CompileControl]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/proto_view_builder.map
	
	//# sourceMappingURL=./proto_view_builder.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ProtoElementInjectorBuilder: {get: function() {
	      return ProtoElementInjectorBuilder;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/proto_element_injector_builder";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__1.isPresent,
	    isBlank = $__1.isBlank;
	var $__2 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    ListWrapper = $__2.ListWrapper,
	    MapWrapper = $__2.MapWrapper;
	var $__3 = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = __webpack_require__(76), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}),
	    ProtoElementInjector = $__3.ProtoElementInjector,
	    ComponentKeyMetaData = $__3.ComponentKeyMetaData,
	    DirectiveBinding = $__3.DirectiveBinding;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = __webpack_require__(92), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
	var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = __webpack_require__(74), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
	var ProtoElementInjectorBuilder = function ProtoElementInjectorBuilder() {
	  $traceurRuntime.superConstructor($ProtoElementInjectorBuilder).apply(this, arguments);
	};
	var $ProtoElementInjectorBuilder = ProtoElementInjectorBuilder;
	($traceurRuntime.createClass)(ProtoElementInjectorBuilder, {
	  internalCreateProtoElementInjector: function(parent, index, directives, firstBindingIsComponent, distance) {
	    return new ProtoElementInjector(parent, index, directives, firstBindingIsComponent, distance);
	  },
	  process: function(parent, current, control) {
	    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
	    var distanceToParentInjector = this._getDistanceToParentInjector(parent, current);
	    var parentProtoElementInjector = this._getParentProtoElementInjector(parent, current);
	    var injectorBindings = ListWrapper.map(current.getAllDirectives(), this._createBinding);
	    if (injectorBindings.length > 0 || isPresent(current.variableBindings)) {
	      var protoView = current.inheritedProtoView;
	      var hasComponent = isPresent(current.componentDirective);
	      current.inheritedProtoElementInjector = this.internalCreateProtoElementInjector(parentProtoElementInjector, protoView.elementBinders.length, injectorBindings, hasComponent, distanceToParentInjector);
	      current.distanceToParentInjector = 0;
	      if (isPresent(current.variableBindings) && !isPresent(current.viewportDirective)) {
	        current.inheritedProtoElementInjector.exportComponent = hasComponent;
	        current.inheritedProtoElementInjector.exportElement = !hasComponent;
	        var exportImplicitName = MapWrapper.get(current.variableBindings, '\$implicit');
	        if (isPresent(exportImplicitName)) {
	          current.inheritedProtoElementInjector.exportImplicitName = exportImplicitName;
	        }
	      }
	    } else {
	      current.inheritedProtoElementInjector = parentProtoElementInjector;
	      current.distanceToParentInjector = distanceToParentInjector;
	    }
	  },
	  _getDistanceToParentInjector: function(parent, current) {
	    return isPresent(parent) ? parent.distanceToParentInjector + 1 : 0;
	  },
	  _getParentProtoElementInjector: function(parent, current) {
	    if (isPresent(parent) && !current.isViewRoot) {
	      return parent.inheritedProtoElementInjector;
	    }
	    return null;
	  },
	  _createBinding: function(d) {
	    assert.argumentTypes(d, DirectiveMetadata);
	    return assert.returnType((DirectiveBinding.createFromType(d.type, d.annotation)), DirectiveBinding);
	  }
	}, {}, CompileStep);
	Object.defineProperty(ProtoElementInjectorBuilder.prototype.process, "parameters", {get: function() {
	    return [[CompileElement], [CompileElement], [CompileControl]];
	  }});
	Object.defineProperty(ProtoElementInjectorBuilder.prototype._createBinding, "parameters", {get: function() {
	    return [[DirectiveMetadata]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/proto_element_injector_builder.map
	
	//# sourceMappingURL=./proto_element_injector_builder.map

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  isSpecialProperty: {get: function() {
	      return isSpecialProperty;
	    }},
	  ElementBinderBuilder: {get: function() {
	      return ElementBinderBuilder;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/element_binder_builder";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_reflection_47_reflection__,
	    $__angular2_47_change_95_detection__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    int = $__1.int,
	    isPresent = $__1.isPresent,
	    isBlank = $__1.isBlank,
	    Type = $__1.Type,
	    BaseException = $__1.BaseException,
	    StringWrapper = $__1.StringWrapper,
	    RegExpWrapper = $__1.RegExpWrapper,
	    isString = $__1.isString,
	    stringify = $__1.stringify;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var $__3 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    ListWrapper = $__3.ListWrapper,
	    List = $__3.List,
	    MapWrapper = $__3.MapWrapper,
	    StringMapWrapper = $__3.StringMapWrapper;
	var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = __webpack_require__(51), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
	var $__5 = ($__angular2_47_change_95_detection__ = __webpack_require__(6), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
	    Parser = $__5.Parser,
	    ProtoChangeDetector = $__5.ProtoChangeDetector;
	var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = __webpack_require__(74), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = __webpack_require__(92), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
	var DOT_REGEXP = RegExpWrapper.create('\\.');
	var ARIA_PREFIX = 'aria-';
	var ariaSettersCache = StringMapWrapper.create();
	function ariaSetterFactory(attrName) {
	  assert.argumentTypes(attrName, assert.type.string);
	  var setterFn = StringMapWrapper.get(ariaSettersCache, attrName);
	  if (isBlank(setterFn)) {
	    setterFn = function(element, value) {
	      if (isPresent(value)) {
	        DOM.setAttribute(element, attrName, stringify(value));
	      } else {
	        DOM.removeAttribute(element, attrName);
	      }
	    };
	    StringMapWrapper.set(ariaSettersCache, attrName, setterFn);
	  }
	  return setterFn;
	}
	Object.defineProperty(ariaSetterFactory, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var CLASS_ATTR = 'class';
	var CLASS_PREFIX = 'class.';
	var classSettersCache = StringMapWrapper.create();
	function classSetterFactory(className) {
	  assert.argumentTypes(className, assert.type.string);
	  var setterFn = StringMapWrapper.get(classSettersCache, className);
	  if (isBlank(setterFn)) {
	    setterFn = function(element, value) {
	      if (value) {
	        DOM.addClass(element, className);
	      } else {
	        DOM.removeClass(element, className);
	      }
	    };
	    StringMapWrapper.set(classSettersCache, className, setterFn);
	  }
	  return setterFn;
	}
	Object.defineProperty(classSetterFactory, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var STYLE_ATTR = 'style';
	var STYLE_PREFIX = 'style.';
	var styleSettersCache = StringMapWrapper.create();
	function styleSetterFactory(styleName, stylesuffix) {
	  assert.argumentTypes(styleName, assert.type.string, stylesuffix, assert.type.string);
	  var cacheKey = styleName + stylesuffix;
	  var setterFn = StringMapWrapper.get(styleSettersCache, cacheKey);
	  if (isBlank(setterFn)) {
	    setterFn = function(element, value) {
	      var valAsStr;
	      if (isPresent(value)) {
	        valAsStr = stringify(value);
	        DOM.setStyle(element, styleName, valAsStr + stylesuffix);
	      } else {
	        DOM.removeStyle(element, styleName);
	      }
	    };
	    StringMapWrapper.set(classSettersCache, cacheKey, setterFn);
	  }
	  return setterFn;
	}
	Object.defineProperty(styleSetterFactory, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	var ROLE_ATTR = 'role';
	function roleSetter(element, value) {
	  if (isString(value)) {
	    DOM.setAttribute(element, ROLE_ATTR, value);
	  } else {
	    DOM.removeAttribute(element, ROLE_ATTR);
	    if (isPresent(value)) {
	      throw new BaseException("Invalid role attribute, only string values are allowed, got '" + stringify(value) + "'");
	    }
	  }
	}
	function isSpecialProperty(propName) {
	  assert.argumentTypes(propName, assert.type.string);
	  return StringWrapper.startsWith(propName, ARIA_PREFIX) || StringWrapper.startsWith(propName, CLASS_PREFIX) || StringWrapper.startsWith(propName, STYLE_PREFIX) || StringMapWrapper.contains(DOM.attrToPropMap, propName);
	}
	Object.defineProperty(isSpecialProperty, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var ElementBinderBuilder = function ElementBinderBuilder(parser) {
	  assert.argumentTypes(parser, Parser);
	  $traceurRuntime.superConstructor($ElementBinderBuilder).call(this);
	  this._parser = parser;
	};
	var $ElementBinderBuilder = ElementBinderBuilder;
	($traceurRuntime.createClass)(ElementBinderBuilder, {
	  process: function(parent, current, control) {
	    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
	    var elementBinder = null;
	    if (current.hasBindings) {
	      var protoView = current.inheritedProtoView;
	      var protoInjectorWasBuilt = isBlank(parent) ? true : current.inheritedProtoElementInjector !== parent.inheritedProtoElementInjector;
	      var currentProtoElementInjector = protoInjectorWasBuilt ? current.inheritedProtoElementInjector : null;
	      elementBinder = protoView.bindElement(currentProtoElementInjector, current.componentDirective, current.viewportDirective);
	      if (isPresent(current.textNodeBindings)) {
	        this._bindTextNodes(protoView, current);
	      }
	      if (isPresent(current.propertyBindings)) {
	        this._bindElementProperties(protoView, current);
	      }
	      if (isPresent(current.eventBindings)) {
	        this._bindEvents(protoView, current);
	      }
	      this._bindDirectiveProperties(current.getAllDirectives(), current);
	    } else if (isPresent(parent)) {
	      elementBinder = parent.inheritedElementBinder;
	    }
	    current.inheritedElementBinder = elementBinder;
	  },
	  _bindTextNodes: function(protoView, compileElement) {
	    MapWrapper.forEach(compileElement.textNodeBindings, (function(expression, indexInParent) {
	      protoView.bindTextNode(indexInParent, expression);
	    }));
	  },
	  _bindElementProperties: function(protoView, compileElement) {
	    var $__10 = this;
	    MapWrapper.forEach(compileElement.propertyBindings, (function(expression, property) {
	      var setterFn,
	          styleParts,
	          styleSuffix;
	      if (StringWrapper.startsWith(property, ARIA_PREFIX)) {
	        setterFn = ariaSetterFactory(property);
	      } else if (StringWrapper.equals(property, ROLE_ATTR)) {
	        setterFn = roleSetter;
	      } else if (StringWrapper.startsWith(property, CLASS_PREFIX)) {
	        setterFn = classSetterFactory(StringWrapper.substring(property, CLASS_PREFIX.length));
	      } else if (StringWrapper.startsWith(property, STYLE_PREFIX)) {
	        styleParts = StringWrapper.split(property, DOT_REGEXP);
	        styleSuffix = styleParts.length > 2 ? ListWrapper.get(styleParts, 2) : '';
	        setterFn = styleSetterFactory(ListWrapper.get(styleParts, 1), styleSuffix);
	      } else {
	        property = $__10._resolvePropertyName(property);
	        if (DOM.hasProperty(compileElement.element, property) || StringWrapper.equals(property, 'innerHtml')) {
	          setterFn = reflector.setter(property);
	        }
	      }
	      if (isPresent(setterFn)) {
	        protoView.bindElementProperty(expression.ast, property, setterFn);
	      }
	    }));
	  },
	  _bindEvents: function(protoView, compileElement) {
	    MapWrapper.forEach(compileElement.eventBindings, (function(expression, eventName) {
	      protoView.bindEvent(eventName, expression);
	    }));
	  },
	  _bindDirectiveProperties: function(directives, compileElement) {
	    var $__10 = this;
	    assert.argumentTypes(directives, assert.genericType(List, DirectiveMetadata), compileElement, CompileElement);
	    var protoView = compileElement.inheritedProtoView;
	    for (var directiveIndex = 0; directiveIndex < directives.length; directiveIndex++) {
	      var directive = ListWrapper.get(directives, directiveIndex);
	      var annotation = directive.annotation;
	      if (isBlank(annotation.bind))
	        continue;
	      StringMapWrapper.forEach(annotation.bind, (function(bindConfig, dirProp) {
	        var bindConfigParts = $__10._splitBindConfig(bindConfig);
	        var elProp = bindConfigParts[0];
	        var pipes = ListWrapper.slice(bindConfigParts, 1, bindConfigParts.length);
	        var bindingAst = isPresent(compileElement.propertyBindings) ? MapWrapper.get(compileElement.propertyBindings, elProp) : null;
	        if (isBlank(bindingAst)) {
	          var attributeValue = MapWrapper.get(compileElement.attrs(), elProp);
	          if (isPresent(attributeValue)) {
	            bindingAst = $__10._parser.wrapLiteralPrimitive(attributeValue, compileElement.elementDescription);
	          }
	        }
	        if (isPresent(bindingAst)) {
	          var fullExpAstWithBindPipes = $__10._parser.addPipes(bindingAst, pipes);
	          protoView.bindDirectiveProperty(directiveIndex, fullExpAstWithBindPipes, dirProp, reflector.setter(dirProp));
	        }
	      }));
	    }
	  },
	  _splitBindConfig: function(bindConfig) {
	    var parts = StringWrapper.split(bindConfig, RegExpWrapper.create("\\|"));
	    return ListWrapper.map(parts, (function(s) {
	      return s.trim();
	    }));
	  },
	  _resolvePropertyName: function(attrName) {
	    assert.argumentTypes(attrName, assert.type.string);
	    var mappedPropName = StringMapWrapper.get(DOM.attrToPropMap, attrName);
	    return isPresent(mappedPropName) ? mappedPropName : attrName;
	  }
	}, {}, CompileStep);
	Object.defineProperty(ElementBinderBuilder, "parameters", {get: function() {
	    return [[Parser]];
	  }});
	Object.defineProperty(ElementBinderBuilder.prototype.process, "parameters", {get: function() {
	    return [[CompileElement], [CompileElement], [CompileControl]];
	  }});
	Object.defineProperty(ElementBinderBuilder.prototype._bindDirectiveProperties, "parameters", {get: function() {
	    return [[assert.genericType(List, DirectiveMetadata)], [CompileElement]];
	  }});
	Object.defineProperty(ElementBinderBuilder.prototype._splitBindConfig, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(ElementBinderBuilder.prototype._resolvePropertyName, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/element_binder_builder.map
	
	//# sourceMappingURL=./element_binder_builder.map

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ResolveCss: {get: function() {
	      return ResolveCss;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/resolve_css";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
	    $__angular2_47_src_47_dom_47_dom_95_adapter__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_facade_47_async__,
	    $__angular2_47_src_47_facade_47_collection__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = __webpack_require__(92), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
	var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = __webpack_require__(74), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
	var ShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = __webpack_require__(61), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
	var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = __webpack_require__(54), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
	var Type = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).Type;
	var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = __webpack_require__(58), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
	var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
	var ResolveCss = function ResolveCss(cmpMetadata, strategy, templateUrl) {
	  assert.argumentTypes(cmpMetadata, DirectiveMetadata, strategy, ShadowDomStrategy, templateUrl, assert.type.string);
	  $traceurRuntime.superConstructor($ResolveCss).call(this);
	  this._strategy = strategy;
	  this._component = cmpMetadata.type;
	  this._templateUrl = templateUrl;
	};
	var $ResolveCss = ResolveCss;
	($traceurRuntime.createClass)(ResolveCss, {process: function(parent, current, control) {
	    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
	    if (DOM.tagName(current.element) == 'STYLE') {
	      current.ignoreBindings = true;
	      var styleEl = current.element;
	      var css = DOM.getText(styleEl);
	      css = this._strategy.transformStyleText(css, this._templateUrl, this._component);
	      if (PromiseWrapper.isPromise(css)) {
	        ListWrapper.push(parent.inheritedProtoView.stylePromises, css);
	        DOM.setText(styleEl, '');
	        css.then((function(css) {
	          DOM.setText(styleEl, css);
	        }));
	      } else {
	        DOM.setText(styleEl, css);
	      }
	      this._strategy.handleStyleElement(styleEl);
	    }
	  }}, {}, CompileStep);
	Object.defineProperty(ResolveCss, "parameters", {get: function() {
	    return [[DirectiveMetadata], [ShadowDomStrategy], [assert.type.string]];
	  }});
	Object.defineProperty(ResolveCss.prototype.process, "parameters", {get: function() {
	    return [[CompileElement], [CompileElement], [CompileControl]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/resolve_css.map
	
	//# sourceMappingURL=./resolve_css.map

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  ShimShadowDom: {get: function() {
	      return ShimShadowDom;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/pipeline/shim_shadow_dom";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
	    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
	    $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
	    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = __webpack_require__(75), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
	var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = __webpack_require__(72), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
	var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = __webpack_require__(92), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
	var $__4 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__4.isPresent,
	    Type = $__4.Type;
	var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = __webpack_require__(74), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
	var ShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = __webpack_require__(61), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
	var ShimShadowDom = function ShimShadowDom(cmpMetadata, strategy) {
	  assert.argumentTypes(cmpMetadata, DirectiveMetadata, strategy, ShadowDomStrategy);
	  $traceurRuntime.superConstructor($ShimShadowDom).call(this);
	  this._strategy = strategy;
	  this._component = cmpMetadata.type;
	};
	var $ShimShadowDom = ShimShadowDom;
	($traceurRuntime.createClass)(ShimShadowDom, {process: function(parent, current, control) {
	    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
	    if (current.ignoreBindings) {
	      return ;
	    }
	    this._strategy.shimContentElement(this._component, current.element);
	    var host = current.componentDirective;
	    if (isPresent(host)) {
	      this._strategy.shimHostElement(host.type, current.element);
	    }
	  }}, {}, CompileStep);
	Object.defineProperty(ShimShadowDom, "parameters", {get: function() {
	    return [[DirectiveMetadata], [ShadowDomStrategy]];
	  }});
	Object.defineProperty(ShimShadowDom.prototype.process, "parameters", {get: function() {
	    return [[CompileElement], [CompileElement], [CompileControl]];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/pipeline/shim_shadow_dom.map
	
	//# sourceMappingURL=./shim_shadow_dom.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  Math: {get: function() {
	      return Math;
	    }},
	  NaN: {get: function() {
	      return NaN;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/facade/math";
	var $__angular2_47_src_47_facade_47_lang__;
	var global = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).global;
	var Math = global.Math;
	var NaN = global.NaN;
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/facade/math.map
	
	//# sourceMappingURL=./math.map

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  EventEmitter: {get: function() {
	      return EventEmitter;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/annotations/events";
	var $__angular2_47_src_47_facade_47_lang__,
	    $__angular2_47_di__;
	var CONST = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).CONST;
	var DependencyAnnotation = ($__angular2_47_di__ = __webpack_require__(52), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).DependencyAnnotation;
	var EventEmitter = function EventEmitter(eventName) {
	  $traceurRuntime.superConstructor($EventEmitter).call(this);
	  this.eventName = eventName;
	};
	var $EventEmitter = EventEmitter;
	($traceurRuntime.createClass)(EventEmitter, {}, {}, DependencyAnnotation);
	Object.defineProperty(EventEmitter, "annotations", {get: function() {
	    return [new CONST()];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/annotations/events.map
	
	//# sourceMappingURL=./events.map

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(module.exports, {
	  CssSelector: {get: function() {
	      return CssSelector;
	    }},
	  SelectorMatcher: {get: function() {
	      return SelectorMatcher;
	    }},
	  __esModule: {value: true}
	});
	var __moduleName = "angular2/src/core/compiler/selector";
	var $__rtts_95_assert_47_rtts_95_assert__,
	    $__angular2_47_src_47_facade_47_collection__,
	    $__angular2_47_src_47_facade_47_lang__;
	var assert = ($__rtts_95_assert_47_rtts_95_assert__ = __webpack_require__(43), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
	var $__1 = ($__angular2_47_src_47_facade_47_collection__ = __webpack_require__(45), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
	    List = $__1.List,
	    Map = $__1.Map,
	    ListWrapper = $__1.ListWrapper,
	    MapWrapper = $__1.MapWrapper;
	var $__2 = ($__angular2_47_src_47_facade_47_lang__ = __webpack_require__(46), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
	    isPresent = $__2.isPresent,
	    isBlank = $__2.isBlank,
	    RegExpWrapper = $__2.RegExpWrapper,
	    RegExpMatcherWrapper = $__2.RegExpMatcherWrapper,
	    StringWrapper = $__2.StringWrapper;
	var _EMPTY_ATTR_VALUE = '';
	var _SELECTOR_REGEXP = RegExpWrapper.create('^([-\\w]+)|' + '(?:\\.([-\\w]+))|' + '(?:\\[([-\\w*]+)(?:=([^\\]]*))?\\])');
	var CssSelector = function CssSelector() {
	  this.element = null;
	  this.classNames = ListWrapper.create();
	  this.attrs = ListWrapper.create();
	};
	var $CssSelector = CssSelector;
	($traceurRuntime.createClass)(CssSelector, {
	  setElement: function() {
	    var element = arguments[0] !== (void 0) ? arguments[0] : null;
	    assert.argumentTypes(element, assert.type.string);
	    if (isPresent(element)) {
	      element = element.toLowerCase();
	    }
	    this.element = element;
	  },
	  addAttribute: function(name) {
	    var value = arguments[1] !== (void 0) ? arguments[1] : _EMPTY_ATTR_VALUE;
	    assert.argumentTypes(name, assert.type.string, value, assert.type.string);
	    ListWrapper.push(this.attrs, name.toLowerCase());
	    if (isPresent(value)) {
	      value = value.toLowerCase();
	    } else {
	      value = _EMPTY_ATTR_VALUE;
	    }
	    ListWrapper.push(this.attrs, value);
	  },
	  addClassName: function(name) {
	    assert.argumentTypes(name, assert.type.string);
	    ListWrapper.push(this.classNames, name.toLowerCase());
	  },
	  toString: function() {
	    var res = '';
	    if (isPresent(this.element)) {
	      res += this.element;
	    }
	    if (isPresent(this.classNames)) {
	      for (var i = 0; i < this.classNames.length; i++) {
	        res += '.' + this.classNames[i];
	      }
	    }
	    if (isPresent(this.attrs)) {
	      for (var i = 0; i < this.attrs.length; ) {
	        var attrName = this.attrs[i++];
	        var attrValue = this.attrs[i++];
	        res += '[' + attrName;
	        if (attrValue.length > 0) {
	          res += '=' + attrValue;
	        }
	        res += ']';
	      }
	    }
	    return assert.returnType((res), assert.type.string);
	  }
	}, {parse: function(selector) {
	    assert.argumentTypes(selector, assert.type.string);
	    var cssSelector = new $CssSelector();
	    var matcher = RegExpWrapper.matcher(_SELECTOR_REGEXP, selector);
	    var match;
	    while (isPresent(match = RegExpMatcherWrapper.next(matcher))) {
	      if (isPresent(match[1])) {
	        cssSelector.setElement(match[1]);
	      }
	      if (isPresent(match[2])) {
	        cssSelector.addClassName(match[2]);
	      }
	      if (isPresent(match[3])) {
	        cssSelector.addAttribute(match[3], match[4]);
	      }
	    }
	    return assert.returnType((cssSelector), $CssSelector);
	  }});
	Object.defineProperty(CssSelector.parse, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(CssSelector.prototype.setElement, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	Object.defineProperty(CssSelector.prototype.addAttribute, "parameters", {get: function() {
	    return [[assert.type.string], [assert.type.string]];
	  }});
	Object.defineProperty(CssSelector.prototype.addClassName, "parameters", {get: function() {
	    return [[assert.type.string]];
	  }});
	var SelectorMatcher = function SelectorMatcher() {
	  this._elementMap = MapWrapper.create();
	  this._elementPartialMap = MapWrapper.create();
	  this._classMap = MapWrapper.create();
	  this._classPartialMap = MapWrapper.create();
	  this._attrValueMap = MapWrapper.create();
	  this._attrValuePartialMap = MapWrapper.create();
	};
	var $SelectorMatcher = SelectorMatcher;
	($traceurRuntime.createClass)(SelectorMatcher, {
	  addSelectable: function(cssSelector, callbackCtxt) {
	    assert.argumentTypes(cssSelector, CssSelector, callbackCtxt, assert.type.any);
	    var matcher = this;
	    var element = cssSelector.element;
	    var classNames = cssSelector.classNames;
	    var attrs = cssSelector.attrs;
	    var selectable = new SelectorContext(cssSelector, callbackCtxt);
	    if (isPresent(element)) {
	      var isTerminal = attrs.length === 0 && classNames.length === 0;
	      if (isTerminal) {
	        this._addTerminal(matcher._elementMap, element, selectable);
	      } else {
	        matcher = this._addPartial(matcher._elementPartialMap, element);
	      }
	    }
	    if (isPresent(classNames)) {
	      for (var index = 0; index < classNames.length; index++) {
	        var isTerminal = attrs.length === 0 && index === classNames.length - 1;
	        var className = classNames[index];
	        if (isTerminal) {
	          this._addTerminal(matcher._classMap, className, selectable);
	        } else {
	          matcher = this._addPartial(matcher._classPartialMap, className);
	        }
	      }
	    }
	    if (isPresent(attrs)) {
	      for (var index = 0; index < attrs.length; ) {
	        var isTerminal = index === attrs.length - 2;
	        var attrName = attrs[index++];
	        var attrValue = attrs[index++];
	        var map = isTerminal ? matcher._attrValueMap : matcher._attrValuePartialMap;
	        var valuesMap = MapWrapper.get(map, attrName);
	        if (isBlank(valuesMap)) {
	          valuesMap = MapWrapper.create();
	          MapWrapper.set(map, attrName, valuesMap);
	        }
	        if (isTerminal) {
	          this._addTerminal(valuesMap, attrValue, selectable);
	        } else {
	          matcher = this._addPartial(valuesMap, attrValue);
	        }
	      }
	    }
	  },
	  _addTerminal: function(map, name, selectable) {
	    assert.argumentTypes(map, assert.genericType(Map, assert.type.string, assert.type.string), name, assert.type.string, selectable, assert.type.any);
	    var terminalList = MapWrapper.get(map, name);
	    if (isBlank(terminalList)) {
	      terminalList = ListWrapper.create();
	      MapWrapper.set(map, name, terminalList);
	    }
	    ListWrapper.push(terminalList, selectable);
	  },
	  _addPartial: function(map, name) {
	    assert.argumentTypes(map, assert.genericType(Map, assert.type.string, assert.type.string), name, assert.type.string);
	    var matcher = MapWrapper.get(map, name);
	    if (isBlank(matcher)) {
	      matcher = new $SelectorMatcher();
	      MapWrapper.set(map, name, matcher);
	    }
	    return matcher;
	  },
	  match: function(cssSelector, matchedCallback) {
	    assert.argumentTypes(cssSelector, CssSelector, matchedCallback, Function);
	    var element = cssSelector.element;
	    var classNames = cssSelector.classNames;
	    var attrs = cssSelector.attrs;
	    this._matchTerminal(this._elementMap, element, matchedCallback);
	    this._matchPartial(this._elementPartialMap, element, cssSelector, matchedCallback);
	    if (isPresent(classNames)) {
	      for (var index = 0; index < classNames.length; index++) {
	        var className = classNames[index];
	        this._matchTerminal(this._classMap, className, matchedCallback);
	        this._matchPartial(this._classPartialMap, className, cssSelector, matchedCallback);
	      }
	    }
	    if (isPresent(attrs)) {
	      for (var index = 0; index < attrs.length; ) {
	        var attrName = attrs[index++];
	        var attrValue = attrs[index++];
	        var valuesMap = MapWrapper.get(this._attrValueMap, attrName);
	        if (!StringWrapper.equals(attrValue, _EMPTY_ATTR_VALUE)) {
	          this._matchTerminal(valuesMap, _EMPTY_ATTR_VALUE, matchedCallback);
	        }
	        this._matchTerminal(valuesMap, attrValue, matchedCallback);
	        valuesMap = MapWrapper.get(this._attrValuePartialMap, attrName);
	        this._matchPartial(valuesMap, attrValue, cssSelector, matchedCallback);
	      }
	    }
	  },
	  _matchTerminal: function() {
	    var map = arguments[0] !== (void 0) ? arguments[0] : null;
	    var name = arguments[1];
	    var matchedCallback = arguments[2];
	    assert.argumentTypes(map, assert.genericType(Map, assert.type.string, assert.type.string), name, assert.type.any, matchedCallback, assert.type.any);
	    if (isBlank(map) || isBlank(name)) {
	      return ;
	    }
	    var selectables = MapWrapper.get(map, name);
	    if (isBlank(selectables)) {
	      return ;
	    }
	    var selectable;
	    for (var index = 0; index < selectables.length; index++) {
	      selectable = selectables[index];
	      matchedCallback(selectable.selector, selectable.cbContext);
	    }
	  },
	  _matchPartial: function() {
	    var map = arguments[0] !== (void 0) ? arguments[0] : null;
	    var name = arguments[1];
	    var cssSelector = arguments[2];
	    var matchedCallback = arguments[3];
	    assert.argumentTypes(map, assert.genericType(Map, assert.type.string, assert.type.string), name, assert.type.any, cssSelector, assert.type.any, matchedCallback, assert.type.any);
	    if (isBlank(map) || isBlank(name)) {
	      return ;
	    }
	    var nestedSelector = MapWrapper.get(map, name);
	    if (isBlank(nestedSelector)) {
	      return ;
	    }
	    nestedSelector.match(cssSelector, matchedCallback);
	  }
	}, {});
	Object.defineProperty(SelectorMatcher.prototype.addSelectable, "parameters", {get: function() {
	    return [[CssSelector], []];
	  }});
	Object.defineProperty(SelectorMatcher.prototype._addTerminal, "parameters", {get: function() {
	    return [[assert.genericType(Map, assert.type.string, assert.type.string)], [assert.type.string], []];
	  }});
	Object.defineProperty(SelectorMatcher.prototype._addPartial, "parameters", {get: function() {
	    return [[assert.genericType(Map, assert.type.string, assert.type.string)], [assert.type.string]];
	  }});
	Object.defineProperty(SelectorMatcher.prototype.match, "parameters", {get: function() {
	    return [[CssSelector], [Function]];
	  }});
	Object.defineProperty(SelectorMatcher.prototype._matchTerminal, "parameters", {get: function() {
	    return [[assert.genericType(Map, assert.type.string, assert.type.string)], [], []];
	  }});
	Object.defineProperty(SelectorMatcher.prototype._matchPartial, "parameters", {get: function() {
	    return [[assert.genericType(Map, assert.type.string, assert.type.string)], [], [], []];
	  }});
	var SelectorContext = function SelectorContext(selector, cbContext) {
	  assert.argumentTypes(selector, CssSelector, cbContext, assert.type.any);
	  this.selector = selector;
	  this.cbContext = cbContext;
	};
	($traceurRuntime.createClass)(SelectorContext, {}, {});
	Object.defineProperty(SelectorContext, "parameters", {get: function() {
	    return [[CssSelector], []];
	  }});
	
	//# sourceMappingURL=/Users/crossj/Projects/angular/modules/angular2/src/core/compiler/selector.map
	
	//# sourceMappingURL=./selector.map

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angulartwo.js.map