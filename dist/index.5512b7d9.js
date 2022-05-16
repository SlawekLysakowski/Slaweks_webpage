// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ec9eu":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fa07b0395512b7d9";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
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
            it = it.call(o);
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
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
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
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
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
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
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
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
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

},{}],"gTAhr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "japaneseWords", ()=>japaneseWords
);
parcelHelpers.export(exports, "koreanWords", ()=>koreanWords
);
parcelHelpers.export(exports, "polishWords", ()=>polishWords
);
parcelHelpers.export(exports, "englishWords", ()=>englishWords
);
'use strict';
const japaneseWords = [
    [
        'あらかじめ',
        '前もって'
    ],
    '勤勉する',
    [
        '節約する',
        'せつやくする'
    ],
    '楽しむ',
    '順番で',
    '文字',
    '音感',
    '優れている',
    '社交的 ',
    '手付きがよい',
    '才能',
    '説得力がある',
    '物分りが速い',
    '責任感が強い',
    '手筋がいい',
    '(卒業後の)進路をきめる',
    '性(適性)に合っている',
    'のどがひりひり',
    [
        '定める, 決める'
    ],
    '専攻を生かす',
    '芸術的',
    '実用的',
    '社交的',
    [
        '積極的',
        'せっきょくてき'
    ],
    '肯定的',
    [
        '集まり',
        '集会'
    ],
    '喉が渇わく',
    '目がうす暗い',
    '首がごわつく ',
    '胃袋の調子が悪い',
    '胸苦しい',
    [
        'ふさがる',
        '塞がる'
    ],
    [
        '胸焼けする',
        'ひりひり痛む',
        '焼ける'
    ],
    [
        'ふやける',
        'ほとびる'
    ],
    '痒い',
    [
        'ずきずき痛む',
        'しびれる'
    ],
    '蚊',
    '窓',
    '総身',
    'つばを飲込む',
    '借金',
    '影響',
    [
        '相変わらず',
        '依然として',
        '今も変わらず'
    ],
    '寄生虫',
    '足首',
    'くじく ',
    [
        '間もなく',
        'たった今',
        'すぐ'
    ],
    [
        '過ごす',
        '暮らす',
        '交わる'
    ],
    '症状',
    [
        'はなはだしい',
        '激げしい',
        '厳びしい'
    ],
    '整形外科',
    '腫れる',
    '生姜',
    [
        'さまざま',
        'いろいろ'
    ],
    '残念ながら',
    '遅刻',
    'めまぐるしい',
    '泥棒',
    [
        '落とす',
        '失う',
        '逃がす'
    ],
    [
        '倒れる',
        '転ぶ',
        '敗れる'
    ],
    'ぶつかり合あう',
    '相手側',
    [
        '店を閉しめる',
        '門を打つ'
    ],
    '床',
    '足の裏',
    '勧める',
    '地面',
    '注ぐ',
    [
        '純真',
        '素直'
    ],
    ' 振う',
    '汚い',
    '凍る',
    '沸騰する',
    '毎晩',
    [
        '今すぐ',
        '間もなく'
    ],
    '場所',
    '自分',
    '筆箱',
    '職場',
    '選択',
    '理由',
    '勤務',
    '環境',
    [
        '重要',
        '大切'
    ],
    '理由',
    '卒業',
    '就職',
    'ついに',
    '作品',
    [
        '集まり',
        '集会'
    ],
    '性格',
    '目がうす暗い',
    'のどがひりひりする',
    '首がごわつく',
    'のどが渇く',
    '胃袋の調子が悪い',
    '胸苦しい ',
    '塞(ふさ)がる',
    '腫れる',
    '痒い',
    [
        'ずきずき痛む',
        'しびれる'
    ],
    [
        'カ',
        '(蚊)'
    ],
    '窓',
    '総身',
    'つばを飲込む',
    '油っこい',
    '[年が寄る,老ける]',
    '鼻をかむ',
    '[ひざまずく, 膝をつく]',
    '[親しい,近しい]',
    '[信ずる,信じる]',
    '思い違える',
    [
        '癪にさわる',
        '気にさわる'
    ],
    '消化',
    '足',
    [
        '傷つく',
        'けがする',
        '痛める'
    ],
    [
        'ちゃんと',
        'きちんと'
    ],
    '歩く',
    '過労',
    [
        '過食',
        '食べ過ぎ'
    ],
    [
        '過飲',
        '飲過ぎ'
    ],
    [
        '過速',
        '超過速度'
    ],
    [
        '過度な消費',
        '過消費'
    ],
    '利益',
    'ゆっくり',
    '論文',
    [
        '気にさわる',
        '気を病む'
    ],
    [
        '別れる',
        '離れる'
    ],
    '美術',
    [
        '長く',
        '久しく'
    ],
    '男女老少',
    '豆腐',
    '守る',
    '大切',
    '若い',
    '若者',
    '不便',
    '感動的',
    '集中する',
    '相手',
    '優勝',
    '負ける',
    '失礼',
    '紅葉',
    '合格',
    '便利',
    '交通',
    '昇進',
    '講義',
    '職場',
    '逆に',
    '選ばれる',
    'いびきをかく',
    '汗',
    '叔父',
    [
        '監督',
        'マネージャー'
    ],
    '尊敬',
    '干渉',
    '情報',
    '発表',
    '特徴',
    '茶碗',
    '香 ',
    '大陸',
    '会議',
    [
        '関連',
        '連関'
    ],
    '財産',
    '経済',
    '政治',
    '化学',
    [
        '言語',
        '言葉'
    ],
    [
        '過ごす',
        '暮らす'
    ],
    '適応する',
    '秋',
    [
        '互いに',
        '共に',
        'お互いに'
    ],
    '解決する',
    '解く',
    '特徴',
    '特色',
    '面接',
    '落ちる',
    [
        '苦しい',
        '悩ましい',
        '辛い'
    ],
    [
        '静かに',
        'ひっそり',
        'ひそやかに'
    ],
    '放棄',
    '恋人',
    '会議',
    '[開く,開く, ,開ける]',
    [
        '祝祭',
        'お祭り',
        'フェスティバル'
    ],
    [
        '助言',
        '口添え',
        'アドバイス'
    ],
    [
        '常に',
        'いつも',
        'ふだん'
    ],
    '邪魔になる',
    [
        '間違いなく',
        'きっと'
    ],
    [
        '高校',
        '高等学校'
    ],
    [
        '同窓',
        'どうそう',
        '同学'
    ],
    '指で示すこと',
    [
        '交換する',
        '取り替える',
        '変更する'
    ],
    '指す, 指し示す',
    '材料',
    [
        '当然',
        '当たり前',
        'もっとも'
    ],
    [
        '腹を立てる',
        '怒る'
    ],
    [
        '直接に',
        '直直',
        '直に'
    ],
    [
        '確かだ',
        '判然としている',
        '知れた事'
    ],
    [
        '激怒する',
        'かっとする'
    ],
    '変動 ',
    [
        '下級財',
        '下級品'
    ],
    [
        '引き下げる',
        '値下げする'
    ],
    '先日',
    '希望',
    '見積もり', 
];
const koreanWords = [
    '미리',
    '부지런하다',
    '아끼다',
    '즐기다',
    '차례대로',
    '글자',
    '음감',
    '뛰어나다',
    '사교젹이다',
    '손재주가 좋다',
    '재주',
    '설득력이 있다',
    '이해가 빠르다',
    '책임감이 강하다',
    '소질이있다',
    '진로를 정하다',
    '적성에 맞다',
    '목이 따끔거리다',
    '정하다',
    '전공을 살리다',
    '예술적',
    '실용적',
    '사교적',
    '적극적',
    '긍정적',
    '모임',
    '목이마르다',
    '눈이 침침하다',
    '목이 뻣뻣하다',
    '속이 거복하다',
    '가슴이 답답하다',
    '막히다',
    '속이 쓰리다',
    '봇다',
    '가렵다',
    '저리다',
    '모기',
    '창문',
    '온몸',
    '침을 삼키다',
    '차금, 빚이',
    '영향',
    '여전히',
    '기생충',
    '발목',
    '삐다',
    '금방',
    '지내다',
    '증상',
    '심하다',
    '정형외과',
    '붓다',
    '생강',
    '여러',
    '아쉽게도',
    '지각',
    '머리가 어지럽다',
    '도둑',
    '놓치다',
    '넘어지다',
    '두딪치다',
    '상대편',
    '문을 닫다',
    '바닥',
    '발바닥',
    '추천하다',
    '땅자닥',
    '쏟다',
    '숭진하다',
    '다내다',
    '더럽다',
    '얼다',
    '끓이다',
    '밤마다',
    '금방',
    '장소',
    '자기',
    '필통',
    '직장',
    '선택',
    '이유',
    '근무',
    '환경',
    '중요하다',
    '이유',
    '졸업',
    '취직',
    '드디어',
    '작품',
    '모임',
    '성격',
    '눈이 침침하다',
    '목이 따끔거리다',
    '목이 뻣뻣하다',
    '목이 마르다',
    '속이 거복하다',
    '가슴이 답답하다',
    '막히다',
    '봇다',
    '가렵다',
    '저리다',
    '모기',
    '창문',
    '온몸',
    '침을 삼키다',
    '기름지다',
    '나이가 들다',
    '코를 풀다',
    '무릎을 꿇다',
    '친하다',
    '믿다',
    '오해하다',
    '속상하다',
    '소화',
    '다리',
    '다치다',
    '제대로',
    '걷다',
    '과로',
    '과식',
    '과음',
    '과속',
    '과소비',
    '이익',
    '편히',
    '논문',
    '속상하다',
    '헤어지다',
    '미술',
    '오래',
    '남녀노소',
    '두부',
    '지키다',
    '소중',
    '젊다',
    '젊은이',
    '불편',
    '감동적이다',
    '집중하다',
    '상대',
    '우승',
    '지다',
    '실례',
    '단풍이',
    '합격',
    '편리하다',
    '교통',
    '승진',
    '강의',
    '직장',
    '오히려',
    '뽑히다',
    '코를 골다',
    '땀',
    '삼촌',
    '감독',
    '존경',
    '간섭',
    '정보',
    '발표',
    '특징',
    '찻잔',
    '향',
    '대륙',
    '회의',
    '관련',
    '재산',
    '경제',
    '정치',
    '화학',
    '언어',
    '지내다',
    '적응하다',
    '가을',
    '서로',
    '해결하다',
    '풀다',
    '특징',
    '특색',
    '면접',
    '떨어지다',
    '괴롭다',
    '조용히',
    '포기',
    '연인',
    '회의',
    '열리다',
    '축제',
    '조언',
    '항상',
    '방해가 되다',
    '틀림없이',
    '고등학교',
    '동창',
    '손가락질',
    '바꾼다',
    '지적하다',
    '재료',
    '당연',
    '골을 내다',
    '직접',
    '뻔하다',
    '발끈하다',
    '변동',
    '열등재',
    '인하하다',
    '전날',
    '희망',
    '견적', 
];
const polishWords = [
    'przed czasem, wcześniej',
    'ciężko pracować',
    'oszczędzać',
    'bawić się, cieszyć się',
    'po kolei',
    'litery',
    'zmysł słuchu',
    'wybitny',
    'towarzyski, społeczny',
    'mieć zręczne ręce',
    'umiejętność',
    'przekonujący',
    'szybko rozumieć',
    'silne poczucie odpowiedzialności',
    ' Mieć talent, mieć zdolności',
    'wybierać ścieżkę kariery',
    'pasować do zdolności',
    'ból gardła',
    'Wybierać',
    'zapisz swojego majora',
    'artystyczny',
    'użyteczne',
    'towarzyski',
    'aktywny',
    'pozytywny,radosny',
    'spotkanie',
    'spragniony',
    'oczy są przyćmione',
    'sztywny kark',
    'czuć się zdenerwowanym',
    '(uczucie) ucisku w klatce piersiowej',
    'zablokowany',
    'czuć się zdenerwowanym',
    'zobaczyć',
    'swędzący',
    'zdrętwiały',
    'komar',
    'okno',
    'Całe ciało',
    'połknąć ślinę',
    'dług',
    'efekt',
    'Jak zwykle, nadal',
    'pasożyt',
    'kostka',
    'zwichnąć',
    'wkrótce',
    'zostać, żyć, przebywać',
    'objaw, symptom',
    '[ciężki,silny,poważny]',
    'oddz. Ortopedyczny',
    'puchnąć',
    'imbir',
    'kilka',
    'Niestety',
    'spóźnienie',
    'mieć zawroty głowy',
    'złodziej ',
    'odpuścić sobie, oswobodzić',
    'upaść',
    'wpadać na coś',
    'druga strona, partner',
    'zamknąć drzwi, zmknąć firmę',
    'podłoga',
    'dolna część stopy',
    'polecać',
    'grunt',
    'wylać, nalać',
    'być szlachetnym',
    'skończyć się',
    'brudny',
    'zamrażać',
    'gotować',
    'każda noc',
    'wkrótce',
    'Miejsce',
    'samego siebie',
    'piórnik',
    'odbytniczy',
    'wybierać',
    'Powód',
    'Praca',
    'środowisko',
    'To jest ważne',
    'Powód',
    'Absolwent',
    'Znajdź pracę',
    'wreszcie',
    'Praca',
    'klasa',
    'osobowość',
    'moje oczy są przyćmione',
    'ból gardła',
    'sztywna szyja, sztywny kark',
    'spragniony',
    'czuć się zdenerwowanym, mieć wzdęty brzuch',
    'ciężko na sercu',
    'zablokowany',
    'spuchnąć',
    'swędzenie',
    'zdrętwiały',
    'komar',
    'okno',
    'Całe ciało',
    'połknąć ślinę',
    'oleisty',
    'starzeć się',
    'wydmuchać nos',
    'klęczeć',
    'bliski',
    'wierzyć',
    'Źle zrozumieć',
    'smutny',
    'trawienie',
    'noga',
    'Zranić się',
    'odpowiednio, porządnie',
    'Chodzić',
    'napięcie',
    'przejedzenie',
    'Nadmierne picie',
    'Nadmierna prędkość',
    'nadmierne wydatki',
    'zysk',
    'z łatwością, powoli',
    'Praca dyplomowa, praca naukowa',
    'smutny',
    'zerwać, rozstać się, oddalić się',
    'Sztuka',
    'długo',
    'wszyscy(bez względu na wiek i płeć)',
    'tofu',
    'Ochraniać',
    'cenny',
    'młody',
    'młodzi ludzie',
    'Niedogodność',
    'być dotkniętym ',
    'koncentrować się ',
    'przeciwnik',
    'Mistrzostwo',
    'stracić',
    'ujma na honorze, niegrzeczność',
    'jesienne liście',
    'podawać',
    'wygodny',
    'ruch drogowy',
    'awans',
    'wykład',
    'miejsce pracy',
    'z drugiej strony',
    'być wybranym',
    'chrapać',
    'pot',
    'wujek',
    'dyrektor, reżyser',
    'szacunek, poszanowanie',
    'Ingerencja, interwencja',
    'Informacja',
    'Zapowiedź',
    'Charakterystyka',
    'filiżanka do herbaty',
    'kadzidło',
    'kontynent',
    'spotkanie',
    'relacja',
    'własność',
    'gospodarka',
    'Polityka',
    'chemia',
    'język',
    'zostać',
    'Jest przystosowany',
    'jesień',
    'wzajemnie',
    'rozwiązywać',
    'rozwiązywać',
    'Charakterystyka',
    'funkcja ',
    'rozmowa kwalifikacyjna, wywiad',
    'spaść, opuścić coś, padać',
    'ciężki, bolesny',
    'cicho, spokojnie, dyskretnie',
    'porzucenie, zaniechanie',
    'ukochany(a), sympatia',
    'spotkanie',
    'być otwartym',
    'festyn, święto',
    'rada, sugestia, podpowiedź',
    'zawsze, zwykle',
    'przeszkadzać, blokować',
    'na pewno, niewątpliwie',
    'liceum',
    'absolwent, (absolwent tej samej uczelni)',
    'pokazywanie palcem',
    'wymieniać',
    'wskazać',
    'materiał, składnik',
    'oczywiście',
    'Złościć się',
    'bezpośrednio',
    'oczywisty, znany',
    'wściec się',
    'zmiana, fluktuacja',
    'towar niskiej jakości',
    'ściągać, opuszczać, zmniejszać',
    'ostatnio, parę dni temu',
    'nadzieja',
    'oferta, wycena', 
];
const englishWords = [
    'already',
    'Be diligent',
    'economising, saving',
    'enjoy',
    'In turn, in order',
    'letters',
    'hearing sense',
    'outstanding',
    'sociable',
    'good dexterity',
    'skill',
    'persuasive',
    'quick to understand',
    'strong sense of responsibility',
    'have a knack',
    'choose a career path',
    'fit the aptitude',
    'sore throat',
    'Choose',
    'save your major',
    'artistic',
    'useful',
    'sociable',
    'active',
    'positive',
    'meeting',
    'thirsty',
    'eyes are dim',
    'stiff neck',
    'feel upset',
    '(feeling of) tightness in the chest',
    'blocked',
    'feel upset',
    'see',
    'itchy',
    'numb',
    'mosquito',
    'window',
    'whole body',
    'swallow saliva',
    'debt',
    'effect',
    'As usual, still,',
    'parasite',
    'ankle',
    'sprain',
    'soon',
    'stay, live',
    'symptom ',
    'Severe',
    'Orthopedics',
    'swell',
    'ginger',
    'several',
    'Unfortunately',
    'lateness, tardiness',
    'feel dizzy',
    'a thief ',
    'to let go',
    'fall down',
    'bump into',
    'the other side, the other party',
    'close the door, close business',
    'floor',
    'sole of foot',
    'recommend',
    'ground',
    'pour out, pour',
    'to be noble',
    'run out',
    'dirty',
    'freeze',
    'boil',
    'every night',
    'soon',
    'Place',
    'self',
    'pencil case',
    'rectal',
    'select',
    'Reason',
    'work',
    'environment',
    'It is important',
    'Reason',
    'Graduated',
    'find a job',
    'finally',
    'Work',
    'class',
    'personality',
    'my eyes are dim',
    'sore throat',
    'stiff neck',
    'thirsty',
    'feel upset, ',
    'have a heavy heart ',
    'blocked',
    'swell',
    'itchy',
    'numb',
    'mosquito',
    'window',
    'whole body',
    'swallow saliva',
    'oily',
    'getting old',
    'blow nose',
    'kneel',
    'close',
    'believe',
    'Misconceive, misunderstand',
    'upset',
    'digestion',
    'leg',
    'get hurt',
    'properly',
    'To Walk',
    'strain',
    'surfeit',
    'Over drinking',
    'Speeding',
    'overspending',
    'profit',
    'at ease, slowly',
    'thesis,  paper, article',
    'upset',
    'break up, to part ',
    'Art',
    'long',
    'everyone',
    'tofu',
    'Protect',
    'precious',
    'young',
    'young people',
    'Inconvenience',
    'to be touched ',
    'Concentrate on',
    'opponent',
    'Championship',
    'lose',
    'discourtesy, impoliteness',
    'autumn leaves',
    'pass',
    'convenient',
    'traffic',
    'promotion',
    'lecture',
    "one's post, workplace",
    'conversely, on the contrary',
    'be elected',
    'snore',
    'sweat',
    'uncle',
    'director, manager',
    'respect',
    'Interference',
    'information',
    'Announcement',
    'Characteristic',
    'teacup',
    'incense',
    'continent',
    'meeting',
    'relation',
    'property',
    'economy',
    'politics',
    'chemistry',
    'language',
    'stay',
    'It is adapted',
    'autumn',
    'each other',
    'solve',
    'solve',
    'Characteristic',
    'feature ',
    'interview (e.g. for a job)',
    'fall down, fall, drop ',
    'hard, difficult',
    'surreptitiously, quietly',
    'abandonment, resignation',
    'lover, boyfriend, girlfriend',
    'meeting, conference',
    'be open',
    'festival, feasts',
    'advice, counsel, suggestion, tip, hint',
    'usually, always',
    'to become a hindrance, obstacle',
    'surely, for sure',
    'high school',
    'fellow alumnus',
    'finger pointing ',
    'exchange',
    'Point out',
    'material, ingredient',
    'Of course',
    'Get angry',
    'directly',
    'obvious',
    'get furious',
    'change, fluctuation',
    'inferior goods',
    'to pull down, to lower, to reduce',
    'the other day, a few days ago',
    'hope',
    'offer, estimation', 
];
exports.default = japaneseWords;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}]},["ec9eu","gTAhr"], "gTAhr", "parcelRequire99e3")

//# sourceMappingURL=index.5512b7d9.js.map
