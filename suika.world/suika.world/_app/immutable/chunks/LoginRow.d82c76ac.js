import {
  s as R,
  e as Z,
  a as b,
  f as k,
  d as x,
  p as F,
  g as u,
  i as o,
  j as s,
  k as m,
  l as d,
  c as G,
  o as p,
  q as g,
  B as j,
} from "./scheduler.023ced08.js";
import {
  S as J,
  i as K,
  c as C,
  a as y,
  m as B,
  t as M,
  b as z,
  d as H,
} from "./index.c7cfddcd.js";
import { B as I } from "./Button.9eabed8a.js";
import { p as N } from "./stores.65bfa7f3.js";
(function () {
  try {
    var l =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      t = new Error().stack;
    t &&
      ((l._sentryDebugIds = l._sentryDebugIds || {}),
      (l._sentryDebugIds[t] = "52e7fa98-f353-4a71-b20b-9d564bac15db"),
      (l._sentryDebugIdIdentifier =
        "sentry-dbid-52e7fa98-f353-4a71-b20b-9d564bac15db"));
  } catch {}
})();
function O(l) {
  let t, a, e, r;
  return {
    c() {
      (t = p("svg")),
        (a = p("path")),
        (e = p("rect")),
        (r = p("rect")),
        this.h();
    },
    l(f) {
      t = g(f, "svg", { viewBox: !0, width: !0, height: !0, fill: !0 });
      var n = u(t);
      (a = g(n, "path", { d: !0 })),
        u(a).forEach(o),
        (e = g(n, "rect", { x: !0, y: !0, width: !0, height: !0 })),
        u(e).forEach(o),
        (r = g(n, "rect", { x: !0, y: !0, width: !0, height: !0 })),
        u(r).forEach(o),
        n.forEach(o),
        this.h();
    },
    h() {
      s(
        a,
        "d",
        `M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600
			V1300z`
      ),
        s(e, "x", "1700"),
        s(e, "y", "550"),
        s(e, "width", "200"),
        s(e, "height", "600"),
        s(r, "x", "1150"),
        s(r, "y", "550"),
        s(r, "width", "200"),
        s(r, "height", "600"),
        s(t, "viewBox", "0 0 2400 2800"),
        s(t, "width", 48),
        s(t, "height", 48),
        s(t, "fill", "#000");
    },
    m(f, n) {
      m(f, t, n), d(t, a), d(t, e), d(t, r);
    },
    p: j,
    d(f) {
      f && o(t);
    },
  };
}
function P(l) {
  let t, a;
  return {
    c() {
      (t = p("svg")), (a = p("path")), this.h();
    },
    l(e) {
      t = g(e, "svg", { width: !0, height: !0, viewBox: !0 });
      var r = u(t);
      (a = g(r, "path", { fill: !0, d: !0 })),
        u(a).forEach(o),
        r.forEach(o),
        this.h();
    },
    h() {
      s(a, "fill", "#000"),
        s(
          a,
          "d",
          "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
        ),
        s(t, "width", "48"),
        s(t, "height", "48"),
        s(t, "viewBox", "0 0 127.14 96.36");
    },
    m(e, r) {
      m(e, t, r), d(t, a);
    },
    p: j,
    d(e) {
      e && o(t);
    },
  };
}
function Q(l) {
  let t, a;
  return {
    c() {
      (t = p("svg")), (a = p("path")), this.h();
    },
    l(e) {
      t = g(e, "svg", { width: !0, height: !0, viewBox: !0 });
      var r = u(t);
      (a = g(r, "path", { d: !0, fill: !0 })),
        u(a).forEach(o),
        r.forEach(o),
        this.h();
    },
    h() {
      s(
        a,
        "d",
        "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      ),
        s(a, "fill", "#000"),
        s(t, "width", "49"),
        s(t, "height", "48"),
        s(t, "viewBox", "0 0 98 96");
    },
    m(e, r) {
      m(e, t, r), d(t, a);
    },
    p: j,
    d(e) {
      e && o(t);
    },
  };
}
function T(l) {
  let t, a, e, r, f, n;
  return {
    c() {
      (t = p("svg")),
        (a = p("path")),
        (e = p("path")),
        (r = p("path")),
        (f = p("path")),
        (n = p("path")),
        this.h();
    },
    l(c) {
      t = g(c, "svg", { height: !0, width: !0, viewBox: !0 });
      var $ = u(t);
      (a = g($, "path", { d: !0 })),
        u(a).forEach(o),
        (e = g($, "path", { d: !0 })),
        u(e).forEach(o),
        (r = g($, "path", { d: !0 })),
        u(r).forEach(o),
        (f = g($, "path", { d: !0 })),
        u(f).forEach(o),
        (n = g($, "path", { d: !0, fill: !0 })),
        u(n).forEach(o),
        $.forEach(o),
        this.h();
    },
    h() {
      s(
        a,
        "d",
        "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      ),
        s(
          e,
          "d",
          "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        ),
        s(
          r,
          "d",
          "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        ),
        s(
          f,
          "d",
          "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        ),
        s(n, "d", "M1 1h22v22H1z"),
        s(n, "fill", "none"),
        s(t, "height", "48"),
        s(t, "width", "48"),
        s(t, "viewBox", "0 0 24 24");
    },
    m(c, $) {
      m(c, t, $), d(t, a), d(t, e), d(t, r), d(t, f), d(t, n);
    },
    p: j,
    d(c) {
      c && o(t);
    },
  };
}
function U(l) {
  let t,
    a,
    e,
    r = "Log In",
    f,
    n,
    c,
    $,
    v,
    D,
    _,
    V,
    w,
    E;
  return (
    (c = new I({
      props: {
        height: 73,
        hue: 150,
        href: "/api/login/twitch" + l[0],
        class: "flex items-center justify-center",
        $$slots: { default: [O] },
        $$scope: { ctx: l },
      },
    })),
    (v = new I({
      props: {
        height: 73,
        hue: 120,
        href: "/api/login/discord" + l[0],
        class: "flex items-center justify-center",
        $$slots: { default: [P] },
        $$scope: { ctx: l },
      },
    })),
    (_ = new I({
      props: {
        height: 73,
        filter: "grayscale(1) brightness(1.4)",
        href: "/api/login/github" + l[0],
        class: "flex items-center justify-center",
        $$slots: { default: [Q] },
        $$scope: { ctx: l },
      },
    })),
    (w = new I({
      props: {
        height: 73,
        hue: -100,
        href: "/api/login/google" + l[0],
        class: "flex items-center justify-center",
        $$slots: { default: [T] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        (t = Z("hr")),
          (a = b()),
          (e = Z("h1")),
          (e.textContent = r),
          (f = b()),
          (n = Z("div")),
          C(c.$$.fragment),
          ($ = b()),
          C(v.$$.fragment),
          (D = b()),
          C(_.$$.fragment),
          (V = b()),
          C(w.$$.fragment),
          this.h();
      },
      l(h) {
        (t = k(h, "HR", { class: !0 })),
          (a = x(h)),
          (e = k(h, "H1", { class: !0, "data-svelte-h": !0 })),
          F(e) !== "svelte-q88vun" && (e.textContent = r),
          (f = x(h)),
          (n = k(h, "DIV", { class: !0 }));
        var i = u(n);
        y(c.$$.fragment, i),
          ($ = x(i)),
          y(v.$$.fragment, i),
          (D = x(i)),
          y(_.$$.fragment, i),
          (V = x(i)),
          y(w.$$.fragment, i),
          i.forEach(o),
          this.h();
      },
      h() {
        s(t, "class", "w-full max-w-sm border-rose-950"),
          s(e, "class", "text-2xl text-rose-900"),
          s(n, "class", "flex gap-4");
      },
      m(h, i) {
        m(h, t, i),
          m(h, a, i),
          m(h, e, i),
          m(h, f, i),
          m(h, n, i),
          B(c, n, null),
          d(n, $),
          B(v, n, null),
          d(n, D),
          B(_, n, null),
          d(n, V),
          B(w, n, null),
          (E = !0);
      },
      p(h, [i]) {
        const q = {};
        i & 1 && (q.href = "/api/login/twitch" + h[0]),
          i & 4 && (q.$$scope = { dirty: i, ctx: h }),
          c.$set(q);
        const A = {};
        i & 1 && (A.href = "/api/login/discord" + h[0]),
          i & 4 && (A.$$scope = { dirty: i, ctx: h }),
          v.$set(A);
        const L = {};
        i & 1 && (L.href = "/api/login/github" + h[0]),
          i & 4 && (L.$$scope = { dirty: i, ctx: h }),
          _.$set(L);
        const S = {};
        i & 1 && (S.href = "/api/login/google" + h[0]),
          i & 4 && (S.$$scope = { dirty: i, ctx: h }),
          w.$set(S);
      },
      i(h) {
        E ||
          (M(c.$$.fragment, h),
          M(v.$$.fragment, h),
          M(_.$$.fragment, h),
          M(w.$$.fragment, h),
          (E = !0));
      },
      o(h) {
        z(c.$$.fragment, h),
          z(v.$$.fragment, h),
          z(_.$$.fragment, h),
          z(w.$$.fragment, h),
          (E = !1);
      },
      d(h) {
        h && (o(t), o(a), o(e), o(f), o(n)), H(c), H(v), H(_), H(w);
      },
    }
  );
}
function W(l, t, a) {
  let e, r;
  return (
    G(l, N, (f) => a(1, (r = f))),
    (l.$$.update = () => {
      l.$$.dirty & 2 &&
        a(
          0,
          (e = r.route.id === "/(menu)" ? "" : `?redirect_to=${r.url.pathname}`)
        );
    }),
    [e, r]
  );
}
class st extends J {
  constructor(t) {
    super(), K(this, t, W, U, R, {});
  }
}
export { st as L };
//# sourceMappingURL=LoginRow.d82c76ac.js.map
