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
      (t._sentryDebugIds[e] = "ce3a2458-9db3-4ac5-a496-b5eec22827b2"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-ce3a2458-9db3-4ac5-a496-b5eec22827b2"));
  } catch {}
})();
function N() {}
const nt = (t) => t;
function P(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function q(t) {
  return t();
}
function rt() {
  return Object.create(null);
}
function H(t) {
  t.forEach(q);
}
function L(t) {
  return typeof t == "function";
}
function it(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let m;
function st(t, e) {
  return t === e
    ? !0
    : (m || (m = document.createElement("a")), (m.href = e), t === m.href);
}
function ct(t) {
  return Object.keys(t).length === 0;
}
function D(t, ...e) {
  if (t == null) {
    for (const r of e) r(void 0);
    return N;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function lt(t) {
  let e;
  return D(t, (n) => (e = n))(), e;
}
function ot(t, e, n) {
  t.$$.on_destroy.push(D(e, n));
}
function at(t, e, n, r) {
  if (t) {
    const i = A(t, e, n, r);
    return t[0](i);
  }
}
function A(t, e, n, r) {
  return t[1] && r ? P(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function ut(t, e, n, r) {
  if (t[2] && r) {
    const i = t[2](r(n));
    if (e.dirty === void 0) return i;
    if (typeof i == "object") {
      const o = [],
        s = Math.max(e.dirty.length, i.length);
      for (let l = 0; l < s; l += 1) o[l] = e.dirty[l] | i[l];
      return o;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function ft(t, e, n, r, i, o) {
  if (i) {
    const s = A(e, n, r, o);
    t.p(s, i);
  }
}
function _t(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let r = 0; r < n; r++) e[r] = -1;
    return e;
  }
  return -1;
}
function dt(t, e, n) {
  return t.set(n), e;
}
function ht(t) {
  return t && L(t.destroy) ? t.destroy : N;
}
function mt(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"];
}
let y = !1;
function pt() {
  y = !0;
}
function yt() {
  y = !1;
}
function B(t, e, n, r) {
  for (; t < e; ) {
    const i = t + ((e - t) >> 1);
    n(i) <= r ? (t = i + 1) : (e = i);
  }
  return t;
}
function M(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const c = [];
    for (let a = 0; a < e.length; a++) {
      const u = e[a];
      u.claim_order !== void 0 && c.push(u);
    }
    e = c;
  }
  const n = new Int32Array(e.length + 1),
    r = new Int32Array(e.length);
  n[0] = -1;
  let i = 0;
  for (let c = 0; c < e.length; c++) {
    const a = e[c].claim_order,
      u =
        (i > 0 && e[n[i]].claim_order <= a
          ? i + 1
          : B(1, i, (I) => e[n[I]].claim_order, a)) - 1;
    r[c] = n[u] + 1;
    const E = u + 1;
    (n[E] = c), (i = Math.max(E, i));
  }
  const o = [],
    s = [];
  let l = e.length - 1;
  for (let c = n[i] + 1; c != 0; c = r[c - 1]) {
    for (o.push(e[c - 1]); l >= c; l--) s.push(e[l]);
    l--;
  }
  for (; l >= 0; l--) s.push(e[l]);
  o.reverse(), s.sort((c, a) => c.claim_order - a.claim_order);
  for (let c = 0, a = 0; c < s.length; c++) {
    for (; a < o.length && s[c].claim_order >= o[a].claim_order; ) a++;
    const u = a < o.length ? o[a] : null;
    t.insertBefore(s[c], u);
  }
}
function R(t, e) {
  t.appendChild(e);
}
function F(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function bt(t) {
  const e = C("style");
  return (e.textContent = "/* empty */"), z(F(t), e), e.sheet;
}
function z(t, e) {
  return R(t.head || t, e), e.sheet;
}
function U(t, e) {
  if (y) {
    for (
      M(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function gt(t, e, n) {
  y && !n
    ? U(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function xt(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function wt(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function C(t) {
  return document.createElement(t);
}
function W(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function w(t) {
  return document.createTextNode(t);
}
function Et() {
  return w(" ");
}
function vt() {
  return w("");
}
function kt(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function Nt(t) {
  return function (e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function j(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const G = ["width", "height"];
function J(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const r in e)
    e[r] == null
      ? t.removeAttribute(r)
      : r === "style"
      ? (t.style.cssText = e[r])
      : r === "__value"
      ? (t.value = t[r] = e[r])
      : n[r] && n[r].set && G.indexOf(r) === -1
      ? (t[r] = e[r])
      : j(t, r, e[r]);
}
function K(t, e) {
  Object.keys(e).forEach((n) => {
    Q(t, n, e[n]);
  });
}
function Q(t, e, n) {
  const r = e.toLowerCase();
  r in t
    ? (t[r] = typeof t[r] == "boolean" && n === "" ? !0 : n)
    : e in t
    ? (t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n)
    : j(t, e, n);
}
function Dt(t) {
  return /-/.test(t) ? K : J;
}
function At(t) {
  return t.dataset.svelteH;
}
function Ct(t) {
  return t === "" ? null : +t;
}
function jt(t) {
  return Array.from(t.childNodes);
}
function V(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function O(t, e, n, r, i = !1) {
  V(t);
  const o = (() => {
    for (let s = t.claim_info.last_index; s < t.length; s++) {
      const l = t[s];
      if (e(l)) {
        const c = n(l);
        return (
          c === void 0 ? t.splice(s, 1) : (t[s] = c),
          i || (t.claim_info.last_index = s),
          l
        );
      }
    }
    for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
      const l = t[s];
      if (e(l)) {
        const c = n(l);
        return (
          c === void 0 ? t.splice(s, 1) : (t[s] = c),
          i
            ? c === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = s),
          l
        );
      }
    }
    return r();
  })();
  return (
    (o.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    o
  );
}
function S(t, e, n, r) {
  return O(
    t,
    (i) => i.nodeName === e,
    (i) => {
      const o = [];
      for (let s = 0; s < i.attributes.length; s++) {
        const l = i.attributes[s];
        n[l.name] || o.push(l.name);
      }
      o.forEach((s) => i.removeAttribute(s));
    },
    () => r(e)
  );
}
function Ot(t, e, n) {
  return S(t, e, n, C);
}
function St(t, e, n) {
  return S(t, e, n, W);
}
function X(t, e) {
  return O(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const r = "" + e;
      if (n.data.startsWith(r)) {
        if (n.data.length !== r.length) return n.splitText(r.length);
      } else n.data = r;
    },
    () => w(e),
    !0
  );
}
function Tt(t) {
  return X(t, " ");
}
function It(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function Pt(t, e) {
  t.value = e ?? "";
}
function qt(t, e, n, r) {
  n == null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, r ? "important" : "");
}
function Ht(t, e, n) {
  t.classList.toggle(e, !!n);
}
function Y(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
function Lt(t, e) {
  const n = [];
  let r = 0;
  for (const i of e.childNodes)
    if (i.nodeType === 8) {
      const o = i.textContent.trim();
      o === `HEAD_${t}_END`
        ? ((r -= 1), n.push(i))
        : o === `HEAD_${t}_START` && ((r += 1), n.push(i));
    } else r > 0 && n.push(i);
  return n;
}
function Bt(t, e) {
  return new t(e);
}
let p;
function b(t) {
  p = t;
}
function d() {
  if (!p) throw new Error("Function called outside component initialization");
  return p;
}
function Mt(t) {
  d().$$.on_mount.push(t);
}
function Rt(t) {
  d().$$.after_update.push(t);
}
function Ft(t) {
  d().$$.on_destroy.push(t);
}
function zt() {
  const t = d();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const o = Y(e, n, { cancelable: r });
      return (
        i.slice().forEach((s) => {
          s.call(t, o);
        }),
        !o.defaultPrevented
      );
    }
    return !0;
  };
}
function Ut(t, e) {
  return d().$$.context.set(t, e), e;
}
function Wt(t) {
  return d().$$.context.get(t);
}
function Gt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const h = [],
  v = [];
let _ = [];
const k = [],
  T = Promise.resolve();
let x = !1;
function Z() {
  x || ((x = !0), T.then(tt));
}
function Jt() {
  return Z(), T;
}
function $(t) {
  _.push(t);
}
const g = new Set();
let f = 0;
function tt() {
  if (f !== 0) return;
  const t = p;
  do {
    try {
      for (; f < h.length; ) {
        const e = h[f];
        f++, b(e), et(e.$$);
      }
    } catch (e) {
      throw ((h.length = 0), (f = 0), e);
    }
    for (b(null), h.length = 0, f = 0; v.length; ) v.pop()();
    for (let e = 0; e < _.length; e += 1) {
      const n = _[e];
      g.has(n) || (g.add(n), n());
    }
    _.length = 0;
  } while (h.length);
  for (; k.length; ) k.pop()();
  (x = !1), g.clear(), b(t);
}
function et(t) {
  if (t.fragment !== null) {
    t.update(), H(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach($);
  }
}
function Kt(t) {
  const e = [],
    n = [];
  _.forEach((r) => (t.indexOf(r) === -1 ? e.push(r) : n.push(r))),
    n.forEach((r) => r()),
    (_ = e);
}
export {
  ct as $,
  dt as A,
  N as B,
  wt as C,
  st as D,
  Ht as E,
  qt as F,
  Mt as G,
  v as H,
  D as I,
  L as J,
  $ as K,
  P as L,
  Dt as M,
  Rt as N,
  Jt as O,
  Bt as P,
  Pt as Q,
  ht as R,
  Ct as S,
  Ut as T,
  Ft as U,
  F as V,
  bt as W,
  Y as X,
  nt as Y,
  rt as Z,
  tt as _,
  Et as a,
  Kt as a0,
  p as a1,
  b as a2,
  q as a3,
  h as a4,
  Z as a5,
  pt as a6,
  yt as a7,
  Wt as a8,
  lt as a9,
  mt as aa,
  Lt as ab,
  zt as ac,
  vt as b,
  ot as c,
  Tt as d,
  C as e,
  Ot as f,
  jt as g,
  X as h,
  xt as i,
  j,
  gt as k,
  U as l,
  It as m,
  at as n,
  W as o,
  At as p,
  St as q,
  kt as r,
  it as s,
  w as t,
  Nt as u,
  ft as v,
  _t as w,
  ut as x,
  H as y,
  Gt as z,
};
//# sourceMappingURL=scheduler.023ced08.js.map
