import {
  s as q,
  e as j,
  t as A,
  a as C,
  f as D,
  g as P,
  h as z,
  d as G,
  i as I,
  D as O,
  j as p,
  k as T,
  l as w,
  m as V,
  B as L,
  c as F,
} from "./scheduler.023ced08.js";
import { n as R, l as H, S as J, i as K } from "./index.c7cfddcd.js";
import { s as S } from "./util.15fd937c.js";
import { w as M, d as N } from "./index.df959635.js";
(function () {
  try {
    var s =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      t = new Error().stack;
    t &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[t] = "76b355da-b31d-4aa1-9497-7bc5d2bf4eaa"),
      (s._sentryDebugIdIdentifier =
        "sentry-dbid-76b355da-b31d-4aa1-9497-7bc5d2bf4eaa"));
  } catch {}
})();
function U(s) {
  return Object.prototype.toString.call(s) === "[object Date]";
}
function y(s, t, e, c) {
  if (typeof e == "number" || U(e)) {
    const a = c - e,
      r = (e - t) / (s.dt || 1 / 60),
      l = s.opts.stiffness * a,
      f = s.opts.damping * r,
      i = (l - f) * s.inv_mass,
      n = (r + i) * s.dt;
    return Math.abs(n) < s.opts.precision && Math.abs(a) < s.opts.precision
      ? c
      : ((s.settled = !1), U(e) ? new Date(e.getTime() + n) : e + n);
  } else {
    if (Array.isArray(e)) return e.map((a, r) => y(s, t[r], e[r], c[r]));
    if (typeof e == "object") {
      const a = {};
      for (const r in e) a[r] = y(s, t[r], e[r], c[r]);
      return a;
    } else throw new Error(`Cannot spring ${typeof e} values`);
  }
}
function Q(s, t = {}) {
  const e = M(s),
    { stiffness: c = 0.15, damping: a = 0.8, precision: r = 0.01 } = t;
  let l,
    f,
    i,
    n = s,
    d = s,
    o = 1,
    x = 0,
    h = !1;
  function k(g, m = {}) {
    d = g;
    const B = (i = {});
    return s == null || m.hard || (u.stiffness >= 1 && u.damping >= 1)
      ? ((h = !0), (l = R()), (n = g), e.set((s = d)), Promise.resolve())
      : (m.soft && ((x = 1 / ((m.soft === !0 ? 0.5 : +m.soft) * 60)), (o = 0)),
        f ||
          ((l = R()),
          (h = !1),
          (f = H((b) => {
            if (h) return (h = !1), (f = null), !1;
            o = Math.min(o + x, 1);
            const _ = {
                inv_mass: o,
                opts: u,
                settled: !0,
                dt: ((b - l) * 60) / 1e3,
              },
              E = y(_, n, s, d);
            return (
              (l = b),
              (n = s),
              e.set((s = E)),
              _.settled && (f = null),
              !_.settled
            );
          }))),
        new Promise((b) => {
          f.promise.then(() => {
            B === i && b();
          });
        }));
  }
  const u = {
    set: k,
    update: (g, m) => k(g(d, s), m),
    subscribe: e.subscribe,
    stiffness: c,
    damping: a,
    precision: r,
  };
  return u;
}
const W = {
  sources: {
    avif:
      "" +
      new URL("../assets/star.f47fbd00.avif", import.meta.url).href +
      " 1x, " +
      new URL("../assets/star.e5b9eb61.avif", import.meta.url).href +
      " 2x",
    webp:
      "" +
      new URL("../assets/star.146c981d.webp", import.meta.url).href +
      " 1x, " +
      new URL("../assets/star.6ddb7c90.webp", import.meta.url).href +
      " 2x",
    png:
      "" +
      new URL("../assets/star.c5b585f7.png", import.meta.url).href +
      " 1x, " +
      new URL("../assets/star.015e2171.png", import.meta.url).href +
      " 2x",
  },
  img: {
    src: "" + new URL("../assets/star.015e2171.png", import.meta.url).href,
    w: 46,
    h: 45,
  },
};
function X(s) {
  let t, e, c, a, r, l, f;
  return {
    c() {
      (t = j("div")), (e = A(s[3])), (c = C()), (a = j("img")), this.h();
    },
    l(i) {
      t = D(i, "DIV", { class: !0 });
      var n = P(t);
      (e = z(n, s[3])),
        (c = G(n)),
        (a = D(n, "IMG", { src: !0, alt: !0, class: !0 })),
        n.forEach(I),
        this.h();
    },
    h() {
      O(a.src, (r = W.img.src)) || p(a, "src", r),
        p(a, "alt", "Star"),
        p(
          a,
          "class",
          (l =
            "select-none transition-transform group-hover:rotate-12 " +
            (s[0] ? "h-6 w-6" : "h-12 w-12"))
        ),
        p(
          t,
          "class",
          (f =
            s[1] +
            " score group flex shrink-0 cursor-default items-center justify-end " +
            s[2] +
            " font-bold text-white svelte-t2cjo8")
        );
    },
    m(i, n) {
      T(i, t, n), w(t, e), w(t, c), w(t, a);
    },
    p(i, [n]) {
      n & 8 && V(e, i[3]),
        n & 1 &&
          l !==
            (l =
              "select-none transition-transform group-hover:rotate-12 " +
              (i[0] ? "h-6 w-6" : "h-12 w-12")) &&
          p(a, "class", l),
        n & 6 &&
          f !==
            (f =
              i[1] +
              " score group flex shrink-0 cursor-default items-center justify-end " +
              i[2] +
              " font-bold text-white svelte-t2cjo8") &&
          p(t, "class", f);
    },
    i: L,
    o: L,
    d(i) {
      i && I(t);
    },
  };
}
function Y(s, t, e) {
  let c,
    a,
    { score: r } = t,
    { constant: l = !1 } = t;
  const f = l ? M(r) : Q(r),
    i = N(f, (o) =>
      o > r ? S.format(r) : o < 0 ? "0" : S.format(Math.round(o))
    );
  F(s, i, (o) => e(3, (a = o)));
  let { small: n = !1 } = t,
    { class: d = "" } = t;
  return (
    (s.$$set = (o) => {
      "score" in o && e(5, (r = o.score)),
        "constant" in o && e(6, (l = o.constant)),
        "small" in o && e(0, (n = o.small)),
        "class" in o && e(1, (d = o.class));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 32 && f.set(r),
        s.$$.dirty & 1 &&
          e(
            2,
            (c = n
              ? "min-w-[110px] text-3xl px-2 gap-0.5 rounded-xl"
              : "min-w-[200px] text-5xl px-4 py-2 gap-2 rounded-3xl")
          );
    }),
    [n, d, c, a, i, r, l]
  );
}
class es extends J {
  constructor(t) {
    super(), K(this, t, Y, X, q, { score: 5, constant: 6, small: 0, class: 1 });
  }
}
export { es as S, Q as s };
//# sourceMappingURL=ScoreBox.f0c90bd2.js.map
