// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"83pZH":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "01f4bf16d2682c49";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"Ag9pj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _pixi = require("./pixi");
var _tJpg = require("./t.jpg");
var _tJpgDefault = parcelHelpers.interopDefault(_tJpg);
const app = new _pixi.Application({
    backgroundColor: 1087931
});
document.body.appendChild(app.view);
const container = new _pixi.Container();
app.stage.addChild(container);
const texture = _pixi.Texture.from('t');
for(let i = 0; i < 25; i++){
    const bunny = new _pixi.Sprite(texture);
    bunny.x = i % 5 * 30;
    bunny.y = Math.floor(i / 5) * 30;
    bunny.rotation = Math.random() * (Math.PI * 2);
    container.addChild(bunny);
}
const brt = new _pixi.BaseRenderTexture(300, 300, _pixi.SCALE_MODES.LINEAR, 1);
const rt = new _pixi.RenderTexture(brt);
container.y = 60;
app.ticker.add(()=>{
    app.renderer.render(container, rt);
});

},{"./pixi":"5Y89Q","./t.jpg":"5P4ky","@parcel/transformer-js/src/esmodule-helpers.js":"3Hply"}],"5Y89Q":[function(require,module,exports) {
var global = arguments[3];
/*!
 * pixi.js - v6.1.3
 * Compiled Mon, 13 Sep 2021 15:29:31 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ var PIXI = function(t) {
    var e = setTimeout;
    function r(t1) {
        return Boolean(t1 && (void 0) !== t1.length);
    }
    function i2() {
    }
    function n(t1) {
        if (!(this instanceof n)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t1) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(t1, this);
    }
    function o1(t1, e1) {
        for(; 3 === t1._state;)t1 = t1._value;
        0 !== t1._state ? (t1._handled = !0, n._immediateFn(function() {
            var r1 = 1 === t1._state ? e1.onFulfilled : e1.onRejected;
            if (null !== r1) {
                var i1;
                try {
                    i1 = r1(t1._value);
                } catch (t2) {
                    return void a35(e1.promise, t2);
                }
                s(e1.promise, i1);
            } else (1 === t1._state ? s : a35)(e1.promise, t1._value);
        })) : t1._deferreds.push(e1);
    }
    function s(t1, e1) {
        try {
            if (e1 === t1) throw new TypeError("A promise cannot be resolved with itself.");
            if (e1 && ("object" == typeof e1 || "function" == typeof e1)) {
                var r1 = e1.then;
                if (e1 instanceof n) return t1._state = 3, t1._value = e1, void h(t1);
                if ("function" == typeof r1) return void l((i3 = r1, o2 = e1, function() {
                    i3.apply(o2, arguments);
                }), t1);
            }
            t1._state = 1, t1._value = e1, h(t1);
        } catch (e2) {
            a35(t1, e2);
        }
        var i3, o2;
    }
    function a35(t1, e1) {
        t1._state = 2, t1._value = e1, h(t1);
    }
    function h(t1) {
        2 === t1._state && 0 === t1._deferreds.length && n._immediateFn(function() {
            t1._handled || n._unhandledRejectionFn(t1._value);
        });
        for(var e1 = 0, r2 = t1._deferreds.length; e1 < r2; e1++)o1(t1, t1._deferreds[e1]);
        t1._deferreds = null;
    }
    function u(t1, e1, r2) {
        this.onFulfilled = "function" == typeof t1 ? t1 : null, this.onRejected = "function" == typeof e1 ? e1 : null, this.promise = r2;
    }
    function l(t1, e1) {
        var r2 = !1;
        try {
            t1(function(t2) {
                r2 || (r2 = !0, s(e1, t2));
            }, function(t2) {
                r2 || (r2 = !0, a35(e1, t2));
            });
        } catch (t2) {
            if (r2) return;
            r2 = !0, a35(e1, t2);
        }
    }
    n.prototype.catch = function(t1) {
        return this.then(null, t1);
    }, n.prototype.then = function(t1, e1) {
        var r2 = new this.constructor(i2);
        return o1(this, new u(t1, e1, r2)), r2;
    }, n.prototype.finally = function(t1) {
        var e1 = this.constructor;
        return this.then(function(r2) {
            return e1.resolve(t1()).then(function() {
                return r2;
            });
        }, function(r2) {
            return e1.resolve(t1()).then(function() {
                return e1.reject(r2);
            });
        });
    }, n.all = function(t1) {
        return new n(function(e1, i3) {
            if (!r(t1)) return i3(new TypeError("Promise.all accepts an array"));
            var n1 = Array.prototype.slice.call(t1);
            if (0 === n1.length) return e1([]);
            var o2 = n1.length;
            function s1(t2, r2) {
                try {
                    if (r2 && ("object" == typeof r2 || "function" == typeof r2)) {
                        var a1 = r2.then;
                        if ("function" == typeof a1) return void a1.call(r2, function(e2) {
                            s1(t2, e2);
                        }, i3);
                    }
                    n1[t2] = r2, 0 == --o2 && e1(n1);
                } catch (t3) {
                    i3(t3);
                }
            }
            for(var a2 = 0; a2 < n1.length; a2++)s1(a2, n1[a2]);
        });
    }, n.allSettled = function(t1) {
        return new this(function(e1, r2) {
            if (!t1 || (void 0) === t1.length) return r2(new TypeError(typeof t1 + " " + t1 + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var i3 = Array.prototype.slice.call(t1);
            if (0 === i3.length) return e1([]);
            var n1 = i3.length;
            function o2(t2, r3) {
                if (r3 && ("object" == typeof r3 || "function" == typeof r3)) {
                    var s1 = r3.then;
                    if ("function" == typeof s1) return void s1.call(r3, function(e2) {
                        o2(t2, e2);
                    }, function(r4) {
                        i3[t2] = {
                            status: "rejected",
                            reason: r4
                        }, 0 == --n1 && e1(i3);
                    });
                }
                i3[t2] = {
                    status: "fulfilled",
                    value: r3
                }, 0 == --n1 && e1(i3);
            }
            for(var s2 = 0; s2 < i3.length; s2++)o2(s2, i3[s2]);
        });
    }, n.resolve = function(t1) {
        return t1 && "object" == typeof t1 && t1.constructor === n ? t1 : new n(function(e1) {
            e1(t1);
        });
    }, n.reject = function(t1) {
        return new n(function(e1, r2) {
            r2(t1);
        });
    }, n.race = function(t1) {
        return new n(function(e1, i3) {
            if (!r(t1)) return i3(new TypeError("Promise.race accepts an array"));
            for(var o2 = 0, s2 = t1.length; o2 < s2; o2++)n.resolve(t1[o2]).then(e1, i3);
        });
    }, n._immediateFn = "function" == typeof setImmediate && function(t1) {
        setImmediate(t1);
    } || function(t1) {
        e(t1, 0);
    }, n._unhandledRejectionFn = function(t1) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t1);
    };
    var c = Object.getOwnPropertySymbols, d = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
    var p = function() {
        try {
            if (!Object.assign) return !1;
            var t1 = "abc";
            if (t1[5] = "de", "5" === Object.getOwnPropertyNames(t1)[0]) return !1;
            for(var e1 = {
            }, r2 = 0; r2 < 10; r2++)e1["_" + String.fromCharCode(r2)] = r2;
            if ("0123456789" !== Object.getOwnPropertyNames(e1).map(function(t2) {
                return e1[t2];
            }).join("")) return !1;
            var i3 = {
            };
            return "abcdefghijklmnopqrst".split("").forEach(function(t2) {
                i3[t2] = t2;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({
            }, i3)).join("");
        } catch (t2) {
            return !1;
        }
    }() ? Object.assign : function(t1, e1) {
        for(var r2, i3, n1 = arguments, o2 = function(t2) {
            if (null == t2) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t2);
        }(t1), s2 = 1; s2 < arguments.length; s2++){
            for(var a2 in r2 = Object(n1[s2]))d.call(r2, a2) && (o2[a2] = r2[a2]);
            if (c) {
                i3 = c(r2);
                for(var h1 = 0; h1 < i3.length; h1++)f.call(r2, i3[h1]) && (o2[i3[h1]] = r2[i3[h1]]);
            }
        }
        return o2;
    };
    if (self.Promise || (self.Promise = n), Object.assign || (Object.assign = p), Date.now && Date.prototype.getTime || (Date.now = function() {
        return (new Date).getTime();
    }), !self.performance || !self.performance.now) {
        var _ = Date.now();
        self.performance || (self.performance = {
        }), self.performance.now = function() {
            return Date.now() - _;
        };
    }
    for(var m = Date.now(), v = [
        "ms",
        "moz",
        "webkit",
        "o"
    ], y = 0; y < v.length && !self.requestAnimationFrame; ++y){
        var E = v[y];
        self.requestAnimationFrame = self[E + "RequestAnimationFrame"], self.cancelAnimationFrame = self[E + "CancelAnimationFrame"] || self[E + "CancelRequestAnimationFrame"];
    }
    self.requestAnimationFrame || (self.requestAnimationFrame = function(t1) {
        if ("function" != typeof t1) throw new TypeError(t1 + "is not a function");
        var e1 = Date.now(), r2 = 16 + m - e1;
        return r2 < 0 && (r2 = 0), m = e1, self.setTimeout(function() {
            m = Date.now(), t1(performance.now());
        }, r2);
    }), self.cancelAnimationFrame || (self.cancelAnimationFrame = function(t1) {
        return clearTimeout(t1);
    }), Math.sign || (Math.sign = function(t1) {
        return 0 === (t1 = Number(t1)) || isNaN(t1) ? t1 : t1 > 0 ? 1 : -1;
    }), Number.isInteger || (Number.isInteger = function(t1) {
        return "number" == typeof t1 && isFinite(t1) && Math.floor(t1) === t1;
    }), self.ArrayBuffer || (self.ArrayBuffer = Array), self.Float32Array || (self.Float32Array = Array), self.Uint32Array || (self.Uint32Array = Array), self.Uint16Array || (self.Uint16Array = Array), self.Uint8Array || (self.Uint8Array = Array), self.Int32Array || (self.Int32Array = Array);
    var g = /iPhone/i, T = /iPod/i, b = /iPad/i, R = /\biOS-universal(?:.+)Mac\b/i, x = /\bAndroid(?:.+)Mobile\b/i, A2 = /Android/i, S = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, O = /Silk/i, I = /Windows Phone/i, P = /\bWindows(?:.+)ARM\b/i, M = /BlackBerry/i, D = /BB10/i, N = /Opera Mini/i, w = /\b(CriOS|Chrome)(?:.+)Mobile/i, C = /Mobile(?:.+)Firefox\b/i, L = function(t1) {
        return (void 0) !== t1 && "MacIntel" === t1.platform && "number" == typeof t1.maxTouchPoints && t1.maxTouchPoints > 1 && "undefined" == typeof MSStream;
    };
    var F, U, B, G, X2, k, H, Y, j, V, W, z2, q, K, Z, Q, J, $, tt, et = function(t1) {
        var e1 = {
            userAgent: "",
            platform: "",
            maxTouchPoints: 0
        };
        t1 || "undefined" == typeof navigator ? "string" == typeof t1 ? e1.userAgent = t1 : t1 && t1.userAgent && (e1 = {
            userAgent: t1.userAgent,
            platform: t1.platform,
            maxTouchPoints: t1.maxTouchPoints || 0
        }) : e1 = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
        var r2 = e1.userAgent, i3 = r2.split("[FBAN");
        (void 0) !== i3[1] && (r2 = i3[0]), (void 0) !== (i3 = r2.split("Twitter"))[1] && (r2 = i3[0]);
        var n1 = function(t2) {
            return function(e2) {
                return e2.test(t2);
            };
        }(r2), o2 = {
            apple: {
                phone: n1(g) && !n1(I),
                ipod: n1(T),
                tablet: !n1(g) && (n1(b) || L(e1)) && !n1(I),
                universal: n1(R),
                device: (n1(g) || n1(T) || n1(b) || n1(R) || L(e1)) && !n1(I)
            },
            amazon: {
                phone: n1(S),
                tablet: !n1(S) && n1(O),
                device: n1(S) || n1(O)
            },
            android: {
                phone: !n1(I) && n1(S) || !n1(I) && n1(x),
                tablet: !n1(I) && !n1(S) && !n1(x) && (n1(O) || n1(A2)),
                device: !n1(I) && (n1(S) || n1(O) || n1(x) || n1(A2)) || n1(/\bokhttp\b/i)
            },
            windows: {
                phone: n1(I),
                tablet: n1(P),
                device: n1(I) || n1(P)
            },
            other: {
                blackberry: n1(M),
                blackberry10: n1(D),
                opera: n1(N),
                firefox: n1(C),
                chrome: n1(w),
                device: n1(M) || n1(D) || n1(N) || n1(C) || n1(w)
            },
            any: !1,
            phone: !1,
            tablet: !1
        };
        return o2.any = o2.apple.device || o2.android.device || o2.windows.device || o2.other.device, o2.phone = o2.apple.phone || o2.android.phone || o2.windows.phone, o2.tablet = o2.apple.tablet || o2.android.tablet || o2.windows.tablet, o2;
    }(self.navigator);
    !function(t1) {
        t1[t1.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t1[t1.WEBGL = 1] = "WEBGL", t1[t1.WEBGL2 = 2] = "WEBGL2";
    }(F || (F = {
    })), (function(t1) {
        t1[t1.UNKNOWN = 0] = "UNKNOWN", t1[t1.WEBGL = 1] = "WEBGL", t1[t1.CANVAS = 2] = "CANVAS";
    })(U || (U = {
    })), (function(t1) {
        t1[t1.COLOR = 16384] = "COLOR", t1[t1.DEPTH = 256] = "DEPTH", t1[t1.STENCIL = 1024] = "STENCIL";
    })(B || (B = {
    })), (function(t1) {
        t1[t1.NORMAL = 0] = "NORMAL", t1[t1.ADD = 1] = "ADD", t1[t1.MULTIPLY = 2] = "MULTIPLY", t1[t1.SCREEN = 3] = "SCREEN", t1[t1.OVERLAY = 4] = "OVERLAY", t1[t1.DARKEN = 5] = "DARKEN", t1[t1.LIGHTEN = 6] = "LIGHTEN", t1[t1.COLOR_DODGE = 7] = "COLOR_DODGE", t1[t1.COLOR_BURN = 8] = "COLOR_BURN", t1[t1.HARD_LIGHT = 9] = "HARD_LIGHT", t1[t1.SOFT_LIGHT = 10] = "SOFT_LIGHT", t1[t1.DIFFERENCE = 11] = "DIFFERENCE", t1[t1.EXCLUSION = 12] = "EXCLUSION", t1[t1.HUE = 13] = "HUE", t1[t1.SATURATION = 14] = "SATURATION", t1[t1.COLOR = 15] = "COLOR", t1[t1.LUMINOSITY = 16] = "LUMINOSITY", t1[t1.NORMAL_NPM = 17] = "NORMAL_NPM", t1[t1.ADD_NPM = 18] = "ADD_NPM", t1[t1.SCREEN_NPM = 19] = "SCREEN_NPM", t1[t1.NONE = 20] = "NONE", t1[t1.SRC_OVER = 0] = "SRC_OVER", t1[t1.SRC_IN = 21] = "SRC_IN", t1[t1.SRC_OUT = 22] = "SRC_OUT", t1[t1.SRC_ATOP = 23] = "SRC_ATOP", t1[t1.DST_OVER = 24] = "DST_OVER", t1[t1.DST_IN = 25] = "DST_IN", t1[t1.DST_OUT = 26] = "DST_OUT", t1[t1.DST_ATOP = 27] = "DST_ATOP", t1[t1.ERASE = 26] = "ERASE", t1[t1.SUBTRACT = 28] = "SUBTRACT", t1[t1.XOR = 29] = "XOR";
    })(G || (G = {
    })), (function(t1) {
        t1[t1.POINTS = 0] = "POINTS", t1[t1.LINES = 1] = "LINES", t1[t1.LINE_LOOP = 2] = "LINE_LOOP", t1[t1.LINE_STRIP = 3] = "LINE_STRIP", t1[t1.TRIANGLES = 4] = "TRIANGLES", t1[t1.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t1[t1.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
    })(X2 || (X2 = {
    })), (function(t1) {
        t1[t1.RGBA = 6408] = "RGBA", t1[t1.RGB = 6407] = "RGB", t1[t1.RG = 33319] = "RG", t1[t1.RED = 6403] = "RED", t1[t1.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t1[t1.RGB_INTEGER = 36248] = "RGB_INTEGER", t1[t1.RG_INTEGER = 33320] = "RG_INTEGER", t1[t1.RED_INTEGER = 36244] = "RED_INTEGER", t1[t1.ALPHA = 6406] = "ALPHA", t1[t1.LUMINANCE = 6409] = "LUMINANCE", t1[t1.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t1[t1.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t1[t1.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
    })(k || (k = {
    })), (function(t1) {
        t1[t1.TEXTURE_2D = 3553] = "TEXTURE_2D", t1[t1.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t1[t1.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t1[t1.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t1[t1.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t1[t1.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t1[t1.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t1[t1.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t1[t1.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
    })(H || (H = {
    })), (function(t1) {
        t1[t1.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t1[t1.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t1[t1.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t1[t1.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t1[t1.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t1[t1.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t1[t1.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t1[t1.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t1[t1.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t1[t1.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t1[t1.BYTE = 5120] = "BYTE", t1[t1.SHORT = 5122] = "SHORT", t1[t1.INT = 5124] = "INT", t1[t1.FLOAT = 5126] = "FLOAT", t1[t1.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t1[t1.HALF_FLOAT = 36193] = "HALF_FLOAT";
    })(Y || (Y = {
    })), (function(t1) {
        t1[t1.FLOAT = 0] = "FLOAT", t1[t1.INT = 1] = "INT", t1[t1.UINT = 2] = "UINT";
    })(j || (j = {
    })), (function(t1) {
        t1[t1.NEAREST = 0] = "NEAREST", t1[t1.LINEAR = 1] = "LINEAR";
    })(V || (V = {
    })), (function(t1) {
        t1[t1.CLAMP = 33071] = "CLAMP", t1[t1.REPEAT = 10497] = "REPEAT", t1[t1.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT";
    })(W || (W = {
    })), (function(t1) {
        t1[t1.OFF = 0] = "OFF", t1[t1.POW2 = 1] = "POW2", t1[t1.ON = 2] = "ON", t1[t1.ON_MANUAL = 3] = "ON_MANUAL";
    })(z2 || (z2 = {
    })), (function(t1) {
        t1[t1.NPM = 0] = "NPM", t1[t1.UNPACK = 1] = "UNPACK", t1[t1.PMA = 2] = "PMA", t1[t1.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t1[t1.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t1[t1.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA";
    })(q || (q = {
    })), (function(t1) {
        t1[t1.NO = 0] = "NO", t1[t1.YES = 1] = "YES", t1[t1.AUTO = 2] = "AUTO", t1[t1.BLEND = 0] = "BLEND", t1[t1.CLEAR = 1] = "CLEAR", t1[t1.BLIT = 2] = "BLIT";
    })(K || (K = {
    })), (function(t1) {
        t1[t1.AUTO = 0] = "AUTO", t1[t1.MANUAL = 1] = "MANUAL";
    })(Z || (Z = {
    })), (function(t1) {
        t1.LOW = "lowp", t1.MEDIUM = "mediump", t1.HIGH = "highp";
    })(Q || (Q = {
    })), (function(t1) {
        t1[t1.NONE = 0] = "NONE", t1[t1.SCISSOR = 1] = "SCISSOR", t1[t1.STENCIL = 2] = "STENCIL", t1[t1.SPRITE = 3] = "SPRITE";
    })(J || (J = {
    })), (function(t1) {
        t1[t1.NONE = 0] = "NONE", t1[t1.LOW = 2] = "LOW", t1[t1.MEDIUM = 4] = "MEDIUM", t1[t1.HIGH = 8] = "HIGH";
    })($ || ($ = {
    })), (function(t1) {
        t1[t1.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t1[t1.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t1[t1.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER";
    })(tt || (tt = {
    }));
    var rt = {
        MIPMAP_TEXTURES: z2.POW2,
        ANISOTROPIC_LEVEL: 0,
        RESOLUTION: 1,
        FILTER_RESOLUTION: 1,
        FILTER_MULTISAMPLE: $.NONE,
        SPRITE_MAX_TEXTURES: function(t1) {
            var e1, r2 = !0;
            (et.tablet || et.phone) && (et.apple.device && (e1 = navigator.userAgent.match(/OS (\d+)_(\d+)?/)) && parseInt(e1[1], 10) < 11 && (r2 = !1), et.android.device && (e1 = navigator.userAgent.match(/Android\s([0-9.]*)/)) && parseInt(e1[1], 10) < 7 && (r2 = !1));
            return r2 ? 32 : 4;
        }(),
        SPRITE_BATCH_SIZE: 4096,
        RENDER_OPTIONS: {
            view: null,
            antialias: !1,
            autoDensity: !1,
            backgroundColor: 0,
            backgroundAlpha: 1,
            useContextAlpha: !0,
            clearBeforeRender: !0,
            preserveDrawingBuffer: !1,
            width: 800,
            height: 600,
            legacy: !1
        },
        GC_MODE: Z.AUTO,
        GC_MAX_IDLE: 3600,
        GC_MAX_CHECK_COUNT: 600,
        WRAP_MODE: W.CLAMP,
        SCALE_MODE: V.LINEAR,
        PRECISION_VERTEX: Q.HIGH,
        PRECISION_FRAGMENT: et.apple.device ? Q.HIGH : Q.MEDIUM,
        CAN_UPLOAD_SAME_BUFFER: !et.apple.device,
        CREATE_IMAGE_BITMAP: !1,
        ROUND_PIXELS: !1
    }, it = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {
    };
    function nt(t1, e1, r2) {
        return t1(r2 = {
            path: e1,
            exports: {
            },
            require: function(t2, e2) {
                return (function() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
                })(null == e2 && r2.path);
            }
        }, r2.exports), r2.exports;
    }
    var ot = nt(function(t1) {
        var e1 = Object.prototype.hasOwnProperty, r2 = "~";
        function i3() {
        }
        function n1(t2, e2, r3) {
            this.fn = t2, this.context = e2, this.once = r3 || !1;
        }
        function o2(t2, e2, i4, o3, s2) {
            if ("function" != typeof i4) throw new TypeError("The listener must be a function");
            var a3 = new n1(i4, o3 || t2, s2), h2 = r2 ? r2 + e2 : e2;
            return t2._events[h2] ? t2._events[h2].fn ? t2._events[h2] = [
                t2._events[h2],
                a3
            ] : t2._events[h2].push(a3) : (t2._events[h2] = a3, t2._eventsCount++), t2;
        }
        function s2(t2, e2) {
            0 == --t2._eventsCount ? t2._events = new i3 : delete t2._events[e2];
        }
        function a3() {
            this._events = new i3, this._eventsCount = 0;
        }
        Object.create && (i3.prototype = Object.create(null), (new i3).__proto__ || (r2 = !1)), a3.prototype.eventNames = function() {
            var t2, i4, n2 = [];
            if (0 === this._eventsCount) return n2;
            for(i4 in t2 = this._events)e1.call(t2, i4) && n2.push(r2 ? i4.slice(1) : i4);
            return Object.getOwnPropertySymbols ? n2.concat(Object.getOwnPropertySymbols(t2)) : n2;
        }, a3.prototype.listeners = function(t2) {
            var e2 = r2 ? r2 + t2 : t2, i4 = this._events[e2];
            if (!i4) return [];
            if (i4.fn) return [
                i4.fn
            ];
            for(var n2 = 0, o3 = i4.length, s3 = new Array(o3); n2 < o3; n2++)s3[n2] = i4[n2].fn;
            return s3;
        }, a3.prototype.listenerCount = function(t2) {
            var e2 = r2 ? r2 + t2 : t2, i4 = this._events[e2];
            return i4 ? i4.fn ? 1 : i4.length : 0;
        }, a3.prototype.emit = function(t2, e2, i4, n2, o3, s3) {
            var a4 = arguments, h2 = r2 ? r2 + t2 : t2;
            if (!this._events[h2]) return !1;
            var u1, l1, c1 = this._events[h2], d1 = arguments.length;
            if (c1.fn) {
                switch(c1.once && this.removeListener(t2, c1.fn, void 0, !0), d1){
                    case 1:
                        return c1.fn.call(c1.context), !0;
                    case 2:
                        return c1.fn.call(c1.context, e2), !0;
                    case 3:
                        return c1.fn.call(c1.context, e2, i4), !0;
                    case 4:
                        return c1.fn.call(c1.context, e2, i4, n2), !0;
                    case 5:
                        return c1.fn.call(c1.context, e2, i4, n2, o3), !0;
                    case 6:
                        return c1.fn.call(c1.context, e2, i4, n2, o3, s3), !0;
                }
                for(l1 = 1, u1 = new Array(d1 - 1); l1 < d1; l1++)u1[l1 - 1] = a4[l1];
                c1.fn.apply(c1.context, u1);
            } else {
                var f1, p1 = c1.length;
                for(l1 = 0; l1 < p1; l1++)switch(c1[l1].once && this.removeListener(t2, c1[l1].fn, void 0, !0), d1){
                    case 1:
                        c1[l1].fn.call(c1[l1].context);
                        break;
                    case 2:
                        c1[l1].fn.call(c1[l1].context, e2);
                        break;
                    case 3:
                        c1[l1].fn.call(c1[l1].context, e2, i4);
                        break;
                    case 4:
                        c1[l1].fn.call(c1[l1].context, e2, i4, n2);
                        break;
                    default:
                        if (!u1) for(f1 = 1, u1 = new Array(d1 - 1); f1 < d1; f1++)u1[f1 - 1] = a4[f1];
                        c1[l1].fn.apply(c1[l1].context, u1);
                }
            }
            return !0;
        }, a3.prototype.on = function(t2, e2, r3) {
            return o2(this, t2, e2, r3, !1);
        }, a3.prototype.once = function(t2, e2, r3) {
            return o2(this, t2, e2, r3, !0);
        }, a3.prototype.removeListener = function(t2, e2, i4, n2) {
            var o3 = r2 ? r2 + t2 : t2;
            if (!this._events[o3]) return this;
            if (!e2) return s2(this, o3), this;
            var a4 = this._events[o3];
            if (a4.fn) a4.fn !== e2 || n2 && !a4.once || i4 && a4.context !== i4 || s2(this, o3);
            else {
                for(var h2 = 0, u1 = [], l1 = a4.length; h2 < l1; h2++)(a4[h2].fn !== e2 || n2 && !a4[h2].once || i4 && a4[h2].context !== i4) && u1.push(a4[h2]);
                u1.length ? this._events[o3] = 1 === u1.length ? u1[0] : u1 : s2(this, o3);
            }
            return this;
        }, a3.prototype.removeAllListeners = function(t2) {
            var e2;
            return t2 ? (e2 = r2 ? r2 + t2 : t2, this._events[e2] && s2(this, e2)) : (this._events = new i3, this._eventsCount = 0), this;
        }, a3.prototype.off = a3.prototype.removeListener, a3.prototype.addListener = a3.prototype.on, a3.prefixed = r2, a3.EventEmitter = a3, t1.exports = a3;
    }), st = ht, at = ht;
    function ht(t1, e1, r2) {
        r2 = r2 || 2;
        var i3, n1, o2, s2, a3, h3, u2, l2 = e1 && e1.length, c1 = l2 ? e1[0] * r2 : t1.length, d1 = ut(t1, 0, c1, r2, !0), f2 = [];
        if (!d1 || d1.next === d1.prev) return f2;
        if (l2 && (d1 = (function(t2, e2, r3, i4) {
            var n2, o3, s3, a4, h4, u3 = [];
            for(n2 = 0, o3 = e2.length; n2 < o3; n2++)s3 = e2[n2] * i4, a4 = n2 < o3 - 1 ? e2[n2 + 1] * i4 : t2.length, (h4 = ut(t2, s3, a4, i4, !1)) === h4.next && (h4.steiner = !0), u3.push(gt(h4));
            for(u3.sort(mt), n2 = 0; n2 < u3.length; n2++)vt(u3[n2], r3), r3 = lt(r3, r3.next);
            return r3;
        })(t1, e1, d1, r2)), t1.length > 80 * r2) {
            i3 = o2 = t1[0], n1 = s2 = t1[1];
            for(var p2 = r2; p2 < c1; p2 += r2)(a3 = t1[p2]) < i3 && (i3 = a3), (h3 = t1[p2 + 1]) < n1 && (n1 = h3), a3 > o2 && (o2 = a3), h3 > s2 && (s2 = h3);
            u2 = 0 !== (u2 = Math.max(o2 - i3, s2 - n1)) ? 1 / u2 : 0;
        }
        return ct(d1, f2, r2, i3, n1, u2), f2;
    }
    function ut(t1, e1, r2, i3, n1) {
        var o2, s2;
        if (n1 === wt(t1, e1, r2, i3) > 0) for(o2 = e1; o2 < r2; o2 += i3)s2 = Mt(o2, t1[o2], t1[o2 + 1], s2);
        else for(o2 = r2 - i3; o2 >= e1; o2 -= i3)s2 = Mt(o2, t1[o2], t1[o2 + 1], s2);
        return s2 && xt(s2, s2.next) && (Dt(s2), s2 = s2.next), s2;
    }
    function lt(t1, e1) {
        if (!t1) return t1;
        e1 || (e1 = t1);
        var r2, i3 = t1;
        do if (r2 = !1, i3.steiner || !xt(i3, i3.next) && 0 !== Rt(i3.prev, i3, i3.next)) i3 = i3.next;
        else {
            if (Dt(i3), (i3 = e1 = i3.prev) === i3.next) break;
            r2 = !0;
        }
        while (r2 || i3 !== e1)
        return e1;
    }
    function ct(t1, e1, r2, i3, n1, o2, s2) {
        if (t1) {
            !s2 && o2 && (function(t2, e2, r3, i4) {
                var n2 = t2;
                do null === n2.z && (n2.z = Et(n2.x, n2.y, e2, r3, i4)), n2.prevZ = n2.prev, n2.nextZ = n2.next, n2 = n2.next;
                while (n2 !== t2)
                n2.prevZ.nextZ = null, n2.prevZ = null, (function(t3) {
                    var e3, r4, i5, n3, o3, s3, a3, h3, u2 = 1;
                    do {
                        for(r4 = t3, t3 = null, o3 = null, s3 = 0; r4;){
                            for(s3++, i5 = r4, a3 = 0, e3 = 0; e3 < u2 && (a3++, i5 = i5.nextZ); e3++);
                            for(h3 = u2; a3 > 0 || h3 > 0 && i5;)0 !== a3 && (0 === h3 || !i5 || r4.z <= i5.z) ? (n3 = r4, r4 = r4.nextZ, a3--) : (n3 = i5, i5 = i5.nextZ, h3--), o3 ? o3.nextZ = n3 : t3 = n3, n3.prevZ = o3, o3 = n3;
                            r4 = i5;
                        }
                        o3.nextZ = null, u2 *= 2;
                    }while (s3 > 1)
                })(n2);
            })(t1, i3, n1, o2);
            for(var a3, h3, u2 = t1; t1.prev !== t1.next;)if (a3 = t1.prev, h3 = t1.next, o2 ? ft(t1, i3, n1, o2) : dt(t1)) e1.push(a3.i / r2), e1.push(t1.i / r2), e1.push(h3.i / r2), Dt(t1), t1 = h3.next, u2 = h3.next;
            else if ((t1 = h3) === u2) {
                s2 ? 1 === s2 ? ct(t1 = pt(lt(t1), e1, r2), e1, r2, i3, n1, o2, 2) : 2 === s2 && _t(t1, e1, r2, i3, n1, o2) : ct(lt(t1), e1, r2, i3, n1, o2, 1);
                break;
            }
        }
    }
    function dt(t1) {
        var e1 = t1.prev, r2 = t1, i3 = t1.next;
        if (Rt(e1, r2, i3) >= 0) return !1;
        for(var n1 = t1.next.next; n1 !== t1.prev;){
            if (Tt(e1.x, e1.y, r2.x, r2.y, i3.x, i3.y, n1.x, n1.y) && Rt(n1.prev, n1, n1.next) >= 0) return !1;
            n1 = n1.next;
        }
        return !0;
    }
    function ft(t1, e1, r2, i3) {
        var n1 = t1.prev, o2 = t1, s2 = t1.next;
        if (Rt(n1, o2, s2) >= 0) return !1;
        for(var a4 = n1.x < o2.x ? n1.x < s2.x ? n1.x : s2.x : o2.x < s2.x ? o2.x : s2.x, h4 = n1.y < o2.y ? n1.y < s2.y ? n1.y : s2.y : o2.y < s2.y ? o2.y : s2.y, u3 = n1.x > o2.x ? n1.x > s2.x ? n1.x : s2.x : o2.x > s2.x ? o2.x : s2.x, l2 = n1.y > o2.y ? n1.y > s2.y ? n1.y : s2.y : o2.y > s2.y ? o2.y : s2.y, c1 = Et(a4, h4, e1, r2, i3), d1 = Et(u3, l2, e1, r2, i3), f2 = t1.prevZ, p3 = t1.nextZ; f2 && f2.z >= c1 && p3 && p3.z <= d1;){
            if (f2 !== t1.prev && f2 !== t1.next && Tt(n1.x, n1.y, o2.x, o2.y, s2.x, s2.y, f2.x, f2.y) && Rt(f2.prev, f2, f2.next) >= 0) return !1;
            if (f2 = f2.prevZ, p3 !== t1.prev && p3 !== t1.next && Tt(n1.x, n1.y, o2.x, o2.y, s2.x, s2.y, p3.x, p3.y) && Rt(p3.prev, p3, p3.next) >= 0) return !1;
            p3 = p3.nextZ;
        }
        for(; f2 && f2.z >= c1;){
            if (f2 !== t1.prev && f2 !== t1.next && Tt(n1.x, n1.y, o2.x, o2.y, s2.x, s2.y, f2.x, f2.y) && Rt(f2.prev, f2, f2.next) >= 0) return !1;
            f2 = f2.prevZ;
        }
        for(; p3 && p3.z <= d1;){
            if (p3 !== t1.prev && p3 !== t1.next && Tt(n1.x, n1.y, o2.x, o2.y, s2.x, s2.y, p3.x, p3.y) && Rt(p3.prev, p3, p3.next) >= 0) return !1;
            p3 = p3.nextZ;
        }
        return !0;
    }
    function pt(t1, e1, r2) {
        var i3 = t1;
        do {
            var n1 = i3.prev, o2 = i3.next.next;
            !xt(n1, o2) && At(n1, i3, i3.next, o2) && It(n1, o2) && It(o2, n1) && (e1.push(n1.i / r2), e1.push(i3.i / r2), e1.push(o2.i / r2), Dt(i3), Dt(i3.next), i3 = t1 = o2), i3 = i3.next;
        }while (i3 !== t1)
        return lt(i3);
    }
    function _t(t1, e1, r2, i3, n2, o3) {
        var s2 = t1;
        do {
            for(var a4 = s2.next.next; a4 !== s2.prev;){
                if (s2.i !== a4.i && bt(s2, a4)) {
                    var h4 = Pt(s2, a4);
                    return s2 = lt(s2, s2.next), h4 = lt(h4, h4.next), ct(s2, e1, r2, i3, n2, o3), void ct(h4, e1, r2, i3, n2, o3);
                }
                a4 = a4.next;
            }
            s2 = s2.next;
        }while (s2 !== t1)
    }
    function mt(t1, e1) {
        return t1.x - e1.x;
    }
    function vt(t1, e1) {
        if (e1 = (function(t2, e2) {
            var r2, i3 = e2, n2 = t2.x, o3 = t2.y, s2 = -1 / 0;
            do {
                if (o3 <= i3.y && o3 >= i3.next.y && i3.next.y !== i3.y) {
                    var a5 = i3.x + (o3 - i3.y) * (i3.next.x - i3.x) / (i3.next.y - i3.y);
                    if (a5 <= n2 && a5 > s2) {
                        if (s2 = a5, a5 === n2) {
                            if (o3 === i3.y) return i3;
                            if (o3 === i3.next.y) return i3.next;
                        }
                        r2 = i3.x < i3.next.x ? i3 : i3.next;
                    }
                }
                i3 = i3.next;
            }while (i3 !== e2)
            if (!r2) return null;
            if (n2 === s2) return r2;
            var h5, u3 = r2, l2 = r2.x, c1 = r2.y, d1 = 1 / 0;
            i3 = r2;
            do n2 >= i3.x && i3.x >= l2 && n2 !== i3.x && Tt(o3 < c1 ? n2 : s2, o3, l2, c1, o3 < c1 ? s2 : n2, o3, i3.x, i3.y) && (h5 = Math.abs(o3 - i3.y) / (n2 - i3.x), It(i3, t2) && (h5 < d1 || h5 === d1 && (i3.x > r2.x || i3.x === r2.x && yt(r2, i3))) && (r2 = i3, d1 = h5)), i3 = i3.next;
            while (i3 !== u3)
            return r2;
        })(t1, e1)) {
            var r2 = Pt(e1, t1);
            lt(e1, e1.next), lt(r2, r2.next);
        }
    }
    function yt(t1, e1) {
        return Rt(t1.prev, t1, e1.prev) < 0 && Rt(e1.next, t1, t1.next) < 0;
    }
    function Et(t1, e1, r3, i3, n2) {
        return (t1 = 1431655765 & ((t1 = 858993459 & ((t1 = 252645135 & ((t1 = 16711935 & ((t1 = 32767 * (t1 - r3) * n2) | t1 << 8)) | t1 << 4)) | t1 << 2)) | t1 << 1)) | (e1 = 1431655765 & ((e1 = 858993459 & ((e1 = 252645135 & ((e1 = 16711935 & ((e1 = 32767 * (e1 - i3) * n2) | e1 << 8)) | e1 << 4)) | e1 << 2)) | e1 << 1)) << 1;
    }
    function gt(t1) {
        var e1 = t1, r3 = t1;
        do (e1.x < r3.x || e1.x === r3.x && e1.y < r3.y) && (r3 = e1), e1 = e1.next;
        while (e1 !== t1)
        return r3;
    }
    function Tt(t1, e1, r3, i3, n2, o3, s2, a6) {
        return (n2 - s2) * (e1 - a6) - (t1 - s2) * (o3 - a6) >= 0 && (t1 - s2) * (i3 - a6) - (r3 - s2) * (e1 - a6) >= 0 && (r3 - s2) * (o3 - a6) - (n2 - s2) * (i3 - a6) >= 0;
    }
    function bt(t1, e1) {
        return t1.next.i !== e1.i && t1.prev.i !== e1.i && !function(t2, e2) {
            var r3 = t2;
            do {
                if (r3.i !== t2.i && r3.next.i !== t2.i && r3.i !== e2.i && r3.next.i !== e2.i && At(r3, r3.next, t2, e2)) return !0;
                r3 = r3.next;
            }while (r3 !== t2)
            return !1;
        }(t1, e1) && (It(t1, e1) && It(e1, t1) && (function(t2, e2) {
            var r3 = t2, i3 = !1, n2 = (t2.x + e2.x) / 2, o3 = (t2.y + e2.y) / 2;
            do r3.y > o3 != r3.next.y > o3 && r3.next.y !== r3.y && n2 < (r3.next.x - r3.x) * (o3 - r3.y) / (r3.next.y - r3.y) + r3.x && (i3 = !i3), r3 = r3.next;
            while (r3 !== t2)
            return i3;
        })(t1, e1) && (Rt(t1.prev, t1, e1.prev) || Rt(t1, e1.prev, e1)) || xt(t1, e1) && Rt(t1.prev, t1, t1.next) > 0 && Rt(e1.prev, e1, e1.next) > 0);
    }
    function Rt(t1, e1, r3) {
        return (e1.y - t1.y) * (r3.x - e1.x) - (e1.x - t1.x) * (r3.y - e1.y);
    }
    function xt(t1, e1) {
        return t1.x === e1.x && t1.y === e1.y;
    }
    function At(t1, e1, r3, i3) {
        var n2 = Ot(Rt(t1, e1, r3)), o3 = Ot(Rt(t1, e1, i3)), s2 = Ot(Rt(r3, i3, t1)), a6 = Ot(Rt(r3, i3, e1));
        return n2 !== o3 && s2 !== a6 || !(0 !== n2 || !St(t1, r3, e1)) || !(0 !== o3 || !St(t1, i3, e1)) || !(0 !== s2 || !St(r3, t1, i3)) || !(0 !== a6 || !St(r3, e1, i3));
    }
    function St(t1, e1, r3) {
        return e1.x <= Math.max(t1.x, r3.x) && e1.x >= Math.min(t1.x, r3.x) && e1.y <= Math.max(t1.y, r3.y) && e1.y >= Math.min(t1.y, r3.y);
    }
    function Ot(t1) {
        return t1 > 0 ? 1 : t1 < 0 ? -1 : 0;
    }
    function It(t1, e1) {
        return Rt(t1.prev, t1, t1.next) < 0 ? Rt(t1, e1, t1.next) >= 0 && Rt(t1, t1.prev, e1) >= 0 : Rt(t1, e1, t1.prev) < 0 || Rt(t1, t1.next, e1) < 0;
    }
    function Pt(t1, e1) {
        var r3 = new Nt(t1.i, t1.x, t1.y), i3 = new Nt(e1.i, e1.x, e1.y), n2 = t1.next, o3 = e1.prev;
        return t1.next = e1, e1.prev = t1, r3.next = n2, n2.prev = r3, i3.next = r3, r3.prev = i3, o3.next = i3, i3.prev = o3, i3;
    }
    function Mt(t1, e1, r3, i3) {
        var n2 = new Nt(t1, e1, r3);
        return i3 ? (n2.next = i3.next, n2.prev = i3, i3.next.prev = n2, i3.next = n2) : (n2.prev = n2, n2.next = n2), n2;
    }
    function Dt(t1) {
        t1.next.prev = t1.prev, t1.prev.next = t1.next, t1.prevZ && (t1.prevZ.nextZ = t1.nextZ), t1.nextZ && (t1.nextZ.prevZ = t1.prevZ);
    }
    function Nt(t1, e1, r3) {
        this.i = t1, this.x = e1, this.y = r3, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
    }
    function wt(t1, e1, r3, i3) {
        for(var n2 = 0, o3 = e1, s2 = r3 - i3; o3 < r3; o3 += i3)n2 += (t1[s2] - t1[o3]) * (t1[o3 + 1] + t1[s2 + 1]), s2 = o3;
        return n2;
    }
    ht.deviation = function(t1, e1, r3, i3) {
        var n2 = e1 && e1.length, o3 = n2 ? e1[0] * r3 : t1.length, s2 = Math.abs(wt(t1, 0, o3, r3));
        if (n2) for(var a6 = 0, h5 = e1.length; a6 < h5; a6++){
            var u3 = e1[a6] * r3, l2 = a6 < h5 - 1 ? e1[a6 + 1] * r3 : t1.length;
            s2 -= Math.abs(wt(t1, u3, l2, r3));
        }
        var c1 = 0;
        for(a6 = 0; a6 < i3.length; a6 += 3){
            var d1 = i3[a6] * r3, f2 = i3[a6 + 1] * r3, p3 = i3[a6 + 2] * r3;
            c1 += Math.abs((t1[d1] - t1[p3]) * (t1[f2 + 1] - t1[d1 + 1]) - (t1[d1] - t1[f2]) * (t1[p3 + 1] - t1[d1 + 1]));
        }
        return 0 === s2 && 0 === c1 ? 0 : Math.abs((c1 - s2) / s2);
    }, ht.flatten = function(t1) {
        for(var e1 = t1[0][0].length, r3 = {
            vertices: [],
            holes: [],
            dimensions: e1
        }, i3 = 0, n2 = 0; n2 < t1.length; n2++){
            for(var o3 = 0; o3 < t1[n2].length; o3++)for(var s2 = 0; s2 < e1; s2++)r3.vertices.push(t1[n2][o3][s2]);
            n2 > 0 && (i3 += t1[n2 - 1].length, r3.holes.push(i3));
        }
        return r3;
    }, st.default = at;
    var Ct = nt(function(t1, e1) {
        !function(r3) {
            var i3 = e1 && !e1.nodeType && e1, n2 = t1 && !t1.nodeType && t1, o4 = "object" == typeof it && it;
            o4.global !== o4 && o4.window !== o4 && o4.self !== o4 || (r3 = o4);
            var s3, a6, h5 = 2147483647, u4 = 36, l3 = 1, c1 = 26, d2 = 38, f3 = 700, p4 = 72, _ = 128, m1 = "-", v1 = /^xn--/, y1 = /[^\x20-\x7E]/, E = /[\x2E\u3002\uFF0E\uFF61]/g, g1 = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            }, T1 = u4 - l3, b1 = Math.floor, R1 = String.fromCharCode;
            function x1(t2) {
                throw RangeError(g1[t2]);
            }
            function A1(t2, e2) {
                for(var r4 = t2.length, i4 = []; r4--;)i4[r4] = e2(t2[r4]);
                return i4;
            }
            function S1(t2, e2) {
                var r4 = t2.split("@"), i4 = "";
                return r4.length > 1 && (i4 = r4[0] + "@", t2 = r4[1]), i4 + A1((t2 = t2.replace(E, ".")).split("."), e2).join(".");
            }
            function O1(t2) {
                for(var e2, r4, i4 = [], n3 = 0, o5 = t2.length; n3 < o5;)(e2 = t2.charCodeAt(n3++)) >= 55296 && e2 <= 56319 && n3 < o5 ? 56320 == (64512 & (r4 = t2.charCodeAt(n3++))) ? i4.push(((1023 & e2) << 10) + (1023 & r4) + 65536) : (i4.push(e2), n3--) : i4.push(e2);
                return i4;
            }
            function I1(t2) {
                return A1(t2, function(t3) {
                    var e2 = "";
                    return t3 > 65535 && (e2 += R1((t3 -= 65536) >>> 10 & 1023 | 55296), t3 = 56320 | 1023 & t3), e2 += R1(t3);
                }).join("");
            }
            function P1(t2, e2) {
                return t2 + 22 + 75 * (t2 < 26) - ((0 != e2) << 5);
            }
            function M1(t2, e2, r4) {
                var i4 = 0;
                for(t2 = r4 ? b1(t2 / f3) : t2 >> 1, t2 += b1(t2 / e2); t2 > T1 * c1 >> 1; i4 += u4)t2 = b1(t2 / T1);
                return b1(i4 + (T1 + 1) * t2 / (t2 + d2));
            }
            function D1(t2) {
                var e2, r4, i4, n3, o5, s4, a7, d3, f4, v2, y2, E1 = [], g2 = t2.length, T2 = 0, R2 = _, A2 = p4;
                for((r4 = t2.lastIndexOf(m1)) < 0 && (r4 = 0), i4 = 0; i4 < r4; ++i4)t2.charCodeAt(i4) >= 128 && x1("not-basic"), E1.push(t2.charCodeAt(i4));
                for(n3 = r4 > 0 ? r4 + 1 : 0; n3 < g2;){
                    for(o5 = T2, s4 = 1, a7 = u4; n3 >= g2 && x1("invalid-input"), ((d3 = (y2 = t2.charCodeAt(n3++)) - 48 < 10 ? y2 - 22 : y2 - 65 < 26 ? y2 - 65 : y2 - 97 < 26 ? y2 - 97 : u4) >= u4 || d3 > b1((h5 - T2) / s4)) && x1("overflow"), T2 += d3 * s4, !(d3 < (f4 = a7 <= A2 ? l3 : a7 >= A2 + c1 ? c1 : a7 - A2)); a7 += u4)s4 > b1(h5 / (v2 = u4 - f4)) && x1("overflow"), s4 *= v2;
                    A2 = M1(T2 - o5, e2 = E1.length + 1, 0 == o5), b1(T2 / e2) > h5 - R2 && x1("overflow"), R2 += b1(T2 / e2), T2 %= e2, E1.splice(T2++, 0, R2);
                }
                return I1(E1);
            }
            function N1(t2) {
                var e2, r4, i4, n3, o5, s4, a7, d3, f4, v2, y2, E1, g2, T2, A2, S2 = [];
                for(E1 = (t2 = O1(t2)).length, e2 = _, r4 = 0, o5 = p4, s4 = 0; s4 < E1; ++s4)(y2 = t2[s4]) < 128 && S2.push(R1(y2));
                for(i4 = n3 = S2.length, n3 && S2.push(m1); i4 < E1;){
                    for(a7 = h5, s4 = 0; s4 < E1; ++s4)(y2 = t2[s4]) >= e2 && y2 < a7 && (a7 = y2);
                    for(a7 - e2 > b1((h5 - r4) / (g2 = i4 + 1)) && x1("overflow"), r4 += (a7 - e2) * g2, e2 = a7, s4 = 0; s4 < E1; ++s4)if ((y2 = t2[s4]) < e2 && (++r4) > h5 && x1("overflow"), y2 == e2) {
                        for(d3 = r4, f4 = u4; !(d3 < (v2 = f4 <= o5 ? l3 : f4 >= o5 + c1 ? c1 : f4 - o5)); f4 += u4)A2 = d3 - v2, T2 = u4 - v2, S2.push(R1(P1(v2 + A2 % T2, 0))), d3 = b1(A2 / T2);
                        S2.push(R1(P1(d3, 0))), o5 = M1(r4, g2, i4 == n3), r4 = 0, ++i4;
                    }
                    ++r4, ++e2;
                }
                return S2.join("");
            }
            if (s3 = {
                version: "1.3.2",
                ucs2: {
                    decode: O1,
                    encode: I1
                },
                decode: D1,
                encode: N1,
                toASCII: function(t2) {
                    return S1(t2, function(t3) {
                        return y1.test(t3) ? "xn--" + N1(t3) : t3;
                    });
                },
                toUnicode: function(t2) {
                    return S1(t2, function(t3) {
                        return v1.test(t3) ? D1(t3.slice(4).toLowerCase()) : t3;
                    });
                }
            }, i3 && n2) {
                if (t1.exports == i3) n2.exports = s3;
                else for(a6 in s3)s3.hasOwnProperty(a6) && (i3[a6] = s3[a6]);
            } else r3.punycode = s3;
        }(it);
    }), Lt = {
        isString: function(t1) {
            return "string" == typeof t1;
        },
        isObject: function(t1) {
            return "object" == typeof t1 && null !== t1;
        },
        isNull: function(t1) {
            return null === t1;
        },
        isNullOrUndefined: function(t1) {
            return null == t1;
        }
    };
    function Ft(t1, e1) {
        return Object.prototype.hasOwnProperty.call(t1, e1);
    }
    var Ut = function(t1, e1, r3, i3) {
        e1 = e1 || "&", r3 = r3 || "=";
        var n2 = {
        };
        if ("string" != typeof t1 || 0 === t1.length) return n2;
        var o4 = /\+/g;
        t1 = t1.split(e1);
        var s3 = 1000;
        i3 && "number" == typeof i3.maxKeys && (s3 = i3.maxKeys);
        var a6 = t1.length;
        s3 > 0 && a6 > s3 && (a6 = s3);
        for(var h5 = 0; h5 < a6; ++h5){
            var u4, l3, c1, d2, f3 = t1[h5].replace(o4, "%20"), p4 = f3.indexOf(r3);
            p4 >= 0 ? (u4 = f3.substr(0, p4), l3 = f3.substr(p4 + 1)) : (u4 = f3, l3 = ""), c1 = decodeURIComponent(u4), d2 = decodeURIComponent(l3), Ft(n2, c1) ? Array.isArray(n2[c1]) ? n2[c1].push(d2) : n2[c1] = [
                n2[c1],
                d2
            ] : n2[c1] = d2;
        }
        return n2;
    }, Bt = function(t1) {
        switch(typeof t1){
            case "string":
                return t1;
            case "boolean":
                return t1 ? "true" : "false";
            case "number":
                return isFinite(t1) ? t1 : "";
            default:
                return "";
        }
    }, Gt = function(t1, e1, r3, i3) {
        return e1 = e1 || "&", r3 = r3 || "=", null === t1 && (t1 = void 0), "object" == typeof t1 ? Object.keys(t1).map(function(i4) {
            var n2 = encodeURIComponent(Bt(i4)) + r3;
            return Array.isArray(t1[i4]) ? t1[i4].map(function(t2) {
                return n2 + encodeURIComponent(Bt(t2));
            }).join(e1) : n2 + encodeURIComponent(Bt(t1[i4]));
        }).join(e1) : i3 ? encodeURIComponent(Bt(i3)) + r3 + encodeURIComponent(Bt(t1)) : "";
    }, Xt = nt(function(t1, e1) {
        e1.decode = e1.parse = Ut, e1.encode = e1.stringify = Gt;
    }), kt = ie, Ht = function(t1, e1) {
        return ie(t1, !1, !0).resolve(e1);
    }, Yt = function(t1) {
        Lt.isString(t1) && (t1 = ie(t1));
        if (!(t1 instanceof jt)) return jt.prototype.format.call(t1);
        return t1.format();
    };
    function jt() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
    }
    var Vt = /^([a-z0-9.+-]+:)/i, Wt = /:[0-9]*$/, zt = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, qt = [
        "{",
        "}",
        "|",
        "\\",
        "^",
        "`"
    ].concat([
        "<",
        ">",
        '"',
        "`",
        " ",
        "\r",
        "\n",
        "\t"
    ]), Kt = [
        "'"
    ].concat(qt), Zt = [
        "%",
        "/",
        "?",
        ";",
        "#"
    ].concat(Kt), Qt = [
        "/",
        "?",
        "#"
    ], Jt = /^[+a-z0-9A-Z_-]{0,63}$/, $t = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, te = {
        javascript: !0,
        "javascript:": !0
    }, ee = {
        javascript: !0,
        "javascript:": !0
    }, re = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
    };
    function ie(t1, e1, r3) {
        if (t1 && Lt.isObject(t1) && t1 instanceof jt) return t1;
        var i3 = new jt;
        return i3.parse(t1, e1, r3), i3;
    }
    jt.prototype.parse = function(t1, e1, r3) {
        if (!Lt.isString(t1)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t1);
        var i3 = t1.indexOf("?"), n2 = -1 !== i3 && i3 < t1.indexOf("#") ? "?" : "#", o4 = t1.split(n2);
        o4[0] = o4[0].replace(/\\/g, "/");
        var s3 = t1 = o4.join(n2);
        if (s3 = s3.trim(), !r3 && 1 === t1.split("#").length) {
            var a6 = zt.exec(s3);
            if (a6) return this.path = s3, this.href = s3, this.pathname = a6[1], a6[2] ? (this.search = a6[2], this.query = e1 ? Xt.parse(this.search.substr(1)) : this.search.substr(1)) : e1 && (this.search = "", this.query = {
            }), this;
        }
        var h5 = Vt.exec(s3);
        if (h5) {
            var u5 = (h5 = h5[0]).toLowerCase();
            this.protocol = u5, s3 = s3.substr(h5.length);
        }
        if (r3 || h5 || s3.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var l4 = "//" === s3.substr(0, 2);
            !l4 || h5 && ee[h5] || (s3 = s3.substr(2), this.slashes = !0);
        }
        if (!ee[h5] && (l4 || h5 && !re[h5])) {
            for(var c2, d3, f4 = -1, p5 = 0; p5 < Qt.length; p5++)-1 !== (_ = s3.indexOf(Qt[p5])) && (-1 === f4 || _ < f4) && (f4 = _);
            -1 !== (d3 = -1 === f4 ? s3.lastIndexOf("@") : s3.lastIndexOf("@", f4)) && (c2 = s3.slice(0, d3), s3 = s3.slice(d3 + 1), this.auth = decodeURIComponent(c2)), f4 = -1;
            for(p5 = 0; p5 < Zt.length; p5++){
                var _;
                -1 !== (_ = s3.indexOf(Zt[p5])) && (-1 === f4 || _ < f4) && (f4 = _);
            }
            -1 === f4 && (f4 = s3.length), this.host = s3.slice(0, f4), s3 = s3.slice(f4), this.parseHost(), this.hostname = this.hostname || "";
            var m1 = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!m1) for(var v1 = this.hostname.split(/\./), y1 = (p5 = 0, v1.length); p5 < y1; p5++){
                var E = v1[p5];
                if (E && !E.match(Jt)) {
                    for(var g1 = "", T1 = 0, b1 = E.length; T1 < b1; T1++)E.charCodeAt(T1) > 127 ? g1 += "x" : g1 += E[T1];
                    if (!g1.match(Jt)) {
                        var R1 = v1.slice(0, p5), x1 = v1.slice(p5 + 1), A1 = E.match($t);
                        A1 && (R1.push(A1[1]), x1.unshift(A1[2])), x1.length && (s3 = "/" + x1.join(".") + s3), this.hostname = R1.join(".");
                        break;
                    }
                }
            }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), m1 || (this.hostname = Ct.toASCII(this.hostname));
            var S1 = this.port ? ":" + this.port : "", O1 = this.hostname || "";
            this.host = O1 + S1, this.href += this.host, m1 && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s3[0] && (s3 = "/" + s3));
        }
        if (!te[u5]) for(p5 = 0, y1 = Kt.length; p5 < y1; p5++){
            var I1 = Kt[p5];
            if (-1 !== s3.indexOf(I1)) {
                var P1 = encodeURIComponent(I1);
                P1 === I1 && (P1 = escape(I1)), s3 = s3.split(I1).join(P1);
            }
        }
        var M1 = s3.indexOf("#");
        -1 !== M1 && (this.hash = s3.substr(M1), s3 = s3.slice(0, M1));
        var D1 = s3.indexOf("?");
        if (-1 !== D1 ? (this.search = s3.substr(D1), this.query = s3.substr(D1 + 1), e1 && (this.query = Xt.parse(this.query)), s3 = s3.slice(0, D1)) : e1 && (this.search = "", this.query = {
        }), s3 && (this.pathname = s3), re[u5] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            S1 = this.pathname || "";
            var N1 = this.search || "";
            this.path = S1 + N1;
        }
        return this.href = this.format(), this;
    }, jt.prototype.format = function() {
        var t1 = this.auth || "";
        t1 && (t1 = (t1 = encodeURIComponent(t1)).replace(/%3A/i, ":"), t1 += "@");
        var e1 = this.protocol || "", r3 = this.pathname || "", i3 = this.hash || "", n2 = !1, o4 = "";
        this.host ? n2 = t1 + this.host : this.hostname && (n2 = t1 + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (n2 += ":" + this.port)), this.query && Lt.isObject(this.query) && Object.keys(this.query).length && (o4 = Xt.stringify(this.query));
        var s3 = this.search || o4 && "?" + o4 || "";
        return e1 && ":" !== e1.substr(-1) && (e1 += ":"), this.slashes || (!e1 || re[e1]) && !1 !== n2 ? (n2 = "//" + (n2 || ""), r3 && "/" !== r3.charAt(0) && (r3 = "/" + r3)) : n2 || (n2 = ""), i3 && "#" !== i3.charAt(0) && (i3 = "#" + i3), s3 && "?" !== s3.charAt(0) && (s3 = "?" + s3), e1 + n2 + (r3 = r3.replace(/[?#]/g, function(t2) {
            return encodeURIComponent(t2);
        })) + (s3 = s3.replace("#", "%23")) + i3;
    }, jt.prototype.resolve = function(t1) {
        return this.resolveObject(ie(t1, !1, !0)).format();
    }, jt.prototype.resolveObject = function(t1) {
        if (Lt.isString(t1)) {
            var e1 = new jt;
            e1.parse(t1, !1, !0), t1 = e1;
        }
        for(var r3 = new jt, i3 = Object.keys(this), n2 = 0; n2 < i3.length; n2++){
            var o4 = i3[n2];
            r3[o4] = this[o4];
        }
        if (r3.hash = t1.hash, "" === t1.href) return r3.href = r3.format(), r3;
        if (t1.slashes && !t1.protocol) {
            for(var s3 = Object.keys(t1), a7 = 0; a7 < s3.length; a7++){
                var h5 = s3[a7];
                "protocol" !== h5 && (r3[h5] = t1[h5]);
            }
            return re[r3.protocol] && r3.hostname && !r3.pathname && (r3.path = r3.pathname = "/"), r3.href = r3.format(), r3;
        }
        if (t1.protocol && t1.protocol !== r3.protocol) {
            if (!re[t1.protocol]) {
                for(var u6 = Object.keys(t1), l5 = 0; l5 < u6.length; l5++){
                    var c3 = u6[l5];
                    r3[c3] = t1[c3];
                }
                return r3.href = r3.format(), r3;
            }
            if (r3.protocol = t1.protocol, t1.host || ee[t1.protocol]) r3.pathname = t1.pathname;
            else {
                for(var d4 = (t1.pathname || "").split("/"); d4.length && !(t1.host = d4.shift()););
                t1.host || (t1.host = ""), t1.hostname || (t1.hostname = ""), "" !== d4[0] && d4.unshift(""), d4.length < 2 && d4.unshift(""), r3.pathname = d4.join("/");
            }
            if (r3.search = t1.search, r3.query = t1.query, r3.host = t1.host || "", r3.auth = t1.auth, r3.hostname = t1.hostname || t1.host, r3.port = t1.port, r3.pathname || r3.search) {
                var f5 = r3.pathname || "", p6 = r3.search || "";
                r3.path = f5 + p6;
            }
            return r3.slashes = r3.slashes || t1.slashes, r3.href = r3.format(), r3;
        }
        var _ = r3.pathname && "/" === r3.pathname.charAt(0), m2 = t1.host || t1.pathname && "/" === t1.pathname.charAt(0), v2 = m2 || _ || r3.host && t1.pathname, y2 = v2, E = r3.pathname && r3.pathname.split("/") || [], g2 = (d4 = t1.pathname && t1.pathname.split("/") || [], r3.protocol && !re[r3.protocol]);
        if (g2 && (r3.hostname = "", r3.port = null, r3.host && ("" === E[0] ? E[0] = r3.host : E.unshift(r3.host)), r3.host = "", t1.protocol && (t1.hostname = null, t1.port = null, t1.host && ("" === d4[0] ? d4[0] = t1.host : d4.unshift(t1.host)), t1.host = null), v2 = v2 && ("" === d4[0] || "" === E[0])), m2) r3.host = t1.host || "" === t1.host ? t1.host : r3.host, r3.hostname = t1.hostname || "" === t1.hostname ? t1.hostname : r3.hostname, r3.search = t1.search, r3.query = t1.query, E = d4;
        else if (d4.length) E || (E = []), E.pop(), E = E.concat(d4), r3.search = t1.search, r3.query = t1.query;
        else if (!Lt.isNullOrUndefined(t1.search)) {
            if (g2) r3.hostname = r3.host = E.shift(), (A3 = !!(r3.host && r3.host.indexOf("@") > 0) && r3.host.split("@")) && (r3.auth = A3.shift(), r3.host = r3.hostname = A3.shift());
            return r3.search = t1.search, r3.query = t1.query, Lt.isNull(r3.pathname) && Lt.isNull(r3.search) || (r3.path = (r3.pathname ? r3.pathname : "") + (r3.search ? r3.search : "")), r3.href = r3.format(), r3;
        }
        if (!E.length) return r3.pathname = null, r3.search ? r3.path = "/" + r3.search : r3.path = null, r3.href = r3.format(), r3;
        for(var T2 = E.slice(-1)[0], b2 = (r3.host || t1.host || E.length > 1) && ("." === T2 || ".." === T2) || "" === T2, R2 = 0, x2 = E.length; x2 >= 0; x2--)"." === (T2 = E[x2]) ? E.splice(x2, 1) : ".." === T2 ? (E.splice(x2, 1), R2++) : R2 && (E.splice(x2, 1), R2--);
        if (!v2 && !y2) for(; R2--;)E.unshift("..");
        !v2 || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""), b2 && "/" !== E.join("/").substr(-1) && E.push("");
        var A3, S2 = "" === E[0] || E[0] && "/" === E[0].charAt(0);
        g2 && (r3.hostname = r3.host = S2 ? "" : E.length ? E.shift() : "", (A3 = !!(r3.host && r3.host.indexOf("@") > 0) && r3.host.split("@")) && (r3.auth = A3.shift(), r3.host = r3.hostname = A3.shift()));
        return (v2 = v2 || r3.host && E.length) && !S2 && E.unshift(""), E.length ? r3.pathname = E.join("/") : (r3.pathname = null, r3.path = null), Lt.isNull(r3.pathname) && Lt.isNull(r3.search) || (r3.path = (r3.pathname ? r3.pathname : "") + (r3.search ? r3.search : "")), r3.auth = t1.auth || r3.auth, r3.slashes = r3.slashes || t1.slashes, r3.href = r3.format(), r3;
    }, jt.prototype.parseHost = function() {
        var t1 = this.host, e2 = Wt.exec(t1);
        e2 && (":" !== (e2 = e2[0]) && (this.port = e2.substr(1)), t1 = t1.substr(0, t1.length - e2.length)), t1 && (this.hostname = t1);
    };
    !function(t1) {
        t1[t1.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t1[t1.WEBGL = 1] = "WEBGL", t1[t1.WEBGL2 = 2] = "WEBGL2";
    }(t.ENV || (t.ENV = {
    })), (function(t1) {
        t1[t1.UNKNOWN = 0] = "UNKNOWN", t1[t1.WEBGL = 1] = "WEBGL", t1[t1.CANVAS = 2] = "CANVAS";
    })(t.RENDERER_TYPE || (t.RENDERER_TYPE = {
    })), (function(t1) {
        t1[t1.COLOR = 16384] = "COLOR", t1[t1.DEPTH = 256] = "DEPTH", t1[t1.STENCIL = 1024] = "STENCIL";
    })(t.BUFFER_BITS || (t.BUFFER_BITS = {
    })), (function(t1) {
        t1[t1.NORMAL = 0] = "NORMAL", t1[t1.ADD = 1] = "ADD", t1[t1.MULTIPLY = 2] = "MULTIPLY", t1[t1.SCREEN = 3] = "SCREEN", t1[t1.OVERLAY = 4] = "OVERLAY", t1[t1.DARKEN = 5] = "DARKEN", t1[t1.LIGHTEN = 6] = "LIGHTEN", t1[t1.COLOR_DODGE = 7] = "COLOR_DODGE", t1[t1.COLOR_BURN = 8] = "COLOR_BURN", t1[t1.HARD_LIGHT = 9] = "HARD_LIGHT", t1[t1.SOFT_LIGHT = 10] = "SOFT_LIGHT", t1[t1.DIFFERENCE = 11] = "DIFFERENCE", t1[t1.EXCLUSION = 12] = "EXCLUSION", t1[t1.HUE = 13] = "HUE", t1[t1.SATURATION = 14] = "SATURATION", t1[t1.COLOR = 15] = "COLOR", t1[t1.LUMINOSITY = 16] = "LUMINOSITY", t1[t1.NORMAL_NPM = 17] = "NORMAL_NPM", t1[t1.ADD_NPM = 18] = "ADD_NPM", t1[t1.SCREEN_NPM = 19] = "SCREEN_NPM", t1[t1.NONE = 20] = "NONE", t1[t1.SRC_OVER = 0] = "SRC_OVER", t1[t1.SRC_IN = 21] = "SRC_IN", t1[t1.SRC_OUT = 22] = "SRC_OUT", t1[t1.SRC_ATOP = 23] = "SRC_ATOP", t1[t1.DST_OVER = 24] = "DST_OVER", t1[t1.DST_IN = 25] = "DST_IN", t1[t1.DST_OUT = 26] = "DST_OUT", t1[t1.DST_ATOP = 27] = "DST_ATOP", t1[t1.ERASE = 26] = "ERASE", t1[t1.SUBTRACT = 28] = "SUBTRACT", t1[t1.XOR = 29] = "XOR";
    })(t.BLEND_MODES || (t.BLEND_MODES = {
    })), (function(t1) {
        t1[t1.POINTS = 0] = "POINTS", t1[t1.LINES = 1] = "LINES", t1[t1.LINE_LOOP = 2] = "LINE_LOOP", t1[t1.LINE_STRIP = 3] = "LINE_STRIP", t1[t1.TRIANGLES = 4] = "TRIANGLES", t1[t1.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t1[t1.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
    })(t.DRAW_MODES || (t.DRAW_MODES = {
    })), (function(t1) {
        t1[t1.RGBA = 6408] = "RGBA", t1[t1.RGB = 6407] = "RGB", t1[t1.RG = 33319] = "RG", t1[t1.RED = 6403] = "RED", t1[t1.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t1[t1.RGB_INTEGER = 36248] = "RGB_INTEGER", t1[t1.RG_INTEGER = 33320] = "RG_INTEGER", t1[t1.RED_INTEGER = 36244] = "RED_INTEGER", t1[t1.ALPHA = 6406] = "ALPHA", t1[t1.LUMINANCE = 6409] = "LUMINANCE", t1[t1.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t1[t1.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t1[t1.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
    })(t.FORMATS || (t.FORMATS = {
    })), (function(t1) {
        t1[t1.TEXTURE_2D = 3553] = "TEXTURE_2D", t1[t1.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t1[t1.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t1[t1.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t1[t1.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t1[t1.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t1[t1.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t1[t1.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t1[t1.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
    })(t.TARGETS || (t.TARGETS = {
    })), (function(t1) {
        t1[t1.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t1[t1.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t1[t1.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t1[t1.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t1[t1.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t1[t1.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t1[t1.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t1[t1.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t1[t1.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t1[t1.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t1[t1.BYTE = 5120] = "BYTE", t1[t1.SHORT = 5122] = "SHORT", t1[t1.INT = 5124] = "INT", t1[t1.FLOAT = 5126] = "FLOAT", t1[t1.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t1[t1.HALF_FLOAT = 36193] = "HALF_FLOAT";
    })(t.TYPES || (t.TYPES = {
    })), (function(t1) {
        t1[t1.FLOAT = 0] = "FLOAT", t1[t1.INT = 1] = "INT", t1[t1.UINT = 2] = "UINT";
    })(t.SAMPLER_TYPES || (t.SAMPLER_TYPES = {
    })), (function(t1) {
        t1[t1.NEAREST = 0] = "NEAREST", t1[t1.LINEAR = 1] = "LINEAR";
    })(t.SCALE_MODES || (t.SCALE_MODES = {
    })), (function(t1) {
        t1[t1.CLAMP = 33071] = "CLAMP", t1[t1.REPEAT = 10497] = "REPEAT", t1[t1.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT";
    })(t.WRAP_MODES || (t.WRAP_MODES = {
    })), (function(t1) {
        t1[t1.OFF = 0] = "OFF", t1[t1.POW2 = 1] = "POW2", t1[t1.ON = 2] = "ON", t1[t1.ON_MANUAL = 3] = "ON_MANUAL";
    })(t.MIPMAP_MODES || (t.MIPMAP_MODES = {
    })), (function(t1) {
        t1[t1.NPM = 0] = "NPM", t1[t1.UNPACK = 1] = "UNPACK", t1[t1.PMA = 2] = "PMA", t1[t1.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t1[t1.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t1[t1.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA";
    })(t.ALPHA_MODES || (t.ALPHA_MODES = {
    })), (function(t1) {
        t1[t1.NO = 0] = "NO", t1[t1.YES = 1] = "YES", t1[t1.AUTO = 2] = "AUTO", t1[t1.BLEND = 0] = "BLEND", t1[t1.CLEAR = 1] = "CLEAR", t1[t1.BLIT = 2] = "BLIT";
    })(t.CLEAR_MODES || (t.CLEAR_MODES = {
    })), (function(t1) {
        t1[t1.AUTO = 0] = "AUTO", t1[t1.MANUAL = 1] = "MANUAL";
    })(t.GC_MODES || (t.GC_MODES = {
    })), (function(t1) {
        t1.LOW = "lowp", t1.MEDIUM = "mediump", t1.HIGH = "highp";
    })(t.PRECISION || (t.PRECISION = {
    })), (function(t1) {
        t1[t1.NONE = 0] = "NONE", t1[t1.SCISSOR = 1] = "SCISSOR", t1[t1.STENCIL = 2] = "STENCIL", t1[t1.SPRITE = 3] = "SPRITE";
    })(t.MASK_TYPES || (t.MASK_TYPES = {
    })), (function(t1) {
        t1[t1.NONE = 0] = "NONE", t1[t1.LOW = 2] = "LOW", t1[t1.MEDIUM = 4] = "MEDIUM", t1[t1.HIGH = 8] = "HIGH";
    })(t.MSAA_QUALITY || (t.MSAA_QUALITY = {
    })), (function(t1) {
        t1[t1.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t1[t1.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t1[t1.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER";
    })(t.BUFFER_TYPE || (t.BUFFER_TYPE = {
    }));
    var ne = {
        parse: kt,
        format: Yt,
        resolve: Ht
    };
    rt.RETINA_PREFIX = /@([0-9\.]+)x/, rt.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
    var oe, se = !1, ae = "6.1.3";
    function he(t1) {
        var e2;
        if (!se) {
            if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                var r3 = [
                    "\n %c %c %c PixiJS " + ae + " - ✰ " + t1 + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n",
                    "background: #ff66a5; padding:5px 0;",
                    "background: #ff66a5; padding:5px 0;",
                    "color: #ff66a5; background: #030307; padding:5px 0;",
                    "background: #ff66a5; padding:5px 0;",
                    "background: #ffc3dc; padding:5px 0;",
                    "background: #ff66a5; padding:5px 0;",
                    "color: #ff2424; background: #fff; padding:5px 0;",
                    "color: #ff2424; background: #fff; padding:5px 0;",
                    "color: #ff2424; background: #fff; padding:5px 0;"
                ];
                (e2 = self.console).log.apply(e2, r3);
            } else self.console && self.console.log("PixiJS " + ae + " - " + t1 + " - http://www.pixijs.com/");
            se = !0;
        }
    }
    function ue() {
        return (void 0) === oe && (oe = (function() {
            var t1 = {
                stencil: !0,
                failIfMajorPerformanceCaveat: rt.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
            };
            try {
                if (!self.WebGLRenderingContext) return !1;
                var e2 = document.createElement("canvas"), r4 = e2.getContext("webgl", t1) || e2.getContext("experimental-webgl", t1), i3 = !(!r4 || !r4.getContextAttributes().stencil);
                if (r4) {
                    var n2 = r4.getExtension("WEBGL_lose_context");
                    n2 && n2.loseContext();
                }
                return r4 = null, i3;
            } catch (t2) {
                return !1;
            }
        })()), oe;
    }
    var le = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        goldenrod: "#daa520",
        gold: "#ffd700",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavenderblush: "#fff0f5",
        lavender: "#e6e6fa",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    function ce(t1, e2) {
        return (void 0) === e2 && (e2 = []), e2[0] = (t1 >> 16 & 255) / 255, e2[1] = (t1 >> 8 & 255) / 255, e2[2] = (255 & t1) / 255, e2;
    }
    function de(t1) {
        var e2 = t1.toString(16);
        return "#" + ("000000".substr(0, 6 - e2.length) + e2);
    }
    function fe(t1) {
        return "string" == typeof t1 && "#" === (t1 = le[t1.toLowerCase()] || t1)[0] && (t1 = t1.substr(1)), parseInt(t1, 16);
    }
    var pe = function() {
        for(var e2 = [], r4 = [], i3 = 0; i3 < 32; i3++)e2[i3] = i3, r4[i3] = i3;
        e2[t.BLEND_MODES.NORMAL_NPM] = t.BLEND_MODES.NORMAL, e2[t.BLEND_MODES.ADD_NPM] = t.BLEND_MODES.ADD, e2[t.BLEND_MODES.SCREEN_NPM] = t.BLEND_MODES.SCREEN, r4[t.BLEND_MODES.NORMAL] = t.BLEND_MODES.NORMAL_NPM, r4[t.BLEND_MODES.ADD] = t.BLEND_MODES.ADD_NPM, r4[t.BLEND_MODES.SCREEN] = t.BLEND_MODES.SCREEN_NPM;
        var n3 = [];
        return n3.push(r4), n3.push(e2), n3;
    }();
    function _e(t1, e2) {
        return pe[e2 ? 1 : 0][t1];
    }
    function me(t1, e2, r4, i3) {
        return r4 = r4 || new Float32Array(4), i3 || (void 0) === i3 ? (r4[0] = t1[0] * e2, r4[1] = t1[1] * e2, r4[2] = t1[2] * e2) : (r4[0] = t1[0], r4[1] = t1[1], r4[2] = t1[2]), r4[3] = e2, r4;
    }
    function ve(t1, e2) {
        if (1 === e2) return (255 * e2 << 24) + t1;
        if (0 === e2) return 0;
        var r4 = t1 >> 16 & 255, i3 = t1 >> 8 & 255, n3 = 255 & t1;
        return (255 * e2 << 24) + ((r4 = r4 * e2 + 0.5 | 0) << 16) + ((i3 = i3 * e2 + 0.5 | 0) << 8) + (n3 * e2 + 0.5 | 0);
    }
    function ye(t1, e2, r4, i3) {
        return (r4 = r4 || new Float32Array(4))[0] = (t1 >> 16 & 255) / 255, r4[1] = (t1 >> 8 & 255) / 255, r4[2] = (255 & t1) / 255, (i3 || (void 0) === i3) && (r4[0] *= e2, r4[1] *= e2, r4[2] *= e2), r4[3] = e2, r4;
    }
    function Ee(t1, e2) {
        (void 0) === e2 && (e2 = null);
        var r4 = 6 * t1;
        if ((e2 = e2 || new Uint16Array(r4)).length !== r4) throw new Error("Out buffer length is incorrect, got " + e2.length + " and expected " + r4);
        for(var i3 = 0, n3 = 0; i3 < r4; i3 += 6, n3 += 4)e2[i3 + 0] = n3 + 0, e2[i3 + 1] = n3 + 1, e2[i3 + 2] = n3 + 2, e2[i3 + 3] = n3 + 0, e2[i3 + 4] = n3 + 2, e2[i3 + 5] = n3 + 3;
        return e2;
    }
    function ge(t1) {
        if (4 === t1.BYTES_PER_ELEMENT) return t1 instanceof Float32Array ? "Float32Array" : t1 instanceof Uint32Array ? "Uint32Array" : "Int32Array";
        if (2 === t1.BYTES_PER_ELEMENT) {
            if (t1 instanceof Uint16Array) return "Uint16Array";
        } else if (1 === t1.BYTES_PER_ELEMENT && t1 instanceof Uint8Array) return "Uint8Array";
        return null;
    }
    var Te = {
        Float32Array: Float32Array,
        Uint32Array: Uint32Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array
    };
    function be(t1) {
        return t1 += 0 === t1 ? 1 : 0, --t1, t1 |= t1 >>> 1, t1 |= t1 >>> 2, t1 |= t1 >>> 4, t1 |= t1 >>> 8, 1 + (t1 |= t1 >>> 16);
    }
    function Re(t1) {
        return !(t1 & t1 - 1 || !t1);
    }
    function xe(t1) {
        var e2 = (t1 > 65535 ? 1 : 0) << 4, r4 = ((t1 >>>= e2) > 255 ? 1 : 0) << 3;
        return e2 |= r4, e2 |= r4 = ((t1 >>>= r4) > 15 ? 1 : 0) << 2, (e2 |= r4 = ((t1 >>>= r4) > 3 ? 1 : 0) << 1) | (t1 >>>= r4) >> 1;
    }
    function Ae(t1, e2, r4) {
        var i3, n3 = t1.length;
        if (!(e2 >= n3 || 0 === r4)) {
            var o5 = n3 - (r4 = e2 + r4 > n3 ? n3 - e2 : r4);
            for(i3 = e2; i3 < o5; ++i3)t1[i3] = t1[i3 + r4];
            t1.length = o5;
        }
    }
    function Se(t1) {
        return 0 === t1 ? 0 : t1 < 0 ? -1 : 1;
    }
    var Oe = 0;
    function Ie() {
        return ++Oe;
    }
    var Pe = {
    };
    var Me = {
    }, De = Object.create(null), Ne = Object.create(null);
    var we = function() {
        function t1(t2, e2, r4) {
            this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = r4 || rt.RESOLUTION, this.resize(t2, e2);
        }
        return t1.prototype.clear = function() {
            this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }, t1.prototype.resize = function(t2, e2) {
            this.canvas.width = Math.round(t2 * this.resolution), this.canvas.height = Math.round(e2 * this.resolution);
        }, t1.prototype.destroy = function() {
            this.context = null, this.canvas = null;
        }, Object.defineProperty(t1.prototype, "width", {
            get: function() {
                return this.canvas.width;
            },
            set: function(t2) {
                this.canvas.width = Math.round(t2);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t1.prototype, "height", {
            get: function() {
                return this.canvas.height;
            },
            set: function(t2) {
                this.canvas.height = Math.round(t2);
            },
            enumerable: !1,
            configurable: !0
        }), t1;
    }();
    function Ce(t1) {
        var e2, r4, i3, n3 = t1.width, o6 = t1.height, s4 = t1.getContext("2d"), a8 = s4.getImageData(0, 0, n3, o6).data, h6 = a8.length, u7 = {
            top: null,
            left: null,
            right: null,
            bottom: null
        }, l6 = null;
        for(e2 = 0; e2 < h6; e2 += 4)0 !== a8[e2 + 3] && (r4 = e2 / 4 % n3, i3 = ~~(e2 / 4 / n3), null === u7.top && (u7.top = i3), null === u7.left ? u7.left = r4 : r4 < u7.left && (u7.left = r4), null === u7.right ? u7.right = r4 + 1 : u7.right < r4 && (u7.right = r4 + 1), null === u7.bottom ? u7.bottom = i3 : u7.bottom < i3 && (u7.bottom = i3));
        return null !== u7.top && (n3 = u7.right - u7.left, o6 = u7.bottom - u7.top + 1, l6 = s4.getImageData(u7.left, u7.top, n3, o6)), {
            height: o6,
            width: n3,
            data: l6
        };
    }
    var Le, Fe = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
    function Ue(t1, e2) {
        if ((void 0) === e2 && (e2 = self.location), 0 === t1.indexOf("data:")) return "";
        e2 = e2 || self.location, Le || (Le = document.createElement("a")), Le.href = t1;
        var r4 = ne.parse(Le.href), i3 = !r4.port && "" === e2.port || r4.port === e2.port;
        return r4.hostname === e2.hostname && i3 && r4.protocol === e2.protocol ? "" : "anonymous";
    }
    function Be(t1, e2) {
        var r4 = rt.RETINA_PREFIX.exec(t1);
        return r4 ? parseFloat(r4[1]) : (void 0) !== e2 ? e2 : 1;
    }
    var Ge = {
        __proto__: null,
        BaseTextureCache: Ne,
        CanvasRenderTarget: we,
        DATA_URI: Fe,
        ProgramCache: Me,
        TextureCache: De,
        clearTextureCache: function() {
            var t1;
            for(t1 in De)delete De[t1];
            for(t1 in Ne)delete Ne[t1];
        },
        correctBlendMode: _e,
        createIndicesForQuads: Ee,
        decomposeDataUri: function(t1) {
            var e2 = Fe.exec(t1);
            if (e2) return {
                mediaType: e2[1] ? e2[1].toLowerCase() : void 0,
                subType: e2[2] ? e2[2].toLowerCase() : void 0,
                charset: e2[3] ? e2[3].toLowerCase() : void 0,
                encoding: e2[4] ? e2[4].toLowerCase() : void 0,
                data: e2[5]
            };
        },
        deprecation: function(t1, e2, r4) {
            if ((void 0) === r4 && (r4 = 3), !Pe[e2]) {
                var i3 = (new Error).stack;
                (void 0) === i3 ? console.warn("PixiJS Deprecation Warning: ", e2 + "\nDeprecated since v" + t1) : (i3 = i3.split("\n").splice(r4).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", e2 + "\nDeprecated since v" + t1), console.warn(i3), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", e2 + "\nDeprecated since v" + t1), console.warn(i3))), Pe[e2] = !0;
            }
        },
        destroyTextureCache: function() {
            var t1;
            for(t1 in De)De[t1].destroy();
            for(t1 in Ne)Ne[t1].destroy();
        },
        determineCrossOrigin: Ue,
        getBufferType: ge,
        getResolutionOfUrl: Be,
        hex2rgb: ce,
        hex2string: de,
        interleaveTypedArrays: function(t1, e2) {
            for(var r4 = 0, i4 = 0, n3 = {
            }, o6 = 0; o6 < t1.length; o6++)i4 += e2[o6], r4 += t1[o6].length;
            var s4 = new ArrayBuffer(4 * r4), a8 = null, h6 = 0;
            for(o6 = 0; o6 < t1.length; o6++){
                var u7 = e2[o6], l6 = t1[o6], c4 = ge(l6);
                n3[c4] || (n3[c4] = new Te[c4](s4)), a8 = n3[c4];
                for(var d5 = 0; d5 < l6.length; d5++)a8[(d5 / u7 | 0) * i4 + h6 + d5 % u7] = l6[d5];
                h6 += u7;
            }
            return new Float32Array(s4);
        },
        isPow2: Re,
        isWebGLSupported: ue,
        log2: xe,
        nextPow2: be,
        premultiplyBlendMode: pe,
        premultiplyRgba: me,
        premultiplyTint: ve,
        premultiplyTintToRgba: ye,
        removeItems: Ae,
        rgb2hex: function(t1) {
            return (255 * t1[0] << 16) + (255 * t1[1] << 8) + (255 * t1[2] | 0);
        },
        sayHello: he,
        sign: Se,
        skipHello: function() {
            se = !0;
        },
        string2hex: fe,
        trimCanvas: Ce,
        uid: Ie,
        url: ne,
        isMobile: et,
        EventEmitter: ot,
        earcut: st
    }, Xe = 2 * Math.PI, ke = 180 / Math.PI, He = Math.PI / 180;
    !function(t1) {
        t1[t1.POLY = 0] = "POLY", t1[t1.RECT = 1] = "RECT", t1[t1.CIRC = 2] = "CIRC", t1[t1.ELIP = 3] = "ELIP", t1[t1.RREC = 4] = "RREC";
    }(t.SHAPES || (t.SHAPES = {
    }));
    var Ye = function() {
        function e2(e3, r4, i4, n3) {
            (void 0) === e3 && (e3 = 0), (void 0) === r4 && (r4 = 0), (void 0) === i4 && (i4 = 0), (void 0) === n3 && (n3 = 0), this.x = Number(e3), this.y = Number(r4), this.width = Number(i4), this.height = Number(n3), this.type = t.SHAPES.RECT;
        }
        return Object.defineProperty(e2.prototype, "left", {
            get: function() {
                return this.x;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e2.prototype, "right", {
            get: function() {
                return this.x + this.width;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e2.prototype, "top", {
            get: function() {
                return this.y;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e2.prototype, "bottom", {
            get: function() {
                return this.y + this.height;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e2, "EMPTY", {
            get: function() {
                return new e2(0, 0, 0, 0);
            },
            enumerable: !1,
            configurable: !0
        }), e2.prototype.clone = function() {
            return new e2(this.x, this.y, this.width, this.height);
        }, e2.prototype.copyFrom = function(t1) {
            return this.x = t1.x, this.y = t1.y, this.width = t1.width, this.height = t1.height, this;
        }, e2.prototype.copyTo = function(t1) {
            return t1.x = this.x, t1.y = this.y, t1.width = this.width, t1.height = this.height, t1;
        }, e2.prototype.contains = function(t1, e3) {
            return !(this.width <= 0 || this.height <= 0) && t1 >= this.x && t1 < this.x + this.width && e3 >= this.y && e3 < this.y + this.height;
        }, e2.prototype.pad = function(t1, e3) {
            return (void 0) === t1 && (t1 = 0), (void 0) === e3 && (e3 = t1), this.x -= t1, this.y -= e3, this.width += 2 * t1, this.height += 2 * e3, this;
        }, e2.prototype.fit = function(t1) {
            var e3 = Math.max(this.x, t1.x), r4 = Math.min(this.x + this.width, t1.x + t1.width), i4 = Math.max(this.y, t1.y), n3 = Math.min(this.y + this.height, t1.y + t1.height);
            return this.x = e3, this.width = Math.max(r4 - e3, 0), this.y = i4, this.height = Math.max(n3 - i4, 0), this;
        }, e2.prototype.ceil = function(t1, e3) {
            (void 0) === t1 && (t1 = 1), (void 0) === e3 && (e3 = 0.001);
            var r4 = Math.ceil((this.x + this.width - e3) * t1) / t1, i4 = Math.ceil((this.y + this.height - e3) * t1) / t1;
            return this.x = Math.floor((this.x + e3) * t1) / t1, this.y = Math.floor((this.y + e3) * t1) / t1, this.width = r4 - this.x, this.height = i4 - this.y, this;
        }, e2.prototype.enlarge = function(t1) {
            var e3 = Math.min(this.x, t1.x), r4 = Math.max(this.x + this.width, t1.x + t1.width), i4 = Math.min(this.y, t1.y), n3 = Math.max(this.y + this.height, t1.y + t1.height);
            return this.x = e3, this.width = r4 - e3, this.y = i4, this.height = n3 - i4, this;
        }, e2;
    }(), je = function() {
        function e2(e3, r4, i4) {
            (void 0) === e3 && (e3 = 0), (void 0) === r4 && (r4 = 0), (void 0) === i4 && (i4 = 0), this.x = e3, this.y = r4, this.radius = i4, this.type = t.SHAPES.CIRC;
        }
        return e2.prototype.clone = function() {
            return new e2(this.x, this.y, this.radius);
        }, e2.prototype.contains = function(t1, e3) {
            if (this.radius <= 0) return !1;
            var r4 = this.radius * this.radius, i4 = this.x - t1, n3 = this.y - e3;
            return (i4 *= i4) + (n3 *= n3) <= r4;
        }, e2.prototype.getBounds = function() {
            return new Ye(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius);
        }, e2;
    }(), Ve = function() {
        function e2(e3, r4, i4, n3) {
            (void 0) === e3 && (e3 = 0), (void 0) === r4 && (r4 = 0), (void 0) === i4 && (i4 = 0), (void 0) === n3 && (n3 = 0), this.x = e3, this.y = r4, this.width = i4, this.height = n3, this.type = t.SHAPES.ELIP;
        }
        return e2.prototype.clone = function() {
            return new e2(this.x, this.y, this.width, this.height);
        }, e2.prototype.contains = function(t1, e3) {
            if (this.width <= 0 || this.height <= 0) return !1;
            var r4 = (t1 - this.x) / this.width, i4 = (e3 - this.y) / this.height;
            return (r4 *= r4) + (i4 *= i4) <= 1;
        }, e2.prototype.getBounds = function() {
            return new Ye(this.x - this.width, this.y - this.height, this.width, this.height);
        }, e2;
    }(), We = function() {
        function e2() {
            for(var e3 = arguments, r4 = [], i4 = 0; i4 < arguments.length; i4++)r4[i4] = e3[i4];
            var n3 = Array.isArray(r4[0]) ? r4[0] : r4;
            if ("number" != typeof n3[0]) {
                for(var o6 = [], s4 = 0, a8 = n3.length; s4 < a8; s4++)o6.push(n3[s4].x, n3[s4].y);
                n3 = o6;
            }
            this.points = n3, this.type = t.SHAPES.POLY, this.closeStroke = !0;
        }
        return e2.prototype.clone = function() {
            var t1 = new e2(this.points.slice());
            return t1.closeStroke = this.closeStroke, t1;
        }, e2.prototype.contains = function(t1, e3) {
            for(var r4 = !1, i4 = this.points.length / 2, n3 = 0, o7 = i4 - 1; n3 < i4; o7 = n3++){
                var s5 = this.points[2 * n3], a9 = this.points[2 * n3 + 1], h6 = this.points[2 * o7], u8 = this.points[2 * o7 + 1];
                a9 > e3 != u8 > e3 && t1 < (e3 - a9) / (u8 - a9) * (h6 - s5) + s5 && (r4 = !r4);
            }
            return r4;
        }, e2;
    }(), ze = function() {
        function e2(e3, r4, i4, n3, o7) {
            (void 0) === e3 && (e3 = 0), (void 0) === r4 && (r4 = 0), (void 0) === i4 && (i4 = 0), (void 0) === n3 && (n3 = 0), (void 0) === o7 && (o7 = 20), this.x = e3, this.y = r4, this.width = i4, this.height = n3, this.radius = o7, this.type = t.SHAPES.RREC;
        }
        return e2.prototype.clone = function() {
            return new e2(this.x, this.y, this.width, this.height, this.radius);
        }, e2.prototype.contains = function(t1, e3) {
            if (this.width <= 0 || this.height <= 0) return !1;
            if (t1 >= this.x && t1 <= this.x + this.width && e3 >= this.y && e3 <= this.y + this.height) {
                if (e3 >= this.y + this.radius && e3 <= this.y + this.height - this.radius || t1 >= this.x + this.radius && t1 <= this.x + this.width - this.radius) return !0;
                var r4 = t1 - (this.x + this.radius), i4 = e3 - (this.y + this.radius), n3 = this.radius * this.radius;
                if (r4 * r4 + i4 * i4 <= n3) return !0;
                if ((r4 = t1 - (this.x + this.width - this.radius)) * r4 + i4 * i4 <= n3) return !0;
                if (r4 * r4 + (i4 = e3 - (this.y + this.height - this.radius)) * i4 <= n3) return !0;
                if ((r4 = t1 - (this.x + this.radius)) * r4 + i4 * i4 <= n3) return !0;
            }
            return !1;
        }, e2;
    }(), qe = function() {
        function t1(t2, e2) {
            (void 0) === t2 && (t2 = 0), (void 0) === e2 && (e2 = 0), this.x = 0, this.y = 0, this.x = t2, this.y = e2;
        }
        return t1.prototype.clone = function() {
            return new t1(this.x, this.y);
        }, t1.prototype.copyFrom = function(t2) {
            return this.set(t2.x, t2.y), this;
        }, t1.prototype.copyTo = function(t2) {
            return t2.set(this.x, this.y), t2;
        }, t1.prototype.equals = function(t2) {
            return t2.x === this.x && t2.y === this.y;
        }, t1.prototype.set = function(t2, e2) {
            return (void 0) === t2 && (t2 = 0), (void 0) === e2 && (e2 = t2), this.x = t2, this.y = e2, this;
        }, t1;
    }(), Ke = function() {
        function t1(t2, e2, r5, i5) {
            (void 0) === r5 && (r5 = 0), (void 0) === i5 && (i5 = 0), this._x = r5, this._y = i5, this.cb = t2, this.scope = e2;
        }
        return t1.prototype.clone = function(e2, r5) {
            return (void 0) === e2 && (e2 = this.cb), (void 0) === r5 && (r5 = this.scope), new t1(e2, r5, this._x, this._y);
        }, t1.prototype.set = function(t2, e2) {
            return (void 0) === t2 && (t2 = 0), (void 0) === e2 && (e2 = t2), this._x === t2 && this._y === e2 || (this._x = t2, this._y = e2, this.cb.call(this.scope)), this;
        }, t1.prototype.copyFrom = function(t2) {
            return this._x === t2.x && this._y === t2.y || (this._x = t2.x, this._y = t2.y, this.cb.call(this.scope)), this;
        }, t1.prototype.copyTo = function(t2) {
            return t2.set(this._x, this._y), t2;
        }, t1.prototype.equals = function(t2) {
            return t2.x === this._x && t2.y === this._y;
        }, Object.defineProperty(t1.prototype, "x", {
            get: function() {
                return this._x;
            },
            set: function(t2) {
                this._x !== t2 && (this._x = t2, this.cb.call(this.scope));
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t1.prototype, "y", {
            get: function() {
                return this._y;
            },
            set: function(t2) {
                this._y !== t2 && (this._y = t2, this.cb.call(this.scope));
            },
            enumerable: !1,
            configurable: !0
        }), t1;
    }(), Ze = function() {
        function t1(t2, e2, r5, i5, n4, o7) {
            (void 0) === t2 && (t2 = 1), (void 0) === e2 && (e2 = 0), (void 0) === r5 && (r5 = 0), (void 0) === i5 && (i5 = 1), (void 0) === n4 && (n4 = 0), (void 0) === o7 && (o7 = 0), this.array = null, this.a = t2, this.b = e2, this.c = r5, this.d = i5, this.tx = n4, this.ty = o7;
        }
        return t1.prototype.fromArray = function(t2) {
            this.a = t2[0], this.b = t2[1], this.c = t2[3], this.d = t2[4], this.tx = t2[2], this.ty = t2[5];
        }, t1.prototype.set = function(t2, e2, r5, i5, n4, o7) {
            return this.a = t2, this.b = e2, this.c = r5, this.d = i5, this.tx = n4, this.ty = o7, this;
        }, t1.prototype.toArray = function(t2, e2) {
            this.array || (this.array = new Float32Array(9));
            var r5 = e2 || this.array;
            return t2 ? (r5[0] = this.a, r5[1] = this.b, r5[2] = 0, r5[3] = this.c, r5[4] = this.d, r5[5] = 0, r5[6] = this.tx, r5[7] = this.ty, r5[8] = 1) : (r5[0] = this.a, r5[1] = this.c, r5[2] = this.tx, r5[3] = this.b, r5[4] = this.d, r5[5] = this.ty, r5[6] = 0, r5[7] = 0, r5[8] = 1), r5;
        }, t1.prototype.apply = function(t2, e2) {
            e2 = e2 || new qe;
            var r5 = t2.x, i5 = t2.y;
            return e2.x = this.a * r5 + this.c * i5 + this.tx, e2.y = this.b * r5 + this.d * i5 + this.ty, e2;
        }, t1.prototype.applyInverse = function(t2, e2) {
            e2 = e2 || new qe;
            var r5 = 1 / (this.a * this.d + this.c * -this.b), i5 = t2.x, n4 = t2.y;
            return e2.x = this.d * r5 * i5 + -this.c * r5 * n4 + (this.ty * this.c - this.tx * this.d) * r5, e2.y = this.a * r5 * n4 + -this.b * r5 * i5 + (-this.ty * this.a + this.tx * this.b) * r5, e2;
        }, t1.prototype.translate = function(t2, e2) {
            return this.tx += t2, this.ty += e2, this;
        }, t1.prototype.scale = function(t2, e2) {
            return this.a *= t2, this.d *= e2, this.c *= t2, this.b *= e2, this.tx *= t2, this.ty *= e2, this;
        }, t1.prototype.rotate = function(t2) {
            var e2 = Math.cos(t2), r5 = Math.sin(t2), i5 = this.a, n4 = this.c, o7 = this.tx;
            return this.a = i5 * e2 - this.b * r5, this.b = i5 * r5 + this.b * e2, this.c = n4 * e2 - this.d * r5, this.d = n4 * r5 + this.d * e2, this.tx = o7 * e2 - this.ty * r5, this.ty = o7 * r5 + this.ty * e2, this;
        }, t1.prototype.append = function(t2) {
            var e2 = this.a, r5 = this.b, i5 = this.c, n4 = this.d;
            return this.a = t2.a * e2 + t2.b * i5, this.b = t2.a * r5 + t2.b * n4, this.c = t2.c * e2 + t2.d * i5, this.d = t2.c * r5 + t2.d * n4, this.tx = t2.tx * e2 + t2.ty * i5 + this.tx, this.ty = t2.tx * r5 + t2.ty * n4 + this.ty, this;
        }, t1.prototype.setTransform = function(t2, e2, r5, i5, n4, o7, s6, a10, h7) {
            return this.a = Math.cos(s6 + h7) * n4, this.b = Math.sin(s6 + h7) * n4, this.c = -Math.sin(s6 - a10) * o7, this.d = Math.cos(s6 - a10) * o7, this.tx = t2 - (r5 * this.a + i5 * this.c), this.ty = e2 - (r5 * this.b + i5 * this.d), this;
        }, t1.prototype.prepend = function(t2) {
            var e2 = this.tx;
            if (1 !== t2.a || 0 !== t2.b || 0 !== t2.c || 1 !== t2.d) {
                var r5 = this.a, i5 = this.c;
                this.a = r5 * t2.a + this.b * t2.c, this.b = r5 * t2.b + this.b * t2.d, this.c = i5 * t2.a + this.d * t2.c, this.d = i5 * t2.b + this.d * t2.d;
            }
            return this.tx = e2 * t2.a + this.ty * t2.c + t2.tx, this.ty = e2 * t2.b + this.ty * t2.d + t2.ty, this;
        }, t1.prototype.decompose = function(t2) {
            var e2 = this.a, r6 = this.b, i6 = this.c, n4 = this.d, o7 = t2.pivot, s6 = -Math.atan2(-i6, n4), a10 = Math.atan2(r6, e2), h7 = Math.abs(s6 + a10);
            return h7 < 0.00001 || Math.abs(Xe - h7) < 0.00001 ? (t2.rotation = a10, t2.skew.x = t2.skew.y = 0) : (t2.rotation = 0, t2.skew.x = s6, t2.skew.y = a10), t2.scale.x = Math.sqrt(e2 * e2 + r6 * r6), t2.scale.y = Math.sqrt(i6 * i6 + n4 * n4), t2.position.x = this.tx + (o7.x * e2 + o7.y * i6), t2.position.y = this.ty + (o7.x * r6 + o7.y * n4), t2;
        }, t1.prototype.invert = function() {
            var t2 = this.a, e2 = this.b, r6 = this.c, i6 = this.d, n4 = this.tx, o7 = t2 * i6 - e2 * r6;
            return this.a = i6 / o7, this.b = -e2 / o7, this.c = -r6 / o7, this.d = t2 / o7, this.tx = (r6 * this.ty - i6 * n4) / o7, this.ty = -(t2 * this.ty - e2 * n4) / o7, this;
        }, t1.prototype.identity = function() {
            return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
        }, t1.prototype.clone = function() {
            var e2 = new t1;
            return e2.a = this.a, e2.b = this.b, e2.c = this.c, e2.d = this.d, e2.tx = this.tx, e2.ty = this.ty, e2;
        }, t1.prototype.copyTo = function(t2) {
            return t2.a = this.a, t2.b = this.b, t2.c = this.c, t2.d = this.d, t2.tx = this.tx, t2.ty = this.ty, t2;
        }, t1.prototype.copyFrom = function(t2) {
            return this.a = t2.a, this.b = t2.b, this.c = t2.c, this.d = t2.d, this.tx = t2.tx, this.ty = t2.ty, this;
        }, Object.defineProperty(t1, "IDENTITY", {
            get: function() {
                return new t1;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t1, "TEMP_MATRIX", {
            get: function() {
                return new t1;
            },
            enumerable: !1,
            configurable: !0
        }), t1;
    }(), Qe = [
        1,
        1,
        0,
        -1,
        -1,
        -1,
        0,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1,
        0,
        1
    ], Je = [
        0,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1,
        0,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1
    ], $e = [
        0,
        -1,
        -1,
        -1,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1
    ], tr = [
        1,
        1,
        0,
        -1,
        -1,
        -1,
        0,
        1,
        -1,
        -1,
        0,
        1,
        1,
        1,
        0,
        -1
    ], er = [], rr = [], ir = Math.sign;
    !function() {
        for(var t1 = 0; t1 < 16; t1++){
            var e2 = [];
            er.push(e2);
            for(var r6 = 0; r6 < 16; r6++)for(var i6 = ir(Qe[t1] * Qe[r6] + $e[t1] * Je[r6]), n4 = ir(Je[t1] * Qe[r6] + tr[t1] * Je[r6]), o7 = ir(Qe[t1] * $e[r6] + $e[t1] * tr[r6]), s6 = ir(Je[t1] * $e[r6] + tr[t1] * tr[r6]), a10 = 0; a10 < 16; a10++)if (Qe[a10] === i6 && Je[a10] === n4 && $e[a10] === o7 && tr[a10] === s6) {
                e2.push(a10);
                break;
            }
        }
        for(t1 = 0; t1 < 16; t1++){
            var h7 = new Ze;
            h7.set(Qe[t1], Je[t1], $e[t1], tr[t1], 0, 0), rr.push(h7);
        }
    }();
    var nr = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MAIN_DIAGONAL: 10,
        MIRROR_HORIZONTAL: 12,
        REVERSE_DIAGONAL: 14,
        uX: function(t1) {
            return Qe[t1];
        },
        uY: function(t1) {
            return Je[t1];
        },
        vX: function(t1) {
            return $e[t1];
        },
        vY: function(t1) {
            return tr[t1];
        },
        inv: function(t1) {
            return 8 & t1 ? 15 & t1 : 7 & -t1;
        },
        add: function(t1, e3) {
            return er[t1][e3];
        },
        sub: function(t1, e3) {
            return er[t1][nr.inv(e3)];
        },
        rotate180: function(t1) {
            return 4 ^ t1;
        },
        isVertical: function(t1) {
            return 2 == (3 & t1);
        },
        byDirection: function(t1, e3) {
            return 2 * Math.abs(t1) <= Math.abs(e3) ? e3 >= 0 ? nr.S : nr.N : 2 * Math.abs(e3) <= Math.abs(t1) ? t1 > 0 ? nr.E : nr.W : e3 > 0 ? t1 > 0 ? nr.SE : nr.SW : t1 > 0 ? nr.NE : nr.NW;
        },
        matrixAppendRotationInv: function(t1, e3, r7, i7) {
            (void 0) === r7 && (r7 = 0), (void 0) === i7 && (i7 = 0);
            var n5 = rr[nr.inv(e3)];
            n5.tx = r7, n5.ty = i7, t1.append(n5);
        }
    }, or = function() {
        function t1() {
            this.worldTransform = new Ze, this.localTransform = new Ze, this.position = new Ke(this.onChange, this, 0, 0), this.scale = new Ke(this.onChange, this, 1, 1), this.pivot = new Ke(this.onChange, this, 0, 0), this.skew = new Ke(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0;
        }
        return t1.prototype.onChange = function() {
            this._localID++;
        }, t1.prototype.updateSkew = function() {
            this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++;
        }, t1.prototype.updateLocalTransform = function() {
            var t2 = this.localTransform;
            this._localID !== this._currentLocalID && (t2.a = this._cx * this.scale.x, t2.b = this._sx * this.scale.x, t2.c = this._cy * this.scale.y, t2.d = this._sy * this.scale.y, t2.tx = this.position.x - (this.pivot.x * t2.a + this.pivot.y * t2.c), t2.ty = this.position.y - (this.pivot.x * t2.b + this.pivot.y * t2.d), this._currentLocalID = this._localID, this._parentID = -1);
        }, t1.prototype.updateTransform = function(t2) {
            var e3 = this.localTransform;
            if (this._localID !== this._currentLocalID && (e3.a = this._cx * this.scale.x, e3.b = this._sx * this.scale.x, e3.c = this._cy * this.scale.y, e3.d = this._sy * this.scale.y, e3.tx = this.position.x - (this.pivot.x * e3.a + this.pivot.y * e3.c), e3.ty = this.position.y - (this.pivot.x * e3.b + this.pivot.y * e3.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t2._worldID) {
                var r7 = t2.worldTransform, i7 = this.worldTransform;
                i7.a = e3.a * r7.a + e3.b * r7.c, i7.b = e3.a * r7.b + e3.b * r7.d, i7.c = e3.c * r7.a + e3.d * r7.c, i7.d = e3.c * r7.b + e3.d * r7.d, i7.tx = e3.tx * r7.a + e3.ty * r7.c + r7.tx, i7.ty = e3.tx * r7.b + e3.ty * r7.d + r7.ty, this._parentID = t2._worldID, this._worldID++;
            }
        }, t1.prototype.setFromMatrix = function(t2) {
            t2.decompose(this), this._localID++;
        }, Object.defineProperty(t1.prototype, "rotation", {
            get: function() {
                return this._rotation;
            },
            set: function(t2) {
                this._rotation !== t2 && (this._rotation = t2, this.updateSkew());
            },
            enumerable: !1,
            configurable: !0
        }), t1.IDENTITY = new t1, t1;
    }();
    rt.SORTABLE_CHILDREN = !1;
    var sr = function() {
        function t1() {
            this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1;
        }
        return t1.prototype.isEmpty = function() {
            return this.minX > this.maxX || this.minY > this.maxY;
        }, t1.prototype.clear = function() {
            this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
        }, t1.prototype.getRectangle = function(t2) {
            return this.minX > this.maxX || this.minY > this.maxY ? Ye.EMPTY : ((t2 = t2 || new Ye(0, 0, 1, 1)).x = this.minX, t2.y = this.minY, t2.width = this.maxX - this.minX, t2.height = this.maxY - this.minY, t2);
        }, t1.prototype.addPoint = function(t2) {
            this.minX = Math.min(this.minX, t2.x), this.maxX = Math.max(this.maxX, t2.x), this.minY = Math.min(this.minY, t2.y), this.maxY = Math.max(this.maxY, t2.y);
        }, t1.prototype.addPointMatrix = function(t2, e3) {
            var r8 = t2.a, i8 = t2.b, n5 = t2.c, o8 = t2.d, s7 = t2.tx, a11 = t2.ty, h8 = r8 * e3.x + n5 * e3.y + s7, u9 = i8 * e3.x + o8 * e3.y + a11;
            this.minX = Math.min(this.minX, h8), this.maxX = Math.max(this.maxX, h8), this.minY = Math.min(this.minY, u9), this.maxY = Math.max(this.maxY, u9);
        }, t1.prototype.addQuad = function(t2) {
            var e3 = this.minX, r8 = this.minY, i8 = this.maxX, n5 = this.maxY, o8 = t2[0], s7 = t2[1];
            e3 = o8 < e3 ? o8 : e3, r8 = s7 < r8 ? s7 : r8, i8 = o8 > i8 ? o8 : i8, n5 = s7 > n5 ? s7 : n5, e3 = (o8 = t2[2]) < e3 ? o8 : e3, r8 = (s7 = t2[3]) < r8 ? s7 : r8, i8 = o8 > i8 ? o8 : i8, n5 = s7 > n5 ? s7 : n5, e3 = (o8 = t2[4]) < e3 ? o8 : e3, r8 = (s7 = t2[5]) < r8 ? s7 : r8, i8 = o8 > i8 ? o8 : i8, n5 = s7 > n5 ? s7 : n5, e3 = (o8 = t2[6]) < e3 ? o8 : e3, r8 = (s7 = t2[7]) < r8 ? s7 : r8, i8 = o8 > i8 ? o8 : i8, n5 = s7 > n5 ? s7 : n5, this.minX = e3, this.minY = r8, this.maxX = i8, this.maxY = n5;
        }, t1.prototype.addFrame = function(t2, e3, r8, i8, n5) {
            this.addFrameMatrix(t2.worldTransform, e3, r8, i8, n5);
        }, t1.prototype.addFrameMatrix = function(t2, e3, r8, i8, n5) {
            var o8 = t2.a, s7 = t2.b, a11 = t2.c, h8 = t2.d, u9 = t2.tx, l7 = t2.ty, c5 = this.minX, d6 = this.minY, f6 = this.maxX, p7 = this.maxY, _ = o8 * e3 + a11 * r8 + u9, m2 = s7 * e3 + h8 * r8 + l7;
            c5 = _ < c5 ? _ : c5, d6 = m2 < d6 ? m2 : d6, f6 = _ > f6 ? _ : f6, p7 = m2 > p7 ? m2 : p7, c5 = (_ = o8 * i8 + a11 * r8 + u9) < c5 ? _ : c5, d6 = (m2 = s7 * i8 + h8 * r8 + l7) < d6 ? m2 : d6, f6 = _ > f6 ? _ : f6, p7 = m2 > p7 ? m2 : p7, c5 = (_ = o8 * e3 + a11 * n5 + u9) < c5 ? _ : c5, d6 = (m2 = s7 * e3 + h8 * n5 + l7) < d6 ? m2 : d6, f6 = _ > f6 ? _ : f6, p7 = m2 > p7 ? m2 : p7, c5 = (_ = o8 * i8 + a11 * n5 + u9) < c5 ? _ : c5, d6 = (m2 = s7 * i8 + h8 * n5 + l7) < d6 ? m2 : d6, f6 = _ > f6 ? _ : f6, p7 = m2 > p7 ? m2 : p7, this.minX = c5, this.minY = d6, this.maxX = f6, this.maxY = p7;
        }, t1.prototype.addVertexData = function(t2, e3, r8) {
            for(var i8 = this.minX, n5 = this.minY, o8 = this.maxX, s7 = this.maxY, a11 = e3; a11 < r8; a11 += 2){
                var h8 = t2[a11], u9 = t2[a11 + 1];
                i8 = h8 < i8 ? h8 : i8, n5 = u9 < n5 ? u9 : n5, o8 = h8 > o8 ? h8 : o8, s7 = u9 > s7 ? u9 : s7;
            }
            this.minX = i8, this.minY = n5, this.maxX = o8, this.maxY = s7;
        }, t1.prototype.addVertices = function(t2, e3, r8, i8) {
            this.addVerticesMatrix(t2.worldTransform, e3, r8, i8);
        }, t1.prototype.addVerticesMatrix = function(t2, e3, r8, i8, n5, o8) {
            (void 0) === n5 && (n5 = 0), (void 0) === o8 && (o8 = n5);
            for(var s7 = t2.a, a11 = t2.b, h9 = t2.c, u10 = t2.d, l7 = t2.tx, c5 = t2.ty, d6 = this.minX, f6 = this.minY, p7 = this.maxX, _ = this.maxY, m2 = r8; m2 < i8; m2 += 2){
                var v2 = e3[m2], y2 = e3[m2 + 1], E = s7 * v2 + h9 * y2 + l7, g2 = u10 * y2 + a11 * v2 + c5;
                d6 = Math.min(d6, E - n5), p7 = Math.max(p7, E + n5), f6 = Math.min(f6, g2 - o8), _ = Math.max(_, g2 + o8);
            }
            this.minX = d6, this.minY = f6, this.maxX = p7, this.maxY = _;
        }, t1.prototype.addBounds = function(t2) {
            var e3 = this.minX, r8 = this.minY, i8 = this.maxX, n5 = this.maxY;
            this.minX = t2.minX < e3 ? t2.minX : e3, this.minY = t2.minY < r8 ? t2.minY : r8, this.maxX = t2.maxX > i8 ? t2.maxX : i8, this.maxY = t2.maxY > n5 ? t2.maxY : n5;
        }, t1.prototype.addBoundsMask = function(t2, e3) {
            var r8 = t2.minX > e3.minX ? t2.minX : e3.minX, i8 = t2.minY > e3.minY ? t2.minY : e3.minY, n5 = t2.maxX < e3.maxX ? t2.maxX : e3.maxX, o8 = t2.maxY < e3.maxY ? t2.maxY : e3.maxY;
            if (r8 <= n5 && i8 <= o8) {
                var s7 = this.minX, a11 = this.minY, h9 = this.maxX, u10 = this.maxY;
                this.minX = r8 < s7 ? r8 : s7, this.minY = i8 < a11 ? i8 : a11, this.maxX = n5 > h9 ? n5 : h9, this.maxY = o8 > u10 ? o8 : u10;
            }
        }, t1.prototype.addBoundsMatrix = function(t2, e3) {
            this.addFrameMatrix(e3, t2.minX, t2.minY, t2.maxX, t2.maxY);
        }, t1.prototype.addBoundsArea = function(t2, e3) {
            var r8 = t2.minX > e3.x ? t2.minX : e3.x, i8 = t2.minY > e3.y ? t2.minY : e3.y, n5 = t2.maxX < e3.x + e3.width ? t2.maxX : e3.x + e3.width, o8 = t2.maxY < e3.y + e3.height ? t2.maxY : e3.y + e3.height;
            if (r8 <= n5 && i8 <= o8) {
                var s8 = this.minX, a12 = this.minY, h10 = this.maxX, u11 = this.maxY;
                this.minX = r8 < s8 ? r8 : s8, this.minY = i8 < a12 ? i8 : a12, this.maxX = n5 > h10 ? n5 : h10, this.maxY = o8 > u11 ? o8 : u11;
            }
        }, t1.prototype.pad = function(t2, e3) {
            (void 0) === t2 && (t2 = 0), (void 0) === e3 && (e3 = t2), this.isEmpty() || (this.minX -= t2, this.maxX += t2, this.minY -= e3, this.maxY += e3);
        }, t1.prototype.addFramePad = function(t2, e3, r8, i8, n5, o8) {
            t2 -= n5, e3 -= o8, r8 += n5, i8 += o8, this.minX = this.minX < t2 ? this.minX : t2, this.maxX = this.maxX > r8 ? this.maxX : r8, this.minY = this.minY < e3 ? this.minY : e3, this.maxY = this.maxY > i8 ? this.maxY : i8;
        }, t1;
    }(), ar = function(t1, e3) {
        return (ar = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t2, e4) {
            t2.__proto__ = e4;
        } || function(t2, e4) {
            for(var r8 in e4)e4.hasOwnProperty(r8) && (t2[r8] = e4[r8]);
        })(t1, e3);
    };
    function hr(t1, e3) {
        function r8() {
            this.constructor = t1;
        }
        ar(t1, e3), t1.prototype = null === e3 ? Object.create(e3) : (r8.prototype = e3.prototype, new r8);
    }
    var ur = function(t1) {
        function e3() {
            var e4 = t1.call(this) || this;
            return e4.tempDisplayObjectParent = null, e4.transform = new or, e4.alpha = 1, e4.visible = !0, e4.renderable = !0, e4.parent = null, e4.worldAlpha = 1, e4._lastSortedIndex = 0, e4._zIndex = 0, e4.filterArea = null, e4.filters = null, e4._enabledFilters = null, e4._bounds = new sr, e4._localBounds = null, e4._boundsID = 0, e4._boundsRect = null, e4._localBoundsRect = null, e4._mask = null, e4._destroyed = !1, e4.isSprite = !1, e4.isMask = !1, e4;
        }
        return hr(e3, t1), e3.mixin = function(t2) {
            for(var r8 = Object.keys(t2), i8 = 0; i8 < r8.length; ++i8){
                var n5 = r8[i8];
                Object.defineProperty(e3.prototype, n5, Object.getOwnPropertyDescriptor(t2, n5));
            }
        }, Object.defineProperty(e3.prototype, "destroyed", {
            get: function() {
                return this._destroyed;
            },
            enumerable: !1,
            configurable: !0
        }), e3.prototype._recursivePostUpdateTransform = function() {
            this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
        }, e3.prototype.updateTransform = function() {
            this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
        }, e3.prototype.getBounds = function(t2, e4) {
            return t2 || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), e4 || (this._boundsRect || (this._boundsRect = new Ye), e4 = this._boundsRect), this._bounds.getRectangle(e4);
        }, e3.prototype.getLocalBounds = function(t2) {
            t2 || (this._localBoundsRect || (this._localBoundsRect = new Ye), t2 = this._localBoundsRect), this._localBounds || (this._localBounds = new sr);
            var e4 = this.transform, r8 = this.parent;
            this.parent = null, this.transform = this._tempDisplayObjectParent.transform;
            var i8 = this._bounds, n6 = this._boundsID;
            this._bounds = this._localBounds;
            var o8 = this.getBounds(!1, t2);
            return this.parent = r8, this.transform = e4, this._bounds = i8, this._bounds.updateID += this._boundsID - n6, o8;
        }, e3.prototype.toGlobal = function(t2, e4, r8) {
            return (void 0) === r8 && (r8 = !1), r8 || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t2, e4);
        }, e3.prototype.toLocal = function(t2, e4, r8, i8) {
            return e4 && (t2 = e4.toGlobal(t2, r8, i8)), i8 || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t2, r8);
        }, e3.prototype.setParent = function(t2) {
            if (!t2 || !t2.addChild) throw new Error("setParent: Argument must be a Container");
            return t2.addChild(this), t2;
        }, e3.prototype.setTransform = function(t2, e4, r8, i8, n6, o8, s9, a13, h11) {
            return (void 0) === t2 && (t2 = 0), (void 0) === e4 && (e4 = 0), (void 0) === r8 && (r8 = 1), (void 0) === i8 && (i8 = 1), (void 0) === n6 && (n6 = 0), (void 0) === o8 && (o8 = 0), (void 0) === s9 && (s9 = 0), (void 0) === a13 && (a13 = 0), (void 0) === h11 && (h11 = 0), this.position.x = t2, this.position.y = e4, this.scale.x = r8 || 1, this.scale.y = i8 || 1, this.rotation = n6, this.skew.x = o8, this.skew.y = s9, this.pivot.x = a13, this.pivot.y = h11, this;
        }, e3.prototype.destroy = function(t2) {
            this.parent && this.parent.removeChild(this), this.emit("destroyed"), this.removeAllListeners(), this.transform = null, this.parent = null, this._bounds = null, this._mask = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0;
        }, Object.defineProperty(e3.prototype, "_tempDisplayObjectParent", {
            get: function() {
                return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new lr), this.tempDisplayObjectParent;
            },
            enumerable: !1,
            configurable: !0
        }), e3.prototype.enableTempParent = function() {
            var t2 = this.parent;
            return this.parent = this._tempDisplayObjectParent, t2;
        }, e3.prototype.disableTempParent = function(t2) {
            this.parent = t2;
        }, Object.defineProperty(e3.prototype, "x", {
            get: function() {
                return this.position.x;
            },
            set: function(t2) {
                this.transform.position.x = t2;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "y", {
            get: function() {
                return this.position.y;
            },
            set: function(t2) {
                this.transform.position.y = t2;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "worldTransform", {
            get: function() {
                return this.transform.worldTransform;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "localTransform", {
            get: function() {
                return this.transform.localTransform;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "position", {
            get: function() {
                return this.transform.position;
            },
            set: function(t2) {
                this.transform.position.copyFrom(t2);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "scale", {
            get: function() {
                return this.transform.scale;
            },
            set: function(t2) {
                this.transform.scale.copyFrom(t2);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "pivot", {
            get: function() {
                return this.transform.pivot;
            },
            set: function(t2) {
                this.transform.pivot.copyFrom(t2);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "skew", {
            get: function() {
                return this.transform.skew;
            },
            set: function(t2) {
                this.transform.skew.copyFrom(t2);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "rotation", {
            get: function() {
                return this.transform.rotation;
            },
            set: function(t2) {
                this.transform.rotation = t2;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "angle", {
            get: function() {
                return this.transform.rotation * ke;
            },
            set: function(t2) {
                this.transform.rotation = t2 * He;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "zIndex", {
            get: function() {
                return this._zIndex;
            },
            set: function(t2) {
                this._zIndex = t2, this.parent && (this.parent.sortDirty = !0);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "worldVisible", {
            get: function() {
                var t2 = this;
                do {
                    if (!t2.visible) return !1;
                    t2 = t2.parent;
                }while (t2)
                return !0;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "mask", {
            get: function() {
                return this._mask;
            },
            set: function(t2) {
                var e4;
                this._mask && ((e4 = this._mask.maskObject || this._mask).renderable = !0, e4.isMask = !1), this._mask = t2, this._mask && ((e4 = this._mask.maskObject || this._mask).renderable = !1, e4.isMask = !0);
            },
            enumerable: !1,
            configurable: !0
        }), e3;
    }(ot), lr = function(t1) {
        function e3() {
            var e4 = null !== t1 && t1.apply(this, arguments) || this;
            return e4.sortDirty = null, e4;
        }
        return hr(e3, t1), e3;
    }(ur);
    function cr(t1, e3) {
        return t1.zIndex === e3.zIndex ? t1._lastSortedIndex - e3._lastSortedIndex : t1.zIndex - e3.zIndex;
    }
    ur.prototype.displayObjectUpdateTransform = ur.prototype.updateTransform;
    var dr = function(t1) {
        function e3() {
            var e4 = t1.call(this) || this;
            return e4.children = [], e4.sortableChildren = rt.SORTABLE_CHILDREN, e4.sortDirty = !1, e4;
        }
        return hr(e3, t1), e3.prototype.onChildrenChange = function(t2) {
        }, e3.prototype.addChild = function() {
            for(var t2 = arguments, e4 = [], r8 = 0; r8 < arguments.length; r8++)e4[r8] = t2[r8];
            if (e4.length > 1) for(var i8 = 0; i8 < e4.length; i8++)this.addChild(e4[i8]);
            else {
                var n6 = e4[0];
                n6.parent && n6.parent.removeChild(n6), n6.parent = this, this.sortDirty = !0, n6.transform._parentID = -1, this.children.push(n6), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", n6, this, this.children.length - 1), n6.emit("added", this);
            }
            return e4[0];
        }, e3.prototype.addChildAt = function(t2, e4) {
            if (e4 < 0 || e4 > this.children.length) throw new Error(t2 + "addChildAt: The index " + e4 + " supplied is out of bounds " + this.children.length);
            return t2.parent && t2.parent.removeChild(t2), t2.parent = this, this.sortDirty = !0, t2.transform._parentID = -1, this.children.splice(e4, 0, t2), this._boundsID++, this.onChildrenChange(e4), t2.emit("added", this), this.emit("childAdded", t2, this, e4), t2;
        }, e3.prototype.swapChildren = function(t2, e4) {
            if (t2 !== e4) {
                var r8 = this.getChildIndex(t2), i8 = this.getChildIndex(e4);
                this.children[r8] = e4, this.children[i8] = t2, this.onChildrenChange(r8 < i8 ? r8 : i8);
            }
        }, e3.prototype.getChildIndex = function(t2) {
            var e4 = this.children.indexOf(t2);
            if (-1 === e4) throw new Error("The supplied DisplayObject must be a child of the caller");
            return e4;
        }, e3.prototype.setChildIndex = function(t2, e4) {
            if (e4 < 0 || e4 >= this.children.length) throw new Error("The index " + e4 + " supplied is out of bounds " + this.children.length);
            var r9 = this.getChildIndex(t2);
            Ae(this.children, r9, 1), this.children.splice(e4, 0, t2), this.onChildrenChange(e4);
        }, e3.prototype.getChildAt = function(t2) {
            if (t2 < 0 || t2 >= this.children.length) throw new Error("getChildAt: Index (" + t2 + ") does not exist.");
            return this.children[t2];
        }, e3.prototype.removeChild = function() {
            for(var t2 = arguments, e4 = [], r9 = 0; r9 < arguments.length; r9++)e4[r9] = t2[r9];
            if (e4.length > 1) for(var i9 = 0; i9 < e4.length; i9++)this.removeChild(e4[i9]);
            else {
                var n7 = e4[0], o8 = this.children.indexOf(n7);
                if (-1 === o8) return null;
                n7.parent = null, n7.transform._parentID = -1, Ae(this.children, o8, 1), this._boundsID++, this.onChildrenChange(o8), n7.emit("removed", this), this.emit("childRemoved", n7, this, o8);
            }
            return e4[0];
        }, e3.prototype.removeChildAt = function(t2) {
            var e4 = this.getChildAt(t2);
            return e4.parent = null, e4.transform._parentID = -1, Ae(this.children, t2, 1), this._boundsID++, this.onChildrenChange(t2), e4.emit("removed", this), this.emit("childRemoved", e4, this, t2), e4;
        }, e3.prototype.removeChildren = function(t2, e4) {
            (void 0) === t2 && (t2 = 0), (void 0) === e4 && (e4 = this.children.length);
            var r9, i9 = t2, n8 = e4 - i9;
            if (n8 > 0 && n8 <= e4) {
                r9 = this.children.splice(i9, n8);
                for(var o9 = 0; o9 < r9.length; ++o9)r9[o9].parent = null, r9[o9].transform && (r9[o9].transform._parentID = -1);
                for(this._boundsID++, this.onChildrenChange(t2), o9 = 0; o9 < r9.length; ++o9)r9[o9].emit("removed", this), this.emit("childRemoved", r9[o9], this, o9);
                return r9;
            }
            if (0 === n8 && 0 === this.children.length) return [];
            throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
        }, e3.prototype.sortChildren = function() {
            for(var t2 = !1, e4 = 0, r9 = this.children.length; e4 < r9; ++e4){
                var i9 = this.children[e4];
                i9._lastSortedIndex = e4, t2 || 0 === i9.zIndex || (t2 = !0);
            }
            t2 && this.children.length > 1 && this.children.sort(cr), this.sortDirty = !1;
        }, e3.prototype.updateTransform = function() {
            this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
            for(var t2 = 0, e4 = this.children.length; t2 < e4; ++t2){
                var r9 = this.children[t2];
                r9.visible && r9.updateTransform();
            }
        }, e3.prototype.calculateBounds = function() {
            this._bounds.clear(), this._calculateBounds();
            for(var t2 = 0; t2 < this.children.length; t2++){
                var e4 = this.children[t2];
                if (e4.visible && e4.renderable) {
                    if (e4.calculateBounds(), e4._mask) {
                        var r10 = e4._mask.maskObject || e4._mask;
                        r10.calculateBounds(), this._bounds.addBoundsMask(e4._bounds, r10._bounds);
                    } else e4.filterArea ? this._bounds.addBoundsArea(e4._bounds, e4.filterArea) : this._bounds.addBounds(e4._bounds);
                }
            }
            this._bounds.updateID = this._boundsID;
        }, e3.prototype.getLocalBounds = function(e5, r11) {
            (void 0) === r11 && (r11 = !1);
            var i10 = t1.prototype.getLocalBounds.call(this, e5);
            if (!r11) for(var n8 = 0, o10 = this.children.length; n8 < o10; ++n8){
                var s9 = this.children[n8];
                s9.visible && s9.updateTransform();
            }
            return i10;
        }, e3.prototype._calculateBounds = function() {
        }, e3.prototype.render = function(t2) {
            if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                if (this._mask || this.filters && this.filters.length) this.renderAdvanced(t2);
                else {
                    this._render(t2);
                    for(var e5 = 0, r11 = this.children.length; e5 < r11; ++e5)this.children[e5].render(t2);
                }
            }
        }, e3.prototype.renderAdvanced = function(t2) {
            t2.batch.flush();
            var e6 = this.filters, r12 = this._mask;
            if (e6) {
                this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
                for(var i10 = 0; i10 < e6.length; i10++)e6[i10].enabled && this._enabledFilters.push(e6[i10]);
                this._enabledFilters.length && t2.filter.push(this, this._enabledFilters);
            }
            r12 && t2.mask.push(this, this._mask), this._render(t2), i10 = 0;
            for(var n8 = this.children.length; i10 < n8; i10++)this.children[i10].render(t2);
            t2.batch.flush(), r12 && t2.mask.pop(this), e6 && this._enabledFilters && this._enabledFilters.length && t2.filter.pop();
        }, e3.prototype._render = function(t2) {
        }, e3.prototype.destroy = function(e6) {
            t1.prototype.destroy.call(this), this.sortDirty = !1;
            var r12 = "boolean" == typeof e6 ? e6 : e6 && e6.children, i11 = this.removeChildren(0, this.children.length);
            if (r12) for(var n8 = 0; n8 < i11.length; ++n8)i11[n8].destroy(e6);
        }, Object.defineProperty(e3.prototype, "width", {
            get: function() {
                return this.scale.x * this.getLocalBounds().width;
            },
            set: function(t2) {
                var e6 = this.getLocalBounds().width;
                this.scale.x = 0 !== e6 ? t2 / e6 : 1, this._width = t2;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e3.prototype, "height", {
            get: function() {
                return this.scale.y * this.getLocalBounds().height;
            },
            set: function(t2) {
                var e6 = this.getLocalBounds().height;
                this.scale.y = 0 !== e6 ? t2 / e6 : 1, this._height = t2;
            },
            enumerable: !1,
            configurable: !0
        }), e3;
    }(ur);
    dr.prototype.containerUpdateTransform = dr.prototype.updateTransform;
    var fr = {
        accessible: !1,
        accessibleTitle: null,
        accessibleHint: null,
        tabIndex: 0,
        _accessibleActive: !1,
        _accessibleDiv: null,
        accessibleType: "button",
        accessiblePointerEvents: "auto",
        accessibleChildren: !0,
        renderId: -1
    };
    ur.mixin(fr);
    var pr = 100, _r = 0, mr = 0, vr = 2, yr = function() {
        function t1(t2) {
            this.debug = !1, this._isActive = !1, this._isMobileAccessibility = !1, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, (et.tablet || et.phone) && this.createTouchHook();
            var e3 = document.createElement("div");
            e3.style.width = pr + "px", e3.style.height = pr + "px", e3.style.position = "absolute", e3.style.top = _r + "px", e3.style.left = mr + "px", e3.style.zIndex = vr.toString(), this.div = e3, this.renderer = t2, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), self.addEventListener("keydown", this._onKeyDown, !1);
        }
        return Object.defineProperty(t1.prototype, "isActive", {
            get: function() {
                return this._isActive;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t1.prototype, "isMobileAccessibility", {
            get: function() {
                return this._isMobileAccessibility;
            },
            enumerable: !1,
            configurable: !0
        }), t1.prototype.createTouchHook = function() {
            var t2 = this, e3 = document.createElement("button");
            e3.style.width = "1px", e3.style.height = "1px", e3.style.position = "absolute", e3.style.top = "-1000px", e3.style.left = "-1000px", e3.style.zIndex = 2..toString(), e3.style.backgroundColor = "#FF0000", e3.title = "select to enable accessibility for this content", e3.addEventListener("focus", function() {
                t2._isMobileAccessibility = !0, t2.activate(), t2.destroyTouchHook();
            }), document.body.appendChild(e3), this._hookDiv = e3;
        }, t1.prototype.destroyTouchHook = function() {
            this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null);
        }, t1.prototype.activate = function() {
            var t2;
            this._isActive || (this._isActive = !0, self.document.addEventListener("mousemove", this._onMouseMove, !0), self.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), null === (t2 = this.renderer.view.parentNode) || (void 0) === t2 || t2.appendChild(this.div));
        }, t1.prototype.deactivate = function() {
            var t2;
            this._isActive && !this._isMobileAccessibility && (this._isActive = !1, self.document.removeEventListener("mousemove", this._onMouseMove, !0), self.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), null === (t2 = this.div.parentNode) || (void 0) === t2 || t2.removeChild(this.div));
        }, t1.prototype.updateAccessibleObjects = function(t2) {
            if (t2.visible && t2.accessibleChildren) {
                t2.accessible && t2.interactive && (t2._accessibleActive || this.addChild(t2), t2.renderId = this.renderId);
                for(var e3 = t2.children, r12 = 0; r12 < e3.length; r12++)this.updateAccessibleObjects(e3[r12]);
            }
        }, t1.prototype.update = function() {
            var t2 = performance.now();
            if (!(et.android.device && t2 < this.androidUpdateCount) && (this.androidUpdateCount = t2 + this.androidUpdateFrequency, this.renderer.renderingToScreen)) {
                this.renderer._lastObjectRendered && this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                var e6 = this.renderer.view.getBoundingClientRect(), r13 = e6.left, i11 = e6.top, n8 = e6.width, o10 = e6.height, s10 = this.renderer, a13 = s10.width, h11 = s10.height, u12 = s10.resolution, l7 = n8 / a13 * u12, c5 = o10 / h11 * u12, d6 = this.div;
                d6.style.left = r13 + "px", d6.style.top = i11 + "px", d6.style.width = a13 + "px", d6.style.height = h11 + "px";
                for(var f6 = 0; f6 < this.children.length; f6++){
                    var p7 = this.children[f6];
                    if (p7.renderId !== this.renderId) p7._accessibleActive = !1, Ae(this.children, f6, 1), this.div.removeChild(p7._accessibleDiv), this.pool.push(p7._accessibleDiv), p7._accessibleDiv = null, f6--;
                    else {
                        d6 = p7._accessibleDiv;
                        var _ = p7.hitArea, m2 = p7.worldTransform;
                        p7.hitArea ? (d6.style.left = (m2.tx + _.x * m2.a) * l7 + "px", d6.style.top = (m2.ty + _.y * m2.d) * c5 + "px", d6.style.width = _.width * m2.a * l7 + "px", d6.style.height = _.height * m2.d * c5 + "px") : (_ = p7.getBounds(), this.capHitArea(_), d6.style.left = _.x * l7 + "px", d6.style.top = _.y * c5 + "px", d6.style.width = _.width * l7 + "px", d6.style.height = _.height * c5 + "px", d6.title !== p7.accessibleTitle && null !== p7.accessibleTitle && (d6.title = p7.accessibleTitle), d6.getAttribute("aria-label") !== p7.accessibleHint && null !== p7.accessibleHint && d6.setAttribute("aria-label", p7.accessibleHint)), p7.accessibleTitle === d6.title && p7.tabIndex === d6.tabIndex || (d6.title = p7.accessibleTitle, d6.tabIndex = p7.tabIndex, this.debug && this.updateDebugHTML(d6));
                    }
                }
                this.renderId++;
            }
        }, t1.prototype.updateDebugHTML = function(t2) {
            t2.innerHTML = "type: " + t2.type + "</br> title : " + t2.title + "</br> tabIndex: " + t2.tabIndex;
        }, t1.prototype.capHitArea = function(t2) {
            t2.x < 0 && (t2.width += t2.x, t2.x = 0), t2.y < 0 && (t2.height += t2.y, t2.y = 0);
            var e7 = this.renderer, r14 = e7.width, i12 = e7.height;
            t2.x + t2.width > r14 && (t2.width = r14 - t2.x), t2.y + t2.height > i12 && (t2.height = i12 - t2.y);
        }, t1.prototype.addChild = function(t2) {
            var e7 = this.pool.pop();
            e7 || ((e7 = document.createElement("button")).style.width = pr + "px", e7.style.height = pr + "px", e7.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", e7.style.position = "absolute", e7.style.zIndex = vr.toString(), e7.style.borderStyle = "none", navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? e7.setAttribute("aria-live", "off") : e7.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e7.setAttribute("aria-relevant", "additions") : e7.setAttribute("aria-relevant", "text"), e7.addEventListener("click", this._onClick.bind(this)), e7.addEventListener("focus", this._onFocus.bind(this)), e7.addEventListener("focusout", this._onFocusOut.bind(this))), e7.style.pointerEvents = t2.accessiblePointerEvents, e7.type = t2.accessibleType, t2.accessibleTitle && null !== t2.accessibleTitle ? e7.title = t2.accessibleTitle : t2.accessibleHint && null !== t2.accessibleHint || (e7.title = "displayObject " + t2.tabIndex), t2.accessibleHint && null !== t2.accessibleHint && e7.setAttribute("aria-label", t2.accessibleHint), this.debug && this.updateDebugHTML(e7), t2._accessibleActive = !0, t2._accessibleDiv = e7, e7.displayObject = t2, this.children.push(t2), this.div.appendChild(t2._accessibleDiv), t2._accessibleDiv.tabIndex = t2.tabIndex;
        }, t1.prototype._onClick = function(t2) {
            var e7 = this.renderer.plugins.interaction, r14 = t2.target.displayObject, i12 = e7.eventData;
            e7.dispatchEvent(r14, "click", i12), e7.dispatchEvent(r14, "pointertap", i12), e7.dispatchEvent(r14, "tap", i12);
        }, t1.prototype._onFocus = function(t2) {
            t2.target.getAttribute("aria-live") || t2.target.setAttribute("aria-live", "assertive");
            var e7 = this.renderer.plugins.interaction, r14 = t2.target.displayObject, i12 = e7.eventData;
            e7.dispatchEvent(r14, "mouseover", i12);
        }, t1.prototype._onFocusOut = function(t2) {
            t2.target.getAttribute("aria-live") || t2.target.setAttribute("aria-live", "polite");
            var e7 = this.renderer.plugins.interaction, r14 = t2.target.displayObject, i12 = e7.eventData;
            e7.dispatchEvent(r14, "mouseout", i12);
        }, t1.prototype._onKeyDown = function(t2) {
            9 === t2.keyCode && this.activate();
        }, t1.prototype._onMouseMove = function(t2) {
            0 === t2.movementX && 0 === t2.movementY || this.deactivate();
        }, t1.prototype.destroy = function() {
            this.destroyTouchHook(), this.div = null, self.document.removeEventListener("mousemove", this._onMouseMove, !0), self.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null;
        }, t1;
    }();
    rt.TARGET_FPMS = 0.06, (function(t1) {
        t1[t1.INTERACTION = 50] = "INTERACTION", t1[t1.HIGH = 25] = "HIGH", t1[t1.NORMAL = 0] = "NORMAL", t1[t1.LOW = -25] = "LOW", t1[t1.UTILITY = -50] = "UTILITY";
    })(t.UPDATE_PRIORITY || (t.UPDATE_PRIORITY = {
    }));
    var Er = function() {
        function t1(t2, e7, r14, i12) {
            (void 0) === e7 && (e7 = null), (void 0) === r14 && (r14 = 0), (void 0) === i12 && (i12 = !1), this.next = null, this.previous = null, this._destroyed = !1, this.fn = t2, this.context = e7, this.priority = r14, this.once = i12;
        }
        return t1.prototype.match = function(t2, e7) {
            return (void 0) === e7 && (e7 = null), this.fn === t2 && this.context === e7;
        }, t1.prototype.emit = function(t2) {
            this.fn && (this.context ? this.fn.call(this.context, t2) : this.fn(t2));
            var e7 = this.next;
            return this.once && this.destroy(!0), this._destroyed && (this.next = null), e7;
        }, t1.prototype.connect = function(t2) {
            this.previous = t2, t2.next && (t2.next.previous = this), this.next = t2.next, t2.next = this;
        }, t1.prototype.destroy = function(t2) {
            (void 0) === t2 && (t2 = !1), this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
            var e7 = this.next;
            return this.next = t2 ? null : e7, this.previous = null, e7;
        }, t1;
    }(), gr = function() {
        function e7() {
            var t1 = this;
            this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new Er(null, null, 1 / 0), this.deltaMS = 1 / rt.TARGET_FPMS, this.elapsedMS = 1 / rt.TARGET_FPMS, this._tick = function(e8) {
                t1._requestId = null, t1.started && (t1.update(e8), t1.started && null === t1._requestId && t1._head.next && (t1._requestId = requestAnimationFrame(t1._tick)));
            };
        }
        return e7.prototype._requestIfNeeded = function() {
            null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
        }, e7.prototype._cancelIfNeeded = function() {
            null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null);
        }, e7.prototype._startIfPossible = function() {
            this.started ? this._requestIfNeeded() : this.autoStart && this.start();
        }, e7.prototype.add = function(e8, r14, i12) {
            return (void 0) === i12 && (i12 = t.UPDATE_PRIORITY.NORMAL), this._addListener(new Er(e8, r14, i12));
        }, e7.prototype.addOnce = function(e8, r14, i12) {
            return (void 0) === i12 && (i12 = t.UPDATE_PRIORITY.NORMAL), this._addListener(new Er(e8, r14, i12, !0));
        }, e7.prototype._addListener = function(t1) {
            var e8 = this._head.next, r14 = this._head;
            if (e8) {
                for(; e8;){
                    if (t1.priority > e8.priority) {
                        t1.connect(r14);
                        break;
                    }
                    r14 = e8, e8 = e8.next;
                }
                t1.previous || t1.connect(r14);
            } else t1.connect(r14);
            return this._startIfPossible(), this;
        }, e7.prototype.remove = function(t1, e8) {
            for(var r14 = this._head.next; r14;)r14 = r14.match(t1, e8) ? r14.destroy() : r14.next;
            return this._head.next || this._cancelIfNeeded(), this;
        }, Object.defineProperty(e7.prototype, "count", {
            get: function() {
                if (!this._head) return 0;
                for(var t1 = 0, e8 = this._head; e8 = e8.next;)t1++;
                return t1;
            },
            enumerable: !1,
            configurable: !0
        }), e7.prototype.start = function() {
            this.started || (this.started = !0, this._requestIfNeeded());
        }, e7.prototype.stop = function() {
            this.started && (this.started = !1, this._cancelIfNeeded());
        }, e7.prototype.destroy = function() {
            if (!this._protected) {
                this.stop();
                for(var t1 = this._head.next; t1;)t1 = t1.destroy(!0);
                this._head.destroy(), this._head = null;
            }
        }, e7.prototype.update = function(t2) {
            var e8;
            if ((void 0) === t2 && (t2 = performance.now()), t2 > this.lastTime) {
                if ((e8 = this.elapsedMS = t2 - this.lastTime) > this._maxElapsedMS && (e8 = this._maxElapsedMS), e8 *= this.speed, this._minElapsedMS) {
                    var r14 = t2 - this._lastFrame | 0;
                    if (r14 < this._minElapsedMS) return;
                    this._lastFrame = t2 - r14 % this._minElapsedMS;
                }
                this.deltaMS = e8, this.deltaTime = this.deltaMS * rt.TARGET_FPMS;
                for(var i12 = this._head, n9 = i12.next; n9;)n9 = n9.emit(this.deltaTime);
                i12.next || this._cancelIfNeeded();
            } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
            this.lastTime = t2;
        }, Object.defineProperty(e7.prototype, "FPS", {
            get: function() {
                return 1000 / this.elapsedMS;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e7.prototype, "minFPS", {
            get: function() {
                return 1000 / this._maxElapsedMS;
            },
            set: function(t2) {
                var e8 = Math.min(this.maxFPS, t2), r15 = Math.min(Math.max(0, e8) / 1000, rt.TARGET_FPMS);
                this._maxElapsedMS = 1 / r15;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e7.prototype, "maxFPS", {
            get: function() {
                return this._minElapsedMS ? Math.round(1000 / this._minElapsedMS) : 0;
            },
            set: function(t2) {
                if (0 === t2) this._minElapsedMS = 0;
                else {
                    var e8 = Math.max(this.minFPS, t2);
                    this._minElapsedMS = 1 / (e8 / 1000);
                }
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e7, "shared", {
            get: function() {
                if (!e7._shared) {
                    var t2 = e7._shared = new e7;
                    t2.autoStart = !0, t2._protected = !0;
                }
                return e7._shared;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e7, "system", {
            get: function() {
                if (!e7._system) {
                    var t3 = e7._system = new e7;
                    t3.autoStart = !0, t3._protected = !0;
                }
                return e7._system;
            },
            enumerable: !1,
            configurable: !0
        }), e7;
    }(), Tr = function() {
        function e7() {
        }
        return e7.init = function(e9) {
            var r15 = this;
            e9 = Object.assign({
                autoStart: !0,
                sharedTicker: !1
            }, e9), Object.defineProperty(this, "ticker", {
                set: function(e10) {
                    this._ticker && this._ticker.remove(this.render, this), this._ticker = e10, e10 && e10.add(this.render, this, t.UPDATE_PRIORITY.LOW);
                },
                get: function() {
                    return this._ticker;
                }
            }), this.stop = function() {
                r15._ticker.stop();
            }, this.start = function() {
                r15._ticker.start();
            }, this._ticker = null, this.ticker = e9.sharedTicker ? gr.shared : new gr, e9.autoStart && this.start();
        }, e7.destroy = function() {
            if (this._ticker) {
                var t4 = this._ticker;
                this.ticker = null, t4.destroy();
            }
        }, e7;
    }(), br = function() {
        function t5() {
            this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0, this.global = new qe, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0;
        }
        return Object.defineProperty(t5.prototype, "pointerId", {
            get: function() {
                return this.identifier;
            },
            enumerable: !1,
            configurable: !0
        }), t5.prototype.getLocalPosition = function(t6, e7, r15) {
            return t6.worldTransform.applyInverse(r15 || this.global, e7);
        }, t5.prototype.copyEvent = function(t6) {
            "isPrimary" in t6 && t6.isPrimary && (this.isPrimary = !0), this.button = "button" in t6 && t6.button;
            var e7 = "buttons" in t6 && t6.buttons;
            this.buttons = Number.isInteger(e7) ? e7 : "which" in t6 && t6.which, this.width = "width" in t6 && t6.width, this.height = "height" in t6 && t6.height, this.tiltX = "tiltX" in t6 && t6.tiltX, this.tiltY = "tiltY" in t6 && t6.tiltY, this.pointerType = "pointerType" in t6 && t6.pointerType, this.pressure = "pressure" in t6 && t6.pressure, this.rotationAngle = "rotationAngle" in t6 && t6.rotationAngle, this.twist = "twist" in t6 && t6.twist || 0, this.tangentialPressure = "tangentialPressure" in t6 && t6.tangentialPressure || 0;
        }, t5.prototype.reset = function() {
            this.isPrimary = !1;
        }, t5;
    }(), Rr = function(t5, e7) {
        return (Rr = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t6, e9) {
            t6.__proto__ = e9;
        } || function(t6, e9) {
            for(var r15 in e9)e9.hasOwnProperty(r15) && (t6[r15] = e9[r15]);
        })(t5, e7);
    }, xr = function() {
        function t5() {
            this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null;
        }
        return t5.prototype.stopPropagation = function() {
            this.stopped = !0, this.stopPropagationHint = !0, this.stopsPropagatingAt = this.currentTarget;
        }, t5.prototype.reset = function() {
            this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.currentTarget = null, this.target = null;
        }, t5;
    }(), Ar = function() {
        function t5(e7) {
            this._pointerId = e7, this._flags = t5.FLAGS.NONE;
        }
        return t5.prototype._doSet = function(t6, e7) {
            this._flags = e7 ? this._flags | t6 : this._flags & ~t6;
        }, Object.defineProperty(t5.prototype, "pointerId", {
            get: function() {
                return this._pointerId;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t5.prototype, "flags", {
            get: function() {
                return this._flags;
            },
            set: function(t6) {
                this._flags = t6;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t5.prototype, "none", {
            get: function() {
                return this._flags === t5.FLAGS.NONE;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t5.prototype, "over", {
            get: function() {
                return 0 != (this._flags & t5.FLAGS.OVER);
            },
            set: function(e7) {
                this._doSet(t5.FLAGS.OVER, e7);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t5.prototype, "rightDown", {
            get: function() {
                return 0 != (this._flags & t5.FLAGS.RIGHT_DOWN);
            },
            set: function(e7) {
                this._doSet(t5.FLAGS.RIGHT_DOWN, e7);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t5.prototype, "leftDown", {
            get: function() {
                return 0 != (this._flags & t5.FLAGS.LEFT_DOWN);
            },
            set: function(e7) {
                this._doSet(t5.FLAGS.LEFT_DOWN, e7);
            },
            enumerable: !1,
            configurable: !0
        }), t5.FLAGS = Object.freeze({
            NONE: 0,
            OVER: 1,
            LEFT_DOWN: 2,
            RIGHT_DOWN: 4
        }), t5;
    }(), Sr = function() {
        function t5() {
            this._tempPoint = new qe;
        }
        return t5.prototype.recursiveFindHit = function(t6, e7, r15, i13, n10) {
            if (!e7 || !e7.visible) return !1;
            var o11 = t6.data.global, s11 = !1, a14 = n10 = e7.interactive || n10, h12 = !0;
            if (e7.hitArea ? (i13 && (e7.worldTransform.applyInverse(o11, this._tempPoint), e7.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? s11 = !0 : (i13 = !1, h12 = !1)), a14 = !1) : e7._mask && i13 && (e7._mask.containsPoint && e7._mask.containsPoint(o11) || (i13 = !1)), h12 && e7.interactiveChildren && e7.children) for(var u13 = e7.children, l8 = u13.length - 1; l8 >= 0; l8--){
                var c6 = u13[l8], d7 = this.recursiveFindHit(t6, c6, r15, i13, a14);
                if (d7) {
                    if (!c6.parent) continue;
                    a14 = !1, d7 && (t6.target && (i13 = !1), s11 = !0);
                }
            }
            return n10 && (i13 && !t6.target && !e7.hitArea && e7.containsPoint && e7.containsPoint(o11) && (s11 = !0), e7.interactive && (s11 && !t6.target && (t6.target = e7), r15 && r15(t6, e7, !!s11))), s11;
        }, t5.prototype.findHit = function(t6, e7, r15, i13) {
            this.recursiveFindHit(t6, e7, r15, i13, !1);
        }, t5;
    }(), Or = {
        interactive: !1,
        interactiveChildren: !0,
        hitArea: null,
        get buttonMode () {
            return "pointer" === this.cursor;
        },
        set buttonMode (t5){
            t5 ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null);
        },
        cursor: null,
        get trackedPointers () {
            return (void 0) === this._trackedPointers && (this._trackedPointers = {
            }), this._trackedPointers;
        },
        _trackedPointers: void 0
    };
    ur.mixin(Or);
    var Ir = 1, Pr = {
        target: null,
        data: {
            global: null
        }
    }, Mr = function(e7) {
        function r15(t5, r16) {
            var i13 = e7.call(this) || this;
            return r16 = r16 || {
            }, i13.renderer = t5, i13.autoPreventDefault = (void 0) === r16.autoPreventDefault || r16.autoPreventDefault, i13.interactionFrequency = r16.interactionFrequency || 10, i13.mouse = new br, i13.mouse.identifier = Ir, i13.mouse.global.set(-999999), i13.activeInteractionData = {
            }, i13.activeInteractionData[Ir] = i13.mouse, i13.interactionDataPool = [], i13.eventData = new xr, i13.interactionDOMElement = null, i13.moveWhenInside = !1, i13.eventsAdded = !1, i13.tickerAdded = !1, i13.mouseOverRenderer = !("PointerEvent" in self), i13.supportsTouchEvents = "ontouchstart" in self, i13.supportsPointerEvents = !!self.PointerEvent, i13.onPointerUp = i13.onPointerUp.bind(i13), i13.processPointerUp = i13.processPointerUp.bind(i13), i13.onPointerCancel = i13.onPointerCancel.bind(i13), i13.processPointerCancel = i13.processPointerCancel.bind(i13), i13.onPointerDown = i13.onPointerDown.bind(i13), i13.processPointerDown = i13.processPointerDown.bind(i13), i13.onPointerMove = i13.onPointerMove.bind(i13), i13.processPointerMove = i13.processPointerMove.bind(i13), i13.onPointerOut = i13.onPointerOut.bind(i13), i13.processPointerOverOut = i13.processPointerOverOut.bind(i13), i13.onPointerOver = i13.onPointerOver.bind(i13), i13.cursorStyles = {
                default: "inherit",
                pointer: "pointer"
            }, i13.currentCursorMode = null, i13.cursor = null, i13.resolution = 1, i13.delayedEvents = [], i13.search = new Sr, i13._tempDisplayObject = new lr, i13._eventListenerOptions = {
                capture: !0,
                passive: !1
            }, i13._useSystemTicker = (void 0) === r16.useSystemTicker || r16.useSystemTicker, i13.setTargetElement(i13.renderer.view, i13.renderer.resolution), i13;
        }
        return (function(t5, e9) {
            function r16() {
                this.constructor = t5;
            }
            Rr(t5, e9), t5.prototype = null === e9 ? Object.create(e9) : (r16.prototype = e9.prototype, new r16);
        })(r15, e7), Object.defineProperty(r15.prototype, "useSystemTicker", {
            get: function() {
                return this._useSystemTicker;
            },
            set: function(t5) {
                this._useSystemTicker = t5, t5 ? this.addTickerListener() : this.removeTickerListener();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r15.prototype, "lastObjectRendered", {
            get: function() {
                return this.renderer._lastObjectRendered || this._tempDisplayObject;
            },
            enumerable: !1,
            configurable: !0
        }), r15.prototype.hitTest = function(t5, e9) {
            return Pr.target = null, Pr.data.global = t5, e9 || (e9 = this.lastObjectRendered), this.processInteractive(Pr, e9, null, !0), Pr.target;
        }, r15.prototype.setTargetElement = function(t5, e9) {
            (void 0) === e9 && (e9 = 1), this.removeTickerListener(), this.removeEvents(), this.interactionDOMElement = t5, this.resolution = e9, this.addEvents(), this.addTickerListener();
        }, r15.prototype.addTickerListener = function() {
            !this.tickerAdded && this.interactionDOMElement && this._useSystemTicker && (gr.system.add(this.tickerUpdate, this, t.UPDATE_PRIORITY.INTERACTION), this.tickerAdded = !0);
        }, r15.prototype.removeTickerListener = function() {
            this.tickerAdded && (gr.system.remove(this.tickerUpdate, this), this.tickerAdded = !1);
        }, r15.prototype.addEvents = function() {
            if (!this.eventsAdded && this.interactionDOMElement) {
                var t5 = this.interactionDOMElement.style;
                self.navigator.msPointerEnabled ? (t5.msContentZooming = "none", t5.msTouchAction = "none") : this.supportsPointerEvents && (t5.touchAction = "none"), this.supportsPointerEvents ? (self.document.addEventListener("pointermove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, this._eventListenerOptions), self.addEventListener("pointercancel", this.onPointerCancel, this._eventListenerOptions), self.addEventListener("pointerup", this.onPointerUp, this._eventListenerOptions)) : (self.document.addEventListener("mousemove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, this._eventListenerOptions), self.addEventListener("mouseup", this.onPointerUp, this._eventListenerOptions)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, this._eventListenerOptions), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, this._eventListenerOptions), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, this._eventListenerOptions)), this.eventsAdded = !0;
            }
        }, r15.prototype.removeEvents = function() {
            if (this.eventsAdded && this.interactionDOMElement) {
                var t6 = this.interactionDOMElement.style;
                self.navigator.msPointerEnabled ? (t6.msContentZooming = "", t6.msTouchAction = "") : this.supportsPointerEvents && (t6.touchAction = ""), this.supportsPointerEvents ? (self.document.removeEventListener("pointermove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, this._eventListenerOptions), self.removeEventListener("pointercancel", this.onPointerCancel, this._eventListenerOptions), self.removeEventListener("pointerup", this.onPointerUp, this._eventListenerOptions)) : (self.document.removeEventListener("mousemove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, this._eventListenerOptions), self.removeEventListener("mouseup", this.onPointerUp, this._eventListenerOptions)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, this._eventListenerOptions)), this.interactionDOMElement = null, this.eventsAdded = !1;
            }
        }, r15.prototype.tickerUpdate = function(t7) {
            this._deltaTime += t7, this._deltaTime < this.interactionFrequency || (this._deltaTime = 0, this.update());
        }, r15.prototype.update = function() {
            if (this.interactionDOMElement) {
                if (this._didMove) this._didMove = !1;
                else {
                    for(var t7 in this.cursor = null, this.activeInteractionData)if (this.activeInteractionData.hasOwnProperty(t7)) {
                        var e9 = this.activeInteractionData[t7];
                        if (e9.originalEvent && "touch" !== e9.pointerType) {
                            var r16 = this.configureInteractionEventForDOMEvent(this.eventData, e9.originalEvent, e9);
                            this.processInteractive(r16, this.lastObjectRendered, this.processPointerOverOut, !0);
                        }
                    }
                    this.setCursorMode(this.cursor);
                }
            }
        }, r15.prototype.setCursorMode = function(t8) {
            t8 = t8 || "default";
            var e10 = !0;
            if (self.OffscreenCanvas && this.interactionDOMElement instanceof OffscreenCanvas && (e10 = !1), this.currentCursorMode !== t8) {
                this.currentCursorMode = t8;
                var r17 = this.cursorStyles[t8];
                if (r17) switch(typeof r17){
                    case "string":
                        e10 && (this.interactionDOMElement.style.cursor = r17);
                        break;
                    case "function":
                        r17(t8);
                        break;
                    case "object":
                        e10 && Object.assign(this.interactionDOMElement.style, r17);
                }
                else e10 && "string" == typeof t8 && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t8) && (this.interactionDOMElement.style.cursor = t8);
            }
        }, r15.prototype.dispatchEvent = function(t8, e10, r18) {
            r18.stopPropagationHint && t8 !== r18.stopsPropagatingAt || (r18.currentTarget = t8, r18.type = e10, t8.emit(e10, r18), t8[e10] && t8[e10](r18));
        }, r15.prototype.delayDispatchEvent = function(t8, e10, r18) {
            this.delayedEvents.push({
                displayObject: t8,
                eventString: e10,
                eventData: r18
            });
        }, r15.prototype.mapPositionToPoint = function(t8, e10, r18) {
            var i13;
            i13 = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                x: 0,
                y: 0,
                width: this.interactionDOMElement.width,
                height: this.interactionDOMElement.height,
                left: 0,
                top: 0
            };
            var n10 = 1 / this.resolution;
            t8.x = (e10 - i13.left) * (this.interactionDOMElement.width / i13.width) * n10, t8.y = (r18 - i13.top) * (this.interactionDOMElement.height / i13.height) * n10;
        }, r15.prototype.processInteractive = function(t8, e10, r18, i13) {
            var n10 = this.search.findHit(t8, e10, r18, i13), o11 = this.delayedEvents;
            if (!o11.length) return n10;
            t8.stopPropagationHint = !1;
            var s11 = o11.length;
            this.delayedEvents = [];
            for(var a14 = 0; a14 < s11; a14++){
                var h12 = o11[a14], u13 = h12.displayObject, l8 = h12.eventString, c7 = h12.eventData;
                c7.stopsPropagatingAt === u13 && (c7.stopPropagationHint = !0), this.dispatchEvent(u13, l8, c7);
            }
            return n10;
        }, r15.prototype.onPointerDown = function(t8) {
            if (!this.supportsTouchEvents || "touch" !== t8.pointerType) {
                var e10 = this.normalizeToPointerData(t8);
                this.autoPreventDefault && e10[0].isNormalized && (t8.cancelable || !("cancelable" in t8)) && t8.preventDefault();
                for(var r18 = e10.length, i13 = 0; i13 < r18; i13++){
                    var n10 = e10[i13], o11 = this.getInteractionDataForPointerId(n10), s11 = this.configureInteractionEventForDOMEvent(this.eventData, n10, o11);
                    if (s11.data.originalEvent = t8, this.processInteractive(s11, this.lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s11), "touch" === n10.pointerType) this.emit("touchstart", s11);
                    else if ("mouse" === n10.pointerType || "pen" === n10.pointerType) {
                        var a14 = 2 === n10.button;
                        this.emit(a14 ? "rightdown" : "mousedown", this.eventData);
                    }
                }
            }
        }, r15.prototype.processPointerDown = function(t8, e11, r19) {
            var i14 = t8.data, n11 = t8.data.identifier;
            if (r19) {
                if (e11.trackedPointers[n11] || (e11.trackedPointers[n11] = new Ar(n11)), this.dispatchEvent(e11, "pointerdown", t8), "touch" === i14.pointerType) this.dispatchEvent(e11, "touchstart", t8);
                else if ("mouse" === i14.pointerType || "pen" === i14.pointerType) {
                    var o12 = 2 === i14.button;
                    o12 ? e11.trackedPointers[n11].rightDown = !0 : e11.trackedPointers[n11].leftDown = !0, this.dispatchEvent(e11, o12 ? "rightdown" : "mousedown", t8);
                }
            }
        }, r15.prototype.onPointerComplete = function(t8, e11, r19) {
            for(var i14 = this.normalizeToPointerData(t8), n11 = i14.length, o13 = t8.target !== this.interactionDOMElement ? "outside" : "", s12 = 0; s12 < n11; s12++){
                var a15 = i14[s12], h13 = this.getInteractionDataForPointerId(a15), u14 = this.configureInteractionEventForDOMEvent(this.eventData, a15, h13);
                if (u14.data.originalEvent = t8, this.processInteractive(u14, this.lastObjectRendered, r19, e11 || !o13), this.emit(e11 ? "pointercancel" : "pointerup" + o13, u14), "mouse" === a15.pointerType || "pen" === a15.pointerType) {
                    var l9 = 2 === a15.button;
                    this.emit(l9 ? "rightup" + o13 : "mouseup" + o13, u14);
                } else "touch" === a15.pointerType && (this.emit(e11 ? "touchcancel" : "touchend" + o13, u14), this.releaseInteractionDataForPointerId(a15.pointerId));
            }
        }, r15.prototype.onPointerCancel = function(t8) {
            this.supportsTouchEvents && "touch" === t8.pointerType || this.onPointerComplete(t8, !0, this.processPointerCancel);
        }, r15.prototype.processPointerCancel = function(t8, e11) {
            var r19 = t8.data, i14 = t8.data.identifier;
            (void 0) !== e11.trackedPointers[i14] && (delete e11.trackedPointers[i14], this.dispatchEvent(e11, "pointercancel", t8), "touch" === r19.pointerType && this.dispatchEvent(e11, "touchcancel", t8));
        }, r15.prototype.onPointerUp = function(t8) {
            this.supportsTouchEvents && "touch" === t8.pointerType || this.onPointerComplete(t8, !1, this.processPointerUp);
        }, r15.prototype.processPointerUp = function(t8, e11, r19) {
            var i14 = t8.data, n11 = t8.data.identifier, o13 = e11.trackedPointers[n11], s12 = "touch" === i14.pointerType, a16 = "mouse" === i14.pointerType || "pen" === i14.pointerType, h14 = !1;
            if (a16) {
                var u15 = 2 === i14.button, l10 = Ar.FLAGS, c8 = u15 ? l10.RIGHT_DOWN : l10.LEFT_DOWN, d8 = (void 0) !== o13 && o13.flags & c8;
                r19 ? (this.dispatchEvent(e11, u15 ? "rightup" : "mouseup", t8), d8 && (this.dispatchEvent(e11, u15 ? "rightclick" : "click", t8), h14 = !0)) : d8 && this.dispatchEvent(e11, u15 ? "rightupoutside" : "mouseupoutside", t8), o13 && (u15 ? o13.rightDown = !1 : o13.leftDown = !1);
            }
            r19 ? (this.dispatchEvent(e11, "pointerup", t8), s12 && this.dispatchEvent(e11, "touchend", t8), o13 && (a16 && !h14 || this.dispatchEvent(e11, "pointertap", t8), s12 && (this.dispatchEvent(e11, "tap", t8), o13.over = !1))) : o13 && (this.dispatchEvent(e11, "pointerupoutside", t8), s12 && this.dispatchEvent(e11, "touchendoutside", t8)), o13 && o13.none && delete e11.trackedPointers[n11];
        }, r15.prototype.onPointerMove = function(t8) {
            if (!this.supportsTouchEvents || "touch" !== t8.pointerType) {
                var e11 = this.normalizeToPointerData(t8);
                "mouse" !== e11[0].pointerType && "pen" !== e11[0].pointerType || (this._didMove = !0, this.cursor = null);
                for(var r19 = e11.length, i14 = 0; i14 < r19; i14++){
                    var n11 = e11[i14], o13 = this.getInteractionDataForPointerId(n11), s12 = this.configureInteractionEventForDOMEvent(this.eventData, n11, o13);
                    s12.data.originalEvent = t8, this.processInteractive(s12, this.lastObjectRendered, this.processPointerMove, !0), this.emit("pointermove", s12), "touch" === n11.pointerType && this.emit("touchmove", s12), "mouse" !== n11.pointerType && "pen" !== n11.pointerType || this.emit("mousemove", s12);
                }
                "mouse" === e11[0].pointerType && this.setCursorMode(this.cursor);
            }
        }, r15.prototype.processPointerMove = function(t8, e12, r20) {
            var i15 = t8.data, n12 = "touch" === i15.pointerType, o14 = "mouse" === i15.pointerType || "pen" === i15.pointerType;
            o14 && this.processPointerOverOut(t8, e12, r20), this.moveWhenInside && !r20 || (this.dispatchEvent(e12, "pointermove", t8), n12 && this.dispatchEvent(e12, "touchmove", t8), o14 && this.dispatchEvent(e12, "mousemove", t8));
        }, r15.prototype.onPointerOut = function(t8) {
            if (!this.supportsTouchEvents || "touch" !== t8.pointerType) {
                var e12 = this.normalizeToPointerData(t8)[0];
                "mouse" === e12.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
                var r20 = this.getInteractionDataForPointerId(e12), i15 = this.configureInteractionEventForDOMEvent(this.eventData, e12, r20);
                i15.data.originalEvent = e12, this.processInteractive(i15, this.lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", i15), "mouse" === e12.pointerType || "pen" === e12.pointerType ? this.emit("mouseout", i15) : this.releaseInteractionDataForPointerId(r20.identifier);
            }
        }, r15.prototype.processPointerOverOut = function(t8, e13, r21) {
            var i16 = t8.data, n12 = t8.data.identifier, o14 = "mouse" === i16.pointerType || "pen" === i16.pointerType, s13 = e13.trackedPointers[n12];
            r21 && !s13 && (s13 = e13.trackedPointers[n12] = new Ar(n12)), (void 0) !== s13 && (r21 && this.mouseOverRenderer ? (s13.over || (s13.over = !0, this.delayDispatchEvent(e13, "pointerover", t8), o14 && this.delayDispatchEvent(e13, "mouseover", t8)), o14 && null === this.cursor && (this.cursor = e13.cursor)) : s13.over && (s13.over = !1, this.dispatchEvent(e13, "pointerout", this.eventData), o14 && this.dispatchEvent(e13, "mouseout", t8), s13.none && delete e13.trackedPointers[n12]));
        }, r15.prototype.onPointerOver = function(t8) {
            var e13 = this.normalizeToPointerData(t8)[0], r21 = this.getInteractionDataForPointerId(e13), i16 = this.configureInteractionEventForDOMEvent(this.eventData, e13, r21);
            i16.data.originalEvent = e13, "mouse" === e13.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", i16), "mouse" !== e13.pointerType && "pen" !== e13.pointerType || this.emit("mouseover", i16);
        }, r15.prototype.getInteractionDataForPointerId = function(t8) {
            var e13, r21 = t8.pointerId;
            return r21 === Ir || "mouse" === t8.pointerType ? e13 = this.mouse : this.activeInteractionData[r21] ? e13 = this.activeInteractionData[r21] : ((e13 = this.interactionDataPool.pop() || new br).identifier = r21, this.activeInteractionData[r21] = e13), e13.copyEvent(t8), e13;
        }, r15.prototype.releaseInteractionDataForPointerId = function(t8) {
            var e13 = this.activeInteractionData[t8];
            e13 && (delete this.activeInteractionData[t8], e13.reset(), this.interactionDataPool.push(e13));
        }, r15.prototype.configureInteractionEventForDOMEvent = function(t8, e13, r21) {
            return t8.data = r21, this.mapPositionToPoint(r21.global, e13.clientX, e13.clientY), "touch" === e13.pointerType && (e13.globalX = r21.global.x, e13.globalY = r21.global.y), r21.originalEvent = e13, t8.reset(), t8;
        }, r15.prototype.normalizeToPointerData = function(t8) {
            var e13 = [];
            if (this.supportsTouchEvents && t8 instanceof TouchEvent) for(var r21 = 0, i16 = t8.changedTouches.length; r21 < i16; r21++){
                var n12 = t8.changedTouches[r21];
                (void 0) === n12.button && (n12.button = t8.touches.length ? 1 : 0), (void 0) === n12.buttons && (n12.buttons = t8.touches.length ? 1 : 0), (void 0) === n12.isPrimary && (n12.isPrimary = 1 === t8.touches.length && "touchstart" === t8.type), (void 0) === n12.width && (n12.width = n12.radiusX || 1), (void 0) === n12.height && (n12.height = n12.radiusY || 1), (void 0) === n12.tiltX && (n12.tiltX = 0), (void 0) === n12.tiltY && (n12.tiltY = 0), (void 0) === n12.pointerType && (n12.pointerType = "touch"), (void 0) === n12.pointerId && (n12.pointerId = n12.identifier || 0), (void 0) === n12.pressure && (n12.pressure = n12.force || 0.5), (void 0) === n12.twist && (n12.twist = 0), (void 0) === n12.tangentialPressure && (n12.tangentialPressure = 0), (void 0) === n12.layerX && (n12.layerX = n12.offsetX = n12.clientX), (void 0) === n12.layerY && (n12.layerY = n12.offsetY = n12.clientY), n12.isNormalized = !0, e13.push(n12);
            }
            else if (!self.MouseEvent || t8 instanceof MouseEvent && !(this.supportsPointerEvents && t8 instanceof self.PointerEvent)) {
                var o14 = t8;
                (void 0) === o14.isPrimary && (o14.isPrimary = !0), (void 0) === o14.width && (o14.width = 1), (void 0) === o14.height && (o14.height = 1), (void 0) === o14.tiltX && (o14.tiltX = 0), (void 0) === o14.tiltY && (o14.tiltY = 0), (void 0) === o14.pointerType && (o14.pointerType = "mouse"), (void 0) === o14.pointerId && (o14.pointerId = Ir), (void 0) === o14.pressure && (o14.pressure = 0.5), (void 0) === o14.twist && (o14.twist = 0), (void 0) === o14.tangentialPressure && (o14.tangentialPressure = 0), o14.isNormalized = !0, e13.push(o14);
            } else e13.push(t8);
            return e13;
        }, r15.prototype.destroy = function() {
            this.removeEvents(), this.removeTickerListener(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this.search = null;
        }, r15;
    }(ot), Dr = function() {
        function t8(t9) {
            this.items = [], this._name = t9, this._aliasCount = 0;
        }
        return t8.prototype.emit = function(t9, e7, r15, i16, n13, o15, s13, a16) {
            if (arguments.length > 8) throw new Error("max arguments reached");
            var h14 = this.name, u16 = this.items;
            this._aliasCount++;
            for(var l11 = 0, c9 = u16.length; l11 < c9; l11++)u16[l11][h14](t9, e7, r15, i16, n13, o15, s13, a16);
            return u16 === this.items && this._aliasCount--, this;
        }, t8.prototype.ensureNonAliasedItems = function() {
            this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0));
        }, t8.prototype.add = function(t9) {
            return t9[this._name] && (this.ensureNonAliasedItems(), this.remove(t9), this.items.push(t9)), this;
        }, t8.prototype.remove = function(t9) {
            var e7 = this.items.indexOf(t9);
            return -1 !== e7 && (this.ensureNonAliasedItems(), this.items.splice(e7, 1)), this;
        }, t8.prototype.contains = function(t9) {
            return -1 !== this.items.indexOf(t9);
        }, t8.prototype.removeAll = function() {
            return this.ensureNonAliasedItems(), this.items.length = 0, this;
        }, t8.prototype.destroy = function() {
            this.removeAll(), this.items = null, this._name = null;
        }, Object.defineProperty(t8.prototype, "empty", {
            get: function() {
                return 0 === this.items.length;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t8.prototype, "name", {
            get: function() {
                return this._name;
            },
            enumerable: !1,
            configurable: !0
        }), t8;
    }();
    Object.defineProperties(Dr.prototype, {
        dispatch: {
            value: Dr.prototype.emit
        },
        run: {
            value: Dr.prototype.emit
        }
    }), rt.PREFER_ENV = et.any ? t.ENV.WEBGL : t.ENV.WEBGL2, rt.STRICT_TEXTURE_CACHE = !1;
    var Nr = [];
    function wr(t8, e7) {
        if (!t8) return null;
        var r15 = "";
        if ("string" == typeof t8) {
            var i16 = /\.(\w{3,4})(?:$|\?|#)/i.exec(t8);
            i16 && (r15 = i16[1].toLowerCase());
        }
        for(var n13 = Nr.length - 1; n13 >= 0; --n13){
            var o15 = Nr[n13];
            if (o15.test && o15.test(t8, r15)) return new o15(t8, e7);
        }
        throw new Error("Unrecognized source type to auto-detect Resource");
    }
    var Cr = function(t8, e7) {
        return (Cr = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t9, e13) {
            t9.__proto__ = e13;
        } || function(t9, e13) {
            for(var r15 in e13)e13.hasOwnProperty(r15) && (t9[r15] = e13[r15]);
        })(t8, e7);
    };
    function Lr(t8, e7) {
        function r15() {
            this.constructor = t8;
        }
        Cr(t8, e7), t8.prototype = null === e7 ? Object.create(e7) : (r15.prototype = e7.prototype, new r15);
    }
    var Fr = function() {
        return (Fr = Object.assign || function(t8) {
            for(var e7, r15 = arguments, i17 = 1, n13 = arguments.length; i17 < n13; i17++)for(var o16 in e7 = r15[i17])Object.prototype.hasOwnProperty.call(e7, o16) && (t8[o16] = e7[o16]);
            return t8;
        }).apply(this, arguments);
    }, Ur = function() {
        function t8(t9, e7) {
            (void 0) === t9 && (t9 = 0), (void 0) === e7 && (e7 = 0), this._width = t9, this._height = e7, this.destroyed = !1, this.internal = !1, this.onResize = new Dr("setRealSize"), this.onUpdate = new Dr("update"), this.onError = new Dr("onError");
        }
        return t8.prototype.bind = function(t9) {
            this.onResize.add(t9), this.onUpdate.add(t9), this.onError.add(t9), (this._width || this._height) && this.onResize.emit(this._width, this._height);
        }, t8.prototype.unbind = function(t9) {
            this.onResize.remove(t9), this.onUpdate.remove(t9), this.onError.remove(t9);
        }, t8.prototype.resize = function(t9, e7) {
            t9 === this._width && e7 === this._height || (this._width = t9, this._height = e7, this.onResize.emit(t9, e7));
        }, Object.defineProperty(t8.prototype, "valid", {
            get: function() {
                return !!this._width && !!this._height;
            },
            enumerable: !1,
            configurable: !0
        }), t8.prototype.update = function() {
            this.destroyed || this.onUpdate.emit();
        }, t8.prototype.load = function() {
            return Promise.resolve(this);
        }, Object.defineProperty(t8.prototype, "width", {
            get: function() {
                return this._width;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t8.prototype, "height", {
            get: function() {
                return this._height;
            },
            enumerable: !1,
            configurable: !0
        }), t8.prototype.style = function(t9, e7, r15) {
            return !1;
        }, t8.prototype.dispose = function() {
        }, t8.prototype.destroy = function() {
            this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null);
        }, t8.test = function(t9, e7) {
            return !1;
        }, t8;
    }(), Br = function(e7) {
        function r15(t8, r21) {
            var i17 = this, n13 = r21 || {
            }, o16 = n13.width, s13 = n13.height;
            if (!o16 || !s13) throw new Error("BufferResource width or height invalid");
            return (i17 = e7.call(this, o16, s13) || this).data = t8, i17;
        }
        return Lr(r15, e7), r15.prototype.upload = function(e13, r21, i17) {
            var n13 = e13.gl;
            n13.pixelStorei(n13.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r21.alphaMode === t.ALPHA_MODES.UNPACK);
            var o16 = r21.realWidth, s13 = r21.realHeight;
            return i17.width === o16 && i17.height === s13 ? n13.texSubImage2D(r21.target, 0, 0, 0, o16, s13, r21.format, i17.type, this.data) : (i17.width = o16, i17.height = s13, n13.texImage2D(r21.target, 0, i17.internalFormat, o16, s13, 0, r21.format, i17.type, this.data)), !0;
        }, r15.prototype.dispose = function() {
            this.data = null;
        }, r15.test = function(t8) {
            return t8 instanceof Float32Array || t8 instanceof Uint8Array || t8 instanceof Uint32Array;
        }, r15;
    }(Ur), Gr = {
        scaleMode: t.SCALE_MODES.NEAREST,
        format: t.FORMATS.RGBA,
        alphaMode: t.ALPHA_MODES.NPM
    }, Xr = function(e7) {
        function r15(r21, i17) {
            (void 0) === r21 && (r21 = null), (void 0) === i17 && (i17 = null);
            var n13 = e7.call(this) || this, o16 = (i17 = i17 || {
            }).alphaMode, s13 = i17.mipmap, a16 = i17.anisotropicLevel, h14 = i17.scaleMode, u16 = i17.width, l11 = i17.height, c9 = i17.wrapMode, d9 = i17.format, f7 = i17.type, p8 = i17.target, _ = i17.resolution, m3 = i17.resourceOptions;
            return !r21 || r21 instanceof Ur || ((r21 = wr(r21, m3)).internal = !0), n13.resolution = _ || rt.RESOLUTION, n13.width = Math.round((u16 || 0) * n13.resolution) / n13.resolution, n13.height = Math.round((l11 || 0) * n13.resolution) / n13.resolution, n13._mipmap = (void 0) !== s13 ? s13 : rt.MIPMAP_TEXTURES, n13.anisotropicLevel = (void 0) !== a16 ? a16 : rt.ANISOTROPIC_LEVEL, n13._wrapMode = c9 || rt.WRAP_MODE, n13._scaleMode = (void 0) !== h14 ? h14 : rt.SCALE_MODE, n13.format = d9 || t.FORMATS.RGBA, n13.type = f7 || t.TYPES.UNSIGNED_BYTE, n13.target = p8 || t.TARGETS.TEXTURE_2D, n13.alphaMode = (void 0) !== o16 ? o16 : t.ALPHA_MODES.UNPACK, n13.uid = Ie(), n13.touched = 0, n13.isPowerOfTwo = !1, n13._refreshPOT(), n13._glTextures = {
            }, n13.dirtyId = 0, n13.dirtyStyleId = 0, n13.cacheId = null, n13.valid = u16 > 0 && l11 > 0, n13.textureCacheIds = [], n13.destroyed = !1, n13.resource = null, n13._batchEnabled = 0, n13._batchLocation = 0, n13.parentTextureArray = null, n13.setResource(r21), n13;
        }
        return Lr(r15, e7), Object.defineProperty(r15.prototype, "realWidth", {
            get: function() {
                return Math.round(this.width * this.resolution);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r15.prototype, "realHeight", {
            get: function() {
                return Math.round(this.height * this.resolution);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r15.prototype, "mipmap", {
            get: function() {
                return this._mipmap;
            },
            set: function(t8) {
                this._mipmap !== t8 && (this._mipmap = t8, this.dirtyStyleId++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r15.prototype, "scaleMode", {
            get: function() {
                return this._scaleMode;
            },
            set: function(t8) {
                this._scaleMode !== t8 && (this._scaleMode = t8, this.dirtyStyleId++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r15.prototype, "wrapMode", {
            get: function() {
                return this._wrapMode;
            },
            set: function(t8) {
                this._wrapMode !== t8 && (this._wrapMode = t8, this.dirtyStyleId++);
            },
            enumerable: !1,
            configurable: !0
        }), r15.prototype.setStyle = function(t8, e13) {
            var r21;
            return (void 0) !== t8 && t8 !== this.scaleMode && (this.scaleMode = t8, r21 = !0), (void 0) !== e13 && e13 !== this.mipmap && (this.mipmap = e13, r21 = !0), r21 && this.dirtyStyleId++, this;
        }, r15.prototype.setSize = function(t8, e13, r21) {
            return r21 = r21 || this.resolution, this.setRealSize(t8 * r21, e13 * r21, r21);
        }, r15.prototype.setRealSize = function(t8, e13, r21) {
            return this.resolution = r21 || this.resolution, this.width = Math.round(t8) / this.resolution, this.height = Math.round(e13) / this.resolution, this._refreshPOT(), this.update(), this;
        }, r15.prototype._refreshPOT = function() {
            this.isPowerOfTwo = Re(this.realWidth) && Re(this.realHeight);
        }, r15.prototype.setResolution = function(t8) {
            var e13 = this.resolution;
            return e13 === t8 ? this : (this.resolution = t8, this.valid && (this.width = Math.round(this.width * e13) / t8, this.height = Math.round(this.height * e13) / t8, this.emit("update", this)), this._refreshPOT(), this);
        }, r15.prototype.setResource = function(t8) {
            if (this.resource === t8) return this;
            if (this.resource) throw new Error("Resource can be set only once");
            return t8.bind(this), this.resource = t8, this;
        }, r15.prototype.update = function() {
            this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this));
        }, r15.prototype.onError = function(t8) {
            this.emit("error", this, t8);
        }, r15.prototype.destroy = function() {
            this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete Ne[this.cacheId], delete De[this.cacheId], this.cacheId = null), this.dispose(), r15.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0;
        }, r15.prototype.dispose = function() {
            this.emit("dispose", this);
        }, r15.prototype.castToBaseTexture = function() {
            return this;
        }, r15.from = function(t8, e13, i17) {
            (void 0) === i17 && (i17 = rt.STRICT_TEXTURE_CACHE);
            var n13 = "string" == typeof t8, o16 = null;
            if (n13) o16 = t8;
            else {
                if (!t8._pixiId) {
                    var s13 = e13 && e13.pixiIdPrefix || "pixiid";
                    t8._pixiId = s13 + "_" + Ie();
                }
                o16 = t8._pixiId;
            }
            var a16 = Ne[o16];
            if (n13 && i17 && !a16) throw new Error('The cacheId "' + o16 + '" does not exist in BaseTextureCache.');
            return a16 || ((a16 = new r15(t8, e13)).cacheId = o16, r15.addToCache(a16, o16)), a16;
        }, r15.fromBuffer = function(e13, i17, n13, o16) {
            e13 = e13 || new Float32Array(i17 * n13 * 4);
            var s14 = new Br(e13, {
                width: i17,
                height: n13
            }), a16 = e13 instanceof Float32Array ? t.TYPES.FLOAT : t.TYPES.UNSIGNED_BYTE;
            return new r15(s14, Object.assign(Gr, o16 || {
                width: i17,
                height: n13,
                type: a16
            }));
        }, r15.addToCache = function(t8, e13) {
            e13 && (-1 === t8.textureCacheIds.indexOf(e13) && t8.textureCacheIds.push(e13), Ne[e13] && console.warn("BaseTexture added to the cache with an id [" + e13 + "] that already had an entry"), Ne[e13] = t8);
        }, r15.removeFromCache = function(t8) {
            if ("string" == typeof t8) {
                var e13 = Ne[t8];
                if (e13) {
                    var r21 = e13.textureCacheIds.indexOf(t8);
                    return r21 > -1 && e13.textureCacheIds.splice(r21, 1), delete Ne[t8], e13;
                }
            } else if (t8 && t8.textureCacheIds) {
                for(var i17 = 0; i17 < t8.textureCacheIds.length; ++i17)delete Ne[t8.textureCacheIds[i17]];
                return t8.textureCacheIds.length = 0, t8;
            }
            return null;
        }, r15._globalBatch = 0, r15;
    }(ot), kr = function(t8) {
        function e7(e14, r15) {
            var i18 = this, n13 = r15 || {
            }, o16 = n13.width, s14 = n13.height;
            (i18 = t8.call(this, o16, s14) || this).items = [], i18.itemDirtyIds = [];
            for(var a16 = 0; a16 < e14; a16++){
                var h14 = new Xr;
                i18.items.push(h14), i18.itemDirtyIds.push(-2);
            }
            return i18.length = e14, i18._load = null, i18.baseTexture = null, i18;
        }
        return Lr(e7, t8), e7.prototype.initFromArray = function(t9, e14) {
            for(var r15 = 0; r15 < this.length; r15++)t9[r15] && (t9[r15].castToBaseTexture ? this.addBaseTextureAt(t9[r15].castToBaseTexture(), r15) : t9[r15] instanceof Ur ? this.addResourceAt(t9[r15], r15) : this.addResourceAt(wr(t9[r15], e14), r15));
        }, e7.prototype.dispose = function() {
            for(var t9 = 0, e14 = this.length; t9 < e14; t9++)this.items[t9].destroy();
            this.items = null, this.itemDirtyIds = null, this._load = null;
        }, e7.prototype.addResourceAt = function(t9, e14) {
            if (!this.items[e14]) throw new Error("Index " + e14 + " is out of bounds");
            return t9.valid && !this.valid && this.resize(t9.width, t9.height), this.items[e14].setResource(t9), this;
        }, e7.prototype.bind = function(e14) {
            if (null !== this.baseTexture) throw new Error("Only one base texture per TextureArray is allowed");
            t8.prototype.bind.call(this, e14);
            for(var r15 = 0; r15 < this.length; r15++)this.items[r15].parentTextureArray = e14, this.items[r15].on("update", e14.update, e14);
        }, e7.prototype.unbind = function(e14) {
            t8.prototype.unbind.call(this, e14);
            for(var r15 = 0; r15 < this.length; r15++)this.items[r15].parentTextureArray = null, this.items[r15].off("update", e14.update, e14);
        }, e7.prototype.load = function() {
            var t9 = this;
            if (this._load) return this._load;
            var e14 = this.items.map(function(t10) {
                return t10.resource;
            }).filter(function(t10) {
                return t10;
            }).map(function(t10) {
                return t10.load();
            });
            return this._load = Promise.all(e14).then(function() {
                var e15 = t9.items[0], r15 = e15.realWidth, i18 = e15.realHeight;
                return t9.resize(r15, i18), Promise.resolve(t9);
            }), this._load;
        }, e7;
    }(Ur), Hr = function(e7) {
        function r15(t8, r22) {
            var i18, n13, o16 = this, s14 = r22 || {
            }, a16 = s14.width, h15 = s14.height;
            return Array.isArray(t8) ? (i18 = t8, n13 = t8.length) : n13 = t8, o16 = e7.call(this, n13, {
                width: a16,
                height: h15
            }) || this, i18 && o16.initFromArray(i18, r22), o16;
        }
        return Lr(r15, e7), r15.prototype.addBaseTextureAt = function(t8, e14) {
            if (!t8.resource) throw new Error("ArrayResource does not support RenderTexture");
            return this.addResourceAt(t8.resource, e14), this;
        }, r15.prototype.bind = function(r22) {
            e7.prototype.bind.call(this, r22), r22.target = t.TARGETS.TEXTURE_2D_ARRAY;
        }, r15.prototype.upload = function(t8, e14, r22) {
            var i18 = this.length, n13 = this.itemDirtyIds, o16 = this.items, s14 = t8.gl;
            r22.dirtyId < 0 && s14.texImage3D(s14.TEXTURE_2D_ARRAY, 0, r22.internalFormat, this._width, this._height, i18, 0, e14.format, r22.type, null);
            for(var a16 = 0; a16 < i18; a16++){
                var h15 = o16[a16];
                n13[a16] < h15.dirtyId && (n13[a16] = h15.dirtyId, h15.valid && s14.texSubImage3D(s14.TEXTURE_2D_ARRAY, 0, 0, 0, a16, h15.resource.width, h15.resource.height, 1, e14.format, r22.type, h15.resource.source));
            }
            return !0;
        }, r15;
    }(kr), Yr = function(e7) {
        function r15(t8) {
            var r22 = this, i18 = t8, n13 = i18.naturalWidth || i18.videoWidth || i18.width, o16 = i18.naturalHeight || i18.videoHeight || i18.height;
            return (r22 = e7.call(this, n13, o16) || this).source = t8, r22.noSubImage = !1, r22;
        }
        return Lr(r15, e7), r15.crossOrigin = function(t8, e14, r22) {
            (void 0) === r22 && 0 !== e14.indexOf("data:") ? t8.crossOrigin = Ue(e14) : !1 !== r22 && (t8.crossOrigin = "string" == typeof r22 ? r22 : "anonymous");
        }, r15.prototype.upload = function(e14, r22, i18, n13) {
            var o16 = e14.gl, s14 = r22.realWidth, a16 = r22.realHeight;
            return n13 = n13 || this.source, o16.pixelStorei(o16.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r22.alphaMode === t.ALPHA_MODES.UNPACK), this.noSubImage || r22.target !== o16.TEXTURE_2D || i18.width !== s14 || i18.height !== a16 ? (i18.width = s14, i18.height = a16, o16.texImage2D(r22.target, 0, i18.internalFormat, r22.format, i18.type, n13)) : o16.texSubImage2D(o16.TEXTURE_2D, 0, 0, 0, r22.format, i18.type, n13), !0;
        }, r15.prototype.update = function() {
            if (!this.destroyed) {
                var t8 = this.source, r22 = t8.naturalWidth || t8.videoWidth || t8.width, i18 = t8.naturalHeight || t8.videoHeight || t8.height;
                this.resize(r22, i18), e7.prototype.update.call(this);
            }
        }, r15.prototype.dispose = function() {
            this.source = null;
        }, r15;
    }(Ur), jr = function(t9) {
        function e7(e14) {
            return t9.call(this, e14) || this;
        }
        return Lr(e7, t9), e7.test = function(t10) {
            var e14 = self.OffscreenCanvas;
            return !!(e14 && t10 instanceof e14) || self.HTMLCanvasElement && t10 instanceof HTMLCanvasElement;
        }, e7;
    }(Yr), Vr = function(e7) {
        function r15(i19, n13) {
            var o16 = this, s14 = n13 || {
            }, a16 = s14.width, h16 = s14.height, u16 = s14.autoLoad, l11 = s14.linkBaseTexture;
            if (i19 && i19.length !== r15.SIDES) throw new Error("Invalid length. Got " + i19.length + ", expected 6");
            o16 = e7.call(this, 6, {
                width: a16,
                height: h16
            }) || this;
            for(var c9 = 0; c9 < r15.SIDES; c9++)o16.items[c9].target = t.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + c9;
            return o16.linkBaseTexture = !1 !== l11, i19 && o16.initFromArray(i19, n13), !1 !== u16 && o16.load(), o16;
        }
        return Lr(r15, e7), r15.prototype.bind = function(r23) {
            e7.prototype.bind.call(this, r23), r23.target = t.TARGETS.TEXTURE_CUBE_MAP;
        }, r15.prototype.addBaseTextureAt = function(e14, r23, i19) {
            if ((void 0) === i19 && (i19 = this.linkBaseTexture), !this.items[r23]) throw new Error("Index " + r23 + " is out of bounds");
            if (!this.linkBaseTexture || e14.parentTextureArray || Object.keys(e14._glTextures).length > 0) {
                if (!e14.resource) throw new Error("CubeResource does not support copying of renderTexture.");
                this.addResourceAt(e14.resource, r23);
            } else e14.target = t.TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + r23, e14.parentTextureArray = this.baseTexture, this.items[r23] = e14;
            return e14.valid && !this.valid && this.resize(e14.realWidth, e14.realHeight), this.items[r23] = e14, this;
        }, r15.prototype.upload = function(t9, e14, i19) {
            for(var n13 = this.itemDirtyIds, o16 = 0; o16 < r15.SIDES; o16++){
                var s14 = this.items[o16];
                n13[o16] < s14.dirtyId && (s14.valid && s14.resource ? (s14.resource.upload(t9, s14, i19), n13[o16] = s14.dirtyId) : n13[o16] < -1 && (t9.gl.texImage2D(s14.target, 0, i19.internalFormat, e14.realWidth, e14.realHeight, 0, e14.format, i19.type, null), n13[o16] = -1));
            }
            return !0;
        }, r15.test = function(t9) {
            return Array.isArray(t9) && t9.length === r15.SIDES;
        }, r15.SIDES = 6, r15;
    }(kr), Wr = function(e7) {
        function r15(t9, r23) {
            var i19 = this;
            if (r23 = r23 || {
            }, !(t9 instanceof HTMLImageElement)) {
                var n13 = new Image;
                Yr.crossOrigin(n13, t9, r23.crossorigin), n13.src = t9, t9 = n13;
            }
            return i19 = e7.call(this, t9) || this, !t9.complete && i19._width && i19._height && (i19._width = 0, i19._height = 0), i19.url = t9.src, i19._process = null, i19.preserveBitmap = !1, i19.createBitmap = ((void 0) !== r23.createBitmap ? r23.createBitmap : rt.CREATE_IMAGE_BITMAP) && !!self.createImageBitmap, i19.alphaMode = "number" == typeof r23.alphaMode ? r23.alphaMode : null, i19.bitmap = null, i19._load = null, !1 !== r23.autoLoad && i19.load(), i19;
        }
        return Lr(r15, e7), r15.prototype.load = function(t9) {
            var e14 = this;
            return this._load ? this._load : ((void 0) !== t9 && (this.createBitmap = t9), this._load = new Promise(function(t10, r23) {
                var i19 = e14.source;
                e14.url = i19.src;
                var n14 = function() {
                    e14.destroyed || (i19.onload = null, i19.onerror = null, e14.resize(i19.width, i19.height), e14._load = null, e14.createBitmap ? t10(e14.process()) : t10(e14));
                };
                i19.complete && i19.src ? n14() : (i19.onload = n14, i19.onerror = function(t11) {
                    r23(t11), e14.onError.emit(t11);
                });
            }), this._load);
        }, r15.prototype.process = function() {
            var e14 = this, r23 = this.source;
            if (null !== this._process) return this._process;
            if (null !== this.bitmap || !self.createImageBitmap) return Promise.resolve(this);
            var i19 = self.createImageBitmap, n14 = !r23.crossOrigin || "anonymous" === r23.crossOrigin;
            return this._process = fetch(r23.src, {
                mode: n14 ? "cors" : "no-cors"
            }).then(function(t9) {
                return t9.blob();
            }).then(function(n15) {
                return i19(n15, 0, 0, r23.width, r23.height, {
                    premultiplyAlpha: e14.alphaMode === t.ALPHA_MODES.UNPACK ? "premultiply" : "none"
                });
            }).then(function(t9) {
                return e14.destroyed ? Promise.reject() : (e14.bitmap = t9, e14.update(), e14._process = null, Promise.resolve(e14));
            }), this._process;
        }, r15.prototype.upload = function(t9, r23, i19) {
            if ("number" == typeof this.alphaMode && (r23.alphaMode = this.alphaMode), !this.createBitmap) return e7.prototype.upload.call(this, t9, r23, i19);
            if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
            if (e7.prototype.upload.call(this, t9, r23, i19, this.bitmap), !this.preserveBitmap) {
                var n14 = !0, o16 = r23._glTextures;
                for(var s15 in o16){
                    var a16 = o16[s15];
                    if (a16 !== i19 && a16.dirtyId !== r23.dirtyId) {
                        n14 = !1;
                        break;
                    }
                }
                n14 && (this.bitmap.close && this.bitmap.close(), this.bitmap = null);
            }
            return !0;
        }, r15.prototype.dispose = function() {
            this.source.onload = null, this.source.onerror = null, e7.prototype.dispose.call(this), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null;
        }, r15.test = function(t9) {
            return "string" == typeof t9 || t9 instanceof HTMLImageElement;
        }, r15;
    }(Yr), zr = function(t9) {
        function e7(e14, r15) {
            var i19 = this;
            return r15 = r15 || {
            }, (i19 = t9.call(this, document.createElement("canvas")) || this)._width = 0, i19._height = 0, i19.svg = e14, i19.scale = r15.scale || 1, i19._overrideWidth = r15.width, i19._overrideHeight = r15.height, i19._resolve = null, i19._crossorigin = r15.crossorigin, i19._load = null, !1 !== r15.autoLoad && i19.load(), i19;
        }
        return Lr(e7, t9), e7.prototype.load = function() {
            var t10 = this;
            return this._load ? this._load : (this._load = new Promise(function(e14) {
                if (t10._resolve = function() {
                    t10.resize(t10.source.width, t10.source.height), e14(t10);
                }, /^\<svg/.test(t10.svg.trim())) {
                    if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
                    t10.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t10.svg)));
                }
                t10._loadSvg();
            }), this._load);
        }, e7.prototype._loadSvg = function() {
            var t10 = this, e14 = new Image;
            Yr.crossOrigin(e14, this.svg, this._crossorigin), e14.src = this.svg, e14.onerror = function(r15) {
                t10._resolve && (e14.onerror = null, t10.onError.emit(r15));
            }, e14.onload = function() {
                if (t10._resolve) {
                    var r15 = e14.width, i19 = e14.height;
                    if (!r15 || !i19) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                    var n15 = r15 * t10.scale, o17 = i19 * t10.scale;
                    (t10._overrideWidth || t10._overrideHeight) && (n15 = t10._overrideWidth || t10._overrideHeight / i19 * r15, o17 = t10._overrideHeight || t10._overrideWidth / r15 * i19), n15 = Math.round(n15), o17 = Math.round(o17);
                    var s16 = t10.source;
                    s16.width = n15, s16.height = o17, s16._pixiId = "canvas_" + Ie(), s16.getContext("2d").drawImage(e14, 0, 0, r15, i19, 0, 0, n15, o17), t10._resolve(), t10._resolve = null;
                }
            };
        }, e7.getSize = function(t10) {
            var r23 = e7.SVG_SIZE.exec(t10), i20 = {
            };
            return r23 && (i20[r23[1]] = Math.round(parseFloat(r23[3])), i20[r23[5]] = Math.round(parseFloat(r23[7]))), i20;
        }, e7.prototype.dispose = function() {
            t9.prototype.dispose.call(this), this._resolve = null, this._crossorigin = null;
        }, e7.test = function(t10, r23) {
            return "svg" === r23 || "string" == typeof t10 && /^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(t10) || "string" == typeof t10 && e7.SVG_XML.test(t10);
        }, e7.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, e7.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, e7;
    }(Yr), qr = function(t9) {
        function e7(r23, i20) {
            var n16 = this;
            if (i20 = i20 || {
            }, !(r23 instanceof HTMLVideoElement)) {
                var o18 = document.createElement("video");
                o18.setAttribute("preload", "auto"), o18.setAttribute("webkit-playsinline", ""), o18.setAttribute("playsinline", ""), "string" == typeof r23 && (r23 = [
                    r23
                ]);
                var s17 = r23[0].src || r23[0];
                Yr.crossOrigin(o18, s17, i20.crossorigin);
                for(var a17 = 0; a17 < r23.length; ++a17){
                    var h16 = document.createElement("source"), u16 = r23[a17], l11 = u16.src, c9 = u16.mime, d9 = (l11 = l11 || r23[a17]).split("?").shift().toLowerCase(), f7 = d9.substr(d9.lastIndexOf(".") + 1);
                    c9 = c9 || e7.MIME_TYPES[f7] || "video/" + f7, h16.src = l11, h16.type = c9, o18.appendChild(h16);
                }
                r23 = o18;
            }
            return (n16 = t9.call(this, r23) || this).noSubImage = !0, n16._autoUpdate = !0, n16._isConnectedToTicker = !1, n16._updateFPS = i20.updateFPS || 0, n16._msToNextUpdate = 0, n16.autoPlay = !1 !== i20.autoPlay, n16._load = null, n16._resolve = null, n16._onCanPlay = n16._onCanPlay.bind(n16), n16._onError = n16._onError.bind(n16), !1 !== i20.autoLoad && n16.load(), n16;
        }
        return Lr(e7, t9), e7.prototype.update = function(e14) {
            if (!this.destroyed) {
                var r23 = gr.shared.elapsedMS * this.source.playbackRate;
                this._msToNextUpdate = Math.floor(this._msToNextUpdate - r23), (!this._updateFPS || this._msToNextUpdate <= 0) && (t9.prototype.update.call(this), this._msToNextUpdate = this._updateFPS ? Math.floor(1000 / this._updateFPS) : 0);
            }
        }, e7.prototype.load = function() {
            var t10 = this;
            if (this._load) return this._load;
            var e14 = this.source;
            return (e14.readyState === e14.HAVE_ENOUGH_DATA || e14.readyState === e14.HAVE_FUTURE_DATA) && e14.width && e14.height && (e14.complete = !0), e14.addEventListener("play", this._onPlayStart.bind(this)), e14.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (e14.addEventListener("canplay", this._onCanPlay), e14.addEventListener("canplaythrough", this._onCanPlay), e14.addEventListener("error", this._onError, !0)), this._load = new Promise(function(r24) {
                t10.valid ? r24(t10) : (t10._resolve = r24, e14.load());
            }), this._load;
        }, e7.prototype._onError = function(t10) {
            this.source.removeEventListener("error", this._onError, !0), this.onError.emit(t10);
        }, e7.prototype._isSourcePlaying = function() {
            var t10 = this.source;
            return t10.currentTime > 0 && !1 === t10.paused && !1 === t10.ended && t10.readyState > 2;
        }, e7.prototype._isSourceReady = function() {
            var t10 = this.source;
            return 3 === t10.readyState || 4 === t10.readyState;
        }, e7.prototype._onPlayStart = function() {
            this.valid || this._onCanPlay(), this.autoUpdate && !this._isConnectedToTicker && (gr.shared.add(this.update, this), this._isConnectedToTicker = !0);
        }, e7.prototype._onPlayStop = function() {
            this._isConnectedToTicker && (gr.shared.remove(this.update, this), this._isConnectedToTicker = !1);
        }, e7.prototype._onCanPlay = function() {
            var t10 = this.source;
            t10.removeEventListener("canplay", this._onCanPlay), t10.removeEventListener("canplaythrough", this._onCanPlay);
            var e14 = this.valid;
            this.resize(t10.videoWidth, t10.videoHeight), !e14 && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t10.play();
        }, e7.prototype.dispose = function() {
            this._isConnectedToTicker && (gr.shared.remove(this.update, this), this._isConnectedToTicker = !1);
            var e14 = this.source;
            e14 && (e14.removeEventListener("error", this._onError, !0), e14.pause(), e14.src = "", e14.load()), t9.prototype.dispose.call(this);
        }, Object.defineProperty(e7.prototype, "autoUpdate", {
            get: function() {
                return this._autoUpdate;
            },
            set: function(t10) {
                t10 !== this._autoUpdate && (this._autoUpdate = t10, !this._autoUpdate && this._isConnectedToTicker ? (gr.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (gr.shared.add(this.update, this), this._isConnectedToTicker = !0));
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e7.prototype, "updateFPS", {
            get: function() {
                return this._updateFPS;
            },
            set: function(t10) {
                t10 !== this._updateFPS && (this._updateFPS = t10);
            },
            enumerable: !1,
            configurable: !0
        }), e7.test = function(t10, r24) {
            return self.HTMLVideoElement && t10 instanceof HTMLVideoElement || e7.TYPES.indexOf(r24) > -1;
        }, e7.TYPES = [
            "mp4",
            "m4v",
            "webm",
            "ogg",
            "ogv",
            "h264",
            "avi",
            "mov"
        ], e7.MIME_TYPES = {
            ogv: "video/ogg",
            mov: "video/quicktime",
            m4v: "video/mp4"
        }, e7;
    }(Yr), Kr = function(t9) {
        function e7(e14) {
            return t9.call(this, e14) || this;
        }
        return Lr(e7, t9), e7.test = function(t10) {
            return !!self.createImageBitmap && t10 instanceof ImageBitmap;
        }, e7;
    }(Yr);
    Nr.push(Wr, Kr, jr, qr, zr, Br, Vr, Hr);
    var Zr = {
        __proto__: null,
        Resource: Ur,
        BaseImageResource: Yr,
        INSTALLED: Nr,
        autoDetectResource: wr,
        AbstractMultiResource: kr,
        ArrayResource: Hr,
        BufferResource: Br,
        CanvasResource: jr,
        CubeResource: Vr,
        ImageResource: Wr,
        SVGResource: zr,
        VideoResource: qr,
        ImageBitmapResource: Kr
    }, Qr = function(e7) {
        function r24() {
            return null !== e7 && e7.apply(this, arguments) || this;
        }
        return Lr(r24, e7), r24.prototype.upload = function(e14, r25, i20) {
            var n16 = e14.gl;
            n16.pixelStorei(n16.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r25.alphaMode === t.ALPHA_MODES.UNPACK);
            var o19 = r25.realWidth, s18 = r25.realHeight;
            return i20.width === o19 && i20.height === s18 ? n16.texSubImage2D(r25.target, 0, 0, 0, o19, s18, r25.format, i20.type, this.data) : (i20.width = o19, i20.height = s18, n16.texImage2D(r25.target, 0, i20.internalFormat, o19, s18, 0, r25.format, i20.type, this.data)), !0;
        }, r24;
    }(Br), Jr = function() {
        function e7(e14, r24) {
            this.width = Math.round(e14 || 100), this.height = Math.round(r24 || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {
            }, this.disposeRunner = new Dr("disposeFramebuffer"), this.multisample = t.MSAA_QUALITY.NONE;
        }
        return Object.defineProperty(e7.prototype, "colorTexture", {
            get: function() {
                return this.colorTextures[0];
            },
            enumerable: !1,
            configurable: !0
        }), e7.prototype.addColorTexture = function(e14, r24) {
            return (void 0) === e14 && (e14 = 0), this.colorTextures[e14] = r24 || new Xr(null, {
                scaleMode: t.SCALE_MODES.NEAREST,
                resolution: 1,
                mipmap: t.MIPMAP_MODES.OFF,
                width: this.width,
                height: this.height
            }), this.dirtyId++, this.dirtyFormat++, this;
        }, e7.prototype.addDepthTexture = function(e14) {
            return this.depthTexture = e14 || new Xr(new Qr(null, {
                width: this.width,
                height: this.height
            }), {
                scaleMode: t.SCALE_MODES.NEAREST,
                resolution: 1,
                width: this.width,
                height: this.height,
                mipmap: t.MIPMAP_MODES.OFF,
                format: t.FORMATS.DEPTH_COMPONENT,
                type: t.TYPES.UNSIGNED_SHORT
            }), this.dirtyId++, this.dirtyFormat++, this;
        }, e7.prototype.enableDepth = function() {
            return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this;
        }, e7.prototype.enableStencil = function() {
            return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this;
        }, e7.prototype.resize = function(t9, e14) {
            if (t9 = Math.round(t9), e14 = Math.round(e14), t9 !== this.width || e14 !== this.height) {
                this.width = t9, this.height = e14, this.dirtyId++, this.dirtySize++;
                for(var r24 = 0; r24 < this.colorTextures.length; r24++){
                    var i20 = this.colorTextures[r24], n16 = i20.resolution;
                    i20.setSize(t9 / n16, e14 / n16);
                }
                this.depthTexture && (n16 = this.depthTexture.resolution, this.depthTexture.setSize(t9 / n16, e14 / n16));
            }
        }, e7.prototype.dispose = function() {
            this.disposeRunner.emit(this, !1);
        }, e7.prototype.destroyDepthTexture = function() {
            this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat);
        }, e7;
    }(), $r = function(e7) {
        function r25(r26) {
            var i21 = this;
            return "number" == typeof r26 && (r26 = {
                width: arguments[0],
                height: arguments[1],
                scaleMode: arguments[2],
                resolution: arguments[3]
            }), r26.width = r26.width || 100, r26.height = r26.height || 100, r26.multisample = (void 0) !== r26.multisample ? r26.multisample : t.MSAA_QUALITY.NONE, (i21 = e7.call(this, null, r26) || this).mipmap = t.MIPMAP_MODES.OFF, i21.valid = !0, i21.clearColor = [
                0,
                0,
                0,
                0
            ], i21.framebuffer = new Jr(i21.realWidth, i21.realHeight).addColorTexture(0, i21), i21.framebuffer.multisample = r26.multisample, i21.maskStack = [], i21.filterStack = [
                {
                }
            ], i21;
        }
        return Lr(r25, e7), r25.prototype.resize = function(t9, e14) {
            this.framebuffer.resize(t9 * this.resolution, e14 * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height);
        }, r25.prototype.dispose = function() {
            this.framebuffer.dispose(), e7.prototype.dispose.call(this);
        }, r25.prototype.destroy = function() {
            e7.prototype.destroy.call(this), this.framebuffer.destroyDepthTexture(), this.framebuffer = null;
        }, r25;
    }(Xr), ti = function() {
        function t9() {
            this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8);
        }
        return t9.prototype.set = function(t10, e7, r25) {
            var i21 = e7.width, n17 = e7.height;
            if (r25) {
                var o19 = t10.width / 2 / i21, s18 = t10.height / 2 / n17, a18 = t10.x / i21 + o19, h17 = t10.y / n17 + s18;
                r25 = nr.add(r25, nr.NW), this.x0 = a18 + o19 * nr.uX(r25), this.y0 = h17 + s18 * nr.uY(r25), r25 = nr.add(r25, 2), this.x1 = a18 + o19 * nr.uX(r25), this.y1 = h17 + s18 * nr.uY(r25), r25 = nr.add(r25, 2), this.x2 = a18 + o19 * nr.uX(r25), this.y2 = h17 + s18 * nr.uY(r25), r25 = nr.add(r25, 2), this.x3 = a18 + o19 * nr.uX(r25), this.y3 = h17 + s18 * nr.uY(r25);
            } else this.x0 = t10.x / i21, this.y0 = t10.y / n17, this.x1 = (t10.x + t10.width) / i21, this.y1 = t10.y / n17, this.x2 = (t10.x + t10.width) / i21, this.y2 = (t10.y + t10.height) / n17, this.x3 = t10.x / i21, this.y3 = (t10.y + t10.height) / n17;
            this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3;
        }, t9;
    }(), ei = new ti, ri = function(t9) {
        function e7(r25, i21, n17, o20, s19, a19) {
            var h18 = t9.call(this) || this;
            if (h18.noFrame = !1, i21 || (h18.noFrame = !0, i21 = new Ye(0, 0, 1, 1)), r25 instanceof e7 && (r25 = r25.baseTexture), h18.baseTexture = r25, h18._frame = i21, h18.trim = o20, h18.valid = !1, h18._uvs = ei, h18.uvMatrix = null, h18.orig = n17 || i21, h18._rotate = Number(s19 || 0), !0 === s19) h18._rotate = 2;
            else if (h18._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
            return h18.defaultAnchor = a19 ? new qe(a19.x, a19.y) : new qe(0, 0), h18._updateID = 0, h18.textureCacheIds = [], r25.valid ? h18.noFrame ? r25.valid && h18.onBaseTextureUpdated(r25) : h18.frame = i21 : r25.once("loaded", h18.onBaseTextureUpdated, h18), h18.noFrame && r25.on("update", h18.onBaseTextureUpdated, h18), h18;
        }
        return Lr(e7, t9), e7.prototype.update = function() {
            this.baseTexture.resource && this.baseTexture.resource.update();
        }, e7.prototype.onBaseTextureUpdated = function(t10) {
            if (this.noFrame) {
                if (!this.baseTexture.valid) return;
                this._frame.width = t10.width, this._frame.height = t10.height, this.valid = !0, this.updateUvs();
            } else this.frame = this._frame;
            this.emit("update", this);
        }, e7.prototype.destroy = function(t10) {
            if (this.baseTexture) {
                if (t10) {
                    var r25 = this.baseTexture.resource;
                    r25 && r25.url && De[r25.url] && e7.removeFromCache(r25.url), this.baseTexture.destroy();
                }
                this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null;
            }
            this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, e7.removeFromCache(this), this.textureCacheIds = null;
        }, e7.prototype.clone = function() {
            var t10 = this._frame.clone(), r26 = this._frame === this.orig ? t10 : this.orig.clone(), i21 = new e7(this.baseTexture, !this.noFrame && t10, r26, this.trim && this.trim.clone(), this.rotate, this.defaultAnchor);
            return this.noFrame && (i21._frame = t10), i21;
        }, e7.prototype.updateUvs = function() {
            this._uvs === ei && (this._uvs = new ti), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++;
        }, e7.from = function(t10, r26, i21) {
            (void 0) === r26 && (r26 = {
            }), (void 0) === i21 && (i21 = rt.STRICT_TEXTURE_CACHE);
            var n17 = "string" == typeof t10, o20 = null;
            if (n17) o20 = t10;
            else {
                if (!t10._pixiId) {
                    var s19 = r26 && r26.pixiIdPrefix || "pixiid";
                    t10._pixiId = s19 + "_" + Ie();
                }
                o20 = t10._pixiId;
            }
            var a19 = De[o20];
            if (n17 && i21 && !a19) throw new Error('The cacheId "' + o20 + '" does not exist in TextureCache.');
            return a19 || (r26.resolution || (r26.resolution = Be(t10)), (a19 = new e7(new Xr(t10, r26))).baseTexture.cacheId = o20, Xr.addToCache(a19.baseTexture, o20), e7.addToCache(a19, o20)), a19;
        }, e7.fromURL = function(t10, r26) {
            var i21 = Object.assign({
                autoLoad: !1
            }, null == r26 ? void 0 : r26.resourceOptions), n17 = e7.from(t10, Object.assign({
                resourceOptions: i21
            }, r26), !1), o20 = n17.baseTexture.resource;
            return n17.baseTexture.valid ? Promise.resolve(n17) : o20.load().then(function() {
                return Promise.resolve(n17);
            });
        }, e7.fromBuffer = function(t10, r26, i21, n17) {
            return new e7(Xr.fromBuffer(t10, r26, i21, n17));
        }, e7.fromLoader = function(t10, r26, i21, n17) {
            var o20 = new Xr(t10, Object.assign({
                scaleMode: rt.SCALE_MODE,
                resolution: Be(r26)
            }, n17)), s20 = o20.resource;
            s20 instanceof Wr && (s20.url = r26);
            var a19 = new e7(o20);
            return i21 || (i21 = r26), Xr.addToCache(a19.baseTexture, i21), e7.addToCache(a19, i21), i21 !== r26 && (Xr.addToCache(a19.baseTexture, r26), e7.addToCache(a19, r26)), a19.baseTexture.valid ? Promise.resolve(a19) : new Promise(function(t11) {
                a19.baseTexture.once("loaded", function() {
                    return t11(a19);
                });
            });
        }, e7.addToCache = function(t10, e14) {
            e14 && (-1 === t10.textureCacheIds.indexOf(e14) && t10.textureCacheIds.push(e14), De[e14] && console.warn("Texture added to the cache with an id [" + e14 + "] that already had an entry"), De[e14] = t10);
        }, e7.removeFromCache = function(t10) {
            if ("string" == typeof t10) {
                var e14 = De[t10];
                if (e14) {
                    var r26 = e14.textureCacheIds.indexOf(t10);
                    return r26 > -1 && e14.textureCacheIds.splice(r26, 1), delete De[t10], e14;
                }
            } else if (t10 && t10.textureCacheIds) {
                for(var i21 = 0; i21 < t10.textureCacheIds.length; ++i21)De[t10.textureCacheIds[i21]] === t10 && delete De[t10.textureCacheIds[i21]];
                return t10.textureCacheIds.length = 0, t10;
            }
            return null;
        }, Object.defineProperty(e7.prototype, "resolution", {
            get: function() {
                return this.baseTexture.resolution;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e7.prototype, "frame", {
            get: function() {
                return this._frame;
            },
            set: function(t10) {
                this._frame = t10, this.noFrame = !1;
                var e15 = t10.x, r27 = t10.y, i22 = t10.width, n17 = t10.height, o20 = e15 + i22 > this.baseTexture.width, s20 = r27 + n17 > this.baseTexture.height;
                if (o20 || s20) {
                    var a19 = o20 && s20 ? "and" : "or", h18 = "X: " + e15 + " + " + i22 + " = " + (e15 + i22) + " > " + this.baseTexture.width, u17 = "Y: " + r27 + " + " + n17 + " = " + (r27 + n17) + " > " + this.baseTexture.height;
                    throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + h18 + " " + a19 + " " + u17);
                }
                this.valid = i22 && n17 && this.baseTexture.valid, this.trim || this.rotate || (this.orig = t10), this.valid && this.updateUvs();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e7.prototype, "rotate", {
            get: function() {
                return this._rotate;
            },
            set: function(t10) {
                this._rotate = t10, this.valid && this.updateUvs();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e7.prototype, "width", {
            get: function() {
                return this.orig.width;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e7.prototype, "height", {
            get: function() {
                return this.orig.height;
            },
            enumerable: !1,
            configurable: !0
        }), e7.prototype.castToBaseTexture = function() {
            return this.baseTexture;
        }, e7;
    }(ot);
    function ii(t9) {
        t9.destroy = function() {
        }, t9.on = function() {
        }, t9.once = function() {
        }, t9.emit = function() {
        };
    }
    ri.EMPTY = new ri(new Xr), ii(ri.EMPTY), ii(ri.EMPTY.baseTexture), ri.WHITE = (function() {
        var t9 = document.createElement("canvas");
        t9.width = 16, t9.height = 16;
        var e7 = t9.getContext("2d");
        return e7.fillStyle = "white", e7.fillRect(0, 0, 16, 16), new ri(new Xr(new jr(t9)));
    })(), ii(ri.WHITE), ii(ri.WHITE.baseTexture);
    var ni = function(t9) {
        function e7(e15, r27) {
            var i22 = t9.call(this, e15, r27) || this;
            return i22.valid = !0, i22.filterFrame = null, i22.filterPoolKey = null, i22.updateUvs(), i22;
        }
        return Lr(e7, t9), Object.defineProperty(e7.prototype, "framebuffer", {
            get: function() {
                return this.baseTexture.framebuffer;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e7.prototype, "multisample", {
            get: function() {
                return this.framebuffer.multisample;
            },
            set: function(t10) {
                this.framebuffer.multisample = t10;
            },
            enumerable: !1,
            configurable: !0
        }), e7.prototype.resize = function(t10, e15, r27) {
            (void 0) === r27 && (r27 = !0);
            var i22 = this.baseTexture.resolution, n17 = Math.round(t10 * i22) / i22, o20 = Math.round(e15 * i22) / i22;
            this.valid = n17 > 0 && o20 > 0, this._frame.width = this.orig.width = n17, this._frame.height = this.orig.height = o20, r27 && this.baseTexture.resize(n17, o20), this.updateUvs();
        }, e7.prototype.setResolution = function(t10) {
            var e15 = this.baseTexture;
            e15.resolution !== t10 && (e15.setResolution(t10), this.resize(e15.width, e15.height, !1));
        }, e7.create = function(t10) {
            for(var r27 = arguments, i22 = [], n17 = 1; n17 < arguments.length; n17++)i22[n17 - 1] = r27[n17];
            return "number" == typeof t10 && (t10 = {
                width: t10,
                height: i22[0],
                scaleMode: i22[1],
                resolution: i22[2]
            }), new e7(new $r(t10));
        }, e7;
    }(ri), oi = function() {
        function e7(t9) {
            this.texturePool = {
            }, this.textureOptions = t9 || {
            }, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0;
        }
        return e7.prototype.createTexture = function(e15, r27, i22) {
            (void 0) === i22 && (i22 = t.MSAA_QUALITY.NONE);
            var n17 = new $r(Object.assign({
                width: e15,
                height: r27,
                resolution: 1,
                multisample: i22
            }, this.textureOptions));
            return new ni(n17);
        }, e7.prototype.getOptimalTexture = function(e15, r27, i22, n17) {
            var o20;
            (void 0) === i22 && (i22 = 1), (void 0) === n17 && (n17 = t.MSAA_QUALITY.NONE), e15 = Math.ceil(e15 * i22), r27 = Math.ceil(r27 * i22), this.enableFullScreen && e15 === this._pixelsWidth && r27 === this._pixelsHeight ? o20 = n17 > 1 ? -n17 : -1 : (o20 = ((65535 & (e15 = be(e15))) << 16 | 65535 & (r27 = be(r27))) >>> 0, n17 > 1 && (o20 += 4294967296 * n17)), this.texturePool[o20] || (this.texturePool[o20] = []);
            var s20 = this.texturePool[o20].pop();
            return s20 || (s20 = this.createTexture(e15, r27, n17)), s20.filterPoolKey = o20, s20.setResolution(i22), s20;
        }, e7.prototype.getFilterTexture = function(e15, r27, i22) {
            var n17 = this.getOptimalTexture(e15.width, e15.height, r27 || e15.resolution, i22 || t.MSAA_QUALITY.NONE);
            return n17.filterFrame = e15.filterFrame, n17;
        }, e7.prototype.returnTexture = function(t9) {
            var e15 = t9.filterPoolKey;
            t9.filterFrame = null, this.texturePool[e15].push(t9);
        }, e7.prototype.returnFilterTexture = function(t9) {
            this.returnTexture(t9);
        }, e7.prototype.clear = function(t9) {
            if (t9 = !1 !== t9) for(var e15 in this.texturePool){
                var r27 = this.texturePool[e15];
                if (r27) for(var i22 = 0; i22 < r27.length; i22++)r27[i22].destroy(!0);
            }
            this.texturePool = {
            };
        }, e7.prototype.setScreenSize = function(t9) {
            if (t9.width !== this._pixelsWidth || t9.height !== this._pixelsHeight) {
                for(var e15 in this.enableFullScreen = t9.width > 0 && t9.height > 0, this.texturePool)if (Number(e15) < 0) {
                    var r28 = this.texturePool[e15];
                    if (r28) for(var i23 = 0; i23 < r28.length; i23++)r28[i23].destroy(!0);
                    this.texturePool[e15] = [];
                }
                this._pixelsWidth = t9.width, this._pixelsHeight = t9.height;
            }
        }, e7.SCREEN_KEY = -1, e7;
    }(), si = function() {
        function e7(e16, r29, i24, n17, o20, s20, a20) {
            (void 0) === r29 && (r29 = 0), (void 0) === i24 && (i24 = !1), (void 0) === n17 && (n17 = t.TYPES.FLOAT), this.buffer = e16, this.size = r29, this.normalized = i24, this.type = n17, this.stride = o20, this.start = s20, this.instance = a20;
        }
        return e7.prototype.destroy = function() {
            this.buffer = null;
        }, e7.from = function(t9, r29, i24, n17, o20) {
            return new e7(t9, r29, i24, n17, o20);
        }, e7;
    }(), ai = 0, hi = function() {
        function e7(t9, e16, r29) {
            (void 0) === e16 && (e16 = !0), (void 0) === r29 && (r29 = !1), this.data = t9 || new Float32Array(1), this._glBuffers = {
            }, this._updateID = 0, this.index = r29, this.static = e16, this.id = ai++, this.disposeRunner = new Dr("disposeBuffer");
        }
        return e7.prototype.update = function(t9) {
            t9 instanceof Array && (t9 = new Float32Array(t9)), this.data = t9 || this.data, this._updateID++;
        }, e7.prototype.dispose = function() {
            this.disposeRunner.emit(this, !1);
        }, e7.prototype.destroy = function() {
            this.dispose(), this.data = null;
        }, Object.defineProperty(e7.prototype, "index", {
            get: function() {
                return this.type === t.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER;
            },
            set: function(e16) {
                this.type = e16 ? t.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER : t.BUFFER_TYPE.ARRAY_BUFFER;
            },
            enumerable: !1,
            configurable: !0
        }), e7.from = function(t9) {
            return t9 instanceof Array && (t9 = new Float32Array(t9)), new e7(t9);
        }, e7;
    }(), ui = {
        Float32Array: Float32Array,
        Uint32Array: Uint32Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array
    }, li = {
        5126: 4,
        5123: 2,
        5121: 1
    }, ci = 0, di = {
        Float32Array: Float32Array,
        Uint32Array: Uint32Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array,
        Uint16Array: Uint16Array
    }, fi = function() {
        function e7(t9, e16) {
            (void 0) === t9 && (t9 = []), (void 0) === e16 && (e16 = {
            }), this.buffers = t9, this.indexBuffer = null, this.attributes = e16, this.glVertexArrayObjects = {
            }, this.id = ci++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new Dr("disposeGeometry"), this.refCount = 0;
        }
        return e7.prototype.addAttribute = function(t9, e16, r29, i24, n17, o20, s20, a20) {
            if ((void 0) === r29 && (r29 = 0), (void 0) === i24 && (i24 = !1), (void 0) === a20 && (a20 = !1), !e16) throw new Error("You must pass a buffer when creating an attribute");
            e16 instanceof hi || (e16 instanceof Array && (e16 = new Float32Array(e16)), e16 = new hi(e16));
            var h19 = t9.split("|");
            if (h19.length > 1) {
                for(var u18 = 0; u18 < h19.length; u18++)this.addAttribute(h19[u18], e16, r29, i24, n17);
                return this;
            }
            var l12 = this.buffers.indexOf(e16);
            return -1 === l12 && (this.buffers.push(e16), l12 = this.buffers.length - 1), this.attributes[t9] = new si(l12, r29, i24, n17, o20, s20, a20), this.instanced = this.instanced || a20, this;
        }, e7.prototype.getAttribute = function(t9) {
            return this.attributes[t9];
        }, e7.prototype.getBuffer = function(t9) {
            return this.buffers[this.getAttribute(t9).buffer];
        }, e7.prototype.addIndex = function(e16) {
            return e16 instanceof hi || (e16 instanceof Array && (e16 = new Uint16Array(e16)), e16 = new hi(e16)), e16.type = t.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER, this.indexBuffer = e16, -1 === this.buffers.indexOf(e16) && this.buffers.push(e16), this;
        }, e7.prototype.getIndex = function() {
            return this.indexBuffer;
        }, e7.prototype.interleave = function() {
            if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) return this;
            var t9, e16 = [], r29 = [], i24 = new hi;
            for(t9 in this.attributes){
                var n17 = this.attributes[t9], o20 = this.buffers[n17.buffer];
                e16.push(o20.data), r29.push(n17.size * li[n17.type] / 4), n17.buffer = 0;
            }
            for(i24.data = (function(t10, e17) {
                for(var r30 = 0, i25 = 0, n18 = {
                }, o21 = 0; o21 < t10.length; o21++)i25 += e17[o21], r30 += t10[o21].length;
                var s20 = new ArrayBuffer(4 * r30), a20 = null, h19 = 0;
                for(o21 = 0; o21 < t10.length; o21++){
                    var u19 = e17[o21], l12 = t10[o21], c10 = ge(l12);
                    n18[c10] || (n18[c10] = new ui[c10](s20)), a20 = n18[c10];
                    for(var d10 = 0; d10 < l12.length; d10++)a20[(d10 / u19 | 0) * i25 + h19 + d10 % u19] = l12[d10];
                    h19 += u19;
                }
                return new Float32Array(s20);
            })(e16, r29), t9 = 0; t9 < this.buffers.length; t9++)this.buffers[t9] !== this.indexBuffer && this.buffers[t9].destroy();
            return this.buffers = [
                i24
            ], this.indexBuffer && this.buffers.push(this.indexBuffer), this;
        }, e7.prototype.getSize = function() {
            for(var t9 in this.attributes){
                var e16 = this.attributes[t9];
                return this.buffers[e16.buffer].data.length / (e16.stride / 4 || e16.size);
            }
            return 0;
        }, e7.prototype.dispose = function() {
            this.disposeRunner.emit(this, !1);
        }, e7.prototype.destroy = function() {
            this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null;
        }, e7.prototype.clone = function() {
            for(var r29 = new e7, i24 = 0; i24 < this.buffers.length; i24++)r29.buffers[i24] = new hi(this.buffers[i24].data.slice(0));
            for(var i24 in this.attributes){
                var n18 = this.attributes[i24];
                r29.attributes[i24] = new si(n18.buffer, n18.size, n18.normalized, n18.type, n18.stride, n18.start, n18.instance);
            }
            return this.indexBuffer && (r29.indexBuffer = r29.buffers[this.buffers.indexOf(this.indexBuffer)], r29.indexBuffer.type = t.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER), r29;
        }, e7.merge = function(r29) {
            for(var i24, n19 = new e7, o21 = [], s20 = [], a20 = [], h19 = 0; h19 < r29.length; h19++){
                i24 = r29[h19];
                for(var u20 = 0; u20 < i24.buffers.length; u20++)s20[u20] = s20[u20] || 0, s20[u20] += i24.buffers[u20].data.length, a20[u20] = 0;
            }
            for(h19 = 0; h19 < i24.buffers.length; h19++)o21[h19] = new di[ge(i24.buffers[h19].data)](s20[h19]), n19.buffers[h19] = new hi(o21[h19]);
            for(h19 = 0; h19 < r29.length; h19++)for(i24 = r29[h19], u20 = 0; u20 < i24.buffers.length; u20++)o21[u20].set(i24.buffers[u20].data, a20[u20]), a20[u20] += i24.buffers[u20].data.length;
            if (n19.attributes = i24.attributes, i24.indexBuffer) {
                n19.indexBuffer = n19.buffers[i24.buffers.indexOf(i24.indexBuffer)], n19.indexBuffer.type = t.BUFFER_TYPE.ELEMENT_ARRAY_BUFFER;
                var l13 = 0, c11 = 0, d11 = 0, f8 = 0;
                for(h19 = 0; h19 < i24.buffers.length; h19++)if (i24.buffers[h19] !== i24.indexBuffer) {
                    f8 = h19;
                    break;
                }
                for(var h19 in i24.attributes){
                    var p8 = i24.attributes[h19];
                    (0 | p8.buffer) === f8 && (c11 += p8.size * li[p8.type] / 4);
                }
                for(h19 = 0; h19 < r29.length; h19++){
                    var _ = r29[h19].indexBuffer.data;
                    for(u20 = 0; u20 < _.length; u20++)n19.indexBuffer.data[u20 + d11] += l13;
                    l13 += r29[h19].buffers[f8].data.length / c11, d11 += _.length;
                }
            }
            return n19;
        }, e7;
    }(), pi = function(t9) {
        function e7() {
            var e17 = t9.call(this) || this;
            return e17.addAttribute("aVertexPosition", new Float32Array([
                0,
                0,
                1,
                0,
                1,
                1,
                0,
                1
            ])).addIndex([
                0,
                1,
                3,
                2
            ]), e17;
        }
        return Lr(e7, t9), e7;
    }(fi), _i = function(t9) {
        function e7() {
            var e17 = t9.call(this) || this;
            return e17.vertices = new Float32Array([
                -1,
                -1,
                1,
                -1,
                1,
                1,
                -1,
                1
            ]), e17.uvs = new Float32Array([
                0,
                0,
                1,
                0,
                1,
                1,
                0,
                1
            ]), e17.vertexBuffer = new hi(e17.vertices), e17.uvBuffer = new hi(e17.uvs), e17.addAttribute("aVertexPosition", e17.vertexBuffer).addAttribute("aTextureCoord", e17.uvBuffer).addIndex([
                0,
                1,
                2,
                0,
                2,
                3
            ]), e17;
        }
        return Lr(e7, t9), e7.prototype.map = function(t10, e17) {
            var r29 = 0, i24 = 0;
            return this.uvs[0] = r29, this.uvs[1] = i24, this.uvs[2] = r29 + e17.width / t10.width, this.uvs[3] = i24, this.uvs[4] = r29 + e17.width / t10.width, this.uvs[5] = i24 + e17.height / t10.height, this.uvs[6] = r29, this.uvs[7] = i24 + e17.height / t10.height, r29 = e17.x, i24 = e17.y, this.vertices[0] = r29, this.vertices[1] = i24, this.vertices[2] = r29 + e17.width, this.vertices[3] = i24, this.vertices[4] = r29 + e17.width, this.vertices[5] = i24 + e17.height, this.vertices[6] = r29, this.vertices[7] = i24 + e17.height, this.invalidate(), this;
        }, e7.prototype.invalidate = function() {
            return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
        }, e7;
    }(fi), mi = 0, vi = function() {
        function e7(e17, r29, i24) {
            this.group = !0, this.syncUniforms = {
            }, this.dirtyId = 0, this.id = mi++, this.static = !!r29, this.ubo = !!i24, e17 instanceof hi ? (this.buffer = e17, this.buffer.type = t.BUFFER_TYPE.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = e17, this.ubo && (this.buffer = new hi(new Float32Array(1)), this.buffer.type = t.BUFFER_TYPE.UNIFORM_BUFFER, this.autoManage = !0));
        }
        return e7.prototype.update = function() {
            this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
        }, e7.prototype.add = function(t9, r29, i24) {
            if (this.ubo) throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
            this.uniforms[t9] = new e7(r29, i24);
        }, e7.from = function(t9, r29, i24) {
            return new e7(t9, r29, i24);
        }, e7.uboFrom = function(t9, r29) {
            return new e7(t9, null == r29 || r29, !0);
        }, e7;
    }(), yi = function() {
        function e7() {
            this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = t.MSAA_QUALITY.NONE, this.sourceFrame = new Ye, this.destinationFrame = new Ye, this.bindingSourceFrame = new Ye, this.bindingDestinationFrame = new Ye, this.filters = [], this.transform = null;
        }
        return e7.prototype.clear = function() {
            this.target = null, this.filters = null, this.renderTexture = null;
        }, e7;
    }(), Ei = [
        new qe,
        new qe,
        new qe,
        new qe
    ], gi = new Ze, Ti = function() {
        function e7(t9) {
            this.renderer = t9, this.defaultFilterStack = [
                {
                }
            ], this.texturePool = new oi, this.texturePool.setScreenSize(t9.view), this.statePool = [], this.quad = new pi, this.quadUv = new _i, this.tempRect = new Ye, this.activeState = {
            }, this.globalUniforms = new vi({
                outputFrame: new Ye,
                inputSize: new Float32Array(4),
                inputPixel: new Float32Array(4),
                inputClamp: new Float32Array(4),
                resolution: 1,
                filterArea: new Float32Array(4),
                filterClamp: new Float32Array(4)
            }, !0), this.forceClear = !1, this.useMaxPadding = !1;
        }
        return e7.prototype.push = function(t9, e17) {
            for(var r29 = this.renderer, i24 = this.defaultFilterStack, n19 = this.statePool.pop() || new yi, o21 = this.renderer.renderTexture, s20 = e17[0].resolution, a20 = e17[0].multisample, h19 = e17[0].padding, u21 = e17[0].autoFit, l14 = e17[0].legacy, c12 = 1; c12 < e17.length; c12++){
                var d12 = e17[c12];
                s20 = Math.min(s20, d12.resolution), a20 = Math.min(a20, d12.multisample), h19 = this.useMaxPadding ? Math.max(h19, d12.padding) : h19 + d12.padding, u21 = u21 && d12.autoFit, l14 = l14 || d12.legacy;
            }
            if (1 === i24.length && (this.defaultFilterStack[0].renderTexture = o21.current), i24.push(n19), n19.resolution = s20, n19.multisample = a20, n19.legacy = l14, n19.target = t9, n19.sourceFrame.copyFrom(t9.filterArea || t9.getBounds(!0)), n19.sourceFrame.pad(h19), u21) {
                var f9 = this.tempRect.copyFrom(o21.sourceFrame);
                r29.projection.transform && this.transformAABB(gi.copyFrom(r29.projection.transform).invert(), f9), n19.sourceFrame.fit(f9);
            }
            this.roundFrame(n19.sourceFrame, o21.current ? o21.current.resolution : r29.resolution, o21.sourceFrame, o21.destinationFrame, r29.projection.transform), n19.renderTexture = this.getOptimalFilterTexture(n19.sourceFrame.width, n19.sourceFrame.height, s20, a20), n19.filters = e17, n19.destinationFrame.width = n19.renderTexture.width, n19.destinationFrame.height = n19.renderTexture.height;
            var p9 = this.tempRect;
            p9.x = 0, p9.y = 0, p9.width = n19.sourceFrame.width, p9.height = n19.sourceFrame.height, n19.renderTexture.filterFrame = n19.sourceFrame, n19.bindingSourceFrame.copyFrom(o21.sourceFrame), n19.bindingDestinationFrame.copyFrom(o21.destinationFrame), n19.transform = r29.projection.transform, r29.projection.transform = null, o21.bind(n19.renderTexture, n19.sourceFrame, p9), r29.framebuffer.clear(0, 0, 0, 0);
        }, e7.prototype.pop = function() {
            var e17 = this.defaultFilterStack, r29 = e17.pop(), i24 = r29.filters;
            this.activeState = r29;
            var n19 = this.globalUniforms.uniforms;
            n19.outputFrame = r29.sourceFrame, n19.resolution = r29.resolution;
            var o21 = n19.inputSize, s20 = n19.inputPixel, a20 = n19.inputClamp;
            if (o21[0] = r29.destinationFrame.width, o21[1] = r29.destinationFrame.height, o21[2] = 1 / o21[0], o21[3] = 1 / o21[1], s20[0] = Math.round(o21[0] * r29.resolution), s20[1] = Math.round(o21[1] * r29.resolution), s20[2] = 1 / s20[0], s20[3] = 1 / s20[1], a20[0] = 0.5 * s20[2], a20[1] = 0.5 * s20[3], a20[2] = r29.sourceFrame.width * o21[2] - 0.5 * s20[2], a20[3] = r29.sourceFrame.height * o21[3] - 0.5 * s20[3], r29.legacy) {
                var h19 = n19.filterArea;
                h19[0] = r29.destinationFrame.width, h19[1] = r29.destinationFrame.height, h19[2] = r29.sourceFrame.x, h19[3] = r29.sourceFrame.y, n19.filterClamp = n19.inputClamp;
            }
            this.globalUniforms.update();
            var u21 = e17[e17.length - 1];
            if (this.renderer.framebuffer.blit(), 1 === i24.length) i24[0].apply(this, r29.renderTexture, u21.renderTexture, t.CLEAR_MODES.BLEND, r29), this.returnFilterTexture(r29.renderTexture);
            else {
                var l14 = r29.renderTexture, c12 = this.getOptimalFilterTexture(l14.width, l14.height, r29.resolution);
                c12.filterFrame = l14.filterFrame;
                var d13 = 0;
                for(d13 = 0; d13 < i24.length - 1; ++d13){
                    1 === d13 && r29.multisample > 1 && ((c12 = this.getOptimalFilterTexture(l14.width, l14.height, r29.resolution)).filterFrame = l14.filterFrame), i24[d13].apply(this, l14, c12, t.CLEAR_MODES.CLEAR, r29);
                    var f10 = l14;
                    l14 = c12, c12 = f10;
                }
                i24[d13].apply(this, l14, u21.renderTexture, t.CLEAR_MODES.BLEND, r29), d13 > 1 && r29.multisample > 1 && this.returnFilterTexture(r29.renderTexture), this.returnFilterTexture(l14), this.returnFilterTexture(c12);
            }
            r29.clear(), this.statePool.push(r29);
        }, e7.prototype.bindAndClear = function(e17, r29) {
            (void 0) === r29 && (r29 = t.CLEAR_MODES.CLEAR);
            var i24 = this.renderer, n19 = i24.renderTexture, o21 = i24.state;
            if (e17 === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, e17 && e17.filterFrame) {
                var s20 = this.tempRect;
                s20.x = 0, s20.y = 0, s20.width = e17.filterFrame.width, s20.height = e17.filterFrame.height, n19.bind(e17, e17.filterFrame, s20);
            } else e17 !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? n19.bind(e17) : this.renderer.renderTexture.bind(e17, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
            var a20 = 1 & o21.stateId || this.forceClear;
            (r29 === t.CLEAR_MODES.CLEAR || r29 === t.CLEAR_MODES.BLIT && a20) && this.renderer.framebuffer.clear(0, 0, 0, 0);
        }, e7.prototype.applyFilter = function(e17, r29, i24, n19) {
            var o21 = this.renderer;
            o21.state.set(e17.state), this.bindAndClear(i24, n19), e17.uniforms.uSampler = r29, e17.uniforms.filterGlobals = this.globalUniforms, o21.shader.bind(e17), e17.legacy = !!e17.program.attributeData.aTextureCoord, e17.legacy ? (this.quadUv.map(r29._frame, r29.filterFrame), o21.geometry.bind(this.quadUv), o21.geometry.draw(t.DRAW_MODES.TRIANGLES)) : (o21.geometry.bind(this.quad), o21.geometry.draw(t.DRAW_MODES.TRIANGLE_STRIP));
        }, e7.prototype.calculateSpriteMatrix = function(t9, e17) {
            var r29 = this.activeState, i24 = r29.sourceFrame, n19 = r29.destinationFrame, o21 = e17._texture.orig, s21 = t9.set(n19.width, 0, 0, n19.height, i24.x, i24.y), a20 = e17.worldTransform.copyTo(Ze.TEMP_MATRIX);
            return a20.invert(), s21.prepend(a20), s21.scale(1 / o21.width, 1 / o21.height), s21.translate(e17.anchor.x, e17.anchor.y), s21;
        }, e7.prototype.destroy = function() {
            this.renderer = null, this.texturePool.clear(!1);
        }, e7.prototype.getOptimalFilterTexture = function(e17, r29, i24, n19) {
            return (void 0) === i24 && (i24 = 1), (void 0) === n19 && (n19 = t.MSAA_QUALITY.NONE), this.texturePool.getOptimalTexture(e17, r29, i24, n19);
        }, e7.prototype.getFilterTexture = function(e17, r29, i24) {
            if ("number" == typeof e17) {
                var n19 = e17;
                e17 = r29, r29 = n19;
            }
            e17 = e17 || this.activeState.renderTexture;
            var o21 = this.texturePool.getOptimalTexture(e17.width, e17.height, r29 || e17.resolution, i24 || t.MSAA_QUALITY.NONE);
            return o21.filterFrame = e17.filterFrame, o21;
        }, e7.prototype.returnFilterTexture = function(t9) {
            this.texturePool.returnTexture(t9);
        }, e7.prototype.emptyPool = function() {
            this.texturePool.clear(!0);
        }, e7.prototype.resize = function() {
            this.texturePool.setScreenSize(this.renderer.view);
        }, e7.prototype.transformAABB = function(t9, e17) {
            var r29 = Ei[0], i24 = Ei[1], n20 = Ei[2], o21 = Ei[3];
            r29.set(e17.left, e17.top), i24.set(e17.left, e17.bottom), n20.set(e17.right, e17.top), o21.set(e17.right, e17.bottom), t9.apply(r29, r29), t9.apply(i24, i24), t9.apply(n20, n20), t9.apply(o21, o21);
            var s21 = Math.min(r29.x, i24.x, n20.x, o21.x), a20 = Math.min(r29.y, i24.y, n20.y, o21.y), h20 = Math.max(r29.x, i24.x, n20.x, o21.x), u21 = Math.max(r29.y, i24.y, n20.y, o21.y);
            e17.x = s21, e17.y = a20, e17.width = h20 - s21, e17.height = u21 - a20;
        }, e7.prototype.roundFrame = function(t9, e17, r29, i24, n20) {
            if (n20) {
                var o21 = n20.a, s21 = n20.b, a20 = n20.c, h20 = n20.d;
                if ((Math.abs(s21) > 0.0001 || Math.abs(a20) > 0.0001) && (Math.abs(o21) > 0.0001 || Math.abs(h20) > 0.0001)) return;
            }
            (n20 = n20 ? gi.copyFrom(n20) : gi.identity()).translate(-r29.x, -r29.y).scale(i24.width / r29.width, i24.height / r29.height).translate(i24.x, i24.y), this.transformAABB(n20, t9), t9.ceil(e17), this.transformAABB(n20.invert(), t9);
        }, e7;
    }(), bi = function() {
        function t9(t10) {
            this.renderer = t10;
        }
        return t9.prototype.flush = function() {
        }, t9.prototype.destroy = function() {
            this.renderer = null;
        }, t9.prototype.start = function() {
        }, t9.prototype.stop = function() {
            this.flush();
        }, t9.prototype.render = function(t10) {
        }, t9;
    }(), Ri = function() {
        function t9(t10) {
            this.renderer = t10, this.emptyRenderer = new bi(t10), this.currentRenderer = this.emptyRenderer;
        }
        return t9.prototype.setObjectRenderer = function(t10) {
            this.currentRenderer !== t10 && (this.currentRenderer.stop(), this.currentRenderer = t10, this.currentRenderer.start());
        }, t9.prototype.flush = function() {
            this.setObjectRenderer(this.emptyRenderer);
        }, t9.prototype.reset = function() {
            this.setObjectRenderer(this.emptyRenderer);
        }, t9.prototype.copyBoundTextures = function(t10, e7) {
            for(var r29 = this.renderer.texture.boundTextures, i24 = e7 - 1; i24 >= 0; --i24)t10[i24] = r29[i24] || null, t10[i24] && (t10[i24]._batchLocation = i24);
        }, t9.prototype.boundArray = function(t10, e7, r29, i24) {
            for(var n20 = t10.elements, o22 = t10.ids, s22 = t10.count, a21 = 0, h21 = 0; h21 < s22; h21++){
                var u21 = n20[h21], l15 = u21._batchLocation;
                if (l15 >= 0 && l15 < i24 && e7[l15] === u21) o22[h21] = l15;
                else for(; a21 < i24;){
                    var c13 = e7[a21];
                    if (!c13 || c13._batchEnabled !== r29 || c13._batchLocation !== a21) {
                        o22[h21] = a21, u21._batchLocation = a21, e7[a21] = u21;
                        break;
                    }
                    a21++;
                }
            }
        }, t9.prototype.destroy = function() {
            this.renderer = null;
        }, t9;
    }(), xi = 0, Ai = function() {
        function e7(t9) {
            this.renderer = t9, this.webGLVersion = 1, this.extensions = {
            }, this.supports = {
                uint32Indices: !1
            }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), t9.view.addEventListener("webglcontextlost", this.handleContextLost, !1), t9.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1);
        }
        return Object.defineProperty(e7.prototype, "isLost", {
            get: function() {
                return !this.gl || this.gl.isContextLost();
            },
            enumerable: !1,
            configurable: !0
        }), e7.prototype.contextChange = function(t9) {
            this.gl = t9, this.renderer.gl = t9, this.renderer.CONTEXT_UID = xi++, t9.isContextLost() && t9.getExtension("WEBGL_lose_context") && t9.getExtension("WEBGL_lose_context").restoreContext();
        }, e7.prototype.initFromContext = function(t9) {
            this.gl = t9, this.validateContext(t9), this.renderer.gl = t9, this.renderer.CONTEXT_UID = xi++, this.renderer.runners.contextChange.emit(t9);
        }, e7.prototype.initFromOptions = function(t9) {
            var e17 = this.createContext(this.renderer.view, t9);
            this.initFromContext(e17);
        }, e7.prototype.createContext = function(e17, r29) {
            var i24;
            if (rt.PREFER_ENV >= t.ENV.WEBGL2 && (i24 = e17.getContext("webgl2", r29)), i24) this.webGLVersion = 2;
            else if (this.webGLVersion = 1, !(i24 = e17.getContext("webgl", r29) || e17.getContext("experimental-webgl", r29))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
            return this.gl = i24, this.getExtensions(), this.gl;
        }, e7.prototype.getExtensions = function() {
            var t9 = this.gl, e17 = {
                anisotropicFiltering: t9.getExtension("EXT_texture_filter_anisotropic"),
                floatTextureLinear: t9.getExtension("OES_texture_float_linear"),
                s3tc: t9.getExtension("WEBGL_compressed_texture_s3tc"),
                s3tc_sRGB: t9.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                etc: t9.getExtension("WEBGL_compressed_texture_etc"),
                etc1: t9.getExtension("WEBGL_compressed_texture_etc1"),
                pvrtc: t9.getExtension("WEBGL_compressed_texture_pvrtc") || t9.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                atc: t9.getExtension("WEBGL_compressed_texture_atc"),
                astc: t9.getExtension("WEBGL_compressed_texture_astc")
            };
            1 === this.webGLVersion ? Object.assign(this.extensions, e17, {
                drawBuffers: t9.getExtension("WEBGL_draw_buffers"),
                depthTexture: t9.getExtension("WEBGL_depth_texture"),
                loseContext: t9.getExtension("WEBGL_lose_context"),
                vertexArrayObject: t9.getExtension("OES_vertex_array_object") || t9.getExtension("MOZ_OES_vertex_array_object") || t9.getExtension("WEBKIT_OES_vertex_array_object"),
                uint32ElementIndex: t9.getExtension("OES_element_index_uint"),
                floatTexture: t9.getExtension("OES_texture_float"),
                floatTextureLinear: t9.getExtension("OES_texture_float_linear"),
                textureHalfFloat: t9.getExtension("OES_texture_half_float"),
                textureHalfFloatLinear: t9.getExtension("OES_texture_half_float_linear")
            }) : 2 === this.webGLVersion && Object.assign(this.extensions, e17, {
                colorBufferFloat: t9.getExtension("EXT_color_buffer_float")
            });
        }, e7.prototype.handleContextLost = function(t9) {
            t9.preventDefault();
        }, e7.prototype.handleContextRestored = function() {
            this.renderer.runners.contextChange.emit(this.gl);
        }, e7.prototype.destroy = function() {
            var t9 = this.renderer.view;
            this.renderer = null, t9.removeEventListener("webglcontextlost", this.handleContextLost), t9.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext();
        }, e7.prototype.postrender = function() {
            this.renderer.renderingToScreen && this.gl.flush();
        }, e7.prototype.validateContext = function(t9) {
            var e17 = t9.getContextAttributes(), r29 = "WebGL2RenderingContext" in self && t9 instanceof self.WebGL2RenderingContext;
            r29 && (this.webGLVersion = 2), e17.stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
            var i24 = r29 || !!t9.getExtension("OES_element_index_uint");
            this.supports.uint32Indices = i24, i24 || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly");
        }, e7;
    }(), Si = function(e7) {
        this.framebuffer = e7, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = t.MSAA_QUALITY.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0;
    }, Oi = new Ye, Ii = function() {
        function e7(t9) {
            this.renderer = t9, this.managedFramebuffers = [], this.unknownFramebuffer = new Jr(10, 10), this.msaaSamples = null;
        }
        return e7.prototype.contextChange = function() {
            var e17 = this.gl = this.renderer.gl;
            if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new Ye, this.hasMRT = !0, this.writeDepthTexture = !0, this.disposeAll(!0), 1 === this.renderer.context.webGLVersion) {
                var r29 = this.renderer.context.extensions.drawBuffers, i24 = this.renderer.context.extensions.depthTexture;
                rt.PREFER_ENV === t.ENV.WEBGL_LEGACY && (r29 = null, i24 = null), r29 ? e17.drawBuffers = function(t9) {
                    return r29.drawBuffersWEBGL(t9);
                } : (this.hasMRT = !1, e17.drawBuffers = function() {
                }), i24 || (this.writeDepthTexture = !1);
            } else this.msaaSamples = e17.getInternalformatParameter(e17.RENDERBUFFER, e17.RGBA8, e17.SAMPLES);
        }, e7.prototype.bind = function(t9, e17, r30) {
            (void 0) === r30 && (r30 = 0);
            var i25 = this.gl;
            if (t9) {
                var n20 = t9.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t9);
                this.current !== t9 && (this.current = t9, i25.bindFramebuffer(i25.FRAMEBUFFER, n20.framebuffer)), n20.mipLevel !== r30 && (t9.dirtyId++, t9.dirtyFormat++, n20.mipLevel = r30), n20.dirtyId !== t9.dirtyId && (n20.dirtyId = t9.dirtyId, n20.dirtyFormat !== t9.dirtyFormat ? (n20.dirtyFormat = t9.dirtyFormat, n20.dirtySize = t9.dirtySize, this.updateFramebuffer(t9, r30)) : n20.dirtySize !== t9.dirtySize && (n20.dirtySize = t9.dirtySize, this.resizeFramebuffer(t9)));
                for(var o22 = 0; o22 < t9.colorTextures.length; o22++){
                    var s22 = t9.colorTextures[o22];
                    this.renderer.texture.unbind(s22.parentTextureArray || s22);
                }
                if (t9.depthTexture && this.renderer.texture.unbind(t9.depthTexture), e17) {
                    var a21 = e17.width >> r30, h21 = e17.height >> r30, u22 = a21 / e17.width;
                    this.setViewport(e17.x * u22, e17.y * u22, a21, h21);
                } else a21 = t9.width >> r30, h21 = t9.height >> r30, this.setViewport(0, 0, a21, h21);
            } else this.current && (this.current = null, i25.bindFramebuffer(i25.FRAMEBUFFER, null)), e17 ? this.setViewport(e17.x, e17.y, e17.width, e17.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
        }, e7.prototype.setViewport = function(t9, e17, r30, i25) {
            var n21 = this.viewport;
            t9 = Math.round(t9), e17 = Math.round(e17), r30 = Math.round(r30), i25 = Math.round(i25), n21.width === r30 && n21.height === i25 && n21.x === t9 && n21.y === e17 || (n21.x = t9, n21.y = e17, n21.width = r30, n21.height = i25, this.gl.viewport(t9, e17, r30, i25));
        }, Object.defineProperty(e7.prototype, "size", {
            get: function() {
                return this.current ? {
                    x: 0,
                    y: 0,
                    width: this.current.width,
                    height: this.current.height
                } : {
                    x: 0,
                    y: 0,
                    width: this.renderer.width,
                    height: this.renderer.height
                };
            },
            enumerable: !1,
            configurable: !0
        }), e7.prototype.clear = function(e17, r30, i25, n21, o23) {
            (void 0) === o23 && (o23 = t.BUFFER_BITS.COLOR | t.BUFFER_BITS.DEPTH);
            var s23 = this.gl;
            s23.clearColor(e17, r30, i25, n21), s23.clear(o23);
        }, e7.prototype.initFramebuffer = function(t9) {
            var e17 = this.gl, r30 = new Si(e17.createFramebuffer());
            return r30.multisample = this.detectSamples(t9.multisample), t9.glFramebuffers[this.CONTEXT_UID] = r30, this.managedFramebuffers.push(t9), t9.disposeRunner.add(this), r30;
        }, e7.prototype.resizeFramebuffer = function(t9) {
            var e17 = this.gl, r30 = t9.glFramebuffers[this.CONTEXT_UID];
            r30.msaaBuffer && (e17.bindRenderbuffer(e17.RENDERBUFFER, r30.msaaBuffer), e17.renderbufferStorageMultisample(e17.RENDERBUFFER, r30.multisample, e17.RGBA8, t9.width, t9.height)), r30.stencil && (e17.bindRenderbuffer(e17.RENDERBUFFER, r30.stencil), r30.msaaBuffer ? e17.renderbufferStorageMultisample(e17.RENDERBUFFER, r30.multisample, e17.DEPTH24_STENCIL8, t9.width, t9.height) : e17.renderbufferStorage(e17.RENDERBUFFER, e17.DEPTH_STENCIL, t9.width, t9.height));
            var i25 = t9.colorTextures, n21 = i25.length;
            e17.drawBuffers || (n21 = Math.min(n21, 1));
            for(var o23 = 0; o23 < n21; o23++){
                var s23 = i25[o23], a22 = s23.parentTextureArray || s23;
                this.renderer.texture.bind(a22, 0);
            }
            t9.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t9.depthTexture, 0);
        }, e7.prototype.updateFramebuffer = function(t9, e17) {
            var r30 = this.gl, i25 = t9.glFramebuffers[this.CONTEXT_UID], n21 = t9.colorTextures, o23 = n21.length;
            r30.drawBuffers || (o23 = Math.min(o23, 1)), i25.multisample > 1 && this.canMultisampleFramebuffer(t9) ? (i25.msaaBuffer = i25.msaaBuffer || r30.createRenderbuffer(), r30.bindRenderbuffer(r30.RENDERBUFFER, i25.msaaBuffer), r30.renderbufferStorageMultisample(r30.RENDERBUFFER, i25.multisample, r30.RGBA8, t9.width, t9.height), r30.framebufferRenderbuffer(r30.FRAMEBUFFER, r30.COLOR_ATTACHMENT0, r30.RENDERBUFFER, i25.msaaBuffer)) : i25.msaaBuffer && (r30.deleteRenderbuffer(i25.msaaBuffer), i25.msaaBuffer = null, i25.blitFramebuffer && (i25.blitFramebuffer.dispose(), i25.blitFramebuffer = null));
            for(var s24 = [], a23 = 0; a23 < o23; a23++){
                var h22 = n21[a23], u23 = h22.parentTextureArray || h22;
                this.renderer.texture.bind(u23, 0), 0 === a23 && i25.msaaBuffer || (r30.framebufferTexture2D(r30.FRAMEBUFFER, r30.COLOR_ATTACHMENT0 + a23, h22.target, u23._glTextures[this.CONTEXT_UID].texture, e17), s24.push(r30.COLOR_ATTACHMENT0 + a23));
            }
            if (s24.length > 1 && r30.drawBuffers(s24), t9.depthTexture && this.writeDepthTexture) {
                var l16 = t9.depthTexture;
                this.renderer.texture.bind(l16, 0), r30.framebufferTexture2D(r30.FRAMEBUFFER, r30.DEPTH_ATTACHMENT, r30.TEXTURE_2D, l16._glTextures[this.CONTEXT_UID].texture, e17);
            }
            !t9.stencil && !t9.depth || t9.depthTexture && this.writeDepthTexture ? i25.stencil && (r30.deleteRenderbuffer(i25.stencil), i25.stencil = null) : (i25.stencil = i25.stencil || r30.createRenderbuffer(), r30.bindRenderbuffer(r30.RENDERBUFFER, i25.stencil), i25.msaaBuffer ? r30.renderbufferStorageMultisample(r30.RENDERBUFFER, i25.multisample, r30.DEPTH24_STENCIL8, t9.width, t9.height) : r30.renderbufferStorage(r30.RENDERBUFFER, r30.DEPTH_STENCIL, t9.width, t9.height), r30.framebufferRenderbuffer(r30.FRAMEBUFFER, r30.DEPTH_STENCIL_ATTACHMENT, r30.RENDERBUFFER, i25.stencil));
        }, e7.prototype.canMultisampleFramebuffer = function(t9) {
            return 1 !== this.renderer.context.webGLVersion && t9.colorTextures.length <= 1 && !t9.depthTexture;
        }, e7.prototype.detectSamples = function(e17) {
            var r30 = this.msaaSamples, i25 = t.MSAA_QUALITY.NONE;
            if (e17 <= 1 || null === r30) return i25;
            for(var n21 = 0; n21 < r30.length; n21++)if (r30[n21] <= e17) {
                i25 = r30[n21];
                break;
            }
            return 1 === i25 && (i25 = t.MSAA_QUALITY.NONE), i25;
        }, e7.prototype.blit = function(t9, e17, r30) {
            var i25 = this.current, n21 = this.renderer, o23 = this.gl, s24 = this.CONTEXT_UID;
            if (2 === n21.context.webGLVersion && i25) {
                var a23 = i25.glFramebuffers[s24];
                if (a23) {
                    if (!t9) {
                        if (!a23.msaaBuffer) return;
                        var h23 = i25.colorTextures[0];
                        if (!h23) return;
                        a23.blitFramebuffer || (a23.blitFramebuffer = new Jr(i25.width, i25.height), a23.blitFramebuffer.addColorTexture(0, h23)), (t9 = a23.blitFramebuffer).colorTextures[0] !== h23 && (t9.colorTextures[0] = h23, t9.dirtyId++, t9.dirtyFormat++), t9.width === i25.width && t9.height === i25.height || (t9.width = i25.width, t9.height = i25.height, t9.dirtyId++, t9.dirtySize++);
                    }
                    e17 || ((e17 = Oi).width = i25.width, e17.height = i25.height), r30 || (r30 = e17);
                    var u24 = e17.width === r30.width && e17.height === r30.height;
                    this.bind(t9), o23.bindFramebuffer(o23.READ_FRAMEBUFFER, a23.framebuffer), o23.blitFramebuffer(e17.x, e17.y, e17.width, e17.height, r30.x, r30.y, r30.width, r30.height, o23.COLOR_BUFFER_BIT, u24 ? o23.NEAREST : o23.LINEAR);
                }
            }
        }, e7.prototype.disposeFramebuffer = function(t9, e17) {
            var r30 = t9.glFramebuffers[this.CONTEXT_UID], i25 = this.gl;
            if (r30) {
                delete t9.glFramebuffers[this.CONTEXT_UID];
                var n21 = this.managedFramebuffers.indexOf(t9);
                n21 >= 0 && this.managedFramebuffers.splice(n21, 1), t9.disposeRunner.remove(this), e17 || (i25.deleteFramebuffer(r30.framebuffer), r30.msaaBuffer && i25.deleteRenderbuffer(r30.msaaBuffer), r30.stencil && i25.deleteRenderbuffer(r30.stencil)), r30.blitFramebuffer && r30.blitFramebuffer.dispose();
            }
        }, e7.prototype.disposeAll = function(t9) {
            var e17 = this.managedFramebuffers;
            this.managedFramebuffers = [];
            for(var r30 = 0; r30 < e17.length; r30++)this.disposeFramebuffer(e17[r30], t9);
        }, e7.prototype.forceStencil = function() {
            var t9 = this.current;
            if (t9) {
                var e17 = t9.glFramebuffers[this.CONTEXT_UID];
                if (e17 && !e17.stencil) {
                    t9.stencil = !0;
                    var r30 = t9.width, i25 = t9.height, n22 = this.gl, o23 = n22.createRenderbuffer();
                    n22.bindRenderbuffer(n22.RENDERBUFFER, o23), e17.msaaBuffer ? n22.renderbufferStorageMultisample(n22.RENDERBUFFER, e17.multisample, n22.DEPTH24_STENCIL8, r30, i25) : n22.renderbufferStorage(n22.RENDERBUFFER, n22.DEPTH_STENCIL, r30, i25), e17.stencil = o23, n22.framebufferRenderbuffer(n22.FRAMEBUFFER, n22.DEPTH_STENCIL_ATTACHMENT, n22.RENDERBUFFER, o23);
                }
            }
        }, e7.prototype.reset = function() {
            this.current = this.unknownFramebuffer, this.viewport = new Ye;
        }, e7.prototype.destroy = function() {
            this.renderer = null;
        }, e7;
    }(), Pi = {
        5126: 4,
        5123: 2,
        5121: 1
    }, Mi = function() {
        function e7(t9) {
            this.renderer = t9, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {
            };
        }
        return e7.prototype.contextChange = function() {
            this.disposeAll(!0);
            var e18 = this.gl = this.renderer.gl, r31 = this.renderer.context;
            if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, 2 !== r31.webGLVersion) {
                var i26 = this.renderer.context.extensions.vertexArrayObject;
                rt.PREFER_ENV === t.ENV.WEBGL_LEGACY && (i26 = null), i26 ? (e18.createVertexArray = function() {
                    return i26.createVertexArrayOES();
                }, e18.bindVertexArray = function(t9) {
                    return i26.bindVertexArrayOES(t9);
                }, e18.deleteVertexArray = function(t9) {
                    return i26.deleteVertexArrayOES(t9);
                }) : (this.hasVao = !1, e18.createVertexArray = function() {
                    return null;
                }, e18.bindVertexArray = function() {
                    return null;
                }, e18.deleteVertexArray = function() {
                    return null;
                });
            }
            if (2 !== r31.webGLVersion) {
                var n23 = e18.getExtension("ANGLE_instanced_arrays");
                n23 ? (e18.vertexAttribDivisor = function(t9, e19) {
                    return n23.vertexAttribDivisorANGLE(t9, e19);
                }, e18.drawElementsInstanced = function(t9, e19, r32, i27, o24) {
                    return n23.drawElementsInstancedANGLE(t9, e19, r32, i27, o24);
                }, e18.drawArraysInstanced = function(t9, e19, r32, i27) {
                    return n23.drawArraysInstancedANGLE(t9, e19, r32, i27);
                }) : this.hasInstance = !1;
            }
            this.canUseUInt32ElementIndex = 2 === r31.webGLVersion || !!r31.extensions.uint32ElementIndex;
        }, e7.prototype.bind = function(t9, e18) {
            e18 = e18 || this.renderer.shader.shader;
            var r31 = this.gl, i27 = t9.glVertexArrayObjects[this.CONTEXT_UID], n24 = !1;
            i27 || (this.managedGeometries[t9.id] = t9, t9.disposeRunner.add(this), t9.glVertexArrayObjects[this.CONTEXT_UID] = i27 = {
            }, n24 = !0);
            var o24 = i27[e18.program.id] || this.initGeometryVao(t9, e18, n24);
            this._activeGeometry = t9, this._activeVao !== o24 && (this._activeVao = o24, this.hasVao ? r31.bindVertexArray(o24) : this.activateVao(t9, e18.program)), this.updateBuffers();
        }, e7.prototype.reset = function() {
            this.unbind();
        }, e7.prototype.updateBuffers = function() {
            for(var t9 = this._activeGeometry, e18 = this.renderer.buffer, r31 = 0; r31 < t9.buffers.length; r31++){
                var i27 = t9.buffers[r31];
                e18.update(i27);
            }
        }, e7.prototype.checkCompatibility = function(t9, e18) {
            var r31 = t9.attributes, i28 = e18.attributeData;
            for(var n24 in i28)if (!r31[n24]) throw new Error('shader and geometry incompatible, geometry missing the "' + n24 + '" attribute');
        }, e7.prototype.getSignature = function(t9, e18) {
            var r31 = t9.attributes, i28 = e18.attributeData, n24 = [
                "g",
                t9.id
            ];
            for(var o24 in r31)i28[o24] && n24.push(o24);
            return n24.join("-");
        }, e7.prototype.initGeometryVao = function(t9, e18, r31) {
            (void 0) === r31 && (r31 = !0);
            var i28 = this.gl, n24 = this.CONTEXT_UID, o24 = this.renderer.buffer, s24 = e18.program;
            s24.glPrograms[n24] || this.renderer.shader.generateProgram(e18), this.checkCompatibility(t9, s24);
            var a24 = this.getSignature(t9, s24), h24 = t9.glVertexArrayObjects[this.CONTEXT_UID], u25 = h24[a24];
            if (u25) return h24[s24.id] = u25, u25;
            var l17 = t9.buffers, c14 = t9.attributes, d14 = {
            }, f11 = {
            };
            for(var p9 in l17)d14[p9] = 0, f11[p9] = 0;
            for(var p9 in c14)!c14[p9].size && s24.attributeData[p9] ? c14[p9].size = s24.attributeData[p9].size : c14[p9].size || console.warn("PIXI Geometry attribute '" + p9 + "' size cannot be determined (likely the bound shader does not have the attribute)"), d14[c14[p9].buffer] += c14[p9].size * Pi[c14[p9].type];
            for(var p9 in c14){
                var _ = c14[p9], m3 = _.size;
                (void 0) === _.stride && (d14[_.buffer] === m3 * Pi[_.type] ? _.stride = 0 : _.stride = d14[_.buffer]), (void 0) === _.start && (_.start = f11[_.buffer], f11[_.buffer] += m3 * Pi[_.type]);
            }
            u25 = i28.createVertexArray(), i28.bindVertexArray(u25);
            for(var v3 = 0; v3 < l17.length; v3++){
                var y3 = l17[v3];
                o24.bind(y3), r31 && y3._glBuffers[n24].refCount++;
            }
            return this.activateVao(t9, s24), this._activeVao = u25, h24[s24.id] = u25, h24[a24] = u25, u25;
        }, e7.prototype.disposeGeometry = function(t9, e18) {
            var r31;
            if (this.managedGeometries[t9.id]) {
                delete this.managedGeometries[t9.id];
                var i28 = t9.glVertexArrayObjects[this.CONTEXT_UID], n24 = this.gl, o24 = t9.buffers, s24 = null === (r31 = this.renderer) || (void 0) === r31 ? void 0 : r31.buffer;
                if (t9.disposeRunner.remove(this), i28) {
                    if (s24) for(var a24 = 0; a24 < o24.length; a24++){
                        var h24 = o24[a24]._glBuffers[this.CONTEXT_UID];
                        h24 && (h24.refCount--, 0 !== h24.refCount || e18 || s24.dispose(o24[a24], e18));
                    }
                    if (!e18) for(var u25 in i28)if ("g" === u25[0]) {
                        var l17 = i28[u25];
                        this._activeVao === l17 && this.unbind(), n24.deleteVertexArray(l17);
                    }
                    delete t9.glVertexArrayObjects[this.CONTEXT_UID];
                }
            }
        }, e7.prototype.disposeAll = function(t9) {
            for(var e18 = Object.keys(this.managedGeometries), r31 = 0; r31 < e18.length; r31++)this.disposeGeometry(this.managedGeometries[e18[r31]], t9);
        }, e7.prototype.activateVao = function(t9, e18) {
            var r31 = this.gl, i29 = this.CONTEXT_UID, n25 = this.renderer.buffer, o25 = t9.buffers, s25 = t9.attributes;
            t9.indexBuffer && n25.bind(t9.indexBuffer);
            var a25 = null;
            for(var h25 in s25){
                var u26 = s25[h25], l18 = o25[u26.buffer], c14 = l18._glBuffers[i29];
                if (e18.attributeData[h25]) {
                    a25 !== c14 && (n25.bind(l18), a25 = c14);
                    var d14 = e18.attributeData[h25].location;
                    if (r31.enableVertexAttribArray(d14), r31.vertexAttribPointer(d14, u26.size, u26.type || r31.FLOAT, u26.normalized, u26.stride, u26.start), u26.instance) {
                        if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
                        r31.vertexAttribDivisor(d14, 1);
                    }
                }
            }
        }, e7.prototype.draw = function(t9, e18, r31, i29) {
            var n25 = this.gl, o25 = this._activeGeometry;
            if (o25.indexBuffer) {
                var s25 = o25.indexBuffer.data.BYTES_PER_ELEMENT, a25 = 2 === s25 ? n25.UNSIGNED_SHORT : n25.UNSIGNED_INT;
                2 === s25 || 4 === s25 && this.canUseUInt32ElementIndex ? o25.instanced ? n25.drawElementsInstanced(t9, e18 || o25.indexBuffer.data.length, a25, (r31 || 0) * s25, i29 || 1) : n25.drawElements(t9, e18 || o25.indexBuffer.data.length, a25, (r31 || 0) * s25) : console.warn("unsupported index buffer type: uint32");
            } else o25.instanced ? n25.drawArraysInstanced(t9, r31, e18 || o25.getSize(), i29 || 1) : n25.drawArrays(t9, r31, e18 || o25.getSize());
            return this;
        }, e7.prototype.unbind = function() {
            this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null;
        }, e7.prototype.destroy = function() {
            this.renderer = null;
        }, e7;
    }(), Di = function() {
        function e7(e18) {
            (void 0) === e18 && (e18 = null), this.type = t.MASK_TYPES.NONE, this.autoDetect = !0, this.maskObject = e18 || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = rt.FILTER_MULTISAMPLE, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._target = null;
        }
        return e7.prototype.reset = function() {
            this.pooled && (this.maskObject = null, this.type = t.MASK_TYPES.NONE, this.autoDetect = !0), this._target = null;
        }, e7.prototype.copyCountersOrReset = function(t9) {
            t9 ? (this._stencilCounter = t9._stencilCounter, this._scissorCounter = t9._scissorCounter, this._scissorRect = t9._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null);
        }, e7;
    }();
    function Ni(t9, e7, r31) {
        var i29 = t9.createShader(e7);
        return t9.shaderSource(i29, r31), t9.compileShader(i29), i29;
    }
    function wi(t9, e7) {
        var r31 = t9.getShaderSource(e7).split("\n").map(function(t10, e18) {
            return e18 + ": " + t10;
        }), i29 = t9.getShaderInfoLog(e7), n25 = i29.split("\n"), o25 = {
        }, s26 = n25.map(function(t10) {
            return parseFloat(t10.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"));
        }).filter(function(t10) {
            return !(!t10 || o25[t10] || (o25[t10] = !0, 0));
        }), a26 = [
            ""
        ];
        s26.forEach(function(t10) {
            r31[t10 - 1] = "%c" + r31[t10 - 1] + "%c", a26.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
        });
        var h25 = r31.join("\n");
        a26[0] = h25, console.error(i29), console.groupCollapsed("click to view full shader code"), console.warn.apply(console, a26), console.groupEnd();
    }
    function Ci(t9) {
        for(var e7 = new Array(t9), r31 = 0; r31 < e7.length; r31++)e7[r31] = !1;
        return e7;
    }
    function Li(t9, e7) {
        switch(t9){
            case "float":
                return 0;
            case "vec2":
                return new Float32Array(2 * e7);
            case "vec3":
                return new Float32Array(3 * e7);
            case "vec4":
                return new Float32Array(4 * e7);
            case "int":
            case "uint":
            case "sampler2D":
            case "sampler2DArray":
                return 0;
            case "ivec2":
                return new Int32Array(2 * e7);
            case "ivec3":
                return new Int32Array(3 * e7);
            case "ivec4":
                return new Int32Array(4 * e7);
            case "uvec2":
                return new Uint32Array(2 * e7);
            case "uvec3":
                return new Uint32Array(3 * e7);
            case "uvec4":
                return new Uint32Array(4 * e7);
            case "bool":
                return !1;
            case "bvec2":
                return Ci(2 * e7);
            case "bvec3":
                return Ci(3 * e7);
            case "bvec4":
                return Ci(4 * e7);
            case "mat2":
                return new Float32Array([
                    1,
                    0,
                    0,
                    1
                ]);
            case "mat3":
                return new Float32Array([
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1
                ]);
            case "mat4":
                return new Float32Array([
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1
                ]);
        }
        return null;
    }
    var Fi, Ui = {
    }, Bi = Ui;
    function Gi() {
        if (Bi === Ui || Bi && Bi.isContextLost()) {
            var e7 = document.createElement("canvas"), r31 = void 0;
            rt.PREFER_ENV >= t.ENV.WEBGL2 && (r31 = e7.getContext("webgl2", {
            })), r31 || ((r31 = e7.getContext("webgl", {
            }) || e7.getContext("experimental-webgl", {
            })) ? r31.getExtension("WEBGL_draw_buffers") : r31 = null), Bi = r31;
        }
        return Bi;
    }
    function Xi(e18, r32, i29) {
        if ("precision" !== e18.substring(0, 9)) {
            var n25 = r32;
            return r32 === t.PRECISION.HIGH && i29 !== t.PRECISION.HIGH && (n25 = t.PRECISION.MEDIUM), "precision " + n25 + " float;\n" + e18;
        }
        return i29 !== t.PRECISION.HIGH && "precision highp" === e18.substring(0, 15) ? e18.replace("precision highp", "precision mediump") : e18;
    }
    var ki = {
        float: 1,
        vec2: 2,
        vec3: 3,
        vec4: 4,
        int: 1,
        ivec2: 2,
        ivec3: 3,
        ivec4: 4,
        uint: 1,
        uvec2: 2,
        uvec3: 3,
        uvec4: 4,
        bool: 1,
        bvec2: 2,
        bvec3: 3,
        bvec4: 4,
        mat2: 4,
        mat3: 9,
        mat4: 16,
        sampler2D: 1
    };
    function Hi(t9) {
        return ki[t9];
    }
    var Yi = null, ji = {
        FLOAT: "float",
        FLOAT_VEC2: "vec2",
        FLOAT_VEC3: "vec3",
        FLOAT_VEC4: "vec4",
        INT: "int",
        INT_VEC2: "ivec2",
        INT_VEC3: "ivec3",
        INT_VEC4: "ivec4",
        UNSIGNED_INT: "uint",
        UNSIGNED_INT_VEC2: "uvec2",
        UNSIGNED_INT_VEC3: "uvec3",
        UNSIGNED_INT_VEC4: "uvec4",
        BOOL: "bool",
        BOOL_VEC2: "bvec2",
        BOOL_VEC3: "bvec3",
        BOOL_VEC4: "bvec4",
        FLOAT_MAT2: "mat2",
        FLOAT_MAT3: "mat3",
        FLOAT_MAT4: "mat4",
        SAMPLER_2D: "sampler2D",
        INT_SAMPLER_2D: "sampler2D",
        UNSIGNED_INT_SAMPLER_2D: "sampler2D",
        SAMPLER_CUBE: "samplerCube",
        INT_SAMPLER_CUBE: "samplerCube",
        UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
        SAMPLER_2D_ARRAY: "sampler2DArray",
        INT_SAMPLER_2D_ARRAY: "sampler2DArray",
        UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
    };
    function Vi(t9, e18) {
        if (!Yi) {
            var r32 = Object.keys(ji);
            Yi = {
            };
            for(var i29 = 0; i29 < r32.length; ++i29){
                var n26 = r32[i29];
                Yi[t9[n26]] = ji[n26];
            }
        }
        return Yi[e18];
    }
    var Wi, zi = [
        {
            test: function(t9) {
                return "float" === t9.type && 1 === t9.size;
            },
            code: function(t9) {
                return '\n            if(uv["' + t9 + '"] !== ud["' + t9 + '"].value)\n            {\n                ud["' + t9 + '"].value = uv["' + t9 + '"]\n                gl.uniform1f(ud["' + t9 + '"].location, uv["' + t9 + '"])\n            }\n            ';
            }
        },
        {
            test: function(t9) {
                return ("sampler2D" === t9.type || "samplerCube" === t9.type || "sampler2DArray" === t9.type) && 1 === t9.size && !t9.isArray;
            },
            code: function(t9) {
                return 't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' + t9 + '"], t);\n\n            if(ud["' + t9 + '"].value !== t)\n            {\n                ud["' + t9 + '"].value = t;\n                gl.uniform1i(ud["' + t9 + '"].location, t);\n; // eslint-disable-line max-len\n            }';
            }
        },
        {
            test: function(t9, e18) {
                return "mat3" === t9.type && 1 === t9.size && (void 0) !== e18.a;
            },
            code: function(t9) {
                return '\n            gl.uniformMatrix3fv(ud["' + t9 + '"].location, false, uv["' + t9 + '"].toArray(true));\n            ';
            },
            codeUbo: function(t9) {
                return "\n                var " + t9 + "_matrix = uv." + t9 + ".toArray(true);\n\n                data[offset] = " + t9 + "_matrix[0];\n                data[offset+1] = " + t9 + "_matrix[1];\n                data[offset+2] = " + t9 + "_matrix[2];\n        \n                data[offset + 4] = " + t9 + "_matrix[3];\n                data[offset + 5] = " + t9 + "_matrix[4];\n                data[offset + 6] = " + t9 + "_matrix[5];\n        \n                data[offset + 8] = " + t9 + "_matrix[6];\n                data[offset + 9] = " + t9 + "_matrix[7];\n                data[offset + 10] = " + t9 + "_matrix[8];\n            ";
            }
        },
        {
            test: function(t9, e18) {
                return "vec2" === t9.type && 1 === t9.size && (void 0) !== e18.x;
            },
            code: function(t9) {
                return '\n                cv = ud["' + t9 + '"].value;\n                v = uv["' + t9 + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' + t9 + '"].location, v.x, v.y);\n                }';
            },
            codeUbo: function(t9) {
                return "\n                v = uv." + t9 + ";\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            ";
            }
        },
        {
            test: function(t9) {
                return "vec2" === t9.type && 1 === t9.size;
            },
            code: function(t9) {
                return '\n                cv = ud["' + t9 + '"].value;\n                v = uv["' + t9 + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' + t9 + '"].location, v[0], v[1]);\n                }\n            ';
            }
        },
        {
            test: function(t9, e18) {
                return "vec4" === t9.type && 1 === t9.size && (void 0) !== e18.width;
            },
            code: function(t9) {
                return '\n                cv = ud["' + t9 + '"].value;\n                v = uv["' + t9 + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' + t9 + '"].location, v.x, v.y, v.width, v.height)\n                }';
            },
            codeUbo: function(t9) {
                return "\n                    v = uv." + t9 + ";\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                ";
            }
        },
        {
            test: function(t9) {
                return "vec4" === t9.type && 1 === t9.size;
            },
            code: function(t9) {
                return '\n                cv = ud["' + t9 + '"].value;\n                v = uv["' + t9 + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' + t9 + '"].location, v[0], v[1], v[2], v[3])\n                }';
            }
        }
    ], qi = {
        float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
        vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
        vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
        vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
        int: "gl.uniform1i(location, v)",
        ivec2: "gl.uniform2i(location, v[0], v[1])",
        ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
        ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
        uint: "gl.uniform1ui(location, v)",
        uvec2: "gl.uniform2ui(location, v[0], v[1])",
        uvec3: "gl.uniform3ui(location, v[0], v[1], v[2])",
        uvec4: "gl.uniform4ui(location, v[0], v[1], v[2], v[3])",
        bool: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1i(location, v)\n    }",
        bvec2: "gl.uniform2i(location, v[0], v[1])",
        bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
        bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        sampler2D: "gl.uniform1i(location, v)",
        samplerCube: "gl.uniform1i(location, v)",
        sampler2DArray: "gl.uniform1i(location, v)"
    }, Ki = {
        float: "gl.uniform1fv(location, v)",
        vec2: "gl.uniform2fv(location, v)",
        vec3: "gl.uniform3fv(location, v)",
        vec4: "gl.uniform4fv(location, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        int: "gl.uniform1iv(location, v)",
        ivec2: "gl.uniform2iv(location, v)",
        ivec3: "gl.uniform3iv(location, v)",
        ivec4: "gl.uniform4iv(location, v)",
        uint: "gl.uniform1uiv(location, v)",
        uvec2: "gl.uniform2uiv(location, v)",
        uvec3: "gl.uniform3uiv(location, v)",
        uvec4: "gl.uniform4uiv(location, v)",
        bool: "gl.uniform1iv(location, v)",
        bvec2: "gl.uniform2iv(location, v)",
        bvec3: "gl.uniform3iv(location, v)",
        bvec4: "gl.uniform4iv(location, v)",
        sampler2D: "gl.uniform1iv(location, v)",
        samplerCube: "gl.uniform1iv(location, v)",
        sampler2DArray: "gl.uniform1iv(location, v)"
    }, Zi = [
        "precision mediump float;",
        "void main(void){",
        "float test = 0.1;",
        "%forloop%",
        "gl_FragColor = vec4(0.0);",
        "}"
    ].join("\n");
    function Qi(t9) {
        for(var e18 = "", r33 = 0; r33 < t9; ++r33)r33 > 0 && (e18 += "\nelse "), r33 < t9 - 1 && (e18 += "if(test == " + r33 + ".0){}");
        return e18;
    }
    function Ji(t9, e18) {
        if (0 === t9) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
        for(var r33 = e18.createShader(e18.FRAGMENT_SHADER);;){
            var i30 = Zi.replace(/%forloop%/gi, Qi(t9));
            if (e18.shaderSource(r33, i30), e18.compileShader(r33), e18.getShaderParameter(r33, e18.COMPILE_STATUS)) break;
            t9 = t9 / 2 | 0;
        }
        return t9;
    }
    var $i = 0, tn = {
    }, en = function() {
        function e18(r33, i31, n27) {
            (void 0) === n27 && (n27 = "pixi-shader"), this.id = $i++, this.vertexSrc = r33 || e18.defaultVertexSrc, this.fragmentSrc = i31 || e18.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), "#version" !== this.vertexSrc.substring(0, 8) && (n27 = n27.replace(/\s+/g, "-"), tn[n27] ? (tn[n27]++, n27 += "-" + tn[n27]) : tn[n27] = 1, this.vertexSrc = "#define SHADER_NAME " + n27 + "\n" + this.vertexSrc, this.fragmentSrc = "#define SHADER_NAME " + n27 + "\n" + this.fragmentSrc, this.vertexSrc = Xi(this.vertexSrc, rt.PRECISION_VERTEX, t.PRECISION.HIGH), this.fragmentSrc = Xi(this.fragmentSrc, rt.PRECISION_FRAGMENT, function() {
                if (!Fi) {
                    Fi = t.PRECISION.MEDIUM;
                    var e19 = Gi();
                    if (e19 && e19.getShaderPrecisionFormat) {
                        var r34 = e19.getShaderPrecisionFormat(e19.FRAGMENT_SHADER, e19.HIGH_FLOAT);
                        Fi = r34.precision ? t.PRECISION.HIGH : t.PRECISION.MEDIUM;
                    }
                }
                return Fi;
            }())), this.glPrograms = {
            }, this.syncUniforms = null;
        }
        return Object.defineProperty(e18, "defaultVertexSrc", {
            get: function() {
                return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e18, "defaultFragmentSrc", {
            get: function() {
                return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";
            },
            enumerable: !1,
            configurable: !0
        }), e18.from = function(t9, r33, i31) {
            var n27 = t9 + r33, o25 = Me[n27];
            return o25 || (Me[n27] = o25 = new e18(t9, r33, i31)), o25;
        }, e18;
    }(), rn = function() {
        function t9(t10, e18) {
            this.uniformBindCount = 0, this.program = t10, this.uniformGroup = e18 ? e18 instanceof vi ? e18 : new vi(e18) : new vi({
            });
        }
        return t9.prototype.checkUniformExists = function(t10, e18) {
            if (e18.uniforms[t10]) return !0;
            for(var r33 in e18.uniforms){
                var i31 = e18.uniforms[r33];
                if (i31.group && this.checkUniformExists(t10, i31)) return !0;
            }
            return !1;
        }, t9.prototype.destroy = function() {
            this.uniformGroup = null;
        }, Object.defineProperty(t9.prototype, "uniforms", {
            get: function() {
                return this.uniformGroup.uniforms;
            },
            enumerable: !1,
            configurable: !0
        }), t9.from = function(e18, r33, i32) {
            return new t9(en.from(e18, r33), i32);
        }, t9;
    }(), nn = function() {
        function e18() {
            this.data = 0, this.blendMode = t.BLEND_MODES.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0;
        }
        return Object.defineProperty(e18.prototype, "blend", {
            get: function() {
                return !!(1 & this.data);
            },
            set: function(t9) {
                !!(1 & this.data) !== t9 && (this.data ^= 1);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e18.prototype, "offsets", {
            get: function() {
                return !!(2 & this.data);
            },
            set: function(t9) {
                !!(2 & this.data) !== t9 && (this.data ^= 2);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e18.prototype, "culling", {
            get: function() {
                return !!(4 & this.data);
            },
            set: function(t9) {
                !!(4 & this.data) !== t9 && (this.data ^= 4);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e18.prototype, "depthTest", {
            get: function() {
                return !!(8 & this.data);
            },
            set: function(t9) {
                !!(8 & this.data) !== t9 && (this.data ^= 8);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e18.prototype, "depthMask", {
            get: function() {
                return !!(32 & this.data);
            },
            set: function(t9) {
                !!(32 & this.data) !== t9 && (this.data ^= 32);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e18.prototype, "clockwiseFrontFace", {
            get: function() {
                return !!(16 & this.data);
            },
            set: function(t9) {
                !!(16 & this.data) !== t9 && (this.data ^= 16);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e18.prototype, "blendMode", {
            get: function() {
                return this._blendMode;
            },
            set: function(e20) {
                this.blend = e20 !== t.BLEND_MODES.NONE, this._blendMode = e20;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e18.prototype, "polygonOffset", {
            get: function() {
                return this._polygonOffset;
            },
            set: function(t9) {
                this.offsets = !!t9, this._polygonOffset = t9;
            },
            enumerable: !1,
            configurable: !0
        }), e18.for2d = function() {
            var t9 = new e18;
            return t9.depthTest = !1, t9.blend = !0, t9;
        }, e18;
    }(), on = function(t9) {
        function e18(r33, i32, n27) {
            var o25 = this, s26 = en.from(r33 || e18.defaultVertexSrc, i32 || e18.defaultFragmentSrc);
            return (o25 = t9.call(this, s26, n27) || this).padding = 0, o25.resolution = rt.FILTER_RESOLUTION, o25.multisample = rt.FILTER_MULTISAMPLE, o25.enabled = !0, o25.autoFit = !0, o25.state = new nn, o25;
        }
        return Lr(e18, t9), e18.prototype.apply = function(t10, e20, r33, i32, n27) {
            t10.applyFilter(this, e20, r33, i32);
        }, Object.defineProperty(e18.prototype, "blendMode", {
            get: function() {
                return this.state.blendMode;
            },
            set: function(t10) {
                this.state.blendMode = t10;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e18.prototype, "resolution", {
            get: function() {
                return this._resolution;
            },
            set: function(t10) {
                this._resolution = t10;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e18, "defaultVertexSrc", {
            get: function() {
                return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e18, "defaultFragmentSrc", {
            get: function() {
                return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n";
            },
            enumerable: !1,
            configurable: !0
        }), e18;
    }(rn), sn = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", an = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n", hn = new Ze, un = function() {
        function t9(t10, e18) {
            this._texture = t10, this.mapCoord = new Ze, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = (void 0) === e18 ? 0.5 : e18, this.isSimple = !1;
        }
        return Object.defineProperty(t9.prototype, "texture", {
            get: function() {
                return this._texture;
            },
            set: function(t10) {
                this._texture = t10, this._textureID = -1;
            },
            enumerable: !1,
            configurable: !0
        }), t9.prototype.multiplyUvs = function(t10, e18) {
            (void 0) === e18 && (e18 = t10);
            for(var r33 = this.mapCoord, i32 = 0; i32 < t10.length; i32 += 2){
                var n27 = t10[i32], o25 = t10[i32 + 1];
                e18[i32] = n27 * r33.a + o25 * r33.c + r33.tx, e18[i32 + 1] = n27 * r33.b + o25 * r33.d + r33.ty;
            }
            return e18;
        }, t9.prototype.update = function(t10) {
            var e18 = this._texture;
            if (!e18 || !e18.valid) return !1;
            if (!t10 && this._textureID === e18._updateID) return !1;
            this._textureID = e18._updateID, this._updateID++;
            var r33 = e18._uvs;
            this.mapCoord.set(r33.x1 - r33.x0, r33.y1 - r33.y0, r33.x3 - r33.x0, r33.y3 - r33.y0, r33.x0, r33.y0);
            var i32 = e18.orig, n28 = e18.trim;
            n28 && (hn.set(i32.width / n28.width, 0, 0, i32.height / n28.height, -n28.x / n28.width, -n28.y / n28.height), this.mapCoord.append(hn));
            var o26 = e18.baseTexture, s26 = this.uClampFrame, a26 = this.clampMargin / o26.resolution, h25 = this.clampOffset;
            return s26[0] = (e18._frame.x + a26 + h25) / o26.width, s26[1] = (e18._frame.y + a26 + h25) / o26.height, s26[2] = (e18._frame.x + e18._frame.width - a26 + h25) / o26.width, s26[3] = (e18._frame.y + e18._frame.height - a26 + h25) / o26.height, this.uClampOffset[0] = h25 / o26.realWidth, this.uClampOffset[1] = h25 / o26.realHeight, this.isSimple = e18._frame.width === o26.width && e18._frame.height === o26.height && 0 === e18.rotate, !0;
        }, t9;
    }(), ln = function(t9) {
        function e18(e20) {
            var r33 = this, i32 = new Ze;
            return r33 = t9.call(this, sn, an) || this, e20.renderable = !1, r33.maskSprite = e20, r33.maskMatrix = i32, r33;
        }
        return Lr(e18, t9), e18.prototype.apply = function(t10, e20, r33, i32) {
            var n28 = this.maskSprite, o26 = n28._texture;
            o26.valid && (o26.uvMatrix || (o26.uvMatrix = new un(o26, 0)), o26.uvMatrix.update(), this.uniforms.npmAlpha = o26.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o26, this.uniforms.otherMatrix = t10.calculateSpriteMatrix(this.maskMatrix, n28).prepend(o26.uvMatrix.mapCoord), this.uniforms.alpha = n28.worldAlpha, this.uniforms.maskClamp = o26.uvMatrix.uClampFrame, t10.applyFilter(this, e20, r33, i32));
        }, e18;
    }(on), cn = function() {
        function e18(t9) {
            this.renderer = t9, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0;
        }
        return e18.prototype.setMaskStack = function(t9) {
            this.maskStack = t9, this.renderer.scissor.setMaskStack(t9), this.renderer.stencil.setMaskStack(t9);
        }, e18.prototype.push = function(e20, r33) {
            var i32 = r33;
            if (!i32.isMaskData) {
                var n28 = this.maskDataPool.pop() || new Di;
                n28.pooled = !0, n28.maskObject = r33, i32 = n28;
            }
            switch(i32.autoDetect && this.detect(i32), i32.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]), i32._target = e20, i32.type){
                case t.MASK_TYPES.SCISSOR:
                    this.maskStack.push(i32), this.renderer.scissor.push(i32);
                    break;
                case t.MASK_TYPES.STENCIL:
                    this.maskStack.push(i32), this.renderer.stencil.push(i32);
                    break;
                case t.MASK_TYPES.SPRITE:
                    i32.copyCountersOrReset(null), this.pushSpriteMask(i32), this.maskStack.push(i32);
            }
        }, e18.prototype.pop = function(e20) {
            var r33 = this.maskStack.pop();
            if (r33 && r33._target === e20) {
                switch(r33.type){
                    case t.MASK_TYPES.SCISSOR:
                        this.renderer.scissor.pop();
                        break;
                    case t.MASK_TYPES.STENCIL:
                        this.renderer.stencil.pop(r33.maskObject);
                        break;
                    case t.MASK_TYPES.SPRITE:
                        this.popSpriteMask();
                }
                r33.reset(), r33.pooled && this.maskDataPool.push(r33);
            }
        }, e18.prototype.detect = function(e20) {
            var r33 = e20.maskObject;
            if (r33.isSprite) e20.type = t.MASK_TYPES.SPRITE;
            else if (e20.type = t.MASK_TYPES.STENCIL, this.enableScissor && r33.isFastRect && r33.isFastRect()) {
                var i32 = r33.worldTransform, n29 = Math.atan2(i32.b, i32.a), o26 = Math.atan2(i32.d, i32.c);
                n29 = Math.round(n29 * (180 / Math.PI) * 100), o26 = ((o26 = Math.round(o26 * (180 / Math.PI) * 100) - n29) % 18000 + 18000) % 18000, 0 == (n29 = (n29 % 9000 + 9000) % 9000) && 9000 === o26 && (e20.type = t.MASK_TYPES.SCISSOR);
            }
        }, e18.prototype.pushSpriteMask = function(t9) {
            var e20, r33, i33 = t9.maskObject, n30 = t9._target, o27 = this.alphaMaskPool[this.alphaMaskIndex];
            o27 || (o27 = this.alphaMaskPool[this.alphaMaskIndex] = [
                new ln(i33)
            ]);
            var s26, a26, h25 = this.renderer, u27 = h25.renderTexture;
            if (u27.current) {
                var l19 = u27.current;
                s26 = t9.resolution || l19.resolution, a26 = null !== (e20 = t9.multisample) && (void 0) !== e20 ? e20 : l19.multisample;
            } else s26 = t9.resolution || h25.resolution, a26 = null !== (r33 = t9.multisample) && (void 0) !== r33 ? r33 : h25.multisample;
            o27[0].resolution = s26, o27[0].multisample = a26, o27[0].maskSprite = i33;
            var c15 = n30.filterArea;
            n30.filterArea = i33.getBounds(!0), h25.filter.push(n30, o27), n30.filterArea = c15, this.alphaMaskIndex++;
        }, e18.prototype.popSpriteMask = function() {
            this.renderer.filter.pop(), this.alphaMaskIndex--;
        }, e18.prototype.destroy = function() {
            this.renderer = null;
        }, e18;
    }(), dn = function() {
        function t9(t10) {
            this.renderer = t10, this.maskStack = [], this.glConst = 0;
        }
        return t9.prototype.getStackLength = function() {
            return this.maskStack.length;
        }, t9.prototype.setMaskStack = function(t10) {
            var e18 = this.renderer.gl, r33 = this.getStackLength();
            this.maskStack = t10;
            var i33 = this.getStackLength();
            i33 !== r33 && (0 === i33 ? e18.disable(this.glConst) : (e18.enable(this.glConst), this._useCurrent()));
        }, t9.prototype._useCurrent = function() {
        }, t9.prototype.destroy = function() {
            this.renderer = null, this.maskStack = null;
        }, t9;
    }(), fn = function(t9) {
        function e18(e20) {
            var r33 = t9.call(this, e20) || this;
            return r33.glConst = WebGLRenderingContext.SCISSOR_TEST, r33;
        }
        return Lr(e18, t9), e18.prototype.getStackLength = function() {
            var t10 = this.maskStack[this.maskStack.length - 1];
            return t10 ? t10._scissorCounter : 0;
        }, e18.prototype.push = function(t10) {
            var e20 = t10.maskObject;
            e20.renderable = !0;
            var r33 = t10._scissorRect, i33 = e20.getBounds(!0), n30 = this.renderer.gl;
            e20.renderable = !1, r33 ? i33.fit(r33) : n30.enable(n30.SCISSOR_TEST), t10._scissorCounter++, t10._scissorRect = i33, this._useCurrent();
        }, e18.prototype.pop = function() {
            var t10 = this.renderer.gl;
            this.getStackLength() > 0 ? this._useCurrent() : t10.disable(t10.SCISSOR_TEST);
        }, e18.prototype._useCurrent = function() {
            var t10 = this.maskStack[this.maskStack.length - 1]._scissorRect, e20 = this.renderer.renderTexture.current, r33 = this.renderer.projection, i33 = r33.transform, n30 = r33.sourceFrame, o27 = r33.destinationFrame, s26 = e20 ? e20.resolution : this.renderer.resolution, a26 = o27.width / n30.width, h25 = o27.height / n30.height, u27 = ((t10.x - n30.x) * a26 + o27.x) * s26, l20 = ((t10.y - n30.y) * h25 + o27.y) * s26, c15 = t10.width * a26 * s26, d15 = t10.height * h25 * s26;
            i33 && (u27 += i33.tx * s26, l20 += i33.ty * s26), e20 || (l20 = this.renderer.height - d15 - l20), u27 = Math.round(u27), l20 = Math.round(l20), c15 = Math.round(c15), d15 = Math.round(d15), this.renderer.gl.scissor(u27, l20, c15, d15);
        }, e18;
    }(dn), pn = function(t9) {
        function e18(e20) {
            var r33 = t9.call(this, e20) || this;
            return r33.glConst = WebGLRenderingContext.STENCIL_TEST, r33;
        }
        return Lr(e18, t9), e18.prototype.getStackLength = function() {
            var t10 = this.maskStack[this.maskStack.length - 1];
            return t10 ? t10._stencilCounter : 0;
        }, e18.prototype.push = function(t10) {
            var e20 = t10.maskObject, r33 = this.renderer.gl, i33 = t10._stencilCounter;
            0 === i33 && (this.renderer.framebuffer.forceStencil(), r33.enable(r33.STENCIL_TEST)), t10._stencilCounter++, r33.colorMask(!1, !1, !1, !1), r33.stencilFunc(r33.EQUAL, i33, 4294967295), r33.stencilOp(r33.KEEP, r33.KEEP, r33.INCR), e20.renderable = !0, e20.render(this.renderer), this.renderer.batch.flush(), e20.renderable = !1, this._useCurrent();
        }, e18.prototype.pop = function(t10) {
            var e20 = this.renderer.gl;
            0 === this.getStackLength() ? (e20.disable(e20.STENCIL_TEST), e20.clearStencil(0), e20.clear(e20.STENCIL_BUFFER_BIT)) : (e20.colorMask(!1, !1, !1, !1), e20.stencilOp(e20.KEEP, e20.KEEP, e20.DECR), t10.renderable = !0, t10.render(this.renderer), this.renderer.batch.flush(), t10.renderable = !1, this._useCurrent());
        }, e18.prototype._useCurrent = function() {
            var t10 = this.renderer.gl;
            t10.colorMask(!0, !0, !0, !0), t10.stencilFunc(t10.EQUAL, this.getStackLength(), 4294967295), t10.stencilOp(t10.KEEP, t10.KEEP, t10.KEEP);
        }, e18;
    }(dn), _n = function() {
        function t9(t10) {
            this.renderer = t10, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new Ze, this.transform = null;
        }
        return t9.prototype.update = function(t10, e18, r33, i33) {
            this.destinationFrame = t10 || this.destinationFrame || this.defaultFrame, this.sourceFrame = e18 || this.sourceFrame || t10, this.calculateProjection(this.destinationFrame, this.sourceFrame, r33, i33), this.transform && this.projectionMatrix.append(this.transform);
            var n30 = this.renderer;
            n30.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n30.globalUniforms.update(), n30.shader.shader && n30.shader.syncUniformGroup(n30.shader.shader.uniforms.globals);
        }, t9.prototype.calculateProjection = function(t10, e18, r33, i33) {
            var n30 = this.projectionMatrix, o27 = i33 ? -1 : 1;
            n30.identity(), n30.a = 1 / e18.width * 2, n30.d = o27 * (1 / e18.height * 2), n30.tx = -1 - e18.x * n30.a, n30.ty = -o27 - e18.y * n30.d;
        }, t9.prototype.setTransform = function(t10) {
        }, t9.prototype.destroy = function() {
            this.renderer = null;
        }, t9;
    }(), mn = new Ye, vn = new Ye, yn = function() {
        function t9(t10) {
            this.renderer = t10, this.clearColor = t10._backgroundColorRgba, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new Ye, this.destinationFrame = new Ye, this.viewportFrame = new Ye;
        }
        return t9.prototype.bind = function(t10, e18, r33) {
            (void 0) === t10 && (t10 = null);
            var i33, n30, o27, s26 = this.renderer;
            this.current = t10, t10 ? (o27 = (i33 = t10.baseTexture).resolution, e18 || (mn.width = t10.frame.width, mn.height = t10.frame.height, e18 = mn), r33 || (vn.x = t10.frame.x, vn.y = t10.frame.y, vn.width = e18.width, vn.height = e18.height, r33 = vn), n30 = i33.framebuffer) : (o27 = s26.resolution, e18 || (mn.width = s26.screen.width, mn.height = s26.screen.height, e18 = mn), r33 || ((r33 = mn).width = e18.width, r33.height = e18.height));
            var a26 = this.viewportFrame;
            a26.x = r33.x * o27, a26.y = r33.y * o27, a26.width = r33.width * o27, a26.height = r33.height * o27, t10 || (a26.y = s26.view.height - (a26.y + a26.height)), a26.ceil(), this.renderer.framebuffer.bind(n30, a26), this.renderer.projection.update(r33, e18, o27, !n30), t10 ? this.renderer.mask.setMaskStack(i33.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(e18), this.destinationFrame.copyFrom(r33);
        }, t9.prototype.clear = function(t10, e18) {
            t10 = this.current ? t10 || this.current.baseTexture.clearColor : t10 || this.clearColor;
            var r33 = this.destinationFrame, i33 = this.current ? this.current.baseTexture : this.renderer.screen, n30 = r33.width !== i33.width || r33.height !== i33.height;
            if (n30) {
                var o27 = this.viewportFrame, s26 = o27.x, a26 = o27.y, h25 = o27.width, u27 = o27.height;
                s26 = Math.round(s26), a26 = Math.round(a26), h25 = Math.round(h25), u27 = Math.round(u27), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(s26, a26, h25, u27);
            }
            this.renderer.framebuffer.clear(t10[0], t10[1], t10[2], t10[3], e18), n30 && this.renderer.scissor.pop();
        }, t9.prototype.resize = function() {
            this.bind(null);
        }, t9.prototype.reset = function() {
            this.bind(null);
        }, t9.prototype.destroy = function() {
            this.renderer = null;
        }, t9;
    }();
    function En(t9, e18, r33, i33, n30) {
        r33.buffer.update(n30);
    }
    var gn = {
        float: "\n        data[offset] = v;\n    ",
        vec2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ",
        vec3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ",
        vec4: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ",
        mat2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ",
        mat3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ",
        mat4: "\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    "
    }, Tn = {
        float: 4,
        vec2: 8,
        vec3: 12,
        vec4: 16,
        int: 4,
        ivec2: 8,
        ivec3: 12,
        ivec4: 16,
        uint: 4,
        uvec2: 8,
        uvec3: 12,
        uvec4: 16,
        bool: 4,
        bvec2: 8,
        bvec3: 12,
        bvec4: 16,
        mat2: 32,
        mat3: 48,
        mat4: 64
    };
    function bn(t9) {
        for(var e18 = t9.map(function(t10) {
            return {
                data: t10,
                offset: 0,
                dataLen: 0,
                dirty: 0
            };
        }), r33 = 0, i33 = 0, n30 = 0, o28 = 0; o28 < e18.length; o28++){
            var s27 = e18[o28];
            if (r33 = Tn[s27.data.type], s27.data.size > 1 && (r33 = Math.max(r33, 16) * s27.data.size), s27.dataLen = r33, i33 % r33 != 0 && i33 < 16) {
                var a27 = i33 % r33 % 16;
                i33 += a27, n30 += a27;
            }
            i33 + r33 > 16 ? (n30 = 16 * Math.ceil(n30 / 16), s27.offset = n30, n30 += r33, i33 = r33) : (s27.offset = n30, i33 += r33, n30 += r33);
        }
        return {
            uboElements: e18,
            size: n30 = 16 * Math.ceil(n30 / 16)
        };
    }
    function Rn(t9, e18) {
        var r33 = [];
        for(var i33 in t9)e18[i33] && r33.push(e18[i33]);
        return r33.sort(function(t10, e20) {
            return t10.index - e20.index;
        }), r33;
    }
    function xn(t9, e18) {
        if (!t9.autoManage) return {
            size: 0,
            syncFunc: En
        };
        for(var r33 = bn(Rn(t9.uniforms, e18)), i33 = r33.uboElements, n30 = r33.size, o28 = [
            "\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    "
        ], s28 = 0; s28 < i33.length; s28++){
            for(var a28 = i33[s28], h26 = t9.uniforms[a28.data.name], u28 = a28.data.name, l20 = !1, c15 = 0; c15 < zi.length; c15++){
                var d15 = zi[c15];
                if (d15.codeUbo && d15.test(a28.data, h26)) {
                    o28.push("offset = " + a28.offset / 4 + ";", zi[c15].codeUbo(a28.data.name, h26)), l20 = !0;
                    break;
                }
            }
            if (!l20) {
                if (a28.data.size > 1) {
                    var f11 = Hi(a28.data.type), p9 = Math.max(Tn[a28.data.type] / 16, 1), _ = f11 / p9, m4 = (4 - _ % 4) % 4;
                    o28.push("\n                cv = ud." + u28 + ".value;\n                v = uv." + u28 + ";\n                offset = " + a28.offset / 4 + ";\n\n                t = 0;\n\n                for(var i=0; i < " + a28.data.size * p9 + "; i++)\n                {\n                    for(var j = 0; j < " + _ + "; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += " + m4 + ";\n                }\n\n                ");
                } else {
                    var v3 = gn[a28.data.type];
                    o28.push("\n                cv = ud." + u28 + ".value;\n                v = uv." + u28 + ";\n                offset = " + a28.offset / 4 + ";\n                " + v3 + ";\n                ");
                }
            }
        }
        return o28.push("\n       renderer.buffer.update(buffer);\n    "), {
            size: n30,
            syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", o28.join("\n"))
        };
    }
    var An = function() {
    }, Sn = function() {
        function t9(t10, e18) {
            this.program = t10, this.uniformData = e18, this.uniformGroups = {
            }, this.uniformDirtyGroups = {
            }, this.uniformBufferBindings = {
            };
        }
        return t9.prototype.destroy = function() {
            this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null;
        }, t9;
    }();
    function On(t9, e18) {
        var r33 = Ni(t9, t9.VERTEX_SHADER, e18.vertexSrc), i33 = Ni(t9, t9.FRAGMENT_SHADER, e18.fragmentSrc), n30 = t9.createProgram();
        t9.attachShader(n30, r33), t9.attachShader(n30, i33), t9.linkProgram(n30), t9.getProgramParameter(n30, t9.LINK_STATUS) || (function(t10, e20, r35, i34) {
            t10.getProgramParameter(e20, t10.LINK_STATUS) || (t10.getShaderParameter(r35, t10.COMPILE_STATUS) || wi(t10, r35), t10.getShaderParameter(i34, t10.COMPILE_STATUS) || wi(t10, i34), console.error("PixiJS Error: Could not initialize shader."), "" !== t10.getProgramInfoLog(e20) && console.warn("PixiJS Warning: gl.getProgramInfoLog()", t10.getProgramInfoLog(e20)));
        })(t9, n30, r33, i33), e18.attributeData = (function(t10, e20) {
            for(var r35 = {
            }, i34 = e20.getProgramParameter(t10, e20.ACTIVE_ATTRIBUTES), n31 = 0; n31 < i34; n31++){
                var o28 = e20.getActiveAttrib(t10, n31);
                if (0 !== o28.name.indexOf("gl_")) {
                    var s28 = Vi(e20, o28.type), a29 = {
                        type: s28,
                        name: o28.name,
                        size: Hi(s28),
                        location: n31
                    };
                    r35[o28.name] = a29;
                }
            }
            return r35;
        })(n30, t9), e18.uniformData = (function(t10, e20) {
            for(var r35 = {
            }, i34 = e20.getProgramParameter(t10, e20.ACTIVE_UNIFORMS), n31 = 0; n31 < i34; n31++){
                var o29 = e20.getActiveUniform(t10, n31), s29 = o29.name.replace(/\[.*?\]$/, ""), a30 = !!o29.name.match(/\[.*?\]$/), h27 = Vi(e20, o29.type);
                r35[s29] = {
                    name: s29,
                    index: n31,
                    type: h27,
                    size: o29.size,
                    isArray: a30,
                    value: Li(h27, o29.size)
                };
            }
            return r35;
        })(n30, t9);
        var o30 = Object.keys(e18.attributeData);
        o30.sort(function(t10, e20) {
            return t10 > e20 ? 1 : -1;
        });
        for(var s30 = 0; s30 < o30.length; s30++)e18.attributeData[o30[s30]].location = s30, t9.bindAttribLocation(n30, s30, o30[s30]);
        t9.linkProgram(n30), t9.deleteShader(r33), t9.deleteShader(i33);
        var a31 = {
        };
        for(var s30 in e18.uniformData){
            var h28 = e18.uniformData[s30];
            a31[s30] = {
                location: t9.getUniformLocation(n30, s30),
                value: Li(h28.type, h28.size)
            };
        }
        return new Sn(n30, a31);
    }
    var In = 0, Pn = {
        textureCount: 0,
        uboCount: 0
    }, Mn = function() {
        function t9(t10) {
            this.destroyed = !1, this.renderer = t10, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {
            }, this._uboCache = {
            }, this.id = In++;
        }
        return t9.prototype.systemCheck = function() {
            if (!function() {
                if ("boolean" == typeof Wi) return Wi;
                try {
                    var t10 = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
                    Wi = !0 === t10({
                        a: "b"
                    }, "a", "b");
                } catch (t11) {
                    Wi = !1;
                }
                return Wi;
            }()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
        }, t9.prototype.contextChange = function(t10) {
            this.gl = t10, this.reset();
        }, t9.prototype.bind = function(t10, e18) {
            t10.uniforms.globals = this.renderer.globalUniforms;
            var r33 = t10.program, i33 = r33.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t10);
            return this.shader = t10, this.program !== r33 && (this.program = r33, this.gl.useProgram(i33.program)), e18 || (Pn.textureCount = 0, Pn.uboCount = 0, this.syncUniformGroup(t10.uniformGroup, Pn)), i33;
        }, t9.prototype.setUniforms = function(t10) {
            var e18 = this.shader.program, r33 = e18.glPrograms[this.renderer.CONTEXT_UID];
            e18.syncUniforms(r33.uniformData, t10, this.renderer);
        }, t9.prototype.syncUniformGroup = function(t10, e18) {
            var r33 = this.getGlProgram();
            t10.static && t10.dirtyId === r33.uniformDirtyGroups[t10.id] || (r33.uniformDirtyGroups[t10.id] = t10.dirtyId, this.syncUniforms(t10, r33, e18));
        }, t9.prototype.syncUniforms = function(t10, e18, r33) {
            (t10.syncUniforms[this.shader.program.id] || this.createSyncGroups(t10))(e18.uniformData, t10.uniforms, this.renderer, r33);
        }, t9.prototype.createSyncGroups = function(t10) {
            var e18 = this.getSignature(t10, this.shader.program.uniformData, "u");
            return this.cache[e18] || (this.cache[e18] = (function(t11, e20) {
                var r33 = [
                    "\n        var v = null;\n        var cv = null\n        var t = 0;\n        var gl = renderer.gl\n    "
                ];
                for(var i33 in t11.uniforms){
                    var n30 = e20[i33];
                    if (n30) {
                        for(var o30 = t11.uniforms[i33], s30 = !1, a31 = 0; a31 < zi.length; a31++)if (zi[a31].test(n30, o30)) {
                            r33.push(zi[a31].code(i33, o30)), s30 = !0;
                            break;
                        }
                        if (!s30) {
                            var h29 = (1 === n30.size ? qi : Ki)[n30.type].replace("location", 'ud["' + i33 + '"].location');
                            r33.push('\n            cv = ud["' + i33 + '"].value;\n            v = uv["' + i33 + '"];\n            ' + h29 + ";");
                        }
                    } else t11.uniforms[i33].group && (t11.uniforms[i33].ubo ? r33.push("\n                        renderer.shader.syncUniformBufferGroup(uv." + i33 + ", '" + i33 + "');\n                    ") : r33.push("\n                        renderer.shader.syncUniformGroup(uv." + i33 + ", syncData);\n                    "));
                }
                return new Function("ud", "uv", "renderer", "syncData", r33.join("\n"));
            })(t10, this.shader.program.uniformData)), t10.syncUniforms[this.shader.program.id] = this.cache[e18], t10.syncUniforms[this.shader.program.id];
        }, t9.prototype.syncUniformBufferGroup = function(t10, e18) {
            var r33 = this.getGlProgram();
            if (!t10.static || 0 !== t10.dirtyId || !r33.uniformGroups[t10.id]) {
                t10.dirtyId = 0;
                var i33 = r33.uniformGroups[t10.id] || this.createSyncBufferGroup(t10, r33, e18);
                t10.buffer.update(), i33(r33.uniformData, t10.uniforms, this.renderer, Pn, t10.buffer);
            }
            this.renderer.buffer.bindBufferBase(t10.buffer, r33.uniformBufferBindings[e18]);
        }, t9.prototype.createSyncBufferGroup = function(t10, e18, r33) {
            var i34 = this.renderer.gl;
            this.renderer.buffer.bind(t10.buffer);
            var n31 = this.gl.getUniformBlockIndex(e18.program, r33);
            e18.uniformBufferBindings[r33] = this.shader.uniformBindCount, i34.uniformBlockBinding(e18.program, n31, this.shader.uniformBindCount), this.shader.uniformBindCount++;
            var o31 = this.getSignature(t10, this.shader.program.uniformData, "ubo"), s31 = this._uboCache[o31];
            if (s31 || (s31 = this._uboCache[o31] = xn(t10, this.shader.program.uniformData)), t10.autoManage) {
                var a32 = new Float32Array(s31.size / 4);
                t10.buffer.update(a32);
            }
            return e18.uniformGroups[t10.id] = s31.syncFunc, e18.uniformGroups[t10.id];
        }, t9.prototype.getSignature = function(t10, e18, r33) {
            var i34 = t10.uniforms, n31 = [
                r33 + "-"
            ];
            for(var o31 in i34)n31.push(o31), e18[o31] && n31.push(e18[o31].type);
            return n31.join("-");
        }, t9.prototype.getGlProgram = function() {
            return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null;
        }, t9.prototype.generateProgram = function(t10) {
            var e18 = this.gl, r33 = t10.program, i34 = On(e18, r33);
            return r33.glPrograms[this.renderer.CONTEXT_UID] = i34, i34;
        }, t9.prototype.reset = function() {
            this.program = null, this.shader = null;
        }, t9.prototype.destroy = function() {
            this.renderer = null, this.destroyed = !0;
        }, t9;
    }(), Dn = 0, Nn = 1, wn = 2, Cn = 3, Ln = 4, Fn = 5, Un = function() {
        function e18() {
            this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = t.BLEND_MODES.NONE, this._blendEq = !1, this.map = [], this.map[Dn] = this.setBlend, this.map[Nn] = this.setOffset, this.map[wn] = this.setCullFace, this.map[Cn] = this.setDepthTest, this.map[Ln] = this.setFrontFace, this.map[Fn] = this.setDepthMask, this.checks = [], this.defaultState = new nn, this.defaultState.blend = !0;
        }
        return e18.prototype.contextChange = function(e20) {
            this.gl = e20, this.blendModes = (function(e21, r33) {
                return (void 0) === r33 && (r33 = []), r33[t.BLEND_MODES.NORMAL] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.ADD] = [
                    e21.ONE,
                    e21.ONE
                ], r33[t.BLEND_MODES.MULTIPLY] = [
                    e21.DST_COLOR,
                    e21.ONE_MINUS_SRC_ALPHA,
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.SCREEN] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_COLOR,
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.OVERLAY] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.DARKEN] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.LIGHTEN] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.COLOR_DODGE] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.COLOR_BURN] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.HARD_LIGHT] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.SOFT_LIGHT] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.DIFFERENCE] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.EXCLUSION] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.HUE] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.SATURATION] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.COLOR] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.LUMINOSITY] = [
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.NONE] = [
                    0,
                    0
                ], r33[t.BLEND_MODES.NORMAL_NPM] = [
                    e21.SRC_ALPHA,
                    e21.ONE_MINUS_SRC_ALPHA,
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.ADD_NPM] = [
                    e21.SRC_ALPHA,
                    e21.ONE,
                    e21.ONE,
                    e21.ONE
                ], r33[t.BLEND_MODES.SCREEN_NPM] = [
                    e21.SRC_ALPHA,
                    e21.ONE_MINUS_SRC_COLOR,
                    e21.ONE,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.SRC_IN] = [
                    e21.DST_ALPHA,
                    e21.ZERO
                ], r33[t.BLEND_MODES.SRC_OUT] = [
                    e21.ONE_MINUS_DST_ALPHA,
                    e21.ZERO
                ], r33[t.BLEND_MODES.SRC_ATOP] = [
                    e21.DST_ALPHA,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.DST_OVER] = [
                    e21.ONE_MINUS_DST_ALPHA,
                    e21.ONE
                ], r33[t.BLEND_MODES.DST_IN] = [
                    e21.ZERO,
                    e21.SRC_ALPHA
                ], r33[t.BLEND_MODES.DST_OUT] = [
                    e21.ZERO,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.DST_ATOP] = [
                    e21.ONE_MINUS_DST_ALPHA,
                    e21.SRC_ALPHA
                ], r33[t.BLEND_MODES.XOR] = [
                    e21.ONE_MINUS_DST_ALPHA,
                    e21.ONE_MINUS_SRC_ALPHA
                ], r33[t.BLEND_MODES.SUBTRACT] = [
                    e21.ONE,
                    e21.ONE,
                    e21.ONE,
                    e21.ONE,
                    e21.FUNC_REVERSE_SUBTRACT,
                    e21.FUNC_ADD
                ], r33;
            })(e20), this.set(this.defaultState), this.reset();
        }, e18.prototype.set = function(t9) {
            if (t9 = t9 || this.defaultState, this.stateId !== t9.data) {
                for(var e20 = this.stateId ^ t9.data, r33 = 0; e20;)1 & e20 && this.map[r33].call(this, !!(t9.data & 1 << r33)), e20 >>= 1, r33++;
                this.stateId = t9.data;
            }
            for(r33 = 0; r33 < this.checks.length; r33++)this.checks[r33](this, t9);
        }, e18.prototype.forceState = function(t9) {
            t9 = t9 || this.defaultState;
            for(var e21 = 0; e21 < this.map.length; e21++)this.map[e21].call(this, !!(t9.data & 1 << e21));
            for(e21 = 0; e21 < this.checks.length; e21++)this.checks[e21](this, t9);
            this.stateId = t9.data;
        }, e18.prototype.setBlend = function(t9) {
            this.updateCheck(e18.checkBlendMode, t9), this.gl[t9 ? "enable" : "disable"](this.gl.BLEND);
        }, e18.prototype.setOffset = function(t9) {
            this.updateCheck(e18.checkPolygonOffset, t9), this.gl[t9 ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
        }, e18.prototype.setDepthTest = function(t9) {
            this.gl[t9 ? "enable" : "disable"](this.gl.DEPTH_TEST);
        }, e18.prototype.setDepthMask = function(t9) {
            this.gl.depthMask(t9);
        }, e18.prototype.setCullFace = function(t9) {
            this.gl[t9 ? "enable" : "disable"](this.gl.CULL_FACE);
        }, e18.prototype.setFrontFace = function(t9) {
            this.gl.frontFace(this.gl[t9 ? "CW" : "CCW"]);
        }, e18.prototype.setBlendMode = function(t9) {
            if (t9 !== this.blendMode) {
                this.blendMode = t9;
                var e21 = this.blendModes[t9], r35 = this.gl;
                2 === e21.length ? r35.blendFunc(e21[0], e21[1]) : r35.blendFuncSeparate(e21[0], e21[1], e21[2], e21[3]), 6 === e21.length ? (this._blendEq = !0, r35.blendEquationSeparate(e21[4], e21[5])) : this._blendEq && (this._blendEq = !1, r35.blendEquationSeparate(r35.FUNC_ADD, r35.FUNC_ADD));
            }
        }, e18.prototype.setPolygonOffset = function(t9, e22) {
            this.gl.polygonOffset(t9, e22);
        }, e18.prototype.reset = function() {
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0);
        }, e18.prototype.updateCheck = function(t9, e22) {
            var r36 = this.checks.indexOf(t9);
            e22 && -1 === r36 ? this.checks.push(t9) : e22 || -1 === r36 || this.checks.splice(r36, 1);
        }, e18.checkBlendMode = function(t9, e22) {
            t9.setBlendMode(e22.blendMode);
        }, e18.checkPolygonOffset = function(t9, e22) {
            t9.setPolygonOffset(1, e22.polygonOffset);
        }, e18.prototype.destroy = function() {
            this.gl = null;
        }, e18;
    }(), Bn = function() {
        function e18(t9) {
            this.renderer = t9, this.count = 0, this.checkCount = 0, this.maxIdle = rt.GC_MAX_IDLE, this.checkCountMax = rt.GC_MAX_CHECK_COUNT, this.mode = rt.GC_MODE;
        }
        return e18.prototype.postrender = function() {
            this.renderer.renderingToScreen && (this.count++, this.mode !== t.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())));
        }, e18.prototype.run = function() {
            for(var t9 = this.renderer.texture, e22 = t9.managedTextures, r36 = !1, i34 = 0; i34 < e22.length; i34++){
                var n31 = e22[i34];
                !n31.framebuffer && this.count - n31.touched > this.maxIdle && (t9.destroyTexture(n31, !0), e22[i34] = null, r36 = !0);
            }
            if (r36) {
                var o31 = 0;
                for(i34 = 0; i34 < e22.length; i34++)null !== e22[i34] && (e22[o31++] = e22[i34]);
                e22.length = o31;
            }
        }, e18.prototype.unload = function(t9) {
            var e22 = this.renderer.texture, r36 = t9._texture;
            r36 && !r36.framebuffer && e22.destroyTexture(r36);
            for(var i34 = t9.children.length - 1; i34 >= 0; i34--)this.unload(t9.children[i34]);
        }, e18.prototype.destroy = function() {
            this.renderer = null;
        }, e18;
    }(), Gn = function(e18) {
        this.texture = e18, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = t.TYPES.UNSIGNED_BYTE, this.internalFormat = t.FORMATS.RGBA, this.samplerType = 0;
    }, Xn = function() {
        function e18(t9) {
            this.renderer = t9, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new Xr, this.hasIntegerTextures = !1;
        }
        return e18.prototype.contextChange = function() {
            var e22 = this.gl = this.renderer.gl;
            this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = (function(e23) {
                var r36, i34, n32, o32, s31, a33, h30, u29, l21, c16, d16, f12, p10, _, m5, v4, y4, E, g3, T2, b2, R2, x2;
                return "WebGL2RenderingContext" in self && e23 instanceof self.WebGL2RenderingContext ? ((r36 = {
                })[t.TYPES.UNSIGNED_BYTE] = ((i34 = {
                })[t.FORMATS.RGBA] = e23.RGBA8, i34[t.FORMATS.RGB] = e23.RGB8, i34[t.FORMATS.RG] = e23.RG8, i34[t.FORMATS.RED] = e23.R8, i34[t.FORMATS.RGBA_INTEGER] = e23.RGBA8UI, i34[t.FORMATS.RGB_INTEGER] = e23.RGB8UI, i34[t.FORMATS.RG_INTEGER] = e23.RG8UI, i34[t.FORMATS.RED_INTEGER] = e23.R8UI, i34[t.FORMATS.ALPHA] = e23.ALPHA, i34[t.FORMATS.LUMINANCE] = e23.LUMINANCE, i34[t.FORMATS.LUMINANCE_ALPHA] = e23.LUMINANCE_ALPHA, i34), r36[t.TYPES.BYTE] = ((n32 = {
                })[t.FORMATS.RGBA] = e23.RGBA8_SNORM, n32[t.FORMATS.RGB] = e23.RGB8_SNORM, n32[t.FORMATS.RG] = e23.RG8_SNORM, n32[t.FORMATS.RED] = e23.R8_SNORM, n32[t.FORMATS.RGBA_INTEGER] = e23.RGBA8I, n32[t.FORMATS.RGB_INTEGER] = e23.RGB8I, n32[t.FORMATS.RG_INTEGER] = e23.RG8I, n32[t.FORMATS.RED_INTEGER] = e23.R8I, n32), r36[t.TYPES.UNSIGNED_SHORT] = ((o32 = {
                })[t.FORMATS.RGBA_INTEGER] = e23.RGBA16UI, o32[t.FORMATS.RGB_INTEGER] = e23.RGB16UI, o32[t.FORMATS.RG_INTEGER] = e23.RG16UI, o32[t.FORMATS.RED_INTEGER] = e23.R16UI, o32[t.FORMATS.DEPTH_COMPONENT] = e23.DEPTH_COMPONENT16, o32), r36[t.TYPES.SHORT] = ((s31 = {
                })[t.FORMATS.RGBA_INTEGER] = e23.RGBA16I, s31[t.FORMATS.RGB_INTEGER] = e23.RGB16I, s31[t.FORMATS.RG_INTEGER] = e23.RG16I, s31[t.FORMATS.RED_INTEGER] = e23.R16I, s31), r36[t.TYPES.UNSIGNED_INT] = ((a33 = {
                })[t.FORMATS.RGBA_INTEGER] = e23.RGBA32UI, a33[t.FORMATS.RGB_INTEGER] = e23.RGB32UI, a33[t.FORMATS.RG_INTEGER] = e23.RG32UI, a33[t.FORMATS.RED_INTEGER] = e23.R32UI, a33[t.FORMATS.DEPTH_COMPONENT] = e23.DEPTH_COMPONENT24, a33), r36[t.TYPES.INT] = ((h30 = {
                })[t.FORMATS.RGBA_INTEGER] = e23.RGBA32I, h30[t.FORMATS.RGB_INTEGER] = e23.RGB32I, h30[t.FORMATS.RG_INTEGER] = e23.RG32I, h30[t.FORMATS.RED_INTEGER] = e23.R32I, h30), r36[t.TYPES.FLOAT] = ((u29 = {
                })[t.FORMATS.RGBA] = e23.RGBA32F, u29[t.FORMATS.RGB] = e23.RGB32F, u29[t.FORMATS.RG] = e23.RG32F, u29[t.FORMATS.RED] = e23.R32F, u29[t.FORMATS.DEPTH_COMPONENT] = e23.DEPTH_COMPONENT32F, u29), r36[t.TYPES.HALF_FLOAT] = ((l21 = {
                })[t.FORMATS.RGBA] = e23.RGBA16F, l21[t.FORMATS.RGB] = e23.RGB16F, l21[t.FORMATS.RG] = e23.RG16F, l21[t.FORMATS.RED] = e23.R16F, l21), r36[t.TYPES.UNSIGNED_SHORT_5_6_5] = ((c16 = {
                })[t.FORMATS.RGB] = e23.RGB565, c16), r36[t.TYPES.UNSIGNED_SHORT_4_4_4_4] = ((d16 = {
                })[t.FORMATS.RGBA] = e23.RGBA4, d16), r36[t.TYPES.UNSIGNED_SHORT_5_5_5_1] = ((f12 = {
                })[t.FORMATS.RGBA] = e23.RGB5_A1, f12), r36[t.TYPES.UNSIGNED_INT_2_10_10_10_REV] = ((p10 = {
                })[t.FORMATS.RGBA] = e23.RGB10_A2, p10[t.FORMATS.RGBA_INTEGER] = e23.RGB10_A2UI, p10), r36[t.TYPES.UNSIGNED_INT_10F_11F_11F_REV] = ((_ = {
                })[t.FORMATS.RGB] = e23.R11F_G11F_B10F, _), r36[t.TYPES.UNSIGNED_INT_5_9_9_9_REV] = ((m5 = {
                })[t.FORMATS.RGB] = e23.RGB9_E5, m5), r36[t.TYPES.UNSIGNED_INT_24_8] = ((v4 = {
                })[t.FORMATS.DEPTH_STENCIL] = e23.DEPTH24_STENCIL8, v4), r36[t.TYPES.FLOAT_32_UNSIGNED_INT_24_8_REV] = ((y4 = {
                })[t.FORMATS.DEPTH_STENCIL] = e23.DEPTH32F_STENCIL8, y4), x2 = r36) : ((E = {
                })[t.TYPES.UNSIGNED_BYTE] = ((g3 = {
                })[t.FORMATS.RGBA] = e23.RGBA, g3[t.FORMATS.RGB] = e23.RGB, g3[t.FORMATS.ALPHA] = e23.ALPHA, g3[t.FORMATS.LUMINANCE] = e23.LUMINANCE, g3[t.FORMATS.LUMINANCE_ALPHA] = e23.LUMINANCE_ALPHA, g3), E[t.TYPES.UNSIGNED_SHORT_5_6_5] = ((T2 = {
                })[t.FORMATS.RGB] = e23.RGB, T2), E[t.TYPES.UNSIGNED_SHORT_4_4_4_4] = ((b2 = {
                })[t.FORMATS.RGBA] = e23.RGBA, b2), E[t.TYPES.UNSIGNED_SHORT_5_5_5_1] = ((R2 = {
                })[t.FORMATS.RGBA] = e23.RGBA, R2), x2 = E), x2;
            })(e22);
            var r36 = e22.getParameter(e22.MAX_TEXTURE_IMAGE_UNITS);
            this.boundTextures.length = r36;
            for(var i34 = 0; i34 < r36; i34++)this.boundTextures[i34] = null;
            this.emptyTextures = {
            };
            var n32 = new Gn(e22.createTexture());
            for(e22.bindTexture(e22.TEXTURE_2D, n32.texture), e22.texImage2D(e22.TEXTURE_2D, 0, e22.RGBA, 1, 1, 0, e22.RGBA, e22.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[e22.TEXTURE_2D] = n32, this.emptyTextures[e22.TEXTURE_CUBE_MAP] = new Gn(e22.createTexture()), e22.bindTexture(e22.TEXTURE_CUBE_MAP, this.emptyTextures[e22.TEXTURE_CUBE_MAP].texture), i34 = 0; i34 < 6; i34++)e22.texImage2D(e22.TEXTURE_CUBE_MAP_POSITIVE_X + i34, 0, e22.RGBA, 1, 1, 0, e22.RGBA, e22.UNSIGNED_BYTE, null);
            for(e22.texParameteri(e22.TEXTURE_CUBE_MAP, e22.TEXTURE_MAG_FILTER, e22.LINEAR), e22.texParameteri(e22.TEXTURE_CUBE_MAP, e22.TEXTURE_MIN_FILTER, e22.LINEAR), i34 = 0; i34 < this.boundTextures.length; i34++)this.bind(null, i34);
        }, e18.prototype.bind = function(t9, e22) {
            (void 0) === e22 && (e22 = 0);
            var r36 = this.gl;
            if ((t9 = null == t9 ? void 0 : t9.castToBaseTexture()) && t9.valid && !t9.parentTextureArray) {
                t9.touched = this.renderer.textureGC.count;
                var i34 = t9._glTextures[this.CONTEXT_UID] || this.initTexture(t9);
                this.boundTextures[e22] !== t9 && (this.currentLocation !== e22 && (this.currentLocation = e22, r36.activeTexture(r36.TEXTURE0 + e22)), r36.bindTexture(t9.target, i34.texture)), i34.dirtyId !== t9.dirtyId && (this.currentLocation !== e22 && (this.currentLocation = e22, r36.activeTexture(r36.TEXTURE0 + e22)), this.updateTexture(t9)), this.boundTextures[e22] = t9;
            } else this.currentLocation !== e22 && (this.currentLocation = e22, r36.activeTexture(r36.TEXTURE0 + e22)), r36.bindTexture(r36.TEXTURE_2D, this.emptyTextures[r36.TEXTURE_2D].texture), this.boundTextures[e22] = null;
        }, e18.prototype.reset = function() {
            this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1;
            for(var t9 = 0; t9 < this.boundTextures.length; t9++)this.boundTextures[t9] = this.unknownTexture;
        }, e18.prototype.unbind = function(t9) {
            var e22 = this.gl, r36 = this.boundTextures;
            if (this._unknownBoundTextures) {
                this._unknownBoundTextures = !1;
                for(var i35 = 0; i35 < r36.length; i35++)r36[i35] === this.unknownTexture && this.bind(null, i35);
            }
            for(i35 = 0; i35 < r36.length; i35++)r36[i35] === t9 && (this.currentLocation !== i35 && (e22.activeTexture(e22.TEXTURE0 + i35), this.currentLocation = i35), e22.bindTexture(t9.target, this.emptyTextures[t9.target].texture), r36[i35] = null);
        }, e18.prototype.ensureSamplerType = function(e22) {
            var r36 = this.boundTextures, i36 = this.hasIntegerTextures, n32 = this.CONTEXT_UID;
            if (i36) for(var o32 = e22 - 1; o32 >= 0; --o32){
                var s31 = r36[o32];
                s31 && s31._glTextures[n32].samplerType !== t.SAMPLER_TYPES.FLOAT && this.renderer.texture.unbind(s31);
            }
        }, e18.prototype.initTexture = function(t9) {
            var e22 = new Gn(this.gl.createTexture());
            return e22.dirtyId = -1, t9._glTextures[this.CONTEXT_UID] = e22, this.managedTextures.push(t9), t9.on("dispose", this.destroyTexture, this), e22;
        }, e18.prototype.initTextureType = function(e22, r36) {
            var i36, n32;
            r36.internalFormat = null !== (n32 = null === (i36 = this.internalFormats[e22.type]) || (void 0) === i36 ? void 0 : i36[e22.format]) && (void 0) !== n32 ? n32 : e22.format, 2 === this.webGLVersion && e22.type === t.TYPES.HALF_FLOAT ? r36.type = this.gl.HALF_FLOAT : r36.type = e22.type;
        }, e18.prototype.updateTexture = function(e22) {
            var r36 = e22._glTextures[this.CONTEXT_UID];
            if (r36) {
                var i36 = this.renderer;
                if (this.initTextureType(e22, r36), e22.resource && e22.resource.upload(i36, e22, r36)) r36.samplerType !== t.SAMPLER_TYPES.FLOAT && (this.hasIntegerTextures = !0);
                else {
                    var n32 = e22.realWidth, o32 = e22.realHeight, s32 = i36.gl;
                    (r36.width !== n32 || r36.height !== o32 || r36.dirtyId < 0) && (r36.width = n32, r36.height = o32, s32.texImage2D(e22.target, 0, r36.internalFormat, n32, o32, 0, e22.format, r36.type, null));
                }
                e22.dirtyStyleId !== r36.dirtyStyleId && this.updateTextureStyle(e22), r36.dirtyId = e22.dirtyId;
            }
        }, e18.prototype.destroyTexture = function(t9, e22) {
            var r36 = this.gl;
            if ((t9 = t9.castToBaseTexture())._glTextures[this.CONTEXT_UID] && (this.unbind(t9), r36.deleteTexture(t9._glTextures[this.CONTEXT_UID].texture), t9.off("dispose", this.destroyTexture, this), delete t9._glTextures[this.CONTEXT_UID], !e22)) {
                var i37 = this.managedTextures.indexOf(t9);
                -1 !== i37 && Ae(this.managedTextures, i37, 1);
            }
        }, e18.prototype.updateTextureStyle = function(e22) {
            var r36 = e22._glTextures[this.CONTEXT_UID];
            r36 && (e22.mipmap !== t.MIPMAP_MODES.POW2 && 2 === this.webGLVersion || e22.isPowerOfTwo ? r36.mipmap = e22.mipmap >= 1 : r36.mipmap = !1, 2 === this.webGLVersion || e22.isPowerOfTwo ? r36.wrapMode = e22.wrapMode : r36.wrapMode = t.WRAP_MODES.CLAMP, e22.resource && e22.resource.style(this.renderer, e22, r36) || this.setStyle(e22, r36), r36.dirtyStyleId = e22.dirtyStyleId);
        }, e18.prototype.setStyle = function(e22, r36) {
            var i38 = this.gl;
            if (r36.mipmap && e22.mipmap !== t.MIPMAP_MODES.ON_MANUAL && i38.generateMipmap(e22.target), i38.texParameteri(e22.target, i38.TEXTURE_WRAP_S, r36.wrapMode), i38.texParameteri(e22.target, i38.TEXTURE_WRAP_T, r36.wrapMode), r36.mipmap) {
                i38.texParameteri(e22.target, i38.TEXTURE_MIN_FILTER, e22.scaleMode === t.SCALE_MODES.LINEAR ? i38.LINEAR_MIPMAP_LINEAR : i38.NEAREST_MIPMAP_NEAREST);
                var n33 = this.renderer.context.extensions.anisotropicFiltering;
                if (n33 && e22.anisotropicLevel > 0 && e22.scaleMode === t.SCALE_MODES.LINEAR) {
                    var o33 = Math.min(e22.anisotropicLevel, i38.getParameter(n33.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                    i38.texParameterf(e22.target, n33.TEXTURE_MAX_ANISOTROPY_EXT, o33);
                }
            } else i38.texParameteri(e22.target, i38.TEXTURE_MIN_FILTER, e22.scaleMode === t.SCALE_MODES.LINEAR ? i38.LINEAR : i38.NEAREST);
            i38.texParameteri(e22.target, i38.TEXTURE_MAG_FILTER, e22.scaleMode === t.SCALE_MODES.LINEAR ? i38.LINEAR : i38.NEAREST);
        }, e18.prototype.destroy = function() {
            this.renderer = null;
        }, e18;
    }(), kn = {
        __proto__: null,
        FilterSystem: Ti,
        BatchSystem: Ri,
        ContextSystem: Ai,
        FramebufferSystem: Ii,
        GeometrySystem: Mi,
        MaskSystem: cn,
        ScissorSystem: fn,
        StencilSystem: pn,
        ProjectionSystem: _n,
        RenderTextureSystem: yn,
        ShaderSystem: Mn,
        StateSystem: Un,
        TextureGCSystem: Bn,
        TextureSystem: Xn
    }, Hn = new Ze, Yn = function(e18) {
        function r36(r37, i38) {
            (void 0) === r37 && (r37 = t.RENDERER_TYPE.UNKNOWN);
            var n34 = e18.call(this) || this;
            return i38 = Object.assign({
            }, rt.RENDER_OPTIONS, i38), n34.options = i38, n34.type = r37, n34.screen = new Ye(0, 0, i38.width, i38.height), n34.view = i38.view || document.createElement("canvas"), n34.resolution = i38.resolution || rt.RESOLUTION, n34.useContextAlpha = i38.useContextAlpha, n34.autoDensity = !!i38.autoDensity, n34.preserveDrawingBuffer = i38.preserveDrawingBuffer, n34.clearBeforeRender = i38.clearBeforeRender, n34._backgroundColor = 0, n34._backgroundColorRgba = [
                0,
                0,
                0,
                1
            ], n34._backgroundColorString = "#000000", n34.backgroundColor = i38.backgroundColor || n34._backgroundColor, n34.backgroundAlpha = i38.backgroundAlpha, (void 0) !== i38.transparent && (n34.useContextAlpha = i38.transparent, n34.backgroundAlpha = i38.transparent ? 0 : 1), n34._lastObjectRendered = null, n34.plugins = {
            }, n34;
        }
        return Lr(r36, e18), r36.prototype.initPlugins = function(t9) {
            for(var e22 in t9)this.plugins[e22] = new t9[e22](this);
        }, Object.defineProperty(r36.prototype, "width", {
            get: function() {
                return this.view.width;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r36.prototype, "height", {
            get: function() {
                return this.view.height;
            },
            enumerable: !1,
            configurable: !0
        }), r36.prototype.resize = function(t9, e22) {
            this.view.width = Math.round(t9 * this.resolution), this.view.height = Math.round(e22 * this.resolution);
            var r37 = this.view.width / this.resolution, i38 = this.view.height / this.resolution;
            this.screen.width = r37, this.screen.height = i38, this.autoDensity && (this.view.style.width = r37 + "px", this.view.style.height = i38 + "px"), this.emit("resize", r37, i38);
        }, r36.prototype.generateTexture = function(t9, e22, r37, i38) {
            (void 0) === e22 && (e22 = {
            }), "number" == typeof e22 && (e22 = {
                scaleMode: e22,
                resolution: r37,
                region: i38
            });
            var n34 = e22.region, o34 = function(t10, e23) {
                var r38 = {
                };
                for(var i39 in t10)Object.prototype.hasOwnProperty.call(t10, i39) && e23.indexOf(i39) < 0 && (r38[i39] = t10[i39]);
                if (null != t10 && "function" == typeof Object.getOwnPropertySymbols) {
                    var n35 = 0;
                    for(i39 = Object.getOwnPropertySymbols(t10); n35 < i39.length; n35++)e23.indexOf(i39[n35]) < 0 && (r38[i39[n35]] = t10[i39[n35]]);
                }
                return r38;
            }(e22, [
                "region"
            ]);
            0 === (i38 = n34 || t9.getLocalBounds(null, !0)).width && (i38.width = 1), 0 === i38.height && (i38.height = 1);
            var s33 = ni.create(Fr({
                width: i38.width,
                height: i38.height
            }, o34));
            return Hn.tx = -i38.x, Hn.ty = -i38.y, this.render(t9, {
                renderTexture: s33,
                clear: !1,
                transform: Hn,
                skipUpdateTransform: !!t9.parent
            }), s33;
        }, r36.prototype.destroy = function(e22) {
            for(var r37 in this.plugins)this.plugins[r37].destroy(), this.plugins[r37] = null;
            e22 && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.plugins = null, this.type = t.RENDERER_TYPE.UNKNOWN, this.view = null, this.screen = null, this._tempDisplayObjectParent = null, this.options = null, this._backgroundColorRgba = null, this._backgroundColorString = null, this._lastObjectRendered = null;
        }, Object.defineProperty(r36.prototype, "backgroundColor", {
            get: function() {
                return this._backgroundColor;
            },
            set: function(t9) {
                this._backgroundColor = t9, this._backgroundColorString = de(t9), ce(t9, this._backgroundColorRgba);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r36.prototype, "backgroundAlpha", {
            get: function() {
                return this._backgroundColorRgba[3];
            },
            set: function(t9) {
                this._backgroundColorRgba[3] = t9;
            },
            enumerable: !1,
            configurable: !0
        }), r36;
    }(ot), jn = function(t9) {
        this.buffer = t9 || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0;
    }, Vn = function() {
        function t9(t10) {
            this.renderer = t10, this.managedBuffers = {
            }, this.boundBufferBases = {
            };
        }
        return t9.prototype.destroy = function() {
            this.renderer = null;
        }, t9.prototype.contextChange = function() {
            this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID;
        }, t9.prototype.bind = function(t10) {
            var e18 = this.gl, r36 = this.CONTEXT_UID, i38 = t10._glBuffers[r36] || this.createGLBuffer(t10);
            e18.bindBuffer(t10.type, i38.buffer);
        }, t9.prototype.bindBufferBase = function(t10, e18) {
            var r36 = this.gl, i38 = this.CONTEXT_UID;
            if (this.boundBufferBases[e18] !== t10) {
                var n34 = t10._glBuffers[i38] || this.createGLBuffer(t10);
                this.boundBufferBases[e18] = t10, r36.bindBufferBase(r36.UNIFORM_BUFFER, e18, n34.buffer);
            }
        }, t9.prototype.bindBufferRange = function(t10, e18, r36) {
            var i38 = this.gl, n36 = this.CONTEXT_UID;
            r36 = r36 || 0;
            var o34 = t10._glBuffers[n36] || this.createGLBuffer(t10);
            i38.bindBufferRange(i38.UNIFORM_BUFFER, e18 || 0, o34.buffer, 256 * r36, 256);
        }, t9.prototype.update = function(t10) {
            var e18 = this.gl, r36 = this.CONTEXT_UID, i38 = t10._glBuffers[r36];
            if (t10._updateID !== i38.updateID) {
                if (i38.updateID = t10._updateID, e18.bindBuffer(t10.type, i38.buffer), i38.byteLength >= t10.data.byteLength) e18.bufferSubData(t10.type, 0, t10.data);
                else {
                    var n36 = t10.static ? e18.STATIC_DRAW : e18.DYNAMIC_DRAW;
                    i38.byteLength = t10.data.byteLength, e18.bufferData(t10.type, t10.data, n36);
                }
            }
        }, t9.prototype.dispose = function(t10, e18) {
            if (this.managedBuffers[t10.id]) {
                delete this.managedBuffers[t10.id];
                var r36 = t10._glBuffers[this.CONTEXT_UID], i38 = this.gl;
                t10.disposeRunner.remove(this), r36 && (e18 || i38.deleteBuffer(r36.buffer), delete t10._glBuffers[this.CONTEXT_UID]);
            }
        }, t9.prototype.disposeAll = function(t10) {
            for(var e18 = Object.keys(this.managedBuffers), r37 = 0; r37 < e18.length; r37++)this.dispose(this.managedBuffers[e18[r37]], t10);
        }, t9.prototype.createGLBuffer = function(t10) {
            var e18 = this.CONTEXT_UID, r37 = this.gl;
            return t10._glBuffers[e18] = new jn(r37.createBuffer()), this.managedBuffers[t10.id] = t10, t10.disposeRunner.add(this), t10._glBuffers[e18];
        }, t9;
    }(), Wn = function(e18) {
        function r37(i39) {
            var n37 = e18.call(this, t.RENDERER_TYPE.WEBGL, i39) || this;
            return i39 = n37.options, n37.gl = null, n37.CONTEXT_UID = 0, n37.runners = {
                destroy: new Dr("destroy"),
                contextChange: new Dr("contextChange"),
                reset: new Dr("reset"),
                update: new Dr("update"),
                postrender: new Dr("postrender"),
                prerender: new Dr("prerender"),
                resize: new Dr("resize")
            }, n37.runners.contextChange.add(n37), n37.globalUniforms = new vi({
                projectionMatrix: new Ze
            }, !0), n37.addSystem(cn, "mask").addSystem(Ai, "context").addSystem(Un, "state").addSystem(Mn, "shader").addSystem(Xn, "texture").addSystem(Vn, "buffer").addSystem(Mi, "geometry").addSystem(Ii, "framebuffer").addSystem(fn, "scissor").addSystem(pn, "stencil").addSystem(_n, "projection").addSystem(Bn, "textureGC").addSystem(Ti, "filter").addSystem(yn, "renderTexture").addSystem(Ri, "batch"), n37.initPlugins(r37.__plugins), n37.multisample = void 0, i39.context ? n37.context.initFromContext(i39.context) : n37.context.initFromOptions({
                alpha: !!n37.useContextAlpha,
                antialias: i39.antialias,
                premultipliedAlpha: n37.useContextAlpha && "notMultiplied" !== n37.useContextAlpha,
                stencil: !0,
                preserveDrawingBuffer: i39.preserveDrawingBuffer,
                powerPreference: n37.options.powerPreference
            }), n37.renderingToScreen = !0, he(2 === n37.context.webGLVersion ? "WebGL 2" : "WebGL 1"), n37.resize(n37.options.width, n37.options.height), n37;
        }
        return Lr(r37, e18), r37.create = function(t9) {
            if (ue()) return new r37(t9);
            throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.');
        }, r37.prototype.contextChange = function() {
            var e22, r38 = this.gl;
            if (1 === this.context.webGLVersion) {
                var i39 = r38.getParameter(r38.FRAMEBUFFER_BINDING);
                r38.bindFramebuffer(r38.FRAMEBUFFER, null), e22 = r38.getParameter(r38.SAMPLES), r38.bindFramebuffer(r38.FRAMEBUFFER, i39);
            } else i39 = r38.getParameter(r38.DRAW_FRAMEBUFFER_BINDING), r38.bindFramebuffer(r38.DRAW_FRAMEBUFFER, null), e22 = r38.getParameter(r38.SAMPLES), r38.bindFramebuffer(r38.DRAW_FRAMEBUFFER, i39);
            e22 >= t.MSAA_QUALITY.HIGH ? this.multisample = t.MSAA_QUALITY.HIGH : e22 >= t.MSAA_QUALITY.MEDIUM ? this.multisample = t.MSAA_QUALITY.MEDIUM : e22 >= t.MSAA_QUALITY.LOW ? this.multisample = t.MSAA_QUALITY.LOW : this.multisample = t.MSAA_QUALITY.NONE;
        }, r37.prototype.addSystem = function(t9, e22) {
            var r38 = new t9(this);
            if (this[e22]) throw new Error('Whoops! The name "' + e22 + '" is already in use');
            for(var i40 in this[e22] = r38, this.runners)this.runners[i40].add(r38);
            return this;
        }, r37.prototype.render = function(t9, e22) {
            var r38, i40, n37, o34;
            if (e22 && (e22 instanceof ni ? (r38 = e22, i40 = arguments[2], n37 = arguments[3], o34 = arguments[4]) : (r38 = e22.renderTexture, i40 = e22.clear, n37 = e22.transform, o34 = e22.skipUpdateTransform)), this.renderingToScreen = !r38, this.runners.prerender.emit(), this.emit("prerender"), this.projection.transform = n37, !this.context.isLost) {
                if (r38 || (this._lastObjectRendered = t9), !o34) {
                    var s33 = t9.enableTempParent();
                    t9.updateTransform(), t9.disableTempParent(s33);
                }
                this.renderTexture.bind(r38), this.batch.currentRenderer.start(), ((void 0) !== i40 ? i40 : this.clearBeforeRender) && this.renderTexture.clear(), t9.render(this), this.batch.currentRenderer.flush(), r38 && r38.baseTexture.update(), this.runners.postrender.emit(), this.projection.transform = null, this.emit("postrender");
            }
        }, r37.prototype.generateTexture = function(t9, r38, i40, n37) {
            (void 0) === r38 && (r38 = {
            });
            var o34 = e18.prototype.generateTexture.call(this, t9, r38, i40, n37);
            return this.framebuffer.blit(), o34;
        }, r37.prototype.resize = function(t9, r38) {
            e18.prototype.resize.call(this, t9, r38), this.runners.resize.emit(this.screen.height, this.screen.width);
        }, r37.prototype.reset = function() {
            return this.runners.reset.emit(), this;
        }, r37.prototype.clear = function() {
            this.renderTexture.bind(), this.renderTexture.clear();
        }, r37.prototype.destroy = function(t9) {
            for(var r38 in this.runners.destroy.emit(), this.runners)this.runners[r38].destroy();
            e18.prototype.destroy.call(this, t9), this.gl = null;
        }, Object.defineProperty(r37.prototype, "extract", {
            get: function() {
                return this.plugins.extract;
            },
            enumerable: !1,
            configurable: !0
        }), r37.registerPlugin = function(t9, e22) {
            r37.__plugins = r37.__plugins || {
            }, r37.__plugins[t9] = e22;
        }, r37;
    }(Yn);
    function zn(t9) {
        return Wn.create(t9);
    }
    var qn = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", Kn = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n", Zn = function() {
        function t9(t10) {
            this.renderer = t10;
        }
        return t9.prototype.destroy = function() {
            this.renderer = null;
        }, t9;
    }(), Qn = function() {
        this.texArray = null, this.blend = 0, this.type = t.DRAW_MODES.TRIANGLES, this.start = 0, this.size = 0, this.data = null;
    }, Jn = function() {
        function t9() {
            this.elements = [], this.ids = [], this.count = 0;
        }
        return t9.prototype.clear = function() {
            for(var t10 = 0; t10 < this.count; t10++)this.elements[t10] = null;
            this.count = 0;
        }, t9;
    }(), $n = function() {
        function t9(t10) {
            "number" == typeof t10 ? this.rawBinaryData = new ArrayBuffer(t10) : t10 instanceof Uint8Array ? this.rawBinaryData = t10.buffer : this.rawBinaryData = t10, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData);
        }
        return Object.defineProperty(t9.prototype, "int8View", {
            get: function() {
                return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t9.prototype, "uint8View", {
            get: function() {
                return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t9.prototype, "int16View", {
            get: function() {
                return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t9.prototype, "uint16View", {
            get: function() {
                return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t9.prototype, "int32View", {
            get: function() {
                return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
            },
            enumerable: !1,
            configurable: !0
        }), t9.prototype.view = function(t10) {
            return this[t10 + "View"];
        }, t9.prototype.destroy = function() {
            this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null;
        }, t9.sizeOf = function(t10) {
            switch(t10){
                case "int8":
                case "uint8":
                    return 1;
                case "int16":
                case "uint16":
                    return 2;
                case "int32":
                case "uint32":
                case "float32":
                    return 4;
                default:
                    throw new Error(t10 + " isn't a valid view type");
            }
        }, t9;
    }(), to = function(e18) {
        function r37(t9) {
            var r38 = e18.call(this, t9) || this;
            return r38.shaderGenerator = null, r38.geometryClass = null, r38.vertexSize = null, r38.state = nn.for2d(), r38.size = 4 * rt.SPRITE_BATCH_SIZE, r38._vertexCount = 0, r38._indexCount = 0, r38._bufferedElements = [], r38._bufferedTextures = [], r38._bufferSize = 0, r38._shader = null, r38._packedGeometries = [], r38._packedGeometryPoolSize = 2, r38._flushId = 0, r38._aBuffers = {
            }, r38._iBuffers = {
            }, r38.MAX_TEXTURES = 1, r38.renderer.on("prerender", r38.onPrerender, r38), t9.runners.contextChange.add(r38), r38._dcIndex = 0, r38._aIndex = 0, r38._iIndex = 0, r38._attributeBuffer = null, r38._indexBuffer = null, r38._tempBoundTextures = [], r38;
        }
        return Lr(r37, e18), r37.prototype.contextChange = function() {
            var e22 = this.renderer.gl;
            rt.PREFER_ENV === t.ENV.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(e22.getParameter(e22.MAX_TEXTURE_IMAGE_UNITS), rt.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = Ji(this.MAX_TEXTURES, e22)), this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
            for(var r38 = 0; r38 < this._packedGeometryPoolSize; r38++)this._packedGeometries[r38] = new this.geometryClass;
            this.initFlushBuffers();
        }, r37.prototype.initFlushBuffers = function() {
            for(var t9 = r37._drawCallPool, e22 = r37._textureArrayPool, i40 = this.size / 4, n37 = Math.floor(i40 / this.MAX_TEXTURES) + 1; t9.length < i40;)t9.push(new Qn);
            for(; e22.length < n37;)e22.push(new Jn);
            for(var o34 = 0; o34 < this.MAX_TEXTURES; o34++)this._tempBoundTextures[o34] = null;
        }, r37.prototype.onPrerender = function() {
            this._flushId = 0;
        }, r37.prototype.render = function(t9) {
            t9._texture.valid && (this._vertexCount + t9.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += t9.vertexData.length / 2, this._indexCount += t9.indices.length, this._bufferedTextures[this._bufferSize] = t9._texture.baseTexture, this._bufferedElements[this._bufferSize++] = t9);
        }, r37.prototype.buildTexturesAndDrawCalls = function() {
            var t9 = this._bufferedTextures, e22 = this.MAX_TEXTURES, i40 = r37._textureArrayPool, n37 = this.renderer.batch, o34 = this._tempBoundTextures, s34 = this.renderer.textureGC.count, a33 = ++Xr._globalBatch, h30 = 0, u29 = i40[0], l21 = 0;
            n37.copyBoundTextures(o34, e22);
            for(var c16 = 0; c16 < this._bufferSize; ++c16){
                var d16 = t9[c16];
                t9[c16] = null, d16._batchEnabled !== a33 && (u29.count >= e22 && (n37.boundArray(u29, o34, a33, e22), this.buildDrawCalls(u29, l21, c16), l21 = c16, u29 = i40[++h30], ++a33), d16._batchEnabled = a33, d16.touched = s34, u29.elements[u29.count++] = d16);
            }
            for(u29.count > 0 && (n37.boundArray(u29, o34, a33, e22), this.buildDrawCalls(u29, l21, this._bufferSize), ++h30, ++a33), c16 = 0; c16 < o34.length; c16++)o34[c16] = null;
            Xr._globalBatch = a33;
        }, r37.prototype.buildDrawCalls = function(t9, e22, i40) {
            var n37 = this._bufferedElements, o34 = this._attributeBuffer, s34 = this._indexBuffer, a33 = this.vertexSize, h30 = r37._drawCallPool, u29 = this._dcIndex, l21 = this._aIndex, c16 = this._iIndex, d17 = h30[u29];
            d17.start = this._iIndex, d17.texArray = t9;
            for(var f12 = e22; f12 < i40; ++f12){
                var p10 = n37[f12], _ = p10._texture.baseTexture, m5 = pe[_.alphaMode ? 1 : 0][p10.blendMode];
                n37[f12] = null, e22 < f12 && d17.blend !== m5 && (d17.size = c16 - d17.start, e22 = f12, (d17 = h30[++u29]).texArray = t9, d17.start = c16), this.packInterleavedGeometry(p10, o34, s34, l21, c16), l21 += p10.vertexData.length / 2 * a33, c16 += p10.indices.length, d17.blend = m5;
            }
            e22 < i40 && (d17.size = c16 - d17.start, ++u29), this._dcIndex = u29, this._aIndex = l21, this._iIndex = c16;
        }, r37.prototype.bindAndClearTexArray = function(t9) {
            for(var e22 = this.renderer.texture, r38 = 0; r38 < t9.count; r38++)e22.bind(t9.elements[r38], t9.ids[r38]), t9.elements[r38] = null;
            t9.count = 0;
        }, r37.prototype.updateGeometry = function() {
            var t9 = this._packedGeometries, e22 = this._attributeBuffer, r38 = this._indexBuffer;
            rt.CAN_UPLOAD_SAME_BUFFER ? (t9[this._flushId]._buffer.update(e22.rawBinaryData), t9[this._flushId]._indexBuffer.update(r38), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, t9[this._flushId] = new this.geometryClass), t9[this._flushId]._buffer.update(e22.rawBinaryData), t9[this._flushId]._indexBuffer.update(r38), this.renderer.geometry.bind(t9[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++);
        }, r37.prototype.drawBatches = function() {
            for(var t9 = this._dcIndex, e22 = this.renderer, i40 = e22.gl, n37 = e22.state, o34 = r37._drawCallPool, s34 = null, a33 = 0; a33 < t9; a33++){
                var h30 = o34[a33], u29 = h30.texArray, l21 = h30.type, c16 = h30.size, d17 = h30.start, f12 = h30.blend;
                s34 !== u29 && (s34 = u29, this.bindAndClearTexArray(u29)), this.state.blendMode = f12, n37.set(this.state), i40.drawElements(l21, c16, i40.UNSIGNED_SHORT, 2 * d17);
            }
        }, r37.prototype.flush = function() {
            0 !== this._vertexCount && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0);
        }, r37.prototype.start = function() {
            this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES), this.renderer.shader.bind(this._shader), rt.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
        }, r37.prototype.stop = function() {
            this.flush();
        }, r37.prototype.destroy = function() {
            for(var t9 = 0; t9 < this._packedGeometryPoolSize; t9++)this._packedGeometries[t9] && this._packedGeometries[t9].destroy();
            this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), e18.prototype.destroy.call(this);
        }, r37.prototype.getAttributeBuffer = function(t9) {
            var e22 = be(Math.ceil(t9 / 8)), r38 = xe(e22), i40 = 8 * e22;
            this._aBuffers.length <= r38 && (this._iBuffers.length = r38 + 1);
            var n37 = this._aBuffers[i40];
            return n37 || (this._aBuffers[i40] = n37 = new $n(i40 * this.vertexSize * 4)), n37;
        }, r37.prototype.getIndexBuffer = function(t9) {
            var e22 = be(Math.ceil(t9 / 12)), r38 = xe(e22), i40 = 12 * e22;
            this._iBuffers.length <= r38 && (this._iBuffers.length = r38 + 1);
            var n37 = this._iBuffers[r38];
            return n37 || (this._iBuffers[r38] = n37 = new Uint16Array(i40)), n37;
        }, r37.prototype.packInterleavedGeometry = function(t9, e22, r38, i40, n37) {
            for(var o34 = e22.uint32View, s34 = e22.float32View, a33 = i40 / this.vertexSize, h31 = t9.uvs, u30 = t9.indices, l22 = t9.vertexData, c17 = t9._texture.baseTexture._batchLocation, d18 = Math.min(t9.worldAlpha, 1), f13 = d18 < 1 && t9._texture.baseTexture.alphaMode ? ve(t9._tintRGB, d18) : t9._tintRGB + (255 * d18 << 24), p11 = 0; p11 < l22.length; p11 += 2)s34[i40++] = l22[p11], s34[i40++] = l22[p11 + 1], s34[i40++] = h31[p11], s34[i40++] = h31[p11 + 1], o34[i40++] = f13, s34[i40++] = c17;
            for(p11 = 0; p11 < u30.length; p11++)r38[n37++] = a33 + u30[p11];
        }, r37._drawCallPool = [], r37._textureArrayPool = [], r37;
    }(bi), eo = function() {
        function t9(t10, e18) {
            if (this.vertexSrc = t10, this.fragTemplate = e18, this.programCache = {
            }, this.defaultGroupCache = {
            }, e18.indexOf("%count%") < 0) throw new Error('Fragment template must contain "%count%".');
            if (e18.indexOf("%forloop%") < 0) throw new Error('Fragment template must contain "%forloop%".');
        }
        return t9.prototype.generateShader = function(t10) {
            if (!this.programCache[t10]) {
                for(var e18 = new Int32Array(t10), r37 = 0; r37 < t10; r37++)e18[r37] = r37;
                this.defaultGroupCache[t10] = vi.from({
                    uSamplers: e18
                }, !0);
                var i40 = this.fragTemplate;
                i40 = (i40 = i40.replace(/%count%/gi, "" + t10)).replace(/%forloop%/gi, this.generateSampleSrc(t10)), this.programCache[t10] = new en(this.vertexSrc, i40);
            }
            var n37 = {
                tint: new Float32Array([
                    1,
                    1,
                    1,
                    1
                ]),
                translationMatrix: new Ze,
                default: this.defaultGroupCache[t10]
            };
            return new rn(this.programCache[t10], n37);
        }, t9.prototype.generateSampleSrc = function(t10) {
            var e22 = "";
            e22 += "\n", e22 += "\n";
            for(var r38 = 0; r38 < t10; r38++)r38 > 0 && (e22 += "\nelse "), r38 < t10 - 1 && (e22 += "if(vTextureId < " + r38 + ".5)"), e22 += "\n{", e22 += "\n\tcolor = texture2D(uSamplers[" + r38 + "], vTextureCoord);", e22 += "\n}";
            return (e22 += "\n") + "\n";
        }, t9;
    }(), ro = function(e22) {
        function r38(r39) {
            (void 0) === r39 && (r39 = !1);
            var i41 = e22.call(this) || this;
            return i41._buffer = new hi(null, r39, !1), i41._indexBuffer = new hi(null, r39, !0), i41.addAttribute("aVertexPosition", i41._buffer, 2, !1, t.TYPES.FLOAT).addAttribute("aTextureCoord", i41._buffer, 2, !1, t.TYPES.FLOAT).addAttribute("aColor", i41._buffer, 4, !0, t.TYPES.UNSIGNED_BYTE).addAttribute("aTextureId", i41._buffer, 1, !0, t.TYPES.FLOAT).addIndex(i41._indexBuffer), i41;
        }
        return Lr(r38, e22), r38;
    }(fi), io = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n", no = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n", oo = function() {
        function t9() {
        }
        return t9.create = function(t10) {
            var e22 = Object.assign({
                vertex: io,
                fragment: no,
                geometryClass: ro,
                vertexSize: 6
            }, t10), r38 = e22.vertex, i41 = e22.fragment, n37 = e22.vertexSize, o34 = e22.geometryClass;
            return (function(t11) {
                function e23(e24) {
                    var s34 = t11.call(this, e24) || this;
                    return s34.shaderGenerator = new eo(r38, i41), s34.geometryClass = o34, s34.vertexSize = n37, s34;
                }
                return Lr(e23, t11), e23;
            })(to);
        }, Object.defineProperty(t9, "defaultVertexSrc", {
            get: function() {
                return io;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t9, "defaultFragmentTemplate", {
            get: function() {
                return no;
            },
            enumerable: !1,
            configurable: !0
        }), t9;
    }(), so = oo.create(), ao = {
    }, ho = function(t9) {
        Object.defineProperty(ao, t9, {
            get: function() {
                return Zr[t9];
            }
        });
    };
    for(var uo in Zr)ho(uo);
    var lo = {
    }, co = function(t9) {
        Object.defineProperty(lo, t9, {
            get: function() {
                return kn[t9];
            }
        });
    };
    for(var uo in kn)co(uo);
    var fo = function() {
        function t9(e22) {
            var r38 = this;
            this.stage = new dr, e22 = Object.assign({
                forceCanvas: !1
            }, e22), this.renderer = zn(e22), t9._plugins.forEach(function(t10) {
                t10.init.call(r38, e22);
            });
        }
        return t9.registerPlugin = function(e22) {
            t9._plugins.push(e22);
        }, t9.prototype.render = function() {
            this.renderer.render(this.stage);
        }, Object.defineProperty(t9.prototype, "view", {
            get: function() {
                return this.renderer.view;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t9.prototype, "screen", {
            get: function() {
                return this.renderer.screen;
            },
            enumerable: !1,
            configurable: !0
        }), t9.prototype.destroy = function(e22, r38) {
            var i41 = this, n37 = t9._plugins.slice(0);
            n37.reverse(), n37.forEach(function(t10) {
                t10.destroy.call(i41);
            }), this.stage.destroy(r38), this.stage = null, this.renderer.destroy(e22), this.renderer = null;
        }, t9._plugins = [], t9;
    }(), po = function() {
        function t9() {
        }
        return t9.init = function(t10) {
            var e22 = this;
            Object.defineProperty(this, "resizeTo", {
                set: function(t11) {
                    self.removeEventListener("resize", this.queueResize), this._resizeTo = t11, t11 && (self.addEventListener("resize", this.queueResize), this.resize());
                },
                get: function() {
                    return this._resizeTo;
                }
            }), this.queueResize = function() {
                e22._resizeTo && (e22.cancelResize(), e22._resizeId = requestAnimationFrame(function() {
                    return e22.resize();
                }));
            }, this.cancelResize = function() {
                e22._resizeId && (cancelAnimationFrame(e22._resizeId), e22._resizeId = null);
            }, this.resize = function() {
                if (e22._resizeTo) {
                    var t11, r38;
                    if (e22.cancelResize(), e22._resizeTo === self) t11 = self.innerWidth, r38 = self.innerHeight;
                    else {
                        var i41 = e22._resizeTo;
                        t11 = i41.clientWidth, r38 = i41.clientHeight;
                    }
                    e22.renderer.resize(t11, r38);
                }
            }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t10.resizeTo || null;
        }, t9.destroy = function() {
            self.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null;
        }, t9;
    }();
    fo.registerPlugin(po);
    var _o = new Ye, mo = function() {
        function t9(t10) {
            this.renderer = t10;
        }
        return t9.prototype.image = function(t10, e22, r39) {
            var i42 = new Image;
            return i42.src = this.base64(t10, e22, r39), i42;
        }, t9.prototype.base64 = function(t10, e22, r39) {
            return this.canvas(t10).toDataURL(e22, r39);
        }, t9.prototype.canvas = function(e22) {
            var r39, i42, n37, o34 = this.renderer, s34 = !1, a33 = !1;
            e22 && (e22 instanceof ni ? n37 = e22 : (n37 = this.renderer.generateTexture(e22), a33 = !0)), n37 ? (r39 = n37.baseTexture.resolution, i42 = n37.frame, s34 = !1, o34.renderTexture.bind(n37)) : (r39 = this.renderer.resolution, s34 = !0, (i42 = _o).width = this.renderer.width, i42.height = this.renderer.height, o34.renderTexture.bind(null));
            var h31 = Math.floor(i42.width * r39 + 0.0001), u30 = Math.floor(i42.height * r39 + 0.0001), l22 = new we(h31, u30, 1), c17 = new Uint8Array(4 * h31 * u30), d18 = o34.gl;
            d18.readPixels(i42.x * r39, i42.y * r39, h31, u30, d18.RGBA, d18.UNSIGNED_BYTE, c17);
            var f13 = l22.context.getImageData(0, 0, h31, u30);
            if (t9.arrayPostDivide(c17, f13.data), l22.context.putImageData(f13, 0, 0), s34) {
                var p11 = new we(l22.width, l22.height, 1);
                p11.context.scale(1, -1), p11.context.drawImage(l22.canvas, 0, -u30), l22.destroy(), l22 = p11;
            }
            return a33 && n37.destroy(!0), l22.canvas;
        }, t9.prototype.pixels = function(e22) {
            var r39, i42, n37, o34 = this.renderer, s34 = !1;
            e22 && (e22 instanceof ni ? n37 = e22 : (n37 = this.renderer.generateTexture(e22), s34 = !0)), n37 ? (r39 = n37.baseTexture.resolution, i42 = n37.frame, o34.renderTexture.bind(n37)) : (r39 = o34.resolution, (i42 = _o).width = o34.width, i42.height = o34.height, o34.renderTexture.bind(null));
            var a33 = i42.width * r39, h31 = i42.height * r39, u30 = new Uint8Array(4 * a33 * h31), l22 = o34.gl;
            return l22.readPixels(i42.x * r39, i42.y * r39, a33, h31, l22.RGBA, l22.UNSIGNED_BYTE, u30), s34 && n37.destroy(!0), t9.arrayPostDivide(u30, u30), u30;
        }, t9.prototype.destroy = function() {
            this.renderer = null;
        }, t9.arrayPostDivide = function(t10, e22) {
            for(var r39 = 0; r39 < t10.length; r39 += 4){
                var i42 = e22[r39 + 3] = t10[r39 + 3];
                0 !== i42 ? (e22[r39] = Math.round(Math.min(255 * t10[r39] / i42, 255)), e22[r39 + 1] = Math.round(Math.min(255 * t10[r39 + 1] / i42, 255)), e22[r39 + 2] = Math.round(Math.min(255 * t10[r39 + 2] / i42, 255))) : (e22[r39] = t10[r39], e22[r39 + 1] = t10[r39 + 1], e22[r39 + 2] = t10[r39 + 2]);
            }
        }, t9;
    }(), vo = function() {
        function t9(t10, e22, r39) {
            (void 0) === e22 && (e22 = !1), this._fn = t10, this._once = e22, this._thisArg = r39, this._next = this._prev = this._owner = null;
        }
        return t9.prototype.detach = function() {
            return null !== this._owner && (this._owner.detach(this), !0);
        }, t9;
    }();
    function yo(t9, e22) {
        return t9._head ? (t9._tail._next = e22, e22._prev = t9._tail, t9._tail = e22) : (t9._head = e22, t9._tail = e22), e22._owner = t9, e22;
    }
    var Eo = function() {
        function t9() {
            this._head = this._tail = void 0;
        }
        return t9.prototype.handlers = function(t10) {
            (void 0) === t10 && (t10 = !1);
            var e22 = this._head;
            if (t10) return !!e22;
            for(var r39 = []; e22;)r39.push(e22), e22 = e22._next;
            return r39;
        }, t9.prototype.has = function(t10) {
            if (!(t10 instanceof vo)) throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");
            return t10._owner === this;
        }, t9.prototype.dispatch = function() {
            for(var t10 = arguments, e22 = [], r39 = 0; r39 < arguments.length; r39++)e22[r39] = t10[r39];
            var i43 = this._head;
            if (!i43) return !1;
            for(; i43;)i43._once && this.detach(i43), i43._fn.apply(i43._thisArg, e22), i43 = i43._next;
            return !0;
        }, t9.prototype.add = function(t10, e22) {
            if ((void 0) === e22 && (e22 = null), "function" != typeof t10) throw new Error("MiniSignal#add(): First arg must be a Function.");
            return yo(this, new vo(t10, !1, e22));
        }, t9.prototype.once = function(t10, e22) {
            if ((void 0) === e22 && (e22 = null), "function" != typeof t10) throw new Error("MiniSignal#once(): First arg must be a Function.");
            return yo(this, new vo(t10, !0, e22));
        }, t9.prototype.detach = function(t10) {
            if (!(t10 instanceof vo)) throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");
            return t10._owner !== this ? this : (t10._prev && (t10._prev._next = t10._next), t10._next && (t10._next._prev = t10._prev), t10 === this._head ? (this._head = t10._next, null === t10._next && (this._tail = null)) : t10 === this._tail && (this._tail = t10._prev, this._tail._next = null), t10._owner = null, this);
        }, t9.prototype.detachAll = function() {
            var t10 = this._head;
            if (!t10) return this;
            for(this._head = this._tail = null; t10;)t10._owner = null, t10 = t10._next;
            return this;
        }, t9;
    }();
    function go(t9, e22) {
        e22 = e22 || {
        };
        for(var r39 = {
            key: [
                "source",
                "protocol",
                "authority",
                "userInfo",
                "user",
                "password",
                "host",
                "port",
                "relative",
                "path",
                "directory",
                "file",
                "query",
                "anchor"
            ],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        }, i43 = r39.parser[e22.strictMode ? "strict" : "loose"].exec(t9), n37 = {
        }, o34 = 14; o34--;)n37[r39.key[o34]] = i43[o34] || "";
        return n37[r39.q.name] = {
        }, n37[r39.key[12]].replace(r39.q.parser, function(t10, e23, i44) {
            e23 && (n37[r39.q.name][e23] = i44);
        }), n37;
    }
    var To = !(!self.XDomainRequest || "withCredentials" in new XMLHttpRequest), bo = null;
    function Ro() {
    }
    function xo(t9, e22, r39) {
        e22 && 0 === e22.indexOf(".") && (e22 = e22.substring(1)), e22 && (t9[e22] = r39);
    }
    function Ao(t9) {
        return t9.toString().replace("object ", "");
    }
    function So() {
    }
    function Oo(t9) {
        return function() {
            for(var e22 = arguments, r39 = [], i43 = 0; i43 < arguments.length; i43++)r39[i43] = e22[i43];
            if (null === t9) throw new Error("Callback was already called.");
            var n37 = t9;
            t9 = null, n37.apply(this, r39);
        };
    }
    t.LoaderResource = (function() {
        function t9(e22, r39, i43) {
            if (this._dequeue = Ro, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = null, this._boundOnError = null, this._boundOnProgress = null, this._boundOnTimeout = null, this._boundXhrOnError = null, this._boundXhrOnTimeout = null, this._boundXhrOnAbort = null, this._boundXhrOnLoad = null, "string" != typeof e22 || "string" != typeof r39) throw new Error("Both name and url are required for constructing a resource.");
            i43 = i43 || {
            }, this._flags = 0, this._setFlag(t9.STATUS_FLAGS.DATA_URL, 0 === r39.indexOf("data:")), this.name = e22, this.url = r39, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === i43.crossOrigin ? "anonymous" : i43.crossOrigin, this.timeout = i43.timeout || 0, this.loadType = i43.loadType || this._determineLoadType(), this.xhrType = i43.xhrType, this.metadata = i43.metadata || {
            }, this.error = null, this.xhr = null, this.children = [], this.type = t9.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = Ro, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new Eo, this.onProgress = new Eo, this.onComplete = new Eo, this.onAfterMiddleware = new Eo;
        }
        return t9.setExtensionLoadType = function(e22, r39) {
            xo(t9._loadTypeMap, e22, r39);
        }, t9.setExtensionXhrType = function(e22, r39) {
            xo(t9._xhrTypeMap, e22, r39);
        }, Object.defineProperty(t9.prototype, "isDataUrl", {
            get: function() {
                return this._hasFlag(t9.STATUS_FLAGS.DATA_URL);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t9.prototype, "isComplete", {
            get: function() {
                return this._hasFlag(t9.STATUS_FLAGS.COMPLETE);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t9.prototype, "isLoading", {
            get: function() {
                return this._hasFlag(t9.STATUS_FLAGS.LOADING);
            },
            enumerable: !1,
            configurable: !0
        }), t9.prototype.complete = function() {
            this._clearEvents(), this._finish();
        }, t9.prototype.abort = function(e22) {
            if (!this.error) {
                if (this.error = new Error(e22), this._clearEvents(), this.xhr) this.xhr.abort();
                else if (this.xdr) this.xdr.abort();
                else if (this.data) {
                    if (this.data.src) this.data.src = t9.EMPTY_GIF;
                    else for(; this.data.firstChild;)this.data.removeChild(this.data.firstChild);
                }
                this._finish();
            }
        }, t9.prototype.load = function(e22) {
            var r39 = this;
            if (!this.isLoading) {
                if (this.isComplete) e22 && setTimeout(function() {
                    return e22(r39);
                }, 1);
                else switch(e22 && this.onComplete.once(e22), this._setFlag(t9.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType){
                    case t9.LOAD_TYPE.IMAGE:
                        this.type = t9.TYPE.IMAGE, this._loadElement("image");
                        break;
                    case t9.LOAD_TYPE.AUDIO:
                        this.type = t9.TYPE.AUDIO, this._loadSourceElement("audio");
                        break;
                    case t9.LOAD_TYPE.VIDEO:
                        this.type = t9.TYPE.VIDEO, this._loadSourceElement("video");
                        break;
                    case t9.LOAD_TYPE.XHR:
                    default:
                        To && this.crossOrigin ? this._loadXdr() : this._loadXhr();
                }
            }
        }, t9.prototype._hasFlag = function(t10) {
            return 0 != (this._flags & t10);
        }, t9.prototype._setFlag = function(t10, e22) {
            this._flags = e22 ? this._flags | t10 : this._flags & ~t10;
        }, t9.prototype._clearEvents = function() {
            clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null));
        }, t9.prototype._finish = function() {
            if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
            this._setFlag(t9.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t9.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this);
        }, t9.prototype._loadElement = function(t10) {
            this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t10 && (void 0) !== self.Image ? this.data = new Image : this.data = document.createElement(t10), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout));
        }, t9.prototype._loadSourceElement = function(t10) {
            if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t10 && (void 0) !== self.Audio ? this.data = new Audio : this.data = document.createElement(t10), null !== this.data) {
                if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource) {
                    if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                    else if (Array.isArray(this.url)) for(var e22 = this.metadata.mimeType, r39 = 0; r39 < this.url.length; ++r39)this.data.appendChild(this._createSource(t10, this.url[r39], Array.isArray(e22) ? e22[r39] : e22));
                    else e22 = this.metadata.mimeType, this.data.appendChild(this._createSource(t10, this.url, Array.isArray(e22) ? e22[0] : e22));
                }
                this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout));
            } else this.abort("Unsupported element: " + t10);
        }, t9.prototype._loadXhr = function() {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var e23 = this.xhr = new XMLHttpRequest;
            e23.open("GET", this.url, !0), e23.timeout = this.timeout, this.xhrType === t9.XHR_RESPONSE_TYPE.JSON || this.xhrType === t9.XHR_RESPONSE_TYPE.DOCUMENT ? e23.responseType = t9.XHR_RESPONSE_TYPE.TEXT : e23.responseType = this.xhrType, e23.addEventListener("error", this._boundXhrOnError, !1), e23.addEventListener("timeout", this._boundXhrOnTimeout, !1), e23.addEventListener("abort", this._boundXhrOnAbort, !1), e23.addEventListener("progress", this._boundOnProgress, !1), e23.addEventListener("load", this._boundXhrOnLoad, !1), e23.send();
        }, t9.prototype._loadXdr = function() {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var t10 = this.xhr = new self.XDomainRequest;
            t10.timeout = this.timeout || 5000, t10.onerror = this._boundXhrOnError, t10.ontimeout = this._boundXhrOnTimeout, t10.onprogress = this._boundOnProgress, t10.onload = this._boundXhrOnLoad, t10.open("GET", this.url, !0), setTimeout(function() {
                return t10.send();
            }, 1);
        }, t9.prototype._createSource = function(t10, e23, r40) {
            r40 || (r40 = t10 + "/" + this._getExtension(e23));
            var i43 = document.createElement("source");
            return i43.src = e23, i43.type = r40, i43;
        }, t9.prototype._onError = function(t10) {
            this.abort("Failed to load element using: " + t10.target.nodeName);
        }, t9.prototype._onProgress = function(t10) {
            t10 && t10.lengthComputable && this.onProgress.dispatch(this, t10.loaded / t10.total);
        }, t9.prototype._onTimeout = function() {
            this.abort("Load timed out.");
        }, t9.prototype._xhrOnError = function() {
            var t10 = this.xhr;
            this.abort(Ao(t10) + " Request failed. Status: " + t10.status + ', text: "' + t10.statusText + '"');
        }, t9.prototype._xhrOnTimeout = function() {
            var t10 = this.xhr;
            this.abort(Ao(t10) + " Request timed out.");
        }, t9.prototype._xhrOnAbort = function() {
            var t10 = this.xhr;
            this.abort(Ao(t10) + " Request was aborted by the user.");
        }, t9.prototype._xhrOnLoad = function() {
            var e23 = this.xhr, r40 = "", i43 = (void 0) === e23.status ? 200 : e23.status;
            if ("" !== e23.responseType && "text" !== e23.responseType && (void 0) !== e23.responseType || (r40 = e23.responseText), 0 === i43 && (r40.length > 0 || e23.responseType === t9.XHR_RESPONSE_TYPE.BUFFER) ? i43 = 200 : 1223 === i43 && (i43 = 204), 2 == (i43 / 100 | 0)) {
                if (this.xhrType === t9.XHR_RESPONSE_TYPE.TEXT) this.data = r40, this.type = t9.TYPE.TEXT;
                else if (this.xhrType === t9.XHR_RESPONSE_TYPE.JSON) try {
                    this.data = JSON.parse(r40), this.type = t9.TYPE.JSON;
                } catch (t10) {
                    return void this.abort("Error trying to parse loaded json: " + t10);
                }
                else if (this.xhrType === t9.XHR_RESPONSE_TYPE.DOCUMENT) try {
                    if (self.DOMParser) {
                        var n37 = new DOMParser;
                        this.data = n37.parseFromString(r40, "text/xml");
                    } else {
                        var o34 = document.createElement("div");
                        o34.innerHTML = r40, this.data = o34;
                    }
                    this.type = t9.TYPE.XML;
                } catch (t10) {
                    return void this.abort("Error trying to parse loaded xml: " + t10);
                }
                else this.data = e23.response || r40;
                this.complete();
            } else this.abort("[" + e23.status + "] " + e23.statusText + ": " + e23.responseURL);
        }, t9.prototype._determineCrossOrigin = function(t10, e23) {
            if (0 === t10.indexOf("data:")) return "";
            if (self.origin !== self.location.origin) return "anonymous";
            e23 = e23 || self.location, bo || (bo = document.createElement("a")), bo.href = t10;
            var r40 = go(bo.href, {
                strictMode: !0
            }), i43 = !r40.port && "" === e23.port || r40.port === e23.port, n38 = r40.protocol ? r40.protocol + ":" : "";
            return r40.host === e23.hostname && i43 && n38 === e23.protocol ? "" : "anonymous";
        }, t9.prototype._determineXhrType = function() {
            return t9._xhrTypeMap[this.extension] || t9.XHR_RESPONSE_TYPE.TEXT;
        }, t9.prototype._determineLoadType = function() {
            return t9._loadTypeMap[this.extension] || t9.LOAD_TYPE.XHR;
        }, t9.prototype._getExtension = function(t10) {
            (void 0) === t10 && (t10 = this.url);
            var e23 = "";
            if (this.isDataUrl) {
                var r40 = t10.indexOf("/");
                e23 = t10.substring(r40 + 1, t10.indexOf(";", r40));
            } else {
                var i43 = t10.indexOf("?"), n38 = t10.indexOf("#"), o35 = Math.min(i43 > -1 ? i43 : t10.length, n38 > -1 ? n38 : t10.length);
                e23 = (t10 = t10.substring(0, o35)).substring(t10.lastIndexOf(".") + 1);
            }
            return e23.toLowerCase();
        }, t9.prototype._getMimeFromXhrType = function(e23) {
            switch(e23){
                case t9.XHR_RESPONSE_TYPE.BUFFER:
                    return "application/octet-binary";
                case t9.XHR_RESPONSE_TYPE.BLOB:
                    return "application/blob";
                case t9.XHR_RESPONSE_TYPE.DOCUMENT:
                    return "application/xml";
                case t9.XHR_RESPONSE_TYPE.JSON:
                    return "application/json";
                case t9.XHR_RESPONSE_TYPE.DEFAULT:
                case t9.XHR_RESPONSE_TYPE.TEXT:
                default:
                    return "text/plain";
            }
        }, t9;
    })(), (function(t9) {
        !function(t10) {
            t10[t10.NONE = 0] = "NONE", t10[t10.DATA_URL = 1] = "DATA_URL", t10[t10.COMPLETE = 2] = "COMPLETE", t10[t10.LOADING = 4] = "LOADING";
        }(t9.STATUS_FLAGS || (t9.STATUS_FLAGS = {
        })), (function(t10) {
            t10[t10.UNKNOWN = 0] = "UNKNOWN", t10[t10.JSON = 1] = "JSON", t10[t10.XML = 2] = "XML", t10[t10.IMAGE = 3] = "IMAGE", t10[t10.AUDIO = 4] = "AUDIO", t10[t10.VIDEO = 5] = "VIDEO", t10[t10.TEXT = 6] = "TEXT";
        })(t9.TYPE || (t9.TYPE = {
        })), (function(t10) {
            t10[t10.XHR = 1] = "XHR", t10[t10.IMAGE = 2] = "IMAGE", t10[t10.AUDIO = 3] = "AUDIO", t10[t10.VIDEO = 4] = "VIDEO";
        })(t9.LOAD_TYPE || (t9.LOAD_TYPE = {
        })), (function(t10) {
            t10.DEFAULT = "text", t10.BUFFER = "arraybuffer", t10.BLOB = "blob", t10.DOCUMENT = "document", t10.JSON = "json", t10.TEXT = "text";
        })(t9.XHR_RESPONSE_TYPE || (t9.XHR_RESPONSE_TYPE = {
        })), t9._loadTypeMap = {
            gif: t9.LOAD_TYPE.IMAGE,
            png: t9.LOAD_TYPE.IMAGE,
            bmp: t9.LOAD_TYPE.IMAGE,
            jpg: t9.LOAD_TYPE.IMAGE,
            jpeg: t9.LOAD_TYPE.IMAGE,
            tif: t9.LOAD_TYPE.IMAGE,
            tiff: t9.LOAD_TYPE.IMAGE,
            webp: t9.LOAD_TYPE.IMAGE,
            tga: t9.LOAD_TYPE.IMAGE,
            svg: t9.LOAD_TYPE.IMAGE,
            "svg+xml": t9.LOAD_TYPE.IMAGE,
            mp3: t9.LOAD_TYPE.AUDIO,
            ogg: t9.LOAD_TYPE.AUDIO,
            wav: t9.LOAD_TYPE.AUDIO,
            mp4: t9.LOAD_TYPE.VIDEO,
            webm: t9.LOAD_TYPE.VIDEO
        }, t9._xhrTypeMap = {
            xhtml: t9.XHR_RESPONSE_TYPE.DOCUMENT,
            html: t9.XHR_RESPONSE_TYPE.DOCUMENT,
            htm: t9.XHR_RESPONSE_TYPE.DOCUMENT,
            xml: t9.XHR_RESPONSE_TYPE.DOCUMENT,
            tmx: t9.XHR_RESPONSE_TYPE.DOCUMENT,
            svg: t9.XHR_RESPONSE_TYPE.DOCUMENT,
            tsx: t9.XHR_RESPONSE_TYPE.DOCUMENT,
            gif: t9.XHR_RESPONSE_TYPE.BLOB,
            png: t9.XHR_RESPONSE_TYPE.BLOB,
            bmp: t9.XHR_RESPONSE_TYPE.BLOB,
            jpg: t9.XHR_RESPONSE_TYPE.BLOB,
            jpeg: t9.XHR_RESPONSE_TYPE.BLOB,
            tif: t9.XHR_RESPONSE_TYPE.BLOB,
            tiff: t9.XHR_RESPONSE_TYPE.BLOB,
            webp: t9.XHR_RESPONSE_TYPE.BLOB,
            tga: t9.XHR_RESPONSE_TYPE.BLOB,
            json: t9.XHR_RESPONSE_TYPE.JSON,
            text: t9.XHR_RESPONSE_TYPE.TEXT,
            txt: t9.XHR_RESPONSE_TYPE.TEXT,
            ttf: t9.XHR_RESPONSE_TYPE.BUFFER,
            otf: t9.XHR_RESPONSE_TYPE.BUFFER
        }, t9.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    })(t.LoaderResource || (t.LoaderResource = {
    }));
    var Io = function(t9, e23) {
        this.data = t9, this.callback = e23;
    }, Po = function() {
        function t9(t10, e23) {
            var r41 = this;
            if ((void 0) === e23 && (e23 = 1), this.workers = 0, this.saturated = So, this.unsaturated = So, this.empty = So, this.drain = So, this.error = So, this.started = !1, this.paused = !1, this._tasks = [], this._insert = function(t12, e24, i44) {
                if (i44 && "function" != typeof i44) throw new Error("task callback must be a function");
                if (r41.started = !0, null == t12 && r41.idle()) setTimeout(function() {
                    return r41.drain();
                }, 1);
                else {
                    var n39 = new Io(t12, "function" == typeof i44 ? i44 : So);
                    e24 ? r41._tasks.unshift(n39) : r41._tasks.push(n39), setTimeout(r41.process, 1);
                }
            }, this.process = function() {
                for(; !r41.paused && r41.workers < r41.concurrency && r41._tasks.length;){
                    var t12 = r41._tasks.shift();
                    0 === r41._tasks.length && r41.empty(), r41.workers += 1, r41.workers === r41.concurrency && r41.saturated(), r41._worker(t12.data, Oo(r41._next(t12)));
                }
            }, this._worker = t10, 0 === e23) throw new Error("Concurrency must not be zero");
            this.concurrency = e23, this.buffer = e23 / 4;
        }
        return t9.prototype._next = function(t10) {
            var e23 = this;
            return function() {
                for(var r41 = arguments, i44 = [], n40 = 0; n40 < arguments.length; n40++)i44[n40] = r41[n40];
                e23.workers -= 1, t10.callback.apply(t10, i44), null != i44[0] && e23.error(i44[0], t10.data), e23.workers <= e23.concurrency - e23.buffer && e23.unsaturated(), e23.idle() && e23.drain(), e23.process();
            };
        }, t9.prototype.push = function(t10, e23) {
            this._insert(t10, !1, e23);
        }, t9.prototype.kill = function() {
            this.workers = 0, this.drain = So, this.started = !1, this._tasks = [];
        }, t9.prototype.unshift = function(t10, e23) {
            this._insert(t10, !0, e23);
        }, t9.prototype.length = function() {
            return this._tasks.length;
        }, t9.prototype.running = function() {
            return this.workers;
        }, t9.prototype.idle = function() {
            return this._tasks.length + this.workers === 0;
        }, t9.prototype.pause = function() {
            !0 !== this.paused && (this.paused = !0);
        }, t9.prototype.resume = function() {
            if (!1 !== this.paused) {
                this.paused = !1;
                for(var t10 = 1; t10 <= this.concurrency; t10++)this.process();
            }
        }, t9.eachSeries = function(t13, e23, r41, i44) {
            var n40 = 0, o36 = t13.length;
            !function s34(a33) {
                a33 || n40 === o36 ? r41 && r41(a33) : i44 ? setTimeout(function() {
                    e23(t13[n40++], s34);
                }, 1) : e23(t13[n40++], s34);
            }();
        }, t9.queue = function(e23, r41) {
            return new t9(e23, r41);
        }, t9;
    }(), Mo = /(#[\w-]+)?$/, Do = function() {
        function e23(t9, r41) {
            var i44 = this;
            (void 0) === t9 && (t9 = ""), (void 0) === r41 && (r41 = 10), this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t13, e24) {
                return i44._loadResource(t13, e24);
            }, this.resources = {
            }, this.baseUrl = t9, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t13, e24) {
                return i44._loadResource(t13, e24);
            }, this._queue = Po.queue(this._boundLoadResource, r41), this._queue.pause(), this.resources = {
            }, this.onProgress = new Eo, this.onError = new Eo, this.onLoad = new Eo, this.onStart = new Eo, this.onComplete = new Eo;
            for(var n40 = 0; n40 < e23._plugins.length; ++n40){
                var o36 = e23._plugins[n40], s34 = o36.pre, a33 = o36.use;
                s34 && this.pre(s34), a33 && this.use(a33);
            }
            this._protected = !1;
        }
        return e23.prototype._add = function(e24, r41, i44, n40) {
            if (this.loading && (!i44 || !i44.parentResource)) throw new Error("Cannot add resources while the loader is running.");
            if (this.resources[e24]) throw new Error('Resource named "' + e24 + '" already exists.');
            if (r41 = this._prepareUrl(r41), this.resources[e24] = new t.LoaderResource(e24, r41, i44), "function" == typeof n40 && this.resources[e24].onAfterMiddleware.once(n40), this.loading) {
                for(var o37 = i44.parentResource, s35 = [], a34 = 0; a34 < o37.children.length; ++a34)o37.children[a34].isComplete || s35.push(o37.children[a34]);
                var h31 = o37.progressChunk * (s35.length + 1) / (s35.length + 2);
                for(o37.children.push(this.resources[e24]), o37.progressChunk = h31, a34 = 0; a34 < s35.length; ++a34)s35[a34].progressChunk = h31;
                this.resources[e24].progressChunk = h31;
            }
            return this._queue.push(this.resources[e24]), this;
        }, e23.prototype.pre = function(t9) {
            return this._beforeMiddleware.push(t9), this;
        }, e23.prototype.use = function(t9) {
            return this._afterMiddleware.push(t9), this;
        }, e23.prototype.reset = function() {
            for(var t9 in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources){
                var e24 = this.resources[t9];
                e24._onLoadBinding && e24._onLoadBinding.detach(), e24.isLoading && e24.abort("loader reset");
            }
            return this.resources = {
            }, this;
        }, e23.prototype.load = function(t9) {
            if ("function" == typeof t9 && this.onComplete.once(t9), this.loading) return this;
            if (this._queue.idle()) this._onStart(), this._onComplete();
            else {
                for(var e25 = 100 / this._queue._tasks.length, r41 = 0; r41 < this._queue._tasks.length; ++r41)this._queue._tasks[r41].data.progressChunk = e25;
                this._onStart(), this._queue.resume();
            }
            return this;
        }, Object.defineProperty(e23.prototype, "concurrency", {
            get: function() {
                return this._queue.concurrency;
            },
            set: function(t9) {
                this._queue.concurrency = t9;
            },
            enumerable: !1,
            configurable: !0
        }), e23.prototype._prepareUrl = function(t9) {
            var e26, r42 = go(t9, {
                strictMode: !0
            });
            if (e26 = r42.protocol || !r42.path || 0 === t9.indexOf("//") ? t9 : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t9.charAt(0) ? this.baseUrl + "/" + t9 : this.baseUrl + t9, this.defaultQueryString) {
                var i44 = Mo.exec(e26)[0];
                -1 !== (e26 = e26.substr(0, e26.length - i44.length)).indexOf("?") ? e26 += "&" + this.defaultQueryString : e26 += "?" + this.defaultQueryString, e26 += i44;
            }
            return e26;
        }, e23.prototype._loadResource = function(t9, e26) {
            var r42 = this;
            t9._dequeue = e26, Po.eachSeries(this._beforeMiddleware, function(e27, i45) {
                e27.call(r42, t9, function() {
                    i45(t9.isComplete ? {
                    } : null);
                });
            }, function() {
                t9.isComplete ? r42._onLoad(t9) : (t9._onLoadBinding = t9.onComplete.once(r42._onLoad, r42), t9.load());
            }, !0);
        }, e23.prototype._onStart = function() {
            this.progress = 0, this.loading = !0, this.onStart.dispatch(this);
        }, e23.prototype._onComplete = function() {
            this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources);
        }, e23.prototype._onLoad = function(t9) {
            var e26 = this;
            t9._onLoadBinding = null, this._resourcesParsing.push(t9), t9._dequeue(), Po.eachSeries(this._afterMiddleware, function(r42, i45) {
                r42.call(e26, t9, i45);
            }, function() {
                t9.onAfterMiddleware.dispatch(t9), e26.progress = Math.min(100, e26.progress + t9.progressChunk), e26.onProgress.dispatch(e26, t9), t9.error ? e26.onError.dispatch(t9.error, e26, t9) : e26.onLoad.dispatch(e26, t9), e26._resourcesParsing.splice(e26._resourcesParsing.indexOf(t9), 1), e26._queue.idle() && 0 === e26._resourcesParsing.length && e26._onComplete();
            }, !0);
        }, e23.prototype.destroy = function() {
            this._protected || this.reset();
        }, Object.defineProperty(e23, "shared", {
            get: function() {
                var t9 = e23._shared;
                return t9 || ((t9 = new e23)._protected = !0, e23._shared = t9), t9;
            },
            enumerable: !1,
            configurable: !0
        }), e23.registerPlugin = function(t9) {
            return e23._plugins.push(t9), t9.add && t9.add(), e23;
        }, e23._plugins = [], e23;
    }();
    Do.prototype.add = function(t9, e23, r42, i45) {
        if (Array.isArray(t9)) {
            for(var n40 = 0; n40 < t9.length; ++n40)this.add(t9[n40]);
            return this;
        }
        if ("object" == typeof t9 && (r42 = t9, i45 = e23 || r42.callback || r42.onComplete, e23 = r42.url, t9 = r42.name || r42.key || r42.url), "string" != typeof e23 && (i45 = r42, r42 = e23, e23 = t9), "string" != typeof e23) throw new Error("No url passed to add resource to loader.");
        return "function" == typeof r42 && (i45 = r42, r42 = null), this._add(t9, e23, r42, i45);
    };
    var No, wo = function() {
        function t9() {
        }
        return t9.init = function(t13) {
            t13 = Object.assign({
                sharedLoader: !1
            }, t13), this.loader = t13.sharedLoader ? Do.shared : new Do;
        }, t9.destroy = function() {
            this.loader && (this.loader.destroy(), this.loader = null);
        }, t9;
    }(), Co = function() {
        function e23() {
        }
        return e23.add = function() {
            t.LoaderResource.setExtensionLoadType("svg", t.LoaderResource.LOAD_TYPE.XHR), t.LoaderResource.setExtensionXhrType("svg", t.LoaderResource.XHR_RESPONSE_TYPE.TEXT);
        }, e23.use = function(e26, r42) {
            if (!e26.data || e26.type !== t.LoaderResource.TYPE.IMAGE && "svg" !== e26.extension) r42();
            else {
                var i45 = e26.data, n41 = e26.url, o38 = e26.name, s36 = e26.metadata;
                ri.fromLoader(i45, n41, o38, s36).then(function(t9) {
                    e26.texture = t9, r42();
                }).catch(r42);
            }
        }, e23;
    }(), Lo = self.URL || self.webkitURL;
    Do.registerPlugin({
        use: function(e23, r42) {
            if (e23.data) {
                if (e23.xhr && e23.xhrType === t.LoaderResource.XHR_RESPONSE_TYPE.BLOB) {
                    if (self.Blob && "string" != typeof e23.data) {
                        if (0 === e23.data.type.indexOf("image")) {
                            var i46 = Lo.createObjectURL(e23.data);
                            return e23.blob = e23.data, e23.data = new Image, e23.data.src = i46, e23.type = t.LoaderResource.TYPE.IMAGE, void (e23.data.onload = function() {
                                Lo.revokeObjectURL(i46), e23.data.onload = null, r42();
                            });
                        }
                    } else {
                        var n42 = e23.xhr.getResponseHeader("content-type");
                        if (n42 && 0 === n42.indexOf("image")) return e23.data = new Image, e23.data.src = "data:" + n42 + ";base64," + (function(t9) {
                            for(var e26 = "", r43 = 0; r43 < t9.length;){
                                for(var i47 = [
                                    0,
                                    0,
                                    0
                                ], n43 = [
                                    0,
                                    0,
                                    0,
                                    0
                                ], o39 = 0; o39 < i47.length; ++o39)r43 < t9.length ? i47[o39] = 255 & t9.charCodeAt(r43++) : i47[o39] = 0;
                                switch(n43[0] = i47[0] >> 2, n43[1] = (3 & i47[0]) << 4 | i47[1] >> 4, n43[2] = (15 & i47[1]) << 2 | i47[2] >> 6, n43[3] = 63 & i47[2], r43 - (t9.length - 1)){
                                    case 2:
                                        n43[3] = 64, n43[2] = 64;
                                        break;
                                    case 1:
                                        n43[3] = 64;
                                }
                                for(o39 = 0; o39 < n43.length; ++o39)e26 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n43[o39]);
                            }
                            return e26;
                        })(e23.xhr.responseText), e23.type = t.LoaderResource.TYPE.IMAGE, void (e23.data.onload = function() {
                            e23.data.onload = null, r42();
                        });
                    }
                }
                r42();
            } else r42();
        }
    }), Do.registerPlugin(Co), (function(t9) {
        t9[t9.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", t9[t9.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", t9[t9.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", t9[t9.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", t9[t9.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", t9[t9.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", t9[t9.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", t9[t9.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", t9[t9.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", t9[t9.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", t9[t9.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", t9[t9.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", t9[t9.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", t9[t9.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", t9[t9.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", t9[t9.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", t9[t9.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", t9[t9.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", t9[t9.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", t9[t9.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", t9[t9.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", t9[t9.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", t9[t9.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", t9[t9.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", t9[t9.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", t9[t9.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL";
    })(t.INTERNAL_FORMATS || (t.INTERNAL_FORMATS = {
    }));
    var Fo = ((No = {
    })[t.INTERNAL_FORMATS.COMPRESSED_RGB_S3TC_DXT1_EXT] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT] = 1, No[t.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT] = 1, No[t.INTERNAL_FORMATS.COMPRESSED_SRGB_S3TC_DXT1_EXT] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = 1, No[t.INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = 1, No[t.INTERNAL_FORMATS.COMPRESSED_R11_EAC] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_SIGNED_R11_EAC] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_RG11_EAC] = 1, No[t.INTERNAL_FORMATS.COMPRESSED_SIGNED_RG11_EAC] = 1, No[t.INTERNAL_FORMATS.COMPRESSED_RGB8_ETC2] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_RGBA8_ETC2_EAC] = 1, No[t.INTERNAL_FORMATS.COMPRESSED_SRGB8_ETC2] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = 1, No[t.INTERNAL_FORMATS.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = 0.25, No[t.INTERNAL_FORMATS.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = 0.25, No[t.INTERNAL_FORMATS.COMPRESSED_RGB_ETC1_WEBGL] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_RGB_ATC_WEBGL] = 0.5, No[t.INTERNAL_FORMATS.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = 1, No[t.INTERNAL_FORMATS.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = 1, No), Uo = function(t9, e23) {
        return (Uo = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t13, e26) {
            t13.__proto__ = e26;
        } || function(t13, e26) {
            for(var r42 in e26)e26.hasOwnProperty(r42) && (t13[r42] = e26[r42]);
        })(t9, e23);
    };
    function Bo(t9, e23) {
        function r42() {
            this.constructor = t9;
        }
        Uo(t9, e23), t9.prototype = null === e23 ? Object.create(e23) : (r42.prototype = e23.prototype, new r42);
    }
    var Go, Xo, ko = function(t9) {
        function e23(e26, r42) {
            (void 0) === r42 && (r42 = {
                width: 1,
                height: 1,
                autoLoad: !0
            });
            var i48, n44, o40 = this;
            return "string" == typeof e26 ? (i48 = e26, n44 = new Uint8Array) : (i48 = null, n44 = e26), (o40 = t9.call(this, n44, r42) || this).origin = i48, o40.buffer = n44 ? new $n(n44) : null, o40.origin && !1 !== r42.autoLoad && o40.load(), n44 && n44.length && (o40.loaded = !0, o40.onBlobLoaded(o40.buffer.rawBinaryData)), o40;
        }
        return Bo(e23, t9), e23.prototype.onBlobLoaded = function(t13) {
        }, e23.prototype.load = function() {
            var t13, e26, r42;
            return t13 = this, e26 = Promise, r42 = function() {
                var t14;
                return (function(t15, e27) {
                    var r43, i48, n44, o40, s37 = {
                        label: 0,
                        sent: function() {
                            if (1 & n44[0]) throw n44[1];
                            return n44[1];
                        },
                        trys: [],
                        ops: []
                    };
                    function a35(o41) {
                        return function(a36) {
                            return (function(o42) {
                                if (r43) throw new TypeError("Generator is already executing.");
                                for(; s37;)try {
                                    if (r43 = 1, i48 && (n44 = 2 & o42[0] ? i48.return : o42[0] ? i48.throw || ((n44 = i48.return) && n44.call(i48), 0) : i48.next) && !(n44 = n44.call(i48, o42[1])).done) return n44;
                                    switch(i48 = 0, n44 && (o42 = [
                                        2 & o42[0],
                                        n44.value
                                    ]), o42[0]){
                                        case 0:
                                        case 1:
                                            n44 = o42;
                                            break;
                                        case 4:
                                            return s37.label++, {
                                                value: o42[1],
                                                done: !1
                                            };
                                        case 5:
                                            s37.label++, i48 = o42[1], o42 = [
                                                0
                                            ];
                                            continue;
                                        case 7:
                                            o42 = s37.ops.pop(), s37.trys.pop();
                                            continue;
                                        default:
                                            if (!(n44 = (n44 = s37.trys).length > 0 && n44[n44.length - 1]) && (6 === o42[0] || 2 === o42[0])) {
                                                s37 = 0;
                                                continue;
                                            }
                                            if (3 === o42[0] && (!n44 || o42[1] > n44[0] && o42[1] < n44[3])) {
                                                s37.label = o42[1];
                                                break;
                                            }
                                            if (6 === o42[0] && s37.label < n44[1]) {
                                                s37.label = n44[1], n44 = o42;
                                                break;
                                            }
                                            if (n44 && s37.label < n44[2]) {
                                                s37.label = n44[2], s37.ops.push(o42);
                                                break;
                                            }
                                            n44[2] && s37.ops.pop(), s37.trys.pop();
                                            continue;
                                    }
                                    o42 = e27.call(t15, s37);
                                } catch (t16) {
                                    o42 = [
                                        6,
                                        t16
                                    ], i48 = 0;
                                } finally{
                                    r43 = n44 = 0;
                                }
                                if (5 & o42[0]) throw o42[1];
                                return {
                                    value: o42[0] ? o42[1] : void 0,
                                    done: !0
                                };
                            })([
                                o41,
                                a36
                            ]);
                        };
                    }
                    return o40 = {
                        next: a35(0),
                        throw: a35(1),
                        return: a35(2)
                    }, "function" == typeof Symbol && (o40[Symbol.iterator] = function() {
                        return this;
                    }), o40;
                })(this, function(e27) {
                    switch(e27.label){
                        case 0:
                            return [
                                4,
                                fetch(this.origin)
                            ];
                        case 1:
                            return [
                                4,
                                e27.sent().blob()
                            ];
                        case 2:
                            return [
                                4,
                                e27.sent().arrayBuffer()
                            ];
                        case 3:
                            return t14 = e27.sent(), this.data = new Uint32Array(t14), this.buffer = new $n(t14), this.loaded = !0, this.onBlobLoaded(t14), this.update(), [
                                2,
                                this
                            ];
                    }
                });
            }, new (e26 || (e26 = Promise))(function(i48, n44) {
                function o40(t14) {
                    try {
                        a36(r42.next(t14));
                    } catch (t15) {
                        n44(t15);
                    }
                }
                function s37(t14) {
                    try {
                        a36(r42.throw(t14));
                    } catch (t15) {
                        n44(t15);
                    }
                }
                function a36(t14) {
                    t14.done ? i48(t14.value) : new e26(function(e27) {
                        e27(t14.value);
                    }).then(o40, s37);
                }
                a36((r42 = r42.apply(t13, [])).next());
            });
        }, e23;
    }(Br), Ho = function(t9) {
        function e23(r42, i48) {
            var n44 = t9.call(this, r42, i48) || this;
            return n44.format = i48.format, n44.levels = i48.levels || 1, n44._width = i48.width, n44._height = i48.height, n44._extension = e23._formatToExtension(n44.format), (i48.levelBuffers || n44.buffer) && (n44._levelBuffers = i48.levelBuffers || e23._createLevelBuffers(r42 instanceof Uint8Array ? r42 : n44.buffer.uint8View, n44.format, n44.levels, 4, 4, n44.width, n44.height)), n44;
        }
        return Bo(e23, t9), e23.prototype.upload = function(t13, e26, r42) {
            var i48 = t13.gl;
            if (!t13.context.extensions[this._extension]) throw new Error(this._extension + " textures are not supported on the current machine");
            if (!this._levelBuffers) return !1;
            for(var n44 = 0, o40 = this.levels; n44 < o40; n44++){
                var s37 = this._levelBuffers[n44], a36 = s37.levelID, h32 = s37.levelWidth, u30 = s37.levelHeight, l22 = s37.levelBuffer;
                i48.compressedTexImage2D(i48.TEXTURE_2D, a36, this.format, h32, u30, 0, l22);
            }
            return !0;
        }, e23.prototype.onBlobLoaded = function() {
            this._levelBuffers = e23._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height);
        }, e23._formatToExtension = function(t13) {
            if (t13 >= 33776 && t13 <= 33779) return "s3tc";
            if (t13 >= 37488 && t13 <= 37497) return "etc";
            if (t13 >= 35840 && t13 <= 35843) return "pvrtc";
            if (t13 >= 36196) return "etc1";
            if (t13 >= 35986 && t13 <= 34798) return "atc";
            throw new Error("Invalid (compressed) texture format given!");
        }, e23._createLevelBuffers = function(t13, e26, r42, i48, n44, o40, s38) {
            for(var a37 = new Array(r42), h33 = t13.byteOffset, u31 = o40, l23 = s38, c17 = u31 + i48 - 1 & ~(i48 - 1), d18 = l23 + n44 - 1 & ~(n44 - 1), f13 = c17 * d18 * Fo[e26], p12 = 0; p12 < r42; p12++)a37[p12] = {
                levelID: p12,
                levelWidth: r42 > 1 ? u31 : c17,
                levelHeight: r42 > 1 ? l23 : d18,
                levelBuffer: new Uint8Array(t13.buffer, h33, f13)
            }, h33 += f13, f13 = (c17 = (u31 = u31 >> 1 || 1) + i48 - 1 & ~(i48 - 1)) * (d18 = (l23 = l23 >> 1 || 1) + n44 - 1 & ~(n44 - 1)) * Fo[e26];
            return a37;
        }, e23;
    }(ko), Yo = function() {
        function e23() {
        }
        return e23.use = function(r42, i48) {
            var n44 = r42.data;
            if (r42.type === t.LoaderResource.TYPE.JSON && n44 && n44.cacheID && n44.textures) {
                for(var o40 = n44.textures, s38 = void 0, a37 = void 0, h33 = 0, u31 = o40.length; h33 < u31; h33++){
                    var l23 = o40[h33], c17 = l23.src, d18 = l23.format;
                    if (d18 || (a37 = c17), e23.textureFormats[d18]) {
                        s38 = c17;
                        break;
                    }
                }
                if (!(s38 = s38 || a37)) return void i48(new Error("Cannot load compressed-textures in " + r42.url + ", make sure you provide a fallback"));
                if (s38 === r42.url) return void i48(new Error("URL of compressed texture cannot be the same as the manifest's URL"));
                var f13 = {
                    crossOrigin: r42.crossOrigin,
                    metadata: r42.metadata.imageMetadata,
                    parentResource: r42
                }, p12 = ne.resolve(r42.url.replace(this.baseUrl, ""), s38), _ = n44.cacheID;
                this.add(_, p12, f13, function(t9) {
                    if (t9.error) i48(t9.error);
                    else {
                        var e26 = t9.texture, n45 = (void 0) === e26 ? null : e26, o41 = t9.textures, s39 = (void 0) === o41 ? {
                        } : o41;
                        Object.assign(r42, {
                            texture: n45,
                            textures: s39
                        }), i48();
                    }
                });
            } else i48();
        }, e23.add = function() {
            var t9 = document.createElement("canvas").getContext("webgl");
            if (t9) {
                var r42 = {
                    s3tc: t9.getExtension("WEBGL_compressed_texture_s3tc"),
                    s3tc_sRGB: t9.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                    etc: t9.getExtension("WEBGL_compressed_texture_etc"),
                    etc1: t9.getExtension("WEBGL_compressed_texture_etc1"),
                    pvrtc: t9.getExtension("WEBGL_compressed_texture_pvrtc") || t9.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                    atc: t9.getExtension("WEBGL_compressed_texture_atc"),
                    astc: t9.getExtension("WEBGL_compressed_texture_astc")
                };
                for(var i48 in e23.textureExtensions = r42, e23.textureFormats = {
                }, r42){
                    var n44 = r42[i48];
                    n44 && Object.assign(e23.textureFormats, Object.getPrototypeOf(n44));
                }
            }
        }, e23;
    }();
    function jo(e23, r43, i49) {
        var n46 = {
            textures: {
            },
            texture: null
        };
        return r43 ? (r43.map(function(e27) {
            return new ri(new Xr(e27, Object.assign({
                mipmap: t.MIPMAP_MODES.OFF,
                alphaMode: t.ALPHA_MODES.NO_PREMULTIPLIED_ALPHA
            }, i49)));
        }).forEach(function(t9, r44) {
            var i50 = t9.baseTexture, o42 = e23 + "-" + (r44 + 1);
            Xr.addToCache(i50, o42), ri.addToCache(t9, o42), 0 === r44 && (Xr.addToCache(i50, e23), ri.addToCache(t9, e23), n46.texture = t9), n46.textures[o42] = t9;
        }), n46) : n46;
    }
    t.LoaderResource.setExtensionXhrType("dds", t.LoaderResource.XHR_RESPONSE_TYPE.BUFFER);
    var Vo, Wo;
    !function(t9) {
        t9[t9.DXGI_FORMAT_UNKNOWN = 0] = "DXGI_FORMAT_UNKNOWN", t9[t9.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1] = "DXGI_FORMAT_R32G32B32A32_TYPELESS", t9[t9.DXGI_FORMAT_R32G32B32A32_FLOAT = 2] = "DXGI_FORMAT_R32G32B32A32_FLOAT", t9[t9.DXGI_FORMAT_R32G32B32A32_UINT = 3] = "DXGI_FORMAT_R32G32B32A32_UINT", t9[t9.DXGI_FORMAT_R32G32B32A32_SINT = 4] = "DXGI_FORMAT_R32G32B32A32_SINT", t9[t9.DXGI_FORMAT_R32G32B32_TYPELESS = 5] = "DXGI_FORMAT_R32G32B32_TYPELESS", t9[t9.DXGI_FORMAT_R32G32B32_FLOAT = 6] = "DXGI_FORMAT_R32G32B32_FLOAT", t9[t9.DXGI_FORMAT_R32G32B32_UINT = 7] = "DXGI_FORMAT_R32G32B32_UINT", t9[t9.DXGI_FORMAT_R32G32B32_SINT = 8] = "DXGI_FORMAT_R32G32B32_SINT", t9[t9.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9] = "DXGI_FORMAT_R16G16B16A16_TYPELESS", t9[t9.DXGI_FORMAT_R16G16B16A16_FLOAT = 10] = "DXGI_FORMAT_R16G16B16A16_FLOAT", t9[t9.DXGI_FORMAT_R16G16B16A16_UNORM = 11] = "DXGI_FORMAT_R16G16B16A16_UNORM", t9[t9.DXGI_FORMAT_R16G16B16A16_UINT = 12] = "DXGI_FORMAT_R16G16B16A16_UINT", t9[t9.DXGI_FORMAT_R16G16B16A16_SNORM = 13] = "DXGI_FORMAT_R16G16B16A16_SNORM", t9[t9.DXGI_FORMAT_R16G16B16A16_SINT = 14] = "DXGI_FORMAT_R16G16B16A16_SINT", t9[t9.DXGI_FORMAT_R32G32_TYPELESS = 15] = "DXGI_FORMAT_R32G32_TYPELESS", t9[t9.DXGI_FORMAT_R32G32_FLOAT = 16] = "DXGI_FORMAT_R32G32_FLOAT", t9[t9.DXGI_FORMAT_R32G32_UINT = 17] = "DXGI_FORMAT_R32G32_UINT", t9[t9.DXGI_FORMAT_R32G32_SINT = 18] = "DXGI_FORMAT_R32G32_SINT", t9[t9.DXGI_FORMAT_R32G8X24_TYPELESS = 19] = "DXGI_FORMAT_R32G8X24_TYPELESS", t9[t9.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20] = "DXGI_FORMAT_D32_FLOAT_S8X24_UINT", t9[t9.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21] = "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS", t9[t9.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22] = "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT", t9[t9.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23] = "DXGI_FORMAT_R10G10B10A2_TYPELESS", t9[t9.DXGI_FORMAT_R10G10B10A2_UNORM = 24] = "DXGI_FORMAT_R10G10B10A2_UNORM", t9[t9.DXGI_FORMAT_R10G10B10A2_UINT = 25] = "DXGI_FORMAT_R10G10B10A2_UINT", t9[t9.DXGI_FORMAT_R11G11B10_FLOAT = 26] = "DXGI_FORMAT_R11G11B10_FLOAT", t9[t9.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27] = "DXGI_FORMAT_R8G8B8A8_TYPELESS", t9[t9.DXGI_FORMAT_R8G8B8A8_UNORM = 28] = "DXGI_FORMAT_R8G8B8A8_UNORM", t9[t9.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29] = "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB", t9[t9.DXGI_FORMAT_R8G8B8A8_UINT = 30] = "DXGI_FORMAT_R8G8B8A8_UINT", t9[t9.DXGI_FORMAT_R8G8B8A8_SNORM = 31] = "DXGI_FORMAT_R8G8B8A8_SNORM", t9[t9.DXGI_FORMAT_R8G8B8A8_SINT = 32] = "DXGI_FORMAT_R8G8B8A8_SINT", t9[t9.DXGI_FORMAT_R16G16_TYPELESS = 33] = "DXGI_FORMAT_R16G16_TYPELESS", t9[t9.DXGI_FORMAT_R16G16_FLOAT = 34] = "DXGI_FORMAT_R16G16_FLOAT", t9[t9.DXGI_FORMAT_R16G16_UNORM = 35] = "DXGI_FORMAT_R16G16_UNORM", t9[t9.DXGI_FORMAT_R16G16_UINT = 36] = "DXGI_FORMAT_R16G16_UINT", t9[t9.DXGI_FORMAT_R16G16_SNORM = 37] = "DXGI_FORMAT_R16G16_SNORM", t9[t9.DXGI_FORMAT_R16G16_SINT = 38] = "DXGI_FORMAT_R16G16_SINT", t9[t9.DXGI_FORMAT_R32_TYPELESS = 39] = "DXGI_FORMAT_R32_TYPELESS", t9[t9.DXGI_FORMAT_D32_FLOAT = 40] = "DXGI_FORMAT_D32_FLOAT", t9[t9.DXGI_FORMAT_R32_FLOAT = 41] = "DXGI_FORMAT_R32_FLOAT", t9[t9.DXGI_FORMAT_R32_UINT = 42] = "DXGI_FORMAT_R32_UINT", t9[t9.DXGI_FORMAT_R32_SINT = 43] = "DXGI_FORMAT_R32_SINT", t9[t9.DXGI_FORMAT_R24G8_TYPELESS = 44] = "DXGI_FORMAT_R24G8_TYPELESS", t9[t9.DXGI_FORMAT_D24_UNORM_S8_UINT = 45] = "DXGI_FORMAT_D24_UNORM_S8_UINT", t9[t9.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46] = "DXGI_FORMAT_R24_UNORM_X8_TYPELESS", t9[t9.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47] = "DXGI_FORMAT_X24_TYPELESS_G8_UINT", t9[t9.DXGI_FORMAT_R8G8_TYPELESS = 48] = "DXGI_FORMAT_R8G8_TYPELESS", t9[t9.DXGI_FORMAT_R8G8_UNORM = 49] = "DXGI_FORMAT_R8G8_UNORM", t9[t9.DXGI_FORMAT_R8G8_UINT = 50] = "DXGI_FORMAT_R8G8_UINT", t9[t9.DXGI_FORMAT_R8G8_SNORM = 51] = "DXGI_FORMAT_R8G8_SNORM", t9[t9.DXGI_FORMAT_R8G8_SINT = 52] = "DXGI_FORMAT_R8G8_SINT", t9[t9.DXGI_FORMAT_R16_TYPELESS = 53] = "DXGI_FORMAT_R16_TYPELESS", t9[t9.DXGI_FORMAT_R16_FLOAT = 54] = "DXGI_FORMAT_R16_FLOAT", t9[t9.DXGI_FORMAT_D16_UNORM = 55] = "DXGI_FORMAT_D16_UNORM", t9[t9.DXGI_FORMAT_R16_UNORM = 56] = "DXGI_FORMAT_R16_UNORM", t9[t9.DXGI_FORMAT_R16_UINT = 57] = "DXGI_FORMAT_R16_UINT", t9[t9.DXGI_FORMAT_R16_SNORM = 58] = "DXGI_FORMAT_R16_SNORM", t9[t9.DXGI_FORMAT_R16_SINT = 59] = "DXGI_FORMAT_R16_SINT", t9[t9.DXGI_FORMAT_R8_TYPELESS = 60] = "DXGI_FORMAT_R8_TYPELESS", t9[t9.DXGI_FORMAT_R8_UNORM = 61] = "DXGI_FORMAT_R8_UNORM", t9[t9.DXGI_FORMAT_R8_UINT = 62] = "DXGI_FORMAT_R8_UINT", t9[t9.DXGI_FORMAT_R8_SNORM = 63] = "DXGI_FORMAT_R8_SNORM", t9[t9.DXGI_FORMAT_R8_SINT = 64] = "DXGI_FORMAT_R8_SINT", t9[t9.DXGI_FORMAT_A8_UNORM = 65] = "DXGI_FORMAT_A8_UNORM", t9[t9.DXGI_FORMAT_R1_UNORM = 66] = "DXGI_FORMAT_R1_UNORM", t9[t9.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67] = "DXGI_FORMAT_R9G9B9E5_SHAREDEXP", t9[t9.DXGI_FORMAT_R8G8_B8G8_UNORM = 68] = "DXGI_FORMAT_R8G8_B8G8_UNORM", t9[t9.DXGI_FORMAT_G8R8_G8B8_UNORM = 69] = "DXGI_FORMAT_G8R8_G8B8_UNORM", t9[t9.DXGI_FORMAT_BC1_TYPELESS = 70] = "DXGI_FORMAT_BC1_TYPELESS", t9[t9.DXGI_FORMAT_BC1_UNORM = 71] = "DXGI_FORMAT_BC1_UNORM", t9[t9.DXGI_FORMAT_BC1_UNORM_SRGB = 72] = "DXGI_FORMAT_BC1_UNORM_SRGB", t9[t9.DXGI_FORMAT_BC2_TYPELESS = 73] = "DXGI_FORMAT_BC2_TYPELESS", t9[t9.DXGI_FORMAT_BC2_UNORM = 74] = "DXGI_FORMAT_BC2_UNORM", t9[t9.DXGI_FORMAT_BC2_UNORM_SRGB = 75] = "DXGI_FORMAT_BC2_UNORM_SRGB", t9[t9.DXGI_FORMAT_BC3_TYPELESS = 76] = "DXGI_FORMAT_BC3_TYPELESS", t9[t9.DXGI_FORMAT_BC3_UNORM = 77] = "DXGI_FORMAT_BC3_UNORM", t9[t9.DXGI_FORMAT_BC3_UNORM_SRGB = 78] = "DXGI_FORMAT_BC3_UNORM_SRGB", t9[t9.DXGI_FORMAT_BC4_TYPELESS = 79] = "DXGI_FORMAT_BC4_TYPELESS", t9[t9.DXGI_FORMAT_BC4_UNORM = 80] = "DXGI_FORMAT_BC4_UNORM", t9[t9.DXGI_FORMAT_BC4_SNORM = 81] = "DXGI_FORMAT_BC4_SNORM", t9[t9.DXGI_FORMAT_BC5_TYPELESS = 82] = "DXGI_FORMAT_BC5_TYPELESS", t9[t9.DXGI_FORMAT_BC5_UNORM = 83] = "DXGI_FORMAT_BC5_UNORM", t9[t9.DXGI_FORMAT_BC5_SNORM = 84] = "DXGI_FORMAT_BC5_SNORM", t9[t9.DXGI_FORMAT_B5G6R5_UNORM = 85] = "DXGI_FORMAT_B5G6R5_UNORM", t9[t9.DXGI_FORMAT_B5G5R5A1_UNORM = 86] = "DXGI_FORMAT_B5G5R5A1_UNORM", t9[t9.DXGI_FORMAT_B8G8R8A8_UNORM = 87] = "DXGI_FORMAT_B8G8R8A8_UNORM", t9[t9.DXGI_FORMAT_B8G8R8X8_UNORM = 88] = "DXGI_FORMAT_B8G8R8X8_UNORM", t9[t9.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89] = "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM", t9[t9.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90] = "DXGI_FORMAT_B8G8R8A8_TYPELESS", t9[t9.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91] = "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB", t9[t9.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92] = "DXGI_FORMAT_B8G8R8X8_TYPELESS", t9[t9.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93] = "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB", t9[t9.DXGI_FORMAT_BC6H_TYPELESS = 94] = "DXGI_FORMAT_BC6H_TYPELESS", t9[t9.DXGI_FORMAT_BC6H_UF16 = 95] = "DXGI_FORMAT_BC6H_UF16", t9[t9.DXGI_FORMAT_BC6H_SF16 = 96] = "DXGI_FORMAT_BC6H_SF16", t9[t9.DXGI_FORMAT_BC7_TYPELESS = 97] = "DXGI_FORMAT_BC7_TYPELESS", t9[t9.DXGI_FORMAT_BC7_UNORM = 98] = "DXGI_FORMAT_BC7_UNORM", t9[t9.DXGI_FORMAT_BC7_UNORM_SRGB = 99] = "DXGI_FORMAT_BC7_UNORM_SRGB", t9[t9.DXGI_FORMAT_AYUV = 100] = "DXGI_FORMAT_AYUV", t9[t9.DXGI_FORMAT_Y410 = 101] = "DXGI_FORMAT_Y410", t9[t9.DXGI_FORMAT_Y416 = 102] = "DXGI_FORMAT_Y416", t9[t9.DXGI_FORMAT_NV12 = 103] = "DXGI_FORMAT_NV12", t9[t9.DXGI_FORMAT_P010 = 104] = "DXGI_FORMAT_P010", t9[t9.DXGI_FORMAT_P016 = 105] = "DXGI_FORMAT_P016", t9[t9.DXGI_FORMAT_420_OPAQUE = 106] = "DXGI_FORMAT_420_OPAQUE", t9[t9.DXGI_FORMAT_YUY2 = 107] = "DXGI_FORMAT_YUY2", t9[t9.DXGI_FORMAT_Y210 = 108] = "DXGI_FORMAT_Y210", t9[t9.DXGI_FORMAT_Y216 = 109] = "DXGI_FORMAT_Y216", t9[t9.DXGI_FORMAT_NV11 = 110] = "DXGI_FORMAT_NV11", t9[t9.DXGI_FORMAT_AI44 = 111] = "DXGI_FORMAT_AI44", t9[t9.DXGI_FORMAT_IA44 = 112] = "DXGI_FORMAT_IA44", t9[t9.DXGI_FORMAT_P8 = 113] = "DXGI_FORMAT_P8", t9[t9.DXGI_FORMAT_A8P8 = 114] = "DXGI_FORMAT_A8P8", t9[t9.DXGI_FORMAT_B4G4R4A4_UNORM = 115] = "DXGI_FORMAT_B4G4R4A4_UNORM", t9[t9.DXGI_FORMAT_P208 = 116] = "DXGI_FORMAT_P208", t9[t9.DXGI_FORMAT_V208 = 117] = "DXGI_FORMAT_V208", t9[t9.DXGI_FORMAT_V408 = 118] = "DXGI_FORMAT_V408", t9[t9.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE", t9[t9.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE", t9[t9.DXGI_FORMAT_FORCE_UINT = 121] = "DXGI_FORMAT_FORCE_UINT";
    }(Vo || (Vo = {
    })), (function(t9) {
        t9[t9.DDS_DIMENSION_TEXTURE1D = 2] = "DDS_DIMENSION_TEXTURE1D", t9[t9.DDS_DIMENSION_TEXTURE2D = 3] = "DDS_DIMENSION_TEXTURE2D", t9[t9.DDS_DIMENSION_TEXTURE3D = 6] = "DDS_DIMENSION_TEXTURE3D";
    })(Wo || (Wo = {
    }));
    var zo, qo, Ko, Zo = ((Go = {
    })[827611204] = t.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT, Go[861165636] = t.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT, Go[894720068] = t.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT, Go), Qo = ((Xo = {
    })[Vo.DXGI_FORMAT_BC1_TYPELESS] = t.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT, Xo[Vo.DXGI_FORMAT_BC1_UNORM] = t.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT, Xo[Vo.DXGI_FORMAT_BC2_TYPELESS] = t.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT, Xo[Vo.DXGI_FORMAT_BC2_UNORM] = t.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT, Xo[Vo.DXGI_FORMAT_BC3_TYPELESS] = t.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT, Xo[Vo.DXGI_FORMAT_BC3_UNORM] = t.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT, Xo[Vo.DXGI_FORMAT_BC1_UNORM_SRGB] = t.INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, Xo[Vo.DXGI_FORMAT_BC2_UNORM_SRGB] = t.INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT, Xo[Vo.DXGI_FORMAT_BC3_UNORM_SRGB] = t.INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT, Xo), Jo = function() {
        function t9() {
        }
        return t9.use = function(e23, r43) {
            if ("dds" === e23.extension && e23.data) try {
                Object.assign(e23, jo(e23.name || e23.url, t9.parse(e23.data), e23.metadata));
            } catch (t13) {
                return void r43(t13);
            }
            r43();
        }, t9.parse = function(t13) {
            var e23 = new Uint32Array(t13);
            if (542327876 !== e23[0]) throw new Error("Invalid DDS file magic word");
            var r43 = new Uint32Array(t13, 0, 124 / Uint32Array.BYTES_PER_ELEMENT), i49 = r43[3], n46 = r43[4], o42 = r43[7], s40 = new Uint32Array(t13, 19 * Uint32Array.BYTES_PER_ELEMENT, 32 / Uint32Array.BYTES_PER_ELEMENT), a38 = s40[1];
            if (4 & a38) {
                var h34 = s40[2];
                if (808540228 !== h34) {
                    var u32 = Zo[h34], l24 = new Uint8Array(t13, 128);
                    return [
                        new Ho(l24, {
                            format: u32,
                            width: n46,
                            height: i49,
                            levels: o42
                        })
                    ];
                }
                var c18 = new Uint32Array(e23.buffer, 128, 20 / Uint32Array.BYTES_PER_ELEMENT), d19 = c18[0], f14 = c18[1], p13 = c18[2], _ = c18[3], m6 = Qo[d19];
                if ((void 0) === m6) throw new Error("DDSLoader cannot parse texture data with DXGI format " + d19);
                if (4 === p13) throw new Error("DDSLoader does not support cubemap textures");
                if (f14 === Wo.DDS_DIMENSION_TEXTURE3D) throw new Error("DDSLoader does not supported 3D texture data");
                var v4 = new Array;
                if (1 === _) v4.push(new Uint8Array(t13, 148));
                else {
                    for(var y4 = Fo[m6], E = 0, g3 = n46, T2 = i49, b2 = 0; b2 < o42; b2++)E += Math.max(1, g3 + 3 & -4) * Math.max(1, T2 + 3 & -4) * y4, g3 >>>= 1, T2 >>>= 1;
                    var R2 = 148;
                    for(b2 = 0; b2 < _; b2++)v4.push(new Uint8Array(t13, R2, E)), R2 += E;
                }
                return v4.map(function(t14) {
                    return new Ho(t14, {
                        format: m6,
                        width: n46,
                        height: i49,
                        levels: o42
                    });
                });
            }
            if (64 & a38) throw new Error("DDSLoader does not support uncompressed texture data.");
            if (512 & a38) throw new Error("DDSLoader does not supported YUV uncompressed texture data.");
            if (131072 & a38) throw new Error("DDSLoader does not support single-channel (lumninance) texture data!");
            if (2 & a38) throw new Error("DDSLoader does not support single-channel (alpha) texture data!");
            throw new Error("DDSLoader failed to load a texture file due to an unknown reason!");
        }, t9;
    }();
    t.LoaderResource.setExtensionXhrType("ktx", t.LoaderResource.XHR_RESPONSE_TYPE.BUFFER);
    var $o = [
        171,
        75,
        84,
        88,
        32,
        49,
        49,
        187,
        13,
        10,
        26,
        10
    ], ts = ((zo = {
    })[t.TYPES.UNSIGNED_BYTE] = 1, zo[t.TYPES.UNSIGNED_SHORT] = 2, zo[t.TYPES.FLOAT] = 4, zo[t.TYPES.HALF_FLOAT] = 8, zo), es = ((qo = {
    })[t.FORMATS.RGBA] = 4, qo[t.FORMATS.RGB] = 3, qo[t.FORMATS.LUMINANCE] = 1, qo[t.FORMATS.LUMINANCE_ALPHA] = 2, qo[t.FORMATS.ALPHA] = 1, qo), rs = ((Ko = {
    })[t.TYPES.UNSIGNED_SHORT_4_4_4_4] = 2, Ko[t.TYPES.UNSIGNED_SHORT_5_5_5_1] = 2, Ko[t.TYPES.UNSIGNED_SHORT_5_6_5] = 2, Ko), is = function() {
        function t9() {
        }
        return t9.use = function(e23, r43) {
            if ("ktx" === e23.extension && e23.data) try {
                var i49 = e23.name || e23.url;
                Object.assign(e23, jo(i49, t9.parse(i49, e23.data), e23.metadata));
            } catch (t13) {
                return void r43(t13);
            }
            r43();
        }, t9.parse = function(e23, r43) {
            var i49 = new DataView(r43);
            if (!t9.validate(e23, i49)) return null;
            var n46 = 67305985 === i49.getUint32(12, !0), o42 = i49.getUint32(16, n46), s40 = i49.getUint32(24, n46), a38 = i49.getUint32(28, n46), h35 = i49.getUint32(36, n46), u33 = i49.getUint32(40, n46) || 1, l25 = i49.getUint32(44, n46) || 1, c19 = i49.getUint32(48, n46) || 1, d20 = i49.getUint32(52, n46), f15 = i49.getUint32(56, n46), p14 = i49.getUint32(60, n46);
            if (0 === u33 || 1 !== l25) throw new Error("Only 2D textures are supported");
            if (1 !== d20) throw new Error("CubeTextures are not supported by KTXLoader yet!");
            if (1 !== c19) throw new Error("WebGL does not support array textures");
            var _, m7 = h35 + 3 & -4, v5 = u33 + 3 & -4, y5 = new Array(c19), E = h35 * u33;
            if (0 === o42 && (E = m7 * v5), (void 0) === (_ = 0 !== o42 ? ts[o42] ? ts[o42] * es[s40] : rs[o42] : Fo[a38])) throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
            for(var g4 = E * _, T3 = h35, b3 = u33, R3 = m7, x2 = v5, A3 = 64 + p14, S2 = 0; S2 < f15; S2++){
                for(var O2 = i49.getUint32(A3, n46), I2 = A3 + 4, P2 = 0; P2 < c19; P2++){
                    var M1 = y5[P2];
                    M1 || (M1 = y5[P2] = new Array(f15)), M1[S2] = {
                        levelID: S2,
                        levelWidth: f15 > 1 ? T3 : R3,
                        levelHeight: f15 > 1 ? b3 : x2,
                        levelBuffer: new Uint8Array(r43, I2, g4)
                    }, I2 += g4;
                }
                A3 = (A3 += O2 + 4) % 4 != 0 ? A3 + 4 - A3 % 4 : A3, g4 = (R3 = (T3 = T3 >> 1 || 1) + 4 - 1 & -4) * (x2 = (b3 = b3 >> 1 || 1) + 4 - 1 & -4) * _;
            }
            if (0 !== o42) throw new Error("TODO: Uncompressed");
            return y5.map(function(t13) {
                return new Ho(null, {
                    format: a38,
                    width: h35,
                    height: u33,
                    levels: f15,
                    levelBuffers: t13
                });
            });
        }, t9.validate = function(t13, e23) {
            for(var r43 = 0; r43 < $o.length; r43++)if (e23.getUint8(r43) !== $o[r43]) return !1;
            return !0;
        }, t9;
    }(), ns = function(t9, e23) {
        return (ns = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t13, e27) {
            t13.__proto__ = e27;
        } || function(t13, e27) {
            for(var r43 in e27)e27.hasOwnProperty(r43) && (t13[r43] = e27[r43]);
        })(t9, e23);
    };
    function os(t9, e23) {
        function r43() {
            this.constructor = t9;
        }
        ns(t9, e23), t9.prototype = null === e23 ? Object.create(e23) : (r43.prototype = e23.prototype, new r43);
    }
    var ss = function(e23) {
        function r43(r44, i49, n46, o42) {
            (void 0) === r44 && (r44 = 1500), (void 0) === n46 && (n46 = 16384), (void 0) === o42 && (o42 = !1);
            var s40 = e23.call(this) || this;
            return n46 > 16384 && (n46 = 16384), s40._properties = [
                !1,
                !0,
                !1,
                !1,
                !1
            ], s40._maxSize = r44, s40._batchSize = n46, s40._buffers = null, s40._bufferUpdateIDs = [], s40._updateID = 0, s40.interactiveChildren = !1, s40.blendMode = t.BLEND_MODES.NORMAL, s40.autoResize = o42, s40.roundPixels = !0, s40.baseTexture = null, s40.setProperties(i49), s40._tint = 0, s40.tintRgb = new Float32Array(4), s40.tint = 16777215, s40;
        }
        return os(r43, e23), r43.prototype.setProperties = function(t9) {
            t9 && (this._properties[0] = "vertices" in t9 || "scale" in t9 ? !!t9.vertices || !!t9.scale : this._properties[0], this._properties[1] = "position" in t9 ? !!t9.position : this._properties[1], this._properties[2] = "rotation" in t9 ? !!t9.rotation : this._properties[2], this._properties[3] = "uvs" in t9 ? !!t9.uvs : this._properties[3], this._properties[4] = "tint" in t9 || "alpha" in t9 ? !!t9.tint || !!t9.alpha : this._properties[4]);
        }, r43.prototype.updateTransform = function() {
            this.displayObjectUpdateTransform();
        }, Object.defineProperty(r43.prototype, "tint", {
            get: function() {
                return this._tint;
            },
            set: function(t9) {
                this._tint = t9, ce(t9, this.tintRgb);
            },
            enumerable: !1,
            configurable: !0
        }), r43.prototype.render = function(t9) {
            var e27 = this;
            this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", function() {
                return e27.onChildrenChange(0);
            })), t9.batch.setObjectRenderer(t9.plugins.particle), t9.plugins.particle.render(this));
        }, r43.prototype.onChildrenChange = function(t9) {
            for(var e27 = Math.floor(t9 / this._batchSize); this._bufferUpdateIDs.length < e27;)this._bufferUpdateIDs.push(0);
            this._bufferUpdateIDs[e27] = ++this._updateID;
        }, r43.prototype.dispose = function() {
            if (this._buffers) {
                for(var t9 = 0; t9 < this._buffers.length; ++t9)this._buffers[t9].destroy();
                this._buffers = null;
            }
        }, r43.prototype.destroy = function(t13) {
            e23.prototype.destroy.call(this, t13), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null;
        }, r43;
    }(dr), as = function() {
        function e23(e27, r43, i49) {
            this.geometry = new fi, this.indexBuffer = null, this.size = i49, this.dynamicProperties = [], this.staticProperties = [];
            for(var n46 = 0; n46 < e27.length; ++n46){
                var o42 = e27[n46];
                o42 = {
                    attributeName: o42.attributeName,
                    size: o42.size,
                    uploadFunction: o42.uploadFunction,
                    type: o42.type || t.TYPES.FLOAT,
                    offset: o42.offset
                }, r43[n46] ? this.dynamicProperties.push(o42) : this.staticProperties.push(o42);
            }
            this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers();
        }
        return e23.prototype.initBuffers = function() {
            var e27 = this.geometry, r43 = 0;
            this.indexBuffer = new hi(Ee(this.size), !0, !0), e27.addIndex(this.indexBuffer), this.dynamicStride = 0;
            for(var i49 = 0; i49 < this.dynamicProperties.length; ++i49)(a38 = this.dynamicProperties[i49]).offset = r43, r43 += a38.size, this.dynamicStride += a38.size;
            var n46 = new ArrayBuffer(this.size * this.dynamicStride * 16);
            this.dynamicData = new Float32Array(n46), this.dynamicDataUint32 = new Uint32Array(n46), this.dynamicBuffer = new hi(this.dynamicData, !1, !1);
            var o43 = 0;
            for(this.staticStride = 0, i49 = 0; i49 < this.staticProperties.length; ++i49)(a38 = this.staticProperties[i49]).offset = o43, o43 += a38.size, this.staticStride += a38.size;
            var s40 = new ArrayBuffer(this.size * this.staticStride * 16);
            for(this.staticData = new Float32Array(s40), this.staticDataUint32 = new Uint32Array(s40), this.staticBuffer = new hi(this.staticData, !0, !1), i49 = 0; i49 < this.dynamicProperties.length; ++i49){
                var a38 = this.dynamicProperties[i49];
                e27.addAttribute(a38.attributeName, this.dynamicBuffer, 0, a38.type === t.TYPES.UNSIGNED_BYTE, a38.type, 4 * this.dynamicStride, 4 * a38.offset);
            }
            for(i49 = 0; i49 < this.staticProperties.length; ++i49)a38 = this.staticProperties[i49], e27.addAttribute(a38.attributeName, this.staticBuffer, 0, a38.type === t.TYPES.UNSIGNED_BYTE, a38.type, 4 * this.staticStride, 4 * a38.offset);
        }, e23.prototype.uploadDynamic = function(e27, r43, i49) {
            for(var n46 = 0; n46 < this.dynamicProperties.length; n46++){
                var o43 = this.dynamicProperties[n46];
                o43.uploadFunction(e27, r43, i49, o43.type === t.TYPES.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, o43.offset);
            }
            this.dynamicBuffer._updateID++;
        }, e23.prototype.uploadStatic = function(e27, r43, i49) {
            for(var n46 = 0; n46 < this.staticProperties.length; n46++){
                var o44 = this.staticProperties[n46];
                o44.uploadFunction(e27, r43, i49, o44.type === t.TYPES.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, o44.offset);
            }
            this.staticBuffer._updateID++;
        }, e23.prototype.destroy = function() {
            this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy();
        }, e23;
    }(), hs = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}", us = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n", ls = function(e23) {
        function r43(r44) {
            var i49 = e23.call(this, r44) || this;
            return i49.shader = null, i49.properties = null, i49.tempMatrix = new Ze, i49.properties = [
                {
                    attributeName: "aVertexPosition",
                    size: 2,
                    uploadFunction: i49.uploadVertices,
                    offset: 0
                },
                {
                    attributeName: "aPositionCoord",
                    size: 2,
                    uploadFunction: i49.uploadPosition,
                    offset: 0
                },
                {
                    attributeName: "aRotation",
                    size: 1,
                    uploadFunction: i49.uploadRotation,
                    offset: 0
                },
                {
                    attributeName: "aTextureCoord",
                    size: 2,
                    uploadFunction: i49.uploadUvs,
                    offset: 0
                },
                {
                    attributeName: "aColor",
                    size: 1,
                    type: t.TYPES.UNSIGNED_BYTE,
                    uploadFunction: i49.uploadTint,
                    offset: 0
                }
            ], i49.shader = rn.from(us, hs, {
            }), i49.state = nn.for2d(), i49;
        }
        return os(r43, e23), r43.prototype.render = function(t13) {
            var e27 = t13.children, r44 = t13._maxSize, i49 = t13._batchSize, n46 = this.renderer, o45 = e27.length;
            if (0 !== o45) {
                o45 > r44 && !t13.autoResize && (o45 = r44);
                var s40 = t13._buffers;
                s40 || (s40 = t13._buffers = this.generateBuffers(t13));
                var a39 = e27[0]._texture.baseTexture;
                this.state.blendMode = _e(t13.blendMode, a39.alphaMode), n46.state.set(this.state);
                var h35 = n46.gl, u33 = t13.worldTransform.copyTo(this.tempMatrix);
                u33.prepend(n46.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = u33.toArray(!0), this.shader.uniforms.uColor = me(t13.tintRgb, t13.worldAlpha, this.shader.uniforms.uColor, a39.alphaMode), this.shader.uniforms.uSampler = a39, this.renderer.shader.bind(this.shader);
                for(var l25 = !1, c19 = 0, d20 = 0; c19 < o45; c19 += i49, d20 += 1){
                    var f15 = o45 - c19;
                    f15 > i49 && (f15 = i49), d20 >= s40.length && s40.push(this._generateOneMoreBuffer(t13));
                    var p14 = s40[d20];
                    p14.uploadDynamic(e27, c19, f15);
                    var _ = t13._bufferUpdateIDs[d20] || 0;
                    (l25 = l25 || p14._updateID < _) && (p14._updateID = t13._updateID, p14.uploadStatic(e27, c19, f15)), n46.geometry.bind(p14.geometry), h35.drawElements(h35.TRIANGLES, 6 * f15, h35.UNSIGNED_SHORT, 0);
                }
            }
        }, r43.prototype.generateBuffers = function(t13) {
            for(var e27 = [], r44 = t13._maxSize, i49 = t13._batchSize, n46 = t13._properties, o45 = 0; o45 < r44; o45 += i49)e27.push(new as(this.properties, n46, i49));
            return e27;
        }, r43.prototype._generateOneMoreBuffer = function(t13) {
            var e27 = t13._batchSize, r44 = t13._properties;
            return new as(this.properties, r44, e27);
        }, r43.prototype.uploadVertices = function(t13, e27, r44, i49, n46, o45) {
            for(var s41 = 0, a40 = 0, h36 = 0, u34 = 0, l26 = 0; l26 < r44; ++l26){
                var c20 = t13[e27 + l26], d21 = c20._texture, f16 = c20.scale.x, p15 = c20.scale.y, _ = d21.trim, m7 = d21.orig;
                _ ? (s41 = (a40 = _.x - c20.anchor.x * m7.width) + _.width, h36 = (u34 = _.y - c20.anchor.y * m7.height) + _.height) : (s41 = m7.width * (1 - c20.anchor.x), a40 = m7.width * -c20.anchor.x, h36 = m7.height * (1 - c20.anchor.y), u34 = m7.height * -c20.anchor.y), i49[o45] = a40 * f16, i49[o45 + 1] = u34 * p15, i49[o45 + n46] = s41 * f16, i49[o45 + n46 + 1] = u34 * p15, i49[o45 + 2 * n46] = s41 * f16, i49[o45 + 2 * n46 + 1] = h36 * p15, i49[o45 + 3 * n46] = a40 * f16, i49[o45 + 3 * n46 + 1] = h36 * p15, o45 += 4 * n46;
            }
        }, r43.prototype.uploadPosition = function(t13, e27, r44, i49, n46, o45) {
            for(var s41 = 0; s41 < r44; s41++){
                var a40 = t13[e27 + s41].position;
                i49[o45] = a40.x, i49[o45 + 1] = a40.y, i49[o45 + n46] = a40.x, i49[o45 + n46 + 1] = a40.y, i49[o45 + 2 * n46] = a40.x, i49[o45 + 2 * n46 + 1] = a40.y, i49[o45 + 3 * n46] = a40.x, i49[o45 + 3 * n46 + 1] = a40.y, o45 += 4 * n46;
            }
        }, r43.prototype.uploadRotation = function(t13, e27, r44, i49, n46, o45) {
            for(var s41 = 0; s41 < r44; s41++){
                var a41 = t13[e27 + s41].rotation;
                i49[o45] = a41, i49[o45 + n46] = a41, i49[o45 + 2 * n46] = a41, i49[o45 + 3 * n46] = a41, o45 += 4 * n46;
            }
        }, r43.prototype.uploadUvs = function(t13, e27, r44, i49, n46, o45) {
            for(var s41 = 0; s41 < r44; ++s41){
                var a42 = t13[e27 + s41]._texture._uvs;
                a42 ? (i49[o45] = a42.x0, i49[o45 + 1] = a42.y0, i49[o45 + n46] = a42.x1, i49[o45 + n46 + 1] = a42.y1, i49[o45 + 2 * n46] = a42.x2, i49[o45 + 2 * n46 + 1] = a42.y2, i49[o45 + 3 * n46] = a42.x3, i49[o45 + 3 * n46 + 1] = a42.y3, o45 += 4 * n46) : (i49[o45] = 0, i49[o45 + 1] = 0, i49[o45 + n46] = 0, i49[o45 + n46 + 1] = 0, i49[o45 + 2 * n46] = 0, i49[o45 + 2 * n46 + 1] = 0, i49[o45 + 3 * n46] = 0, i49[o45 + 3 * n46 + 1] = 0, o45 += 4 * n46);
            }
        }, r43.prototype.uploadTint = function(t13, e27, r44, i49, n46, o45) {
            for(var s41 = 0; s41 < r44; ++s41){
                var a43 = t13[e27 + s41], h36 = a43._texture.baseTexture.alphaMode > 0, u34 = a43.alpha, l26 = u34 < 1 && h36 ? ve(a43._tintRGB, u34) : a43._tintRGB + (255 * u34 << 24);
                i49[o45] = l26, i49[o45 + n46] = l26, i49[o45 + 2 * n46] = l26, i49[o45 + 3 * n46] = l26, o45 += 4 * n46;
            }
        }, r43.prototype.destroy = function() {
            e23.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null;
        }, r43;
    }(bi);
    !function(t13) {
        t13.MITER = "miter", t13.BEVEL = "bevel", t13.ROUND = "round";
    }(t.LINE_JOIN || (t.LINE_JOIN = {
    })), (function(t13) {
        t13.BUTT = "butt", t13.ROUND = "round", t13.SQUARE = "square";
    })(t.LINE_CAP || (t.LINE_CAP = {
    }));
    var cs = {
        adaptive: !0,
        maxLength: 10,
        minSegments: 8,
        maxSegments: 2048,
        epsilon: 0.0001,
        _segmentsCount: function(t13, e23) {
            if ((void 0) === e23 && (e23 = 20), !this.adaptive || !t13 || isNaN(t13)) return e23;
            var r43 = Math.ceil(t13 / this.maxLength);
            return r43 < this.minSegments ? r43 = this.minSegments : r43 > this.maxSegments && (r43 = this.maxSegments), r43;
        }
    }, ds = function() {
        function t13() {
            this.color = 16777215, this.alpha = 1, this.texture = ri.WHITE, this.matrix = null, this.visible = !1, this.reset();
        }
        return t13.prototype.clone = function() {
            var e23 = new t13;
            return e23.color = this.color, e23.alpha = this.alpha, e23.texture = this.texture, e23.matrix = this.matrix, e23.visible = this.visible, e23;
        }, t13.prototype.reset = function() {
            this.color = 16777215, this.alpha = 1, this.texture = ri.WHITE, this.matrix = null, this.visible = !1;
        }, t13.prototype.destroy = function() {
            this.texture = null, this.matrix = null;
        }, t13;
    }(), fs = function(t13, e23) {
        return (fs = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t14, e27) {
            t14.__proto__ = e27;
        } || function(t14, e27) {
            for(var r43 in e27)e27.hasOwnProperty(r43) && (t14[r43] = e27[r43]);
        })(t13, e23);
    };
    function ps(t13, e23) {
        function r43() {
            this.constructor = t13;
        }
        fs(t13, e23), t13.prototype = null === e23 ? Object.create(e23) : (r43.prototype = e23.prototype, new r43);
    }
    var _s = {
        build: function(t13) {
            t13.points = t13.shape.points.slice();
        },
        triangulate: function(t13, e23) {
            var r43 = t13.points, i49 = t13.holes, n46 = e23.points, o45 = e23.indices;
            if (r43.length >= 6) {
                for(var s41 = [], a44 = 0; a44 < i49.length; a44++){
                    var h37 = i49[a44];
                    s41.push(r43.length / 2), r43 = r43.concat(h37.points);
                }
                var u35 = st(r43, s41, 2);
                if (!u35) return;
                var l27 = n46.length / 2;
                for(a44 = 0; a44 < u35.length; a44 += 3)o45.push(u35[a44] + l27), o45.push(u35[a44 + 1] + l27), o45.push(u35[a44 + 2] + l27);
                for(a44 = 0; a44 < r43.length; a44++)n46.push(r43[a44]);
            }
        }
    }, ms = {
        build: function(e23) {
            var r43, i49, n46 = e23.shape, o45 = e23.points, s42 = n46.x, a45 = n46.y;
            if (o45.length = 0, e23.type === t.SHAPES.CIRC) r43 = n46.radius, i49 = n46.radius;
            else {
                var h38 = e23.shape;
                r43 = h38.width, i49 = h38.height;
            }
            if (0 !== r43 && 0 !== i49) {
                var u36 = Math.floor(30 * Math.sqrt(n46.radius)) || Math.floor(15 * Math.sqrt(r43 + i49));
                u36 /= 2.3;
                for(var l28 = 2 * Math.PI / u36, c21 = 0; c21 < u36 - 0.5; c21++)o45.push(s42 + Math.sin(-l28 * c21) * r43, a45 + Math.cos(-l28 * c21) * i49);
                o45.push(o45[0], o45[1]);
            }
        },
        triangulate: function(t13, e23) {
            var r43 = t13.points, i49 = e23.points, n46 = e23.indices, o45 = i49.length / 2, s42 = o45, a45 = t13.shape, h39 = t13.matrix, u37 = a45.x, l29 = a45.y;
            i49.push(t13.matrix ? h39.a * u37 + h39.c * l29 + h39.tx : u37, t13.matrix ? h39.b * u37 + h39.d * l29 + h39.ty : l29);
            for(var c22 = 0; c22 < r43.length; c22 += 2)i49.push(r43[c22], r43[c22 + 1]), n46.push(o45++, s42, o45);
        }
    }, vs = {
        build: function(t13) {
            var e23 = t13.shape, r43 = e23.x, i49 = e23.y, n46 = e23.width, o45 = e23.height, s42 = t13.points;
            s42.length = 0, s42.push(r43, i49, r43 + n46, i49, r43 + n46, i49 + o45, r43, i49 + o45);
        },
        triangulate: function(t13, e23) {
            var r43 = t13.points, i49 = e23.points, n46 = i49.length / 2;
            i49.push(r43[0], r43[1], r43[2], r43[3], r43[6], r43[7], r43[4], r43[5]), e23.indices.push(n46, n46 + 1, n46 + 2, n46 + 1, n46 + 2, n46 + 3);
        }
    };
    function ys(t13, e23, r43) {
        return t13 + (e23 - t13) * r43;
    }
    function Es(t13, e23, r43, i49, n46, o45, s42) {
        (void 0) === s42 && (s42 = []);
        for(var a45 = s42, h39 = 0, u37 = 0, l29 = 0, c22 = 0, d22 = 0, f17 = 0, p16 = 0, _ = 0; p16 <= 20; ++p16)h39 = ys(t13, r43, _ = p16 / 20), u37 = ys(e23, i49, _), l29 = ys(r43, n46, _), c22 = ys(i49, o45, _), d22 = ys(h39, l29, _), f17 = ys(u37, c22, _), 0 === p16 && a45[a45.length - 2] === d22 && a45[a45.length - 1] === f17 || a45.push(d22, f17);
        return a45;
    }
    var gs = {
        build: function(t13) {
            var e23 = t13.shape, r43 = t13.points, i49 = e23.x, n46 = e23.y, o45 = e23.width, s42 = e23.height, a45 = Math.max(0, Math.min(e23.radius, Math.min(o45, s42) / 2));
            r43.length = 0, a45 ? (Es(i49, n46 + a45, i49, n46, i49 + a45, n46, r43), Es(i49 + o45 - a45, n46, i49 + o45, n46, i49 + o45, n46 + a45, r43), Es(i49 + o45, n46 + s42 - a45, i49 + o45, n46 + s42, i49 + o45 - a45, n46 + s42, r43), Es(i49 + a45, n46 + s42, i49, n46 + s42, i49, n46 + s42 - a45, r43)) : r43.push(i49, n46, i49 + o45, n46, i49 + o45, n46 + s42, i49, n46 + s42);
        },
        triangulate: function(t13, e23) {
            for(var r43 = t13.points, i49 = e23.points, n46 = e23.indices, o45 = i49.length / 2, s42 = st(r43, null, 2), a45 = 0, h39 = s42.length; a45 < h39; a45 += 3)n46.push(s42[a45] + o45), n46.push(s42[a45 + 1] + o45), n46.push(s42[a45 + 2] + o45);
            for(a45 = 0, h39 = r43.length; a45 < h39; a45++)i49.push(r43[a45], r43[++a45]);
        }
    };
    function Ts(t13, e23, r43, i49, n46, o45, s42, a45) {
        var h39, u37;
        s42 ? (h39 = i49, u37 = -r43) : (h39 = -i49, u37 = r43);
        var l29 = t13 - r43 * n46 + h39, c22 = e23 - i49 * n46 + u37, d22 = t13 + r43 * o45 + h39, f17 = e23 + i49 * o45 + u37;
        return a45.push(l29, c22), a45.push(d22, f17), 2;
    }
    function bs(t13, e23, r43, i49, n46, o45, s42, a45) {
        var h39 = r43 - t13, u37 = i49 - e23, l29 = Math.atan2(h39, u37), c22 = Math.atan2(n46 - t13, o45 - e23);
        a45 && l29 < c22 ? l29 += 2 * Math.PI : !a45 && l29 > c22 && (c22 += 2 * Math.PI);
        var d22 = l29, f17 = c22 - l29, p16 = Math.abs(f17), _ = Math.sqrt(h39 * h39 + u37 * u37), m8 = 1 + (15 * p16 * Math.sqrt(_) / Math.PI >> 0), v5 = f17 / m8;
        if (d22 += v5, a45) {
            s42.push(t13, e23), s42.push(r43, i49);
            for(var y5 = 1, E = d22; y5 < m8; y5++, E += v5)s42.push(t13, e23), s42.push(t13 + Math.sin(E) * _, e23 + Math.cos(E) * _);
            s42.push(t13, e23), s42.push(n46, o45);
        } else {
            for(s42.push(r43, i49), s42.push(t13, e23), y5 = 1, E = d22; y5 < m8; y5++, E += v5)s42.push(t13 + Math.sin(E) * _, e23 + Math.cos(E) * _), s42.push(t13, e23);
            s42.push(n46, o45), s42.push(t13, e23);
        }
        return 2 * m8;
    }
    function Rs(e23, r43) {
        e23.lineStyle.native ? (function(e27, r44) {
            var i49 = 0, n46 = e27.shape, o45 = e27.points || n46.points, s42 = n46.type !== t.SHAPES.POLY || n46.closeStroke;
            if (0 !== o45.length) {
                var a45 = r44.points, h39 = r44.indices, u37 = o45.length / 2, l29 = a45.length / 2, c22 = l29;
                for(a45.push(o45[0], o45[1]), i49 = 1; i49 < u37; i49++)a45.push(o45[2 * i49], o45[2 * i49 + 1]), h39.push(c22, c22 + 1), c22++;
                s42 && h39.push(c22, l29);
            }
        })(e23, r43) : (function(e27, r44) {
            var i49 = e27.shape, n46 = e27.points || i49.points.slice(), o45 = r44.closePointEps;
            if (0 !== n46.length) {
                var s42 = e27.lineStyle, a46 = new qe(n46[0], n46[1]), h40 = new qe(n46[n46.length - 2], n46[n46.length - 1]), u38 = i49.type !== t.SHAPES.POLY || i49.closeStroke, l30 = Math.abs(a46.x - h40.x) < o45 && Math.abs(a46.y - h40.y) < o45;
                if (u38) {
                    n46 = n46.slice(), l30 && (n46.pop(), n46.pop(), h40.set(n46[n46.length - 2], n46[n46.length - 1]));
                    var c23 = 0.5 * (a46.x + h40.x), d22 = 0.5 * (h40.y + a46.y);
                    n46.unshift(c23, d22), n46.push(c23, d22);
                }
                var f17 = r44.points, p16 = n46.length / 2, _ = n46.length, m8 = f17.length / 2, v5 = s42.width / 2, y6 = v5 * v5, E = s42.miterLimit * s42.miterLimit, g4 = n46[0], T3 = n46[1], b3 = n46[2], R3 = n46[3], x2 = 0, A3 = 0, S2 = -(T3 - R3), O3 = g4 - b3, I3 = 0, P3 = 0, M2 = Math.sqrt(S2 * S2 + O3 * O3);
                S2 /= M2, O3 /= M2, S2 *= v5, O3 *= v5;
                var D1 = s42.alignment, N2 = 2 * (1 - D1), w1 = 2 * D1;
                u38 || (s42.cap === t.LINE_CAP.ROUND ? _ += bs(g4 - S2 * (N2 - w1) * 0.5, T3 - O3 * (N2 - w1) * 0.5, g4 - S2 * N2, T3 - O3 * N2, g4 + S2 * w1, T3 + O3 * w1, f17, !0) + 2 : s42.cap === t.LINE_CAP.SQUARE && (_ += Ts(g4, T3, S2, O3, N2, w1, !0, f17))), f17.push(g4 - S2 * N2, T3 - O3 * N2), f17.push(g4 + S2 * w1, T3 + O3 * w1);
                for(var C1 = 1; C1 < p16 - 1; ++C1){
                    g4 = n46[2 * (C1 - 1)], T3 = n46[2 * (C1 - 1) + 1], b3 = n46[2 * C1], R3 = n46[2 * C1 + 1], x2 = n46[2 * (C1 + 1)], A3 = n46[2 * (C1 + 1) + 1], S2 = -(T3 - R3), O3 = g4 - b3, S2 /= M2 = Math.sqrt(S2 * S2 + O3 * O3), O3 /= M2, S2 *= v5, O3 *= v5, I3 = -(R3 - A3), P3 = b3 - x2, I3 /= M2 = Math.sqrt(I3 * I3 + P3 * P3), P3 /= M2, I3 *= v5, P3 *= v5;
                    var L1 = b3 - g4, F1 = T3 - R3, U1 = b3 - x2, B1 = A3 - R3, G1 = F1 * U1 - B1 * L1, X1 = G1 < 0;
                    if (Math.abs(G1) < 0.1) f17.push(b3 - S2 * N2, R3 - O3 * N2), f17.push(b3 + S2 * w1, R3 + O3 * w1);
                    else {
                        var k1 = (-S2 + g4) * (-O3 + R3) - (-S2 + b3) * (-O3 + T3), H1 = (-I3 + x2) * (-P3 + R3) - (-I3 + b3) * (-P3 + A3), Y1 = (L1 * H1 - U1 * k1) / G1, j1 = (B1 * k1 - F1 * H1) / G1, V1 = (Y1 - b3) * (Y1 - b3) + (j1 - R3) * (j1 - R3), W1 = b3 + (Y1 - b3) * N2, z1 = R3 + (j1 - R3) * N2, q1 = b3 - (Y1 - b3) * w1, K1 = R3 - (j1 - R3) * w1, Z1 = X1 ? N2 : w1;
                        V1 <= Math.min(L1 * L1 + F1 * F1, U1 * U1 + B1 * B1) + Z1 * Z1 * y6 ? s42.join === t.LINE_JOIN.BEVEL || V1 / y6 > E ? (X1 ? (f17.push(W1, z1), f17.push(b3 + S2 * w1, R3 + O3 * w1), f17.push(W1, z1), f17.push(b3 + I3 * w1, R3 + P3 * w1)) : (f17.push(b3 - S2 * N2, R3 - O3 * N2), f17.push(q1, K1), f17.push(b3 - I3 * N2, R3 - P3 * N2), f17.push(q1, K1)), _ += 2) : s42.join === t.LINE_JOIN.ROUND ? X1 ? (f17.push(W1, z1), f17.push(b3 + S2 * w1, R3 + O3 * w1), _ += bs(b3, R3, b3 + S2 * w1, R3 + O3 * w1, b3 + I3 * w1, R3 + P3 * w1, f17, !0) + 4, f17.push(W1, z1), f17.push(b3 + I3 * w1, R3 + P3 * w1)) : (f17.push(b3 - S2 * N2, R3 - O3 * N2), f17.push(q1, K1), _ += bs(b3, R3, b3 - S2 * N2, R3 - O3 * N2, b3 - I3 * N2, R3 - P3 * N2, f17, !1) + 4, f17.push(b3 - I3 * N2, R3 - P3 * N2), f17.push(q1, K1)) : (f17.push(W1, z1), f17.push(q1, K1)) : (f17.push(b3 - S2 * N2, R3 - O3 * N2), f17.push(b3 + S2 * w1, R3 + O3 * w1), s42.join === t.LINE_JOIN.BEVEL || V1 / y6 > E || (s42.join === t.LINE_JOIN.ROUND ? _ += X1 ? bs(b3, R3, b3 + S2 * w1, R3 + O3 * w1, b3 + I3 * w1, R3 + P3 * w1, f17, !0) + 2 : bs(b3, R3, b3 - S2 * N2, R3 - O3 * N2, b3 - I3 * N2, R3 - P3 * N2, f17, !1) + 2 : (X1 ? (f17.push(q1, K1), f17.push(q1, K1)) : (f17.push(W1, z1), f17.push(W1, z1)), _ += 2)), f17.push(b3 - I3 * N2, R3 - P3 * N2), f17.push(b3 + I3 * w1, R3 + P3 * w1), _ += 2);
                    }
                }
                g4 = n46[2 * (p16 - 2)], T3 = n46[2 * (p16 - 2) + 1], b3 = n46[2 * (p16 - 1)], S2 = -(T3 - (R3 = n46[2 * (p16 - 1) + 1])), O3 = g4 - b3, S2 /= M2 = Math.sqrt(S2 * S2 + O3 * O3), O3 /= M2, S2 *= v5, O3 *= v5, f17.push(b3 - S2 * N2, R3 - O3 * N2), f17.push(b3 + S2 * w1, R3 + O3 * w1), u38 || (s42.cap === t.LINE_CAP.ROUND ? _ += bs(b3 - S2 * (N2 - w1) * 0.5, R3 - O3 * (N2 - w1) * 0.5, b3 - S2 * N2, R3 - O3 * N2, b3 + S2 * w1, R3 + O3 * w1, f17, !1) + 2 : s42.cap === t.LINE_CAP.SQUARE && (_ += Ts(b3, R3, S2, O3, N2, w1, !1, f17)));
                var Q1 = r44.indices, J1 = cs.epsilon * cs.epsilon;
                for(C1 = m8; C1 < _ + m8 - 2; ++C1)g4 = f17[2 * C1], T3 = f17[2 * C1 + 1], b3 = f17[2 * (C1 + 1)], R3 = f17[2 * (C1 + 1) + 1], x2 = f17[2 * (C1 + 2)], A3 = f17[2 * (C1 + 2) + 1], Math.abs(g4 * (R3 - A3) + b3 * (A3 - T3) + x2 * (T3 - R3)) < J1 || Q1.push(C1, C1 + 1, C1 + 2);
            }
        })(e23, r43);
    }
    var xs, As = function() {
        function t13() {
        }
        return t13.curveTo = function(t14, e23, r43, i49, n46, o45) {
            var s43 = o45[o45.length - 2], a47 = o45[o45.length - 1] - e23, h41 = s43 - t14, u39 = i49 - e23, l31 = r43 - t14, c24 = Math.abs(a47 * l31 - h41 * u39);
            if (c24 < 0.00000001 || 0 === n46) return o45[o45.length - 2] === t14 && o45[o45.length - 1] === e23 || o45.push(t14, e23), null;
            var d23 = a47 * a47 + h41 * h41, f18 = u39 * u39 + l31 * l31, p17 = a47 * u39 + h41 * l31, _ = n46 * Math.sqrt(d23) / c24, m9 = n46 * Math.sqrt(f18) / c24, v6 = _ * p17 / d23, y7 = m9 * p17 / f18, E = _ * l31 + m9 * h41, g5 = _ * u39 + m9 * a47, T4 = h41 * (m9 + v6), b4 = a47 * (m9 + v6), R4 = l31 * (_ + y7), x3 = u39 * (_ + y7);
            return {
                cx: E + t14,
                cy: g5 + e23,
                radius: n46,
                startAngle: Math.atan2(b4 - g5, T4 - E),
                endAngle: Math.atan2(x3 - g5, R4 - E),
                anticlockwise: h41 * u39 > l31 * a47
            };
        }, t13.arc = function(t14, e23, r43, i49, n46, o45, s43, a47, h41) {
            for(var u39 = s43 - o45, l31 = cs._segmentsCount(Math.abs(u39) * n46, 40 * Math.ceil(Math.abs(u39) / Xe)), c24 = u39 / (2 * l31), d23 = 2 * c24, f18 = Math.cos(c24), p17 = Math.sin(c24), _ = l31 - 1, m9 = _ % 1 / _, v6 = 0; v6 <= _; ++v6){
                var y7 = c24 + o45 + d23 * (v6 + m9 * v6), E = Math.cos(y7), g5 = -Math.sin(y7);
                h41.push((f18 * E + p17 * g5) * n46 + r43, (f18 * -g5 + p17 * E) * n46 + i49);
            }
        }, t13;
    }(), Ss = function() {
        function t13() {
        }
        return t13.curveLength = function(t14, e23, r43, i49, n46, o45, s43, a47) {
            for(var h41 = 0, u39 = 0, l31 = 0, c24 = 0, d23 = 0, f18 = 0, p17 = 0, _ = 0, m9 = 0, v6 = 0, y8 = 0, E = t14, g6 = e23, T4 = 1; T4 <= 10; ++T4)v6 = E - (_ = (p17 = (f18 = (d23 = 1 - (u39 = T4 / 10)) * d23) * d23) * t14 + 3 * f18 * u39 * r43 + 3 * d23 * (l31 = u39 * u39) * n46 + (c24 = l31 * u39) * s43), y8 = g6 - (m9 = p17 * e23 + 3 * f18 * u39 * i49 + 3 * d23 * l31 * o45 + c24 * a47), E = _, g6 = m9, h41 += Math.sqrt(v6 * v6 + y8 * y8);
            return h41;
        }, t13.curveTo = function(e23, r43, i49, n46, o45, s43, a47) {
            var h41 = a47[a47.length - 2], u39 = a47[a47.length - 1];
            a47.length -= 2;
            var l31 = cs._segmentsCount(t13.curveLength(h41, u39, e23, r43, i49, n46, o45, s43)), c24 = 0, d23 = 0, f18 = 0, p17 = 0, _ = 0;
            a47.push(h41, u39);
            for(var m9 = 1, v6 = 0; m9 <= l31; ++m9)f18 = (d23 = (c24 = 1 - (v6 = m9 / l31)) * c24) * c24, _ = (p17 = v6 * v6) * v6, a47.push(f18 * h41 + 3 * d23 * v6 * e23 + 3 * c24 * p17 * i49 + _ * o45, f18 * u39 + 3 * d23 * v6 * r43 + 3 * c24 * p17 * n46 + _ * s43);
        }, t13;
    }(), Os = function() {
        function t13() {
        }
        return t13.curveLength = function(t14, e23, r43, i49, n46, o45) {
            var s43 = t14 - 2 * r43 + n46, a47 = e23 - 2 * i49 + o45, h41 = 2 * r43 - 2 * t14, u39 = 2 * i49 - 2 * e23, l31 = 4 * (s43 * s43 + a47 * a47), c24 = 4 * (s43 * h41 + a47 * u39), d23 = h41 * h41 + u39 * u39, f18 = 2 * Math.sqrt(l31 + c24 + d23), p17 = Math.sqrt(l31), _ = 2 * l31 * p17, m9 = 2 * Math.sqrt(d23), v6 = c24 / p17;
            return (_ * f18 + p17 * c24 * (f18 - m9) + (4 * d23 * l31 - c24 * c24) * Math.log((2 * p17 + v6 + f18) / (v6 + m9))) / (4 * _);
        }, t13.curveTo = function(e23, r43, i49, n46, o45) {
            for(var s43 = o45[o45.length - 2], a47 = o45[o45.length - 1], h41 = cs._segmentsCount(t13.curveLength(s43, a47, e23, r43, i49, n46)), u39 = 0, l31 = 0, c24 = 1; c24 <= h41; ++c24){
                var d23 = c24 / h41;
                u39 = s43 + (e23 - s43) * d23, l31 = a47 + (r43 - a47) * d23, o45.push(u39 + (e23 + (i49 - e23) * d23 - u39) * d23, l31 + (r43 + (n46 - r43) * d23 - l31) * d23);
            }
        }, t13;
    }(), Is = function() {
        function t13() {
            this.reset();
        }
        return t13.prototype.begin = function(t14, e23, r43) {
            this.reset(), this.style = t14, this.start = e23, this.attribStart = r43;
        }, t13.prototype.end = function(t14, e23) {
            this.attribSize = e23 - this.attribStart, this.size = t14 - this.start;
        }, t13.prototype.reset = function() {
            this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0;
        }, t13;
    }(), Ps = ((xs = {
    })[t.SHAPES.POLY] = _s, xs[t.SHAPES.CIRC] = ms, xs[t.SHAPES.ELIP] = ms, xs[t.SHAPES.RECT] = vs, xs[t.SHAPES.RREC] = gs, xs), Ms = [], Ds = [];
    function Ns(t13) {
        for(var e23 = t13.points, r43 = 0, i49 = 0; i49 < e23.length - 2; i49 += 2)r43 += (e23[i49 + 2] - e23[i49]) * (e23[i49 + 3] + e23[i49 + 1]);
        return r43 > 0;
    }
    var ws = function() {
        function t13(t14, e23, r43, i49) {
            (void 0) === e23 && (e23 = null), (void 0) === r43 && (r43 = null), (void 0) === i49 && (i49 = null), this.points = [], this.holes = [], this.shape = t14, this.lineStyle = r43, this.fillStyle = e23, this.matrix = i49, this.type = t14.type;
        }
        return t13.prototype.clone = function() {
            return new t13(this.shape, this.fillStyle, this.lineStyle, this.matrix);
        }, t13.prototype.destroy = function() {
            this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null;
        }, t13;
    }(), Cs = new qe, Ls = new sr, Fs = function(e23) {
        function r43() {
            var t13 = e23.call(this) || this;
            return t13.closePointEps = 0.0001, t13.boundsPadding = 0, t13.uvsFloat32 = null, t13.indicesUint16 = null, t13.batchable = !1, t13.points = [], t13.colors = [], t13.uvs = [], t13.indices = [], t13.textureIds = [], t13.graphicsData = [], t13.drawCalls = [], t13.batchDirty = -1, t13.batches = [], t13.dirty = 0, t13.cacheDirty = -1, t13.clearDirty = 0, t13.shapeIndex = 0, t13._bounds = new sr, t13.boundsDirty = -1, t13;
        }
        return ps(r43, e23), Object.defineProperty(r43.prototype, "bounds", {
            get: function() {
                return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds;
            },
            enumerable: !1,
            configurable: !0
        }), r43.prototype.invalidate = function() {
            this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
            for(var t13 = 0; t13 < this.drawCalls.length; t13++)this.drawCalls[t13].texArray.clear(), Ds.push(this.drawCalls[t13]);
            for(this.drawCalls.length = 0, t13 = 0; t13 < this.batches.length; t13++){
                var e27 = this.batches[t13];
                e27.reset(), Ms.push(e27);
            }
            this.batches.length = 0;
        }, r43.prototype.clear = function() {
            return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this;
        }, r43.prototype.drawShape = function(t13, e28, r44, i49) {
            (void 0) === e28 && (e28 = null), (void 0) === r44 && (r44 = null), (void 0) === i49 && (i49 = null);
            var n46 = new ws(t13, e28, r44, i49);
            return this.graphicsData.push(n46), this.dirty++, this;
        }, r43.prototype.drawHole = function(t13, e28) {
            if ((void 0) === e28 && (e28 = null), !this.graphicsData.length) return null;
            var r44 = new ws(t13, null, null, e28), i49 = this.graphicsData[this.graphicsData.length - 1];
            return r44.lineStyle = i49.lineStyle, i49.holes.push(r44), this.dirty++, this;
        }, r43.prototype.destroy = function() {
            e23.prototype.destroy.call(this);
            for(var t13 = 0; t13 < this.graphicsData.length; ++t13)this.graphicsData[t13].destroy();
            this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null;
        }, r43.prototype.containsPoint = function(t13) {
            for(var e28 = this.graphicsData, r44 = 0; r44 < e28.length; ++r44){
                var i49 = e28[r44];
                if (i49.fillStyle.visible && i49.shape && (i49.matrix ? i49.matrix.applyInverse(t13, Cs) : Cs.copyFrom(t13), i49.shape.contains(Cs.x, Cs.y))) {
                    var n46 = !1;
                    if (i49.holes) for(var o45 = 0; o45 < i49.holes.length; o45++)if (i49.holes[o45].shape.contains(Cs.x, Cs.y)) {
                        n46 = !0;
                        break;
                    }
                    if (!n46) return !0;
                }
            }
            return !1;
        }, r43.prototype.updateBatches = function(e28) {
            if (this.graphicsData.length) {
                if (this.validateBatching()) {
                    this.cacheDirty = this.dirty;
                    var r44 = this.uvs, i50 = this.graphicsData, n47 = null, o46 = null;
                    this.batches.length > 0 && (o46 = (n47 = this.batches[this.batches.length - 1]).style);
                    for(var s43 = this.shapeIndex; s43 < i50.length; s43++){
                        this.shapeIndex++;
                        var a47 = i50[s43], h41 = a47.fillStyle, u39 = a47.lineStyle;
                        Ps[a47.type].build(a47), a47.matrix && this.transformPoints(a47.points, a47.matrix);
                        for(var l31 = 0; l31 < 2; l31++){
                            var c24 = 0 === l31 ? h41 : u39;
                            if (c24.visible) {
                                var d24 = c24.texture.baseTexture, f18 = this.indices.length, p17 = this.points.length / 2;
                                d24.wrapMode = t.WRAP_MODES.REPEAT, 0 === l31 ? this.processFill(a47) : this.processLine(a47);
                                var _ = this.points.length / 2 - p17;
                                0 !== _ && (n47 && !this._compareStyles(o46, c24) && (n47.end(f18, p17), n47 = null), n47 || ((n47 = Ms.pop() || new Is).begin(c24, f18, p17), this.batches.push(n47), o46 = c24), this.addUvs(this.points, r44, c24.texture, p17, _, c24.matrix));
                            }
                        }
                    }
                    var m9 = this.indices.length, v6 = this.points.length / 2;
                    if (n47 && n47.end(m9, v6), 0 !== this.batches.length) {
                        if (this.indicesUint16 && this.indices.length === this.indicesUint16.length) this.indicesUint16.set(this.indices);
                        else {
                            var y8 = v6 > 65535 && e28;
                            this.indicesUint16 = y8 ? new Uint32Array(this.indices) : new Uint16Array(this.indices);
                        }
                        this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls();
                    } else this.batchable = !0;
                }
            } else this.batchable = !0;
        }, r43.prototype._compareStyles = function(t13, e28) {
            return !(!t13 || !e28) && t13.texture.baseTexture === e28.texture.baseTexture && t13.color + t13.alpha === e28.color + e28.alpha && !!t13.native == !!e28.native;
        }, r43.prototype.validateBatching = function() {
            if (this.dirty === this.cacheDirty || !this.graphicsData.length) return !1;
            for(var t13 = 0, e28 = this.graphicsData.length; t13 < e28; t13++){
                var r45 = this.graphicsData[t13], i51 = r45.fillStyle, n48 = r45.lineStyle;
                if (i51 && !i51.texture.baseTexture.valid) return !1;
                if (n48 && !n48.texture.baseTexture.valid) return !1;
            }
            return !0;
        }, r43.prototype.packBatches = function() {
            this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
            for(var t13 = this.batches, e28 = 0, r46 = t13.length; e28 < r46; e28++)for(var i52 = t13[e28], n49 = 0; n49 < i52.size; n49++){
                var o47 = i52.start + n49;
                this.indicesUint16[o47] = this.indicesUint16[o47] - i52.attribStart;
            }
        }, r43.prototype.isBatchable = function() {
            if (this.points.length > 131070) return !1;
            for(var t13 = this.batches, e28 = 0; e28 < t13.length; e28++)if (t13[e28].style.native) return !1;
            return this.points.length < 2 * r43.BATCHABLE_SIZE;
        }, r43.prototype.buildDrawCalls = function() {
            for(var e28 = ++Xr._globalBatch, r46 = 0; r46 < this.drawCalls.length; r46++)this.drawCalls[r46].texArray.clear(), Ds.push(this.drawCalls[r46]);
            this.drawCalls.length = 0;
            var i52 = this.colors, n49 = this.textureIds, o48 = Ds.pop();
            o48 || ((o48 = new Qn).texArray = new Jn), o48.texArray.count = 0, o48.start = 0, o48.size = 0, o48.type = t.DRAW_MODES.TRIANGLES;
            var s44 = 0, a48 = null, h42 = 0, u40 = !1, l32 = t.DRAW_MODES.TRIANGLES, c25 = 0;
            for(this.drawCalls.push(o48), r46 = 0; r46 < this.batches.length; r46++){
                var d25 = this.batches[r46], f19 = d25.style, p18 = f19.texture.baseTexture;
                u40 !== !!f19.native && (l32 = (u40 = !!f19.native) ? t.DRAW_MODES.LINES : t.DRAW_MODES.TRIANGLES, a48 = null, s44 = 8, e28++), a48 !== p18 && (a48 = p18, p18._batchEnabled !== e28 && (8 === s44 && (e28++, s44 = 0, o48.size > 0 && ((o48 = Ds.pop()) || ((o48 = new Qn).texArray = new Jn), this.drawCalls.push(o48)), o48.start = c25, o48.size = 0, o48.texArray.count = 0, o48.type = l32), p18.touched = 1, p18._batchEnabled = e28, p18._batchLocation = s44, p18.wrapMode = t.WRAP_MODES.REPEAT, o48.texArray.elements[o48.texArray.count++] = p18, s44++)), o48.size += d25.size, c25 += d25.size, h42 = p18._batchLocation, this.addColors(i52, f19.color, f19.alpha, d25.attribSize, d25.attribStart), this.addTextureIds(n49, h42, d25.attribSize, d25.attribStart);
            }
            Xr._globalBatch = e28, this.packAttributes();
        }, r43.prototype.packAttributes = function() {
            for(var t13 = this.points, e28 = this.uvs, r46 = this.colors, i52 = this.textureIds, n49 = new ArrayBuffer(3 * t13.length * 4), o48 = new Float32Array(n49), s44 = new Uint32Array(n49), a48 = 0, h42 = 0; h42 < t13.length / 2; h42++)o48[a48++] = t13[2 * h42], o48[a48++] = t13[2 * h42 + 1], o48[a48++] = e28[2 * h42], o48[a48++] = e28[2 * h42 + 1], s44[a48++] = r46[h42], o48[a48++] = i52[h42];
            this._buffer.update(n49), this._indexBuffer.update(this.indicesUint16);
        }, r43.prototype.processFill = function(t13) {
            t13.holes.length ? (this.processHoles(t13.holes), _s.triangulate(t13, this)) : Ps[t13.type].triangulate(t13, this);
        }, r43.prototype.processLine = function(t13) {
            Rs(t13, this);
            for(var e28 = 0; e28 < t13.holes.length; e28++)Rs(t13.holes[e28], this);
        }, r43.prototype.processHoles = function(t13) {
            for(var e28 = 0; e28 < t13.length; e28++){
                var r46 = t13[e28];
                Ps[r46.type].build(r46), r46.matrix && this.transformPoints(r46.points, r46.matrix);
            }
        }, r43.prototype.calculateBounds = function() {
            var e28 = this._bounds, r47 = Ls, i52 = Ze.IDENTITY;
            this._bounds.clear(), r47.clear();
            for(var n49 = 0; n49 < this.graphicsData.length; n49++){
                var o48 = this.graphicsData[n49], s44 = o48.shape, a48 = o48.type, h42 = o48.lineStyle, u40 = o48.matrix || Ze.IDENTITY, l32 = 0;
                if (h42 && h42.visible) {
                    var c25 = h42.alignment;
                    l32 = h42.width, a48 === t.SHAPES.POLY ? Ns(s44) ? l32 *= 1 - c25 : l32 *= c25 : l32 *= Math.max(0, c25);
                }
                if (i52 !== u40 && (r47.isEmpty() || (e28.addBoundsMatrix(r47, i52), r47.clear()), i52 = u40), a48 === t.SHAPES.RECT || a48 === t.SHAPES.RREC) {
                    var d26 = s44;
                    r47.addFramePad(d26.x, d26.y, d26.x + d26.width, d26.y + d26.height, l32, l32);
                } else if (a48 === t.SHAPES.CIRC) {
                    var f20 = s44;
                    r47.addFramePad(f20.x, f20.y, f20.x, f20.y, f20.radius + l32, f20.radius + l32);
                } else if (a48 === t.SHAPES.ELIP) {
                    var p19 = s44;
                    r47.addFramePad(p19.x, p19.y, p19.x, p19.y, p19.width + l32, p19.height + l32);
                } else {
                    var _ = s44;
                    e28.addVerticesMatrix(i52, _.points, 0, _.points.length, l32, l32);
                }
            }
            r47.isEmpty() || e28.addBoundsMatrix(r47, i52), e28.pad(this.boundsPadding, this.boundsPadding);
        }, r43.prototype.transformPoints = function(t13, e28) {
            for(var r47 = 0; r47 < t13.length / 2; r47++){
                var i52 = t13[2 * r47], n49 = t13[2 * r47 + 1];
                t13[2 * r47] = e28.a * i52 + e28.c * n49 + e28.tx, t13[2 * r47 + 1] = e28.b * i52 + e28.d * n49 + e28.ty;
            }
        }, r43.prototype.addColors = function(t13, e28, r47, i53, n50) {
            (void 0) === n50 && (n50 = 0);
            var o49 = ve((e28 >> 16) + (65280 & e28) + ((255 & e28) << 16), r47);
            t13.length = Math.max(t13.length, n50 + i53);
            for(var s45 = 0; s45 < i53; s45++)t13[n50 + s45] = o49;
        }, r43.prototype.addTextureIds = function(t13, e28, r47, i53) {
            (void 0) === i53 && (i53 = 0), t13.length = Math.max(t13.length, i53 + r47);
            for(var n50 = 0; n50 < r47; n50++)t13[i53 + n50] = e28;
        }, r43.prototype.addUvs = function(t13, e28, r47, i53, n50, o49) {
            (void 0) === o49 && (o49 = null);
            for(var s45 = 0, a49 = e28.length, h43 = r47.frame; s45 < n50;){
                var u41 = t13[2 * (i53 + s45)], l33 = t13[2 * (i53 + s45) + 1];
                if (o49) {
                    var c26 = o49.a * u41 + o49.c * l33 + o49.tx;
                    l33 = o49.b * u41 + o49.d * l33 + o49.ty, u41 = c26;
                }
                s45++, e28.push(u41 / h43.width, l33 / h43.height);
            }
            var d27 = r47.baseTexture;
            (h43.width < d27.width || h43.height < d27.height) && this.adjustUvs(e28, r47, a49, n50);
        }, r43.prototype.adjustUvs = function(t13, e28, r47, i53) {
            for(var n50 = e28.baseTexture, o49 = r47 + 2 * i53, s45 = e28.frame, a49 = s45.width / n50.width, h43 = s45.height / n50.height, u42 = s45.x / s45.width, l34 = s45.y / s45.height, c27 = Math.floor(t13[r47] + 0.000001), d27 = Math.floor(t13[r47 + 1] + 0.000001), f21 = r47 + 2; f21 < o49; f21 += 2)c27 = Math.min(c27, Math.floor(t13[f21] + 0.000001)), d27 = Math.min(d27, Math.floor(t13[f21 + 1] + 0.000001));
            for(u42 -= c27, l34 -= d27, f21 = r47; f21 < o49; f21 += 2)t13[f21] = (t13[f21] + u42) * a49, t13[f21 + 1] = (t13[f21 + 1] + l34) * h43;
        }, r43.BATCHABLE_SIZE = 100, r43;
    }(ro), Us = function(e23) {
        function r43() {
            var r47 = null !== e23 && e23.apply(this, arguments) || this;
            return r47.width = 0, r47.alignment = 0.5, r47.native = !1, r47.cap = t.LINE_CAP.BUTT, r47.join = t.LINE_JOIN.MITER, r47.miterLimit = 10, r47;
        }
        return ps(r43, e23), r43.prototype.clone = function() {
            var t13 = new r43;
            return t13.color = this.color, t13.alpha = this.alpha, t13.texture = this.texture, t13.matrix = this.matrix, t13.visible = this.visible, t13.width = this.width, t13.alignment = this.alignment, t13.native = this.native, t13.cap = this.cap, t13.join = this.join, t13.miterLimit = this.miterLimit, t13;
        }, r43.prototype.reset = function() {
            e23.prototype.reset.call(this), this.color = 0, this.alignment = 0.5, this.width = 0, this.native = !1;
        }, r43;
    }(ds), Bs = new Float32Array(3), Gs = {
    }, Xs = function(e23) {
        function r43(r47) {
            (void 0) === r47 && (r47 = null);
            var i53 = e23.call(this) || this;
            return i53.shader = null, i53.pluginName = "batch", i53.currentPath = null, i53.batches = [], i53.batchTint = -1, i53.batchDirty = -1, i53.vertexData = null, i53._fillStyle = new ds, i53._lineStyle = new Us, i53._matrix = null, i53._holeMode = !1, i53.state = nn.for2d(), i53._geometry = r47 || new Fs, i53._geometry.refCount++, i53._transformID = -1, i53.tint = 16777215, i53.blendMode = t.BLEND_MODES.NORMAL, i53;
        }
        return ps(r43, e23), Object.defineProperty(r43.prototype, "geometry", {
            get: function() {
                return this._geometry;
            },
            enumerable: !1,
            configurable: !0
        }), r43.prototype.clone = function() {
            return this.finishPoly(), new r43(this._geometry);
        }, Object.defineProperty(r43.prototype, "blendMode", {
            get: function() {
                return this.state.blendMode;
            },
            set: function(t13) {
                this.state.blendMode = t13;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r43.prototype, "tint", {
            get: function() {
                return this._tint;
            },
            set: function(t13) {
                this._tint = t13;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r43.prototype, "fill", {
            get: function() {
                return this._fillStyle;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r43.prototype, "line", {
            get: function() {
                return this._lineStyle;
            },
            enumerable: !1,
            configurable: !0
        }), r43.prototype.lineStyle = function(t13, e28, r47, i53, n50) {
            return (void 0) === t13 && (t13 = null), (void 0) === e28 && (e28 = 0), (void 0) === r47 && (r47 = 1), (void 0) === i53 && (i53 = 0.5), (void 0) === n50 && (n50 = !1), "number" == typeof t13 && (t13 = {
                width: t13,
                color: e28,
                alpha: r47,
                alignment: i53,
                native: n50
            }), this.lineTextureStyle(t13);
        }, r43.prototype.lineTextureStyle = function(e28) {
            e28 = Object.assign({
                width: 0,
                texture: ri.WHITE,
                color: e28 && e28.texture ? 16777215 : 0,
                alpha: 1,
                matrix: null,
                alignment: 0.5,
                native: !1,
                cap: t.LINE_CAP.BUTT,
                join: t.LINE_JOIN.MITER,
                miterLimit: 10
            }, e28), this.currentPath && this.startPoly();
            var r47 = e28.width > 0 && e28.alpha > 0;
            return r47 ? (e28.matrix && (e28.matrix = e28.matrix.clone(), e28.matrix.invert()), Object.assign(this._lineStyle, {
                visible: r47
            }, e28)) : this._lineStyle.reset(), this;
        }, r43.prototype.startPoly = function() {
            if (this.currentPath) {
                var t13 = this.currentPath.points, e28 = this.currentPath.points.length;
                e28 > 2 && (this.drawShape(this.currentPath), this.currentPath = new We, this.currentPath.closeStroke = !1, this.currentPath.points.push(t13[e28 - 2], t13[e28 - 1]));
            } else this.currentPath = new We, this.currentPath.closeStroke = !1;
        }, r43.prototype.finishPoly = function() {
            this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0);
        }, r43.prototype.moveTo = function(t14, e29) {
            return this.startPoly(), this.currentPath.points[0] = t14, this.currentPath.points[1] = e29, this;
        }, r43.prototype.lineTo = function(t14, e29) {
            this.currentPath || this.moveTo(0, 0);
            var r47 = this.currentPath.points, i53 = r47[r47.length - 2], n50 = r47[r47.length - 1];
            return i53 === t14 && n50 === e29 || r47.push(t14, e29), this;
        }, r43.prototype._initCurve = function(t14, e29) {
            (void 0) === t14 && (t14 = 0), (void 0) === e29 && (e29 = 0), this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [
                t14,
                e29
            ]) : this.moveTo(t14, e29);
        }, r43.prototype.quadraticCurveTo = function(t14, e29, r47, i53) {
            this._initCurve();
            var n50 = this.currentPath.points;
            return 0 === n50.length && this.moveTo(0, 0), Os.curveTo(t14, e29, r47, i53, n50), this;
        }, r43.prototype.bezierCurveTo = function(t14, e29, r47, i53, n50, o49) {
            return this._initCurve(), Ss.curveTo(t14, e29, r47, i53, n50, o49, this.currentPath.points), this;
        }, r43.prototype.arcTo = function(t14, e29, r47, i53, n50) {
            this._initCurve(t14, e29);
            var o49 = this.currentPath.points, s45 = As.curveTo(t14, e29, r47, i53, n50, o49);
            if (s45) {
                var a49 = s45.cx, h43 = s45.cy, u42 = s45.radius, l34 = s45.startAngle, c27 = s45.endAngle, d27 = s45.anticlockwise;
                this.arc(a49, h43, u42, l34, c27, d27);
            }
            return this;
        }, r43.prototype.arc = function(t14, e29, r47, i53, n50, o49) {
            if ((void 0) === o49 && (o49 = !1), i53 === n50) return this;
            if (!o49 && n50 <= i53 ? n50 += Xe : o49 && i53 <= n50 && (i53 += Xe), 0 == n50 - i53) return this;
            var s45 = t14 + Math.cos(i53) * r47, a50 = e29 + Math.sin(i53) * r47, h44 = this._geometry.closePointEps, u43 = this.currentPath ? this.currentPath.points : null;
            if (u43) {
                var l35 = Math.abs(u43[u43.length - 2] - s45), c28 = Math.abs(u43[u43.length - 1] - a50);
                l35 < h44 && c28 < h44 || u43.push(s45, a50);
            } else this.moveTo(s45, a50), u43 = this.currentPath.points;
            return As.arc(s45, a50, t14, e29, r47, i53, n50, o49, u43), this;
        }, r43.prototype.beginFill = function(t14, e29) {
            return (void 0) === t14 && (t14 = 0), (void 0) === e29 && (e29 = 1), this.beginTextureFill({
                texture: ri.WHITE,
                color: t14,
                alpha: e29
            });
        }, r43.prototype.beginTextureFill = function(t14) {
            t14 = Object.assign({
                texture: ri.WHITE,
                color: 16777215,
                alpha: 1,
                matrix: null
            }, t14), this.currentPath && this.startPoly();
            var e29 = t14.alpha > 0;
            return e29 ? (t14.matrix && (t14.matrix = t14.matrix.clone(), t14.matrix.invert()), Object.assign(this._fillStyle, {
                visible: e29
            }, t14)) : this._fillStyle.reset(), this;
        }, r43.prototype.endFill = function() {
            return this.finishPoly(), this._fillStyle.reset(), this;
        }, r43.prototype.drawRect = function(t14, e29, r47, i53) {
            return this.drawShape(new Ye(t14, e29, r47, i53));
        }, r43.prototype.drawRoundedRect = function(t14, e29, r47, i53, n50) {
            return this.drawShape(new ze(t14, e29, r47, i53, n50));
        }, r43.prototype.drawCircle = function(t14, e29, r47) {
            return this.drawShape(new je(t14, e29, r47));
        }, r43.prototype.drawEllipse = function(t14, e29, r47, i53) {
            return this.drawShape(new Ve(t14, e29, r47, i53));
        }, r43.prototype.drawPolygon = function() {
            for(var t14, e29 = arguments, r47 = [], i53 = 0; i53 < arguments.length; i53++)r47[i53] = e29[i53];
            var n50 = !0, o49 = r47[0];
            o49.points ? (n50 = o49.closeStroke, t14 = o49.points) : t14 = Array.isArray(r47[0]) ? r47[0] : r47;
            var s45 = new We(t14);
            return s45.closeStroke = n50, this.drawShape(s45), this;
        }, r43.prototype.drawShape = function(t14) {
            return this._holeMode ? this._geometry.drawHole(t14, this._matrix) : this._geometry.drawShape(t14, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this;
        }, r43.prototype.clear = function() {
            return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = !1, this.currentPath = null, this;
        }, r43.prototype.isFastRect = function() {
            var e29 = this._geometry.graphicsData;
            return !(1 !== e29.length || e29[0].shape.type !== t.SHAPES.RECT || e29[0].holes.length || e29[0].lineStyle.visible && e29[0].lineStyle.width);
        }, r43.prototype._render = function(t14) {
            this.finishPoly();
            var e29 = this._geometry, r47 = t14.context.supports.uint32Indices;
            e29.updateBatches(r47), e29.batchable ? (this.batchDirty !== e29.batchDirty && this._populateBatches(), this._renderBatched(t14)) : (t14.batch.flush(), this._renderDirect(t14));
        }, r43.prototype._populateBatches = function() {
            var t14 = this._geometry, e29 = this.blendMode, r47 = t14.batches.length;
            this.batchTint = -1, this._transformID = -1, this.batchDirty = t14.batchDirty, this.batches.length = r47, this.vertexData = new Float32Array(t14.points);
            for(var i53 = 0; i53 < r47; i53++){
                var n50 = t14.batches[i53], o49 = n50.style.color, s45 = new Float32Array(this.vertexData.buffer, 4 * n50.attribStart * 2, 2 * n50.attribSize), a50 = new Float32Array(t14.uvsFloat32.buffer, 4 * n50.attribStart * 2, 2 * n50.attribSize), h44 = {
                    vertexData: s45,
                    blendMode: e29,
                    indices: new Uint16Array(t14.indicesUint16.buffer, 2 * n50.start, n50.size),
                    uvs: a50,
                    _batchRGB: ce(o49),
                    _tintRGB: o49,
                    _texture: n50.style.texture,
                    alpha: n50.style.alpha,
                    worldAlpha: 1
                };
                this.batches[i53] = h44;
            }
        }, r43.prototype._renderBatched = function(t14) {
            if (this.batches.length) {
                t14.batch.setObjectRenderer(t14.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
                for(var e29 = 0, r47 = this.batches.length; e29 < r47; e29++){
                    var i53 = this.batches[e29];
                    i53.worldAlpha = this.worldAlpha * i53.alpha, t14.plugins[this.pluginName].render(i53);
                }
            }
        }, r43.prototype._renderDirect = function(t14) {
            var e30 = this._resolveDirectShader(t14), r48 = this._geometry, i54 = this.tint, n51 = this.worldAlpha, o50 = e30.uniforms, s46 = r48.drawCalls;
            o50.translationMatrix = this.transform.worldTransform, o50.tint[0] = (i54 >> 16 & 255) / 255 * n51, o50.tint[1] = (i54 >> 8 & 255) / 255 * n51, o50.tint[2] = (255 & i54) / 255 * n51, o50.tint[3] = n51, t14.shader.bind(e30), t14.geometry.bind(r48, e30), t14.state.set(this.state);
            for(var a51 = 0, h45 = s46.length; a51 < h45; a51++)this._renderDrawCallDirect(t14, r48.drawCalls[a51]);
        }, r43.prototype._renderDrawCallDirect = function(t14, e30) {
            for(var r48 = e30.texArray, i54 = e30.type, n51 = e30.size, o50 = e30.start, s46 = r48.count, a51 = 0; a51 < s46; a51++)t14.texture.bind(r48.elements[a51], a51);
            t14.geometry.draw(i54, n51, o50);
        }, r43.prototype._resolveDirectShader = function(t14) {
            var e30 = this.shader, r48 = this.pluginName;
            if (!e30) {
                if (!Gs[r48]) {
                    for(var i54 = t14.plugins.batch.MAX_TEXTURES, n51 = new Int32Array(i54), o50 = 0; o50 < i54; o50++)n51[o50] = o50;
                    var s46 = {
                        tint: new Float32Array([
                            1,
                            1,
                            1,
                            1
                        ]),
                        translationMatrix: new Ze,
                        default: vi.from({
                            uSamplers: n51
                        }, !0)
                    }, a51 = t14.plugins[r48]._shader.program;
                    Gs[r48] = new rn(a51, s46);
                }
                e30 = Gs[r48];
            }
            return e30;
        }, r43.prototype._calculateBounds = function() {
            this.finishPoly();
            var t14 = this._geometry;
            if (t14.graphicsData.length) {
                var e30 = t14.bounds, r48 = e30.minX, i55 = e30.minY, n52 = e30.maxX, o51 = e30.maxY;
                this._bounds.addFrame(this.transform, r48, i55, n52, o51);
            }
        }, r43.prototype.containsPoint = function(t14) {
            return this.worldTransform.applyInverse(t14, r43._TEMP_POINT), this._geometry.containsPoint(r43._TEMP_POINT);
        }, r43.prototype.calculateTints = function() {
            if (this.batchTint !== this.tint) {
                this.batchTint = this.tint;
                for(var t14 = ce(this.tint, Bs), e31 = 0; e31 < this.batches.length; e31++){
                    var r49 = this.batches[e31], i56 = r49._batchRGB, n53 = (t14[0] * i56[0] * 255 << 16) + (t14[1] * i56[1] * 255 << 8) + (0 | t14[2] * i56[2] * 255);
                    r49._tintRGB = (n53 >> 16) + (65280 & n53) + ((255 & n53) << 16);
                }
            }
        }, r43.prototype.calculateVertices = function() {
            var t15 = this.transform._worldID;
            if (this._transformID !== t15) {
                this._transformID = t15;
                for(var e32 = this.transform.worldTransform, r50 = e32.a, i57 = e32.b, n54 = e32.c, o52 = e32.d, s47 = e32.tx, a52 = e32.ty, h45 = this._geometry.points, u43 = this.vertexData, l36 = 0, c29 = 0; c29 < h45.length; c29 += 2){
                    var d28 = h45[c29], f21 = h45[c29 + 1];
                    u43[l36++] = r50 * d28 + n54 * f21 + s47, u43[l36++] = o52 * f21 + i57 * d28 + a52;
                }
            }
        }, r43.prototype.closePath = function() {
            var t15 = this.currentPath;
            return t15 && (t15.closeStroke = !0, this.finishPoly()), this;
        }, r43.prototype.setMatrix = function(t15) {
            return this._matrix = t15, this;
        }, r43.prototype.beginHole = function() {
            return this.finishPoly(), this._holeMode = !0, this;
        }, r43.prototype.endHole = function() {
            return this.finishPoly(), this._holeMode = !1, this;
        }, r43.prototype.destroy = function(t15) {
            this._geometry.refCount--, 0 === this._geometry.refCount && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, e23.prototype.destroy.call(this, t15);
        }, r43._TEMP_POINT = new qe, r43;
    }(dr), ks = {
        buildPoly: _s,
        buildCircle: ms,
        buildRectangle: vs,
        buildRoundedRectangle: gs,
        buildLine: Rs,
        ArcUtils: As,
        BezierUtils: Ss,
        QuadraticUtils: Os,
        BatchPart: Is,
        FILL_COMMANDS: Ps,
        BATCH_POOL: Ms,
        DRAW_CALL_POOL: Ds
    }, Hs = function(t15, e23) {
        return (Hs = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t16, e33) {
            t16.__proto__ = e33;
        } || function(t16, e33) {
            for(var r43 in e33)e33.hasOwnProperty(r43) && (t16[r43] = e33[r43]);
        })(t15, e23);
    }, Ys = new qe, js = new Uint16Array([
        0,
        1,
        2,
        0,
        2,
        3
    ]), Vs = function(e23) {
        function r43(r51) {
            var i58 = e23.call(this) || this;
            return i58._anchor = new Ke(i58._onAnchorUpdate, i58, r51 ? r51.defaultAnchor.x : 0, r51 ? r51.defaultAnchor.y : 0), i58._texture = null, i58._width = 0, i58._height = 0, i58._tint = null, i58._tintRGB = null, i58.tint = 16777215, i58.blendMode = t.BLEND_MODES.NORMAL, i58._cachedTint = 16777215, i58.uvs = null, i58.texture = r51 || ri.EMPTY, i58.vertexData = new Float32Array(8), i58.vertexTrimmedData = null, i58._transformID = -1, i58._textureID = -1, i58._transformTrimmedID = -1, i58._textureTrimmedID = -1, i58.indices = js, i58.pluginName = "batch", i58.isSprite = !0, i58._roundPixels = rt.ROUND_PIXELS, i58;
        }
        return (function(t15, e33) {
            function r51() {
                this.constructor = t15;
            }
            Hs(t15, e33), t15.prototype = null === e33 ? Object.create(e33) : (r51.prototype = e33.prototype, new r51);
        })(r43, e23), r43.prototype._onTextureUpdate = function() {
            this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = Se(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = Se(this.scale.y) * this._height / this._texture.orig.height);
        }, r43.prototype._onAnchorUpdate = function() {
            this._transformID = -1, this._transformTrimmedID = -1;
        }, r43.prototype.calculateVertices = function() {
            var t15 = this._texture;
            if (this._transformID !== this.transform._worldID || this._textureID !== t15._updateID) {
                this._textureID !== t15._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t15._updateID;
                var e33 = this.transform.worldTransform, r51 = e33.a, i58 = e33.b, n55 = e33.c, o53 = e33.d, s48 = e33.tx, a53 = e33.ty, h46 = this.vertexData, u44 = t15.trim, l37 = t15.orig, c30 = this._anchor, d29 = 0, f22 = 0, p20 = 0, _ = 0;
                if (u44 ? (d29 = (f22 = u44.x - c30._x * l37.width) + u44.width, p20 = (_ = u44.y - c30._y * l37.height) + u44.height) : (d29 = (f22 = -c30._x * l37.width) + l37.width, p20 = (_ = -c30._y * l37.height) + l37.height), h46[0] = r51 * f22 + n55 * _ + s48, h46[1] = o53 * _ + i58 * f22 + a53, h46[2] = r51 * d29 + n55 * _ + s48, h46[3] = o53 * _ + i58 * d29 + a53, h46[4] = r51 * d29 + n55 * p20 + s48, h46[5] = o53 * p20 + i58 * d29 + a53, h46[6] = r51 * f22 + n55 * p20 + s48, h46[7] = o53 * p20 + i58 * f22 + a53, this._roundPixels) for(var m10 = rt.RESOLUTION, v7 = 0; v7 < h46.length; ++v7)h46[v7] = Math.round((h46[v7] * m10 | 0) / m10);
            }
        }, r43.prototype.calculateTrimmedVertices = function() {
            if (this.vertexTrimmedData) {
                if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return;
            } else this.vertexTrimmedData = new Float32Array(8);
            this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
            var t15 = this._texture, e34 = this.vertexTrimmedData, r52 = t15.orig, i59 = this._anchor, n56 = this.transform.worldTransform, o54 = n56.a, s49 = n56.b, a54 = n56.c, h47 = n56.d, u45 = n56.tx, l38 = n56.ty, c31 = -i59._x * r52.width, d30 = c31 + r52.width, f23 = -i59._y * r52.height, p21 = f23 + r52.height;
            e34[0] = o54 * c31 + a54 * f23 + u45, e34[1] = h47 * f23 + s49 * c31 + l38, e34[2] = o54 * d30 + a54 * f23 + u45, e34[3] = h47 * f23 + s49 * d30 + l38, e34[4] = o54 * d30 + a54 * p21 + u45, e34[5] = h47 * p21 + s49 * d30 + l38, e34[6] = o54 * c31 + a54 * p21 + u45, e34[7] = h47 * p21 + s49 * c31 + l38;
        }, r43.prototype._render = function(t15) {
            this.calculateVertices(), t15.batch.setObjectRenderer(t15.plugins[this.pluginName]), t15.plugins[this.pluginName].render(this);
        }, r43.prototype._calculateBounds = function() {
            var t15 = this._texture.trim, e34 = this._texture.orig;
            !t15 || t15.width === e34.width && t15.height === e34.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData));
        }, r43.prototype.getLocalBounds = function(t15) {
            return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t15 || (this._localBoundsRect || (this._localBoundsRect = new Ye), t15 = this._localBoundsRect), this._bounds.getRectangle(t15)) : e23.prototype.getLocalBounds.call(this, t15);
        }, r43.prototype.containsPoint = function(t15) {
            this.worldTransform.applyInverse(t15, Ys);
            var e34 = this._texture.orig.width, r52 = this._texture.orig.height, i59 = -e34 * this.anchor.x, n56 = 0;
            return Ys.x >= i59 && Ys.x < i59 + e34 && (n56 = -r52 * this.anchor.y, Ys.y >= n56 && Ys.y < n56 + r52);
        }, r43.prototype.destroy = function(t15) {
            if (e23.prototype.destroy.call(this, t15), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, "boolean" == typeof t15 ? t15 : t15 && t15.texture) {
                var r52 = "boolean" == typeof t15 ? t15 : t15 && t15.baseTexture;
                this._texture.destroy(!!r52);
            }
            this._texture = null;
        }, r43.from = function(t15, e34) {
            return new r43(t15 instanceof ri ? t15 : ri.from(t15, e34));
        }, Object.defineProperty(r43.prototype, "roundPixels", {
            get: function() {
                return this._roundPixels;
            },
            set: function(t15) {
                this._roundPixels !== t15 && (this._transformID = -1), this._roundPixels = t15;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r43.prototype, "width", {
            get: function() {
                return Math.abs(this.scale.x) * this._texture.orig.width;
            },
            set: function(t15) {
                var e34 = Se(this.scale.x) || 1;
                this.scale.x = e34 * t15 / this._texture.orig.width, this._width = t15;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r43.prototype, "height", {
            get: function() {
                return Math.abs(this.scale.y) * this._texture.orig.height;
            },
            set: function(t15) {
                var e34 = Se(this.scale.y) || 1;
                this.scale.y = e34 * t15 / this._texture.orig.height, this._height = t15;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r43.prototype, "anchor", {
            get: function() {
                return this._anchor;
            },
            set: function(t15) {
                this._anchor.copyFrom(t15);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r43.prototype, "tint", {
            get: function() {
                return this._tint;
            },
            set: function(t15) {
                this._tint = t15, this._tintRGB = (t15 >> 16) + (65280 & t15) + ((255 & t15) << 16);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r43.prototype, "texture", {
            get: function() {
                return this._texture;
            },
            set: function(t15) {
                this._texture !== t15 && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t15 || ri.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t15 && (t15.baseTexture.valid ? this._onTextureUpdate() : t15.once("update", this._onTextureUpdate, this)));
            },
            enumerable: !1,
            configurable: !0
        }), r43;
    }(dr), Ws = function(t15, e23) {
        return (Ws = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t16, e34) {
            t16.__proto__ = e34;
        } || function(t16, e34) {
            for(var r43 in e34)e34.hasOwnProperty(r43) && (t16[r43] = e34[r43]);
        })(t15, e23);
    };
    !function(t15) {
        t15[t15.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", t15[t15.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL";
    }(t.TEXT_GRADIENT || (t.TEXT_GRADIENT = {
    }));
    var zs = {
        align: "left",
        breakWords: !1,
        dropShadow: !1,
        dropShadowAlpha: 1,
        dropShadowAngle: Math.PI / 6,
        dropShadowBlur: 0,
        dropShadowColor: "black",
        dropShadowDistance: 5,
        fill: "black",
        fillGradientType: t.TEXT_GRADIENT.LINEAR_VERTICAL,
        fillGradientStops: [],
        fontFamily: "Arial",
        fontSize: 26,
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 0,
        lineJoin: "miter",
        miterLimit: 10,
        padding: 0,
        stroke: "black",
        strokeThickness: 0,
        textBaseline: "alphabetic",
        trim: !1,
        whiteSpace: "pre",
        wordWrap: !1,
        wordWrapWidth: 100,
        leading: 0
    }, qs = [
        "serif",
        "sans-serif",
        "monospace",
        "cursive",
        "fantasy",
        "system-ui"
    ], Ks = function() {
        function t15(t16) {
            this.styleID = 0, this.reset(), Js(this, t16, t16);
        }
        return t15.prototype.clone = function() {
            var e23 = {
            };
            return Js(e23, this, zs), new t15(e23);
        }, t15.prototype.reset = function() {
            Js(this, zs, zs);
        }, Object.defineProperty(t15.prototype, "align", {
            get: function() {
                return this._align;
            },
            set: function(t16) {
                this._align !== t16 && (this._align = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "breakWords", {
            get: function() {
                return this._breakWords;
            },
            set: function(t16) {
                this._breakWords !== t16 && (this._breakWords = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "dropShadow", {
            get: function() {
                return this._dropShadow;
            },
            set: function(t16) {
                this._dropShadow !== t16 && (this._dropShadow = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "dropShadowAlpha", {
            get: function() {
                return this._dropShadowAlpha;
            },
            set: function(t16) {
                this._dropShadowAlpha !== t16 && (this._dropShadowAlpha = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "dropShadowAngle", {
            get: function() {
                return this._dropShadowAngle;
            },
            set: function(t16) {
                this._dropShadowAngle !== t16 && (this._dropShadowAngle = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "dropShadowBlur", {
            get: function() {
                return this._dropShadowBlur;
            },
            set: function(t16) {
                this._dropShadowBlur !== t16 && (this._dropShadowBlur = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "dropShadowColor", {
            get: function() {
                return this._dropShadowColor;
            },
            set: function(t16) {
                var e23 = Qs(t16);
                this._dropShadowColor !== e23 && (this._dropShadowColor = e23, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "dropShadowDistance", {
            get: function() {
                return this._dropShadowDistance;
            },
            set: function(t16) {
                this._dropShadowDistance !== t16 && (this._dropShadowDistance = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "fill", {
            get: function() {
                return this._fill;
            },
            set: function(t16) {
                var e23 = Qs(t16);
                this._fill !== e23 && (this._fill = e23, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "fillGradientType", {
            get: function() {
                return this._fillGradientType;
            },
            set: function(t16) {
                this._fillGradientType !== t16 && (this._fillGradientType = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "fillGradientStops", {
            get: function() {
                return this._fillGradientStops;
            },
            set: function(t16) {
                (function(t17, e23) {
                    if (!Array.isArray(t17) || !Array.isArray(e23)) return !1;
                    if (t17.length !== e23.length) return !1;
                    for(var r43 = 0; r43 < t17.length; ++r43)if (t17[r43] !== e23[r43]) return !1;
                    return !0;
                })(this._fillGradientStops, t16) || (this._fillGradientStops = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "fontFamily", {
            get: function() {
                return this._fontFamily;
            },
            set: function(t16) {
                this.fontFamily !== t16 && (this._fontFamily = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "fontSize", {
            get: function() {
                return this._fontSize;
            },
            set: function(t16) {
                this._fontSize !== t16 && (this._fontSize = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "fontStyle", {
            get: function() {
                return this._fontStyle;
            },
            set: function(t16) {
                this._fontStyle !== t16 && (this._fontStyle = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "fontVariant", {
            get: function() {
                return this._fontVariant;
            },
            set: function(t16) {
                this._fontVariant !== t16 && (this._fontVariant = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "fontWeight", {
            get: function() {
                return this._fontWeight;
            },
            set: function(t16) {
                this._fontWeight !== t16 && (this._fontWeight = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "letterSpacing", {
            get: function() {
                return this._letterSpacing;
            },
            set: function(t16) {
                this._letterSpacing !== t16 && (this._letterSpacing = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "lineHeight", {
            get: function() {
                return this._lineHeight;
            },
            set: function(t16) {
                this._lineHeight !== t16 && (this._lineHeight = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "leading", {
            get: function() {
                return this._leading;
            },
            set: function(t16) {
                this._leading !== t16 && (this._leading = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "lineJoin", {
            get: function() {
                return this._lineJoin;
            },
            set: function(t16) {
                this._lineJoin !== t16 && (this._lineJoin = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "miterLimit", {
            get: function() {
                return this._miterLimit;
            },
            set: function(t16) {
                this._miterLimit !== t16 && (this._miterLimit = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "padding", {
            get: function() {
                return this._padding;
            },
            set: function(t16) {
                this._padding !== t16 && (this._padding = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "stroke", {
            get: function() {
                return this._stroke;
            },
            set: function(t16) {
                var e23 = Qs(t16);
                this._stroke !== e23 && (this._stroke = e23, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "strokeThickness", {
            get: function() {
                return this._strokeThickness;
            },
            set: function(t16) {
                this._strokeThickness !== t16 && (this._strokeThickness = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "textBaseline", {
            get: function() {
                return this._textBaseline;
            },
            set: function(t16) {
                this._textBaseline !== t16 && (this._textBaseline = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "trim", {
            get: function() {
                return this._trim;
            },
            set: function(t16) {
                this._trim !== t16 && (this._trim = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "whiteSpace", {
            get: function() {
                return this._whiteSpace;
            },
            set: function(t16) {
                this._whiteSpace !== t16 && (this._whiteSpace = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "wordWrap", {
            get: function() {
                return this._wordWrap;
            },
            set: function(t16) {
                this._wordWrap !== t16 && (this._wordWrap = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t15.prototype, "wordWrapWidth", {
            get: function() {
                return this._wordWrapWidth;
            },
            set: function(t16) {
                this._wordWrapWidth !== t16 && (this._wordWrapWidth = t16, this.styleID++);
            },
            enumerable: !1,
            configurable: !0
        }), t15.prototype.toFontString = function() {
            var t16 = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize, e23 = this.fontFamily;
            Array.isArray(this.fontFamily) || (e23 = this.fontFamily.split(","));
            for(var r43 = e23.length - 1; r43 >= 0; r43--){
                var i59 = e23[r43].trim();
                !/([\"\'])[^\'\"]+\1/.test(i59) && qs.indexOf(i59) < 0 && (i59 = '"' + i59 + '"'), e23[r43] = i59;
            }
            return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t16 + " " + e23.join(",");
        }, t15;
    }();
    function Zs(t15) {
        return "number" == typeof t15 ? de(t15) : ("string" == typeof t15 && 0 === t15.indexOf("0x") && (t15 = t15.replace("0x", "#")), t15);
    }
    function Qs(t15) {
        if (Array.isArray(t15)) {
            for(var e23 = 0; e23 < t15.length; ++e23)t15[e23] = Zs(t15[e23]);
            return t15;
        }
        return Zs(t15);
    }
    function Js(t15, e34, r43) {
        for(var i60 in r43)Array.isArray(e34[i60]) ? t15[i60] = e34[i60].slice() : t15[i60] = e34[i60];
    }
    var $s = function() {
        function t15(t16, e34, r43, i60, n56, o54, s49, a54, h47) {
            this.text = t16, this.style = e34, this.width = r43, this.height = i60, this.lines = n56, this.lineWidths = o54, this.lineHeight = s49, this.maxLineWidth = a54, this.fontProperties = h47;
        }
        return t15.measureText = function(e34, r43, i60, n56) {
            (void 0) === n56 && (n56 = t15._canvas), i60 = null == i60 ? r43.wordWrap : i60;
            var o54 = r43.toFontString(), s49 = t15.measureFont(o54);
            0 === s49.fontSize && (s49.fontSize = r43.fontSize, s49.ascent = r43.fontSize);
            var a54 = n56.getContext("2d");
            a54.font = o54;
            for(var h47 = (i60 ? t15.wordWrap(e34, r43, n56) : e34).split(/(?:\r\n|\r|\n)/), u45 = new Array(h47.length), l38 = 0, c31 = 0; c31 < h47.length; c31++){
                var d30 = a54.measureText(h47[c31]).width + (h47[c31].length - 1) * r43.letterSpacing;
                u45[c31] = d30, l38 = Math.max(l38, d30);
            }
            var f23 = l38 + r43.strokeThickness;
            r43.dropShadow && (f23 += r43.dropShadowDistance);
            var p21 = r43.lineHeight || s49.fontSize + r43.strokeThickness, _ = Math.max(p21, s49.fontSize + r43.strokeThickness) + (h47.length - 1) * (p21 + r43.leading);
            return r43.dropShadow && (_ += r43.dropShadowDistance), new t15(e34, r43, f23, _, h47, u45, p21 + r43.leading, l38, s49);
        }, t15.wordWrap = function(e34, r43, i60) {
            (void 0) === i60 && (i60 = t15._canvas);
            for(var n56 = i60.getContext("2d"), o54 = 0, s49 = "", a54 = "", h47 = Object.create(null), u45 = r43.letterSpacing, l38 = r43.whiteSpace, c31 = t15.collapseSpaces(l38), d31 = t15.collapseNewlines(l38), f23 = !c31, p21 = r43.wordWrapWidth + u45, _ = t15.tokenize(e34), m11 = 0; m11 < _.length; m11++){
                var v8 = _[m11];
                if (t15.isNewline(v8)) {
                    if (!d31) {
                        a54 += t15.addLine(s49), f23 = !c31, s49 = "", o54 = 0;
                        continue;
                    }
                    v8 = " ";
                }
                if (c31) {
                    var y9 = t15.isBreakingSpace(v8), E = t15.isBreakingSpace(s49[s49.length - 1]);
                    if (y9 && E) continue;
                }
                var g6 = t15.getFromCache(v8, u45, h47, n56);
                if (g6 > p21) {
                    if ("" !== s49 && (a54 += t15.addLine(s49), s49 = "", o54 = 0), t15.canBreakWords(v8, r43.breakWords)) for(var T4 = t15.wordWrapSplit(v8), b4 = 0; b4 < T4.length; b4++){
                        for(var R4 = T4[b4], x3 = 1; T4[b4 + x3];){
                            var A4 = T4[b4 + x3], S3 = R4[R4.length - 1];
                            if (t15.canBreakChars(S3, A4, v8, b4, r43.breakWords)) break;
                            R4 += A4, x3++;
                        }
                        b4 += R4.length - 1;
                        var O4 = t15.getFromCache(R4, u45, h47, n56);
                        O4 + o54 > p21 && (a54 += t15.addLine(s49), f23 = !1, s49 = "", o54 = 0), s49 += R4, o54 += O4;
                    }
                    else {
                        s49.length > 0 && (a54 += t15.addLine(s49), s49 = "", o54 = 0);
                        var I4 = m11 === _.length - 1;
                        a54 += t15.addLine(v8, !I4), f23 = !1, s49 = "", o54 = 0;
                    }
                } else g6 + o54 > p21 && (f23 = !1, a54 += t15.addLine(s49), s49 = "", o54 = 0), (s49.length > 0 || !t15.isBreakingSpace(v8) || f23) && (s49 += v8, o54 += g6);
            }
            return a54 + t15.addLine(s49, !1);
        }, t15.addLine = function(e34, r43) {
            return (void 0) === r43 && (r43 = !0), e34 = t15.trimRight(e34), r43 ? e34 + "\n" : e34;
        }, t15.getFromCache = function(t16, e34, r43, i60) {
            var n56 = r43[t16];
            if ("number" != typeof n56) {
                var o54 = t16.length * e34;
                n56 = i60.measureText(t16).width + o54, r43[t16] = n56;
            }
            return n56;
        }, t15.collapseSpaces = function(t16) {
            return "normal" === t16 || "pre-line" === t16;
        }, t15.collapseNewlines = function(t16) {
            return "normal" === t16;
        }, t15.trimRight = function(e34) {
            if ("string" != typeof e34) return "";
            for(var r43 = e34.length - 1; r43 >= 0; r43--){
                var i60 = e34[r43];
                if (!t15.isBreakingSpace(i60)) break;
                e34 = e34.slice(0, -1);
            }
            return e34;
        }, t15.isNewline = function(e34) {
            return "string" == typeof e34 && t15._newlines.indexOf(e34.charCodeAt(0)) >= 0;
        }, t15.isBreakingSpace = function(e34, r43) {
            return "string" == typeof e34 && t15._breakingSpaces.indexOf(e34.charCodeAt(0)) >= 0;
        }, t15.tokenize = function(e34) {
            var r43 = [], i61 = "";
            if ("string" != typeof e34) return r43;
            for(var n56 = 0; n56 < e34.length; n56++){
                var o55 = e34[n56], s49 = e34[n56 + 1];
                t15.isBreakingSpace(o55, s49) || t15.isNewline(o55) ? ("" !== i61 && (r43.push(i61), i61 = ""), r43.push(o55)) : i61 += o55;
            }
            return "" !== i61 && r43.push(i61), r43;
        }, t15.canBreakWords = function(t16, e34) {
            return e34;
        }, t15.canBreakChars = function(t16, e34, r43, i61, n56) {
            return !0;
        }, t15.wordWrapSplit = function(t16) {
            return t16.split("");
        }, t15.measureFont = function(e34) {
            if (t15._fonts[e34]) return t15._fonts[e34];
            var r43 = {
                ascent: 0,
                descent: 0,
                fontSize: 0
            }, i61 = t15._canvas, n56 = t15._context;
            n56.font = e34;
            var o56 = t15.METRICS_STRING + t15.BASELINE_SYMBOL, s50 = Math.ceil(n56.measureText(o56).width), a54 = Math.ceil(n56.measureText(t15.BASELINE_SYMBOL).width), h47 = Math.ceil(t15.HEIGHT_MULTIPLIER * a54);
            a54 = a54 * t15.BASELINE_MULTIPLIER | 0, i61.width = s50, i61.height = h47, n56.fillStyle = "#f00", n56.fillRect(0, 0, s50, h47), n56.font = e34, n56.textBaseline = "alphabetic", n56.fillStyle = "#000", n56.fillText(o56, 0, a54);
            var u45 = n56.getImageData(0, 0, s50, h47).data, l38 = u45.length, c31 = 4 * s50, d31 = 0, f23 = 0, p21 = !1;
            for(d31 = 0; d31 < a54; ++d31){
                for(var _ = 0; _ < c31; _ += 4)if (255 !== u45[f23 + _]) {
                    p21 = !0;
                    break;
                }
                if (p21) break;
                f23 += c31;
            }
            for(r43.ascent = a54 - d31, f23 = l38 - c31, p21 = !1, d31 = h47; d31 > a54; --d31){
                for(_ = 0; _ < c31; _ += 4)if (255 !== u45[f23 + _]) {
                    p21 = !0;
                    break;
                }
                if (p21) break;
                f23 -= c31;
            }
            return r43.descent = d31 - a54, r43.fontSize = r43.ascent + r43.descent, t15._fonts[e34] = r43, r43;
        }, t15.clearMetrics = function(e34) {
            (void 0) === e34 && (e34 = ""), e34 ? delete t15._fonts[e34] : t15._fonts = {
            };
        }, t15;
    }(), ta = function() {
        try {
            var t15 = new OffscreenCanvas(0, 0), e34 = t15.getContext("2d");
            return e34 && e34.measureText ? t15 : document.createElement("canvas");
        } catch (t16) {
            return document.createElement("canvas");
        }
    }();
    ta.width = ta.height = 10, $s._canvas = ta, $s._context = ta.getContext("2d"), $s._fonts = {
    }, $s.METRICS_STRING = "|ÉqÅ", $s.BASELINE_SYMBOL = "M", $s.BASELINE_MULTIPLIER = 1.4, $s.HEIGHT_MULTIPLIER = 2, $s._newlines = [
        10,
        13
    ], $s._breakingSpaces = [
        9,
        32,
        8192,
        8193,
        8194,
        8195,
        8196,
        8197,
        8198,
        8200,
        8201,
        8202,
        8287,
        12288
    ];
    var ea = {
        texture: !0,
        children: !1,
        baseTexture: !0
    }, ra = function(e34) {
        function r43(t15, r53, i61) {
            var n56 = this, o56 = !1;
            i61 || (i61 = document.createElement("canvas"), o56 = !0), i61.width = 3, i61.height = 3;
            var s50 = ri.from(i61);
            return s50.orig = new Ye, s50.trim = new Ye, (n56 = e34.call(this, s50) || this)._ownCanvas = o56, n56.canvas = i61, n56.context = n56.canvas.getContext("2d"), n56._resolution = rt.RESOLUTION, n56._autoResolution = !0, n56._text = null, n56._style = null, n56._styleListener = null, n56._font = "", n56.text = t15, n56.style = r53, n56.localStyleID = -1, n56;
        }
        return (function(t15, e35) {
            function r53() {
                this.constructor = t15;
            }
            Ws(t15, e35), t15.prototype = null === e35 ? Object.create(e35) : (r53.prototype = e35.prototype, new r53);
        })(r43, e34), r43.prototype.updateText = function(t15) {
            var e35 = this._style;
            if (this.localStyleID !== e35.styleID && (this.dirty = !0, this.localStyleID = e35.styleID), this.dirty || !t15) {
                this._font = this._style.toFontString();
                var i61, n56, o56 = this.context, s50 = $s.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas), a54 = s50.width, h47 = s50.height, u45 = s50.lines, l38 = s50.lineHeight, c31 = s50.lineWidths, d31 = s50.maxLineWidth, f23 = s50.fontProperties;
                this.canvas.width = Math.ceil(Math.ceil(Math.max(1, a54) + 2 * e35.padding) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, h47) + 2 * e35.padding) * this._resolution), o56.scale(this._resolution, this._resolution), o56.clearRect(0, 0, this.canvas.width, this.canvas.height), o56.font = this._font, o56.lineWidth = e35.strokeThickness, o56.textBaseline = e35.textBaseline, o56.lineJoin = e35.lineJoin, o56.miterLimit = e35.miterLimit;
                for(var p21 = e35.dropShadow ? 2 : 1, _ = 0; _ < p21; ++_){
                    var m11 = e35.dropShadow && 0 === _, v9 = m11 ? Math.ceil(Math.max(1, h47) + 2 * e35.padding) : 0, y10 = v9 * this._resolution;
                    if (m11) {
                        o56.fillStyle = "black", o56.strokeStyle = "black";
                        var E = e35.dropShadowColor, g7 = ce("number" == typeof E ? E : fe(E));
                        o56.shadowColor = "rgba(" + 255 * g7[0] + "," + 255 * g7[1] + "," + 255 * g7[2] + "," + e35.dropShadowAlpha + ")", o56.shadowBlur = e35.dropShadowBlur, o56.shadowOffsetX = Math.cos(e35.dropShadowAngle) * e35.dropShadowDistance, o56.shadowOffsetY = Math.sin(e35.dropShadowAngle) * e35.dropShadowDistance + y10;
                    } else o56.fillStyle = this._generateFillStyle(e35, u45, s50), o56.strokeStyle = e35.stroke, o56.shadowColor = "black", o56.shadowBlur = 0, o56.shadowOffsetX = 0, o56.shadowOffsetY = 0;
                    var T5 = (l38 - f23.fontSize) / 2;
                    (!r43.nextLineHeightBehavior || l38 - f23.fontSize < 0) && (T5 = 0);
                    for(var b5 = 0; b5 < u45.length; b5++)i61 = e35.strokeThickness / 2, n56 = e35.strokeThickness / 2 + b5 * l38 + f23.ascent + T5, "right" === e35.align ? i61 += d31 - c31[b5] : "center" === e35.align && (i61 += (d31 - c31[b5]) / 2), e35.stroke && e35.strokeThickness && this.drawLetterSpacing(u45[b5], i61 + e35.padding, n56 + e35.padding - v9, !0), e35.fill && this.drawLetterSpacing(u45[b5], i61 + e35.padding, n56 + e35.padding - v9);
                }
                this.updateTexture();
            }
        }, r43.prototype.drawLetterSpacing = function(t15, e35, r53, i62) {
            (void 0) === i62 && (i62 = !1);
            var n57 = this._style.letterSpacing;
            if (0 !== n57) for(var o57 = e35, s51 = Array.from ? Array.from(t15) : t15.split(""), a55 = this.context.measureText(t15).width, h48 = 0, u46 = 0; u46 < s51.length; ++u46){
                var l39 = s51[u46];
                i62 ? this.context.strokeText(l39, o57, r53) : this.context.fillText(l39, o57, r53), o57 += a55 - (h48 = this.context.measureText(t15.substring(u46 + 1)).width) + n57, a55 = h48;
            }
            else i62 ? this.context.strokeText(t15, e35, r53) : this.context.fillText(t15, e35, r53);
        }, r43.prototype.updateTexture = function() {
            var t15 = this.canvas;
            if (this._style.trim) {
                var e35 = Ce(t15);
                e35.data && (t15.width = e35.width, t15.height = e35.height, this.context.putImageData(e35.data, 0, 0));
            }
            var r53 = this._texture, i62 = this._style, n57 = i62.trim ? 0 : i62.padding, o57 = r53.baseTexture;
            r53.trim.width = r53._frame.width = t15.width / this._resolution, r53.trim.height = r53._frame.height = t15.height / this._resolution, r53.trim.x = -n57, r53.trim.y = -n57, r53.orig.width = r53._frame.width - 2 * n57, r53.orig.height = r53._frame.height - 2 * n57, this._onTextureUpdate(), o57.setRealSize(t15.width, t15.height, this._resolution), r53.updateUvs(), this._recursivePostUpdateTransform(), this.dirty = !1;
        }, r43.prototype._render = function(t15) {
            this._autoResolution && this._resolution !== t15.resolution && (this._resolution = t15.resolution, this.dirty = !0), this.updateText(!0), e34.prototype._render.call(this, t15);
        }, r43.prototype.getLocalBounds = function(t15) {
            return this.updateText(!0), e34.prototype.getLocalBounds.call(this, t15);
        }, r43.prototype._calculateBounds = function() {
            this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData);
        }, r43.prototype._generateFillStyle = function(e36, r53, i62) {
            var n57, o57 = e36.fill;
            if (!Array.isArray(o57)) return o57;
            if (1 === o57.length) return o57[0];
            var s51 = e36.dropShadow ? e36.dropShadowDistance : 0, a55 = e36.padding || 0, h48 = this.canvas.width / this._resolution - s51 - 2 * a55, u46 = this.canvas.height / this._resolution - s51 - 2 * a55, l40 = o57.slice(), c32 = e36.fillGradientStops.slice();
            if (!c32.length) for(var d32 = l40.length + 1, f24 = 1; f24 < d32; ++f24)c32.push(f24 / d32);
            if (l40.unshift(o57[0]), c32.unshift(0), l40.push(o57[o57.length - 1]), c32.push(1), e36.fillGradientType === t.TEXT_GRADIENT.LINEAR_VERTICAL) {
                n57 = this.context.createLinearGradient(h48 / 2, a55, h48 / 2, u46 + a55);
                var p22 = i62.fontProperties.fontSize + e36.strokeThickness;
                for(f24 = 0; f24 < r53.length; f24++){
                    var _ = i62.lineHeight * (f24 - 1) + p22, m12 = i62.lineHeight * f24, v10 = m12;
                    f24 > 0 && _ > m12 && (v10 = (m12 + _) / 2);
                    var y11 = m12 + p22, E = i62.lineHeight * (f24 + 1), g8 = y11;
                    f24 + 1 < r53.length && E < y11 && (g8 = (y11 + E) / 2);
                    for(var T6 = (g8 - v10) / u46, b6 = 0; b6 < l40.length; b6++){
                        var R5;
                        R5 = "number" == typeof c32[b6] ? c32[b6] : b6 / l40.length;
                        var x4 = Math.min(1, Math.max(0, v10 / u46 + R5 * T6));
                        x4 = Number(x4.toFixed(5)), n57.addColorStop(x4, l40[b6]);
                    }
                }
            } else {
                n57 = this.context.createLinearGradient(a55, u46 / 2, h48 + a55, u46 / 2);
                var A5 = l40.length + 1, S4 = 1;
                for(f24 = 0; f24 < l40.length; f24++){
                    var O5;
                    O5 = "number" == typeof c32[f24] ? c32[f24] : S4 / A5, n57.addColorStop(O5, l40[f24]), S4++;
                }
            }
            return n57;
        }, r43.prototype.destroy = function(t15) {
            "boolean" == typeof t15 && (t15 = {
                children: t15
            }), t15 = Object.assign({
            }, ea, t15), e34.prototype.destroy.call(this, t15), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null;
        }, Object.defineProperty(r43.prototype, "width", {
            get: function() {
                return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width;
            },
            set: function(t15) {
                this.updateText(!0);
                var e36 = Se(this.scale.x) || 1;
                this.scale.x = e36 * t15 / this._texture.orig.width, this._width = t15;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r43.prototype, "height", {
            get: function() {
                return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height;
            },
            set: function(t15) {
                this.updateText(!0);
                var e36 = Se(this.scale.y) || 1;
                this.scale.y = e36 * t15 / this._texture.orig.height, this._height = t15;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r43.prototype, "style", {
            get: function() {
                return this._style;
            },
            set: function(t15) {
                t15 = t15 || {
                }, this._style = t15 instanceof Ks ? t15 : new Ks(t15), this.localStyleID = -1, this.dirty = !0;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r43.prototype, "text", {
            get: function() {
                return this._text;
            },
            set: function(t15) {
                t15 = String(null == t15 ? "" : t15), this._text !== t15 && (this._text = t15, this.dirty = !0);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r43.prototype, "resolution", {
            get: function() {
                return this._resolution;
            },
            set: function(t15) {
                this._autoResolution = !1, this._resolution !== t15 && (this._resolution = t15, this.dirty = !0);
            },
            enumerable: !1,
            configurable: !0
        }), r43.nextLineHeightBehavior = !1, r43;
    }(Vs);
    rt.UPLOADS_PER_FRAME = 4;
    var ia = function(t15, e34) {
        return (ia = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t16, e36) {
            t16.__proto__ = e36;
        } || function(t16, e36) {
            for(var r43 in e36)e36.hasOwnProperty(r43) && (t16[r43] = e36[r43]);
        })(t15, e34);
    }, na = function() {
        function t15(t16) {
            this.maxItemsPerFrame = t16, this.itemsLeft = 0;
        }
        return t15.prototype.beginFrame = function() {
            this.itemsLeft = this.maxItemsPerFrame;
        }, t15.prototype.allowedToUpload = function() {
            return (this.itemsLeft--) > 0;
        }, t15;
    }();
    function oa(t15, e34) {
        var r43 = !1;
        if (t15 && t15._textures && t15._textures.length) for(var i62 = 0; i62 < t15._textures.length; i62++)if (t15._textures[i62] instanceof ri) {
            var n57 = t15._textures[i62].baseTexture;
            -1 === e34.indexOf(n57) && (e34.push(n57), r43 = !0);
        }
        return r43;
    }
    function sa(t15, e34) {
        if (t15.baseTexture instanceof Xr) {
            var r43 = t15.baseTexture;
            return -1 === e34.indexOf(r43) && e34.push(r43), !0;
        }
        return !1;
    }
    function aa(t15, e34) {
        if (t15._texture && t15._texture instanceof ri) {
            var r53 = t15._texture.baseTexture;
            return -1 === e34.indexOf(r53) && e34.push(r53), !0;
        }
        return !1;
    }
    function ha(t15, e34) {
        return e34 instanceof ra && (e34.updateText(!0), !0);
    }
    function ua(t15, e34) {
        if (e34 instanceof Ks) {
            var r54 = e34.toFontString();
            return $s.measureFont(r54), !0;
        }
        return !1;
    }
    function la(t15, e34) {
        if (t15 instanceof ra) {
            -1 === e34.indexOf(t15.style) && e34.push(t15.style), -1 === e34.indexOf(t15) && e34.push(t15);
            var r55 = t15._texture.baseTexture;
            return -1 === e34.indexOf(r55) && e34.push(r55), !0;
        }
        return !1;
    }
    function ca(t15, e34) {
        return t15 instanceof Ks && (-1 === e34.indexOf(t15) && e34.push(t15), !0);
    }
    var da = function() {
        function e34(t15) {
            var e36 = this;
            this.limiter = new na(rt.UPLOADS_PER_FRAME), this.renderer = t15, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function() {
                e36.queue && e36.prepareItems();
            }, this.registerFindHook(la), this.registerFindHook(ca), this.registerFindHook(oa), this.registerFindHook(sa), this.registerFindHook(aa), this.registerUploadHook(ha), this.registerUploadHook(ua);
        }
        return e34.prototype.upload = function(e36, r56) {
            "function" == typeof e36 && (r56 = e36, e36 = null), e36 && this.add(e36), this.queue.length ? (r56 && this.completes.push(r56), this.ticking || (this.ticking = !0, gr.system.addOnce(this.tick, this, t.UPDATE_PRIORITY.UTILITY))) : r56 && r56();
        }, e34.prototype.tick = function() {
            setTimeout(this.delayedTick, 0);
        }, e34.prototype.prepareItems = function() {
            for(this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();){
                var e36 = this.queue[0], r56 = !1;
                if (e36 && !e36._destroyed) for(var i62 = 0, n58 = this.uploadHooks.length; i62 < n58; i62++)if (this.uploadHooks[i62](this.uploadHookHelper, e36)) {
                    this.queue.shift(), r56 = !0;
                    break;
                }
                r56 || this.queue.shift();
            }
            if (this.queue.length) gr.system.addOnce(this.tick, this, t.UPDATE_PRIORITY.UTILITY);
            else {
                this.ticking = !1;
                var o57 = this.completes.slice(0);
                for(this.completes.length = 0, i62 = 0, n58 = o57.length; i62 < n58; i62++)o57[i62]();
            }
        }, e34.prototype.registerFindHook = function(t15) {
            return t15 && this.addHooks.push(t15), this;
        }, e34.prototype.registerUploadHook = function(t15) {
            return t15 && this.uploadHooks.push(t15), this;
        }, e34.prototype.add = function(t15) {
            for(var e37 = 0, r57 = this.addHooks.length; e37 < r57 && !this.addHooks[e37](t15, this.queue); e37++);
            if (t15 instanceof dr) for(e37 = t15.children.length - 1; e37 >= 0; e37--)this.add(t15.children[e37]);
            return this;
        }, e34.prototype.destroy = function() {
            this.ticking && gr.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null;
        }, e34;
    }();
    function fa(t15, e34) {
        return e34 instanceof Xr && (e34._glTextures[t15.CONTEXT_UID] || t15.texture.bind(e34), !0);
    }
    function pa(t15, e34) {
        if (!(e34 instanceof Xs)) return !1;
        var r57 = e34.geometry;
        e34.finishPoly(), r57.updateBatches();
        for(var i63 = r57.batches, n59 = 0; n59 < i63.length; n59++){
            var o58 = i63[n59].style.texture;
            o58 && fa(t15, o58.baseTexture);
        }
        return r57.batchable || t15.geometry.bind(r57, e34._resolveDirectShader(t15)), !0;
    }
    function _a(t15, e34) {
        return t15 instanceof Xs && (e34.push(t15), !0);
    }
    var ma = function(t15) {
        function e34(e37) {
            var r57 = t15.call(this, e37) || this;
            return r57.uploadHookHelper = r57.renderer, r57.registerFindHook(_a), r57.registerUploadHook(fa), r57.registerUploadHook(pa), r57;
        }
        return (function(t16, e37) {
            function r57() {
                this.constructor = t16;
            }
            ia(t16, e37), t16.prototype = null === e37 ? Object.create(e37) : (r57.prototype = e37.prototype, new r57);
        })(e34, t15), e34;
    }(da), va = function() {
        function t15(t16) {
            this.maxMilliseconds = t16, this.frameStart = 0;
        }
        return t15.prototype.beginFrame = function() {
            this.frameStart = Date.now();
        }, t15.prototype.allowedToUpload = function() {
            return Date.now() - this.frameStart < this.maxMilliseconds;
        }, t15;
    }(), ya = function() {
        function t15(t16, e34, r57) {
            (void 0) === r57 && (r57 = null), this._texture = t16 instanceof ri ? t16 : null, this.baseTexture = t16 instanceof Xr ? t16 : this._texture.baseTexture, this.textures = {
            }, this.animations = {
            }, this.data = e34;
            var i63 = this.baseTexture.resource;
            this.resolution = this._updateResolution(r57 || (i63 ? i63.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
        }
        return t15.prototype._updateResolution = function(t16) {
            (void 0) === t16 && (t16 = null);
            var e34 = this.data.meta.scale, r57 = Be(t16, null);
            return null === r57 && (r57 = (void 0) !== e34 ? parseFloat(e34) : 1), 1 !== r57 && this.baseTexture.setResolution(r57), r57;
        }, t15.prototype.parse = function(e34) {
            this._batchIndex = 0, this._callback = e34, this._frameKeys.length <= t15.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
        }, t15.prototype._processFrames = function(e34) {
            for(var r57 = e34, i63 = t15.BATCH_SIZE; r57 - e34 < i63 && r57 < this._frameKeys.length;){
                var n59 = this._frameKeys[r57], o59 = this._frames[n59], s51 = o59.frame;
                if (s51) {
                    var a55, h48 = null, u46 = !1 !== o59.trimmed && o59.sourceSize ? o59.sourceSize : o59.frame, l40 = new Ye(0, 0, Math.floor(u46.w) / this.resolution, Math.floor(u46.h) / this.resolution);
                    a55 = o59.rotated ? new Ye(Math.floor(s51.x) / this.resolution, Math.floor(s51.y) / this.resolution, Math.floor(s51.h) / this.resolution, Math.floor(s51.w) / this.resolution) : new Ye(Math.floor(s51.x) / this.resolution, Math.floor(s51.y) / this.resolution, Math.floor(s51.w) / this.resolution, Math.floor(s51.h) / this.resolution), !1 !== o59.trimmed && o59.spriteSourceSize && (h48 = new Ye(Math.floor(o59.spriteSourceSize.x) / this.resolution, Math.floor(o59.spriteSourceSize.y) / this.resolution, Math.floor(s51.w) / this.resolution, Math.floor(s51.h) / this.resolution)), this.textures[n59] = new ri(this.baseTexture, a55, l40, h48, o59.rotated ? 2 : 0, o59.anchor), ri.addToCache(this.textures[n59], n59);
                }
                r57++;
            }
        }, t15.prototype._processAnimations = function() {
            var t16 = this.data.animations || {
            };
            for(var e34 in t16){
                this.animations[e34] = [];
                for(var r57 = 0; r57 < t16[e34].length; r57++){
                    var i63 = t16[e34][r57];
                    this.animations[e34].push(this.textures[i63]);
                }
            }
        }, t15.prototype._parseComplete = function() {
            var t16 = this._callback;
            this._callback = null, this._batchIndex = 0, t16.call(this, this.textures);
        }, t15.prototype._nextBatch = function() {
            var e34 = this;
            this._processFrames(this._batchIndex * t15.BATCH_SIZE), this._batchIndex++, setTimeout(function() {
                e34._batchIndex * t15.BATCH_SIZE < e34._frameKeys.length ? e34._nextBatch() : (e34._processAnimations(), e34._parseComplete());
            }, 0);
        }, t15.prototype.destroy = function(t16) {
            var e34;
            for(var r58 in (void 0) === t16 && (t16 = !1), this.textures)this.textures[r58].destroy();
            this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t16 && (null === (e34 = this._texture) || (void 0) === e34 || e34.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null;
        }, t15.BATCH_SIZE = 1000, t15;
    }(), Ea = function() {
        function e34() {
        }
        return e34.use = function(r58, i64) {
            var n60, o60, s52 = this, a56 = r58.name + "_image";
            if (r58.data && r58.type === t.LoaderResource.TYPE.JSON && r58.data.frames && !s52.resources[a56]) {
                var h49 = null === (o60 = null === (n60 = r58.data) || (void 0) === n60 ? void 0 : n60.meta) || (void 0) === o60 ? void 0 : o60.related_multi_packs;
                if (Array.isArray(h49)) for(var u47 = function(e37) {
                    if ("string" != typeof e37) return "continue";
                    var i65 = e37.replace(".json", ""), n61 = ne.resolve(r58.url.replace(s52.baseUrl, ""), e37);
                    if (s52.resources[i65] || Object.values(s52.resources).some(function(t15) {
                        return ne.format(ne.parse(t15.url)) === n61;
                    })) return "continue";
                    var o61 = {
                        crossOrigin: r58.crossOrigin,
                        loadType: t.LoaderResource.LOAD_TYPE.XHR,
                        xhrType: t.LoaderResource.XHR_RESPONSE_TYPE.JSON,
                        parentResource: r58,
                        metadata: r58.metadata
                    };
                    s52.add(i65, n61, o61);
                }, l41 = 0, c32 = h49; l41 < c32.length; l41++)u47(c32[l41]);
                var d32 = {
                    crossOrigin: r58.crossOrigin,
                    metadata: r58.metadata.imageMetadata,
                    parentResource: r58
                }, f24 = e34.getResourcePath(r58, s52.baseUrl);
                s52.add(a56, f24, d32, function(t15) {
                    if (t15.error) i64(t15.error);
                    else {
                        var e37 = new ya(t15.texture, r58.data, r58.url);
                        e37.parse(function() {
                            r58.spritesheet = e37, r58.textures = e37.textures, i64();
                        });
                    }
                });
            } else i64();
        }, e34.getResourcePath = function(t15, e38) {
            return t15.isDataUrl ? t15.data.meta.image : ne.resolve(t15.url.replace(e38, ""), t15.data.meta.image);
        }, e34;
    }(), ga = function(t15, e34) {
        return (ga = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t16, e38) {
            t16.__proto__ = e38;
        } || function(t16, e38) {
            for(var r58 in e38)e38.hasOwnProperty(r58) && (t16[r58] = e38[r58]);
        })(t15, e34);
    };
    function Ta(t15, e34) {
        function r58() {
            this.constructor = t15;
        }
        ga(t15, e34), t15.prototype = null === e34 ? Object.create(e34) : (r58.prototype = e34.prototype, new r58);
    }
    var ba = new qe, Ra = function(t15) {
        function e34(e38, r58, i64) {
            (void 0) === r58 && (r58 = 100), (void 0) === i64 && (i64 = 100);
            var n60 = t15.call(this, e38) || this;
            return n60.tileTransform = new or, n60._width = r58, n60._height = i64, n60.uvMatrix = n60.texture.uvMatrix || new un(e38), n60.pluginName = "tilingSprite", n60.uvRespectAnchor = !1, n60;
        }
        return Ta(e34, t15), Object.defineProperty(e34.prototype, "clampMargin", {
            get: function() {
                return this.uvMatrix.clampMargin;
            },
            set: function(t16) {
                this.uvMatrix.clampMargin = t16, this.uvMatrix.update(!0);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e34.prototype, "tileScale", {
            get: function() {
                return this.tileTransform.scale;
            },
            set: function(t16) {
                this.tileTransform.scale.copyFrom(t16);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e34.prototype, "tilePosition", {
            get: function() {
                return this.tileTransform.position;
            },
            set: function(t16) {
                this.tileTransform.position.copyFrom(t16);
            },
            enumerable: !1,
            configurable: !0
        }), e34.prototype._onTextureUpdate = function() {
            this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215;
        }, e34.prototype._render = function(t16) {
            var e38 = this._texture;
            e38 && e38.valid && (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), t16.batch.setObjectRenderer(t16.plugins[this.pluginName]), t16.plugins[this.pluginName].render(this));
        }, e34.prototype._calculateBounds = function() {
            var t16 = this._width * -this._anchor._x, e38 = this._height * -this._anchor._y, r58 = this._width * (1 - this._anchor._x), i64 = this._height * (1 - this._anchor._y);
            this._bounds.addFrame(this.transform, t16, e38, r58, i64);
        }, e34.prototype.getLocalBounds = function(e38) {
            return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), e38 || (this._localBoundsRect || (this._localBoundsRect = new Ye), e38 = this._localBoundsRect), this._bounds.getRectangle(e38)) : t15.prototype.getLocalBounds.call(this, e38);
        }, e34.prototype.containsPoint = function(t16) {
            this.worldTransform.applyInverse(t16, ba);
            var e38 = this._width, r58 = this._height, i64 = -e38 * this.anchor._x;
            if (ba.x >= i64 && ba.x < i64 + e38) {
                var n60 = -r58 * this.anchor._y;
                if (ba.y >= n60 && ba.y < n60 + r58) return !0;
            }
            return !1;
        }, e34.prototype.destroy = function(e38) {
            t15.prototype.destroy.call(this, e38), this.tileTransform = null, this.uvMatrix = null;
        }, e34.from = function(t16, r58) {
            return new e34(t16 instanceof ri ? t16 : ri.from(t16, r58), r58.width, r58.height);
        }, Object.defineProperty(e34.prototype, "width", {
            get: function() {
                return this._width;
            },
            set: function(t16) {
                this._width = t16;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e34.prototype, "height", {
            get: function() {
                return this._height;
            },
            set: function(t16) {
                this._height = t16;
            },
            enumerable: !1,
            configurable: !0
        }), e34;
    }(Vs), xa = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", Aa = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n", Sa = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n", Oa = new Ze, Ia = function(e34) {
        function r58(t15) {
            var r59 = e34.call(this, t15) || this, i64 = {
                globals: r59.renderer.globalUniforms
            };
            return r59.shader = rn.from(xa, Aa, i64), r59.simpleShader = rn.from(xa, Sa, i64), r59.quad = new _i, r59.state = nn.for2d(), r59;
        }
        return Ta(r58, e34), r58.prototype.render = function(e38) {
            var r59 = this.renderer, i64 = this.quad, n61 = i64.vertices;
            n61[0] = n61[6] = e38._width * -e38.anchor.x, n61[1] = n61[3] = e38._height * -e38.anchor.y, n61[2] = n61[4] = e38._width * (1 - e38.anchor.x), n61[5] = n61[7] = e38._height * (1 - e38.anchor.y);
            var o60 = e38.uvRespectAnchor ? e38.anchor.x : 0, s52 = e38.uvRespectAnchor ? e38.anchor.y : 0;
            (n61 = i64.uvs)[0] = n61[6] = -o60, n61[1] = n61[3] = -s52, n61[2] = n61[4] = 1 - o60, n61[5] = n61[7] = 1 - s52, i64.invalidate();
            var a56 = e38._texture, h50 = a56.baseTexture, u48 = e38.tileTransform.localTransform, l42 = e38.uvMatrix, c33 = h50.isPowerOfTwo && a56.frame.width === h50.width && a56.frame.height === h50.height;
            c33 && (h50._glTextures[r59.CONTEXT_UID] ? c33 = h50.wrapMode !== t.WRAP_MODES.CLAMP : h50.wrapMode === t.WRAP_MODES.CLAMP && (h50.wrapMode = t.WRAP_MODES.REPEAT));
            var d33 = c33 ? this.simpleShader : this.shader, f25 = a56.width, p23 = a56.height, _ = e38._width, m13 = e38._height;
            Oa.set(u48.a * f25 / _, u48.b * f25 / m13, u48.c * p23 / _, u48.d * p23 / m13, u48.tx / _, u48.ty / m13), Oa.invert(), c33 ? Oa.prepend(l42.mapCoord) : (d33.uniforms.uMapCoord = l42.mapCoord.toArray(!0), d33.uniforms.uClampFrame = l42.uClampFrame, d33.uniforms.uClampOffset = l42.uClampOffset), d33.uniforms.uTransform = Oa.toArray(!0), d33.uniforms.uColor = ye(e38.tint, e38.worldAlpha, d33.uniforms.uColor, h50.alphaMode), d33.uniforms.translationMatrix = e38.transform.worldTransform.toArray(!0), d33.uniforms.uSampler = a56, r59.shader.bind(d33), r59.geometry.bind(i64), this.state.blendMode = _e(e38.blendMode, h50.alphaMode), r59.state.set(this.state), r59.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
        }, r58;
    }(bi), Pa = function(t15, e34) {
        return (Pa = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t16, e38) {
            t16.__proto__ = e38;
        } || function(t16, e38) {
            for(var r58 in e38)e38.hasOwnProperty(r58) && (t16[r58] = e38[r58]);
        })(t15, e34);
    };
    function Ma(t15, e34) {
        function r58() {
            this.constructor = t15;
        }
        Pa(t15, e34), t15.prototype = null === e34 ? Object.create(e34) : (r58.prototype = e34.prototype, new r58);
    }
    var Da = function() {
        function t15(t16, e34) {
            this.uvBuffer = t16, this.uvMatrix = e34, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0;
        }
        return t15.prototype.update = function(t16) {
            if (t16 || this._bufferUpdateId !== this.uvBuffer._updateID || this._textureUpdateId !== this.uvMatrix._updateID) {
                this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
                var e34 = this.uvBuffer.data;
                this.data && this.data.length === e34.length || (this.data = new Float32Array(e34.length)), this.uvMatrix.multiplyUvs(e34, this.data), this._updateID++;
            }
        }, t15;
    }(), Na = new qe, wa = new We, Ca = function(e38) {
        function r58(r59, i64, n61, o60) {
            (void 0) === o60 && (o60 = t.DRAW_MODES.TRIANGLES);
            var s52 = e38.call(this) || this;
            return s52.geometry = r59, r59.refCount++, s52.shader = i64, s52.state = n61 || nn.for2d(), s52.drawMode = o60, s52.start = 0, s52.size = 0, s52.uvs = null, s52.indices = null, s52.vertexData = new Float32Array(1), s52.vertexDirty = -1, s52._transformID = -1, s52._roundPixels = rt.ROUND_PIXELS, s52.batchUvs = null, s52;
        }
        return Ma(r58, e38), Object.defineProperty(r58.prototype, "uvBuffer", {
            get: function() {
                return this.geometry.buffers[1];
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r58.prototype, "verticesBuffer", {
            get: function() {
                return this.geometry.buffers[0];
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r58.prototype, "material", {
            get: function() {
                return this.shader;
            },
            set: function(t15) {
                this.shader = t15;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r58.prototype, "blendMode", {
            get: function() {
                return this.state.blendMode;
            },
            set: function(t15) {
                this.state.blendMode = t15;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r58.prototype, "roundPixels", {
            get: function() {
                return this._roundPixels;
            },
            set: function(t15) {
                this._roundPixels !== t15 && (this._transformID = -1), this._roundPixels = t15;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r58.prototype, "tint", {
            get: function() {
                return "tint" in this.shader ? this.shader.tint : null;
            },
            set: function(t15) {
                this.shader.tint = t15;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r58.prototype, "texture", {
            get: function() {
                return "texture" in this.shader ? this.shader.texture : null;
            },
            set: function(t15) {
                this.shader.texture = t15;
            },
            enumerable: !1,
            configurable: !0
        }), r58.prototype._render = function(e39) {
            var i64 = this.geometry.buffers[0].data;
            this.shader.batchable && this.drawMode === t.DRAW_MODES.TRIANGLES && i64.length < 2 * r58.BATCHABLE_SIZE ? this._renderToBatch(e39) : this._renderDefault(e39);
        }, r58.prototype._renderDefault = function(t15) {
            var e39 = this.shader;
            e39.alpha = this.worldAlpha, e39.update && e39.update(), t15.batch.flush(), e39.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0), t15.shader.bind(e39), t15.state.set(this.state), t15.geometry.bind(this.geometry, e39), t15.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
        }, r58.prototype._renderToBatch = function(t15) {
            var e39 = this.geometry, r59 = this.shader;
            r59.uvMatrix && (r59.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e39.indexBuffer.data, this._tintRGB = r59._tintRGB, this._texture = r59.texture;
            var i64 = this.material.pluginName;
            t15.batch.setObjectRenderer(t15.plugins[i64]), t15.plugins[i64].render(this);
        }, r58.prototype.calculateVertices = function() {
            var t15 = this.geometry.buffers[0], e39 = t15.data, r59 = t15._updateID;
            if (r59 !== this.vertexDirty || this._transformID !== this.transform._worldID) {
                this._transformID = this.transform._worldID, this.vertexData.length !== e39.length && (this.vertexData = new Float32Array(e39.length));
                for(var i64 = this.transform.worldTransform, n61 = i64.a, o60 = i64.b, s52 = i64.c, a56 = i64.d, h50 = i64.tx, u48 = i64.ty, l42 = this.vertexData, c33 = 0; c33 < l42.length / 2; c33++){
                    var d33 = e39[2 * c33], f25 = e39[2 * c33 + 1];
                    l42[2 * c33] = n61 * d33 + s52 * f25 + h50, l42[2 * c33 + 1] = o60 * d33 + a56 * f25 + u48;
                }
                if (this._roundPixels) {
                    var p23 = rt.RESOLUTION;
                    for(c33 = 0; c33 < l42.length; ++c33)l42[c33] = Math.round((l42[c33] * p23 | 0) / p23);
                }
                this.vertexDirty = r59;
            }
        }, r58.prototype.calculateUvs = function() {
            var t15 = this.geometry.buffers[1], e39 = this.shader;
            e39.uvMatrix.isSimple ? this.uvs = t15.data : (this.batchUvs || (this.batchUvs = new Da(t15, e39.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data);
        }, r58.prototype._calculateBounds = function() {
            this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
        }, r58.prototype.containsPoint = function(t15) {
            if (!this.getBounds().contains(t15.x, t15.y)) return !1;
            this.worldTransform.applyInverse(t15, Na);
            for(var e39 = this.geometry.getBuffer("aVertexPosition").data, r59 = wa.points, i65 = this.geometry.getIndex().data, n62 = i65.length, o61 = 4 === this.drawMode ? 3 : 1, s53 = 0; s53 + 2 < n62; s53 += o61){
                var a57 = 2 * i65[s53], h51 = 2 * i65[s53 + 1], u49 = 2 * i65[s53 + 2];
                if (r59[0] = e39[a57], r59[1] = e39[a57 + 1], r59[2] = e39[h51], r59[3] = e39[h51 + 1], r59[4] = e39[u49], r59[5] = e39[u49 + 1], wa.contains(Na.x, Na.y)) return !0;
            }
            return !1;
        }, r58.prototype.destroy = function(t15) {
            e38.prototype.destroy.call(this, t15), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null;
        }, r58.BATCHABLE_SIZE = 100, r58;
    }(dr), La = "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n", Fa = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n", Ua = function(t15) {
        function e38(e39, r58) {
            var i65 = this, n62 = {
                uSampler: e39,
                alpha: 1,
                uTextureMatrix: Ze.IDENTITY,
                uColor: new Float32Array([
                    1,
                    1,
                    1,
                    1
                ])
            };
            return (r58 = Object.assign({
                tint: 16777215,
                alpha: 1,
                pluginName: "batch"
            }, r58)).uniforms && Object.assign(n62, r58.uniforms), (i65 = t15.call(this, r58.program || en.from(Fa, La), n62) || this)._colorDirty = !1, i65.uvMatrix = new un(e39), i65.batchable = (void 0) === r58.program, i65.pluginName = r58.pluginName, i65.tint = r58.tint, i65.alpha = r58.alpha, i65;
        }
        return Ma(e38, t15), Object.defineProperty(e38.prototype, "texture", {
            get: function() {
                return this.uniforms.uSampler;
            },
            set: function(t16) {
                this.uniforms.uSampler !== t16 && (this.uniforms.uSampler = t16, this.uvMatrix.texture = t16);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e38.prototype, "alpha", {
            get: function() {
                return this._alpha;
            },
            set: function(t16) {
                t16 !== this._alpha && (this._alpha = t16, this._colorDirty = !0);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e38.prototype, "tint", {
            get: function() {
                return this._tint;
            },
            set: function(t16) {
                t16 !== this._tint && (this._tint = t16, this._tintRGB = (t16 >> 16) + (65280 & t16) + ((255 & t16) << 16), this._colorDirty = !0);
            },
            enumerable: !1,
            configurable: !0
        }), e38.prototype.update = function() {
            if (this._colorDirty) {
                this._colorDirty = !1;
                var t16 = this.texture.baseTexture;
                ye(this._tint, this._alpha, this.uniforms.uColor, t16.alphaMode);
            }
            this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
        }, e38;
    }(rn), Ba = function(e38) {
        function r58(r59, i65, n62) {
            var o61 = e38.call(this) || this, s53 = new hi(r59), a58 = new hi(i65, !0), h52 = new hi(n62, !0, !0);
            return o61.addAttribute("aVertexPosition", s53, 2, !1, t.TYPES.FLOAT).addAttribute("aTextureCoord", a58, 2, !1, t.TYPES.FLOAT).addIndex(h52), o61._updateId = -1, o61;
        }
        return Ma(r58, e38), Object.defineProperty(r58.prototype, "vertexDirtyId", {
            get: function() {
                return this.buffers[0]._updateID;
            },
            enumerable: !1,
            configurable: !0
        }), r58;
    }(fi), Ga = function(t15, e38) {
        return (Ga = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t17, e39) {
            t17.__proto__ = e39;
        } || function(t17, e39) {
            for(var r58 in e39)e39.hasOwnProperty(r58) && (t17[r58] = e39[r58]);
        })(t15, e38);
    }, Xa = function() {
        this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = [];
    }, ka = function() {
        function t15() {
        }
        return t15.test = function(t17) {
            return "string" == typeof t17 && 0 === t17.indexOf("info face=");
        }, t15.parse = function(t17) {
            var e38 = t17.match(/^[a-z]+\s+.+$/gm), r58 = {
                info: [],
                common: [],
                page: [],
                char: [],
                chars: [],
                kerning: [],
                kernings: []
            };
            for(var i65 in e38){
                var n62 = e38[i65].match(/^[a-z]+/gm)[0], o61 = e38[i65].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), s53 = {
                };
                for(var a58 in o61){
                    var h52 = o61[a58].split("="), u50 = h52[0], l43 = h52[1].replace(/"/gm, ""), c34 = parseFloat(l43), d34 = isNaN(c34) ? l43 : c34;
                    s53[u50] = d34;
                }
                r58[n62].push(s53);
            }
            var f26 = new Xa;
            return r58.info.forEach(function(t18) {
                return f26.info.push({
                    face: t18.face,
                    size: parseInt(t18.size, 10)
                });
            }), r58.common.forEach(function(t18) {
                return f26.common.push({
                    lineHeight: parseInt(t18.lineHeight, 10)
                });
            }), r58.page.forEach(function(t18) {
                return f26.page.push({
                    id: parseInt(t18.id, 10),
                    file: t18.file
                });
            }), r58.char.forEach(function(t18) {
                return f26.char.push({
                    id: parseInt(t18.id, 10),
                    page: parseInt(t18.page, 10),
                    x: parseInt(t18.x, 10),
                    y: parseInt(t18.y, 10),
                    width: parseInt(t18.width, 10),
                    height: parseInt(t18.height, 10),
                    xoffset: parseInt(t18.xoffset, 10),
                    yoffset: parseInt(t18.yoffset, 10),
                    xadvance: parseInt(t18.xadvance, 10)
                });
            }), r58.kerning.forEach(function(t18) {
                return f26.kerning.push({
                    first: parseInt(t18.first, 10),
                    second: parseInt(t18.second, 10),
                    amount: parseInt(t18.amount, 10)
                });
            }), f26;
        }, t15;
    }(), Ha = function() {
        function t15() {
        }
        return t15.test = function(t17) {
            return t17 instanceof XMLDocument && t17.getElementsByTagName("page").length && null !== t17.getElementsByTagName("info")[0].getAttribute("face");
        }, t15.parse = function(t17) {
            for(var e38 = new Xa, r58 = t17.getElementsByTagName("info"), i65 = t17.getElementsByTagName("common"), n63 = t17.getElementsByTagName("page"), o62 = t17.getElementsByTagName("char"), s54 = t17.getElementsByTagName("kerning"), a59 = 0; a59 < r58.length; a59++)e38.info.push({
                face: r58[a59].getAttribute("face"),
                size: parseInt(r58[a59].getAttribute("size"), 10)
            });
            for(a59 = 0; a59 < i65.length; a59++)e38.common.push({
                lineHeight: parseInt(i65[a59].getAttribute("lineHeight"), 10)
            });
            for(a59 = 0; a59 < n63.length; a59++)e38.page.push({
                id: parseInt(n63[a59].getAttribute("id"), 10) || 0,
                file: n63[a59].getAttribute("file")
            });
            for(a59 = 0; a59 < o62.length; a59++){
                var h53 = o62[a59];
                e38.char.push({
                    id: parseInt(h53.getAttribute("id"), 10),
                    page: parseInt(h53.getAttribute("page"), 10) || 0,
                    x: parseInt(h53.getAttribute("x"), 10),
                    y: parseInt(h53.getAttribute("y"), 10),
                    width: parseInt(h53.getAttribute("width"), 10),
                    height: parseInt(h53.getAttribute("height"), 10),
                    xoffset: parseInt(h53.getAttribute("xoffset"), 10),
                    yoffset: parseInt(h53.getAttribute("yoffset"), 10),
                    xadvance: parseInt(h53.getAttribute("xadvance"), 10)
                });
            }
            for(a59 = 0; a59 < s54.length; a59++)e38.kerning.push({
                first: parseInt(s54[a59].getAttribute("first"), 10),
                second: parseInt(s54[a59].getAttribute("second"), 10),
                amount: parseInt(s54[a59].getAttribute("amount"), 10)
            });
            return e38;
        }, t15;
    }(), Ya = function() {
        function t15() {
        }
        return t15.test = function(t17) {
            if ("string" == typeof t17 && t17.indexOf("<font>") > -1) {
                var e38 = (new self.DOMParser).parseFromString(t17, "text/xml");
                return Ha.test(e38);
            }
            return !1;
        }, t15.parse = function(t17) {
            var e39 = (new self.DOMParser).parseFromString(t17, "text/xml");
            return Ha.parse(e39);
        }, t15;
    }(), ja = [
        ka,
        Ha,
        Ya
    ];
    function Va(t15) {
        for(var e39 = 0; e39 < ja.length; e39++)if (ja[e39].test(t15)) return ja[e39];
        return null;
    }
    function Wa(e39, r58, i65, n63, o62, s54, a59) {
        var h54 = i65.text, u51 = i65.fontProperties;
        r58.translate(n63, o62), r58.scale(s54, s54);
        var l44 = a59.strokeThickness / 2, c35 = -a59.strokeThickness / 2;
        r58.font = a59.toFontString(), r58.lineWidth = a59.strokeThickness, r58.textBaseline = a59.textBaseline, r58.lineJoin = a59.lineJoin, r58.miterLimit = a59.miterLimit, r58.fillStyle = (function(e40, r59, i66, n64, o63, s55) {
            var a60, h55 = i66.fill;
            if (!Array.isArray(h55)) return h55;
            if (1 === h55.length) return h55[0];
            var u52 = i66.dropShadow ? i66.dropShadowDistance : 0, l45 = i66.padding || 0, c36 = e40.width / n64 - u52 - 2 * l45, d35 = e40.height / n64 - u52 - 2 * l45, f26 = h55.slice(), p24 = i66.fillGradientStops.slice();
            if (!p24.length) for(var _ = f26.length + 1, m13 = 1; m13 < _; ++m13)p24.push(m13 / _);
            if (f26.unshift(h55[0]), p24.unshift(0), f26.push(h55[h55.length - 1]), p24.push(1), i66.fillGradientType === t.TEXT_GRADIENT.LINEAR_VERTICAL) {
                a60 = r59.createLinearGradient(c36 / 2, l45, c36 / 2, d35 + l45);
                var v11 = 0, y12 = (s55.fontProperties.fontSize + i66.strokeThickness) / d35;
                for(m13 = 0; m13 < o63.length; m13++)for(var E = s55.lineHeight * m13, g9 = 0; g9 < f26.length; g9++){
                    var T7 = E / d35 + ("number" == typeof p24[g9] ? p24[g9] : g9 / f26.length) * y12, b7 = Math.max(v11, T7);
                    b7 = Math.min(b7, 1), a60.addColorStop(b7, f26[g9]), v11 = b7;
                }
            } else {
                a60 = r59.createLinearGradient(l45, d35 / 2, c36 + l45, d35 / 2);
                var R6 = f26.length + 1, x5 = 1;
                for(m13 = 0; m13 < f26.length; m13++){
                    var A6;
                    A6 = "number" == typeof p24[m13] ? p24[m13] : x5 / R6, a60.addColorStop(A6, f26[m13]), x5++;
                }
            }
            return a60;
        })(e39, r58, a59, s54, [
            h54
        ], i65), r58.strokeStyle = a59.stroke;
        var d35 = a59.dropShadowColor, f26 = ce("number" == typeof d35 ? d35 : fe(d35));
        a59.dropShadow ? (r58.shadowColor = "rgba(" + 255 * f26[0] + "," + 255 * f26[1] + "," + 255 * f26[2] + "," + a59.dropShadowAlpha + ")", r58.shadowBlur = a59.dropShadowBlur, r58.shadowOffsetX = Math.cos(a59.dropShadowAngle) * a59.dropShadowDistance, r58.shadowOffsetY = Math.sin(a59.dropShadowAngle) * a59.dropShadowDistance) : (r58.shadowColor = "black", r58.shadowBlur = 0, r58.shadowOffsetX = 0, r58.shadowOffsetY = 0), a59.stroke && a59.strokeThickness && r58.strokeText(h54, l44, c35 + i65.lineHeight - u51.descent), a59.fill && r58.fillText(h54, l44, c35 + i65.lineHeight - u51.descent), r58.setTransform(1, 0, 0, 1, 0, 0), r58.fillStyle = "rgba(0, 0, 0, 0)";
    }
    var za = function() {
        function t15(t17, e39, r58) {
            var i65 = t17.info[0], n63 = t17.common[0], o62 = Be(t17.page[0].file), s54 = {
            };
            this._ownsTextures = r58, this.font = i65.face, this.size = i65.size, this.lineHeight = n63.lineHeight / o62, this.chars = {
            }, this.pageTextures = s54;
            for(var a59 = 0; a59 < t17.page.length; a59++){
                var h54 = t17.page[a59], u51 = h54.id, l44 = h54.file;
                s54[u51] = e39 instanceof Array ? e39[a59] : e39[l44];
            }
            for(a59 = 0; a59 < t17.char.length; a59++){
                var c35 = t17.char[a59], d35 = (u51 = c35.id, c35.page), f26 = t17.char[a59], p24 = f26.x, _ = f26.y, m13 = f26.width, v12 = f26.height, y13 = f26.xoffset, E = f26.yoffset, g10 = f26.xadvance;
                _ /= o62, m13 /= o62, v12 /= o62, y13 /= o62, E /= o62, g10 /= o62;
                var T8 = new Ye((p24 /= o62) + s54[d35].frame.x / o62, _ + s54[d35].frame.y / o62, m13, v12);
                this.chars[u51] = {
                    xOffset: y13,
                    yOffset: E,
                    xAdvance: g10,
                    kerning: {
                    },
                    texture: new ri(s54[d35].baseTexture, T8),
                    page: d35
                };
            }
            for(a59 = 0; a59 < t17.kerning.length; a59++){
                var b8 = t17.kerning[a59], R7 = b8.first, x6 = b8.second, A7 = b8.amount;
                R7 /= o62, x6 /= o62, A7 /= o62, this.chars[x6] && (this.chars[x6].kerning[R7] = A7);
            }
        }
        return t15.prototype.destroy = function() {
            for(var t17 in this.chars)this.chars[t17].texture.destroy(), this.chars[t17].texture = null;
            for(var t17 in this.pageTextures)this._ownsTextures && this.pageTextures[t17].destroy(!0), this.pageTextures[t17] = null;
            this.chars = null, this.pageTextures = null;
        }, t15.install = function(e39, r58, i65) {
            var n63;
            if (e39 instanceof Xa) n63 = e39;
            else {
                var o62 = Va(e39);
                if (!o62) throw new Error("Unrecognized data format for font.");
                n63 = o62.parse(e39);
            }
            r58 instanceof ri && (r58 = [
                r58
            ]);
            var s54 = new t15(n63, r58, i65);
            return t15.available[s54.font] = s54, s54;
        }, t15.uninstall = function(e39) {
            var r58 = t15.available[e39];
            if (!r58) throw new Error("No font found named '" + e39 + "'");
            r58.destroy(), delete t15.available[e39];
        }, t15.from = function(e39, r58, i65) {
            if (!e39) throw new Error("[BitmapFont] Property `name` is required.");
            var n63 = Object.assign({
            }, t15.defaultOptions, i65), o63 = n63.chars, s54 = n63.padding, a59 = n63.resolution, h55 = n63.textureWidth, u52 = n63.textureHeight, l45 = function(t17) {
                "string" == typeof t17 && (t17 = [
                    t17
                ]);
                for(var e40 = [], r59 = 0, i66 = t17.length; r59 < i66; r59++){
                    var n64 = t17[r59];
                    if (Array.isArray(n64)) {
                        if (2 !== n64.length) throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got " + n64.length + ".");
                        var o64 = n64[0].charCodeAt(0), s55 = n64[1].charCodeAt(0);
                        if (s55 < o64) throw new Error("[BitmapFont]: Invalid character range.");
                        for(var a60 = o64, h56 = s55; a60 <= h56; a60++)e40.push(String.fromCharCode(a60));
                    } else e40.push.apply(e40, n64.split(""));
                }
                if (0 === e40.length) throw new Error("[BitmapFont]: Empty set when resolving characters.");
                return e40;
            }(o63), c36 = r58 instanceof Ks ? r58 : new Ks(r58), d36 = h55, f27 = new Xa;
            f27.info[0] = {
                face: c36.fontFamily,
                size: c36.fontSize
            }, f27.common[0] = {
                lineHeight: c36.fontSize
            };
            for(var p25, _, m14, v13 = 0, y14 = 0, E = 0, g11 = [], T9 = 0; T9 < l45.length; T9++){
                p25 || ((p25 = document.createElement("canvas")).width = h55, p25.height = u52, _ = p25.getContext("2d"), m14 = new Xr(p25, {
                    resolution: a59
                }), g11.push(new ri(m14)), f27.page.push({
                    id: g11.length - 1,
                    file: ""
                }));
                var b9 = $s.measureText(l45[T9], c36, !1, p25), R8 = b9.width, x7 = Math.ceil(b9.height), A8 = Math.ceil(("italic" === c36.fontStyle ? 2 : 1) * R8);
                if (y14 >= u52 - x7 * a59) {
                    if (0 === y14) throw new Error("[BitmapFont] textureHeight " + u52 + "px is too small for " + c36.fontSize + "px fonts");
                    --T9, p25 = null, _ = null, m14 = null, y14 = 0, v13 = 0, E = 0;
                } else if (E = Math.max(x7 + b9.fontProperties.descent, E), A8 * a59 + v13 >= d36) --T9, y14 += E * a59, y14 = Math.ceil(y14), v13 = 0, E = 0;
                else {
                    Wa(p25, _, b9, v13, y14, a59, c36);
                    var S5 = b9.text.charCodeAt(0);
                    f27.char.push({
                        id: S5,
                        page: g11.length - 1,
                        x: v13 / a59,
                        y: y14 / a59,
                        width: A8,
                        height: x7,
                        xoffset: 0,
                        yoffset: 0,
                        xadvance: Math.ceil(R8 - (c36.dropShadow ? c36.dropShadowDistance : 0) - (c36.stroke ? c36.strokeThickness : 0))
                    }), v13 += (A8 + 2 * s54) * a59, v13 = Math.ceil(v13);
                }
            }
            T9 = 0;
            for(var O6 = l45.length; T9 < O6; T9++)for(var I5 = l45[T9], P4 = 0; P4 < O6; P4++){
                var M3 = l45[P4], D2 = _.measureText(I5).width, N3 = _.measureText(M3).width, w2 = _.measureText(I5 + M3).width - (D2 + N3);
                w2 && f27.kerning.push({
                    first: I5.charCodeAt(0),
                    second: M3.charCodeAt(0),
                    amount: w2
                });
            }
            var C2 = new t15(f27, g11, !0);
            return (void 0) !== t15.available[e39] && t15.uninstall(e39), t15.available[e39] = C2, C2;
        }, t15.ALPHA = [
            [
                "a",
                "z"
            ],
            [
                "A",
                "Z"
            ],
            " "
        ], t15.NUMERIC = [
            [
                "0",
                "9"
            ]
        ], t15.ALPHANUMERIC = [
            [
                "a",
                "z"
            ],
            [
                "A",
                "Z"
            ],
            [
                "0",
                "9"
            ],
            " "
        ], t15.ASCII = [
            [
                " ",
                "~"
            ]
        ], t15.defaultOptions = {
            resolution: 1,
            textureWidth: 512,
            textureHeight: 512,
            padding: 4,
            chars: t15.ALPHANUMERIC
        }, t15.available = {
        }, t15;
    }(), qa = [], Ka = [], Za = function(t15) {
        function e39(r58, i65) {
            (void 0) === i65 && (i65 = {
            });
            var n63 = t15.call(this) || this;
            n63._tint = 16777215;
            var o63 = Object.assign({
            }, e39.styleDefaults, i65), s54 = o63.align, a59 = o63.tint, h55 = o63.maxWidth, u52 = o63.letterSpacing, l45 = o63.fontName, c36 = o63.fontSize;
            if (!za.available[l45]) throw new Error('Missing BitmapFont "' + l45 + '"');
            return n63._activePagesMeshData = [], n63._textWidth = 0, n63._textHeight = 0, n63._align = s54, n63._tint = a59, n63._fontName = l45, n63._fontSize = c36 || za.available[l45].size, n63._text = r58, n63._maxWidth = h55, n63._maxLineHeight = 0, n63._letterSpacing = u52, n63._anchor = new Ke(function() {
                n63.dirty = !0;
            }, n63, 0, 0), n63._roundPixels = rt.ROUND_PIXELS, n63.dirty = !0, n63._textureCache = {
            }, n63;
        }
        return (function(t17, e40) {
            function r58() {
                this.constructor = t17;
            }
            Ga(t17, e40), t17.prototype = null === e40 ? Object.create(e40) : (r58.prototype = e40.prototype, new r58);
        })(e39, t15), e39.prototype.updateText = function() {
            for(var t17, e40 = za.available[this._fontName], r58 = this._fontSize / e40.size, i65 = new qe, n63 = [], o63 = [], s54 = [], a59 = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ", h55 = a59.length, u52 = this._maxWidth * e40.size / this._fontSize, l45 = null, c36 = 0, d36 = 0, f27 = 0, p25 = -1, _ = 0, m14 = 0, v13 = 0, y14 = 0, E = 0; E < h55; E++){
                var g11 = a59.charCodeAt(E), T9 = a59.charAt(E);
                if (/(?:\s)/.test(T9) && (p25 = E, _ = c36, y14++), "\r" !== T9 && "\n" !== T9) {
                    var b10 = e40.chars[g11];
                    if (b10) {
                        l45 && b10.kerning[l45] && (i65.x += b10.kerning[l45]);
                        var R9 = Ka.pop() || {
                            texture: ri.EMPTY,
                            line: 0,
                            charCode: 0,
                            prevSpaces: 0,
                            position: new qe
                        };
                        R9.texture = b10.texture, R9.line = f27, R9.charCode = g11, R9.position.x = i65.x + b10.xOffset + this._letterSpacing / 2, R9.position.y = i65.y + b10.yOffset, R9.prevSpaces = y14, n63.push(R9), c36 = R9.position.x + b10.texture.orig.width, i65.x += b10.xAdvance + this._letterSpacing, v13 = Math.max(v13, b10.yOffset + b10.texture.height), l45 = g11, -1 !== p25 && u52 > 0 && i65.x > u52 && (Ae(n63, 1 + p25 - ++m14, 1 + E - p25), E = p25, p25 = -1, o63.push(_), s54.push(n63.length > 0 ? n63[n63.length - 1].prevSpaces : 0), d36 = Math.max(d36, _), f27++, i65.x = 0, i65.y += e40.lineHeight, l45 = null, y14 = 0);
                    }
                } else o63.push(c36), s54.push(-1), d36 = Math.max(d36, c36), ++f27, ++m14, i65.x = 0, i65.y += e40.lineHeight, l45 = null, y14 = 0;
            }
            var x8 = a59.charAt(a59.length - 1);
            "\r" !== x8 && "\n" !== x8 && (/(?:\s)/.test(x8) && (c36 = _), o63.push(c36), d36 = Math.max(d36, c36), s54.push(-1));
            var A9 = [];
            for(E = 0; E <= f27; E++){
                var S6 = 0;
                "right" === this._align ? S6 = d36 - o63[E] : "center" === this._align ? S6 = (d36 - o63[E]) / 2 : "justify" === this._align && (S6 = s54[E] < 0 ? 0 : (d36 - o63[E]) / s54[E]), A9.push(S6);
            }
            var O6 = n63.length, I5 = {
            }, P4 = [], M4 = this._activePagesMeshData;
            for(E = 0; E < M4.length; E++)qa.push(M4[E]);
            for(E = 0; E < O6; E++){
                var D3 = (X3 = n63[E].texture).baseTexture.uid;
                if (!I5[D3]) {
                    if (!(z3 = qa.pop())) {
                        var N4 = new Ba, w3 = new Ua(ri.EMPTY);
                        z3 = {
                            index: 0,
                            indexCount: 0,
                            vertexCount: 0,
                            uvsCount: 0,
                            total: 0,
                            mesh: new Ca(N4, w3),
                            vertices: null,
                            uvs: null,
                            indices: null
                        };
                    }
                    z3.index = 0, z3.indexCount = 0, z3.vertexCount = 0, z3.uvsCount = 0, z3.total = 0;
                    var C2 = this._textureCache;
                    C2[D3] = C2[D3] || new ri(X3.baseTexture), z3.mesh.texture = C2[D3], z3.mesh.tint = this._tint, P4.push(z3), I5[D3] = z3;
                }
                I5[D3].total++;
            }
            for(E = 0; E < M4.length; E++)-1 === P4.indexOf(M4[E]) && this.removeChild(M4[E].mesh);
            for(E = 0; E < P4.length; E++)P4[E].mesh.parent !== this && this.addChild(P4[E].mesh);
            for(var E in this._activePagesMeshData = P4, I5){
                var L2 = (z3 = I5[E]).total;
                if (!((null === (t17 = z3.indices) || (void 0) === t17 ? void 0 : t17.length) > 6 * L2) || z3.vertices.length < 2 * Ca.BATCHABLE_SIZE) z3.vertices = new Float32Array(8 * L2), z3.uvs = new Float32Array(8 * L2), z3.indices = new Uint16Array(6 * L2);
                else for(var F2 = z3.total, U2 = z3.vertices, B2 = 4 * F2 * 2; B2 < U2.length; B2++)U2[B2] = 0;
                z3.mesh.size = 6 * L2;
            }
            for(E = 0; E < O6; E++){
                var G2 = (T9 = n63[E]).position.x + A9[T9.line] * ("justify" === this._align ? T9.prevSpaces : 1);
                this._roundPixels && (G2 = Math.round(G2));
                var X3, k2 = G2 * r58, H2 = T9.position.y * r58, Y2 = I5[(X3 = T9.texture).baseTexture.uid], j2 = X3.frame, V2 = X3._uvs, W2 = Y2.index++;
                Y2.indices[6 * W2 + 0] = 0 + 4 * W2, Y2.indices[6 * W2 + 1] = 1 + 4 * W2, Y2.indices[6 * W2 + 2] = 2 + 4 * W2, Y2.indices[6 * W2 + 3] = 0 + 4 * W2, Y2.indices[6 * W2 + 4] = 2 + 4 * W2, Y2.indices[6 * W2 + 5] = 3 + 4 * W2, Y2.vertices[8 * W2 + 0] = k2, Y2.vertices[8 * W2 + 1] = H2, Y2.vertices[8 * W2 + 2] = k2 + j2.width * r58, Y2.vertices[8 * W2 + 3] = H2, Y2.vertices[8 * W2 + 4] = k2 + j2.width * r58, Y2.vertices[8 * W2 + 5] = H2 + j2.height * r58, Y2.vertices[8 * W2 + 6] = k2, Y2.vertices[8 * W2 + 7] = H2 + j2.height * r58, Y2.uvs[8 * W2 + 0] = V2.x0, Y2.uvs[8 * W2 + 1] = V2.y0, Y2.uvs[8 * W2 + 2] = V2.x1, Y2.uvs[8 * W2 + 3] = V2.y1, Y2.uvs[8 * W2 + 4] = V2.x2, Y2.uvs[8 * W2 + 5] = V2.y2, Y2.uvs[8 * W2 + 6] = V2.x3, Y2.uvs[8 * W2 + 7] = V2.y3;
            }
            for(var E in this._textWidth = d36 * r58, this._textHeight = (i65.y + e40.lineHeight) * r58, I5){
                var z3 = I5[E];
                if (0 !== this.anchor.x || 0 !== this.anchor.y) for(var q2 = 0, K2 = this._textWidth * this.anchor.x, Z2 = this._textHeight * this.anchor.y, Q2 = 0; Q2 < z3.total; Q2++)z3.vertices[q2++] -= K2, z3.vertices[q2++] -= Z2, z3.vertices[q2++] -= K2, z3.vertices[q2++] -= Z2, z3.vertices[q2++] -= K2, z3.vertices[q2++] -= Z2, z3.vertices[q2++] -= K2, z3.vertices[q2++] -= Z2;
                this._maxLineHeight = v13 * r58;
                var J2 = z3.mesh.geometry.getBuffer("aVertexPosition"), $1 = z3.mesh.geometry.getBuffer("aTextureCoord"), tt1 = z3.mesh.geometry.getIndex();
                J2.data = z3.vertices, $1.data = z3.uvs, tt1.data = z3.indices, J2.update(), $1.update(), tt1.update();
            }
            for(E = 0; E < n63.length; E++)Ka.push(n63[E]);
        }, e39.prototype.updateTransform = function() {
            this.validate(), this.containerUpdateTransform();
        }, e39.prototype.getLocalBounds = function() {
            return this.validate(), t15.prototype.getLocalBounds.call(this);
        }, e39.prototype.validate = function() {
            this.dirty && (this.updateText(), this.dirty = !1);
        }, Object.defineProperty(e39.prototype, "tint", {
            get: function() {
                return this._tint;
            },
            set: function(t17) {
                if (this._tint !== t17) {
                    this._tint = t17;
                    for(var e40 = 0; e40 < this._activePagesMeshData.length; e40++)this._activePagesMeshData[e40].mesh.tint = t17;
                }
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "align", {
            get: function() {
                return this._align;
            },
            set: function(t17) {
                this._align !== t17 && (this._align = t17, this.dirty = !0);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "fontName", {
            get: function() {
                return this._fontName;
            },
            set: function(t17) {
                if (!za.available[t17]) throw new Error('Missing BitmapFont "' + t17 + '"');
                this._fontName !== t17 && (this._fontName = t17, this.dirty = !0);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "fontSize", {
            get: function() {
                return this._fontSize;
            },
            set: function(t17) {
                this._fontSize !== t17 && (this._fontSize = t17, this.dirty = !0);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "anchor", {
            get: function() {
                return this._anchor;
            },
            set: function(t17) {
                "number" == typeof t17 ? this._anchor.set(t17) : this._anchor.copyFrom(t17);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "text", {
            get: function() {
                return this._text;
            },
            set: function(t17) {
                t17 = String(null == t17 ? "" : t17), this._text !== t17 && (this._text = t17, this.dirty = !0);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "maxWidth", {
            get: function() {
                return this._maxWidth;
            },
            set: function(t17) {
                this._maxWidth !== t17 && (this._maxWidth = t17, this.dirty = !0);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "maxLineHeight", {
            get: function() {
                return this.validate(), this._maxLineHeight;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "textWidth", {
            get: function() {
                return this.validate(), this._textWidth;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "letterSpacing", {
            get: function() {
                return this._letterSpacing;
            },
            set: function(t17) {
                this._letterSpacing !== t17 && (this._letterSpacing = t17, this.dirty = !0);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "roundPixels", {
            get: function() {
                return this._roundPixels;
            },
            set: function(t17) {
                t17 !== this._roundPixels && (this._roundPixels = t17, this.dirty = !0);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "textHeight", {
            get: function() {
                return this.validate(), this._textHeight;
            },
            enumerable: !1,
            configurable: !0
        }), e39.prototype.destroy = function(e41) {
            var r58 = this._textureCache;
            for(var i65 in r58)r58[i65].destroy(), delete r58[i65];
            this._textureCache = null, t15.prototype.destroy.call(this, e41);
        }, e39.styleDefaults = {
            align: "left",
            tint: 16777215,
            maxWidth: 0,
            letterSpacing: 0
        }, e39;
    }(dr), Qa = function() {
        function e39() {
        }
        return e39.add = function() {
            t.LoaderResource.setExtensionXhrType("fnt", t.LoaderResource.XHR_RESPONSE_TYPE.TEXT);
        }, e39.use = function(r58, i65) {
            var n63 = Va(r58.data);
            if (n63) for(var o63 = e39.getBaseUrl(this, r58), s54 = n63.parse(r58.data), a59 = {
            }, h55 = function(t15) {
                a59[t15.metadata.pageFile] = t15.texture, Object.keys(a59).length === s54.page.length && (r58.bitmapFont = za.install(s54, a59, !0), i65());
            }, u52 = 0; u52 < s54.page.length; ++u52){
                var l45 = s54.page[u52].file, c36 = o63 + l45, d36 = !1;
                for(var f27 in this.resources){
                    var p25 = this.resources[f27];
                    if (p25.url === c36) {
                        p25.metadata.pageFile = l45, p25.texture ? h55(p25) : p25.onAfterMiddleware.add(h55), d36 = !0;
                        break;
                    }
                }
                if (!d36) {
                    var _ = {
                        crossOrigin: r58.crossOrigin,
                        loadType: t.LoaderResource.LOAD_TYPE.IMAGE,
                        metadata: Object.assign({
                            pageFile: l45
                        }, r58.metadata.imageMetadata),
                        parentResource: r58
                    };
                    this.add(c36, _, h55);
                }
            }
            else i65();
        }, e39.getBaseUrl = function(t15, r58) {
            var i65 = r58.isDataUrl ? "" : e39.dirname(r58.url);
            return r58.isDataUrl && ("." === i65 && (i65 = ""), t15.baseUrl && i65 && "/" === t15.baseUrl.charAt(t15.baseUrl.length - 1) && (i65 += "/")), (i65 = i65.replace(t15.baseUrl, "")) && "/" !== i65.charAt(i65.length - 1) && (i65 += "/"), i65;
        }, e39.dirname = function(t15) {
            var e41 = t15.replace(/\\/g, "/").replace(/\/$/, "").replace(/\/[^\/]*$/, "");
            return e41 === t15 ? "." : "" === e41 ? "/" : e41;
        }, e39;
    }(), Ja = function(t15, e39) {
        return (Ja = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t17, e41) {
            t17.__proto__ = e41;
        } || function(t17, e41) {
            for(var r58 in e41)e41.hasOwnProperty(r58) && (t17[r58] = e41[r58]);
        })(t15, e39);
    }, $a = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n", th = function(t15) {
        function e39(e41) {
            (void 0) === e41 && (e41 = 1);
            var r58 = t15.call(this, qn, $a, {
                uAlpha: 1
            }) || this;
            return r58.alpha = e41, r58;
        }
        return (function(t17, e41) {
            function r58() {
                this.constructor = t17;
            }
            Ja(t17, e41), t17.prototype = null === e41 ? Object.create(e41) : (r58.prototype = e41.prototype, new r58);
        })(e39, t15), Object.defineProperty(e39.prototype, "alpha", {
            get: function() {
                return this.uniforms.uAlpha;
            },
            set: function(t17) {
                this.uniforms.uAlpha = t17;
            },
            enumerable: !1,
            configurable: !0
        }), e39;
    }(on), eh = function(t15, e39) {
        return (eh = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t17, e41) {
            t17.__proto__ = e41;
        } || function(t17, e41) {
            for(var r58 in e41)e41.hasOwnProperty(r58) && (t17[r58] = e41[r58]);
        })(t15, e39);
    };
    function rh(t15, e39) {
        function r58() {
            this.constructor = t15;
        }
        eh(t15, e39), t15.prototype = null === e39 ? Object.create(e39) : (r58.prototype = e39.prototype, new r58);
    }
    var ih, nh, oh, sh, ah, hh, uh, lh, ch, dh, fh, ph, _h, mh, vh, yh, Eh, gh, Th, bh = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }", Rh = {
        5: [
            0.153388,
            0.221461,
            0.250301
        ],
        7: [
            0.071303,
            0.131514,
            0.189879,
            0.214607
        ],
        9: [
            0.028532,
            0.067234,
            0.124009,
            0.179044,
            0.20236
        ],
        11: [
            0.0093,
            0.028002,
            0.065984,
            0.121703,
            0.175713,
            0.198596
        ],
        13: [
            0.002406,
            0.009255,
            0.027867,
            0.065666,
            0.121117,
            0.174868,
            0.197641
        ],
        15: [
            0.000489,
            0.002403,
            0.009246,
            0.02784,
            0.065602,
            0.120999,
            0.174697,
            0.197448
        ]
    }, xh = [
        "varying vec2 vBlurTexCoords[%size%];",
        "uniform sampler2D uSampler;",
        "void main(void)",
        "{",
        "    gl_FragColor = vec4(0.0);",
        "    %blur%",
        "}"
    ].join("\n");
    !function(t15) {
        t15[t15.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t15[t15.WEBGL = 1] = "WEBGL", t15[t15.WEBGL2 = 2] = "WEBGL2";
    }(ih || (ih = {
    })), (function(t15) {
        t15[t15.UNKNOWN = 0] = "UNKNOWN", t15[t15.WEBGL = 1] = "WEBGL", t15[t15.CANVAS = 2] = "CANVAS";
    })(nh || (nh = {
    })), (function(t15) {
        t15[t15.COLOR = 16384] = "COLOR", t15[t15.DEPTH = 256] = "DEPTH", t15[t15.STENCIL = 1024] = "STENCIL";
    })(oh || (oh = {
    })), (function(t15) {
        t15[t15.NORMAL = 0] = "NORMAL", t15[t15.ADD = 1] = "ADD", t15[t15.MULTIPLY = 2] = "MULTIPLY", t15[t15.SCREEN = 3] = "SCREEN", t15[t15.OVERLAY = 4] = "OVERLAY", t15[t15.DARKEN = 5] = "DARKEN", t15[t15.LIGHTEN = 6] = "LIGHTEN", t15[t15.COLOR_DODGE = 7] = "COLOR_DODGE", t15[t15.COLOR_BURN = 8] = "COLOR_BURN", t15[t15.HARD_LIGHT = 9] = "HARD_LIGHT", t15[t15.SOFT_LIGHT = 10] = "SOFT_LIGHT", t15[t15.DIFFERENCE = 11] = "DIFFERENCE", t15[t15.EXCLUSION = 12] = "EXCLUSION", t15[t15.HUE = 13] = "HUE", t15[t15.SATURATION = 14] = "SATURATION", t15[t15.COLOR = 15] = "COLOR", t15[t15.LUMINOSITY = 16] = "LUMINOSITY", t15[t15.NORMAL_NPM = 17] = "NORMAL_NPM", t15[t15.ADD_NPM = 18] = "ADD_NPM", t15[t15.SCREEN_NPM = 19] = "SCREEN_NPM", t15[t15.NONE = 20] = "NONE", t15[t15.SRC_OVER = 0] = "SRC_OVER", t15[t15.SRC_IN = 21] = "SRC_IN", t15[t15.SRC_OUT = 22] = "SRC_OUT", t15[t15.SRC_ATOP = 23] = "SRC_ATOP", t15[t15.DST_OVER = 24] = "DST_OVER", t15[t15.DST_IN = 25] = "DST_IN", t15[t15.DST_OUT = 26] = "DST_OUT", t15[t15.DST_ATOP = 27] = "DST_ATOP", t15[t15.ERASE = 26] = "ERASE", t15[t15.SUBTRACT = 28] = "SUBTRACT", t15[t15.XOR = 29] = "XOR";
    })(sh || (sh = {
    })), (function(t15) {
        t15[t15.POINTS = 0] = "POINTS", t15[t15.LINES = 1] = "LINES", t15[t15.LINE_LOOP = 2] = "LINE_LOOP", t15[t15.LINE_STRIP = 3] = "LINE_STRIP", t15[t15.TRIANGLES = 4] = "TRIANGLES", t15[t15.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t15[t15.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
    })(ah || (ah = {
    })), (function(t15) {
        t15[t15.RGBA = 6408] = "RGBA", t15[t15.RGB = 6407] = "RGB", t15[t15.RG = 33319] = "RG", t15[t15.RED = 6403] = "RED", t15[t15.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t15[t15.RGB_INTEGER = 36248] = "RGB_INTEGER", t15[t15.RG_INTEGER = 33320] = "RG_INTEGER", t15[t15.RED_INTEGER = 36244] = "RED_INTEGER", t15[t15.ALPHA = 6406] = "ALPHA", t15[t15.LUMINANCE = 6409] = "LUMINANCE", t15[t15.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t15[t15.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t15[t15.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
    })(hh || (hh = {
    })), (function(t15) {
        t15[t15.TEXTURE_2D = 3553] = "TEXTURE_2D", t15[t15.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t15[t15.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t15[t15.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t15[t15.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t15[t15.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t15[t15.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t15[t15.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t15[t15.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
    })(uh || (uh = {
    })), (function(t15) {
        t15[t15.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t15[t15.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t15[t15.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t15[t15.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t15[t15.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t15[t15.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t15[t15.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t15[t15.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t15[t15.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t15[t15.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t15[t15.BYTE = 5120] = "BYTE", t15[t15.SHORT = 5122] = "SHORT", t15[t15.INT = 5124] = "INT", t15[t15.FLOAT = 5126] = "FLOAT", t15[t15.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t15[t15.HALF_FLOAT = 36193] = "HALF_FLOAT";
    })(lh || (lh = {
    })), (function(t15) {
        t15[t15.FLOAT = 0] = "FLOAT", t15[t15.INT = 1] = "INT", t15[t15.UINT = 2] = "UINT";
    })(ch || (ch = {
    })), (function(t15) {
        t15[t15.NEAREST = 0] = "NEAREST", t15[t15.LINEAR = 1] = "LINEAR";
    })(dh || (dh = {
    })), (function(t15) {
        t15[t15.CLAMP = 33071] = "CLAMP", t15[t15.REPEAT = 10497] = "REPEAT", t15[t15.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT";
    })(fh || (fh = {
    })), (function(t15) {
        t15[t15.OFF = 0] = "OFF", t15[t15.POW2 = 1] = "POW2", t15[t15.ON = 2] = "ON", t15[t15.ON_MANUAL = 3] = "ON_MANUAL";
    })(ph || (ph = {
    })), (function(t15) {
        t15[t15.NPM = 0] = "NPM", t15[t15.UNPACK = 1] = "UNPACK", t15[t15.PMA = 2] = "PMA", t15[t15.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t15[t15.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t15[t15.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA";
    })(_h || (_h = {
    })), (function(t15) {
        t15[t15.NO = 0] = "NO", t15[t15.YES = 1] = "YES", t15[t15.AUTO = 2] = "AUTO", t15[t15.BLEND = 0] = "BLEND", t15[t15.CLEAR = 1] = "CLEAR", t15[t15.BLIT = 2] = "BLIT";
    })(mh || (mh = {
    })), (function(t15) {
        t15[t15.AUTO = 0] = "AUTO", t15[t15.MANUAL = 1] = "MANUAL";
    })(vh || (vh = {
    })), (function(t15) {
        t15.LOW = "lowp", t15.MEDIUM = "mediump", t15.HIGH = "highp";
    })(yh || (yh = {
    })), (function(t15) {
        t15[t15.NONE = 0] = "NONE", t15[t15.SCISSOR = 1] = "SCISSOR", t15[t15.STENCIL = 2] = "STENCIL", t15[t15.SPRITE = 3] = "SPRITE";
    })(Eh || (Eh = {
    })), (function(t15) {
        t15[t15.NONE = 0] = "NONE", t15[t15.LOW = 2] = "LOW", t15[t15.MEDIUM = 4] = "MEDIUM", t15[t15.HIGH = 8] = "HIGH";
    })(gh || (gh = {
    })), (function(t15) {
        t15[t15.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t15[t15.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t15[t15.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER";
    })(Th || (Th = {
    }));
    var Ah = function(t15) {
        function e39(e41, r58, i65, n63, o63) {
            (void 0) === r58 && (r58 = 8), (void 0) === i65 && (i65 = 4), (void 0) === n63 && (n63 = rt.FILTER_RESOLUTION), (void 0) === o63 && (o63 = 5);
            var s54 = this, a59 = function(t17, e42) {
                var r59, i66 = Math.ceil(t17 / 2), n65 = bh, o65 = "";
                r59 = e42 ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
                for(var s56 = 0; s56 < t17; s56++){
                    var a61 = r59.replace("%index%", s56.toString());
                    o65 += a61 = a61.replace("%sampleIndex%", s56 - (i66 - 1) + ".0"), o65 += "\n";
                }
                return (n65 = n65.replace("%blur%", o65)).replace("%size%", t17.toString());
            }(o63, e41), h55 = function(t17) {
                for(var e42, r59 = Rh[t17], i66 = r59.length, n65 = xh, o65 = "", s56 = 0; s56 < t17; s56++){
                    var a62 = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", s56.toString());
                    e42 = s56, s56 >= i66 && (e42 = t17 - s56 - 1), o65 += a62 = a62.replace("%value%", r59[e42].toString()), o65 += "\n";
                }
                return (n65 = n65.replace("%blur%", o65)).replace("%size%", t17.toString());
            }(o63);
            return (s54 = t15.call(this, a59, h55) || this).horizontal = e41, s54.resolution = n63, s54._quality = 0, s54.quality = i65, s54.blur = r58, s54;
        }
        return rh(e39, t15), e39.prototype.apply = function(t17, e41, r58, i65) {
            if (r58 ? this.horizontal ? this.uniforms.strength = 1 / r58.width * (r58.width / e41.width) : this.uniforms.strength = 1 / r58.height * (r58.height / e41.height) : this.horizontal ? this.uniforms.strength = 1 / t17.renderer.width * (t17.renderer.width / e41.width) : this.uniforms.strength = 1 / t17.renderer.height * (t17.renderer.height / e41.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t17.applyFilter(this, e41, r58, i65);
            else {
                var n63 = t17.getFilterTexture(), o63 = t17.renderer, s54 = e41, a59 = n63;
                this.state.blend = !1, t17.applyFilter(this, s54, a59, mh.CLEAR);
                for(var h55 = 1; h55 < this.passes - 1; h55++){
                    t17.bindAndClear(s54, mh.BLIT), this.uniforms.uSampler = a59;
                    var u52 = a59;
                    a59 = s54, s54 = u52, o63.shader.bind(this), o63.geometry.draw(5);
                }
                this.state.blend = !0, t17.applyFilter(this, a59, r58, i65), t17.returnFilterTexture(n63);
            }
        }, Object.defineProperty(e39.prototype, "blur", {
            get: function() {
                return this.strength;
            },
            set: function(t17) {
                this.padding = 1 + 2 * Math.abs(t17), this.strength = t17;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "quality", {
            get: function() {
                return this._quality;
            },
            set: function(t17) {
                this._quality = t17, this.passes = t17;
            },
            enumerable: !1,
            configurable: !0
        }), e39;
    }(on), Sh = function(t15) {
        function e39(e41, r58, i65, n65) {
            (void 0) === e41 && (e41 = 8), (void 0) === r58 && (r58 = 4), (void 0) === i65 && (i65 = rt.FILTER_RESOLUTION), (void 0) === n65 && (n65 = 5);
            var o65 = t15.call(this) || this;
            return o65.blurXFilter = new Ah(!0, e41, r58, i65, n65), o65.blurYFilter = new Ah(!1, e41, r58, i65, n65), o65.resolution = i65, o65.quality = r58, o65.blur = e41, o65.repeatEdgePixels = !1, o65;
        }
        return rh(e39, t15), e39.prototype.apply = function(t17, e41, r58, i65) {
            var n65 = Math.abs(this.blurXFilter.strength), o65 = Math.abs(this.blurYFilter.strength);
            if (n65 && o65) {
                var s56 = t17.getFilterTexture();
                this.blurXFilter.apply(t17, e41, s56, mh.CLEAR), this.blurYFilter.apply(t17, s56, r58, i65), t17.returnFilterTexture(s56);
            } else o65 ? this.blurYFilter.apply(t17, e41, r58, i65) : this.blurXFilter.apply(t17, e41, r58, i65);
        }, e39.prototype.updatePadding = function() {
            this._repeatEdgePixels ? this.padding = 0 : this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength));
        }, Object.defineProperty(e39.prototype, "blur", {
            get: function() {
                return this.blurXFilter.blur;
            },
            set: function(t17) {
                this.blurXFilter.blur = this.blurYFilter.blur = t17, this.updatePadding();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "quality", {
            get: function() {
                return this.blurXFilter.quality;
            },
            set: function(t17) {
                this.blurXFilter.quality = this.blurYFilter.quality = t17;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "blurX", {
            get: function() {
                return this.blurXFilter.blur;
            },
            set: function(t17) {
                this.blurXFilter.blur = t17, this.updatePadding();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "blurY", {
            get: function() {
                return this.blurYFilter.blur;
            },
            set: function(t17) {
                this.blurYFilter.blur = t17, this.updatePadding();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "blendMode", {
            get: function() {
                return this.blurYFilter.blendMode;
            },
            set: function(t17) {
                this.blurYFilter.blendMode = t17;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "repeatEdgePixels", {
            get: function() {
                return this._repeatEdgePixels;
            },
            set: function(t17) {
                this._repeatEdgePixels = t17, this.updatePadding();
            },
            enumerable: !1,
            configurable: !0
        }), e39;
    }(on), Oh = function(t15, e39) {
        return (Oh = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t17, e41) {
            t17.__proto__ = e41;
        } || function(t17, e41) {
            for(var r58 in e41)e41.hasOwnProperty(r58) && (t17[r58] = e41[r58]);
        })(t15, e39);
    }, Ih = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n", Ph = function(t15) {
        function e39() {
            var e41 = this, r58 = {
                m: new Float32Array([
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ]),
                uAlpha: 1
            };
            return (e41 = t15.call(this, Kn, Ih, r58) || this).alpha = 1, e41;
        }
        return (function(t17, e41) {
            function r58() {
                this.constructor = t17;
            }
            Oh(t17, e41), t17.prototype = null === e41 ? Object.create(e41) : (r58.prototype = e41.prototype, new r58);
        })(e39, t15), e39.prototype._loadMatrix = function(t17, e41) {
            (void 0) === e41 && (e41 = !1);
            var r58 = t17;
            e41 && (this._multiply(r58, this.uniforms.m, t17), r58 = this._colorMatrix(r58)), this.uniforms.m = r58;
        }, e39.prototype._multiply = function(t17, e41, r58) {
            return t17[0] = e41[0] * r58[0] + e41[1] * r58[5] + e41[2] * r58[10] + e41[3] * r58[15], t17[1] = e41[0] * r58[1] + e41[1] * r58[6] + e41[2] * r58[11] + e41[3] * r58[16], t17[2] = e41[0] * r58[2] + e41[1] * r58[7] + e41[2] * r58[12] + e41[3] * r58[17], t17[3] = e41[0] * r58[3] + e41[1] * r58[8] + e41[2] * r58[13] + e41[3] * r58[18], t17[4] = e41[0] * r58[4] + e41[1] * r58[9] + e41[2] * r58[14] + e41[3] * r58[19] + e41[4], t17[5] = e41[5] * r58[0] + e41[6] * r58[5] + e41[7] * r58[10] + e41[8] * r58[15], t17[6] = e41[5] * r58[1] + e41[6] * r58[6] + e41[7] * r58[11] + e41[8] * r58[16], t17[7] = e41[5] * r58[2] + e41[6] * r58[7] + e41[7] * r58[12] + e41[8] * r58[17], t17[8] = e41[5] * r58[3] + e41[6] * r58[8] + e41[7] * r58[13] + e41[8] * r58[18], t17[9] = e41[5] * r58[4] + e41[6] * r58[9] + e41[7] * r58[14] + e41[8] * r58[19] + e41[9], t17[10] = e41[10] * r58[0] + e41[11] * r58[5] + e41[12] * r58[10] + e41[13] * r58[15], t17[11] = e41[10] * r58[1] + e41[11] * r58[6] + e41[12] * r58[11] + e41[13] * r58[16], t17[12] = e41[10] * r58[2] + e41[11] * r58[7] + e41[12] * r58[12] + e41[13] * r58[17], t17[13] = e41[10] * r58[3] + e41[11] * r58[8] + e41[12] * r58[13] + e41[13] * r58[18], t17[14] = e41[10] * r58[4] + e41[11] * r58[9] + e41[12] * r58[14] + e41[13] * r58[19] + e41[14], t17[15] = e41[15] * r58[0] + e41[16] * r58[5] + e41[17] * r58[10] + e41[18] * r58[15], t17[16] = e41[15] * r58[1] + e41[16] * r58[6] + e41[17] * r58[11] + e41[18] * r58[16], t17[17] = e41[15] * r58[2] + e41[16] * r58[7] + e41[17] * r58[12] + e41[18] * r58[17], t17[18] = e41[15] * r58[3] + e41[16] * r58[8] + e41[17] * r58[13] + e41[18] * r58[18], t17[19] = e41[15] * r58[4] + e41[16] * r58[9] + e41[17] * r58[14] + e41[18] * r58[19] + e41[19], t17;
        }, e39.prototype._colorMatrix = function(t17) {
            var e41 = new Float32Array(t17);
            return e41[4] /= 255, e41[9] /= 255, e41[14] /= 255, e41[19] /= 255, e41;
        }, e39.prototype.brightness = function(t17, e41) {
            var r58 = [
                t17,
                0,
                0,
                0,
                0,
                0,
                t17,
                0,
                0,
                0,
                0,
                0,
                t17,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(r58, e41);
        }, e39.prototype.tint = function(t17, e41) {
            var r58 = [
                (t17 >> 16 & 255) / 255,
                0,
                0,
                0,
                0,
                0,
                (t17 >> 8 & 255) / 255,
                0,
                0,
                0,
                0,
                0,
                (255 & t17) / 255,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(r58, e41);
        }, e39.prototype.greyscale = function(t17, e41) {
            var r58 = [
                t17,
                t17,
                t17,
                0,
                0,
                t17,
                t17,
                t17,
                0,
                0,
                t17,
                t17,
                t17,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(r58, e41);
        }, e39.prototype.blackAndWhite = function(t17) {
            this._loadMatrix([
                0.3,
                0.6,
                0.1,
                0,
                0,
                0.3,
                0.6,
                0.1,
                0,
                0,
                0.3,
                0.6,
                0.1,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ], t17);
        }, e39.prototype.hue = function(t17, e41) {
            t17 = (t17 || 0) / 180 * Math.PI;
            var r58 = Math.cos(t17), i65 = Math.sin(t17), n65 = 1 / 3, o65 = Math.sqrt(n65), s57 = [
                r58 + (1 - r58) * n65,
                n65 * (1 - r58) - o65 * i65,
                n65 * (1 - r58) + o65 * i65,
                0,
                0,
                n65 * (1 - r58) + o65 * i65,
                r58 + n65 * (1 - r58),
                n65 * (1 - r58) - o65 * i65,
                0,
                0,
                n65 * (1 - r58) - o65 * i65,
                n65 * (1 - r58) + o65 * i65,
                r58 + n65 * (1 - r58),
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(s57, e41);
        }, e39.prototype.contrast = function(t17, e41) {
            var r58 = (t17 || 0) + 1, i65 = -0.5 * (r58 - 1), n65 = [
                r58,
                0,
                0,
                0,
                i65,
                0,
                r58,
                0,
                0,
                i65,
                0,
                0,
                r58,
                0,
                i65,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(n65, e41);
        }, e39.prototype.saturate = function(t17, e41) {
            (void 0) === t17 && (t17 = 0);
            var r58 = 2 * t17 / 3 + 1, i65 = -0.5 * (r58 - 1), n65 = [
                r58,
                i65,
                i65,
                0,
                0,
                i65,
                r58,
                i65,
                0,
                0,
                i65,
                i65,
                r58,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(n65, e41);
        }, e39.prototype.desaturate = function() {
            this.saturate(-1);
        }, e39.prototype.negative = function(t17) {
            this._loadMatrix([
                -1,
                0,
                0,
                1,
                0,
                0,
                -1,
                0,
                1,
                0,
                0,
                0,
                -1,
                1,
                0,
                0,
                0,
                0,
                1,
                0
            ], t17);
        }, e39.prototype.sepia = function(t17) {
            this._loadMatrix([
                0.393,
                0.7689999,
                0.18899999,
                0,
                0,
                0.349,
                0.6859999,
                0.16799999,
                0,
                0,
                0.272,
                0.5339999,
                0.13099999,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ], t17);
        }, e39.prototype.technicolor = function(t17) {
            this._loadMatrix([
                1.9125277891456083,
                -0.8545344976951645,
                -0.09155508482755585,
                0,
                11.793603434377337,
                -0.3087833385928097,
                1.7658908555458428,
                -0.10601743074722245,
                0,
                -70.35205161461398,
                -0.231103377548616,
                -0.7501899197440212,
                1.847597816108189,
                0,
                30.950940869491138,
                0,
                0,
                0,
                1,
                0
            ], t17);
        }, e39.prototype.polaroid = function(t17) {
            this._loadMatrix([
                1.438,
                -0.062,
                -0.062,
                0,
                0,
                -0.122,
                1.378,
                -0.122,
                0,
                0,
                -0.016,
                -0.016,
                1.483,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ], t17);
        }, e39.prototype.toBGR = function(t17) {
            this._loadMatrix([
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ], t17);
        }, e39.prototype.kodachrome = function(t17) {
            this._loadMatrix([
                1.1285582396593525,
                -0.3967382283601348,
                -0.03992559172921793,
                0,
                63.72958762196502,
                -0.16404339962244616,
                1.0835251566291304,
                -0.05498805115633132,
                0,
                24.732407896706203,
                -0.16786010706155763,
                -0.5603416277695248,
                1.6014850761964943,
                0,
                35.62982807460946,
                0,
                0,
                0,
                1,
                0
            ], t17);
        }, e39.prototype.browni = function(t17) {
            this._loadMatrix([
                0.5997023498159715,
                0.34553243048391263,
                -0.2708298674538042,
                0,
                47.43192855600873,
                -0.037703249837783157,
                0.8609577587992641,
                0.15059552388459913,
                0,
                -36.96841498319127,
                0.24113635128153335,
                -0.07441037908422492,
                0.44972182064877153,
                0,
                -7.562075277591283,
                0,
                0,
                0,
                1,
                0
            ], t17);
        }, e39.prototype.vintage = function(t17) {
            this._loadMatrix([
                0.6279345635605994,
                0.3202183420819367,
                -0.03965408211312453,
                0,
                9.651285835294123,
                0.02578397704808868,
                0.6441188644374771,
                0.03259127616149294,
                0,
                7.462829176470591,
                0.0466055556782719,
                -0.0851232987247891,
                0.5241648018700465,
                0,
                5.159190588235296,
                0,
                0,
                0,
                1,
                0
            ], t17);
        }, e39.prototype.colorTone = function(t17, e41, r58, i65, n65) {
            var o65 = ((r58 = r58 || 16770432) >> 16 & 255) / 255, s57 = (r58 >> 8 & 255) / 255, a63 = (255 & r58) / 255, h57 = ((i65 = i65 || 3375104) >> 16 & 255) / 255, u53 = (i65 >> 8 & 255) / 255, l46 = (255 & i65) / 255, c37 = [
                0.3,
                0.59,
                0.11,
                0,
                0,
                o65,
                s57,
                a63,
                t17 = t17 || 0.2,
                0,
                h57,
                u53,
                l46,
                e41 = e41 || 0.15,
                0,
                o65 - h57,
                s57 - u53,
                a63 - l46,
                0,
                0
            ];
            this._loadMatrix(c37, n65);
        }, e39.prototype.night = function(t17, e41) {
            var r58 = [
                -2 * (t17 = t17 || 0.1),
                -t17,
                0,
                0,
                0,
                -t17,
                0,
                t17,
                0,
                0,
                0,
                t17,
                2 * t17,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(r58, e41);
        }, e39.prototype.predator = function(t17, e41) {
            var r58 = [
                11.224130630493164 * t17,
                -4.794486999511719 * t17,
                -2.8746118545532227 * t17,
                0 * t17,
                0.40342438220977783 * t17,
                -3.6330697536468506 * t17,
                9.193157196044922 * t17,
                -2.951810836791992 * t17,
                0 * t17,
                -1.316135048866272 * t17,
                -3.2184197902679443 * t17,
                -4.2375030517578125 * t17,
                7.476448059082031 * t17,
                0 * t17,
                0.8044459223747253 * t17,
                0,
                0,
                0,
                1,
                0
            ];
            this._loadMatrix(r58, e41);
        }, e39.prototype.lsd = function(t17) {
            this._loadMatrix([
                2,
                -0.4,
                0.5,
                0,
                0,
                -0.5,
                2,
                -0.4,
                0,
                0,
                -0.4,
                -0.5,
                3,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ], t17);
        }, e39.prototype.reset = function() {
            this._loadMatrix([
                1,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1,
                0
            ], !1);
        }, Object.defineProperty(e39.prototype, "matrix", {
            get: function() {
                return this.uniforms.m;
            },
            set: function(t17) {
                this.uniforms.m = t17;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "alpha", {
            get: function() {
                return this.uniforms.uAlpha;
            },
            set: function(t17) {
                this.uniforms.uAlpha = t17;
            },
            enumerable: !1,
            configurable: !0
        }), e39;
    }(on);
    Ph.prototype.grayscale = Ph.prototype.greyscale;
    var Mh, Dh, Nh, wh, Ch, Lh, Fh, Uh, Bh, Gh, Xh, kh, Hh, Yh, jh, Vh, Wh, zh, qh, Kh = function(t15, e39) {
        return (Kh = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t17, e41) {
            t17.__proto__ = e41;
        } || function(t17, e41) {
            for(var r58 in e41)e41.hasOwnProperty(r58) && (t17[r58] = e41[r58]);
        })(t15, e39);
    }, Zh = "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n", Qh = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n", Jh = function(t15) {
        function e39(e41, r58) {
            var i65 = this, n65 = new Ze;
            return e41.renderable = !1, (i65 = t15.call(this, Qh, Zh, {
                mapSampler: e41._texture,
                filterMatrix: n65,
                scale: {
                    x: 1,
                    y: 1
                },
                rotation: new Float32Array([
                    1,
                    0,
                    0,
                    1
                ])
            }) || this).maskSprite = e41, i65.maskMatrix = n65, null == r58 && (r58 = 20), i65.scale = new qe(r58, r58), i65;
        }
        return (function(t17, e41) {
            function r58() {
                this.constructor = t17;
            }
            Kh(t17, e41), t17.prototype = null === e41 ? Object.create(e41) : (r58.prototype = e41.prototype, new r58);
        })(e39, t15), e39.prototype.apply = function(t17, e41, r58, i65) {
            this.uniforms.filterMatrix = t17.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
            var n65 = this.maskSprite.worldTransform, o65 = Math.sqrt(n65.a * n65.a + n65.b * n65.b), s57 = Math.sqrt(n65.c * n65.c + n65.d * n65.d);
            0 !== o65 && 0 !== s57 && (this.uniforms.rotation[0] = n65.a / o65, this.uniforms.rotation[1] = n65.b / o65, this.uniforms.rotation[2] = n65.c / s57, this.uniforms.rotation[3] = n65.d / s57), t17.applyFilter(this, e41, r58, i65);
        }, Object.defineProperty(e39.prototype, "map", {
            get: function() {
                return this.uniforms.mapSampler;
            },
            set: function(t17) {
                this.uniforms.mapSampler = t17;
            },
            enumerable: !1,
            configurable: !0
        }), e39;
    }(on), $h = function(t15, e39) {
        return ($h = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t17, e41) {
            t17.__proto__ = e41;
        } || function(t17, e41) {
            for(var r58 in e41)e41.hasOwnProperty(r58) && (t17[r58] = e41[r58]);
        })(t15, e39);
    }, tu = "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n", eu = 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputSize;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n', ru = function(t15) {
        function e39() {
            return t15.call(this, tu, eu) || this;
        }
        return (function(t17, e41) {
            function r58() {
                this.constructor = t17;
            }
            $h(t17, e41), t17.prototype = null === e41 ? Object.create(e41) : (r58.prototype = e41.prototype, new r58);
        })(e39, t15), e39;
    }(on), iu = function(t15, e39) {
        return (iu = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t17, e41) {
            t17.__proto__ = e41;
        } || function(t17, e41) {
            for(var r58 in e41)e41.hasOwnProperty(r58) && (t17[r58] = e41[r58]);
        })(t15, e39);
    }, nu = "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n", ou = function(t15) {
        function e39(e41, r58) {
            (void 0) === e41 && (e41 = 0.5), (void 0) === r58 && (r58 = Math.random());
            var i65 = t15.call(this, Kn, nu, {
                uNoise: 0,
                uSeed: 0
            }) || this;
            return i65.noise = e41, i65.seed = r58, i65;
        }
        return (function(t17, e41) {
            function r58() {
                this.constructor = t17;
            }
            iu(t17, e41), t17.prototype = null === e41 ? Object.create(e41) : (r58.prototype = e41.prototype, new r58);
        })(e39, t15), Object.defineProperty(e39.prototype, "noise", {
            get: function() {
                return this.uniforms.uNoise;
            },
            set: function(t17) {
                this.uniforms.uNoise = t17;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e39.prototype, "seed", {
            get: function() {
                return this.uniforms.uSeed;
            },
            set: function(t17) {
                this.uniforms.uSeed = t17;
            },
            enumerable: !1,
            configurable: !0
        }), e39;
    }(on);
    !function(t15) {
        t15[t15.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t15[t15.WEBGL = 1] = "WEBGL", t15[t15.WEBGL2 = 2] = "WEBGL2";
    }(Mh || (Mh = {
    })), (function(t15) {
        t15[t15.UNKNOWN = 0] = "UNKNOWN", t15[t15.WEBGL = 1] = "WEBGL", t15[t15.CANVAS = 2] = "CANVAS";
    })(Dh || (Dh = {
    })), (function(t15) {
        t15[t15.COLOR = 16384] = "COLOR", t15[t15.DEPTH = 256] = "DEPTH", t15[t15.STENCIL = 1024] = "STENCIL";
    })(Nh || (Nh = {
    })), (function(t15) {
        t15[t15.NORMAL = 0] = "NORMAL", t15[t15.ADD = 1] = "ADD", t15[t15.MULTIPLY = 2] = "MULTIPLY", t15[t15.SCREEN = 3] = "SCREEN", t15[t15.OVERLAY = 4] = "OVERLAY", t15[t15.DARKEN = 5] = "DARKEN", t15[t15.LIGHTEN = 6] = "LIGHTEN", t15[t15.COLOR_DODGE = 7] = "COLOR_DODGE", t15[t15.COLOR_BURN = 8] = "COLOR_BURN", t15[t15.HARD_LIGHT = 9] = "HARD_LIGHT", t15[t15.SOFT_LIGHT = 10] = "SOFT_LIGHT", t15[t15.DIFFERENCE = 11] = "DIFFERENCE", t15[t15.EXCLUSION = 12] = "EXCLUSION", t15[t15.HUE = 13] = "HUE", t15[t15.SATURATION = 14] = "SATURATION", t15[t15.COLOR = 15] = "COLOR", t15[t15.LUMINOSITY = 16] = "LUMINOSITY", t15[t15.NORMAL_NPM = 17] = "NORMAL_NPM", t15[t15.ADD_NPM = 18] = "ADD_NPM", t15[t15.SCREEN_NPM = 19] = "SCREEN_NPM", t15[t15.NONE = 20] = "NONE", t15[t15.SRC_OVER = 0] = "SRC_OVER", t15[t15.SRC_IN = 21] = "SRC_IN", t15[t15.SRC_OUT = 22] = "SRC_OUT", t15[t15.SRC_ATOP = 23] = "SRC_ATOP", t15[t15.DST_OVER = 24] = "DST_OVER", t15[t15.DST_IN = 25] = "DST_IN", t15[t15.DST_OUT = 26] = "DST_OUT", t15[t15.DST_ATOP = 27] = "DST_ATOP", t15[t15.ERASE = 26] = "ERASE", t15[t15.SUBTRACT = 28] = "SUBTRACT", t15[t15.XOR = 29] = "XOR";
    })(wh || (wh = {
    })), (function(t15) {
        t15[t15.POINTS = 0] = "POINTS", t15[t15.LINES = 1] = "LINES", t15[t15.LINE_LOOP = 2] = "LINE_LOOP", t15[t15.LINE_STRIP = 3] = "LINE_STRIP", t15[t15.TRIANGLES = 4] = "TRIANGLES", t15[t15.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t15[t15.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
    })(Ch || (Ch = {
    })), (function(t15) {
        t15[t15.RGBA = 6408] = "RGBA", t15[t15.RGB = 6407] = "RGB", t15[t15.RG = 33319] = "RG", t15[t15.RED = 6403] = "RED", t15[t15.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t15[t15.RGB_INTEGER = 36248] = "RGB_INTEGER", t15[t15.RG_INTEGER = 33320] = "RG_INTEGER", t15[t15.RED_INTEGER = 36244] = "RED_INTEGER", t15[t15.ALPHA = 6406] = "ALPHA", t15[t15.LUMINANCE = 6409] = "LUMINANCE", t15[t15.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t15[t15.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t15[t15.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
    })(Lh || (Lh = {
    })), (function(t15) {
        t15[t15.TEXTURE_2D = 3553] = "TEXTURE_2D", t15[t15.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t15[t15.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t15[t15.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t15[t15.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t15[t15.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t15[t15.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t15[t15.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t15[t15.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
    })(Fh || (Fh = {
    })), (function(t15) {
        t15[t15.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t15[t15.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t15[t15.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t15[t15.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t15[t15.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t15[t15.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t15[t15.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t15[t15.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t15[t15.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t15[t15.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t15[t15.BYTE = 5120] = "BYTE", t15[t15.SHORT = 5122] = "SHORT", t15[t15.INT = 5124] = "INT", t15[t15.FLOAT = 5126] = "FLOAT", t15[t15.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t15[t15.HALF_FLOAT = 36193] = "HALF_FLOAT";
    })(Uh || (Uh = {
    })), (function(t15) {
        t15[t15.FLOAT = 0] = "FLOAT", t15[t15.INT = 1] = "INT", t15[t15.UINT = 2] = "UINT";
    })(Bh || (Bh = {
    })), (function(t15) {
        t15[t15.NEAREST = 0] = "NEAREST", t15[t15.LINEAR = 1] = "LINEAR";
    })(Gh || (Gh = {
    })), (function(t15) {
        t15[t15.CLAMP = 33071] = "CLAMP", t15[t15.REPEAT = 10497] = "REPEAT", t15[t15.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT";
    })(Xh || (Xh = {
    })), (function(t15) {
        t15[t15.OFF = 0] = "OFF", t15[t15.POW2 = 1] = "POW2", t15[t15.ON = 2] = "ON", t15[t15.ON_MANUAL = 3] = "ON_MANUAL";
    })(kh || (kh = {
    })), (function(t15) {
        t15[t15.NPM = 0] = "NPM", t15[t15.UNPACK = 1] = "UNPACK", t15[t15.PMA = 2] = "PMA", t15[t15.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t15[t15.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t15[t15.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA";
    })(Hh || (Hh = {
    })), (function(t15) {
        t15[t15.NO = 0] = "NO", t15[t15.YES = 1] = "YES", t15[t15.AUTO = 2] = "AUTO", t15[t15.BLEND = 0] = "BLEND", t15[t15.CLEAR = 1] = "CLEAR", t15[t15.BLIT = 2] = "BLIT";
    })(Yh || (Yh = {
    })), (function(t15) {
        t15[t15.AUTO = 0] = "AUTO", t15[t15.MANUAL = 1] = "MANUAL";
    })(jh || (jh = {
    })), (function(t15) {
        t15.LOW = "lowp", t15.MEDIUM = "mediump", t15.HIGH = "highp";
    })(Vh || (Vh = {
    })), (function(t15) {
        t15[t15.NONE = 0] = "NONE", t15[t15.SCISSOR = 1] = "SCISSOR", t15[t15.STENCIL = 2] = "STENCIL", t15[t15.SPRITE = 3] = "SPRITE";
    })(Wh || (Wh = {
    })), (function(t15) {
        t15[t15.NONE = 0] = "NONE", t15[t15.LOW = 2] = "LOW", t15[t15.MEDIUM = 4] = "MEDIUM", t15[t15.HIGH = 8] = "HIGH";
    })(zh || (zh = {
    })), (function(t15) {
        t15[t15.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t15[t15.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t15[t15.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER";
    })(qh || (qh = {
    }));
    var su = new Ze;
    ur.prototype._cacheAsBitmap = !1, ur.prototype._cacheData = null, ur.prototype._cacheAsBitmapResolution = null, ur.prototype._cacheAsBitmapMultisample = zh.NONE;
    var au = function() {
        this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null;
    };
    Object.defineProperties(ur.prototype, {
        cacheAsBitmapResolution: {
            get: function() {
                return this._cacheAsBitmapResolution;
            },
            set: function(t15) {
                t15 !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = t15, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0));
            }
        },
        cacheAsBitmapMultisample: {
            get: function() {
                return this._cacheAsBitmapMultisample;
            },
            set: function(t15) {
                t15 !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = t15, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0));
            }
        },
        cacheAsBitmap: {
            get: function() {
                return this._cacheAsBitmap;
            },
            set: function(t15) {
                var e39;
                this._cacheAsBitmap !== t15 && (this._cacheAsBitmap = t15, t15 ? (this._cacheData || (this._cacheData = new au), (e39 = this._cacheData).originalRender = this.render, e39.originalRenderCanvas = this.renderCanvas, e39.originalUpdateTransform = this.updateTransform, e39.originalCalculateBounds = this.calculateBounds, e39.originalGetLocalBounds = this.getLocalBounds, e39.originalDestroy = this.destroy, e39.originalContainsPoint = this.containsPoint, e39.originalMask = this._mask, e39.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : ((e39 = this._cacheData).sprite && this._destroyCachedDisplayObject(), this.render = e39.originalRender, this.renderCanvas = e39.originalRenderCanvas, this.calculateBounds = e39.originalCalculateBounds, this.getLocalBounds = e39.originalGetLocalBounds, this.destroy = e39.originalDestroy, this.updateTransform = e39.originalUpdateTransform, this.containsPoint = e39.originalContainsPoint, this._mask = e39.originalMask, this.filterArea = e39.originalFilterArea));
            }
        }
    }), ur.prototype._renderCached = function(t15) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t15), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t15));
    }, ur.prototype._initCachedDisplayObject = function(t15) {
        var e39;
        if (!this._cacheData || !this._cacheData.sprite) {
            var r58 = this.alpha;
            this.alpha = 1, t15.batch.flush();
            var i65 = this.getLocalBounds(null, !0).clone();
            if (this.filters) {
                var n65 = this.filters[0].padding;
                i65.pad(n65);
            }
            i65.ceil(rt.RESOLUTION);
            var o65 = t15.renderTexture.current, s57 = t15.renderTexture.sourceFrame.clone(), a63 = t15.renderTexture.destinationFrame.clone(), h57 = t15.projection.transform, u53 = ni.create({
                width: i65.width,
                height: i65.height,
                resolution: this.cacheAsBitmapResolution || t15.resolution,
                multisample: null !== (e39 = this.cacheAsBitmapMultisample) && (void 0) !== e39 ? e39 : t15.multisample
            }), l46 = "cacheAsBitmap_" + Ie();
            this._cacheData.textureCacheId = l46, Xr.addToCache(u53.baseTexture, l46), ri.addToCache(u53, l46);
            var c37 = this.transform.localTransform.copyTo(su).invert().translate(-i65.x, -i65.y);
            this.render = this._cacheData.originalRender, t15.render(this, {
                renderTexture: u53,
                clear: !0,
                transform: c37,
                skipUpdateTransform: !1
            }), t15.framebuffer.blit(), t15.projection.transform = h57, t15.renderTexture.bind(o65, s57, a63), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = r58;
            var d37 = new Vs(u53);
            d37.transform.worldTransform = this.transform.worldTransform, d37.anchor.x = -i65.x / i65.width, d37.anchor.y = -i65.y / i65.height, d37.alpha = r58, d37._bounds = this._bounds, this._cacheData.sprite = d37, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = d37.containsPoint.bind(d37);
        }
    }, ur.prototype._renderCachedCanvas = function(t15) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t15), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t15));
    }, ur.prototype._initCachedDisplayObjectCanvas = function(t15) {
        if (!this._cacheData || !this._cacheData.sprite) {
            var e39 = this.getLocalBounds(null, !0), r59 = this.alpha;
            this.alpha = 1;
            var i66 = t15.context, n66 = t15._projTransform;
            e39.ceil(rt.RESOLUTION);
            var o66 = ni.create({
                width: e39.width,
                height: e39.height
            }), s58 = "cacheAsBitmap_" + Ie();
            this._cacheData.textureCacheId = s58, Xr.addToCache(o66.baseTexture, s58), ri.addToCache(o66, s58);
            var a64 = su;
            this.transform.localTransform.copyTo(a64), a64.invert(), a64.tx -= e39.x, a64.ty -= e39.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t15.render(this, {
                renderTexture: o66,
                clear: !0,
                transform: a64,
                skipUpdateTransform: !1
            }), t15.context = i66, t15._projTransform = n66, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = r59;
            var h58 = new Vs(o66);
            h58.transform.worldTransform = this.transform.worldTransform, h58.anchor.x = -e39.x / e39.width, h58.anchor.y = -e39.y / e39.height, h58.alpha = r59, h58._bounds = this._bounds, this._cacheData.sprite = h58, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t15._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = h58.containsPoint.bind(h58);
        }
    }, ur.prototype._calculateCachedBounds = function() {
        this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID;
    }, ur.prototype._getCachedLocalBounds = function() {
        return this._cacheData.sprite.getLocalBounds(null);
    }, ur.prototype._destroyCachedDisplayObject = function() {
        this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, Xr.removeFromCache(this._cacheData.textureCacheId), ri.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null;
    }, ur.prototype._cacheAsBitmapDestroy = function(t15) {
        this.cacheAsBitmap = !1, this.destroy(t15);
    }, ur.prototype.name = null, dr.prototype.getChildByName = function(t15, e41) {
        for(var r60 = 0, i67 = this.children.length; r60 < i67; r60++)if (this.children[r60].name === t15) return this.children[r60];
        if (e41) for(r60 = 0, i67 = this.children.length; r60 < i67; r60++)if (this.children[r60].getChildByName) {
            var n67 = this.children[r60].getChildByName(t15, !0);
            if (n67) return n67;
        }
        return null;
    }, ur.prototype.getGlobalPosition = function(t15, e41) {
        return (void 0) === t15 && (t15 = new qe), (void 0) === e41 && (e41 = !1), this.parent ? this.parent.toGlobal(this.position, t15, e41) : (t15.x = this.position.x, t15.y = this.position.y), t15;
    };
    var hu = function(t15, e41) {
        return (hu = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t17, e42) {
            t17.__proto__ = e42;
        } || function(t17, e42) {
            for(var r60 in e42)e42.hasOwnProperty(r60) && (t17[r60] = e42[r60]);
        })(t15, e41);
    };
    function uu(t15, e41) {
        function r60() {
            this.constructor = t15;
        }
        hu(t15, e41), t15.prototype = null === e41 ? Object.create(e41) : (r60.prototype = e41.prototype, new r60);
    }
    var lu = function(t15) {
        function e41(e42, r60, i67, n68) {
            (void 0) === e42 && (e42 = 100), (void 0) === r60 && (r60 = 100), (void 0) === i67 && (i67 = 10), (void 0) === n68 && (n68 = 10);
            var o67 = t15.call(this) || this;
            return o67.segWidth = i67, o67.segHeight = n68, o67.width = e42, o67.height = r60, o67.build(), o67;
        }
        return uu(e41, t15), e41.prototype.build = function() {
            for(var t17 = this.segWidth * this.segHeight, e42 = [], r60 = [], i67 = [], n68 = this.segWidth - 1, o67 = this.segHeight - 1, s59 = this.width / n68, a65 = this.height / o67, h59 = 0; h59 < t17; h59++){
                var u54 = h59 % this.segWidth, l47 = h59 / this.segWidth | 0;
                e42.push(u54 * s59, l47 * a65), r60.push(u54 / n68, l47 / o67);
            }
            var c38 = n68 * o67;
            for(h59 = 0; h59 < c38; h59++){
                var d38 = h59 % n68, f28 = h59 / n68 | 0, p26 = f28 * this.segWidth + d38, _ = f28 * this.segWidth + d38 + 1, m14 = (f28 + 1) * this.segWidth + d38, v13 = (f28 + 1) * this.segWidth + d38 + 1;
                i67.push(p26, _, m14, _, v13, m14);
            }
            this.buffers[0].data = new Float32Array(e42), this.buffers[1].data = new Float32Array(r60), this.indexBuffer.data = new Uint16Array(i67), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update();
        }, e41;
    }(Ba), cu = function(t15) {
        function e41(e42, r60, i67) {
            (void 0) === e42 && (e42 = 200), (void 0) === i67 && (i67 = 0);
            var n68 = t15.call(this, new Float32Array(4 * r60.length), new Float32Array(4 * r60.length), new Uint16Array(6 * (r60.length - 1))) || this;
            return n68.points = r60, n68._width = e42, n68.textureScale = i67, n68.build(), n68;
        }
        return uu(e41, t15), Object.defineProperty(e41.prototype, "width", {
            get: function() {
                return this._width;
            },
            enumerable: !1,
            configurable: !0
        }), e41.prototype.build = function() {
            var t17 = this.points;
            if (t17) {
                var e42 = this.getBuffer("aVertexPosition"), r60 = this.getBuffer("aTextureCoord"), i67 = this.getIndex();
                if (!(t17.length < 1)) {
                    e42.data.length / 4 !== t17.length && (e42.data = new Float32Array(4 * t17.length), r60.data = new Float32Array(4 * t17.length), i67.data = new Uint16Array(6 * (t17.length - 1)));
                    var n68 = r60.data, o67 = i67.data;
                    n68[0] = 0, n68[1] = 0, n68[2] = 0, n68[3] = 1;
                    for(var s59 = 0, a65 = t17[0], h59 = this._width * this.textureScale, u55 = t17.length, l48 = 0; l48 < u55; l48++){
                        var c38 = 4 * l48;
                        if (this.textureScale > 0) {
                            var d39 = a65.x - t17[l48].x, f29 = a65.y - t17[l48].y, p27 = Math.sqrt(d39 * d39 + f29 * f29);
                            a65 = t17[l48], s59 += p27 / h59;
                        } else s59 = l48 / (u55 - 1);
                        n68[c38] = s59, n68[c38 + 1] = 0, n68[c38 + 2] = s59, n68[c38 + 3] = 1;
                    }
                    var _ = 0;
                    for(l48 = 0; l48 < u55 - 1; l48++)c38 = 2 * l48, o67[_++] = c38, o67[_++] = c38 + 1, o67[_++] = c38 + 2, o67[_++] = c38 + 2, o67[_++] = c38 + 1, o67[_++] = c38 + 3;
                    r60.update(), i67.update(), this.updateVertices();
                }
            }
        }, e41.prototype.updateVertices = function() {
            var t17 = this.points;
            if (!(t17.length < 1)) {
                for(var e43, r61 = t17[0], i68 = 0, n69 = 0, o68 = this.buffers[0].data, s60 = t17.length, a66 = 0; a66 < s60; a66++){
                    var h60 = t17[a66], u56 = 4 * a66;
                    n69 = -((e43 = a66 < t17.length - 1 ? t17[a66 + 1] : h60).x - r61.x), i68 = e43.y - r61.y;
                    var l49 = Math.sqrt(i68 * i68 + n69 * n69), c39 = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
                    i68 /= l49, n69 /= l49, i68 *= c39, n69 *= c39, o68[u56] = h60.x + i68, o68[u56 + 1] = h60.y + n69, o68[u56 + 2] = h60.x - i68, o68[u56 + 3] = h60.y - n69, r61 = h60;
                }
                this.buffers[0].update();
            }
        }, e41.prototype.update = function() {
            this.textureScale > 0 ? this.build() : this.updateVertices();
        }, e41;
    }(Ba), du = function(e41) {
        function r62(r63, i69, n70) {
            (void 0) === n70 && (n70 = 0);
            var o69 = this, s61 = new cu(r63.height, i69, n70), a67 = new Ua(r63);
            return n70 > 0 && (r63.baseTexture.wrapMode = t.WRAP_MODES.REPEAT), (o69 = e41.call(this, s61, a67) || this).autoUpdate = !0, o69;
        }
        return uu(r62, e41), r62.prototype._render = function(t15) {
            var r63 = this.geometry;
            (this.autoUpdate || r63._width !== this.shader.texture.height) && (r63._width = this.shader.texture.height, r63.update()), e41.prototype._render.call(this, t15);
        }, r62;
    }(Ca), fu = function(t15) {
        function e41(e44, r62, i69) {
            var n70 = this, o69 = new lu(e44.width, e44.height, r62, i69), s61 = new Ua(ri.WHITE);
            return (n70 = t15.call(this, o69, s61) || this).texture = e44, n70.autoResize = !0, n70;
        }
        return uu(e41, t15), e41.prototype.textureUpdated = function() {
            this._textureID = this.shader.texture._updateID;
            var t17 = this.geometry, e44 = this.shader.texture, r62 = e44.width, i69 = e44.height;
            !this.autoResize || t17.width === r62 && t17.height === i69 || (t17.width = this.shader.texture.width, t17.height = this.shader.texture.height, t17.build());
        }, Object.defineProperty(e41.prototype, "texture", {
            get: function() {
                return this.shader.texture;
            },
            set: function(t17) {
                this.shader.texture !== t17 && (this.shader.texture = t17, this._textureID = -1, t17.baseTexture.valid ? this.textureUpdated() : t17.once("update", this.textureUpdated, this));
            },
            enumerable: !1,
            configurable: !0
        }), e41.prototype._render = function(e44) {
            this._textureID !== this.shader.texture._updateID && this.textureUpdated(), t15.prototype._render.call(this, e44);
        }, e41.prototype.destroy = function(e44) {
            this.shader.texture.off("update", this.textureUpdated, this), t15.prototype.destroy.call(this, e44);
        }, e41;
    }(Ca), pu = function(t15) {
        function e41(e44, r62, i69, n70, o69) {
            (void 0) === e44 && (e44 = ri.EMPTY);
            var s61 = this, a67 = new Ba(r62, i69, n70);
            a67.getBuffer("aVertexPosition").static = !1;
            var h61 = new Ua(e44);
            return (s61 = t15.call(this, a67, h61, null, o69) || this).autoUpdate = !0, s61;
        }
        return uu(e41, t15), Object.defineProperty(e41.prototype, "vertices", {
            get: function() {
                return this.geometry.getBuffer("aVertexPosition").data;
            },
            set: function(t17) {
                this.geometry.getBuffer("aVertexPosition").data = t17;
            },
            enumerable: !1,
            configurable: !0
        }), e41.prototype._render = function(e44) {
            this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), t15.prototype._render.call(this, e44);
        }, e41;
    }(Ca), _u = 10, mu = function(t15) {
        function e41(e44, r62, i69, n70, o69) {
            (void 0) === r62 && (r62 = _u), (void 0) === i69 && (i69 = _u), (void 0) === n70 && (n70 = _u), (void 0) === o69 && (o69 = _u);
            var s61 = t15.call(this, ri.WHITE, 4, 4) || this;
            return s61._origWidth = e44.orig.width, s61._origHeight = e44.orig.height, s61._width = s61._origWidth, s61._height = s61._origHeight, s61._leftWidth = r62, s61._rightWidth = n70, s61._topHeight = i69, s61._bottomHeight = o69, s61.texture = e44, s61;
        }
        return uu(e41, t15), e41.prototype.textureUpdated = function() {
            this._textureID = this.shader.texture._updateID, this._refresh();
        }, Object.defineProperty(e41.prototype, "vertices", {
            get: function() {
                return this.geometry.getBuffer("aVertexPosition").data;
            },
            set: function(t17) {
                this.geometry.getBuffer("aVertexPosition").data = t17;
            },
            enumerable: !1,
            configurable: !0
        }), e41.prototype.updateHorizontalVertices = function() {
            var t17 = this.vertices, e44 = this._getMinScale();
            t17[9] = t17[11] = t17[13] = t17[15] = this._topHeight * e44, t17[17] = t17[19] = t17[21] = t17[23] = this._height - this._bottomHeight * e44, t17[25] = t17[27] = t17[29] = t17[31] = this._height;
        }, e41.prototype.updateVerticalVertices = function() {
            var t17 = this.vertices, e44 = this._getMinScale();
            t17[2] = t17[10] = t17[18] = t17[26] = this._leftWidth * e44, t17[4] = t17[12] = t17[20] = t17[28] = this._width - this._rightWidth * e44, t17[6] = t17[14] = t17[22] = t17[30] = this._width;
        }, e41.prototype._getMinScale = function() {
            var t17 = this._leftWidth + this._rightWidth, e44 = this._width > t17 ? 1 : this._width / t17, r62 = this._topHeight + this._bottomHeight, i69 = this._height > r62 ? 1 : this._height / r62;
            return Math.min(e44, i69);
        }, Object.defineProperty(e41.prototype, "width", {
            get: function() {
                return this._width;
            },
            set: function(t17) {
                this._width = t17, this._refresh();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e41.prototype, "height", {
            get: function() {
                return this._height;
            },
            set: function(t17) {
                this._height = t17, this._refresh();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e41.prototype, "leftWidth", {
            get: function() {
                return this._leftWidth;
            },
            set: function(t17) {
                this._leftWidth = t17, this._refresh();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e41.prototype, "rightWidth", {
            get: function() {
                return this._rightWidth;
            },
            set: function(t17) {
                this._rightWidth = t17, this._refresh();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e41.prototype, "topHeight", {
            get: function() {
                return this._topHeight;
            },
            set: function(t17) {
                this._topHeight = t17, this._refresh();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e41.prototype, "bottomHeight", {
            get: function() {
                return this._bottomHeight;
            },
            set: function(t17) {
                this._bottomHeight = t17, this._refresh();
            },
            enumerable: !1,
            configurable: !0
        }), e41.prototype._refresh = function() {
            var t17 = this.texture, e44 = this.geometry.buffers[1].data;
            this._origWidth = t17.orig.width, this._origHeight = t17.orig.height;
            var r62 = 1 / this._origWidth, i69 = 1 / this._origHeight;
            e44[0] = e44[8] = e44[16] = e44[24] = 0, e44[1] = e44[3] = e44[5] = e44[7] = 0, e44[6] = e44[14] = e44[22] = e44[30] = 1, e44[25] = e44[27] = e44[29] = e44[31] = 1, e44[2] = e44[10] = e44[18] = e44[26] = r62 * this._leftWidth, e44[4] = e44[12] = e44[20] = e44[28] = 1 - r62 * this._rightWidth, e44[9] = e44[11] = e44[13] = e44[15] = i69 * this._topHeight, e44[17] = e44[19] = e44[21] = e44[23] = 1 - i69 * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update();
        }, e41;
    }(fu), vu = function(t15, e41) {
        return (vu = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t17, e44) {
            t17.__proto__ = e44;
        } || function(t17, e44) {
            for(var r62 in e44)e44.hasOwnProperty(r62) && (t17[r62] = e44[r62]);
        })(t15, e41);
    }, yu = function(e41) {
        function r62(t15, r63) {
            (void 0) === r63 && (r63 = !0);
            var i69 = e41.call(this, t15[0] instanceof ri ? t15[0] : t15[0].texture) || this;
            return i69._textures = null, i69._durations = null, i69._autoUpdate = r63, i69._isConnectedToTicker = !1, i69.animationSpeed = 1, i69.loop = !0, i69.updateAnchor = !1, i69.onComplete = null, i69.onFrameChange = null, i69.onLoop = null, i69._currentTime = 0, i69._playing = !1, i69._previousFrame = null, i69.textures = t15, i69;
        }
        return (function(t15, e44) {
            function r63() {
                this.constructor = t15;
            }
            vu(t15, e44), t15.prototype = null === e44 ? Object.create(e44) : (r63.prototype = e44.prototype, new r63);
        })(r62, e41), r62.prototype.stop = function() {
            this._playing && (this._playing = !1, this._autoUpdate && this._isConnectedToTicker && (gr.shared.remove(this.update, this), this._isConnectedToTicker = !1));
        }, r62.prototype.play = function() {
            this._playing || (this._playing = !0, this._autoUpdate && !this._isConnectedToTicker && (gr.shared.add(this.update, this, t.UPDATE_PRIORITY.HIGH), this._isConnectedToTicker = !0));
        }, r62.prototype.gotoAndStop = function(t15) {
            this.stop();
            var e44 = this.currentFrame;
            this._currentTime = t15, e44 !== this.currentFrame && this.updateTexture();
        }, r62.prototype.gotoAndPlay = function(t15) {
            var e44 = this.currentFrame;
            this._currentTime = t15, e44 !== this.currentFrame && this.updateTexture(), this.play();
        }, r62.prototype.update = function(t15) {
            if (this._playing) {
                var e44 = this.animationSpeed * t15, r63 = this.currentFrame;
                if (null !== this._durations) {
                    var i69 = this._currentTime % 1 * this._durations[this.currentFrame];
                    for(i69 += e44 / 60 * 1000; i69 < 0;)this._currentTime--, i69 += this._durations[this.currentFrame];
                    var n70 = Math.sign(this.animationSpeed * t15);
                    for(this._currentTime = Math.floor(this._currentTime); i69 >= this._durations[this.currentFrame];)i69 -= this._durations[this.currentFrame] * n70, this._currentTime += n70;
                    this._currentTime += i69 / this._durations[this.currentFrame];
                } else this._currentTime += e44;
                this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : r63 !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < r63 ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > r63 && this.onLoop()), this.updateTexture());
            }
        }, r62.prototype.updateTexture = function() {
            var t15 = this.currentFrame;
            this._previousFrame !== t15 && (this._previousFrame = t15, this._texture = this._textures[t15], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame));
        }, r62.prototype.destroy = function(t15) {
            this.stop(), e41.prototype.destroy.call(this, t15), this.onComplete = null, this.onFrameChange = null, this.onLoop = null;
        }, r62.fromFrames = function(t15) {
            for(var e45 = [], i70 = 0; i70 < t15.length; ++i70)e45.push(ri.from(t15[i70]));
            return new r62(e45);
        }, r62.fromImages = function(t15) {
            for(var e45 = [], i70 = 0; i70 < t15.length; ++i70)e45.push(ri.from(t15[i70]));
            return new r62(e45);
        }, Object.defineProperty(r62.prototype, "totalFrames", {
            get: function() {
                return this._textures.length;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r62.prototype, "textures", {
            get: function() {
                return this._textures;
            },
            set: function(t15) {
                if (t15[0] instanceof ri) this._textures = t15, this._durations = null;
                else {
                    this._textures = [], this._durations = [];
                    for(var e45 = 0; e45 < t15.length; e45++)this._textures.push(t15[e45].texture), this._durations.push(t15[e45].time);
                }
                this._previousFrame = null, this.gotoAndStop(0), this.updateTexture();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r62.prototype, "currentFrame", {
            get: function() {
                var t15 = Math.floor(this._currentTime) % this._textures.length;
                return t15 < 0 && (t15 += this._textures.length), t15;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r62.prototype, "playing", {
            get: function() {
                return this._playing;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r62.prototype, "autoUpdate", {
            get: function() {
                return this._autoUpdate;
            },
            set: function(t15) {
                t15 !== this._autoUpdate && (this._autoUpdate = t15, !this._autoUpdate && this._isConnectedToTicker ? (gr.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (gr.shared.add(this.update, this), this._isConnectedToTicker = !0));
            },
            enumerable: !1,
            configurable: !0
        }), r62;
    }(Vs);
    Wn.registerPlugin("accessibility", yr), Wn.registerPlugin("extract", mo), Wn.registerPlugin("interaction", Mr), Wn.registerPlugin("particle", ls), Wn.registerPlugin("prepare", ma), Wn.registerPlugin("batch", so), Wn.registerPlugin("tilingSprite", Ia), Do.registerPlugin(Qa), Do.registerPlugin(Yo), Do.registerPlugin(Jo), Do.registerPlugin(is), Do.registerPlugin(Ea), fo.registerPlugin(Tr), fo.registerPlugin(wo);
    var Eu = {
        AlphaFilter: th,
        BlurFilter: Sh,
        BlurFilterPass: Ah,
        ColorMatrixFilter: Ph,
        DisplacementFilter: Jh,
        FXAAFilter: ru,
        NoiseFilter: ou
    };
    return t.AbstractBatchRenderer = to, t.AbstractMultiResource = kr, t.AbstractRenderer = Yn, t.AccessibilityManager = yr, t.AnimatedSprite = yu, t.AppLoaderPlugin = wo, t.Application = fo, t.ArrayResource = Hr, t.Attribute = si, t.BaseImageResource = Yr, t.BasePrepare = da, t.BaseRenderTexture = $r, t.BaseTexture = Xr, t.BatchDrawCall = Qn, t.BatchGeometry = ro, t.BatchPluginFactory = oo, t.BatchRenderer = so, t.BatchShaderGenerator = eo, t.BatchSystem = Ri, t.BatchTextureArray = Jn, t.BitmapFont = za, t.BitmapFontData = Xa, t.BitmapFontLoader = Qa, t.BitmapText = Za, t.BlobResource = ko, t.Bounds = sr, t.Buffer = hi, t.BufferResource = Br, t.CanvasResource = jr, t.Circle = je, t.CompressedTextureLoader = Yo, t.CompressedTextureResource = Ho, t.Container = dr, t.ContextSystem = Ai, t.CountLimiter = na, t.CubeResource = Vr, t.DDSLoader = Jo, t.DEG_TO_RAD = He, t.DisplayObject = ur, t.Ellipse = Ve, t.Extract = mo, t.FORMATS_TO_COMPONENTS = es, t.FillStyle = ds, t.Filter = on, t.FilterState = yi, t.FilterSystem = Ti, t.Framebuffer = Jr, t.FramebufferSystem = Ii, t.GLFramebuffer = Si, t.GLProgram = Sn, t.GLTexture = Gn, t.GRAPHICS_CURVES = cs, t.Geometry = fi, t.GeometrySystem = Mi, t.Graphics = Xs, t.GraphicsData = ws, t.GraphicsGeometry = Fs, t.IGLUniformData = An, t.INSTALLED = Nr, t.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL = Fo, t.ImageBitmapResource = Kr, t.ImageResource = Wr, t.InteractionData = br, t.InteractionEvent = xr, t.InteractionManager = Mr, t.InteractionTrackingData = Ar, t.KTXLoader = is, t.LineStyle = Us, t.Loader = Do, t.MaskData = Di, t.MaskSystem = cn, t.Matrix = Ze, t.Mesh = Ca, t.MeshBatchUvs = Da, t.MeshGeometry = Ba, t.MeshMaterial = Ua, t.NineSlicePlane = mu, t.ObjectRenderer = bi, t.ObservablePoint = Ke, t.PI_2 = Xe, t.ParticleContainer = ss, t.ParticleRenderer = ls, t.PlaneGeometry = lu, t.Point = qe, t.Polygon = We, t.Prepare = ma, t.Program = en, t.ProjectionSystem = _n, t.Quad = pi, t.QuadUv = _i, t.RAD_TO_DEG = ke, t.Rectangle = Ye, t.RenderTexture = ni, t.RenderTexturePool = oi, t.RenderTextureSystem = yn, t.Renderer = Wn, t.Resource = Ur, t.RopeGeometry = cu, t.RoundedRectangle = ze, t.Runner = Dr, t.SVGResource = zr, t.ScissorSystem = fn, t.Shader = rn, t.ShaderSystem = Mn, t.SimpleMesh = pu, t.SimplePlane = fu, t.SimpleRope = du, t.Sprite = Vs, t.SpriteMaskFilter = ln, t.Spritesheet = ya, t.SpritesheetLoader = Ea, t.State = nn, t.StateSystem = Un, t.StencilSystem = pn, t.System = Zn, t.TYPES_TO_BYTES_PER_COMPONENT = ts, t.TYPES_TO_BYTES_PER_PIXEL = rs, t.TemporaryDisplayObject = lr, t.Text = ra, t.TextMetrics = $s, t.TextStyle = Ks, t.Texture = ri, t.TextureGCSystem = Bn, t.TextureLoader = Co, t.TextureMatrix = un, t.TextureSystem = Xn, t.TextureUvs = ti, t.Ticker = gr, t.TickerPlugin = Tr, t.TilingSprite = Ra, t.TilingSpriteRenderer = Ia, t.TimeLimiter = va, t.Transform = or, t.UniformGroup = vi, t.VERSION = "6.1.3", t.VideoResource = qr, t.ViewableBuffer = $n, t.accessibleTarget = fr, t.autoDetectRenderer = zn, t.autoDetectResource = wr, t.checkMaxIfStatementsInShader = Ji, t.createUBOElements = bn, t.defaultFilterVertex = Kn, t.defaultVertex = qn, t.filters = Eu, t.generateProgram = On, t.generateUniformBufferSync = xn, t.getTestContext = Gi, t.getUBOData = Rn, t.graphicsUtils = ks, t.groupD8 = nr, t.interactiveTarget = Or, t.isMobile = et, t.resources = ao, t.settings = rt, t.systems = lo, t.uniformParsers = zi, t.utils = Ge, t;
}({
}); //# sourceMappingURL=pixi.min.js.map

},{}],"5P4ky":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('apxzp') + "t.7ad1c3b6.jpg";

},{"./helpers/bundle-url":"32MD8"}],"32MD8":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3Hply":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["83pZH","Ag9pj"], "Ag9pj", "parcelRequire7b22")

//# sourceMappingURL=index.d2682c49.js.map
