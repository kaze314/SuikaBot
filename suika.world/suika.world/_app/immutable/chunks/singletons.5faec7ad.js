import { w as u } from "./index.df959635.js";
import { a as y } from "./paths.1fc180d1.js";
(function () {
  try {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      t = new Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "2d0c702f-54e0-4a4f-b453-b17cfee565f6"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-2d0c702f-54e0-4a4f-b453-b17cfee565f6"));
  } catch {}
})();
const v = "1702019654716",
  E = "sveltekit:snapshot",
  A = "sveltekit:scroll",
  R = "sveltekit:index",
  f = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1 },
  _ = location.origin;
function S(e) {
  let t = e.baseURI;
  if (!t) {
    const n = e.getElementsByTagName("base");
    t = n.length ? n[0].href : e.URL;
  }
  return t;
}
function T() {
  return { x: pageXOffset, y: pageYOffset };
}
function c(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const d = { ...f, "": f.hover };
function b(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return t?.nodeType === 11 && (t = t.host), t;
}
function x(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = b(e);
  }
}
function D(e, t) {
  let n;
  try {
    n = new URL(
      e instanceof SVGAElement ? e.href.baseVal : e.href,
      document.baseURI
    );
  } catch {}
  const r = e instanceof SVGAElement ? e.target.baseVal : e.target,
    s =
      !n ||
      !!r ||
      m(n, t) ||
      (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
    l = n?.origin === _ && e.hasAttribute("download");
  return { url: n, external: s, target: r, download: l };
}
function O(e) {
  let t = null,
    n = null,
    r = null,
    s = null,
    l = null,
    a = null,
    o = e;
  for (; o && o !== document.documentElement; )
    r === null && (r = c(o, "preload-code")),
      s === null && (s = c(o, "preload-data")),
      t === null && (t = c(o, "keepfocus")),
      n === null && (n = c(o, "noscroll")),
      l === null && (l = c(o, "reload")),
      a === null && (a = c(o, "replacestate")),
      (o = b(o));
  function i(h) {
    switch (h) {
      case "":
      case "true":
        return !0;
      case "off":
      case "false":
        return !1;
      default:
        return null;
    }
  }
  return {
    preload_code: d[r ?? "off"],
    preload_data: d[s ?? "off"],
    keep_focus: i(t),
    noscroll: i(n),
    reload: i(l),
    replace_state: i(a),
  };
}
function p(e) {
  const t = u(e);
  let n = !0;
  function r() {
    (n = !0), t.update((a) => a);
  }
  function s(a) {
    (n = !1), t.set(a);
  }
  function l(a) {
    let o;
    return t.subscribe((i) => {
      (o === void 0 || (n && i !== o)) && a((o = i));
    });
  }
  return { notify: r, set: s, subscribe: l };
}
function w() {
  const { set: e, subscribe: t } = u(!1);
  let n;
  async function r() {
    clearTimeout(n);
    try {
      const s = await fetch(`${y}/_app/version.json`, {
        headers: { pragma: "no-cache", "cache-control": "no-cache" },
      });
      if (!s.ok) return !1;
      const a = (await s.json()).version !== v;
      return a && (e(!0), clearTimeout(n)), a;
    } catch {
      return !1;
    }
  }
  return { subscribe: t, check: r };
}
function m(e, t) {
  return e.origin !== _ || !e.pathname.startsWith(t);
}
let g;
function U(e) {
  g = e.client;
}
function L(e) {
  return (...t) => g[e](...t);
}
const N = { url: p({}), page: p({}), navigating: u(null), updated: w() };
export {
  R as I,
  f as P,
  A as S,
  E as a,
  D as b,
  L as c,
  O as d,
  T as e,
  x as f,
  S as g,
  U as h,
  m as i,
  _ as o,
  N as s,
};
//# sourceMappingURL=singletons.5faec7ad.js.map
