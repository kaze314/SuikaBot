import {
  s as T,
  n as E,
  e as b,
  a as U,
  b as $,
  f as w,
  g as R,
  d as k,
  i as p,
  j as v,
  k as g,
  l as x,
  v as H,
  w as M,
  x as S,
  c as I,
  p as C,
} from "../chunks/scheduler.023ced08.js";
import {
  S as j,
  i as q,
  t as d,
  b as h,
  e as V,
  c as W,
  a as z,
  m as A,
  d as N,
  g as P,
} from "../chunks/index.c7cfddcd.js";
import { p as B } from "../chunks/stores.65bfa7f3.js";
import { U as F } from "../chunks/UserCard.093cd29b.js";
import { t as G } from "../chunks/index.ee14482c.js";
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
      (r._sentryDebugIds[e] = "2d09eccf-7933-4174-9e26-92f77ff767d0"),
      (r._sentryDebugIdIdentifier =
        "sentry-dbid-2d09eccf-7933-4174-9e26-92f77ff767d0"));
  } catch {}
})();
function J(r) {
  let e,
    a = `<picture><source srcset="${
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
    }" type="image/png"/><img class="h-64 w-auto" src=""+new URL('../assets/menu_logo.41419062.png', import.meta.url).href+"" alt="Suika World" width="1464" height="1336"/></picture>`;
  return {
    c() {
      (e = b("a")), (e.innerHTML = a), this.h();
    },
    l(t) {
      (e = w(t, "A", { href: !0, "data-svelte-h": !0 })),
        C(e) !== "svelte-1p5cay3" && (e.innerHTML = a),
        this.h();
    },
    h() {
      v(e, "href", "/");
    },
    m(t, n) {
      g(t, e, n);
    },
    d(t) {
      t && p(e);
    },
  };
}
function K(r) {
  let e,
    a = `<source srcset="${
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
    }" type="image/png"/><img class="h-64 w-auto" src=""+new URL('../assets/menu_logo.41419062.png', import.meta.url).href+"" alt="Suika World" width="1464" height="1336"/>`;
  return {
    c() {
      (e = b("picture")), (e.innerHTML = a);
    },
    l(t) {
      (e = w(t, "PICTURE", { "data-svelte-h": !0 })),
        C(e) !== "svelte-1e3rx08" && (e.innerHTML = a);
    },
    m(t, n) {
      g(t, e, n);
    },
    d(t) {
      t && p(e);
    },
  };
}
function D(r) {
  let e, a;
  return (
    (e = new F({
      props: {
        user: r[1].data.user,
        size: "large",
        link: { href: "/api/logout", text: "Log out" },
        class: "absolute right-2 top-2",
      },
    })),
    {
      c() {
        W(e.$$.fragment);
      },
      l(t) {
        z(e.$$.fragment, t);
      },
      m(t, n) {
        A(e, t, n), (a = !0);
      },
      p(t, n) {
        const f = {};
        n & 2 && (f.user = t[1].data.user), e.$set(f);
      },
      i(t) {
        a || (d(e.$$.fragment, t), (a = !0));
      },
      o(t) {
        h(e.$$.fragment, t), (a = !1);
      },
      d(t) {
        N(e, t);
      },
    }
  );
}
function O(r) {
  let e, a, t, n, f, m;
  function _(s, l) {
    return s[0].route.id === "/(menu)" ? K : J;
  }
  let u = _(r),
    c = u(r);
  const y = r[4].default,
    i = E(y, r, r[3], null);
  let o = r[1].data && D(r);
  return {
    c() {
      (e = b("div")),
        c.c(),
        (a = U()),
        (t = b("div")),
        i && i.c(),
        (n = U()),
        o && o.c(),
        (f = $()),
        this.h();
    },
    l(s) {
      e = w(s, "DIV", { class: !0 });
      var l = R(e);
      c.l(l), (a = k(l)), (t = w(l, "DIV", { class: !0 }));
      var L = R(t);
      i && i.l(L),
        L.forEach(p),
        l.forEach(p),
        (n = k(s)),
        o && o.l(s),
        (f = $()),
        this.h();
    },
    h() {
      v(t, "class", "flex min-h-[20vh] w-full flex-col items-center gap-4"),
        v(
          e,
          "class",
          "flex h-screen flex-col items-center justify-center gap-4 pt-16 font-bold sm:pt-0"
        );
    },
    m(s, l) {
      g(s, e, l),
        c.m(e, null),
        x(e, a),
        x(e, t),
        i && i.m(t, null),
        g(s, n, l),
        o && o.m(s, l),
        g(s, f, l),
        (m = !0);
    },
    p(s, [l]) {
      u !== (u = _(s)) && (c.d(1), (c = u(s)), c && (c.c(), c.m(e, a))),
        i &&
          i.p &&
          (!m || l & 8) &&
          H(i, y, s, s[3], m ? S(y, s[3], l, null) : M(s[3]), null),
        s[1].data
          ? o
            ? (o.p(s, l), l & 2 && d(o, 1))
            : ((o = D(s)), o.c(), d(o, 1), o.m(f.parentNode, f))
          : o &&
            (P(),
            h(o, 1, 1, () => {
              o = null;
            }),
            V());
    },
    i(s) {
      m || (d(i, s), d(o), (m = !0));
    },
    o(s) {
      h(i, s), h(o), (m = !1);
    },
    d(s) {
      s && (p(e), p(n), p(f)), c.d(), i && i.d(s), o && o.d(s);
    },
  };
}
function Q(r, e, a) {
  let t, n;
  I(r, B, (u) => a(0, (t = u)));
  let { $$slots: f = {}, $$scope: m } = e;
  const _ = G.get_session.query();
  return (
    I(r, _, (u) => a(1, (n = u))),
    (r.$$set = (u) => {
      "$$scope" in u && a(3, (m = u.$$scope));
    }),
    [t, n, _, m, f]
  );
}
class se extends j {
  constructor(e) {
    super(), q(this, e, Q, O, T, {});
  }
}
export { se as component };
//# sourceMappingURL=2.d551bbdb.js.map
