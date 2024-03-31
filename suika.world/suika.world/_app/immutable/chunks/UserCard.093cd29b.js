import {
  s as x,
  e as p,
  a as P,
  t as C,
  f as I,
  g as y,
  d as S,
  h as N,
  i as d,
  j as m,
  D as H,
  k as M,
  l as g,
  m as R,
  b as J,
  E as A,
  n as $,
  v as ee,
  w as le,
  x as se,
  B as K,
} from "./scheduler.023ced08.js";
import {
  S as te,
  i as ae,
  t as b,
  g as U,
  b as D,
  e as j,
  c as re,
  a as ie,
  m as ne,
  d as fe,
} from "./index.c7cfddcd.js";
import { s as L } from "./util.15fd937c.js";
import { R as oe } from "./Rating.67e07323.js";
(function () {
  try {
    var i =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      e = new Error().stack;
    e &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[e] = "f6c1f607-5a94-4c14-8cfb-58e3b6a0aebf"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-f6c1f607-5a94-4c14-8cfb-58e3b6a0aebf"));
  } catch {}
})();
function O(i) {
  let e,
    a,
    r,
    l = i[1] && i[6].rating !== void 0 && Q(i),
    s = i[5] && W(i);
  return {
    c() {
      (e = p("div")), l && l.c(), (a = P()), s && s.c(), this.h();
    },
    l(t) {
      e = I(t, "DIV", { class: !0 });
      var f = y(e);
      l && l.l(f), (a = S(f)), s && s.l(f), f.forEach(d), this.h();
    },
    h() {
      m(e, "class", "flex items-center gap-2");
    },
    m(t, f) {
      M(t, e, f), l && l.m(e, null), g(e, a), s && s.m(e, null), (r = !0);
    },
    p(t, f) {
      t[1] && t[6].rating !== void 0
        ? l
          ? (l.p(t, f), f & 66 && b(l, 1))
          : ((l = Q(t)), l.c(), b(l, 1), l.m(e, a))
        : l &&
          (U(),
          D(l, 1, 1, () => {
            l = null;
          }),
          j()),
        t[5]
          ? s
            ? s.p(t, f)
            : ((s = W(t)), s.c(), s.m(e, null))
          : s && (s.d(1), (s = null));
    },
    i(t) {
      r || (b(l), (r = !0));
    },
    o(t) {
      D(l), (r = !1);
    },
    d(t) {
      t && d(e), l && l.d(), s && s.d();
    },
  };
}
function Q(i) {
  let e, a, r, l;
  e = new oe({ props: { user: i[6] } });
  let s = i[2] && T(i);
  return {
    c() {
      re(e.$$.fragment), (a = P()), s && s.c(), (r = J());
    },
    l(t) {
      ie(e.$$.fragment, t), (a = S(t)), s && s.l(t), (r = J());
    },
    m(t, f) {
      ne(e, t, f), M(t, a, f), s && s.m(t, f), M(t, r, f), (l = !0);
    },
    p(t, f) {
      const h = {};
      f & 64 && (h.user = t[6]),
        e.$set(h),
        t[2]
          ? s
            ? s.p(t, f)
            : ((s = T(t)), s.c(), s.m(r.parentNode, r))
          : s && (s.d(1), (s = null));
    },
    i(t) {
      l || (b(e.$$.fragment, t), (l = !0));
    },
    o(t) {
      D(e.$$.fragment, t), (l = !1);
    },
    d(t) {
      t && (d(a), d(r)), fe(e, t), s && s.d(t);
    },
  };
}
function T(i) {
  let e,
    a = (i[2] > 0 ? "+" : i[2] < 0 ? "-" : "") + Math.round(Math.abs(i[2])),
    r;
  return {
    c() {
      (e = p("span")), (r = C(a)), this.h();
    },
    l(l) {
      e = I(l, "SPAN", { class: !0 });
      var s = y(e);
      (r = N(s, a)), s.forEach(d), this.h();
    },
    h() {
      m(e, "class", "text-base"),
        A(e, "text-green-900", i[2] > 0),
        A(e, "text-red-900", i[2] < 0);
    },
    m(l, s) {
      M(l, e, s), g(e, r);
    },
    p(l, s) {
      s & 4 &&
        a !==
          (a =
            (l[2] > 0 ? "+" : l[2] < 0 ? "-" : "") +
            Math.round(Math.abs(l[2]))) &&
        R(r, a),
        s & 4 && A(e, "text-green-900", l[2] > 0),
        s & 4 && A(e, "text-red-900", l[2] < 0);
    },
    d(l) {
      l && d(e);
    },
  };
}
function W(i) {
  let e,
    a = i[5].text + "",
    r,
    l;
  return {
    c() {
      (e = p("a")), (r = C(a)), this.h();
    },
    l(s) {
      e = I(s, "A", { href: !0, class: !0 });
      var t = y(e);
      (r = N(t, a)), t.forEach(d), this.h();
    },
    h() {
      m(e, "href", (l = i[5].href)),
        m(
          e,
          "class",
          "ml-1 origin-center text-right text-sm text-rose-900 transition-transform hover:scale-105 active:scale-95"
        );
    },
    m(s, t) {
      M(s, e, t), g(e, r);
    },
    p(s, t) {
      t & 32 && a !== (a = s[5].text + "") && R(r, a),
        t & 32 && l !== (l = s[5].href) && m(e, "href", l);
    },
    d(s) {
      s && d(e);
    },
  };
}
function ue(i) {
  let e;
  const a = i[9].default,
    r = $(a, i, i[8], null);
  return {
    c() {
      r && r.c();
    },
    l(l) {
      r && r.l(l);
    },
    m(l, s) {
      r && r.m(l, s), (e = !0);
    },
    p(l, s) {
      r &&
        r.p &&
        (!e || s & 256) &&
        ee(r, a, l, l[8], e ? se(a, l[8], s, null) : le(l[8]), null);
    },
    i(l) {
      e || (b(r, l), (e = !0));
    },
    o(l) {
      D(r, l), (e = !1);
    },
    d(l) {
      r && r.d(l);
    },
  };
}
function ce(i) {
  let e,
    a = L.format(i[3]) + "",
    r;
  return {
    c() {
      (e = p("div")), (r = C(a)), this.h();
    },
    l(l) {
      e = I(l, "DIV", { class: !0 });
      var s = y(e);
      (r = N(s, a)), s.forEach(d), this.h();
    },
    h() {
      m(e, "class", "ml-auto");
    },
    m(l, s) {
      M(l, e, s), g(e, r);
    },
    p(l, s) {
      s & 8 && a !== (a = L.format(l[3]) + "") && R(r, a);
    },
    i: K,
    o: K,
    d(l) {
      l && d(e);
    },
  };
}
function _e(i) {
  let e,
    a,
    r,
    l,
    s,
    t,
    f,
    h = i[6].username + "",
    E,
    z,
    V,
    _,
    n,
    q,
    v,
    u = (i[5] || i[1]) && O(i);
  const B = [ce, ue],
    k = [];
  function G(o, c) {
    return o[3] ? 0 : 1;
  }
  return (
    (_ = G(i)),
    (n = k[_] = B[_](i)),
    {
      c() {
        (e = p("div")),
          (a = p("img")),
          (s = P()),
          (t = p("div")),
          (f = p("p")),
          (E = C(h)),
          (z = P()),
          u && u.c(),
          (V = P()),
          n.c(),
          this.h();
      },
      l(o) {
        e = I(o, "DIV", { class: !0 });
        var c = y(e);
        (a = I(c, "IMG", { alt: !0, class: !0, src: !0 })),
          (s = S(c)),
          (t = I(c, "DIV", { class: !0 }));
        var w = y(t);
        f = I(w, "P", { class: !0 });
        var F = y(f);
        (E = N(F, h)),
          F.forEach(d),
          (z = S(w)),
          u && u.l(w),
          w.forEach(d),
          (V = S(c)),
          n.l(c),
          c.forEach(d),
          this.h();
      },
      h() {
        m(a, "alt", "Profile"),
          m(
            a,
            "class",
            (r = Y[i[0]] + " select-none rounded-full bg-neutral-900")
          ),
          H(a.src, (l = i[6].image)) || m(a, "src", l),
          m(
            f,
            "class",
            "max-w-[200px] overflow-hidden overflow-ellipsis whitespace-nowrap"
          ),
          m(t, "class", "flex flex-col items-start font-bold"),
          m(
            e,
            "class",
            (q =
              i[7] +
              " user-glow flex items-center rounded-xl border-2 " +
              Z[i[4]] +
              " " +
              X[i[0]])
          );
      },
      m(o, c) {
        M(o, e, c),
          g(e, a),
          g(e, s),
          g(e, t),
          g(t, f),
          g(f, E),
          g(t, z),
          u && u.m(t, null),
          g(e, V),
          k[_].m(e, null),
          (v = !0);
      },
      p(o, [c]) {
        (!v ||
          (c & 1 &&
            r !==
              (r = Y[o[0]] + " select-none rounded-full bg-neutral-900"))) &&
          m(a, "class", r),
          (!v || (c & 64 && !H(a.src, (l = o[6].image)))) && m(a, "src", l),
          (!v || c & 64) && h !== (h = o[6].username + "") && R(E, h),
          o[5] || o[1]
            ? u
              ? (u.p(o, c), c & 34 && b(u, 1))
              : ((u = O(o)), u.c(), b(u, 1), u.m(t, null))
            : u &&
              (U(),
              D(u, 1, 1, () => {
                u = null;
              }),
              j());
        let w = _;
        (_ = G(o)),
          _ === w
            ? k[_].p(o, c)
            : (U(),
              D(k[w], 1, 1, () => {
                k[w] = null;
              }),
              j(),
              (n = k[_]),
              n ? n.p(o, c) : ((n = k[_] = B[_](o)), n.c()),
              b(n, 1),
              n.m(e, null)),
          (!v ||
            (c & 145 &&
              q !==
                (q =
                  o[7] +
                  " user-glow flex items-center rounded-xl border-2 " +
                  Z[o[4]] +
                  " " +
                  X[o[0]]))) &&
            m(e, "class", q);
      },
      i(o) {
        v || (b(u), b(n), (v = !0));
      },
      o(o) {
        D(u), D(n), (v = !1);
      },
      d(o) {
        o && d(e), u && u.d(), k[_].d();
      },
    }
  );
}
const X = {
    small: "gap-1 sm:gap-3 px-1 sm:px-2 py-1 text-sm sm:text-lg",
    large: "gap-4 px-2 sm:px-4 py-1 sm:py-2 sm:text-2xl",
  },
  Y = { small: "w-8 h-8 sm:w-10 sm:h-10", large: "w-8 h-8 sm:w-12 sm:h-12" },
  Z = {
    red: "bg-red-500/50 border-red-600",
    green: "bg-green-500/50 border-green-600",
    white: "border-white bg-white/30",
    gray: "bg-neutral-500/50 border-neutral-600",
  };
function me(i, e, a) {
  let { $$slots: r = {}, $$scope: l } = e,
    { size: s = "small" } = e,
    { rating: t = !1 } = e,
    { rating_change: f = void 0 } = e,
    { score: h = void 0 } = e,
    { color: E = "white" } = e,
    { link: z = void 0 } = e,
    { user: V } = e,
    { class: _ = "" } = e;
  return (
    (i.$$set = (n) => {
      "size" in n && a(0, (s = n.size)),
        "rating" in n && a(1, (t = n.rating)),
        "rating_change" in n && a(2, (f = n.rating_change)),
        "score" in n && a(3, (h = n.score)),
        "color" in n && a(4, (E = n.color)),
        "link" in n && a(5, (z = n.link)),
        "user" in n && a(6, (V = n.user)),
        "class" in n && a(7, (_ = n.class)),
        "$$scope" in n && a(8, (l = n.$$scope));
    }),
    [s, t, f, h, E, z, V, _, l, r]
  );
}
class ve extends te {
  constructor(e) {
    super(),
      ae(this, e, me, _e, x, {
        size: 0,
        rating: 1,
        rating_change: 2,
        score: 3,
        color: 4,
        link: 5,
        user: 6,
        class: 7,
      });
  }
}
export { ve as U, Z as r };
//# sourceMappingURL=UserCard.093cd29b.js.map
