import {
  s as D,
  n as M,
  e as E,
  a as U,
  o as b,
  f as R,
  p as j,
  d as I,
  g as m,
  q as g,
  i as a,
  j as l,
  k as _,
  l as $,
  r as T,
  u as B,
  v as S,
  w as q,
  x as H,
  y as z,
  c as A,
  z as N,
  A as O,
} from "../chunks/scheduler.023ced08.js";
import { S as P, i as W, t as F, b as G } from "../chunks/index.c7cfddcd.js";
import { a as C } from "../chunks/sfx.2b6c74c2.js";
(function () {
  try {
    var n =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      e = new Error().stack;
    e &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[e] = "abae2b64-16c0-457b-9332-d63066fbf2a5"),
      (n._sentryDebugIdIdentifier =
        "sentry-dbid-abae2b64-16c0-457b-9332-d63066fbf2a5"));
  } catch {}
})();
function J(n) {
  let e, r;
  return {
    c() {
      (e = b("line")), (r = b("line")), this.h();
    },
    l(s) {
      (e = g(s, "line", { x1: !0, x2: !0, y1: !0, y2: !0 })),
        m(e).forEach(a),
        (r = g(s, "line", { x1: !0, x2: !0, y1: !0, y2: !0 })),
        m(r).forEach(a),
        this.h();
    },
    h() {
      l(e, "x1", "22"),
        l(e, "x2", "16"),
        l(e, "y1", "9"),
        l(e, "y2", "15"),
        l(r, "x1", "16"),
        l(r, "x2", "22"),
        l(r, "y1", "9"),
        l(r, "y2", "15");
    },
    m(s, f) {
      _(s, e, f), _(s, r, f);
    },
    d(s) {
      s && (a(e), a(r));
    },
  };
}
function K(n) {
  let e, r;
  return {
    c() {
      (e = b("path")), (r = b("path")), this.h();
    },
    l(s) {
      (e = g(s, "path", { d: !0 })),
        m(e).forEach(a),
        (r = g(s, "path", { d: !0 })),
        m(r).forEach(a),
        this.h();
    },
    h() {
      l(e, "d", "M15.54 8.46a5 5 0 0 1 0 7.07"),
        l(r, "d", "M19.07 4.93a10 10 0 0 1 0 14.14");
    },
    m(s, f) {
      _(s, e, f), _(s, r, f);
    },
    d(s) {
      s && (a(e), a(r));
    },
  };
}
function Q(n) {
  let e,
    r = `<source srcset="${
      "" +
      new URL("../assets/menu_logo.be52b631.avif", import.meta.url).href +
      " 1x, " +
      new URL("../assets/menu_logo.d3ffb73b.avif", import.meta.url).href +
      " 2x"
    }" type="image/avif"/><source srcset="${
      "" +
      new URL("../assets/menu_logo.6f7eb58b.webp", import.meta.url).href +
      " 1x, " +
      new URL("../assets/menu_logo.50f0669b.webp", import.meta.url).href +
      " 2x"
    }" type="image/webp"/><source srcset="${
      "" +
      new URL("../assets/menu_logo.6b676d00.png", import.meta.url).href +
      " 1x, " +
      new URL("../assets/menu_logo.41419062.png", import.meta.url).href +
      " 2x"
    }" type="image/png"/><img class="fixed left-2 top-2 h-24 w-auto sm:h-32" src=""+new URL('../assets/menu_logo.41419062.png', import.meta.url).href+"" alt="Suika World" width="1464" height="1336"/>`,
    s,
    f,
    c,
    o,
    h,
    i,
    w,
    x;
  const v = n[2].default,
    u = M(v, n, n[1], null);
  function L(t, p) {
    return t[0] ? K : J;
  }
  let y = L(n),
    d = y(n);
  return {
    c() {
      (e = E("picture")),
        (e.innerHTML = r),
        (s = U()),
        u && u.c(),
        (f = U()),
        (c = E("button")),
        (o = b("svg")),
        (h = b("polygon")),
        d.c(),
        this.h();
    },
    l(t) {
      (e = R(t, "PICTURE", { "data-svelte-h": !0 })),
        j(e) !== "svelte-1va3gen" && (e.innerHTML = r),
        (s = I(t)),
        u && u.l(t),
        (f = I(t)),
        (c = R(t, "BUTTON", { class: !0 }));
      var p = m(c);
      o = g(p, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
      });
      var k = m(o);
      (h = g(k, "polygon", { points: !0 })),
        m(h).forEach(a),
        d.l(k),
        k.forEach(a),
        p.forEach(a),
        this.h();
    },
    h() {
      l(h, "points", "11 5 6 9 2 9 2 15 6 15 11 19 11 5"),
        l(o, "width", "24"),
        l(o, "height", "24"),
        l(o, "viewBox", "0 0 24 24"),
        l(o, "fill", "none"),
        l(o, "stroke", "currentColor"),
        l(o, "stroke-width", "2"),
        l(o, "stroke-linecap", "round"),
        l(o, "stroke-linejoin", "round"),
        l(
          c,
          "class",
          "fixed right-1 top-1 rounded-lg p-2 text-rose-900 transition-transform hover:scale-110 active:scale-95"
        );
    },
    m(t, p) {
      _(t, e, p),
        _(t, s, p),
        u && u.m(t, p),
        _(t, f, p),
        _(t, c, p),
        $(c, o),
        $(o, h),
        d.m(o, null),
        (i = !0),
        w ||
          ((x = [T(c, "pointerup", B(n[3])), T(c, "click", n[4])]), (w = !0));
    },
    p(t, [p]) {
      u &&
        u.p &&
        (!i || p & 2) &&
        S(u, v, t, t[1], i ? H(v, t[1], p, null) : q(t[1]), null),
        y !== (y = L(t)) && (d.d(1), (d = y(t)), d && (d.c(), d.m(o, null)));
    },
    i(t) {
      i || (F(u, t), (i = !0));
    },
    o(t) {
      G(u, t), (i = !1);
    },
    d(t) {
      t && (a(e), a(s), a(f), a(c)), u && u.d(t), d.d(), (w = !1), z(x);
    },
  };
}
function V(n, e, r) {
  let s;
  A(n, C, (i) => r(0, (s = i)));
  let { $$slots: f = {}, $$scope: c } = e;
  function o(i) {
    N.call(this, n, i);
  }
  const h = () => O(C, (s = !s), s);
  return (
    (n.$$set = (i) => {
      "$$scope" in i && r(1, (c = i.$$scope));
    }),
    [s, c, f, o, h]
  );
}
class ee extends P {
  constructor(e) {
    super(), W(this, e, V, Q, D, {});
  }
}
export { ee as component };
//# sourceMappingURL=3.e0c589a7.js.map
