import {
  B as v,
  V as W,
  W as X,
  i as J,
  y as S,
  J as D,
  K as I,
  X as Z,
  Y as N,
  Z as Y,
  g as q,
  _ as G,
  $ as H,
  a0 as Q,
  a1 as tt,
  a2 as F,
  a3 as et,
  a4 as nt,
  a5 as it,
  a6 as st,
  a7 as rt,
} from "./scheduler.023ced08.js";
(function () {
  try {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      e = new Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "bcc4a1bd-660c-4625-939c-1933a2d9ce96"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-bcc4a1bd-660c-4625-939c-1933a2d9ce96"));
  } catch {}
})();
const K = typeof window < "u";
let P = K ? () => window.performance.now() : () => Date.now(),
  z = K ? (t) => requestAnimationFrame(t) : v;
const E = new Set();
function T(t) {
  E.forEach((e) => {
    e.c(t) || (E.delete(e), e.f());
  }),
    E.size !== 0 && z(T);
}
function B(t) {
  let e;
  return (
    E.size === 0 && z(T),
    {
      promise: new Promise((n) => {
        E.add((e = { c: t, f: n }));
      }),
      abort() {
        E.delete(e);
      },
    }
  );
}
const j = new Map();
let A = 0;
function at(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function ot(t, e) {
  const n = { stylesheet: X(e), rules: {} };
  return j.set(t, n), n;
}
function C(t, e, n, r, u, a, c, i = 0) {
  const l = 16.666 / r;
  let s = `{
`;
  for (let $ = 0; $ <= 1; $ += l) {
    const m = e + (n - e) * a($);
    s +=
      $ * 100 +
      `%{${c(m, 1 - m)}}
`;
  }
  const d =
      s +
      `100% {${c(n, 1 - n)}}
}`,
    f = `__svelte_${at(d)}_${i}`,
    h = W(t),
    { stylesheet: g, rules: o } = j.get(h) || ot(h, t);
  o[f] ||
    ((o[f] = !0), g.insertRule(`@keyframes ${f} ${d}`, g.cssRules.length));
  const _ = t.style.animation || "";
  return (
    (t.style.animation = `${
      _ ? `${_}, ` : ""
    }${f} ${r}ms linear ${u}ms 1 both`),
    (A += 1),
    f
  );
}
function M(t, e) {
  const n = (t.style.animation || "").split(", "),
    r = n.filter(
      e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf("__svelte") === -1
    ),
    u = n.length - r.length;
  u && ((t.style.animation = r.join(", ")), (A -= u), A || ft());
}
function ft() {
  z(() => {
    A ||
      (j.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && J(e);
      }),
      j.clear());
  });
}
let k;
function L() {
  return (
    k ||
      ((k = Promise.resolve()),
      k.then(() => {
        k = null;
      })),
    k
  );
}
function b(t, e, n) {
  t.dispatchEvent(Z(`${e ? "intro" : "outro"}${n}`));
}
const O = new Set();
let y;
function ht() {
  y = { r: 0, c: [], p: y };
}
function mt() {
  y.r || S(y.c), (y = y.p);
}
function ut(t, e) {
  t && t.i && (O.delete(t), t.i(e));
}
function yt(t, e, n, r) {
  if (t && t.o) {
    if (O.has(t)) return;
    O.add(t),
      y.c.push(() => {
        O.delete(t), r && (n && t.d(1), r());
      }),
      t.o(e);
  } else r && r();
}
const V = { duration: 0 };
function pt(t, e, n) {
  const r = { direction: "in" };
  let u = e(t, n, r),
    a = !1,
    c,
    i,
    l = 0;
  function s() {
    c && M(t, c);
  }
  function d() {
    const {
      delay: h = 0,
      duration: g = 300,
      easing: o = N,
      tick: _ = v,
      css: $,
    } = u || V;
    $ && (c = C(t, 0, 1, g, h, o, $, l++)), _(0, 1);
    const m = P() + h,
      p = m + g;
    i && i.abort(),
      (a = !0),
      I(() => b(t, !0, "start")),
      (i = B((w) => {
        if (a) {
          if (w >= p) return _(1, 0), b(t, !0, "end"), s(), (a = !1);
          if (w >= m) {
            const x = o((w - m) / g);
            _(x, 1 - x);
          }
        }
        return a;
      }));
  }
  let f = !1;
  return {
    start() {
      f || ((f = !0), M(t), D(u) ? ((u = u(r)), L().then(d)) : d());
    },
    invalidate() {
      f = !1;
    },
    end() {
      a && (s(), (a = !1));
    },
  };
}
function wt(t, e, n) {
  const r = { direction: "out" };
  let u = e(t, n, r),
    a = !0,
    c;
  const i = y;
  i.r += 1;
  let l;
  function s() {
    const {
      delay: d = 0,
      duration: f = 300,
      easing: h = N,
      tick: g = v,
      css: o,
    } = u || V;
    o && (c = C(t, 1, 0, f, d, h, o));
    const _ = P() + d,
      $ = _ + f;
    I(() => b(t, !1, "start")),
      "inert" in t && ((l = t.inert), (t.inert = !0)),
      B((m) => {
        if (a) {
          if (m >= $) return g(0, 1), b(t, !1, "end"), --i.r || S(i.c), !1;
          if (m >= _) {
            const p = h((m - _) / f);
            g(1 - p, p);
          }
        }
        return a;
      });
  }
  return (
    D(u)
      ? L().then(() => {
          (u = u(r)), s();
        })
      : s(),
    {
      end(d) {
        d && "inert" in t && (t.inert = l),
          d && u.tick && u.tick(1, 0),
          a && (c && M(t, c), (a = !1));
      },
    }
  );
}
function bt(t, e, n, r) {
  let a = e(t, n, { direction: "both" }),
    c = r ? 0 : 1,
    i = null,
    l = null,
    s = null,
    d;
  function f() {
    s && M(t, s);
  }
  function h(o, _) {
    const $ = o.b - c;
    return (
      (_ *= Math.abs($)),
      {
        a: c,
        b: o.b,
        d: $,
        duration: _,
        start: o.start,
        end: o.start + _,
        group: o.group,
      }
    );
  }
  function g(o) {
    const {
        delay: _ = 0,
        duration: $ = 300,
        easing: m = N,
        tick: p = v,
        css: w,
      } = a || V,
      x = { start: P() + _, b: o };
    o || ((x.group = y), (y.r += 1)),
      "inert" in t &&
        (o ? d !== void 0 && (t.inert = d) : ((d = t.inert), (t.inert = !0))),
      i || l
        ? (l = x)
        : (w && (f(), (s = C(t, c, o, $, _, m, w))),
          o && p(0, 1),
          (i = h(x, $)),
          I(() => b(t, o, "start")),
          B((R) => {
            if (
              (l &&
                R > l.start &&
                ((i = h(l, $)),
                (l = null),
                b(t, i.b, "start"),
                w && (f(), (s = C(t, c, i.b, i.duration, 0, m, a.css)))),
              i)
            ) {
              if (R >= i.end)
                p((c = i.b), 1 - c),
                  b(t, i.b, "end"),
                  l || (i.b ? f() : --i.group.r || S(i.group.c)),
                  (i = null);
              else if (R >= i.start) {
                const U = R - i.start;
                (c = i.a + i.d * m(U / i.duration)), p(c, 1 - c);
              }
            }
            return !!(i || l);
          }));
  }
  return {
    run(o) {
      D(a)
        ? L().then(() => {
            (a = a({ direction: o ? "in" : "out" })), g(o);
          })
        : g(o);
    },
    end() {
      f(), (i = l = null);
    },
  };
}
function vt(t) {
  t && t.c();
}
function xt(t, e) {
  t && t.l(e);
}
function ct(t, e, n) {
  const { fragment: r, after_update: u } = t.$$;
  r && r.m(e, n),
    I(() => {
      const a = t.$$.on_mount.map(et).filter(D);
      t.$$.on_destroy ? t.$$.on_destroy.push(...a) : S(a), (t.$$.on_mount = []);
    }),
    u.forEach(I);
}
function lt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (Q(n.after_update),
    S(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function dt(t, e) {
  t.$$.dirty[0] === -1 && (nt.push(t), it(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Et(t, e, n, r, u, a, c = null, i = [-1]) {
  const l = tt;
  F(t);
  const s = (t.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: v,
    not_equal: u,
    bound: Y(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: Y(),
    dirty: i,
    skip_bound: !1,
    root: e.target || l.$$.root,
  });
  c && c(s.root);
  let d = !1;
  if (
    ((s.ctx = n
      ? n(t, e.props || {}, (f, h, ...g) => {
          const o = g.length ? g[0] : h;
          return (
            s.ctx &&
              u(s.ctx[f], (s.ctx[f] = o)) &&
              (!s.skip_bound && s.bound[f] && s.bound[f](o), d && dt(t, f)),
            h
          );
        })
      : []),
    s.update(),
    (d = !0),
    S(s.before_update),
    (s.fragment = r ? r(s.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      st();
      const f = q(e.target);
      s.fragment && s.fragment.l(f), f.forEach(J);
    } else s.fragment && s.fragment.c();
    e.intro && ut(t.$$.fragment), ct(t, e.target, e.anchor), rt(), G();
  }
  F(l);
}
class St {
  $$ = void 0;
  $$set = void 0;
  $destroy() {
    lt(this, 1), (this.$destroy = v);
  }
  $on(e, n) {
    if (!D(n)) return v;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      r.push(n),
      () => {
        const u = r.indexOf(n);
        u !== -1 && r.splice(u, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !H(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const _t = "4";
var $t =
  typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
$t.SENTRY_RELEASE = { id: "78c56335a5a82bb652ec94c36990115d2edc4d32" };
$t.GameData = 0;
$t.ShouldRefresh = 0;
$t.DropFunction = 0;
$t.previewHelperFunction = 0;
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(_t);
export {
  St as S,
  xt as a,
  yt as b,
  vt as c,
  lt as d,
  mt as e,
  pt as f,
  ht as g,
  bt as h,
  Et as i,
  wt as j,
  B as l,
  ct as m,
  P as n,
  ut as t,
};
//# sourceMappingURL=index.c7cfddcd.js.map
