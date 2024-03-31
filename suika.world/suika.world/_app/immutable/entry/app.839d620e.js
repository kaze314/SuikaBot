import { _ as p } from "../chunks/preload-helper.0639fc73.js";
import {
  S as Y,
  i as Z,
  b as $,
  e as O,
  t as f,
  g as V,
  c as E,
  a as A,
  m as h,
  d as y,
} from "../chunks/index.c7cfddcd.js";
import {
  s as tt,
  a as et,
  b as d,
  d as rt,
  k as I,
  i as g,
  N as at,
  G as nt,
  e as ot,
  f as st,
  g as it,
  j as R,
  F as P,
  t as lt,
  h as mt,
  m as ct,
  O as ut,
  H as L,
  P as D,
} from "../chunks/scheduler.023ced08.js";
let N,
  x,
  k,
  j,
  F,
  G,
  pt = (async () => {
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
          t = new Error().stack;
        t &&
          ((n._sentryDebugIds = n._sentryDebugIds || {}),
          (n._sentryDebugIds[t] = "127a5cee-5a07-4365-9ced-9cc8c96ea04c"),
          (n._sentryDebugIdIdentifier =
            "sentry-dbid-127a5cee-5a07-4365-9ced-9cc8c96ea04c"));
      } catch {}
    })(),
      (k = {});
    function H(n) {
      let t, r, o;
      var a = n[1][0];
      function u(e, i) {
        return { props: { data: e[3], form: e[2] } };
      }
      return (
        a && ((t = D(a, u(n))), n[15](t)),
        {
          c() {
            t && E(t.$$.fragment), (r = d());
          },
          l(e) {
            t && A(t.$$.fragment, e), (r = d());
          },
          m(e, i) {
            t && h(t, e, i), I(e, r, i), (o = !0);
          },
          p(e, i) {
            if (i & 2 && a !== (a = e[1][0])) {
              if (t) {
                V();
                const s = t;
                $(s.$$.fragment, 1, 0, () => {
                  y(s, 1);
                }),
                  O();
              }
              a
                ? ((t = D(a, u(e))),
                  e[15](t),
                  E(t.$$.fragment),
                  f(t.$$.fragment, 1),
                  h(t, r.parentNode, r))
                : (t = null);
            } else if (a) {
              const s = {};
              i & 8 && (s.data = e[3]), i & 4 && (s.form = e[2]), t.$set(s);
            }
          },
          i(e) {
            o || (t && f(t.$$.fragment, e), (o = !0));
          },
          o(e) {
            t && $(t.$$.fragment, e), (o = !1);
          },
          d(e) {
            e && g(r), n[15](null), t && y(t, e);
          },
        }
      );
    }
    function S(n) {
      let t, r, o;
      var a = n[1][0];
      function u(e, i) {
        return {
          props: { data: e[3], $$slots: { default: [C] }, $$scope: { ctx: e } },
        };
      }
      return (
        a && ((t = D(a, u(n))), n[14](t)),
        {
          c() {
            t && E(t.$$.fragment), (r = d());
          },
          l(e) {
            t && A(t.$$.fragment, e), (r = d());
          },
          m(e, i) {
            t && h(t, e, i), I(e, r, i), (o = !0);
          },
          p(e, i) {
            if (i & 2 && a !== (a = e[1][0])) {
              if (t) {
                V();
                const s = t;
                $(s.$$.fragment, 1, 0, () => {
                  y(s, 1);
                }),
                  O();
              }
              a
                ? ((t = D(a, u(e))),
                  e[14](t),
                  E(t.$$.fragment),
                  f(t.$$.fragment, 1),
                  h(t, r.parentNode, r))
                : (t = null);
            } else if (a) {
              const s = {};
              i & 8 && (s.data = e[3]),
                i & 65591 && (s.$$scope = { dirty: i, ctx: e }),
                t.$set(s);
            }
          },
          i(e) {
            o || (t && f(t.$$.fragment, e), (o = !0));
          },
          o(e) {
            t && $(t.$$.fragment, e), (o = !1);
          },
          d(e) {
            e && g(r), n[14](null), t && y(t, e);
          },
        }
      );
    }
    function q(n) {
      let t, r, o;
      var a = n[1][1];
      function u(e, i) {
        return { props: { data: e[4], form: e[2] } };
      }
      return (
        a && ((t = D(a, u(n))), n[13](t)),
        {
          c() {
            t && E(t.$$.fragment), (r = d());
          },
          l(e) {
            t && A(t.$$.fragment, e), (r = d());
          },
          m(e, i) {
            t && h(t, e, i), I(e, r, i), (o = !0);
          },
          p(e, i) {
            if (i & 2 && a !== (a = e[1][1])) {
              if (t) {
                V();
                const s = t;
                $(s.$$.fragment, 1, 0, () => {
                  y(s, 1);
                }),
                  O();
              }
              a
                ? ((t = D(a, u(e))),
                  e[13](t),
                  E(t.$$.fragment),
                  f(t.$$.fragment, 1),
                  h(t, r.parentNode, r))
                : (t = null);
            } else if (a) {
              const s = {};
              i & 16 && (s.data = e[4]), i & 4 && (s.form = e[2]), t.$set(s);
            }
          },
          i(e) {
            o || (t && f(t.$$.fragment, e), (o = !0));
          },
          o(e) {
            t && $(t.$$.fragment, e), (o = !1);
          },
          d(e) {
            e && g(r), n[13](null), t && y(t, e);
          },
        }
      );
    }
    function z(n) {
      let t, r, o;
      var a = n[1][1];
      function u(e, i) {
        return {
          props: { data: e[4], $$slots: { default: [B] }, $$scope: { ctx: e } },
        };
      }
      return (
        a && ((t = D(a, u(n))), n[12](t)),
        {
          c() {
            t && E(t.$$.fragment), (r = d());
          },
          l(e) {
            t && A(t.$$.fragment, e), (r = d());
          },
          m(e, i) {
            t && h(t, e, i), I(e, r, i), (o = !0);
          },
          p(e, i) {
            if (i & 2 && a !== (a = e[1][1])) {
              if (t) {
                V();
                const s = t;
                $(s.$$.fragment, 1, 0, () => {
                  y(s, 1);
                }),
                  O();
              }
              a
                ? ((t = D(a, u(e))),
                  e[12](t),
                  E(t.$$.fragment),
                  f(t.$$.fragment, 1),
                  h(t, r.parentNode, r))
                : (t = null);
            } else if (a) {
              const s = {};
              i & 16 && (s.data = e[4]),
                i & 65575 && (s.$$scope = { dirty: i, ctx: e }),
                t.$set(s);
            }
          },
          i(e) {
            o || (t && f(t.$$.fragment, e), (o = !0));
          },
          o(e) {
            t && $(t.$$.fragment, e), (o = !1);
          },
          d(e) {
            e && g(r), n[12](null), t && y(t, e);
          },
        }
      );
    }
    function B(n) {
      let t, r, o;
      var a = n[1][2];
      function u(e, i) {
        return { props: { data: e[5], form: e[2] } };
      }
      return (
        a && ((t = D(a, u(n))), n[11](t)),
        {
          c() {
            t && E(t.$$.fragment), (r = d());
          },
          l(e) {
            t && A(t.$$.fragment, e), (r = d());
          },
          m(e, i) {
            t && h(t, e, i), I(e, r, i), (o = !0);
          },
          p(e, i) {
            if (i & 2 && a !== (a = e[1][2])) {
              if (t) {
                V();
                const s = t;
                $(s.$$.fragment, 1, 0, () => {
                  y(s, 1);
                }),
                  O();
              }
              a
                ? ((t = D(a, u(e))),
                  e[11](t),
                  E(t.$$.fragment),
                  f(t.$$.fragment, 1),
                  h(t, r.parentNode, r))
                : (t = null);
            } else if (a) {
              const s = {};
              i & 32 && (s.data = e[5]), i & 4 && (s.form = e[2]), t.$set(s);
            }
          },
          i(e) {
            o || (t && f(t.$$.fragment, e), (o = !0));
          },
          o(e) {
            t && $(t.$$.fragment, e), (o = !1);
          },
          d(e) {
            e && g(r), n[11](null), t && y(t, e);
          },
        }
      );
    }
    function C(n) {
      let t, r, o, a;
      const u = [z, q],
        e = [];
      function i(s, c) {
        return s[1][2] ? 0 : 1;
      }
      return (
        (t = i(n)),
        (r = e[t] = u[t](n)),
        {
          c() {
            r.c(), (o = d());
          },
          l(s) {
            r.l(s), (o = d());
          },
          m(s, c) {
            e[t].m(s, c), I(s, o, c), (a = !0);
          },
          p(s, c) {
            let m = t;
            (t = i(s)),
              t === m
                ? e[t].p(s, c)
                : (V(),
                  $(e[m], 1, 1, () => {
                    e[m] = null;
                  }),
                  O(),
                  (r = e[t]),
                  r ? r.p(s, c) : ((r = e[t] = u[t](s)), r.c()),
                  f(r, 1),
                  r.m(o.parentNode, o));
          },
          i(s) {
            a || (f(r), (a = !0));
          },
          o(s) {
            $(r), (a = !1);
          },
          d(s) {
            s && g(o), e[t].d(s);
          },
        }
      );
    }
    function T(n) {
      let t,
        r = n[7] && b(n);
      return {
        c() {
          (t = ot("div")), r && r.c(), this.h();
        },
        l(o) {
          t = st(o, "DIV", {
            id: !0,
            "aria-live": !0,
            "aria-atomic": !0,
            style: !0,
          });
          var a = it(t);
          r && r.l(a), a.forEach(g), this.h();
        },
        h() {
          R(t, "id", "svelte-announcer"),
            R(t, "aria-live", "assertive"),
            R(t, "aria-atomic", "true"),
            P(t, "position", "absolute"),
            P(t, "left", "0"),
            P(t, "top", "0"),
            P(t, "clip", "rect(0 0 0 0)"),
            P(t, "clip-path", "inset(50%)"),
            P(t, "overflow", "hidden"),
            P(t, "white-space", "nowrap"),
            P(t, "width", "1px"),
            P(t, "height", "1px");
        },
        m(o, a) {
          I(o, t, a), r && r.m(t, null);
        },
        p(o, a) {
          o[7]
            ? r
              ? r.p(o, a)
              : ((r = b(o)), r.c(), r.m(t, null))
            : r && (r.d(1), (r = null));
        },
        d(o) {
          o && g(t), r && r.d();
        },
      };
    }
    function b(n) {
      let t;
      return {
        c() {
          t = lt(n[8]);
        },
        l(r) {
          t = mt(r, n[8]);
        },
        m(r, o) {
          I(r, t, o);
        },
        p(r, o) {
          o & 256 && ct(t, r[8]);
        },
        d(r) {
          r && g(t);
        },
      };
    }
    function J(n) {
      let t, r, o, a, u;
      const e = [S, H],
        i = [];
      function s(m, _) {
        return m[1][1] ? 0 : 1;
      }
      (t = s(n)), (r = i[t] = e[t](n));
      let c = n[6] && T(n);
      return {
        c() {
          r.c(), (o = et()), c && c.c(), (a = d());
        },
        l(m) {
          r.l(m), (o = rt(m)), c && c.l(m), (a = d());
        },
        m(m, _) {
          i[t].m(m, _), I(m, o, _), c && c.m(m, _), I(m, a, _), (u = !0);
        },
        p(m, [_]) {
          let v = t;
          (t = s(m)),
            t === v
              ? i[t].p(m, _)
              : (V(),
                $(i[v], 1, 1, () => {
                  i[v] = null;
                }),
                O(),
                (r = i[t]),
                r ? r.p(m, _) : ((r = i[t] = e[t](m)), r.c()),
                f(r, 1),
                r.m(o.parentNode, o)),
            m[6]
              ? c
                ? c.p(m, _)
                : ((c = T(m)), c.c(), c.m(a.parentNode, a))
              : c && (c.d(1), (c = null));
        },
        i(m) {
          u || (f(r), (u = !0));
        },
        o(m) {
          $(r), (u = !1);
        },
        d(m) {
          m && (g(o), g(a)), i[t].d(m), c && c.d(m);
        },
      };
    }
    function K(n, t, r) {
      let { stores: o } = t,
        { page: a } = t,
        { constructors: u } = t,
        { components: e = [] } = t,
        { form: i } = t,
        { data_0: s = null } = t,
        { data_1: c = null } = t,
        { data_2: m = null } = t;
      at(o.page.notify);
      let _ = !1,
        v = !1,
        w = null;
      nt(() => {
        const l = o.page.subscribe(() => {
          _ &&
            (r(7, (v = !0)),
            ut().then(() => {
              r(8, (w = document.title || "untitled page"));
            }));
        });
        return r(6, (_ = !0)), l;
      });
      function M(l) {
        L[l ? "unshift" : "push"](() => {
          (e[2] = l), r(0, e);
        });
      }
      function Q(l) {
        L[l ? "unshift" : "push"](() => {
          (e[1] = l), r(0, e);
        });
      }
      function U(l) {
        L[l ? "unshift" : "push"](() => {
          (e[1] = l), r(0, e);
        });
      }
      function W(l) {
        L[l ? "unshift" : "push"](() => {
          (e[0] = l), r(0, e);
        });
      }
      function X(l) {
        L[l ? "unshift" : "push"](() => {
          (e[0] = l), r(0, e);
        });
      }
      return (
        (n.$$set = (l) => {
          "stores" in l && r(9, (o = l.stores)),
            "page" in l && r(10, (a = l.page)),
            "constructors" in l && r(1, (u = l.constructors)),
            "components" in l && r(0, (e = l.components)),
            "form" in l && r(2, (i = l.form)),
            "data_0" in l && r(3, (s = l.data_0)),
            "data_1" in l && r(4, (c = l.data_1)),
            "data_2" in l && r(5, (m = l.data_2));
        }),
        (n.$$.update = () => {
          n.$$.dirty & 1536 && o.page.set(a);
        }),
        [e, u, i, s, c, m, _, v, w, o, a, M, Q, U, W, X]
      );
    }
    (F = class extends Y {
      constructor(n) {
        super(),
          Z(this, n, K, J, tt, {
            stores: 9,
            page: 10,
            constructors: 1,
            components: 0,
            form: 2,
            data_0: 3,
            data_1: 4,
            data_2: 5,
          });
      }
    }),
      (j = [
        () =>
          p(
            () => import("../nodes/0.62716522.js"),
            [
              "../nodes/0.62716522.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
              "../chunks/index.ee14482c.js",
              "../chunks/index.df959635.js",
              "../chunks/parse.1d943ae3.js",
              "../chunks/offline.57bc30fc.js",
              "../chunks/paths.1fc180d1.js",
              "../chunks/public.72a133e0.js",
              "../chunks/BoundingBox.de364d8e.js",
              "../chunks/_commonjsHelpers.691cbe36.js",
              "../assets/0.1c46730b.css",
            ],
            import.meta.url
          ),
        () =>
          p(
            () => import("../nodes/1.7176c304.js"),
            [
              "../nodes/1.7176c304.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
              "../chunks/stores.65bfa7f3.js",
              "../chunks/singletons.5faec7ad.js",
              "../chunks/index.df959635.js",
              "../chunks/paths.1fc180d1.js",
              "../chunks/BackButton.78413de4.js",
              "../chunks/LoginRow.d82c76ac.js",
              "../chunks/Button.9eabed8a.js",
              "../nodes/2.d551bbdb.js",
              "../chunks/UserCard.093cd29b.js",
              "../chunks/util.15fd937c.js",
              "../chunks/Rating.67e07323.js",
              "../assets/Rating.1fdd2b5f.css",
              "../chunks/index.ee14482c.js",
              "../chunks/parse.1d943ae3.js",
              "../chunks/encrypt.34d05a14.js",
            ],
            import.meta.url
          ),
        () =>
          p(
            () => import("../nodes/2.d551bbdb.js"),
            [
              "../nodes/2.d551bbdb.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
              "../chunks/stores.65bfa7f3.js",
              "../chunks/singletons.5faec7ad.js",
              "../chunks/index.df959635.js",
              "../chunks/paths.1fc180d1.js",
              "../chunks/UserCard.093cd29b.js",
              "../chunks/util.15fd937c.js",
              "../chunks/Rating.67e07323.js",
              "../assets/Rating.1fdd2b5f.css",
              "../chunks/index.ee14482c.js",
              "../chunks/parse.1d943ae3.js",
            ],
            import.meta.url
          ),
        () =>
          p(
            () => import("../nodes/3.e0c589a7.js"),
            [
              "../nodes/3.e0c589a7.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
              "../chunks/sfx.2b6c74c2.js",
              "../chunks/index.df959635.js",
            ],
            import.meta.url
          ),
        () =>
          p(
            () => import("../nodes/4.02e66189.js"),
            [
              "../nodes/4.02e66189.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
              "../chunks/Button.9eabed8a.js",
              "../chunks/LoginRow.d82c76ac.js",
              "../chunks/stores.65bfa7f3.js",
              "../chunks/singletons.5faec7ad.js",
              "../chunks/index.df959635.js",
              "../chunks/paths.1fc180d1.js",
              "../chunks/offline.57bc30fc.js",
              "../chunks/index.ee14482c.js",
              "../chunks/parse.1d943ae3.js",
            ],
            import.meta.url
          ),
        () =>
          p(
            () => import("../nodes/5.aef633ae.js"),
            [
              "../nodes/5.aef633ae.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
            ],
            import.meta.url
          ),
        () =>
          p(
            () => import("../nodes/6.c03aba4f.js"),
            [
              "../nodes/6.c03aba4f.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
              "../chunks/index.ee14482c.js",
              "../chunks/index.df959635.js",
              "../chunks/parse.1d943ae3.js",
              "../chunks/BackButton.78413de4.js",
              "../chunks/ScoreBox.f0c90bd2.js",
              "../chunks/util.15fd937c.js",
              "../assets/ScoreBox.257a6a27.css",
              "../chunks/UserCard.093cd29b.js",
              "../chunks/Rating.67e07323.js",
              "../assets/Rating.1fdd2b5f.css",
            ],
            import.meta.url
          ),
        () =>
          p(
            () => import("../nodes/7.a76089b2.js"),
            [
              "../nodes/7.a76089b2.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
              "../chunks/index.ee14482c.js",
              "../chunks/index.df959635.js",
              "../chunks/parse.1d943ae3.js",
              "../chunks/BackButton.78413de4.js",
              "../chunks/Button.9eabed8a.js",
              "../chunks/util.15fd937c.js",
            ],
            import.meta.url
          ),
        () =>
          p(
            () => import("../nodes/8.049f46ff.js"),
            [
              "../nodes/8.049f46ff.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
              "../chunks/navigation.fa955013.js",
              "../chunks/singletons.5faec7ad.js",
              "../chunks/index.df959635.js",
              "../chunks/paths.1fc180d1.js",
              "../chunks/BackButton.78413de4.js",
              "../chunks/Button.9eabed8a.js",
              "../chunks/index.ee14482c.js",
              "../chunks/parse.1d943ae3.js",
              "../chunks/rive.810782c4.js",
              "../chunks/_commonjsHelpers.691cbe36.js",
              "../chunks/util.15fd937c.js",
              "../chunks/encrypt.34d05a14.js",
              "../chunks/ScoreBox.f0c90bd2.js",
              "../assets/ScoreBox.257a6a27.css",
              "../chunks/Rating.67e07323.js",
              "../assets/Rating.1fdd2b5f.css",
              "../assets/8.ac780603.css",
            ],
            import.meta.url
          ),
        () =>
          p(
            () => import("../nodes/9.7b130194.js"),
            [
              "../nodes/9.7b130194.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
              "../assets/9.78d7682e.css",
            ],
            import.meta.url
          ),
        () =>
          p(
            () => import("../nodes/10.af8b77f6.js"),
            [
              "../nodes/10.af8b77f6.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
              "../chunks/index.ee14482c.js",
              "../chunks/index.df959635.js",
              "../chunks/parse.1d943ae3.js",
              "../chunks/stores.65bfa7f3.js",
              "../chunks/singletons.5faec7ad.js",
              "../chunks/paths.1fc180d1.js",
              "../chunks/front.38e13373.js",
              "../chunks/navigation.fa955013.js",
              "../chunks/Button.9eabed8a.js",
              "../chunks/BackButton.78413de4.js",
              "../chunks/ScoreBox.f0c90bd2.js",
              "../chunks/util.15fd937c.js",
              "../assets/ScoreBox.257a6a27.css",
              "../chunks/encrypt.34d05a14.js",
              "../chunks/UserCard.093cd29b.js",
              "../chunks/Rating.67e07323.js",
              "../assets/Rating.1fdd2b5f.css",
            ],
            import.meta.url
          ),
        () =>
          p(
            () =>
              import("../nodes/11.fdb0e35d.js").then(
                async (n) => (await n.__tla, n)
              ),
            [
              "../nodes/11.fdb0e35d.js",
              "../chunks/util.15fd937c.js",
              "../chunks/index.c7cfddcd.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/control.aec33eca.js",
              "../chunks/stores.65bfa7f3.js",
              "../chunks/singletons.5faec7ad.js",
              "../chunks/index.df959635.js",
              "../chunks/paths.1fc180d1.js",
              "../chunks/public.72a133e0.js",
              "../chunks/index.ee14482c.js",
              "../chunks/parse.1d943ae3.js",
              "../chunks/front.38e13373.js",
              "../chunks/GameLayout.0afab75e.js",
              "../chunks/preload-helper.0639fc73.js",
              "../chunks/rive.810782c4.js",
              "../chunks/_commonjsHelpers.691cbe36.js",
              "../chunks/ScoreBox.f0c90bd2.js",
              "../assets/ScoreBox.257a6a27.css",
              "../chunks/BoundingBox.de364d8e.js",
              "../chunks/UserCard.093cd29b.js",
              "../chunks/Rating.67e07323.js",
              "../assets/Rating.1fdd2b5f.css",
              "../chunks/sfx.2b6c74c2.js",
              "../chunks/Loading.b195ac4a.js",
              "../assets/Loading.d91dc72f.css",
              "../chunks/BackButton.78413de4.js",
            ],
            import.meta.url
          ),
        () =>
          p(
            () =>
              import("../nodes/12.f6767a4a.js").then(
                async (n) => (await n.__tla, n)
              ),
            [
              "../nodes/12.f6767a4a.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
              "../chunks/index.ee14482c.js",
              "../chunks/index.df959635.js",
              "../chunks/parse.1d943ae3.js",
              "../chunks/public.72a133e0.js",
              "../chunks/front.38e13373.js",
              "../chunks/GameLayout.0afab75e.js",
              "../chunks/preload-helper.0639fc73.js",
              "../chunks/rive.810782c4.js",
              "../chunks/_commonjsHelpers.691cbe36.js",
              "../chunks/ScoreBox.f0c90bd2.js",
              "../chunks/util.15fd937c.js",
              "../assets/ScoreBox.257a6a27.css",
              "../chunks/BoundingBox.de364d8e.js",
              "../chunks/UserCard.093cd29b.js",
              "../chunks/Rating.67e07323.js",
              "../assets/Rating.1fdd2b5f.css",
              "../chunks/sfx.2b6c74c2.js",
              "../chunks/stores.65bfa7f3.js",
              "../chunks/singletons.5faec7ad.js",
              "../chunks/paths.1fc180d1.js",
              "../chunks/navigation.fa955013.js",
              "../chunks/Loading.b195ac4a.js",
              "../assets/Loading.d91dc72f.css",
              "../chunks/Button.9eabed8a.js",
              "../chunks/BackButton.78413de4.js",
            ],
            import.meta.url
          ),
        () =>
          p(
            () =>
              import("../nodes/13.a8f5223c.js").then(
                async (n) => (await n.__tla, n)
              ),
            [
              "../nodes/13.a8f5223c.js",
              "../chunks/scheduler.023ced08.js",
              "../chunks/index.c7cfddcd.js",
              "../chunks/front.38e13373.js",
              "../chunks/GameLayout.0afab75e.js",
              "../chunks/index.df959635.js",
              "../chunks/preload-helper.0639fc73.js",
              "../chunks/rive.810782c4.js",
              "../chunks/_commonjsHelpers.691cbe36.js",
              "../chunks/ScoreBox.f0c90bd2.js",
              "../chunks/util.15fd937c.js",
              "../assets/ScoreBox.257a6a27.css",
              "../chunks/BoundingBox.de364d8e.js",
              "../chunks/UserCard.093cd29b.js",
              "../chunks/Rating.67e07323.js",
              "../assets/Rating.1fdd2b5f.css",
              "../chunks/sfx.2b6c74c2.js",
              "../chunks/navigation.fa955013.js",
              "../chunks/singletons.5faec7ad.js",
              "../chunks/paths.1fc180d1.js",
            ],
            import.meta.url
          ),
      ]),
      (G = [0]),
      (N = {
        "/(menu)": [4, [2]],
        "/card_render": [9],
        "/(menu)/changelog": [5, [2]],
        "/game/[id]": [-11],
        "/game/[id]/replay": [-12],
        "/(menu)/history": [6, [2]],
        "/(menu)/leaderboards": [7, [2]],
        "/(menu)/play": [-9, [2]],
        "/play/offline": [13, [3]],
        "/play/[id]": [-13, [3]],
      }),
      (x = {
        handleError: ({ error: n }) => {
          console.error(n);
        },
      });
  })();
export {
  pt as __tla,
  N as dictionary,
  x as hooks,
  k as matchers,
  j as nodes,
  F as root,
  G as server_loads,
};
