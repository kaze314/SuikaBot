import {
  s as K,
  c as M,
  a as E,
  e as H,
  t as d,
  b as X,
  d as D,
  f as R,
  g as S,
  h as $,
  i as p,
  j as W,
  k as _,
  l as b,
  m as B,
} from "../chunks/scheduler.023ced08.js";
import {
  S as O,
  i as Q,
  c as Y,
  a as j,
  m as q,
  t as w,
  b as y,
  d as C,
  g as T,
  e as U,
} from "../chunks/index.c7cfddcd.js";
import { p as V } from "../chunks/stores.65bfa7f3.js";
import { B as Z } from "../chunks/BackButton.78413de4.js";
import { L as x } from "../chunks/LoginRow.d82c76ac.js";
import { component as ee } from "./2.d551bbdb.js";
import { P as z } from "../chunks/encrypt.34d05a14.js";
import { g as te } from "../chunks/util.15fd937c.js";
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
      e = new re().stack;
    e &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[e] = "b6746c41-6c8c-417d-acbc-03a1c2871ab0"),
      (o._sentryDebugIdIdentifier =
        "sentry-dbid-b6746c41-6c8c-417d-acbc-03a1c2871ab0"));
  } catch {}
})();
function N(o) {
  const e = o.slice(),
    a = te(e[0].params.id) ?? "unknown";
  return (e[2] = a), e;
}
function se(o) {
  let e;
  return {
    c() {
      e = d("Home");
    },
    l(a) {
      e = $(a, "Home");
    },
    m(a, t) {
      _(a, e, t);
    },
    d(a) {
      a && p(e);
    },
  };
}
function A(o) {
  let e,
    a = o[0].error.details + "",
    t;
  return {
    c() {
      (e = H("p")), (t = d(a)), this.h();
    },
    l(n) {
      e = R(n, "P", { class: !0 });
      var l = S(e);
      (t = $(l, a)), l.forEach(p), this.h();
    },
    h() {
      W(e, "class", "-mt-4 text-sm font-bold italic text-rose-900");
    },
    m(n, l) {
      _(n, e, l), b(e, t);
    },
    p(n, l) {
      l & 1 && a !== (a = n[0].error.details + "") && B(t, a);
    },
    d(n) {
      n && p(e);
    },
  };
}
function G(o) {
  let e,
    a,
    t = o[1][o[2]] + "",
    n,
    l;
  return {
    c() {
      (e = H("p")),
        (a = d("You've been invited to an online ")),
        (n = d(t)),
        (l = d(" game!")),
        this.h();
    },
    l(c) {
      e = R(c, "P", { class: !0 });
      var u = S(e);
      (a = $(u, "You've been invited to an online ")),
        (n = $(u, t)),
        (l = $(u, " game!")),
        u.forEach(p),
        this.h();
    },
    h() {
      W(e, "class", "text-xl");
    },
    m(c, u) {
      _(c, e, u), b(e, a), b(e, n), b(e, l);
    },
    p(c, u) {
      u & 1 && t !== (t = c[1][c[2]] + "") && B(n, t);
    },
    d(c) {
      c && p(e);
    },
  };
}
function J(o) {
  let e, a;
  return (
    (e = new x({})),
    {
      c() {
        Y(e.$$.fragment);
      },
      l(t) {
        j(e.$$.fragment, t);
      },
      m(t, n) {
        q(e, t, n), (a = !0);
      },
      i(t) {
        a || (w(e.$$.fragment, t), (a = !0));
      },
      o(t) {
        y(e.$$.fragment, t), (a = !1);
      },
      d(t) {
        C(e, t);
      },
    }
  );
}
function ae(o) {
  let e,
    a,
    t,
    n = o[0].status + "",
    l,
    c,
    u = o[0].error?.message + "",
    P,
    I,
    g,
    L =
      o[0].route.id === "/play/[id]" &&
      !o[0].params.id?.startsWith(z) &&
      o[0].status === 401,
    h,
    k,
    v;
  e = new Z({ props: { $$slots: { default: [se] }, $$scope: { ctx: o } } });
  let f = o[0].error?.details && A(o),
    m = L && G(N(o)),
    i = o[0].status === 401 && J();
  return {
    c() {
      Y(e.$$.fragment),
        (a = E()),
        (t = H("p")),
        (l = d(n)),
        (c = d(" – ")),
        (P = d(u)),
        (I = E()),
        f && f.c(),
        (g = E()),
        m && m.c(),
        (h = E()),
        i && i.c(),
        (k = X()),
        this.h();
    },
    l(s) {
      j(e.$$.fragment, s), (a = D(s)), (t = R(s, "P", { class: !0 }));
      var r = S(t);
      (l = $(r, n)),
        (c = $(r, " – ")),
        (P = $(r, u)),
        r.forEach(p),
        (I = D(s)),
        f && f.l(s),
        (g = D(s)),
        m && m.l(s),
        (h = D(s)),
        i && i.l(s),
        (k = X()),
        this.h();
    },
    h() {
      W(t, "class", "text-3xl font-bold text-rose-800");
    },
    m(s, r) {
      q(e, s, r),
        _(s, a, r),
        _(s, t, r),
        b(t, l),
        b(t, c),
        b(t, P),
        _(s, I, r),
        f && f.m(s, r),
        _(s, g, r),
        m && m.m(s, r),
        _(s, h, r),
        i && i.m(s, r),
        _(s, k, r),
        (v = !0);
    },
    p(s, r) {
      const F = {};
      r & 8 && (F.$$scope = { dirty: r, ctx: s }),
        e.$set(F),
        (!v || r & 1) && n !== (n = s[0].status + "") && B(l, n),
        (!v || r & 1) && u !== (u = s[0].error?.message + "") && B(P, u),
        s[0].error?.details
          ? f
            ? f.p(s, r)
            : ((f = A(s)), f.c(), f.m(g.parentNode, g))
          : f && (f.d(1), (f = null)),
        r & 1 &&
          (L =
            s[0].route.id === "/play/[id]" &&
            !s[0].params.id?.startsWith(z) &&
            s[0].status === 401),
        L
          ? m
            ? m.p(N(s), r)
            : ((m = G(N(s))), m.c(), m.m(h.parentNode, h))
          : m && (m.d(1), (m = null)),
        s[0].status === 401
          ? i
            ? r & 1 && w(i, 1)
            : ((i = J()), i.c(), w(i, 1), i.m(k.parentNode, k))
          : i &&
            (T(),
            y(i, 1, 1, () => {
              i = null;
            }),
            U());
    },
    i(s) {
      v || (w(e.$$.fragment, s), w(i), (v = !0));
    },
    o(s) {
      y(e.$$.fragment, s), y(i), (v = !1);
    },
    d(s) {
      s && (p(a), p(t), p(I), p(g), p(h), p(k)),
        C(e, s),
        f && f.d(s),
        m && m.d(s),
        i && i.d(s);
    },
  };
}
function oe(o) {
  let e, a;
  return (
    (e = new ee({
      props: { $$slots: { default: [ae] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        Y(e.$$.fragment);
      },
      l(t) {
        j(e.$$.fragment, t);
      },
      m(t, n) {
        q(e, t, n), (a = !0);
      },
      p(t, [n]) {
        const l = {};
        n & 9 && (l.$$scope = { dirty: n, ctx: t }), e.$set(l);
      },
      i(t) {
        a || (w(e.$$.fragment, t), (a = !0));
      },
      o(t) {
        y(e.$$.fragment, t), (a = !1);
      },
      d(t) {
        C(e, t);
      },
    }
  );
}
function ne(o, e, a) {
  let t;
  return (
    M(o, V, (l) => a(0, (t = l))),
    [
      t,
      {
        pvp: "PvP",
        "pvp-ranked": "ranked PvP",
        singleplayer: "singleplayer",
        "co-op": "co-op",
        unknown: "",
      },
    ]
  );
}
class re extends O {
  constructor(e) {
    super(), Q(this, e, ne, oe, K, {});
  }
}
export { re as component };
//# sourceMappingURL=1.7176c304.js.map
