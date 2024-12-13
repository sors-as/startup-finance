import * as ee from "react";
import Ae, { forwardRef as no, useMemo as ro, useState as W, useRef as we, useImperativeHandle as wr, useEffect as q, createContext as oo, useContext as so, useCallback as ao, useLayoutEffect as io } from "react";
function Sr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qt = { exports: {} }, Lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn;
function lo() {
  if (Mn) return Lt;
  Mn = 1;
  var e = Ae, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(i, a, u) {
    var p, d = {}, h = null, m = null;
    u !== void 0 && (h = "" + u), a.key !== void 0 && (h = "" + a.key), a.ref !== void 0 && (m = a.ref);
    for (p in a) r.call(a, p) && !o.hasOwnProperty(p) && (d[p] = a[p]);
    if (i && i.defaultProps) for (p in a = i.defaultProps, a) d[p] === void 0 && (d[p] = a[p]);
    return { $$typeof: t, type: i, key: h, ref: m, props: d, _owner: s.current };
  }
  return Lt.Fragment = n, Lt.jsx = l, Lt.jsxs = l, Lt;
}
var Mt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function co() {
  return Fn || (Fn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ae, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function g(f) {
      if (f === null || typeof f != "object")
        return null;
      var b = v && f[v] || f[y];
      return typeof b == "function" ? b : null;
    }
    var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(f) {
      {
        for (var b = arguments.length, N = new Array(b > 1 ? b - 1 : 0), P = 1; P < b; P++)
          N[P - 1] = arguments[P];
        w("error", f, N);
      }
    }
    function w(f, b, N) {
      {
        var P = j.ReactDebugCurrentFrame, U = P.getStackAddendum();
        U !== "" && (b += "%s", N = N.concat([U]));
        var X = N.map(function($) {
          return String($);
        });
        X.unshift("Warning: " + b), Function.prototype.apply.call(console[f], console, X);
      }
    }
    var S = !1, O = !1, x = !1, R = !1, _ = !1, M;
    M = Symbol.for("react.module.reference");
    function G(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === o || _ || f === s || f === u || f === p || R || f === m || S || O || x || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === d || f.$$typeof === l || f.$$typeof === i || f.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === M || f.getModuleId !== void 0));
    }
    function ne(f, b, N) {
      var P = f.displayName;
      if (P)
        return P;
      var U = b.displayName || b.name || "";
      return U !== "" ? N + "(" + U + ")" : N;
    }
    function F(f) {
      return f.displayName || "Context";
    }
    function z(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case i:
            var b = f;
            return F(b) + ".Consumer";
          case l:
            var N = f;
            return F(N._context) + ".Provider";
          case a:
            return ne(f, f.render, "ForwardRef");
          case d:
            var P = f.displayName || null;
            return P !== null ? P : z(f.type) || "Memo";
          case h: {
            var U = f, X = U._payload, $ = U._init;
            try {
              return z($(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, Z = 0, te, K, J, pe, ge, ie, ze;
    function mt() {
    }
    mt.__reactDisabledLog = !0;
    function wt() {
      {
        if (Z === 0) {
          te = console.log, K = console.info, J = console.warn, pe = console.error, ge = console.group, ie = console.groupCollapsed, ze = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: mt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        Z++;
      }
    }
    function Ze() {
      {
        if (Z--, Z === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, f, {
              value: te
            }),
            info: I({}, f, {
              value: K
            }),
            warn: I({}, f, {
              value: J
            }),
            error: I({}, f, {
              value: pe
            }),
            group: I({}, f, {
              value: ge
            }),
            groupCollapsed: I({}, f, {
              value: ie
            }),
            groupEnd: I({}, f, {
              value: ze
            })
          });
        }
        Z < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = j.ReactCurrentDispatcher, _e;
    function re(f, b, N) {
      {
        if (_e === void 0)
          try {
            throw Error();
          } catch (U) {
            var P = U.stack.trim().match(/\n( *(at )?)/);
            _e = P && P[1] || "";
          }
        return `
` + _e + f;
      }
    }
    var Pe = !1, be;
    {
      var ae = typeof WeakMap == "function" ? WeakMap : Map;
      be = new ae();
    }
    function De(f, b) {
      if (!f || Pe)
        return "";
      {
        var N = be.get(f);
        if (N !== void 0)
          return N;
      }
      var P;
      Pe = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = le.current, le.current = null, wt();
      try {
        if (b) {
          var $ = function() {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (Fe) {
              P = Fe;
            }
            Reflect.construct(f, [], $);
          } else {
            try {
              $.call();
            } catch (Fe) {
              P = Fe;
            }
            f.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            P = Fe;
          }
          f();
        }
      } catch (Fe) {
        if (Fe && P && typeof Fe.stack == "string") {
          for (var V = Fe.stack.split(`
`), L = P.stack.split(`
`), Y = V.length - 1, fe = L.length - 1; Y >= 1 && fe >= 0 && V[Y] !== L[fe]; )
            fe--;
          for (; Y >= 1 && fe >= 0; Y--, fe--)
            if (V[Y] !== L[fe]) {
              if (Y !== 1 || fe !== 1)
                do
                  if (Y--, fe--, fe < 0 || V[Y] !== L[fe]) {
                    var Re = `
` + V[Y].replace(" at new ", " at ");
                    return f.displayName && Re.includes("<anonymous>") && (Re = Re.replace("<anonymous>", f.displayName)), typeof f == "function" && be.set(f, Re), Re;
                  }
                while (Y >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        Pe = !1, le.current = X, Ze(), Error.prepareStackTrace = U;
      }
      var Et = f ? f.displayName || f.name : "", nt = Et ? re(Et) : "";
      return typeof f == "function" && be.set(f, nt), nt;
    }
    function Ve(f, b, N) {
      return De(f, !1);
    }
    function ht(f) {
      var b = f.prototype;
      return !!(b && b.isReactComponent);
    }
    function xe(f, b, N) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return De(f, ht(f));
      if (typeof f == "string")
        return re(f);
      switch (f) {
        case u:
          return re("Suspense");
        case p:
          return re("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case a:
            return Ve(f.render);
          case d:
            return xe(f.type, b, N);
          case h: {
            var P = f, U = P._payload, X = P._init;
            try {
              return xe(X(U), b, N);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, Ie = {}, Le = j.ReactDebugCurrentFrame;
    function H(f) {
      if (f) {
        var b = f._owner, N = xe(f.type, f._source, b ? b.type : null);
        Le.setExtraStackFrame(N);
      } else
        Le.setExtraStackFrame(null);
    }
    function at(f, b, N, P, U) {
      {
        var X = Function.call.bind($e);
        for (var $ in f)
          if (X(f, $)) {
            var V = void 0;
            try {
              if (typeof f[$] != "function") {
                var L = Error((P || "React class") + ": " + N + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              V = f[$](b, $, P, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              V = Y;
            }
            V && !(V instanceof Error) && (H(U), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", N, $, typeof V), H(null)), V instanceof Error && !(V.message in Ie) && (Ie[V.message] = !0, H(U), E("Failed %s type: %s", N, V.message), H(null));
          }
      }
    }
    var vt = Array.isArray;
    function Ke(f) {
      return vt(f);
    }
    function yt(f) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, N = b && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return N;
      }
    }
    function St(f) {
      try {
        return Se(f), !1;
      } catch {
        return !0;
      }
    }
    function Se(f) {
      return "" + f;
    }
    function Me(f) {
      if (St(f))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yt(f)), Se(f);
    }
    var Be = j.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, et, it, qe;
    qe = {};
    function xt(f) {
      if ($e.call(f, "ref")) {
        var b = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Ne(f) {
      if ($e.call(f, "key")) {
        var b = Object.getOwnPropertyDescriptor(f, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function ce(f, b) {
      if (typeof f.ref == "string" && Be.current && b && Be.current.stateNode !== b) {
        var N = z(Be.current.type);
        qe[N] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Be.current.type), f.ref), qe[N] = !0);
      }
    }
    function oe(f, b) {
      {
        var N = function() {
          et || (et = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        N.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function me(f, b) {
      {
        var N = function() {
          it || (it = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        N.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var ue = function(f, b, N, P, U, X, $) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: b,
        ref: N,
        props: $,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return V._store = {}, Object.defineProperty(V._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(V, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(V, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function he(f, b, N, P, U) {
      {
        var X, $ = {}, V = null, L = null;
        N !== void 0 && (Me(N), V = "" + N), Ne(b) && (Me(b.key), V = "" + b.key), xt(b) && (L = b.ref, ce(b, U));
        for (X in b)
          $e.call(b, X) && !Qe.hasOwnProperty(X) && ($[X] = b[X]);
        if (f && f.defaultProps) {
          var Y = f.defaultProps;
          for (X in Y)
            $[X] === void 0 && ($[X] = Y[X]);
        }
        if (V || L) {
          var fe = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          V && oe($, fe), L && me($, fe);
        }
        return ue(f, V, L, U, P, Be.current, $);
      }
    }
    var de = j.ReactCurrentOwner, ve = j.ReactDebugCurrentFrame;
    function Ee(f) {
      if (f) {
        var b = f._owner, N = xe(f.type, f._source, b ? b.type : null);
        ve.setExtraStackFrame(N);
      } else
        ve.setExtraStackFrame(null);
    }
    var tt;
    tt = !1;
    function Ge(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function se() {
      {
        if (de.current) {
          var f = z(de.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Te(f) {
      return "";
    }
    var k = {};
    function B(f) {
      {
        var b = se();
        if (!b) {
          var N = typeof f == "string" ? f : f.displayName || f.name;
          N && (b = `

Check the top-level render call using <` + N + ">.");
        }
        return b;
      }
    }
    function ke(f, b) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var N = B(b);
        if (k[N])
          return;
        k[N] = !0;
        var P = "";
        f && f._owner && f._owner !== de.current && (P = " It was passed a child from " + z(f._owner.type) + "."), Ee(f), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, P), Ee(null);
      }
    }
    function lt(f, b) {
      {
        if (typeof f != "object")
          return;
        if (Ke(f))
          for (var N = 0; N < f.length; N++) {
            var P = f[N];
            Ge(P) && ke(P, b);
          }
        else if (Ge(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var U = g(f);
          if (typeof U == "function" && U !== f.entries)
            for (var X = U.call(f), $; !($ = X.next()).done; )
              Ge($.value) && ke($.value, b);
        }
      }
    }
    function T(f) {
      {
        var b = f.type;
        if (b == null || typeof b == "string")
          return;
        var N;
        if (typeof b == "function")
          N = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === d))
          N = b.propTypes;
        else
          return;
        if (N) {
          var P = z(b);
          at(N, f.props, "prop", P, f);
        } else if (b.PropTypes !== void 0 && !tt) {
          tt = !0;
          var U = z(b);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function A(f) {
      {
        for (var b = Object.keys(f.props), N = 0; N < b.length; N++) {
          var P = b[N];
          if (P !== "children" && P !== "key") {
            Ee(f), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), Ee(null);
            break;
          }
        }
        f.ref !== null && (Ee(f), E("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    var D = {};
    function ye(f, b, N, P, U, X) {
      {
        var $ = G(f);
        if (!$) {
          var V = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Te();
          L ? V += L : V += se();
          var Y;
          f === null ? Y = "null" : Ke(f) ? Y = "array" : f !== void 0 && f.$$typeof === t ? (Y = "<" + (z(f.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof f, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, V);
        }
        var fe = he(f, b, N, U, X);
        if (fe == null)
          return fe;
        if ($) {
          var Re = b.children;
          if (Re !== void 0)
            if (P)
              if (Ke(Re)) {
                for (var Et = 0; Et < Re.length; Et++)
                  lt(Re[Et], f);
                Object.freeze && Object.freeze(Re);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lt(Re, f);
        }
        if ($e.call(b, "key")) {
          var nt = z(f), Fe = Object.keys(b).filter(function(to) {
            return to !== "key";
          }), un = Fe.length > 0 ? "{key: someKey, " + Fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!D[nt + un]) {
            var eo = Fe.length > 0 ? "{" + Fe.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, un, nt, eo, nt), D[nt + un] = !0;
          }
        }
        return f === r ? A(fe) : T(fe), fe;
      }
    }
    function je(f, b, N) {
      return ye(f, b, N, !0);
    }
    function He(f, b, N) {
      return ye(f, b, N, !1);
    }
    var Ye = He, Oe = je;
    Mt.Fragment = r, Mt.jsx = Ye, Mt.jsxs = Oe;
  }()), Mt;
}
var Vn;
function uo() {
  return Vn || (Vn = 1, process.env.NODE_ENV === "production" ? qt.exports = lo() : qt.exports = co()), qt.exports;
}
var c = uo();
const fo = { BASE_URL: "/startup-finance/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, $n = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (p, d) => {
    const h = typeof p == "function" ? p(t) : p;
    if (!Object.is(h, t)) {
      const m = t;
      t = d ?? (typeof h != "object" || h === null) ? h : Object.assign({}, t, h), n.forEach((v) => v(t, m));
    }
  }, s = () => t, a = { setState: r, getState: s, getInitialState: () => u, subscribe: (p) => (n.add(p), () => n.delete(p)), destroy: () => {
    (fo ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, u = t = e(r, s, a);
  return a;
}, po = (e) => e ? $n(e) : $n;
var Gt = { exports: {} }, dn = {}, Ht = { exports: {} }, fn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function mo() {
  if (Bn) return fn;
  Bn = 1;
  var e = Ae;
  function t(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, s = e.useEffect, o = e.useLayoutEffect, l = e.useDebugValue;
  function i(d, h) {
    var m = h(), v = r({ inst: { value: m, getSnapshot: h } }), y = v[0].inst, g = v[1];
    return o(function() {
      y.value = m, y.getSnapshot = h, a(y) && g({ inst: y });
    }, [d, m, h]), s(function() {
      return a(y) && g({ inst: y }), d(function() {
        a(y) && g({ inst: y });
      });
    }, [d]), l(m), m;
  }
  function a(d) {
    var h = d.getSnapshot;
    d = d.value;
    try {
      var m = h();
      return !n(d, m);
    } catch {
      return !0;
    }
  }
  function u(d, h) {
    return h();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : i;
  return fn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, fn;
}
var pn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function ho() {
  return Wn || (Wn = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Ae, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(w) {
      {
        for (var S = arguments.length, O = new Array(S > 1 ? S - 1 : 0), x = 1; x < S; x++)
          O[x - 1] = arguments[x];
        r("error", w, O);
      }
    }
    function r(w, S, O) {
      {
        var x = t.ReactDebugCurrentFrame, R = x.getStackAddendum();
        R !== "" && (S += "%s", O = O.concat([R]));
        var _ = O.map(function(M) {
          return String(M);
        });
        _.unshift("Warning: " + S), Function.prototype.apply.call(console[w], console, _);
      }
    }
    function s(w, S) {
      return w === S && (w !== 0 || 1 / w === 1 / S) || w !== w && S !== S;
    }
    var o = typeof Object.is == "function" ? Object.is : s, l = e.useState, i = e.useEffect, a = e.useLayoutEffect, u = e.useDebugValue, p = !1, d = !1;
    function h(w, S, O) {
      p || e.startTransition !== void 0 && (p = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var x = S();
      if (!d) {
        var R = S();
        o(x, R) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var _ = l({
        inst: {
          value: x,
          getSnapshot: S
        }
      }), M = _[0].inst, G = _[1];
      return a(function() {
        M.value = x, M.getSnapshot = S, m(M) && G({
          inst: M
        });
      }, [w, x, S]), i(function() {
        m(M) && G({
          inst: M
        });
        var ne = function() {
          m(M) && G({
            inst: M
          });
        };
        return w(ne);
      }, [w]), u(x), x;
    }
    function m(w) {
      var S = w.getSnapshot, O = w.value;
      try {
        var x = S();
        return !o(O, x);
      } catch {
        return !0;
      }
    }
    function v(w, S, O) {
      return S();
    }
    var y = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !y, j = g ? v : h, E = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : j;
    pn.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), pn;
}
var Un;
function Er() {
  return Un || (Un = 1, process.env.NODE_ENV === "production" ? Ht.exports = mo() : Ht.exports = ho()), Ht.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function vo() {
  if (zn) return dn;
  zn = 1;
  var e = Ae, t = Er();
  function n(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : n, s = t.useSyncExternalStore, o = e.useRef, l = e.useEffect, i = e.useMemo, a = e.useDebugValue;
  return dn.useSyncExternalStoreWithSelector = function(u, p, d, h, m) {
    var v = o(null);
    if (v.current === null) {
      var y = { hasValue: !1, value: null };
      v.current = y;
    } else y = v.current;
    v = i(function() {
      function j(x) {
        if (!E) {
          if (E = !0, w = x, x = h(x), m !== void 0 && y.hasValue) {
            var R = y.value;
            if (m(R, x)) return S = R;
          }
          return S = x;
        }
        if (R = S, r(w, x)) return R;
        var _ = h(x);
        return m !== void 0 && m(R, _) ? R : (w = x, S = _);
      }
      var E = !1, w, S, O = d === void 0 ? null : d;
      return [function() {
        return j(p());
      }, O === null ? void 0 : function() {
        return j(O());
      }];
    }, [p, d, h, m]);
    var g = s(u, v[0], v[1]);
    return l(function() {
      y.hasValue = !0, y.value = g;
    }, [g]), a(g), g;
  }, dn;
}
var mn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function yo() {
  return Kn || (Kn = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Ae, t = Er();
    function n(p, d) {
      return p === d && (p !== 0 || 1 / p === 1 / d) || p !== p && d !== d;
    }
    var r = typeof Object.is == "function" ? Object.is : n, s = t.useSyncExternalStore, o = e.useRef, l = e.useEffect, i = e.useMemo, a = e.useDebugValue;
    function u(p, d, h, m, v) {
      var y = o(null), g;
      y.current === null ? (g = {
        hasValue: !1,
        value: null
      }, y.current = g) : g = y.current;
      var j = i(function() {
        var O = !1, x, R, _ = function(F) {
          if (!O) {
            O = !0, x = F;
            var z = m(F);
            if (v !== void 0 && g.hasValue) {
              var I = g.value;
              if (v(I, z))
                return R = I, I;
            }
            return R = z, z;
          }
          var Z = x, te = R;
          if (r(Z, F))
            return te;
          var K = m(F);
          return v !== void 0 && v(te, K) ? te : (x = F, R = K, K);
        }, M = h === void 0 ? null : h, G = function() {
          return _(d());
        }, ne = M === null ? void 0 : function() {
          return _(M());
        };
        return [G, ne];
      }, [d, h, m, v]), E = j[0], w = j[1], S = s(p, E, w);
      return l(function() {
        g.hasValue = !0, g.value = S;
      }, [S]), a(S), S;
    }
    mn.useSyncExternalStoreWithSelector = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), mn;
}
var qn;
function xo() {
  return qn || (qn = 1, process.env.NODE_ENV === "production" ? Gt.exports = vo() : Gt.exports = yo()), Gt.exports;
}
var go = xo();
const bo = /* @__PURE__ */ Sr(go), jr = { BASE_URL: "/startup-finance/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, { useDebugValue: wo } = Ae, { useSyncExternalStoreWithSelector: So } = bo;
let Gn = !1;
const Eo = (e) => e;
function Rr(e, t = Eo, n) {
  (jr ? "production" : void 0) !== "production" && n && !Gn && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Gn = !0);
  const r = So(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return wo(r), r;
}
const Hn = (e) => {
  (jr ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? po(e) : e, n = (r, s) => Rr(t, r, s);
  return Object.assign(n, t), n;
}, jo = (e) => e ? Hn(e) : Hn;
var C = /* @__PURE__ */ ((e) => (e.Common = "common", e.Safe = "safe", e.Series = "series", e.Total = "total", e.RefreshedOptions = "refreshedOptions", e))(C || {}), jt = /* @__PURE__ */ ((e) => (e.Shareholder = "shareholder", e.UnusedOptions = "unusedOptions", e))(jt || {});
const Ro = [
  "Sequoia Capital",
  "Andreessen Horowitz",
  "Accel",
  "Benchmark",
  "Founders Fund",
  "Greylock Partners",
  "Kleiner Perkins",
  "Lightspeed Venture Partners",
  "GV (formerly Google Ventures)",
  "Bessemer Venture Partners",
  "First Round Capital",
  "Union Square Ventures",
  "Index Ventures",
  "General Catalyst",
  "1984",
  "500 Startups",
  "Battery Ventures",
  "Redpoint Ventures",
  "Balderton Capital",
  "Insight Partners",
  "Floodgate Fund",
  "CRV (Charles River Ventures)",
  "Spark Capital",
  "Social Capital",
  "Ribbit Capital"
], Co = [
  "Insight Partners",
  "IVP (Institutional Venture Partners)",
  "Menlo Ventures",
  "Canaan Partners",
  "NEA (New Enterprise Associates)",
  "Battery Ventures",
  "Bessemer Venture Partners",
  "Sapphire Ventures",
  "Sequoia Capital",
  "Matrix Partners",
  "GGV Capital",
  "Khosla Ventures",
  "Venrock",
  "True Ventures",
  "Scale Venture Partners",
  "Craft Ventures",
  "Northzone",
  "Oak HC/FT",
  "Balderton Capital",
  "Accel",
  "Index Ventures",
  "Union Square Ventures",
  "Greycroft",
  "Redpoint Ventures",
  "DFJ Growth"
], Oo = [
  "Brian Chesky",
  "Ben Silbermann",
  "Drew Houston",
  "Daniel Ek",
  "Arash Ferdowsi",
  "Michael Seibel",
  "Kevin Systrom",
  "Mike Krieger",
  "Melanie Perkins",
  "Evan Spiegel",
  "Bobby Murphy",
  "Travis Kalanick",
  "Garrett Camp",
  "Sean Rad",
  "Nathan Blecharczyk",
  "Joe Gebbia",
  "Ruslan Fazlyev",
  "Patrick Collison",
  "John Collison"
], Cr = () => Co.sort(() => Math.random() - 0.5), Or = () => Ro.sort(() => Math.random() - 0.5), _r = () => Oo.sort(() => Math.random() - 0.5), Yn = () => ({
  randomFounders: _r(),
  randomSeed: Or(),
  randomSeries: Cr()
});
let _o = 0;
const gt = () => (_o++).toString(), Jn = ({
  randomFounders: e,
  randomSeed: t,
  randomSeries: n
}) => ({
  rowData: [
    {
      id: gt(),
      type: C.Common,
      name: `${e[0]}`,
      shares: 45e5
    },
    {
      id: gt(),
      type: C.Common,
      name: `${e[1]}`,
      shares: 45e5
    },
    {
      id: "IssuedOptions",
      type: C.Common,
      name: "Issued Options",
      shares: 25e4
    },
    // YC 7% SAFE
    {
      id: gt(),
      type: C.Safe,
      name: "YC 7%",
      investment: 125e3,
      discount: 0,
      cap: 125e3 / 0.07,
      conversionType: "post"
    },
    // Uncapped YC MFN SAFE (Cap to best cap of all safes)
    {
      id: gt(),
      type: C.Safe,
      name: "YC MFN",
      investment: 375e3,
      discount: 0,
      cap: 1e7,
      conversionType: "mfn"
    },
    {
      id: gt(),
      type: C.Safe,
      name: "1984 Ventures",
      investment: 75e4,
      discount: 0,
      cap: 1e7,
      conversionType: "post"
    },
    {
      id: gt(),
      type: C.Safe,
      name: `${t[0]}`,
      investment: 475e3,
      discount: 0,
      cap: 1e7,
      conversionType: "post"
    },
    {
      id: gt(),
      type: C.Safe,
      name: `${t[1]}`,
      investment: 5e5,
      discount: 0,
      cap: 13e6,
      conversionType: "post"
    },
    {
      id: gt(),
      type: C.Series,
      name: `${n[0]}`,
      investment: 3e6
    },
    {
      id: gt(),
      type: C.Series,
      name: `${n[1]}`,
      investment: 1e6
    }
  ],
  preMoney: 36e6,
  targetOptionsPool: 10,
  unusedOptions: 75e4,
  pricedRounds: 0
});
function No(e) {
  return (e.map((t) => t.id.match(/^[0-9]+$/) ? parseInt(t.id) : 0).reduce((t, n) => Math.max(t, n), 0) + 1).toString();
}
function To(e) {
  const t = e.filter((r) => r.type === C.Safe).map((r) => r.name), n = Or().filter((r) => !t.includes(r));
  return n.length > 0 ? n[Math.floor(Math.random() * n.length)] : "Another Seed Investor";
}
function ko(e) {
  const t = e.filter((r) => r.type === C.Series).map((r) => r.name), n = Cr().filter((r) => !t.includes(r));
  return n.length > 0 ? n[Math.floor(Math.random() * n.length)] : "Another Series Investor";
}
function Ao(e) {
  const t = e.filter((r) => r.type === C.Common).map((r) => r.name), n = _r().filter(
    (r) => !t.includes(r)
  );
  return n.length > 0 ? n[Math.floor(Math.random() * n.length)] : "Another Founder";
}
const Po = (e) => jo((t, n) => ({
  ...e,
  onAddRow: (r) => {
    const s = No(n().rowData);
    r === C.Safe ? t((o) => ({
      ...o,
      rowData: [
        ...o.rowData,
        {
          id: s,
          name: To(o.rowData),
          investment: 0,
          cap: 0,
          discount: 0,
          conversionType: "post",
          type: C.Safe
        }
      ]
    })) : r === C.Common ? t((o) => ({
      ...o,
      rowData: [
        ...o.rowData,
        {
          id: s,
          name: Ao(o.rowData),
          shares: 0,
          type: C.Common,
          commonType: jt.Shareholder
        }
      ]
    })) : r === C.Series && t((o) => ({
      ...o,
      rowData: [
        ...o.rowData,
        {
          id: s,
          type: C.Series,
          name: ko(o.rowData),
          investment: 0
        }
      ]
    }));
  },
  onDeleteRow: (r) => {
    t((s) => ({
      ...s,
      rowData: s.rowData.filter((o) => o.id !== r)
    }));
  },
  onUpdateRow: (r) => {
    t((s) => ({
      ...s,
      rowData: s.rowData.map((o) => o.id === r.id ? r : o)
    }));
  },
  onMoveRow: (r, s) => {
    const o = [...n().rowData], l = o.findIndex((a) => a.id === r), i = o.findIndex((a) => a.id === s);
    if (l !== -1 && i !== -1) {
      const [a] = o.splice(l, 1), u = i + (l < i ? 0 : 1);
      o.splice(u, 0, a), t((p) => ({
        ...p,
        rowData: o
      }));
    }
  },
  onValueChange: (r) => (s, o, l) => {
    if (r === "number") {
      if (o) {
        if (((l == null ? void 0 : l.float) ?? 0) < 0)
          return;
        const a = s == null ? void 0 : s.replace(/[^-0-9.]/g, "").replace(/(?!^)-/g, ""), u = parseFloat(a ?? "0");
        t((p) => ({
          ...p,
          [o]: u
        }));
      }
    } else if (r === "percent" && o) {
      const i = (l == null ? void 0 : l.float) ?? 0;
      if (i > 99 || i < 0)
        return;
      const a = s == null ? void 0 : s.replace(/[^0-9.]/g, ""), u = parseFloat(a ?? "0");
      t((p) => ({
        ...p,
        [o]: u
      }));
    }
  },
  togglepriceRounds: () => {
    t((r) => ({
      ...r,
      pricedRounds: r.pricedRounds === 0 ? 1 : 0
    }));
  }
}));
var Xt = { exports: {} };
Xt.exports;
var Xn;
function Do() {
  return Xn || (Xn = 1, function(e) {
    var t = function() {
      var n = String.fromCharCode, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", o = {};
      function l(a, u) {
        if (!o[a]) {
          o[a] = {};
          for (var p = 0; p < a.length; p++)
            o[a][a.charAt(p)] = p;
        }
        return o[a][u];
      }
      var i = {
        compressToBase64: function(a) {
          if (a == null) return "";
          var u = i._compress(a, 6, function(p) {
            return r.charAt(p);
          });
          switch (u.length % 4) {
            // To produce valid Base64
            default:
            // When could this happen ?
            case 0:
              return u;
            case 1:
              return u + "===";
            case 2:
              return u + "==";
            case 3:
              return u + "=";
          }
        },
        decompressFromBase64: function(a) {
          return a == null ? "" : a == "" ? null : i._decompress(a.length, 32, function(u) {
            return l(r, a.charAt(u));
          });
        },
        compressToUTF16: function(a) {
          return a == null ? "" : i._compress(a, 15, function(u) {
            return n(u + 32);
          }) + " ";
        },
        decompressFromUTF16: function(a) {
          return a == null ? "" : a == "" ? null : i._decompress(a.length, 16384, function(u) {
            return a.charCodeAt(u) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(a) {
          for (var u = i.compress(a), p = new Uint8Array(u.length * 2), d = 0, h = u.length; d < h; d++) {
            var m = u.charCodeAt(d);
            p[d * 2] = m >>> 8, p[d * 2 + 1] = m % 256;
          }
          return p;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(a) {
          if (a == null)
            return i.decompress(a);
          for (var u = new Array(a.length / 2), p = 0, d = u.length; p < d; p++)
            u[p] = a[p * 2] * 256 + a[p * 2 + 1];
          var h = [];
          return u.forEach(function(m) {
            h.push(n(m));
          }), i.decompress(h.join(""));
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(a) {
          return a == null ? "" : i._compress(a, 6, function(u) {
            return s.charAt(u);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(a) {
          return a == null ? "" : a == "" ? null : (a = a.replace(/ /g, "+"), i._decompress(a.length, 32, function(u) {
            return l(s, a.charAt(u));
          }));
        },
        compress: function(a) {
          return i._compress(a, 16, function(u) {
            return n(u);
          });
        },
        _compress: function(a, u, p) {
          if (a == null) return "";
          var d, h, m = {}, v = {}, y = "", g = "", j = "", E = 2, w = 3, S = 2, O = [], x = 0, R = 0, _;
          for (_ = 0; _ < a.length; _ += 1)
            if (y = a.charAt(_), Object.prototype.hasOwnProperty.call(m, y) || (m[y] = w++, v[y] = !0), g = j + y, Object.prototype.hasOwnProperty.call(m, g))
              j = g;
            else {
              if (Object.prototype.hasOwnProperty.call(v, j)) {
                if (j.charCodeAt(0) < 256) {
                  for (d = 0; d < S; d++)
                    x = x << 1, R == u - 1 ? (R = 0, O.push(p(x)), x = 0) : R++;
                  for (h = j.charCodeAt(0), d = 0; d < 8; d++)
                    x = x << 1 | h & 1, R == u - 1 ? (R = 0, O.push(p(x)), x = 0) : R++, h = h >> 1;
                } else {
                  for (h = 1, d = 0; d < S; d++)
                    x = x << 1 | h, R == u - 1 ? (R = 0, O.push(p(x)), x = 0) : R++, h = 0;
                  for (h = j.charCodeAt(0), d = 0; d < 16; d++)
                    x = x << 1 | h & 1, R == u - 1 ? (R = 0, O.push(p(x)), x = 0) : R++, h = h >> 1;
                }
                E--, E == 0 && (E = Math.pow(2, S), S++), delete v[j];
              } else
                for (h = m[j], d = 0; d < S; d++)
                  x = x << 1 | h & 1, R == u - 1 ? (R = 0, O.push(p(x)), x = 0) : R++, h = h >> 1;
              E--, E == 0 && (E = Math.pow(2, S), S++), m[g] = w++, j = String(y);
            }
          if (j !== "") {
            if (Object.prototype.hasOwnProperty.call(v, j)) {
              if (j.charCodeAt(0) < 256) {
                for (d = 0; d < S; d++)
                  x = x << 1, R == u - 1 ? (R = 0, O.push(p(x)), x = 0) : R++;
                for (h = j.charCodeAt(0), d = 0; d < 8; d++)
                  x = x << 1 | h & 1, R == u - 1 ? (R = 0, O.push(p(x)), x = 0) : R++, h = h >> 1;
              } else {
                for (h = 1, d = 0; d < S; d++)
                  x = x << 1 | h, R == u - 1 ? (R = 0, O.push(p(x)), x = 0) : R++, h = 0;
                for (h = j.charCodeAt(0), d = 0; d < 16; d++)
                  x = x << 1 | h & 1, R == u - 1 ? (R = 0, O.push(p(x)), x = 0) : R++, h = h >> 1;
              }
              E--, E == 0 && (E = Math.pow(2, S), S++), delete v[j];
            } else
              for (h = m[j], d = 0; d < S; d++)
                x = x << 1 | h & 1, R == u - 1 ? (R = 0, O.push(p(x)), x = 0) : R++, h = h >> 1;
            E--, E == 0 && (E = Math.pow(2, S), S++);
          }
          for (h = 2, d = 0; d < S; d++)
            x = x << 1 | h & 1, R == u - 1 ? (R = 0, O.push(p(x)), x = 0) : R++, h = h >> 1;
          for (; ; )
            if (x = x << 1, R == u - 1) {
              O.push(p(x));
              break;
            } else R++;
          return O.join("");
        },
        decompress: function(a) {
          return a == null ? "" : a == "" ? null : i._decompress(a.length, 32768, function(u) {
            return a.charCodeAt(u);
          });
        },
        _decompress: function(a, u, p) {
          var d = [], h = 4, m = 4, v = 3, y = "", g = [], j, E, w, S, O, x, R, _ = { val: p(0), position: u, index: 1 };
          for (j = 0; j < 3; j += 1)
            d[j] = j;
          for (w = 0, O = Math.pow(2, 2), x = 1; x != O; )
            S = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), w |= (S > 0 ? 1 : 0) * x, x <<= 1;
          switch (w) {
            case 0:
              for (w = 0, O = Math.pow(2, 8), x = 1; x != O; )
                S = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), w |= (S > 0 ? 1 : 0) * x, x <<= 1;
              R = n(w);
              break;
            case 1:
              for (w = 0, O = Math.pow(2, 16), x = 1; x != O; )
                S = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), w |= (S > 0 ? 1 : 0) * x, x <<= 1;
              R = n(w);
              break;
            case 2:
              return "";
          }
          for (d[3] = R, E = R, g.push(R); ; ) {
            if (_.index > a)
              return "";
            for (w = 0, O = Math.pow(2, v), x = 1; x != O; )
              S = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), w |= (S > 0 ? 1 : 0) * x, x <<= 1;
            switch (R = w) {
              case 0:
                for (w = 0, O = Math.pow(2, 8), x = 1; x != O; )
                  S = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), w |= (S > 0 ? 1 : 0) * x, x <<= 1;
                d[m++] = n(w), R = m - 1, h--;
                break;
              case 1:
                for (w = 0, O = Math.pow(2, 16), x = 1; x != O; )
                  S = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), w |= (S > 0 ? 1 : 0) * x, x <<= 1;
                d[m++] = n(w), R = m - 1, h--;
                break;
              case 2:
                return g.join("");
            }
            if (h == 0 && (h = Math.pow(2, v), v++), d[R])
              y = d[R];
            else if (R === m)
              y = E + E.charAt(0);
            else
              return null;
            g.push(y), d[m++] = E + y.charAt(0), h--, E = y, h == 0 && (h = Math.pow(2, v), v++);
          }
        }
      };
      return i;
    }();
    e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
      return t;
    });
  }(Xt)), Xt.exports;
}
var Nr = Do();
const Io = "AA", Lo = (e) => {
  const t = e.rowData.map((n) => {
    if (n.type === C.Safe) {
      let r = n.conversionType;
      return r === "ycmfn" ? r = "mfn" : r === "yc7p" && (r = "post"), {
        ...n,
        conversionType: r
      };
    }
    return n;
  });
  return {
    ...e,
    rowData: t
  };
}, Mo = (e) => e.replace(/\//g, "_").replace(/\+/g, ".").replace(/=/g, ""), Fo = (e) => e.replace(/_/g, "/").replace(/-/g, "+").replace(/\./g, "+"), Vo = (e) => {
  const t = new Uint8Array(atob(e.slice(0, 2)).split("").map((r) => r.charCodeAt(0)))[0], n = Fo(e.slice(2));
  return [t, n];
}, $t = (e) => {
  const t = Nr.compressToBase64(JSON.stringify(e));
  return Mo(`${Io}${t}`);
}, $o = (e) => {
  const [t, n] = Vo(e), r = Nr.decompressFromBase64(n), s = JSON.parse(r.toString());
  return Lo(s);
}, Bo = 10, Zt = "recent_v6", hn = {}, Wo = {
  getItem: (e) => hn[e] ?? null,
  setItem: (e, t) => {
    hn[e] = t;
  },
  removeItem: (e) => {
    delete hn[e];
  }
}, Uo = typeof window < "u" && window.localStorage !== void 0, Tr = Uo ? (window.localStorage.setItem("safariTest", "1"), window.localStorage.getItem("safariTest") === "1") : !1, Qt = Tr ? window.localStorage : Wo, on = () => {
  const e = Qt.getItem(Zt);
  let t = [];
  if (e !== null && e.length > 0)
    try {
      try {
        t = JSON.parse(e).sort((r, s) => s.updatedAt - r.updatedAt);
      } catch (n) {
        console.error("Error parsing states from local storage", n), Qt.removeItem(Zt);
      }
    } catch (n) {
      console.error("Error parsing states from local storage", n);
    }
  return t;
}, Zn = (e, t) => {
  const n = on().sort((s, o) => s.updatedAt - o.updatedAt), r = n.findIndex((s) => e === s.id);
  if (r !== -1)
    n[r] = {
      ...n[r],
      conversionState: t,
      updatedAt: Date.now()
    }, Qt.setItem(Zt, JSON.stringify(n));
  else {
    const s = {
      id: e,
      conversionState: t,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    n.push(s), n.length > Bo && n.shift(), Qt.setItem(Zt, JSON.stringify(n));
  }
}, zo = (e) => {
  const n = on().find((r) => r.id === e);
  return n == null ? void 0 : n.conversionState;
}, Ko = () => {
  const e = on();
  if (e.length > 0)
    return e.sort((n, r) => r.updatedAt - n.updatedAt)[0].conversionState;
};
var Q = function() {
  return Q = Object.assign || function(t) {
    for (var n, r = 1, s = arguments.length; r < s; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Q.apply(this, arguments);
};
function qo(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
  return n;
}
function We(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, s = t.length, o; r < s; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var dt = function(e) {
  return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}, Go = { k: 1e3, m: 1e6, b: 1e9 }, Ho = function(e, t) {
  t === void 0 && (t = ".");
  var n = new RegExp("(\\d+(".concat(dt(t), "\\d*)?)([kmb])$"), "i"), r = e.match(n);
  if (r) {
    var s = r[1], o = r[3], l = Go[o.toLowerCase()];
    return Number(s.replace(t, ".")) * l;
  }
}, Yo = function(e, t) {
  t === void 0 && (t = ",");
  var n = new RegExp(dt(t), "g");
  return e.replace(n, "");
}, Jo = function(e, t) {
  var n = dt(t.join("")), r = new RegExp("[^\\d".concat(n, "]"), "gi");
  return e.replace(r, "");
}, vn = function(e) {
  var t = e.value, n = e.groupSeparator, r = n === void 0 ? "," : n, s = e.decimalSeparator, o = s === void 0 ? "." : s, l = e.allowDecimals, i = l === void 0 ? !0 : l, a = e.decimalsLimit, u = a === void 0 ? 2 : a, p = e.allowNegativeValue, d = p === void 0 ? !0 : p, h = e.disableAbbreviations, m = h === void 0 ? !1 : h, v = e.prefix, y = v === void 0 ? "" : v, g = e.transformRawValue, j = g === void 0 ? function(ge) {
    return ge;
  } : g, E = j(t);
  if (E === "-")
    return E;
  var w = m ? [] : ["k", "m", "b"], S = new RegExp("((^|\\D)-\\d)|(-".concat(dt(y), ")")), O = S.test(E), x = RegExp("(\\d+)-?".concat(dt(y))).exec(t) || [], R = x[0], _ = x[1], M = y ? R ? E.replace(R, "").concat(_) : E.replace(y, "") : E, G = Yo(M, r), ne = Jo(G, We([
    r,
    o
  ], w, !0)), F = ne;
  if (!m) {
    if (w.some(function(ge) {
      return ge === ne.toLowerCase().replace(o, "");
    }))
      return "";
    var z = Ho(ne, o);
    z && (F = String(z));
  }
  var I = O && d ? "-" : "";
  if (o && F.includes(o)) {
    var Z = ne.split(o), te = Z[0], K = Z[1], J = u && K ? K.slice(0, u) : K, pe = i ? "".concat(o).concat(J) : "";
    return "".concat(I).concat(te).concat(pe);
  }
  return "".concat(I).concat(F);
}, Xo = function(e, t, n) {
  if (n !== void 0 && e.length > 1) {
    if (n === 0)
      return e.replace(t, "");
    if (e.includes(t)) {
      var r = e.split(t), s = r[0], o = r[1];
      if (o.length === n)
        return e;
      if (o.length > n)
        return "".concat(s).concat(t).concat(o.slice(0, n));
    }
    var l = e.length > n ? new RegExp("(\\d+)(\\d{".concat(n, "})")) : new RegExp("(\\d)(\\d+)"), i = e.match(l);
    if (i) {
      var s = i[1], o = i[2];
      return "".concat(s).concat(t).concat(o);
    }
  }
  return e;
}, kr = function(e, t) {
  var n = t.groupSeparator, r = n === void 0 ? "," : n, s = t.decimalSeparator, o = s === void 0 ? "." : s, l = new RegExp("\\d([^".concat(dt(r)).concat(dt(o), "0-9]+)")), i = e.match(l);
  return i ? i[1] : void 0;
}, Ft = function(e) {
  var t = e.value, n = e.decimalSeparator, r = e.intlConfig, s = e.decimalScale, o = e.prefix, l = o === void 0 ? "" : o, i = e.suffix, a = i === void 0 ? "" : i;
  if (t === "" || t === void 0)
    return "";
  if (t === "-")
    return "-";
  var u = new RegExp("^\\d?-".concat(l ? "".concat(dt(l), "?") : "", "\\d")).test(t), p = n !== "." ? Zo(t, n, u) : t;
  n && n !== "-" && p.startsWith(n) && (p = "0" + p);
  var d = {
    minimumFractionDigits: s || 0,
    maximumFractionDigits: 20
  }, h = r ? new Intl.NumberFormat(r.locale, r.currency ? Q(Q({}, d), { style: "currency", currency: r.currency }) : d) : new Intl.NumberFormat(void 0, d), m = h.formatToParts(Number(p)), v = Qo(m, e), y = kr(v, Q({}, e)), g = t.slice(-1) === n ? n : "", j = p.match(RegExp("\\d+\\.(\\d+)")) || [], E = j[1];
  return s === void 0 && E && n && (v.includes(n) ? v = v.replace(RegExp("(\\d+)(".concat(dt(n), ")(\\d+)"), "g"), "$1$2".concat(E)) : y && !a ? v = v.replace(y, "".concat(n).concat(E).concat(y)) : v = "".concat(v).concat(n).concat(E)), a && g ? "".concat(v).concat(g).concat(a) : y && g ? v.replace(y, "".concat(g).concat(y)) : y && a ? v.replace(y, "".concat(g).concat(a)) : [v, g, a].join("");
}, Zo = function(e, t, n) {
  var r = e;
  return t && t !== "." && (r = r.replace(RegExp(dt(t), "g"), "."), n && t === "-" && (r = "-".concat(r.slice(1)))), r;
}, Qo = function(e, t) {
  var n = t.prefix, r = t.groupSeparator, s = t.decimalSeparator, o = t.decimalScale, l = t.disableGroupSeparators, i = l === void 0 ? !1 : l;
  return e.reduce(function(a, u, p) {
    var d = u.type, h = u.value;
    return p === 0 && n ? d === "minusSign" ? [h, n] : d === "currency" ? We(We([], a, !0), [n], !1) : [n, h] : d === "currency" ? n ? a : We(We([], a, !0), [h], !1) : d === "group" ? i ? a : We(We([], a, !0), [r !== void 0 ? r : h], !1) : d === "decimal" ? o !== void 0 && o === 0 ? a : We(We([], a, !0), [s !== void 0 ? s : h], !1) : d === "fraction" ? We(We([], a, !0), [o !== void 0 ? h.slice(0, o) : h], !1) : We(We([], a, !0), [h], !1);
  }, [""]).join("");
}, es = {
  currencySymbol: "",
  groupSeparator: "",
  decimalSeparator: "",
  prefix: "",
  suffix: ""
}, ts = function(e) {
  var t = e || {}, n = t.locale, r = t.currency, s = n ? new Intl.NumberFormat(n, r ? { currency: r, style: "currency" } : void 0) : new Intl.NumberFormat();
  return s.formatToParts(1000.1).reduce(function(o, l, i) {
    return l.type === "currency" ? i === 0 ? Q(Q({}, o), { currencySymbol: l.value, prefix: l.value }) : Q(Q({}, o), { currencySymbol: l.value, suffix: l.value }) : l.type === "group" ? Q(Q({}, o), { groupSeparator: l.value }) : l.type === "decimal" ? Q(Q({}, o), { decimalSeparator: l.value }) : o;
  }, es);
}, Qn = function(e) {
  return RegExp(/\d/, "gi").test(e);
}, ns = function(e, t, n) {
  if (t === void 0 && (t = "."), n === void 0 || e === "" || e === void 0)
    return e;
  if (!e.match(/\d/g))
    return "";
  var r = e.split(t), s = r[0], o = r[1];
  if (n === 0)
    return s;
  var l = o || "";
  if (l.length < n)
    for (; l.length < n; )
      l += "0";
  else
    l = l.slice(0, n);
  return "".concat(s).concat(t).concat(l);
}, rs = function(e) {
  var t = e.selectionStart, n = e.value, r = e.lastKeyStroke, s = e.stateValue, o = e.groupSeparator, l = t, i = n;
  if (s && l) {
    var a = n.split("");
    return r === "Backspace" && s[l] === o && (a.splice(l - 1, 1), l -= 1), r === "Delete" && s[l] === o && (a.splice(l, 1), l += 1), i = a.join(""), { modifiedValue: i, cursorPosition: l };
  }
  return { modifiedValue: i, cursorPosition: t };
}, ct = no(function(e, t) {
  var n = e.allowDecimals, r = n === void 0 ? !0 : n, s = e.allowNegativeValue, o = s === void 0 ? !0 : s, l = e.id, i = e.name, a = e.className, u = e.customInput, p = e.decimalsLimit, d = e.defaultValue, h = e.disabled, m = h === void 0 ? !1 : h, v = e.maxLength, y = e.value, g = e.onValueChange, j = e.fixedDecimalLength, E = e.placeholder, w = e.decimalScale, S = e.prefix, O = e.suffix, x = e.intlConfig, R = e.step, _ = e.min, M = e.max, G = e.disableGroupSeparators, ne = G === void 0 ? !1 : G, F = e.disableAbbreviations, z = F === void 0 ? !1 : F, I = e.decimalSeparator, Z = e.groupSeparator, te = e.onChange, K = e.onFocus, J = e.onBlur, pe = e.onKeyDown, ge = e.onKeyUp, ie = e.transformRawValue, ze = e.formatValueOnBlur, mt = ze === void 0 ? !0 : ze, wt = qo(e, ["allowDecimals", "allowNegativeValue", "id", "name", "className", "customInput", "decimalsLimit", "defaultValue", "disabled", "maxLength", "value", "onValueChange", "fixedDecimalLength", "placeholder", "decimalScale", "prefix", "suffix", "intlConfig", "step", "min", "max", "disableGroupSeparators", "disableAbbreviations", "decimalSeparator", "groupSeparator", "onChange", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "transformRawValue", "formatValueOnBlur"]);
  if (I && Qn(I))
    throw new Error("decimalSeparator cannot be a number");
  if (Z && Qn(Z))
    throw new Error("groupSeparator cannot be a number");
  var Ze = ro(function() {
    return ts(x);
  }, [x]), le = I || Ze.decimalSeparator || "", _e = Z || Ze.groupSeparator || "";
  if (le && _e && le === _e && ne === !1)
    throw new Error("decimalSeparator cannot be the same as groupSeparator");
  var re = {
    decimalSeparator: le,
    groupSeparator: _e,
    disableGroupSeparators: ne,
    intlConfig: x,
    prefix: S || Ze.prefix,
    suffix: O
  }, Pe = {
    decimalSeparator: le,
    groupSeparator: _e,
    allowDecimals: r,
    decimalsLimit: p || j || 2,
    allowNegativeValue: o,
    disableAbbreviations: z,
    prefix: S || Ze.prefix,
    transformRawValue: ie
  }, be = W(function() {
    return d != null ? Ft(Q(Q({}, re), { decimalScale: w, value: String(d) })) : y != null ? Ft(Q(Q({}, re), { decimalScale: w, value: String(y) })) : "";
  }), ae = be[0], De = be[1], Ve = W(!1), ht = Ve[0], xe = Ve[1], $e = W(0), Ie = $e[0], Le = $e[1], H = W(0), at = H[0], vt = H[1], Ke = W(null), yt = Ke[0], St = Ke[1], Se = we(null);
  wr(t, function() {
    return Se.current;
  });
  var Me = function(oe, me) {
    xe(!0);
    var ue = rs({
      selectionStart: me,
      value: oe,
      lastKeyStroke: yt,
      stateValue: ae,
      groupSeparator: _e
    }), he = ue.modifiedValue, de = ue.cursorPosition, ve = vn(Q({ value: he }, Pe));
    if (!(v && ve.replace(/-/g, "").length > v)) {
      if (ve === "" || ve === "-" || ve === le) {
        g && g(void 0, i, { float: null, formatted: "", value: "" }), De(ve), Le(1);
        return;
      }
      var Ee = le ? ve.replace(le, ".") : ve, tt = parseFloat(Ee), Ge = Ft(Q({ value: ve }, re));
      if (de != null) {
        var se = de + (Ge.length - oe.length);
        se = se <= 0 ? S ? S.length : 0 : se, Le(se), vt(at + 1);
      }
      if (De(Ge), g) {
        var Te = {
          float: tt,
          formatted: Ge,
          value: ve
        };
        g(ve, i, Te);
      }
    }
  }, Be = function(oe) {
    var me = oe.target, ue = me.value, he = me.selectionStart;
    Me(ue, he), te && te(oe);
  }, Qe = function(oe) {
    return K && K(oe), ae ? ae.length : 0;
  }, et = function(oe) {
    var me = oe.target.value, ue = vn(Q({ value: me }, Pe));
    if (ue === "-" || ue === le || !ue) {
      De(""), J && J(oe);
      return;
    }
    var he = Xo(ue, le, j), de = ns(he, le, w !== void 0 ? w : j), ve = parseFloat(de.replace(le, ".")), Ee = Ft(Q(Q({}, re), { value: de }));
    g && mt && g(de, i, {
      float: ve,
      formatted: Ee,
      value: de
    }), De(Ee), J && J(oe);
  }, it = function(oe) {
    var me = oe.key;
    if (St(me), R && (me === "ArrowUp" || me === "ArrowDown")) {
      oe.preventDefault(), Le(ae.length);
      var ue = parseFloat(y != null ? String(y).replace(le, ".") : vn(Q({ value: ae }, Pe))) || 0, he = me === "ArrowUp" ? ue + R : ue - R;
      if (_ !== void 0 && he < Number(_) || M !== void 0 && he > Number(M))
        return;
      var de = String(R).includes(".") ? Number(String(R).split(".")[1].length) : void 0;
      Me(String(de ? he.toFixed(de) : he).replace(".", le));
    }
    pe && pe(oe);
  }, qe = function(oe) {
    var me = oe.key, ue = oe.currentTarget.selectionStart;
    if (me !== "ArrowUp" && me !== "ArrowDown" && ae !== "-") {
      var he = kr(ae, { groupSeparator: _e, decimalSeparator: le });
      if (he && ue && ue > ae.length - he.length && Se.current) {
        var de = ae.length - he.length;
        Se.current.setSelectionRange(de, de);
      }
    }
    ge && ge(oe);
  };
  q(function() {
    y == null && d == null && De("");
  }, [d, y]), q(function() {
    ht && ae !== "-" && Se.current && document.activeElement === Se.current && Se.current.setSelectionRange(Ie, Ie);
  }, [ae, Ie, Se, ht, at]);
  var xt = function() {
    return y != null && ae !== "-" && (!le || ae !== le) ? Ft(Q(Q({}, re), { decimalScale: ht ? void 0 : w, value: String(y) })) : ae;
  }, Ne = Q({ type: "text", inputMode: "decimal", id: l, name: i, className: a, onChange: Be, onBlur: et, onFocus: Qe, onKeyDown: it, onKeyUp: qe, placeholder: E, disabled: m, value: xt(), ref: Se }, wt);
  if (u) {
    var ce = u;
    return Ae.createElement(ce, Q({}, Ne));
  }
  return Ae.createElement("input", Q({}, Ne));
});
ct.displayName = "CurrencyInput";
function os({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ ee.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ ee.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ ee.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
  }));
}
const ss = /* @__PURE__ */ ee.forwardRef(os);
function as({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ ee.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ ee.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ ee.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
  }));
}
const is = /* @__PURE__ */ ee.forwardRef(as);
function ls({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ ee.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ ee.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ ee.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
  }));
}
const cs = /* @__PURE__ */ ee.forwardRef(ls);
function us({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ ee.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ ee.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ ee.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
  }));
}
const ds = /* @__PURE__ */ ee.forwardRef(us);
function fs({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ ee.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ ee.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ ee.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const ps = /* @__PURE__ */ ee.forwardRef(fs);
function ms({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ ee.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ ee.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ ee.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
  }));
}
const hs = /* @__PURE__ */ ee.forwardRef(ms);
function vs({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ ee.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ ee.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ ee.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const _n = /* @__PURE__ */ ee.forwardRef(vs), At = Math.min, Ct = Math.max, en = Math.round, Yt = Math.floor, ut = (e) => ({
  x: e,
  y: e
}), ys = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, xs = {
  start: "end",
  end: "start"
};
function Sn(e, t, n) {
  return Ct(e, At(t, n));
}
function Ut(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ot(e) {
  return e.split("-")[0];
}
function zt(e) {
  return e.split("-")[1];
}
function Ar(e) {
  return e === "x" ? "y" : "x";
}
function Nn(e) {
  return e === "y" ? "height" : "width";
}
function Pt(e) {
  return ["top", "bottom"].includes(Ot(e)) ? "y" : "x";
}
function Tn(e) {
  return Ar(Pt(e));
}
function gs(e, t, n) {
  n === void 0 && (n = !1);
  const r = zt(e), s = Tn(e), o = Nn(s);
  let l = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (l = tn(l)), [l, tn(l)];
}
function bs(e) {
  const t = tn(e);
  return [En(e), t, En(t)];
}
function En(e) {
  return e.replace(/start|end/g, (t) => xs[t]);
}
function ws(e, t, n) {
  const r = ["left", "right"], s = ["right", "left"], o = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? s : r : t ? r : s;
    case "left":
    case "right":
      return t ? o : l;
    default:
      return [];
  }
}
function Ss(e, t, n, r) {
  const s = zt(e);
  let o = ws(Ot(e), n === "start", r);
  return s && (o = o.map((l) => l + "-" + s), t && (o = o.concat(o.map(En)))), o;
}
function tn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ys[t]);
}
function Es(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Pr(e) {
  return typeof e != "number" ? Es(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function nn(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: s
  } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n
  };
}
function er(e, t, n) {
  let {
    reference: r,
    floating: s
  } = e;
  const o = Pt(t), l = Tn(t), i = Nn(l), a = Ot(t), u = o === "y", p = r.x + r.width / 2 - s.width / 2, d = r.y + r.height / 2 - s.height / 2, h = r[i] / 2 - s[i] / 2;
  let m;
  switch (a) {
    case "top":
      m = {
        x: p,
        y: r.y - s.height
      };
      break;
    case "bottom":
      m = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: r.x - s.width,
        y: d
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (zt(t)) {
    case "start":
      m[l] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      m[l] += h * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const js = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: s = "absolute",
    middleware: o = [],
    platform: l
  } = n, i = o.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: p,
    y: d
  } = er(u, r, a), h = r, m = {}, v = 0;
  for (let y = 0; y < i.length; y++) {
    const {
      name: g,
      fn: j
    } = i[y], {
      x: E,
      y: w,
      data: S,
      reset: O
    } = await j({
      x: p,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: s,
      middlewareData: m,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = E ?? p, d = w ?? d, m = {
      ...m,
      [g]: {
        ...m[g],
        ...S
      }
    }, O && v <= 50 && (v++, typeof O == "object" && (O.placement && (h = O.placement), O.rects && (u = O.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : O.rects), {
      x: p,
      y: d
    } = er(u, h, a)), y = -1);
  }
  return {
    x: p,
    y: d,
    placement: h,
    strategy: s,
    middlewareData: m
  };
};
async function Dr(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: s,
    platform: o,
    rects: l,
    elements: i,
    strategy: a
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: m = 0
  } = Ut(t, e), v = Pr(m), g = i[h ? d === "floating" ? "reference" : "floating" : d], j = nn(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: p,
    strategy: a
  })), E = d === "floating" ? {
    x: r,
    y: s,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating)), S = await (o.isElement == null ? void 0 : o.isElement(w)) ? await (o.getScale == null ? void 0 : o.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = nn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: E,
    offsetParent: w,
    strategy: a
  }) : E);
  return {
    top: (j.top - O.top + v.top) / S.y,
    bottom: (O.bottom - j.bottom + v.bottom) / S.y,
    left: (j.left - O.left + v.left) / S.x,
    right: (O.right - j.right + v.right) / S.x
  };
}
const Rs = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: s,
      rects: o,
      platform: l,
      elements: i,
      middlewareData: a
    } = t, {
      element: u,
      padding: p = 0
    } = Ut(e, t) || {};
    if (u == null)
      return {};
    const d = Pr(p), h = {
      x: n,
      y: r
    }, m = Tn(s), v = Nn(m), y = await l.getDimensions(u), g = m === "y", j = g ? "top" : "left", E = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", S = o.reference[v] + o.reference[m] - h[m] - o.floating[v], O = h[m] - o.reference[m], x = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
    let R = x ? x[w] : 0;
    (!R || !await (l.isElement == null ? void 0 : l.isElement(x))) && (R = i.floating[w] || o.floating[v]);
    const _ = S / 2 - O / 2, M = R / 2 - y[v] / 2 - 1, G = At(d[j], M), ne = At(d[E], M), F = G, z = R - y[v] - ne, I = R / 2 - y[v] / 2 + _, Z = Sn(F, I, z), te = !a.arrow && zt(s) != null && I !== Z && o.reference[v] / 2 - (I < F ? G : ne) - y[v] / 2 < 0, K = te ? I < F ? I - F : I - z : 0;
    return {
      [m]: h[m] + K,
      data: {
        [m]: Z,
        centerOffset: I - Z - K,
        ...te && {
          alignmentOffset: K
        }
      },
      reset: te
    };
  }
}), Cs = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: s,
        middlewareData: o,
        rects: l,
        initialPlacement: i,
        platform: a,
        elements: u
      } = t, {
        mainAxis: p = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: y = !0,
        ...g
      } = Ut(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const j = Ot(s), E = Pt(i), w = Ot(i) === i, S = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), O = h || (w || !y ? [tn(i)] : bs(i)), x = v !== "none";
      !h && x && O.push(...Ss(i, y, v, S));
      const R = [i, ...O], _ = await Dr(t, g), M = [];
      let G = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (p && M.push(_[j]), d) {
        const I = gs(s, l, S);
        M.push(_[I[0]], _[I[1]]);
      }
      if (G = [...G, {
        placement: s,
        overflows: M
      }], !M.every((I) => I <= 0)) {
        var ne, F;
        const I = (((ne = o.flip) == null ? void 0 : ne.index) || 0) + 1, Z = R[I];
        if (Z)
          return {
            data: {
              index: I,
              overflows: G
            },
            reset: {
              placement: Z
            }
          };
        let te = (F = G.filter((K) => K.overflows[0] <= 0).sort((K, J) => K.overflows[1] - J.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!te)
          switch (m) {
            case "bestFit": {
              var z;
              const K = (z = G.filter((J) => {
                if (x) {
                  const pe = Pt(J.placement);
                  return pe === E || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((J) => [J.placement, J.overflows.filter((pe) => pe > 0).reduce((pe, ge) => pe + ge, 0)]).sort((J, pe) => J[1] - pe[1])[0]) == null ? void 0 : z[0];
              K && (te = K);
              break;
            }
            case "initialPlacement":
              te = i;
              break;
          }
        if (s !== te)
          return {
            reset: {
              placement: te
            }
          };
      }
      return {};
    }
  };
};
async function Os(e, t) {
  const {
    placement: n,
    platform: r,
    elements: s
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), l = Ot(n), i = zt(n), a = Pt(n) === "y", u = ["left", "top"].includes(l) ? -1 : 1, p = o && a ? -1 : 1, d = Ut(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return i && typeof v == "number" && (m = i === "end" ? v * -1 : v), a ? {
    x: m * p,
    y: h * u
  } : {
    x: h * u,
    y: m * p
  };
}
const _s = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: s,
        y: o,
        placement: l,
        middlewareData: i
      } = t, a = await Os(t, e);
      return l === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: s + a.x,
        y: o + a.y,
        data: {
          ...a,
          placement: l
        }
      };
    }
  };
}, Ns = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: s
      } = t, {
        mainAxis: o = !0,
        crossAxis: l = !1,
        limiter: i = {
          fn: (g) => {
            let {
              x: j,
              y: E
            } = g;
            return {
              x: j,
              y: E
            };
          }
        },
        ...a
      } = Ut(e, t), u = {
        x: n,
        y: r
      }, p = await Dr(t, a), d = Pt(Ot(s)), h = Ar(d);
      let m = u[h], v = u[d];
      if (o) {
        const g = h === "y" ? "top" : "left", j = h === "y" ? "bottom" : "right", E = m + p[g], w = m - p[j];
        m = Sn(E, m, w);
      }
      if (l) {
        const g = d === "y" ? "top" : "left", j = d === "y" ? "bottom" : "right", E = v + p[g], w = v - p[j];
        v = Sn(E, v, w);
      }
      const y = i.fn({
        ...t,
        [h]: m,
        [d]: v
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [h]: o,
            [d]: l
          }
        }
      };
    }
  };
};
function sn() {
  return typeof window < "u";
}
function It(e) {
  return Ir(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ue(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pt(e) {
  var t;
  return (t = (Ir(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ir(e) {
  return sn() ? e instanceof Node || e instanceof Ue(e).Node : !1;
}
function ot(e) {
  return sn() ? e instanceof Element || e instanceof Ue(e).Element : !1;
}
function ft(e) {
  return sn() ? e instanceof HTMLElement || e instanceof Ue(e).HTMLElement : !1;
}
function tr(e) {
  return !sn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ue(e).ShadowRoot;
}
function Kt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: s
  } = st(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(s);
}
function Ts(e) {
  return ["table", "td", "th"].includes(It(e));
}
function an(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function kn(e) {
  const t = An(), n = ot(e) ? st(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ks(e) {
  let t = Rt(e);
  for (; ft(t) && !Dt(t); ) {
    if (kn(t))
      return t;
    if (an(t))
      return null;
    t = Rt(t);
  }
  return null;
}
function An() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Dt(e) {
  return ["html", "body", "#document"].includes(It(e));
}
function st(e) {
  return Ue(e).getComputedStyle(e);
}
function ln(e) {
  return ot(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Rt(e) {
  if (It(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    tr(e) && e.host || // Fallback.
    pt(e)
  );
  return tr(t) ? t.host : t;
}
function Lr(e) {
  const t = Rt(e);
  return Dt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ft(t) && Kt(t) ? t : Lr(t);
}
function Bt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = Lr(e), o = s === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Ue(s);
  if (o) {
    const i = jn(l);
    return t.concat(l, l.visualViewport || [], Kt(s) ? s : [], i && n ? Bt(i) : []);
  }
  return t.concat(s, Bt(s, [], n));
}
function jn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Mr(e) {
  const t = st(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const s = ft(e), o = s ? e.offsetWidth : n, l = s ? e.offsetHeight : r, i = en(n) !== o || en(r) !== l;
  return i && (n = o, r = l), {
    width: n,
    height: r,
    $: i
  };
}
function Pn(e) {
  return ot(e) ? e : e.contextElement;
}
function kt(e) {
  const t = Pn(e);
  if (!ft(t))
    return ut(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: s,
    $: o
  } = Mr(t);
  let l = (o ? en(n.width) : n.width) / r, i = (o ? en(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const As = /* @__PURE__ */ ut(0);
function Fr(e) {
  const t = Ue(e);
  return !An() || !t.visualViewport ? As : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ps(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ue(e) ? !1 : t;
}
function _t(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = Pn(e);
  let l = ut(1);
  t && (r ? ot(r) && (l = kt(r)) : l = kt(e));
  const i = Ps(o, n, r) ? Fr(o) : ut(0);
  let a = (s.left + i.x) / l.x, u = (s.top + i.y) / l.y, p = s.width / l.x, d = s.height / l.y;
  if (o) {
    const h = Ue(o), m = r && ot(r) ? Ue(r) : r;
    let v = h, y = jn(v);
    for (; y && r && m !== v; ) {
      const g = kt(y), j = y.getBoundingClientRect(), E = st(y), w = j.left + (y.clientLeft + parseFloat(E.paddingLeft)) * g.x, S = j.top + (y.clientTop + parseFloat(E.paddingTop)) * g.y;
      a *= g.x, u *= g.y, p *= g.x, d *= g.y, a += w, u += S, v = Ue(y), y = jn(v);
    }
  }
  return nn({
    width: p,
    height: d,
    x: a,
    y: u
  });
}
function Dn(e, t) {
  const n = ln(e).scrollLeft;
  return t ? t.left + n : _t(pt(e)).left + n;
}
function Vr(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Dn(e, r)
  )), o = r.top + t.scrollTop;
  return {
    x: s,
    y: o
  };
}
function Ds(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: s
  } = e;
  const o = s === "fixed", l = pt(r), i = t ? an(t.floating) : !1;
  if (r === l || i && o)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ut(1);
  const p = ut(0), d = ft(r);
  if ((d || !d && !o) && ((It(r) !== "body" || Kt(l)) && (a = ln(r)), ft(r))) {
    const m = _t(r);
    u = kt(r), p.x = m.x + r.clientLeft, p.y = m.y + r.clientTop;
  }
  const h = l && !d && !o ? Vr(l, a, !0) : ut(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + p.x + h.x,
    y: n.y * u.y - a.scrollTop * u.y + p.y + h.y
  };
}
function Is(e) {
  return Array.from(e.getClientRects());
}
function Ls(e) {
  const t = pt(e), n = ln(e), r = e.ownerDocument.body, s = Ct(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = Ct(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + Dn(e);
  const i = -n.scrollTop;
  return st(r).direction === "rtl" && (l += Ct(t.clientWidth, r.clientWidth) - s), {
    width: s,
    height: o,
    x: l,
    y: i
  };
}
function Ms(e, t) {
  const n = Ue(e), r = pt(e), s = n.visualViewport;
  let o = r.clientWidth, l = r.clientHeight, i = 0, a = 0;
  if (s) {
    o = s.width, l = s.height;
    const u = An();
    (!u || u && t === "fixed") && (i = s.offsetLeft, a = s.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i,
    y: a
  };
}
function Fs(e, t) {
  const n = _t(e, !0, t === "fixed"), r = n.top + e.clientTop, s = n.left + e.clientLeft, o = ft(e) ? kt(e) : ut(1), l = e.clientWidth * o.x, i = e.clientHeight * o.y, a = s * o.x, u = r * o.y;
  return {
    width: l,
    height: i,
    x: a,
    y: u
  };
}
function nr(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ms(e, n);
  else if (t === "document")
    r = Ls(pt(e));
  else if (ot(t))
    r = Fs(t, n);
  else {
    const s = Fr(e);
    r = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return nn(r);
}
function $r(e, t) {
  const n = Rt(e);
  return n === t || !ot(n) || Dt(n) ? !1 : st(n).position === "fixed" || $r(n, t);
}
function Vs(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Bt(e, [], !1).filter((i) => ot(i) && It(i) !== "body"), s = null;
  const o = st(e).position === "fixed";
  let l = o ? Rt(e) : e;
  for (; ot(l) && !Dt(l); ) {
    const i = st(l), a = kn(l);
    !a && i.position === "fixed" && (s = null), (o ? !a && !s : !a && i.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Kt(l) && !a && $r(e, l)) ? r = r.filter((p) => p !== l) : s = i, l = Rt(l);
  }
  return t.set(e, r), r;
}
function $s(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: s
  } = e;
  const l = [...n === "clippingAncestors" ? an(t) ? [] : Vs(t, this._c) : [].concat(n), r], i = l[0], a = l.reduce((u, p) => {
    const d = nr(t, p, s);
    return u.top = Ct(d.top, u.top), u.right = At(d.right, u.right), u.bottom = At(d.bottom, u.bottom), u.left = Ct(d.left, u.left), u;
  }, nr(t, i, s));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Bs(e) {
  const {
    width: t,
    height: n
  } = Mr(e);
  return {
    width: t,
    height: n
  };
}
function Ws(e, t, n) {
  const r = ft(t), s = pt(t), o = n === "fixed", l = _t(e, !0, o, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = ut(0);
  if (r || !r && !o)
    if ((It(t) !== "body" || Kt(s)) && (i = ln(t)), r) {
      const h = _t(t, !0, o, t);
      a.x = h.x + t.clientLeft, a.y = h.y + t.clientTop;
    } else s && (a.x = Dn(s));
  const u = s && !r && !o ? Vr(s, i) : ut(0), p = l.left + i.scrollLeft - a.x - u.x, d = l.top + i.scrollTop - a.y - u.y;
  return {
    x: p,
    y: d,
    width: l.width,
    height: l.height
  };
}
function yn(e) {
  return st(e).position === "static";
}
function rr(e, t) {
  if (!ft(e) || st(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return pt(e) === n && (n = n.ownerDocument.body), n;
}
function Br(e, t) {
  const n = Ue(e);
  if (an(e))
    return n;
  if (!ft(e)) {
    let s = Rt(e);
    for (; s && !Dt(s); ) {
      if (ot(s) && !yn(s))
        return s;
      s = Rt(s);
    }
    return n;
  }
  let r = rr(e, t);
  for (; r && Ts(r) && yn(r); )
    r = rr(r, t);
  return r && Dt(r) && yn(r) && !kn(r) ? n : r || ks(e) || n;
}
const Us = async function(e) {
  const t = this.getOffsetParent || Br, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Ws(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function zs(e) {
  return st(e).direction === "rtl";
}
const Ks = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ds,
  getDocumentElement: pt,
  getClippingRect: $s,
  getOffsetParent: Br,
  getElementRects: Us,
  getClientRects: Is,
  getDimensions: Bs,
  getScale: kt,
  isElement: ot,
  isRTL: zs
};
function qs(e, t) {
  let n = null, r;
  const s = pt(e);
  function o() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function l(i, a) {
    i === void 0 && (i = !1), a === void 0 && (a = 1), o();
    const {
      left: u,
      top: p,
      width: d,
      height: h
    } = e.getBoundingClientRect();
    if (i || t(), !d || !h)
      return;
    const m = Yt(p), v = Yt(s.clientWidth - (u + d)), y = Yt(s.clientHeight - (p + h)), g = Yt(u), E = {
      rootMargin: -m + "px " + -v + "px " + -y + "px " + -g + "px",
      threshold: Ct(0, At(1, a)) || 1
    };
    let w = !0;
    function S(O) {
      const x = O[0].intersectionRatio;
      if (x !== a) {
        if (!w)
          return l();
        x ? l(!1, x) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...E,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, E);
    }
    n.observe(e);
  }
  return l(!0), o;
}
function Gs(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: o = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, u = Pn(e), p = s || o ? [...u ? Bt(u) : [], ...Bt(t)] : [];
  p.forEach((j) => {
    s && j.addEventListener("scroll", n, {
      passive: !0
    }), o && j.addEventListener("resize", n);
  });
  const d = u && i ? qs(u, n) : null;
  let h = -1, m = null;
  l && (m = new ResizeObserver((j) => {
    let [E] = j;
    E && E.target === u && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var w;
      (w = m) == null || w.observe(t);
    })), n();
  }), u && !a && m.observe(u), m.observe(t));
  let v, y = a ? _t(e) : null;
  a && g();
  function g() {
    const j = _t(e);
    y && (j.x !== y.x || j.y !== y.y || j.width !== y.width || j.height !== y.height) && n(), y = j, v = requestAnimationFrame(g);
  }
  return n(), () => {
    var j;
    p.forEach((E) => {
      s && E.removeEventListener("scroll", n), o && E.removeEventListener("resize", n);
    }), d == null || d(), (j = m) == null || j.disconnect(), m = null, a && cancelAnimationFrame(v);
  };
}
const Hs = _s, Ys = Ns, Js = Cs, Xs = Rs, or = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), s = {
    platform: Ks,
    ...n
  }, o = {
    ...s.platform,
    _c: r
  };
  return js(e, t, {
    ...s,
    platform: o
  });
};
var xn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var sr;
function Zs() {
  return sr || (sr = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var o = "", l = 0; l < arguments.length; l++) {
          var i = arguments[l];
          i && (o = s(o, r(i)));
        }
        return o;
      }
      function r(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return n.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var l = "";
        for (var i in o)
          t.call(o, i) && o[i] && (l = s(l, i));
        return l;
      }
      function s(o, l) {
        return l ? o ? o + " " + l : o + l : o;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(xn)), xn.exports;
}
var Qs = Zs();
const Rn = /* @__PURE__ */ Sr(Qs);
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const ea = "react-tooltip-core-styles", ta = "react-tooltip-base-styles", ar = { core: !1, base: !1 };
function ir({ css: e, id: t = ta, type: n = "base", ref: r }) {
  var s, o;
  if (!e || typeof document > "u" || ar[n] || n === "core" && typeof process < "u" && (!((s = process == null ? void 0 : process.env) === null || s === void 0) && s.REACT_TOOLTIP_DISABLE_CORE_STYLES) || n !== "base" && typeof process < "u" && (!((o = process == null ? void 0 : process.env) === null || o === void 0) && o.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
  n === "core" && (t = ea), r || (r = {});
  const { insertAt: l } = r;
  if (document.getElementById(t)) return;
  const i = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.id = t, a.type = "text/css", l === "top" && i.firstChild ? i.insertBefore(a, i.firstChild) : i.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e)), ar[n] = !0;
}
const lr = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: r = "top", offset: s = 10, strategy: o = "absolute", middlewares: l = [Hs(Number(s)), Js({ fallbackAxisSideDirection: "start" }), Ys({ padding: 5 })], border: i }) => {
  if (!e) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
  if (t === null) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
  const a = l;
  return n ? (a.push(Xs({ element: n, padding: 5 })), or(e, t, { placement: r, strategy: o, middleware: a }).then(({ x: u, y: p, placement: d, middlewareData: h }) => {
    var m, v;
    const y = { left: `${u}px`, top: `${p}px`, border: i }, { x: g, y: j } = (m = h.arrow) !== null && m !== void 0 ? m : { x: 0, y: 0 }, E = (v = { top: "bottom", right: "left", bottom: "top", left: "right" }[d.split("-")[0]]) !== null && v !== void 0 ? v : "bottom", w = i && { borderBottom: i, borderRight: i };
    let S = 0;
    if (i) {
      const O = `${i}`.match(/(\d+)px/);
      S = O != null && O[1] ? Number(O[1]) : 1;
    }
    return { tooltipStyles: y, tooltipArrowStyles: { left: g != null ? `${g}px` : "", top: j != null ? `${j}px` : "", right: "", bottom: "", ...w, [E]: `-${4 + S}px` }, place: d };
  })) : or(e, t, { placement: "bottom", strategy: o, middleware: a }).then(({ x: u, y: p, placement: d }) => ({ tooltipStyles: { left: `${u}px`, top: `${p}px` }, tooltipArrowStyles: {}, place: d }));
}, cr = (e, t) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(e, t), ur = (e, t, n) => {
  let r = null;
  const s = function(...o) {
    const l = () => {
      r = null;
    };
    !r && (e.apply(this, o), r = setTimeout(l, t));
  };
  return s.cancel = () => {
    r && (clearTimeout(r), r = null);
  }, s;
}, dr = (e) => e !== null && !Array.isArray(e) && typeof e == "object", Cn = (e, t) => {
  if (e === t) return !0;
  if (Array.isArray(e) && Array.isArray(t)) return e.length === t.length && e.every((s, o) => Cn(s, t[o]));
  if (Array.isArray(e) !== Array.isArray(t)) return !1;
  if (!dr(e) || !dr(t)) return e === t;
  const n = Object.keys(e), r = Object.keys(t);
  return n.length === r.length && n.every((s) => Cn(e[s], t[s]));
}, na = (e) => {
  if (!(e instanceof HTMLElement || e instanceof SVGElement)) return !1;
  const t = getComputedStyle(e);
  return ["overflow", "overflow-x", "overflow-y"].some((n) => {
    const r = t.getPropertyValue(n);
    return r === "auto" || r === "scroll";
  });
}, fr = (e) => {
  if (!e) return null;
  let t = e.parentElement;
  for (; t; ) {
    if (na(t)) return t;
    t = t.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, ra = typeof window < "u" ? io : q, Je = (e) => {
  e.current && (clearTimeout(e.current), e.current = null);
}, oa = "DEFAULT_TOOLTIP_ID", sa = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, aa = oo({ getTooltipData: () => sa });
function Wr(e = oa) {
  return so(aa).getTooltipData(e);
}
var Nt = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, gn = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const ia = ({ forwardRef: e, id: t, className: n, classNameArrow: r, variant: s = "dark", anchorId: o, anchorSelect: l, place: i = "top", offset: a = 10, events: u = ["hover"], openOnClick: p = !1, positionStrategy: d = "absolute", middlewares: h, wrapper: m, delayShow: v = 0, delayHide: y = 0, float: g = !1, hidden: j = !1, noArrow: E = !1, clickable: w = !1, closeOnEsc: S = !1, closeOnScroll: O = !1, closeOnResize: x = !1, openEvents: R, closeEvents: _, globalCloseEvents: M, imperativeModeOnly: G, style: ne, position: F, afterShow: z, afterHide: I, disableTooltip: Z, content: te, contentWrapperRef: K, isOpen: J, defaultIsOpen: pe = !1, setIsOpen: ge, activeAnchor: ie, setActiveAnchor: ze, border: mt, opacity: wt, arrowColor: Ze, role: le = "tooltip" }) => {
  var _e;
  const re = we(null), Pe = we(null), be = we(null), ae = we(null), De = we(null), [Ve, ht] = W({ tooltipStyles: {}, tooltipArrowStyles: {}, place: i }), [xe, $e] = W(!1), [Ie, Le] = W(!1), [H, at] = W(null), vt = we(!1), Ke = we(null), { anchorRefs: yt, setActiveAnchor: St } = Wr(t), Se = we(!1), [Me, Be] = W([]), Qe = we(!1), et = p || u.includes("click"), it = et || (R == null ? void 0 : R.click) || (R == null ? void 0 : R.dblclick) || (R == null ? void 0 : R.mousedown), qe = R ? { ...R } : { mouseover: !0, focus: !0, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 };
  !R && et && Object.assign(qe, { mouseenter: !1, focus: !1, mouseover: !1, click: !0 });
  const xt = _ ? { ..._ } : { mouseout: !0, blur: !0, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 };
  !_ && et && Object.assign(xt, { mouseleave: !1, blur: !1, mouseout: !1 });
  const Ne = M ? { ...M } : { escape: S || !1, scroll: O || !1, resize: x || !1, clickOutsideAnchor: it || !1 };
  G && (Object.assign(qe, { mouseenter: !1, focus: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(xt, { mouseleave: !1, blur: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(Ne, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), ra(() => (Qe.current = !0, () => {
    Qe.current = !1;
  }), []);
  const ce = (T) => {
    Qe.current && (T && Le(!0), setTimeout(() => {
      Qe.current && (ge == null || ge(T), J === void 0 && $e(T));
    }, 10));
  };
  q(() => {
    if (J === void 0) return () => null;
    J && Le(!0);
    const T = setTimeout(() => {
      $e(J);
    }, 10);
    return () => {
      clearTimeout(T);
    };
  }, [J]), q(() => {
    if (xe !== vt.current) if (Je(De), vt.current = xe, xe) z == null || z();
    else {
      const T = ((A) => {
        const D = A.match(/^([\d.]+)(ms|s)$/);
        if (!D) return 0;
        const [, ye, je] = D;
        return Number(ye) * (je === "ms" ? 1 : 1e3);
      })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
      De.current = setTimeout(() => {
        Le(!1), at(null), I == null || I();
      }, T + 25);
    }
  }, [xe]);
  const oe = (T) => {
    ht((A) => Cn(A, T) ? A : T);
  }, me = (T = v) => {
    Je(be), Ie ? ce(!0) : be.current = setTimeout(() => {
      ce(!0);
    }, T);
  }, ue = (T = y) => {
    Je(ae), ae.current = setTimeout(() => {
      Se.current || ce(!1);
    }, T);
  }, he = (T) => {
    var A;
    if (!T) return;
    const D = (A = T.currentTarget) !== null && A !== void 0 ? A : T.target;
    if (!(D != null && D.isConnected)) return ze(null), void St({ current: null });
    v ? me() : ce(!0), ze(D), St({ current: D }), Je(ae);
  }, de = () => {
    w ? ue(y || 100) : y ? ue() : ce(!1), Je(be);
  }, ve = ({ x: T, y: A }) => {
    var D;
    const ye = { getBoundingClientRect: () => ({ x: T, y: A, width: 0, height: 0, top: A, left: T, right: T, bottom: A }) };
    lr({ place: (D = H == null ? void 0 : H.place) !== null && D !== void 0 ? D : i, offset: a, elementReference: ye, tooltipReference: re.current, tooltipArrowReference: Pe.current, strategy: d, middlewares: h, border: mt }).then((je) => {
      oe(je);
    });
  }, Ee = (T) => {
    if (!T) return;
    const A = T, D = { x: A.clientX, y: A.clientY };
    ve(D), Ke.current = D;
  }, tt = (T) => {
    var A;
    if (!xe) return;
    const D = T.target;
    D.isConnected && (!((A = re.current) === null || A === void 0) && A.contains(D) || [document.querySelector(`[id='${o}']`), ...Me].some((ye) => ye == null ? void 0 : ye.contains(D)) || (ce(!1), Je(be)));
  }, Ge = ur(he, 50), se = ur(de, 50), Te = (T) => {
    se.cancel(), Ge(T);
  }, k = () => {
    Ge.cancel(), se();
  }, B = ao(() => {
    var T, A;
    const D = (T = H == null ? void 0 : H.position) !== null && T !== void 0 ? T : F;
    D ? ve(D) : g ? Ke.current && ve(Ke.current) : ie != null && ie.isConnected && lr({ place: (A = H == null ? void 0 : H.place) !== null && A !== void 0 ? A : i, offset: a, elementReference: ie, tooltipReference: re.current, tooltipArrowReference: Pe.current, strategy: d, middlewares: h, border: mt }).then((ye) => {
      Qe.current && oe(ye);
    });
  }, [xe, ie, te, ne, i, H == null ? void 0 : H.place, a, d, F, H == null ? void 0 : H.position, g]);
  q(() => {
    var T, A;
    const D = new Set(yt);
    Me.forEach((L) => {
      Z != null && Z(L) || D.add({ current: L });
    });
    const ye = document.querySelector(`[id='${o}']`);
    ye && !(Z != null && Z(ye)) && D.add({ current: ye });
    const je = () => {
      ce(!1);
    }, He = fr(ie), Ye = fr(re.current);
    Ne.scroll && (window.addEventListener("scroll", je), He == null || He.addEventListener("scroll", je), Ye == null || Ye.addEventListener("scroll", je));
    let Oe = null;
    Ne.resize ? window.addEventListener("resize", je) : ie && re.current && (Oe = Gs(ie, re.current, B, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const f = (L) => {
      L.key === "Escape" && ce(!1);
    };
    Ne.escape && window.addEventListener("keydown", f), Ne.clickOutsideAnchor && window.addEventListener("click", tt);
    const b = [], N = (L) => {
      xe && (L == null ? void 0 : L.target) === ie || he(L);
    }, P = (L) => {
      xe && (L == null ? void 0 : L.target) === ie && de();
    }, U = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"], X = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(qe).forEach(([L, Y]) => {
      Y && (U.includes(L) ? b.push({ event: L, listener: Te }) : X.includes(L) && b.push({ event: L, listener: N }));
    }), Object.entries(xt).forEach(([L, Y]) => {
      Y && (U.includes(L) ? b.push({ event: L, listener: k }) : X.includes(L) && b.push({ event: L, listener: P }));
    }), g && b.push({ event: "pointermove", listener: Ee });
    const $ = () => {
      Se.current = !0;
    }, V = () => {
      Se.current = !1, de();
    };
    return w && !it && ((T = re.current) === null || T === void 0 || T.addEventListener("mouseenter", $), (A = re.current) === null || A === void 0 || A.addEventListener("mouseleave", V)), b.forEach(({ event: L, listener: Y }) => {
      D.forEach((fe) => {
        var Re;
        (Re = fe.current) === null || Re === void 0 || Re.addEventListener(L, Y);
      });
    }), () => {
      var L, Y;
      Ne.scroll && (window.removeEventListener("scroll", je), He == null || He.removeEventListener("scroll", je), Ye == null || Ye.removeEventListener("scroll", je)), Ne.resize ? window.removeEventListener("resize", je) : Oe == null || Oe(), Ne.clickOutsideAnchor && window.removeEventListener("click", tt), Ne.escape && window.removeEventListener("keydown", f), w && !it && ((L = re.current) === null || L === void 0 || L.removeEventListener("mouseenter", $), (Y = re.current) === null || Y === void 0 || Y.removeEventListener("mouseleave", V)), b.forEach(({ event: fe, listener: Re }) => {
        D.forEach((Et) => {
          var nt;
          (nt = Et.current) === null || nt === void 0 || nt.removeEventListener(fe, Re);
        });
      });
    };
  }, [ie, B, Ie, yt, Me, R, _, M, et, v, y]), q(() => {
    var T, A;
    let D = (A = (T = H == null ? void 0 : H.anchorSelect) !== null && T !== void 0 ? T : l) !== null && A !== void 0 ? A : "";
    !D && t && (D = `[data-tooltip-id='${t.replace(/'/g, "\\'")}']`);
    const ye = new MutationObserver((je) => {
      const He = [], Ye = [];
      je.forEach((Oe) => {
        if (Oe.type === "attributes" && Oe.attributeName === "data-tooltip-id" && (Oe.target.getAttribute("data-tooltip-id") === t ? He.push(Oe.target) : Oe.oldValue === t && Ye.push(Oe.target)), Oe.type === "childList") {
          if (ie) {
            const f = [...Oe.removedNodes].filter((b) => b.nodeType === 1);
            if (D) try {
              Ye.push(...f.filter((b) => b.matches(D))), Ye.push(...f.flatMap((b) => [...b.querySelectorAll(D)]));
            } catch {
            }
            f.some((b) => {
              var N;
              return !!(!((N = b == null ? void 0 : b.contains) === null || N === void 0) && N.call(b, ie)) && (Le(!1), ce(!1), ze(null), Je(be), Je(ae), !0);
            });
          }
          if (D) try {
            const f = [...Oe.addedNodes].filter((b) => b.nodeType === 1);
            He.push(...f.filter((b) => b.matches(D))), He.push(...f.flatMap((b) => [...b.querySelectorAll(D)]));
          } catch {
          }
        }
      }), (He.length || Ye.length) && Be((Oe) => [...Oe.filter((f) => !Ye.includes(f)), ...He]);
    });
    return ye.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      ye.disconnect();
    };
  }, [t, l, H == null ? void 0 : H.anchorSelect, ie]), q(() => {
    B();
  }, [B]), q(() => {
    if (!(K != null && K.current)) return () => null;
    const T = new ResizeObserver(() => {
      setTimeout(() => B());
    });
    return T.observe(K.current), () => {
      T.disconnect();
    };
  }, [te, K == null ? void 0 : K.current]), q(() => {
    var T;
    const A = document.querySelector(`[id='${o}']`), D = [...Me, A];
    ie && D.includes(ie) || ze((T = Me[0]) !== null && T !== void 0 ? T : A);
  }, [o, Me, ie]), q(() => (pe && ce(!0), () => {
    Je(be), Je(ae);
  }), []), q(() => {
    var T;
    let A = (T = H == null ? void 0 : H.anchorSelect) !== null && T !== void 0 ? T : l;
    if (!A && t && (A = `[data-tooltip-id='${t.replace(/'/g, "\\'")}']`), A) try {
      const D = Array.from(document.querySelectorAll(A));
      Be(D);
    } catch {
      Be([]);
    }
  }, [t, l, H == null ? void 0 : H.anchorSelect]), q(() => {
    be.current && (Je(be), me(v));
  }, [v]);
  const ke = (_e = H == null ? void 0 : H.content) !== null && _e !== void 0 ? _e : te, lt = xe && Object.keys(Ve.tooltipStyles).length > 0;
  return wr(e, () => ({ open: (T) => {
    if (T != null && T.anchorSelect) try {
      document.querySelector(T.anchorSelect);
    } catch {
      return void console.warn(`[react-tooltip] "${T.anchorSelect}" is not a valid CSS selector`);
    }
    at(T ?? null), T != null && T.delay ? me(T.delay) : ce(!0);
  }, close: (T) => {
    T != null && T.delay ? ue(T.delay) : ce(!1);
  }, activeAnchor: ie, place: Ve.place, isOpen: !!(Ie && !j && ke && lt) })), Ie && !j && ke ? Ae.createElement(m, { id: t, role: le, className: Rn("react-tooltip", Nt.tooltip, gn.tooltip, gn[s], n, `react-tooltip__place-${Ve.place}`, Nt[lt ? "show" : "closing"], lt ? "react-tooltip__show" : "react-tooltip__closing", d === "fixed" && Nt.fixed, w && Nt.clickable), onTransitionEnd: (T) => {
    Je(De), xe || T.propertyName !== "opacity" || (Le(!1), at(null), I == null || I());
  }, style: { ...ne, ...Ve.tooltipStyles, opacity: wt !== void 0 && lt ? wt : void 0 }, ref: re }, ke, Ae.createElement(m, { className: Rn("react-tooltip-arrow", Nt.arrow, gn.arrow, r, E && Nt.noArrow), style: { ...Ve.tooltipArrowStyles, background: Ze ? `linear-gradient(to right bottom, transparent 50%, ${Ze} 50%)` : void 0 }, ref: Pe })) : null;
}, la = ({ content: e }) => Ae.createElement("span", { dangerouslySetInnerHTML: { __html: e } }), Ur = Ae.forwardRef(({ id: e, anchorId: t, anchorSelect: n, content: r, html: s, render: o, className: l, classNameArrow: i, variant: a = "dark", place: u = "top", offset: p = 10, wrapper: d = "div", children: h = null, events: m = ["hover"], openOnClick: v = !1, positionStrategy: y = "absolute", middlewares: g, delayShow: j = 0, delayHide: E = 0, float: w = !1, hidden: S = !1, noArrow: O = !1, clickable: x = !1, closeOnEsc: R = !1, closeOnScroll: _ = !1, closeOnResize: M = !1, openEvents: G, closeEvents: ne, globalCloseEvents: F, imperativeModeOnly: z = !1, style: I, position: Z, isOpen: te, defaultIsOpen: K = !1, disableStyleInjection: J = !1, border: pe, opacity: ge, arrowColor: ie, setIsOpen: ze, afterShow: mt, afterHide: wt, disableTooltip: Ze, role: le = "tooltip" }, _e) => {
  const [re, Pe] = W(r), [be, ae] = W(s), [De, Ve] = W(u), [ht, xe] = W(a), [$e, Ie] = W(p), [Le, H] = W(j), [at, vt] = W(E), [Ke, yt] = W(w), [St, Se] = W(S), [Me, Be] = W(d), [Qe, et] = W(m), [it, qe] = W(y), [xt, Ne] = W(null), [ce, oe] = W(null), me = we(J), { anchorRefs: ue, activeAnchor: he } = Wr(e), de = (se) => se == null ? void 0 : se.getAttributeNames().reduce((Te, k) => {
    var B;
    return k.startsWith("data-tooltip-") && (Te[k.replace(/^data-tooltip-/, "")] = (B = se == null ? void 0 : se.getAttribute(k)) !== null && B !== void 0 ? B : null), Te;
  }, {}), ve = (se) => {
    const Te = { place: (k) => {
      var B;
      Ve((B = k) !== null && B !== void 0 ? B : u);
    }, content: (k) => {
      Pe(k ?? r);
    }, html: (k) => {
      ae(k ?? s);
    }, variant: (k) => {
      var B;
      xe((B = k) !== null && B !== void 0 ? B : a);
    }, offset: (k) => {
      Ie(k === null ? p : Number(k));
    }, wrapper: (k) => {
      var B;
      Be((B = k) !== null && B !== void 0 ? B : d);
    }, events: (k) => {
      const B = k == null ? void 0 : k.split(" ");
      et(B ?? m);
    }, "position-strategy": (k) => {
      var B;
      qe((B = k) !== null && B !== void 0 ? B : y);
    }, "delay-show": (k) => {
      H(k === null ? j : Number(k));
    }, "delay-hide": (k) => {
      vt(k === null ? E : Number(k));
    }, float: (k) => {
      yt(k === null ? w : k === "true");
    }, hidden: (k) => {
      Se(k === null ? S : k === "true");
    }, "class-name": (k) => {
      Ne(k);
    } };
    Object.values(Te).forEach((k) => k(null)), Object.entries(se).forEach(([k, B]) => {
      var ke;
      (ke = Te[k]) === null || ke === void 0 || ke.call(Te, B);
    });
  };
  q(() => {
    Pe(r);
  }, [r]), q(() => {
    ae(s);
  }, [s]), q(() => {
    Ve(u);
  }, [u]), q(() => {
    xe(a);
  }, [a]), q(() => {
    Ie(p);
  }, [p]), q(() => {
    H(j);
  }, [j]), q(() => {
    vt(E);
  }, [E]), q(() => {
    yt(w);
  }, [w]), q(() => {
    Se(S);
  }, [S]), q(() => {
    qe(y);
  }, [y]), q(() => {
    me.current !== J && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [J]), q(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: J === "core", disableBase: J } }));
  }, []), q(() => {
    var se;
    const Te = new Set(ue);
    let k = n;
    if (!k && e && (k = `[data-tooltip-id='${e.replace(/'/g, "\\'")}']`), k) try {
      document.querySelectorAll(k).forEach((A) => {
        Te.add({ current: A });
      });
    } catch {
      console.warn(`[react-tooltip] "${k}" is not a valid CSS selector`);
    }
    const B = document.querySelector(`[id='${t}']`);
    if (B && Te.add({ current: B }), !Te.size) return () => null;
    const ke = (se = ce ?? B) !== null && se !== void 0 ? se : he.current, lt = new MutationObserver((A) => {
      A.forEach((D) => {
        var ye;
        if (!ke || D.type !== "attributes" || !(!((ye = D.attributeName) === null || ye === void 0) && ye.startsWith("data-tooltip-"))) return;
        const je = de(ke);
        ve(je);
      });
    }), T = { attributes: !0, childList: !1, subtree: !1 };
    if (ke) {
      const A = de(ke);
      ve(A), lt.observe(ke, T);
    }
    return () => {
      lt.disconnect();
    };
  }, [ue, he, ce, t, n]), q(() => {
    I != null && I.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), pe && !cr("border", `${pe}`) && console.warn(`[react-tooltip] "${pe}" is not a valid \`border\`.`), I != null && I.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), ge && !cr("opacity", `${ge}`) && console.warn(`[react-tooltip] "${ge}" is not a valid \`opacity\`.`);
  }, []);
  let Ee = h;
  const tt = we(null);
  if (o) {
    const se = o({ content: (ce == null ? void 0 : ce.getAttribute("data-tooltip-content")) || re || null, activeAnchor: ce });
    Ee = se ? Ae.createElement("div", { ref: tt, className: "react-tooltip-content-wrapper" }, se) : null;
  } else re && (Ee = re);
  be && (Ee = Ae.createElement(la, { content: be }));
  const Ge = { forwardRef: _e, id: e, anchorId: t, anchorSelect: n, className: Rn(l, xt), classNameArrow: i, content: Ee, contentWrapperRef: tt, place: De, variant: ht, offset: $e, wrapper: Me, events: Qe, openOnClick: v, positionStrategy: it, middlewares: g, delayShow: Le, delayHide: at, float: Ke, hidden: St, noArrow: O, clickable: x, closeOnEsc: R, closeOnScroll: _, closeOnResize: M, openEvents: G, closeEvents: ne, globalCloseEvents: F, imperativeModeOnly: z, style: I, position: Z, isOpen: te, defaultIsOpen: K, border: pe, opacity: ge, arrowColor: ie, setIsOpen: ze, afterShow: mt, afterHide: wt, disableTooltip: Ze, activeAnchor: ce, setActiveAnchor: (se) => oe(se), role: le };
  return Ae.createElement(ia, { ...Ge });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (e) => {
  e.detail.disableCore || ir({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), e.detail.disableBase || ir({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const Tt = ({ content: e, children: t }) => {
  const n = we(`tooltip-${crypto.randomUUID()}`);
  return /* @__PURE__ */ c.jsxs("span", { className: "inline", children: [
    /* @__PURE__ */ c.jsx(
      "span",
      {
        className: "inline",
        "data-tooltip-id": n.current,
        "data-tooltip-content": e,
        children: /* @__PURE__ */ c.jsx(hs, { width: "20" })
      }
    ),
    /* @__PURE__ */ c.jsx(Ur, { id: n.current, place: "top", clickable: !0, children: t })
  ] });
}, bn = ({
  data: e,
  onDelete: t,
  onUpdate: n,
  allowDelete: r,
  disableNameEdit: s
}) => {
  const o = (u) => {
    const { name: p, value: d } = u.target;
    n({ ...e, [p]: d });
  }, l = (u, p) => {
    p && n({ ...e, [p]: parseFloat(u ?? "0") });
  }, i = e.ownershipPct ?? 0, a = () => {
    if (r)
      return /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: () => {
            t(e.id);
          },
          className: "w-6 text-left focus:outline-none text-red-400 hover:text-red-500",
          children: /* @__PURE__ */ c.jsx(_n, { className: "inline", width: 20 })
        }
      );
    if (e.id === "UnusedOptionsPool")
      return /* @__PURE__ */ c.jsx("div", { className: "w-6 text-nt84bluedarker dark:text-nt84lightblue", children: /* @__PURE__ */ c.jsx(Tt, { children: /* @__PURE__ */ c.jsxs("div", { className: "max-w-72", children: [
        /* @__PURE__ */ c.jsx("p", { children: "Reserved shares that have yet to be assigned as option grants for team members." }),
        /* @__PURE__ */ c.jsx("i", { children: "[For example, if you have an option plan with 150,000 reserved shares and then granted 50,000 options to team members, your Unissued Option pool would be 100,000.]" })
      ] }) }) });
    if (e.id === "IssuedOptions")
      return /* @__PURE__ */ c.jsx("div", { className: "w-6 text-left text-nt84bluedarker dark:text-nt84lightblue", children: /* @__PURE__ */ c.jsx(Tt, { children: /* @__PURE__ */ c.jsx("div", { className: "max-w-72", children: "Options or shares already issued to other employees, advisors, or shareholders in the company." }) }) });
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
    a(),
    s ? /* @__PURE__ */ c.jsx("div", { className: "w-48 px-3 border-b py-2 border-gray-300 dark:border-gray-700", children: e.name }) : /* @__PURE__ */ c.jsx(
      "input",
      {
        type: "text",
        name: "name",
        autoComplete: "off",
        value: e.name,
        onChange: o,
        placeholder: "Common Shareholder Name",
        className: "w-48 px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
      }
    ),
    /* @__PURE__ */ c.jsx(
      ct,
      {
        type: "text",
        name: "shares",
        value: e.shares,
        onValueChange: l,
        placeholder: "Valuation Cap",
        className: "w-36 px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500",
        prefix: "",
        decimalScale: 0,
        allowDecimals: !1
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "w-24 border-b py-2 border-gray-300 dark:border-gray-700", children: [
      (i * 100).toFixed(2),
      "%"
    ] })
  ] });
}, ca = ({ rows: e, onDelete: t, onUpdate: n, onAddRow: r }) => {
  const s = e.filter(
    (i) => ["UnusedOptionsPool", "IssuedOptions"].indexOf(i.id) === -1
  ), o = e.find((i) => i.id === "IssuedOptions"), l = e.find((i) => i.id === "UnusedOptionsPool");
  return /* @__PURE__ */ c.jsxs("div", { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
      /* @__PURE__ */ c.jsx("div", { className: "w-6" }),
      /* @__PURE__ */ c.jsx("div", { className: "w-48", children: "Name" }),
      /* @__PURE__ */ c.jsx("div", { className: "w-36", children: "Shares" }),
      /* @__PURE__ */ c.jsx("div", { className: "w-24", children: "Ownership %" })
    ] }),
    s.map((i, a) => /* @__PURE__ */ c.jsx(
      bn,
      {
        data: i,
        onUpdate: n,
        onDelete: t,
        allowDelete: e.length > 1
      },
      a
    )),
    o && /* @__PURE__ */ c.jsx(
      bn,
      {
        data: o,
        onUpdate: n,
        onDelete: () => {
        },
        allowDelete: !1,
        disableNameEdit: !0
      }
    ),
    l && /* @__PURE__ */ c.jsx(
      bn,
      {
        data: l,
        onUpdate: n,
        onDelete: () => {
        },
        allowDelete: !1,
        disableNameEdit: !0
      }
    ),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: r,
        className: "ml-10 px-4 py-2 bg-nt84blue text-white hover:bg-nt84bluedarker focus:outline-none focus:ring-blue-500",
        children: "Add another Shareholder"
      }
    )
  ] });
}, rt = (e) => {
  if (typeof e == "number")
    return e;
  {
    const t = e.replace(/[^-\d.]/g, "");
    return t.includes(".") ? parseFloat(t) : parseInt(t, 10);
  }
}, ua = (e) => {
  typeof e == "string" && (e = rt(e));
  const t = e < 1e3 ? 2 : 0;
  return e.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: t
  });
}, Ce = (e) => (typeof e == "string" && (e = rt(e)), e.toLocaleString("en-US", {
  style: "decimal"
})), da = (e) => (typeof e == "string" && (e = rt(e)), e >= 1e6 ? "$" + (e / 1e6).toFixed(1) + "M" : e >= 1e3 ? "$" + (e / 1e3).toFixed(1) + "K" : "$" + e.toString()), pr = Math.pow(10, 5), wn = (e) => Math.round(e * pr) / pr, fa = (e) => {
  const t = e.current, n = e.previous, {
    preMoneyChange: r,
    investmentChange: s,
    targetOptionsChange: o,
    updateInvestmentChange: l,
    updatePreMoneyChange: i,
    updateTargetOptionsChange: a
  } = e, u = t.pricedConversion.totalOptions / t.pricedConversion.totalShares, p = n.pricedConversion.totalOptions / n.pricedConversion.totalShares, d = wn(u - p), h = (y) => {
    if (y === "preMoney") {
      const g = r + 5e5;
      i(g);
    } else if (y === "investment") {
      const g = s + 5e5;
      l(g);
    } else if (y === "options") {
      const g = wn(o + 0.01);
      g < 1 && a(g);
    }
  }, m = (y) => {
    if (y === "preMoney") {
      const g = r - 5e5;
      n.preMoney + g > 0 && i(g);
    } else if (y === "investment") {
      const g = s - 5e5;
      n.totalSeriesInvestment + g > 0 && l(g);
    } else if (y === "options") {
      const g = wn(o - 0.01);
      a(g);
    }
  }, v = {
    postMoney: t.postMoney - n.postMoney,
    pps: t.pricedConversion.pps - n.pricedConversion.pps,
    shares: t.pricedConversion.totalShares - n.pricedConversion.totalShares,
    additionalOptions: t.pricedConversion.additionalOptions - n.pricedConversion.additionalOptions,
    newSharesIssued: t.pricedConversion.newSharesIssued - n.pricedConversion.newSharesIssued,
    dilution: t.totalRoundDilution - n.totalRoundDilution
  };
  return /* @__PURE__ */ c.jsx("div", { className: "pt-2", children: /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-4 gap-4", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col bg-gray-100 p-8 text-center  relative dark:bg-nt84blue dark:text-gray-100", children: [
      /* @__PURE__ */ c.jsx("div", { className: "absolute text-nt84bluedarker dark:text-nt84lightblue top-0 right-0 p-2", children: /* @__PURE__ */ c.jsx(Tt, { children: /* @__PURE__ */ c.jsx("div", { className: "max-w-72", children: "PPS: The Price Per Share (PPS) in a round is calculated by dividing the pre-money valuation by number of pre-money shares" }) }) }),
      /* @__PURE__ */ c.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-200 bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: v.pps !== 0 ? ` (${v.pps > 0 ? "+" : ""}$${Ce(v.pps)})` : "" }),
      /* @__PURE__ */ c.jsx("dt", { className: "text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200", children: "PPS" }),
      /* @__PURE__ */ c.jsxs("dd", { className: "order-first text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-200", children: [
        "$",
        t.pricedConversion.pps.toFixed(5)
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col bg-gray-100 p-8 text-center  relative dark:bg-nt84blue dark:text-gray-100", children: [
      /* @__PURE__ */ c.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-200 bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: v.newSharesIssued !== 0 ? ` (${v.newSharesIssued > 0 ? "+" : ""}${Ce(v.newSharesIssued)})` : "" }),
      /* @__PURE__ */ c.jsx("dt", { className: "text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200", children: "New Shares Issued" }),
      /* @__PURE__ */ c.jsx("dd", { className: "order-first text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-200", children: Ce(t.pricedConversion.newSharesIssued) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col bg-gray-100 p-8 text-center  relative dark:bg-nt84blue dark:text-gray-100", children: [
      /* @__PURE__ */ c.jsx("div", { className: "absolute text-nt84bluedarker dark:text-nt84lightblue top-0 right-0 p-2", children: /* @__PURE__ */ c.jsx(Tt, { children: /* @__PURE__ */ c.jsx("div", { className: "max-w-72", children: "Additional Options: these are the options created as part of the round to expand the option table." }) }) }),
      /* @__PURE__ */ c.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-200 bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: v.additionalOptions !== 0 ? ` (${v.additionalOptions > 0 ? "+" : ""}${Ce(v.additionalOptions)})` : "" }),
      /* @__PURE__ */ c.jsx("dt", { className: "text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200", children: "Additional Options" }),
      /* @__PURE__ */ c.jsx("dd", { className: "order-first text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-200", children: Ce(t.pricedConversion.additionalOptions) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col bg-gray-100 p-8 text-center  relative dark:bg-nt84blue dark:text-gray-100", children: [
      /* @__PURE__ */ c.jsx("div", { className: "absolute text-nt84bluedarker dark:text-nt84lightblue top-0 right-0 p-2", children: /* @__PURE__ */ c.jsx(Tt, { children: /* @__PURE__ */ c.jsx("div", { className: "max-w-72", children: "Total Round Dilution: the percentage reduction in ownership for existing shareholders from a round, calculated as the number of new shares being issued from the transaction divided by the fully diluted shares after the transaction" }) }) }),
      /* @__PURE__ */ c.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-200 bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: v.dilution !== 0 ? ` (${v.dilution > 0 ? "+" : ""}${v.dilution.toFixed(2)})` : "" }),
      /* @__PURE__ */ c.jsx("dt", { className: "text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200", children: "Total Round Dilution" }),
      /* @__PURE__ */ c.jsxs("dd", { className: "order-first text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-200", children: [
        t.totalRoundDilution.toFixed(2),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col bg-gray-100 p-8 text-center  relative dark:bg-nt84blue dark:text-gray-100", children: [
      /* @__PURE__ */ c.jsx("div", { className: "absolute text-nt84bluedarker bottom-0 left-0 p-2 text-xl", children: /* @__PURE__ */ c.jsx(
        "button",
        {
          className: "px-2 mr-2 text-nt84blue dark:text-gray-200",
          name: "decrement",
          onClick: () => m("preMoney"),
          children: "-"
        }
      ) }),
      /* @__PURE__ */ c.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-200 bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: r !== 0 ? ` (${r > 0 ? "+" : ""}$${Ce(t.preMoney - n.preMoney)})` : "" }),
      /* @__PURE__ */ c.jsx("div", { className: "absolute text-nt84bluedarker bottom-0 right-0 p-2 text-xl", children: /* @__PURE__ */ c.jsx(
        "button",
        {
          className: "px-2 mr-2 text-nt84blue dark:text-gray-200",
          name: "increment",
          onClick: () => h("preMoney"),
          children: "+"
        }
      ) }),
      /* @__PURE__ */ c.jsx("dt", { className: "text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200", children: "Pre Money" }),
      /* @__PURE__ */ c.jsx("dd", { className: "order-first text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-200", children: /* @__PURE__ */ c.jsxs("span", { className: "text-xl p-0 m-0", children: [
        "$",
        Ce(t.preMoney)
      ] }) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col bg-gray-100 p-8 text-center  relative dark:bg-nt84blue dark:text-gray-100", children: [
      /* @__PURE__ */ c.jsx("div", { className: "absolute text-nt84bluedarker bottom-0 left-0 p-2 text-xl", children: /* @__PURE__ */ c.jsx(
        "button",
        {
          className: "px-2 mr-2 text-nt84blue dark:text-gray-200",
          name: "decrement",
          onClick: () => m("investment"),
          children: "-"
        }
      ) }),
      /* @__PURE__ */ c.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-200 bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: s !== 0 ? ` (${s > 0 ? "+" : ""}$${Ce(s)})` : "" }),
      /* @__PURE__ */ c.jsx("div", { className: "absolute text-nt84bluedarker bottom-0 right-0 p-2 text-xl", children: /* @__PURE__ */ c.jsx(
        "button",
        {
          className: "px-2 mr-2 text-nt84blue dark:text-gray-200",
          name: "increment",
          onClick: () => h("investment"),
          children: "+"
        }
      ) }),
      /* @__PURE__ */ c.jsx("dt", { className: "text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200", children: "Investment" }),
      /* @__PURE__ */ c.jsx("dd", { className: "order-first text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-200", children: /* @__PURE__ */ c.jsxs("span", { className: "text-xl p-0 m-0", children: [
        "$",
        Ce(t.totalSeriesInvestment)
      ] }) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col bg-gray-100 p-8 text-center  relative dark:bg-nt84blue dark:text-gray-100", children: [
      /* @__PURE__ */ c.jsx("div", { className: "absolute text-nt84bluedarker bottom-0 left-0 p-2 text-xl", children: /* @__PURE__ */ c.jsx(
        "button",
        {
          className: "px-2 mr-2 text-nt84blue dark:text-gray-200",
          name: "decrement",
          onClick: () => m("preMoney"),
          children: "-"
        }
      ) }),
      /* @__PURE__ */ c.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-200 bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: v.postMoney !== 0 ? ` (${v.postMoney > 0 ? "+" : ""}$${Ce(v.postMoney)})` : "" }),
      /* @__PURE__ */ c.jsx("div", { className: "absolute text-nt84bluedarker bottom-0 right-0 p-2 text-xl", children: /* @__PURE__ */ c.jsx(
        "button",
        {
          className: "px-2 mr-2 text-nt84blue dark:text-gray-200",
          name: "increment",
          onClick: () => h("preMoney"),
          children: "+"
        }
      ) }),
      /* @__PURE__ */ c.jsx("dt", { className: "text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200", children: "Post Money" }),
      /* @__PURE__ */ c.jsx("dd", { className: "order-first text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-200", children: /* @__PURE__ */ c.jsxs("span", { className: "text-xl p-0 m-0", children: [
        "$",
        Ce(t.postMoney)
      ] }) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col bg-gray-100 p-8 text-center  relative dark:bg-nt84blue dark:text-gray-100", children: [
      /* @__PURE__ */ c.jsx("div", { className: "absolute text-nt84bluedarker dark:text-nt84lightblue top-0 right-0 p-2", children: /* @__PURE__ */ c.jsx(Tt, { children: "The target percentage of the new options pool, after the priced round" }) }),
      /* @__PURE__ */ c.jsx("div", { className: "absolute text-nt84bluedarker bottom-0 left-0 p-2 text-xl", children: /* @__PURE__ */ c.jsx(
        "button",
        {
          className: "px-2 mr-2 text-nt84blue dark:text-gray-200",
          name: "decrement",
          onClick: () => m("options"),
          children: "-"
        }
      ) }),
      /* @__PURE__ */ c.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-200 bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: o !== 0 ? ` (${o > 0 ? "+" : ""}${d * 100})` : "" }),
      /* @__PURE__ */ c.jsx("div", { className: "absolute text-nt84bluedarker bottom-0 right-0 p-2 text-xl", children: /* @__PURE__ */ c.jsx(
        "button",
        {
          className: "px-2 mr-2 text-nt84blue dark:text-gray-200",
          name: "increment",
          onClick: () => h("options"),
          children: "+"
        }
      ) }),
      /* @__PURE__ */ c.jsx("dt", { className: "text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200", children: "Target Options" }),
      /* @__PURE__ */ c.jsx("dd", { className: "order-first text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-200", children: /* @__PURE__ */ c.jsxs("span", { className: "text-xl p-0 m-0", children: [
        (u * 100).toFixed(2),
        "%"
      ] }) })
    ] })
  ] }) });
}, pa = ({
  data: e,
  onDelete: t,
  onUpdate: n
}) => {
  const r = (o) => {
    const { name: l, value: i } = o.target;
    n({ ...e, [l]: i });
  }, s = (o, l) => {
    l && n({ ...e, [l]: parseFloat(o ?? "0") });
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: () => t(e.id),
        disabled: !e.allowDelete,
        className: `w-6 focus:outline-none focus:ring-2 ${e.allowDelete ? "text-red-400 hover:text-red-500" : "text-gray-500 cursor-not-allowed"}`,
        children: /* @__PURE__ */ c.jsx(_n, { className: "inline", width: 20 })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "input",
      {
        type: "text",
        name: "name",
        autoComplete: "off",
        value: e.name,
        onChange: r,
        placeholder: "Series Investor Name",
        className: "w-72 px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500"
      }
    ),
    /* @__PURE__ */ c.jsx(
      ct,
      {
        type: "text",
        name: "investment",
        value: e.investment,
        onValueChange: s,
        placeholder: "Investment",
        autoComplete: "off",
        className: "w-32 px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500",
        prefix: "$",
        decimalScale: 0
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "w-24 text-right", children: [
      e.ownershipPct.toFixed(2),
      "%"
    ] })
  ] });
}, ma = ({
  rows: e,
  onDelete: t,
  onUpdate: n,
  onAddRow: r
}) => /* @__PURE__ */ c.jsxs("div", { children: [
  /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
    /* @__PURE__ */ c.jsx("div", { className: "w-6" }),
    /* @__PURE__ */ c.jsx("div", { className: "w-72", children: "Name" }),
    /* @__PURE__ */ c.jsx("div", { className: "w-32", children: "Investment" }),
    /* @__PURE__ */ c.jsx("div", { className: "w-24 text-right", children: "Ownership %" })
  ] }),
  e.map((s, o) => /* @__PURE__ */ c.jsx(
    pa,
    {
      data: s,
      onUpdate: n,
      onDelete: t
    },
    o
  )),
  /* @__PURE__ */ c.jsx(
    "button",
    {
      onClick: r,
      className: "ml-10 px-4 py-2  bg-nt84blue text-white hover:bg-nt84bluedarker focus:outline-none focus:ring-blue-500",
      children: "Add another Series Investor"
    }
  )
] });
var ha = (e, t, n) => {
  if (t.length === 1 && t[0] === n) {
    let r = !1;
    try {
      const s = {};
      e(s) === s && (r = !0);
    } catch {
    }
    if (r) {
      let s;
      try {
        throw new Error();
      } catch (o) {
        ({ stack: s } = o);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: s }
      );
    }
  }
}, va = (e, t, n) => {
  const { memoize: r, memoizeOptions: s } = t, { inputSelectorResults: o, inputSelectorResultsCopy: l } = e, i = r(() => ({}), ...s);
  if (!(i.apply(null, o) === i.apply(null, l))) {
    let u;
    try {
      throw new Error();
    } catch (p) {
      ({ stack: u } = p);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: o,
        secondInputs: l,
        stack: u
      }
    );
  }
}, ya = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function xa(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function ga(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function ba(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var mr = (e) => Array.isArray(e) ? e : [e];
function wa(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return ba(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function hr(e, t) {
  const n = [], { length: r } = e;
  for (let s = 0; s < r; s++)
    n.push(e[s].apply(null, t));
  return n;
}
var Sa = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: r } = {
    ...ya,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: ha
    },
    inputStabilityCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: va
    }
  };
}, Ea = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, ja = typeof WeakRef < "u" ? WeakRef : Ea, Ra = 0, vr = 1;
function Jt() {
  return {
    s: Ra,
    v: void 0,
    o: null,
    p: null
  };
}
function zr(e, t = {}) {
  let n = Jt();
  const { resultEqualityCheck: r } = t;
  let s, o = 0;
  function l() {
    var d;
    let i = n;
    const { length: a } = arguments;
    for (let h = 0, m = a; h < m; h++) {
      const v = arguments[h];
      if (typeof v == "function" || typeof v == "object" && v !== null) {
        let y = i.o;
        y === null && (i.o = y = /* @__PURE__ */ new WeakMap());
        const g = y.get(v);
        g === void 0 ? (i = Jt(), y.set(v, i)) : i = g;
      } else {
        let y = i.p;
        y === null && (i.p = y = /* @__PURE__ */ new Map());
        const g = y.get(v);
        g === void 0 ? (i = Jt(), y.set(v, i)) : i = g;
      }
    }
    const u = i;
    let p;
    if (i.s === vr)
      p = i.v;
    else if (p = e.apply(null, arguments), o++, r) {
      const h = ((d = s == null ? void 0 : s.deref) == null ? void 0 : d.call(s)) ?? s;
      h != null && r(h, p) && (p = h, o !== 0 && o--), s = typeof p == "object" && p !== null || typeof p == "function" ? new ja(p) : p;
    }
    return u.s = vr, u.v = p, p;
  }
  return l.clearCache = () => {
    n = Jt(), l.resetResultsCount();
  }, l.resultsCount = () => o, l.resetResultsCount = () => {
    o = 0;
  }, l;
}
function Ca(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...s) => {
    let o = 0, l = 0, i, a = {}, u = s.pop();
    typeof u == "object" && (a = u, u = s.pop()), xa(
      u,
      `createSelector expects an output function after the inputs, but received: [${typeof u}]`
    );
    const p = {
      ...n,
      ...a
    }, {
      memoize: d,
      memoizeOptions: h = [],
      argsMemoize: m = zr,
      argsMemoizeOptions: v = [],
      devModeChecks: y = {}
    } = p, g = mr(h), j = mr(v), E = wa(s), w = d(function() {
      return o++, u.apply(
        null,
        arguments
      );
    }, ...g);
    let S = !0;
    const O = m(function() {
      l++;
      const R = hr(
        E,
        arguments
      );
      if (i = w.apply(null, R), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: _, inputStabilityCheck: M } = Sa(S, y);
        if (_.shouldRun && _.run(
          u,
          R,
          i
        ), M.shouldRun) {
          const G = hr(
            E,
            arguments
          );
          M.run(
            { inputSelectorResults: R, inputSelectorResultsCopy: G },
            { memoize: d, memoizeOptions: g },
            arguments
          );
        }
        S && (S = !1);
      }
      return i;
    }, ...j);
    return Object.assign(O, {
      resultFunc: u,
      memoizedResultFunc: w,
      dependencies: E,
      dependencyRecomputations: () => l,
      resetDependencyRecomputations: () => {
        l = 0;
      },
      lastResult: () => i,
      recomputations: () => o,
      resetRecomputations: () => {
        o = 0;
      },
      memoize: d,
      argsMemoize: m
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Xe = /* @__PURE__ */ Ca(zr), Oa = Object.assign(
  (e, t = Xe) => {
    ga(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (o) => e[o]
    );
    return t(
      r,
      (...o) => o.reduce((l, i, a) => (l[n[a]] = i, l), {})
    );
  },
  { withTypes: () => Oa }
);
const bt = (e, t) => t.roundDownShares ? Math.floor(e) : t.roundShares ? Math.round(e) : e, In = (e, t) => {
  if (t < 0)
    return e;
  const n = Math.pow(10, t);
  return Math.ceil(e * n) / n;
}, ti = (e, t) => {
  if (t < 0)
    return e;
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}, Ln = (e) => {
  var t;
  return !!(e.conversionType === "mfn" || e.conversionType === "ycmfn" || (t = e.sideLetters) != null && t.includes("mfn"));
}, _a = (e, t) => e.slice(t + 1).reduce((n, r) => Ln(r) || r.conversionType === "pre" ? n : n === 0 || n > 0 && r.cap > 0 && r.cap < n ? r.cap : n, 0) ?? 0, Kr = (e, t) => {
  const n = t[e];
  return Ln(n) ? _a(t, e) : n.cap;
}, qr = (e) => e.map((t, n) => {
  if (Ln(t)) {
    const r = Kr(n, e);
    return { ...t, cap: r };
  }
  return { ...t };
}), Gr = (e, t, n, r, s) => Na(
  e.map((o) => {
    const l = In(Hr(o, n, r, t), s.roundPPSPlaces), i = o.investment / l;
    return bt(i, s);
  })
), Hr = (e, t, n, r) => {
  if (e.cap === 0)
    return (1 - e.discount) * r;
  const s = (1 - e.discount) * r, o = e.conversionType === "pre" ? t : n, l = e.cap / o;
  return Math.min(s, l);
}, Na = (e) => e.reduce((t, n) => t + n, 0), Ta = (e) => {
  let t;
  return e.forEach((n) => {
    n.investment >= n.cap && n.cap !== 0 && (t = {
      type: "error",
      reason: "Investment is greater than Cap"
    });
  }), t;
}, cn = {
  roundDownShares: !0,
  roundPPSPlaces: 5
}, rn = (e) => e.reduce((t, n) => t + n, 0), Yr = (e, t, n, r, s, o, l = cn) => {
  let i = bt(o * r, l);
  i < n && (i = n);
  const a = i - n, u = rn(s.map((v) => v)), p = In((e + u) / o, l.roundPPSPlaces), d = rn(
    s.map(
      (v) => bt(v / p, l)
    )
  ), h = t + n + a, m = o - d - a;
  return {
    preMoneyShares: h,
    postMoneyShares: m,
    pps: p,
    optionsPool: i,
    increaseInOptionsPool: a,
    totalShares: m + a + d,
    // We need to take into account the rounding of the Series shares
    seriesShares: d
    // Helpful for debugging
  };
}, ka = (e, t, n, r, s, o, l, i = cn) => {
  const a = Yr(e, t, n, r, o, l, i), u = Gr(
    s,
    a.pps,
    a.preMoneyShares,
    a.postMoneyShares,
    i
  );
  return a.seriesShares + t + a.optionsPool + u;
}, Aa = (e, t, n, r, s, o, l = cn) => {
  let i = t + r, a = i;
  for (let j = 0; j < 100 && (i = ka(
    e,
    t,
    r,
    s,
    n,
    o,
    i,
    l
  ), i !== a); j++)
    a = i;
  const {
    pps: u,
    preMoneyShares: p,
    postMoneyShares: d,
    increaseInOptionsPool: h,
    seriesShares: m
  } = Yr(e, t, r, s, o, i, l), v = Gr(
    n,
    u,
    p,
    d,
    l
  ), y = Array(n.length).fill(u);
  for (const [j, E] of Array.from(n.entries()))
    y[j] = In(Hr(E, p, d, u), l.roundPPSPlaces);
  const g = rn(o) + n.reduce((j, E) => j + E.investment, 0);
  return {
    pps: u,
    ppss: y,
    totalShares: i,
    newSharesIssued: i - t - r,
    preMoneyShares: p,
    postMoneyShares: d,
    convertedSafeShares: v,
    seriesShares: m,
    additionalOptions: h,
    totalOptions: h + r,
    totalInvested: g,
    totalSeriesInvestment: rn(o),
    roundingStrategy: l
  };
}, Pa = (e, t) => {
  const n = e.reduce((i, a) => i + a.investment, 0), r = t.reduce((i, a) => i + a.shares, 0), s = {
    type: "tbd",
    reason: "Unable to model Pre-Round cap table with uncapped SAFE's"
  }, o = e.map((i) => ({
    name: i.name,
    cap: i.cap,
    discount: i.discount,
    ownershipError: {
      type: "tbd",
      reason: "Unable to model Pre-Round cap table with uncapped SAFE's"
    },
    investment: i.investment,
    type: C.Safe
  }));
  return {
    common: t.map((i) => ({
      name: i.name,
      shares: i.shares,
      ownershipError: s,
      type: C.Common,
      commonType: i.commonType
    })),
    safes: o,
    total: {
      name: "Total",
      // In a pre-round cap table, the total shares are just the common shares since we can't know the PPS yet
      shares: r,
      investment: n,
      ownershipPct: 1,
      type: C.Total
    }
  };
}, Jr = (e, t) => {
  const n = e.reduce((i, a) => i + a.investment, 0), r = t.reduce((i, a) => i + a.shares, 0), s = {
    type: "error"
  }, o = e.map((i) => {
    const a = { ...s };
    return i.investment >= i.cap && i.cap !== 0 && (a.reason = "SAFE's investment cannot equal or exceed the Cap"), {
      name: i.name,
      cap: i.cap,
      discount: i.discount,
      ownershipError: a,
      investment: i.investment,
      type: C.Safe
    };
  });
  return {
    common: t.map((i) => ({
      name: i.name,
      shares: i.shares,
      ownershipError: s,
      type: C.Common,
      commonType: i.commonType
    })),
    safes: o,
    total: {
      name: "Total",
      // In a pre-round cap table, the total shares are just the common shares since we can't know the PPS yet
      shares: r,
      investment: n,
      ownershipPct: 1,
      type: C.Total
    }
  };
}, Da = (e, t = cn) => {
  const n = e.filter((m) => m.type === C.Common), r = n.reduce((m, v) => m + v.shares, 0), s = qr(e.filter((m) => m.type === C.Safe));
  if (s.some((m) => m.cap !== 0 && m.cap <= m.investment))
    return Jr(s, [...n]);
  const o = s.reduce((m, v) => Math.max(m, v.cap), 0);
  if (o === 0)
    return Pa(s, [...n]);
  const l = [...s].reduce((m, v) => m + v.investment, 0);
  let i = s.map((m) => {
    if (m.conversionType === "pre") {
      const v = m.cap === 0 ? o : m.cap, y = bt(m.investment / v * r, t);
      return {
        name: m.name,
        cap: m.cap,
        discount: m.discount,
        shares: y,
        sideLetters: m.sideLetters,
        investment: m.investment,
        type: C.Safe
      };
    } else
      return {
        name: m.name,
        cap: m.cap,
        discount: m.discount,
        sideLetters: m.sideLetters,
        ownershipPct: m.investment / (m.cap === 0 ? o : m.cap),
        investment: m.investment,
        type: C.Safe
      };
  });
  const a = i.reduce((m, v) => m + (v.shares ?? 0), 0), u = i.reduce((m, v) => m + (v.ownershipPct ?? 0), 0), p = bt((r + a) / (1 - u), t);
  i = i.map((m) => {
    if (m.shares && m.shares > 0) {
      const v = m.shares / p;
      return {
        name: m.name,
        cap: m.cap,
        discount: m.discount,
        shares: m.shares,
        ownershipPct: v,
        sideLetters: m.sideLetters,
        investment: m.investment,
        type: C.Safe
      };
    } else
      return {
        ...m,
        shares: bt((m.ownershipPct ?? 0) * p, t)
      };
  }), i = i.map((m) => {
    if (m.cap === 0) {
      let v = `No cap set for this SAFE, ownership based on max cap of all other SAFE's. Currently set to ${ua(o)}.`;
      return m.discount > 0 && (v = v + " It is not possible to calculate ownership with a discount until a priced round is entered."), {
        ...m,
        ownershipError: {
          type: "caveat",
          reason: v
        }
      };
    } else {
      if (m.discount > 0)
        return {
          ...m,
          ownershipError: {
            type: "caveat",
            reason: "It is not possible to calculate ownership with a discount until a priced round is entered"
          }
        };
      if (m.sideLetters && m.sideLetters.includes("mfn"))
        return {
          ...m,
          ownershipError: {
            type: "caveat",
            reason: "For an Uncapped MFN the cap is set to the lowest cap in subsequent SAFE's. You can re-order the SAFEs using the reorder button on the left."
          }
        };
    }
    return m;
  });
  const d = n.map((m) => ({
    name: m.name,
    shares: m.shares,
    ownershipPct: m.shares / p,
    type: C.Common,
    commonType: m.commonType
  })), h = r + i.reduce((m, v) => m + (v.shares ?? 0), 0);
  return {
    common: d,
    safes: i,
    total: {
      name: "Total",
      // In a pre-round cap table, the total shares are just the common shares since we can't know the PPS yet
      shares: h,
      investment: l,
      ownershipPct: 1,
      type: C.Total
    }
  };
}, Ia = (e, t) => {
  const n = t.filter((a) => a.type === C.Common), r = qr(t.filter((a) => a.type === C.Safe)), s = e.totalShares - e.seriesShares - e.additionalOptions, o = [...r].reduce((a, u) => a + u.investment, 0);
  if (Ta(r))
    return Jr(r, n);
  const l = n.map((a) => ({
    name: a.name,
    shares: a.shares,
    ownershipPct: a.shares / s,
    type: C.Common,
    commonType: a.commonType
  })), i = r.map((a, u) => {
    const p = e.ppss[u], d = bt(a.investment / p, e.roundingStrategy), h = d / s;
    return {
      name: a.name,
      investment: a.investment,
      ownershipPct: h,
      discount: a.discount,
      cap: a.cap,
      shares: d,
      type: C.Safe,
      pps: p
    };
  });
  return {
    common: l,
    safes: i,
    total: {
      name: "Total",
      // In a pre-round cap table, the total shares are just the common shares since we can't know the PPS yet
      shares: s,
      investment: o,
      ownershipPct: 1,
      type: C.Total
    }
  };
}, yr = (e, t) => {
  const n = t.filter((d) => d.type === C.Common && d.commonType !== jt.UnusedOptions), r = t.filter((d) => d.type === C.Safe), s = t.filter((d) => d.type === C.Series), o = e.totalShares, l = [...s, ...r].reduce((d, h) => d + h.investment, 0), i = n.map((d) => ({
    name: d.name,
    shares: d.shares,
    ownershipPct: d.shares / o,
    type: C.Common,
    commonType: d.commonType
  })), a = r.map((d, h) => {
    const m = e.ppss[h] || 0, v = bt(d.investment / m, e.roundingStrategy), y = v / o;
    return {
      name: d.name,
      investment: d.investment,
      ownershipPct: y,
      discount: d.discount,
      cap: d.cap,
      shares: v,
      type: C.Safe,
      pps: m
    };
  }), u = s.map((d) => {
    const h = bt(d.investment / e.pps, e.roundingStrategy);
    return {
      name: d.name,
      investment: d.investment,
      shares: h,
      ownershipPct: h / o,
      pps: e.pps,
      type: C.Series
    };
  }), p = {
    name: "Refreshed Options Pool",
    shares: e.totalOptions,
    ownershipPct: e.totalOptions / o,
    type: C.RefreshedOptions
  };
  return {
    common: i,
    safes: a,
    series: u,
    refreshedOptionsPool: p,
    total: {
      name: "Total",
      // In a pre-round cap table, the total shares are just the common shares since we can't know the PPS yet
      shares: o,
      investment: l,
      ownershipPct: 1,
      type: C.Total
    },
    error: void 0
  };
}, La = (e) => {
  const t = e.reduce((n, r) => n + r.shares, 0);
  return e.map((n) => ({
    id: n.id,
    name: n.name,
    shares: n.shares,
    ownershipPct: n.shares / t,
    type: C.Common,
    commonType: n.commonType
  }));
}, xr = (e) => {
  const t = e.filter((s) => s.type === C.Common).map(
    (s) => ({
      id: s.id,
      name: s.name ?? "",
      shares: s.shares,
      type: C.Common,
      commonType: jt.Shareholder
    })
  ), n = e.filter((s) => s.type === C.Safe).map(
    (s) => {
      const o = s.conversionType === "mfn" || s.conversionType === "post" ? "post" : "pre";
      return {
        id: s.id,
        name: s.name ?? "",
        investment: s.investment,
        cap: s.cap ?? 0,
        discount: s.discount ?? 0,
        conversionType: o,
        sideLetters: s.conversionType === "mfn" ? ["mfn"] : [],
        type: C.Safe
      };
    }
  ), r = e.filter((s) => s.type === C.Series).map(
    (s) => ({
      id: s.id,
      name: s.name ?? "",
      investment: s.investment,
      type: C.Series,
      round: 1
    })
  );
  return [...t, ...n, ...r];
}, Wt = Xe(
  (e) => e.rowData,
  (e) => e.preMoney,
  (e) => e.targetOptionsPool,
  (e) => e.unusedOptions,
  (e) => e.pricedRounds,
  (e, t, n, r, s) => {
    if (s === 0)
      return;
    const l = e.filter(
      (u) => u.type === C.Common
    ).map((u) => u.shares).reduce((u, p) => u + p, 0), i = e.filter((u) => u.type === C.Safe);
    return Aa(
      rt(t),
      l,
      i.map(
        (u, p) => {
          const d = Kr(p, i), h = u.conversionType === "pre" ? "pre" : "post";
          return {
            investment: rt(u.investment),
            cap: d,
            discount: rt(u.discount ?? 0) / 100,
            conversionType: h,
            type: C.Safe
          };
        }
      ),
      rt(r),
      rt(n) / 100,
      e.filter((u) => u.type === C.Series).map(
        (u) => u.investment
      ),
      { roundShares: !0, roundPPSPlaces: 8 }
    );
  }
), Xr = Xe(
  Wt,
  (e) => e.rowData,
  (e) => e.preMoney,
  (e) => e.unusedOptions,
  (e) => e.targetOptionsPool,
  (e) => e.preMoneyChange,
  (e) => e.investmentChange,
  (e) => e.targetOptionsChange,
  (e, t, n, r, s, o, l, i) => {
    if (!e)
      throw new Error("Can't use this selector on unpriced round");
    l = l ?? 0, o = o ?? 0, i = i ?? 0;
    let a = null, u = t;
    if (l !== 0 || o !== 0 || i !== 0) {
      const p = t.filter((v) => v.type === C.Series).map((v) => v.investment).reduce((v, y) => v + y, 0), d = t.map((v) => v.type === C.Series ? l * (v.investment / p) : 0);
      u = t.map((v, y) => v.type === C.Series ? {
        ...v,
        investment: v.investment + d[y]
      } : v);
      const m = {
        preMoney: n + o,
        targetOptionsPool: s + i * 100,
        unusedOptions: r,
        rowData: u
      };
      a = Wt(m);
    }
    return {
      currentPricedRound: a ?? e,
      previousPricedRound: a ? e : void 0,
      rowData: u
    };
  }
), Ma = Xe(
  Xr,
  (e) => e.rowData,
  (e, t) => {
    const n = e.rowData, r = xr(n), s = xr(t), o = yr(e.currentPricedRound, r), l = e.previousPricedRound ? yr(e.previousPricedRound, s) : null, { common: i, safes: a, series: u, refreshedOptionsPool: p, total: d } = o, h = [...i, ...a, ...u, p], m = [];
    return l && [...l.common, ...l.safes, ...l.series, l.refreshedOptionsPool].map((y, g) => {
      m.push((h[g].ownershipPct ?? 0) - (y.ownershipPct ?? 0));
    }), {
      totalRow: d,
      changes: m,
      rows: h.map((v) => {
        if (v.type === C.Safe)
          return {
            name: v.name ?? "",
            shares: v.shares,
            investment: v.investment,
            pps: v.pps,
            cap: v.cap,
            discount: v.discount,
            type: v.type,
            ownershipPct: (v.ownershipPct ?? 0) * 100
          };
        if (v.type === C.Series) {
          const y = v.pps, g = v.investment;
          return {
            name: v.name ?? "",
            shares: v.shares,
            investment: g,
            pps: y,
            type: v.type,
            ownershipPct: (v.ownershipPct ?? 0) * 100
          };
        }
        if (v.type === C.Common)
          return {
            name: v.name ?? "",
            shares: v.shares,
            type: v.type,
            ownershipPct: (v.ownershipPct ?? 0) * 100,
            commonType: v.commonType
          };
        if (v.type === C.RefreshedOptions)
          return {
            name: v.name ?? "",
            shares: v.shares,
            type: v.type,
            ownershipPct: (v.ownershipPct ?? 0) * 100
          };
        throw new Error("Unknown row type");
      })
    };
  }
), Fa = Xe(
  Xr,
  (e) => e.preMoney,
  (e) => e.preMoneyChange,
  (e) => e.investmentChange,
  (e) => e.targetOptionsChange,
  (e, t, n, r, s) => {
    const o = e.currentPricedRound, l = e.previousPricedRound, i = t + (n ?? 0), a = t, u = {
      preMoney: i,
      postMoney: i + o.totalSeriesInvestment,
      totalShares: o.totalShares,
      newSharesIssued: o.newSharesIssued,
      totalInvestedToDate: o.totalInvested,
      totalSeriesInvestment: o.totalSeriesInvestment,
      totalRoundDilution: o.newSharesIssued / o.totalShares * 100,
      pricedConversion: o
    }, p = l ? {
      preMoney: t,
      postMoney: a + l.totalSeriesInvestment,
      totalShares: l.totalShares,
      newSharesIssued: l.newSharesIssued,
      totalInvestedToDate: l.totalInvested,
      totalSeriesInvestment: l.totalSeriesInvestment,
      totalRoundDilution: l.newSharesIssued / l.totalShares * 100,
      pricedConversion: l
    } : void 0;
    return {
      current: u,
      previous: p || u,
      preMoneyChange: n ?? 0,
      investmentChange: r ?? 0,
      targetOptionsChange: s ?? 0
    };
  }
), Zr = Xe(
  Wt,
  (e) => e.rowData,
  (e) => e.unusedOptions,
  (e, t, n) => {
    const r = t.filter((a) => a.type === C.Common).map(
      (a) => ({
        name: a.name ?? "",
        shares: a.shares,
        type: C.Common,
        commonType: jt.Shareholder
      })
    );
    r.push({
      name: "Unused Options Pool",
      shares: n,
      type: C.Common,
      commonType: jt.UnusedOptions
    });
    const s = t.filter((a) => a.type === C.Safe).map(
      (a) => {
        const u = a.conversionType === "mfn" || a.conversionType === "post" ? "post" : "pre";
        return {
          name: a.name ?? "",
          investment: a.investment,
          cap: a.cap ?? 0,
          discount: a.discount ?? 0,
          conversionType: u,
          sideLetters: a.conversionType === "mfn" ? ["mfn"] : [],
          type: C.Safe
        };
      }
    ), { common: o, safes: l, total: i } = e ? Ia(e, [...r, ...s]) : Da([...r, ...s]);
    return {
      totalRow: i,
      changes: [],
      rows: [...o, ...l].map((a) => a.type === C.Common ? {
        id: a.id ?? "",
        name: a.name ?? "",
        shares: a.shares,
        type: a.type,
        ownershipPct: (a.ownershipPct ?? 0) * 100,
        ownershipError: a.ownershipError,
        commonType: a.commonType
      } : {
        id: a.id ?? "",
        name: a.name ?? "",
        shares: a.shares,
        investment: a.investment,
        pps: a.pps ?? 0,
        discount: a.discount,
        cap: a.cap,
        type: a.type,
        ownershipPct: (a.ownershipPct ?? 0) * 100,
        ownershipError: a.ownershipError
      })
    };
  }
), Va = (e) => e.conversionType === "mfn" ? ["cap"] : e.conversionType === "ycmfn" ? ["cap"] : [], Qr = Xe(
  Zr,
  (e) => e.rowData,
  (e, t) => {
    const n = t.filter((s) => s.type === C.Safe), r = e.rows.filter((s) => s.type === C.Safe);
    return n.map((s, o) => ({
      id: s.id,
      type: C.Safe,
      name: s.name,
      investment: s.investment,
      cap: r[o].cap ?? s.cap,
      discount: s.discount,
      shares: 0,
      ownershipPct: r[o].ownershipPct,
      ownershipError: r[o].ownershipError,
      allowDelete: !0,
      disabledFields: Va(s),
      conversionType: s.conversionType
    }));
  }
), $a = Xe(
  Wt,
  (e) => e.rowData,
  (e, t) => {
    const n = t.filter((r) => r.type === C.Series);
    if (!e) throw new Error("Priced conversion not found");
    return n.map((r) => {
      const s = Math.floor(r.investment / e.pps), o = s / e.totalShares * 100;
      return {
        id: r.id,
        type: C.Series,
        name: r.name,
        investment: r.investment,
        shares: s,
        ownershipPct: o,
        pps: e.pps,
        allowDelete: n.length > 1
      };
    });
  }
), Vt = ({ content: e, children: t }) => {
  const n = we(`tooltip-${crypto.randomUUID()}`);
  return /* @__PURE__ */ c.jsxs("span", { className: "inline", children: [
    /* @__PURE__ */ c.jsx(
      "span",
      {
        className: "inline",
        "data-tooltip-id": n.current,
        children: t
      }
    ),
    /* @__PURE__ */ c.jsx(Ur, { id: n.current, place: "top", clickable: !0, children: /* @__PURE__ */ c.jsx("div", { className: "max-w-72", children: e }) })
  ] });
}, Ba = ({ pct: e, note: t, error: n }) => n === "caveat" ? /* @__PURE__ */ c.jsxs(Vt, { content: t ?? "", children: [
  e.toFixed(2),
  "%",
  t && /* @__PURE__ */ c.jsx("sup", { children: "*" })
] }) : n === "tbd" ? /* @__PURE__ */ c.jsxs(Vt, { content: t ?? "", children: [
  "TBD",
  t && /* @__PURE__ */ c.jsx("sup", { children: "*" })
] }) : n === "error" ? /* @__PURE__ */ c.jsxs(Vt, { content: t ?? "", children: [
  "Error",
  t && /* @__PURE__ */ c.jsx("sup", { children: "*" })
] }) : e.toFixed(2) + "%", Wa = ({
  data: e,
  isHovered: t = !1,
  isDragging: n = !1,
  onDelete: r,
  onUpdate: s,
  onDragStart: o,
  onDragOver: l,
  onDrop: i
}) => {
  var v, y, g, j, E;
  const a = (w) => {
    const { name: S, value: O } = w.target;
    s({ ...e, [S]: O });
  }, u = (w) => {
    const { name: S, value: O } = w.target;
    s({ ...e, [S]: O });
  }, p = (w, S) => {
    S && s({ ...e, [S]: parseFloat(w ?? "0") });
  }, d = () => e.conversionType === "yc7p" ? "post" : e.conversionType === "ycmfn" ? "mfn" : e.conversionType, h = (w) => {
    w.dataTransfer.setData("text/plain", e.id), o(w, e.id);
  }, m = (w) => {
    w.preventDefault(), l(w, e.id);
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: `flex items-center space-x-4 ${t ? "mb-16" : "mb-4"} ${n ? "opacity-50" : ""}`,
      draggable: !0,
      onDragStart: h,
      onDragOver: m,
      onDragEnd: (w) => {
        i(w, e.id);
      },
      onDrop: (w) => {
        const S = w.dataTransfer.getData("text/plain");
        i(w, S);
      },
      children: [
        /* @__PURE__ */ c.jsx(
          "button",
          {
            className: "w-6 focus:outline-none focus:ring-2 cursor-move",
            children: /* @__PURE__ */ c.jsx(is, { className: "inline", width: 20 })
          }
        ),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: () => r(e.id),
            disabled: !e.allowDelete,
            className: `w-6 focus:outline-none focus:ring-2 ${e.allowDelete ? "text-red-400 hover:text-red-500" : "text-gray-500 cursor-not-allowed"}`,
            children: /* @__PURE__ */ c.jsx(_n, { className: "inline", width: 20 })
          }
        ),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "text",
            name: "name",
            autoComplete: "off",
            value: e.name,
            onChange: a,
            placeholder: "Name",
            className: "w-48 px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500"
          }
        ),
        (v = e.disabledFields) != null && v.includes("investment") ? /* @__PURE__ */ c.jsxs("div", { className: "w-36 px-3 border-b py-2 border-gray-300 dark:border-gray-700", children: [
          "$",
          Ce(e.investment)
        ] }) : /* @__PURE__ */ c.jsx(
          ct,
          {
            type: "text",
            name: "investment",
            value: e.investment,
            onValueChange: p,
            placeholder: "Investment",
            autoComplete: "off",
            className: "w-36 px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500",
            prefix: "$",
            allowDecimals: !1
          }
        ),
        (y = e.disabledFields) != null && y.includes("cap") ? /* @__PURE__ */ c.jsxs("div", { className: "w-36 px-3 border-b py-2 border-gray-300 dark:border-gray-700", children: [
          "$",
          Ce(Math.round(e.cap ?? 0))
        ] }) : /* @__PURE__ */ c.jsx(
          ct,
          {
            type: "text",
            name: "cap",
            value: e.cap,
            onValueChange: p,
            placeholder: "Valuation Cap",
            autoComplete: "off",
            className: "w-36 px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500",
            prefix: "$",
            decimalScale: 0,
            allowDecimals: !0
          }
        ),
        (g = e.disabledFields) != null && g.includes("discount") ? /* @__PURE__ */ c.jsxs("div", { className: "w-28 px-3 border-b py-2 border-gray-300 dark:border-gray-700", children: [
          e.discount,
          "%"
        ] }) : /* @__PURE__ */ c.jsx(
          ct,
          {
            type: "text",
            name: "discount",
            value: e.discount ?? "0",
            onValueChange: p,
            placeholder: "Discount %",
            className: "w-28 px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500",
            autoComplete: "off",
            prefix: "",
            suffix: "%",
            decimalScale: 0,
            max: 99,
            maxLength: 2,
            allowDecimals: !1
          }
        ),
        (e.discount ?? 0) > 99 && /* @__PURE__ */ c.jsx("p", { className: "text-red-500", children: "Invalid discount" }),
        /* @__PURE__ */ c.jsxs(
          "select",
          {
            name: "conversionType",
            value: d(),
            onChange: u,
            className: "w-36 px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500",
            children: [
              /* @__PURE__ */ c.jsx("option", { value: "post", children: "Post Money" }),
              /* @__PURE__ */ c.jsx("option", { value: "pre", children: "Pre Money" }),
              /* @__PURE__ */ c.jsx("option", { value: "mfn", children: "Uncapped MFN" })
            ]
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: "w-24 border-b py-2 border-gray-300 dark:border-gray-700", children: /* @__PURE__ */ c.jsx(Ba, { pct: e.ownershipPct ?? 0, note: (j = e.ownershipError) == null ? void 0 : j.reason, error: (E = e.ownershipError) == null ? void 0 : E.type }) })
      ]
    }
  );
}, Ua = ({
  rows: e,
  onDelete: t,
  onUpdate: n,
  onAddRow: r,
  onMoveRow: s
}) => {
  const [o, l] = W(null), [i, a] = W(null), u = (h, m) => {
    l(m);
  }, p = (h, m) => {
    a(m);
  }, d = () => {
    o && i && o !== i && (s == null || s(o, i));
  };
  return q(() => {
    const h = () => {
      a(null), l(null);
    };
    return window.addEventListener("dragend", h), () => {
      window.removeEventListener("dragend", h);
    };
  }, []), /* @__PURE__ */ c.jsxs("div", { className: "not-prose", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
      /* @__PURE__ */ c.jsx("div", { className: "w-16", children: " " }),
      /* @__PURE__ */ c.jsx("div", { className: "w-48", children: "Name" }),
      /* @__PURE__ */ c.jsx("div", { className: "w-36", children: "Investment" }),
      /* @__PURE__ */ c.jsx("div", { className: "w-36", children: "Cap" }),
      /* @__PURE__ */ c.jsx("div", { className: "w-28", children: /* @__PURE__ */ c.jsxs(
        Vt,
        {
          content: "Discount to the price of the next round when available (typically 0%-25%).  Note that the actual Post Money Safe uses a Discount Rate which is (1 - Discount). So if the Safe has a Discount Rate of 80% then the Discount is 20% and you should enter 20%",
          children: [
            "Discount",
            /* @__PURE__ */ c.jsx("sup", { children: "?" })
          ]
        }
      ) }),
      /* @__PURE__ */ c.jsx("div", { className: "w-36", children: "Type" }),
      /* @__PURE__ */ c.jsx("div", { className: "w-24", children: "Ownership %" })
    ] }),
    e.map((h, m) => /* @__PURE__ */ c.jsx(
      Wa,
      {
        data: h,
        isDragging: o === h.id,
        isHovered: i === h.id && o !== h.id,
        onUpdate: n,
        onDelete: t,
        onDragStart: u,
        onDragOver: p,
        onDrop: d
      },
      m
    )),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: r,
        className: "ml-10 px-4 py-2  bg-nt84blue text-white hover:bg-nt84bluedarker focus:outline-none focus:ring-blue-500",
        children: "Add another SAFE"
      }
    )
  ] });
};
async function za(e) {
  return "clipboard" in navigator ? await navigator.clipboard.writeText(e) : document.execCommand("copy", !0, e);
}
const Ka = ({ url: e }) => {
  const [t, n] = W(!1), [r, s] = W(!1), o = we(e), l = we(!1);
  o.current !== e && (o.current = e, l.current = !0);
  const i = () => {
    setTimeout(() => {
      n(!1);
    }, 2500), za(e), n(!0), l.current = !1;
  }, a = () => l.current ? /* @__PURE__ */ c.jsxs("span", { children: [
    "Share",
    /* @__PURE__ */ c.jsx("span", { className: "inline", children: /* @__PURE__ */ c.jsx(cs, { className: "inline pl-2", width: 20 }) })
  ] }) : t ? "Copied!" : /* @__PURE__ */ c.jsxs("span", { children: [
    "Share",
    /* @__PURE__ */ c.jsx("span", { className: "inline", children: /* @__PURE__ */ c.jsx(ds, { className: "inline pl-2", width: 20 }) })
  ] }), u = (p) => {
    p.target.select();
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "", children: [
    /* @__PURE__ */ c.jsx(
      "button",
      {
        className: `w-28 px-4 py-2  focus:outline-none focus:ring-2 text-white  ${l.current ? "bg-nt84orange hover:bg-nt84orangedarker focus:ring-nt84orangedarker" : "bg-gray-400 hover:bg-gray-500 focus:ring-gray-300"}`,
        onClick: () => s(!0),
        children: a()
      }
    ),
    r && /* @__PURE__ */ c.jsxs("div", { className: "fixed z-50 inset-0 flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 transition-opacity", children: /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 bg-gray-500 opacity-75" }) }),
      /* @__PURE__ */ c.jsxs("div", { className: " text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4", children: [
          /* @__PURE__ */ c.jsx("h3", { className: "text-xl leading-6 font-medium text-gray-900 dark:text-gray-100 mb-4", children: "Save this worksheet" }),
          /* @__PURE__ */ c.jsx("p", { children: "The link to this worksheet contains all your cap table data in the URL. If you update it make sure to share the updated link!" }),
          /* @__PURE__ */ c.jsx("div", { className: "mt-4", children: /* @__PURE__ */ c.jsx(
            "input",
            {
              className: "flex-1 w-full px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500",
              onFocus: u,
              onChange: () => {
              },
              value: e
            }
          ) })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "bg-gray-200 dark:bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse", children: [
          /* @__PURE__ */ c.jsx(
            "button",
            {
              type: "button",
              className: "w-36 justify-center  border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:text-sm",
              onClick: i,
              children: t ? "Copied!" : "Copy"
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              type: "button",
              className: "inline-flex justify-center  border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm",
              onClick: () => s(!1),
              children: "Close"
            }
          )
        ] })
      ] })
    ] })
  ] });
}, qa = (e, t) => Math.round(e * Math.pow(10, t)) / Math.pow(10, t), Ga = ({ shareholder: e, change: t }) => {
  var i;
  const n = e.type === C.Safe || e.type === C.Series ? e.investment : null, r = e.type === C.Safe || e.type === C.Series ? e.pps : null, s = t !== void 0, o = qa((t ?? 0) * 100, 2);
  let l = ((i = e.ownershipPct) == null ? void 0 : i.toFixed(2)) + "%";
  return e.ownershipError && (e.ownershipError.type === "error" ? l = "Error" : e.ownershipError.type === "tbd" && (l = "TBD")), /* @__PURE__ */ c.jsxs("tr", { className: "", children: [
    /* @__PURE__ */ c.jsx("td", { className: "py-3 px-2 pb-1 text-left border-b border-gray-300 dark:border-gray-700", children: e.name }),
    /* @__PURE__ */ c.jsx("td", { className: "py-3 px-2 w-2 border-none" }),
    /* @__PURE__ */ c.jsx("td", { className: "py-3 px-4 pb-1 text-left border-b border-gray-300 dark:border-gray-700", children: n ? "$" + Ce(n) : "" }),
    /* @__PURE__ */ c.jsx("td", { className: "py-3 px-2 w-2 border-none" }),
    /* @__PURE__ */ c.jsx("td", { className: "py-3 px-4 pb-1 text-left border-b border-gray-300 dark:border-gray-700", children: r ? "$" + Ce(r) : "" }),
    /* @__PURE__ */ c.jsx("td", { className: "py-3 px-2 w-2 border-none" }),
    /* @__PURE__ */ c.jsx("td", { className: "py-3 px-4 pb-1 text-left border-b border-gray-300 dark:border-gray-700", children: e.shares ? Ce(e.shares) : "" }),
    /* @__PURE__ */ c.jsx("td", { className: "py-3 px-2 w-2 border-none" }),
    /* @__PURE__ */ c.jsx("td", { className: "py-3 px-4 pb-1 text-left border-b border-gray-300 dark:border-gray-700", children: /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 justify-items-start", children: [
      /* @__PURE__ */ c.jsx("span", { className: "", children: l }),
      s && /* @__PURE__ */ c.jsxs(
        "span",
        {
          className: `pl-2 text-right ${o > 0 ? "text-green-500" : o < 0 ? "text-red-500" : "text-black"}`,
          children: [
            o > 0 ? "+" : "",
            o,
            "%"
          ]
        }
      )
    ] }) })
  ] });
}, gr = (e) => {
  const {
    rows: t,
    changes: n,
    totalRow: r
  } = e, s = n.length > 0;
  return /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx("div", { className: "overflow-hidden w-full mx-auto mt-2", children: /* @__PURE__ */ c.jsxs("table", { className: "w-full text-sm border-seperate border-spacing-2", children: [
    /* @__PURE__ */ c.jsx("thead", { className: "bg-inherit", children: /* @__PURE__ */ c.jsxs("tr", { className: "text-gray-500", children: [
      /* @__PURE__ */ c.jsx("th", { className: "py-3 px-2 text-left font-thin", children: "Shareholder / Investor" }),
      /* @__PURE__ */ c.jsx("th", { className: "py-3 px-2 w-2 border-none" }),
      /* @__PURE__ */ c.jsx("th", { className: "py-3 px-4 text-left font-thin", children: "Investment" }),
      /* @__PURE__ */ c.jsx("th", { className: "py-3 px-2 w-2 border-none" }),
      /* @__PURE__ */ c.jsx("th", { className: "py-3 px-4 text-left font-thin", children: "PPS" }),
      /* @__PURE__ */ c.jsx("th", { className: "py-3 px-2 w-2 border-none" }),
      /* @__PURE__ */ c.jsx("th", { className: "py-3 px-4 text-left font-thin", children: "Shares" }),
      /* @__PURE__ */ c.jsx("th", { className: "py-3 px-2 w-2 border-none" }),
      /* @__PURE__ */ c.jsx("th", { className: "py-3 px-4 text-left font-thin", children: "Ownership %" })
    ] }) }),
    /* @__PURE__ */ c.jsxs("tbody", { className: "not-prose font-bold", children: [
      t.map((o, l) => /* @__PURE__ */ c.jsx(
        Ga,
        {
          shareholder: o,
          change: n[l]
        },
        `captablerow-${l}`
      )),
      /* @__PURE__ */ c.jsxs("tr", { className: "h-4", children: [
        /* @__PURE__ */ c.jsx("td", { className: "py-0 px-0" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-0 px-0" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-0 px-0" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-0 px-0" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-0 px-0" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-0 px-0" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-0 px-0" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-0 px-0" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-0 px-0" })
      ] }),
      /* @__PURE__ */ c.jsxs("tr", { className: "font-bold bg-inherit border-2 border-gray-700 dark:border-gray-300", children: [
        /* @__PURE__ */ c.jsx("td", { className: "py-3 px-4 text-left", children: "Total" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-3 px-2 w-2 border-none" }),
        /* @__PURE__ */ c.jsxs("td", { className: "py-3 px-4 text-left", children: [
          "$",
          Ce(r.investment)
        ] }),
        /* @__PURE__ */ c.jsx("td", { className: "py-3 px-2 w-2 border-none" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-3 px-4 text-left" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-3 px-2 w-2 border-none" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-3 px-4 text-left", children: Ce(r.shares ?? 0) }),
        /* @__PURE__ */ c.jsx("td", { className: "py-3 px-2 w-2 border-none" }),
        /* @__PURE__ */ c.jsx("td", { className: "py-3 px-4 text-left", children: (r.ownershipPct * 100).toFixed(2) + "%" }),
        s && /* @__PURE__ */ c.jsx("td", { className: "py-3 px-4 text-left" })
      ] })
    ] })
  ] }) }) });
}, On = Xe(
  (e) => e,
  (e) => {
    const { preMoney: t, targetOptionsPool: n, unusedOptions: r, rowData: s, pricedRounds: o } = e;
    return {
      preMoney: t,
      targetOptionsPool: n,
      unusedOptions: r,
      rowData: s,
      pricedRounds: o
    };
  }
), Ha = Xe(
  (e) => e,
  (e) => window.location.protocol + "//" + window.location.host + window.location.pathname + "#" + $t(On(e))
), Ya = Xe(
  Qr,
  (e) => ({
    commonStockError: !1,
    safeError: e.some((n) => {
      var r;
      return ((r = n.ownershipError) == null ? void 0 : r.type) === "error";
    }),
    seriesError: !1
  })
), Ja = ({ currentId: e, loadById: t }) => {
  const [n, r] = W(!1), s = () => /* @__PURE__ */ c.jsxs("span", { children: [
    "History",
    /* @__PURE__ */ c.jsx("span", { className: "inline", children: /* @__PURE__ */ c.jsx(ps, { className: "inline pl-2", width: 20 }) })
  ] }), o = window.location.protocol + "//" + window.location.host + window.location.pathname, l = () => on().map((u) => {
    const p = $t(u.conversionState);
    return {
      id: u.id,
      updatedAt: u.updatedAt,
      createdAt: u.createdAt,
      hash: p,
      state: u.conversionState,
      url: `${o}#I${$t(u.conversionState)}`
    };
  }), i = (u) => {
    const p = u.rowData.filter((h) => h.type === C.Safe).map((h) => h.investment).reduce((h, m) => h + m, 0), d = u.rowData.filter((h) => h.type === C.Safe).length;
    return `${d} SAFE${d === 1 ? "" : "'s"} totaling ${da(p)}`;
  };
  function a(u, p = navigator.language) {
    const d = typeof u == "number" ? u : u.getTime(), h = Math.round((d - Date.now()) / 1e3), m = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, 1 / 0], v = ["second", "minute", "hour", "day", "week", "month", "year"], y = m.findIndex((E) => E > Math.abs(h)), g = y ? m[y - 1] : 1;
    return new Intl.RelativeTimeFormat(p, { numeric: "auto" }).format(Math.floor(h / g), v[y]);
  }
  return /* @__PURE__ */ c.jsxs("div", { className: "", children: [
    /* @__PURE__ */ c.jsx(
      "button",
      {
        className: "w-28 px-2 text-center cursor-pointer py-2  focus:outline-none focus:ring-2 text-white bg-nt84blue hover:bg-nt84bluedarker inline",
        onClick: () => r(!0),
        children: s()
      }
    ),
    n && /* @__PURE__ */ c.jsxs("div", { className: "fixed z-50 inset-0 flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 transition-opacity", children: /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 bg-gray-500 opacity-75" }) }),
      /* @__PURE__ */ c.jsxs("div", { className: " text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4", children: [
          /* @__PURE__ */ c.jsx("h3", { className: "text-xl leading-6 font-medium text-gray-900 dark:text-gray-100 mb-4", children: "Recent Cap Tables" }),
          /* @__PURE__ */ c.jsx("ul", { children: l().map((u) => /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsxs(
            "a",
            {
              onClick: () => {
                t(u.id), r(!1);
              },
              className: `text-blue-500 hover:underline dark:text-blue-200 ${u.id === e ? "bg-gray-100 dark:bg-gray-800" : ""}`,
              children: [
                u.id.slice(0, 7),
                " - ",
                i(u.state),
                " ",
                /* @__PURE__ */ c.jsxs("span", { className: "text-xs text-gray-900 dark:text-gray-300", children: [
                  "(",
                  a(u.updatedAt),
                  ")"
                ] })
              ]
            }
          ) }, u.id)) })
        ] }),
        /* @__PURE__ */ c.jsx("div", { className: "bg-gray-200 dark:bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse", children: /* @__PURE__ */ c.jsx(
          "button",
          {
            type: "button",
            className: "inline-flex justify-center  border border-transparent shadow-sm px-4 py-2 bg-gray-500 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm",
            onClick: () => r(!1),
            children: "Close"
          }
        ) })
      ] })
    ] })
  ] });
}, Xa = Xe(
  (e) => e.rowData,
  (e) => e.unusedOptions,
  (e, t) => {
    const r = e.filter((o) => o.type === C.Common).map(
      (o) => ({
        id: o.id,
        name: o.name ?? "",
        shares: o.shares,
        type: C.Common,
        commonType: jt.Shareholder
      })
    );
    return r.push({
      name: "Unused Options Pool",
      shares: t,
      type: C.Common,
      commonType: jt.UnusedOptions
    }), La(r).map((o) => {
      let l = o.id;
      return o.commonType === "unusedOptions" && (l = "UnusedOptionsPool"), {
        id: l ?? "",
        name: o.name ?? "",
        shares: o.shares,
        ownershipPct: o.ownershipPct,
        type: o.type,
        commonType: o.commonType
      };
    });
  }
);
function Za(e) {
  const t = we();
  return q(() => {
    t.current = e;
  }), t.current;
}
const Qa = ({ conversionState: e, currentStateId: t, loadById: n, createNewState: r }) => {
  const {
    rowData: s,
    preMoney: o,
    targetOptionsPool: l,
    pricedRounds: i,
    onAddRow: a,
    onDeleteRow: u,
    onUpdateRow: p,
    onMoveRow: d,
    onValueChange: h,
    togglepriceRounds: m
  } = e, v = s.filter((F) => F.type === "series").map((F) => F.investment).reduce((F, z) => F + z, 0), [y, g] = W(rt(o) + v), j = Za(y), E = Wt(e), [w, S] = W(0), [O, x] = W(0), [R, _] = W(0), M = Ya(e), G = (i ?? 1) > 0;
  q(
    () => {
      j !== y ? h("number")((y - v).toString(), "preMoney") : g(rt(o) + v);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y, o, v]
  );
  const ne = (F) => {
    g(rt(F ?? 0));
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "not-prose", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "w-full flex justify-end gap-2", children: [
      /* @__PURE__ */ c.jsx(Ka, { url: Ha(e) }),
      Tr && /* @__PURE__ */ c.jsx(Ja, { currentId: t, loadById: n }),
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          className: "w-28 px-2 text-center cursor-pointer py-2 focus:outline-none focus:ring-2 text-white bg-nt84blue hover:bg-nt84bluedarker inline",
          onClick: () => r(!1),
          children: [
            "Reset",
            /* @__PURE__ */ c.jsx(ss, { className: "inline pl-2", width: 20 })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("h1", { className: "text-2xl font-bold mb-12 pl-2", children: "1 Existing Cap Table" }),
    /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(
      ca,
      {
        rows: Xa(e),
        onAddRow: () => a(C.Common),
        onDelete: u,
        onUpdate: (F) => {
          F.id === "UnusedOptionsPool" ? h("number")(F.shares.toString(), "unusedOptions") : p(F);
        }
      }
    ) }),
    /* @__PURE__ */ c.jsx("h1", { className: "text-2xl font-bold mb-12 mt-24 pl-2", children: "2 SAFE Investors" }),
    /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(
      Ua,
      {
        rows: Qr(e),
        onAddRow: () => a(C.Safe),
        onDelete: u,
        onUpdate: p,
        onMoveRow: d
      }
    ) }),
    /* @__PURE__ */ c.jsxs("div", { className: "pt-10 ml-10", children: [
      /* @__PURE__ */ c.jsx("div", { className: "ml-2 mb-4 inline not-prose", children: G ? /* @__PURE__ */ c.jsx("span", { children: "Cap Table Before Priced Round" }) : /* @__PURE__ */ c.jsxs(Vt, { content: "Until a priced round is entered, this is just an estimate based on the assumption that all SAFE's convert at their current Cap or, if uncapped, the maximum Cap of all SAFE's", children: [
        "Cap Table Before Priced Round",
        /* @__PURE__ */ c.jsx("sup", { children: "?" })
      ] }) }),
      /* @__PURE__ */ c.jsx(
        gr,
        {
          ...Zr({
            ...e
          })
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "mt-12", children: G ? /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: m,
        className: "ml-10 px-4 py-2  bg-nt84blue text-white hover:bg-nt84bluedarker focus:outline-none focus:ring-blue-500",
        children: "Remove Priced Round"
      }
    ) : /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: m,
        className: "ml-10 px-4 py-2  bg-nt84blue text-white hover:bg-nt84bluedarker focus:outline-none focus:ring-blue-500",
        children: "Add Priced Round"
      }
    ) }),
    G && /* @__PURE__ */ c.jsxs("div", { children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("h1", { className: "text-2xl font-bold mb-12 mt-12 pl-2", children: "3 New Round " }),
        /* @__PURE__ */ c.jsx("div", { className: "flex space-x-4 ml-10", children: /* @__PURE__ */ c.jsxs("div", { className: "w-1/4", children: [
          /* @__PURE__ */ c.jsx("h2", { className: "my-2 not-prose", children: "Premoney Valuation" }),
          /* @__PURE__ */ c.jsx("div", { className: "z-10 max-w-5xl items-center justify-between font-mono text-sm", children: /* @__PURE__ */ c.jsx(
            ct,
            {
              type: "text",
              name: "preMoney",
              value: o,
              onValueChange: h("number"),
              placeholder: "Investment",
              className: "flex-1 w-full px-3 py-2 mr-4 border  focus:outline-none focus:ring-2 focus:ring-blue-500",
              prefix: "$",
              decimalScale: 0,
              allowDecimals: !1
            }
          ) })
        ] }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex space-x-4 ml-10", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "w-1/4", children: [
            /* @__PURE__ */ c.jsx("h2", { className: "my-2 not-prose", children: "Target Options Pool" }),
            /* @__PURE__ */ c.jsx(
              ct,
              {
                type: "text",
                name: "targetOptionsPool",
                value: l,
                onValueChange: h("percent"),
                placeholder: "Target Options Pool %",
                className: "flex-1 w-full px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500",
                prefix: "",
                suffix: "%",
                decimalScale: 1,
                max: 99,
                allowDecimals: !0
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "w-1/4", children: [
            /* @__PURE__ */ c.jsx("h2", { className: "my-2 not-prose", children: "Additional Options" }),
            /* @__PURE__ */ c.jsx(
              ct,
              {
                type: "text",
                name: "additionalOptions",
                value: E == null ? void 0 : E.additionalOptions,
                className: "flex-1 w-full px-3 py-2 bg-gray-100 dark:bg-inherit border  focus:outline-none focus:ring-2 focus:ring-blue-500",
                prefix: "",
                decimalScale: 0,
                max: 99,
                maxLength: 2,
                allowDecimals: !1,
                disabled: !0
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ c.jsx("h1", { className: "text-1xl font-bold mb-4 mt-12 ml-10", children: "Series Investors" }),
        /* @__PURE__ */ c.jsx("div", { className: "z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex", children: /* @__PURE__ */ c.jsx(
          ma,
          {
            rows: $a(e),
            onAddRow: () => a(C.Series),
            onDelete: u,
            onUpdate: p
          }
        ) }),
        /* @__PURE__ */ c.jsx("div", { className: "flex space-x-4 ml-10 mt-8", children: /* @__PURE__ */ c.jsxs("div", { className: "w-1/4", children: [
          /* @__PURE__ */ c.jsx("h2", { className: "my-2 not-prose", children: "Post Money Valuation" }),
          /* @__PURE__ */ c.jsx("div", { className: "z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex", children: /* @__PURE__ */ c.jsx(
            ct,
            {
              type: "text",
              name: "totalSeriesInvestment",
              value: y,
              onValueChange: ne,
              className: "flex-1 w-full px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500",
              prefix: "$",
              decimalScale: 0,
              allowDecimals: !1
            }
          ) })
        ] }) })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "pt-10", children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-2xl ml-10 font-bold mb-4 not-prose", children: "Priced Round Overview" }),
        M.safeError && /* @__PURE__ */ c.jsx("p", { className: "text-red-500 text-xl", children: "SAFE Conversion Error" }),
        !M.safeError && /* @__PURE__ */ c.jsxs("div", { className: "ml-10", children: [
          /* @__PURE__ */ c.jsx(
            fa,
            {
              ...Fa({
                ...e,
                preMoneyChange: w,
                investmentChange: O,
                targetOptionsChange: R
              }),
              updateInvestmentChange: x,
              updatePreMoneyChange: S,
              updateTargetOptionsChange: _
            }
          ),
          /* @__PURE__ */ c.jsx("h2", { className: "text-lg font-bold mb-4 mt-8 not-prose", children: "Cap Table after Priced Round" }),
          /* @__PURE__ */ c.jsx(
            gr,
            {
              ...Ma({
                ...e,
                preMoneyChange: w,
                investmentChange: O,
                targetOptionsChange: R
              })
            }
          )
        ] })
      ] })
    ] })
  ] });
}, br = (e) => {
  let t = "";
  for (; t.length < e; )
    t += Math.random().toString(36).substr(2, 11);
  return t.slice(0, e);
}, ni = () => {
  const [e, t] = W(br(16)), n = we(window.location.hash), r = we();
  r.current === void 0 && (r.current = Po(Jn({ ...Yn() })));
  const s = Rr(r.current), o = (i) => {
    var u;
    const a = zo(i);
    a ? (t(i), (u = r.current) == null || u.setState(a)) : l(!0);
  }, l = (i) => {
    var d;
    const a = br(16);
    t(a);
    const u = Ko(), p = i && u ? u : Jn({ ...Yn() });
    (d = r.current) == null || d.setState(p), Zn(a, p), window.location.hash = $t(p);
  };
  return q(() => {
    var a;
    const i = n.current.slice(1);
    if (i.length === 0)
      l(!0);
    else if (i.charAt(0) === "A") {
      const u = $o(i);
      (a = r.current) == null || a.setState(u);
    } else
      l(!1);
  }, [n]), q(() => {
    window.location.hash = $t(On(s)), Zn(e, On(s));
  }, [s, e]), /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx("main", { className: "flex min-h-screen flex-col items-center justify-between py-8 min-w-[1024px]", children: /* @__PURE__ */ c.jsx("div", { className: "z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex", children: /* @__PURE__ */ c.jsx(Qa, { conversionState: s, currentStateId: e, loadById: o, createNewState: l }) }) }) });
};
export {
  ni as CapTablePage,
  cn as DEFAULT_ROUNDING_STRATEGY,
  Da as buildEstimatedPreRoundCapTable,
  La as buildExistingShareholderCapTable,
  Ia as buildPreRoundCapTable,
  yr as buildPricedRoundCapTable,
  Ta as checkSafeNotesForErrors,
  Aa as fitConversion,
  Ce as formatNumberWithCommas,
  ua as formatUSDWithCommas,
  Kr as getCapForSafe,
  qr as populateSafeCaps,
  In as roundPPSToPlaces,
  bt as roundShares,
  ti as roundToPlaces,
  Hr as safeConvert,
  da as shortenedUSD,
  rt as stringToNumber,
  Gr as sumSafeConvertedShares
};
