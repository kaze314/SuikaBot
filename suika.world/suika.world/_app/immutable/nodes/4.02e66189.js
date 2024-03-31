import {
  s as O,
  b as P,
  k as _,
  i as p,
  c as B,
  a as I,
  d as D,
  e as S,
  t as g,
  f as Y,
  g as j,
  h as y,
  j as C,
  l as L,
  m as R,
} from "../chunks/scheduler.023ced08.js";
import {
  S as z,
  i as A,
  b,
  e as H,
  t as d,
  g as N,
  c as w,
  a as k,
  m as x,
  d as h,
} from "../chunks/index.c7cfddcd.js";
import { B as v } from "../chunks/Button.9eabed8a.js";
import { L as F } from "../chunks/LoginRow.d82c76ac.js";
import { i as G } from "../chunks/offline.57bc30fc.js";
import { t as J } from "../chunks/index.ee14482c.js";
(function () {
  try {
    var o =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      e = new Error().stack;
    e &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[e] = "0c846905-9c79-46ea-ae91-ec49cc37551f"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-0c846905-9c79-46ea-ae91-ec49cc37551f"));
  } catch {}
})();
function K(o) {
  let e, t, s, c, i, a;
  return (
    (e = new v({
      props: {
        href: "/play",
        class: "px-12 text-5xl",
        $$slots: { default: [Q] },
        $$scope: { ctx: o },
      },
    })),
    (s = new v({
      props: {
        href: "/history",
        class: "px-14 text-4xl",
        $$slots: { default: [T] },
        $$scope: { ctx: o },
      },
    })),
    (i = new v({
      props: {
        href: "/leaderboards",
        class: "px-12 text-4xl",
        $$slots: { default: [U] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        w(e.$$.fragment),
          (t = I()),
          w(s.$$.fragment),
          (c = I()),
          w(i.$$.fragment);
      },
      l(n) {
        k(e.$$.fragment, n),
          (t = D(n)),
          k(s.$$.fragment, n),
          (c = D(n)),
          k(i.$$.fragment, n);
      },
      m(n, l) {
        x(e, n, l), _(n, t, l), x(s, n, l), _(n, c, l), x(i, n, l), (a = !0);
      },
      p(n, l) {
        const u = {};
        l & 8 && (u.$$scope = { dirty: l, ctx: n }), e.$set(u);
        const m = {};
        l & 8 && (m.$$scope = { dirty: l, ctx: n }), s.$set(m);
        const f = {};
        l & 8 && (f.$$scope = { dirty: l, ctx: n }), i.$set(f);
      },
      i(n) {
        a ||
          (d(e.$$.fragment, n),
          d(s.$$.fragment, n),
          d(i.$$.fragment, n),
          (a = !0));
      },
      o(n) {
        b(e.$$.fragment, n), b(s.$$.fragment, n), b(i.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && (p(t), p(c)), h(e, n), h(s, n), h(i, n);
      },
    }
  );
}
function M(o) {
  let e,
    t,
    s,
    c,
    i = o[0] ? "offline" : "logged out",
    a,
    n,
    l,
    u,
    m;
  e = new v({
    props: {
      href: "/play/offline",
      class: "px-12 text-5xl",
      $$slots: { default: [V] },
      $$scope: { ctx: o },
    },
  });
  let f = !o[0] && E();
  return {
    c() {
      w(e.$$.fragment),
        (t = I()),
        (s = S("p")),
        (c = g(
          "Your scores will not be saved, and you can't play multiplayer while "
        )),
        (a = g(i)),
        (n = g(".")),
        (l = I()),
        f && f.c(),
        (u = P()),
        this.h();
    },
    l(r) {
      k(e.$$.fragment, r), (t = D(r)), (s = Y(r, "P", { class: !0 }));
      var $ = j(s);
      (c = y(
        $,
        "Your scores will not be saved, and you can't play multiplayer while "
      )),
        (a = y($, i)),
        (n = y($, ".")),
        $.forEach(p),
        (l = D(r)),
        f && f.l(r),
        (u = P()),
        this.h();
    },
    h() {
      C(s, "class", "mb-4 max-w-md text-center text-xl italic text-rose-900");
    },
    m(r, $) {
      x(e, r, $),
        _(r, t, $),
        _(r, s, $),
        L(s, c),
        L(s, a),
        L(s, n),
        _(r, l, $),
        f && f.m(r, $),
        _(r, u, $),
        (m = !0);
    },
    p(r, $) {
      const q = {};
      $ & 8 && (q.$$scope = { dirty: $, ctx: r }),
        e.$set(q),
        (!m || $ & 1) && i !== (i = r[0] ? "offline" : "logged out") && R(a, i),
        r[0]
          ? f &&
            (N(),
            b(f, 1, 1, () => {
              f = null;
            }),
            H())
          : f
          ? $ & 1 && d(f, 1)
          : ((f = E()), f.c(), d(f, 1), f.m(u.parentNode, u));
    },
    i(r) {
      m || (d(e.$$.fragment, r), d(f), (m = !0));
    },
    o(r) {
      b(e.$$.fragment, r), b(f), (m = !1);
    },
    d(r) {
      r && (p(t), p(s), p(l), p(u)), h(e, r), f && f.d(r);
    },
  };
}
function Q(o) {
  let e;
  return {
    c() {
      e = g("Play");
    },
    l(t) {
      e = y(t, "Play");
    },
    m(t, s) {
      _(t, e, s);
    },
    d(t) {
      t && p(e);
    },
  };
}
function T(o) {
  let e;
  return {
    c() {
      e = g("History");
    },
    l(t) {
      e = y(t, "History");
    },
    m(t, s) {
      _(t, e, s);
    },
    d(t) {
      t && p(e);
    },
  };
}
function U(o) {
  let e;
  return {
    c() {
      e = g("Leaderboards");
    },
    l(t) {
      e = y(t, "Leaderboards");
    },
    m(t, s) {
      _(t, e, s);
    },
    d(t) {
      t && p(e);
    },
  };
}
function V(o) {
  let e;
  return {
    c() {
      e = g("Play Offline");
    },
    l(t) {
      e = y(t, "Play Offline");
    },
    m(t, s) {
      _(t, e, s);
    },
    d(t) {
      t && p(e);
    },
  };
}
function E(o) {
  let e, t;
  return (
    (e = new F({})),
    {
      c() {
        w(e.$$.fragment);
      },
      l(s) {
        k(e.$$.fragment, s);
      },
      m(s, c) {
        x(e, s, c), (t = !0);
      },
      i(s) {
        t || (d(e.$$.fragment, s), (t = !0));
      },
      o(s) {
        b(e.$$.fragment, s), (t = !1);
      },
      d(s) {
        h(e, s);
      },
    }
  );
}
function W(o) {
  let e, t, s, c;
  const i = [M, K],
    a = [];
  function n(l, u) {
    return l[0] || !l[1].data ? 0 : 1;
  }
  return (
    (e = n(o)),
    (t = a[e] = i[e](o)),
    {
      c() {
        t.c(), (s = P());
      },
      l(l) {
        t.l(l), (s = P());
      },
      m(l, u) {
        a[e].m(l, u), _(l, s, u), (c = !0);
      },
      p(l, [u]) {
        let m = e;
        (e = n(l)),
          e === m
            ? a[e].p(l, u)
            : (N(),
              b(a[m], 1, 1, () => {
                a[m] = null;
              }),
              H(),
              (t = a[e]),
              t ? t.p(l, u) : ((t = a[e] = i[e](l)), t.c()),
              d(t, 1),
              t.m(s.parentNode, s));
      },
      i(l) {
        c || (d(t), (c = !0));
      },
      o(l) {
        b(t), (c = !1);
      },
      d(l) {
        l && p(s), a[e].d(l);
      },
    }
  );
}
function X(o, e, t) {
  let s, c;
  B(o, G, (a) => t(0, (s = a)));
  const i = J.get_session.query();
  return B(o, i, (a) => t(1, (c = a))), [s, c, i];
}
class oe extends z {
  constructor(e) {
    super(), A(this, e, X, W, O, {});
  }
}
export { oe as component };
//# sourceMappingURL=4.02e66189.js.map
