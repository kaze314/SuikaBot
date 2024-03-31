import {
  s as x,
  n as D,
  e as b,
  o as k,
  a as v,
  f as w,
  g,
  q as y,
  i as c,
  d as B,
  j as a,
  k as I,
  l as h,
  v as E,
  w as j,
  x as q,
  t as C,
  h as S,
} from "./scheduler.023ced08.js";
import { S as A, i as V, t as z, b as F } from "./index.c7cfddcd.js";
(function () {
  try {
    var r =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      e = new Error().stack;
    e &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[e] = "53b54530-8da5-4901-9ada-945d5580db8f"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-53b54530-8da5-4901-9ada-945d5580db8f"));
  } catch {}
})();
function G(r) {
  let e;
  return {
    c() {
      e = C("Back");
    },
    l(t) {
      e = S(t, "Back");
    },
    m(t, i) {
      I(t, e, i);
    },
    d(t) {
      t && c(e);
    },
  };
}
function H(r) {
  let e, t, i, u, d, n, f;
  const m = r[2].default,
    _ = D(m, r, r[1], null),
    o = _ || G();
  return {
    c() {
      (e = b("a")),
        (t = k("svg")),
        (i = k("path")),
        (u = v()),
        o && o.c(),
        (d = v()),
        (n = b("div")),
        this.h();
    },
    l(s) {
      e = w(s, "A", { href: !0, class: !0 });
      var l = g(e);
      t = y(l, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        class: !0,
      });
      var p = g(t);
      (i = y(p, "path", { d: !0 })),
        g(i).forEach(c),
        p.forEach(c),
        (u = B(l)),
        o && o.l(l),
        (d = B(l)),
        (n = w(l, "DIV", { class: !0 })),
        g(n).forEach(c),
        l.forEach(c),
        this.h();
    },
    h() {
      a(i, "d", "m15 18-6-6 6-6"),
        a(t, "width", "24"),
        a(t, "height", "24"),
        a(t, "viewBox", "0 0 24 24"),
        a(t, "fill", "none"),
        a(t, "stroke", "currentColor"),
        a(t, "stroke-width", "2"),
        a(t, "stroke-linecap", "round"),
        a(t, "stroke-linejoin", "round"),
        a(
          t,
          "class",
          "transition-transform group-hover:-translate-x-0.5 group-active:-translate-x-2"
        ),
        a(n, "class", "w-6"),
        a(e, "href", r[0]),
        a(
          e,
          "class",
          "group flex items-center gap-2 rounded-full font-bold text-rose-900"
        );
    },
    m(s, l) {
      I(s, e, l),
        h(e, t),
        h(t, i),
        h(e, u),
        o && o.m(e, null),
        h(e, d),
        h(e, n),
        (f = !0);
    },
    p(s, [l]) {
      _ &&
        _.p &&
        (!f || l & 2) &&
        E(_, m, s, s[1], f ? q(m, s[1], l, null) : j(s[1]), null),
        (!f || l & 1) && a(e, "href", s[0]);
    },
    i(s) {
      f || (z(o, s), (f = !0));
    },
    o(s) {
      F(o, s), (f = !1);
    },
    d(s) {
      s && c(e), o && o.d(s);
    },
  };
}
function J(r, e, t) {
  let { $$slots: i = {}, $$scope: u } = e,
    { href: d = "/" } = e;
  return (
    (r.$$set = (n) => {
      "href" in n && t(0, (d = n.href)),
        "$$scope" in n && t(1, (u = n.$$scope));
    }),
    [d, u, i]
  );
}
class M extends A {
  constructor(e) {
    super(), V(this, e, J, H, x, { href: 0 });
  }
}
export { M as B };
//# sourceMappingURL=BackButton.78413de4.js.map
