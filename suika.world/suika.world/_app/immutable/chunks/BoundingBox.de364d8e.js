import { g as Wr, c as Qe, a as mn } from "./_commonjsHelpers.691cbe36.js";
import "./index.c7cfddcd.js";
(function () {
  try {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      t = new Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "8f5bd865-8abf-45cb-87d9-0aea8d85adf4"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-8f5bd865-8abf-45cb-87d9-0aea8d85adf4"));
  } catch {}
})();
const bn = {
    createCanvas: (e, t) => {
      const r = document.createElement("canvas");
      return (r.width = e), (r.height = t), r;
    },
    getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
    getWebGLRenderingContext: () => WebGLRenderingContext,
    getNavigator: () => navigator,
    getBaseUrl: () => document.baseURI ?? window.location.href,
    getFontFaceSet: () => document.fonts,
    fetch: (e, t) => fetch(e, t),
    parseXML: (e) => new DOMParser().parseFromString(e, "text/xml"),
  },
  Fe = {
    ADAPTER: bn,
    RESOLUTION: 1,
    CREATE_IMAGE_BITMAP: !1,
    ROUND_PIXELS: !1,
  };
var st = /iPhone/i,
  Jt = /iPod/i,
  Qt = /iPad/i,
  Kt = /\biOS-universal(?:.+)Mac\b/i,
  ut = /\bAndroid(?:.+)Mobile\b/i,
  Dt = /Android/i,
  be = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
  qe = /Silk/i,
  ae = /Windows Phone/i,
  Yt = /\bWindows(?:.+)ARM\b/i,
  er = /BlackBerry/i,
  tr = /BB10/i,
  rr = /Opera Mini/i,
  nr = /\b(CriOS|Chrome)(?:.+)Mobile/i,
  or = /Mobile(?:.+)Firefox\b/i,
  ar = function (e) {
    return (
      typeof e < "u" &&
      e.platform === "MacIntel" &&
      typeof e.maxTouchPoints == "number" &&
      e.maxTouchPoints > 1 &&
      typeof MSStream > "u"
    );
  };
function xn(e) {
  return function (t) {
    return t.test(e);
  };
}
function ir(e) {
  var t = { userAgent: "", platform: "", maxTouchPoints: 0 };
  !e && typeof navigator < "u"
    ? (t = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0,
      })
    : typeof e == "string"
    ? (t.userAgent = e)
    : e &&
      e.userAgent &&
      (t = {
        userAgent: e.userAgent,
        platform: e.platform,
        maxTouchPoints: e.maxTouchPoints || 0,
      });
  var r = t.userAgent,
    n = r.split("[FBAN");
  typeof n[1] < "u" && (r = n[0]),
    (n = r.split("Twitter")),
    typeof n[1] < "u" && (r = n[0]);
  var o = xn(r),
    a = {
      apple: {
        phone: o(st) && !o(ae),
        ipod: o(Jt),
        tablet: !o(st) && (o(Qt) || ar(t)) && !o(ae),
        universal: o(Kt),
        device: (o(st) || o(Jt) || o(Qt) || o(Kt) || ar(t)) && !o(ae),
      },
      amazon: { phone: o(be), tablet: !o(be) && o(qe), device: o(be) || o(qe) },
      android: {
        phone: (!o(ae) && o(be)) || (!o(ae) && o(ut)),
        tablet: !o(ae) && !o(be) && !o(ut) && (o(qe) || o(Dt)),
        device:
          (!o(ae) && (o(be) || o(qe) || o(ut) || o(Dt))) || o(/\bokhttp\b/i),
      },
      windows: { phone: o(ae), tablet: o(Yt), device: o(ae) || o(Yt) },
      other: {
        blackberry: o(er),
        blackberry10: o(tr),
        opera: o(rr),
        firefox: o(or),
        chrome: o(nr),
        device: o(er) || o(tr) || o(rr) || o(or) || o(nr),
      },
      any: !1,
      phone: !1,
      tablet: !1,
    };
  return (
    (a.any =
      a.apple.device || a.android.device || a.windows.device || a.other.device),
    (a.phone = a.apple.phone || a.android.phone || a.windows.phone),
    (a.tablet = a.apple.tablet || a.android.tablet || a.windows.tablet),
    a
  );
}
const wn = ir.default ?? ir,
  Ei = wn(globalThis.navigator);
Fe.RETINA_PREFIX = /@([0-9\.]+)x/;
Fe.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
var qr = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    r = "~";
  function n() {}
  Object.create &&
    ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
  function o(s, u, l) {
    (this.fn = s), (this.context = u), (this.once = l || !1);
  }
  function a(s, u, l, p, c) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var y = new o(l, p || s, c),
      h = r ? r + u : u;
    return (
      s._events[h]
        ? s._events[h].fn
          ? (s._events[h] = [s._events[h], y])
          : s._events[h].push(y)
        : ((s._events[h] = y), s._eventsCount++),
      s
    );
  }
  function f(s, u) {
    --s._eventsCount === 0 ? (s._events = new n()) : delete s._events[u];
  }
  function i() {
    (this._events = new n()), (this._eventsCount = 0);
  }
  (i.prototype.eventNames = function () {
    var u = [],
      l,
      p;
    if (this._eventsCount === 0) return u;
    for (p in (l = this._events)) t.call(l, p) && u.push(r ? p.slice(1) : p);
    return Object.getOwnPropertySymbols
      ? u.concat(Object.getOwnPropertySymbols(l))
      : u;
  }),
    (i.prototype.listeners = function (u) {
      var l = r ? r + u : u,
        p = this._events[l];
      if (!p) return [];
      if (p.fn) return [p.fn];
      for (var c = 0, y = p.length, h = new Array(y); c < y; c++)
        h[c] = p[c].fn;
      return h;
    }),
    (i.prototype.listenerCount = function (u) {
      var l = r ? r + u : u,
        p = this._events[l];
      return p ? (p.fn ? 1 : p.length) : 0;
    }),
    (i.prototype.emit = function (u, l, p, c, y, h) {
      var w = r ? r + u : u;
      if (!this._events[w]) return !1;
      var v = this._events[w],
        x = arguments.length,
        g,
        d;
      if (v.fn) {
        switch ((v.once && this.removeListener(u, v.fn, void 0, !0), x)) {
          case 1:
            return v.fn.call(v.context), !0;
          case 2:
            return v.fn.call(v.context, l), !0;
          case 3:
            return v.fn.call(v.context, l, p), !0;
          case 4:
            return v.fn.call(v.context, l, p, c), !0;
          case 5:
            return v.fn.call(v.context, l, p, c, y), !0;
          case 6:
            return v.fn.call(v.context, l, p, c, y, h), !0;
        }
        for (d = 1, g = new Array(x - 1); d < x; d++) g[d - 1] = arguments[d];
        v.fn.apply(v.context, g);
      } else {
        var m = v.length,
          _;
        for (d = 0; d < m; d++)
          switch (
            (v[d].once && this.removeListener(u, v[d].fn, void 0, !0), x)
          ) {
            case 1:
              v[d].fn.call(v[d].context);
              break;
            case 2:
              v[d].fn.call(v[d].context, l);
              break;
            case 3:
              v[d].fn.call(v[d].context, l, p);
              break;
            case 4:
              v[d].fn.call(v[d].context, l, p, c);
              break;
            default:
              if (!g)
                for (_ = 1, g = new Array(x - 1); _ < x; _++)
                  g[_ - 1] = arguments[_];
              v[d].fn.apply(v[d].context, g);
          }
      }
      return !0;
    }),
    (i.prototype.on = function (u, l, p) {
      return a(this, u, l, p, !1);
    }),
    (i.prototype.once = function (u, l, p) {
      return a(this, u, l, p, !0);
    }),
    (i.prototype.removeListener = function (u, l, p, c) {
      var y = r ? r + u : u;
      if (!this._events[y]) return this;
      if (!l) return f(this, y), this;
      var h = this._events[y];
      if (h.fn)
        h.fn === l && (!c || h.once) && (!p || h.context === p) && f(this, y);
      else {
        for (var w = 0, v = [], x = h.length; w < x; w++)
          (h[w].fn !== l || (c && !h[w].once) || (p && h[w].context !== p)) &&
            v.push(h[w]);
        v.length ? (this._events[y] = v.length === 1 ? v[0] : v) : f(this, y);
      }
      return this;
    }),
    (i.prototype.removeAllListeners = function (u) {
      var l;
      return (
        u
          ? ((l = r ? r + u : u), this._events[l] && f(this, l))
          : ((this._events = new n()), (this._eventsCount = 0)),
        this
      );
    }),
    (i.prototype.off = i.prototype.removeListener),
    (i.prototype.addListener = i.prototype.on),
    (i.prefixed = r),
    (i.EventEmitter = i),
    (e.exports = i);
})(qr);
var In = qr.exports;
const $i = Wr(In);
var Vt = { exports: {} };
Vt.exports = at;
Vt.exports.default = at;
function at(e, t, r) {
  r = r || 2;
  var n = t && t.length,
    o = n ? t[0] * r : e.length,
    a = Zr(e, 0, o, r, !0),
    f = [];
  if (!a || a.next === a.prev) return f;
  var i, s, u, l, p, c, y;
  if ((n && (a = Rn(e, t, a, r)), e.length > 80 * r)) {
    (i = u = e[0]), (s = l = e[1]);
    for (var h = r; h < o; h += r)
      (p = e[h]),
        (c = e[h + 1]),
        p < i && (i = p),
        c < s && (s = c),
        p > u && (u = p),
        c > l && (l = c);
    (y = Math.max(u - i, l - s)), (y = y !== 0 ? 32767 / y : 0);
  }
  return ke(a, f, r, i, s, y, 0), f;
}
function Zr(e, t, r, n, o) {
  var a, f;
  if (o === Pt(e, t, r, n) > 0)
    for (a = t; a < r; a += n) f = fr(a, e[a], e[a + 1], f);
  else for (a = r - n; a >= t; a -= n) f = fr(a, e[a], e[a + 1], f);
  return f && it(f, f.next) && (Be(f), (f = f.next)), f;
}
function ge(e, t) {
  if (!e) return e;
  t || (t = e);
  var r = e,
    n;
  do
    if (
      ((n = !1), !r.steiner && (it(r, r.next) || O(r.prev, r, r.next) === 0))
    ) {
      if ((Be(r), (r = t = r.prev), r === r.next)) break;
      n = !0;
    } else r = r.next;
  while (n || r !== t);
  return t;
}
function ke(e, t, r, n, o, a, f) {
  if (e) {
    !f && a && Fn(e, n, o, a);
    for (var i = e, s, u; e.prev !== e.next; ) {
      if (((s = e.prev), (u = e.next), a ? _n(e, n, o, a) : An(e))) {
        t.push((s.i / r) | 0),
          t.push((e.i / r) | 0),
          t.push((u.i / r) | 0),
          Be(e),
          (e = u.next),
          (i = u.next);
        continue;
      }
      if (((e = u), e === i)) {
        f
          ? f === 1
            ? ((e = Nn(ge(e), t, r)), ke(e, t, r, n, o, a, 2))
            : f === 2 && Pn(e, t, r, n, o, a)
          : ke(ge(e), t, r, n, o, a, 1);
        break;
      }
    }
  }
}
function An(e) {
  var t = e.prev,
    r = e,
    n = e.next;
  if (O(t, r, n) >= 0) return !1;
  for (
    var o = t.x,
      a = r.x,
      f = n.x,
      i = t.y,
      s = r.y,
      u = n.y,
      l = o < a ? (o < f ? o : f) : a < f ? a : f,
      p = i < s ? (i < u ? i : u) : s < u ? s : u,
      c = o > a ? (o > f ? o : f) : a > f ? a : f,
      y = i > s ? (i > u ? i : u) : s > u ? s : u,
      h = n.next;
    h !== t;

  ) {
    if (
      h.x >= l &&
      h.x <= c &&
      h.y >= p &&
      h.y <= y &&
      _e(o, i, a, s, f, u, h.x, h.y) &&
      O(h.prev, h, h.next) >= 0
    )
      return !1;
    h = h.next;
  }
  return !0;
}
function _n(e, t, r, n) {
  var o = e.prev,
    a = e,
    f = e.next;
  if (O(o, a, f) >= 0) return !1;
  for (
    var i = o.x,
      s = a.x,
      u = f.x,
      l = o.y,
      p = a.y,
      c = f.y,
      y = i < s ? (i < u ? i : u) : s < u ? s : u,
      h = l < p ? (l < c ? l : c) : p < c ? p : c,
      w = i > s ? (i > u ? i : u) : s > u ? s : u,
      v = l > p ? (l > c ? l : c) : p > c ? p : c,
      x = _t(y, h, t, r, n),
      g = _t(w, v, t, r, n),
      d = e.prevZ,
      m = e.nextZ;
    d && d.z >= x && m && m.z <= g;

  ) {
    if (
      (d.x >= y &&
        d.x <= w &&
        d.y >= h &&
        d.y <= v &&
        d !== o &&
        d !== f &&
        _e(i, l, s, p, u, c, d.x, d.y) &&
        O(d.prev, d, d.next) >= 0) ||
      ((d = d.prevZ),
      m.x >= y &&
        m.x <= w &&
        m.y >= h &&
        m.y <= v &&
        m !== o &&
        m !== f &&
        _e(i, l, s, p, u, c, m.x, m.y) &&
        O(m.prev, m, m.next) >= 0)
    )
      return !1;
    m = m.nextZ;
  }
  for (; d && d.z >= x; ) {
    if (
      d.x >= y &&
      d.x <= w &&
      d.y >= h &&
      d.y <= v &&
      d !== o &&
      d !== f &&
      _e(i, l, s, p, u, c, d.x, d.y) &&
      O(d.prev, d, d.next) >= 0
    )
      return !1;
    d = d.prevZ;
  }
  for (; m && m.z <= g; ) {
    if (
      m.x >= y &&
      m.x <= w &&
      m.y >= h &&
      m.y <= v &&
      m !== o &&
      m !== f &&
      _e(i, l, s, p, u, c, m.x, m.y) &&
      O(m.prev, m, m.next) >= 0
    )
      return !1;
    m = m.nextZ;
  }
  return !0;
}
function Nn(e, t, r) {
  var n = e;
  do {
    var o = n.prev,
      a = n.next.next;
    !it(o, a) &&
      zr(o, n, n.next, a) &&
      He(o, a) &&
      He(a, o) &&
      (t.push((o.i / r) | 0),
      t.push((n.i / r) | 0),
      t.push((a.i / r) | 0),
      Be(n),
      Be(n.next),
      (n = e = a)),
      (n = n.next);
  } while (n !== e);
  return ge(n);
}
function Pn(e, t, r, n, o, a) {
  var f = e;
  do {
    for (var i = f.next.next; i !== f.prev; ) {
      if (f.i !== i.i && Sn(f, i)) {
        var s = jr(f, i);
        (f = ge(f, f.next)),
          (s = ge(s, s.next)),
          ke(f, t, r, n, o, a, 0),
          ke(s, t, r, n, o, a, 0);
        return;
      }
      i = i.next;
    }
    f = f.next;
  } while (f !== e);
}
function Rn(e, t, r, n) {
  var o = [],
    a,
    f,
    i,
    s,
    u;
  for (a = 0, f = t.length; a < f; a++)
    (i = t[a] * n),
      (s = a < f - 1 ? t[a + 1] * n : e.length),
      (u = Zr(e, i, s, n, !1)),
      u === u.next && (u.steiner = !0),
      o.push($n(u));
  for (o.sort(On), a = 0; a < o.length; a++) r = Cn(o[a], r);
  return r;
}
function On(e, t) {
  return e.x - t.x;
}
function Cn(e, t) {
  var r = Tn(e, t);
  if (!r) return t;
  var n = jr(r, e);
  return ge(n, n.next), ge(r, r.next);
}
function Tn(e, t) {
  var r = t,
    n = e.x,
    o = e.y,
    a = -1 / 0,
    f;
  do {
    if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
      var i = r.x + ((o - r.y) * (r.next.x - r.x)) / (r.next.y - r.y);
      if (
        i <= n &&
        i > a &&
        ((a = i), (f = r.x < r.next.x ? r : r.next), i === n)
      )
        return f;
    }
    r = r.next;
  } while (r !== t);
  if (!f) return null;
  var s = f,
    u = f.x,
    l = f.y,
    p = 1 / 0,
    c;
  r = f;
  do
    n >= r.x &&
      r.x >= u &&
      n !== r.x &&
      _e(o < l ? n : a, o, u, l, o < l ? a : n, o, r.x, r.y) &&
      ((c = Math.abs(o - r.y) / (n - r.x)),
      He(r, e) &&
        (c < p || (c === p && (r.x > f.x || (r.x === f.x && Un(f, r))))) &&
        ((f = r), (p = c))),
      (r = r.next);
  while (r !== s);
  return f;
}
function Un(e, t) {
  return O(e.prev, e, t.prev) < 0 && O(t.next, e, e.next) < 0;
}
function Fn(e, t, r, n) {
  var o = e;
  do
    o.z === 0 && (o.z = _t(o.x, o.y, t, r, n)),
      (o.prevZ = o.prev),
      (o.nextZ = o.next),
      (o = o.next);
  while (o !== e);
  (o.prevZ.nextZ = null), (o.prevZ = null), En(o);
}
function En(e) {
  var t,
    r,
    n,
    o,
    a,
    f,
    i,
    s,
    u = 1;
  do {
    for (r = e, e = null, a = null, f = 0; r; ) {
      for (f++, n = r, i = 0, t = 0; t < u && (i++, (n = n.nextZ), !!n); t++);
      for (s = u; i > 0 || (s > 0 && n); )
        i !== 0 && (s === 0 || !n || r.z <= n.z)
          ? ((o = r), (r = r.nextZ), i--)
          : ((o = n), (n = n.nextZ), s--),
          a ? (a.nextZ = o) : (e = o),
          (o.prevZ = a),
          (a = o);
      r = n;
    }
    (a.nextZ = null), (u *= 2);
  } while (f > 1);
  return e;
}
function _t(e, t, r, n, o) {
  return (
    (e = ((e - r) * o) | 0),
    (t = ((t - n) * o) | 0),
    (e = (e | (e << 8)) & 16711935),
    (e = (e | (e << 4)) & 252645135),
    (e = (e | (e << 2)) & 858993459),
    (e = (e | (e << 1)) & 1431655765),
    (t = (t | (t << 8)) & 16711935),
    (t = (t | (t << 4)) & 252645135),
    (t = (t | (t << 2)) & 858993459),
    (t = (t | (t << 1)) & 1431655765),
    e | (t << 1)
  );
}
function $n(e) {
  var t = e,
    r = e;
  do (t.x < r.x || (t.x === r.x && t.y < r.y)) && (r = t), (t = t.next);
  while (t !== e);
  return r;
}
function _e(e, t, r, n, o, a, f, i) {
  return (
    (o - f) * (t - i) >= (e - f) * (a - i) &&
    (e - f) * (n - i) >= (r - f) * (t - i) &&
    (r - f) * (a - i) >= (o - f) * (n - i)
  );
}
function Sn(e, t) {
  return (
    e.next.i !== t.i &&
    e.prev.i !== t.i &&
    !Gn(e, t) &&
    ((He(e, t) &&
      He(t, e) &&
      Ln(e, t) &&
      (O(e.prev, e, t.prev) || O(e, t.prev, t))) ||
      (it(e, t) && O(e.prev, e, e.next) > 0 && O(t.prev, t, t.next) > 0))
  );
}
function O(e, t, r) {
  return (t.y - e.y) * (r.x - t.x) - (t.x - e.x) * (r.y - t.y);
}
function it(e, t) {
  return e.x === t.x && e.y === t.y;
}
function zr(e, t, r, n) {
  var o = ze(O(e, t, r)),
    a = ze(O(e, t, n)),
    f = ze(O(r, n, e)),
    i = ze(O(r, n, t));
  return !!(
    (o !== a && f !== i) ||
    (o === 0 && Ze(e, r, t)) ||
    (a === 0 && Ze(e, n, t)) ||
    (f === 0 && Ze(r, e, n)) ||
    (i === 0 && Ze(r, t, n))
  );
}
function Ze(e, t, r) {
  return (
    t.x <= Math.max(e.x, r.x) &&
    t.x >= Math.min(e.x, r.x) &&
    t.y <= Math.max(e.y, r.y) &&
    t.y >= Math.min(e.y, r.y)
  );
}
function ze(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Gn(e, t) {
  var r = e;
  do {
    if (
      r.i !== e.i &&
      r.next.i !== e.i &&
      r.i !== t.i &&
      r.next.i !== t.i &&
      zr(r, r.next, e, t)
    )
      return !0;
    r = r.next;
  } while (r !== e);
  return !1;
}
function He(e, t) {
  return O(e.prev, e, e.next) < 0
    ? O(e, t, e.next) >= 0 && O(e, e.prev, t) >= 0
    : O(e, t, e.prev) < 0 || O(e, e.next, t) < 0;
}
function Ln(e, t) {
  var r = e,
    n = !1,
    o = (e.x + t.x) / 2,
    a = (e.y + t.y) / 2;
  do
    r.y > a != r.next.y > a &&
      r.next.y !== r.y &&
      o < ((r.next.x - r.x) * (a - r.y)) / (r.next.y - r.y) + r.x &&
      (n = !n),
      (r = r.next);
  while (r !== e);
  return n;
}
function jr(e, t) {
  var r = new Nt(e.i, e.x, e.y),
    n = new Nt(t.i, t.x, t.y),
    o = e.next,
    a = t.prev;
  return (
    (e.next = t),
    (t.prev = e),
    (r.next = o),
    (o.prev = r),
    (n.next = r),
    (r.prev = n),
    (a.next = n),
    (n.prev = a),
    n
  );
}
function fr(e, t, r, n) {
  var o = new Nt(e, t, r);
  return (
    n
      ? ((o.next = n.next), (o.prev = n), (n.next.prev = o), (n.next = o))
      : ((o.prev = o), (o.next = o)),
    o
  );
}
function Be(e) {
  (e.next.prev = e.prev),
    (e.prev.next = e.next),
    e.prevZ && (e.prevZ.nextZ = e.nextZ),
    e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function Nt(e, t, r) {
  (this.i = e),
    (this.x = t),
    (this.y = r),
    (this.prev = null),
    (this.next = null),
    (this.z = 0),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}
at.deviation = function (e, t, r, n) {
  var o = t && t.length,
    a = o ? t[0] * r : e.length,
    f = Math.abs(Pt(e, 0, a, r));
  if (o)
    for (var i = 0, s = t.length; i < s; i++) {
      var u = t[i] * r,
        l = i < s - 1 ? t[i + 1] * r : e.length;
      f -= Math.abs(Pt(e, u, l, r));
    }
  var p = 0;
  for (i = 0; i < n.length; i += 3) {
    var c = n[i] * r,
      y = n[i + 1] * r,
      h = n[i + 2] * r;
    p += Math.abs(
      (e[c] - e[h]) * (e[y + 1] - e[c + 1]) -
        (e[c] - e[y]) * (e[h + 1] - e[c + 1])
    );
  }
  return f === 0 && p === 0 ? 0 : Math.abs((p - f) / f);
};
function Pt(e, t, r, n) {
  for (var o = 0, a = t, f = r - n; a < r; a += n)
    (o += (e[f] - e[a]) * (e[a + 1] + e[f + 1])), (f = a);
  return o;
}
at.flatten = function (e) {
  for (
    var t = e[0][0].length,
      r = { vertices: [], holes: [], dimensions: t },
      n = 0,
      o = 0;
    o < e.length;
    o++
  ) {
    for (var a = 0; a < e[o].length; a++)
      for (var f = 0; f < t; f++) r.vertices.push(e[o][a][f]);
    o > 0 && ((n += e[o - 1].length), r.holes.push(n));
  }
  return r;
};
var kn = Vt.exports;
const Si = Wr(kn);
var et = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */ et.exports;
(function (e, t) {
  (function (r) {
    var n = t && !t.nodeType && t,
      o = e && !e.nodeType && e,
      a = typeof Qe == "object" && Qe;
    (a.global === a || a.window === a || a.self === a) && (r = a);
    var f,
      i = 2147483647,
      s = 36,
      u = 1,
      l = 26,
      p = 38,
      c = 700,
      y = 72,
      h = 128,
      w = "-",
      v = /^xn--/,
      x = /[^\x20-\x7E]/,
      g = /[\x2E\u3002\uFF0E\uFF61]/g,
      d = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
      },
      m = s - u,
      _ = Math.floor,
      C = String.fromCharCode,
      L;
    function P(b) {
      throw new RangeError(d[b]);
    }
    function U(b, I) {
      for (var N = b.length, R = []; N--; ) R[N] = I(b[N]);
      return R;
    }
    function k(b, I) {
      var N = b.split("@"),
        R = "";
      N.length > 1 && ((R = N[0] + "@"), (b = N[1])), (b = b.replace(g, "."));
      var T = b.split("."),
        q = U(T, I).join(".");
      return R + q;
    }
    function M(b) {
      for (var I = [], N = 0, R = b.length, T, q; N < R; )
        (T = b.charCodeAt(N++)),
          T >= 55296 && T <= 56319 && N < R
            ? ((q = b.charCodeAt(N++)),
              (q & 64512) == 56320
                ? I.push(((T & 1023) << 10) + (q & 1023) + 65536)
                : (I.push(T), N--))
            : I.push(T);
      return I;
    }
    function H(b) {
      return U(b, function (I) {
        var N = "";
        return (
          I > 65535 &&
            ((I -= 65536),
            (N += C(((I >>> 10) & 1023) | 55296)),
            (I = 56320 | (I & 1023))),
          (N += C(I)),
          N
        );
      }).join("");
    }
    function S(b) {
      return b - 48 < 10
        ? b - 22
        : b - 65 < 26
        ? b - 65
        : b - 97 < 26
        ? b - 97
        : s;
    }
    function z(b, I) {
      return b + 22 + 75 * (b < 26) - ((I != 0) << 5);
    }
    function K(b, I, N) {
      var R = 0;
      for (b = N ? _(b / c) : b >> 1, b += _(b / I); b > (m * l) >> 1; R += s)
        b = _(b / m);
      return _(R + ((m + 1) * b) / (b + p));
    }
    function Z(b) {
      var I = [],
        N = b.length,
        R,
        T = 0,
        q = h,
        G = y,
        j,
        D,
        ee,
        oe,
        B,
        J,
        Y,
        ue,
        he;
      for (j = b.lastIndexOf(w), j < 0 && (j = 0), D = 0; D < j; ++D)
        b.charCodeAt(D) >= 128 && P("not-basic"), I.push(b.charCodeAt(D));
      for (ee = j > 0 ? j + 1 : 0; ee < N; ) {
        for (
          oe = T, B = 1, J = s;
          ee >= N && P("invalid-input"),
            (Y = S(b.charCodeAt(ee++))),
            (Y >= s || Y > _((i - T) / B)) && P("overflow"),
            (T += Y * B),
            (ue = J <= G ? u : J >= G + l ? l : J - G),
            !(Y < ue);
          J += s
        )
          (he = s - ue), B > _(i / he) && P("overflow"), (B *= he);
        (R = I.length + 1),
          (G = K(T - oe, R, oe == 0)),
          _(T / R) > i - q && P("overflow"),
          (q += _(T / R)),
          (T %= R),
          I.splice(T++, 0, q);
      }
      return H(I);
    }
    function We(b) {
      var I,
        N,
        R,
        T,
        q,
        G,
        j,
        D,
        ee,
        oe,
        B,
        J = [],
        Y,
        ue,
        he,
        ft;
      for (b = M(b), Y = b.length, I = h, N = 0, q = y, G = 0; G < Y; ++G)
        (B = b[G]), B < 128 && J.push(C(B));
      for (R = T = J.length, T && J.push(w); R < Y; ) {
        for (j = i, G = 0; G < Y; ++G) (B = b[G]), B >= I && B < j && (j = B);
        for (
          ue = R + 1,
            j - I > _((i - N) / ue) && P("overflow"),
            N += (j - I) * ue,
            I = j,
            G = 0;
          G < Y;
          ++G
        )
          if (((B = b[G]), B < I && ++N > i && P("overflow"), B == I)) {
            for (
              D = N, ee = s;
              (oe = ee <= q ? u : ee >= q + l ? l : ee - q), !(D < oe);
              ee += s
            )
              (ft = D - oe),
                (he = s - oe),
                J.push(C(z(oe + (ft % he), 0))),
                (D = _(ft / he));
            J.push(C(z(D, 0))), (q = K(N, ue, R == T)), (N = 0), ++R;
          }
        ++N, ++I;
      }
      return J.join("");
    }
    function vn(b) {
      return k(b, function (I) {
        return v.test(I) ? Z(I.slice(4).toLowerCase()) : I;
      });
    }
    function gn(b) {
      return k(b, function (I) {
        return x.test(I) ? "xn--" + We(I) : I;
      });
    }
    if (
      ((f = {
        version: "1.4.1",
        ucs2: { decode: M, encode: H },
        decode: Z,
        encode: We,
        toASCII: gn,
        toUnicode: vn,
      }),
      n && o)
    )
      if (e.exports == n) o.exports = f;
      else for (L in f) f.hasOwnProperty(L) && (n[L] = f[L]);
    else r.punycode = f;
  })(Qe);
})(et, et.exports);
var Hn = et.exports,
  Bn = function () {
    if (
      typeof Symbol != "function" ||
      typeof Object.getOwnPropertySymbols != "function"
    )
      return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var t = {},
      r = Symbol("test"),
      n = Object(r);
    if (
      typeof r == "string" ||
      Object.prototype.toString.call(r) !== "[object Symbol]" ||
      Object.prototype.toString.call(n) !== "[object Symbol]"
    )
      return !1;
    var o = 42;
    t[r] = o;
    for (r in t) return !1;
    if (
      (typeof Object.keys == "function" && Object.keys(t).length !== 0) ||
      (typeof Object.getOwnPropertyNames == "function" &&
        Object.getOwnPropertyNames(t).length !== 0)
    )
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (
      a.length !== 1 ||
      a[0] !== r ||
      !Object.prototype.propertyIsEnumerable.call(t, r)
    )
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var f = Object.getOwnPropertyDescriptor(t, r);
      if (f.value !== o || f.enumerable !== !0) return !1;
    }
    return !0;
  },
  sr = typeof Symbol < "u" && Symbol,
  Vn = Bn,
  Wn = function () {
    return typeof sr != "function" ||
      typeof Symbol != "function" ||
      typeof sr("foo") != "symbol" ||
      typeof Symbol("bar") != "symbol"
      ? !1
      : Vn();
  },
  ur = { foo: {} },
  qn = Object,
  Zn = function () {
    return (
      { __proto__: ur }.foo === ur.foo && !({ __proto__: null } instanceof qn)
    );
  },
  zn = "Function.prototype.bind called on incompatible ",
  jn = Object.prototype.toString,
  Xn = Math.max,
  Mn = "[object Function]",
  lr = function (t, r) {
    for (var n = [], o = 0; o < t.length; o += 1) n[o] = t[o];
    for (var a = 0; a < r.length; a += 1) n[a + t.length] = r[a];
    return n;
  },
  Jn = function (t, r) {
    for (var n = [], o = r || 0, a = 0; o < t.length; o += 1, a += 1)
      n[a] = t[o];
    return n;
  },
  Qn = function (e, t) {
    for (var r = "", n = 0; n < e.length; n += 1)
      (r += e[n]), n + 1 < e.length && (r += t);
    return r;
  },
  Kn = function (t) {
    var r = this;
    if (typeof r != "function" || jn.apply(r) !== Mn)
      throw new TypeError(zn + r);
    for (
      var n = Jn(arguments, 1),
        o,
        a = function () {
          if (this instanceof o) {
            var l = r.apply(this, lr(n, arguments));
            return Object(l) === l ? l : this;
          }
          return r.apply(t, lr(n, arguments));
        },
        f = Xn(0, r.length - n.length),
        i = [],
        s = 0;
      s < f;
      s++
    )
      i[s] = "$" + s;
    if (
      ((o = Function(
        "binder",
        "return function (" +
          Qn(i, ",") +
          "){ return binder.apply(this,arguments); }"
      )(a)),
      r.prototype)
    ) {
      var u = function () {};
      (u.prototype = r.prototype),
        (o.prototype = new u()),
        (u.prototype = null);
    }
    return o;
  },
  Dn = Kn,
  Xr = Function.prototype.bind || Dn,
  cr = {}.hasOwnProperty,
  lt = Function.prototype.call,
  Yn = lt.bind
    ? lt.bind(cr)
    : function (e, t) {
        return lt.call(cr, e, t);
      },
  A,
  Re = SyntaxError,
  Mr = Function,
  Ne = TypeError,
  ct = function (e) {
    try {
      return Mr('"use strict"; return (' + e + ").constructor;")();
    } catch {}
  },
  de = Object.getOwnPropertyDescriptor;
if (de)
  try {
    de({}, "");
  } catch {
    de = null;
  }
var pt = function () {
    throw new Ne();
  },
  eo = de
    ? (function () {
        try {
          return arguments.callee, pt;
        } catch {
          try {
            return de(arguments, "callee").get;
          } catch {
            return pt;
          }
        }
      })()
    : pt,
  xe = Wn(),
  to = Zn(),
  E =
    Object.getPrototypeOf ||
    (to
      ? function (e) {
          return e.__proto__;
        }
      : null),
  Ie = {},
  ro = typeof Uint8Array > "u" || !E ? A : E(Uint8Array),
  ve = {
    "%AggregateError%": typeof AggregateError > "u" ? A : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? A : ArrayBuffer,
    "%ArrayIteratorPrototype%": xe && E ? E([][Symbol.iterator]()) : A,
    "%AsyncFromSyncIteratorPrototype%": A,
    "%AsyncFunction%": Ie,
    "%AsyncGenerator%": Ie,
    "%AsyncGeneratorFunction%": Ie,
    "%AsyncIteratorPrototype%": Ie,
    "%Atomics%": typeof Atomics > "u" ? A : Atomics,
    "%BigInt%": typeof BigInt > "u" ? A : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? A : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? A : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? A : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? A : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? A : Float64Array,
    "%FinalizationRegistry%":
      typeof FinalizationRegistry > "u" ? A : FinalizationRegistry,
    "%Function%": Mr,
    "%GeneratorFunction%": Ie,
    "%Int8Array%": typeof Int8Array > "u" ? A : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? A : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? A : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": xe && E ? E(E([][Symbol.iterator]())) : A,
    "%JSON%": typeof JSON == "object" ? JSON : A,
    "%Map%": typeof Map > "u" ? A : Map,
    "%MapIteratorPrototype%":
      typeof Map > "u" || !xe || !E ? A : E(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? A : Promise,
    "%Proxy%": typeof Proxy > "u" ? A : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? A : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? A : Set,
    "%SetIteratorPrototype%":
      typeof Set > "u" || !xe || !E ? A : E(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%":
      typeof SharedArrayBuffer > "u" ? A : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": xe && E ? E(""[Symbol.iterator]()) : A,
    "%Symbol%": xe ? Symbol : A,
    "%SyntaxError%": Re,
    "%ThrowTypeError%": eo,
    "%TypedArray%": ro,
    "%TypeError%": Ne,
    "%Uint8Array%": typeof Uint8Array > "u" ? A : Uint8Array,
    "%Uint8ClampedArray%":
      typeof Uint8ClampedArray > "u" ? A : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? A : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? A : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? A : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? A : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? A : WeakSet,
  };
if (E)
  try {
    null.error;
  } catch (e) {
    var no = E(E(e));
    ve["%Error.prototype%"] = no;
  }
var oo = function e(t) {
    var r;
    if (t === "%AsyncFunction%") r = ct("async function () {}");
    else if (t === "%GeneratorFunction%") r = ct("function* () {}");
    else if (t === "%AsyncGeneratorFunction%") r = ct("async function* () {}");
    else if (t === "%AsyncGenerator%") {
      var n = e("%AsyncGeneratorFunction%");
      n && (r = n.prototype);
    } else if (t === "%AsyncIteratorPrototype%") {
      var o = e("%AsyncGenerator%");
      o && E && (r = E(o.prototype));
    }
    return (ve[t] = r), r;
  },
  pr = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": [
      "AsyncGeneratorFunction",
      "prototype",
      "prototype",
    ],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"],
  },
  Ve = Xr,
  tt = Yn,
  ao = Ve.call(Function.call, Array.prototype.concat),
  io = Ve.call(Function.apply, Array.prototype.splice),
  hr = Ve.call(Function.call, String.prototype.replace),
  rt = Ve.call(Function.call, String.prototype.slice),
  fo = Ve.call(Function.call, RegExp.prototype.exec),
  so =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  uo = /\\(\\)?/g,
  lo = function (t) {
    var r = rt(t, 0, 1),
      n = rt(t, -1);
    if (r === "%" && n !== "%")
      throw new Re("invalid intrinsic syntax, expected closing `%`");
    if (n === "%" && r !== "%")
      throw new Re("invalid intrinsic syntax, expected opening `%`");
    var o = [];
    return (
      hr(t, so, function (a, f, i, s) {
        o[o.length] = i ? hr(s, uo, "$1") : f || a;
      }),
      o
    );
  },
  co = function (t, r) {
    var n = t,
      o;
    if ((tt(pr, n) && ((o = pr[n]), (n = "%" + o[0] + "%")), tt(ve, n))) {
      var a = ve[n];
      if ((a === Ie && (a = oo(n)), typeof a > "u" && !r))
        throw new Ne(
          "intrinsic " +
            t +
            " exists, but is not available. Please file an issue!"
        );
      return { alias: o, name: n, value: a };
    }
    throw new Re("intrinsic " + t + " does not exist!");
  },
  me = function (t, r) {
    if (typeof t != "string" || t.length === 0)
      throw new Ne("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r != "boolean")
      throw new Ne('"allowMissing" argument must be a boolean');
    if (fo(/^%?[^%]*%?$/, t) === null)
      throw new Re(
        "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
      );
    var n = lo(t),
      o = n.length > 0 ? n[0] : "",
      a = co("%" + o + "%", r),
      f = a.name,
      i = a.value,
      s = !1,
      u = a.alias;
    u && ((o = u[0]), io(n, ao([0, 1], u)));
    for (var l = 1, p = !0; l < n.length; l += 1) {
      var c = n[l],
        y = rt(c, 0, 1),
        h = rt(c, -1);
      if (
        (y === '"' ||
          y === "'" ||
          y === "`" ||
          h === '"' ||
          h === "'" ||
          h === "`") &&
        y !== h
      )
        throw new Re("property names with quotes must have matching quotes");
      if (
        ((c === "constructor" || !p) && (s = !0),
        (o += "." + c),
        (f = "%" + o + "%"),
        tt(ve, f))
      )
        i = ve[f];
      else if (i != null) {
        if (!(c in i)) {
          if (!r)
            throw new Ne(
              "base intrinsic for " +
                t +
                " exists, but the property is not available."
            );
          return;
        }
        if (de && l + 1 >= n.length) {
          var w = de(i, c);
          (p = !!w),
            p && "get" in w && !("originalValue" in w.get)
              ? (i = w.get)
              : (i = i[c]);
        } else (p = tt(i, c)), (i = i[c]);
        p && !s && (ve[f] = i);
      }
    }
    return i;
  },
  Jr = { exports: {} },
  po = me,
  Rt = po("%Object.defineProperty%", !0),
  Ot = function () {
    if (Rt)
      try {
        return Rt({}, "a", { value: 1 }), !0;
      } catch {
        return !1;
      }
    return !1;
  };
Ot.hasArrayLengthDefineBug = function () {
  if (!Ot()) return null;
  try {
    return Rt([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Qr = Ot,
  ho = me,
  Ke = ho("%Object.getOwnPropertyDescriptor%", !0);
if (Ke)
  try {
    Ke([], "length");
  } catch {
    Ke = null;
  }
var Kr = Ke,
  yo = Qr(),
  Wt = me,
  Ee = yo && Wt("%Object.defineProperty%", !0);
if (Ee)
  try {
    Ee({}, "a", { value: 1 });
  } catch {
    Ee = !1;
  }
var vo = Wt("%SyntaxError%"),
  we = Wt("%TypeError%"),
  yr = Kr,
  go = function (t, r, n) {
    if (!t || (typeof t != "object" && typeof t != "function"))
      throw new we("`obj` must be an object or a function`");
    if (typeof r != "string" && typeof r != "symbol")
      throw new we("`property` must be a string or a symbol`");
    if (
      arguments.length > 3 &&
      typeof arguments[3] != "boolean" &&
      arguments[3] !== null
    )
      throw new we("`nonEnumerable`, if provided, must be a boolean or null");
    if (
      arguments.length > 4 &&
      typeof arguments[4] != "boolean" &&
      arguments[4] !== null
    )
      throw new we("`nonWritable`, if provided, must be a boolean or null");
    if (
      arguments.length > 5 &&
      typeof arguments[5] != "boolean" &&
      arguments[5] !== null
    )
      throw new we("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new we("`loose`, if provided, must be a boolean");
    var o = arguments.length > 3 ? arguments[3] : null,
      a = arguments.length > 4 ? arguments[4] : null,
      f = arguments.length > 5 ? arguments[5] : null,
      i = arguments.length > 6 ? arguments[6] : !1,
      s = !!yr && yr(t, r);
    if (Ee)
      Ee(t, r, {
        configurable: f === null && s ? s.configurable : !f,
        enumerable: o === null && s ? s.enumerable : !o,
        value: n,
        writable: a === null && s ? s.writable : !a,
      });
    else if (i || (!o && !a && !f)) t[r] = n;
    else
      throw new vo(
        "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
      );
  },
  Dr = me,
  dr = go,
  mo = Qr(),
  vr = Kr,
  gr = Dr("%TypeError%"),
  bo = Dr("%Math.floor%"),
  xo = function (t, r) {
    if (typeof t != "function") throw new gr("`fn` is not a function");
    if (typeof r != "number" || r < 0 || r > 4294967295 || bo(r) !== r)
      throw new gr("`length` must be a positive 32-bit integer");
    var n = arguments.length > 2 && !!arguments[2],
      o = !0,
      a = !0;
    if ("length" in t && vr) {
      var f = vr(t, "length");
      f && !f.configurable && (o = !1), f && !f.writable && (a = !1);
    }
    return (
      (o || a || !n) && (mo ? dr(t, "length", r, !0, !0) : dr(t, "length", r)),
      t
    );
  };
(function (e) {
  var t = Xr,
    r = me,
    n = xo,
    o = r("%TypeError%"),
    a = r("%Function.prototype.apply%"),
    f = r("%Function.prototype.call%"),
    i = r("%Reflect.apply%", !0) || t.call(f, a),
    s = r("%Object.defineProperty%", !0),
    u = r("%Math.max%");
  if (s)
    try {
      s({}, "a", { value: 1 });
    } catch {
      s = null;
    }
  e.exports = function (c) {
    if (typeof c != "function") throw new o("a function is required");
    var y = i(t, f, arguments);
    return n(y, 1 + u(0, c.length - (arguments.length - 1)), !0);
  };
  var l = function () {
    return i(t, a, arguments);
  };
  s ? s(e.exports, "apply", { value: l }) : (e.exports.apply = l);
})(Jr);
var wo = Jr.exports,
  Yr = me,
  en = wo,
  Io = en(Yr("String.prototype.indexOf")),
  Ao = function (t, r) {
    var n = Yr(t, !!r);
    return typeof n == "function" && Io(t, ".prototype.") > -1 ? en(n) : n;
  };
const _o = {},
  No = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _o },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Po = mn(No);
var qt = typeof Map == "function" && Map.prototype,
  ht =
    Object.getOwnPropertyDescriptor && qt
      ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
      : null,
  nt = qt && ht && typeof ht.get == "function" ? ht.get : null,
  mr = qt && Map.prototype.forEach,
  Zt = typeof Set == "function" && Set.prototype,
  yt =
    Object.getOwnPropertyDescriptor && Zt
      ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
      : null,
  ot = Zt && yt && typeof yt.get == "function" ? yt.get : null,
  br = Zt && Set.prototype.forEach,
  Ro = typeof WeakMap == "function" && WeakMap.prototype,
  $e = Ro ? WeakMap.prototype.has : null,
  Oo = typeof WeakSet == "function" && WeakSet.prototype,
  Se = Oo ? WeakSet.prototype.has : null,
  Co = typeof WeakRef == "function" && WeakRef.prototype,
  xr = Co ? WeakRef.prototype.deref : null,
  To = Boolean.prototype.valueOf,
  Uo = Object.prototype.toString,
  Fo = Function.prototype.toString,
  Eo = String.prototype.match,
  zt = String.prototype.slice,
  ce = String.prototype.replace,
  $o = String.prototype.toUpperCase,
  wr = String.prototype.toLowerCase,
  tn = RegExp.prototype.test,
  Ir = Array.prototype.concat,
  ne = Array.prototype.join,
  So = Array.prototype.slice,
  Ar = Math.floor,
  Ct = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
  dt = Object.getOwnPropertySymbols,
  Tt =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? Symbol.prototype.toString
      : null,
  Oe = typeof Symbol == "function" && typeof Symbol.iterator == "object",
  W =
    typeof Symbol == "function" &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === Oe || "symbol")
      ? Symbol.toStringTag
      : null,
  rn = Object.prototype.propertyIsEnumerable,
  _r =
    (typeof Reflect == "function"
      ? Reflect.getPrototypeOf
      : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (e) {
          return e.__proto__;
        }
      : null);
function Nr(e, t) {
  if (
    e === 1 / 0 ||
    e === -1 / 0 ||
    e !== e ||
    (e && e > -1e3 && e < 1e3) ||
    tn.call(/e/, t)
  )
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -Ar(-e) : Ar(e);
    if (n !== e) {
      var o = String(n),
        a = zt.call(t, o.length + 1);
      return (
        ce.call(o, r, "$&_") +
        "." +
        ce.call(ce.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
      );
    }
  }
  return ce.call(t, r, "$&_");
}
var Ut = Po,
  Pr = Ut.custom,
  Rr = on(Pr) ? Pr : null,
  Go = function e(t, r, n, o) {
    var a = r || {};
    if (
      le(a, "quoteStyle") &&
      a.quoteStyle !== "single" &&
      a.quoteStyle !== "double"
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      le(a, "maxStringLength") &&
      (typeof a.maxStringLength == "number"
        ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0
        : a.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var f = le(a, "customInspect") ? a.customInspect : !0;
    if (typeof f != "boolean" && f !== "symbol")
      throw new TypeError(
        "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
      );
    if (
      le(a, "indent") &&
      a.indent !== null &&
      a.indent !== "	" &&
      !(parseInt(a.indent, 10) === a.indent && a.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      );
    if (le(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      );
    var i = a.numericSeparator;
    if (typeof t > "u") return "undefined";
    if (t === null) return "null";
    if (typeof t == "boolean") return t ? "true" : "false";
    if (typeof t == "string") return fn(t, a);
    if (typeof t == "number") {
      if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
      var s = String(t);
      return i ? Nr(t, s) : s;
    }
    if (typeof t == "bigint") {
      var u = String(t) + "n";
      return i ? Nr(t, u) : u;
    }
    var l = typeof a.depth > "u" ? 5 : a.depth;
    if ((typeof n > "u" && (n = 0), n >= l && l > 0 && typeof t == "object"))
      return Ft(t) ? "[Array]" : "[Object]";
    var p = ea(a, n);
    if (typeof o > "u") o = [];
    else if (an(o, t) >= 0) return "[Circular]";
    function c(S, z, K) {
      if ((z && ((o = So.call(o)), o.push(z)), K)) {
        var Z = { depth: a.depth };
        return (
          le(a, "quoteStyle") && (Z.quoteStyle = a.quoteStyle),
          e(S, Z, n + 1, o)
        );
      }
      return e(S, a, n + 1, o);
    }
    if (typeof t == "function" && !Or(t)) {
      var y = zo(t),
        h = je(t, c);
      return (
        "[Function" +
        (y ? ": " + y : " (anonymous)") +
        "]" +
        (h.length > 0 ? " { " + ne.call(h, ", ") + " }" : "")
      );
    }
    if (on(t)) {
      var w = Oe
        ? ce.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
        : Tt.call(t);
      return typeof t == "object" && !Oe ? Ue(w) : w;
    }
    if (Ko(t)) {
      for (
        var v = "<" + wr.call(String(t.nodeName)),
          x = t.attributes || [],
          g = 0;
        g < x.length;
        g++
      )
        v += " " + x[g].name + "=" + nn(Lo(x[g].value), "double", a);
      return (
        (v += ">"),
        t.childNodes && t.childNodes.length && (v += "..."),
        (v += "</" + wr.call(String(t.nodeName)) + ">"),
        v
      );
    }
    if (Ft(t)) {
      if (t.length === 0) return "[]";
      var d = je(t, c);
      return p && !Yo(d)
        ? "[" + Et(d, p) + "]"
        : "[ " + ne.call(d, ", ") + " ]";
    }
    if (Ho(t)) {
      var m = je(t, c);
      return !("cause" in Error.prototype) &&
        "cause" in t &&
        !rn.call(t, "cause")
        ? "{ [" +
            String(t) +
            "] " +
            ne.call(Ir.call("[cause]: " + c(t.cause), m), ", ") +
            " }"
        : m.length === 0
        ? "[" + String(t) + "]"
        : "{ [" + String(t) + "] " + ne.call(m, ", ") + " }";
    }
    if (typeof t == "object" && f) {
      if (Rr && typeof t[Rr] == "function" && Ut)
        return Ut(t, { depth: l - n });
      if (f !== "symbol" && typeof t.inspect == "function") return t.inspect();
    }
    if (jo(t)) {
      var _ = [];
      return (
        mr &&
          mr.call(t, function (S, z) {
            _.push(c(z, t, !0) + " => " + c(S, t));
          }),
        Cr("Map", nt.call(t), _, p)
      );
    }
    if (Jo(t)) {
      var C = [];
      return (
        br &&
          br.call(t, function (S) {
            C.push(c(S, t));
          }),
        Cr("Set", ot.call(t), C, p)
      );
    }
    if (Xo(t)) return vt("WeakMap");
    if (Qo(t)) return vt("WeakSet");
    if (Mo(t)) return vt("WeakRef");
    if (Vo(t)) return Ue(c(Number(t)));
    if (qo(t)) return Ue(c(Ct.call(t)));
    if (Wo(t)) return Ue(To.call(t));
    if (Bo(t)) return Ue(c(String(t)));
    if (typeof window < "u" && t === window) return "{ [object Window] }";
    if (t === Qe) return "{ [object globalThis] }";
    if (!ko(t) && !Or(t)) {
      var L = je(t, c),
        P = _r
          ? _r(t) === Object.prototype
          : t instanceof Object || t.constructor === Object,
        U = t instanceof Object ? "" : "null prototype",
        k =
          !P && W && Object(t) === t && W in t
            ? zt.call(pe(t), 8, -1)
            : U
            ? "Object"
            : "",
        M =
          P || typeof t.constructor != "function"
            ? ""
            : t.constructor.name
            ? t.constructor.name + " "
            : "",
        H =
          M +
          (k || U
            ? "[" + ne.call(Ir.call([], k || [], U || []), ": ") + "] "
            : "");
      return L.length === 0
        ? H + "{}"
        : p
        ? H + "{" + Et(L, p) + "}"
        : H + "{ " + ne.call(L, ", ") + " }";
    }
    return String(t);
  };
function nn(e, t, r) {
  var n = (r.quoteStyle || t) === "double" ? '"' : "'";
  return n + e + n;
}
function Lo(e) {
  return ce.call(String(e), /"/g, "&quot;");
}
function Ft(e) {
  return (
    pe(e) === "[object Array]" && (!W || !(typeof e == "object" && W in e))
  );
}
function ko(e) {
  return pe(e) === "[object Date]" && (!W || !(typeof e == "object" && W in e));
}
function Or(e) {
  return (
    pe(e) === "[object RegExp]" && (!W || !(typeof e == "object" && W in e))
  );
}
function Ho(e) {
  return (
    pe(e) === "[object Error]" && (!W || !(typeof e == "object" && W in e))
  );
}
function Bo(e) {
  return (
    pe(e) === "[object String]" && (!W || !(typeof e == "object" && W in e))
  );
}
function Vo(e) {
  return (
    pe(e) === "[object Number]" && (!W || !(typeof e == "object" && W in e))
  );
}
function Wo(e) {
  return (
    pe(e) === "[object Boolean]" && (!W || !(typeof e == "object" && W in e))
  );
}
function on(e) {
  if (Oe) return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol") return !0;
  if (!e || typeof e != "object" || !Tt) return !1;
  try {
    return Tt.call(e), !0;
  } catch {}
  return !1;
}
function qo(e) {
  if (!e || typeof e != "object" || !Ct) return !1;
  try {
    return Ct.call(e), !0;
  } catch {}
  return !1;
}
var Zo =
  Object.prototype.hasOwnProperty ||
  function (e) {
    return e in this;
  };
function le(e, t) {
  return Zo.call(e, t);
}
function pe(e) {
  return Uo.call(e);
}
function zo(e) {
  if (e.name) return e.name;
  var t = Eo.call(Fo.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function an(e, t) {
  if (e.indexOf) return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
  return -1;
}
function jo(e) {
  if (!nt || !e || typeof e != "object") return !1;
  try {
    nt.call(e);
    try {
      ot.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {}
  return !1;
}
function Xo(e) {
  if (!$e || !e || typeof e != "object") return !1;
  try {
    $e.call(e, $e);
    try {
      Se.call(e, Se);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {}
  return !1;
}
function Mo(e) {
  if (!xr || !e || typeof e != "object") return !1;
  try {
    return xr.call(e), !0;
  } catch {}
  return !1;
}
function Jo(e) {
  if (!ot || !e || typeof e != "object") return !1;
  try {
    ot.call(e);
    try {
      nt.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {}
  return !1;
}
function Qo(e) {
  if (!Se || !e || typeof e != "object") return !1;
  try {
    Se.call(e, Se);
    try {
      $e.call(e, $e);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {}
  return !1;
}
function Ko(e) {
  return !e || typeof e != "object"
    ? !1
    : typeof HTMLElement < "u" && e instanceof HTMLElement
    ? !0
    : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function fn(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength,
      n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return fn(zt.call(e, 0, t.maxStringLength), t) + n;
  }
  var o = ce.call(ce.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Do);
  return nn(o, "single", t);
}
function Do(e) {
  var t = e.charCodeAt(0),
    r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + $o.call(t.toString(16));
}
function Ue(e) {
  return "Object(" + e + ")";
}
function vt(e) {
  return e + " { ? }";
}
function Cr(e, t, r, n) {
  var o = n ? Et(r, n) : ne.call(r, ", ");
  return e + " (" + t + ") {" + o + "}";
}
function Yo(e) {
  for (var t = 0; t < e.length; t++)
    if (
      an(
        e[t],
        `
`
      ) >= 0
    )
      return !1;
  return !0;
}
function ea(e, t) {
  var r;
  if (e.indent === "	") r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = ne.call(Array(e.indent + 1), " ");
  else return null;
  return { base: r, prev: ne.call(Array(t + 1), r) };
}
function Et(e, t) {
  if (e.length === 0) return "";
  var r =
    `
` +
    t.prev +
    t.base;
  return (
    r +
    ne.call(e, "," + r) +
    `
` +
    t.prev
  );
}
function je(e, t) {
  var r = Ft(e),
    n = [];
  if (r) {
    n.length = e.length;
    for (var o = 0; o < e.length; o++) n[o] = le(e, o) ? t(e[o], e) : "";
  }
  var a = typeof dt == "function" ? dt(e) : [],
    f;
  if (Oe) {
    f = {};
    for (var i = 0; i < a.length; i++) f["$" + a[i]] = a[i];
  }
  for (var s in e)
    le(e, s) &&
      ((r && String(Number(s)) === s && s < e.length) ||
        (Oe && f["$" + s] instanceof Symbol) ||
        (tn.call(/[^\w$]/, s)
          ? n.push(t(s, e) + ": " + t(e[s], e))
          : n.push(s + ": " + t(e[s], e))));
  if (typeof dt == "function")
    for (var u = 0; u < a.length; u++)
      rn.call(e, a[u]) && n.push("[" + t(a[u]) + "]: " + t(e[a[u]], e));
  return n;
}
var jt = me,
  Te = Ao,
  ta = Go,
  ra = jt("%TypeError%"),
  Xe = jt("%WeakMap%", !0),
  Me = jt("%Map%", !0),
  na = Te("WeakMap.prototype.get", !0),
  oa = Te("WeakMap.prototype.set", !0),
  aa = Te("WeakMap.prototype.has", !0),
  ia = Te("Map.prototype.get", !0),
  fa = Te("Map.prototype.set", !0),
  sa = Te("Map.prototype.has", !0),
  Xt = function (e, t) {
    for (var r = e, n; (n = r.next) !== null; r = n)
      if (n.key === t)
        return (r.next = n.next), (n.next = e.next), (e.next = n), n;
  },
  ua = function (e, t) {
    var r = Xt(e, t);
    return r && r.value;
  },
  la = function (e, t, r) {
    var n = Xt(e, t);
    n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
  },
  ca = function (e, t) {
    return !!Xt(e, t);
  },
  pa = function () {
    var t,
      r,
      n,
      o = {
        assert: function (a) {
          if (!o.has(a)) throw new ra("Side channel does not contain " + ta(a));
        },
        get: function (a) {
          if (Xe && a && (typeof a == "object" || typeof a == "function")) {
            if (t) return na(t, a);
          } else if (Me) {
            if (r) return ia(r, a);
          } else if (n) return ua(n, a);
        },
        has: function (a) {
          if (Xe && a && (typeof a == "object" || typeof a == "function")) {
            if (t) return aa(t, a);
          } else if (Me) {
            if (r) return sa(r, a);
          } else if (n) return ca(n, a);
          return !1;
        },
        set: function (a, f) {
          Xe && a && (typeof a == "object" || typeof a == "function")
            ? (t || (t = new Xe()), oa(t, a, f))
            : Me
            ? (r || (r = new Me()), fa(r, a, f))
            : (n || (n = { key: {}, next: null }), la(n, a, f));
        },
      };
    return o;
  },
  ha = String.prototype.replace,
  ya = /%20/g,
  gt = { RFC1738: "RFC1738", RFC3986: "RFC3986" },
  Mt = {
    default: gt.RFC3986,
    formatters: {
      RFC1738: function (e) {
        return ha.call(e, ya, "+");
      },
      RFC3986: function (e) {
        return String(e);
      },
    },
    RFC1738: gt.RFC1738,
    RFC3986: gt.RFC3986,
  },
  da = Mt,
  mt = Object.prototype.hasOwnProperty,
  ye = Array.isArray,
  te = (function () {
    for (var e = [], t = 0; t < 256; ++t)
      e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e;
  })(),
  va = function (t) {
    for (; t.length > 1; ) {
      var r = t.pop(),
        n = r.obj[r.prop];
      if (ye(n)) {
        for (var o = [], a = 0; a < n.length; ++a)
          typeof n[a] < "u" && o.push(n[a]);
        r.obj[r.prop] = o;
      }
    }
  },
  sn = function (t, r) {
    for (
      var n = r && r.plainObjects ? Object.create(null) : {}, o = 0;
      o < t.length;
      ++o
    )
      typeof t[o] < "u" && (n[o] = t[o]);
    return n;
  },
  ga = function e(t, r, n) {
    if (!r) return t;
    if (typeof r != "object") {
      if (ye(t)) t.push(r);
      else if (t && typeof t == "object")
        ((n && (n.plainObjects || n.allowPrototypes)) ||
          !mt.call(Object.prototype, r)) &&
          (t[r] = !0);
      else return [t, r];
      return t;
    }
    if (!t || typeof t != "object") return [t].concat(r);
    var o = t;
    return (
      ye(t) && !ye(r) && (o = sn(t, n)),
      ye(t) && ye(r)
        ? (r.forEach(function (a, f) {
            if (mt.call(t, f)) {
              var i = t[f];
              i && typeof i == "object" && a && typeof a == "object"
                ? (t[f] = e(i, a, n))
                : t.push(a);
            } else t[f] = a;
          }),
          t)
        : Object.keys(r).reduce(function (a, f) {
            var i = r[f];
            return mt.call(a, f) ? (a[f] = e(a[f], i, n)) : (a[f] = i), a;
          }, o)
    );
  },
  ma = function (t, r) {
    return Object.keys(r).reduce(function (n, o) {
      return (n[o] = r[o]), n;
    }, t);
  },
  ba = function (e, t, r) {
    var n = e.replace(/\+/g, " ");
    if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(n);
    } catch {
      return n;
    }
  },
  xa = function (t, r, n, o, a) {
    if (t.length === 0) return t;
    var f = t;
    if (
      (typeof t == "symbol"
        ? (f = Symbol.prototype.toString.call(t))
        : typeof t != "string" && (f = String(t)),
      n === "iso-8859-1")
    )
      return escape(f).replace(/%u[0-9a-f]{4}/gi, function (l) {
        return "%26%23" + parseInt(l.slice(2), 16) + "%3B";
      });
    for (var i = "", s = 0; s < f.length; ++s) {
      var u = f.charCodeAt(s);
      if (
        u === 45 ||
        u === 46 ||
        u === 95 ||
        u === 126 ||
        (u >= 48 && u <= 57) ||
        (u >= 65 && u <= 90) ||
        (u >= 97 && u <= 122) ||
        (a === da.RFC1738 && (u === 40 || u === 41))
      ) {
        i += f.charAt(s);
        continue;
      }
      if (u < 128) {
        i = i + te[u];
        continue;
      }
      if (u < 2048) {
        i = i + (te[192 | (u >> 6)] + te[128 | (u & 63)]);
        continue;
      }
      if (u < 55296 || u >= 57344) {
        i =
          i +
          (te[224 | (u >> 12)] +
            te[128 | ((u >> 6) & 63)] +
            te[128 | (u & 63)]);
        continue;
      }
      (s += 1),
        (u = 65536 + (((u & 1023) << 10) | (f.charCodeAt(s) & 1023))),
        (i +=
          te[240 | (u >> 18)] +
          te[128 | ((u >> 12) & 63)] +
          te[128 | ((u >> 6) & 63)] +
          te[128 | (u & 63)]);
    }
    return i;
  },
  wa = function (t) {
    for (
      var r = [{ obj: { o: t }, prop: "o" }], n = [], o = 0;
      o < r.length;
      ++o
    )
      for (
        var a = r[o], f = a.obj[a.prop], i = Object.keys(f), s = 0;
        s < i.length;
        ++s
      ) {
        var u = i[s],
          l = f[u];
        typeof l == "object" &&
          l !== null &&
          n.indexOf(l) === -1 &&
          (r.push({ obj: f, prop: u }), n.push(l));
      }
    return va(r), t;
  },
  Ia = function (t) {
    return Object.prototype.toString.call(t) === "[object RegExp]";
  },
  Aa = function (t) {
    return !t || typeof t != "object"
      ? !1
      : !!(
          t.constructor &&
          t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
  },
  _a = function (t, r) {
    return [].concat(t, r);
  },
  Na = function (t, r) {
    if (ye(t)) {
      for (var n = [], o = 0; o < t.length; o += 1) n.push(r(t[o]));
      return n;
    }
    return r(t);
  },
  un = {
    arrayToObject: sn,
    assign: ma,
    combine: _a,
    compact: wa,
    decode: ba,
    encode: xa,
    isBuffer: Aa,
    isRegExp: Ia,
    maybeMap: Na,
    merge: ga,
  },
  ln = pa,
  De = un,
  Ge = Mt,
  Pa = Object.prototype.hasOwnProperty,
  Tr = {
    brackets: function (t) {
      return t + "[]";
    },
    comma: "comma",
    indices: function (t, r) {
      return t + "[" + r + "]";
    },
    repeat: function (t) {
      return t;
    },
  },
  fe = Array.isArray,
  Ra = Array.prototype.push,
  cn = function (e, t) {
    Ra.apply(e, fe(t) ? t : [t]);
  },
  Oa = Date.prototype.toISOString,
  Ur = Ge.default,
  V = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: De.encode,
    encodeValuesOnly: !1,
    format: Ur,
    formatter: Ge.formatters[Ur],
    indices: !1,
    serializeDate: function (t) {
      return Oa.call(t);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  Ca = function (t) {
    return (
      typeof t == "string" ||
      typeof t == "number" ||
      typeof t == "boolean" ||
      typeof t == "symbol" ||
      typeof t == "bigint"
    );
  },
  bt = {},
  Ta = function e(t, r, n, o, a, f, i, s, u, l, p, c, y, h, w, v) {
    for (var x = t, g = v, d = 0, m = !1; (g = g.get(bt)) !== void 0 && !m; ) {
      var _ = g.get(t);
      if (((d += 1), typeof _ < "u")) {
        if (_ === d) throw new RangeError("Cyclic object value");
        m = !0;
      }
      typeof g.get(bt) > "u" && (d = 0);
    }
    if (
      (typeof s == "function"
        ? (x = s(r, x))
        : x instanceof Date
        ? (x = p(x))
        : n === "comma" &&
          fe(x) &&
          (x = De.maybeMap(x, function (Z) {
            return Z instanceof Date ? p(Z) : Z;
          })),
      x === null)
    ) {
      if (a) return i && !h ? i(r, V.encoder, w, "key", c) : r;
      x = "";
    }
    if (Ca(x) || De.isBuffer(x)) {
      if (i) {
        var C = h ? r : i(r, V.encoder, w, "key", c);
        return [y(C) + "=" + y(i(x, V.encoder, w, "value", c))];
      }
      return [y(r) + "=" + y(String(x))];
    }
    var L = [];
    if (typeof x > "u") return L;
    var P;
    if (n === "comma" && fe(x))
      h && i && (x = De.maybeMap(x, i)),
        (P = [{ value: x.length > 0 ? x.join(",") || null : void 0 }]);
    else if (fe(s)) P = s;
    else {
      var U = Object.keys(x);
      P = u ? U.sort(u) : U;
    }
    for (
      var k = o && fe(x) && x.length === 1 ? r + "[]" : r, M = 0;
      M < P.length;
      ++M
    ) {
      var H = P[M],
        S = typeof H == "object" && typeof H.value < "u" ? H.value : x[H];
      if (!(f && S === null)) {
        var z = fe(x)
          ? typeof n == "function"
            ? n(k, H)
            : k
          : k + (l ? "." + H : "[" + H + "]");
        v.set(t, d);
        var K = ln();
        K.set(bt, v),
          cn(
            L,
            e(
              S,
              z,
              n,
              o,
              a,
              f,
              n === "comma" && h && fe(x) ? null : i,
              s,
              u,
              l,
              p,
              c,
              y,
              h,
              w,
              K
            )
          );
      }
    }
    return L;
  },
  Ua = function (t) {
    if (!t) return V;
    if (
      t.encoder !== null &&
      typeof t.encoder < "u" &&
      typeof t.encoder != "function"
    )
      throw new TypeError("Encoder has to be a function.");
    var r = t.charset || V.charset;
    if (
      typeof t.charset < "u" &&
      t.charset !== "utf-8" &&
      t.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var n = Ge.default;
    if (typeof t.format < "u") {
      if (!Pa.call(Ge.formatters, t.format))
        throw new TypeError("Unknown format option provided.");
      n = t.format;
    }
    var o = Ge.formatters[n],
      a = V.filter;
    return (
      (typeof t.filter == "function" || fe(t.filter)) && (a = t.filter),
      {
        addQueryPrefix:
          typeof t.addQueryPrefix == "boolean"
            ? t.addQueryPrefix
            : V.addQueryPrefix,
        allowDots: typeof t.allowDots > "u" ? V.allowDots : !!t.allowDots,
        charset: r,
        charsetSentinel:
          typeof t.charsetSentinel == "boolean"
            ? t.charsetSentinel
            : V.charsetSentinel,
        delimiter: typeof t.delimiter > "u" ? V.delimiter : t.delimiter,
        encode: typeof t.encode == "boolean" ? t.encode : V.encode,
        encoder: typeof t.encoder == "function" ? t.encoder : V.encoder,
        encodeValuesOnly:
          typeof t.encodeValuesOnly == "boolean"
            ? t.encodeValuesOnly
            : V.encodeValuesOnly,
        filter: a,
        format: n,
        formatter: o,
        serializeDate:
          typeof t.serializeDate == "function"
            ? t.serializeDate
            : V.serializeDate,
        skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : V.skipNulls,
        sort: typeof t.sort == "function" ? t.sort : null,
        strictNullHandling:
          typeof t.strictNullHandling == "boolean"
            ? t.strictNullHandling
            : V.strictNullHandling,
      }
    );
  },
  Fa = function (e, t) {
    var r = e,
      n = Ua(t),
      o,
      a;
    typeof n.filter == "function"
      ? ((a = n.filter), (r = a("", r)))
      : fe(n.filter) && ((a = n.filter), (o = a));
    var f = [];
    if (typeof r != "object" || r === null) return "";
    var i;
    t && t.arrayFormat in Tr
      ? (i = t.arrayFormat)
      : t && "indices" in t
      ? (i = t.indices ? "indices" : "repeat")
      : (i = "indices");
    var s = Tr[i];
    if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var u = s === "comma" && t && t.commaRoundTrip;
    o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
    for (var l = ln(), p = 0; p < o.length; ++p) {
      var c = o[p];
      (n.skipNulls && r[c] === null) ||
        cn(
          f,
          Ta(
            r[c],
            c,
            s,
            u,
            n.strictNullHandling,
            n.skipNulls,
            n.encode ? n.encoder : null,
            n.filter,
            n.sort,
            n.allowDots,
            n.serializeDate,
            n.format,
            n.formatter,
            n.encodeValuesOnly,
            n.charset,
            l
          )
        );
    }
    var y = f.join(n.delimiter),
      h = n.addQueryPrefix === !0 ? "?" : "";
    return (
      n.charsetSentinel &&
        (n.charset === "iso-8859-1"
          ? (h += "utf8=%26%2310003%3B&")
          : (h += "utf8=%E2%9C%93&")),
      y.length > 0 ? h + y : ""
    );
  },
  Ce = un,
  $t = Object.prototype.hasOwnProperty,
  Ea = Array.isArray,
  F = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: Ce.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
  },
  $a = function (e) {
    return e.replace(/&#(\d+);/g, function (t, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  },
  pn = function (e, t) {
    return e && typeof e == "string" && t.comma && e.indexOf(",") > -1
      ? e.split(",")
      : e;
  },
  Sa = "utf8=%26%2310003%3B",
  Ga = "utf8=%E2%9C%93",
  La = function (t, r) {
    var n = { __proto__: null },
      o = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
      a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
      f = o.split(r.delimiter, a),
      i = -1,
      s,
      u = r.charset;
    if (r.charsetSentinel)
      for (s = 0; s < f.length; ++s)
        f[s].indexOf("utf8=") === 0 &&
          (f[s] === Ga ? (u = "utf-8") : f[s] === Sa && (u = "iso-8859-1"),
          (i = s),
          (s = f.length));
    for (s = 0; s < f.length; ++s)
      if (s !== i) {
        var l = f[s],
          p = l.indexOf("]="),
          c = p === -1 ? l.indexOf("=") : p + 1,
          y,
          h;
        c === -1
          ? ((y = r.decoder(l, F.decoder, u, "key")),
            (h = r.strictNullHandling ? null : ""))
          : ((y = r.decoder(l.slice(0, c), F.decoder, u, "key")),
            (h = Ce.maybeMap(pn(l.slice(c + 1), r), function (w) {
              return r.decoder(w, F.decoder, u, "value");
            }))),
          h && r.interpretNumericEntities && u === "iso-8859-1" && (h = $a(h)),
          l.indexOf("[]=") > -1 && (h = Ea(h) ? [h] : h),
          $t.call(n, y) ? (n[y] = Ce.combine(n[y], h)) : (n[y] = h);
      }
    return n;
  },
  ka = function (e, t, r, n) {
    for (var o = n ? t : pn(t, r), a = e.length - 1; a >= 0; --a) {
      var f,
        i = e[a];
      if (i === "[]" && r.parseArrays) f = [].concat(o);
      else {
        f = r.plainObjects ? Object.create(null) : {};
        var s =
            i.charAt(0) === "[" && i.charAt(i.length - 1) === "]"
              ? i.slice(1, -1)
              : i,
          u = parseInt(s, 10);
        !r.parseArrays && s === ""
          ? (f = { 0: o })
          : !isNaN(u) &&
            i !== s &&
            String(u) === s &&
            u >= 0 &&
            r.parseArrays &&
            u <= r.arrayLimit
          ? ((f = []), (f[u] = o))
          : s !== "__proto__" && (f[s] = o);
      }
      o = f;
    }
    return o;
  },
  Ha = function (t, r, n, o) {
    if (t) {
      var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
        f = /(\[[^[\]]*])/,
        i = /(\[[^[\]]*])/g,
        s = n.depth > 0 && f.exec(a),
        u = s ? a.slice(0, s.index) : a,
        l = [];
      if (u) {
        if (
          !n.plainObjects &&
          $t.call(Object.prototype, u) &&
          !n.allowPrototypes
        )
          return;
        l.push(u);
      }
      for (
        var p = 0;
        n.depth > 0 && (s = i.exec(a)) !== null && p < n.depth;

      ) {
        if (
          ((p += 1),
          !n.plainObjects &&
            $t.call(Object.prototype, s[1].slice(1, -1)) &&
            !n.allowPrototypes)
        )
          return;
        l.push(s[1]);
      }
      return s && l.push("[" + a.slice(s.index) + "]"), ka(l, r, n, o);
    }
  },
  Ba = function (t) {
    if (!t) return F;
    if (
      t.decoder !== null &&
      t.decoder !== void 0 &&
      typeof t.decoder != "function"
    )
      throw new TypeError("Decoder has to be a function.");
    if (
      typeof t.charset < "u" &&
      t.charset !== "utf-8" &&
      t.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var r = typeof t.charset > "u" ? F.charset : t.charset;
    return {
      allowDots: typeof t.allowDots > "u" ? F.allowDots : !!t.allowDots,
      allowPrototypes:
        typeof t.allowPrototypes == "boolean"
          ? t.allowPrototypes
          : F.allowPrototypes,
      allowSparse:
        typeof t.allowSparse == "boolean" ? t.allowSparse : F.allowSparse,
      arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : F.arrayLimit,
      charset: r,
      charsetSentinel:
        typeof t.charsetSentinel == "boolean"
          ? t.charsetSentinel
          : F.charsetSentinel,
      comma: typeof t.comma == "boolean" ? t.comma : F.comma,
      decoder: typeof t.decoder == "function" ? t.decoder : F.decoder,
      delimiter:
        typeof t.delimiter == "string" || Ce.isRegExp(t.delimiter)
          ? t.delimiter
          : F.delimiter,
      depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : F.depth,
      ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
      interpretNumericEntities:
        typeof t.interpretNumericEntities == "boolean"
          ? t.interpretNumericEntities
          : F.interpretNumericEntities,
      parameterLimit:
        typeof t.parameterLimit == "number"
          ? t.parameterLimit
          : F.parameterLimit,
      parseArrays: t.parseArrays !== !1,
      plainObjects:
        typeof t.plainObjects == "boolean" ? t.plainObjects : F.plainObjects,
      strictNullHandling:
        typeof t.strictNullHandling == "boolean"
          ? t.strictNullHandling
          : F.strictNullHandling,
    };
  },
  Va = function (e, t) {
    var r = Ba(t);
    if (e === "" || e === null || typeof e > "u")
      return r.plainObjects ? Object.create(null) : {};
    for (
      var n = typeof e == "string" ? La(e, r) : e,
        o = r.plainObjects ? Object.create(null) : {},
        a = Object.keys(n),
        f = 0;
      f < a.length;
      ++f
    ) {
      var i = a[f],
        s = Ha(i, n[i], r, typeof e == "string");
      o = Ce.merge(o, s, r);
    }
    return r.allowSparse === !0 ? o : Ce.compact(o);
  },
  Wa = Fa,
  qa = Va,
  Za = Mt,
  za = { formats: Za, parse: qa, stringify: Wa },
  ja = Hn;
function se() {
  (this.protocol = null),
    (this.slashes = null),
    (this.auth = null),
    (this.host = null),
    (this.port = null),
    (this.hostname = null),
    (this.hash = null),
    (this.search = null),
    (this.query = null),
    (this.pathname = null),
    (this.path = null),
    (this.href = null);
}
var Xa = /^([a-z0-9.+-]+:)/i,
  Ma = /:[0-9]*$/,
  Ja = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
  Qa = [
    "<",
    ">",
    '"',
    "`",
    " ",
    "\r",
    `
`,
    "	",
  ],
  Ka = ["{", "}", "|", "\\", "^", "`"].concat(Qa),
  St = ["'"].concat(Ka),
  Fr = ["%", "/", "?", ";", "#"].concat(St),
  Er = ["/", "?", "#"],
  Da = 255,
  $r = /^[+a-z0-9A-Z_-]{0,63}$/,
  Ya = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  ei = { javascript: !0, "javascript:": !0 },
  Gt = { javascript: !0, "javascript:": !0 },
  Pe = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0,
  },
  Lt = za;
function ti(e, t, r) {
  if (e && typeof e == "object" && e instanceof se) return e;
  var n = new se();
  return n.parse(e, t, r), n;
}
se.prototype.parse = function (e, t, r) {
  if (typeof e != "string")
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var n = e.indexOf("?"),
    o = n !== -1 && n < e.indexOf("#") ? "?" : "#",
    a = e.split(o),
    f = /\\/g;
  (a[0] = a[0].replace(f, "/")), (e = a.join(o));
  var i = e;
  if (((i = i.trim()), !r && e.split("#").length === 1)) {
    var s = Ja.exec(i);
    if (s)
      return (
        (this.path = i),
        (this.href = i),
        (this.pathname = s[1]),
        s[2]
          ? ((this.search = s[2]),
            t
              ? (this.query = Lt.parse(this.search.substr(1)))
              : (this.query = this.search.substr(1)))
          : t && ((this.search = ""), (this.query = {})),
        this
      );
  }
  var u = Xa.exec(i);
  if (u) {
    u = u[0];
    var l = u.toLowerCase();
    (this.protocol = l), (i = i.substr(u.length));
  }
  if (r || u || i.match(/^\/\/[^@/]+@[^@/]+/)) {
    var p = i.substr(0, 2) === "//";
    p && !(u && Gt[u]) && ((i = i.substr(2)), (this.slashes = !0));
  }
  if (!Gt[u] && (p || (u && !Pe[u]))) {
    for (var c = -1, y = 0; y < Er.length; y++) {
      var h = i.indexOf(Er[y]);
      h !== -1 && (c === -1 || h < c) && (c = h);
    }
    var w, v;
    c === -1 ? (v = i.lastIndexOf("@")) : (v = i.lastIndexOf("@", c)),
      v !== -1 &&
        ((w = i.slice(0, v)),
        (i = i.slice(v + 1)),
        (this.auth = decodeURIComponent(w))),
      (c = -1);
    for (var y = 0; y < Fr.length; y++) {
      var h = i.indexOf(Fr[y]);
      h !== -1 && (c === -1 || h < c) && (c = h);
    }
    c === -1 && (c = i.length),
      (this.host = i.slice(0, c)),
      (i = i.slice(c)),
      this.parseHost(),
      (this.hostname = this.hostname || "");
    var x =
      this.hostname[0] === "[" &&
      this.hostname[this.hostname.length - 1] === "]";
    if (!x)
      for (var g = this.hostname.split(/\./), y = 0, d = g.length; y < d; y++) {
        var m = g[y];
        if (m && !m.match($r)) {
          for (var _ = "", C = 0, L = m.length; C < L; C++)
            m.charCodeAt(C) > 127 ? (_ += "x") : (_ += m[C]);
          if (!_.match($r)) {
            var P = g.slice(0, y),
              U = g.slice(y + 1),
              k = m.match(Ya);
            k && (P.push(k[1]), U.unshift(k[2])),
              U.length && (i = "/" + U.join(".") + i),
              (this.hostname = P.join("."));
            break;
          }
        }
      }
    this.hostname.length > Da
      ? (this.hostname = "")
      : (this.hostname = this.hostname.toLowerCase()),
      x || (this.hostname = ja.toASCII(this.hostname));
    var M = this.port ? ":" + this.port : "",
      H = this.hostname || "";
    (this.host = H + M),
      (this.href += this.host),
      x &&
        ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)),
        i[0] !== "/" && (i = "/" + i));
  }
  if (!ei[l])
    for (var y = 0, d = St.length; y < d; y++) {
      var S = St[y];
      if (i.indexOf(S) !== -1) {
        var z = encodeURIComponent(S);
        z === S && (z = escape(S)), (i = i.split(S).join(z));
      }
    }
  var K = i.indexOf("#");
  K !== -1 && ((this.hash = i.substr(K)), (i = i.slice(0, K)));
  var Z = i.indexOf("?");
  if (
    (Z !== -1
      ? ((this.search = i.substr(Z)),
        (this.query = i.substr(Z + 1)),
        t && (this.query = Lt.parse(this.query)),
        (i = i.slice(0, Z)))
      : t && ((this.search = ""), (this.query = {})),
    i && (this.pathname = i),
    Pe[l] && this.hostname && !this.pathname && (this.pathname = "/"),
    this.pathname || this.search)
  ) {
    var M = this.pathname || "",
      We = this.search || "";
    this.path = M + We;
  }
  return (this.href = this.format()), this;
};
se.prototype.format = function () {
  var e = this.auth || "";
  e && ((e = encodeURIComponent(e)), (e = e.replace(/%3A/i, ":")), (e += "@"));
  var t = this.protocol || "",
    r = this.pathname || "",
    n = this.hash || "",
    o = !1,
    a = "";
  this.host
    ? (o = e + this.host)
    : this.hostname &&
      ((o =
        e +
        (this.hostname.indexOf(":") === -1
          ? this.hostname
          : "[" + this.hostname + "]")),
      this.port && (o += ":" + this.port)),
    this.query &&
      typeof this.query == "object" &&
      Object.keys(this.query).length &&
      (a = Lt.stringify(this.query, {
        arrayFormat: "repeat",
        addQueryPrefix: !1,
      }));
  var f = this.search || (a && "?" + a) || "";
  return (
    t && t.substr(-1) !== ":" && (t += ":"),
    this.slashes || ((!t || Pe[t]) && o !== !1)
      ? ((o = "//" + (o || "")), r && r.charAt(0) !== "/" && (r = "/" + r))
      : o || (o = ""),
    n && n.charAt(0) !== "#" && (n = "#" + n),
    f && f.charAt(0) !== "?" && (f = "?" + f),
    (r = r.replace(/[?#]/g, function (i) {
      return encodeURIComponent(i);
    })),
    (f = f.replace("#", "%23")),
    t + o + r + f + n
  );
};
se.prototype.resolve = function (e) {
  return this.resolveObject(ti(e, !1, !0)).format();
};
se.prototype.resolveObject = function (e) {
  if (typeof e == "string") {
    var t = new se();
    t.parse(e, !1, !0), (e = t);
  }
  for (var r = new se(), n = Object.keys(this), o = 0; o < n.length; o++) {
    var a = n[o];
    r[a] = this[a];
  }
  if (((r.hash = e.hash), e.href === "")) return (r.href = r.format()), r;
  if (e.slashes && !e.protocol) {
    for (var f = Object.keys(e), i = 0; i < f.length; i++) {
      var s = f[i];
      s !== "protocol" && (r[s] = e[s]);
    }
    return (
      Pe[r.protocol] &&
        r.hostname &&
        !r.pathname &&
        ((r.pathname = "/"), (r.path = r.pathname)),
      (r.href = r.format()),
      r
    );
  }
  if (e.protocol && e.protocol !== r.protocol) {
    if (!Pe[e.protocol]) {
      for (var u = Object.keys(e), l = 0; l < u.length; l++) {
        var p = u[l];
        r[p] = e[p];
      }
      return (r.href = r.format()), r;
    }
    if (((r.protocol = e.protocol), !e.host && !Gt[e.protocol])) {
      for (
        var d = (e.pathname || "").split("/");
        d.length && !(e.host = d.shift());

      );
      e.host || (e.host = ""),
        e.hostname || (e.hostname = ""),
        d[0] !== "" && d.unshift(""),
        d.length < 2 && d.unshift(""),
        (r.pathname = d.join("/"));
    } else r.pathname = e.pathname;
    if (
      ((r.search = e.search),
      (r.query = e.query),
      (r.host = e.host || ""),
      (r.auth = e.auth),
      (r.hostname = e.hostname || e.host),
      (r.port = e.port),
      r.pathname || r.search)
    ) {
      var c = r.pathname || "",
        y = r.search || "";
      r.path = c + y;
    }
    return (r.slashes = r.slashes || e.slashes), (r.href = r.format()), r;
  }
  var h = r.pathname && r.pathname.charAt(0) === "/",
    w = e.host || (e.pathname && e.pathname.charAt(0) === "/"),
    v = w || h || (r.host && e.pathname),
    x = v,
    g = (r.pathname && r.pathname.split("/")) || [],
    d = (e.pathname && e.pathname.split("/")) || [],
    m = r.protocol && !Pe[r.protocol];
  if (
    (m &&
      ((r.hostname = ""),
      (r.port = null),
      r.host && (g[0] === "" ? (g[0] = r.host) : g.unshift(r.host)),
      (r.host = ""),
      e.protocol &&
        ((e.hostname = null),
        (e.port = null),
        e.host && (d[0] === "" ? (d[0] = e.host) : d.unshift(e.host)),
        (e.host = null)),
      (v = v && (d[0] === "" || g[0] === ""))),
    w)
  )
    (r.host = e.host || e.host === "" ? e.host : r.host),
      (r.hostname = e.hostname || e.hostname === "" ? e.hostname : r.hostname),
      (r.search = e.search),
      (r.query = e.query),
      (g = d);
  else if (d.length)
    g || (g = []),
      g.pop(),
      (g = g.concat(d)),
      (r.search = e.search),
      (r.query = e.query);
  else if (e.search != null) {
    if (m) {
      (r.host = g.shift()), (r.hostname = r.host);
      var _ = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
      _ &&
        ((r.auth = _.shift()), (r.hostname = _.shift()), (r.host = r.hostname));
    }
    return (
      (r.search = e.search),
      (r.query = e.query),
      (r.pathname !== null || r.search !== null) &&
        (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
      (r.href = r.format()),
      r
    );
  }
  if (!g.length)
    return (
      (r.pathname = null),
      r.search ? (r.path = "/" + r.search) : (r.path = null),
      (r.href = r.format()),
      r
    );
  for (
    var C = g.slice(-1)[0],
      L =
        ((r.host || e.host || g.length > 1) && (C === "." || C === "..")) ||
        C === "",
      P = 0,
      U = g.length;
    U >= 0;
    U--
  )
    (C = g[U]),
      C === "."
        ? g.splice(U, 1)
        : C === ".."
        ? (g.splice(U, 1), P++)
        : P && (g.splice(U, 1), P--);
  if (!v && !x) for (; P--; P) g.unshift("..");
  v && g[0] !== "" && (!g[0] || g[0].charAt(0) !== "/") && g.unshift(""),
    L && g.join("/").substr(-1) !== "/" && g.push("");
  var k = g[0] === "" || (g[0] && g[0].charAt(0) === "/");
  if (m) {
    (r.hostname = k ? "" : g.length ? g.shift() : ""), (r.host = r.hostname);
    var _ = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
    _ &&
      ((r.auth = _.shift()), (r.hostname = _.shift()), (r.host = r.hostname));
  }
  return (
    (v = v || (r.host && g.length)),
    v && !k && g.unshift(""),
    g.length > 0
      ? (r.pathname = g.join("/"))
      : ((r.pathname = null), (r.path = null)),
    (r.pathname !== null || r.search !== null) &&
      (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
    (r.auth = e.auth || r.auth),
    (r.slashes = r.slashes || e.slashes),
    (r.href = r.format()),
    r
  );
};
se.prototype.parseHost = function () {
  var e = this.host,
    t = Ma.exec(e);
  t &&
    ((t = t[0]),
    t !== ":" && (this.port = t.substr(1)),
    (e = e.substr(0, e.length - t.length))),
    e && (this.hostname = e);
};
var ri = ((e) => (
    (e[(e.WEBGL_LEGACY = 0)] = "WEBGL_LEGACY"),
    (e[(e.WEBGL = 1)] = "WEBGL"),
    (e[(e.WEBGL2 = 2)] = "WEBGL2"),
    e
  ))(ri || {}),
  ni = ((e) => (
    (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
    (e[(e.WEBGL = 1)] = "WEBGL"),
    (e[(e.CANVAS = 2)] = "CANVAS"),
    e
  ))(ni || {}),
  oi = ((e) => (
    (e[(e.COLOR = 16384)] = "COLOR"),
    (e[(e.DEPTH = 256)] = "DEPTH"),
    (e[(e.STENCIL = 1024)] = "STENCIL"),
    e
  ))(oi || {}),
  X = ((e) => (
    (e[(e.NORMAL = 0)] = "NORMAL"),
    (e[(e.ADD = 1)] = "ADD"),
    (e[(e.MULTIPLY = 2)] = "MULTIPLY"),
    (e[(e.SCREEN = 3)] = "SCREEN"),
    (e[(e.OVERLAY = 4)] = "OVERLAY"),
    (e[(e.DARKEN = 5)] = "DARKEN"),
    (e[(e.LIGHTEN = 6)] = "LIGHTEN"),
    (e[(e.COLOR_DODGE = 7)] = "COLOR_DODGE"),
    (e[(e.COLOR_BURN = 8)] = "COLOR_BURN"),
    (e[(e.HARD_LIGHT = 9)] = "HARD_LIGHT"),
    (e[(e.SOFT_LIGHT = 10)] = "SOFT_LIGHT"),
    (e[(e.DIFFERENCE = 11)] = "DIFFERENCE"),
    (e[(e.EXCLUSION = 12)] = "EXCLUSION"),
    (e[(e.HUE = 13)] = "HUE"),
    (e[(e.SATURATION = 14)] = "SATURATION"),
    (e[(e.COLOR = 15)] = "COLOR"),
    (e[(e.LUMINOSITY = 16)] = "LUMINOSITY"),
    (e[(e.NORMAL_NPM = 17)] = "NORMAL_NPM"),
    (e[(e.ADD_NPM = 18)] = "ADD_NPM"),
    (e[(e.SCREEN_NPM = 19)] = "SCREEN_NPM"),
    (e[(e.NONE = 20)] = "NONE"),
    (e[(e.SRC_OVER = 0)] = "SRC_OVER"),
    (e[(e.SRC_IN = 21)] = "SRC_IN"),
    (e[(e.SRC_OUT = 22)] = "SRC_OUT"),
    (e[(e.SRC_ATOP = 23)] = "SRC_ATOP"),
    (e[(e.DST_OVER = 24)] = "DST_OVER"),
    (e[(e.DST_IN = 25)] = "DST_IN"),
    (e[(e.DST_OUT = 26)] = "DST_OUT"),
    (e[(e.DST_ATOP = 27)] = "DST_ATOP"),
    (e[(e.ERASE = 26)] = "ERASE"),
    (e[(e.SUBTRACT = 28)] = "SUBTRACT"),
    (e[(e.XOR = 29)] = "XOR"),
    e
  ))(X || {}),
  ai = ((e) => (
    (e[(e.POINTS = 0)] = "POINTS"),
    (e[(e.LINES = 1)] = "LINES"),
    (e[(e.LINE_LOOP = 2)] = "LINE_LOOP"),
    (e[(e.LINE_STRIP = 3)] = "LINE_STRIP"),
    (e[(e.TRIANGLES = 4)] = "TRIANGLES"),
    (e[(e.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
    (e[(e.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN"),
    e
  ))(ai || {}),
  ii = ((e) => (
    (e[(e.RGBA = 6408)] = "RGBA"),
    (e[(e.RGB = 6407)] = "RGB"),
    (e[(e.RG = 33319)] = "RG"),
    (e[(e.RED = 6403)] = "RED"),
    (e[(e.RGBA_INTEGER = 36249)] = "RGBA_INTEGER"),
    (e[(e.RGB_INTEGER = 36248)] = "RGB_INTEGER"),
    (e[(e.RG_INTEGER = 33320)] = "RG_INTEGER"),
    (e[(e.RED_INTEGER = 36244)] = "RED_INTEGER"),
    (e[(e.ALPHA = 6406)] = "ALPHA"),
    (e[(e.LUMINANCE = 6409)] = "LUMINANCE"),
    (e[(e.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
    (e[(e.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
    (e[(e.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL"),
    e
  ))(ii || {}),
  fi = ((e) => (
    (e[(e.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
    (e[(e.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
    (e[(e.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
    (e[(e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
      "TEXTURE_CUBE_MAP_POSITIVE_X"),
    (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
      "TEXTURE_CUBE_MAP_NEGATIVE_X"),
    (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
      "TEXTURE_CUBE_MAP_POSITIVE_Y"),
    (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
      "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
    (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
      "TEXTURE_CUBE_MAP_POSITIVE_Z"),
    (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
      "TEXTURE_CUBE_MAP_NEGATIVE_Z"),
    e
  ))(fi || {}),
  si = ((e) => (
    (e[(e.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
    (e[(e.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
    (e[(e.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
    (e[(e.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
    (e[(e.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
    (e[(e.UNSIGNED_INT = 5125)] = "UNSIGNED_INT"),
    (e[(e.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
      "UNSIGNED_INT_10F_11F_11F_REV"),
    (e[(e.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
      "UNSIGNED_INT_2_10_10_10_REV"),
    (e[(e.UNSIGNED_INT_24_8 = 34042)] = "UNSIGNED_INT_24_8"),
    (e[(e.UNSIGNED_INT_5_9_9_9_REV = 35902)] = "UNSIGNED_INT_5_9_9_9_REV"),
    (e[(e.BYTE = 5120)] = "BYTE"),
    (e[(e.SHORT = 5122)] = "SHORT"),
    (e[(e.INT = 5124)] = "INT"),
    (e[(e.FLOAT = 5126)] = "FLOAT"),
    (e[(e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
      "FLOAT_32_UNSIGNED_INT_24_8_REV"),
    (e[(e.HALF_FLOAT = 36193)] = "HALF_FLOAT"),
    e
  ))(si || {}),
  ui = ((e) => (
    (e[(e.FLOAT = 0)] = "FLOAT"),
    (e[(e.INT = 1)] = "INT"),
    (e[(e.UINT = 2)] = "UINT"),
    e
  ))(ui || {}),
  li = ((e) => (
    (e[(e.NEAREST = 0)] = "NEAREST"), (e[(e.LINEAR = 1)] = "LINEAR"), e
  ))(li || {}),
  ci = ((e) => (
    (e[(e.CLAMP = 33071)] = "CLAMP"),
    (e[(e.REPEAT = 10497)] = "REPEAT"),
    (e[(e.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT"),
    e
  ))(ci || {}),
  pi = ((e) => (
    (e[(e.OFF = 0)] = "OFF"),
    (e[(e.POW2 = 1)] = "POW2"),
    (e[(e.ON = 2)] = "ON"),
    (e[(e.ON_MANUAL = 3)] = "ON_MANUAL"),
    e
  ))(pi || {}),
  hi = ((e) => (
    (e[(e.NPM = 0)] = "NPM"),
    (e[(e.UNPACK = 1)] = "UNPACK"),
    (e[(e.PMA = 2)] = "PMA"),
    (e[(e.NO_PREMULTIPLIED_ALPHA = 0)] = "NO_PREMULTIPLIED_ALPHA"),
    (e[(e.PREMULTIPLY_ON_UPLOAD = 1)] = "PREMULTIPLY_ON_UPLOAD"),
    (e[(e.PREMULTIPLIED_ALPHA = 2)] = "PREMULTIPLIED_ALPHA"),
    e
  ))(hi || {}),
  yi = ((e) => (
    (e[(e.NO = 0)] = "NO"),
    (e[(e.YES = 1)] = "YES"),
    (e[(e.AUTO = 2)] = "AUTO"),
    (e[(e.BLEND = 0)] = "BLEND"),
    (e[(e.CLEAR = 1)] = "CLEAR"),
    (e[(e.BLIT = 2)] = "BLIT"),
    e
  ))(yi || {}),
  di = ((e) => ((e[(e.AUTO = 0)] = "AUTO"), (e[(e.MANUAL = 1)] = "MANUAL"), e))(
    di || {}
  ),
  vi = ((e) => (
    (e.LOW = "lowp"), (e.MEDIUM = "mediump"), (e.HIGH = "highp"), e
  ))(vi || {}),
  gi = ((e) => (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.SCISSOR = 1)] = "SCISSOR"),
    (e[(e.STENCIL = 2)] = "STENCIL"),
    (e[(e.SPRITE = 3)] = "SPRITE"),
    (e[(e.COLOR = 4)] = "COLOR"),
    e
  ))(gi || {}),
  mi = ((e) => (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.LOW = 2)] = "LOW"),
    (e[(e.MEDIUM = 4)] = "MEDIUM"),
    (e[(e.HIGH = 8)] = "HIGH"),
    e
  ))(mi || {}),
  bi = ((e) => (
    (e[(e.ELEMENT_ARRAY_BUFFER = 34963)] = "ELEMENT_ARRAY_BUFFER"),
    (e[(e.ARRAY_BUFFER = 34962)] = "ARRAY_BUFFER"),
    (e[(e.UNIFORM_BUFFER = 35345)] = "UNIFORM_BUFFER"),
    e
  ))(bi || {});
let xt;
function Gi() {
  return (
    typeof xt > "u" &&
      (xt = (function () {
        const e = {
          stencil: !0,
          failIfMajorPerformanceCaveat: Fe.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT,
        };
        try {
          if (!Fe.ADAPTER.getWebGLRenderingContext()) return !1;
          const t = Fe.ADAPTER.createCanvas();
          let r =
            t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
          const n = !!r?.getContextAttributes()?.stencil;
          if (r) {
            const o = r.getExtension("WEBGL_lose_context");
            o && o.loseContext();
          }
          return (r = null), n;
        } catch {
          return !1;
        }
      })()),
    xt
  );
}
var xi = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
  ie = function (e) {
    return typeof e == "string" ? e.length > 0 : typeof e == "number";
  },
  $ = function (e, t, r) {
    return (
      t === void 0 && (t = 0),
      r === void 0 && (r = Math.pow(10, t)),
      Math.round(r * e) / r + 0
    );
  },
  Q = function (e, t, r) {
    return (
      t === void 0 && (t = 0),
      r === void 0 && (r = 1),
      e > r ? r : e > t ? e : t
    );
  },
  hn = function (e) {
    return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360;
  },
  Sr = function (e) {
    return {
      r: Q(e.r, 0, 255),
      g: Q(e.g, 0, 255),
      b: Q(e.b, 0, 255),
      a: Q(e.a),
    };
  },
  wt = function (e) {
    return { r: $(e.r), g: $(e.g), b: $(e.b), a: $(e.a, 3) };
  },
  wi = /^#([0-9a-f]{3,8})$/i,
  Je = function (e) {
    var t = e.toString(16);
    return t.length < 2 ? "0" + t : t;
  },
  yn = function (e) {
    var t = e.r,
      r = e.g,
      n = e.b,
      o = e.a,
      a = Math.max(t, r, n),
      f = a - Math.min(t, r, n),
      i = f
        ? a === t
          ? (r - n) / f
          : a === r
          ? 2 + (n - t) / f
          : 4 + (t - r) / f
        : 0;
    return {
      h: 60 * (i < 0 ? i + 6 : i),
      s: a ? (f / a) * 100 : 0,
      v: (a / 255) * 100,
      a: o,
    };
  },
  dn = function (e) {
    var t = e.h,
      r = e.s,
      n = e.v,
      o = e.a;
    (t = (t / 360) * 6), (r /= 100), (n /= 100);
    var a = Math.floor(t),
      f = n * (1 - r),
      i = n * (1 - (t - a) * r),
      s = n * (1 - (1 - t + a) * r),
      u = a % 6;
    return {
      r: 255 * [n, i, f, f, s, n][u],
      g: 255 * [s, n, n, i, f, f][u],
      b: 255 * [f, f, s, n, n, i][u],
      a: o,
    };
  },
  Gr = function (e) {
    return { h: hn(e.h), s: Q(e.s, 0, 100), l: Q(e.l, 0, 100), a: Q(e.a) };
  },
  Lr = function (e) {
    return { h: $(e.h), s: $(e.s), l: $(e.l), a: $(e.a, 3) };
  },
  kr = function (e) {
    return dn(
      ((r = (t = e).s),
      {
        h: t.h,
        s:
          (r *= ((n = t.l) < 50 ? n : 100 - n) / 100) > 0
            ? ((2 * r) / (n + r)) * 100
            : 0,
        v: n + r,
        a: t.a,
      })
    );
    var t, r, n;
  },
  Le = function (e) {
    return {
      h: (t = yn(e)).h,
      s:
        (o = ((200 - (r = t.s)) * (n = t.v)) / 100) > 0 && o < 200
          ? ((r * n) / 100 / (o <= 100 ? o : 200 - o)) * 100
          : 0,
      l: o / 2,
      a: t.a,
    };
    var t, r, n, o;
  },
  Ii =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Ai =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  _i =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  Ni =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  kt = {
    string: [
      [
        function (e) {
          var t = wi.exec(e);
          return t
            ? (e = t[1]).length <= 4
              ? {
                  r: parseInt(e[0] + e[0], 16),
                  g: parseInt(e[1] + e[1], 16),
                  b: parseInt(e[2] + e[2], 16),
                  a: e.length === 4 ? $(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
                }
              : e.length === 6 || e.length === 8
              ? {
                  r: parseInt(e.substr(0, 2), 16),
                  g: parseInt(e.substr(2, 2), 16),
                  b: parseInt(e.substr(4, 2), 16),
                  a:
                    e.length === 8
                      ? $(parseInt(e.substr(6, 2), 16) / 255, 2)
                      : 1,
                }
              : null
            : null;
        },
        "hex",
      ],
      [
        function (e) {
          var t = _i.exec(e) || Ni.exec(e);
          return t
            ? t[2] !== t[4] || t[4] !== t[6]
              ? null
              : Sr({
                  r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                  g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                  b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                  a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                })
            : null;
        },
        "rgb",
      ],
      [
        function (e) {
          var t = Ii.exec(e) || Ai.exec(e);
          if (!t) return null;
          var r,
            n,
            o = Gr({
              h:
                ((r = t[1]),
                (n = t[2]),
                n === void 0 && (n = "deg"),
                Number(r) * (xi[n] || 1)),
              s: Number(t[3]),
              l: Number(t[4]),
              a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
            });
          return kr(o);
        },
        "hsl",
      ],
    ],
    object: [
      [
        function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            o = e.a,
            a = o === void 0 ? 1 : o;
          return ie(t) && ie(r) && ie(n)
            ? Sr({ r: Number(t), g: Number(r), b: Number(n), a: Number(a) })
            : null;
        },
        "rgb",
      ],
      [
        function (e) {
          var t = e.h,
            r = e.s,
            n = e.l,
            o = e.a,
            a = o === void 0 ? 1 : o;
          if (!ie(t) || !ie(r) || !ie(n)) return null;
          var f = Gr({
            h: Number(t),
            s: Number(r),
            l: Number(n),
            a: Number(a),
          });
          return kr(f);
        },
        "hsl",
      ],
      [
        function (e) {
          var t = e.h,
            r = e.s,
            n = e.v,
            o = e.a,
            a = o === void 0 ? 1 : o;
          if (!ie(t) || !ie(r) || !ie(n)) return null;
          var f = (function (i) {
            return {
              h: hn(i.h),
              s: Q(i.s, 0, 100),
              v: Q(i.v, 0, 100),
              a: Q(i.a),
            };
          })({ h: Number(t), s: Number(r), v: Number(n), a: Number(a) });
          return dn(f);
        },
        "hsv",
      ],
    ],
  },
  Hr = function (e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r][0](e);
      if (n) return [n, t[r][1]];
    }
    return [null, void 0];
  },
  Pi = function (e) {
    return typeof e == "string"
      ? Hr(e.trim(), kt.string)
      : typeof e == "object" && e !== null
      ? Hr(e, kt.object)
      : [null, void 0];
  },
  It = function (e, t) {
    var r = Le(e);
    return { h: r.h, s: Q(r.s + 100 * t, 0, 100), l: r.l, a: r.a };
  },
  At = function (e) {
    return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255;
  },
  Br = function (e, t) {
    var r = Le(e);
    return { h: r.h, s: r.s, l: Q(r.l + 100 * t, 0, 100), a: r.a };
  },
  Ht = (function () {
    function e(t) {
      (this.parsed = Pi(t)[0]),
        (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 });
    }
    return (
      (e.prototype.isValid = function () {
        return this.parsed !== null;
      }),
      (e.prototype.brightness = function () {
        return $(At(this.rgba), 2);
      }),
      (e.prototype.isDark = function () {
        return At(this.rgba) < 0.5;
      }),
      (e.prototype.isLight = function () {
        return At(this.rgba) >= 0.5;
      }),
      (e.prototype.toHex = function () {
        return (
          (t = wt(this.rgba)),
          (r = t.r),
          (n = t.g),
          (o = t.b),
          (f = (a = t.a) < 1 ? Je($(255 * a)) : ""),
          "#" + Je(r) + Je(n) + Je(o) + f
        );
        var t, r, n, o, a, f;
      }),
      (e.prototype.toRgb = function () {
        return wt(this.rgba);
      }),
      (e.prototype.toRgbString = function () {
        return (
          (t = wt(this.rgba)),
          (r = t.r),
          (n = t.g),
          (o = t.b),
          (a = t.a) < 1
            ? "rgba(" + r + ", " + n + ", " + o + ", " + a + ")"
            : "rgb(" + r + ", " + n + ", " + o + ")"
        );
        var t, r, n, o, a;
      }),
      (e.prototype.toHsl = function () {
        return Lr(Le(this.rgba));
      }),
      (e.prototype.toHslString = function () {
        return (
          (t = Lr(Le(this.rgba))),
          (r = t.h),
          (n = t.s),
          (o = t.l),
          (a = t.a) < 1
            ? "hsla(" + r + ", " + n + "%, " + o + "%, " + a + ")"
            : "hsl(" + r + ", " + n + "%, " + o + "%)"
        );
        var t, r, n, o, a;
      }),
      (e.prototype.toHsv = function () {
        return (
          (t = yn(this.rgba)), { h: $(t.h), s: $(t.s), v: $(t.v), a: $(t.a, 3) }
        );
        var t;
      }),
      (e.prototype.invert = function () {
        return re({
          r: 255 - (t = this.rgba).r,
          g: 255 - t.g,
          b: 255 - t.b,
          a: t.a,
        });
        var t;
      }),
      (e.prototype.saturate = function (t) {
        return t === void 0 && (t = 0.1), re(It(this.rgba, t));
      }),
      (e.prototype.desaturate = function (t) {
        return t === void 0 && (t = 0.1), re(It(this.rgba, -t));
      }),
      (e.prototype.grayscale = function () {
        return re(It(this.rgba, -1));
      }),
      (e.prototype.lighten = function (t) {
        return t === void 0 && (t = 0.1), re(Br(this.rgba, t));
      }),
      (e.prototype.darken = function (t) {
        return t === void 0 && (t = 0.1), re(Br(this.rgba, -t));
      }),
      (e.prototype.rotate = function (t) {
        return t === void 0 && (t = 15), this.hue(this.hue() + t);
      }),
      (e.prototype.alpha = function (t) {
        return typeof t == "number"
          ? re({ r: (r = this.rgba).r, g: r.g, b: r.b, a: t })
          : $(this.rgba.a, 3);
        var r;
      }),
      (e.prototype.hue = function (t) {
        var r = Le(this.rgba);
        return typeof t == "number"
          ? re({ h: t, s: r.s, l: r.l, a: r.a })
          : $(r.h);
      }),
      (e.prototype.isEqual = function (t) {
        return this.toHex() === re(t).toHex();
      }),
      e
    );
  })(),
  re = function (e) {
    return e instanceof Ht ? e : new Ht(e);
  },
  Vr = [],
  Ri = function (e) {
    e.forEach(function (t) {
      Vr.indexOf(t) < 0 && (t(Ht, kt), Vr.push(t));
    });
  };
function Oi(e, t) {
  var r = {
      white: "#ffffff",
      bisque: "#ffe4c4",
      blue: "#0000ff",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      azure: "#f0ffff",
      whitesmoke: "#f5f5f5",
      papayawhip: "#ffefd5",
      plum: "#dda0dd",
      blanchedalmond: "#ffebcd",
      black: "#000000",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gainsboro: "#dcdcdc",
      cornsilk: "#fff8dc",
      cornflowerblue: "#6495ed",
      burlywood: "#deb887",
      aquamarine: "#7fffd4",
      beige: "#f5f5dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkkhaki: "#bdb76b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      peachpuff: "#ffdab9",
      darkmagenta: "#8b008b",
      darkred: "#8b0000",
      darkorchid: "#9932cc",
      darkorange: "#ff8c00",
      darkslateblue: "#483d8b",
      gray: "#808080",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      wheat: "#f5deb3",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      ghostwhite: "#f8f8ff",
      darkviolet: "#9400d3",
      magenta: "#ff00ff",
      green: "#008000",
      dodgerblue: "#1e90ff",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      blueviolet: "#8a2be2",
      forestgreen: "#228b22",
      lawngreen: "#7cfc00",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      fuchsia: "#ff00ff",
      brown: "#a52a2a",
      maroon: "#800000",
      mediumblue: "#0000cd",
      lightcoral: "#f08080",
      darkturquoise: "#00ced1",
      lightcyan: "#e0ffff",
      ivory: "#fffff0",
      lightyellow: "#ffffe0",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      linen: "#faf0e6",
      mediumaquamarine: "#66cdaa",
      lemonchiffon: "#fffacd",
      lime: "#00ff00",
      khaki: "#f0e68c",
      mediumseagreen: "#3cb371",
      limegreen: "#32cd32",
      mediumspringgreen: "#00fa9a",
      lightskyblue: "#87cefa",
      lightblue: "#add8e6",
      midnightblue: "#191970",
      lightpink: "#ffb6c1",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      mintcream: "#f5fffa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      navajowhite: "#ffdead",
      navy: "#000080",
      mediumvioletred: "#c71585",
      powderblue: "#b0e0e6",
      palegoldenrod: "#eee8aa",
      oldlace: "#fdf5e6",
      paleturquoise: "#afeeee",
      mediumturquoise: "#48d1cc",
      mediumorchid: "#ba55d3",
      rebeccapurple: "#663399",
      lightsteelblue: "#b0c4de",
      mediumslateblue: "#7b68ee",
      thistle: "#d8bfd8",
      tan: "#d2b48c",
      orchid: "#da70d6",
      mediumpurple: "#9370db",
      purple: "#800080",
      pink: "#ffc0cb",
      skyblue: "#87ceeb",
      springgreen: "#00ff7f",
      palegreen: "#98fb98",
      red: "#ff0000",
      yellow: "#ffff00",
      slateblue: "#6a5acd",
      lavenderblush: "#fff0f5",
      peru: "#cd853f",
      palevioletred: "#db7093",
      violet: "#ee82ee",
      teal: "#008080",
      slategray: "#708090",
      slategrey: "#708090",
      aliceblue: "#f0f8ff",
      darkseagreen: "#8fbc8f",
      darkolivegreen: "#556b2f",
      greenyellow: "#adff2f",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      tomato: "#ff6347",
      silver: "#c0c0c0",
      sienna: "#a0522d",
      lavender: "#e6e6fa",
      lightgreen: "#90ee90",
      orange: "#ffa500",
      orangered: "#ff4500",
      steelblue: "#4682b4",
      royalblue: "#4169e1",
      turquoise: "#40e0d0",
      yellowgreen: "#9acd32",
      salmon: "#fa8072",
      saddlebrown: "#8b4513",
      sandybrown: "#f4a460",
      rosybrown: "#bc8f8f",
      darksalmon: "#e9967a",
      lightgoldenrodyellow: "#fafad2",
      snow: "#fffafa",
      lightgrey: "#d3d3d3",
      lightgray: "#d3d3d3",
      dimgray: "#696969",
      dimgrey: "#696969",
      olivedrab: "#6b8e23",
      olive: "#808000",
    },
    n = {};
  for (var o in r) n[r[o]] = o;
  var a = {};
  (e.prototype.toName = function (f) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
      return "transparent";
    var i,
      s,
      u = n[this.toHex()];
    if (u) return u;
    if (f?.closest) {
      var l = this.toRgb(),
        p = 1 / 0,
        c = "black";
      if (!a.length) for (var y in r) a[y] = new e(r[y]).toRgb();
      for (var h in r) {
        var w =
          ((i = l),
          (s = a[h]),
          Math.pow(i.r - s.r, 2) +
            Math.pow(i.g - s.g, 2) +
            Math.pow(i.b - s.b, 2));
        w < p && ((p = w), (c = h));
      }
      return c;
    }
  }),
    t.string.push([
      function (f) {
        var i = f.toLowerCase(),
          s = i === "transparent" ? "#0000" : r[i];
        return s ? new e(s).toRgb() : null;
      },
      "name",
    ]);
}
Ri([Oi]);
const Ae = class Ye {
  constructor(t = 16777215) {
    (this._value = null),
      (this._components = new Float32Array(4)),
      this._components.fill(1),
      (this._int = 16777215),
      (this.value = t);
  }
  get red() {
    return this._components[0];
  }
  get green() {
    return this._components[1];
  }
  get blue() {
    return this._components[2];
  }
  get alpha() {
    return this._components[3];
  }
  setValue(t) {
    return (this.value = t), this;
  }
  set value(t) {
    if (t instanceof Ye)
      (this._value = this.cloneSource(t._value)),
        (this._int = t._int),
        this._components.set(t._components);
    else {
      if (t === null) throw new Error("Cannot set PIXI.Color#value to null");
      (this._value === null || !this.isSourceEqual(this._value, t)) &&
        (this.normalize(t), (this._value = this.cloneSource(t)));
    }
  }
  get value() {
    return this._value;
  }
  cloneSource(t) {
    return typeof t == "string" ||
      typeof t == "number" ||
      t instanceof Number ||
      t === null
      ? t
      : Array.isArray(t) || ArrayBuffer.isView(t)
      ? t.slice(0)
      : typeof t == "object" && t !== null
      ? { ...t }
      : t;
  }
  isSourceEqual(t, r) {
    const n = typeof t;
    if (n !== typeof r) return !1;
    if (n === "number" || n === "string" || t instanceof Number) return t === r;
    if (
      (Array.isArray(t) && Array.isArray(r)) ||
      (ArrayBuffer.isView(t) && ArrayBuffer.isView(r))
    )
      return t.length !== r.length ? !1 : t.every((o, a) => o === r[a]);
    if (t !== null && r !== null) {
      const o = Object.keys(t),
        a = Object.keys(r);
      return o.length !== a.length ? !1 : o.every((f) => t[f] === r[f]);
    }
    return t === r;
  }
  toRgba() {
    const [t, r, n, o] = this._components;
    return { r: t, g: r, b: n, a: o };
  }
  toRgb() {
    const [t, r, n] = this._components;
    return { r: t, g: r, b: n };
  }
  toRgbaString() {
    const [t, r, n] = this.toUint8RgbArray();
    return `rgba(${t},${r},${n},${this.alpha})`;
  }
  toUint8RgbArray(t) {
    const [r, n, o] = this._components;
    return (
      (t = t ?? []),
      (t[0] = Math.round(r * 255)),
      (t[1] = Math.round(n * 255)),
      (t[2] = Math.round(o * 255)),
      t
    );
  }
  toRgbArray(t) {
    t = t ?? [];
    const [r, n, o] = this._components;
    return (t[0] = r), (t[1] = n), (t[2] = o), t;
  }
  toNumber() {
    return this._int;
  }
  toLittleEndianNumber() {
    const t = this._int;
    return (t >> 16) + (t & 65280) + ((t & 255) << 16);
  }
  multiply(t) {
    const [r, n, o, a] = Ye.temp.setValue(t)._components;
    return (
      (this._components[0] *= r),
      (this._components[1] *= n),
      (this._components[2] *= o),
      (this._components[3] *= a),
      this.refreshInt(),
      (this._value = null),
      this
    );
  }
  premultiply(t, r = !0) {
    return (
      r &&
        ((this._components[0] *= t),
        (this._components[1] *= t),
        (this._components[2] *= t)),
      (this._components[3] = t),
      this.refreshInt(),
      (this._value = null),
      this
    );
  }
  toPremultiplied(t, r = !0) {
    if (t === 1) return (255 << 24) + this._int;
    if (t === 0) return r ? 0 : this._int;
    let n = (this._int >> 16) & 255,
      o = (this._int >> 8) & 255,
      a = this._int & 255;
    return (
      r &&
        ((n = (n * t + 0.5) | 0),
        (o = (o * t + 0.5) | 0),
        (a = (a * t + 0.5) | 0)),
      ((t * 255) << 24) + (n << 16) + (o << 8) + a
    );
  }
  toHex() {
    const t = this._int.toString(16);
    return `#${"000000".substring(0, 6 - t.length) + t}`;
  }
  toHexa() {
    const t = Math.round(this._components[3] * 255).toString(16);
    return this.toHex() + "00".substring(0, 2 - t.length) + t;
  }
  setAlpha(t) {
    return (this._components[3] = this._clamp(t)), this;
  }
  round(t) {
    const [r, n, o] = this._components;
    return (
      (this._components[0] = Math.round(r * t) / t),
      (this._components[1] = Math.round(n * t) / t),
      (this._components[2] = Math.round(o * t) / t),
      this.refreshInt(),
      (this._value = null),
      this
    );
  }
  toArray(t) {
    t = t ?? [];
    const [r, n, o, a] = this._components;
    return (t[0] = r), (t[1] = n), (t[2] = o), (t[3] = a), t;
  }
  normalize(t) {
    let r, n, o, a;
    if (
      (typeof t == "number" || t instanceof Number) &&
      t >= 0 &&
      t <= 16777215
    ) {
      const f = t;
      (r = ((f >> 16) & 255) / 255),
        (n = ((f >> 8) & 255) / 255),
        (o = (f & 255) / 255),
        (a = 1);
    } else if (
      (Array.isArray(t) || t instanceof Float32Array) &&
      t.length >= 3 &&
      t.length <= 4
    )
      (t = this._clamp(t)), ([r, n, o, a = 1] = t);
    else if (
      (t instanceof Uint8Array || t instanceof Uint8ClampedArray) &&
      t.length >= 3 &&
      t.length <= 4
    )
      (t = this._clamp(t, 0, 255)),
        ([r, n, o, a = 255] = t),
        (r /= 255),
        (n /= 255),
        (o /= 255),
        (a /= 255);
    else if (typeof t == "string" || typeof t == "object") {
      if (typeof t == "string") {
        const i = Ye.HEX_PATTERN.exec(t);
        i && (t = `#${i[2]}`);
      }
      const f = re(t);
      f.isValid() &&
        (({ r, g: n, b: o, a } = f.rgba), (r /= 255), (n /= 255), (o /= 255));
    }
    if (r !== void 0)
      (this._components[0] = r),
        (this._components[1] = n),
        (this._components[2] = o),
        (this._components[3] = a),
        this.refreshInt();
    else throw new Error(`Unable to convert color ${t}`);
  }
  refreshInt() {
    this._clamp(this._components);
    const [t, r, n] = this._components;
    this._int = ((t * 255) << 16) + ((r * 255) << 8) + ((n * 255) | 0);
  }
  _clamp(t, r = 0, n = 1) {
    return typeof t == "number"
      ? Math.min(Math.max(t, r), n)
      : (t.forEach((o, a) => {
          t[a] = Math.min(Math.max(o, r), n);
        }),
        t);
  }
};
(Ae.shared = new Ae()),
  (Ae.temp = new Ae()),
  (Ae.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i);
let Li = Ae;
function Ci() {
  const e = [],
    t = [];
  for (let n = 0; n < 32; n++) (e[n] = n), (t[n] = n);
  (e[X.NORMAL_NPM] = X.NORMAL),
    (e[X.ADD_NPM] = X.ADD),
    (e[X.SCREEN_NPM] = X.SCREEN),
    (t[X.NORMAL] = X.NORMAL_NPM),
    (t[X.ADD] = X.ADD_NPM),
    (t[X.SCREEN] = X.SCREEN_NPM);
  const r = [];
  return r.push(t), r.push(e), r;
}
const Ti = Ci();
function ki(e, t) {
  return Ti[t ? 1 : 0][e];
}
const Bt = class {
  constructor(e, t, r, n) {
    (this.left = e), (this.top = t), (this.right = r), (this.bottom = n);
  }
  get width() {
    return this.right - this.left;
  }
  get height() {
    return this.bottom - this.top;
  }
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
};
Bt.EMPTY = new Bt(0, 0, 0, 0);
let Hi = Bt;
export {
  hi as A,
  Hi as B,
  Li as C,
  ai as D,
  $i as E,
  ii as F,
  di as G,
  pi as M,
  vi as P,
  ni as R,
  li as S,
  fi as T,
  ci as W,
  X as a,
  si as b,
  bi as c,
  ri as d,
  Ei as e,
  mi as f,
  yi as g,
  oi as h,
  Gi as i,
  gi as j,
  ui as k,
  Si as l,
  ki as m,
  Ti as p,
  Fe as s,
};
//# sourceMappingURL=BoundingBox.de364d8e.js.map
